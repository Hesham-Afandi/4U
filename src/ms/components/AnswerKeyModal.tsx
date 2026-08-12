import React from 'react';
import { MODEL_ANSWER_RUBRIC, EXAM_MODULES } from '../data/examData';
import { PPT_EXAM_MODULES } from '../data/powerpointExamData';
import { BookOpen, X, Lightbulb, Compass, Award } from 'lucide-react';

interface AnswerKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedApp?: 'word' | 'excel' | 'powerpoint' | 'access';
}

export const AnswerKeyModal: React.FC<AnswerKeyModalProps> = ({ isOpen, onClose, selectedApp = 'word' }) => {
  if (!isOpen) return null;

  const activeModules = selectedApp === 'powerpoint' ? PPT_EXAM_MODULES : EXAM_MODULES;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" dir="ltr">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 text-purple-300 flex items-center justify-center border border-purple-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Teacher Evaluation Guide & Model Answer Key</h2>
              <p className="text-xs text-slate-300">Exact execution steps and command paths in MS Word for all exam tasks</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-slate-50 dark:bg-slate-950 flex-1">
          
          {/* Overview Info */}
          <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 p-4 rounded-xl text-purple-900 dark:text-purple-200 text-xs leading-relaxed flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm mb-1 text-purple-950 dark:text-purple-200">Examiner Grading Guidelines:</span>
              <span>Award points based on correct command execution and layout accuracy as outlined in the ribbon paths below. Half points may be deducted if formatting dimensions deviate slightly.</span>
            </div>
          </div>

          {/* Detailed Question Answers */}
          <div className="space-y-6">
            {activeModules.map(module => (
              <div key={module.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                  <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span>Module {module.moduleNumber}: {module.title} ({module.totalPoints} Points)</span>
                  </h3>
                </div>

                <div className="space-y-4">
                  {module.tasks.map((task, tIdx) => (
                    <div key={task.id} className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100 mb-1">
                        <span>Answer Steps for Q {module.moduleNumber}.{tIdx + 1}: {task.title}</span>
                        <span className="text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 px-2 py-0.5 rounded-md font-mono">
                          {task.points} Points
                        </span>
                      </div>
                      
                      <p className="text-slate-700 dark:text-slate-300 mb-2">{task.description}</p>
                      
                      <div className="bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-700 font-mono text-blue-900 dark:text-blue-300 flex items-start gap-2">
                        <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800 dark:text-slate-200 font-sans block mb-0.5">MS Word Ribbon Command Steps:</strong>
                          <span>{task.wordPath}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 dark:bg-slate-900 p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition"
          >
            Close Evaluation Guide
          </button>
        </div>
      </div>
    </div>
  );
};
