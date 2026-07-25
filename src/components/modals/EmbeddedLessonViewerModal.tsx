import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, BookOpen, FileCheck, Clock, ArrowRight, ShieldAlert, 
  Sparkles, RotateCcw, AlertTriangle, Maximize2, Minimize2, CheckCircle2, Loader2,
  Bot, Send, Copy, Check, MessageSquare, ListFilter, HelpCircle, RefreshCw
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
  const [isLoading, setIsLoading] = useState(true);

  // AI Lesson Assistant States
  const [showAiDrawer, setShowAiDrawer] = useState(false);
  const [aiTab, setAiTab] = useState<'summary' | 'qa'>('summary');
  const [summaryText, setSummaryText] = useState<string>('');
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; role: 'user' | 'model'; text: string }>>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Active Timer & Loading Reset
  useEffect(() => {
    let timer: any;
    if (isOpen) {
      setIsLoading(true);
      setElapsedSeconds(0);
      setShowExitConfirmModal(false);
      setShowAiDrawer(false);
      setSummaryText('');
      setChatMessages([
        {
          id: 'welcome',
          role: 'model',
          text: `مرحباً بك يا بطل! 👋 أنا معلمك الافتراضي الذكي المساعد لدرس **"${title}"**.\nيمكنني مساعدتك في صياغة ملخص فوري أو الإجابة عن أي استفسارات تتعلق بالشرح والقوانين العلمية لهذا الدرس!`
        }
      ]);
      timer = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen, url, title]);

  useEffect(() => {
    if (showAiDrawer && chatMessages.length > 0) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, showAiDrawer]);

  const handleGenerateSummary = async () => {
    setIsGeneratingSummary(true);
    setSummaryText('');
    try {
      const res = await fetch('/api/lesson-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          subject: subjectName,
          unit: unitName,
          lessonUrl: url
        })
      });
      const data = await res.json();
      if (data.summary) {
        setSummaryText(data.summary);
      } else {
        setSummaryText('تعذر توليد الملخص حالياً. حاول مرة أخرى!');
      }
    } catch (e) {
      console.error(e);
      setSummaryText('حدث خطأ أثناء التواصل مع المعلم الافتراضي لتوليد الملخص.');
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  const handleCopySummary = () => {
    if (!summaryText) return;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const handleSendChatMessage = async (msgOverride?: string) => {
    const textToSend = msgOverride || chatInput.trim();
    if (!textToSend || isChatLoading) return;

    const userMsg = { id: Date.now().toString(), role: 'user' as const, text: textToSend };
    setChatMessages(prev => [...prev, userMsg]);
    if (!msgOverride) setChatInput('');
    setIsChatLoading(true);

    try {
      const contextualMessage = `[معلومات الدرس الحالي: "${title}" - المادة: ${subjectName || 'عام'} - الوحدة: ${unitName || 'عام'}]\n\nسؤال الطالب: ${textToSend}`;
      
      const history = chatMessages.map(m => ({ role: m.role, text: m.text }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: contextualMessage,
          history
        })
      });
      const data = await res.json();
      if (data.reply) {
        setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: data.reply }]);
      } else {
        setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: 'عذراً يا بطل، تعذر الإجابة حالياً. جرب مرة أخرى!' }]);
      }
    } catch (e) {
      console.error(e);
      setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: 'حدث خطأ بالاتصال.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

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

          {/* Right Action Bar: AI Assistant, Session Timer & Security Notice */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* AI Assistant Button */}
            <button
              onClick={() => setShowAiDrawer(!showAiDrawer)}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-md ${
                showAiDrawer 
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-400/20' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-indigo-400/40'
              }`}
              title="ملخص ومساعد الدرس الذكي"
            >
              <Bot className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">🤖 ملخص ومساعد الدرس الذكي</span>
              <span className="sm:hidden">🤖 الذكاء الاصطناعي</span>
            </button>

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
            <>
              {isLoading && (
                <div className="absolute inset-0 z-30 bg-slate-950/95 flex flex-col items-center justify-center p-6 text-center select-none animate-fadeIn">
                  <div className="relative flex items-center justify-center mb-6">
                    {/* Glow effect */}
                    <div className={`absolute w-36 h-36 rounded-full blur-2xl opacity-40 animate-pulse ${
                      contentType === 'lesson' ? 'bg-indigo-500' : 'bg-emerald-500'
                    }`} />
                    
                    {/* Outer spinning ring */}
                    <div className={`w-20 h-20 rounded-full border-4 border-t-transparent animate-spin ${
                      contentType === 'lesson' 
                        ? 'border-indigo-500 border-r-purple-500' 
                        : 'border-emerald-500 border-r-teal-500'
                    }`} />

                    {/* Center Icon */}
                    <div className="absolute p-3 rounded-full bg-slate-900 border border-slate-700 text-white shadow-xl">
                      {contentType === 'lesson' ? (
                        <BookOpen className="w-7 h-7 text-indigo-400 animate-bounce" />
                      ) : (
                        <FileCheck className="w-7 h-7 text-emerald-400 animate-bounce" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span>
                      {contentType === 'lesson' 
                        ? 'جاري تحميل وتجهيز شرح الدرس التفاعلي...' 
                        : 'جاري تحميل وتجهيز صفحة الاختبار المدمج...'}
                    </span>
                  </h3>

                  <p className="text-xs text-slate-400 max-w-sm mb-4 leading-relaxed">
                    {subjectName ? `${subjectName} ` : ''}
                    {unitName ? `• ${unitName}` : ''}
                  </p>

                  <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 text-xs text-slate-300 shadow-inner">
                    <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    <span>يرجى الانتظار لحين تحميل المحتوى بالكامل...</span>
                  </div>

                  <button
                    onClick={() => setIsLoading(false)}
                    className="mt-6 text-xs text-slate-500 hover:text-slate-300 underline transition cursor-pointer"
                  >
                    إذا استغرق التحميل وقتاً طويلاً، اضغط هنا للبدء مباشرةً
                  </button>
                </div>
              )}

              <iframe
                src={embedUrl}
                title={title}
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full border-0 bg-white dark:bg-slate-900 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              />
            </>
          )}

          {/* Secure Watermark Bar */}
          <div className="absolute bottom-2 left-3 z-10 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-[10px] text-slate-400 font-mono pointer-events-none shadow-md hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>محتوى محمي مدمج حصرياً داخل المنصة - 4U Platform Security</span>
          </div>

          {/* AI LESSON ASSISTANT SIDE DRAWER */}
          {showAiDrawer && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              className="absolute top-0 right-0 bottom-0 z-40 w-full sm:w-[420px] bg-slate-900/98 border-l border-slate-800 shadow-2xl flex flex-col backdrop-blur-xl animate-fadeIn"
            >
              {/* DRAWER HEADER */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-amber-300">
                    <Bot className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                      <span>مساعد الدرس الذكي</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </h3>
                    <p className="text-[10px] text-slate-400 truncate max-w-[220px]">
                      {title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAiDrawer(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* DRAWER TABS */}
              <div className="grid grid-cols-2 p-2 bg-slate-950/60 border-b border-slate-800 gap-1 text-xs font-bold shrink-0">
                <button
                  onClick={() => setAiTab('summary')}
                  className={`py-2 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    aiTab === 'summary'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>ملخص الدرس 📝</span>
                </button>

                <button
                  onClick={() => setAiTab('qa')}
                  className={`py-2 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    aiTab === 'qa'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>اسأل المعلم 💬</span>
                </button>
              </div>

              {/* DRAWER BODY */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {aiTab === 'summary' ? (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="bg-indigo-950/40 border border-indigo-800/60 p-3.5 rounded-2xl text-xs text-indigo-200 leading-relaxed">
                      اضغط على الزر أدناه لتوليد ملخص فوري استثنائي يعرض أفكار الدرس، النقاط القوية، والقوانين الفيزيائية والرياضية!
                    </div>

                    {!summaryText && !isGeneratingSummary && (
                      <button
                        onClick={handleGenerateSummary}
                        className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-xs rounded-2xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                      >
                        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                        <span>توليد ملخص الدرس بالذكاء الاصطناعي 🚀</span>
                      </button>
                    )}

                    {isGeneratingSummary && (
                      <div className="p-8 text-center space-y-3 bg-slate-950/60 rounded-2xl border border-slate-800">
                        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
                        <p className="text-xs font-bold text-slate-300">
                          جاري تحليل الدرس وتوليد الملخص التحليلي...
                        </p>
                      </div>
                    )}

                    {summaryText && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                            <span>✨ الملخص جاهز</span>
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={handleCopySummary}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold transition flex items-center gap-1 cursor-pointer"
                            >
                              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedSummary ? 'تم النسخ' : 'نسخ'}</span>
                            </button>
                            <button
                              onClick={handleGenerateSummary}
                              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
                              title="توليد جديد"
                            >
                              <RefreshCw className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs leading-relaxed text-slate-200 whitespace-pre-line font-medium dir-rtl">
                          {summaryText}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Q&A CHAT TAB */
                  <div className="flex flex-col h-full space-y-3 animate-fadeIn">
                    {/* QUICK CHIP PROMPTS */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none shrink-0">
                      <button
                        onClick={() => handleSendChatMessage('لخص لي هذا الدرس في 3 نقاط رئيسية وواضحة جداً')}
                        className="px-2.5 py-1 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-[10px] font-bold text-indigo-300 whitespace-nowrap transition cursor-pointer"
                      >
                        💡 لخص الدرس في 3 نقاط
                      </button>
                      <button
                        onClick={() => handleSendChatMessage('ما هي أهم القوانين والملاحظات الفيزيائية/الرياضية في هذا الدرس؟')}
                        className="px-2.5 py-1 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-[10px] font-bold text-amber-300 whitespace-nowrap transition cursor-pointer"
                      >
                        📐 القوانين الرئيسية
                      </button>
                      <button
                        onClick={() => handleSendChatMessage('أعطني سؤالاً تجريبياً حول هذا الدرس مع الإجابة النموذجية والتوضيح')}
                        className="px-2.5 py-1 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-[10px] font-bold text-emerald-300 whitespace-nowrap transition cursor-pointer"
                      >
                        🎯 اختبرني بسؤال
                      </button>
                    </div>

                    {/* CHAT MESSAGES STREAM */}
                    <div className="flex-1 overflow-y-auto space-y-3 p-1 text-xs">
                      {chatMessages.map(msg => (
                        <div
                          key={msg.id}
                          className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {msg.role === 'model' && (
                            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow">
                              🤖
                            </div>
                          )}
                          <div
                            className={`p-3 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                              msg.role === 'user'
                                ? 'bg-indigo-600 text-white rounded-br-none'
                                : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}

                      {isChatLoading && (
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold p-2 bg-slate-950/60 rounded-xl border border-slate-800/80 w-fit">
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                          <span>جاري كتابة الرد...</span>
                        </div>
                      )}
                      <div ref={chatBottomRef} />
                    </div>

                    {/* CHAT INPUT FORM */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendChatMessage();
                      }}
                      className="flex gap-2 pt-2 border-t border-slate-800 shrink-0"
                    >
                      <input
                        type="text"
                        placeholder="اطرح استفسارك المعين حول هذا الدرس..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-500"
                      />
                      <button
                        type="submit"
                        disabled={isChatLoading || !chatInput.trim()}
                        className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition disabled:opacity-50 cursor-pointer shrink-0"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          )}
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
