import React, { useState } from 'react';
import { RAW_EXAM_TEXT, MAIL_MERGE_DATASET } from '../data/examData';
import { Download, Copy, Check, FileText, Database, X } from 'lucide-react';

interface DataPackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataPackModal: React.FC<DataPackModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedTable, setCopiedTable] = useState(false);

  if (!isOpen) return null;

  const handleCopyRawText = () => {
    navigator.clipboard.writeText(RAW_EXAM_TEXT);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  const handleCopyTableCSV = () => {
    const csv = MAIL_MERGE_DATASET.map(r => `${r.id},${r.fullName},${r.jobTitle},${r.department},${r.grade},${r.bonusAmount}`).join('\n');
    navigator.clipboard.writeText(`ID,Full Name,Job Title,Department,Grade,Bonus Amount\n${csv}`);
    setCopiedTable(true);
    setTimeout(() => setCopiedTable(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" dir="ltr">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-300 flex items-center justify-center border border-blue-500/30">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Exam Data Pack & Attachments</h2>
              <p className="text-xs text-slate-300">Copy raw text and recipient database to complete the exam on your local MS Word</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 bg-slate-50 dark:bg-slate-950 flex-1">
          
          {/* Section 1: Raw Exam Text */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">1. Document Raw Unformatted Text</h3>
              </div>
              <button
                onClick={handleCopyRawText}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition shadow-sm"
              >
                {copiedText ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedText ? 'Text Copied!' : 'Copy Raw Text'}</span>
              </button>
            </div>
            <textarea
              readOnly
              value={RAW_EXAM_TEXT}
              rows={8}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-xs text-slate-800 dark:text-slate-100 font-sans leading-relaxed focus:outline-none"
            />
          </div>

          {/* Section 2: Mail Merge Excel Dataset */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">2. Mail Merge Recipient Dataset (CSV / Table)</h3>
              </div>
              <button
                onClick={handleCopyTableCSV}
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition shadow-sm"
              >
                {copiedTable ? <Check className="w-4 h-4 text-yellow-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedTable ? 'CSV Copied!' : 'Copy Dataset (CSV)'}</span>
              </button>
            </div>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                    <th className="p-2">#</th>
                    <th className="p-2">Full Name</th>
                    <th className="p-2">Job Title</th>
                    <th className="p-2">Department</th>
                    <th className="p-2">Grade</th>
                    <th className="p-2">Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  {MAIL_MERGE_DATASET.map(r => (
                    <tr key={r.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-900 dark:text-slate-200">
                      <td className="p-2 font-mono text-slate-600 dark:text-slate-400">{r.id}</td>
                      <td className="p-2 font-bold text-slate-900 dark:text-slate-100">{r.fullName}</td>
                      <td className="p-2">{r.jobTitle}</td>
                      <td className="p-2">{r.department}</td>
                      <td className="p-2 text-emerald-700 dark:text-emerald-400 font-bold">{r.grade}</td>
                      <td className="p-2 font-mono text-blue-900 dark:text-blue-300">{r.bonusAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-900 p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition"
          >
            Close Data Pack
          </button>
        </div>
      </div>
    </div>
  );
};
