import React from 'react';
import { OfficeAppSection } from '../types';
import { X, Sparkles, Clock, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface ComingSoonModalProps {
  app: OfficeAppSection | null;
  isOpen: boolean;
  onClose: () => void;
  onStartWordExam: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  app,
  isOpen,
  onClose,
  onStartWordExam,
}) => {
  if (!isOpen || !app) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" dir="ltr">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <Clock className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <span className="bg-amber-500/20 text-amber-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-500/30 uppercase tracking-wide">
                Under Development
              </span>
              <h2 className="text-xl font-black text-white mt-1">
                {app.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 p-4 rounded-2xl text-amber-900 dark:text-amber-200 text-center">
            <h3 className="text-base font-extrabold text-amber-950 dark:text-amber-200 mb-1">
              Coming Soon Insha'Allah
            </h3>
            <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-2 dir-rtl">
              (قريباً إن شاء الله سيتوفر الإمتحان)
            </p>
            <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              The practical examination for <strong>{app.title}</strong> is currently being developed with interactive exercises, auto-grading, and data packs.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wide">
              Upcoming Exam Modules:
            </h4>
            <div className="space-y-2">
              {app.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 p-4 rounded-2xl flex items-center gap-3 text-xs text-blue-900 dark:text-blue-200">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <strong className="block text-slate-900 dark:text-slate-100 font-bold">Microsoft Word Exam Available Now:</strong>
              <span>You can take the complete Microsoft Word 100-point practical exam immediately with interactive simulator!</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-900 p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-xl transition"
          >
            Close & Back to Suite
          </button>
          <button
            onClick={() => {
              onClose();
              onStartWordExam();
            }}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start MS Word Exam Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
