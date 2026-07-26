import React, { useState, useEffect } from 'react';
import { QuestionItem } from '../types';
import { MathRenderer } from './MathRenderer';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, Clock, Sparkles, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

interface QuizModeProps {
  questions: QuestionItem[];
  onAskAi: (question: QuestionItem) => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({ questions, onAskAi }) => {
  const mcqQuestions = questions.filter((q) => q.type === 'mcq' && q.options);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && !isSubmitted) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, isSubmitted]);

  if (mcqQuestions.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl text-center border border-slate-200">
        <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <p className="text-slate-700 font-bold">لا توجد أسئلة موضوعية متوفرة للاختبار حالياً.</p>
      </div>
    );
  }

  const currentQuestion = mcqQuestions[currentIndex];
  const total = mcqQuestions.length;

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    setTimerActive(false);

    // Calculate score
    let correctCount = 0;
    mcqQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const percentage = Math.round((correctCount / mcqQuestions.length) * 100);
    if (percentage >= 70) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIndex(0);
    setSecondsElapsed(0);
    setTimerActive(true);
  };

  // Format timer string MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Calculate results if submitted
  let score = 0;
  if (isSubmitted) {
    mcqQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) score += 3; // 3 marks per question
    });
  }
  const maxScore = total * 3;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Header Bar */}
      <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white">اختبار المحاكاة التفاعلي (MCQ)</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            اختبر معلوماتك في أسئلة اختيار من متعدد من هيكل الوزارة (20 سؤالاً موضوعياً)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-mono">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-cyan-300">{formatTime(secondsElapsed)}</span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/30 transition-all"
            >
              إنهاء وتصحيح الاختبار
            </button>
          ) : (
            <button
              onClick={handleRestart}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              إعادة الاختبار
            </button>
          )}
        </div>
      </div>

      {/* Submitted Results Summary Banner */}
      {isSubmitted && (
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-900 text-white p-6 rounded-2xl shadow-md text-center border border-indigo-700/50 space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-2xl font-black">
            {Math.round((score / maxScore) * 100)}%
          </div>
          <h3 className="text-xl font-bold">
            نتيجة الاختبار: {score} من {maxScore} درجة
          </h3>
          <p className="text-xs text-slate-300">
            أجبت بشكل صحيح على {score / 3} من أصل {total} سؤالاً موضوعياً
          </p>
        </div>
      )}

      {/* Progress Dots / Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
          <span>السؤال {currentIndex + 1} من أصل {total}</span>
          <span>المكتمل: {Object.keys(selectedAnswers).length} / {total}</span>
        </div>
        <div className="flex gap-1 overflow-x-auto py-1">
          {mcqQuestions.map((q, idx) => {
            const isAnswered = !!selectedAnswers[q.id];
            const isCurrent = idx === currentIndex;
            let dotColor = 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400';

            if (isSubmitted) {
              if (selectedAnswers[q.id] === q.correctAnswer) {
                dotColor = 'bg-emerald-600 text-white';
              } else if (selectedAnswers[q.id]) {
                dotColor = 'bg-rose-600 text-white';
              } else {
                dotColor = 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
              }
            } else if (isAnswered) {
              dotColor = 'bg-indigo-600 text-white';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold shrink-0 transition-all ${dotColor} ${
                  isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900 scale-105' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Main Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="text-xs font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900">
            السؤال {currentQuestion.qNumber} • الوحدة {currentQuestion.unit} ({currentQuestion.lesson})
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            ص {currentQuestion.page} ({currentQuestion.exerciseRef})
          </span>
        </div>

        {/* Question Text */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-100 dark:border-slate-700 text-sm font-medium leading-relaxed">
          {currentQuestion.questionTextAr && (
            <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">{currentQuestion.questionTextAr}</p>
          )}
          <div className="text-slate-800 dark:text-slate-100 font-serif dir-ltr">
            <MathRenderer text={currentQuestion.questionText} />
          </div>
        </div>

        {/* Options grid */}
        {currentQuestion.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedAnswers[currentQuestion.id] === opt.id;
              const isCorrect = opt.id === currentQuestion.correctAnswer;

              let style = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700';

              if (isSubmitted) {
                if (isCorrect) {
                  style = 'border-emerald-500 dark:border-emerald-400 bg-emerald-100 dark:bg-emerald-950/90 text-emerald-950 dark:text-emerald-100 font-bold ring-2 ring-emerald-400 dark:ring-emerald-500';
                } else if (isSelected) {
                  style = 'border-rose-500 dark:border-rose-400 bg-rose-100 dark:bg-rose-950/90 text-rose-950 dark:text-rose-100 ring-2 ring-rose-400 dark:ring-rose-500 font-bold';
                }
              } else if (isSelected) {
                style = 'border-indigo-500 dark:border-indigo-400 bg-indigo-100 dark:bg-indigo-950/90 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-400 dark:ring-indigo-500 font-bold';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isSubmitted}
                  className={`p-4 rounded-xl border text-right text-sm transition-all flex items-center justify-between cursor-pointer ${style}`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                        isSelected && !isSubmitted
                          ? 'bg-indigo-600 text-white'
                          : isSubmitted && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isSubmitted && isSelected && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="font-mono text-base dir-ltr">
                      <MathRenderer text={opt.text} inline />
                    </span>
                  </span>

                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 disabled:opacity-40 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            السؤال السابق
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(total - 1, prev + 1))}
            disabled={currentIndex === total - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 disabled:opacity-40 text-white text-xs font-bold rounded-xl hover:bg-indigo-500 transition-all cursor-pointer"
          >
            السؤال التالي
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Solution Step View if submitted */}
        {isSubmitted && (
          <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-xs space-y-2">
            <h4 className="font-bold text-emerald-950 dark:text-emerald-100 flex items-center gap-1.5 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              توضيح حل السؤال {currentQuestion.qNumber}:
            </h4>
            <ul className="list-disc pr-4 space-y-1 text-emerald-900 dark:text-emerald-200">
              {currentQuestion.solutionSteps.map((step, sIdx) => (
                <li key={sIdx}>
                  <MathRenderer text={step} inline />
                </li>
              ))}
            </ul>
            <p className="font-bold text-emerald-950 dark:text-emerald-100 mt-2">
              الإجابة الصحيحة المعتمَدة: {currentQuestion.finalAnswer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
