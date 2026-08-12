import React, { useState } from 'react';
import { QuestionItem } from '../types';
import { MathRenderer } from './MathRenderer';
import { MathSvgDiagram } from './MathSvgDiagram';
import { ChevronDown, ChevronUp, CheckCircle, Sparkles, Award, FileText, BookOpen, BookMarked, Check } from 'lucide-react';
import { mistakesService } from '../../services/mistakes/mistakesService';

interface QuestionCardProps {
  question: QuestionItem;
  onAskAi?: (question: QuestionItem) => void;
  showSolutionDefault?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAskAi,
  showSolutionDefault = false,
}) => {
  const [showSolution, setShowSolution] = useState<boolean>(showSolutionDefault);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isSavedToMistakes, setIsSavedToMistakes] = useState<boolean>(false);

  const handleBookmarkMistake = () => {
    mistakesService.addMistake(question, selectedOption || undefined, 'عام');
    setIsSavedToMistakes(true);
    setTimeout(() => setIsSavedToMistakes(false), 2000);
  };

  const isMcq = question.type === 'mcq';

  return (
    <div
      id={`q-card-${question.id}`}
      className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden mb-6"
    >
      {/* Question Header */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-md shadow-indigo-600/30 shrink-0">
            {question.qNumber}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-slate-800 dark:bg-slate-900 text-indigo-300 font-bold px-2.5 py-0.5 rounded-lg border border-slate-700">
                الوحدة {question.unit} • {question.lesson}
              </span>
              <span className="bg-slate-800 dark:bg-slate-900 text-slate-300 px-2.5 py-0.5 rounded-lg border border-slate-700 font-mono">
                ص {question.page} ({question.exerciseRef})
              </span>
              {question.examYear && (
                <span className="bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-lg border border-amber-500/30 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  وزاري {question.examYear}
                </span>
              )}
            </div>
            <h3 className="font-bold text-sm sm:text-base text-slate-100 dark:text-slate-100 mt-1">
              {question.titleAr}
            </h3>
          </div>
        </div>

        {/* Type Badge */}
        <div className="flex items-center gap-2">
          {isMcq ? (
            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              موضوعي (3 درجات)
            </span>
          ) : (
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              مقالي ورقي
            </span>
          )}
        </div>
      </div>

      {/* Learning Outcome Banner */}
      <div className="bg-indigo-50/80 dark:bg-slate-800/80 border-b border-indigo-100 dark:border-slate-700/80 px-4 py-3 sm:px-6 text-xs text-indigo-950 dark:text-indigo-200 flex items-start gap-2.5">
        <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
        <div>
          <span className="font-bold text-indigo-950 dark:text-indigo-300 block text-xs">مخرج التعلم (Learning Outcome):</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 leading-relaxed block mt-0.5">{question.learningOutcomeAr}</span>
          <span className="block text-indigo-700 dark:text-indigo-400 font-mono text-[11px] mt-1" dir="ltr">
            {question.learningOutcome}
          </span>
        </div>
      </div>

      {/* Question Body */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Arabic and English question statement - High Contrast in Dark Mode */}
        <div className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-medium leading-relaxed bg-slate-50 dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-y-2">
          {question.questionTextAr && (
            <p className="text-slate-900 dark:text-slate-100 font-bold text-base leading-relaxed">
              <MathRenderer text={question.questionTextAr} inline />
            </p>
          )}
          <div className="text-slate-900 dark:text-slate-100 font-serif text-base dir-ltr pt-1 border-t border-slate-200 dark:border-slate-700">
            <MathRenderer text={question.questionText} />
          </div>
        </div>

        {/* SVG Math Diagram Visualizations */}
        <MathSvgDiagram
          type={question.imageSvgType}
          qNumber={question.qNumber}
          unit={question.unit}
        />

        {/* Multiple Choice Options (if MCQ) */}
        {isMcq && question.options && (
          <div className="mb-5">
            <p className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">اختر الإجابة الصحيحة:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {question.options.map((option) => {
                const isCorrect = option.id === question.correctAnswer;
                const isSelected = selectedOption === option.id;

                let btnStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700';
                if (isSelected) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 dark:border-emerald-400 bg-emerald-100 dark:bg-emerald-950/90 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-400 dark:ring-emerald-500 font-bold';
                  } else {
                    btnStyle = 'border-rose-500 dark:border-rose-400 bg-rose-100 dark:bg-rose-950/90 text-rose-950 dark:text-rose-100 ring-2 ring-rose-400 dark:ring-rose-500 font-bold';
                  }
                } else if (showSolution && isCorrect) {
                  btnStyle = 'border-emerald-500 dark:border-emerald-400 bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-400 dark:ring-emerald-500 font-bold';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedOption(option.id);
                      if (option.id !== question.correctAnswer) {
                        const subjectLabel = question.subject || (question.unit ? `الوحدة ${question.unit}` : 'اختبارات الهياكل');
                        mistakesService.addMistake(question, option.id, subjectLabel, '12', 'EOT');
                        setIsSavedToMistakes(true);
                        setTimeout(() => setIsSavedToMistakes(false), 2500);
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-right font-medium text-sm flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                          isSelected && isCorrect
                            ? 'bg-emerald-600 text-white'
                            : isSelected && !isCorrect
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {option.id}
                      </span>
                      <span className="font-mono text-base dir-ltr">
                        <MathRenderer text={option.text} inline />
                      </span>
                    </span>

                    {isSelected && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md">
                        {isCorrect ? '✓ إجابة صحيحة' : '✗ إجابة خاطئة'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            {showSolution ? (
              <>
                <ChevronUp className="w-4 h-4" />
                إخفاء نموذج الحل والخطوات
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                عرض نموذج الحل والخطوات
              </>
            )}
          </button>

          <button
            onClick={handleBookmarkMistake}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isSavedToMistakes
                ? 'bg-rose-600 text-white border-rose-500'
                : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/60 border-rose-200 dark:border-rose-800/60'
            }`}
            title="حفظ هذا السؤال في دفتر أخطائك لمراجعته لاحقاً"
          >
            {isSavedToMistakes ? (
              <>
                <Check className="w-4 h-4 text-white" />
                تمت الإضافة لدفتر أخطائي 📌
              </>
            ) : (
              <>
                <BookMarked className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                حفظ في دفتر أخطائي 📌
              </>
            )}
          </button>
        </div>

        {/* Collapsible Solution Drawer */}
        {showSolution && (
          <div className="mt-4 p-4 sm:p-5 bg-emerald-50/80 dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-700/80 rounded-2xl animate-fadeIn">
            <div className="flex items-center justify-between mb-3 border-b border-emerald-200/80 dark:border-slate-700 pb-2">
              <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                خطوات الحل النموذجية بدليل المعلم:
              </h4>
              <span className="text-xs font-mono font-bold bg-emerald-600 text-white px-2.5 py-1 rounded-lg">
                الإجابة النهائية: {question.finalAnswer}
              </span>
            </div>

            <ol className="space-y-2 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 pr-4 list-decimal font-medium">
              {question.solutionSteps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  <MathRenderer text={step} inline />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

