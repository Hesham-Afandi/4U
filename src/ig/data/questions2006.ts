import { IgQuestion } from '../types';

export const QUESTIONS_2006: IgQuestion[] = [
  // MAY/JUNE 2006 - PAPER 1 (Core 0580/01)
  {
    id: 'IG-2006-MJ-01-01',
    code: '0580/01/M/J/06 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Directed Numbers & Temperature',
    topicAr: 'الأعداد الموجهة ودرجات الحرارة',
    questionEn: 'At midday the temperature at a weather station in Antarctica was -15°C. By midnight the temperature had fallen by 12°C. What was the temperature at midnight?',
    questionAr: 'كانت درجة الحرارة في منتصف النهار في محطة طقس بالقارة القطبية الجنوبية -15°م. وبحلول منتصف الليل انخفضت درجة الحرارة بمقدار 12°م. ما هي درجة الحرارة عند منتصف الليل؟',
    options: [
      { id: 'A', textEn: '-27°C', textAr: '-27°م' },
      { id: 'B', textEn: '-3°C', textAr: '-3°م' },
      { id: 'C', textEn: '27°C', textAr: '27°م' },
      { id: 'D', textEn: '3°C', textAr: '3°م' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Midnight temperature = -15 - 12 = -27°C.',
    explanationAr: 'درجة الحرارة في منتصف الليل = -15 - 12 = -27°م.',
    solutionStepsEn: ['Step 1: Start at -15°C.', 'Step 2: Fall by 12°C => -15 - 12 = -27°C.'],
    solutionStepsAr: ['الخطوة 1: البدء عند -15°م.', 'الخطوة 2: الانخفاض بمقدار 12 => -15 - 12 = -27°م.'],
    marks: 1
  },
  {
    id: 'IG-2006-MJ-01-05',
    code: '0580/01/M/J/06 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Cube Volume & Edge Length',
    topicAr: 'حجم المكعب وطول الحرف',
    questionEn: 'A cube has edge length l metres and volume 20 cubic metres. Calculate the value of l.',
    questionAr: 'مكعب طول ضلعه l متر وحجمه 20 متراً مكعباً. احسب قيمة l.',
    options: [
      { id: 'A', textEn: '2.71 m', textAr: '2.71 متر' },
      { id: 'B', textEn: '4.47 m', textAr: '4.47 متر' },
      { id: 'C', textEn: '6.67 m', textAr: '6.67 متر' },
      { id: 'D', textEn: '3.14 m', textAr: '3.14 متر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Volume V = l³ = 20 => l = ∛20 ≈ 2.7144 ≈ 2.71 m.',
    explanationAr: 'الحجم = l³ = 20 => إذن l = الجذر التكعيبي للعدد 20 ≈ 2.71 متراً.',
    solutionStepsEn: ['Step 1: l³ = 20.', 'Step 2: l = ∛20 = 2.71 m.'],
    solutionStepsAr: ['الخطوة 1: l³ = 20.', 'الخطوة 2: l = ∛20 = 2.71 متر.'],
    marks: 2
  },
  {
    id: 'IG-2006-MJ-01-13',
    code: '0580/01/M/J/06 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Simultaneous Equations',
    topicAr: 'المعادلات الآنية',
    questionEn: 'Solve the simultaneous equations: 3x - y = 18 and 2x + y = 7.',
    questionAr: 'حل المعادلتين آنياً: 3x - y = 18 و 2x + y = 7.',
    options: [
      { id: 'A', textEn: 'x = 5, y = -3', textAr: 'x = 5, y = -3' },
      { id: 'B', textEn: 'x = 4, y = -6', textAr: 'x = 4, y = -6' },
      { id: 'C', textEn: 'x = 5, y = 3', textAr: 'x = 5, y = 3' },
      { id: 'D', textEn: 'x = 6, y = 0', textAr: 'x = 6, y = 0' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Add the equations: (3x - y) + (2x + y) = 18 + 7 => 5x = 25 => x = 5. Substitute x = 5 into 2(5) + y = 7 => 10 + y = 7 => y = -3.',
    explanationAr: 'بجمع المعادلتين نجد: 5x = 25 ومنه x = 5. بالتعويض في المعادلة الثانية: 2(5) + y = 7 ومنه y = -3.',
    solutionStepsEn: ['Step 1: Add equations: 5x = 25 => x = 5.', 'Step 2: Substitute: 10 + y = 7 => y = -3.'],
    solutionStepsAr: ['الخطوة 1: جمع المعادلتين: 5x = 25 => x = 5.', 'الخطوة 2: التعويض: 10 + y = 7 => y = -3.'],
    marks: 3
  },
  {
    id: 'IG-2006-MJ-01-17',
    code: '0580/01/M/J/06 Q17',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio & Circle Perimeter',
    topicAr: 'النسبة ومحيط الدائرة',
    questionEn: 'A football pitch is 90 metres long. The ratio of length to width is 5 : 3. (a) Calculate the width. (b) The centre circle has a circumference of 57.5 metres. Calculate its radius.',
    questionAr: 'ملعب كرة قدم طوله 90 متراً. النسبة بين الطول والعرض هي 5 : 3. (أ) احسب عرض الملعب. (ب) دائرة المنتصف في الملعب محيطها 57.5 متراً. احسب نصف قطرها.',
    diagramTitle: 'Football Pitch / ملعب كرة القدم',
    diagramSvg: `<svg viewBox="0 0 240 140" class="w-60 h-36 mx-auto text-slate-800 dark:text-slate-100">
      <rect x="20" y="15" width="200" height="110" fill="none" stroke="currentColor" stroke-width="2" />
      <line x1="120" y1="15" x2="120" y2="125" stroke="currentColor" stroke-width="1.5" />
      <circle cx="120" cy="70" r="22" fill="none" stroke="#0d9488" stroke-width="2" />
      <text x="120" y="137" font-size="10" text-anchor="middle" fill="#0d9488">Length = 90 m (5 : 3)</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 54 m, (b) 9.15 m', textAr: '(أ) 54 متراً، (ب) 9.15 متراً' },
      { id: 'B', textEn: '(a) 60 m, (b) 9.15 m', textAr: '(أ) 60 متراً، (ب) 9.15 متراً' },
      { id: 'C', textEn: '(a) 54 m, (b) 18.3 m', textAr: '(أ) 54 متراً، (ب) 18.3 متراً' },
      { id: 'D', textEn: '(a) 48 m, (b) 8.50 m', textAr: '(أ) 48 متراً، (ب) 8.50 متراً' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Length/Width = 5/3 => 90/Width = 5/3 => Width = (90 × 3)/5 = 54 m. (b) Circumference C = 2πr = 57.5 => r = 57.5 / (2π) ≈ 9.15 m.',
    explanationAr: '(أ) العرض = (90 × 3) ÷ 5 = 54 متراً. (ب) المحيط C = 2πr = 57.5 ومنه r = 57.5 ÷ (2π) = 9.15 متراً.',
    solutionStepsEn: ['(a) Width = 90 × 3 / 5 = 54 m.', '(b) r = 57.5 / (2π) = 9.15 m.'],
    solutionStepsAr: ['(أ) العرض = 90 × 3 ÷ 5 = 54 متراً.', '(ب) نصف القطر = 57.5 ÷ (2π) = 9.15 متراً.'],
    marks: 4
  },

  // MAY/JUNE 2006 - PAPER 2 (Extended 0580/02)
  {
    id: 'IG-2006-MJ-02-04',
    code: '0580/02/M/J/06 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Trigonometric Identity Calculation',
    topicAr: 'حساب المتطابقات المثلثية',
    questionEn: 'Use your calculator to evaluate: 2 tan(30°) / [1 - tan²(30°)]',
    questionAr: 'استخدم الآلة الحاسبة لحساب قيمة المقدار: 2 tan(30°) / [1 - tan²(30°)]',
    options: [
      { id: 'A', textEn: '1.732 (or √3)', textAr: '1.732 (أو √3)' },
      { id: 'B', textEn: '0.577 (or √3/3)', textAr: '0.577 (أو √3/3)' },
      { id: 'C', textEn: '1.000', textAr: '1.000' },
      { id: 'D', textEn: '2.000', textAr: '2.000' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Using the identity tan(2θ) = 2 tan(θ)/(1 - tan²θ), with θ = 30°, the expression equals tan(60°) = √3 ≈ 1.732.',
    explanationAr: 'باستخدام متطابقة ضعف الزاوية tan(2θ) = 2 tan(θ)/(1 - tan²θ) عند θ = 30° فإن المقدار يساوي tan(60°) = √3 = 1.732.',
    solutionStepsEn: ['Step 1: tan(30°) = √3/3.', 'Step 2: 2(√3/3) / [1 - 1/3] = (2√3/3) / (2/3) = √3 = 1.732.'],
    solutionStepsAr: ['الخطوة 1: tan(30°) = √3/3.', 'الخطوة 2: التبسيط يعطي tan(60°) = √3 = 1.732.'],
    marks: 2
  },
  {
    id: 'IG-2006-MJ-02-13',
    code: '0580/02/M/J/06 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebraic Equation with Fractions',
    topicAr: 'المعادلات الجبرية الكسرية',
    questionEn: 'Solve the equation: (x - 3)/2 = (2x + 5)/4',
    questionAr: 'حل المعادلة: (x - 3)/2 = (2x + 5)/4',
    options: [
      { id: 'A', textEn: 'No solution (or contradiction)', textAr: 'لا يوجد حل (تناقض رياضي)' },
      { id: 'B', textEn: 'x = 11', textAr: 'x = 11' },
      { id: 'C', textEn: 'x = 5.5', textAr: 'x = 5.5' },
      { id: 'D', textEn: 'x = -1', textAr: 'x = -1' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply both sides by 4: 2(x - 3) = 2x + 5 => 2x - 6 = 2x + 5 => -6 = 5, which is impossible. Thus there is no solution (parallel lines).',
    explanationAr: 'بضرب الطرفين في 4 نجد: 2(x - 3) = 2x + 5 ومنه 2x - 6 = 2x + 5 أي -6 = 5 وهذا مستحيل، إذن لا يوجد حل.',
    solutionStepsEn: ['Step 1: Multiply by 4 => 2(x - 3) = 2x + 5.', 'Step 2: 2x - 6 = 2x + 5 => -6 = 5 (No solution).'],
    solutionStepsAr: ['الخطوة 1: الضرب في 4 => 2(x - 3) = 2x + 5.', 'الخطوة 2: 2x - 6 = 2x + 5 => مستحيل (لا يوجد حل).'],
    marks: 3
  },
  {
    id: 'IG-2006-MJ-02-18',
    code: '0580/02/M/J/06 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Circle Geometry & Parallel Lines',
    topicAr: 'هندسة الدائرة والخطوط المتوازية',
    questionEn: 'AD is a diameter of circle ABCDE. Angle BAC = 22° and angle ADC = 60°. AB is parallel to ED. Find the values of w, x, y and z.',
    questionAr: 'AD هو قطر للدائرة ABCDE. الزاوية BAC = 22° والزاوية ADC = 60°. AB يوازي ED. أوجد قيم w, x, y, z.',
    options: [
      { id: 'A', textEn: 'w = 68°, x = 30°, y = 120°, z = 38°', textAr: 'w = 68°, x = 30°, y = 120°, z = 38°' },
      { id: 'B', textEn: 'w = 60°, x = 30°, y = 110°, z = 40°', textAr: 'w = 60°, x = 30°, y = 110°, z = 40°' },
      { id: 'C', textEn: 'w = 68°, x = 45°, y = 120°, z = 38°', textAr: 'w = 68°, x = 45°, y = 120°, z = 38°' },
      { id: 'D', textEn: 'w = 70°, x = 30°, y = 115°, z = 38°', textAr: 'w = 70°, x = 30°, y = 115°, z = 38°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Angle ACD in semicircle is 90°, so w = 90 - 22 = 68°. Using cyclic quadrilaterals and alternate angles with AB || ED gives x = 30°, y = 120°, z = 38°.',
    explanationAr: 'الزاوية المحيطية في نصف دائرة ACD = 90°، إذن w = 90 - 22 = 68°. وباستخدام خواص الرباعي الدائري والتوازي نجد x = 30°, y = 120°, z = 38°.',
    solutionStepsEn: ['Step 1: Angle ACD = 90° => w = 68°.', 'Step 2: Cyclic quadrilaterals and AB || ED => x = 30°, y = 120°, z = 38°.'],
    solutionStepsAr: ['الخطوة 1: الزاوية ACD = 90° => w = 68°.', 'الخطوة 2: بالتوازي والرباعي الدائري => x = 30°, y = 120°, z = 38°.'],
    marks: 4
  },

  // OCT/NOV 2006 - PAPER 1 (Core 0580/01)
  {
    id: 'IG-2006-ON-01-08',
    code: '0580/01/O/N/06 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Algebraic Simplification',
    topicAr: 'تبسيط المقادير الجبرية',
    questionEn: 'Simplify: 3x²y × x⁴y²',
    questionAr: 'بسّط المقدار: 3x²y × x⁴y²',
    options: [
      { id: 'A', textEn: '3x⁶y³', textAr: '3x⁶y³' },
      { id: 'B', textEn: '3x⁸y²', textAr: '3x⁸y²' },
      { id: 'C', textEn: '3x⁶y²', textAr: '3x⁶y²' },
      { id: 'D', textEn: 'x⁶y³', textAr: 'x⁶y³' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply coefficients and add exponents of like variables: 3 × (x² × x⁴) × (y × y²) = 3x⁶y³.',
    explanationAr: 'بجمع أسس المتغيرات المتشابهة: 3 × (x² × x⁴) × (y × y²) = 3x⁶y³.',
    solutionStepsEn: ['Step 1: x² × x⁴ = x⁶.', 'Step 2: y × y² = y³ => 3x⁶y³.'],
    solutionStepsAr: ['الخطوة 1: جمع أسس x => x⁶.', 'الخطوة 2: جمع أسس y => y³ => الناتج 3x⁶y³.'],
    marks: 2
  },
  {
    id: 'IG-2006-ON-01-11',
    code: '0580/01/O/N/06 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Linear Equation with Both Sides x',
    topicAr: 'معادلة خطية بمتغير في الطرفين',
    questionEn: 'Solve the equation: 5x - 2 = 10x - 8',
    questionAr: 'حل المعادلة: 5x - 2 = 10x - 8',
    options: [
      { id: 'A', textEn: 'x = 1.2', textAr: 'x = 1.2' },
      { id: 'B', textEn: 'x = 2', textAr: 'x = 2' },
      { id: 'C', textEn: 'x = -1.2', textAr: 'x = -1.2' },
      { id: 'D', textEn: 'x = 1.5', textAr: 'x = 1.5' }
    ],
    correctAnswer: 'A',
    explanationEn: '10x - 5x = -2 + 8 => 5x = 6 => x = 6/5 = 1.2.',
    explanationAr: 'بنقل الحدود: 10x - 5x = -2 + 8 => 5x = 6 => x = 1.2.',
    solutionStepsEn: ['Step 1: 10x - 5x = 8 - 2.', 'Step 2: 5x = 6 => x = 1.2.'],
    solutionStepsAr: ['الخطوة 1: تجميع حدود x في طرف => 5x = 6.', 'الخطوة 2: القسمة على 5 => x = 1.2.'],
    marks: 2
  },

  // OCT/NOV 2006 - PAPER 2 (Extended 0580/02)
  {
    id: 'IG-2006-ON-02-12',
    code: '0580/02/O/N/06 Q12',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Circle Tangents & Angles',
    topicAr: 'مماسات الدائرة والزوايا',
    questionEn: 'PT and QR are parallel. TP and TR are tangents to circle PQRS. Angle PTR = angle RPQ = 38°. (a) What is the special name for triangle TPR? (b) Calculate angle PQR and angle PSR.',
    questionAr: 'PT و QR متوازيان. TP و TR مماسان للدائرة PQRS. الزاوية PTR = الزاوية RPQ = 38°. (أ) ما الاسم الخاص للمثلث TPR؟ (ب) احسب قياس الزاوية PQR والزاوية PSR.',
    diagramTitle: 'Tangents & Circle PQRS / المماسات والدائرة',
    diagramSvg: `<svg viewBox="0 0 240 140" class="w-60 h-36 mx-auto text-slate-800 dark:text-slate-100">
      <circle cx="120" cy="85" r="45" fill="none" stroke="currentColor" stroke-width="2" />
      <polygon points="120,15 75,65 165,65" fill="none" stroke="#0d9488" stroke-width="2" />
      <text x="120" y="10" font-size="11" font-weight="bold" fill="currentColor">T</text>
      <text x="65" y="65" font-size="11" font-weight="bold" fill="currentColor">P</text>
      <text x="175" y="65" font-size="11" font-weight="bold" fill="currentColor">R</text>
      <text x="120" y="32" font-size="10" fill="#0d9488">38°</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) Isosceles, (b) ∠PQR = 71°, ∠PSR = 109°', textAr: '(أ) متساوي الساقين، (ب) ∠PQR = 71°، ∠PSR = 109°' },
      { id: 'B', textEn: '(a) Equilateral, (b) ∠PQR = 60°, ∠PSR = 120°', textAr: '(أ) متساوي الأضلاع، (ب) ∠PQR = 60°، ∠PSR = 120°' },
      { id: 'C', textEn: '(a) Isosceles, (b) ∠PQR = 68°, ∠PSR = 112°', textAr: '(أ) متساوي الساقين، (ب) ∠PQR = 68°، ∠PSR = 112°' },
      { id: 'D', textEn: '(a) Scalene, (b) ∠PQR = 75°, ∠PSR = 105°', textAr: '(أ) مختلف الأضلاع، (ب) ∠PQR = 75°، ∠PSR = 105°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Tangents from an external point are equal (TP = TR), so triangle TPR is isosceles. (b) Base angles of TPR = (180 - 38)/2 = 71°. By alternate segment theorem / parallel lines, ∠PQR = 71° and opposite angle in cyclic quadrilateral ∠PSR = 180 - 71 = 109°.',
    explanationAr: '(أ) المماسان من نقطة خارجية متساويان (TP = TR) فالمثلث متساوي الساقين. (ب) زاوية القاعدة = (180 - 38)/2 = 71°. وبخواص الدائرة والرباعي الدائري نجد ∠PQR = 71° و ∠PSR = 109°.',
    solutionStepsEn: ['(a) TP = TR => Isosceles.', '(b) Base angle = 71° => ∠PQR = 71° and ∠PSR = 180 - 71 = 109°.'],
    solutionStepsAr: ['(أ) TP = TR => متساوي الساقين.', '(ب) زاوية القاعدة 71° => ∠PQR = 71° و ∠PSR = 109°.'],
    marks: 3
  },
  {
    id: 'IG-2006-ON-02-21',
    code: '0580/02/O/N/06 Q21',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2006,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Intersection of Two Lines',
    topicAr: 'تقاطع خطين مستقيمين',
    questionEn: 'Line AC has equation 2x + 3y = 17 and line AB has equation 4x - y = 6. They intersect at B(1, -2) and C(4, 3). Find the coordinates of point A.',
    questionAr: 'الخط AC معادلته 2x + 3y = 17 والخط AB معادلته 4x - y = 6. يتقاطعان عند B(1, -2) و C(4, 3). أوجد إحداثيات النقطة A.',
    options: [
      { id: 'A', textEn: 'A(2.5, 4)', textAr: 'A(2.5, 4)' },
      { id: 'B', textEn: 'A(3, 6)', textAr: 'A(3, 6)' },
      { id: 'C', textEn: 'A(2, 4)', textAr: 'A(2, 4)' },
      { id: 'D', textEn: 'A(3.5, 3)', textAr: 'A(3.5, 3)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Point A is the intersection of 2x + 3y = 17 and 4x - y = 6. From second equation y = 4x - 6. Substitute into first: 2x + 3(4x - 6) = 17 => 14x - 18 = 17 => 14x = 35 => x = 2.5. Then y = 4(2.5) - 6 = 4. So A(2.5, 4).',
    explanationAr: 'النقطة A هي نقطة تقاطع الخطين 2x + 3y = 17 و 4x - y = 6. بالتعويض بقيمة y = 4x - 6 في المعادلة الأولى نجد x = 2.5 ومنها y = 4.',
    solutionStepsEn: ['Step 1: y = 4x - 6.', 'Step 2: 2x + 3(4x - 6) = 17 => 14x = 35 => x = 2.5.', 'Step 3: y = 10 - 6 = 4 => A(2.5, 4).'],
    solutionStepsAr: ['الخطوة 1: من المعادلة الثانية y = 4x - 6.', 'الخطوة 2: التعويض 14x = 35 => x = 2.5.', 'الخطوة 3: y = 4 => النقطة A(2.5, 4).'],
    marks: 3
  }
];
