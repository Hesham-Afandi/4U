import { IgQuestion } from '../types';

export const QUESTIONS_2008: IgQuestion[] = [
  // MAY/JUNE 2008 - PAPER 1 (Core 0580/01)
  {
    id: 'IG-2008-MJ-01-01',
    code: '0580/01/M/J/08 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Order of Operations',
    topicAr: 'ترتيب العمليات الحسابية',
    questionEn: 'Calculate the value of: 11 + 4 × 7 - 3',
    questionAr: 'احسب قيمة المقدار: 11 + 4 × 7 - 3',
    options: [
      { id: 'A', textEn: '36', textAr: '36' },
      { id: 'B', textEn: '102', textAr: '102' },
      { id: 'C', textEn: '42', textAr: '42' },
      { id: 'D', textEn: '60', textAr: '60' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiplication comes first: 4 × 7 = 28. Then 11 + 28 - 3 = 39 - 3 = 36.',
    explanationAr: 'الضرب أولاً: 4 × 7 = 28. ثم الجمع والطرح من اليمين لليسار: 11 + 28 - 3 = 36.',
    solutionStepsEn: ['Step 1: 4 × 7 = 28.', 'Step 2: 11 + 28 - 3 = 36.'],
    solutionStepsAr: ['الخطوة 1: 4 × 7 = 28.', 'الخطوة 2: 11 + 28 - 3 = 36.'],
    marks: 1
  },
  {
    id: 'IG-2008-MJ-01-09',
    code: '0580/01/M/J/08 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Fraction of an Amount',
    topicAr: 'كسر من كمية',
    questionEn: 'Rihana pays $284 as tax. This is 2/9 of the money she earns. How much money does Rihana earn?',
    questionAr: 'تدفع ريحانا مبلغ 284 دولاراً كضريبة. وهذا المبلغ يمثل 2/9 من الأموال التي تكسبها. كم مبلغ المال الذي تكسبه ريحانا؟',
    options: [
      { id: 'A', textEn: '$1278', textAr: '$1278' },
      { id: 'B', textEn: '$639', textAr: '$639' },
      { id: 'C', textEn: '$2556', textAr: '$2556' },
      { id: 'D', textEn: '$1136', textAr: '$1136' }
    ],
    correctAnswer: 'A',
    explanationEn: '(2/9) × Earnings = $284 => Earnings = $284 × 9 / 2 = 142 × 9 = $1278.',
    explanationAr: '(2 ÷ 9) × الدخل = 284 => الدخل = 284 × 9 ÷ 2 = 1278 دولاراً.',
    solutionStepsEn: ['Step 1: 2/9 = $284 => 1/9 = $142.', 'Step 2: Total = 9 × $142 = $1278.'],
    solutionStepsAr: ['الخطوة 1: قيمة التسع الواحد = 284 ÷ 2 = 142$.', 'الخطوة 2: الدخل الكلي = 9 × 142 = 1278$.'],
    marks: 2
  },
  {
    id: 'IG-2008-MJ-01-13',
    code: '0580/01/M/J/08 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Area of Triangle & Rectangle',
    topicAr: 'مساحة المثلث والمستطيل',
    questionEn: 'A model ship flies two flags. The first is a rectangle 5 cm by 6 cm. The second is an isosceles triangle with base 8 cm and height h cm. The flags have equal areas. Find the value of h.',
    questionAr: 'نموذج سفينة يرفع علمين. الأول مستطيل أبعاده 5 سم و 6 سم. والثاني مثلث متساوي الساقين قاعدته 8 سم وارتفاعه h سم. العلمان متساويان في المساحة. أوجد قيمة h.',
    diagramTitle: 'Flags Equal Area / العلمان المتساويان في المساحة',
    diagramSvg: `<svg viewBox="0 0 240 120" class="w-60 h-28 mx-auto text-slate-800 dark:text-slate-100">
      <rect x="20" y="30" width="60" height="50" fill="none" stroke="currentColor" stroke-width="2" />
      <polygon points="140,80 220,80 180,30" fill="none" stroke="#0d9488" stroke-width="2" />
      <line x1="180" y1="30" x2="180" y2="80" stroke="#0d9488" stroke-dasharray="3" />
      <text x="50" y="58" font-size="10" text-anchor="middle" fill="currentColor">5×6=30cm²</text>
      <text x="180" y="95" font-size="10" text-anchor="middle" fill="#0d9488">b=8, h=?</text>
    </svg>`,
    options: [
      { id: 'A', textEn: 'h = 7.5 cm', textAr: 'h = 7.5 سم' },
      { id: 'B', textEn: 'h = 3.75 cm', textAr: 'h = 3.75 سم' },
      { id: 'C', textEn: 'h = 15 cm', textAr: 'h = 15 سم' },
      { id: 'D', textEn: 'h = 6 cm', textAr: 'h = 6 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Area of rectangle = 5 × 6 = 30 cm². Area of triangle = 0.5 × 8 × h = 4h. So 4h = 30 => h = 30 / 4 = 7.5 cm.',
    explanationAr: 'مساحة المستطيل = 5 × 6 = 30 سم². مساحة المثلث = 0.5 × 8 × h = 4h. إذن 4h = 30 ومنه h = 7.5 سم.',
    solutionStepsEn: ['Step 1: Rectangle area = 5 × 6 = 30 cm².', 'Step 2: 0.5 × 8 × h = 30 => 4h = 30 => h = 7.5 cm.'],
    solutionStepsAr: ['الخطوة 1: مساحة المستطيل = 30 سم².', 'الخطوة 2: 4h = 30 => h = 7.5 سم.'],
    marks: 2
  },

  // MAY/JUNE 2008 - PAPER 2 (Extended 0580/02)
  {
    id: 'IG-2008-MJ-02-05',
    code: '0580/02/M/J/08 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Currency Conversion',
    topicAr: 'تحويل العملات',
    questionEn: 'A European holiday is advertised at a cost of €245. The exchange rate is £1 = €1.06. Calculate the cost in pounds (£) correct to the nearest penny.',
    questionAr: 'إعلان عن عطلة في أوروبا بتكلفة 245 يورو. سعر الصرف £1 = €1.06. احسب التكلفة بالجنيه الإسترليني (£) مقربة لأقرب بنس (منزلتين عشريتين).',
    options: [
      { id: 'A', textEn: '£231.13', textAr: '£231.13' },
      { id: 'B', textEn: '£259.70', textAr: '£259.70' },
      { id: 'C', textEn: '£231.00', textAr: '£231.00' },
      { id: 'D', textEn: '£240.00', textAr: '£240.00' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Cost in pounds = 245 / 1.06 = 231.13207... ≈ £231.13.',
    explanationAr: 'التكلفة بالجنيه = 245 ÷ 1.06 = 231.13207... ≈ 231.13 إسترليني.',
    solutionStepsEn: ['Step 1: Divide €245 by 1.06.', 'Step 2: Round to 2 decimal places => £231.13.'],
    solutionStepsAr: ['الخطوة 1: قسمة 245 على 1.06.', 'الخطوة 2: التقريب لأقرب بنس => £231.13.'],
    marks: 2
  },
  {
    id: 'IG-2008-MJ-02-13',
    code: '0580/02/M/J/08 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Linear Inequality with Fractions',
    topicAr: 'المتباينة الخطية مع الكسور',
    questionEn: 'Solve the inequality: 2x/5 ≤ 8 - (3x/4)',
    questionAr: 'حل المتباينة: 2x/5 ≤ 8 - (3x/4)',
    options: [
      { id: 'A', textEn: 'x ≤ 160/23 (or x ≤ 6.96)', textAr: 'x ≤ 160/23 (أو x ≤ 6.96)' },
      { id: 'B', textEn: 'x ≥ 160/23', textAr: 'x ≥ 160/23' },
      { id: 'C', textEn: 'x ≤ 8', textAr: 'x ≤ 8' },
      { id: 'D', textEn: 'x ≤ 10', textAr: 'x ≤ 10' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply entire inequality by 20: 4(2x) ≤ 160 - 5(3x) => 8x ≤ 160 - 15x => 23x ≤ 160 => x ≤ 160/23 (≈ 6.96).',
    explanationAr: 'بضرب المتباينة في 20: 8x ≤ 160 - 15x => بإضافة 15x نجد 23x ≤ 160 ومنه x ≤ 160/23.',
    solutionStepsEn: ['Step 1: Multiply by 20 => 8x ≤ 160 - 15x.', 'Step 2: 23x ≤ 160 => x ≤ 160/23.'],
    solutionStepsAr: ['الخطوة 1: الضرب في 20 => 8x ≤ 160 - 15x.', 'الخطوة 2: 23x ≤ 160 => x ≤ 160/23.'],
    marks: 3
  },

  // OCT/NOV 2008 - PAPER 1 (Core 0580/01)
  {
    id: 'IG-2008-ON-01-05',
    code: '0580/01/O/N/08 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Algebraic Expansion & Simplification',
    topicAr: 'فك الأقواس والتبسيط الجبري',
    questionEn: 'Expand brackets and simplify: 5x - 6(3x - 2)',
    questionAr: 'فك الأقواس وبسط المقدار: 5x - 6(3x - 2)',
    options: [
      { id: 'A', textEn: '12 - 13x', textAr: '12 - 13x' },
      { id: 'B', textEn: '-13x - 12', textAr: '-13x - 12' },
      { id: 'C', textEn: '13x - 12', textAr: '13x - 12' },
      { id: 'D', textEn: '12 - 3x', textAr: '12 - 3x' }
    ],
    correctAnswer: 'A',
    explanationEn: '5x - 18x + 12 = -13x + 12 = 12 - 13x.',
    explanationAr: 'بفك القوس: 5x - 18x + 12 = 12 - 13x.',
    solutionStepsEn: ['Step 1: -6(3x - 2) = -18x + 12.', 'Step 2: 5x - 18x + 12 = 12 - 13x.'],
    solutionStepsAr: ['الخطوة 1: فك القوس يعطي -18x + 12.', 'الخطوة 2: التجميع 5x - 18x + 12 = 12 - 13x.'],
    marks: 2
  },
  {
    id: 'IG-2008-ON-01-21',
    code: '0580/01/O/N/08 Q21',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Similar Triangles',
    topicAr: 'المثلثات المتشابهة',
    questionEn: 'In the diagram, BC is parallel to DE. Angle ABC = 68°. (a) Complete the statement: Triangle ABC is ... to triangle ADE. (b) AB = 12 cm, BC = 8 cm, DE = 10 cm. Calculate AD.',
    questionAr: 'في الشكل، BC يوازي DE. الزاوية ABC = 68°. (أ) أكمل العبارة: المثلث ABC ... للمثلث ADE. (ب) AB = 12 سم، BC = 8 سم، DE = 10 سم. احسب طول AD.',
    options: [
      { id: 'A', textEn: '(a) similar, (b) AD = 15 cm', textAr: '(أ) مشابه، (ب) AD = 15 سم' },
      { id: 'B', textEn: '(a) congruent, (b) AD = 15 cm', textAr: '(أ) مطابق، (ب) AD = 15 سم' },
      { id: 'C', textEn: '(a) similar, (b) AD = 14 cm', textAr: '(أ) مشابه، (ب) AD = 14 سم' },
      { id: 'D', textEn: '(a) equal, (b) AD = 16 cm', textAr: '(أ) متساوٍ، (ب) AD = 16 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Since BC || DE, corresponding angles are equal, so triangles ABC and ADE are similar. (b) Scale factor k = DE / BC = 10 / 8 = 1.25. So AD = k × AB = 1.25 × 12 = 15 cm.',
    explanationAr: '(أ) بالتوازي الزوايا المتناظرة متساوية فالمثلثان متشابهان. (ب) معامل التشابه = 10 ÷ 8 = 1.25. إذن AD = 1.25 × 12 = 15 سم.',
    solutionStepsEn: ['(a) Similar triangles due to equal angles.', '(b) AD / 12 = 10 / 8 => AD = 12 × 1.25 = 15 cm.'],
    solutionStepsAr: ['(أ) مثلثان متشابهان.', '(ب) AD = 12 × (10 ÷ 8) = 15 سم.'],
    marks: 3
  }
];
