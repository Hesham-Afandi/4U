import React, { useState, useEffect } from 'react';
import { ExamViewMode, Language, StudentInfo, OfficeAppSection } from '../ms/types';
import { EXAM_MODULES, MODEL_ANSWER_RUBRIC } from '../ms/data/examData';
import { OfficeSuiteHome, OFFICE_APPS } from '../ms/components/OfficeSuiteHome';
import { ExamHero } from '../ms/components/ExamHero';
import { ModuleCard } from '../ms/components/ModuleCard';
import { WordSimulator } from '../ms/components/WordSimulator';
import { PrintableExam } from '../ms/components/PrintableExam';
import { DataPackModal } from '../ms/components/DataPackModal';
import { AnswerKeyModal } from '../ms/components/AnswerKeyModal';
import { ScoreModal } from '../ms/components/ScoreModal';
import { ComingSoonModal } from '../ms/components/ComingSoonModal';
import { getTranslation } from '../ms/data/translations';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Printer, 
  ArrowLeft, 
  Clock, 
  RotateCcw, 
  Download, 
  LayoutGrid, 
  FileText, 
  Monitor, 
  Layers, 
  Globe, 
  GraduationCap
} from 'lucide-react';

interface MsExamsViewProps {
  onSwitchToCurriculum?: () => void;
  onSwitchToEot?: () => void;
  onSwitchToSat?: () => void;
  onSwitchToIg?: () => void;
  language?: 'ar' | 'en';
}

