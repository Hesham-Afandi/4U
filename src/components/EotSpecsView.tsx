import React, { useState, useMemo, useEffect } from 'react';
import { QUESTIONS_DATA } from '../eot/data/questionsData';
import { mathG11Questions } from '../eot/data/mathG11QuestionsData';
import { mathG11GeneralQuestions } from '../eot/data/mathG11GeneralQuestionsData';
import { mathG10Questions } from '../eot/data/mathG10QuestionsData';
import { mathG10GeneralQuestions } from '../eot/data/mathG10GeneralQuestionsData';
import { mathG9Questions } from '../eot/data/mathG9QuestionsData';
import { mathG12GeneralQuestions } from '../eot/data/mathG12GeneralQuestionsData';
import { physicsG12BridgeQuestions, physicsG12InspireQuestions } from '../eot/data/physicsQuestionsData';
import { physicsG12GeneralQuestions } from '../eot/data/physicsG12GeneralData';
import { physicsG11BridgeQuestions } from '../eot/data/physicsG11BridgeData';
import { physicsG10Questions } from '../eot/data/physicsG10Data';
import { physicsG9Questions } from '../eot/data/physicsG9Data';
import { QuestionItem, StreamType, GradeType, TermType } from '../eot/types';
import { Navbar } from '../eot/components/Navbar';
import { FilterBar } from '../eot/components/FilterBar';
import { QuestionCard } from '../eot/components/QuestionCard';
import { ExamTable } from '../eot/components/ExamTable';
import { QuizMode } from '../eot/components/QuizMode';
import { AiTutorModal } from '../eot/components/AiTutorModal';
import {
  Printer,
  Sparkles,
  GraduationCap,
  Mail,
  Phone,
  Layers,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  BookOpen,
  Atom,
  FlaskConical,
  Dna,
  Search,
  Filter
} from 'lucide-react';

interface EotSpecsViewProps {
  onSwitchToCurriculum?: () => void;
}

export type SubjectType = 'math' | 'physics' | 'chemistry' | 'biology';

const SUBJECT_OPTIONS = [
  { id: 'math', name: 'الرياضيات', icon: BookOpen, color: 'from-indigo-600 to-blue-600' },
  { id: 'physics', name: 'الفيزياء', icon: Atom, color: 'from-amber-500 to-orange-600' },
  { id: 'chemistry', name: 'الكيمياء', icon: FlaskConical, color: 'from-emerald-500 to-teal-600' },
  { id: 'biology', name: 'الأحياء', icon: Dna, color: 'from-rose-500 to-pink-600' },
];

