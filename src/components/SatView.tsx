import React, { useState, useEffect, useMemo } from 'react';
import { 
  DomainId, 
  Difficulty, 
  Question, 
  ExamResult 
} from '../sat/types';
import { 
  DOMAINS, 
  COURSE_UNITS, 
  ALL_QUESTIONS 
} from '../sat/data/satQuestions';
import { SAT_EXAM_MODELS, SAT_MATH_EXAM_MODELS, SAT_RW_EXAM_MODELS, getSatModelById } from '../sat/data/models';
import { mistakesService } from '../services/mistakes/mistakesService';
import { QuestionItem, QuestionOption } from '../eot/types';
import { QuestionCard } from '../sat/components/QuestionCard';
import { ResultsPanel } from '../sat/components/ResultsPanel';
import { FormulaCheatsheet } from '../sat/components/FormulaCheatsheet';
import { Header } from '../sat/components/Header';
import { 
  Award, 
  Play, 
  Layers, 
  BookOpen, 
  Clock, 
  Search, 
  Bookmark, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles,
  Check,
  Lock,
  FileCheck
} from 'lucide-react';

interface SatViewProps {
  onSwitchToCurriculum?: () => void;
  onSwitchToEot?: () => void;
}

type SatSubjectId = 'math' | 'reading-writing';

interface SatSubject {
  id: SatSubjectId;
  nameEn: string;
  nameAr: string;
  icon: string;
  status: 'available' | 'coming_soon';
}

const SAT_SUBJECTS: SatSubject[] = [
  { id: 'math', nameEn: 'SAT Mathematics', nameAr: 'رياضيات السات', icon: '📐', status: 'available' },
  { id: 'reading-writing', nameEn: 'SAT Reading & Writing', nameAr: 'اللغة الإنجليزية (القراءة والكتابة)', icon: '📖', status: 'available' },
];

