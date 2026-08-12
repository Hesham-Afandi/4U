import React from 'react';
import { 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Database, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { Language, OfficeAppSection } from '../types';
import { getTranslation } from '../data/translations';

interface OfficeSuiteHomeProps {
  onSelectApp: (appId: 'word' | 'excel' | 'powerpoint' | 'access') => void;
  language: Language;
  earnedPoints: number;
  totalPoints: number;
  completedTasksCount: number;
  totalTasksCount: number;
}

export const OFFICE_APPS: OfficeAppSection[] = [
  {
    id: 'word',
    title: 'Microsoft Word Practical Exam',
    subtitle: 'Word Processing & Document Design',
    iconName: 'FileText',
    brandColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    lightBg: 'bg-blue-50/70',
    borderColor: 'border-blue-200 hover:border-blue-400',
    badgeText: 'Active • 100 Points Full Exam',
    isAvailable: true,
    description: 'Comprehensive practical exam covering Page Setup, Typography, Advanced Data Tables, SmartArt, Automatic TOC, and Mail Merge.',
    features: [
      '6 Comprehensive Practical Modules',
      'Live Interactive Word Simulator',
      'Printable Official Paper Exam Sheet',
      'Teacher Answer Key & Auto Grader'
    ]
  },
  {
    id: 'excel',
    title: 'Microsoft Excel Practical Exam',
    subtitle: 'Spreadsheets, Formulas & Data Analysis',
    iconName: 'FileSpreadsheet',
    brandColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    lightBg: 'bg-emerald-50/70',
    borderColor: 'border-emerald-200 hover:border-emerald-400',
    badgeText: 'Coming Soon Insha\'Allah',
    isAvailable: false,
    description: 'Upcoming practical exam covering Formulas & Functions (SUM, AVERAGE, IF, VLOOKUP, INDEX/MATCH), PivotTables, and Charts.',
    features: [
      'Financial Formulas & Conditional Formatting',
      'PivotTables & Dynamic Data Dashboards',
      'VLOOKUP & Data Validation Rules',
      'Interactive Spreadsheet Simulator'
    ]
  },
  {
    id: 'powerpoint',
    title: 'Microsoft PowerPoint Practical Exam',
    subtitle: 'Presentation Design & Multimedia',
    iconName: 'Presentation',
    brandColor: 'bg-orange-600 hover:bg-orange-700 text-white',
    lightBg: 'bg-orange-50/70',
    borderColor: 'border-orange-200 hover:border-orange-400',
    badgeText: 'Active • 100 Points Full Exam',
    isAvailable: true,
    description: 'Comprehensive practical exam covering Master Slide layouts, Custom Motion Animations, Slide Transitions, SmartArt Diagrams, Audio/Video, and Presenter View.',
    features: [
      '6 Comprehensive Practical Modules',
      'Live Interactive Presentation Simulator',
      'Morph Transitions & Trigger Animations',
      'Teacher Answer Key & Auto Grader'
    ]
  },
  {
    id: 'access',
    title: 'Microsoft Access Practical Exam',
    subtitle: 'Relational Database Management',
    iconName: 'Database',
    brandColor: 'bg-rose-700 hover:bg-rose-800 text-white',
    lightBg: 'bg-rose-50/70',
    borderColor: 'border-rose-200 hover:border-rose-400',
    badgeText: 'Coming Soon Insha\'Allah',
    isAvailable: false,
    description: 'Upcoming practical exam covering Relational Table design, Primary/Foreign Keys, Select & Parameter SQL Queries, Forms, and Reports.',
    features: [
      'Table Schema & Relationship Integrity',
      'SQL Queries & Expression Builder',
      'Custom User Forms & Input Controls',
      'Printable Summary Reports'
    ]
  }
];

export const OfficeSuiteHome: React.FC<OfficeSuiteHomeProps> = ({
  onSelectApp,
  language,
  earnedPoints,
  totalPoints,
  completedTasksCount,
  totalTasksCount,
}) => {
  const t = (key: keyof typeof import('../data/translations').translations['en']) => getTranslation(language, key);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-8 h-8 text-blue-600" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-8 h-8 text-emerald-600" />;
      case 'Presentation': return <Presentation className="w-8 h-8 text-orange-600" />;
      case 'Database': return <Database className="w-8 h-8 text-rose-600" />;
      default: return <FileText className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden mb-10 border border-slate-800">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/10 pointer-events-none rounded-r-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 mb-3">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>MS Office Assessment Portal 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t('homeTitle')}
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              {t('homeSubtitle')}
            </p>
          </div>

          {/* Quick Stats Summary */}
          <div className="bg-slate-800/90 backdrop-blur border border-slate-700 p-5 rounded-2xl flex items-center gap-5 shrink-0 shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
              <Award className="w-7 h-7 text-yellow-300" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">
                {language === 'ar' ? 'تقدم اختبار وورد' : 'MS Word Exam Progress'}
              </div>
              <div className="text-xl font-black text-white">
                {earnedPoints} / {totalPoints} <span className="text-xs text-emerald-400 font-normal">pts</span>
              </div>
              <div className="text-[11px] text-slate-400">
                {completedTasksCount} / {totalTasksCount} {t('tasksCompleted')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Office Sections Grid */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>
              {language === 'ar' ? 'اختر تطبيق مايكروسوفت أوفيس للتقييم' : 'Select Microsoft Office Application Exam'}
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {language === 'ar' ? 'اختر التطبيق للبدء مباشرة في التقييم' : 'Choose an exam section to launch directly'}
          </p>
        </div>
        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">4 Applications</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {OFFICE_APPS.map(app => (
          <div
            key={app.id}
            onClick={() => onSelectApp(app.id)}
            className={`bg-white dark:bg-slate-900 rounded-2xl border ${app.borderColor} dark:border-slate-800 dark:hover:border-slate-700 p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden`}
          >
            {/* Background accent highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-bl-full opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none" />

            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl ${app.lightBg} dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                    {getIconComponent(app.iconName)}
                  </div>
                  <div>
                    <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md mb-1 ${
                      app.isAvailable 
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' 
                        : 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                    }`}>
                      {app.isAvailable 
                        ? (language === 'ar' ? 'متاح الآن • اختبار 100 درجة' : app.badgeText) 
                        : (language === 'ar' ? 'قريباً إن شاء الله' : app.badgeText)}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {language === 'ar' ? (
                        app.id === 'word' ? 'اختبار مايكروسوفت وورد العملي' :
                        app.id === 'powerpoint' ? 'اختبار مايكروسوفت باوربوينت العملي' :
                        app.title
                      ) : app.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {language === 'ar' ? (
                  app.id === 'word' 
                    ? 'اختبار عملي متكامل يغطي إعدادات الصفحة، تنسيق النصوص، الجداول المتقدمة والصيغ، رسومات SmartArt، الجدول الآلي، والدمج البريدي.' 
                    : app.id === 'powerpoint'
                    ? 'اختبار عملي متكامل يغطي الشريحة الرئيسية، نسق الألوان، حركات المشغلات، انتقالات Morph، وتصميم العروض التفاعلية.'
                    : app.description
                ) : app.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 mb-6 bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  {language === 'ar' ? 'نطاق مميزات القسم:' : 'Exam Scope & Features:'}
                </span>
                {app.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${app.isAvailable ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'} shrink-0`} />
                    <span>
                      {language === 'ar' ? (
                        app.id === 'word' ? [
                          '6 وحدات اختبارية شاملة',
                          'محاكي تفاعلي مباشر لبرنامج وورد',
                          'ورقة اختبار ورقية رسمية قابلة للطباعة',
                          'دليل إجابة المشرف والتقييم الآلي'
                        ][idx] : app.id === 'powerpoint' ? [
                          '6 وحدات اختبارية شاملة (100 درجة)',
                          'محاكي تفاعلي مباشر لبرنامج باوربوينت',
                          'مخططات SmartArt وحركات Morph التفاعلية',
                          'دليل إجابة المعلم وفحص التقييم الآلي'
                        ][idx] : feat
                      ) : feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectApp(app.id);
              }}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all ${
                app.isAvailable 
                  ? app.brandColor
                  : 'bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white'
              }`}
            >
              <span>
                {app.isAvailable 
                  ? (language === 'ar' ? (app.id === 'powerpoint' ? 'ابدأ اختبار باوربوينت الآن' : 'ابدأ اختبار وورد الآن') : (app.id === 'powerpoint' ? 'Start PowerPoint Exam' : t('startWordExam'))) 
                  : (language === 'ar' ? 'قريباً إن شاء الله' : t('comingSoon'))}
              </span>
              <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

