import React, { useState } from 'react';
import { ExamResult, Question } from '../types';
import { DOMAINS } from '../data/satQuestions';
import { Award, CheckCircle2, XCircle, RotateCcw, Download, Printer, ChevronDown, ChevronUp, FileSpreadsheet } from 'lucide-react';

interface ResultsPanelProps {
  result: ExamResult;
  questions: Question[];
  onRestart: () => void;
  lang: 'en' | 'ar';
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ result, questions, onRestart, lang }) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl text-slate-100 max-w-4xl mx-auto my-6 space-y-8">
      {/* Printable Report Header */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold mb-2">
            <Award className="w-4 h-4" />
            <span>Digital SAT Math Official Practice Report</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            {lang === 'ar' ? 'تقرير نتائج اختبار الرياضيات SAT' : 'Digital SAT Math Score Report'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar' ? `الطالب: ${result.studentName || 'زائر'} | الصف: ${result.studentClass || '12'} | التاريخ: ${result.date}` : `Student: ${result.studentName || 'Guest'} | Grade: ${result.studentClass || '12'} | Date: ${result.date}`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold transition"
          >
            <Printer className="w-4 h-4" />
            <span>{lang === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}</span>
          </button>

          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-900/30"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{lang === 'ar' ? 'إعادة الاختبار' : 'Retake Test'}</span>
          </button>
        </div>
      </div>

      {/* Primary Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scaled SAT Score (200 - 800) */}
        <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-indigo-500/30 rounded-2xl p-6 text-center shadow-inner">
          <div className="text-xs uppercase font-bold text-indigo-300 tracking-wider mb-1">
            {lang === 'ar' ? 'درجة السات المقدرة (Scaled SAT Score)' : 'Estimated SAT Score'}
          </div>
          <div className="text-5xl font-black text-amber-300 my-2 tracking-tight">
            {result.satScaledScore}
          </div>
          <div className="text-xs text-indigo-200">
            {lang === 'ar' ? 'من نطاق (200 - 800)' : 'Out of 200 - 800 Range'}
          </div>
        </div>

        {/* Accuracy & Correct Count */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
            {lang === 'ar' ? 'نسبة الإجابات الصحيحة' : 'Total Accuracy'}
          </div>
          <div className="text-4xl font-black text-emerald-400 my-2">
            {result.percentage}%
          </div>
          <div className="text-xs text-slate-400">
            {result.score} / {result.total} {lang === 'ar' ? 'أسئلة صحيحة' : 'Correct Questions'}
          </div>
        </div>

        {/* Time Spent */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
            {lang === 'ar' ? 'الوقت المستغرق' : 'Time Spent'}
          </div>
          <div className="text-4xl font-black text-cyan-400 my-2">
            {formatTime(result.timeSpentSeconds)}
          </div>
          <div className="text-xs text-slate-400">
            ~{Math.round(result.timeSpentSeconds / Math.max(result.total, 1))}s {lang === 'ar' ? 'لكل سؤال' : 'per question'}
          </div>
        </div>
      </div>

      {/* Score Breakdown per Domain */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>📊</span>
          <span>{lang === 'ar' ? 'الأداء حسب فروع الرياضيات' : 'Performance by Math Domain'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOMAINS.map((dom) => {
            const domScore = result.domainScores[dom.id] || { correct: 0, total: 0 };
            const pct = domScore.total > 0 ? Math.round((domScore.correct / domScore.total) * 100) : 0;

            return (
              <div key={dom.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-200">{lang === 'ar' ? dom.titleAr : dom.titleEn}</span>
                  <span className="text-indigo-400">{domScore.correct} / {domScore.total} ({pct}%)</span>
                </div>

                <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-indigo-500 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Question Review */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>📝</span>
          <span>{lang === 'ar' ? 'مراجعة الأسئلة والإجابات التفصيلية' : 'Detailed Question Review'}</span>
        </h3>

        <div className="space-y-3">
          {questions.map((q, idx) => {
            const uAns = result.userAnswers[q.id];
            const isAns = uAns !== undefined && uAns !== '';
            const isRight = isAns && String(uAns).trim() === String(q.correctAnswer).trim();
            const isExpanded = expandedQuestionId === q.id;

            return (
              <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition">
                <button
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-900/60 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                      isRight ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}>
                      {isRight ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-200 line-clamp-1">
                        Q{idx + 1}: {lang === 'ar' ? q.questionAr : q.questionEn}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {lang === 'ar' ? 'إجابتك:' : 'Your Answer:'} <span className={isRight ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{String(uAns ?? 'لم تجب')}</span> | {lang === 'ar' ? 'الإجابة الصحيحة:' : 'Correct Answer:'} <span className="text-amber-300 font-bold">{String(q.correctAnswer)}</span>
                      </div>
                    </div>
                  </div>

                  {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                {isExpanded && (
                  <div className="p-4 bg-slate-900/80 border-t border-slate-800 text-xs space-y-2">
                    <div className="text-slate-300">{lang === 'ar' ? q.explanationAr : q.explanationEn}</div>
                    <div className="pt-2 text-indigo-400 font-mono">
                      {(lang === 'ar' ? q.solutionStepsAr : q.solutionStepsEn).join(' → ')}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
