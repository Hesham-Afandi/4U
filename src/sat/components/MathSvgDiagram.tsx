import React from 'react';
import { SvgData } from '../types';

interface MathSvgDiagramProps {
  svgData: SvgData;
  lang: 'en' | 'ar';
}

export const MathSvgDiagram: React.FC<MathSvgDiagramProps> = ({ svgData, lang }) => {
  const title = lang === 'ar' ? (svgData.titleAr || svgData.titleEn) : (svgData.titleEn || svgData.titleAr);

  return (
    <div className="my-4 p-4 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 shadow-inner flex flex-col items-center justify-center transition-all duration-300">
      {title && (
        <div className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider text-center flex items-center gap-1.5">
          <span>📊</span>
          <span>{title}</span>
        </div>
      )}

      {/* 1. BALANCE SCALE */}
      {svgData.type === 'balance-scale' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" className="w-full max-w-xs h-36">
          <path d="M 170 110 L 170 40 M 140 140 L 200 140 L 170 110 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="40" x2="300" y2="40" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="170" cy="40" r="5" fill="#e879f9" />
          
          <line x1="40" y1="40" x2="40" y2="85" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 10 85 L 70 85 Q 40 105 10 85 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="15" y="60" width="50" height="25" rx="4" fill="#0284c7" fillOpacity="0.8" stroke="#38bdf8" />
          <text x="40" y="77" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            {svgData.params.leftExpr || 'LHS'}
          </text>

          <line x1="300" y1="40" x2="300" y2="85" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 270 85 L 330 85 Q 300 105 270 85 Z" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
          <rect x="275" y="60" width="50" height="25" rx="4" fill="#e11d48" fillOpacity="0.8" stroke="#fb7185" />
          <text x="300" y="77" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            {svgData.params.rightExpr || 'RHS'}
          </text>

          <text x="170" y="25" fontSize="20" fontWeight="bold" fill="#facc15" textAnchor="middle">=</text>
        </svg>
      )}

      {/* 2. COORDINATE LINE */}
      {svgData.type === 'coordinate-line' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full max-w-xs h-36">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="300" height="150" fill="url(#grid)" />
          <line x1="150" y1="0" x2="150" y2="150" stroke="#475569" strokeWidth="2" />
          <line x1="0" y1="75" x2="300" y2="75" stroke="#475569" strokeWidth="2" />
          <circle cx="150" cy="75" r="3" fill="#cbd5e1" />
          
          <line x1="30" y1="125" x2="270" y2="25" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <text x="240" y="20" fontSize="11" fill="#38bdf8" fontStyle="italic" fontWeight="bold">
            {svgData.params.label1 || 'Line 1'}
          </text>

          {svgData.params.label2 && (
            <>
              <line x1="30" y1="140" x2="270" y2="40" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
              <text x="240" y="55" fontSize="11" fill="#f43f5e" fontStyle="italic" fontWeight="bold">
                {svgData.params.label2}
              </text>
            </>
          )}
        </svg>
      )}

      {/* 3. PARABOLA */}
      {svgData.type === 'parabola' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full max-w-xs h-36">
          <line x1="150" y1="10" x2="150" y2="140" stroke="#475569" strokeWidth="1.5" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#475569" strokeWidth="1.5" />
          
          {/* U-Shaped Parabola */}
          <path d="M 50 20 Q 150 140 250 20" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
          
          {/* Vertex Point */}
          <circle cx="150" cy="80" r="5" fill="#f43f5e" />
          <text x="150" y="65" fontSize="11" fontWeight="bold" fill="#fef08a" textAnchor="middle">
            Vertex (h, k)
          </text>

          {/* x-intercepts */}
          <circle cx="90" cy="100" r="4" fill="#38bdf8" />
          <circle cx="210" cy="100" r="4" fill="#38bdf8" />
          <text x="90" y="118" fontSize="10" fill="#38bdf8" textAnchor="middle">x₁</text>
          <text x="210" y="118" fontSize="10" fill="#38bdf8" textAnchor="middle">x₂</text>
        </svg>
      )}

      {/* 4. GEOMETRY RECTANGLE */}
      {svgData.type === 'geometry-rect' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full max-w-xs h-36">
          <rect x="50" y="25" width="200" height="90" fill="#1e1b4b" stroke="#818cf8" strokeWidth="3" rx="6" />
          <text x="150" y="18" fontSize="13" fontWeight="bold" fill="#a5b4fc" textAnchor="middle">
            L = {svgData.params.lengthLabel || '3w + 4'}
          </text>
          <text x="30" y="75" fontSize="13" fontWeight="bold" fill="#a5b4fc" textAnchor="middle">w</text>
          <text x="270" y="75" fontSize="13" fontWeight="bold" fill="#a5b4fc" textAnchor="middle">w</text>
          <rect x="100" y="55" width="100" height="30" rx="4" fill="#312e81" stroke="#6366f1" />
          <text x="150" y="75" fontSize="12" fontWeight="bold" fill="#fef08a" textAnchor="middle">
            P = {svgData.params.perimeter || '52 cm'}
          </text>
        </svg>
      )}

      {/* 5. FRACTION BARS */}
      {svgData.type === 'fraction-bars' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 140" className="w-full max-w-xs h-36">
          <rect x="30" y="20" width="100" height="50" rx="6" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <text x="80" y="40" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            {svgData.params.num1 || '2x - 3'}
          </text>
          <line x1="45" y1="46" x2="115" y2="46" stroke="#ffffff" strokeWidth="2" />
          <text x="80" y="62" fontSize="13" fontWeight="bold" fill="#fef08a" textAnchor="middle">
            {svgData.params.den1 || '5'}
          </text>

          <text x="150" y="52" fontSize="22" fontWeight="bold" fill="#facc15" textAnchor="middle">=</text>

          <rect x="170" y="20" width="100" height="50" rx="6" fill="#be123c" stroke="#fb7185" strokeWidth="2" />
          <text x="220" y="40" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">
            {svgData.params.num2 || 'x + 4'}
          </text>
          <line x1="185" y1="46" x2="255" y2="46" stroke="#ffffff" strokeWidth="2" />
          <text x="220" y="62" fontSize="13" fontWeight="bold" fill="#fef08a" textAnchor="middle">
            {svgData.params.den2 || '3'}
          </text>
        </svg>
      )}

      {/* 6. RIGHT TRIANGLE (Trigonometry) */}
      {svgData.type === 'right-triangle' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full max-w-xs h-36">
          <polygon points="50,120 250,120 50,30" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="3" strokeLinejoin="round" />
          {/* Right Angle Marker */}
          <rect x="50" y="105" width="15" height="15" fill="none" stroke="#f43f5e" strokeWidth="2" />
          
          {/* Labels */}
          <text x="150" y="138" fontSize="12" fontWeight="bold" fill="#a5b4fc" textAnchor="middle">
            {svgData.params.adjacent || 'Adjacent = b'}
          </text>
          <text x="30" y="75" fontSize="12" fontWeight="bold" fill="#a5b4fc" textAnchor="end">
            {svgData.params.opposite || 'Opposite = a'}
          </text>
          <text x="160" y="65" fontSize="12" fontWeight="bold" fill="#fef08a" textAnchor="start">
            {svgData.params.hypotenuse || 'Hypotenuse = c'}
          </text>
          <text x="210" y="115" fontSize="12" fontWeight="bold" fill="#38bdf8">θ</text>
        </svg>
      )}

      {/* 7. CIRCLE ARC */}
      {svgData.type === 'circle-arc' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full max-w-xs h-36">
          <circle cx="150" cy="75" r="55" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          <circle cx="150" cy="75" r="4" fill="#f43f5e" />
          
          <line x1="150" y1="75" x2="205" y2="75" stroke="#a855f7" strokeWidth="2" />
          <line x1="150" y1="75" x2="185" y2="30" stroke="#a855f7" strokeWidth="2" />

          <text x="175" y="88" fontSize="11" fontWeight="bold" fill="#a855f7">r = {svgData.params.r || '6'}</text>
          <text x="170" y="60" fontSize="11" fontWeight="bold" fill="#facc15">θ = {svgData.params.angle || '60°'}</text>
        </svg>
      )}

      {/* 8. SCATTERPLOT */}
      {svgData.type === 'scatterplot' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full max-w-xs h-36">
          <line x1="40" y1="130" x2="280" y2="130" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="20" x2="40" y2="130" stroke="#64748b" strokeWidth="2" />
          
          {/* Data Points */}
          {[[60,110], [90,95], [120,85], [150,70], [180,55], [210,40], [240,30]].map(([x,y], idx) => (
            <circle key={idx} cx={x} cy={y} r="4" fill="#38bdf8" />
          ))}

          {/* Line of Best Fit */}
          <line x1="40" y1="120" x2="260" y2="20" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 4" />
          <text x="150" y="145" fontSize="10" fill="#a5b4fc" textAnchor="middle">
            {lang === 'ar' ? 'خط الأفضل ملاءمة (Line of Best Fit)' : 'Line of Best Fit'}
          </text>
        </svg>
      )}

      {/* 9. NUMBER LINE */}
      {svgData.type === 'number-line' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="w-full max-w-xs h-24">
          <line x1="20" y1="50" x2="280" y2="50" stroke="#64748b" strokeWidth="3" />
          {/* Ticks */}
          {[-2, -1, 0, 1, 2, 3, 4].map((num, idx) => {
            const x = 40 + idx * 33;
            return (
              <g key={idx}>
                <line x1={x} y1="42" x2={x} y2="58" stroke="#94a3b8" strokeWidth="2" />
                <text x={x} y="75" fontSize="11" fill="#cbd5e1" textAnchor="middle">{num}</text>
              </g>
            );
          })}

          {/* Inequality Ray x > 1 */}
          <circle cx="139" cy="50" r="5" fill="#0f172a" stroke="#f43f5e" strokeWidth="2.5" />
          <line x1="144" y1="50" x2="275" y2="50" stroke="#f43f5e" strokeWidth="4" />
          <polygon points="275,45 285,50 275,55" fill="#f43f5e" />
        </svg>
      )}

      {/* 10. FLOWCHART */}
      {svgData.type === 'flowchart' && (
        <div className="w-full flex flex-col gap-2 items-center text-xs">
          {(svgData.params.steps || []).map((step: string, idx: number) => (
            <React.Fragment key={idx}>
              <div className="bg-indigo-950 border border-indigo-500/50 text-indigo-200 px-3 py-1.5 rounded-lg shadow font-mono text-center w-full max-w-xs">
                <span className="text-amber-400 font-bold mr-1">[{idx + 1}]</span> {step}
              </div>
              {idx < (svgData.params.steps || []).length - 1 && (
                <div className="text-indigo-400 font-bold">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
