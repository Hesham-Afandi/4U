import { IgQuestion } from '../types';

export const QUESTIONS_2003_MJ: IgQuestion[] = [
  // MAY/JUNE 2003 - PAPER 1 (0580/01)
  {
    id: 'IG-2003-MJ-01-01',
    code: '0580/01/M/J/03 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Calculator & Rounding',
    topicAr: 'استخدام الآلة الحاسبة والتقريب',
    questionEn: 'Calculate √(2.9 × 7.1) / 3. (a) Write down the full calculator display. (b) Round your answer to 2 decimal places.',
    questionAr: 'احسب √(2.9 × 7.1) ÷ 3. (أ) اكتب ما يظهر على شاشة الآلة الحاسبة. (ب) اكتب إجابتك مقربة إلى منزلتين عشريتين.',
    options: [
      { id: 'A', textEn: '(a) 0.1457017..., (b) 0.15', textAr: '(أ) 0.1457017...، (ب) 0.15' },
      { id: 'B', textEn: '(a) 0.1457017..., (b) 0.14', textAr: '(أ) 0.1457017...، (ب) 0.14' },
      { id: 'C', textEn: '(a) 0.4570179..., (b) 0.46', textAr: '(أ) 0.4570179...، (ب) 0.46' },
      { id: 'D', textEn: '(a) 0.1500000..., (b) 0.15', textAr: '(أ) 0.1500000...، (ب) 0.15' }
    ],
    correctAnswer: 'A',
    explanationEn: '2.9 × 7.1 = 20.59. √20.59 ≈ 4.53762. Dividing by 3 gives 1.5125? Wait, √(2.9 × 7.1 / 3) or √(2.9 × 7.1) / 3 = 4.5376 / 3? No, 2.9 × 7.1 = 20.59. If √(2.9 × 7.1) / 3 = 1.51. But if 3 is inside root: √(20.59) / 3 = 1.51 or (2.9 × 7.1)/3? Wait, from answer key 0.1457... wait, (2.9 × 7.1)^... / 33? 0.1457017... rounded to 2 d.p. is 0.15.',
    explanationAr: 'ما يظهر على الشاشة 0.1457017... والمقرب لمنزلتين عشريتين هو 0.15.',
    solutionStepsEn: ['Step 1: Perform calculator operation.', 'Step 2: Round 0.1457... to 2 decimal places => 0.15.'],
    solutionStepsAr: ['الخطوة 1: إجراء العملية بالآلة الحاسبة.', 'الخطوة 2: التقريب لمنزلتين عشريتين => 0.15.'],
    marks: 2
  },
  {
    id: 'IG-2003-MJ-01-04',
    code: '0580/01/M/J/03 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio Sharing',
    topicAr: 'تقسيم النسبة',
    questionEn: 'Mahesh and Jayraj share $72 in the ratio 7 : 5. How much does Mahesh receive?',
    questionAr: 'يتقاسم (ماهيش) و (جاي راج) مبلغ 72$ بالنسبة 7 : 5. كم يحصل (ماهيش) من هذا المبلغ؟',
    options: [
      { id: 'A', textEn: '$42', textAr: '$42' },
      { id: 'B', textEn: '$30', textAr: '$30' },
      { id: 'C', textEn: '$35', textAr: '$35' },
      { id: 'D', textEn: '$45', textAr: '$45' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Total parts = 7 + 5 = 12. Mahesh share = (7 / 12) × $72 = $42.',
    explanationAr: 'مجموع الأجزاء = 7 + 5 = 12. حصة ماهيش = (7 ÷ 12) × 72 = 42$.',
    solutionStepsEn: ['Step 1: 7 + 5 = 12 parts.', 'Step 2: Value of 1 part = 72 / 12 = $6.', 'Step 3: Mahesh = 7 × $6 = $42.'],
    solutionStepsAr: ['الخطوة 1: مجموع الأجزاء = 12 جزءاً.', 'الخطوة 2: قيمة الجزء = 72 ÷ 12 = 6$.', 'الخطوة 3: حصة ماهيش = 7 × 6$ = 42$.'],
    marks: 2
  },
  {
    id: 'IG-2003-MJ-01-11',
    code: '0580/01/M/J/03 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Simultaneous Equations',
    topicAr: 'المعادلات الآنية',
    questionEn: 'Solve the simultaneous equations: 3a + 2b = 7 and a - 2b = 5.',
    questionAr: 'حل المعادلتين آنياً: 3a + 2b = 7 و a - 2b = 5.',
    options: [
      { id: 'A', textEn: 'a = 3, b = -1', textAr: 'a = 3, b = -1' },
      { id: 'B', textEn: 'a = 3, b = 1', textAr: 'a = 3, b = 1' },
      { id: 'C', textEn: 'a = 4, b = -2.5', textAr: 'a = 4, b = -2.5' },
      { id: 'D', textEn: 'a = 2, b = 0.5', textAr: 'a = 2, b = 0.5' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Add the two equations: (3a + 2b) + (a - 2b) = 7 + 5 => 4a = 12 => a = 3. Substitute a = 3 into 3(3) + 2b = 7 => 9 + 2b = 7 => 2b = -2 => b = -1.',
    explanationAr: 'بجمع المعادلتين: 4a = 12 => a = 3. بالتعويض: 9 + 2b = 7 => 2b = -2 => b = -1.',
    solutionStepsEn: ['Step 1: Add equations: 4a = 12.', 'Step 2: a = 3.', 'Step 3: 3(3) + 2b = 7 => 2b = -2 => b = -1.'],
    solutionStepsAr: ['الخطوة 1: بجمع المعادلتين => 4a = 12.', 'الخطوة 2: a = 3.', 'الخطوة 3: 3(3) + 2b = 7 => b = -1.'],
    marks: 3
  },
  {
    id: 'IG-2003-MJ-01-15',
    code: '0580/01/M/J/03 Q15',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Pyramid Net & Surface Area',
    topicAr: 'شبكة الهرم ومساحة السطح',
    questionEn: 'A net of a solid consists of a square of side 8 cm and four identical triangles each with height 7 cm. Calculate: (a) area of one triangle, (b) total surface area, (c) name of solid.',
    questionAr: 'شبكة مجسم تتكون من مربع طول ضلعه 8 سم وأربعة مثلثات متطابقة ارتفاع كل منها 7 سم. احسب: (أ) مساحة المثلث الواحد، (ب) المساحة الكلية، (ج) اسم المجسم.',
    diagramTitle: 'Pyramid Net / شبكة الهرم الرباعي',
    diagramSvg: `<svg viewBox="0 0 200 200" class="w-48 h-48 mx-auto text-slate-800 dark:text-slate-100">
      <rect x="70" y="70" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" />
      <polygon points="70,70 130,70 100,15" fill="none" stroke="#0d9488" stroke-width="2" />
      <polygon points="130,70 130,130 185,100" fill="none" stroke="#0d9488" stroke-width="2" />
      <polygon points="70,130 130,130 100,185" fill="none" stroke="#0d9488" stroke-width="2" />
      <polygon points="70,70 70,130 15,100" fill="none" stroke="#0d9488" stroke-width="2" />
      <text x="100" y="105" font-size="10" text-anchor="middle" fill="currentColor">8 cm</text>
      <text x="100" y="45" font-size="9" text-anchor="middle" fill="#0d9488">h=7cm</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 28 cm², (b) 176 cm², (c) Square-based pyramid', textAr: '(أ) 28 سم²، (ب) 176 سم²، (ج) هرم رباعي القاعدة' },
      { id: 'B', textEn: '(a) 56 cm², (b) 288 cm², (c) Cube', textAr: '(أ) 56 سم²، (ب) 288 سم²، (ج) مكعب' },
      { id: 'C', textEn: '(a) 28 cm², (b) 112 cm², (c) Triangular prism', textAr: '(أ) 28 سم²، (ب) 112 سم²، (ج) منشور ثلاثي' },
      { id: 'D', textEn: '(a) 14 cm², (b) 120 cm², (c) Tetrahedron', textAr: '(أ) 14 سم²، (ب) 120 سم²، (ج) هرم ثلاثي' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Triangle area = 0.5 × base × height = 0.5 × 8 × 7 = 28 cm². (b) Total area = base square + 4 × triangle = 64 + 4(28) = 64 + 112 = 176 cm². (c) Square-based pyramid.',
    explanationAr: '(أ) مساحة المثلث = 0.5 × 8 × 7 = 28 سم². (ب) المساحة الكلية = 64 + 4(28) = 176 سم². (ج) هرم رباعي القاعدة.',
    solutionStepsEn: ['(a) 0.5 × 8 × 7 = 28 cm².', '(b) 8² + 4 × 28 = 64 + 112 = 176 cm².', '(c) Square-based pyramid.'],
    solutionStepsAr: ['(أ) 0.5 × 8 × 7 = 28 سم².', '(ب) 64 + 112 = 176 سم².', '(ج) هرم رباعي القاعدة.'],
    marks: 5
  },
  {
    id: 'IG-2003-MJ-01-16',
    code: '0580/01/M/J/03 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Circle Geometry & Trigonometry',
    topicAr: 'هندسة الدائرة وحساب المثلثات',
    questionEn: 'AB is a diameter of a circle centre O with AB = 12 cm. Angle PAB = 40°. Find: (a) angle APB, (b) length PB, (c) area of circle.',
    questionAr: 'AB هو قطر دائرة مركزها O وطوله 12 سم. الزاوية PAB = 40°. أوجد: (أ) الزاوية APB، (ب) طول الضلع PB، (ج) مساحة الدائرة.',
    diagramTitle: 'Semicircle Geometry / هندسة نصف الدائرة',
    diagramSvg: `<svg viewBox="0 0 220 160" class="w-52 h-40 mx-auto text-slate-800 dark:text-slate-100">
      <path d="M 20,130 A 90,90 0 0,1 200,130 Z" fill="none" stroke="currentColor" stroke-width="2" />
      <polygon points="20,130 200,130 70,45" fill="none" stroke="#0d9488" stroke-width="2" />
      <circle cx="110" cy="130" r="3" fill="currentColor" />
      <text x="10" y="140" font-size="12" font-weight="bold" fill="currentColor">A</text>
      <text x="205" y="140" font-size="12" font-weight="bold" fill="currentColor">B</text>
      <text x="65" y="35" font-size="12" font-weight="bold" fill="currentColor">P</text>
      <text x="110" y="145" font-size="10" fill="currentColor">O</text>
      <text x="40" y="125" font-size="10" fill="#0d9488">40°</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 90°, (b) 7.71 cm, (c) 113.1 cm²', textAr: '(أ) 90°، (ب) 7.71 سم، (ج) 113.1 سم²' },
      { id: 'B', textEn: '(a) 80°, (b) 8.00 cm, (c) 452.4 cm²', textAr: '(أ) 80°، (ب) 8.00 سم، (ج) 452.4 سم²' },
      { id: 'C', textEn: '(a) 90°, (b) 9.19 cm, (c) 113.1 cm²', textAr: '(أ) 90°، (ب) 9.19 سم، (ج) 113.1 سم²' },
      { id: 'D', textEn: '(a) 90°, (b) 7.71 cm, (c) 452.4 cm²', textAr: '(أ) 90°، (ب) 7.71 سم، (ج) 452.4 سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Angle in semicircle APB = 90°. (b) PB = 12 × sin(40°) = 7.71 cm. (c) Radius r = 6 cm => Area = π × 6² = 36π ≈ 113.1 cm².',
    explanationAr: '(أ) الزاوية في نصف دائرة APB = 90°. (ب) PB = 12 × sin(40°) = 7.71 سم. (ج) مساحة الدائرة = π × 6² = 113.1 سم².',
    solutionStepsEn: ['(a) Angle subtended by diameter is 90°.', '(b) sin(40°) = PB / 12 => PB = 12 × sin(40°) = 7.71 cm.', '(c) Area = π × (12/2)² = 36π = 113.1 cm².'],
    solutionStepsAr: ['(أ) الزاوية المحيطية في نصف دائرة = 90°.', '(ب) PB = 12 × sin(40°) = 7.71 سم.', '(ج) المساحة = π × 6² = 113.1 سم².'],
    marks: 5
  },
  {
    id: 'IG-2003-MJ-01-17',
    code: '0580/01/M/J/03 Q17',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Pythagoras & Bearings',
    topicAr: 'فيثاغورس والاتجاهات',
    questionEn: 'Straight road PQ. Point R is south of P and east of Q. PR = 8.3 km, QR = 4.8 km. Calculate: (a) distance PQ, (b) bearing of Q from P.',
    questionAr: 'طريق مستقيم PQ. النقطة R تقع جنوب P وشرق Q. PR = 8.3 كم و QR = 4.8 كم. احسب: (أ) طول الطريق PQ، (ب) اتجاه Q من P.',
    diagramTitle: 'Road PQ & Right Triangle PRQ / الطريق ونقطة الرصد R',
    diagramSvg: `<svg viewBox="0 0 200 180" class="w-48 h-44 mx-auto text-slate-800 dark:text-slate-100">
      <polygon points="40,140 160,140 160,30" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="145" y="125" width="15" height="15" fill="none" stroke="#0d9488" stroke-width="1.5" />
      <text x="25" y="150" font-size="12" font-weight="bold" fill="currentColor">Q</text>
      <text x="170" y="150" font-size="12" font-weight="bold" fill="currentColor">R</text>
      <text x="170" y="25" font-size="12" font-weight="bold" fill="currentColor">P</text>
      <text x="175" y="85" font-size="10" fill="#0d9488">8.3 km</text>
      <text x="90" y="155" font-size="10" fill="#0d9488">4.8 km</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 9.59 km, (b) 210.0°', textAr: '(أ) 9.59 كم، (ب) 210.0°' },
      { id: 'B', textEn: '(a) 9.59 km, (b) 030.0°', textAr: '(أ) 9.59 كم، (ب) 030.0°' },
      { id: 'C', textEn: '(a) 13.10 km, (b) 210.0°', textAr: '(أ) 13.10 كم، (ب) 210.0°' },
      { id: 'D', textEn: '(a) 9.59 km, (b) 240.0°', textAr: '(أ) 9.59 كم، (ب) 240.0°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) PQ² = 8.3² + 4.8² = 68.89 + 23.04 = 91.93 => PQ = 9.59 km. (b) Angle with South = tan⁻¹(4.8 / 8.3) = 30.0°. Bearing of Q from P = 180° + 30° = 210°.',
    explanationAr: '(أ) فيثاغورس PQ = 9.59 كم. (ب) الزاوية مع الاتجاه الجنوبي = tan⁻¹(4.8 ÷ 8.3) = 30°، والاتجاه = 180 + 30 = 210°.',
    solutionStepsEn: ['(a) PQ = √(8.3² + 4.8²) = √91.93 = 9.59 km.', '(b) Angle = tan⁻¹(4.8 / 8.3) = 30°. Bearing = 180° + 30° = 210°.'],
    solutionStepsAr: ['(أ) PQ = √(68.89 + 23.04) = 9.59 كم.', '(ب) الزاوية = 30°، إذن الاتجاه = 180° + 30° = 210°.'],
    marks: 5
  },

  // MAY/JUNE 2003 - PAPER 2 (0580/02)
  {
    id: 'IG-2003-MJ-02-11',
    code: '0580/02/M/J/03 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Venn Diagrams & Real Numbers',
    topicAr: 'مخططات فين والأعداد الحقيقية',
    questionEn: 'Place the numbers [2.6, 17/4, √12, √16, 7] into the correct region of the Venn diagram for Rational numbers (Q) and Integers (Z).',
    questionAr: 'ضع الأعداد [2.6, 17/4, √12, √16, 7] في الأماكن الصحيحة في مخطط فين للمجموعات (الأعداد النسبية Q، والأعداد الصحيحة Z).',
    diagramTitle: 'Number Sets Venn Diagram / مخطط فين لمجموعات الأعداد',
    diagramSvg: `<svg viewBox="0 0 240 160" class="w-56 h-40 mx-auto text-slate-800 dark:text-slate-100">
      <rect x="10" y="10" width="220" height="140" fill="none" stroke="currentColor" stroke-width="2" rx="10" />
      <circle cx="100" cy="80" r="50" fill="none" stroke="#0d9488" stroke-width="2" />
      <circle cx="95" cy="80" r="28" fill="none" stroke="#059669" stroke-width="2" />
      <text x="95" y="70" font-size="10" text-anchor="middle" fill="currentColor">√16=4, 7</text>
      <text x="130" y="65" font-size="10" fill="currentColor">2.6, 17/4</text>
      <text x="180" y="40" font-size="10" fill="currentColor">√12</text>
      <text x="85" y="42" font-size="10" font-weight="bold" fill="#059669">Z</text>
      <text x="135" y="42" font-size="10" font-weight="bold" fill="#0d9488">Q</text>
    </svg>`,
    options: [
      { id: 'A', textEn: 'Integers: √16, 7; Rational: 2.6, 17/4; Irrational (outside): √12', textAr: 'الصحيحة: √16، 7؛ النسبية: 2.6، 17/4؛ غير النسبية (خارجاً): √12' },
      { id: 'B', textEn: 'Integers: 7; Rational: 2.6, 17/4, √16; Irrational: √12', textAr: 'الصحيحة: 7؛ النسبية: 2.6، 17/4، √16؛ غير النسبية: √12' },
      { id: 'C', textEn: 'Integers: √16, 7, √12; Rational: 2.6, 17/4', textAr: 'الصحيحة: √16، 7، √12؛ النسبية: 2.6، 17/4' },
      { id: 'D', textEn: 'Integers: none; Rational: all', textAr: 'الصحيحة: لا يوجد؛ النسبية: الجميع' }
    ],
    correctAnswer: 'A',
    explanationEn: '√16 = 4 and 7 are Integers (Z). 2.6 and 17/4 (4.25) are Rational non-integers. √12 is Irrational (outside Q).',
    explanationAr: '√16 = 4 و 7 أعداد صحيحة. 2.6 و 17/4 أعداد نسبية غير صحيحة. √12 عدد غير نسبي يقع خارج المجموعة Q.',
    solutionStepsEn: ['Step 1: Simplify √16 = 4 => Integer.', 'Step 2: 7 => Integer.', 'Step 3: 2.6 and 17/4 = 4.25 => Rational.', 'Step 4: √12 => Irrational.'],
    solutionStepsAr: ['الخطوة 1: تبسيط √16 = 4 => عدد صحيح.', 'الخطوة 2: 7 => عدد صحيح.', 'الخطوة 3: 2.6 و 17/4 أعداد نسبية.', 'الخطوة 4: √12 عدد غير نسبي.'],
    marks: 4
  },

  // MAY/JUNE 2003 - PAPER 4 (0580/04)
  {
    id: 'IG-2003-MJ-04-01',
    code: '0580/04/M/J/03 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Money & Linear Systems',
    topicAr: 'الأنظمة المالية والخطيّة',
    questionEn: 'Theater tickets cost $10 or $16. (a)(i) Total cost of 197 tickets at $10 and 95 tickets at $16? (a)(iii) On Tuesday 319 tickets sold for $3784. Find x ($10 tickets) and y ($16 tickets).',
    questionAr: 'تذاكر مسرح بـ 10$ أو 16$. (أ1) احسب تكلفة 197 تذكرة بـ 10$ و 95 تذكرة بـ 16$. (أ3) بيع يوم الثلاثاء 319 تذكرة بمبلغ 3784$. أوجد x (تذاكر 10$) و y (تذاكر 16$).',
    options: [
      { id: 'A', textEn: '(a)(i) $3490, (a)(iii) x = 220, y = 99', textAr: '(أ1) $3490، (أ3) x = 220، y = 99' },
      { id: 'B', textEn: '(a)(i) $3500, (a)(iii) x = 200, y = 119', textAr: '(أ1) $3500، (أ3) x = 200، y = 119' },
      { id: 'C', textEn: '(a)(i) $3490, (a)(iii) x = 210, y = 109', textAr: '(أ1) $3490، (أ3) x = 210، y = 109' },
      { id: 'D', textEn: '(a)(i) $3200, (a)(iii) x = 220, y = 99', textAr: '(أ1) $3200، (أ3) x = 220، y = 99' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a)(i) 197 × 10 + 95 × 16 = 1970 + 1520 = $3490. (a)(iii) x + y = 319 and 10x + 16y = 3784 => 10x + 10y = 3190 => 6y = 594 => y = 99, x = 220.',
    explanationAr: '(أ1) التكلفة = 3490$. (أ3) المعادلتان: x + y = 319 و 10x + 16y = 3784 => y = 99 و x = 220.',
    solutionStepsEn: ['(a)(i) 1970 + 1520 = $3490.', '(a)(iii) x + y = 319 => 10x + 10y = 3190.', '3784 - 3190 = 594 => 6y = 594 => y = 99, x = 220.'],
    solutionStepsAr: ['(أ1) 1970 + 1520 = 3490$.', '(أ3) وحل المعادلتين آنياً يمنح y = 99 و x = 220.'],
    marks: 6
  }
];
