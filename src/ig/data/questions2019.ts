import { IgQuestion } from '../types';

export const QUESTIONS_2019: IgQuestion[] = [
  // ==========================================
  // FEB/MARCH 2019 - PAPER 42 (0580/42)
  // ==========================================
  {
    id: 'IG-2019-FM-42-01',
    code: '0580/42/F/M/19 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Feb/March',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'Amol and Priya deliver 645 parcels in the ratio Amol : Priya = 11 : 4. (a) Calculate the number of parcels Amol delivers. (b) Amol drives his truck at an average speed of 50 km/h. He leaves at 07:00 and arrives at 11:15. Calculate the distance he drives.',
    questionAr: 'يقوم أمول وبريا بتوصيل 645 طرداً بنسبة أمول : بريا = 11 : 4. (أ) احسب عدد الطرود التي يوصلها أمول. (ب) يقود أمول شاحنته بسرعة متوسطة 50 كم/ساعة. يغادر الساعة 07:00 ويصل الساعة 11:15. احسب المسافة التي يقطعها.',
    options: [
      { id: 'A', textEn: '(a) 473 parcels; (b) 212.5 km', textAr: '(أ) 473 طرداً؛ (ب) 212.5 كم' },
      { id: 'B', textEn: '(a) 450 parcels; (b) 200.0 km', textAr: '(أ) 450 طرداً؛ (ب) 200.0 كم' },
      { id: 'C', textEn: '(a) 473 parcels; (b) 215.0 km', textAr: '(أ) 473 طرداً؛ (ب) 215.0 كم' },
      { id: 'D', textEn: '(a) 172 parcels; (b) 212.5 km', textAr: '(أ) 172 طرداً؛ (ب) 212.5 كم' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Total parts = 11 + 4 = 15. Amol = (11 / 15) × 645 = 473. (b) Time = 4 hours 15 minutes = 4.25 hours. Distance = Speed × Time = 50 × 4.25 = 212.5 km.',
    explanationAr: '(أ) مجموع الأجزاء = 15. نصيب أمول = (11 ÷ 15) × 645 = 473 طرداً. (ب) الزمن من 07:00 إلى 11:15 هو 4.25 ساعة. المسافة = 50 × 4.25 = 212.5 كم.',
    solutionStepsEn: ['Amol = (11 / 15) × 645 = 473 parcels', 'Time = 4.25 hours', 'Distance = 50 × 4.25 = 212.5 km'],
    solutionStepsAr: ['أمول = (11 ÷ 15) × 645 = 473 طرداً', 'الزمن = 4.25 ساعة', 'المسافة = 50 × 4.25 = 212.5 كم']
  },
  {
    id: 'IG-2019-FM-42-02',
    code: '0580/42/F/M/19 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Feb/March',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Solve the simultaneous equations: 6x + 5y = 27 and 5x - 3y = 44.',
    questionAr: 'حل المعادلات الآنية: 6x + 5y = 27 و 5x - 3y = 44.',
    options: [
      { id: 'A', textEn: 'x = 7, y = -3', textAr: 'x = 7، y = -3' },
      { id: 'B', textEn: 'x = 7, y = 3', textAr: 'x = 7، y = 3' },
      { id: 'C', textEn: 'x = -7, y = 3', textAr: 'x = -7، y = 3' },
      { id: 'D', textEn: 'x = 5, y = -1', textAr: 'x = 5، y = -1' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply first by 3: 18x + 15y = 81. Multiply second by 5: 25x - 15y = 220. Add them: 43x = 301 => x = 7. Substitute x = 7: 6(7) + 5y = 27 => 42 + 5y = 27 => 5y = -15 => y = -3.',
    explanationAr: 'بضرب المعادلة الأولى في 3: 18x + 15y = 81، والثانية في 5: 25x - 15y = 220. بالجمع نجد 43x = 301 ومنها x = 7. بالتعويض نجد y = -3.',
    solutionStepsEn: ['18x + 15y = 81', '25x - 15y = 220', '43x = 301 => x = 7, y = -3'],
    solutionStepsAr: ['بالجمع: 43x = 301 => x = 7', 'بالتعويض: 5y = -15 => y = -3']
  },

  // ==========================================
  // FEB/MARCH 2019 - PAPER 22 (0580/22)
  // ==========================================
  {
    id: 'IG-2019-FM-22-01',
    code: '0580/22/F/M/19 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Feb/March',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'y is directly proportional to (x - 4). When x = 16, y = 3. Find y in terms of x.',
    questionAr: 'y تتناسب طردياً مع (x - 4). عندما x = 16، تكون y = 3. أوجد y بدلالة x.',
    options: [
      { id: 'A', textEn: 'y = 0.25(x - 4)', textAr: 'y = 0.25(x - 4)' },
      { id: 'B', textEn: 'y = 4(x - 4)', textAr: 'y = 4(x - 4)' },
      { id: 'C', textEn: 'y = 0.5(x - 4)', textAr: 'y = 0.5(x - 4)' },
      { id: 'D', textEn: 'y = 3(x - 4)', textAr: 'y = 3(x - 4)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'y = k(x - 4). Substitute x = 16, y = 3: 3 = k(16 - 4) => 3 = 12k => k = 3/12 = 0.25. So y = 0.25(x - 4).',
    explanationAr: 'بما أن y = k(x - 4)، نعوض بالقيم: 3 = 12k ومنها k = 0.25. إذن y = 0.25(x - 4).',
    solutionStepsEn: ['y = k(x - 4)', '3 = k(12) => k = 0.25', 'y = 0.25(x - 4)'],
    solutionStepsAr: ['y = k(x - 4)', 'k = 3 ÷ 12 = 0.25', 'y = 0.25(x - 4)']
  },

  // ==========================================
  // MAY/JUNE 2019 - PAPER 42 (0580/42)
  // ==========================================
  {
    id: 'IG-2019-MJ-42-01',
    code: '0580/42/M/J/19 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Factorise completely: 12ab³ + 18a³b²',
    questionAr: 'حلّل تحليلاً كاملاً: 12ab³ + 18a³b²',
    options: [
      { id: 'A', textEn: '6ab²(2b + 3a²)', textAr: '6ab²(2b + 3a²)' },
      { id: 'B', textEn: '6a²b²(2b + 3a)', textAr: '6a²b²(2b + 3a)' },
      { id: 'C', textEn: '3ab²(4b + 6a²)', textAr: '3ab²(4b + 6a²)' },
      { id: 'D', textEn: '6ab(2b² + 3a²b)', textAr: '6ab(2b² + 3a²b)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The HCF of 12 and 18 is 6. The HCF of ab³ and a³b² is ab². Taking out 6ab² gives: 6ab²(2b + 3a²).',
    explanationAr: 'العامل المشترك الأكبر للأعداد هو 6 وللرموز هو ab². عند أخذه كعامل مشترك يبقى داخل القوس (2b + 3a²).',
    solutionStepsEn: ['HCF = 6ab²', '12ab³ / 6ab² = 2b', '18a³b² / 6ab² = 3a²', 'Result = 6ab²(2b + 3a²)'],
    solutionStepsAr: ['العامل المشترك = 6ab²', 'التحليل = 6ab²(2b + 3a²)']
  },

  // ==========================================
  // OCT/NOV 2019 - PAPER 41 (0580/41)
  // ==========================================
  {
    id: 'IG-2019-ON-41-01',
    code: '0580/41/O/N/19 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: 'A house price decreased from $82,500 to $77,500. Calculate the percentage decrease, correct to 3 significant figures.',
    questionAr: 'انخفض سعر منزل من 82,500$ إلى 77,500$. احسب النسبة المئوية للانخفاض مقربة لثلاثة أرقام معنوية.',
    options: [
      { id: 'A', textEn: '6.06%', textAr: '6.06%' },
      { id: 'B', textEn: '6.45%', textAr: '6.45%' },
      { id: 'C', textEn: '5.88%', textAr: '5.88%' },
      { id: 'D', textEn: '6.10%', textAr: '6.10%' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Decrease = 82500 - 77500 = 5000. Percentage decrease = (5000 / 82500) × 100 = 6.0606...% ≈ 6.06%.',
    explanationAr: 'مقدار الانخفاض = 5000$. النسبة المئوية للانخفاض = (5000 ÷ 82500) × 100% = 6.06%.',
    solutionStepsEn: ['Difference = 5000', 'Percentage = (5000 / 82500) × 100 = 6.06%'],
    solutionStepsAr: ['مقدار الانخفاض = 5000', 'النسبة المئوية = 6.06%']
  },
  {
    id: 'IG-2019-ON-41-02',
    code: '0580/41/O/N/19 Q7(a)',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Solve the equation: 2x² + 5x - 12 = 0.',
    questionAr: 'حل المعادلة التربيعية: 2x² + 5x - 12 = 0.',
    options: [
      { id: 'A', textEn: 'x = 1.5 or x = -4', textAr: 'x = 1.5 أو x = -4' },
      { id: 'B', textEn: 'x = -1.5 or x = 4', textAr: 'x = -1.5 أو x = 4' },
      { id: 'C', textEn: 'x = 3 or x = -4', textAr: 'x = 3 أو x = -4' },
      { id: 'D', textEn: 'x = 1.5 or x = 4', textAr: 'x = 1.5 أو x = 4' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Factorising (2x - 3)(x + 4) = 0 gives x = 3/2 = 1.5 or x = -4.',
    explanationAr: 'بالتحليل إلى عاملين: (2x - 3)(x + 4) = 0 ومنها x = 1.5 أو x = -4.',
    solutionStepsEn: ['(2x - 3)(x + 4) = 0', '2x - 3 = 0 => x = 1.5', 'x + 4 = 0 => x = -4'],
    solutionStepsAr: ['(2x - 3)(x + 4) = 0', 'x = 1.5 أو x = -4']
  },
  {
    id: 'IG-2019-ON-42-01',
    code: '0580/42/O/N/19 Q5(a)',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Functions & Transformations',
    topicAr: 'الدوال والتحويلات الهندسة',
    questionEn: 'f(x) = 3x - 2 and g(x) = x² + 1. Find: (i) f(5), (ii) fg(x) in its simplest form.',
    questionAr: 'بفرض f(x) = 3x - 2 و g(x) = x² + 1. أوجد: (i) f(5)، (ii) fg(x) في أبسط صورة.',
    options: [
      { id: 'A', textEn: '(i) 13; (ii) 3x² + 1', textAr: '(i) 13؛ (ii) 3x² + 1' },
      { id: 'B', textEn: '(i) 13; (ii) 3x² - 1', textAr: '(i) 13؛ (ii) 3x² - 1' },
      { id: 'C', textEn: '(i) 15; (ii) 3x² + 1', textAr: '(i) 15؛ (ii) 3x² + 1' },
      { id: 'D', textEn: '(i) 13; (ii) 9x² - 12x + 5', textAr: '(i) 13؛ (ii) 9x² - 12x + 5' }
    ],
    correctAnswer: 'A',
    explanationEn: '(i) f(5) = 3(5) - 2 = 13. (ii) fg(x) = f(x² + 1) = 3(x² + 1) - 2 = 3x² + 3 - 2 = 3x² + 1.',
    explanationAr: '(i) f(5) = 15 - 2 = 13. (ii) fg(x) = 3(x² + 1) - 2 = 3x² + 1.',
    solutionStepsEn: ['f(5) = 3(5) - 2 = 13', 'fg(x) = 3(x² + 1) - 2 = 3x² + 1'],
    solutionStepsAr: ['f(5) = 13', 'fg(x) = 3x² + 1']
  },
  {
    id: 'IG-2019-ON-21-01',
    code: '0580/21/O/N/19 Q15',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Make t the subject of the formula: A = P(1 + rt/100).',
    questionAr: 'اجعل t موضوع المعادلة: A = P(1 + rt/100).',
    options: [
      { id: 'A', textEn: 't = 100(A - P) / (Pr)', textAr: 't = 100(A - P) / (Pr)' },
      { id: 'B', textEn: 't = 100(A - P) / r', textAr: 't = 100(A - P) / r' },
      { id: 'C', textEn: 't = (A - P) / (100Pr)', textAr: 't = (A - P) / (100Pr)' },
      { id: 'D', textEn: 't = 100A - P / (Pr)', textAr: 't = 100A - P / (Pr)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Divide by P: A/P = 1 + rt/100 => A/P - 1 = rt/100 => (A - P)/P = rt/100 => t = 100(A - P) / (Pr).',
    explanationAr: 'بقاسم الطرفين على P ثم طرح 1 وضرب الطرفين في 100 ÷ r نصل إلى t = 100(A - P) / (Pr).',
    solutionStepsEn: ['A/P - 1 = rt/100', '(A - P)/P = rt/100', 't = 100(A - P) / (Pr)'],
    solutionStepsAr: ['A/P - 1 = rt/100', 't = 100(A - P) / (Pr)']
  },
  {
    id: 'IG-2019-ON-22-01',
    code: '0580/22/O/N/19 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: 'Write 0.0000574 in standard form.',
    questionAr: 'اكتب العدد 0.0000574 بالصيغة القياسية (الصيغة العلمية).',
    options: [
      { id: 'A', textEn: '5.74 × 10⁻⁵', textAr: '5.74 × 10⁻⁵' },
      { id: 'B', textEn: '5.74 × 10⁻⁶', textAr: '5.74 × 10⁻⁶' },
      { id: 'C', textEn: '57.4 × 10⁻⁶', textAr: '57.4 × 10⁻⁶' },
      { id: 'D', textEn: '5.74 × 10⁵', textAr: '5.74 × 10⁵' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Move decimal point 5 places to the right: 5.74 × 10⁻⁵.',
    explanationAr: 'تحريك العلامة العشرية 5 خانات لليمين يعطي الأس -5: 5.74 × 10⁻⁵.',
    solutionStepsEn: ['Decimal moved 5 places right => exponent -5', '= 5.74 × 10⁻⁵'],
    solutionStepsAr: ['تحريك العلامة 5 خانات لليمين', 'الناتج = 5.74 × 10⁻⁵']
  },
  {
    id: 'IG-2019-ON-11-01',
    code: '0580/11/O/N/19 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'Calculate simple interest on $1200 invested for 3 years at a rate of 4.5% per year.',
    questionAr: 'احسب الفائدة البسيطة لمبلغ 1200 دولار مُستثمر لمدة 3 سنوات بمعدل 4.5% سنوياً.',
    options: [
      { id: 'A', textEn: '$162', textAr: '162$' },
      { id: 'B', textEn: '$150', textAr: '150$' },
      { id: 'C', textEn: '$180', textAr: '180$' },
      { id: 'D', textEn: '$1620', textAr: '1620$' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Simple Interest = (P × r × t) / 100 = (1200 × 4.5 × 3) / 100 = 162.',
    explanationAr: 'الفائدة البسيطة = (المبلغ × المعدل × الزمن) ÷ 100 = (1200 × 4.5 × 3) ÷ 100 = 162 دولاراً.',
    solutionStepsEn: ['I = (P × r × t) / 100', 'I = (1200 × 4.5 × 3) / 100 = 162'],
    solutionStepsAr: ['الفائدة = (1200 × 4.5 × 3) ÷ 100', '= 162$']
  },
  {
    id: 'IG-2019-MJ-11-01',
    code: '0580/11/M/J/19 Q12',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: 'Work out: 3/8 + 1/4. Give your answer as a fraction in its simplest form.',
    questionAr: 'احسب ناتج: 3/8 + 1/4. اكتب إجابتك في صورة كسر في أبسط صورة.',
    options: [
      { id: 'A', textEn: '5/8', textAr: '5/8' },
      { id: 'B', textEn: '1/3', textAr: '1/3' },
      { id: 'C', textEn: '4/12', textAr: '4/12' },
      { id: 'D', textEn: '7/8', textAr: '7/8' }
    ],
    correctAnswer: 'A',
    explanationEn: '1/4 = 2/8. Adding 3/8 + 2/8 = 5/8.',
    explanationAr: 'بتوحيد المقامات: 1/4 = 2/8. إذن 3/8 + 2/8 = 5/8.',
    solutionStepsEn: ['1/4 = 2/8', '3/8 + 2/8 = 5/8'],
    solutionStepsAr: ['توحيد المقامات على 8', '3/8 + 2/8 = 5/8']
  }
];
