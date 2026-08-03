import React, { useState, useMemo, useEffect } from 'react';
import { 
  IgBoardId, 
  IgLevelId, 
  IgQuestion 
} from '../ig/types';
import { 
  IG_BOARDS, 
  IG_CAMBRIDGE_SUBJECTS, 
  IG_MATHS_QUESTIONS 
} from '../ig/data/igData';
import { mistakesService } from '../services/mistakes/mistakesService';
import { QuestionItem, QuestionOption } from '../eot/types';
import { 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Search, 
  Filter, 
  Clock, 
  Sparkles, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  Bookmark,
  AlertCircle,
  Calculator,
  Layers,
  GraduationCap
} from 'lucide-react';

interface IgViewProps {
  onSwitchToCurriculum?: () => void;
  onSwitchToEot?: () => void;
  onSwitchToSat?: () => void;
  language?: 'ar' | 'en';
}

export const IgView: React.FC<IgViewProps> = ({
  onSwitchToCurriculum,
  onSwitchToEot,
  onSwitchToSat,
  language = 'ar'
}) => {
  // Active Board & Level
  const [selectedBoardId, setSelectedBoardId] = useState<IgBoardId>('cambridge');
  const [selectedLevelId, setSelectedLevelId] = useState<IgLevelId>('o_level_igcse');
  
  // Active Subject
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('maths');

  // Active Tab View mode
  const [activeTab, setActiveTab] = useState<'practice' | 'exam' | 'papers' | 'formulas'>('practice');

  // Filter States
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedPaper, setSelectedPaper] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Practice Mode State
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [showAnswerFeedback, setShowAnswerFeedback] = useState<Record<string, boolean>>({});
  const [savedToMistakes, setSavedToMistakes] = useState<Record<string, boolean>>({});

  // Exam Mode State
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examIndex, setExamIndex] = useState<number>(0);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examTimeLeft, setExamTimeLeft] = useState<number>(0);

  // Timer countdown effect for exam
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isExamRunning && examTimeLeft > 0) {
      interval = setInterval(() => {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            setIsExamRunning(false);
            setExamSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamRunning, examTimeLeft]);

  // Active Board Object
  const currentBoard = useMemo(() => {
    return IG_BOARDS.find(b => b.id === selectedBoardId) || IG_BOARDS[0];
  }, [selectedBoardId]);

  // Active Subject Object
  const currentSubject = useMemo(() => {
    return IG_CAMBRIDGE_SUBJECTS.find(s => s.id === selectedSubjectId) || IG_CAMBRIDGE_SUBJECTS[0];
  }, [selectedSubjectId]);

  // Available Years list from 2021 down to 2002
  const yearsList = useMemo(() => {
    const years = Array.from({ length: 2021 - 2002 + 1 }, (_, i) => 2021 - i);
    return years;
  }, []);

  // Filtered Questions Dataset
  const filteredQuestions = useMemo(() => {
    return IG_MATHS_QUESTIONS.filter(q => {
      if (selectedBoardId !== q.boardId) return false;
      if (selectedLevelId !== q.levelId) return false;
      if (selectedSubjectId !== q.subjectId) return false;
      
      if (selectedYear !== 'all' && q.year !== parseInt(selectedYear)) return false;
      if (selectedPaper !== 'all' && q.paper !== selectedPaper) return false;
      
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchCode = q.code.toLowerCase().includes(query);
        const matchTopicEn = q.topicEn.toLowerCase().includes(query);
        const matchTopicAr = q.topicAr.toLowerCase().includes(query);
        const matchQuestionEn = q.questionEn.toLowerCase().includes(query);
        const matchQuestionAr = q.questionAr?.toLowerCase().includes(query);
        return matchCode || matchTopicEn || matchTopicAr || matchQuestionEn || matchQuestionAr;
      }

      return true;
    });
  }, [selectedBoardId, selectedLevelId, selectedSubjectId, selectedYear, selectedPaper, searchQuery]);

  // Current Question in Practice Mode
  const currentQuestion = filteredQuestions[practiceIndex] || filteredQuestions[0];

  // Save mistake helper
  const saveQuestionToMistakes = (q: IgQuestion, userAns: string) => {
    let optionsList: QuestionOption[] | undefined = undefined;
    if (q.options) {
      optionsList = q.options.map(opt => ({
        id: opt.id,
        text: opt.textAr ? `${opt.textEn} (${opt.textAr})` : opt.textEn
      }));
    }

    const questionItem: QuestionItem = {
      id: `IG-${q.id}`,
      qNumber: q.year,
      title: `IGCSE Maths (${q.code}) - ${q.topicEn}`,
      titleAr: `رياضيات IGCSE - ${q.topicAr}`,
      learningOutcome: q.topicEn,
      learningOutcomeAr: q.topicAr,
      unit: 1,
      lesson: `Cambridge ${q.paper} (${q.year})`,
      page: 1,
      exerciseRef: q.code,
      type: q.options ? 'mcq' : 'paper',
      questionText: q.questionEn,
      questionTextAr: q.questionAr,
      options: optionsList,
      correctAnswer: q.correctAnswer,
      solutionSteps: q.solutionStepsAr || (q.explanationAr ? [q.explanationAr] : [q.explanationEn || '']),
      finalAnswer: q.correctAnswer
    };

    mistakesService.addMistake(questionItem, userAns, 'IGCSE Maths (رياضيات النظام البريطاني)', 'IGCSE', 'Cambridge O Level');
    setSavedToMistakes(prev => ({ ...prev, [q.id]: true }));
    setTimeout(() => {
      setSavedToMistakes(prev => ({ ...prev, [q.id]: false }));
    }, 3000);
  };

  // Handle Answer Selection in Practice Mode
  const handleSelectPracticeAnswer = (q: IgQuestion, ansId: string) => {
    setPracticeAnswers(prev => ({ ...prev, [q.id]: ansId }));
    setShowAnswerFeedback(prev => ({ ...prev, [q.id]: true }));

    // Auto add to mistakes if incorrect
    if (ansId !== q.correctAnswer) {
      saveQuestionToMistakes(q, ansId);
    }
  };

  // Exam Helper Functions
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    const timeMinutes = Math.max(15, filteredQuestions.length * 2);
    setExamIndex(0);
    setExamAnswers({});
    setExamSubmitted(false);
    setIsExamRunning(true);
    setExamTimeLeft(timeMinutes * 60);
  };

  const handleSubmitExam = () => {
    setIsExamRunning(false);
    setExamSubmitted(true);
  };

  const handleSelectExamAnswer = (qId: string, ansId: string) => {
    if (!isExamRunning || examSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [qId]: ansId }));
  };

  const examResults = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    filteredQuestions.forEach(q => {
      const userAns = examAnswers[q.id];
      if (!userAns) {
        unanswered++;
      } else if (userAns === q.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });
    const total = filteredQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, wrong, unanswered, total, percentage };
  }, [filteredQuestions, examAnswers]);

  const currentExamQuestion = filteredQuestions[examIndex] || filteredQuestions[0];

  // Notice for subjects/branches without exams yet
  const renderEmptyStateNotice = () => (
    <div className="text-center py-16 px-6 space-y-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/40 dark:to-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 shadow-sm">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
        <Clock className="w-8 h-8 animate-pulse" />
      </div>
      <h3 className="text-xl font-black text-slate-800 dark:text-slate-200">
        (إن شاء الله قريبا سيتوفر الإمتحان)
      </h3>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-bold">
        يجب العلم أن هذا الفرع فقط في الرياضيات (Cambridge IGCSE 0580) موجودة امتحاناته، أما باقي فروع امتحانات الـ IG في الرياضيات والمواد الأخرى ليست موجودة حالياً — (إن شاء الله قريبا سيتوفر الإمتحان).
      </p>
      <div className="pt-3">
        <button
          onClick={() => {
            setSelectedBoardId('cambridge');
            setSelectedLevelId('o_level_igcse');
            setSelectedSubjectId('maths');
            setSelectedYear('all');
            setSelectedPaper('all');
          }}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg shadow-teal-500/20 transition cursor-pointer inline-flex items-center gap-2"
        >
          <span>← الانتقال إلى امتحانات الرياضيات المتاحة (Cambridge IGCSE 0580)</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="fade-in space-y-8 my-6">
      {/* 1. HERO BANNER BAR */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 p-4 md:p-6 text-white shadow-xl border border-teal-500/30">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {language === 'en' ? 'IG Exams' : 'اختبارات IG'}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 justify-center shrink-0">
            {onSwitchToCurriculum && (
              <button
                onClick={onSwitchToCurriculum}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>📚 {language === 'en' ? 'Curriculum' : 'المناهج'}</span>
              </button>
            )}
            {onSwitchToEot && (
              <button
                onClick={onSwitchToEot}
                className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold rounded-xl border border-amber-400/30 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>📜 {language === 'en' ? 'EOT Specs' : 'الهياكل (EOT)'}</span>
              </button>
            )}
            {onSwitchToSat && (
              <button
                onClick={onSwitchToSat}
                className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-bold rounded-xl border border-purple-400/30 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>🎓 {language === 'en' ? 'SAT Exams' : 'السات (SAT)'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. EXAM BOARDS & LEVELS (IMAGE 1 STRUCTURE) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-2">
            <span>Choose your exam board .</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">اختر المنظمة التعليمية والمستوى الدراسي المطلوبة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CAMBRIDGE */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-teal-500/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Cambridge</h3>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  setSelectedBoardId('cambridge');
                  setSelectedLevelId('o_level_igcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'cambridge' && selectedLevelId === 'o_level_igcse'
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/30'
                    : 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>O Level (IGCSE)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('cambridge');
                  setSelectedLevelId('as_a2_level');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'cambridge' && selectedLevelId === 'as_a2_level'
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/30'
                    : 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>AS / A2 Level</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('cambridge');
                  setSelectedLevelId('o_level_gcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'cambridge' && selectedLevelId === 'o_level_gcse'
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/30'
                    : 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>O Level (GCSE)</span>
              </button>
            </div>
          </div>

          {/* EDEXCEL */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-amber-500/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Edexcel</h3>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  setSelectedBoardId('edexcel');
                  setSelectedLevelId('o_level_igcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'edexcel' && selectedLevelId === 'o_level_igcse'
                    ? 'bg-amber-500 text-white ring-4 ring-amber-500/30'
                    : 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>O Level (IGCSE)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('edexcel');
                  setSelectedLevelId('as_ial');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'edexcel' && selectedLevelId === 'as_ial'
                    ? 'bg-amber-500 text-white ring-4 ring-amber-500/30'
                    : 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>AS / IAL</span>
              </button>
            </div>
          </div>

          {/* OXFORD */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg shadow-indigo-600/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Oxford</h3>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  setSelectedBoardId('oxford');
                  setSelectedLevelId('igcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'oxford' && selectedLevelId === 'igcse'
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-600/30'
                    : 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>IGCSE</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('oxford');
                  setSelectedLevelId('as_ial');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'oxford' && selectedLevelId === 'as_ial'
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-600/30'
                    : 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>AS / IAL</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUBJECTS GRID (IMAGE 2 STRUCTURE) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>📚</span> المواد الدراسية في قسم <span className="text-teal-600 dark:text-teal-400 font-extrabold">{currentBoard.nameEn} - {selectedLevelId.toUpperCase().replace('_', ' ')}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">اضغط على المادة للانتقال لبنك الأسئلة والاختبارات المقسمة بالسنوات</p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            {IG_CAMBRIDGE_SUBJECTS.length} مواد متاحة
          </span>
        </div>

        {/* Subjects 4-column Grid matching Image 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {IG_CAMBRIDGE_SUBJECTS.map((sub) => {
            const isSelected = sub.id === selectedSubjectId;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`p-4 rounded-2xl border-2 transition text-center cursor-pointer flex flex-col items-center justify-center space-y-1.5 ${
                  isSelected
                    ? 'bg-teal-500/10 border-teal-500 text-teal-800 dark:text-teal-200 shadow-md ring-2 ring-teal-500/20 font-black'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-teal-400 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="text-2xl">{sub.icon}</span>
                <span className={`text-sm font-extrabold underline decoration-amber-500/50 ${isSelected ? 'text-teal-700 dark:text-teal-300' : 'text-amber-900 dark:text-amber-400'}`}>
                  {sub.nameEn}
                </span>
                {sub.status === 'available' && selectedBoardId === 'cambridge' && selectedLevelId === 'o_level_igcse' ? (
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                    ✅ متاح للتصفح
                  </span>
                ) : (
                  <span className="text-[10px] bg-amber-500/15 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-extrabold leading-tight">
                    (إن شاء الله قريبا سيتوفر الإمتحان)
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. ACTIVE SUBJECT QUESTIONS & PAST PAPERS (2002 - 2021) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentSubject.icon}</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                {currentSubject.nameEn} ({currentBoard.nameEn} - O Level IGCSE)
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              بنك الأسئلة والشروحات مرتبة حسب السنوات من 2002 إلى 2021
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>تمرين تفاعلي</span>
            </button>

            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>اختبار موقوت</span>
            </button>

            <button
              onClick={() => setActiveTab('papers')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>فهرس الامتحانات</span>
            </button>
          </div>
        </div>

        {/* FILTER BAR: SEARCH & YEARS (2002 - 2021) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
            <input
              type="text"
              placeholder="ابحث بالرمز (0580) أو الموضوع أو السؤال..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Year Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">السنة:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              <option value="all">جميع السنوات (2002 - 2021)</option>
              {yearsList.map((y) => (
                <option key={y} value={y}>امتحانات سنة {y}</option>
              ))}
            </select>
          </div>

          {/* Paper Type Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">الورقة الامتحانية:</span>
            <select
              value={selectedPaper}
              onChange={(e) => setSelectedPaper(e.target.value)}
              className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              <option value="all">جميع الأوراق (Paper 2 & 4)</option>
              <option value="Paper 2 (Extended)">Paper 2 (Extended)</option>
              <option value="Paper 4 (Extended)">Paper 4 (Extended)</option>
            </select>
          </div>
        </div>

        {/* TAB CONTENT: PRACTICE MODE */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              renderEmptyStateNotice()
            ) : (
              <div className="space-y-6">
                {/* Question Selector Carousel */}
                <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl">
                  <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-xl">
                    {filteredQuestions.map((q, idx) => (
                      <button
                        key={q.id}
                        onClick={() => setPracticeIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                          practiceIndex === idx
                            ? 'bg-teal-600 text-white shadow'
                            : practiceAnswers[q.id]
                            ? practiceAnswers[q.id] === q.correctAnswer
                              ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        سؤال {idx + 1} ({q.year})
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={practiceIndex === 0}
                      onClick={() => setPracticeIndex(prev => Math.max(0, prev - 1))}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-slate-500">
                      {practiceIndex + 1} / {filteredQuestions.length}
                    </span>
                    <button
                      disabled={practiceIndex === filteredQuestions.length - 1}
                      onClick={() => setPracticeIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Display Card */}
                {currentQuestion && (
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 relative shadow-lg">
                    {/* Card Header Info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-extrabold rounded-full border border-teal-500/20">
                          {currentQuestion.code}
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                          {currentQuestion.paper}
                        </span>
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full">
                          سنة {currentQuestion.year} ({currentQuestion.session})
                        </span>
                      </div>

                      <button
                        onClick={() => saveQuestionToMistakes(currentQuestion, practiceAnswers[currentQuestion.id] || '')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                          savedToMistakes[currentQuestion.id]
                            ? 'bg-emerald-600 text-white border-emerald-500'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{savedToMistakes[currentQuestion.id] ? 'تمت الإضافة لدفتر الأخطاء ✅' : 'حفظ لدفتر أخطائي'}</span>
                      </button>
                    </div>

                    {/* Question Text */}
                    <div className="space-y-3">
                      {/* Diagram SVG Illustration if provided */}
                      {currentQuestion.diagramSvg && (
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col items-center justify-center my-3">
                          {currentQuestion.diagramTitle && (
                            <span className="text-xs font-black text-teal-600 dark:text-teal-400 mb-2">
                              {currentQuestion.diagramTitle}
                            </span>
                          )}
                          <div 
                            className="w-full flex justify-center max-w-md overflow-x-auto text-slate-800 dark:text-slate-200"
                            dangerouslySetInnerHTML={{ __html: currentQuestion.diagramSvg }}
                          />
                        </div>
                      )}

                      <div className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed dir-ltr text-left">
                        {currentQuestion.questionEn}
                      </div>
                      {currentQuestion.questionAr && (
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed text-right border-t border-slate-200/60 dark:border-slate-800/60 pt-2">
                          {currentQuestion.questionAr}
                        </div>
                      )}
                    </div>

                    {/* Options Grid */}
                    {currentQuestion.options && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {currentQuestion.options.map((opt) => {
                          const isSelected = practiceAnswers[currentQuestion.id] === opt.id;
                          const showFeedback = showAnswerFeedback[currentQuestion.id];
                          const isCorrect = opt.id === currentQuestion.correctAnswer;

                          let btnClasses = "p-4 rounded-2xl border-2 transition text-left cursor-pointer font-bold text-sm flex items-center justify-between ";

                          if (showFeedback) {
                            if (isCorrect) {
                              btnClasses += "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300";
                            } else if (isSelected) {
                              btnClasses += "bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300";
                            } else {
                              btnClasses += "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60";
                            }
                          } else {
                            if (isSelected) {
                              btnClasses += "bg-teal-500/15 border-teal-500 text-teal-800 dark:text-teal-200 shadow";
                            } else {
                              btnClasses += "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-400 text-slate-800 dark:text-slate-200";
                            }
                          }

                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectPracticeAnswer(currentQuestion, opt.id)}
                              className={btnClasses}
                            >
                              <div className="flex items-center gap-3 dir-ltr">
                                <span className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-black shrink-0">
                                  {opt.id}
                                </span>
                                <span>{opt.textEn}</span>
                              </div>
                              {showFeedback && isCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Solution Steps & Explanation Box */}
                    {showAnswerFeedback[currentQuestion.id] && (
                      <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-slate-800 dark:text-slate-200 space-y-3">
                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-extrabold text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>الإجابة الصحيحة: ({currentQuestion.correctAnswer}) - خطوات الحل المنهجية</span>
                        </div>

                        {currentQuestion.solutionStepsAr && (
                          <div className="space-y-1.5 text-xs text-right dir-rtl">
                            {currentQuestion.solutionStepsAr.map((step, idx) => (
                              <div key={idx} className="bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-teal-500/20 font-medium">
                                {step}
                              </div>
                            ))}
                          </div>
                        )}

                        {currentQuestion.explanationAr && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 border-t border-teal-500/20 pt-2 text-right">
                            {currentQuestion.explanationAr}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: TIMED EXAM MODE */}
        {activeTab === 'exam' && (
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              renderEmptyStateNotice()
            ) : !isExamRunning && !examSubmitted ? (
              /* 1. LAUNCHPAD / EXAM INTRO CARD */
              <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 p-6 md:p-10 rounded-3xl text-white shadow-2xl border border-teal-500/30 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>اختبار موقوت - محاكاة للامتحان الحقيقي</span>
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      اختبار {currentSubject.nameEn} ({currentBoard.nameEn})
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 mt-1">
                      اختبر نفسك تحت ضغط الوقت مع تقييم تلقائي فوري بعد التسليم
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-center">
                      <span className="block text-[10px] text-slate-400 font-bold">عدد الأسئلة</span>
                      <span className="text-lg font-black text-teal-300">{filteredQuestions.length} سؤال</span>
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-center">
                      <span className="block text-[10px] text-slate-400 font-bold">الوقت المخصص</span>
                      <span className="text-lg font-black text-amber-300">
                        {Math.max(15, filteredQuestions.length * 2)} دقيقة
                      </span>
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-center">
                      <span className="block text-[10px] text-slate-400 font-bold">السنة والورقة</span>
                      <span className="text-xs font-bold text-white">
                        {selectedYear === 'all' ? 'جميع السنوات' : selectedYear} - {selectedPaper === 'all' ? 'جميع الأوراق' : selectedPaper}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                  <h4 className="text-sm font-extrabold text-amber-300 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>تعليمات وضوابط الاختبار الموقوت:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                    <li>يتم حساب الوقت تنازلياً فور الضغط على زر "ابدأ الاختبار الموقوت الآن".</li>
                    <li>يمكنك التنقل بين الأسئلة وتعديل إجابتك بحرية كاملة قبل انتهاء الوقت المحدَّد.</li>
                    <li>لن تظهر الإجابات الصحيحة أو خطوات الحل أثناء الاختبار حتى تسليمه.</li>
                    <li>عند انتهاء الوقت أو الضغط على "تسليم الاختبار" ستحصل على تقرير مفصل بنتيجة أدائك.</li>
                  </ul>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={handleStartExam}
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black text-base md:text-lg shadow-xl shadow-teal-500/25 transition cursor-pointer flex items-center gap-3 active:scale-95"
                  >
                    <span>🚀 ابدأ الاختبار الموقوت الآن</span>
                    <Clock className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : isExamRunning && !examSubmitted ? (
              /* 2. RUNNING EXAM SCREEN */
              <div className="space-y-6">
                {/* TIMER & CONTROLS STICKY BAR */}
                <div className="bg-white dark:bg-slate-900 p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 rounded-xl flex items-center gap-2 font-black text-base md:text-lg ${
                      examTimeLeft < 300 
                        ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 animate-pulse'
                        : 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20'
                    }`}>
                      <Clock className="w-5 h-5" />
                      <span>{formatTime(examTimeLeft)}</span>
                    </div>

                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      سؤال {examIndex + 1} من {filteredQuestions.length}
                    </span>

                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      أجبتَ عن {Object.keys(examAnswers).length} / {filteredQuestions.length}
                    </span>
                  </div>

                  <button
                    onClick={handleSubmitExam}
                    className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>📥 إنهاء وتسليم الاختبار</span>
                  </button>
                </div>

                {/* QUESTION NUMBER PILLS NAVIGATION */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-xs font-bold text-slate-500 shrink-0 ml-2">انتقال سريع:</span>
                  {filteredQuestions.map((q, idx) => {
                    const isAnswered = Boolean(examAnswers[q.id]);
                    const isCurrent = idx === examIndex;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setExamIndex(idx)}
                        className={`w-8 h-8 rounded-xl font-extrabold text-xs shrink-0 transition flex items-center justify-center cursor-pointer ${
                          isCurrent
                            ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-500/30'
                            : isAnswered
                            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-teal-400'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* CURRENT EXAM QUESTION CARD */}
                {currentExamQuestion && (
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-lg">
                    {/* Header badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-extrabold rounded-full border border-teal-500/20">
                          {currentExamQuestion.code}
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                          {currentExamQuestion.paper}
                        </span>
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full">
                          سنة {currentExamQuestion.year}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        الموضوع: {currentExamQuestion.topicEn}
                      </span>
                    </div>

                    {/* Question Content */}
                    <div className="space-y-3">
                      {currentExamQuestion.diagramSvg && (
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col items-center justify-center my-3">
                          {currentExamQuestion.diagramTitle && (
                            <span className="text-xs font-black text-teal-600 dark:text-teal-400 mb-2">
                              {currentExamQuestion.diagramTitle}
                            </span>
                          )}
                          <div 
                            className="w-full flex justify-center max-w-md overflow-x-auto text-slate-800 dark:text-slate-200"
                            dangerouslySetInnerHTML={{ __html: currentExamQuestion.diagramSvg }}
                          />
                        </div>
                      )}

                      <div className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed dir-ltr text-left">
                        {currentExamQuestion.questionEn}
                      </div>
                      {currentExamQuestion.questionAr && (
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed text-right border-t border-slate-200/60 dark:border-slate-800/60 pt-2">
                          {currentExamQuestion.questionAr}
                        </div>
                      )}
                    </div>

                    {/* Options Grid (No correct/wrong feedback while exam is running) */}
                    {currentExamQuestion.options && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {currentExamQuestion.options.map((opt) => {
                          const isSelected = examAnswers[currentExamQuestion.id] === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectExamAnswer(currentExamQuestion.id, opt.id)}
                              className={`p-4 rounded-2xl border-2 transition text-left cursor-pointer font-bold text-sm flex items-center justify-between ${
                                isSelected
                                  ? 'bg-teal-500/15 border-teal-500 text-teal-800 dark:text-teal-200 shadow-md ring-2 ring-teal-500/20'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-400 text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-3 dir-ltr">
                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                                  isSelected 
                                    ? 'bg-teal-600 text-white' 
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                }`}>
                                  {opt.id}
                                </span>
                                <span>{opt.textEn}</span>
                              </div>
                              {isSelected && (
                                <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400">
                                  محدد ✅
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                      <button
                        onClick={() => setExamIndex(prev => Math.max(0, prev - 1))}
                        disabled={examIndex === 0}
                        className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span>السؤال السابق</span>
                      </button>

                      {examIndex < filteredQuestions.length - 1 ? (
                        <button
                          onClick={() => setExamIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                          className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>السؤال التالي</span>
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitExam}
                          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>إنهاء وتسليم الاختبار الآن</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* 3. SUBMITTED EXAM RESULTS & FULL REVIEW */
              <div className="space-y-6">
                {/* CERTIFICATE & SCORE CARD */}
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl border border-indigo-500/30 space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-right space-y-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                        <Award className="w-3.5 h-3.5" />
                        <span>تقرير أداء الاختبار الموقوت</span>
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white">
                        نتيجة اختبار {currentSubject.nameEn} - Cambridge
                      </h3>
                      <p className="text-xs text-slate-300">
                        تم تصحيح جميع إجاباتك تلقائياً وفق نماذج الإجابة المعتمدة
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex flex-col items-center justify-center shadow-xl border-4 border-white/20">
                        <span className="text-2xl font-black">{examResults.percentage}%</span>
                        <span className="text-[10px] font-bold text-white/80">النسبة المئوية</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
                      <span className="block text-xs text-slate-300 font-bold">إجمالي الأسئلة</span>
                      <span className="text-xl font-black text-white">{examResults.total}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-center">
                      <span className="block text-xs text-emerald-300 font-bold">إجابات صحيحة</span>
                      <span className="text-xl font-black text-emerald-400">{examResults.correct}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-center">
                      <span className="block text-xs text-rose-300 font-bold">إجابات خاطئة</span>
                      <span className="text-xl font-black text-rose-400">{examResults.wrong}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-center">
                      <span className="block text-xs text-amber-300 font-bold">غير مجاب عنها</span>
                      <span className="text-xl font-black text-amber-400">{examResults.unanswered}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleStartExam}
                      className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>إعادة نفس الاختبار الموقوت</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('practice')}
                      className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/15 transition cursor-pointer flex items-center gap-2"
                    >
                      <span>العودة للتمرين التفاعلي ←</span>
                    </button>
                  </div>
                </div>

                {/* FULL REVIEW OF ALL EXAM QUESTIONS */}
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span>📑</span> مراجعة تفصيلية لجميع أسئلة الاختبار مع خطوات الحل
                  </h3>

                  <div className="space-y-4">
                    {filteredQuestions.map((q, idx) => {
                      const userAns = examAnswers[q.id];
                      const isCorrect = userAns === q.correctAnswer;
                      const isSkipped = !userAns;

                      return (
                        <div
                          key={q.id}
                          className={`p-6 rounded-3xl border-2 space-y-4 transition ${
                            isCorrect
                              ? 'bg-emerald-500/5 border-emerald-500/30 dark:bg-emerald-500/10'
                              : isSkipped
                              ? 'bg-amber-500/5 border-amber-500/30 dark:bg-amber-500/10'
                              : 'bg-rose-500/5 border-rose-500/30 dark:bg-rose-500/10'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-black">
                                {idx + 1}
                              </span>
                              <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                                {q.code} - سنة {q.year} ({q.paper})
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {isCorrect ? (
                                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold">
                                  إجابة صحيحة ✅
                                </span>
                              ) : isSkipped ? (
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-extrabold">
                                  لم تتم الإجابة ⚠️
                                </span>
                              ) : (
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-extrabold">
                                  إجابة خاطئة ❌
                                </span>
                              )}

                              {!isCorrect && (
                                <button
                                  onClick={() => saveQuestionToMistakes(q, userAns || '')}
                                  className={`px-3 py-1 rounded-xl text-xs font-bold border transition flex items-center gap-1 cursor-pointer ${
                                    savedToMistakes[q.id]
                                      ? 'bg-emerald-600 text-white border-emerald-500'
                                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                                  }`}
                                >
                                  <Bookmark className="w-3.5 h-3.5" />
                                  <span>{savedToMistakes[q.id] ? 'محفـوظ ✅' : 'حفظ لأخطائي'}</span>
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 dir-ltr text-left">
                            {q.questionEn}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-1">
                            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                              <span className="text-slate-500">إجابتك: </span>
                              <span className={isCorrect ? 'text-emerald-600 font-extrabold' : 'text-rose-600 font-extrabold'}>
                                {userAns || 'بدون إجابة'}
                              </span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                              <span>الإجابة الصحيحة: </span>
                              <span className="font-black">({q.correctAnswer})</span>
                            </div>
                          </div>

                          {q.solutionStepsAr && (
                            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                              <span className="block font-black text-teal-600 dark:text-teal-400 mb-1">خطوات الحل:</span>
                              {q.solutionStepsAr.map((st, sidx) => (
                                <div key={sidx} className="text-slate-700 dark:text-slate-300 font-medium">
                                  • {st}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: PAST PAPERS INDEX */}
        {activeTab === 'papers' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>📋</span> قائمة الامتحانات المتاحة مرتبة حسب السنوات (2002 - 2021)
            </h3>

            {filteredQuestions.length === 0 ? (
              renderEmptyStateNotice()
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {yearsList.map((yr) => {
                const yearQuestions = IG_MATHS_QUESTIONS.filter(q => q.year === yr);
                const qCount = yearQuestions.length;
                return (
                  <div
                    key={yr}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-teal-500 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-slate-900 dark:text-white">
                        امتحان {yr} (Past Paper)
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                        {qCount > 0 ? `${qCount} أسئلة محددة` : 'تجهيز الأسئلة'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Paper 2 & Paper 4 Extended - Cambridge IGCSE 0580
                    </p>
                    <button
                      onClick={() => {
                        setSelectedYear(String(yr));
                        setActiveTab('practice');
                        setPracticeIndex(0);
                      }}
                      className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>تصفح الأسئلة وحلها ←</span>
                    </button>
                  </div>
                );
              })}
            </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
