import React from 'react';
import { Language, StudentInfo } from '../types';
import { getTranslation } from '../data/translations';
import { 
  UserCheck, 
  School, 
  Calendar, 
  Hash, 
  FileSpreadsheet, 
  AlertCircle, 
  CheckCircle, 
  Sparkles,
  Award
} from 'lucide-react';

interface ExamHeroProps {
  studentInfo: StudentInfo;
  setStudentInfo: React.Dispatch<React.SetStateAction<StudentInfo>>;
  language: Language;
  onStartExam: () => void;
  onOpenDataPack: () => void;
  completedTasksCount: number;
  totalTasksCount: number;
  totalPoints: number;
  earnedPoints: number;
}

export const ExamHero: React.FC<ExamHeroProps> = ({
  studentInfo,
  setStudentInfo,
  language,
  onStartExam,
  onOpenDataPack,
  completedTasksCount,
  totalTasksCount,
  totalPoints,
  earnedPoints,
}) => {
  const t = (key: keyof typeof import('../data/translations').translations['en']) => getTranslation(language, key);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Visual Header Banner - Clean Text Banner */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 overflow-hidden border-b border-blue-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Banner Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-md shadow border border-blue-400/30">
                {t('officialBadge')}
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-md border border-emerald-500/40 font-semibold">
                {t('pointsAndModules')}
              </span>
              <span className="bg-purple-500/20 text-purple-300 text-xs px-2.5 py-1 rounded-md border border-purple-500/30 font-medium">
                {language === 'ar' ? 'النسخة العربية (EG)' : 'English Edition (US)'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t('examTitle')}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
              {t('examDesc')}
            </p>
          </div>

          {/* Quick Score Badge */}
          <div className="bg-slate-900/90 backdrop-blur border border-slate-700/80 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center font-black text-xl font-mono shadow">
              {earnedPoints}
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{t('earnedScore')}</div>
              <div className="text-xs font-bold text-white">/ {totalPoints} pts</div>
              <div className="text-[10px] text-emerald-400 mt-0.5 font-semibold">
                {completedTasksCount} / {totalTasksCount} {t('tasksCompleted')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Details Form & Exam Instructions */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Student Info Card */}
          <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-800/80 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">{t('studentDataTitle')}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {t('studentName')}:
                </label>
                <input
                  type="text"
                  name="name"
                  value={studentInfo.name}
                  onChange={handleChange}
                  placeholder={t('studentNamePlaceholder')}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Hash className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {t('seatNumber')}:
                </label>
                <input
                  type="text"
                  name="seatNumber"
                  value={studentInfo.seatNumber}
                  onChange={handleChange}
                  placeholder={t('seatNumberPlaceholder')}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <School className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {t('institution')}:
                </label>
                <input
                  type="text"
                  name="institution"
                  value={studentInfo.institution}
                  onChange={handleChange}
                  placeholder={t('institutionPlaceholder')}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {t('trainingGroup')} & {t('examDate')}:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="group"
                    value={studentInfo.group}
                    onChange={handleChange}
                    placeholder="Group A"
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="date"
                    value={studentInfo.date}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Exam Instructions & Data Pack Quick Buttons */}
          <div className="bg-blue-50/60 dark:bg-blue-950/40 rounded-xl p-5 border border-blue-100 dark:border-blue-900/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                <h3 className="font-bold text-blue-900 dark:text-blue-200 text-base">
                  {language === 'ar' ? 'تعليمات الاختبار العملي' : 'Practical Exam Instructions'}
                </h3>
              </div>

              <ul className="text-xs text-blue-900 dark:text-blue-300 space-y-2 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    {language === 'ar' 
                      ? 'قم بتنفيذ جميع المهام المطلوب إما داخل برنامج مايكروسوفت وورد أو عبر المحاكي التفاعلي المباشر.'
                      : 'Execute all tasks either in Microsoft Word on your PC or inside our built-in Live Simulator.'
                    }
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'التزم بالمسارات الموضحة لكل أمر (ألسنة الشريط، أحجام الخطوط، الهوامش، والألوان).'
                      : 'Follow exact ribbon paths, font sizes, margins, and colors specified in each task.'
                    }
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'استخدم زر "حزمة البيانات" لنسخ النصوص الخام وقاعدة بيانات الدمج البريدي بضغطة زر.'
                      : 'Use the Data Pack button to copy raw document text and Mail Merge dataset instantly.'
                    }
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 pt-3 border-t border-blue-200/60 dark:border-blue-900/50 flex flex-col gap-2">
              <button
                onClick={onOpenDataPack}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-bold text-xs shadow-md transition"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>
                  {language === 'ar' ? 'نسخ / عرض حزمة بيانات الاختبار' : 'Download / Copy Exam Data Pack'}
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
