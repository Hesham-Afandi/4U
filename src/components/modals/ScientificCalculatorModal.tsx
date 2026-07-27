import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Calculator, LineChart, Grid3X3, Equal, RotateCcw, Copy, Check, 
  HelpCircle, ChevronRight, Activity, Plus, Minus, Maximize2, RefreshCw, BarChart3, Binary
} from 'lucide-react';

interface ScientificCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CalculatorTab = 'scientific' | 'graphing' | 'equations' | 'matrix' | 'statistics';

export const ScientificCalculatorModal: React.FC<ScientificCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('scientific');

  // --- SCIENTIFIC CALCULATOR STATE ---
  const [display, setDisplay] = useState<string>('0');
  const [expression, setExpression] = useState<string>('');
  const [memory, setMemory] = useState<number>(0);
  const [isRad, setIsRad] = useState<boolean>(true); // Radians vs Degrees
  const [history, setHistory] = useState<{ expr: string; res: string }[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // --- GRAPHING CALCULATOR STATE ---
  const [func1, setFunc1] = useState<string>('x^2 - 4');
  const [func2, setFunc2] = useState<string>('2 * sin(x)');
  const [func3, setFunc3] = useState<string>('');
  const [xMin, setXMin] = useState<number>(-10);
  const [xMax, setXMax] = useState<number>(10);
  const [yMin, setYMin] = useState<number>(-10);
  const [yMax, setYMax] = useState<number>(10);
  const [traceX, setTraceX] = useState<string>('2');
  const [hoverPoint, setHoverPoint] = useState<{ sx: number; sy: number; xMath: number; yMath: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleResetGraphing = () => {
    setFunc1('x^2 - 4');
    setFunc2('2 * sin(x)');
    setFunc3('');
    setXMin(-10);
    setXMax(10);
    setYMin(-10);
    setYMax(10);
    setTraceX('2');
    setHoverPoint(null);
  };

  // --- EQUATION SOLVER STATE ---
  const [eqType, setEqType] = useState<'linear2' | 'linear3' | 'quadratic' | 'cubic'>('quadratic');
  // Quadratic: ax^2 + bx + c = 0
  const [quadA, setQuadA] = useState<string>('1');
  const [quadB, setQuadB] = useState<string>('-5');
  const [quadC, setQuadC] = useState<string>('6');
  // Cubic: ax^3 + bx^2 + cx + d = 0
  const [cubicA, setCubicA] = useState<string>('1');
  const [cubicB, setCubicB] = useState<string>('-6');
  const [cubicC, setCubicC] = useState<string>('11');
  const [cubicD, setCubicD] = useState<string>('-6');
  // Linear 2x2: a1 x + b1 y = c1 , a2 x + b2 y = c2
  const [lin2, setLin2] = useState({
    a1: '2', b1: '3', c1: '12',
    a2: '5', b2: '-1', c2: '13'
  });
  // Linear 3x3:
  const [lin3, setLin3] = useState({
    a1: '1', b1: '1', c1: '1', d1: '6',
    a2: '0', b2: '2', c2: '1', d2: '5',
    a3: '2', b3: '-1', c3: '1', d3: '3'
  });
  const [eqResult, setEqResult] = useState<{ title: string; steps: string[]; final: string } | null>(null);

  // --- MATRIX CALCULATOR STATE ---
  const [matrixDim, setMatrixDim] = useState<2 | 3>(2);
  const [matA, setMatA] = useState<number[][]>([[1, 2], [3, 4]]);
  const [matB, setMatB] = useState<number[][]>([[5, 6], [7, 8]]);
  const [matrixRes, setMatrixRes] = useState<{ title: string; mat?: number[][]; val?: number; str?: string } | null>(null);

  // --- STATISTICS STATE ---
  const [statsInput, setStatsInput] = useState<string>('12, 15, 18, 22, 25, 30, 18, 24, 28, 35');
  const [statsResult, setStatsResult] = useState<any | null>(null);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // -------------------------------------------------------------
  // MATH EXPRESSION PARSER & EVALUATOR (SAFE)
  // -------------------------------------------------------------
  const evaluateMathExpression = (exprStr: string, isRadians: boolean = true): number => {
    try {
      if (!exprStr.trim()) return 0;
      let cleaned = exprStr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/\^/g, '**');

      // Replace trigonometric and mathematical functions
      // Angle conversion multiplier if in degrees
      const angleMultiplier = isRadians ? 1 : Math.PI / 180;
      const invAngleMultiplier = isRadians ? 1 : 180 / Math.PI;

      // Handle factorial n!
      cleaned = cleaned.replace(/(\d+)!/g, (_, n) => {
        let num = parseInt(n, 10);
        if (num < 0) return 'NaN';
        let fact = 1;
        for (let i = 2; i <= num; i++) fact *= i;
        return fact.toString();
      });

      // Prepare scope context for Function evaluation
      // Functions: sin, cos, tan, asin, acos, atan, sqrt, cbrt, log10, ln, abs
      const context = {
        sin: (x: number) => Math.sin(x * angleMultiplier),
        cos: (x: number) => Math.cos(x * angleMultiplier),
        tan: (x: number) => Math.tan(x * angleMultiplier),
        asin: (x: number) => Math.asin(x) * invAngleMultiplier,
        acos: (x: number) => Math.acos(x) * invAngleMultiplier,
        atan: (x: number) => Math.atan(x) * invAngleMultiplier,
        sqrt: (x: number) => Math.sqrt(x),
        cbrt: (x: number) => Math.cbrt(x),
        log: (x: number) => Math.log10(x),
        ln: (x: number) => Math.log(x),
        abs: (x: number) => Math.abs(x),
        PI: Math.PI,
        E: Math.E,
      };

      // Safely run function evaluation with context
      const fnNames = Object.keys(context);
      const fnVals = Object.values(context);
      
      // Execute safer function scope
      const evalFn = new Function(...fnNames, `"use strict"; return (${cleaned});`);
      const res = evalFn(...fnVals);
      
      if (typeof res === 'number' && !isNaN(res) && isFinite(res)) {
        // Round to 10 decimal places to eliminate IEEE floating point noise
        return Math.round(res * 1e10) / 1e10;
      }
      return res;
    } catch (err) {
      throw new Error('خطأ في التعبيير الرياضي');
    }
  };

  // -------------------------------------------------------------
  // SCIENTIFIC CALCULATOR HANDLERS
  // -------------------------------------------------------------
  const handleNumClick = (val: string) => {
    if (display === '0' || display === 'Error' || display === 'خطأ') {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  const handleOpClick = (op: string) => {
    if (display === 'Error') setDisplay('0');
    setDisplay(display + op);
  };

  const handleFuncClick = (funcName: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(`${funcName}(`);
    } else {
      setDisplay(`${display}${funcName}(`);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleDelete = () => {
    if (display.length <= 1 || display === 'Error') {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    try {
      const resVal = evaluateMathExpression(display, isRad);
      const resStr = resVal.toString();
      setExpression(display + ' =');
      
      // Add to history
      setHistory(prev => [{ expr: display, res: resStr }, ...prev.slice(0, 19)]);
      setDisplay(resStr);
    } catch (err) {
      setExpression(display);
      setDisplay('Error');
    }
  };

  // Memory functions
  const handleMemory = (type: 'MC' | 'MR' | 'M+' | 'M-') => {
    const currentVal = parseFloat(display) || 0;
    if (type === 'MC') setMemory(0);
    else if (type === 'MR') setDisplay(memory.toString());
    else if (type === 'M+') setMemory(memory + currentVal);
    else if (type === 'M-') setMemory(memory - currentVal);
  };

  // -------------------------------------------------------------
  // GRAPHING CANVAS RENDERER
  // -------------------------------------------------------------
  useEffect(() => {
    if (!isOpen || activeTab !== 'graphing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = '#0f172a'; // slate-900
    ctx.fillRect(0, 0, width, height);

    // Coordinate mapping functions
    const toScreenX = (x: number) => ((x - xMin) / (xMax - xMin)) * width;
    const toScreenY = (y: number) => height - ((y - yMin) / (yMax - yMin)) * height;

    // Grid lines
    ctx.strokeStyle = '#1e293b'; // slate-800
    ctx.lineWidth = 1;

    const xStep = Math.max(1, Math.floor((xMax - xMin) / 10));
    for (let x = Math.ceil(xMin); x <= xMax; x += xStep) {
      const sx = toScreenX(x);
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx, height);
      ctx.stroke();
    }

    const yStep = Math.max(1, Math.floor((yMax - yMin) / 10));
    for (let y = Math.ceil(yMin); y <= yMax; y += yStep) {
      const sy = toScreenY(y);
      ctx.beginPath();
      ctx.moveTo(0, sy);
      ctx.lineTo(width, sy);
      ctx.stroke();
    }

    // Axes
    const xAxisY = toScreenY(0);
    const yAxisX = toScreenX(0);

    ctx.strokeStyle = '#64748b'; // slate-500
    ctx.lineWidth = 2;

    // X Axis
    if (xAxisY >= 0 && xAxisY <= height) {
      ctx.beginPath();
      ctx.moveTo(0, xAxisY);
      ctx.lineTo(width, xAxisY);
      ctx.stroke();
    }

    // Y Axis
    if (yAxisX >= 0 && yAxisX <= width) {
      ctx.beginPath();
      ctx.moveTo(yAxisX, 0);
      ctx.lineTo(yAxisX, height);
      ctx.stroke();
    }

    // Numbers on axes
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';

    for (let x = Math.ceil(xMin); x <= xMax; x += xStep * 2) {
      if (x === 0) continue;
      const sx = toScreenX(x);
      if (sx >= 0 && sx <= width) {
        ctx.fillText(x.toString(), sx - 6, Math.min(Math.max(xAxisY + 12, 12), height - 4));
      }
    }

    for (let y = Math.ceil(yMin); y <= yMax; y += yStep * 2) {
      if (y === 0) continue;
      const sy = toScreenY(y);
      if (sy >= 0 && sy <= height) {
        ctx.fillText(y.toString(), Math.min(Math.max(yAxisX + 4, 4), width - 20), sy + 3);
      }
    }

    // Function Plotting helper
    const plotFunction = (fnExpr: string, color: string) => {
      if (!fnExpr.trim()) return;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      let isDrawing = false;
      const steps = 400;
      const dx = (xMax - xMin) / steps;

      for (let i = 0; i <= steps; i++) {
        const xVal = xMin + i * dx;
        try {
          // Replace 'x' in string carefully
          let evalExpr = fnExpr.replace(/\bx\b/g, `(${xVal})`);
          const yVal = evaluateMathExpression(evalExpr, true);

          if (typeof yVal === 'number' && !isNaN(yVal) && isFinite(yVal)) {
            const sx = toScreenX(xVal);
            const sy = toScreenY(yVal);

            if (sy >= -100 && sy <= height + 100) {
              if (!isDrawing) {
                ctx.moveTo(sx, sy);
                isDrawing = true;
              } else {
                ctx.lineTo(sx, sy);
              }
            } else {
              isDrawing = false;
            }
          } else {
            isDrawing = false;
          }
        } catch {
          isDrawing = false;
        }
      }
      ctx.stroke();
    };

    // Plot Functions
    plotFunction(func1, '#38bdf8'); // Sky Blue
    plotFunction(func2, '#f59e0b'); // Amber
    plotFunction(func3, '#10b981'); // Emerald

    // Trace point if specified
    const xEval = parseFloat(traceX);
    if (!isNaN(xEval) && func1.trim()) {
      try {
        let evalExpr = func1.replace(/\bx\b/g, `(${xEval})`);
        const yEval = evaluateMathExpression(evalExpr, true);
        if (typeof yEval === 'number' && !isNaN(yEval) && isFinite(yEval)) {
          const sx = toScreenX(xEval);
          const sy = toScreenY(yEval);

          if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
            ctx.fillStyle = '#ef4444'; // Red dot
            ctx.beginPath();
            ctx.arc(sx, sy, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Label
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px sans-serif';
            ctx.fillText(`(${xEval}, ${yEval.toFixed(2)})`, sx + 8, sy - 8);
          }
        }
      } catch {}
    }

    // Hover crosshair & point coordinates tooltip
    if (hoverPoint) {
      const { sx, sy, xMath, yMath } = hoverPoint;

      // Draw dashed crosshairs
      ctx.strokeStyle = '#f43f5e'; // rose-500
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      // Vertical line
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx, height);
      ctx.stroke();

      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(0, sy);
      ctx.lineTo(width, sy);
      ctx.stroke();

      ctx.setLineDash([]); // Reset line dash

      // Evaluate functions at xMath
      const evalFuncAtX = (fnExpr: string, color: string, name: string) => {
        if (!fnExpr.trim()) return null;
        try {
          let evalExpr = fnExpr.replace(/\bx\b/g, `(${xMath})`);
          const yVal = evaluateMathExpression(evalExpr, true);
          if (typeof yVal === 'number' && !isNaN(yVal) && isFinite(yVal)) {
            const csy = toScreenY(yVal);
            return { name, yVal, csy, color };
          }
        } catch {}
        return null;
      };

      const points = [
        evalFuncAtX(func1, '#38bdf8', 'f(x)'),
        evalFuncAtX(func2, '#f59e0b', 'g(x)'),
        evalFuncAtX(func3, '#10b981', 'h(x)'),
      ].filter(Boolean) as { name: string; yVal: number; csy: number; color: string }[];

      // Highlight curve dots
      points.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(sx, p.csy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Tooltip Card
      const tooltipLines = [
        `Coordinates: (${xMath.toFixed(2)}, ${yMath.toFixed(2)})`,
        ...points.map((p) => `${p.name} = ${p.yVal.toFixed(3)}`),
      ];

      ctx.font = 'bold 11px monospace';
      let maxTextWidth = 150;
      tooltipLines.forEach((line) => {
        const w = ctx.measureText(line).width;
        if (w > maxTextWidth) maxTextWidth = w;
      });

      const cardWidth = maxTextWidth + 16;
      const cardHeight = tooltipLines.length * 16 + 12;

      // Position tooltip safely inside canvas bounds
      let tooltipX = sx + 12;
      let tooltipY = sy - cardHeight - 12;
      if (tooltipX + cardWidth > width - 8) tooltipX = sx - cardWidth - 12;
      if (tooltipY < 8) tooltipY = sy + 12;

      // Card Background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.92)'; // slate-900 with opacity
      ctx.strokeStyle = '#38bdf8'; // sky-400
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      if ('roundRect' in ctx) {
        (ctx as any).roundRect(tooltipX, tooltipY, cardWidth, cardHeight, 8);
      } else {
        ctx.rect(tooltipX, tooltipY, cardWidth, cardHeight);
      }
      ctx.fill();
      ctx.stroke();

      // Card Text
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(tooltipLines[0], tooltipX + 8, tooltipY + 18);

      points.forEach((p, idx) => {
        ctx.fillStyle = p.color;
        ctx.fillText(`${p.name} = ${p.yVal.toFixed(3)}`, tooltipX + 8, tooltipY + 18 + (idx + 1) * 16);
      });
    }

  }, [isOpen, activeTab, func1, func2, func3, xMin, xMax, yMin, yMax, traceX, hoverPoint]);

  if (!isOpen) return null;

  // -------------------------------------------------------------
  // CANVAS MOUSE & TOUCH POINTER HANDLER
  // -------------------------------------------------------------
  const handleCanvasPointer = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;
    if ('touches' in e) {
      if (e.touches.length === 0) {
        setHoverPoint(null);
        return;
      }
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const sx = (clientX - rect.left) * scaleX;
    const sy = (clientY - rect.top) * scaleY;

    if (sx < 0 || sx > canvas.width || sy < 0 || sy > canvas.height) {
      setHoverPoint(null);
      return;
    }

    const xMath = xMin + (sx / canvas.width) * (xMax - xMin);
    const yMath = yMax - (sy / canvas.height) * (yMax - yMin);

    setHoverPoint({ sx, sy, xMath, yMath });
  };

  // -------------------------------------------------------------
  // EQUATION SOLVER HANDLERS
  // -------------------------------------------------------------
  const solveEquations = () => {
    if (eqType === 'quadratic') {
      const a = parseFloat(quadA);
      const b = parseFloat(quadB);
      const c = parseFloat(quadC);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        setEqResult({ title: 'خطأ', steps: ['يرجى إدخال أعداد صالحة للمعاملات a, b, c.'], final: 'غير صالحة' });
        return;
      }
      if (a === 0) {
        setEqResult({ title: 'معادلة خطية', steps: ['a = 0، تحولت المعادلة إلى خطية: bx + c = 0'], final: `x = ${(-c / b).toFixed(4)}` });
        return;
      }

      const disc = b * b - 4 * a * c;
      const steps = [
        `المعادلة: ${a}x² + (${b})x + (${c}) = 0`,
        `المميز Δ = b² - 4ac = (${b})² - 4(${a})(${c}) = ${disc}`
      ];

      if (disc > 0) {
        const x1 = (-b + Math.sqrt(disc)) / (2 * a);
        const x2 = (-b - Math.sqrt(disc)) / (2 * a);
        steps.push(`بما أن المميز > 0، يوجد جذران حقيقيان مختلفان:`);
        steps.push(`x₁ = (-b + √Δ) / 2a = ${x1.toFixed(4)}`);
        steps.push(`x₂ = (-b - √Δ) / 2a = ${x2.toFixed(4)}`);
        setEqResult({
          title: 'حلول المعادلة التربيعية',
          steps,
          final: `x₁ = ${x1.toFixed(4)}  ,  x₂ = ${x2.toFixed(4)}`
        });
      } else if (disc === 0) {
        const x = -b / (2 * a);
        steps.push(`بما أن المميز = 0، يوجد جذر حقيقي مكرر:`);
        steps.push(`x = -b / 2a = ${x.toFixed(4)}`);
        setEqResult({
          title: 'حل المعادلة التربيعية',
          steps,
          final: `x = ${x.toFixed(4)}`
        });
      } else {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imagPart = (Math.sqrt(-disc) / (2 * a)).toFixed(4);
        steps.push(`بما أن المميز < 0، الجذور مركبّة (تخيلية):`);
        steps.push(`x₁ = ${realPart} + ${imagPart}i`);
        steps.push(`x₂ = ${realPart} - ${imagPart}i`);
        setEqResult({
          title: 'حلول مركبّة',
          steps,
          final: `x = ${realPart} ± ${imagPart}i`
        });
      }
    } else if (eqType === 'linear2') {
      const a1 = parseFloat(lin2.a1), b1 = parseFloat(lin2.b1), c1 = parseFloat(lin2.c1);
      const a2 = parseFloat(lin2.a2), b2 = parseFloat(lin2.b2), c2 = parseFloat(lin2.c2);

      const D = a1 * b2 - a2 * b1;
      const Dx = c1 * b2 - c2 * b1;
      const Dy = a1 * c2 - a2 * c1;

      const steps = [
        `النظام:`,
        `1) ${a1}x + ${b1}y = ${c1}`,
        `2) ${a2}x + ${b2}y = ${c2}`,
        `محدد النظام D = (a1)(b2) - (a2)(b1) = (${a1})(${b2}) - (${a2})(${b1}) = ${D}`
      ];

      if (D === 0) {
        if (Dx === 0 && Dy === 0) {
          setEqResult({ title: 'عدد لا نهائي من الحلول', steps, final: 'جميع النقاط على المستقيم المتطابق' });
        } else {
          setEqResult({ title: 'لا يوجد حل (نظام مستحيل)', steps, final: 'المستقيمان متوازيان وغير متقاطعين' });
        }
        return;
      }

      const x = Dx / D;
      const y = Dy / D;
      steps.push(`محدد x: Dx = ${Dx} ⟹ x = Dx / D = ${x.toFixed(4)}`);
      steps.push(`محدد y: Dy = ${Dy} ⟹ y = Dy / D = ${y.toFixed(4)}`);

      setEqResult({
        title: 'حل نظام المعادلتين (2×2)',
        steps,
        final: `x = ${x.toFixed(4)} , y = ${y.toFixed(4)}`
      });
    } else if (eqType === 'linear3') {
      const a1 = parseFloat(lin3.a1), b1 = parseFloat(lin3.b1), c1 = parseFloat(lin3.c1), d1 = parseFloat(lin3.d1);
      const a2 = parseFloat(lin3.a2), b2 = parseFloat(lin3.b2), c2 = parseFloat(lin3.c2), d2 = parseFloat(lin3.d2);
      const a3 = parseFloat(lin3.a3), b3 = parseFloat(lin3.b3), c3 = parseFloat(lin3.c3), d3 = parseFloat(lin3.d3);

      const det3 = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => {
        return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
      };

      const D = det3(a1, b1, c1, a2, b2, c2, a3, b3, c3);
      const Dx = det3(d1, b1, c1, d2, b2, c2, d3, b3, c3);
      const Dy = det3(a1, d1, c1, a2, d2, c2, a3, d3, c3);
      const Dz = det3(a1, b1, d1, a2, b2, d2, a3, b3, d3);

      if (D === 0) {
        setEqResult({ title: 'لا يوجد حل فريد', steps: [`محدد النظام D = 0`], final: 'النظام إما غير مستقل أو لا يوجد حل' });
        return;
      }

      const x = Dx / D;
      const y = Dy / D;
      const z = Dz / D;

      setEqResult({
        title: 'حل نظام 3 معادلات (3x3) بقاعدة كرامر',
        steps: [
          `محدد المصفوفة الرئيسي D = ${D}`,
          `Dx = ${Dx}  ,  Dy = ${Dy}  ,  Dz = ${Dz}`,
          `x = Dx/D = ${x.toFixed(4)}`,
          `y = Dy/D = ${y.toFixed(4)}`,
          `z = Dz/D = ${z.toFixed(4)}`
        ],
        final: `x = ${x.toFixed(4)} , y = ${y.toFixed(4)} , z = ${z.toFixed(4)}`
      });
    } else if (eqType === 'cubic') {
      const a = parseFloat(cubicA);
      const b = parseFloat(cubicB);
      const c = parseFloat(cubicC);
      const d = parseFloat(cubicD);

      if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        setEqResult({ title: 'خطأ', steps: ['يرجى إدخال أعداد صالحة للمعاملات a, b, c, d.'], final: 'غير صالحة' });
        return;
      }

      if (a === 0) {
        const disc = c * c - 4 * b * d;
        const steps = [
          `a = 0، تحولت المعادلة إلى تربيعية: ${b}x² + (${c})x + (${d}) = 0`,
          `المميز Δ = c² - 4bd = (${c})² - 4(${b})(${d}) = ${disc}`
        ];
        if (disc > 0) {
          const x1 = (-c + Math.sqrt(disc)) / (2 * b);
          const x2 = (-c - Math.sqrt(disc)) / (2 * b);
          steps.push(`x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`);
          setEqResult({ title: 'حل المعادلة (تحولت لتربيعية)', steps, final: `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}` });
        } else if (disc === 0) {
          const x = -c / (2 * b);
          steps.push(`x = ${x.toFixed(4)}`);
          setEqResult({ title: 'حل المعادلة (تحولت لتربيعية)', steps, final: `x = ${x.toFixed(4)}` });
        } else {
          const rP = (-c / (2 * b)).toFixed(4);
          const iP = (Math.sqrt(-disc) / (2 * b)).toFixed(4);
          steps.push(`x₁ = ${rP} + ${iP}i, x₂ = ${rP} - ${iP}i`);
          setEqResult({ title: 'حل المعادلة (تحولت لتربيعية)', steps, final: `x = ${rP} ± ${iP}i` });
        }
        return;
      }

      const shift = b / (3 * a);
      const p = (3 * a * c - b * b) / (3 * a * a);
      const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
      const delta = (q * q) / 4 + (p * p * p) / 27;

      const steps = [
        `المعادلة التكعيبية: (${a})x³ + (${b})x² + (${c})x + (${d}) = 0`,
        `اختزال المعادلة بفرض x = t - (b/3a) إلى t³ + pt + q = 0:`,
        `p = ${p.toFixed(4)}  ,  q = ${q.toFixed(4)}`,
        `المميز Δ = (q/2)² + (p/3)³ = ${delta.toFixed(4)}`
      ];

      if (Math.abs(delta) < 1e-9) {
        if (Math.abs(p) < 1e-9 && Math.abs(q) < 1e-9) {
          const x = -shift;
          steps.push(`Δ = 0 و p=0, q=0 ⟹ جذر مكرر ثلاثياً:`);
          steps.push(`x₁ = x₂ = x₃ = ${x.toFixed(4)}`);
          setEqResult({ title: 'حل المعادلة التكعيبية', steps, final: `x₁ = x₂ = x₃ = ${x.toFixed(4)}` });
        } else {
          const u = Math.cbrt(-q / 2);
          const x1 = 2 * u - shift;
          const x2 = -u - shift;
          steps.push(`Δ = 0 ⟹ جذور حقيقية (أحدها مكرر):`);
          steps.push(`x₁ = ${x1.toFixed(4)}`);
          steps.push(`x₂ = x₃ = ${x2.toFixed(4)}`);
          setEqResult({ title: 'حل المعادلة التكعيبية', steps, final: `x₁ = ${x1.toFixed(4)} , x₂ = x₃ = ${x2.toFixed(4)}` });
        }
      } else if (delta < 0) {
        const r = Math.sqrt(-Math.pow(p, 3) / 27);
        const phiArg = Math.max(-1, Math.min(1, -q / (2 * r)));
        const phi = Math.acos(phiArg);
        const factor = 2 * Math.sqrt(-p / 3);

        const x1 = factor * Math.cos(phi / 3) - shift;
        const x2 = factor * Math.cos((phi + 2 * Math.PI) / 3) - shift;
        const x3 = factor * Math.cos((phi + 4 * Math.PI) / 3) - shift;

        steps.push(`Δ < 0 ⟹ يوجد 3 جذور حقيقية مختلفة:`);
        steps.push(`x₁ = ${x1.toFixed(4)}`);
        steps.push(`x₂ = ${x2.toFixed(4)}`);
        steps.push(`x₃ = ${x3.toFixed(4)}`);

        setEqResult({
          title: 'حل المعادلة التكعيبية (3 جذور حقيقية)',
          steps,
          final: `x₁ = ${x1.toFixed(4)} , x₂ = ${x2.toFixed(4)} , x₃ = ${x3.toFixed(4)}`
        });
      } else {
        const u = Math.cbrt(-q / 2 + Math.sqrt(delta));
        const v = Math.cbrt(-q / 2 - Math.sqrt(delta));

        const x1 = (u + v) - shift;
        const realPart = - (u + v) / 2 - shift;
        const imagPart = (Math.sqrt(3) / 2) * Math.abs(u - v);

        steps.push(`Δ > 0 ⟹ جذر حقيقي واحد وجذران مركبان مقترنان:`);
        steps.push(`الجذر الحقيقي: x₁ = ${x1.toFixed(4)}`);
        if (imagPart < 1e-6) {
          steps.push(`الجذران الآخران: x₂ = x₃ = ${realPart.toFixed(4)}`);
          setEqResult({ title: 'حل المعادلة التكعيبية', steps, final: `x₁ = ${x1.toFixed(4)} , x₂ = x₃ = ${realPart.toFixed(4)}` });
        } else {
          steps.push(`x₂ = ${realPart.toFixed(4)} + ${imagPart.toFixed(4)}i`);
          steps.push(`x₃ = ${realPart.toFixed(4)} - ${imagPart.toFixed(4)}i`);
          setEqResult({
            title: 'حل المعادلة التكعيبية (جذر حقيقي + جذران مركبان)',
            steps,
            final: `x₁ = ${x1.toFixed(4)} , x₂,₃ = ${realPart.toFixed(4)} ± ${imagPart.toFixed(4)}i`
          });
        }
      }
    }
  };

  // -------------------------------------------------------------
  // MATRIX CALCULATOR HANDLERS
  // -------------------------------------------------------------
  const handleMatrixCellChange = (mat: 'A' | 'B', r: number, c: number, val: string) => {
    const num = parseFloat(val) || 0;
    if (mat === 'A') {
      const newA = matA.map((row, ri) => row.map((cell, ci) => (ri === r && ci === c ? num : cell)));
      setMatA(newA);
    } else {
      const newB = matB.map((row, ri) => row.map((cell, ci) => (ri === r && ci === c ? num : cell)));
      setMatB(newB);
    }
  };

  const handleMatrixDimChange = (dim: 2 | 3) => {
    setMatrixDim(dim);
    if (dim === 2) {
      setMatA([[1, 2], [3, 4]]);
      setMatB([[5, 6], [7, 8]]);
    } else {
      setMatA([[1, 2, 3], [0, 1, 4], [5, 6, 0]]);
      setMatB([[2, 0, -1], [1, 3, 2], [0, -2, 1]]);
    }
    setMatrixRes(null);
  };

  const calculateMatrixOp = (op: 'add' | 'sub' | 'mult' | 'detA' | 'invA' | 'transA') => {
    const n = matrixDim;
    if (op === 'add') {
      const res = matA.map((row, r) => row.map((val, c) => val + matB[r][c]));
      setMatrixRes({ title: 'حاصل جمع المصفوفين A + B', mat: res });
    } else if (op === 'sub') {
      const res = matA.map((row, r) => row.map((val, c) => val - matB[r][c]));
      setMatrixRes({ title: 'طرح المصفوفين A - B', mat: res });
    } else if (op === 'mult') {
      const res: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          for (let k = 0; k < n; k++) {
            res[i][j] += matA[i][k] * matB[k][j];
          }
        }
      }
      setMatrixRes({ title: 'ضرب المصفوفين A × B', mat: res });
    } else if (op === 'detA') {
      let det = 0;
      if (n === 2) {
        det = matA[0][0] * matA[1][1] - matA[0][1] * matA[1][0];
      } else {
        det = matA[0][0] * (matA[1][1] * matA[2][2] - matA[1][2] * matA[2][1])
            - matA[0][1] * (matA[1][0] * matA[2][2] - matA[1][2] * matA[2][0])
            + matA[0][2] * (matA[1][0] * matA[2][1] - matA[1][1] * matA[2][0]);
      }
      setMatrixRes({ title: 'محدد المصوفة det(A)', val: Math.round(det * 1e6) / 1e6 });
    } else if (op === 'transA') {
      const res: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          res[j][i] = matA[i][j];
        }
      }
      setMatrixRes({ title: 'مدور المصوفة Aᵀ (Transpose)', mat: res });
    } else if (op === 'invA') {
      if (n === 2) {
        const det = matA[0][0] * matA[1][1] - matA[0][1] * matA[1][0];
        if (det === 0) {
          setMatrixRes({ title: 'معكوس المصوفة A⁻¹', str: 'المصفوفة منفردة (ليس لها معكوس لأن det(A) = 0)' });
          return;
        }
        const inv = [
          [matA[1][1] / det, -matA[0][1] / det],
          [-matA[1][0] / det, matA[0][0] / det]
        ];
        const roundedInv = inv.map(r => r.map(v => Math.round(v * 1000) / 1000));
        setMatrixRes({ title: 'معكوس المصوفة A⁻¹', mat: roundedInv });
      } else {
        setMatrixRes({ title: 'معكوس المصوفة A⁻¹', str: 'معكوس مصفوفة 3x3 متوفر عبر طريقة المرافقات' });
      }
    }
  };

  // -------------------------------------------------------------
  // STATISTICS HANDLERS
  // -------------------------------------------------------------
  const calculateStats = () => {
    const numbers = statsInput
      .split(/[\s,;\n]+/)
      .map(s => parseFloat(s.trim()))
      .filter(n => !isNaN(n));

    if (numbers.length === 0) {
      setStatsResult(null);
      return;
    }

    const n = numbers.length;
    const sum = numbers.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const sorted = [...numbers].sort((a, b) => a - b);
    
    // Median
    const mid = Math.floor(n / 2);
    const median = n % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    // Mode
    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    numbers.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > maxCount) maxCount = counts[num];
    });
    const modes = Object.keys(counts)
      .filter(k => counts[parseFloat(k)] === maxCount && maxCount > 1)
      .map(k => parseFloat(k));

    // Sum of Squares
    const sumSq = numbers.reduce((acc, x) => acc + x * x, 0);

    // Variance & Standard Deviation
    const varPop = numbers.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / n;
    const stdPop = Math.sqrt(varPop);

    const varSample = n > 1 ? numbers.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / (n - 1) : 0;
    const stdSample = Math.sqrt(varSample);

    setStatsResult({
      n,
      sum: Math.round(sum * 1000) / 1000,
      mean: Math.round(mean * 1000) / 1000,
      median: Math.round(median * 1000) / 1000,
      mode: modes.length > 0 ? modes.join(', ') : 'لا يوجد تكرار غالب',
      min: sorted[0],
      max: sorted[n - 1],
      range: sorted[n - 1] - sorted[0],
      varPop: Math.round(varPop * 1000) / 1000,
      stdPop: Math.round(stdPop * 1000) / 1000,
      varSample: Math.round(varSample * 1000) / 1000,
      stdSample: Math.round(stdSample * 1000) / 1000,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 md:p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* MODAL HEADER */}
        <div className="gradient-primary px-4 md:px-6 py-4 flex items-center justify-between border-b border-slate-700/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/20 rounded-2xl border border-amber-400/30 text-amber-300 shadow-inner">
              <Calculator className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-black text-white tracking-tight flex items-center gap-2">
                الآلة الحاسبة العلمية والبيانية الشاملة
                <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full shadow-sm">
                  FX-Pro
                </span>
              </h2>
              <p className="text-xs text-indigo-100 opacity-90">
                رسم بياني • حل معادلات • مصفوفات • إحصاء • حساب علمي متقدم
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            title="إغلاق (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TOP TABS NAVIGATION */}
        <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center gap-1 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('scientific')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'scientific'
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4 text-amber-300" />
            <span>علمية (Scientific)</span>
          </button>

          <button
            onClick={() => setActiveTab('graphing')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'graphing'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <LineChart className="w-4 h-4 text-sky-300" />
            <span>رسم بياني (Graphing)</span>
          </button>

          <button
            onClick={() => setActiveTab('equations')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'equations'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Equal className="w-4 h-4 text-emerald-300" />
            <span>حل المعادلات (Equations)</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Grid3X3 className="w-4 h-4 text-purple-300" />
            <span>المصفوفات (Matrix)</span>
          </button>

          <button
            onClick={() => setActiveTab('statistics')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'statistics'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-amber-300" />
            <span>الإحصاء (Statistics)</span>
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 bg-slate-900">
          
          {/* ==================== TAB 1: SCIENTIFIC CALCULATOR ==================== */}
          {activeTab === 'scientific' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left 2 Cols: Calculator LCD & Keypad */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* LCD Display */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-inner flex flex-col justify-between min-h-[120px] relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsRad(!isRad)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                          isRad ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {isRad ? 'RAD' : 'DEG'}
                      </button>
                      {memory !== 0 && (
                        <span className="text-amber-400 font-bold text-[10px] bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                          M = {memory}
                        </span>
                      )}
                    </div>
                    <span className="text-slate-500 max-w-[200px] truncate dir-ltr">{expression}</span>
                  </div>

                  {/* Main Display Number */}
                  <div className="text-right text-2xl md:text-3xl font-mono font-bold text-emerald-400 tracking-wider break-all dir-ltr overflow-x-auto my-1">
                    {display}
                  </div>
                </div>

                {/* Keypad Grid */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5 md:gap-2 select-none text-xs font-mono font-bold">
                  {/* Row 1: Memory & Clear */}
                  <button onClick={() => handleMemory('MC')} className="p-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl transition">MC</button>
                  <button onClick={() => handleMemory('MR')} className="p-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl transition">MR</button>
                  <button onClick={() => handleMemory('M+')} className="p-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl transition">M+</button>
                  <button onClick={() => handleMemory('M-')} className="p-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl transition">M-</button>
                  <button onClick={handleDelete} className="p-2.5 bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-800/50 rounded-xl transition">DEL</button>
                  <button onClick={handleClear} className="p-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl transition col-span-2 font-black">AC</button>
                  <button onClick={() => setIsRad(!isRad)} className="p-2.5 bg-indigo-900/60 hover:bg-indigo-800 text-indigo-300 rounded-xl transition">{isRad ? 'RAD' : 'DEG'}</button>

                  {/* Row 2: Trig Functions */}
                  <button onClick={() => handleFuncClick('sin')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 rounded-xl transition">sin</button>
                  <button onClick={() => handleFuncClick('cos')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 rounded-xl transition">cos</button>
                  <button onClick={() => handleFuncClick('tan')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 rounded-xl transition">tan</button>
                  <button onClick={() => handleFuncClick('asin')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 rounded-xl transition">sin⁻¹</button>
                  <button onClick={() => handleFuncClick('acos')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 rounded-xl transition">cos⁻¹</button>
                  <button onClick={() => handleFuncClick('atan')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-indigo-300 rounded-xl transition">tan⁻¹</button>
                  <button onClick={() => handleNumClick('(')} className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition">(</button>
                  <button onClick={() => handleNumClick(')')} className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition">)</button>

                  {/* Row 3: Powers & Roots */}
                  <button onClick={() => handleOpClick('^2')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-sky-300 rounded-xl transition">x²</button>
                  <button onClick={() => handleOpClick('^3')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-sky-300 rounded-xl transition">x³</button>
                  <button onClick={() => handleOpClick('^')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-sky-300 rounded-xl transition">xʸ</button>
                  <button onClick={() => handleFuncClick('sqrt')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-sky-300 rounded-xl transition">√x</button>
                  <button onClick={() => handleFuncClick('cbrt')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-sky-300 rounded-xl transition">³√x</button>
                  <button onClick={() => handleOpClick('^-1')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-sky-300 rounded-xl transition">1/x</button>
                  <button onClick={() => handleOpClick('π')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-emerald-300 rounded-xl transition">π</button>
                  <button onClick={() => handleOpClick('e')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-emerald-300 rounded-xl transition">e</button>

                  {/* Row 4: Logarithms & Abs */}
                  <button onClick={() => handleFuncClick('ln')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-purple-300 rounded-xl transition">ln</button>
                  <button onClick={() => handleFuncClick('log')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-purple-300 rounded-xl transition">log₁₀</button>
                  <button onClick={() => handleOpClick('!')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-purple-300 rounded-xl transition">n!</button>
                  <button onClick={() => handleFuncClick('abs')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-purple-300 rounded-xl transition">|x|</button>
                  <button onClick={() => handleOpClick('%')} className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-purple-300 rounded-xl transition">%</button>
                  <button onClick={() => handleOpClick('÷')} className="p-2.5 bg-indigo-900/80 hover:bg-indigo-800 text-amber-300 text-lg rounded-xl transition">÷</button>
                  <button onClick={() => handleOpClick('×')} className="p-2.5 bg-indigo-900/80 hover:bg-indigo-800 text-amber-300 text-lg rounded-xl transition">×</button>
                  <button onClick={() => handleOpClick('-')} className="p-2.5 bg-indigo-900/80 hover:bg-indigo-800 text-amber-300 text-lg rounded-xl transition">-</button>

                  {/* Row 5: Numpad 7-9 */}
                  <button onClick={() => handleNumClick('7')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">7</button>
                  <button onClick={() => handleNumClick('8')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">8</button>
                  <button onClick={() => handleNumClick('9')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">9</button>
                  <button onClick={() => handleOpClick('+')} className="p-3 bg-indigo-900/80 hover:bg-indigo-800 text-amber-300 text-lg rounded-xl transition col-span-2">+</button>

                  {/* Row 6: Numpad 4-6 */}
                  <button onClick={() => handleNumClick('4')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">4</button>
                  <button onClick={() => handleNumClick('5')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">5</button>
                  <button onClick={() => handleNumClick('6')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">6</button>

                  {/* Row 7: Numpad 1-3 */}
                  <button onClick={() => handleNumClick('1')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">1</button>
                  <button onClick={() => handleNumClick('2')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">2</button>
                  <button onClick={() => handleNumClick('3')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">3</button>

                  {/* Row 8: 0, ., Ans, Equals */}
                  <button onClick={() => handleNumClick('0')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">0</button>
                  <button onClick={() => handleNumClick('.')} className="p-3 bg-slate-800 hover:bg-slate-700 text-white text-base rounded-xl transition">.</button>
                  <button onClick={handleCalculate} className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xl rounded-xl transition col-span-3 font-extrabold shadow-lg">=</button>
                </div>

              </div>

              {/* Right Col: Calculation History Log */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col h-full max-h-[480px]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <h3 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-amber-400" />
                    سجل الحسابات والنتائج
                  </h3>
                  {history.length > 0 && (
                    <button
                      onClick={() => setHistory([])}
                      className="text-[11px] text-rose-400 hover:text-rose-300 transition"
                    >
                      مسح السجل
                    </button>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-1 dir-ltr font-mono text-xs">
                  {history.length === 0 ? (
                    <div className="text-center text-slate-600 py-12 text-xs dir-rtl">
                      لا يوجد عمليات سابقة بالذاكرة.
                    </div>
                  ) : (
                    history.map((item, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2 group hover:border-slate-700 transition"
                      >
                        <div className="truncate">
                          <div className="text-slate-400 text-[11px] truncate">{item.expr} =</div>
                          <div className="text-emerald-400 font-bold text-sm truncate">{item.res}</div>
                        </div>

                        <button
                          onClick={() => {
                            setDisplay(item.res);
                            setCopiedIndex(idx);
                            setTimeout(() => setCopiedIndex(null), 1500);
                          }}
                          className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg shrink-0 transition"
                          title="استخدام الناتج"
                        >
                          {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 2: GRAPHING CALCULATOR ==================== */}
          {activeTab === 'graphing' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Col: Function Controls & Scale */}
              <div className="space-y-4">
                
                {/* Functions Input */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold text-slate-200 flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-sky-400" />
                    الدوال المراد رسمها
                  </h3>

                  {/* Func 1 */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-sky-400 font-bold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0" />
                      f(x) =
                    </label>
                    <input
                      type="text"
                      value={func1}
                      onChange={(e) => setFunc1(e.target.value)}
                      placeholder="مثال: x^2 - 4"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-sky-300 focus:outline-none focus:border-sky-500 dir-ltr"
                    />
                  </div>

                  {/* Func 2 */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-amber-400 font-bold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                      g(x) =
                    </label>
                    <input
                      type="text"
                      value={func2}
                      onChange={(e) => setFunc2(e.target.value)}
                      placeholder="مثال: 2 * sin(x)"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-amber-300 focus:outline-none focus:border-amber-500 dir-ltr"
                    />
                  </div>

                  {/* Func 3 */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                      h(x) =
                    </label>
                    <input
                      type="text"
                      value={func3}
                      onChange={(e) => setFunc3(e.target.value)}
                      placeholder="مثال: 0.5 * x + 1"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500 dir-ltr"
                    />
                  </div>

                  {/* Quick Presets */}
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[10px] text-slate-400 block mb-1.5">نماذج جاهزة:</span>
                    <div className="flex flex-wrap gap-1">
                      <button onClick={() => { setFunc1('x^2 - 4'); setFunc2('x + 2'); }} className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 rounded border border-slate-800">تربيعية وخطية</button>
                      <button onClick={() => { setFunc1('sin(x)'); setFunc2('cos(x)'); }} className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 rounded border border-slate-800">sin و cos</button>
                      <button onClick={() => { setFunc1('1 / x'); setFunc2(''); }} className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 rounded border border-slate-800">دالة كسرية 1/x</button>
                      <button onClick={() => { setFunc1('abs(x) - 3'); setFunc2(''); }} className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 rounded border border-slate-800">قيمة مطلقة</button>
                      <button onClick={handleResetGraphing} className="px-2 py-1 bg-rose-950/80 hover:bg-rose-900 text-[10px] text-rose-300 rounded border border-rose-800/80 font-bold flex items-center gap-1"><RotateCcw className="w-3 h-3" /> إعادة الضبط الكلية</button>
                    </div>
                  </div>
                </div>

                {/* Range Settings */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold text-slate-200">أبعاد المحاور (Range)</h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div>
                      <label className="text-[10px] text-slate-400">X Min:</label>
                      <input
                        type="number"
                        value={xMin}
                        onChange={(e) => setXMin(parseFloat(e.target.value) || -10)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-slate-200 dir-ltr"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">X Max:</label>
                      <input
                        type="number"
                        value={xMax}
                        onChange={(e) => setXMax(parseFloat(e.target.value) || 10)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-slate-200 dir-ltr"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">Y Min:</label>
                      <input
                        type="number"
                        value={yMin}
                        onChange={(e) => setYMin(parseFloat(e.target.value) || -10)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-slate-200 dir-ltr"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">Y Max:</label>
                      <input
                        type="number"
                        value={yMax}
                        onChange={(e) => setYMax(parseFloat(e.target.value) || 10)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-slate-200 dir-ltr"
                      />
                    </div>
                  </div>

                  {/* Trace point evaluator */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-rose-300 font-bold">حساب قيمة f(x) عند:</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-400 font-mono">x =</span>
                      <input
                        type="text"
                        value={traceX}
                        onChange={(e) => setTraceX(e.target.value)}
                        className="w-16 bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-rose-400 font-bold font-mono dir-ltr"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Right 2 Cols: HTML5 Canvas Graph */}
              <div className="lg:col-span-2 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={380}
                  onMouseMove={handleCanvasPointer}
                  onMouseLeave={() => setHoverPoint(null)}
                  onTouchStart={handleCanvasPointer}
                  onTouchMove={handleCanvasPointer}
                  onTouchEnd={() => setHoverPoint(null)}
                  className="w-full h-auto max-w-full rounded-xl border border-slate-800 shadow-md bg-slate-900 cursor-crosshair touch-none"
                />

                <div className="w-full flex flex-wrap items-center justify-between gap-2 mt-3 text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-sky-400 font-bold"><span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> f(x)</span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> g(x)</span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> h(x)</span>
                  </div>

                  <button
                    onClick={handleResetGraphing}
                    className="p-1.5 bg-slate-900 hover:bg-rose-950/50 hover:border-rose-700/50 text-slate-200 hover:text-rose-300 rounded-lg border border-slate-800 flex items-center gap-1.5 transition text-[11px] font-bold cursor-pointer"
                    title="إعادة ضبط أبعاد الرسم والدوال إلى الوضع الافتراضي"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                    إعادة ضبط
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ==================== TAB 3: EQUATIONS SOLVER ==================== */}
          {activeTab === 'equations' && (
            <div className="space-y-6">
              
              {/* Equation Type selector */}
              <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800">
                <button
                  onClick={() => { setEqType('quadratic'); setEqResult(null); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    eqType === 'quadratic' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  معادلة تربيعية (ax² + bx + c = 0)
                </button>
                <button
                  onClick={() => { setEqType('cubic'); setEqResult(null); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    eqType === 'cubic' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  معادلة تكعيبية (ax³ + bx² + cx + d = 0)
                </button>
                <button
                  onClick={() => { setEqType('linear2'); setEqResult(null); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    eqType === 'linear2' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  نظام معادلتين بمجهولين (2×2)
                </button>
                <button
                  onClick={() => { setEqType('linear3'); setEqResult(null); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    eqType === 'linear3' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-900'
                  }`}
                >
                  نظام 3 معادلات بـ 3 مجاهيل (3×3)
                </button>
              </div>

              {/* Input Form based on type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  
                  {eqType === 'quadratic' && (
                    <>
                      <h3 className="text-sm font-bold text-emerald-400">إدخال معاملات المعادلة التربيعية</h3>
                      <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل a:</label>
                          <input
                            type="text"
                            value={quadA}
                            onChange={(e) => setQuadA(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل b:</label>
                          <input
                            type="text"
                            value={quadB}
                            onChange={(e) => setQuadB(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل c:</label>
                          <input
                            type="text"
                            value={quadC}
                            onChange={(e) => setQuadC(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {eqType === 'cubic' && (
                    <>
                      <h3 className="text-sm font-bold text-emerald-400">إدخال معاملات المعادلة التكعيبية (ax³ + bx² + cx + d = 0)</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل a:</label>
                          <input
                            type="text"
                            value={cubicA}
                            onChange={(e) => setCubicA(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل b:</label>
                          <input
                            type="text"
                            value={cubicB}
                            onChange={(e) => setCubicB(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل c:</label>
                          <input
                            type="text"
                            value={cubicC}
                            onChange={(e) => setCubicC(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 block mb-1">المعامل d:</label>
                          <input
                            type="text"
                            value={cubicD}
                            onChange={(e) => setCubicD(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center text-white font-bold dir-ltr"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {eqType === 'linear2' && (
                    <>
                      <h3 className="text-sm font-bold text-emerald-400">معاملات نظام معادلتين (a x + b y = c)</h3>
                      <div className="space-y-3 font-mono text-xs dir-ltr">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">eq1:</span>
                          <input type="text" value={lin2.a1} onChange={(e) => setLin2({ ...lin2, a1: e.target.value })} className="w-16 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-white" />
                          <span className="text-slate-400">x +</span>
                          <input type="text" value={lin2.b1} onChange={(e) => setLin2({ ...lin2, b1: e.target.value })} className="w-16 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-white" />
                          <span className="text-slate-400">y =</span>
                          <input type="text" value={lin2.c1} onChange={(e) => setLin2({ ...lin2, c1: e.target.value })} className="w-16 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-amber-400 font-bold" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">eq2:</span>
                          <input type="text" value={lin2.a2} onChange={(e) => setLin2({ ...lin2, a2: e.target.value })} className="w-16 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-white" />
                          <span className="text-slate-400">x +</span>
                          <input type="text" value={lin2.b2} onChange={(e) => setLin2({ ...lin2, b2: e.target.value })} className="w-16 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-white" />
                          <span className="text-slate-400">y =</span>
                          <input type="text" value={lin2.c2} onChange={(e) => setLin2({ ...lin2, c2: e.target.value })} className="w-16 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-amber-400 font-bold" />
                        </div>
                      </div>
                    </>
                  )}

                  {eqType === 'linear3' && (
                    <>
                      <h3 className="text-sm font-bold text-emerald-400">نظام 3 معادلات خطية (a x + b y + c z = d)</h3>
                      <div className="space-y-2 font-mono text-xs dir-ltr">
                        {/* Eq 1 */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <input type="text" value={lin3.a1} onChange={(e) => setLin3({ ...lin3, a1: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>x+</span>
                          <input type="text" value={lin3.b1} onChange={(e) => setLin3({ ...lin3, b1: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>y+</span>
                          <input type="text" value={lin3.c1} onChange={(e) => setLin3({ ...lin3, c1: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>z=</span>
                          <input type="text" value={lin3.d1} onChange={(e) => setLin3({ ...lin3, d1: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-amber-400 font-bold" />
                        </div>
                        {/* Eq 2 */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <input type="text" value={lin3.a2} onChange={(e) => setLin3({ ...lin3, a2: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>x+</span>
                          <input type="text" value={lin3.b2} onChange={(e) => setLin3({ ...lin3, b2: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>y+</span>
                          <input type="text" value={lin3.c2} onChange={(e) => setLin3({ ...lin3, c2: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>z=</span>
                          <input type="text" value={lin3.d2} onChange={(e) => setLin3({ ...lin3, d2: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-amber-400 font-bold" />
                        </div>
                        {/* Eq 3 */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <input type="text" value={lin3.a3} onChange={(e) => setLin3({ ...lin3, a3: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>x+</span>
                          <input type="text" value={lin3.b3} onChange={(e) => setLin3({ ...lin3, b3: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>y+</span>
                          <input type="text" value={lin3.c3} onChange={(e) => setLin3({ ...lin3, c3: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-white" />
                          <span>z=</span>
                          <input type="text" value={lin3.d3} onChange={(e) => setLin3({ ...lin3, d3: e.target.value })} className="w-12 bg-slate-900 border border-slate-800 rounded p-1.5 text-center text-amber-400 font-bold" />
                        </div>
                      </div>
                    </>
                  )}

                  <button
                    onClick={solveEquations}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center gap-2 text-sm"
                  >
                    <Equal className="w-5 h-5" />
                    احسب وحُلّ المعادلة الآن
                  </button>
                </div>

                {/* Output & Steps */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col min-h-[220px]">
                  <h3 className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    خطوات الحل والنتائج النهائية
                  </h3>

                  {eqResult ? (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2 text-xs font-mono">
                        <div className="font-bold text-emerald-300 text-sm border-b border-slate-800 pb-1">{eqResult.title}</div>
                        {eqResult.steps.map((step, sIdx) => (
                          <div key={sIdx} className="text-slate-300 bg-slate-900/60 p-2 rounded-lg border border-slate-800/80 dir-ltr">
                            {step}
                          </div>
                        ))}
                      </div>

                      <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-center">
                        <span className="text-[11px] text-emerald-300 font-bold block mb-1">النتيجة النهائية:</span>
                        <span className="text-base font-extrabold font-mono text-emerald-200 dir-ltr block">{eqResult.final}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-slate-500 text-xs text-center py-8">
                      أدخل المعاملات ثم انقر على "حُلّ المعادلة" لرؤية خطوات الحل التفصيلية.
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

          {/* ==================== TAB 4: MATRIX CALCULATOR ==================== */}
          {activeTab === 'matrix' && (
            <div className="space-y-6">
              
              {/* Matrix Size & Setup Controls */}
              <div className="flex items-center justify-between flex-wrap gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-300 font-bold">حجم المصفوفة:</span>
                  <button
                    onClick={() => handleMatrixDimChange(2)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      matrixDim === 2 ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    2 × 2
                  </button>
                  <button
                    onClick={() => handleMatrixDimChange(3)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      matrixDim === 3 ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    3 × 3
                  </button>
                </div>

                {/* Operations Buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <button onClick={() => calculateMatrixOp('add')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-800 rounded-xl text-xs font-bold">A + B</button>
                  <button onClick={() => calculateMatrixOp('sub')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-800 rounded-xl text-xs font-bold">A - B</button>
                  <button onClick={() => calculateMatrixOp('mult')} className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold shadow">A × B</button>
                  <button onClick={() => calculateMatrixOp('detA')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-800 rounded-xl text-xs font-bold">det(A)</button>
                  <button onClick={() => calculateMatrixOp('transA')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-800 rounded-xl text-xs font-bold">Aᵀ</button>
                  <button onClick={() => calculateMatrixOp('invA')} className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-800 rounded-xl text-xs font-bold">A⁻¹</button>
                </div>
              </div>

              {/* Matrices Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Matrix A */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold text-purple-400 flex items-center justify-between">
                    <span>المصفوفة A ({matrixDim}×{matrixDim})</span>
                  </h3>
                  <div className={`grid gap-2 ${matrixDim === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {matA.map((row, r) =>
                      row.map((cell, c) => (
                        <input
                          key={`A-${r}-${c}`}
                          type="number"
                          value={cell}
                          onChange={(e) => handleMatrixCellChange('A', r, c, e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-center text-sm font-mono font-bold text-white focus:outline-none focus:border-purple-500 dir-ltr"
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Matrix B */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <h3 className="text-xs font-bold text-purple-400 flex items-center justify-between">
                    <span>المصفوفة B ({matrixDim}×{matrixDim})</span>
                  </h3>
                  <div className={`grid gap-2 ${matrixDim === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {matB.map((row, r) =>
                      row.map((cell, c) => (
                        <input
                          key={`B-${r}-${c}`}
                          type="number"
                          value={cell}
                          onChange={(e) => handleMatrixCellChange('B', r, c, e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-center text-sm font-mono font-bold text-white focus:outline-none focus:border-purple-500 dir-ltr"
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Matrix Result Box */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-emerald-400 mb-3">نتيجة العملية:</h3>
                    {matrixRes ? (
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-300 block">{matrixRes.title}</span>
                        {matrixRes.mat && (
                          <div className={`grid gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800 ${matrixRes.mat.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                            {matrixRes.mat.map((row, r) =>
                              row.map((cell, c) => (
                                <div key={`R-${r}-${c}`} className="p-2 bg-slate-950 rounded-lg text-center font-mono font-extrabold text-emerald-300 text-sm dir-ltr">
                                  {cell}
                                </div>
                              ))
                            )}
                          </div>
                        )}
                        {matrixRes.val !== undefined && (
                          <div className="p-4 bg-slate-900 rounded-xl text-center font-mono font-black text-amber-400 text-2xl dir-ltr">
                            {matrixRes.val}
                          </div>
                        )}
                        {matrixRes.str && (
                          <div className="p-3 bg-rose-950/50 text-rose-300 rounded-xl text-xs text-center border border-rose-800/50">
                            {matrixRes.str}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-slate-500 text-xs py-8">
                        اختر عملية من الأعلى (A+B, A×B, det(A) ...) لعرض النتيجة المباشرة.
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ==================== TAB 5: STATISTICS CALCULATOR ==================== */}
          {activeTab === 'statistics' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Col: Data Input */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-xs font-bold text-amber-400 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  إدخال العينة الإحصائية
                </h3>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    أدخل الأعداد مفصولة بفاصلة (,) أو مسافة:
                  </label>
                  <textarea
                    rows={6}
                    value={statsInput}
                    onChange={(e) => setStatsInput(e.target.value)}
                    placeholder="مثال: 12, 15, 18, 22, 25, 30"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-amber-300 focus:outline-none focus:border-amber-500 dir-ltr"
                  />
                </div>

                <button
                  onClick={calculateStats}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
                >
                  حساب المقاييس الإحصائية
                </button>
              </div>

              {/* Right 2 Cols: Stats Output Grid */}
              <div className="lg:col-span-2 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-xs font-bold text-slate-200">النتائج الإحصائية ومقاييس التشتت والنـزعة المركزية</h3>

                {statsResult ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">عدد البيانات (n):</span>
                      <span className="text-lg font-bold text-white dir-ltr block">{statsResult.n}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">المتوسط الحسابي (x̄):</span>
                      <span className="text-lg font-bold text-amber-400 dir-ltr block">{statsResult.mean}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">الوسيط (Median):</span>
                      <span className="text-lg font-bold text-emerald-400 dir-ltr block">{statsResult.median}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">المنوال (Mode):</span>
                      <span className="text-base font-bold text-purple-400 dir-ltr block truncate">{statsResult.mode}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">المجموع (∑x):</span>
                      <span className="text-lg font-bold text-sky-400 dir-ltr block">{statsResult.sum}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">المدى (Range):</span>
                      <span className="text-lg font-bold text-rose-400 dir-ltr block">{statsResult.range}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">الانحراف المعياري (σ):</span>
                      <span className="text-lg font-bold text-indigo-300 dir-ltr block">{statsResult.stdPop}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">الانحراف المعياري للعينة (s):</span>
                      <span className="text-lg font-bold text-teal-300 dir-ltr block">{statsResult.stdSample}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 text-[10px] block">التفاوت مجتمعي (σ²):</span>
                      <span className="text-lg font-bold text-slate-200 dir-ltr block">{statsResult.varPop}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 text-xs py-12">
                    أدخل الأعداد وانقر على "حساب المقاييس الإحصائية" للتحليل الفوري.
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1.5 text-[11px]">
            <Binary className="w-4 h-4 text-amber-400" />
            حاسبة رسم وتقييم رياضية شاملة ومطابقة لأفضل المعايير التعليمية.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition cursor-pointer font-bold"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
