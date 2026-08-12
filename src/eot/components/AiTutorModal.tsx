import React, { useState } from 'react';
import { QuestionItem } from '../types';
import { MathRenderer } from './MathRenderer';
import { fetchLessonChatAnswer } from '../../services/ai';
import { Sparkles, X, Send, Bot, User, Loader2, Lightbulb, HelpCircle, FileCheck } from 'lucide-react';

interface AiTutorModalProps {
  question: QuestionItem | null;
  onClose: () => void;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({ question, onClose }) => {
  if (!question) return null;

  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: `مرحباً بك! أنا معلم الرياضيات الذكي المساعد لـ **Mr. Mohammed Hesham**.\nسؤالك المختار هو: **سؤال رقم ${question.qNumber}** (${question.titleAr}).\nكيف يمكنني مساعدتك في هذا السؤال تحديداً؟`,
    },
  ]);

  const [inputQuery, setInputQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const quickPrompts = [
    'اشرح لي طريقة الحل بالخطوات البسيطة',
    'ما هي القاعدة أو النظرية الأساسية المستخدمة؟',
    'اعطني سؤالاً مشابهاً للتدريب مع الحل',
    'ما هي الأخطاء الشائعة التي يقع فيها الطلاب في هذا السؤال؟',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const newMessages = [...messages, { sender: 'user' as const, text: textToSend }];
    setMessages(newMessages);
    setInputQuery('');
    setLoading(true);

    try {
      let replyText = '';
      try {
        const response = await fetch('/api/gemini/tutor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questionTitle: `السؤال ${question.qNumber} - ${question.titleAr}`,
            learningOutcome: `${question.learningOutcomeAr} (${question.learningOutcome})`,
            questionText: `${question.questionTextAr || ''} ${question.questionText}`,
            userQuery: textToSend,
          }),
        });
        const contentType = response.headers.get('content-type') || '';
        if (response.ok && !contentType.includes('text/html')) {
          const data = await response.json();
          if (data && data.text) replyText = data.text;
        }
      } catch (serverErr) {
        console.warn("Backend tutor API not reachable, falling back to client AI...", serverErr);
      }

      if (!replyText) {
        replyText = await fetchLessonChatAnswer({
          message: textToSend,
          history: messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'model', text: m.text })),
          title: `سؤال الهيكل رقم ${question.qNumber}: ${question.titleAr}`,
          subject: 'الرياضيات',
          unit: `الوحدة ${question.unit}`
        });
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: replyText || 'أهلاً بك! تم تحليل سؤال الهيكل. هل تحتاج لخطوات معينة؟' },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'تعذر الاتصال بخادم المعلم الذكي. يرجى المحاولة مرة أخرى.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-scaleIn">
        {/* Modal Header */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-indigo-600 flex items-center justify-center shadow-md shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                مساعدة — شرح سؤال {question.qNumber}
              </h3>
              <p className="text-xs text-slate-300">
                {question.titleAr} (ص {question.page})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Question Preview Box */}
        <div className="bg-indigo-50/80 dark:bg-slate-800/90 p-3.5 sm:p-4 border-b border-indigo-100 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 font-medium flex items-start gap-2.5 shrink-0">
          <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
          <div className="overflow-hidden">
            <span className="font-bold block text-indigo-950 dark:text-indigo-300">نص السؤال الأصلي:</span>
            <div className="line-clamp-2 font-serif text-slate-900 dark:text-slate-100 pt-0.5">
              <MathRenderer text={question.questionText} inline />
            </div>
          </div>
        </div>

        {/* Chat Conversation Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70 dark:bg-slate-950/60 text-xs sm:text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-white ${
                  msg.sender === 'user' ? 'bg-indigo-600' : 'bg-pink-600'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200/90 dark:border-slate-700/80 shadow-sm rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">
                  <MathRenderer text={msg.text} />
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-xs py-2">
              <Loader2 className="w-4 h-4 animate-spin text-pink-600 dark:text-pink-400" />
              <span>جاري صياغة الشرح والخطوات بواسطة المعلم المساعد...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 shrink-0">
          {quickPrompts.map((pText, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSend(pText)}
              disabled={loading}
              className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-800 dark:text-slate-200 font-bold px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700 transition-all text-right cursor-pointer"
            >
              ⚡ {pText}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="اكتب سؤالك أو استفسارك هنا..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/50 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
            />
            <button
              type="submit"
              disabled={loading || !inputQuery.trim()}
              className="px-4 py-2.5 bg-gradient-to-r from-pink-600 to-indigo-600 disabled:opacity-40 text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-md shadow-pink-500/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
