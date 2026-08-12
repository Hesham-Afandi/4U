import React, { useState } from 'react';
import { DomainId } from '../types';
import { DOMAINS } from '../data/satQuestions';
import { Clock, Eye, EyeOff, Globe, Layers, Award, Zap, BookOpen, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: 'practice' | 'exam' | 'formulas';
  setActiveTab: (tab: 'practice' | 'exam' | 'formulas') => void;
  selectedDomain: DomainId | 'all';
  setSelectedDomain: (domain: DomainId | 'all') => void;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  examTimerSeconds?: number;
  isExamRunning?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedDomain,
  setSelectedDomain,
  lang,
  setLang,
  examTimerSeconds = 0,
  isExamRunning = false
}) => {
  const [showTimer, setShowTimer] = useState(true);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {/* Top Header Bar - Contains ONLY the Timer */}
      <div className="bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-2xl py-2.5 px-4 shadow-md mb-2">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          
          {/* Centered Digital SAT Timer */}
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-5 py-1.5 rounded-full shadow-inner">
            <Clock className={`w-4 h-4 ${isExamRunning ? 'text-rose-400 animate-pulse' : 'text-indigo-400'}`} />
            <span className="font-mono text-sm font-bold tracking-wider text-slate-100">
              {showTimer ? formatTimer(examTimerSeconds) : '--:--'}
            </span>
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="text-xs text-slate-400 hover:text-slate-200 transition ml-1 flex items-center gap-1"
              title={showTimer ? (lang === 'ar' ? 'إخفاء المؤقت' : 'Hide Timer') : (lang === 'ar' ? 'إظهار المؤقت' : 'Show Timer')}
            >
              {showTimer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                {showTimer ? (lang === 'ar' ? 'إخفاء' : 'Hide') : (lang === 'ar' ? 'إظهار' : 'Show')}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Secondary Bar for Navigation & Language */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl px-3 sm:px-4 py-2.5 text-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Tabs */}
          <nav className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'practice' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white bg-slate-950/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'التمارين الفردية' : 'Practice Bank'}</span>
            </button>

            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'exam' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white bg-slate-950/60'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'الاختبار الموقوت (30 سؤالاً)' : 'Timed SAT Exam'}</span>
            </button>

            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'formulas' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white bg-slate-950/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'القوانين والمنهج' : 'Formulas & Syllabus'}</span>
            </button>
          </nav>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>

        {/* Domain Filter Bar for Practice Mode */}
        {activeTab === 'practice' && (
          <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-bold text-slate-400 shrink-0">
              {lang === 'ar' ? 'تصفية الفروع:' : 'Filter Domain:'}
            </span>

            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border ${
                selectedDomain === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {lang === 'ar' ? 'جميع الفروع (120 سؤالاً)' : 'All Domains (120 Qs)'}
            </button>

            {DOMAINS.map((dom) => (
              <button
                key={dom.id}
                onClick={() => setSelectedDomain(dom.id)}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border ${
                  selectedDomain === dom.id
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {lang === 'ar' ? dom.titleAr : dom.titleEn}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
