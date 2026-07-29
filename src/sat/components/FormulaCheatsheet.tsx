import React, { useState } from 'react';
import { BookOpen, ChevronRight, CheckCircle2, Bookmark, Lightbulb } from 'lucide-react';
import { COURSE_UNITS } from '../data/satQuestions';

interface FormulaCheatsheetProps {
  lang: 'en' | 'ar';
}

export const FormulaCheatsheet: React.FC<FormulaCheatsheetProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'formulas' | 'syllabus'>('formulas');

  const formulas = [
    {
      titleEn: 'Slope & Linear Equations',
      titleAr: 'الميل والمعادلات الخطية',
      items: [
        { label: 'Slope m', expr: 'm = (y₂ - y₁) / (x₂ - x₁)' },
        { label: 'Slope-Intercept Form', expr: 'y = mx + b' },
        { label: 'Point-Slope Form', expr: 'y - y₁ = m(x - x₁)' },
        { label: 'Standard Form', expr: 'Ax + By = C' }
      ]
    },
    {
      titleEn: 'Quadratic Formulas & Vertex',
      titleAr: 'المعادلات والدوال التربيعية',
      items: [
        { label: 'Quadratic Formula', expr: 'x = (-b ± √(b² - 4ac)) / (2a)' },
        { label: 'Discriminant (Δ)', expr: 'b² - 4ac (Δ > 0: 2 roots, Δ = 0: 1 root, Δ < 0: 0 real roots)' },
        { label: 'Vertex Form', expr: 'y = a(x - h)² + k, Vertex = (h, k)' },
        { label: 'Axis of Symmetry', expr: 'x = -b / (2a)' }
      ]
    },
    {
      titleEn: 'Exponents & Compound Interest',
      titleAr: 'الأسس والفائدة المركبة',
      items: [
        { label: 'Exponent Rules', expr: 'aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1 / aⁿ' },
        { label: 'Fractional Exponents', expr: 'aᵐ/ⁿ = ⁿ√(aᵐ)' },
        { label: 'Compound Growth/Decay', expr: 'A = P (1 ± r)ᵗ' }
      ]
    },
    {
      titleEn: 'Geometry & Trigonometry',
      titleAr: 'الهندسة وحساب المثلثات',
      items: [
        { label: 'Pythagorean Theorem', expr: 'a² + b² = c²' },
        { label: 'SOH CAH TOA', expr: 'sin(θ) = Opp/Hyp, cos(θ) = Adj/Hyp, tan(θ) = Opp/Adj' },
        { label: 'Circle Equation', expr: '(x - h)² + (y - k)² = r², Center = (h, k)' },
        { label: 'Arc Length & Sector Area', expr: 'Arc = (θ/360) × 2πr, Area = (θ/360) × πr²' },
        { label: '3D Cylinder Volume', expr: 'V = π r² h' },
        { label: '3D Cone Volume', expr: 'V = (1/3) π r² h' }
      ]
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
      {/* Tab Controls */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'ar' ? 'دليل القوانين والمناهج (SAT Formulas & Syllabus)' : 'SAT Formulas & 8-Unit Course Outline'}
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'ar' ? 'مرجع القوانين وخطة التدريس الموصى بها لطلاب الصف 12' : 'Comprehensive reference guide for Grade 12 Digital SAT Math'}
            </p>
          </div>
        </div>

        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'formulas' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'ar' ? 'القوانين' : 'Formulas'}
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'syllabus' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'ar' ? 'الخطة (8 الوحدات)' : '8-Unit Course'}
          </button>
        </div>
      </div>

      {/* FORMULAS TAB */}
      {activeTab === 'formulas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formulas.map((group, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h4 className="text-sm font-bold text-indigo-400 mb-3 flex items-center gap-2">
                <span>📌</span>
                <span>{lang === 'ar' ? group.titleAr : group.titleEn}</span>
              </h4>

              <div className="space-y-2.5">
                {group.items.map((item, i) => (
                  <div key={i} className="bg-slate-900 p-3 rounded-lg border border-slate-800/80">
                    <div className="text-xs text-slate-400 font-medium mb-1">{item.label}</div>
                    <div className="text-sm font-mono font-bold text-amber-300">{item.expr}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SYLLABUS TAB (8 UNITS) */}
      {activeTab === 'syllabus' && (
        <div className="space-y-4">
          <div className="p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl flex items-center gap-3 text-xs text-indigo-300">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              {lang === 'ar'
                ? 'دورة تدريسية موصى بها تتكون من 8 وحدات: شرح المفهوم ← أمثلة محلولة ← أسئلة سات ← تدريب بوقت ← اختبار مصغر.'
                : 'Recommended 8-Unit Teaching Cycle: Concept Explanation → Worked Examples → SAT-Style Questions → Timed Practice → Mini Test.'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSE_UNITS.map((unit) => (
              <div key={unit.unitNum} className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold px-2.5 py-1 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-md">
                    {lang === 'ar' ? `الوحدة ${unit.unitNum}` : `Unit ${unit.unitNum}`}
                  </span>
                  <span className="text-[11px] text-amber-400 font-medium flex items-center gap-1">
                    <span>💡 Desmos Tip</span>
                  </span>
                </div>

                <h5 className="text-sm font-bold text-white mb-2">
                  {lang === 'ar' ? unit.titleAr : unit.titleEn}
                </h5>

                <div className="mb-3">
                  <ul className="space-y-1 text-xs text-slate-300">
                    {(lang === 'ar' ? unit.mainTopicsAr : unit.mainTopicsEn).map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 bg-slate-900 rounded-lg text-[11px] text-slate-400 font-mono border border-slate-800">
                  <span className="text-amber-400 font-bold mr-1">Desmos:</span>
                  {lang === 'ar' ? unit.desmosTipAr : unit.desmosTipEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
