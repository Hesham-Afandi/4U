import { IgQuestion } from '../types';

export const EDEXCEL_2016: IgQuestion[] = [
  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — MAY/JUNE 2016 — PAPER 4HR
  // =========================================================================
  {
    id: 'ED-2016-MJ-4HR-01',
    code: '4MA0/4HR May 2016 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'May/June',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Transformations: Enlargement & Scale Factor',
    topicAr: 'التحويلات الهندشية: التكبير ومعامل المقياس',
    questionEn: 'Shape S is on a grid. (a) Enlarge shape S with scale factor 2 and centre (1, 1). Label the new shape T.\n(b) Describe fully the single transformation that maps shape T onto shape S.',
    questionAr: 'الشكل S مرسوم على شبكة إحداثيات.\n(أ) كبّر الشكل S بمعامل تكبير 2 ومركز التكبير (1, 1). سمّ الشكل الجديد T.\n(ب) صف تماماً التحويل الهندسي الوحيد الذي ينقل الشكل T إلى الشكل S.',
    options: [
      { id: 'A', textEn: '(a) Enlarged shape; (b) Enlargement with scale factor 0.5 and centre (1, 1)', textAr: '(أ) شكل مكبر؛ (ب) تكبير بمعامل 0.5 ومركز (1, 1)' },
      { id: 'B', textEn: '(a) Enlarged shape; (b) Reduction with scale factor 2 and centre (0, 0)', textAr: '(أ) شكل مكبر؛ (ب) تصغير بمعامل 2 ومركز (0, 0)' },
      { id: 'C', textEn: '(a) Enlarged shape; (b) Translation by vector (-1, -1)', textAr: '(أ) شكل مكبر؛ (ب) إزاحة بالمتجه (-1, -1)' },
      { id: 'D', textEn: '(a) Enlarged shape; (b) Rotation 180° about (1, 1)', textAr: '(أ) شكل مكبر؛ (ب) دوران 180° حول (1, 1)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The inverse transformation of an enlargement with scale factor 2 and centre (1, 1) is an enlargement with scale factor 1/2 (or 0.5) and the same centre (1, 1).',
    explanationAr: 'التحويل العكسي للتكبير بمعامل 2 ومركز (1, 1) هو تكبير بمعامل 0.5 ونفس المركز (1, 1).',
    solutionStepsEn: ['Original scale factor = 2', 'Inverse scale factor = 1 / 2 = 0.5', 'Centre remains (1, 1)'],
    solutionStepsAr: ['معامل التكبير الأصلي = 2', 'معامل التكبير العكسي = 0.5', 'المركز ثابت (1, 1)'],
    marks: 3
  },
  {
    id: 'ED-2016-MJ-4HR-02',
    code: '4MA0/4HR May 2016 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'May/June',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Linear Equations & Algebraic Expansion',
    topicAr: 'المعادلات الخطية والفك الجبري',
    questionEn: '(a) Solve 6t - 3 = 2t + 9.\n(b) Expand and simplify 3(2y + 2) + 2(y - 1).\n(c) Simplify fully 4wxy / (8xy).',
    questionAr: '(أ) حل المعادلة 6t - 3 = 2t + 9.\n(ب) فك وبسّط 3(2y + 2) + 2(y - 1).\n(ج) بسّط تماماً الكسر 4wxy ÷ (8xy).',
    options: [
      { id: 'A', textEn: '(a) t = 3; (b) 8y + 4; (c) w / 2', textAr: '(أ) t = 3؛ (ب) 8y + 4؛ (ج) w / 2' },
      { id: 'B', textEn: '(a) t = 3; (b) 8y + 8; (c) 0.5wxy', textAr: '(أ) t = 3؛ (ب) 8y + 8؛ (ج) 0.5wxy' },
      { id: 'C', textEn: '(a) t = 2; (b) 7y + 4; (c) w / 4', textAr: '(أ) t = 2؛ (ب) 7y + 4؛ (ج) w / 4' },
      { id: 'D', textEn: '(a) t = 4; (b) 8y + 4; (c) 2w', textAr: '(أ) t = 4؛ (ب) 8y + 4؛ (ج) 2w' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 6t - 2t = 9 + 3 => 4t = 12 => t = 3. (b) 6y + 6 + 2y - 2 = 8y + 4. (c) (4wxy) / (8xy) = 4w/8 = w/2.',
    explanationAr: '(أ) 4t = 12 => t = 3. (ب) 6y + 6 + 2y - 2 = 8y + 4. (ج) اختصار 4/8 = 1/2 وبحذف xy يتبقى w/2.',
    solutionStepsEn: ['4t = 12 => t = 3', '6y + 6 + 2y - 2 = 8y + 4', '4wxy / 8xy = w / 2'],
    solutionStepsAr: ['4t = 12 => t = 3', '6y + 6 + 2y - 2 = 8y + 4', 'اختصار xy يتبقى w/2'],
    marks: 7
  },
  {
    id: 'ED-2016-MJ-4HR-03',
    code: '4MA0/4HR May 2016 Q3',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'May/June',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Percentages & Speed Calculations',
    topicAr: 'النسب المئوية وحسابات السرعة',
    questionEn: 'There were 2.1 million people living in Dubai in 2013; 1.75 million were born outside Dubai.\n(a) Calculate 1.75 as a percentage of 2.1 correct to 1 decimal place.\n(b) Exchange rate: £1 = 5.52 AED. Shoes in Dubai cost 343 AED; in UK they cost £54.99. How much more expensive are they in Dubai (to nearest AED)?\n(c) A flight travels 5522 km in 7 hours 24 minutes. Calculate average speed in km/h to 3 s.f.',
    questionAr: 'كان هناك 2.1 مليون شخص يعيشون في دبي عام 2013؛ 1.75 مليون منهم لم يولدوا في دبي.\n(أ) احسب 1.75 كنسبة مئوية من 2.1 مقربة لأقرب منزلة عشرية واحدة.\n(ب) سعر الصرف £1 = 5.52 درهم. حذاء في دبي بـ 343 درهم وفي بريطانيا بـ £54.99. كم يزيد سعره في دبي لأقرب درهم؟\n(ج) طائرة قطعت 5522 كم في 7 ساعات و24 دقيقة. احسب سرعتها المتوسطة بـ km/h مقربة لأقرب 3 أرقام معنوية.',
    options: [
      { id: 'A', textEn: '(a) 83.3%; (b) 39 AED; (c) 746 km/h', textAr: '(أ) 83.3%؛ (ب) 39 درهم؛ (ج) 746 كم/س' },
      { id: 'B', textEn: '(a) 83.3%; (b) 45 AED; (c) 750 km/h', textAr: '(أ) 83.3%؛ (ب) 45 درهم؛ (ج) 750 كم/س' },
      { id: 'C', textEn: '(a) 80.0%; (b) 39 AED; (c) 746 km/h', textAr: '(أ) 80.0%؛ (ب) 39 درهم؛ (ج) 746 كم/س' },
      { id: 'D', textEn: '(a) 85.2%; (b) 50 AED; (c) 730 km/h', textAr: '(أ) 85.2%؛ (ب) 50 درهم؛ (ج) 730 كم/س' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) (1.75 / 2.1) × 100% = 83.333... ≈ 83.3%. (b) UK price in AED = 54.99 × 5.52 = 303.54 AED. Difference = 343 - 303.54 = 39.46 ≈ 39 AED. (c) 7h 24m = 7.4 hours. Speed = 5522 / 7.4 = 746.216... ≈ 746 km/h.',
    explanationAr: '(أ) (1.75 ÷ 2.1) × 100% = 83.3%. (ب) سعر بريطانيا بالدرهم = 54.99 × 5.52 = 303.54 درهم. الفرق = 343 - 303.54 = 39 درهم. (ج) 7 ساعات و24 دقيقة = 7.4 ساعة. السرعة = 5522 ÷ 7.4 = 746 كم/س.',
    solutionStepsEn: ['Percentage = (1.75/2.1) × 100 = 83.3%', 'UK price = 54.99 × 5.52 = 303.54 AED => Diff = 39 AED', '7h 24m = 7.4h => Speed = 5522 / 7.4 = 746 km/h'],
    solutionStepsAr: ['النسبة = 83.3%', 'سعر بريطانيا = 303.54 درهم => الفرق = 39 درهم', 'الزمن = 7.4 ساعة => السرعة = 746 كم/س'],
    marks: 8
  },
  {
    id: 'ED-2016-MJ-4HR-06',
    code: '4MA0/4HR May 2016 Q6',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'May/June',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Statistics: Median & Mean with Algebra',
    topicAr: 'الإحصاء: الوسيط والوسط الحسابي مع الجبر',
    questionEn: 'A list of 4 numbers in ascending order: 3, 6, x, y. The median is 8 and the mean is 11. Find the values of x and y.',
    questionAr: 'قائمة من 4 أعداد مرتبة تصاعدياً: 3، 6، x، y. الوسيط يساوي 8 والمتوسط الحسابي يساوي 11. أوجد قيمتي x و y.',
    options: [
      { id: 'A', textEn: 'x = 10, y = 25', textAr: 'x = 10، y = 25' },
      { id: 'B', textEn: 'x = 10, y = 21', textAr: 'x = 10، y = 21' },
      { id: 'C', textEn: 'x = 8, y = 27', textAr: 'x = 8، y = 27' },
      { id: 'D', textEn: 'x = 12, y = 23', textAr: 'x = 12، y = 23' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Median of 4 numbers = (6 + x)/2 = 8 => 6 + x = 16 => x = 10. Mean = (3 + 6 + 10 + y)/4 = 11 => 19 + y = 44 => y = 25.',
    explanationAr: 'الوسيط = (6 + x) ÷ 2 = 8 => 6 + x = 16 => x = 10. المتوسط = (3 + 6 + 10 + y) ÷ 4 = 11 => 19 + y = 44 => y = 25.',
    solutionStepsEn: ['(6 + x) / 2 = 8 => 6 + x = 16 => x = 10', 'Sum = 11 × 4 = 44', '3 + 6 + 10 + y = 44 => 19 + y = 44 => y = 25'],
    solutionStepsAr: ['6 + x = 16 إذن x = 10', 'المجموع الكلي = 44', '19 + y = 44 إذن y = 25'],
    marks: 3
  },
  {
    id: 'ED-2016-MJ-4HR-07',
    code: '4MA0/4HR May 2016 Q7',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'May/June',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Area Between Concentric Circles',
    topicAr: 'المساحة المحصورة بين دائرتين متحدتي المركز',
    questionEn: 'Two concentric circles have centre O. The radius of the inner circle is 3 cm. The width of the shaded region between the two circles is 2 cm. Calculate the area of the shaded region correct to 3 significant figures.',
    questionAr: 'دائرتان متحدتا المركز O. نصف قطر الدائرة الداخلية يساوي 3 سم. وعرض المنطقة المظللة بين الدائرتين يساوي 2 سم. احسب مساحة المنطقة المظللة مقربة لأقرب 3 أرقام معنوية.',
    diagramSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-48 h-48 mx-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-2"><circle cx="100" cy="100" r="80" fill="#0d9488" opacity="0.3" stroke="#0d9488" stroke-width="2"/><circle cx="100" cy="100" r="48" fill="#f8fafc" class="dark:fill-slate-900" stroke="#0d9488" stroke-width="2"/><line x1="100" y1="100" x2="148" y2="100" stroke="#0369a1" stroke-width="2"/><line x1="148" y1="100" x2="180" y2="100" stroke="#e11d48" stroke-width="2"/><circle cx="100" cy="100" r="3" fill="#334155"/><text x="120" y="92" fill="#0369a1" font-size="12" font-weight="bold">3 cm</text><text x="156" y="92" fill="#e11d48" font-size="12" font-weight="bold">2 cm</text></svg>',
    options: [
      { id: 'A', textEn: '50.3 cm²', textAr: '50.3 سم²' },
      { id: 'B', textEn: '78.5 cm²', textAr: '78.5 سم²' },
      { id: 'C', textEn: '28.3 cm²', textAr: '28.3 سم²' },
      { id: 'D', textEn: '100.5 cm²', textAr: '100.5 سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Radius of outer circle = 3 + 2 = 5 cm. Shaded Area = π(5²) - π(3²) = 25π - 9π = 16π ≈ 50.265... ≈ 50.3 cm².',
    explanationAr: 'نصف قطر الدائرة الخارجية = 3 + 2 = 5 سم. المساحة المظللة = π(5²) - π(3²) = 25π - 9π = 16π ≈ 50.3 سم².',
    solutionStepsEn: ['Outer radius R = 3 + 2 = 5 cm', 'Area = π(R² - r²) = π(25 - 9) = 16π', '16π ≈ 50.3 cm²'],
    solutionStepsAr: ['نصف القطر الخارجي = 5 سم', 'المساحة = 16π', '16 × 3.14159 ≈ 50.3 سم²'],
    marks: 3
  },
  {
    id: 'ED-2016-MJ-4HR-10',
    code: '4MA0/4HR May 2016 Q10',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'May/June',
    paper: 'Paper 4HR (Higher)',
    topicEn: 'Simultaneous Equations',
    topicAr: 'المعادلات الخطية الآنية',
    questionEn: 'Solve the simultaneous equations:\n4x + 3y = 6\n3x + 5y = -1\nShow clear algebraic working.',
    questionAr: 'حل المعادلتين الآنيتين:\n4x + 3y = 6\n3x + 5y = -1\nمع توضيح الخطوات الجبرية.',
    options: [
      { id: 'A', textEn: 'x = 3, y = -2', textAr: 'x = 3، y = -2' },
      { id: 'B', textEn: 'x = 3, y = 2', textAr: 'x = 3، y = 2' },
      { id: 'C', textEn: 'x = -3, y = 6', textAr: 'x = -3، y = 6' },
      { id: 'D', textEn: 'x = 2, y = -2', textAr: 'x = 2، y = -2' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply 1st eq by 3: 12x + 9y = 18. Multiply 2nd eq by 4: 12x + 20y = -4. Subtracting: -11y = 22 => y = -2. Substitute y = -2 into 1st eq: 4x - 6 = 6 => 4x = 12 => x = 3.',
    explanationAr: 'بضرب الأولى في 3 والثانية في 4 والطرح: -11y = 22 => y = -2. بالتعويض: 4x - 6 = 6 => 4x = 12 => x = 3.',
    solutionStepsEn: ['12x + 9y = 18', '12x + 20y = -4', 'Subtracting: -11y = 22 => y = -2', '4x + 3(-2) = 6 => 4x = 12 => x = 3'],
    solutionStepsAr: ['12x + 9y = 18', '12x + 20y = -4', '-11y = 22 إذن y = -2', '4x = 12 إذن x = 3'],
    marks: 4
  }
];
