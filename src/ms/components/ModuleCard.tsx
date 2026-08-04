import React from 'react';
import { ExamModule } from '../types';
import { QuestionItem } from './QuestionItem';
import { 
  FileText, 
  Type, 
  Table, 
  Image as ImageIcon, 
  BookOpen, 
  Send, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

interface ModuleCardProps {
  module: ExamModule;
  completedTaskIds: string[];
  onToggleTaskCompleted: (taskId: string) => void;
  onOpenSimulatorForTask?: (autoCheckId?: string) => void;
  defaultExpanded?: boolean;
}

const moduleIconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6 text-blue-600" />,
  Type: <Type className="w-6 h-6 text-emerald-600" />,
  Table: <Table className="w-6 h-6 text-indigo-600" />,
  Image: <ImageIcon className="w-6 h-6 text-amber-600" />,
  BookOpen: <BookOpen className="w-6 h-6 text-purple-600" />,
  Send: <Send className="w-6 h-6 text-rose-600" />,
};

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  completedTaskIds,
  onToggleTaskCompleted,
  onOpenSimulatorForTask,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  const completedModuleTasks = module.tasks.filter(t => completedTaskIds.includes(t.id));
  const isModuleComplete = completedModuleTasks.length === module.tasks.length;
  const moduleEarnedPoints = completedModuleTasks.reduce((acc, t) => acc + t.points, 0);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden mb-6" dir="ltr">
      {/* Module Header Bar */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer select-none transition-colors ${
          isModuleComplete 
            ? 'bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/50' 
            : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100/80 dark:hover:bg-slate-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center shrink-0">
            {moduleIconMap[module.iconName] || <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-extrabold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-md">
                Module {module.moduleNumber}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{module.subtitle}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{module.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">{module.description}</p>
          </div>
        </div>

        {/* Module Progress & Controls */}
        <div className="flex items-center gap-4 self-end sm:self-auto">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Score: <span className="font-bold text-slate-800 dark:text-slate-200">{moduleEarnedPoints} / {module.totalPoints} pts</span>
            </div>
            <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
              {completedModuleTasks.length} / {module.tasks.length} tasks completed
            </div>
          </div>

          <button
            className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Expand module"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Module Questions List */}
      {isExpanded && (
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/30 space-y-4">
          {module.tasks.map(task => (
            <QuestionItem
              key={task.id}
              task={task}
              isCompleted={completedTaskIds.includes(task.id)}
              onToggleCompleted={onToggleTaskCompleted}
              onOpenSimulatorForTask={onOpenSimulatorForTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};
