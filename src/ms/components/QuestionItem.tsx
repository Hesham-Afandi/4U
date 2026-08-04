import React, { useState } from 'react';
import { Task } from '../types';
import { 
  CheckSquare, 
  Square, 
  HelpCircle, 
  Compass, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  X
} from 'lucide-react';

interface QuestionItemProps {
  task: Task;
  isCompleted: boolean;
  onToggleCompleted: (taskId: string) => void;
  onOpenSimulatorForTask?: (autoCheckId?: string) => void;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({
  task,
  isCompleted,
  onToggleCompleted,
  onOpenSimulatorForTask,
}) => {
  const [showTips, setShowTips] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div 
      className={`rounded-xl border transition-all duration-200 p-4 sm:p-5 ${
        isCompleted
          ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/60 shadow-sm'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm'
      }`}
      dir="ltr"
    >
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        
        {/* Task Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {/* Completion Checkbox */}
            <button
              onClick={() => onToggleCompleted(task.id)}
              className="flex items-center gap-2 text-left group focus:outline-none"
              title="Click to toggle completed status and earn points"
            >
              {isCompleted ? (
                <CheckSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
              ) : (
                <Square className="w-6 h-6 text-slate-400 dark:text-slate-500 shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              )}
              <h4 className={`text-base font-bold transition-colors ${
                isCompleted 
                  ? 'text-emerald-900 dark:text-emerald-300 line-through opacity-90' 
                  : 'text-slate-900 dark:text-slate-100'
              }`}>
                {task.title}
              </h4>
            </button>

            {/* Points Tag */}
            <span className={`ml-auto px-2.5 py-0.5 rounded-full text-xs font-bold border ${
              isCompleted 
                ? 'bg-emerald-200 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' 
                : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
            }`}>
              {task.points} Points
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
            {task.description}
          </p>

          {/* MS Word Navigation Ribbon Path */}
          <div className="bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2 mb-3">
            <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100 mr-1">Ribbon Command Path:</span>
              <span className="font-mono text-blue-900 dark:text-blue-300">{task.wordPath}</span>
            </div>
          </div>

          {/* Collapsible Guidance & Tips */}
          {task.tips && task.tips.length > 0 && (
            <div className="mt-2">
              <button
                onClick={() => setShowTips(!showTips)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Execution Tips & Guidance</span>
                {showTips ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showTips && (
                <div className="mt-2 bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-lg p-3 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  {task.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Visual Target Thumbnail & Simulator Link */}
        <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0 self-start w-full sm:w-auto justify-between sm:justify-start pt-2 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
          {task.targetImage && (
            <div className="relative group">
              <img
                src={task.targetImage}
                alt="Target Layout"
                className="w-24 h-20 object-cover rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm cursor-pointer hover:opacity-90 transition"
                onClick={() => setShowImageModal(true)}
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setShowImageModal(true)}
                className="absolute inset-0 bg-slate-900/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-lg text-xs font-semibold gap-1"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </button>
            </div>
          )}

          {onOpenSimulatorForTask && (
            <button
              onClick={() => onOpenSimulatorForTask(task.autoCheckId)}
              className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/80 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-bold border border-blue-200 dark:border-blue-800 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Try in Simulator</span>
            </button>
          )}
        </div>

      </div>

      {/* Target Image Popup Modal */}
      {showImageModal && task.targetImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4" dir="ltr">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Visual Target Diagram: {task.title}</h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 font-bold text-base"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={task.targetImage}
              alt="Full Visual Target"
              className="w-full max-h-[70vh] object-contain rounded-xl border border-slate-200 dark:border-slate-800"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
              Ensure your layout in MS Word matches this target diagram.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