export const SatView: React.FC<SatViewProps> = ({
  onSwitchToCurriculum,
  onSwitchToEot
}) => {
  // Default language is English
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  // Selected SAT Subject
  const [selectedSubject, setSelectedSubject] = useState<SatSubjectId>('math');

  // Selected Exam Model (Model 1, Model 2, Model 3, or All Bank)
  const [selectedModelId, setSelectedModelId] = useState<string>('model-1');

  // Active Model Questions
  const currentModel = useMemo(() => getSatModelById(selectedModelId), [selectedModelId]);
  const activeQuestions = currentModel.questions;

  // Navigation View State (desmos & exporter removed from top header)
  const [activeTab, setActiveTab] = useState<'practice' | 'exam' | 'formulas'>('practice');

  // Filter States
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | Difficulty>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);

  // Practice Mode State
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number | string>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('sat_bookmarked_ids');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Exam Mode State
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examAnswers, setExamAnswers] = useState<Record<number, number | string>>({});
  const [examIndex, setExamIndex] = useState<number>(0);
  const [examTimerSeconds, setExamTimerSeconds] = useState<number>(35 * 60); // 35 Mins
  const [studentName, setStudentName] = useState<string>('');
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Bookmark Persistence
  useEffect(() => {
    try {
      localStorage.setItem('sat_bookmarked_ids', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const handleToggleBookmark = (qId: number) => {
    setBookmarkedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  // Practice Questions Filter
  const filteredQuestions = useMemo(() => {
    return activeQuestions.filter((q) => {
      if (selectedDomain !== 'all' && q.domain !== selectedDomain) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      if (onlyBookmarked && !bookmarkedIds.includes(q.id)) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const textEn = q.questionEn.toLowerCase();
        const textAr = q.questionAr.toLowerCase();
        const eqStr = q.equationStr ? q.equationStr.toLowerCase() : '';
        if (!textEn.includes(query) && !textAr.includes(query) && !eqStr.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [activeQuestions, selectedDomain, selectedDifficulty, onlyBookmarked, bookmarkedIds, searchQuery]);

  // Reset practice index when model changes
  useEffect(() => {
    setPracticeIndex(0);
  }, [selectedModelId]);

  // Keep practice index bounded
  useEffect(() => {
    if (practiceIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setPracticeIndex(0);
    }
  }, [filteredQuestions, practiceIndex]);

  // Active Exam Countdown Timer Engine
  useEffect(() => {
    let interval: any = null;
    if (isExamRunning && examTimerSeconds > 0) {
      interval = setInterval(() => {
        setExamTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (isExamRunning && examTimerSeconds <= 0) {
      handleFinishExam();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamRunning, examTimerSeconds]);

  // Format seconds to MM:SS
  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Start Exam (Full Model or 30 sample)
  const handleStartExam = () => {
    let pool = activeQuestions;
    if (selectedDomain !== 'all') {
      pool = activeQuestions.filter((q) => q.domain === selectedDomain);
    }

    let selected: Question[] = [];
    let timerMinutes = 35;

    if (selectedModelId !== 'all-bank' && selectedDomain === 'all') {
      // Use the full model (54 questions, 70 mins)
      selected = [...pool];
      timerMinutes = 70;
    } else {
      // Sample 30 questions (35 mins)
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      selected = shuffled.slice(0, 30);
      timerMinutes = 35;
    }

    setExamQuestions(selected);
    setExamAnswers({});
    setExamIndex(0);
    setExamTimerSeconds(timerMinutes * 60);
    setExamResult(null);
    setIsExamRunning(true);
  };

  // Finish Exam & Calculate Score & Save Mistakes to Notebook
  const handleFinishExam = () => {
    setIsExamRunning(false);

    let correctCount = 0;
    const total = examQuestions.length;
    const domainScores: Record<DomainId, { correct: number; total: number }> = {
      'algebra': { correct: 0, total: 0 },
      'advanced-math': { correct: 0, total: 0 },
      'data-analysis': { correct: 0, total: 0 },
      'geometry-trig': { correct: 0, total: 0 }
    };

    examQuestions.forEach((q) => {
      const uAns = examAnswers[q.id];
      const isCorrect = uAns !== undefined && String(uAns).trim() === String(q.correctAnswer).trim();

      if (domainScores[q.domain]) {
        domainScores[q.domain].total += 1;
        if (isCorrect) domainScores[q.domain].correct += 1;
      }

      if (isCorrect) {
        correctCount += 1;
      } else {
        // Automatically link mistakes to mistakes notebook
        let optionsList: QuestionOption[] | undefined = undefined;
        if (q.options) {
          optionsList = q.options.map((opt, idx) => ({
            id: String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D',
            text: lang === 'ar' ? opt.textAr : opt.textEn
          }));
        }

        let correctAnsStr = 'A';
        if (typeof q.correctAnswer === 'number') {
          correctAnsStr = String.fromCharCode(65 + q.correctAnswer);
        } else if (q.correctAnswer !== undefined) {
          correctAnsStr = String(q.correctAnswer);
        }

        let studentAnsStr = '';
        if (typeof uAns === 'number') {
          studentAnsStr = String.fromCharCode(65 + uAns);
        } else if (uAns !== undefined) {
          studentAnsStr = String(uAns);
        }

        const questionItem: QuestionItem = {
          id: `SAT-${q.id}`,
          qNumber: q.id,
          title: `SAT Math - ${q.domain}`,
          titleAr: `SAT رياضيات - ${q.domain}`,
          learningOutcome: q.domain,
          learningOutcomeAr: q.domain,
          unit: 1,
          lesson: q.category || 'SAT Math',
          page: 1,
          exerciseRef: `SAT Model Question #${q.id}`,
          type: q.isGridIn ? 'paper' : 'mcq',
          questionText: q.questionEn,
          questionTextAr: q.questionAr,
          options: optionsList,
          correctAnswer: correctAnsStr,
          solutionSteps: q.solutionStepsAr || [q.explanationAr],
          finalAnswer: correctAnsStr
        };

        mistakesService.addMistake(questionItem, studentAnsStr, 'SAT Math (رياضيات السات)', 'SAT', 'Digital SAT');
      }
    });

    const percentage = Math.round((correctCount / (total || 1)) * 100);
    
    // SAT Math scaled score algorithm (200 to 800)
    let satScaledScore = 200 + Math.round((correctCount / (total || 1)) * 600);
    satScaledScore = Math.min(800, Math.max(200, satScaledScore));

    const totalSecondsAllocated = examQuestions.length > 35 ? 70 * 60 : 35 * 60;
    const timeSpent = Math.max(0, totalSecondsAllocated - examTimerSeconds);

    const result: ExamResult = {
      score: correctCount,
      total,
      percentage,
      satScaledScore,
      timeSpentSeconds: timeSpent,
      domainScores,
      userAnswers: examAnswers,
      date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US'),
      studentName: studentName.trim() || (lang === 'ar' ? 'طالب سات' : 'SAT Student'),
      studentClass: 'Digital SAT'
    };

    setExamResult(result);
  };

  const currentPracticeQuestion = filteredQuestions[practiceIndex];

  return (
    <div 
      className={`fade-in space-y-6 w-full max-w-full overflow-x-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      
      {/* Top Banner & Platform Switchers */}
      <div className="gradient-primary rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-sm">
                🎓 Digital SAT Suite (200 - 800)
              </span>
              <span className="bg-white/20 text-white border border-white/20 text-xs font-extrabold px-3 py-1 rounded-full">
                College Board Aligned • Interactive Practice & Timed Exams
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-amber-300 mb-2 leading-tight">
              {lang === 'ar' ? 'قسم اختبارات وتدريبات السات (SAT Prep)' : 'Digital SAT Exam & Practice Center'}
            </h2>
            <p className="text-xs md:text-sm text-slate-100 opacity-90 max-w-2xl leading-relaxed font-medium">
              {lang === 'ar' 
                ? 'منصة شاملة لاختبارات السات الرقمي مع التقييم الفوري ومحاكاة الوقت وتوزيع الدرجات بأسلوب الكوليدج بورد.'
                : 'Comprehensive Digital SAT preparation suite featuring full question banks, College Board scaled scoring (200-800), and timed exam simulations.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onSwitchToCurriculum && (
              <button
                onClick={onSwitchToCurriculum}
                className="px-4 py-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-2xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>📚 {lang === 'ar' ? 'قسم المناهج' : 'Curriculum'}</span>
              </button>
            )}
            {onSwitchToEot && (
              <button
                onClick={onSwitchToEot}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-2xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>📜 {lang === 'ar' ? 'قسم الهياكل EOT' : 'EOT Specs'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SAT Subjects Selector Bar (Available vs Coming Soon) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-sm space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-black text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <span>📚</span>
            <span>{lang === 'ar' ? 'اختر مادة السات (SAT Subjects):' : 'Select SAT Subject:'}</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {SAT_SUBJECTS.map((sub) => {
            const isSelected = selectedSubject === sub.id;
            const isAvailable = sub.status === 'available';

            return (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedSubject(sub.id);
                  setSelectedModelId(sub.id === 'math' ? 'model-1' : 'rw-model-1');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-2 border cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md ring-2 ring-indigo-500/30'
                    : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                <span className="text-sm">{sub.icon}</span>
                <span>{lang === 'ar' ? sub.nameAr : sub.nameEn}</span>
                
                {isAvailable ? (
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-400 text-slate-950' : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {lang === 'ar' ? 'متاح' : 'Available'}
                  </span>
                ) : (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                  }`}>
                    {lang === 'ar' ? 'سيتوفر قريباً' : 'Coming Soon'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* SAT Models Selector Bar (Multiple Models per Subject) */}
      <div className="bg-slate-900 border border-indigo-900/60 rounded-2xl p-4 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span>
              {selectedSubject === 'math'
                ? (lang === 'ar' ? 'نماذج امتحانات الرياضيات المتاحة (Math Models):' : 'Available SAT Math Models:')
                : (lang === 'ar' ? 'نماذج امتحانات اللغة الإنجليزية المتاحة (Reading & Writing Models):' : 'Available SAT Reading & Writing Models:')}
            </span>
          </span>
          <span className="text-[11px] text-slate-400 font-bold">
            {lang === 'ar' ? `النموذج النشط: ${currentModel.titleAr}` : `Active: ${currentModel.titleEn}`}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {(selectedSubject === 'math' ? SAT_MATH_EXAM_MODELS : SAT_RW_EXAM_MODELS).map((model) => {
            const isActive = selectedModelId === model.id;

            return (
              <button
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`p-3.5 rounded-xl border text-right font-medium text-xs transition flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-indigo-950 to-slate-900 border-indigo-500 text-white shadow-lg ring-2 ring-indigo-500/40'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div className="space-y-1 mb-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-amber-300 text-sm">
                      {lang === 'ar' ? model.titleAr : model.titleEn}
                    </span>
                    {model.badgeAr && (
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md text-[10px] font-bold">
                        {lang === 'ar' ? model.badgeAr : model.badgeEn}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                    {lang === 'ar' ? model.descriptionAr : model.descriptionEn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px]">
                  <span className="text-indigo-400 font-bold">
                    {lang === 'ar' ? `${model.questions.length} سؤالاً` : `${model.questions.length} Questions`}
                  </span>
                  <span className={`font-black ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {isActive ? (lang === 'ar' ? '✓ المحدد حالياً' : '✓ Active') : (lang === 'ar' ? 'اختيار النموذج' : 'Select')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <>
        {/* Header Tabs (Practice / Exam / Formulas) */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            lang={lang}
            setLang={setLang}
            examTimerSeconds={examTimerSeconds}
            isExamRunning={isExamRunning}
          />

          {/* Views based on activeTab */}
          <div className="pt-2">
            
            {/* TAB 1: PRACTICE BANK */}
            {activeTab === 'practice' && (
              <div className="space-y-6">
                {/* Filter & Search Bar */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    
                    {/* Search Bar */}
                    <div className="relative flex-1 min-w-[240px]">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={lang === 'ar' ? 'بحث في الأسئلة أو المعادلات...' : 'Search questions or equations...'}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      {/* Difficulty Filter */}
                      <select
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value as any)}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-xl px-3 py-2 font-bold focus:outline-none"
                      >
                        <option value="all">{lang === 'ar' ? 'جميع المستويات' : 'All Difficulties'}</option>
                        <option value="Easy">{lang === 'ar' ? 'سهل (Easy)' : 'Easy'}</option>
                        <option value="Medium">{lang === 'ar' ? 'متوسط (Medium)' : 'Medium'}</option>
                        <option value="Hard">{lang === 'ar' ? 'صعب (Hard)' : 'Hard'}</option>
                      </select>

                      {/* Bookmark Toggle */}
                      <button
                        onClick={() => setOnlyBookmarked(!onlyBookmarked)}
                        className={`px-3 py-2 rounded-xl font-bold transition flex items-center gap-1.5 border ${
                          onlyBookmarked
                            ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40'
                            : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? `المحفوظات (${bookmarkedIds.length})` : `Saved (${bookmarkedIds.length})`}</span>
                      </button>
                    </div>

                  </div>

                  {/* Filter Counter Badge */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span>
                      {lang === 'ar' 
                        ? `عرض ${filteredQuestions.length} سؤال من إجمالي ${activeQuestions.length} (في ${currentModel.titleAr})` 
                        : `Showing ${filteredQuestions.length} of ${activeQuestions.length} questions in ${currentModel.titleEn}`}
                    </span>
                    {filteredQuestions.length > 0 && (
                      <span>
                        {lang === 'ar' ? `السؤال ${practiceIndex + 1} من ${filteredQuestions.length}` : `Question ${practiceIndex + 1} of ${filteredQuestions.length}`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Card Display */}
                {filteredQuestions.length > 0 && currentPracticeQuestion ? (
                  <div className="space-y-4">
                    <QuestionCard
                      question={currentPracticeQuestion}
                      questionIndex={practiceIndex}
                      totalQuestions={filteredQuestions.length}
                      userAnswer={practiceAnswers[currentPracticeQuestion.id]}
                      onSelectAnswer={(qId, ans) =>
                        setPracticeAnswers((prev) => ({ ...prev, [qId]: ans }))
                      }
                      lang={lang}
                      isBookmarked={bookmarkedIds.includes(currentPracticeQuestion.id)}
                      onToggleBookmark={handleToggleBookmark}
                      showInstantFeedback={true}
                    />

                    {/* Practice Navigation Controls */}
                    <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl">
                      <button
                        disabled={practiceIndex === 0}
                        onClick={() => setPracticeIndex((prev) => Math.max(0, prev - 1))}
                        className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 font-extrabold text-xs text-slate-800 dark:text-white transition flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>{lang === 'ar' ? 'السؤال السابق' : 'Previous'}</span>
                      </button>

                      {/* Question Dots */}
                      <div className="flex items-center gap-1 overflow-x-auto max-w-xs sm:max-w-md py-1">
                        {filteredQuestions.map((q, idx) => {
                          const isAnswered = practiceAnswers[q.id] !== undefined;
                          const isCurrent = idx === practiceIndex;
                          return (
                            <button
                              key={q.id}
                              onClick={() => setPracticeIndex(idx)}
                              className={`w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition ${
                                isCurrent
                                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-500'
                                  : isAnswered
                                  ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        disabled={practiceIndex >= filteredQuestions.length - 1}
                        onClick={() => setPracticeIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-extrabold text-xs transition flex items-center gap-1 cursor-pointer shadow"
                      >
                        <span>{lang === 'ar' ? 'السؤال التالي' : 'Next'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-3">
                    <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                      {lang === 'ar' ? 'لا توجد أسئلة تطابق معايير التصفية' : 'No questions match the current filter.'}
                    </h4>
                    <button
                      onClick={() => {
                        setSelectedDomain('all');
                        setSelectedDifficulty('all');
                        setSearchQuery('');
                        setOnlyBookmarked(false);
                      }}
                      className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow cursor-pointer"
                    >
                      {lang === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: TIMED EXAM MODE */}
            {activeTab === 'exam' && (
              <div className="space-y-6">
                {!isExamRunning && !examResult && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto shadow-xl space-y-6">
                    <div className="text-center space-y-2">
                      <div className="p-4 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl border border-indigo-500/30 w-fit mx-auto">
                        <Award className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                        {lang === 'ar' ? 'بدء اختبار الرياضيات SAT الموقوت (30 سؤالاً)' : 'Start Timed SAT Math Exam (30 Questions)'}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                        {lang === 'ar'
                          ? 'محاكاة كاملة لاختبار السات الرقمي بـ 30 سؤالاً ووقت إجمالي 35 دقيقة مع التقييم وتقدير النتيجة بأسلوب الكوليدج بورد (200 - 800).'
                          : 'Real Digital SAT Math simulation with 30 questions in 35 minutes. Generates scaled score report (200-800).'}
                      </p>
                    </div>

                    <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          {lang === 'ar' ? 'اسم الطالب:' : 'Student Name:'}
                        </label>
                        <input
                          type="text"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder={lang === 'ar' ? 'أدخل اسم الطالب لتقرير الدرجة' : 'Enter student name for report'}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 font-bold text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          {lang === 'ar' ? 'فرع الاختبار:' : 'Selected Exam Domain:'}
                        </label>
                        <select
                          value={selectedDomain}
                          onChange={(e) => setSelectedDomain(e.target.value as any)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 font-bold text-indigo-600 dark:text-indigo-400 focus:outline-none focus:border-indigo-500"
                        >
                          <option value="all">{lang === 'ar' ? 'جميع الفروع (شامل - 30 سؤالاً)' : 'All Domains (Full SAT Module - 30 Qs)'}</option>
                          {DOMAINS.map((d) => (
                            <option key={d.id} value={d.id}>
                              {lang === 'ar' ? d.titleAr : d.titleEn}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleStartExam}
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-2xl font-black text-sm shadow-xl transition flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>{lang === 'ar' ? 'بدء الاختبار الآن (35 دقيقة)' : 'Start Exam Now (35 Mins)'}</span>
                    </button>
                  </div>
                )}

                {/* Active Exam View & Timer */}
                {isExamRunning && examQuestions.length > 0 && (
                  <div className="space-y-6">
                    {/* Active Exam Bar */}
                    <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 rounded-2xl shadow-xl text-white">
                      {/* Active Timer Box */}
                      <div className="flex items-center gap-2 bg-indigo-950/80 border border-indigo-500/40 px-4 py-2 rounded-xl">
                        <Clock className="w-4 h-4 text-rose-400 animate-pulse" />
                        <span className="font-mono font-black text-sm text-amber-300">
                          {formatTimer(examTimerSeconds)}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {lang === 'ar' ? 'متبقي' : 'Remaining'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-sm sm:max-w-md">
                        {examQuestions.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setExamIndex(i)}
                            className={`w-7 h-7 rounded-lg text-xs font-bold border transition ${
                              examIndex === i
                                ? 'bg-indigo-600 text-white border-indigo-400 ring-2 ring-indigo-500'
                                : examAnswers[examQuestions[i].id] !== undefined
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                                : 'bg-slate-900 text-slate-500 border-slate-800'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={handleFinishExam}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-black rounded-xl transition shadow cursor-pointer shrink-0"
                      >
                        {lang === 'ar' ? 'إنهاء وتسليم' : 'Submit Exam'}
                      </button>
                    </div>

                    <QuestionCard
                      question={examQuestions[examIndex]}
                      questionIndex={examIndex}
                      totalQuestions={examQuestions.length}
                      userAnswer={examAnswers[examQuestions[examIndex].id]}
                      onSelectAnswer={(qId, ans) =>
                        setExamAnswers((prev) => ({ ...prev, [qId]: ans }))
                      }
                      lang={lang}
                      isBookmarked={bookmarkedIds.includes(examQuestions[examIndex].id)}
                      onToggleBookmark={handleToggleBookmark}
                      showInstantFeedback={false}
                    />
                  </div>
                )}

                {/* Exam Results Panel */}
                {!isExamRunning && examResult && (
                  <ResultsPanel
                    result={examResult}
                    questions={examQuestions}
                    onRestart={() => setExamResult(null)}
                    lang={lang}
                  />
                )}
              </div>
            )}

            {/* TAB 3: FORMULAS & SYLLABUS */}
            {activeTab === 'formulas' && <FormulaCheatsheet lang={lang} />}

          </div>
        </>
    </div>
  );
};