export const EotSpecsView: React.FC<EotSpecsViewProps> = ({ onSwitchToCurriculum }) => {
  // Navigation View Mode: 'selection' (step 1) or 'exam' (step 2)
  const [viewMode, setViewMode] = useState<'selection' | 'exam'>('selection');

  const [activeTab, setActiveTab] = useState<'all' | 'mcq' | 'paper' | 'matrix' | 'quiz' | 'tutor'>('all');

  // Framework Selection States
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('math');
  const [selectedStream, setSelectedStream] = useState<StreamType>('advanced');
  const [selectedGrade, setSelectedGrade] = useState<GradeType>('12');
  const [selectedTerm, setSelectedTerm] = useState<TermType>('EOT1');

  // Interactive Loader State
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Filter States
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // AI Tutor Modal
  const [aiModalQuestion, setAiModalQuestion] = useState<QuestionItem | null>(null);

  // Active dataset based on subject, grade, stream, term
  const activeDataset = useMemo(() => {
    if (selectedTerm !== 'EOT1') return [];
    
    // Math
    if (selectedSubject === 'math') {
      if (selectedGrade === '12') {
        if (selectedStream === 'general') return mathG12GeneralQuestions;
        return QUESTIONS_DATA;
      }
      if (selectedGrade === '11') {
        if (selectedStream === 'general') return mathG11GeneralQuestions;
        return mathG11Questions;
      }
      if (selectedGrade === '10') {
        if (selectedStream === 'general') return mathG10GeneralQuestions;
        return mathG10Questions;
      }
      if (selectedGrade === '9') return mathG9Questions;
    }
    
    // Physics (Grade 12 General, Grade 12 Inspire, Grade 12 Bridge, Grade 11 Bridge, Grade 10, Grade 9)
    if (selectedSubject === 'physics') {
      if (selectedGrade === '12') {
        if (selectedStream === 'general') {
          return physicsG12GeneralQuestions;
        }
        if (selectedStream === 'advanced_inspire') {
          return physicsG12InspireQuestions;
        }
        return physicsG12BridgeQuestions;
      }
      if (selectedGrade === '11') {
        if (selectedStream === 'advanced_inspire') {
          return physicsG12InspireQuestions;
        }
        return physicsG11BridgeQuestions;
      }
      if (selectedGrade === '10') {
        return physicsG10Questions;
      }
      if (selectedGrade === '9') {
        return physicsG9Questions;
      }
    }

    return [];
  }, [selectedSubject, selectedGrade, selectedStream, selectedTerm]);

  const hasExamQuestions = activeDataset.length > 0;

  // Enter Exam Handler
  const handleEnterExam = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setViewMode('exam');
    }, 400);
  };

  // Back to Selection Handler
  const handleBackToSelection = () => {
    setViewMode('selection');
  };

  // Handle outcome click from Exam Table
  const handleSelectOutcome = (qNum: string) => {
    setActiveTab('all');
    setSearchTerm(qNum);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedUnit('all');
    setSelectedType('all');
    setSelectedYear('all');
  };

  // Filter questions logic
  const filteredQuestions = useMemo(() => {
    if (!hasExamQuestions) return [];
    return activeDataset.filter((q) => {
      // Tab filter constraint
      if (activeTab === 'mcq' && q.type !== 'mcq') return false;
      if (activeTab === 'paper' && q.type !== 'paper') return false;

      // Dropdown filters
      if (selectedUnit !== 'all' && q.unit.toString() !== selectedUnit) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      if (selectedYear !== 'all' && q.examYear !== selectedYear) return false;

      // Search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesNum = q.qNumber.toString().toLowerCase().includes(term);
        const matchesTitle = q.titleAr.toLowerCase().includes(term) || q.title.toLowerCase().includes(term);
        const matchesOutcome = q.learningOutcomeAr.toLowerCase().includes(term) || q.learningOutcome.toLowerCase().includes(term);
        const matchesText = q.questionText.toLowerCase().includes(term) || (q.questionTextAr && q.questionTextAr.toLowerCase().includes(term));
        const matchesRef = q.exerciseRef.toLowerCase().includes(term) || q.lesson.toLowerCase().includes(term);
        return matchesNum || matchesTitle || matchesOutcome || matchesText || matchesRef;
      }

      return true;
    });
  }, [activeTab, selectedUnit, selectedType, selectedYear, searchTerm, activeDataset, hasExamQuestions]);

  const mcqCount = activeDataset.filter((q) => q.type === 'mcq').length;
  const paperCount = activeDataset.filter((q) => q.type === 'paper').length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-['Cairo',sans-serif]">
      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ================= STEP 1: SELECTION SCREEN ================= */}
        {viewMode === 'selection' && (
          <div className="space-y-6 max-w-4xl mx-auto py-4 animate-fadeIn">
            {/* Header Banner - Teacher & Course Info */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-900/40 relative overflow-hidden text-center sm:text-right">
              <div className="absolute left-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mt-20"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/30">
                    <GraduationCap className="w-4 h-4 text-amber-400" />
                    Mr. Mohammed Hesham
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
                    العام الدراسي 2026-2027
                  </span>
                  {onSwitchToCurriculum && (
                    <button
                      onClick={onSwitchToCurriculum}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>قسم المناهج والدروس 📚</span>
                    </button>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  منصة تحديد ورؤية الهياكل الامتحانية
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  يرجى تحديد المادة، والصف، والمسار التعليمي، والفصل الدراسي للانتقال مباشرة إلى صفحة الامتحان وبنك الأسئلة المحلولة بالكامل.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs pt-3 border-t border-slate-800/80 text-slate-300 font-mono">
                  <a href="mailto:mohammedhesham872@gmail.com" className="flex items-center gap-1.5 hover:text-indigo-300 transition">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span>mohammedhesham872@gmail.com</span>
                  </a>
                  <a href="tel:+971555642674" className="flex items-center gap-1.5 hover:text-emerald-300 transition">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span dir="ltr">+971555642674</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Selection Dropdowns Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              <h3 className="text-base font-black text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                قائمة اختيار المادة والصف والمسار
              </h3>

              {/* 1. Subjects Grid */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300">اختر المادة الدراسية:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SUBJECT_OPTIONS.map((sub) => {
                    const IconComp = sub.icon;
                    const isSelected = selectedSubject === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.id as SubjectType)}
                        className={`p-4 rounded-2xl border text-right transition-all cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? `bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-500/30`
                            : `bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700/80 hover:border-indigo-400`
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-black text-sm">{sub.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Dropdown selectors: Grade, Stream, Term */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Grade Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300">الصف الدراسي</label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value as GradeType)}
                    className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                  >
                    <option value="12">الصف 12 (Grade 12)</option>
                    <option value="11">الصف 11 (Grade 11)</option>
                    <option value="10">الصف 10 (Grade 10)</option>
                    <option value="9">الصف 9 (Grade 9)</option>
                  </select>
                </div>

                {/* Stream Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300">المسار التعليمي</label>
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value as StreamType)}
                    className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                  >
                    <option value="advanced">المسار المتقدم (Advanced)</option>
                    <option value="advanced_bridge">متقدم بريدج (Advanced Bridge)</option>
                    <option value="advanced_inspire">متقدم انسباير (Advanced Inspire)</option>
                    <option value="general">المسار العام (General)</option>
                  </select>
                </div>

                {/* Term Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300">الفصل الدراسي</label>
                  <select
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(e.target.value as TermType)}
                    className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs font-bold focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                  >
                    <option value="EOT1">الفصل الأول (EOT1)</option>
                    <option value="EOT2">الفصل الثاني (EOT2)</option>
                    <option value="EOT3">الفصل الثالث (EOT3)</option>
                  </select>
                </div>
              </div>

              {/* Action Button to Enter Exam */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3">
                {hasExamQuestions ? (
                  <button
                    onClick={handleEnterExam}
                    disabled={isLoading}
                    className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black text-sm rounded-2xl shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>جاري التحميل...</span>
                      </>
                    ) : (
                      <>
                        <span>الانتقال لصفحة الامتحان وهيكل المادة 🚀</span>
                        <ArrowLeft className="w-5 h-5" />
                      </>
                    )}
                  </button>
                ) : (
                  <div className="text-center space-y-3 py-2">
                    <span className="text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 px-4 py-1.5 rounded-full border border-amber-200 dark:border-amber-800 inline-block">
                      قريبا إن شاء الله سيتوفر الإمتحان
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      هيكل هذا الصف والمادة قيد الرفع والتدقيق النهائي. يمكنك اختيار إحدى المواد المتاحة حالياً للبدء فوراً:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('12');
                          setSelectedStream('advanced');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-xl hover:bg-indigo-100 transition cursor-pointer"
                      >
                        هيكل الرياضيات 12 متقدم
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('9');
                          setSelectedStream('advanced');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-xl hover:bg-indigo-100 transition cursor-pointer"
                      >
                        رياضيات 9 متقدم (بريدج وانسباير) 📐
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('10');
                          setSelectedStream('general');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold rounded-xl hover:bg-amber-100 transition cursor-pointer"
                      >
                        رياضيات 10 عام 📐
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('10');
                          setSelectedStream('advanced');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-xl hover:bg-purple-100 transition cursor-pointer"
                      >
                        رياضيات 10 متقدم (بريدج وانسباير)
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('12');
                          setSelectedStream('general');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold rounded-xl hover:bg-fuchsia-100 transition cursor-pointer"
                      >
                        رياضيات 12 عام 📐
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('11');
                          setSelectedStream('general');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-xl hover:bg-emerald-100 transition cursor-pointer"
                      >
                        رياضيات 11 عام 📐
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('math');
                          setSelectedGrade('11');
                          setSelectedStream('advanced');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-xl hover:bg-blue-100 transition cursor-pointer"
                      >
                        هيكل الرياضيات 11 متقدم
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('physics');
                          setSelectedGrade('9');
                          setSelectedStream('advanced');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-bold rounded-xl hover:bg-cyan-100 transition cursor-pointer"
                      >
                        فيزياء 9 متقدم (بريدج وانسباير) ⚛️
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('physics');
                          setSelectedGrade('10');
                          setSelectedStream('advanced');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-xl hover:bg-emerald-100 transition cursor-pointer"
                      >
                        فيزياء 10 متقدم (بريدج وانسباير)
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('physics');
                          setSelectedGrade('11');
                          setSelectedStream('advanced_bridge');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold rounded-xl hover:bg-teal-100 transition cursor-pointer"
                      >
                        فيزياء 11 متقدم بريدج
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('physics');
                          setSelectedGrade('12');
                          setSelectedStream('advanced_inspire');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-xl hover:bg-purple-100 transition cursor-pointer"
                      >
                        فيزياء 12 انسباير (11 انسباير)
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('physics');
                          setSelectedGrade('12');
                          setSelectedStream('general');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-bold rounded-xl hover:bg-rose-100 transition cursor-pointer"
                      >
                        فيزياء 12 عام ⚡
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSubject('physics');
                          setSelectedGrade('12');
                          setSelectedStream('advanced_bridge');
                          setSelectedTerm('EOT1');
                        }}
                        className="px-4 py-2 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold rounded-xl hover:bg-amber-100 transition cursor-pointer"
                      >
                        فيزياء 12 متقدم بريدج
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: EXAM PAGE ================= */}
        {viewMode === 'exam' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Exam View Top Control Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-5 shadow-lg flex flex-wrap items-center justify-between gap-4 border border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleBackToSelection}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>تغيير المادة والصف (العودة للاختيار)</span>
                </button>

                <div className="hidden md:flex items-center gap-2 text-xs">
                  <span className="bg-slate-800 text-amber-300 font-bold px-3 py-1 rounded-lg">
                    {SUBJECT_OPTIONS.find((s) => s.id === selectedSubject)?.name}
                  </span>
                  <span className="bg-slate-800 text-emerald-300 font-bold px-3 py-1 rounded-lg">
                    الصف {selectedGrade} ({
                      selectedStream === 'advanced' ? 'متقدم' :
                      selectedStream === 'advanced_bridge' ? 'متقدم بريدج' :
                      selectedStream === 'advanced_inspire' ? 'متقدم انسباير' : 'عام'
                    })
                  </span>
                  <span className="bg-slate-800 text-indigo-300 font-bold px-3 py-1 rounded-lg">
                    {selectedTerm}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="text-slate-300">إعداد: Mr. Mohammed Hesham</span>
              </div>
            </div>

            {/* Exam Navigation Tabs */}
            <Navbar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              totalQuestions={activeDataset.length}
              mcqCount={mcqCount}
              paperCount={paperCount}
              selectedSubject={selectedSubject}
              setSelectedSubject={setSelectedSubject}
              selectedStream={selectedStream}
              setSelectedStream={setSelectedStream}
              selectedGrade={selectedGrade}
              setSelectedGrade={setSelectedGrade}
              selectedTerm={selectedTerm}
              setSelectedTerm={setSelectedTerm}
            />

            {/* Exam Views based on activeTab */}
            {activeTab === 'matrix' ? (
              <ExamTable onSelectOutcome={handleSelectOutcome} />
            ) : activeTab === 'quiz' ? (
              <QuizMode
                questions={activeDataset}
                onAskAi={(q) => setAiModalQuestion(q)}
              />
            ) : (
              <div>
                {/* Questions List */}
                {filteredQuestions.length === 0 ? (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">لم يتم العثور على أسئلة مطابقة</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">جرب تغيير شروط التصفية أو كلمة البحث.</p>
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all cursor-pointer"
                    >
                      إعادة ضبط البحث
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredQuestions.map((question) => (
                      <QuestionCard
                        key={question.id}
                        question={question}
                        onAskAi={(q) => setAiModalQuestion(q)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-xs mt-auto">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-300 font-bold dir-ltr">
            <span className="text-amber-400">Mr. Mohammed Hesham</span>
            <span>|</span>
            <span>mohammedhesham872@gmail.com</span>
            <span>|</span>
            <span dir="ltr">+971555642674</span>
          </div>
        </div>
      </footer>

      {/* AI Tutor Modal */}
      {aiModalQuestion && (
        <AiTutorModal
          question={aiModalQuestion}
          onClose={() => setAiModalQuestion(null)}
        />
      )}
    </div>
  );
};
