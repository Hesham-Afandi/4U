import React from 'react';
import { ExamViewMode, Language, StudentInfo } from '../types';
import { getTranslation } from '../data/translations';
import { 
  FileText, 
  Monitor, 
  Printer, 
  BookOpen, 
  Clock, 
  Award, 
  RotateCcw, 
  Download,
  Sparkles,
  LayoutGrid,
  Globe
} from 'lucide-react';

interface HeaderProps {
  viewMode: ExamViewMode;
  setViewMode: (mode: ExamViewMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedApp?: 'word' | 'excel' | 'powerpoint' | 'access';
  onSelectApp?: (app: 'word' | 'excel' | 'powerpoint' | 'access') => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  setIsTimerRunning: (running: boolean) => void;
  resetTimer: () => void;
  completedTaskIds: string[];
  totalTasksCount: number;
  earnedPoints: number;
  totalPoints: number;
  onOpenDataPack: () => void;
  onOpenAnswerKey: () => void;
  onOpenScoreReport: () => void;
  onResetProgress: () => void;
  studentInfo: StudentInfo;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  language,
  setLanguage,
  selectedApp = 'word',
  onSelectApp,
  timerSeconds,
  isTimerRunning,
  setIsTimerRunning,
  resetTimer,
  completedTaskIds,
  totalTasksCount,
  earnedPoints,
  totalPoints,
  onOpenDataPack,
  onOpenAnswerKey,
  onOpenScoreReport,
  onResetProgress,
  studentInfo,
}) => {
  const t = (key: keyof typeof import('../data/translations').translations['en']) => getTranslation(language, key);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.round((completedTaskIds.length / totalTasksCount) * 100) || 0;

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-xl border-b border-slate-800 no-print" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-3 gap-4">
          
          {/* Logo & Title & Language Toggle */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode('home')}
                className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 hover:scale-105 transition-transform"
                title="Return to Office Suite Portal"
              >
                <LayoutGrid className="w-6 h-6 text-white" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded-md border border-blue-500/30 font-semibold">
                    {t('portalBadge')}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">MS Office 2026</span>
                </div>
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {t('portalTitle')}
                </h1>
              </div>
            </div>

            {/* Mobile Language Toggle */}
            <div className="flex lg:hidden items-center bg-slate-800 p-1 rounded-xl border border-slate-700 shrink-0">
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-1 px-2 py-1 text-xs font-bold text-blue-300 hover:bg-slate-700 rounded-lg transition"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? '🇪🇬 العربية' : '🇺🇸 EN'}</span>
              </button>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/60 shadow-inner overflow-x-auto max-w-full">
            <button
              id="nav-home-mode-btn"
              onClick={() => setViewMode('home')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'home'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('navOfficePortal')}</span>
            </button>

            <button
              id="nav-exam-mode-btn"
              onClick={() => setViewMode('exam')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'exam'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>
                {selectedApp === 'powerpoint' 
                  ? (language === 'ar' ? 'مهام باوربوينت' : t('navPptTasks')) 
                  : (language === 'ar' ? 'مهام وورد' : t('navWordTasks'))}
              </span>
            </button>

            <button
              id="nav-simulator-mode-btn"
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'simulator'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Monitor className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('navLiveSimulator')}</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-mono">LIVE</span>
            </button>

            <button
              id="nav-printable-mode-btn"
              onClick={() => setViewMode('printable')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'printable'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('navPaperExam')}</span>
            </button>

            <button
              id="nav-teacher-mode-btn"
              onClick={() => setViewMode('teacher')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'teacher'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>{t('navTeacherKey')}</span>
            </button>
          </div>

          {/* Language Switcher, Timer & Quick Score Stats */}
          <div className="flex items-center gap-3">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 shadow-inner">
              <button
                id="lang-ar-btn"
                onClick={() => setLanguage('ar')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'ar'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
                title="تغيير اللغة إلى العربية (مصر)"
              >
                <span className="text-xs">🇪🇬</span>
                <span>العربية (EG)</span>
              </button>
              <button
                id="lang-en-btn"
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
                title="Switch language to English (US)"
              >
                <span className="text-xs">🇺🇸</span>
                <span>English (US)</span>
              </button>
            </div>

            {/* Timer Box */}
            <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-slate-200">
              <Clock className={`w-4 h-4 ${isTimerRunning ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
              <span className="font-mono text-base font-bold text-amber-300 tracking-wider">
                {formatTime(timerSeconds)}
              </span>
              <button
                id="timer-toggle-btn"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-2 py-0.5 rounded transition"
                title={isTimerRunning ? "Pause Timer" : "Start Timer"}
              >
                {isTimerRunning ? t('timerPause') : t('timerStart')}
              </button>
            </div>

            {/* Score Pill */}
            <button
              id="header-score-btn"
              onClick={onOpenScoreReport}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-md transition-all border border-emerald-400/30"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>{t('scoreLabel')}: {earnedPoints} / {totalPoints}</span>
            </button>
          </div>

        </div>

        {/* Sub Header Action Bar */}
        <div className="flex flex-wrap items-center justify-between py-2 border-t border-slate-800/80 text-xs text-slate-300 gap-3">
          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-200">
              {t('completionLabel')}: {completedTaskIds.length} / {totalTasksCount} ({progressPercent}%)
            </span>
            <div className="w-28 sm:w-44 bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-2">
            <button
              id="raw-data-btn"
              onClick={onOpenDataPack}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-blue-300 px-2.5 py-1 rounded-lg border border-blue-500/20 transition text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('dataPackBtn')}</span>
            </button>

            <button
              id="answer-key-btn"
              onClick={onOpenAnswerKey}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-purple-300 px-2.5 py-1 rounded-lg border border-purple-500/20 transition text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{t('answerKeyBtn')}</span>
            </button>

            <button
              id="reset-exam-btn"
              onClick={onResetProgress}
              className="flex items-center gap-1 text-slate-400 hover:text-rose-300 px-2 py-1 rounded hover:bg-rose-950/40 transition text-xs font-semibold"
              title="Reset progress and restart exam"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('resetBtn')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

