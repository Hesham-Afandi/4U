import React from 'react';
import { EXAM_SPECIFICATIONS } from '../data/questionsData';
import { Award, BookOpen, CheckCircle, FileText, Filter, Table } from 'lucide-react';

interface ExamTableProps {
  onSelectOutcome?: (qNum: string) => void;
}

export const ExamTable: React.FC<ExamTableProps> = ({ onSelectOutcome }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
      {/* Table Header */}
      <div className="bg-slate-900 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Table className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">
              جدول مواصفات امتحان الوزارة للفصل الدراسي الأول (2025/2026)
            </h2>
          </div>
          <p className="text-xs text-slate-300">
            توزيع الـ 26 مخرج تعلم على نوعية الأسئلة والدرجات ورقم الصفحة بالكتاب المدرسي
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-xl border border-cyan-500/30 font-bold">
            20 سؤالاً موضوعياً (60 درجة)
          </div>
          <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-500/30 font-bold">
            6 أسئلة مقالية (40 درجة)
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs sm:text-sm">
          <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th className="p-3 text-center w-14">رقم Q</th>
              <th className="p-3">مخرج التعلم (Learning Outcome)</th>
              <th className="p-3">رقم الصفحة/التمارين</th>
              <th className="p-3 text-center">نوع السؤال</th>
              <th className="p-3 text-center">الدرجة</th>
              <th className="p-3 text-center">إجراء</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800">
            {EXAM_SPECIFICATIONS.map((item) => (
              <tr
                key={item.qNumber}
                className="hover:bg-slate-50/80 transition-all"
              >
                <td className="p-3 text-center font-extrabold text-indigo-700">
                  <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 inline-flex items-center justify-center font-bold">
                    {item.qNumber}
                  </span>
                </td>
                <td className="p-3">
                  <div className="font-bold text-slate-900">{item.learningOutcomeAr}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5" dir="ltr">
                    {item.learningOutcomeEn}
                  </div>
                </td>
                <td className="p-3 font-semibold text-slate-700">
                  <span className="block text-xs bg-slate-100 px-2.5 py-1 rounded-md text-slate-800 border border-slate-200 inline-block">
                    {item.exerciseRef} • ص {item.page}
                  </span>
                </td>
                <td className="p-3 text-center">
                  {item.type === 'mcq' ? (
                    <span className="inline-flex items-center gap-1 bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
                      <CheckCircle className="w-3 h-3 text-cyan-600" />
                      موضوعي (MCQ)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
                      <FileText className="w-3 h-3 text-emerald-600" />
                      مقالي ورقي
                    </span>
                  )}
                </td>
                <td className="p-3 text-center font-bold text-slate-900">
                  {item.type === 'mcq' ? '3 درجات' : '4-10 درجات'}
                </td>
                <td className="p-3 text-center">
                  {onSelectOutcome && (
                    <button
                      onClick={() => onSelectOutcome(item.qNumber)}
                      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1 mx-auto"
                    >
                      <Filter className="w-3 h-3" />
                      عرض الأسئلة
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
