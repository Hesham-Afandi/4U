import React, { useState } from 'react';
import { Calculator, Play, RotateCcw, HelpCircle, ExternalLink } from 'lucide-react';

interface EquationSolverProps {
  lang: 'en' | 'ar';
}

export const EquationSolver: React.FC<EquationSolverProps> = ({ lang }) => {
  const [equation, setEquation] = useState<string>('3x + 7 = 22');
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-5);
  const [c, setC] = useState<number>(6);

  const quadDiscriminant = b * b - 4 * a * c;
  const root1 = quadDiscriminant >= 0 ? ((-b + Math.sqrt(quadDiscriminant)) / (2 * a)).toFixed(2) : null;
  const root2 = quadDiscriminant >= 0 ? ((-b - Math.sqrt(quadDiscriminant)) / (2 * a)).toFixed(2) : null;
  const vertexX = (-b / (2 * a)).toFixed(2);
  const vertexY = (a * Math.pow(-b / (2 * a), 2) + b * (-b / (2 * a)) + c).toFixed(2);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'ar' ? 'حاسبة ديسموس والحل الذكي (Desmos & Smart Solver)' : 'Desmos & Interactive SAT Solver'}
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'ar' ? 'أداة تفاعلية للتدرب على مهارات ديسموس وحل المعادلات' : 'Practice Desmos graphing moves & step-by-step SAT solvers'}
            </p>
          </div>
        </div>

        <a
          href="https://www.desmos.com/calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-semibold transition"
        >
          <span>Desmos Official</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quadratic & Polynomial Solver */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
          <h4 className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
            <span>⚡</span>
            <span>{lang === 'ar' ? 'مستكشف المعادلات التربيعية ax² + bx + c = 0' : 'Quadratic Solver: ax² + bx + c = 0'}</span>
          </h4>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">a</label>
              <input
                type="number"
                value={a}
                onChange={(e) => setA(Number(e.target.value) || 1)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-bold text-indigo-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">b</label>
              <input
                type="number"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-bold text-indigo-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">c</label>
              <input
                type="number"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-bold text-indigo-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-2 text-xs bg-slate-900/80 p-4 rounded-lg border border-slate-800 font-mono">
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-400">{lang === 'ar' ? 'المعادلة:' : 'Equation:'}</span>
              <span className="text-white font-bold">{a}x² {b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}x {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`} = 0</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-400">{lang === 'ar' ? 'المميز Discriminant (Δ = b² - 4ac):' : 'Discriminant (Δ = b² - 4ac):'}</span>
              <span className={`font-bold ${quadDiscriminant > 0 ? 'text-emerald-400' : quadDiscriminant === 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                {quadDiscriminant} ({quadDiscriminant > 0 ? (lang === 'ar' ? 'جذران حقيقيان' : '2 Real Roots') : quadDiscriminant === 0 ? (lang === 'ar' ? 'جذر واحد' : '1 Double Root') : (lang === 'ar' ? 'جذور مركبة' : 'Complex Roots')})
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-400">{lang === 'ar' ? 'رأس المنحنى Vertex (h, k):' : 'Vertex (h, k):'}</span>
              <span className="text-amber-300 font-bold">({vertexX}, {vertexY})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{lang === 'ar' ? 'الجذور / أصفار الدالة:' : 'Roots / x-intercepts:'}</span>
              <span className="text-cyan-400 font-bold">
                {quadDiscriminant >= 0 ? `x₁ = ${root1}, x₂ = ${root2}` : (lang === 'ar' ? 'لا توجد جذور حقيقية' : 'No real roots')}
              </span>
            </div>
          </div>
        </div>

        {/* Desmos Cheat Sheet Tips */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-indigo-400 mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>{lang === 'ar' ? 'حركات القوة في ديسموس للسات (Desmos Power Moves)' : 'SAT Desmos Power Moves'}</span>
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-bold">1.</span>
                <span>
                  <strong>{lang === 'ar' ? 'إيجاد نقاط التقاطع:' : 'Find Intersections:'}</strong>{' '}
                  {lang === 'ar' ? 'اكتب المعادلتين مباشرة في ديسموس وانقر على نقطة التقاطع للحصول على (x, y).' : 'Type both equations in Desmos and click the intersection point to get (x, y) instantly.'}
                </span>
              </li>
              <li className="flex items-start gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-bold">2.</span>
                <span>
                  <strong>{lang === 'ar' ? 'الانحدار الخطي:' : 'Linear Regression:'}</strong>{' '}
                  {lang === 'ar' ? 'أضف جدولاً بالبيانات ثم اكتب y1 ~ m x1 + b لإيجاد ميل خط الأفضل ملاءمة.' : 'Add a table with data points, then type y1 ~ m x1 + b to calculate slope & intercept.'}
                </span>
              </li>
              <li className="flex items-start gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-bold">3.</span>
                <span>
                  <strong>{lang === 'ar' ? 'القيم الممكنة للمعاملات:' : 'Sliders for Constants:'}</strong>{' '}
                  {lang === 'ar' ? 'استخدم أشرطة التمرير (Sliders) للقيم k أو c لاكتشاف عدد الحلول بصرياً.' : 'Use sliders for unknown variables like k or c to visually discover the required range.'}
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
            <span>{lang === 'ar' ? 'ديسموس مسموح في كامل قسم الرياضيات' : 'Desmos allowed in 100% of SAT Math'}</span>
            <span className="text-emerald-400 font-semibold">100% Digital SAT Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
