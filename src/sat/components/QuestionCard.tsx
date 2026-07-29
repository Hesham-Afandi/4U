import React, { useState } from 'react';
import { Question } from '../types';
import { MathSvgDiagram } from './MathSvgDiagram';
import { CheckCircle2, XCircle, HelpCircle, Bookmark, BookmarkCheck, ArrowRight, Lightbulb, BookOpenCheck } from 'lucide-react';
import { mistakesService } from '../../services/mistakes/mistakesService';
import { QuestionItem, QuestionOption } from '../../eot/types';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  userAnswer?: number | string;
  onSelectAnswer: (questionId: number, answer: number | string) => void;
  lang: 'en' | 'ar';
  isBookmarked: boolean;
  onToggleBookmark: (questionId: number) => void;
  showInstantFeedback?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  userAnswer,
  onSelectAnswer,
  lang,
  isBookmarked,
  onToggleBookmark,
  showInstantFeedback = false
}) => {
  const [gridInInput, setGridInInput] = useState<string>(
    typeof userAnswer === 'string' || typeof userAnswer === 'number' ? String(userAnswer) : ''
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [savedToMistakes, setSavedToMistakes] = useState<boolean>(false);

  const isAnswered = userAnswer !== undefined && userAnswer !== '';
  const isCorrect = isAnswered && String(userAnswer).trim() === String(question.correctAnswer).trim();

  const handleGridInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gridInInput.trim()) {
      onSelectAnswer(question.id, gridInInput.trim());
    }
  };

  const handleSaveToMistakesNotebook = () => {
    let optionsList: QuestionOption[] | undefined = undefined;
    if (question.options) {
      optionsList = question.options.map((opt, idx) => ({
        id: String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D',
        text: lang === 'ar' ? opt.textAr : opt.textEn
      }));
    }

    let correctAnsStr = 'A';
    if (typeof question.correctAnswer === 'number') {
      correctAnsStr = String.fromCharCode(65 + question.correctAnswer);
    } else if (question.correctAnswer !== undefined) {
      correctAnsStr = String(question.correctAnswer);
    }

    let studentAnsStr = '';
    if (typeof userAnswer === 'number') {
      studentAnsStr = String.fromCharCode(65 + userAnswer);
    } else if (userAnswer !== undefined) {
      studentAnsStr = String(userAnswer);
    }

    const questionItem: QuestionItem = {
      id: `SAT-${question.id}`,
      qNumber: question.id,
      title: `SAT Math - ${question.domain}`,
      titleAr: `SAT رياضيات - ${question.domain}`,
      learningOutcome: question.domain,
      learningOutcomeAr: question.domain,
      unit: 1,
      lesson: question.category || 'SAT Math',
      page: 1,
      exerciseRef: `SAT Model Question #${question.id}`,
      type: question.isGridIn ? 'paper' : 'mcq',
      questionText: question.questionEn,
      questionTextAr: question.questionAr,
      options: optionsList,
      correctAnswer: correctAnsStr,
      solutionSteps: question.solutionStepsAr || [question.explanationAr],
      finalAnswer: correctAnsStr
    };

    mistakesService.addMistake(questionItem, studentAnsStr, 'SAT Math (رياضيات السات)', 'SAT', 'Digital SAT');
    setSavedToMistakes(true);
    setTimeout(() => setSavedToMistakes(false), 3000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100 transition duration-300">
      {/* Header Badge & Meta */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-lg text-xs font-bold">
            {lang === 'ar' ? `سؤال ${questionIndex + 1} من ${totalQuestions}` : `Question ${questionIndex + 1} of ${totalQuestions}`}
          </span>

          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
              question.difficulty === 'Easy'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : question.difficulty === 'Medium'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }`}
          >
            {question.difficulty}
          </span>

          {question.isGridIn && (
            <span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded text-[11px] font-medium">
              Grid-In (إدخال مباشر)
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Save to Mistakes Notebook button */}
          <button
            onClick={handleSaveToMistakesNotebook}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer ${
              savedToMistakes
                ? 'bg-emerald-600 text-white border-emerald-400'
                : 'bg-rose-950/60 text-rose-300 border-rose-800 hover:bg-rose-900/80 hover:text-white'
            }`}
            title={lang === 'ar' ? 'إضافة إلى دفتر الأخطاء' : 'Add to Mistakes Notebook'}
          >
            <BookOpenCheck className="w-4 h-4" />
            <span>
              {savedToMistakes
                ? (lang === 'ar' ? 'تمت الإضافة لدفتر الأخطاء!' : 'Added to Notebook!')
                : (lang === 'ar' ? 'إضافة لدفتر أخطائي' : 'Add to Mistakes Notebook')}
            </span>
          </button>

          <button
            onClick={() => onToggleBookmark(question.id)}
            className={`p-2 rounded-lg transition border ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
            title={lang === 'ar' ? 'حفظ السؤال' : 'Bookmark Question'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold leading-relaxed text-slate-100">
          {lang === 'ar' ? question.questionAr : question.questionEn}
        </h3>

        {question.equationStr && (
          <div className="my-3 p-3 bg-slate-950 border border-slate-800 rounded-xl text-center font-mono text-base font-bold text-amber-300">
            {question.equationStr}
          </div>
        )}
      </div>

      {/* SVG Diagram if exists */}
      {question.svgData && (
        <MathSvgDiagram svgData={question.svgData} lang={lang} />
      )}

      {/* Multiple Choice Options OR Grid-In Input */}
      {!question.isGridIn && question.options ? (
        <div className="space-y-3 my-6">
          {question.options.map((option, idx) => {
            const isSelected = userAnswer === idx;
            const isOptionCorrect = question.correctAnswer === idx;

            let btnClasses = "w-full text-left p-4 rounded-xl border font-medium text-sm transition flex items-center justify-between ";

            if (showInstantFeedback && isAnswered) {
              if (isOptionCorrect) {
                btnClasses += "bg-emerald-950/60 border-emerald-500 text-emerald-200 ";
              } else if (isSelected) {
                btnClasses += "bg-rose-950/60 border-rose-500 text-rose-200 ";
              } else {
                btnClasses += "bg-slate-950/50 border-slate-800 text-slate-400 opacity-60 ";
              }
            } else {
              if (isSelected) {
                btnClasses += "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-950/50 ";
              } else {
                btnClasses += "bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60 ";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => onSelectAnswer(question.id, idx)}
                className={btnClasses}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center border ${
                    isSelected ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{lang === 'ar' ? option.textAr : option.textEn}</span>
                </div>

                {showInstantFeedback && isAnswered && (
                  <div>
                    {isOptionCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    {isSelected && !isOptionCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        /* Grid-In Form */
        <form onSubmit={handleGridInSubmit} className="my-6 p-4 bg-slate-950 border border-slate-800 rounded-xl">
          <label className="block text-xs font-semibold text-slate-400 mb-2">
            {lang === 'ar' ? 'أدخل إجابتك الرقمية (Student-Produced Response):' : 'Enter Student-Produced Response (Number/Fraction):'}
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={gridInInput}
              onChange={(e) => setGridInInput(e.target.value)}
              placeholder="e.g. 12 or 3/4"
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow"
            >
              {lang === 'ar' ? 'تاكيد' : 'Submit'}
            </button>
          </div>
        </form>
      )}

      {/* Explanation & Solution Toggle */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition w-fit"
        >
          <Lightbulb className="w-4 h-4" />
          <span>
            {showExplanation
              ? (lang === 'ar' ? 'إخفاء الشرح والخطوات' : 'Hide Explanation & Steps')
              : (lang === 'ar' ? 'عرض الشرح والخطوات بالتفصيل' : 'Show Step-by-Step Explanation')}
          </span>
        </button>

        {showExplanation && (
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3 text-xs">
            <div className="text-amber-300 font-bold mb-1">
              {lang === 'ar' ? 'الشرح التفصيلي:' : 'Detailed Explanation:'}
            </div>
            <p className="text-slate-300 leading-relaxed">
              {lang === 'ar' ? question.explanationAr : question.explanationEn}
            </p>

            <div className="pt-2 border-t border-slate-800">
              <div className="text-indigo-400 font-bold mb-1.5">
                {lang === 'ar' ? 'خطوات الحل:' : 'Solution Steps:'}
              </div>
              <ol className="space-y-1 list-decimal list-inside text-slate-400 font-mono">
                {(lang === 'ar' ? question.solutionStepsAr : question.solutionStepsEn).map((step, sIdx) => (
                  <li key={sIdx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
