import React from 'react';

interface MathSvgDiagramProps {
  type?: string;
  qNumber?: number | string;
  unit?: number;
}

export const MathSvgDiagram: React.FC<MathSvgDiagramProps> = ({ type, qNumber, unit }) => {
  // Determine diagram type from type string or qNumber
  const qStr = String(qNumber);

  // If no explicit type or unknown type, return null (do not display default math diagram)
  if (!type) {
    return null;
  }

  // 1. Arc Length / Trigonometric Curve (f(x) = cos x or sin x)
  if (type === 'arc_length') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>📈 رسم توضيحي بياني للوظيفة والمنحنى (f(x) = cos x / sin x)</span>
        </div>
        <svg viewBox="0 0 400 200" className="w-full max-w-md h-auto font-sans">
          {/* Background Grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="200" fill="url(#grid)" rx="12" />

          {/* Axes */}
          <line x1="40" y1="160" x2="360" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <line x1="60" y1="20" x2="60" y2="180" stroke="#94a3b8" strokeWidth="2" />

          {/* Axis Labels */}
          <text x="365" y="165" fill="#cbd5e1" fontSize="12" fontWeight="bold">x</text>
          <text x="55" y="15" fill="#cbd5e1" fontSize="12" fontWeight="bold">y</text>
          <text x="50" y="175" fill="#94a3b8" fontSize="10">0</text>
          <text x="200" y="178" fill="#a5b4fc" fontSize="10" textAnchor="middle">π/4</text>
          <text x="340" y="178" fill="#a5b4fc" fontSize="10" textAnchor="middle">π/2</text>

          {/* Cosine Curve */}
          <path
            d="M 60,40 Q 200,40 340,160"
            fill="none"
            stroke="#818cf8"
            strokeWidth="3.5"
          />

          {/* Secant Approximation Segments (n=2) */}
          <line x1="60" y1="40" x2="200" y2="75" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="200" y1="75" x2="340" y2="160" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />

          {/* Points */}
          <circle cx="60" cy="40" r="5" fill="#38bdf8" />
          <circle cx="200" cy="75" r="5" fill="#f59e0b" />
          <circle cx="340" cy="160" r="5" fill="#38bdf8" />

          {/* Point Coordinates */}
          <text x="70" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold">(0, 1)</text>
          <text x="210" y="70" fill="#f59e0b" fontSize="11" fontWeight="bold">(π/4, 0.707)</text>
          <text x="320" y="150" fill="#38bdf8" fontSize="11" fontWeight="bold">(π/2, 0)</text>
        </svg>
      </div>
    );
  }

  // 2. Tangent Line & Secant Line Graph (qNumber 8, 9, 10, Mean Value Theorem)
  if (type === 'secant_tangent') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>📐 الخط القاطع (Secant Line) والخط المماس (Tangent Line) والمنحنى</span>
        </div>
        <svg viewBox="0 0 400 200" className="w-full max-w-md h-auto font-sans">
          <rect width="400" height="200" fill="#0f172a" rx="12" />

          {/* Axes */}
          <line x1="30" y1="170" x2="370" y2="170" stroke="#64748b" strokeWidth="2" />
          <line x1="50" y1="20" x2="50" y2="185" stroke="#64748b" strokeWidth="2" />

          {/* Curve y = f(x) */}
          <path
            d="M 60,150 C 120,20 280,180 350,30"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
          />

          {/* Secant Line (yellow) */}
          <line x1="80" y1="135" x2="320" y2="55" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />

          {/* Parallel Tangent Line (emerald) */}
          <line x1="100" y1="115" x2="310" y2="40" stroke="#10b981" strokeWidth="2.5" />

          {/* Points */}
          <circle cx="110" cy="127" r="5" fill="#f59e0b" />
          <circle cx="290" cy="65" r="5" fill="#f59e0b" />
          <circle cx="205" cy="78" r="5" fill="#10b981" />

          {/* Labels */}
          <text x="100" y="150" fill="#cbd5e1" fontSize="11" fontWeight="bold">Point A</text>
          <text x="295" y="85" fill="#cbd5e1" fontSize="11" fontWeight="bold">Point B</text>
          <text x="215" y="70" fill="#10b981" fontSize="11" fontWeight="bold">f'(c) = Slope</text>
          <text x="325" y="45" fill="#10b981" fontSize="11" fontWeight="bold">Tangent</text>
          <text x="325" y="70" fill="#f59e0b" fontSize="11" fontWeight="bold">Secant</text>
        </svg>
      </div>
    );
  }

  // 3. Right Triangle Trigonometry (Inverse Trig / Trig Rules)
  if (type === 'triangle') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>🔺 المثلث القائم الزاوية والدوال المثلثية العكسية (Right Triangle)</span>
        </div>
        <svg viewBox="0 0 320 180" className="w-full max-w-sm h-auto font-sans">
          <rect width="320" height="180" fill="#0f172a" rx="12" />

          {/* Triangle */}
          <polygon points="50,140 250,140 250,40" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" strokeWidth="3" />

          {/* Right Angle Square */}
          <polyline points="235,140 235,125 250,125" fill="none" stroke="#f59e0b" strokeWidth="2" />

          {/* Arc for Angle θ */}
          <path d="M 80,140 A 30,30 0 0,0 72,128" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <text x="88" y="132" fill="#38bdf8" fontSize="14" fontWeight="bold">θ</text>

          {/* Side Labels */}
          <text x="150" y="160" fill="#cbd5e1" fontSize="12" textAnchor="middle" fontWeight="bold">المجاور (Adjacent)</text>
          <text x="265" y="95" fill="#cbd5e1" fontSize="12" fontWeight="bold">المقابل (Opposite)</text>
          <text x="135" y="80" fill="#a5b4fc" fontSize="12" fontWeight="bold">الوتر (Hypotenuse)</text>
        </svg>
      </div>
    );
  }

  // 4. Parabola Graph (Quadratic functions: f(x) = x² - 3x - 10 or f(x) = x² - 4x)
  if (type === 'parabola_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>📊 التمثيل البياني للقطع المكافئ والصفريات (Parabola Zeros)</span>
        </div>
        <svg viewBox="0 0 380 220" className="w-full max-w-md h-auto font-sans">
          {/* Background Grid */}
          <defs>
            <pattern id="grid_parabola" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="380" height="220" fill="#0f172a" rx="12" />
          <rect width="380" height="220" fill="url(#grid_parabola)" rx="12" />

          {/* Axes */}
          <line x1="20" y1="120" x2="360" y2="120" stroke="#64748b" strokeWidth="2" />
          <line x1="140" y1="10" x2="140" y2="210" stroke="#64748b" strokeWidth="2" />
          <text x="350" y="115" fill="#cbd5e1" fontSize="11" fontWeight="bold">x</text>
          <text x="145" y="22" fill="#cbd5e1" fontSize="11" fontWeight="bold">y</text>

          {/* Parabola y = x² - 3x - 10 curve */}
          <path
            d="M 60,20 Q 210,240 340,20"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3.5"
          />

          {/* Roots / Intercepts (x = -2, x = 5) */}
          <circle cx="100" cy="120" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="290" cy="120" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

          {/* Vertex Point (1.5, -12.25) */}
          <circle cx="195" cy="180" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />

          {/* Labels */}
          <text x="65" y="110" fill="#f59e0b" fontSize="12" fontWeight="bold">(-2, 0)</text>
          <text x="295" y="110" fill="#f59e0b" fontSize="12" fontWeight="bold">(5, 0)</text>
          <text x="195" y="200" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">الرأس Vertex (1.5, -12.25)</text>
        </svg>
      </div>
    );
  }

  // 5. Systems of Inequalities Grid
  if (type === 'systems_grid') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>📐 مستوى الإحداثيات والحل المشترك للمتباينات (Feasible Solution Region)</span>
        </div>
        <svg viewBox="0 0 360 200" className="w-full max-w-md h-auto font-sans">
          <rect width="360" height="200" fill="#0f172a" rx="12" />

          {/* Grid lines */}
          <defs>
            <pattern id="sys_grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="360" height="200" fill="url(#sys_grid)" rx="12" />

          {/* Axes */}
          <line x1="30" y1="150" x2="330" y2="150" stroke="#64748b" strokeWidth="2" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#64748b" strokeWidth="2" />

          {/* Inequality boundary 1: y = 6 (horizontal line) */}
          <line x1="30" y1="60" x2="330" y2="60" stroke="#10b981" strokeWidth="2.5" />

          {/* Inequality boundary 2: y = x - 3 (dashed line) */}
          <line x1="40" y1="180" x2="220" y2="20" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6,4" />

          {/* Shaded Solution Region (Intersection) */}
          <polygon points="100,60 175,60 100,135" fill="rgba(99, 102, 241, 0.35)" stroke="#6366f1" strokeWidth="1" />

          {/* Test Point (0,0) */}
          <circle cx="100" cy="110" r="5" fill="#38bdf8" />
          <text x="110" y="112" fill="#38bdf8" fontSize="12" fontWeight="bold">(0, 0) ✔️</text>

          <text x="180" y="52" fill="#10b981" fontSize="11" fontWeight="bold">y = 6</text>
          <text x="225" y="35" fill="#f59e0b" fontSize="11" fontWeight="bold">y = x - 3</text>
          <text x="115" y="85" fill="#a5b4fc" fontSize="11" fontWeight="bold">منطقة الحل Solution Region</text>
        </svg>
      </div>
    );
  }

  // 6. Car Maintenance Garage Options (Rashid Garage)
  if (type === 'car_maintenance') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>🚗 خيارات باقات الصيانة الدورية بالمرآب (Rashid Garage Packages)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg text-center text-xs">
          <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-2xl space-y-1">
            <span className="text-amber-400 font-bold block">1️⃣ الباقة الأولى</span>
            <p className="text-slate-300">تغيير الزيت + تنظيف الردياتير</p>
            <span className="inline-block bg-amber-500/20 text-amber-300 font-mono font-bold px-2 py-0.5 rounded text-xs mt-1">120 AED</span>
          </div>
          <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-2xl space-y-1">
            <span className="text-amber-400 font-bold block">2️⃣ الباقة الثانية</span>
            <p className="text-slate-300">دواسات المكابح + تغيير الزيت</p>
            <span className="inline-block bg-amber-500/20 text-amber-300 font-mono font-bold px-2 py-0.5 rounded text-xs mt-1">160 AED</span>
          </div>
          <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-2xl space-y-1">
            <span className="text-amber-400 font-bold block">3️⃣ الباقة الثالثة</span>
            <p className="text-slate-300">تغيير الزيت + تنظيف + مكابح</p>
            <span className="inline-block bg-amber-500/20 text-amber-300 font-mono font-bold px-2 py-0.5 rounded text-xs mt-1">200 AED</span>
          </div>
        </div>
      </div>
    );
  }

  // 7. Financial Table / Sports Matrix Table
  if (type === 'financial_table') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2 flex items-center gap-1.5">
          <span>📊 جدول البيانات الممثلة بالمصفوفة B (Basketball Goals Matrix)</span>
        </div>
        <div className="overflow-x-auto w-full max-w-md">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-slate-800 text-indigo-300 border-b border-slate-700">
                <th className="p-2 text-right">نوع الهدف (Goal Type)</th>
                <th className="p-2">موسم 1</th>
                <th className="p-2">موسم 2</th>
                <th className="p-2">موسم 3</th>
                <th className="p-2">موسم 4</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200 font-mono">
              <tr>
                <td className="p-2 text-right font-sans font-semibold text-slate-300">هدف ميداني (2 pts)</td>
                <td className="p-2">197</td>
                <td className="p-2">249</td>
                <td className="p-2">184</td>
                <td className="p-2">143</td>
              </tr>
              <tr>
                <td className="p-2 text-right font-sans font-semibold text-slate-300">ثلاثية (3 pts)</td>
                <td className="p-2">7</td>
                <td className="p-2">8</td>
                <td className="p-2">4</td>
                <td className="p-2">1</td>
              </tr>
              <tr>
                <td className="p-2 text-right font-sans font-semibold text-slate-300">رمية حرة (1 pt)</td>
                <td className="p-2">102</td>
                <td className="p-2">158</td>
                <td className="p-2">117</td>
                <td className="p-2">65</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 8. Scientific Method Flowchart
  if (type === 'scientific_method_flow') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🧪 مخطط المنهج العلمي (Scientific Method Steps)
        </div>
        <svg viewBox="0 0 360 220" className="w-full max-w-md h-auto font-sans text-xs">
          <rect width="360" height="220" fill="#0f172a" rx="12" />
          
          {/* Steps */}
          <rect x="110" y="12" width="140" height="26" rx="6" fill="#0284c7" />
          <text x="180" y="29" fill="#ffffff" textAnchor="middle" fontWeight="bold" fontSize="10">1. تحديد المشكلة (State Problem)</text>

          <line x1="180" y1="38" x2="180" y2="48" stroke="#38bdf8" strokeWidth="2" />

          <rect x="110" y="48" width="140" height="26" rx="6" fill="#0284c7" />
          <text x="180" y="65" fill="#ffffff" textAnchor="middle" fontWeight="bold" fontSize="10">2. جمع المعلومات (Gather Info)</text>

          <line x1="180" y1="74" x2="180" y2="84" stroke="#38bdf8" strokeWidth="2" />

          <rect x="110" y="84" width="140" height="26" rx="6" fill="#0369a1" />
          <text x="180" y="101" fill="#ffffff" textAnchor="middle" fontWeight="bold" fontSize="10">3. صياغة الفرضية (Form Hypothesis)</text>

          <line x1="180" y1="110" x2="180" y2="120" stroke="#38bdf8" strokeWidth="2" />

          <rect x="110" y="120" width="140" height="26" rx="6" fill="#4d7c0f" />
          <text x="180" y="137" fill="#ffffff" textAnchor="middle" fontWeight="bold" fontSize="10">4. اختبار الفرضية (Test Hypothesis)</text>

          <line x1="180" y1="146" x2="180" y2="156" stroke="#38bdf8" strokeWidth="2" />

          <rect x="110" y="156" width="140" height="26" rx="6" fill="#4d7c0f" />
          <text x="180" y="173" fill="#ffffff" textAnchor="middle" fontWeight="bold" fontSize="10">5. تحليل البيانات (Analyze Data)</text>

          <line x1="180" y1="182" x2="180" y2="190" stroke="#38bdf8" strokeWidth="2" />

          <rect x="90" y="190" width="180" height="24" rx="6" fill="#6d28d9" />
          <text x="180" y="206" fill="#ffffff" textAnchor="middle" fontWeight="bold" fontSize="10">6. استخلاص النتائج (Draw Conclusions)</text>
        </svg>
      </div>
    );
  }

  // 9. Accuracy vs Precision Targets
  if (type === 'errors_and_precision_target') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-amber-300 mb-2">
          🎯 الضبط والدقة ومصادر أخطاء القياس (Accuracy vs Precision)
        </div>
        <svg viewBox="0 0 360 160" className="w-full max-w-md h-auto font-sans">
          <rect width="360" height="160" fill="#0f172a" rx="12" />

          {/* Target 1: Accurate & Precise */}
          <g transform="translate(90, 70)">
            <circle cx="0" cy="0" r="45" fill="none" stroke="#ef4444" strokeWidth="3" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="#ef4444" strokeWidth="3" />
            <circle cx="0" cy="0" r="15" fill="#ef4444" />
            {/* Shots centered */}
            <circle cx="-2" cy="1" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <circle cx="1" cy="-2" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <circle cx="2" cy="3" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <text x="0" y="65" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">مضبوط ودقيق (Accurate & Precise)</text>
          </g>

          {/* Target 2: Precise but Not Accurate (Systematic error/bent micrometer) */}
          <g transform="translate(270, 70)">
            <circle cx="0" cy="0" r="45" fill="none" stroke="#ef4444" strokeWidth="3" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="#ef4444" strokeWidth="3" />
            <circle cx="0" cy="0" r="15" fill="#ef4444" />
            {/* Shots grouped away from center */}
            <circle cx="-28" cy="-25" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <circle cx="-26" cy="-22" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <circle cx="-30" cy="-20" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            <text x="0" y="65" fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold">دقيق وغير مضبوط (Precise, Not Accurate)</text>
          </g>
        </svg>
      </div>
    );
  }

  // 10. Toy Train Velocity-Time Graph (Figure 9)
  if (type === 'toy_train_vt_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2">
          🚆 منحنى السرعة والزمن للقطار اللعبة (Toy Train v-t Graph - Figure 9)
        </div>
        <svg viewBox="0 0 380 200" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="200" fill="#0f172a" rx="12" />

          {/* Grid lines */}
          <defs>
            <pattern id="train_grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="380" height="200" fill="url(#train_grid)" rx="12" />

          {/* Axes */}
          <line x1="40" y1="160" x2="360" y2="160" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="20" x2="40" y2="160" stroke="#64748b" strokeWidth="2" />

          {/* Labels */}
          <text x="350" y="180" fill="#94a3b8" fontSize="10" fontWeight="bold">Time (s)</text>
          <text x="10" y="25" fill="#94a3b8" fontSize="10" fontWeight="bold">v (m/s)</text>

          <text x="40" y="175" fill="#cbd5e1" fontSize="9">0</text>
          <text x="110" y="175" fill="#cbd5e1" fontSize="9">10.0</text>
          <text x="180" y="175" fill="#cbd5e1" fontSize="9">20.0</text>
          <text x="250" y="175" fill="#cbd5e1" fontSize="9">30.0</text>
          <text x="320" y="175" fill="#cbd5e1" fontSize="9">40.0</text>

          <text x="20" y="163" fill="#cbd5e1" fontSize="9">0</text>
          <text x="20" y="120" fill="#cbd5e1" fontSize="9">4.0</text>
          <text x="20" y="80" fill="#cbd5e1" fontSize="9">8.0</text>
          <text x="15" y="45" fill="#cbd5e1" fontSize="9">10.0</text>

          {/* Curve: 0 to 5s rises to 10 m/s, 5s to 15s constant 10 m/s, 15s to 20s drops to 4 m/s, 20s to 40s curves to 0 */}
          <path
            d="M 40,160 L 75,45 L 145,45 L 180,120 Q 250,130 320,160"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3.5"
          />

          {/* Highlight interval 15 to 20s (max negative acceleration) */}
          <line x1="145" y1="45" x2="180" y2="120" stroke="#f59e0b" strokeWidth="4" />
          <text x="175" y="70" fill="#f59e0b" fontSize="10" fontWeight="bold">a = -1.2 m/s²</text>
        </svg>
      </div>
    );
  }

  // 11. Motion Diagram Dots (Particle Model)
  if (type === 'motion_diagram_dots') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🔴 نموذج الجسيم النقطي لحركة قرص الهوكي (Particle Model Motion Diagram)
        </div>
        <svg viewBox="0 0 380 90" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="90" fill="#0f172a" rx="12" />

          {/* Line axis */}
          <line x1="30" y1="50" x2="350" y2="50" stroke="#64748b" strokeWidth="2" />
          <polygon points="350,46 360,50 350,54" fill="#64748b" />

          {/* Dots equally spaced */}
          {[30, 75, 120, 165, 210, 255, 300, 345].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="50" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x={x} y="72" fill="#cbd5e1" fontSize="9" textAnchor="middle">{i * 20}m</text>
              <text x={x} y="32" fill="#38bdf8" fontSize="8" textAnchor="middle">t={i}s</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // 12. Ship Position Line (Axis with A, B, C, D)
  if (type === 'ship_position_line') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2">
          🚢 خط حركة السفينة وتحديد الموقع بالنسبة لنقطة الأصل A (Ship Position Axis)
        </div>
        <svg viewBox="0 0 380 110" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="110" fill="#0f172a" rx="12" />

          {/* Axis */}
          <line x1="20" y1="60" x2="360" y2="60" stroke="#64748b" strokeWidth="2" />
          <text x="340" y="52" fill="#38bdf8" fontSize="10" fontWeight="bold">East (شرق)</text>

          {/* Ticks and points */}
          {/* D (-17km) */}
          <line x1="50" y1="53" x2="50" y2="67" stroke="#94a3b8" strokeWidth="2" />
          <text x="50" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">D</text>

          {/* A (Origin 0 km) */}
          <line x1="120" y1="50" x2="120" y2="70" stroke="#10b981" strokeWidth="3" />
          <text x="120" y="45" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">A (Origin)</text>
          <text x="120" y="82" fill="#10b981" fontSize="9" textAnchor="middle">0 km</text>

          {/* B (+25 km) */}
          <line x1="210" y1="53" x2="210" y2="67" stroke="#38bdf8" strokeWidth="2" />
          <text x="210" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">B</text>
          <text x="210" y="82" fill="#38bdf8" fontSize="9" textAnchor="middle">+25 km</text>

          {/* C (+88 km) */}
          <line x1="320" y1="53" x2="320" y2="67" stroke="#a855f7" strokeWidth="2" />
          <text x="320" y="45" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">C</text>
          <text x="320" y="82" fill="#a855f7" fontSize="9" textAnchor="middle">+88 km</text>

          {/* Motion Vector Arrow B to C */}
          <line x1="210" y1="95" x2="315" y2="95" stroke="#38bdf8" strokeWidth="2.5" />
          <polygon points="315,91 323,95 315,99" fill="#38bdf8" />
          <text x="260" y="107" fill="#38bdf8" fontSize="9" textAnchor="middle">v = 42 km/h East (1.5 h)</text>
        </svg>
      </div>
    );
  }

  // 13. Free Fall Gravity Rings around Earth
  if (type === 'free_fall_gravity_rings') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          🌍 تناقص تسارع الجاذبية الأرضية مع زيادة الارتفاع عن سطح الأرض (Figure 24)
        </div>
        <svg viewBox="0 0 360 200" className="w-full max-w-md h-auto font-sans">
          <rect width="360" height="200" fill="#0f172a" rx="12" />

          {/* Earth Center */}
          <circle cx="180" cy="100" r="28" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <text x="180" y="104" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Earth</text>

          {/* Gravity Rings */}
          <circle cx="180" cy="100" r="45" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" />
          <circle cx="180" cy="100" r="62" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,3" />
          <circle cx="180" cy="100" r="80" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />

          {/* Gravity Labels */}
          <text x="180" y="52" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">g = 9.8 m/s² (سطح الأرض)</text>
          <text x="180" y="34" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">g = 4.9 m/s²</text>
          <text x="180" y="16" fill="#a855f7" fontSize="9" fontWeight="bold" textAnchor="middle">g = 2.5 m/s²</text>
        </svg>
      </div>
    );
  }

  // 14. Spring Mass Graph
  if (type === 'spring_mass_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-purple-300 mb-2">
          📏 استطالة الزنبرك مقابل الكتلة المعلقة (Figure 16: Spring Length vs Mass)
        </div>
        <svg viewBox="0 0 360 180" className="w-full max-w-md h-auto font-sans">
          <rect width="360" height="180" fill="#0f172a" rx="12" />

          {/* Grid */}
          <defs>
            <pattern id="sp_grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="360" height="180" fill="url(#sp_grid)" rx="12" />

          {/* Axes */}
          <line x1="45" y1="140" x2="330" y2="140" stroke="#64748b" strokeWidth="2" />
          <line x1="45" y1="20" x2="45" y2="140" stroke="#64748b" strokeWidth="2" />

          <text x="320" y="158" fill="#cbd5e1" fontSize="9" fontWeight="bold">Mass (g)</text>
          <text x="10" y="25" fill="#cbd5e1" fontSize="9" fontWeight="bold">Length (cm)</text>

          {/* Line y = 0.08x + 13.7 */}
          <line x1="45" y1="110" x2="310" y2="30" stroke="#a855f7" strokeWidth="3" />

          {/* Y-intercept b = 13.7 */}
          <circle cx="45" cy="110" r="4" fill="#ef4444" />
          <text x="52" y="114" fill="#ef4444" fontSize="9" fontWeight="bold">b = 13.7 cm</text>

          {/* Point for 15 cm length -> m = 16 g */}
          <line x1="155" y1="140" x2="155" y2="78" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="45" y1="78" x2="155" y2="78" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="155" cy="78" r="5" fill="#38bdf8" />
          <text x="160" y="74" fill="#38bdf8" fontSize="9" fontWeight="bold">m ≈ 16 g (L = 15 cm)</text>
        </svg>
      </div>
    );
  }

  // --- MATH GRADE 9 DIAGRAMS ---

  // 15. Absolute Value Equation Number Line (|3z - 3| = 9 => z = -2, z = 4)
  if (type === 'math9_abs_val_numline') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📍 تمثيل حل معادلة القيمة المطلقة على خط الأعداد |3z - 3| = 9
        </div>
        <svg viewBox="0 0 380 110" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="110" fill="#0f172a" rx="12" />

          {/* Main Number Line */}
          <line x1="30" y1="60" x2="350" y2="60" stroke="#94a3b8" strokeWidth="2.5" />
          <polygon points="25,60 35,55 35,65" fill="#94a3b8" />
          <polygon points="355,60 345,55 345,65" fill="#94a3b8" />

          {/* Ticks and Labels */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val, idx) => {
            const x = 50 + idx * 30;
            const isSolution = val === -2 || val === 4;
            const isCenter = val === 1;
            return (
              <g key={val}>
                <line x1={x} y1="52" x2={x} y2="68" stroke={isSolution ? "#38bdf8" : "#64748b"} strokeWidth={isSolution ? 2.5 : 1.5} />
                <text x={x} y="85" fill={isSolution ? "#38bdf8" : isCenter ? "#f59e0b" : "#94a3b8"} fontSize="11" fontWeight={isSolution ? "bold" : "normal"} textAnchor="middle">
                  {val}
                </text>
              </g>
            );
          })}

          {/* Distance Arcs from Center (z = 1) */}
          <path d="M 140,52 Q 95,25 50,52" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <text x="95" y="28" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">3 units</text>

          <path d="M 140,52 Q 185,25 230,52" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <text x="185" y="28" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">3 units</text>

          {/* Center Point z = 1 */}
          <circle cx="140" cy="60" r="4" fill="#f59e0b" />

          {/* Solution Dots */}
          <circle cx="50" cy="60" r="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="230" cy="60" r="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />

          <text x="50" y="102" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">z = -2</text>
          <text x="230" y="102" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">z = 4</text>
        </svg>
      </div>
    );
  }

  // 16. Compound Inequality Number Line (2 <= h < 3)
  if (type === 'math9_compound_numline') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          📊 تمثيل المتباينة المركبة الربط "و" (2 ≤ h &lt; 3)
        </div>
        <svg viewBox="0 0 380 100" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="100" fill="#0f172a" rx="12" />

          {/* Main Line */}
          <line x1="30" y1="50" x2="350" y2="50" stroke="#64748b" strokeWidth="2" />

          {/* Shaded Interval Line */}
          <line x1="170" y1="50" x2="230" y2="50" stroke="#10b981" strokeWidth="6" />

          {/* Ticks */}
          {[-1, 0, 1, 2, 3, 4, 5].map((val, idx) => {
            const x = 50 + idx * 45;
            return (
              <g key={val}>
                <line x1={x} y1="43" x2={x} y2="57" stroke="#64748b" strokeWidth="1.5" />
                <text x={x} y="75" fill={val >= 2 && val <= 3 ? "#10b981" : "#94a3b8"} fontSize="12" fontWeight={val >= 2 && val <= 3 ? "bold" : "normal"} textAnchor="middle">
                  {val}
                </text>
              </g>
            );
          })}

          {/* Solid dot at 2 */}
          <circle cx="170" cy="50" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />

          {/* Open dot at 3 */}
          <circle cx="230" cy="50" r="6" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />

          <text x="170" y="28" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">h ≥ 2 (مغلقة)</text>
          <text x="230" y="28" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">h &lt; 3 (مفتوحة)</text>
        </svg>
      </div>
    );
  }

  // 17. Slope-Intercept Graph y = -2x + 3
  if (type === 'math9_slope_intercept_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2">
          📈 التمثيل البياني للمستقيم y = -2x + 3
        </div>
        <svg viewBox="0 0 320 220" className="w-full max-w-sm h-auto font-sans">
          <defs>
            <pattern id="grid_slope" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="320" height="220" fill="#0f172a" rx="12" />
          <rect width="320" height="220" fill="url(#grid_slope)" rx="12" />

          {/* Axes */}
          <line x1="160" y1="20" x2="160" y2="200" stroke="#64748b" strokeWidth="2" />
          <line x1="20" y1="120" x2="300" y2="120" stroke="#64748b" strokeWidth="2" />

          <text x="290" y="112" fill="#cbd5e1" fontSize="10" fontWeight="bold">x</text>
          <text x="168" y="32" fill="#cbd5e1" fontSize="10" fontWeight="bold">y</text>

          {/* Line y = -2x + 3: points (-1, 5) -> (210, 20), (0,3) -> (160, 60), (1,1) -> (110, 100), (2, -1) -> (60, 140) */}
          <line x1="80" y1="20" x2="240" y2="180" stroke="#818cf8" strokeWidth="3" />

          {/* Points */}
          <circle cx="160" cy="60" r="5" fill="#ef4444" />
          <text x="170" y="58" fill="#ef4444" fontSize="10" fontWeight="bold">(0, 3) b=3</text>

          <circle cx="180" cy="100" r="5" fill="#38bdf8" />
          <text x="190" y="104" fill="#38bdf8" fontSize="10" fontWeight="bold">(1, 1)</text>

          {/* Slope Triangle */}
          <path d="M 160,60 L 180,60 L 180,100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="170" y="52" fill="#f59e0b" fontSize="9" textAnchor="middle">+1</text>
          <text x="188" y="80" fill="#f59e0b" fontSize="9">-2</text>
        </svg>
      </div>
    );
  }

  // 18. Absolute Value Function V-Shape Graph g(x) = |x + 2| + 3
  if (type === 'math9_abs_v_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-purple-300 mb-2">
          📉 التمثيل البياني لدالة القيمة المطلقة g(x) = |x + 2| + 3
        </div>
        <svg viewBox="0 0 340 220" className="w-full max-w-sm h-auto font-sans">
          <defs>
            <pattern id="grid_v" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="340" height="220" fill="#0f172a" rx="12" />
          <rect width="340" height="220" fill="url(#grid_v)" rx="12" />

          {/* Axes */}
          <line x1="180" y1="20" x2="180" y2="200" stroke="#64748b" strokeWidth="2" />
          <line x1="20" y1="160" x2="320" y2="160" stroke="#64748b" strokeWidth="2" />

          <text x="305" y="152" fill="#cbd5e1" fontSize="10" fontWeight="bold">x</text>
          <text x="188" y="32" fill="#cbd5e1" fontSize="10" fontWeight="bold">y</text>

          {/* V-Shape Graph: Vertex at (-2, 3) -> (140, 100) */}
          {/* Left Branch to (-5, 6) -> (80, 40) */}
          <line x1="140" y1="100" x2="60" y2="20" stroke="#c084fc" strokeWidth="3" />
          {/* Right Branch to (1, 6) -> (200, 40) */}
          <line x1="140" y1="100" x2="220" y2="20" stroke="#c084fc" strokeWidth="3" />

          {/* Vertex Point */}
          <circle cx="140" cy="100" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <text x="140" y="120" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">رأس المنحنى (-2, 3)</text>

          {/* Range Arrow Line y >= 3 */}
          <line x1="20" y1="100" x2="320" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
          <text x="270" y="92" fill="#ef4444" fontSize="10" fontWeight="bold">المدى: y ≥ 3</text>
        </svg>
      </div>
    );
  }

  // 19. Inequality Region Graph x < 2
  if (type === 'math9_inequality_region') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🗺️ منطقة حل المتباينة الخطية 7x + 1 &lt; 15 ⟹ x &lt; 2
        </div>
        <svg viewBox="0 0 320 180" className="w-full max-w-sm h-auto font-sans">
          <rect width="320" height="180" fill="#0f172a" rx="12" />

          {/* Shaded Region for x < 2 */}
          <rect x="20" y="20" width="180" height="140" fill="rgba(2, 132, 199, 0.25)" />

          {/* Grid Axes */}
          <line x1="100" y1="20" x2="100" y2="160" stroke="#64748b" strokeWidth="1.5" />
          <line x1="20" y1="90" x2="300" y2="90" stroke="#64748b" strokeWidth="1.5" />

          {/* Dashed boundary line at x = 2 (x = 200) */}
          <line x1="200" y1="20" x2="200" y2="160" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6,6" />

          <text x="200" y="175" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">x = 2 (مقطع)</text>
          <text x="110" y="50" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">منطقة الحل (x &lt; 2)</text>
        </svg>
      </div>
    );
  }

  // 20. Intercepts Graph y = 4 + 2x
  if (type === 'math9_intercepts_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          📐 رسم المستقيم y = 4 + 2x باستخدام تقاطعات المحاور
        </div>
        <svg viewBox="0 0 320 200" className="w-full max-w-sm h-auto font-sans">
          <rect width="320" height="200" fill="#0f172a" rx="12" />

          {/* Axes */}
          <line x1="160" y1="20" x2="160" y2="180" stroke="#64748b" strokeWidth="2" />
          <line x1="20" y1="120" x2="300" y2="120" stroke="#64748b" strokeWidth="2" />

          {/* Line through (-2,0) -> (100,120) and (0,4) -> (160,40) */}
          <line x1="70" y1="160" x2="220" y2="20" stroke="#10b981" strokeWidth="3" />

          {/* Intercept 1: (-2, 0) */}
          <circle cx="100" cy="120" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
          <text x="80" y="142" fill="#ef4444" fontSize="10" fontWeight="bold">(-2, 0) المقطع السيني</text>

          {/* Intercept 2: (0, 4) */}
          <circle cx="160" cy="40" r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
          <text x="172" y="44" fill="#38bdf8" fontSize="10" fontWeight="bold">(0, 4) المقطع الصادي</text>
        </svg>
      </div>
    );
  }

  // 21. Paper Q5 Absolute Value Inequality Number Line (|x + 1| <= 4)
  if (type === 'math9_abs_numline_paper') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-amber-300 mb-2">
          📏 تمثيل متباينة القيمة المطلقة على خط الأعداد |x + 1| ≤ 4
        </div>
        <svg viewBox="0 0 380 110" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="110" fill="#0f172a" rx="12" />

          {/* Number Line */}
          <line x1="30" y1="55" x2="350" y2="55" stroke="#64748b" strokeWidth="2" />

          {/* Highlighted Solution Interval [-5, 3] */}
          <line x1="70" y1="55" x2="270" y2="55" stroke="#f59e0b" strokeWidth="6" />

          {/* Ticks [-6 to 4] */}
          {[-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4].map((val, idx) => {
            const x = 45 + idx * 25;
            const isEnd = val === -5 || val === 3;
            const isCenter = val === -1;
            return (
              <g key={val}>
                <line x1={x} y1="48" x2={x} y2="62" stroke="#64748b" strokeWidth="1.5" />
                <text x={x} y="82" fill={isEnd ? "#f59e0b" : isCenter ? "#38bdf8" : "#94a3b8"} fontSize="11" fontWeight={isEnd || isCenter ? "bold" : "normal"} textAnchor="middle">
                  {val}
                </text>
              </g>
            );
          })}

          {/* Closed dots at -5 and 3 */}
          <circle cx="70" cy="55" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="270" cy="55" r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

          {/* Midpoint Dot at -1 */}
          <circle cx="170" cy="55" r="4" fill="#38bdf8" />
          <text x="170" y="28" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">المنتصف = -1</text>
          <text x="220" y="28" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">المسافة = 4</text>
        </svg>
      </div>
    );
  }

  // 22. Coulomb's Law Two Charges (phys12g_coulomb_two_charges)
  if (type === 'phys12g_coulomb_two_charges') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          ⚡ شحنتان نقطيتان والقوة الكهروستاتيكية المتبادلة بينهما (قوة تجاذب)
        </div>
        <svg viewBox="0 0 400 130" className="w-full max-w-md h-auto font-sans">
          <rect width="400" height="130" fill="#0f172a" rx="12" />

          {/* Distance Line */}
          <line x1="80" y1="65" x2="320" y2="65" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4" />

          {/* Distance Dimension Marker */}
          <line x1="80" y1="100" x2="320" y2="100" stroke="#a5b4fc" strokeWidth="1.5" />
          <line x1="80" y1="93" x2="80" y2="107" stroke="#a5b4fc" strokeWidth="1.5" />
          <line x1="320" y1="93" x2="320" y2="107" stroke="#a5b4fc" strokeWidth="1.5" />
          <text x="200" y="118" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">r = 0.30 m</text>

          {/* Charge A (Negative - Blue) */}
          <circle cx="80" cy="65" r="22" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2" />
          <text x="80" y="71" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">-</text>
          <text x="80" y="32" fill="#60a5fa" fontSize="11" fontWeight="bold" textAnchor="middle">q_A = -2.0 × 10⁻⁴ C</text>

          {/* Force Vector from A towards B */}
          <line x1="102" y1="65" x2="142" y2="65" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
          <text x="122" y="52" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">F_AB</text>

          {/* Charge B (Positive - Red) */}
          <circle cx="320" cy="65" r="22" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
          <text x="320" y="71" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>
          <text x="320" y="32" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">q_B = +8.0 × 10⁻⁴ C</text>

          {/* Force Vector from B towards A */}
          <line x1="298" y1="65" x2="258" y2="65" stroke="#f59e0b" strokeWidth="3" />
          <text x="278" y="52" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">F_BA</text>

          {/* Markers */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
            </marker>
          </defs>
        </svg>
      </div>
    );
  }

  // 23. Parallel Plates Uniform Field (phys12g_parallel_plates)
  if (type === 'phys12g_parallel_plates') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          🔋 المجال الكهربائي المنتظم بين لوحين متوازيين (ΔV = E d)
        </div>
        <svg viewBox="0 0 380 160" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="160" fill="#0f172a" rx="12" />

          {/* Top Plate (+) */}
          <rect x="60" y="25" width="260" height="12" fill="#ef4444" rx="3" />
          <text x="190" y="20" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">اللوح الموجب (+)  [+ V]</text>

          {/* Bottom Plate (-) */}
          <rect x="60" y="125" width="260" height="12" fill="#3b82f6" rx="3" />
          <text x="190" y="152" fill="#60a5fa" fontSize="11" fontWeight="bold" textAnchor="middle">اللوح السالم (-)  [0 V]</text>

          {/* Uniform Electric Field Lines (Downward arrows) */}
          {[100, 145, 190, 235, 280].map((x) => (
            <g key={x}>
              <line x1={x} y1="37" x2={x} y2="125" stroke="#10b981" strokeWidth="2" />
              <polygon points={`${x},120 ${x-4},110 ${x+4},110`} fill="#10b981" />
            </g>
          ))}

          {/* Field Label */}
          <text x="325" y="80" fill="#10b981" fontSize="11" fontWeight="bold">E = 1800 N/C</text>

          {/* Distance d = 1.5 cm */}
          <line x1="40" y1="37" x2="40" y2="125" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="32" y="85" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="end">d = 1.5 cm</text>
        </svg>
      </div>
    );
  }

  // 24. Millikan Oil Drop (phys12g_millikan_experiment)
  if (type === 'phys12g_millikan_experiment') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-amber-300 mb-2">
          🛢️ اتزان قطرة الزيت في تجربة ميليكان (F_e = F_g ⟹ q E = m g)
        </div>
        <svg viewBox="0 0 380 180" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />

          {/* Top Plate (+) */}
          <rect x="50" y="20" width="280" height="10" fill="#ef4444" rx="2" />
          <text x="190" y="16" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">اللوح الموجب (+)</text>

          {/* Bottom Plate (-) */}
          <rect x="50" y="150" width="280" height="10" fill="#3b82f6" rx="2" />
          <text x="190" y="172" fill="#60a5fa" fontSize="10" fontWeight="bold" textAnchor="middle">اللوح السالم (-)</text>

          {/* Electric Field lines */}
          {[90, 150, 230, 290].map((x) => (
            <line key={x} x1={x} y1="30" x2={x} y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
          ))}

          {/* Suspended Oil Drop */}
          <circle cx="190" cy="85" r="14" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <text x="190" y="90" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">-e</text>

          {/* Electric Force Upward */}
          <line x1="190" y1="71" x2="190" y2="40" stroke="#38bdf8" strokeWidth="3" />
          <polygon points="190,34 185,44 195,44" fill="#38bdf8" />
          <text x="202" y="52" fill="#38bdf8" fontSize="11" fontWeight="bold">F_e = q E</text>

          {/* Gravitational Force Downward */}
          <line x1="190" y1="99" x2="190" y2="130" stroke="#ef4444" strokeWidth="3" />
          <polygon points="190,136 185,126 195,126" fill="#ef4444" />
          <text x="202" y="122" fill="#ef4444" fontSize="11" fontWeight="bold">F_g = m g</text>
        </svg>
      </div>
    );
  }

  // 25. Capacitor q vs Delta V Graph (phys12g_capacitance_graph)
  if (type === 'phys12g_capacitance_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-purple-300 mb-2">
          📊 رسم بياني: الشحنة (q) مقابل فرق الجهد (ΔV) للمكثف
        </div>
        <svg viewBox="0 0 380 180" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />

          {/* Axes */}
          <line x1="50" y1="140" x2="340" y2="140" stroke="#64748b" strokeWidth="2" />
          <line x1="60" y1="20" x2="60" y2="150" stroke="#64748b" strokeWidth="2" />

          {/* Axis Labels */}
          <text x="345" y="144" fill="#cbd5e1" fontSize="11" fontWeight="bold">ΔV (V)</text>
          <text x="55" y="15" fill="#cbd5e1" fontSize="11" fontWeight="bold">q (μC)</text>

          {/* Grid ticks */}
          <text x="60" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">0</text>
          <text x="140" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">10</text>
          <text x="220" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">20</text>
          <text x="300" y="155" fill="#a5b4fc" fontSize="10" fontWeight="bold" textAnchor="middle">30</text>

          <text x="45" y="105" fill="#94a3b8" fontSize="10" textAnchor="end">5</text>
          <text x="45" y="70" fill="#94a3b8" fontSize="10" textAnchor="end">10</text>
          <text x="45" y="35" fill="#a5b4fc" fontSize="10" fontWeight="bold" textAnchor="end">15</text>

          {/* Line q = C * Delta V */}
          <line x1="60" y1="140" x2="300" y2="35" stroke="#c084fc" strokeWidth="3" />

          {/* Data point (30 V, 15 uC) */}
          <circle cx="300" cy="35" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="300" y1="35" x2="300" y2="140" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="60" y1="35" x2="300" y2="35" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Slope Annotation */}
          <text x="170" y="75" fill="#c084fc" fontSize="11" fontWeight="bold">الميل = C = 0.50 μF</text>
        </svg>
      </div>
    );
  }

  // 26. Conductors & Shapes (phys12g_conductor_shapes)
  if (type === 'phys12g_conductor_shapes') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🌐 توزيع الشحنات على أسطح الموصلات الصلبة والمجوفة وغير المنتظمة
        </div>
        <svg viewBox="0 0 380 150" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="150" fill="#0f172a" rx="12" />

          {/* Solid Sphere */}
          <g transform="translate(60, 65)">
            <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            {[-25, 0, 25].map((x, i) => (
              <text key={i} x={x*0.9} y={i===1?-26:10} fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
            ))}
            <text x="0" y="52" fill="#94a3b8" fontSize="10" textAnchor="middle">كرة صلبة موصلة</text>
          </g>

          {/* Hollow Sphere */}
          <g transform="translate(190, 65)">
            <circle cx="0" cy="0" r="32" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="0" y="4" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">E = 0</text>
            <text x="0" y="52" fill="#94a3b8" fontSize="10" textAnchor="middle">كرة مجوفة (الشحنات بالخارج)</text>
          </g>

          {/* Pointed Shape */}
          <g transform="translate(310, 65)">
            <path d="M -30,-20 Q 0,-25 30,0 Q 0,25 -30,20 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="25" y="4" fill="#ef4444" fontSize="14" fontWeight="bold">+</text>
            <text x="28" y="-8" fill="#ef4444" fontSize="14" fontWeight="bold">+</text>
            <text x="0" y="52" fill="#94a3b8" fontSize="10" textAnchor="middle">تتركز عند الطرف المدبب</text>
          </g>
        </svg>
      </div>
    );
  }

  // 27. Field Lines Patterns (phys12g_field_lines_patterns)
  if (type === 'phys12g_field_lines_patterns') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-indigo-300 mb-2">
          ✨ أنماط خطوط المجال الكهربائي حول الشحنة الموجبة والسالبة
        </div>
        <svg viewBox="0 0 380 140" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="140" fill="#0f172a" rx="12" />

          {/* Positive Charge (Outward) */}
          <g transform="translate(100, 70)">
            <circle cx="0" cy="0" r="18" fill="#ef4444" />
            <text x="0" y="5" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => {
              const rad = (ang * Math.PI) / 180;
              const x2 = Math.cos(rad) * 45;
              const y2 = Math.sin(rad) * 45;
              return (
                <line key={ang} x1="0" y1="0" x2={x2} y2={y2} stroke="#f87171" strokeWidth="2" />
              );
            })}
            <text x="0" y="60" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">شحنة موجبة (للخارج)</text>
          </g>

          {/* Negative Charge (Inward) */}
          <g transform="translate(280, 70)">
            <circle cx="0" cy="0" r="18" fill="#3b82f6" />
            <text x="0" y="5" fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">-</text>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => {
              const rad = (ang * Math.PI) / 180;
              const x2 = Math.cos(rad) * 45;
              const y2 = Math.sin(rad) * 45;
              return (
                <line key={ang} x1="0" y1="0" x2={x2} y2={y2} stroke="#60a5fa" strokeWidth="2" />
              );
            })}
            <text x="0" y="60" fill="#60a5fa" fontSize="11" fontWeight="bold" textAnchor="middle">شحنة سالبة (للداخل)</text>
          </g>
        </svg>
      </div>
    );
  }

  // 28. Three Charges in a Line (phys12g_three_charges_line)
  if (type === 'phys12g_three_charges_line') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-amber-300 mb-2">
          📍 ثلاث شحنات على استقامة واحدة والقوى المؤثرة على الشحنة B
        </div>
        <svg viewBox="0 0 380 150" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="150" fill="#0f172a" rx="12" />

          {/* Axis */}
          <line x1="40" y1="75" x2="340" y2="75" stroke="#475569" strokeWidth="2" />

          {/* Charge A */}
          <circle cx="60" cy="75" r="18" fill="#ef4444" />
          <text x="60" y="80" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">A</text>
          <text x="60" y="42" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">+8.5 μC</text>

          {/* Charge B */}
          <circle cx="200" cy="75" r="18" fill="#f59e0b" />
          <text x="200" y="80" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">B</text>
          <text x="200" y="42" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">+3.1 μC</text>

          {/* Charge C */}
          <circle cx="320" cy="75" r="18" fill="#ef4444" />
          <text x="320" y="80" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">C</text>
          <text x="320" y="42" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">+6.4 μC</text>

          {/* Force Vectors on B */}
          <line x1="200" y1="75" x2="250" y2="75" stroke="#38bdf8" strokeWidth="3" />
          <text x="230" y="65" fill="#38bdf8" fontSize="10" fontWeight="bold">F_AB (يمين)</text>

          <line x1="200" y1="75" x2="130" y2="75" stroke="#ef4444" strokeWidth="3" />
          <text x="150" y="65" fill="#ef4444" fontSize="10" fontWeight="bold">F_CB (يسار)</text>

          {/* Distances */}
          <text x="130" y="115" fill="#cbd5e1" fontSize="10" textAnchor="middle">d_AB = 4.2 cm</text>
          <text x="260" y="115" fill="#cbd5e1" fontSize="10" textAnchor="middle">d_BC = 2.9 cm</text>
        </svg>
      </div>
    );
  }

  // 29. Van de Graaff Generator (phys12g_vande_graaff)
  if (type === 'phys12g_vande_graaff') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          ⚡ مخطط مولد فان دي غراف (Van de Graaff Generator)
        </div>
        <svg viewBox="0 0 380 200" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="200" fill="#0f172a" rx="12" />

          {/* Metallic Dome Sphere */}
          <circle cx="190" cy="65" r="45" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => {
            const rad = (ang * Math.PI) / 180;
            const x = 190 + Math.cos(rad) * 52;
            const y = 65 + Math.sin(rad) * 52;
            return <text key={ang} x={x} y={y+4} fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>;
          })}
          <text x="190" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">القبة الفلزية المجوفة</text>
          <text x="190" y="75" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">(E = 0 بالداخل)</text>

          {/* Belt */}
          <rect x="180" y="85" width="20" height="90" fill="#334155" rx="4" />

          {/* Base */}
          <rect x="140" y="175" width="100" height="15" fill="#475569" rx="4" />
          <text x="190" y="186" fill="#ffffff" fontSize="10" textAnchor="middle">القاعدة والمحرك</text>
        </svg>
      </div>
    );
  }

  // 30. 2D Field Triangle (phys12g_2d_field_triangle)
  if (type === 'phys12g_2d_field_triangle') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-purple-300 mb-2">
          🔺 محصلة المجال الكهربائي عند رأس مثلث متساوي الأضلاع
        </div>
        <svg viewBox="0 0 380 180" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />

          {/* Equilateral Triangle Lines */}
          <polygon points="90,140 290,140 190,30" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />

          {/* Point P at Apex */}
          <circle cx="190" cy="30" r="5" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
          <text x="190" y="18" fill="#a855f7" fontSize="12" fontWeight="bold" textAnchor="middle">P النقطة</text>

          {/* Charge A (Bottom Left) */}
          <circle cx="90" cy="140" r="16" fill="#ef4444" />
          <text x="90" y="145" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
          <text x="90" y="170" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">A (+3.0 μC)</text>

          {/* Charge B (Bottom Right) */}
          <circle cx="290" cy="140" r="16" fill="#3b82f6" />
          <text x="290" y="145" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>
          <text x="290" y="170" fill="#60a5fa" fontSize="10" fontWeight="bold" textAnchor="middle">B (-5.0 μC)</text>

          {/* Field Vector E_A (Pointing away from A through P) */}
          <line x1="190" y1="30" x2="240" y2="-25" stroke="#ef4444" strokeWidth="2.5" />
          <text x="230" y="5" fill="#ef4444" fontSize="10" fontWeight="bold">E_A</text>

          {/* Field Vector E_B (Pointing toward B from P) */}
          <line x1="190" y1="30" x2="240" y2="85" stroke="#3b82f6" strokeWidth="2.5" />
          <text x="245" y="75" fill="#3b82f6" fontSize="10" fontWeight="bold">E_B</text>

          {/* Net Vector E_net */}
          <line x1="190" y1="30" x2="260" y2="45" stroke="#f59e0b" strokeWidth="3.5" />
          <text x="265" y="38" fill="#f59e0b" fontSize="11" fontWeight="bold">E_net</text>
        </svg>
      </div>
    );
  }

  // 31. Math G12 General Quadratic Graph (math12g_quadratic_graph)
  if (type === 'math12g_quadratic_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📈 التمثيل البياني للدالة التربيعية: f(x) = x² + 4x + 3
        </div>
        <svg viewBox="0 0 380 180" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />

          {/* Grid lines */}
          <line x1="40" y1="130" x2="340" y2="130" stroke="#475569" strokeWidth="2" />
          <line x1="220" y1="20" x2="220" y2="160" stroke="#475569" strokeWidth="2" />

          {/* Axis of Symmetry x = -2 */}
          <line x1="140" y1="20" x2="140" y2="160" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x="140" y="15" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">x = -2 (محور التماثل)</text>

          {/* Parabola Curve */}
          <path d="M 60,30 Q 140,210 220,30" fill="none" stroke="#38bdf8" strokeWidth="3" />

          {/* Vertex (-2, -1) */}
          <circle cx="140" cy="140" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
          <text x="140" y="155" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">الرأس (-2, -1)</text>

          {/* Intercepts */}
          <circle cx="100" cy="130" r="4" fill="#10b981" />
          <text x="90" y="122" fill="#10b981" fontSize="10" fontWeight="bold">(-3, 0)</text>

          <circle cx="180" cy="130" r="4" fill="#10b981" />
          <text x="190" y="122" fill="#10b981" fontSize="10" fontWeight="bold">(-1, 0)</text>

          {/* y-intercept (0, 3) */}
          <circle cx="220" cy="70" r="4" fill="#c084fc" />
          <text x="230" y="70" fill="#c084fc" fontSize="10" fontWeight="bold">(0, 3)</text>
        </svg>
      </div>
    );
  }

  // 32. Math G12 General Quadratic Inequality Graph (math12g_quadratic_inequality_graph)
  if (type === 'math12g_quadratic_inequality_graph') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          🎨 منطقة حل المتباينة التربيعية: y ≥ x² + 5x + 6
        </div>
        <svg viewBox="0 0 380 180" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />

          {/* Axes */}
          <line x1="30" y1="130" x2="350" y2="130" stroke="#475569" strokeWidth="2" />
          <line x1="250" y1="20" x2="250" y2="160" stroke="#475569" strokeWidth="2" />

          {/* Shaded Region Inside Parabola */}
          <path d="M 70,20 Q 150,220 230,20 Z" fill="#10b981" fillOpacity="0.35" />

          {/* Solid Boundary Parabola */}
          <path d="M 70,20 Q 150,220 230,20" fill="none" stroke="#10b981" strokeWidth="3" />

          {/* Label */}
          <text x="150" y="70" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">منطقة الحل المظلمة</text>
          <text x="150" y="90" fill="#ffffff" fontSize="10" textAnchor="middle">(تتضمن النقاط المعوضة)</text>
        </svg>
      </div>
    );
  }

  // 33. Math G12 General Polynomial End Behavior (math12g_polynomial_end_behavior)
  if (type === 'math12g_polynomial_end_behavior') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-purple-300 mb-2">
          📉 السلوك الطرفي والأصفار للدالة كثيرة الحدود زوجية الدرجة
        </div>
        <svg viewBox="0 0 380 160" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />

          {/* Axis */}
          <line x1="30" y1="90" x2="350" y2="90" stroke="#475569" strokeWidth="2" />
          <line x1="190" y1="20" x2="190" y2="150" stroke="#475569" strokeWidth="2" />

          {/* W-Shaped Curve */}
          <path d="M 50,30 Q 80,140 120,70 Q 160,20 190,80 Q 220,130 270,60 Q 310,20 330,30" fill="none" stroke="#c084fc" strokeWidth="3" />

          {/* End Behavior Arrows */}
          <text x="45" y="25" fill="#c084fc" fontSize="12" fontWeight="bold">f(x) → +∞</text>
          <text x="315" y="25" fill="#c084fc" fontSize="12" fontWeight="bold">f(x) → +∞</text>

          {/* Zeros (Dots on x-axis) */}
          {[72, 140, 205, 290].map((x, i) => (
            <circle key={i} cx={x} cy="90" r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          ))}
          <text x="190" y="115" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">4 أصفار حقيقية (تقاطع مع x)</text>
        </svg>
      </div>
    );
  }

  // 34. Math G12 General Normal Distribution Curve (math12g_normal_distribution_curve)
  if (type === 'math12g_normal_distribution_curve') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-amber-300 mb-2">
          🔔 منحنى التوزيع الطبيعي والقاعدة التجريبية (68% - 95% - 99.7%)
        </div>
        <svg viewBox="0 0 380 170" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="170" fill="#0f172a" rx="12" />

          {/* Base Axis */}
          <line x1="20" y1="135" x2="360" y2="135" stroke="#64748b" strokeWidth="2" />

          {/* Bell Curve Path */}
          <path d="M 20,135 C 100,135 120,30 190,30 C 260,30 280,135 360,135" fill="none" stroke="#f59e0b" strokeWidth="3" />

          {/* Mean Line mu = 168 */}
          <line x1="190" y1="30" x2="190" y2="135" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
          <text x="190" y="152" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">μ = 168</text>
          <text x="190" y="70" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">34% | 34%</text>

          {/* mu + sigma = 174 */}
          <line x1="240" y1="65" x2="240" y2="135" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
          <text x="240" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle">174</text>
          <text x="260" y="100" fill="#f59e0b" fontSize="9" fontWeight="bold">13.5%</text>

          {/* mu + 2sigma = 180 */}
          <line x1="290" y1="110" x2="290" y2="135" stroke="#ef4444" strokeWidth="1.5" />
          <text x="290" y="152" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">180</text>
          <text x="315" y="120" fill="#ef4444" fontSize="9" fontWeight="bold">2.5%</text>

          {/* mu - sigma = 162 */}
          <line x1="140" y1="65" x2="140" y2="135" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
          <text x="140" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle">162</text>
          <text x="120" y="100" fill="#f59e0b" fontSize="9" fontWeight="bold">13.5%</text>

          {/* mu - 2sigma = 156 */}
          <line x1="90" y1="110" x2="90" y2="135" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
          <text x="90" y="152" fill="#cbd5e1" fontSize="10" textAnchor="middle">156</text>
        </svg>
      </div>
    );
  }

  // 35. Math G12 General Synthetic Division Grid (math12g_synthetic_division_table)
  if (type === 'math12g_synthetic_division_table') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 جدول القسمة التركيبية: (2x³ - 13x² + 26x - 24) ÷ (x - 4)
        </div>
        <svg viewBox="0 0 380 150" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="150" fill="#0f172a" rx="12" />

          {/* Box for Root x = 4 */}
          <rect x="30" y="25" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="4" />
          <text x="50" y="48" fill="#38bdf8" fontSize="16" fontWeight="bold" textAnchor="middle">4</text>

          {/* Coefficients Row 1 */}
          <text x="110" y="48" fill="#ffffff" fontSize="15" fontWeight="bold">2</text>
          <text x="180" y="48" fill="#ffffff" fontSize="15" fontWeight="bold">-13</text>
          <text x="260" y="48" fill="#ffffff" fontSize="15" fontWeight="bold">26</text>
          <text x="330" y="48" fill="#ffffff" fontSize="15" fontWeight="bold">-24</text>

          {/* Row 2 (Products) */}
          <text x="180" y="80" fill="#f59e0b" fontSize="14" fontWeight="bold">8</text>
          <text x="260" y="80" fill="#f59e0b" fontSize="14" fontWeight="bold">-20</text>
          <text x="330" y="80" fill="#f59e0b" fontSize="14" fontWeight="bold">24</text>

          {/* Separator Line */}
          <line x1="90" y1="95" x2="360" y2="95" stroke="#64748b" strokeWidth="2" />

          {/* Row 3 (Quotient Coefficients) */}
          <text x="110" y="125" fill="#10b981" fontSize="16" fontWeight="bold">2</text>
          <text x="180" y="125" fill="#10b981" fontSize="16" fontWeight="bold">-5</text>
          <text x="260" y="125" fill="#10b981" fontSize="16" fontWeight="bold">6</text>
          <text x="330" y="125" fill="#ef4444" fontSize="16" fontWeight="bold">0</text>
          <rect x="315" y="105" width="30" height="30" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2" rx="3" />
          <text x="330" y="145" fill="#ef4444" fontSize="9" textAnchor="middle">الباقي</text>
        </svg>
      </div>
    );
  }

  // 36. Math G11 General Quadratic Vertex Graph (math11g_quadratic_vertex)
  if (type === 'math11g_quadratic_vertex') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📊 التمثيل البياني للدالة التربيعية f(x) = x² - 6x + 8 محور التماثل والرأس
        </div>
        <svg viewBox="0 0 380 220" className="w-full max-w-md h-auto font-sans">
          <defs>
            <pattern id="grid_m11g" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="380" height="220" fill="#0f172a" rx="12" />
          <rect width="380" height="220" fill="url(#grid_m11g)" rx="12" />

          {/* Axes */}
          <line x1="20" y1="140" x2="360" y2="140" stroke="#64748b" strokeWidth="2" />
          <line x1="80" y1="20" x2="80" y2="200" stroke="#64748b" strokeWidth="2" />
          <text x="350" y="132" fill="#cbd5e1" fontSize="11" fontWeight="bold">x</text>
          <text x="88" y="32" fill="#cbd5e1" fontSize="11" fontWeight="bold">y</text>

          {/* Axis of Symmetry x = 3 (dotted line at x = 200) */}
          <line x1="200" y1="20" x2="200" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
          <text x="200" y="30" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">محور التماثل x = 3</text>

          {/* Parabola f(x) = x² - 6x + 8 */}
          {/* Vertex at (3, -1) -> (200, 160) */}
          {/* Roots (2,0) -> (160, 140), (4,0) -> (240, 140) */}
          {/* Y-intercept (0,8) -> (80, 40) */}
          <path
            d="M 80,40 Q 200,280 320,40"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3.5"
          />

          {/* Vertex Point */}
          <circle cx="200" cy="160" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
          <text x="200" y="180" fill="#10b981" fontSize="11" textAnchor="middle" fontWeight="bold">الرأس Vertex (3, -1)</text>

          {/* Y-intercept */}
          <circle cx="80" cy="40" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
          <text x="92" y="44" fill="#f59e0b" fontSize="10" fontWeight="bold">(0, 8)</text>

          {/* Roots */}
          <circle cx="160" cy="140" r="5" fill="#a855f7" />
          <circle cx="240" cy="140" r="5" fill="#a855f7" />
          <text x="160" y="128" fill="#a855f7" fontSize="10" textAnchor="middle" fontWeight="bold">(2, 0)</text>
          <text x="240" y="128" fill="#a855f7" fontSize="10" textAnchor="middle" fontWeight="bold">(4, 0)</text>
        </svg>
      </div>
    );
  }

  // 37. Math G11 General - Similar Polygons (math11g_similar_polygons)
  if (type === 'math11g_similar_polygons') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 الشكلان الرباعيان المتشابهان ACDF ~ VWYZ
        </div>
        <svg viewBox="0 0 380 180" className="w-full max-w-md h-auto font-sans">
          <rect width="380" height="180" fill="#0f172a" rx="12" />
          {/* ACDF */}
          <polygon points="30,40 130,40 160,140 10,140" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
          <text x="30" y="30" fill="#38bdf8" fontSize="12" fontWeight="bold">A</text>
          <text x="135" y="30" fill="#38bdf8" fontSize="12" fontWeight="bold">C</text>
          <text x="170" y="145" fill="#38bdf8" fontSize="12" fontWeight="bold">D</text>
          <text x="0" y="145" fill="#38bdf8" fontSize="12" fontWeight="bold">F</text>
          <text x="20" y="85" fill="#f59e0b" fontSize="11">FA = 12</text>
          <text x="150" y="85" fill="#f59e0b" fontSize="11">CD = 9</text>
          <text x="85" y="158" fill="#a855f7" fontSize="12" fontWeight="bold" textAnchor="middle">DF = x</text>

          {/* VWYZ */}
          <polygon points="220,60 286,60 280,126 190,126" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
          <text x="215" y="52" fill="#10b981" fontSize="12" fontWeight="bold">V</text>
          <text x="290" y="52" fill="#10b981" fontSize="12" fontWeight="bold">W</text>
          <text x="286" y="135" fill="#10b981" fontSize="12" fontWeight="bold">Y</text>
          <text x="180" y="135" fill="#10b981" fontSize="12" fontWeight="bold">Z</text>
          <text x="288" y="95" fill="#f59e0b" fontSize="11">WY = 6</text>
          <text x="235" y="142" fill="#f59e0b" fontSize="11" textAnchor="middle">YZ = 10</text>
          <text x="180" y="85" fill="#a855f7" fontSize="11">ZV = 3y - 1</text>
        </svg>
      </div>
    );
  }

  // 38. Math G11 General - Angle Bisector (math11g_angle_bisector)
  if (type === 'math11g_angle_bisector') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 نظرية منصف زاوية المثلث
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="170,20 40,150 280,150" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="2" />
          {/* Angle bisector */}
          <line x1="170" y1="20" x2="190" y2="150" stroke="#ef4444" strokeWidth="2.5" />

          {/* Side labels */}
          <text x="95" y="80" fill="#38bdf8" fontSize="13" fontWeight="bold">15</text>
          <text x="235" y="80" fill="#38bdf8" fontSize="13" fontWeight="bold">27</text>

          {/* Base segments */}
          <text x="110" y="168" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">28 - b</text>
          <text x="235" y="168" fill="#10b981" fontSize="13" fontWeight="bold" textAnchor="middle">b</text>
        </svg>
      </div>
    );
  }

  // 39. Math G11 General - Dilation Grid (math11g_dilation_grid)
  if (type === 'math11g_dilation_grid') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🔍 التمدد على الشبكة من الشكل A إلى الشكل B (تكبير)
        </div>
        <svg viewBox="0 0 340 200" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="200" fill="#0f172a" rx="12" />
          <g stroke="#1e293b" strokeWidth="1">
            <line x1="20" y1="20" x2="320" y2="20" /><line x1="20" y1="60" x2="320" y2="60" />
            <line x1="20" y1="100" x2="320" y2="100" /><line x1="20" y1="140" x2="320" y2="140" />
            <line x1="20" y1="180" x2="320" y2="180" />
            <line x1="20" y1="20" x2="20" y2="180" /><line x1="80" y1="20" x2="80" y2="180" />
            <line x1="140" y1="20" x2="140" y2="180" /><line x1="200" y1="20" x2="200" y2="180" />
            <line x1="260" y1="20" x2="260" y2="180" /><line x1="320" y1="20" x2="320" y2="180" />
          </g>
          {/* Origin O */}
          <circle cx="80" cy="180" r="4" fill="#cbd5e1" />
          <text x="70" y="195" fill="#cbd5e1" fontSize="12" fontWeight="bold">O</text>

          {/* Original Triangle A */}
          <polygon points="80,180 160,180 120,100" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="120" y="150" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">A</text>

          {/* Dilation Image Triangle B */}
          <polygon points="80,180 240,180 160,20" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5,5" />
          <text x="160" y="80" fill="#10b981" fontSize="16" fontWeight="bold" textAnchor="middle">B</text>
        </svg>
      </div>
    );
  }

  // 40. Math G11 General - Right Triangle Altitude (math11g_right_triangle_alt)
  if (type === 'math11g_right_triangle_alt') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 الارتفاع المنشأ على الوتر في المثلث القائم الزاوية
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="30,150 150,30 310,150" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="2" />
          <line x1="150" y1="30" x2="150" y2="150" stroke="#ef4444" strokeWidth="2.5" />
          <rect x="140" y="140" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <text x="162" y="90" fill="#ef4444" fontSize="14" fontWeight="bold">x</text>

          <text x="90" y="168" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">9</text>
          <text x="230" y="168" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">4</text>

          <text x="75" y="80" fill="#10b981" fontSize="14" fontWeight="bold">y</text>
          <text x="240" y="80" fill="#a855f7" fontSize="14" fontWeight="bold">z</text>
        </svg>
      </div>
    );
  }

  // 41. Math G11 General - Pythagoras Triangle (math11g_pythagoras_triangle)
  if (type === 'math11g_pythagoras_triangle') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 نظرية فيثاغورس في المثلث القائم الزاوية
        </div>
        <svg viewBox="0 0 320 180" className="w-full max-w-md h-auto font-sans">
          <rect width="320" height="180" fill="#0f172a" rx="12" />
          <polygon points="50,140 260,140 260,30" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="245" y="125" width="15" height="15" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          <text x="155" y="160" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">الساق 16</text>
          <text x="275" y="90" fill="#f59e0b" fontSize="14" fontWeight="bold">الساق 12</text>
          <text x="135" y="75" fill="#ef4444" fontSize="16" fontWeight="bold">الوتر x</text>
        </svg>
      </div>
    );
  }

  // 42. Math G11 General - Trigonometry Right Triangle (math11g_trig_right_triangle)
  if (type === 'math11g_trig_right_triangle') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 النسب المثلثية: sin(21°) = المقابل / الوتر
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="40,140 290,140 290,50" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="275" y="125" width="15" height="15" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          <path d="M 80,140 A 40,40 0 0,0 74,128" fill="none" stroke="#ef4444" strokeWidth="2" />
          <text x="95" y="132" fill="#ef4444" fontSize="13" fontWeight="bold">21°</text>

          <text x="300" y="100" fill="#10b981" fontSize="13" fontWeight="bold">المقابل = 11</text>
          <text x="150" y="80" fill="#f59e0b" fontSize="15" fontWeight="bold">الوتر x</text>
        </svg>
      </div>
    );
  }

  // 43. Math G11 General - Triangle Proportionality (math11g_triangle_proportionality)
  if (type === 'math11g_triangle_proportionality') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          📐 نظرية التناسب في المثلث (BE || CD)
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="50,150 170,20 290,150" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="2" />
          <line x1="90" y1="106" x2="250" y2="106" stroke="#ef4444" strokeWidth="2.5" />

          <text x="170" y="15" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">A</text>
          <text x="80" y="112" fill="#ef4444" fontSize="13" fontWeight="bold">B</text>
          <text x="258" y="112" fill="#ef4444" fontSize="13" fontWeight="bold">E</text>
          <text x="38" y="160" fill="#38bdf8" fontSize="13" fontWeight="bold">C</text>
          <text x="298" y="160" fill="#38bdf8" fontSize="13" fontWeight="bold">D</text>

          <text x="115" y="60" fill="#f59e0b" fontSize="12" fontWeight="bold">AB = 6</text>
          <text x="55" y="130" fill="#f59e0b" fontSize="12" fontWeight="bold">BC = 4</text>
          <text x="205" y="60" fill="#10b981" fontSize="12" fontWeight="bold">AE = 9</text>
          <text x="260" y="130" fill="#10b981" fontSize="12" fontWeight="bold">ED = ?</text>
        </svg>
      </div>
    );
  }

  // 44. Math G11 General - Rescue Helicopter Angle of Depression (math11g_elevation_depression)
  if (type === 'math11g_elevation_depression') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🚁 طائرة الإنقاذ وزاوية الانخفاض 42°
        </div>
        <svg viewBox="0 0 360 190" className="w-full max-w-md h-auto font-sans">
          <rect width="360" height="190" fill="#0f172a" rx="12" />
          <line x1="20" y1="150" x2="340" y2="150" stroke="#38bdf8" strokeWidth="3" />
          <text x="180" y="178" fill="#38bdf8" fontSize="11" textAnchor="middle">سطح البحر</text>

          <line x1="60" y1="40" x2="60" y2="150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
          <text x="25" y="95" fill="#f59e0b" fontSize="12" fontWeight="bold">18 ft</text>

          <line x1="60" y1="40" x2="220" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,4" />
          <line x1="60" y1="40" x2="280" y2="150" stroke="#ef4444" strokeWidth="2.5" />

          <text x="50" y="35" fontSize="20">🚁</text>
          <text x="275" y="152" fontSize="20">🏊</text>

          <path d="M 100,40 A 40,40 0 0,1 92,60" fill="none" stroke="#ef4444" strokeWidth="2" />
          <text x="110" y="58" fill="#ef4444" fontSize="12" fontWeight="bold">42°</text>

          <line x1="60" y1="150" x2="280" y2="150" stroke="#10b981" strokeWidth="2.5" />
          <text x="170" y="142" fill="#10b981" fontSize="13" fontWeight="bold" textAnchor="middle">المسافة الأفقية x</text>
        </svg>
      </div>
    );
  }

  // 45. Math G9 - Triangle Area (math9_triangle_area)
  if (type === 'math9_triangle_area') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-amber-300 mb-2">
          📐 مساحة المثلث: A = 0.5 × (h + 6) × h
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="50,30 50,140 280,140" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2.5" />
          <rect x="50" y="125" width="15" height="15" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Height label */}
          <text x="32" y="90" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">h</text>
          {/* Base label */}
          <text x="165" y="162" fill="#10b981" fontSize="15" fontWeight="bold" textAnchor="middle">h + 6</text>
        </svg>
      </div>
    );
  }

  // 46. Math G9 - Piano Keys (math9_piano_keys)
  if (type === 'math9_piano_keys') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🎹 مفاتيح البيانو والأوكتاف (8 مفاتيح بيضاء بكل أوكتاف)
        </div>
        <svg viewBox="0 0 360 160" className="w-full max-w-md h-auto font-sans">
          <rect width="360" height="160" fill="#0f172a" rx="12" />
          {/* 8 White Keys */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i}>
              <rect x={30 + i * 36} y={30} width={34} height={90} fill="#f8fafc" stroke="#334155" strokeWidth="1.5" rx="3" />
              <text x={47 + i * 36} y={110} fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">{i + 1}</text>
            </g>
          ))}
          {/* Black Keys */}
          {[0, 1, 3, 4, 5].map((i, idx) => {
            const offsets = [0, 1, 3, 4, 5];
            const x = 52 + offsets[idx] * 36;
            return <rect key={idx} x={x} y={30} width={20} height={55} fill="#0f172a" stroke="#475569" strokeWidth="1" rx="2" />;
          })}
          {/* Bracket */}
          <line x1="30" y1="130" x2="318" y2="130" stroke="#38bdf8" strokeWidth="2" />
          <line x1="30" y1="125" x2="30" y2="135" stroke="#38bdf8" strokeWidth="2" />
          <line x1="318" y1="125" x2="318" y2="135" stroke="#38bdf8" strokeWidth="2" />
          <text x="174" y="148" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">1 octave (أوكتاف واحد)</text>
        </svg>
      </div>
    );
  }

  // 47. Math G9 - Cylinder Volume (math9_cylinder)
  if (type === 'math9_cylinder') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          🛢️ حجم الأسطوانة: V = π r² h
        </div>
        <svg viewBox="0 0 280 180" className="w-full max-w-md h-auto font-sans">
          <rect width="280" height="180" fill="#0f172a" rx="12" />
          {/* Top Ellipse */}
          <ellipse cx="140" cy="45" rx="60" ry="20" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2" />
          {/* Body Lines */}
          <line x1="80" y1="45" x2="80" y2="135" stroke="#38bdf8" strokeWidth="2" />
          <line x1="200" y1="45" x2="200" y2="135" stroke="#38bdf8" strokeWidth="2" />
          {/* Bottom Ellipse */}
          <path d="M 80,135 A 60,20 0 0,0 200,135" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="2" />
          <path d="M 80,135 A 60,20 0 0,1 200,135" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Radius r */}
          <circle cx="140" cy="45" r="3" fill="#ef4444" />
          <line x1="140" y1="45" x2="200" y2="45" stroke="#ef4444" strokeWidth="2" />
          <text x="170" y="38" fill="#ef4444" fontSize="13" fontWeight="bold">r</text>

          {/* Height h */}
          <text x="215" y="95" fill="#f59e0b" fontSize="15" fontWeight="bold">h</text>
        </svg>
      </div>
    );
  }

  // 48. Math G9 - Skateboard Ramp (math9_ramp)
  if (type === 'math9_ramp') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-purple-300 mb-2">
          🛹 ميل المنحدر = الارتفاع / القاعدة = 1.5 / 3 = -0.5
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="40,40 40,140 280,140" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2.5" />
          <rect x="40" y="125" width="15" height="15" fill="none" stroke="#a855f7" strokeWidth="1.5" />

          <text x="25" y="90" fill="#f59e0b" fontSize="12" fontWeight="bold">1.5 cm</text>
          <text x="160" y="160" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">3 cm</text>
          <text x="160" y="80" fill="#ef4444" fontSize="13" fontWeight="bold">منحدر (Slope = -0.5)</text>
        </svg>
      </div>
    );
  }

  // 49. Math G9 - Roller Coaster Ramp (math9_rollercoaster)
  if (type === 'math9_rollercoaster') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-cyan-300 mb-2">
          🎢 ميل المنحدر = الارتفاع / القاعدة = 2 / 2 = -1
        </div>
        <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto font-sans">
          <rect width="340" height="180" fill="#0f172a" rx="12" />
          <polygon points="60,30 60,140 260,140" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="60" y="125" width="15" height="15" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

          <text x="40" y="90" fill="#f59e0b" fontSize="14" fontWeight="bold">2</text>
          <text x="160" y="160" fill="#10b981" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
          <text x="170" y="80" fill="#ef4444" fontSize="13" fontWeight="bold">منحدر (Slope = -1)</text>
        </svg>
      </div>
    );
  }

  // 50. Math G9 - Survey Pie Chart (math9_piechart)
  if (type === 'math9_piechart') {
    return (
      <div className="my-4 p-4 bg-slate-900 rounded-2xl border border-slate-700/80 text-white flex flex-col items-center">
        <div className="text-[11px] font-mono text-emerald-300 mb-2">
          📊 نتائج الاستبيان: نسبة احتمال إجابة المراهقين
        </div>
        <svg viewBox="0 0 320 200" className="w-full max-w-md h-auto font-sans">
          <rect width="320" height="200" fill="#0f172a" rx="12" />
          {/* Circle Pie Chart representation */}
          <circle cx="110" cy="100" r="70" fill="#1e293b" stroke="#334155" strokeWidth="2" />

          {/* Slices representation with paths */}
          {/* 48% Likely to some extent */}
          <path d="M 110,100 L 110,30 A 70,70 0 0,1 178,125 Z" fill="#818cf8" opacity="0.85" />
          {/* 35% Unlikely */}
          <path d="M 110,100 L 178,125 A 70,70 0 0,1 42,120 Z" fill="#f43f5e" opacity="0.85" />
          {/* 15% Very likely */}
          <path d="M 110,100 L 42,120 A 70,70 0 0,1 110,30 Z" fill="#10b981" opacity="0.85" />

          {/* Legends */}
          <g transform="translate(200, 30)" fontSize="11">
            <rect x="0" y="0" width="12" height="12" fill="#10b981" rx="2" />
            <text x="18" y="10" fill="#cbd5e1">محتمل جداً (15%)</text>

            <rect x="0" y="30" width="12" height="12" fill="#818cf8" rx="2" />
            <text x="18" y="40" fill="#cbd5e1">محتمل إلى حد ما (48%)</text>

            <rect x="0" y="60" width="12" height="12" fill="#f43f5e" rx="2" />
            <text x="18" y="70" fill="#cbd5e1">غير محتمل (35%)</text>

            <rect x="0" y="90" width="12" height="12" fill="#f59e0b" rx="2" />
            <text x="18" y="100" fill="#cbd5e1">ليس وارداً إطلاقاً (2%)</text>
          </g>
        </svg>
      </div>
    );
  }

  return null;
};

