import { IgQuestion } from '../types';

export const EDEXCEL_2021: IgQuestion[] = [
  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — JANUARY 2021
  // =========================================================================
  {
    id: 'ED-2021-JAN-1H-01',
    code: '4MA1/1H Jan 2021 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'Jan',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Currency Division & Ratio',
    topicAr: 'تحويل العملات وتقسيم النسبة',
    questionEn: 'Pieter changed 20 160 rand. He changed 3/10 into euros. He changed the rest into dollars, rupees and francs in ratio 9 : 5 : 2. How many more rands were changed into dollars than francs?',
    questionAr: 'قام بيتر بتحويل 20,160 راند. حوّل 3/10 منها إلى يورو. وحوّل الباقي إلى دولار وروبية وفرنك بنسبة 9 : 5 : 2. كم يزيد عدد الراندات المحولة إلى دولار عن المحولة إلى فرنك؟',
    options: [
      { id: 'A', textEn: '6174 rand', textAr: '6174 راند' },
      { id: 'B', textEn: '7938 rand', textAr: '7938 راند' },
      { id: 'C', textEn: '1764 rand', textAr: '1764 راند' },
      { id: 'D', textEn: '5292 rand', textAr: '5292 راند' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Euros portion = (3/10) × 20160 = 6048 rand. Remaining = 20160 - 6048 = 14112 rand. Total parts = 9 + 5 + 2 = 16. Difference between dollars and francs = 9 - 2 = 7 parts. Difference = (7 / 16) × 14112 = 6174 rand.',
    explanationAr: 'الجزء المحول ليورو = 6048. المتبقي = 14112. مجموع أجزاء النسبة = 16. الفرق بين الدولار والفرنك = 7 أجزاء. الفرق بالراند = (7 ÷ 16) × 14112 = 6174 راند.',
    solutionStepsEn: ['Euros = 6048 rand', 'Remaining = 14112 rand', 'Difference parts = 9 - 2 = 7', 'Difference = (7 / 16) × 14112 = 6174 rand'],
    solutionStepsAr: ['المتبقي = 14112 راند', 'فرق الأجزاء = 7 من 16', 'الفرق بالراند = 6174'],
    marks: 5
  },
  {
    id: 'ED-2021-JAN-1H-06',
    code: '4MA1/1H Jan 2021 Q6',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'Jan',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Standard Form Conversions',
    topicAr: 'الصيغة القياسية والأعداد العادية',
    questionEn: '(a) Write 2 840 000 000 in standard form.\n(b) Write 2.5 × 10⁻⁴ as an ordinary number.',
    questionAr: '(أ) اكتب العدد 2,840,000,000 بالصيغة القياسية.\n(ب) اكتب 2.5 × 10⁻⁴ كعدد عادي.',
    options: [
      { id: 'A', textEn: '(a) 2.84 × 10⁹; (b) 0.00025', textAr: '(أ) 2.84 × 10⁹؛ (ب) 0.00025' },
      { id: 'B', textEn: '(a) 2.84 × 10⁸; (b) 0.0025', textAr: '(أ) 2.84 × 10⁸؛ (ب) 0.0025' },
      { id: 'C', textEn: '(a) 28.4 × 10⁸; (b) 0.000025', textAr: '(أ) 28.4 × 10⁸؛ (ب) 0.000025' },
      { id: 'D', textEn: '(a) 2.84 × 10⁹; (b) 0.0025', textAr: '(أ) 2.84 × 10⁹؛ (ب) 0.0025' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 2 840 000 000 = 2.84 × 10⁹. (b) 2.5 × 10⁻⁴ = 0.00025.',
    explanationAr: '(أ) 2,840,000,000 = 2.84 × 10⁹. (ب) 2.5 × 10⁻⁴ = 0.00025.',
    solutionStepsEn: ['2 840 000 000 = 2.84 × 10⁹', '2.5 × 10⁻⁴ = 0.00025'],
    solutionStepsAr: ['2.84 × 10⁹', '0.00025'],
    marks: 2
  },

  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — APRIL / MAY 2021
  // =========================================================================
  {
    id: 'ED-2021-APR-1H-01',
    code: '4MA1/1H April 2021 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'Feb/March',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Average Flight Speed',
    topicAr: 'حساب متوسط سرعة الطائرة',
    questionEn: 'A plane flew from Madrid to Dubai. Distance = 5658 km. Flight time = 8 hours 12 minutes. Work out the average speed of the plane in km/h.',
    questionAr: 'طارت طائرة من مدريد إلى دبي. المسافة = 5658 كم. زمن الطيران = 8 ساعات و12 دقيقة. احسب متوسط سرعة الطائرة بـ كم/ساعة.',
    options: [
      { id: 'A', textEn: '690 km/h', textAr: '690 كم/ساعة' },
      { id: 'B', textEn: '680 km/h', textAr: '680 كم/ساعة' },
      { id: 'C', textEn: '700 km/h', textAr: '700 كم/ساعة' },
      { id: 'D', textEn: '650 km/h', textAr: '650 كم/ساعة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Flight time in hours = 8 + (12/60) = 8.2 hours. Average speed = Distance / Time = 5658 / 8.2 = 690 km/h.',
    explanationAr: 'زمن الطيران بالساعات = 8 + (12 ÷ 60) = 8.2 ساعة. متوسط السرعة = 5658 ÷ 8.2 = 690 كم/ساعة.',
    solutionStepsEn: ['Time = 8 + 0.2 = 8.2 hours', 'Average speed = 5658 / 8.2 = 690 km/h'],
    solutionStepsAr: ['الزمن = 8.2 ساعة', 'متوسط السرعة = 690 كم/ساعة'],
    marks: 3
  },
  {
    id: 'ED-2021-APR-1H-02',
    code: '4MA1/1H April 2021 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'Feb/March',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Arithmetic Sequence nth Term',
    topicAr: 'الحد النوني لمتتالية حسابية',
    questionEn: 'First 4 terms of an arithmetic sequence: 85, 79, 73, 67. Find an expression, in terms of n, for the nth term.',
    questionAr: 'الحدود الأربعة الأولى لمتتالية حسابية: 85، 79، 73، 67. أوجد تعبيراً بدلالة n للحد النوني.',
    options: [
      { id: 'A', textEn: '91 - 6n', textAr: '91 - 6n' },
      { id: 'B', textEn: '85 - 6n', textAr: '85 - 6n' },
      { id: 'C', textEn: '6n + 79', textAr: '6n + 79' },
      { id: 'D', textEn: '91 + 6n', textAr: '91 + 6n' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Common difference d = 79 - 85 = -6. First term a = 85. nth term = a + (n - 1)d = 85 + (n - 1)(-6) = 85 - 6n + 6 = 91 - 6n.',
    explanationAr: 'الفرق المشترك d = -6. الحد الأول a = 85. الحد النوني = 85 + (n - 1)(-6) = 91 - 6n.',
    solutionStepsEn: ['d = -6', 'a = 85', 'nth term = 85 - 6(n - 1) = 91 - 6n'],
    solutionStepsAr: ['الفرق = -6', 'الحد النوني = 91 - 6n'],
    marks: 2
  },
  {
    id: 'ED-2021-APR-2F-01',
    code: '4MA1/2F April 2021 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'Feb/March',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Ocean Coastlines Data',
    topicAr: 'بيانات أطوال سواحل المحيطات',
    questionEn: 'Coastline lengths (km): Arctic 45389, Atlantic 111866, Indian 66526, Pacific 135663, Southern 17968.\n(a) Which ocean has the greatest coastline length?\n(b) Write 17968 in words.\n(c) Round 66526 to the nearest thousand.',
    questionAr: 'أطوال السواحل (كم): المتجمد الشمالي 45389، الأطلسي 111866، الهندي 66526، الهادي 135663، المتجمد الجنوبي 17968.\n(أ) أي محيط له أطول ساحل؟\n(ب) اكتب العدد 17968 بالكلمات.\n(ج) قرّب العدد 66526 لأقرب ألف.',
    options: [
      { id: 'A', textEn: '(a) Pacific; (b) Seventeen thousand nine hundred and sixty-eight; (c) 67000', textAr: '(أ) المحيط الهادي؛ (ب) سبعة عشر ألفاً وتسعمائة وثمانية وستون؛ (ج) 67000' },
      { id: 'B', textEn: '(a) Atlantic; (b) Seventeen thousand; (c) 66500', textAr: '(أ) المحيط الأطلسي؛ (ب) سبعة عشر ألفاً؛ (ج) 66500' },
      { id: 'C', textEn: '(a) Pacific; (b) Seventeen thousand nine hundred; (c) 66000', textAr: '(أ) المحيط الهادي؛ (ب) سبعة عشر ألفاً وتسعمائة؛ (ج) 66000' },
      { id: 'D', textEn: '(a) Indian; (b) Seventeen thousand nine hundred and sixty-eight; (c) 67000', textAr: '(أ) المحيط الهندي؛ (ب) سبعة عشر ألفاً وتسعمائة وثمانية وستون؛ (ج) 67000' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Pacific has 135663 km (greatest). (b) 17968 = Seventeen thousand nine hundred and sixty-eight. (c) 66526 rounded to nearest 1000 = 67000.',
    explanationAr: '(أ) الهادي هو الأطول (135663 كم). (ب) 17968 بالكلمات = سبعة عشر ألفاً وتسعمائة وثمانية وستون. (ج) 66526 لأقرب ألف = 67000.',
    solutionStepsEn: ['Greatest = Pacific', '17968 in words = Seventeen thousand nine hundred and sixty-eight', '66526 ≈ 67000'],
    solutionStepsAr: ['الأطول = الهادي', 'الكتابة = سبعة عشر ألفاً وتسعمائة وثمانية وستون', 'التقريب = 67000'],
    marks: 3
  },
  {
    id: 'ED-2021-MJ-2H-10',
    code: '4MA1/2H May 2021 Q10',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'May/June',
    paper: 'Paper 2H (Higher)',
    topicEn: 'Probability Tree Diagram Without Replacement',
    topicAr: 'شجرة الاحتمالات بدون إرجاع',
    questionEn: 'A box contains 7 red sweets and 3 blue sweets. Two sweets are taken at random without replacement. Work out the probability that both sweets are red.',
    questionAr: 'صندوق يحتوي على 7 حلوى حمراء و 3 حلوى زرقاء. سُحبت قطعتان عشوائياً دون إرجاع. احسب احتمال أن تكون القطعتان حمراوين.',
    options: [
      { id: 'A', textEn: '7/15', textAr: '7/15' },
      { id: 'B', textEn: '49/100', textAr: '49/100' },
      { id: 'C', textEn: '21/90', textAr: '21/90' },
      { id: 'D', textEn: '14/15', textAr: '14/15' }
    ],
    correctAnswer: 'A',
    explanationEn: 'P(1st Red) = 7/10. P(2nd Red | 1st Red) = 6/9. P(Both Red) = (7/10) × (6/9) = 42 / 90 = 7 / 15.',
    explanationAr: 'احتمال الأولى حمراء = 7/10. احتمال الثانية حمراء = 6/9. الاحتمال الكلي = (7/10) × (6/9) = 42/90 = 7/15.',
    solutionStepsEn: ['P(1st Red) = 7/10', 'P(2nd Red) = 6/9', 'P(Both Red) = (7/10) × (6/9) = 42/90 = 7/15'],
    solutionStepsAr: ['الاحتمال = (7/10) × (6/9) = 42/90 = 7/15'],
    marks: 3
  },
  {
    id: 'ED-2021-NOV-1H-18',
    code: '4MA1/1H Nov 2021 Q18',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'Oct/Nov',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Algebraic Proof & Algebraic Fractions',
    topicAr: 'الإثبات الجبري وتبسيط الكسور الجبرية',
    questionEn: 'Simplify completely: (x² - 9) / (2x² + 5x - 3).',
    questionAr: 'بسّط الكسر الجبري لأبسط صورة: (x² - 9) ÷ (2x² + 5x - 3).',
    options: [
      { id: 'A', textEn: '(x - 3) / (2x - 1)', textAr: '(x - 3) / (2x - 1)' },
      { id: 'B', textEn: '(x + 3) / (2x - 1)', textAr: '(x + 3) / (2x - 1)' },
      { id: 'C', textEn: '(x - 3) / (2x + 1)', textAr: '(x - 3) / (2x + 1)' },
      { id: 'D', textEn: '-9 / (5x - 3)', textAr: '-9 / (5x - 3)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator: x² - 9 = (x - 3)(x + 3). Denominator: 2x² + 5x - 3 = (2x - 1)(x + 3). Cancel (x + 3): result = (x - 3) / (2x - 1).',
    explanationAr: 'البسط = (x - 3)(x + 3). المقام = (2x - 1)(x + 3). باختصار (x + 3) نحصل على (x - 3) / (2x - 1).',
    solutionStepsEn: ['Numerator = (x - 3)(x + 3)', 'Denominator = (2x - 1)(x + 3)', 'Simplified = (x - 3) / (2x - 1)'],
    solutionStepsAr: ['البسط = (x - 3)(x + 3)', 'المقام = (2x - 1)(x + 3)', 'الناتج = (x - 3) / (2x - 1)'],
    marks: 3
  }
];
