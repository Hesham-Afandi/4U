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

  return null;
};
