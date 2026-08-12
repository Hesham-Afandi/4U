import { IgQuestion } from '../types';

export const QUESTIONS_2007: IgQuestion[] = [
  // MAY/JUNE 2007 - PAPER 1 (Core 0580/01)
  {
    id: 'IG-2007-MJ-01-01',
    code: '0580/01/M/J/07 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Order of Operations & Fractions',
    topicAr: 'ترتيب العمليات والكسور',
    questionEn: 'Calculate the value of: [9 - 3 × (7/3)] × 2',
    questionAr: 'احسب قيمة المقدار: [9 - 3 × (7/3)] × 2',
    options: [
      { id: 'A', textEn: '4', textAr: '4' },
      { id: 'B', textEn: '14', textAr: '14' },
      { id: 'C', textEn: '28', textAr: '28' },
      { id: 'D', textEn: '6', textAr: '6' }
    ],
    correctAnswer: 'A',
    explanationEn: '3 × (7/3) = 7. Inside brackets: 9 - 7 = 2. Finally 2 × 2 = 4.',
    explanationAr: 'الضرب أولاً: 3 × (7/3) = 7. ما بداخل الأقواس: 9 - 7 = 2. أخيراً 2 × 2 = 4.',
    solutionStepsEn: ['Step 1: 3 × (7/3) = 7.', 'Step 2: 9 - 7 = 2.', 'Step 3: 2 × 2 = 4.'],
    solutionStepsAr: ['الخطوة 1: 3 × (7/3) = 7.', 'الخطوة 2: 9 - 7 = 2.', 'الخطوة 3: 2 × 2 = 4.'],
    marks: 1
  },
  {
    id: 'IG-2007-MJ-01-02',
    code: '0580/01/M/J/07 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ordering Numbers',
    topicAr: 'ترتيب الأعداد',
    questionEn: 'Write the following numbers in order of size, starting with the smallest: 0.58, 3/5, 62%',
    questionAr: 'اكتب الأعداد التالية مرتبة من الأصغر إلى الأكبر: 0.58, 3/5, 62%',
    options: [
      { id: 'A', textEn: '0.58, 3/5, 62%', textAr: '0.58, 3/5, 62%' },
      { id: 'B', textEn: '3/5, 0.58, 62%', textAr: '3/5, 0.58, 62%' },
      { id: 'C', textEn: '0.58, 62%, 3/5', textAr: '0.58, 62%, 3/5' },
      { id: 'D', textEn: '62%, 3/5, 0.58', textAr: '62%, 3/5, 0.58' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Convert all to decimals: 0.58 = 0.58, 3/5 = 0.60, 62% = 0.62. Since 0.58 < 0.60 < 0.62, the order is 0.58, 3/5, 62%.',
    explanationAr: 'تحويل الأعداد لعشري: 0.58 = 0.58، 3/5 = 0.60، 62% = 0.62. الترتيب هو 0.58 ثم 3/5 ثم 62%.',
    solutionStepsEn: ['Step 1: 3/5 = 0.60 and 62% = 0.62.', 'Step 2: 0.58 < 0.60 < 0.62 => 0.58, 3/5, 62%.'],
    solutionStepsAr: ['الخطوة 1: 3/5 = 0.60 و 62% = 0.62.', 'الخطوة 2: 0.58 < 0.60 < 0.62 => 0.58, 3/5, 62%.'],
    marks: 1
  },
  {
    id: 'IG-2007-MJ-01-07',
    code: '0580/01/M/J/07 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Bearings',
    topicAr: 'الاتجاهات الجغرافية',
    questionEn: 'The bearing of a lighthouse L from a harbour P is 145°. Find the bearing of P from L.',
    questionAr: 'زاوية اتجاه منارة L من ميناء P هي 145°. أوجد زاوية اتجاه P من L.',
    diagramTitle: 'Bearings P and L / اتجاهات الميناء والمنارة',
    diagramSvg: `<svg viewBox="0 0 200 130" class="w-48 h-32 mx-auto text-slate-800 dark:text-slate-100">
      <line x1="60" y1="20" x2="60" y2="100" stroke="currentColor" stroke-dasharray="3" />
      <line x1="140" y1="20" x2="140" y2="100" stroke="currentColor" stroke-dasharray="3" />
      <line x1="60" y1="40" x2="140" y2="90" stroke="#0d9488" stroke-width="2" />
      <text x="50" y="45" font-size="11" font-weight="bold" fill="currentColor">P</text>
      <text x="150" y="95" font-size="11" font-weight="bold" fill="currentColor">L</text>
      <text x="75" y="55" font-size="10" fill="#0d9488">145°</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '325°', textAr: '325°' },
      { id: 'B', textEn: '035°', textAr: '035°' },
      { id: 'C', textEn: '215°', textAr: '215°' },
      { id: 'D', textEn: '145°', textAr: '145°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Reverse bearing = 145° + 180° = 325°.',
    explanationAr: 'الاتجاه العكسي = 145° + 180° = 325°.',
    solutionStepsEn: ['Step 1: Add 180° to 145°.', 'Step 2: 145 + 180 = 325°.'],
    solutionStepsAr: ['الخطوة 1: إضافة 180° إلى 145°.', 'الخطوة 2: 145 + 180 = 325°.'],
    marks: 2
  },
  {
    id: 'IG-2007-MJ-01-10',
    code: '0580/01/M/J/07 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Parallel Lines & Angles',
    topicAr: 'الخطوط المتوازية والزوايا',
    questionEn: 'Lines AB, CD and EF are parallel. Angle ABC = 25° and angle CEF = 130°. Calculate angle BCE.',
    questionAr: 'في الشكل، الخطوط AB و CD و EF متوازية. الزاوية ABC = 25° والزاوية CEF = 130°. احسب قياس الزاوية BCE.',
    options: [
      { id: 'A', textEn: '25°', textAr: '25°' },
      { id: 'B', textEn: '50°', textAr: '50°' },
      { id: 'C', textEn: '30°', textAr: '30°' },
      { id: 'D', textEn: '75°', textAr: '75°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Angle BCD = alternate angle ABC = 25°. Angle ECD = 180 - 130 = 50° (co-interior angles). Thus angle BCE = 50 - 25 = 25° (or 25° depending on relative position: if C is between B and E, angle BCE = 25 + 50 = 75°, here BCD = 25° and ECD = 50° => BCE = 25°).',
    explanationAr: 'بالتبادل الزاوية BCD = 25° وبالتحالف الزاوية ECD = 180 - 130 = 50°، إذن الزاوية BCE = 50 - 25 = 25°.',
    solutionStepsEn: ['Step 1: Alternate angle BCD = 25°.', 'Step 2: Co-interior angle ECD = 50° => BCE = 50 - 25 = 25°.'],
    solutionStepsAr: ['الخطوة 1: بالتبادل BCD = 25°.', 'الخطوة 2: بالتحالف ECD = 50° => BCE = 25°.'],
    marks: 2
  },

  // MAY/JUNE 2007 - PAPER 2 (Extended 0580/02)
  {
    id: 'IG-2007-MJ-02-03',
    code: '0580/02/M/J/07 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Probability of Multiple Independent Events',
    topicAr: 'احتمال الحوادث المستقلة المتكررة',
    questionEn: 'Zsara throws a ball three times at a target. Each time she throws, the probability of hitting the target is 0.2. Calculate the probability that she does not hit the target in any of the three throws.',
    questionAr: 'ترمي زسارا كرة ثلاث مرات على هدف. في كل مرة ترمي فيها الكرة، يكون احتمال إصابتها للهدف هو 0.2. احسب احتمال ألا تصيب الهدف في أي من الرميات الثلاث.',
    options: [
      { id: 'A', textEn: '0.512', textAr: '0.512' },
      { id: 'B', textEn: '0.800', textAr: '0.800' },
      { id: 'C', textEn: '0.008', textAr: '0.008' },
      { id: 'D', textEn: '0.488', textAr: '0.488' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Probability of miss on one throw = 1 - 0.2 = 0.8. Probability of 3 consecutive misses = 0.8 × 0.8 × 0.8 = 0.8³ = 0.512.',
    explanationAr: 'احتمال عدم الإصابة في الرمية الواحدة = 1 - 0.2 = 0.8. احتمال عدم الإصابة 3 مرات متتالية = (0.8)³ = 0.512.',
    solutionStepsEn: ['Step 1: P(miss) = 1 - 0.2 = 0.8.', 'Step 2: P(3 misses) = 0.8³ = 0.512.'],
    solutionStepsAr: ['الخطوة 1: احتمال عدم الإصابة = 0.8.', 'الخطوة 2: في 3 رميات = (0.8)³ = 0.512.'],
    marks: 2
  },
  {
    id: 'IG-2007-MJ-02-13',
    code: '0580/02/M/J/07 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Direct Proportion with Cubes',
    topicAr: 'التناسب الطردي مع التكعيب',
    questionEn: 'The quantity y is directly proportional to the cube of (x + 2). When x = 0, y = 32. Find the value of y when x = 1.',
    questionAr: 'الكمية y تتناسب طردياً مع مكعب (x + 2). عندما x = 0 تكون y = 32. أوجد قيمة y عندما x = 1.',
    options: [
      { id: 'A', textEn: '108', textAr: '108' },
      { id: 'B', textEn: '64', textAr: '64' },
      { id: 'C', textEn: '96', textAr: '96' },
      { id: 'D', textEn: '144', textAr: '144' }
    ],
    correctAnswer: 'A',
    explanationEn: 'y = k(x + 2)³ => 32 = k(2)³ = 8k => k = 4. When x = 1: y = 4(1 + 2)³ = 4 × 3³ = 4 × 27 = 108.',
    explanationAr: 'y = k(x + 2)³ => 32 = 8k ومنه k = 4. عندما x = 1 تكون y = 4 × (3)³ = 4 × 27 = 108.',
    solutionStepsEn: ['Step 1: k = 32 / 2³ = 4.', 'Step 2: y = 4 × (1 + 2)³ = 4 × 27 = 108.'],
    solutionStepsAr: ['الخطوة 1: إيجاد ثابت التناسب k = 32 ÷ 8 = 4.', 'الخطوة 2: حساب y = 4 × 27 = 108.'],
    marks: 3
  },

  // OCT/NOV 2007 - PAPER 1 (Core 0580/01)
  {
    id: 'IG-2007-ON-01-02',
    code: '0580/01/O/N/07 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio Sharing',
    topicAr: 'تقسيم النسبة',
    questionEn: 'Chris and Roberto share $35 in the ratio 5 : 2. Calculate the amount Roberto receives.',
    questionAr: 'يتقاسم كريس وروبرتو مبلغ 35 دولاراً بنسبة 5 : 2. احسب المبلغ الذي يحصل عليه روبرتو.',
    options: [
      { id: 'A', textEn: '$10', textAr: '$10' },
      { id: 'B', textEn: '$25', textAr: '$25' },
      { id: 'C', textEn: '$14', textAr: '$14' },
      { id: 'D', textEn: '$15', textAr: '$15' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Total parts = 5 + 2 = 7. Roberto share = (2 / 7) × $35 = 2 × $5 = $10.',
    explanationAr: 'مجموع الأجزاء = 5 + 2 = 7. حصة روبرتو = (2 ÷ 7) × 35 = 10 دولارات.',
    solutionStepsEn: ['Step 1: 5 + 2 = 7 parts => $35 / 7 = $5 per part.', 'Step 2: Roberto = 2 × $5 = $10.'],
    solutionStepsAr: ['الخطوة 1: قيمة الجزء = 35 ÷ 7 = 5$.', 'الخطوة 2: حصة روبرتو = 2 × 5$ = 10$.'],
    marks: 2
  },
  {
    id: 'IG-2007-ON-01-03',
    code: '0580/01/O/N/07 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Linear Equation',
    topicAr: 'المعادلة الخطية',
    questionEn: 'Solve the equation: 1 - 2x = x + 4',
    questionAr: 'حل المعادلة: 1 - 2x = x + 4',
    options: [
      { id: 'A', textEn: 'x = -1', textAr: 'x = -1' },
      { id: 'B', textEn: 'x = 1', textAr: 'x = 1' },
      { id: 'C', textEn: 'x = -3', textAr: 'x = -3' },
      { id: 'D', textEn: 'x = 3', textAr: 'x = 3' }
    ],
    correctAnswer: 'A',
    explanationEn: '1 - 4 = x + 2x => -3 = 3x => x = -1.',
    explanationAr: 'تجميع الحدود: 1 - 4 = 3x ومنه 3x = -3 إذن x = -1.',
    solutionStepsEn: ['Step 1: 1 - 4 = x + 2x.', 'Step 2: 3x = -3 => x = -1.'],
    solutionStepsAr: ['الخطوة 1: 1 - 4 = 3x.', 'الخطوة 2: 3x = -3 => x = -1.'],
    marks: 2
  },

  // OCT/NOV 2007 - PAPER 2 (Extended 0580/02)
  {
    id: 'IG-2007-ON-02-09',
    code: '0580/02/O/N/07 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Completing the Square',
    topicAr: 'إكمال المربع',
    questionEn: 'The expression x² + 4x - 8 can be written in the form (x + p)² + q. Find the values of p and q.',
    questionAr: 'يمكن كتابة المقدار x² + 4x - 8 على الصورة (x + p)² + q. أوجد قيمتي p و q.',
    options: [
      { id: 'A', textEn: 'p = 2, q = -12', textAr: 'p = 2, q = -12' },
      { id: 'B', textEn: 'p = 2, q = -8', textAr: 'p = 2, q = -8' },
      { id: 'C', textEn: 'p = 4, q = -24', textAr: 'p = 4, q = -24' },
      { id: 'D', textEn: 'p = -2, q = -12', textAr: 'p = -2, q = -12' }
    ],
    correctAnswer: 'A',
    explanationEn: 'x² + 4x - 8 = (x + 2)² - 4 - 8 = (x + 2)² - 12. Therefore p = 2 and q = -12.',
    explanationAr: 'بإكمال المربع: x² + 4x - 8 = (x + 2)² - 4 - 8 = (x + 2)² - 12. إذن p = 2 و q = -12.',
    solutionStepsEn: ['Step 1: p = 4 / 2 = 2.', 'Step 2: q = -8 - 2² = -12.'],
    solutionStepsAr: ['الخطوة 1: p = 4 ÷ 2 = 2.', 'الخطوة 2: q = -8 - 4 = -12.'],
    marks: 3
  },
  {
    id: 'IG-2007-ON-02-11',
    code: '0580/02/O/N/07 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2007,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Direct Proportion with Cubes',
    topicAr: 'التناسب الطردي مع التكعيب',
    questionEn: 'The quantity M is directly proportional to the cube of r. When r = 3, M = 21.6. Find the value of M when r = 5.',
    questionAr: 'الكمية M تتناسب طردياً مع مكعب r. عندما r = 3 تكون M = 21.6. أوجد قيمة M عندما r = 5.',
    options: [
      { id: 'A', textEn: '100', textAr: '100' },
      { id: 'B', textEn: '125', textAr: '125' },
      { id: 'C', textEn: '80', textAr: '80' },
      { id: 'D', textEn: '60', textAr: '60' }
    ],
    correctAnswer: 'A',
    explanationEn: 'M = k r³ => 21.6 = k(27) => k = 21.6 / 27 = 0.8. When r = 5: M = 0.8 × 5³ = 0.8 × 125 = 100.',
    explanationAr: 'M = k r³ => 21.6 = 27k ومنه k = 0.8. عندما r = 5 تكون M = 0.8 × 125 = 100.',
    solutionStepsEn: ['Step 1: k = 21.6 / 3³ = 0.8.', 'Step 2: M = 0.8 × 5³ = 100.'],
    solutionStepsAr: ['الخطوة 1: k = 21.6 ÷ 27 = 0.8.', 'الخطوة 2: M = 0.8 × 125 = 100.'],
    marks: 3
  }
];
