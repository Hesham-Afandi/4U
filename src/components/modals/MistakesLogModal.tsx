import React, { useState, useEffect } from 'react';
import { StudentMistakeItem, mistakesService } from '../../services/mistakes/mistakesService';
import { MathRenderer } from '../../eot/components/MathRenderer';
import { QuestionItem } from '../../eot/types';
import { 
  X, BookMarked, CheckCircle2, AlertTriangle, RotateCcw, 
  Sparkles, Trash2, Edit3, Save, FileText, Printer, Filter, 
  Brain, ChevronDown, ChevronUp, Award, HelpCircle, Check, BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MistakesLogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MistakesLogModal: React.FC<MistakesLogModalProps> = ({
  isOpen,
  onClose
}) => {
  const [mistakes, setMistakes] = useState<StudentMistakeItem[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'mastered' | 'all'>('pending');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showSolutionMap, setShowSolutionMap] = useState<Record<string, boolean>>({});
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState<string>('');
  const [feedbackMap, setFeedbackMap] = useState<Record<string, { isCorrect: boolean; message: string }>>({});
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [showClearAllConfirm, setShowClearAllConfirm] = useState<boolean>(false);

  const reloadMistakes = () => {
    setMistakes(mistakesService.getMistakes());
  };

  useEffect(() => {
    if (isOpen) {
      reloadMistakes();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleStorageUpdate = () => {
      reloadMistakes();
    };
    window.addEventListener('student_mistakes_updated', handleStorageUpdate);
    return () => window.removeEventListener('student_mistakes_updated', handleStorageUpdate);
  }, []);

  if (!isOpen) return null;

  const pendingCount = mistakes.filter((m) => !m.isMastered).length;
  const masteredCount = mistakes.filter((m) => m.isMastered).length;
  const totalCount = mistakes.length;
  const masteryPercentage = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;

  // Dynamically extract unique subjects from logged mistakes plus standard categories
  const subjectOptions = Array.from(
    new Set([
      'all',
      ...mistakes.map((m) => m.subject).filter(Boolean),
      'SAT Math (رياضيات السات)',
      'SAT English (قراءة وكتابة السات)',
      'رياضيات',
      'فيزياء',
      'عام'
    ])
  );

  // Filtered list
  const filteredMistakes = mistakes.filter((item) => {
    if (activeTab === 'pending' && item.isMastered) return false;
    if (activeTab === 'mastered' && !item.isMastered) return false;
    if (selectedSubject !== 'all') {
      if (item.subject !== selectedSubject && !item.subject.toLowerCase().includes(selectedSubject.toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  const handleRetrySelectOption = (item: StudentMistakeItem, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [item.id]: optionId }));
    const correct = item.question.correctAnswer || item.correctAnswer || 'A';
    const isCorrect = optionId === correct;

    if (isCorrect) {
      setFeedbackMap((prev) => ({
        ...prev,
        [item.id]: { isCorrect: true, message: 'إجابة صحيحة أبدعت! تم تحويل السؤال إلى قائمة المتقن 🎉' }
      }));
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      setTimeout(() => {
        mistakesService.markAsMastered(item.id);
        reloadMistakes();
      }, 1200);
    } else {
      setFeedbackMap((prev) => ({
        ...prev,
        [item.id]: { isCorrect: false, message: `إجابة غير صحيحة، حاول مجدداً أو اضغط على عرض الخطوات!` }
      }));
    }
  };

  const handleSaveNote = (id: string) => {
    mistakesService.updateMistakeNote(id, tempNoteText);
    setEditingNoteId(null);
    reloadMistakes();
  };

  const handleToggleMastered = (item: StudentMistakeItem) => {
    if (item.isMastered) {
      mistakesService.unmarkMastered(item.id);
    } else {
      mistakesService.markAsMastered(item.id);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
    }
    reloadMistakes();
  };

  const handleDelete = (id: string) => {
    setConfirmDeleteId(id);
  };

  const confirmDeleteSingle = () => {
    if (confirmDeleteId) {
      mistakesService.removeMistake(confirmDeleteId);
      setConfirmDeleteId(null);
      reloadMistakes();
    }
  };

  const handleClearAll = () => {
    mistakesService.clearAll();
    setSelectedAnswers({});
    setFeedbackMap({});
    setShowSolutionMap({});
    setShowClearAllConfirm(false);
    reloadMistakes();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn dir-rtl">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden text-slate-100">
        
        {/* MODAL HEADER */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl text-white shadow-lg shadow-rose-500/20">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white">دفتر أخطائي والملاحظات الذكية</h2>
                <span className="text-xs bg-rose-500/20 text-rose-300 font-bold px-2.5 py-0.5 rounded-full border border-rose-500/30">
                  {pendingCount} سؤال بحاجة مراجعة
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                تجميع تلقائي للأخطاء للتركيز عليها وإتقانها بنسبة 100% قبل يوم الاختبار النهائية
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition border border-slate-700 cursor-pointer"
              title="طباعة / تصدير ملخص الأخطاء"
            >
              <Printer className="w-4 h-4 text-sky-400" />
              طباعة التقرير
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-400 rounded-xl transition border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* STATS & PROGRESS BANNER */}
        <div className="bg-slate-950/60 p-4 border-b border-slate-800/80 grid grid-cols-1 md:grid-cols-4 gap-3 shrink-0">
          {/* Stat 1: Pending */}
          <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">أسئلة غير متقنة</div>
              <div className="text-lg font-black text-rose-400">{pendingCount} <span className="text-xs font-normal text-slate-500">سؤال</span></div>
            </div>
          </div>

          {/* Stat 2: Mastered */}
          <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">أسئلة تم إتقانها</div>
              <div className="text-lg font-black text-emerald-400">{masteredCount} <span className="text-xs font-normal text-slate-500">سؤال</span></div>
            </div>
          </div>

          {/* Stat 3: Total Logged */}
          <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">إجمالي الأخطاء المسجلة</div>
              <div className="text-lg font-black text-indigo-300">{totalCount} <span className="text-xs font-normal text-slate-500">سؤال</span></div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span className="text-slate-300 flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-400" /> نسبة الجاهزية</span>
              <span className="text-amber-400 font-mono">{masteryPercentage}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${masteryPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* TABS & FILTERS BAR */}
        <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Main Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'pending'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              قيد المراجعة ({pendingCount})
            </button>
            <button
              onClick={() => setActiveTab('mastered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'mastered'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              متقنة ({masteredCount})
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              الكل ({totalCount})
            </button>
          </div>

          {/* Subject Filter & Clear */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer"
              >
                {subjectOptions.map((subj) => (
                  <option key={subj} value={subj} className="bg-slate-900">
                    {subj === 'all' ? 'جميع المواد' : subj}
                  </option>
                ))}
              </select>
            </div>

            {totalCount > 0 && (
              <button
                onClick={() => setShowClearAllConfirm(true)}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 px-2.5 py-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition cursor-pointer font-bold shadow-sm"
                title="مسح كافة الأسئلة والملاحظات المسجلة"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>إفراغ السجل</span>
              </button>
            )}
          </div>
        </div>

        {/* MODAL BODY / LIST OF MISTAKES */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredMistakes.length === 0 ? (
            <div className="bg-slate-950/60 p-12 rounded-3xl border border-slate-800/80 text-center space-y-3 max-w-lg mx-auto my-8">
              <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full w-16 h-16 mx-auto flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-white">لا توجد أسئلة أخطاء في هذه القائمة!</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeTab === 'pending'
                  ? 'رائع جداً! لا تملك أي أسئلة معلقة بحاجة مراجعة حالياً. عند إجراء أي اختبار محاكاة وإجابة سؤال بشكل خاطئ، سيظهر هنا تلقائياً لترميجه.'
                  : 'لم تقم بإتقان أي سؤال بعد أو لا توجد نتائج تطابق الفلتر المختار.'}
              </p>
            </div>
          ) : (
            filteredMistakes.map((item, index) => {
              const q = item.question;
              const isSolutionOpen = !!showSolutionMap[item.id];
              const feedback = feedbackMap[item.id];

              return (
                <div 
                  key={item.id}
                  className={`p-5 rounded-2xl border transition shadow-lg ${
                    item.isMastered 
                      ? 'bg-emerald-950/20 border-emerald-800/50 hover:border-emerald-700/80' 
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header: Metadata & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold border border-slate-700">
                        {item.subject}
                      </span>
                      {q.lesson && (
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 font-bold border border-indigo-800/60">
                          {q.lesson}
                        </span>
                      )}
                      {q.exerciseRef && (
                        <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] border border-slate-800">
                          {q.exerciseRef}
                        </span>
                      )}
                      <span className="text-[11px] text-slate-500 font-mono">
                        محاولات: {item.attemptsCount}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleMastered(item)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                          item.isMastered
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-800 hover:bg-emerald-900/60 text-slate-300 hover:text-emerald-300 border border-slate-700'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        {item.isMastered ? 'متقن 🎉' : 'تعليم كمتقن'}
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg transition"
                        title="حذف السؤال"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question Title & Text */}
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-bold text-amber-300">
                      {q.titleAr || q.title || `السؤال رقم ${q.qNumber}`}
                    </div>
                    <div className="text-sm text-slate-200 leading-relaxed bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                      <MathRenderer text={q.questionTextAr || q.questionText} />
                    </div>
                  </div>

                  {/* MCQ Options (Interactive Re-test) */}
                  {q.type === 'mcq' && q.options && q.options.length > 0 && (
                    <div className="space-y-2 my-3">
                      <div className="text-xs font-bold text-slate-400 mb-1">
                        إعادة الحل التفاعلية (اختر الإجابة الصحيحة):
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt) => {
                          const isSelected = selectedAnswers[item.id] === opt.id;
                          const correctOpt = q.correctAnswer || item.correctAnswer;
                          const showCorrectness = isSelected && feedback;

                          let btnStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700";
                          if (showCorrectness) {
                            if (opt.id === correctOpt) {
                              btnStyle = "bg-emerald-950 border-emerald-600 text-emerald-200 font-bold";
                            } else {
                              btnStyle = "bg-rose-950 border-rose-600 text-rose-200";
                            }
                          }

                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleRetrySelectOption(item, opt.id)}
                              className={`p-2.5 rounded-xl border text-right transition flex items-center justify-between text-xs cursor-pointer ${btnStyle}`}
                            >
                              <span className="flex items-center gap-2">
                                <span className="font-mono font-black text-amber-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                                  {opt.id}
                                </span>
                                <MathRenderer text={opt.text} />
                              </span>
                              {showCorrectness && opt.id === correctOpt && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {feedback && (
                        <div className={`p-2.5 rounded-xl text-xs font-bold flex items-center gap-2 mt-2 ${
                          feedback.isCorrect ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-rose-950/80 text-rose-300 border border-rose-800'
                        }`}>
                          {feedback.isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
                          <span>{feedback.message}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Toggle Solution Steps */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowSolutionMap((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition py-1 cursor-pointer"
                    >
                      {isSolutionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      <span>{isSolutionOpen ? 'إخفاء خطوات الحل النموذجية' : 'عرض خطوات الحل النموذجية'}</span>
                    </button>

                    {isSolutionOpen && (
                      <div className="mt-2 p-3 bg-slate-900 rounded-xl border border-sky-900/40 text-xs space-y-2 dir-rtl">
                        <div className="font-bold text-sky-300 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          خطوات الحل النموذجية:
                        </div>
                        {q.solutionSteps && q.solutionSteps.length > 0 ? (
                          <ol className="list-decimal list-inside space-y-1 text-slate-300 pr-2">
                            {q.solutionSteps.map((step, idx) => (
                              <li key={idx} className="leading-relaxed">
                                <MathRenderer text={step} />
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <div className="text-slate-400">الإجابة النموذجية مدونة في خيارات السؤال والناتج النهائي.</div>
                        )}
                        <div className="pt-1 text-emerald-400 font-bold font-mono">
                          الناتج النهائي: <MathRenderer text={q.finalAnswer || q.correctAnswer || ''} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SMART NOTEBOOK SECTION */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                        <Edit3 className="w-3.5 h-3.5" />
                        ملاحظتي الذكية (تنبيه أو ملحوظة شخصية):
                      </span>
                      {editingNoteId !== item.id && (
                        <button
                          onClick={() => {
                            setEditingNoteId(item.id);
                            setTempNoteText(item.userNote || '');
                          }}
                          className="text-[11px] text-slate-400 hover:text-amber-300 transition"
                        >
                          {item.userNote ? 'تعديل الملاحظة' : '+ إضافة ملاحظة'}
                        </button>
                      )}
                    </div>

                    {editingNoteId === item.id ? (
                      <div className="space-y-2">
                        <textarea
                          value={tempNoteText}
                          onChange={(e) => setTempNoteText(e.target.value)}
                          placeholder="اكتب ملاحظاتك، قوانين للتحقق، أو تنبيهات تتجنب بها الخطأ مستقبلاً..."
                          className="w-full bg-slate-900 border border-amber-500/50 rounded-xl p-2.5 text-xs text-amber-200 focus:outline-none min-h-[60px]"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingNoteId(null)}
                            className="px-2.5 py-1 bg-slate-800 text-slate-400 rounded-lg text-xs"
                          >
                            إلغاء
                          </button>
                          <button
                            onClick={() => handleSaveNote(item.id)}
                            className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1"
                          >
                            <Save className="w-3.5 h-3.5" />
                            حفظ الملاحظة
                          </button>
                        </div>
                      </div>
                    ) : (
                      item.userNote ? (
                        <div className="bg-amber-950/20 border border-amber-500/30 text-amber-200 p-2.5 rounded-xl text-xs font-sans leading-relaxed">
                          📌 {item.userNote}
                        </div>
                      ) : (
                        <div className="text-[11px] text-slate-500 italic">
                          لم تقم بإضافة ملاحظة بعد. اضغط تعديل لكتابة ملحوظة تنبهك عند المراجعة.
                        </div>
                      )
                    )}
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div>
            دفتر الأخطاء الذكي يحفظ تقدمك محلياً لضمان الجاهزية الكاملة 💯
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>

      {/* CONFIRMATION DIALOG FOR CLEAR ALL */}
      {showClearAllConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn dir-rtl">
          <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 text-center text-slate-100">
            <div className="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mx-auto border border-rose-500/30">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-rose-300">تأكيد إفراغ سجل الأخطاء</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              هل أنت متأكد من مسح جميع الأسئلة والملاحظات المسجلة في دفتر أخطائك؟ <br />
              <span className="text-rose-400 font-bold">ملاحظة: لا يمكن التراجع عن هذه الخطوة!</span>
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleClearAll}
                className="flex-1 py-2.5 px-4 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>نعم، إفراغ السجل بالكامل</span>
              </button>
              <button
                onClick={() => setShowClearAllConfirm(false)}
                className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-sm transition border border-slate-700 cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION DIALOG FOR SINGLE DELETE */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn dir-rtl">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 text-center text-slate-100">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/30">
              <Trash2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-amber-300">تأكيد حذف السؤال</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              هل أنت متأكد من حذف هذا السؤال من دفتر أخطائك؟
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={confirmDeleteSingle}
                className="flex-1 py-2.5 px-4 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer"
              >
                <span>تأكيد الحذف</span>
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-sm transition border border-slate-700 cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
