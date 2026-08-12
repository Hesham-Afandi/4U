import React from 'react';
import { StudentInfo } from '../types';
import { EXAM_MODULES } from '../data/examData';
import { Award, CheckCircle2, X, Printer, Sparkles, RefreshCw, LayoutGrid } from 'lucide-react';

interface ScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  earnedPoints: number;
  totalPoints: number;
  completedTaskIds: string[];
  studentInfo: StudentInfo;
  onResetExam: () => void;
  onGoToHome: () => void;
}

export const ScoreModal: React.FC<ScoreModalProps> = ({
  isOpen,
  onClose,
  earnedPoints,
  totalPoints,
  completedTaskIds,
  studentInfo,
  onResetExam,
  onGoToHome,
}) => {
  if (!isOpen) return null;

  const percentage = Math.round((earnedPoints / totalPoints) * 100);

  const getGradeTier = (pct: number) => {
    if (pct >= 90) return { label: 'Excellent (Honor Roll)', color: 'text-emerald-600 bg-emerald-50 border-emerald-300' };
    if (pct >= 80) return { label: 'Very Good', color: 'text-blue-600 bg-blue-50 border-blue-300' };
    if (pct >= 65) return { label: 'Good', color: 'text-amber-600 bg-amber-50 border-amber-300' };
    return { label: 'Satisfactory / Needs Improvement', color: 'text-rose-600 bg-rose-50 border-rose-300' };
  };

  const gradeTier = getGradeTier(percentage);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" dir="ltr">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Certificate Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 relative text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 flex items-center justify-center shadow-lg transform -rotate-3">
            <Award className="w-9 h-9" />
          </div>

          <span className="bg-blue-500/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">
            Official Practical Result Certificate
          </span>

          <h2 className="text-2xl font-black text-white mt-2">
            Practical Examination Score Summary
          </h2>

          <p className="text-xs text-slate-300 mt-1">
            Microsoft Word Comprehensive Exam • Academic Year 2026
          </p>
        </div>

        {/* Certificate Body Details */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 space-y-6">
          
          {/* Candidate Card */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase">Candidate Name:</span>
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">{studentInfo.name || 'Anonymous Student'}</h3>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-mono">
                ID: {studentInfo.seatNumber || '2026-N/A'} • {studentInfo.institution || 'Computer Science Dept'}
              </div>
            </div>

            <div className={`px-4 py-2 rounded-xl border text-center font-bold text-xs ${gradeTier.color}`}>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Performance Grade:</div>
              <div className="text-sm">{gradeTier.label}</div>
            </div>
          </div>

          {/* Big Score Breakdown Circle */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-2">
              Final Earned Score:
            </div>
            
            <div className="text-5xl font-black text-slate-900 dark:text-slate-100 font-mono tracking-tight">
              {earnedPoints} <span className="text-xl text-slate-400 font-normal">/ {totalPoints} Pts</span>
            </div>

            <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
              <div
                className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full transition-all duration-700 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-medium">
              Achieved <strong className="text-blue-900 dark:text-blue-300">{percentage}%</strong> overall mastery across 6 exam modules.
            </p>
          </div>

          {/* Module-by-Module Breakdown */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
              Module Performance Breakdown:
            </h4>
            
            {EXAM_MODULES.map(m => {
              const modCompletedTasks = m.tasks.filter(t => completedTaskIds.includes(t.id));
              const modScore = modCompletedTasks.reduce((acc, t) => acc + t.points, 0);
              const isModDone = modCompletedTasks.length === m.tasks.length;

              return (
                <div key={m.id} className="flex items-center justify-between text-xs p-2 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${isModDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span className="font-bold text-slate-900 dark:text-slate-100">Module {m.moduleNumber}: {m.title}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    {modScore} / {m.totalPoints} pts
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-100 dark:bg-slate-900 p-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onGoToHome}
            className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-bold px-3 py-2 rounded-xl transition hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <LayoutGrid className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Back to Suite Home</span>
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onResetExam}
              className="flex items-center gap-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold px-3 py-2 rounded-xl transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retake Exam</span>
            </button>

            <button
              onClick={() => {
                onClose();
                window.print();
              }}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
