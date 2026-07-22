import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, BookOpen, FileCheck, Clock, ArrowRight, ShieldAlert, 
  Sparkles, RotateCcw, AlertTriangle, Maximize2, Minimize2, CheckCircle2 
} from 'lucide-react';

interface EmbeddedLessonViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmExit: (elapsedSeconds: number) => void;
  title: string;
  contentType: 'lesson' | 'exam';
  url: string;
  unitName?: string;
  subjectName?: string;
}

export function getEmbeddableViewerUrl(rawUrl: string): { embedUrl: string; isDrive: boolean; isForm: boolean } {
  if (!rawUrl) return { embedUrl: '', isDrive: false, isForm: false };

  let url = rawUrl.trim();

  // Google Drive File
  if (url.includes('drive.google.com')) {
    if (url.includes('/view')) {
      url = url.replace('/view', '/preview');
    } else if (url.includes('/edit')) {
      url = url.replace('/edit', '/preview');
    } else if (url.includes('/file/d/')) {
      const match = url.match(/\/file\/d\/([^\/]+)/);
      if (match && match[1]) {
        url = `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return { embedUrl: url, isDrive: true, isForm: false };
  }

  // Google Forms / Exams
  if (url.includes('docs.google.com/forms')) {
    if (!url.includes('embedded=true')) {
      url += (url.includes('?') ? '&' : '?') + 'embedded=true';
    }
    return { embedUrl: url, isDrive: false, isForm: true };
  }

  return { embedUrl: url, isDrive: false, isForm: false };
}

export const EmbeddedLessonViewerModal: React.FC<EmbeddedLessonViewerModalProps> = ({
  isOpen,
  onClose,
  onConfirmExit,
  title,
  contentType,
  url,
  unitName,
  subjectName
}) => {
  const [showExitConfirmModal, setShowExitConfirmModal] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active Timer
  useEffect(() => {
    let timer: any;
    if (isOpen) {
      setElapsedSeconds(0);
      setShowExitConfirmModal(false);
      timer = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen]);

  // Trap ESC key and browser back to trigger exit confirmation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        e.preventDefault();
        setShowExitConfirmModal(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const { embedUrl, isDrive, isForm } = getEmbeddableViewerUrl(url);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleBackClick = () => {
    setShowExitConfirmModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitConfirmModal(false);
    onConfirmExit(elapsedSeconds);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <AnimatePresence>
      <div 
        ref={containerRef}
        className="fixed inset-0 z-[100] bg-slate-950 flex flex-col overflow-hidden text-white select-none animate-fadeIn"
      >
        {/* TOP CONTROL BAR */}
        <header className="bg-slate-900 border-b border-slate-800 px-4 md:px-6 py-3 flex items-center justify-between gap-3 shrink-0 shadow-lg z-20">
          {/* Back Button + Content Details */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={handleBackClick}
              className="px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-black transition flex items-center gap-2 cursor-pointer shrink-0 shadow"
              title="العودة للمنصة"
            >
              <ArrowRight className="w-4 h-4" />
              <span className="hidden sm:inline">العودة للمنصة</span>
              <span className="sm:hidden">إغلاق</span>
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1 ${
                  contentType === 'lesson' 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                }`}>
                  {contentType === 'lesson' ? <BookOpen className="w-3 h-3" /> : <FileCheck className="w-3 h-3" />}
                  {contentType === 'lesson' ? 'شرح تفاعلي داخل المنصة' : 'اختبار مدمج داخل المنصة'}
                </span>
                {subjectName && <span className="text-xs text-amber-300 font-bold hidden md:inline">• {subjectName}</span>}
                {unitName && <span className="text-xs text-slate-400 hidden lg:inline">• {unitName}</span>}
              </div>
              <h2 className="text-sm md:text-base font-extrabold text-white truncate mt-0.5">
                {title}
              </h2>
            </div>
          </div>

          {/* Right Action Bar: Session Timer & Security Notice */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Live Session Timer */}
            <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-300 font-mono text-xs font-bold flex items-center gap-2 shadow-inner">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            {/* Toggle Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer hidden sm:flex"
              title={isFullscreen ? 'إنهاء الشاشة الكاملة' : 'ملء الشاشة'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Primary Exit Button */}
            <button
              onClick={handleBackClick}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition cursor-pointer"
              title="تأكيد الخروج"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* EMBEDDED IFRAME CONTENT CONTAINER */}
        <div className="relative flex-1 bg-slate-950 w-full overflow-hidden flex items-center justify-center">
          {!embedUrl ? (
            <div className="p-8 text-center space-y-4 max-w-md">
              <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 w-16 h-16 mx-auto flex items-center justify-center border border-amber-500/30">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">رابط المحتوى غير متوفر حالياً</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                لم يتم إرفاق رابط لهذا الدرس بعد. يرجى التواصل مع مسؤول المنصة أو اختيار درس آخر.
              </p>
              <button
                onClick={handleBackClick}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition"
              >
                العودة لقائمة الدروس
              </button>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full border-0 bg-white dark:bg-slate-900"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            />
          )}

          {/* Secure Watermark Bar */}
          <div className="absolute bottom-2 left-3 z-10 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-400 font-mono pointer-events-none shadow-md hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>محتوى محمي مدمج حصرياً داخل المنصة - 4U Platform Security</span>
          </div>
        </div>

        {/* CONFIRMATION MODAL ON EXIT */}
        {showExitConfirmModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className="bg-slate-900 border border-amber-500/50 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 text-right"
            >
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/30 shrink-0">
                  <AlertTriangle className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">
                    تأكيد إغلاق {contentType === 'lesson' ? 'شرح الدرس' : 'الاختبار'}
                  </h3>
                  <p className="text-xs text-amber-300 font-bold mt-0.5">
                    العودة للمنصة الرئيسية
                  </p>
                </div>
              </div>

              <div className="space-y-2 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <p>
                  هل أنت متأكد من رغبتك في إغلاق {contentType === 'lesson' ? 'هذا الدرس' : 'هذا الاختبار'} والعودة للصفحة السابقة؟
                </p>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>الوقت المُنقضي في الجلسة:</span>
                  <span className="text-amber-300 font-bold">{formatTime(elapsedSeconds)}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowExitConfirmModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer"
                >
                  متابعة {contentType === 'lesson' ? 'الشرح' : 'الاختبار'}
                </button>
                <button
                  onClick={handleConfirmExit}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs shadow-lg transition cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>نعم، إغلاق والعودة</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
