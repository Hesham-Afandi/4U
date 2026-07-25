import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Sparkles, RotateCw, CheckCircle2, AlertCircle, Trophy, 
  Layers, ArrowLeft, ArrowRight, Zap, RefreshCw, BookOpen, Brain
} from 'lucide-react';
import { fetchGeneratedFlashcards } from '../../services/ai';

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  subject?: string;
  formula?: string;
}

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
  onRewardPoints?: (pts: number) => void;
}

const PRESET_DECKS: Record<string, Flashcard[]> = {
  physics: [
    {
      id: 'p1',
      subject: 'الفيزياء',
      category: 'قانون فيزيائي',
      front: 'ما هو قانون نيوتن الثاني للحركة؟',
      back: 'F = m × a\nالقوة المحصلة = الكتلة × التسارع.\nتقاس القوة بالنيوتن (N).',
      formula: 'F = m · a'
    },
    {
      id: 'p2',
      subject: 'الفيزياء',
      category: 'تعريف مهم',
      front: 'ما هو تعريف السرعة المتجهة المتوسطة؟',
      back: 'هي نسبة التغير في الإزاحة (Δx) إلى الفترة الزمنية المستغرقة (Δt).\nv = Δx / Δt',
      formula: 'v = Δx / Δt'
    },
    {
      id: 'p3',
      subject: 'الفيزياء',
      category: 'قانون طاقة',
      front: 'ما هي صياغة طاقة الحركة (Kinetic Energy)؟',
      back: 'KE = ½ m v²\nتعتمد طاقة الحركة على كتلة الجسم ومربع سرعته وتقاس بالجول (J).',
      formula: 'KE = ½ m v²'
    },
    {
      id: 'p4',
      subject: 'الفيزياء',
      category: 'كهربائية',
      front: 'ما هو قانون أوم (Ohm\'s Law)؟',
      back: 'V = I × R\nفرق الجهد الكهربائي (V) = شدة التيار (I) × المقاومة الكهربائية (R).',
      formula: 'V = I · R'
    },
    {
      id: 'p5',
      subject: 'الفيزياء',
      category: 'مجالات',
      front: 'كيف يُحسب شدة المجال الكهربائي E الناتج عن شحنة نقطية؟',
      back: 'E = k |q| / r²\nحيث k هو ثابت كولوم (8.99 × 10⁹ N·m²/C²)، و r المسافة بالمتر.',
      formula: 'E = k·|q| / r²'
    },
    {
      id: 'p6',
      subject: 'الفيزياء',
      category: 'حفظ الطاقة',
      front: 'ماذا ينص مبدأ حفظ الطاقة الميكانيكية؟',
      back: 'في النظام المعزول والمحافظ، تبقى الطاقة الميكانيكية الكلية ثابتة:\nE_initial = E_final  (KE₁ + PE₁ = KE₂ + PE₂)',
      formula: 'E_total = KE + PE = Constant'
    }
  ],
  math: [
    {
      id: 'm1',
      subject: 'الرياضيات',
      category: 'معادلات',
      front: 'ما هو القانون العام لحل المعادلة التربيعية ax² + bx + c = 0؟',
      back: 'x = [-b ± √(b² - 4ac)] / (2a)\nالمميز Δ = b² - 4ac يحدد عدد ونوع الجذور.',
      formula: 'x = (-b ± √(b² - 4ac)) / 2a'
    },
    {
      id: 'm2',
      subject: 'الرياضيات',
      category: 'مثلثات',
      front: 'ما هي متطابقة فيثاغورس المثلثية الأساسية؟',
      back: 'sin²(θ) + cos²(θ) = 1\nومنها مشتق: 1 + tan²(θ) = sec²(θ)',
      formula: 'sin²θ + cos²θ = 1'
    },
    {
      id: 'm3',
      subject: 'الرياضيات',
      category: 'دوال',
      front: 'متى تكون الدالة متصلة عند نقطة x = c؟',
      back: 'تكون متصلة إذا تحققت الشروط الثلاثة:\n1. f(c) معرفة\n2. lim (x→c) f(x) موجودة\n3. lim (x→c) f(x) = f(c)',
      formula: 'lim_{x→c} f(x) = f(c)'
    },
    {
      id: 'm4',
      subject: 'الرياضيات',
      category: 'تفاضل',
      front: 'ما هي قاعدة مشتقة الضرب (Product Rule)؟',
      back: 'd/dx [f(x) · g(x)] = f\'(x)g(x) + f(x)g\'(x)\n(مشتقة الأولى × الثانية + الأولى × مشتقة الثانية)',
      formula: '(u·v)\' = u\'v + uv\''
    }
  ],
  chemistry: [
    {
      id: 'c1',
      subject: 'الكيمياء والعلوم',
      category: 'قوانين الغازات',
      front: 'ما هو قانون الغاز المثالي (Ideal Gas Law)؟',
      back: 'P V = n R T\nحيث P الضغط، V الحجم، n عدد المولات، R ثابت الغازات، T الحرارة بالكلفن.',
      formula: 'P·V = n·R·T'
    },
    {
      id: 'c2',
      subject: 'الكيمياء والعلوم',
      category: 'تركيز',
      front: 'ما هو قانون الموُلارية (Molarity)؟',
      back: 'M = n / V\nالمولارية (M) = عدد مولات المذاب (mol) ÷ حجم المحلول باللتر (L).',
      formula: 'M = n / V_L'
    }
  ]
};

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = 'physics',
  onRewardPoints
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('physics');
  const [cards, setCards] = useState<Flashcard[]>(PRESET_DECKS['physics']);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [reviewIds, setReviewIds] = useState<Set<string>>(new Set());
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [customTopic, setCustomTopic] = useState<string>('');
  const [showFinished, setShowFinished] = useState<boolean>(false);

  useEffect(() => {
    if (PRESET_DECKS[defaultSubject]) {
      setSelectedSubject(defaultSubject);
      setCards(PRESET_DECKS[defaultSubject]);
    } else {
      setSelectedSubject('physics');
      setCards(PRESET_DECKS['physics']);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredIds(new Set());
    setReviewIds(new Set());
    setShowFinished(false);
  }, [isOpen, defaultSubject]);

  const handleSelectSubject = (subjKey: string) => {
    setSelectedSubject(subjKey);
    if (PRESET_DECKS[subjKey]) {
      setCards(PRESET_DECKS[subjKey]);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredIds(new Set());
    setReviewIds(new Set());
    setShowFinished(false);
  };

  const currentCard = cards[currentIndex];

  const handleMarkMastered = () => {
    if (!currentCard) return;
    const nextMastered = new Set(masteredIds).add(currentCard.id);
    setMasteredIds(nextMastered);

    if (currentIndex < cards.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowFinished(true);
      if (onRewardPoints) onRewardPoints(30);
    }
  };

  const handleMarkReview = () => {
    if (!currentCard) return;
    const nextReview = new Set(reviewIds).add(currentCard.id);
    setReviewIds(nextReview);

    if (currentIndex < cards.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowFinished(true);
    }
  };

  const handleGenerateAiDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTopic.trim()) return;
    setIsAiLoading(true);

    try {
      const generatedCards = await fetchGeneratedFlashcards({
        topic: customTopic.trim(),
        subject: selectedSubject
      });

      if (generatedCards && generatedCards.length > 0) {
        setCards(generatedCards);
        setCurrentIndex(0);
        setIsFlipped(false);
        setMasteredIds(new Set());
        setReviewIds(new Set());
        setShowFinished(false);
      } else {
        alert('تعذر إنشاء بطاقات بهذا الموضوع، تم استرجاع البطاقات الإفتراضية.');
      }
    } catch (err) {
      console.error(err);
      alert('حدث خطأ أثناء التواصل مع الذكاء الاصطناعي لتوليد البطاقات.');
    } finally {
      setIsAiLoading(false);
      setCustomTopic('');
    }
  };

  const restartDeck = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredIds(new Set());
    setReviewIds(new Set());
    setShowFinished(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 text-right overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BAR */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-5 border-b border-slate-800 shrink-0">
          <div className="flex items-center justify-between flex-row-reverse mb-3">
            <div className="flex items-center gap-3 flex-row-reverse">
              <div className="p-2.5 rounded-2xl bg-purple-500/20 border border-purple-400/30 text-purple-300">
                <Brain className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-white flex items-center gap-2">
                  <span>🎴 بطاقات التكرار المتباعد (Flashcards)</span>
                </h3>
                <p className="text-xs text-purple-200/80 font-medium">
                  استذكر أهم القوانين والمفاهيم بطريقة تفاعلية وسريعة
                </p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DECK SELECTOR BUTTONS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => handleSelectSubject('physics')}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer whitespace-nowrap ${
                selectedSubject === 'physics'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-800/80 text-purple-200 hover:bg-slate-800'
              }`}
            >
              ⚛️ الفيزياء والقوانين
            </button>
            <button
              onClick={() => handleSelectSubject('math')}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer whitespace-nowrap ${
                selectedSubject === 'math'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-800/80 text-purple-200 hover:bg-slate-800'
              }`}
            >
              📐 الرياضيات والجبر
            </button>
            <button
              onClick={() => handleSelectSubject('chemistry')}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer whitespace-nowrap ${
                selectedSubject === 'chemistry'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-800/80 text-purple-200 hover:bg-slate-800'
              }`}
            >
              🧪 العلوم والكيمياء
            </button>
          </div>
        </div>

        {/* BODY AREA */}
        <div className="p-5 overflow-y-auto flex-1 flex flex-col justify-between space-y-4">
          {/* AI GENERATOR FORM INPUT */}
          <form onSubmit={handleGenerateAiDeck} className="flex gap-2">
            <input 
              type="text"
              placeholder="أنشئ بطاقات استذكار بالذكاء الاصطناعي لموضوع معين..."
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={isAiLoading || !customTopic.trim()}
              className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shrink-0"
            >
              {isAiLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
              <span>توليد 🤖</span>
            </button>
          </form>

          {/* FINISHED STATE RESULT */}
          {showFinished ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-4xl shadow-xl">
                🏆
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  أحسنت يا بطل! أكملت مراجعة هذه المجموعة 🎉
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  تم حفظ نتائج مراجعتك وكسبت <strong className="text-amber-500">+30 نقطة تفوق</strong> لتعزيز ترتيبك!
                </p>
              </div>

              <div className="flex justify-center gap-4 text-xs font-bold pt-2">
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-2xl">
                  متقن ✅: {masteredIds.size} بطاقات
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-2xl">
                  يحتاج مراجعة 🔁: {reviewIds.size} بطاقات
                </div>
              </div>

              <button
                onClick={restartDeck}
                className="mt-4 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs rounded-xl shadow-lg transition flex items-center gap-2 mx-auto cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                <span>إعادة مراجعة المجموعة مرة أخرى</span>
              </button>
            </div>
          ) : currentCard ? (
            <>
              {/* PROGRESS BAR & COUNTER */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-bold">
                <span className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 px-2.5 py-0.5 rounded-full text-[11px]">
                  {currentCard.category || 'مفهوم دراسي'}
                </span>
                <span>
                  البطاقة {currentIndex + 1} من {cards.length}
                </span>
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-300 rounded-full" 
                  style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                />
              </div>

              {/* FLIP CARD CANVAS */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer group relative min-h-[220px] sm:min-h-[250px] w-full perspective-1000 my-2"
              >
                <motion.div 
                  className="w-full h-full rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/40 text-white shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden transition-all duration-300 hover:border-purple-400"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Card Front (Question / Law Name) */}
                  {!isFlipped ? (
                    <div className="my-auto space-y-3">
                      <span className="text-[10px] text-purple-300 font-bold bg-purple-900/60 border border-purple-500/30 px-3 py-1 rounded-full inline-block">
                        اضغط لقلب البطاقة ورؤية الحل / الإجابة 💡
                      </span>
                      <h4 className="text-lg sm:text-xl font-black text-white leading-relaxed px-2">
                        {currentCard.front}
                      </h4>
                    </div>
                  ) : (
                    /* Card Back (Answer / Formula / Explanation) */
                    <div 
                      className="my-auto space-y-3 w-full"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full inline-block">
                        الإجابة والتوضيح العلمي ✅
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-100 leading-relaxed whitespace-pre-line px-2">
                        {currentCard.back}
                      </p>
                      {currentCard.formula && (
                        <div className="mt-3 p-2 bg-slate-950/80 border border-purple-500/30 rounded-xl text-amber-300 font-mono text-xs font-black dir-ltr inline-block shadow-inner">
                          {currentCard.formula}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1 opacity-70">
                    <RotateCw className="w-3 h-3" />
                    <span>انقر في أي مكان للتنقل بين السؤال والإجابة</span>
                  </div>
                </motion.div>
              </div>

              {/* RATING & ACTION BUTTONS */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleMarkReview}
                  className="px-4 py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-2xl font-black text-xs transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>محتاجة مراجعة 🔁</span>
                </button>

                <button
                  onClick={handleMarkMastered}
                  className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs transition shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>عارف المعلومة ومتقنها ✅</span>
                </button>
              </div>
            </>
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs">
              لا توجد بطاقات متاحة في هذه المجموعة حالياً.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