export const MsExamsView: React.FC<MsExamsViewProps> = ({
  onSwitchToCurriculum,
  onSwitchToEot,
  onSwitchToSat,
  onSwitchToIg,
  language: initialLang = 'ar'
}) => {
  const [viewMode, setViewMode] = useState<ExamViewMode>('home');
  const [language, setLanguage] = useState<Language>(initialLang);
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);

  // Timer state (60 minutes default = 3600 seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(3600);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Student info state
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    name: '',
    seatNumber: '',
    institution: '',
    group: 'Group A',
    date: new Date().toISOString().split('T')[0],
    instructorName: 'Mr. Mohammed Hesham',
  });

  // Modal states
  const [isDataPackOpen, setIsDataPackOpen] = useState<boolean>(false);
  const [isAnswerKeyOpen, setIsAnswerKeyOpen] = useState<boolean>(false);
  const [isScoreReportOpen, setIsScoreReportOpen] = useState<boolean>(false);
  
  // Coming soon modal for Excel / PowerPoint / Access
  const [selectedComingSoonApp, setSelectedComingSoonApp] = useState<OfficeAppSection | null>(null);

  // Simulator highlight scroll link
  const [highlightedCheckId, setHighlightedCheckId] = useState<string | undefined>(undefined);

  // Total tasks & points calculation
  const allTasks = EXAM_MODULES.flatMap(m => m.tasks);
  const totalTasksCount = allTasks.length;
  const totalPoints = EXAM_MODULES.reduce((sum, m) => sum + m.totalPoints, 0);
  const earnedPoints = allTasks
    .filter(t => completedTaskIds.includes(t.id))
    .reduce((sum, t) => sum + t.points, 0);

  const progressPercent = totalTasksCount > 0 ? Math.round((completedTaskIds.length / totalTasksCount) * 100) : 0;

  // Sync initial language
  useEffect(() => {
    if (initialLang) {
      setLanguage(initialLang);
    }
  }, [initialLang]);

  // Timer Countdown Effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleTaskCompleted = (taskId: string) => {
    setCompletedTaskIds(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  // Auto check task from Word simulator action
  const handleAutoCheckTask = (autoCheckId: string) => {
    const matchingTask = allTasks.find(t => t.autoCheckId === autoCheckId);
    if (matchingTask && !completedTaskIds.includes(matchingTask.id)) {
      setCompletedTaskIds(prev => [...prev, matchingTask.id]);
    }
  };

  const handleOpenSimulatorForTask = (autoCheckId?: string) => {
    setHighlightedCheckId(autoCheckId);
    setViewMode('simulator');
  };

  const handleResetExam = () => {
    if (window.confirm(language === 'ar' ? 'هل أنت تأكد من إعادة إعداد التقدم وبدء الاختبار من جديد؟' : 'Are you sure you want to reset all exam progress and retake the exam?')) {
      setCompletedTaskIds([]);
      setTimerSeconds(3600);
      setIsTimerRunning(true);
    }
  };

  const handleSelectApp = (appId: 'word' | 'excel' | 'powerpoint' | 'access') => {
    if (appId === 'word') {
      setViewMode('exam');
    } else {
      const app = OFFICE_APPS.find(a => a.id === appId);
      if (app) setSelectedComingSoonApp(app);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors pb-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* TOP PLATFORM SECTION SWITCHER HEADER */}
      <div className="bg-slate-900 border-b border-slate-800 text-white py-3 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Main Title & Section Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-lg shadow-sm">
              💻
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>{language === 'ar' ? 'اختبارات برامج مايكروسوفت أوفيس' : 'MS Office Practical Exams'}</span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  MS Exams 2026
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                {language === 'ar' ? 'اختبارات عملية تفاعلية مع المحاكي المباشر والتقييم التلقائي' : 'Interactive practical exams with live simulator & auto-grading'}
              </p>
            </div>
          </div>

          {/* Quick Platform Switcher Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {onSwitchToCurriculum && (
              <button
                onClick={onSwitchToCurriculum}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📚</span>
                <span>{language === 'ar' ? 'قسم المناهج' : 'Curriculum'}</span>
              </button>
            )}
            {onSwitchToEot && (
              <button
                onClick={onSwitchToEot}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📜</span>
                <span>{language === 'ar' ? 'الهياكل (EOT)' : 'EOT Specs'}</span>
              </button>
            )}
            {onSwitchToSat && (
              <button
                onClick={onSwitchToSat}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>🎓</span>
                <span>{language === 'ar' ? 'قسم السات (SAT)' : 'SAT Exams'}</span>
              </button>
            )}
            {onSwitchToIg && (
              <button
                onClick={onSwitchToIg}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>📝</span>
                <span>IG Exams</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MS EXAMS SUB-HEADER & TOOLBAR */}
      <div className="bg-slate-900/95 border-b border-slate-800 py-2.5 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Internal View Modes Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 overflow-x-auto max-w-full">
            <button
              onClick={() => setViewMode('home')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                viewMode === 'home'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Office Portal'}</span>
            </button>
            <button
              onClick={() => setViewMode('exam')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                viewMode === 'exam'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'أسئلة اختبار وورد' : 'Word Exam Tasks'}</span>
            </button>
            <button
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                viewMode === 'simulator'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Monitor className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'ar' ? 'المحاكي المباشر' : 'Live Simulator'}</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">LIVE</span>
            </button>
            <button
              onClick={() => setViewMode('printable')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                viewMode === 'printable'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'ar' ? 'اختبار ورقي' : 'Paper Exam'}</span>
            </button>
            <button
              onClick={() => setViewMode('teacher')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                viewMode === 'teacher'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'ar' ? 'دليل المعلم' : 'Teacher Rubric'}</span>
            </button>
          </div>

          {/* Controls: Language, Timer & Score Pill */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  language === 'ar' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية 🇪🇬
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                English 🇺🇸
              </button>
            </div>

            {/* Timer Box */}
            <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-slate-200">
              <Clock className={`w-4 h-4 ${isTimerRunning ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
              <span className="font-mono text-sm font-bold text-amber-300">
                {formatTime(timerSeconds)}
              </span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-[11px] bg-slate-700 hover:bg-slate-600 text-slate-200 px-2 py-0.5 rounded transition cursor-pointer"
              >
                {isTimerRunning ? (language === 'ar' ? 'إيقاف' : 'Pause') : (language === 'ar' ? 'بدء' : 'Start')}
              </button>
            </div>

            {/* Score Pill */}
            <button
              onClick={() => setIsScoreReportOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-xl font-bold text-xs shadow transition border border-emerald-400/30 cursor-pointer"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>{language === 'ar' ? 'الدرجة:' : 'Score:'} {earnedPoints} / {totalPoints}</span>
            </button>
          </div>
        </div>

        {/* Quick Tools & Progress bar */}
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300 gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-200">
              {language === 'ar' ? 'الإنجاز:' : 'Progress:'} {completedTaskIds.length} / {totalTasksCount} ({progressPercent}%)
            </span>
            <div className="w-28 sm:w-44 bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDataPackOpen(true)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-blue-300 px-2.5 py-1 rounded-lg border border-blue-500/20 transition text-xs font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'ar' ? 'حزمة بيانات التمارين' : 'Data Pack'}</span>
            </button>
            <button
              onClick={() => setIsAnswerKeyOpen(true)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-purple-300 px-2.5 py-1 rounded-lg border border-purple-500/20 transition text-xs font-semibold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'ar' ? 'نموذج الإجابة' : 'Answer Key'}</span>
            </button>
            <button
              onClick={handleResetExam}
              className="flex items-center gap-1 text-slate-400 hover:text-rose-300 px-2 py-1 rounded hover:bg-rose-950/40 transition text-xs font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'إعادة الإعداد' : 'Reset Exam'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN VIEW CONTENT */}
      <main className="transition-all duration-300">
        {/* VIEW 1: OFFICE SUITE HOME */}
        {viewMode === 'home' && (
          <OfficeSuiteHome
            language={language}
            earnedPoints={earnedPoints}
            totalPoints={totalPoints}
            completedTasksCount={completedTaskIds.length}
            totalTasksCount={totalTasksCount}
            onSelectApp={handleSelectApp}
          />
        )}

        {/* VIEW 2: WORD EXAM TASKS LIST */}
        {viewMode === 'exam' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <ExamHero
              language={language}
              studentInfo={studentInfo}
              onUpdateStudentInfo={setStudentInfo}
              earnedPoints={earnedPoints}
              totalPoints={totalPoints}
              completedTasksCount={completedTaskIds.length}
              totalTasksCount={totalTasksCount}
              onStartWordExam={() => setViewMode('exam')}
              onOpenSimulator={() => setViewMode('simulator')}
              onOpenTeacherRubric={() => setViewMode('teacher')}
              onOpenPrintable={() => setViewMode('printable')}
              onResetExam={handleResetExam}
            />

            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>
                  {language === 'ar' ? 'وحدات وأسئلة اختبار وورد العملي (6 وحدات)' : 'MS Word Exam Modules (6 Modules)'}
                </span>
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {language === 'ar' ? 'انقر على المهام المكتملة أو جرب المحاكي التفاعلي' : 'Check tasks as completed or test in live simulator'}
              </span>
            </div>

            <div className="space-y-6">
              {EXAM_MODULES.map((module, idx) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  completedTaskIds={completedTaskIds}
                  onToggleTaskCompleted={handleToggleTaskCompleted}
                  onOpenSimulatorForTask={handleOpenSimulatorForTask}
                  defaultExpanded={idx === 0}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: LIVE INTERACTIVE WORD SIMULATOR */}
        {viewMode === 'simulator' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <button
                  onClick={() => setViewMode('exam')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm transition mb-1 cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  <span>
                    {language === 'ar' ? 'العودة لقائمة أسئلة الاختبار' : 'Back to Exam Question List'}
                  </span>
                </button>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    {language === 'ar' ? 'المحاكي المباشر لبرنامج مايكروسوفت وورد' : 'Microsoft Word Live Interactive Simulator'}
                  </span>
                </h2>
              </div>
              
              <div className="text-right">
                <span className="text-xs text-slate-500 block">
                  {language === 'ar' ? 'التقييم التلقائي:' : 'Auto-Grading Progress:'}
                </span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {earnedPoints} / {totalPoints} Pts
                </span>
              </div>
            </div>

            <WordSimulator
              completedTaskIds={completedTaskIds}
              onAutoCheckTask={handleAutoCheckTask}
              highlightedCheckId={highlightedCheckId}
            />
          </div>
        )}

        {/* VIEW 4: PRINTABLE PAPER EXAM SHEET */}
        {viewMode === 'printable' && (
          <PrintableExam
            studentInfo={studentInfo}
            earnedPoints={earnedPoints}
            totalPoints={totalPoints}
          />
        )}

        {/* VIEW 5: TEACHER RUBRIC & ANSWER KEY VIEW */}
        {viewMode === 'teacher' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                      {language === 'ar' ? 'دليل المعلم ونموذج التقييم والإجابة' : 'Teacher Guide & Model Evaluation Rubric'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {language === 'ar' ? 'المعايير الرسمية ومسارات الأوامر لتقييم اختبار وورد العملي' : 'Official criteria and command paths for grading MS Word practical exams'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow transition hover:opacity-90 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>{language === 'ar' ? 'طباعة الدليل' : 'Print Rubric'}</span>
                </button>
              </div>

              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
                <table className="w-full text-xs text-right border-collapse" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <thead>
                    <tr className="bg-slate-900 dark:bg-slate-950 text-white font-bold">
                      <th className="p-3">{language === 'ar' ? 'الوحدة' : 'Module Name'}</th>
                      <th className="p-3">{language === 'ar' ? 'معايير التقييم' : 'Evaluation Criteria'}</th>
                      <th className="p-3">{language === 'ar' ? 'خطوات الأوامر والشريط' : 'Command & Ribbon Steps'}</th>
                      <th className="p-3 text-center">{language === 'ar' ? 'الدرجة' : 'Score'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MODEL_ANSWER_RUBRIC.map((rubric, idx) => (
                      <tr key={idx} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3 font-bold text-slate-900 dark:text-slate-100">{rubric.module}</td>
                        <td className="p-3 text-slate-700 dark:text-slate-300">{rubric.criteria}</td>
                        <td className="p-3 font-mono text-blue-900 dark:text-blue-300 bg-slate-50 dark:bg-slate-900">{rubric.steps}</td>
                        <td className="p-3 font-mono font-bold text-center text-purple-700 dark:text-purple-300">{rubric.score} Pts</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800 mt-12 no-print" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span className="font-semibold text-slate-300">
              {language === 'ar' ? 'منصة 4U التعليمية — قسم الاختبارات العملية لمايكروسوفت أوفيس 2026' : '4U Platform — Microsoft Office Practical Exams Portal 2026'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span>{language === 'ar' ? 'إعداد وتصميم:' : 'Created by'}</span>
            <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg border border-blue-500/30 font-bold tracking-wide">
              Mr. Mohammed Hesham
            </span>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <DataPackModal
        isOpen={isDataPackOpen}
        onClose={() => setIsDataPackOpen(false)}
      />

      <AnswerKeyModal
        isOpen={isAnswerKeyOpen}
        onClose={() => setIsAnswerKeyOpen(false)}
      />

      <ScoreModal
        isOpen={isScoreReportOpen}
        onClose={() => setIsScoreReportOpen(false)}
        earnedPoints={earnedPoints}
        totalPoints={totalPoints}
        completedTaskIds={completedTaskIds}
        studentInfo={studentInfo}
        onResetExam={handleResetExam}
        onGoToHome={() => {
          setIsScoreReportOpen(false);
          setViewMode('home');
        }}
      />

      <ComingSoonModal
        app={selectedComingSoonApp}
        isOpen={selectedComingSoonApp !== null}
        onClose={() => setSelectedComingSoonApp(null)}
        onStartWordExam={() => setViewMode('exam')}
      />
    </div>
  );
};
