import React from 'react';
import { BookOpen, CheckCircle2, FileText, GraduationCap, Sparkles, TableProperties, Award, Mail, Phone, Layers, Bookmark } from 'lucide-react';
import { StreamType, GradeType, TermType } from '../types';

interface NavbarProps {
  activeTab: 'all' | 'mcq' | 'paper' | 'matrix' | 'quiz' | 'tutor';
  setActiveTab: (tab: 'all' | 'mcq' | 'paper' | 'matrix' | 'quiz' | 'tutor') => void;
  totalQuestions: number;
  mcqCount: number;
  paperCount: number;
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedStream: StreamType;
  setSelectedStream: (stream: StreamType) => void;
  selectedGrade: GradeType;
  setSelectedGrade: (grade: GradeType) => void;
  selectedTerm: TermType;
  setSelectedTerm: (term: TermType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  totalQuestions,
  mcqCount,
  paperCount,
  selectedSubject,
  setSelectedSubject,
  selectedStream,
  setSelectedStream,
  selectedGrade,
  setSelectedGrade,
  selectedTerm,
  setSelectedTerm,
}) => {
  const getSubjectName = (sub: string) => {
    switch (sub) {
      case 'math': return 'الرياضيات';
      case 'physics': return 'الفيزياء';
      case 'chemistry': return 'الكيمياء';
      case 'biology': return 'الأحياء';
      default: return 'المادة';
    }
  };
  return (
    <header className="bg-slate-900 text-white shadow-xl border-b border-slate-800 sticky top-0 z-40">
      {/* Teacher Contact Header Bar */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border-b border-indigo-900/50 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white">منصة الهياكل الامتحانية المعتمدة</span>
            <span className="text-slate-400">|</span>
            <span className="text-amber-300 font-semibold">Mr. Mohammed Hesham</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="mailto:mohammedhesham872@gmail.com"
              className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              title="إرسال بريد إلكتروني"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>mohammedhesham872@gmail.com</span>
            </a>

            <a
              href="tel:+971555642674"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
              title="الاتصال المباشر"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span dir="ltr">+971555642674</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Branding & Section Selector */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 shrink-0">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2.5 py-0.5 rounded-full border border-indigo-500/30 font-bold flex items-center gap-1">
                  <Bookmark className="w-3 h-3 text-indigo-400" />
                  قسم الهياكل الامتحانية
                </span>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-2.5 py-0.5 rounded-full border border-amber-500/30 font-bold">
                  2026 / 2027
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                  إعداد: Mr. Mohammed Hesham
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-white mt-1">
                استخراج وجدول مواصفات أسئلة هيكل {getSubjectName(selectedSubject)} — الصف {selectedGrade} ({
                  selectedStream === 'advanced' ? 'متقدم' :
                  selectedStream === 'advanced_bridge' ? 'متقدم بريدج' :
                  selectedStream === 'advanced_inspire' ? 'متقدم انسباير' : 'عام'
                })
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                تصفح بنك أسئلة الهيكل، الحلول التفصيلية بدليل المعلم، والاختبارات التفاعلية المباشرة
              </p>
            </div>
          </div>

          {/* Subject, Stream, Grade & Term Selector Bar (قسم الهياكل) */}
          <div className="bg-slate-800/90 border border-slate-700 p-2 rounded-2xl flex flex-wrap items-center gap-2">
            {/* Subject Selector */}
            <div className="flex items-center gap-1 bg-slate-900 rounded-xl p-1 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 px-1 font-semibold">المادة:</span>
              {[
                { id: 'math', name: 'الرياضيات' },
                { id: 'physics', name: 'الفيزياء' },
                { id: 'chemistry', name: 'الكيمياء' },
                { id: 'biology', name: 'الأحياء' },
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedSubject === sub.id
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>

            {/* Stream Selector */}
            <div className="flex items-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 overflow-x-auto">
              <button
                onClick={() => setSelectedStream('advanced')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedStream === 'advanced'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                متقدم
              </button>
              <button
                onClick={() => setSelectedStream('advanced_bridge')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedStream === 'advanced_bridge'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                متقدم بريدج
              </button>
              <button
                onClick={() => setSelectedStream('advanced_inspire')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedStream === 'advanced_inspire'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                متقدم انسباير
              </button>
              <button
                onClick={() => setSelectedStream('general')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedStream === 'general'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                عام
              </button>
            </div>

            {/* Grade Selector */}
            <div className="flex items-center gap-1 bg-slate-900 rounded-xl p-1 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 px-1 font-semibold">الصف:</span>
              {(['12', '11', '10', '9'] as GradeType[]).map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`w-7 h-7 rounded-lg text-xs font-extrabold transition-all flex items-center justify-center ${
                    selectedGrade === grade
                      ? 'bg-amber-500 text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>

            {/* Term Selector */}
            <div className="flex items-center gap-1 bg-slate-900 rounded-xl p-1 border border-slate-700/80">
              <span className="text-[10px] text-slate-400 px-1 font-semibold">الفصل:</span>
              {(['EOT1', 'EOT2', 'EOT3'] as TermType[]).map((term) => (
                <button
                  key={term}
                  onClick={() => setSelectedTerm(term)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    selectedTerm === term
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {term === 'EOT1' ? 'الأول' : term === 'EOT2' ? 'الثاني' : 'الثالث'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Counter Badges */}
        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs pt-3 border-t border-slate-800/60">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <div>
              <span className="text-slate-400 text-[11px]">الأسئلة المتوفرة بالهيكل</span>
              <span className="font-bold text-white mr-1.5">{totalQuestions} سؤالاً</span>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="text-slate-400 text-[11px]">موضوعي (MCQ)</span>
              <span className="font-bold text-cyan-300 mr-1.5">{mcqCount} سؤالاً (60 درجة)</span>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <div>
              <span className="text-slate-400 text-[11px]">مقالي ورقي</span>
              <span className="font-bold text-emerald-300 mr-1.5">{paperCount} أسئلة (40 درجة)</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800/80 pt-3">
          <button
            id="tab-all-questions"
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            جميع الأسئلة المستخرجة
          </button>

          <button
            id="tab-mcq-questions"
            onClick={() => setActiveTab('mcq')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === 'mcq'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            الأسئلة الموضوعية (MCQ)
          </button>

          <button
            id="tab-paper-questions"
            onClick={() => setActiveTab('paper')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === 'paper'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            الأسئلة المقالية الورقية
          </button>

          <button
            id="tab-matrix"
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <TableProperties className="w-4 h-4" />
            جدول المواصفات (26 مخرج)
          </button>

          <button
            id="tab-quiz-mode"
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            الاختبار التفاعلي
          </button>

          <button
            id="tab-ai-tutor"
            onClick={() => setActiveTab('tutor')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
              activeTab === 'tutor'
                ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md shadow-rose-500/30'
                : 'bg-slate-800/50 text-pink-300 hover:bg-slate-800 hover:text-pink-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            مساعدة
          </button>
        </nav>
      </div>
    </header>
  );
};
