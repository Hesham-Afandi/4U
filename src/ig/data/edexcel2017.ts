import { IgQuestion } from '../types';

export const EDEXCEL_2017: IgQuestion[] = [
  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — JANUARY 2017 — PAPER 4H
  // =========================================================================
  {
    id: 'ED-2017-4H-01',
    code: '4MA0/4H Jan 2017 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Statistics: Median Goals',
    topicAr: 'الإحصاء: الوسيط التكراري',
    questionEn: 'The table shows information about goals scored by a football team in 45 matches:\n0 goals (7 matches), 1 goal (14), 2 goals (8), 3 goals (10), 4 goals (5), 5 goals (0), 6 goals (1).\nFind the median number of goals scored.',
    questionAr: 'الجدول يعرض أهداف فريق في 45 مباراة:\n0 أهداف (7 مبارايات)، 1 هدف (14)، 2 أهداف (8)، 3 أهداف (10)، 4 أهداف (5)، 5 أهداف (0)، 6 أهداف (1).\nأوجد وسيط عدد الأهداف.',
    options: [
      { id: 'A', textEn: '1 goal', textAr: '1 هدف' },
      { id: 'B', textEn: '2 goals', textAr: '2 هدفين' },
      { id: 'C', textEn: '1.5 goals', textAr: '1.5 هدف' },
      { id: 'D', textEn: '3 goals', textAr: '3 أهداف' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Total matches = 45. Median position = (45 + 1) / 2 = 23rd match. Cumulative frequencies: 0 goals -> 7; 1 goal -> 7 + 14 = 21; 2 goals -> 21 + 8 = 29. The 23rd match falls in the 2 goals category.',
    explanationAr: 'ترتيب الوسيط = 23. التكرار التراكمي: حتى 1 هدف = 21 مباراة. من 22 إلى 29 = 2 هدفين. إذن الوسيط = 2 هدفين.',
    solutionStepsEn: ['Total matches = 45', 'Median position = (45+1)/2 = 23rd', 'Cumulative sum reaches 23 at 2 goals => Median = 2'],
    solutionStepsAr: ['المجموع = 45', 'ترتيب الوسيط = 23', 'الوسيط = 2 هدفين'],
    marks: 2
  },
  {
    id: 'ED-2017-4H-02',
    code: '4MA0/4H Jan 2017 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Probability & Expectation',
    topicAr: 'الاحتمالات والقيمة المتوقعة',
    questionEn: 'A biased 5-sided spinner has colors: red, orange, yellow, green, blue. Probabilities: P(red)=0.4, P(orange)=0.2, P(yellow)=0.1. The probabilities of landing on green and blue are equal.\n(a) Find P(green).\n(b) Jenny spins the spinner 200 times. Estimate the number of times it lands on red.',
    questionAr: 'دوّارة منحازة خماسية الأوجه (أحمر، برتقالي، أصفر، أخضر، أزرق). الاحتمالات: P(أحمر)=0.4، P(برتقالي)=0.2، P(أصفر)=0.1. احتمال الأخضر يساوي احتمال الأزرق.\n(أ) أوجد احتمال الأخضر.\n(ب) قامت جيني بتدوير الدوّارة 200 مرة. قدّر عدد مرات التوقف على الأحمر.',
    options: [
      { id: 'A', textEn: '(a) 0.15; (b) 80 times', textAr: '(أ) 0.15؛ (ب) 80 مرة' },
      { id: 'B', textEn: '(a) 0.30; (b) 80 times', textAr: '(أ) 0.30؛ (ب) 80 مرة' },
      { id: 'C', textEn: '(a) 0.15; (b) 40 times', textAr: '(أ) 0.15؛ (ب) 40 مرة' },
      { id: 'D', textEn: '(a) 0.20; (b) 100 times', textAr: '(أ) 0.20؛ (ب) 100 مرة' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Sum = 0.4 + 0.2 + 0.1 = 0.7. Remaining = 1 - 0.7 = 0.30. Since P(green) = P(blue), P(green) = 0.30 / 2 = 0.15. (b) Expected red = 200 × 0.4 = 80 times.',
    explanationAr: '(أ) مجموع المعلوم = 0.7. المتبقي = 0.30. احتمال الأخضر = 0.30 ÷ 2 = 0.15. (ب) المرات المتوقعة = 200 × 0.4 = 80 مرة.',
    solutionStepsEn: ['1 - (0.4 + 0.2 + 0.1) = 0.30', 'P(green) = 0.30 / 2 = 0.15', 'Expected red = 200 × 0.4 = 80'],
    solutionStepsAr: ['المتبقي = 0.30', 'احتمال الأخضر = 0.15', 'المرات = 80'],
    marks: 5
  },
  {
    id: 'ED-2017-4H-03',
    code: '4MA0/4H Jan 2017 Q3',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Currency Exchange Conversion',
    topicAr: 'تحويل العملات',
    questionEn: 'The weekly rent for an apartment is £530, which is equal to 715.50 euros (€). The weekly rent for a cottage is £750. Work out the weekly rent for the cottage in euros (€).',
    questionAr: 'الإيجار الأسبوعي للشقة هو £530 ويساوي 715.50 يورو (€). والإيجار الأسبوعي لكوخ هو £750. احسب الإيجار الأسبوعي للكوخ باليورو (€).',
    options: [
      { id: 'A', textEn: '1012.50 euros', textAr: '1012.50 يورو' },
      { id: 'B', textEn: '990.00 euros', textAr: '990.00 يورو' },
      { id: 'C', textEn: '1050.00 euros', textAr: '1050.00 يورو' },
      { id: 'D', textEn: '955.50 euros', textAr: '955.50 يورو' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Exchange rate: €1 = 530 / 715.50 = £0.74074... or £1 = 715.50 / 530 = €1.35. Cottage rent in euros = 750 × 1.35 = 1012.50 euros.',
    explanationAr: 'سعر الصرف: £1 = 715.50 ÷ 530 = 1.35 يورو. إيجار الكوخ = 750 × 1.35 = 1012.50 يورو.',
    solutionStepsEn: ['Exchange rate: £1 = 715.50 / 530 = €1.35', 'Cottage rent = 750 × 1.35 = €1012.50'],
    solutionStepsAr: ['سعر الصرف = 1.35 يورو لكل جنيه', 'الإيجار = 750 × 1.35 = 1012.50 يورو'],
    marks: 3
  },
  {
    id: 'ED-2017-4H-09',
    code: '4MA0/4H Jan 2017 Q9',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Pythagoras & Trigonometry',
    topicAr: 'نظرية فيثاغورس وحساب المثلثات',
    questionEn: 'A ladder EF is placed against a vertical wall EG. EG = 2.1 m, FG = 3.5 m, and angle EGF = 90°.\n(a) Calculate the length of the ladder EF correct to 1 decimal place.\n(b) Calculate the size of angle EFG correct to the nearest degree.',
    questionAr: 'سلم EF متكئ على جدار عمودي EG. طول EG = 2.1 م، وطول الأرضية FG = 3.5 م، والزاوية EGF = 90°.\n(أ) احسب طول السلم EF مقرباً لأقرب منزلة عشرية واحدة.\n(ب) احسب قياس الزاوية EFG مقربة لأقرب درجة.',
    diagramSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" class="w-full max-w-sm mx-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-2"><path d="M 40 30 L 40 140 L 220 140 L 40 30 Z" fill="none" stroke="#0d9488" stroke-width="3"/><rect x="40" y="125" width="15" height="15" fill="none" stroke="#0d9488" stroke-width="2"/><text x="25" y="30" fill="#334155" font-size="14" font-weight="bold">E</text><text x="25" y="145" fill="#334155" font-size="14" font-weight="bold">G</text><text x="225" y="145" fill="#334155" font-size="14" font-weight="bold">F</text><text x="5" y="90" fill="#0d9488" font-size="13" font-weight="bold">2.1 m</text><text x="120" y="160" fill="#0d9488" font-size="13" font-weight="bold">3.5 m</text><text x="130" y="75" fill="#e11d48" font-size="14" font-weight="bold">EF = ?</text></svg>',
    options: [
      { id: 'A', textEn: '(a) 4.1 m; (b) 31°', textAr: '(أ) 4.1 م؛ (ب) 31°' },
      { id: 'B', textEn: '(a) 4.1 m; (b) 59°', textAr: '(أ) 4.1 م؛ (ب) 59°' },
      { id: 'C', textEn: '(a) 2.8 m; (b) 31°', textAr: '(أ) 2.8 م؛ (ب) 31°' },
      { id: 'D', textEn: '(a) 4.5 m; (b) 45°', textAr: '(أ) 4.5 م؛ (ب) 45°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) EF = √(2.1² + 3.5²) = √(4.41 + 12.25) = √16.66 = 4.081... ≈ 4.1 m. (b) tan(EFG) = 2.1 / 3.5 = 0.6 => angle EFG = tan⁻¹(0.6) = 30.96° ≈ 31°.',
    explanationAr: '(أ) طول السلم EF = √(2.1² + 3.5²) = √16.66 ≈ 4.1 م. (ب) ظل الزاوية tan(EFG) = 2.1 ÷ 3.5 = 0.6 => الزاوية = 31°.',
    solutionStepsEn: ['EF = √(2.1² + 3.5²) = √16.66 ≈ 4.1 m', 'tan(EFG) = 2.1 / 3.5 = 0.6 => angle = 31°'],
    solutionStepsAr: ['طول السلم = 4.1 م', 'الزاوية = 31°'],
    marks: 6
  },
  {
    id: 'ED-2017-4H-10',
    code: '4MA0/4H Jan 2017 Q10',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Simultaneous Equations',
    topicAr: 'المعادلات الخطية الآنية',
    questionEn: 'Solve the simultaneous equations:\n4x - 2y = 33\n4x + 8y = 18\nShow clear algebraic working.',
    questionAr: 'حل المعادلتين الآنيتين:\n4x - 2y = 33\n4x + 8y = 18\nمع توضيح خطوات الحل الجبري.',
    options: [
      { id: 'A', textEn: 'x = 7.5, y = -1.5', textAr: 'x = 7.5، y = -1.5' },
      { id: 'B', textEn: 'x = 7.5, y = 1.5', textAr: 'x = 7.5، y = 1.5' },
      { id: 'C', textEn: 'x = 6.0, y = -1.5', textAr: 'x = 6.0، y = -1.5' },
      { id: 'D', textEn: 'x = 8.0, y = -2.0', textAr: 'x = 8.0، y = -2.0' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Subtract 1st eq from 2nd eq: (4x + 8y) - (4x - 2y) = 18 - 33 => 10y = -15 => y = -1.5. Substitute y = -1.5 into 1st eq: 4x - 2(-1.5) = 33 => 4x + 3 = 33 => 4x = 30 => x = 7.5.',
    explanationAr: 'بطرح الأولى من الثانية: 10y = -15 => y = -1.5. بالتعويض: 4x + 3 = 33 => 4x = 30 => x = 7.5.',
    solutionStepsEn: ['10y = 18 - 33 = -15 => y = -1.5', '4x + 3 = 33 => 4x = 30 => x = 7.5'],
    solutionStepsAr: ['10y = -15 => y = -1.5', '4x = 30 => x = 7.5'],
    marks: 3
  },

  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — JANUARY 2017 — PAPER 4HR
  // =========================================================================
  {
    id: 'ED-2017-4HR-03',
    code: '4MA0/4HR Jan 2017 Q3',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Percentage Reduction & Original Price',
    topicAr: 'النسبة المئوية والسعر الأصلي',
    questionEn: 'In a sale, normal prices are reduced by 35%. The normal price of a bed is $1200. Calculate the sale price of the bed.',
    questionAr: 'في التخفيضات، يتم تخفيض الأسعار العادية بنسبة 35%. السعر العادي لسرير هو 1200 دولار. احسب سعر البيع للسرير.',
    options: [
      { id: 'A', textEn: '$780', textAr: '780$' },
      { id: 'B', textEn: '$420', textAr: '420$' },
      { id: 'C', textEn: '$820', textAr: '820$' },
      { id: 'D', textEn: '$750', textAr: '750$' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sale price multiplier = 1 - 0.35 = 0.65. Sale price = 1200 × 0.65 = $780.',
    explanationAr: 'معامل سعر البيع = 1 - 0.35 = 0.65. سعر التخفيض = 1200 × 0.65 = 780$.',
    solutionStepsEn: ['Discount = 1200 × 0.35 = 420', 'Sale price = 1200 - 420 = $780'],
    solutionStepsAr: ['الخصم = 420$', 'سعر البيع = 1200 - 420 = 780$'],
    marks: 3
  },
  {
    id: 'ED-2017-4HR-04',
    code: '4MA0/4HR Jan 2017 Q4',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'Jan',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Area of Rectangle & Inner Circle',
    topicAr: 'المساحة المظللة بين مستطيل ودائرة',
    questionEn: 'A rectangle measuring 30 cm by 20 cm contains a circle of radius 8 cm. Calculate the area of the shaded region inside the rectangle but outside the circle. Give your answer correct to 3 significant figures.',
    questionAr: 'مستطيل أبعاده 30 سم في 20 سم بداخله دائرة نصف قطرها 8 سم. احسب مساحة المنطقة المظللة داخل المستطيل وخارج الدائرة. أوجد الناتج لأقرب 3 أرقام معنوية.',
    diagramSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" class="w-full max-w-xs mx-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-2"><rect x="20" y="20" width="200" height="120" fill="#0d9488" opacity="0.3" stroke="#0d9488" stroke-width="3"/><circle cx="120" cy="80" r="45" fill="#f8fafc" class="dark:fill-slate-900" stroke="#0d9488" stroke-width="2"/><line x1="120" y1="80" x2="165" y2="80" stroke="#e11d48" stroke-width="2"/><text x="135" y="72" fill="#e11d48" font-size="12" font-weight="bold">8 cm</text><text x="100" y="15" fill="#334155" font-size="12" font-weight="bold">30 cm</text><text x="5" y="85" fill="#334155" font-size="12" font-weight="bold">20 cm</text></svg>',
    options: [
      { id: 'A', textEn: '399 cm²', textAr: '399 سم²' },
      { id: 'B', textEn: '400 cm²', textAr: '400 سم²' },
      { id: 'C', textEn: '398 cm²', textAr: '398 سم²' },
      { id: 'D', textEn: '600 cm²', textAr: '600 سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Area of rectangle = 30 × 20 = 600 cm². Area of circle = π × 8² = 64π ≈ 201.06 cm². Shaded Area = 600 - 201.06 = 398.94 ≈ 399 cm².',
    explanationAr: 'مساحة المستطيل = 30 × 20 = 600 سم². مساحة الدائرة = π × 64 ≈ 201.06 سم². المساحة المظللة = 600 - 201.06 = 399 سم².',
    solutionStepsEn: ['Rectangle area = 30 × 20 = 600', 'Circle area = π × 8² = 201.06', 'Shaded area = 600 - 201.06 = 399 cm²'],
    solutionStepsAr: ['مساحة المستطيل = 600', 'مساحة الدائرة = 201.06', 'المساحة المظللة = 399 سم²'],
    marks: 4
  },

  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — MAY/JUNE 2017 — PAPER 3HR / 4H
  // =========================================================================
  {
    id: 'ED-2017-MJ-3HR-02',
    code: '4MA0/3HR May 2017 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'May/June',
    paper: 'Paper 3HR (Higher)',
    topicEn: 'Linear Equation Solving',
    topicAr: 'حل المعادلات الخطية',
    questionEn: 'Solve 5x - 8 = x - 10. Show clear algebraic working.',
    questionAr: 'حل المعادلة 5x - 8 = x - 10 مع توضيح خطوات الحل الجبري.',
    options: [
      { id: 'A', textEn: 'x = -0.5', textAr: 'x = -0.5' },
      { id: 'B', textEn: 'x = 0.5', textAr: 'x = 0.5' },
      { id: 'C', textEn: 'x = -4.5', textAr: 'x = -4.5' },
      { id: 'D', textEn: 'x = -2', textAr: 'x = -2' }
    ],
    correctAnswer: 'A',
    explanationEn: '5x - x = -10 + 8 => 4x = -2 => x = -2 / 4 = -0.5.',
    explanationAr: '5x - x = -10 + 8 => 4x = -2 => x = -0.5.',
    solutionStepsEn: ['5x - x = -10 + 8', '4x = -2 => x = -0.5'],
    solutionStepsAr: ['5x - x = -10 + 8', '4x = -2 => x = -0.5'],
    marks: 3
  },
  {
    id: 'ED-2017-MJ-3HR-07',
    code: '4MA0/3HR May 2017 Q7',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'May/June',
    paper: 'Paper 3HR (Higher)',
    topicEn: 'Prime Factorisation',
    topicAr: 'التحليل إلى العوامل الأولية',
    questionEn: 'Write 336 as a product of powers of its prime factors.',
    questionAr: 'اكتب 336 كحاصل ضرب قوى عوامله الأولية.',
    options: [
      { id: 'A', textEn: '2⁴ × 3 × 7', textAr: '2⁴ × 3 × 7' },
      { id: 'B', textEn: '2³ × 3² × 7', textAr: '2³ × 3² × 7' },
      { id: 'C', textEn: '2⁵ × 3 × 7', textAr: '2⁵ × 3 × 7' },
      { id: 'D', textEn: '2⁴ × 21', textAr: '2⁴ × 21' }
    ],
    correctAnswer: 'A',
    explanationEn: '336 = 2 × 168 = 2 × 2 × 84 = 2³ × 42 = 2⁴ × 21 = 2⁴ × 3 × 7.',
    explanationAr: '336 = 2⁴ × 3 × 7.',
    solutionStepsEn: ['336 ÷ 2 = 168', '168 ÷ 2 = 84', '84 ÷ 2 = 42', '42 ÷ 2 = 21', '21 = 3 × 7', '336 = 2⁴ × 3 × 7'],
    solutionStepsAr: ['336 = 2⁴ × 3 × 7'],
    marks: 3
  },
  {
    id: 'ED-2017-MJ-4H-08',
    code: '4MA0/4H May 2017 Q8',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2017,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Regular Polygons: Interior Angle',
    topicAr: 'المضلعات المنتظمة: الزاوية الداخلية',
    questionEn: 'Each interior angle of a regular polygon is 156°. Work out the number of sides of the polygon.',
    questionAr: 'كل زاوية داخلية لمضلع منتظم تساوي 156°. احسب عدد أضلاع المضلع.',
    options: [
      { id: 'A', textEn: '15 sides', textAr: '15 ضلعاً' },
      { id: 'B', textEn: '12 sides', textAr: '12 ضلعاً' },
      { id: 'C', textEn: '18 sides', textAr: '18 ضلعاً' },
      { id: 'D', textEn: '20 sides', textAr: '20 ضلعاً' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Exterior angle = 180° - 156° = 24°. Number of sides n = 360° / 24° = 15 sides.',
    explanationAr: 'الزاوية الخارجية = 180° - 156° = 24°. عدد الأضلاع n = 360° ÷ 24° = 15 ضلعاً.',
    solutionStepsEn: ['Exterior angle = 180° - 156° = 24°', 'Number of sides = 360° / 24° = 15'],
    solutionStepsAr: ['الزاوية الخارجية = 24°', 'عدد الأضلاع = 360 ÷ 24 = 15'],
    marks: 3
  }
];
