import { IgQuestion } from '../types';

export const QUESTIONS_2018: IgQuestion[] = [
  // ==========================================
  // FEB/MARCH 2018 - PAPER 32 (0580/32)
  // ==========================================
  {
    id: 'IG-2018-FM-32-01',
    code: '0580/32/F/M/18 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Feb/March',
    paper: 'Paper 3 (Core)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'Harry is allowed 25% extra time for his Geography exam. The normal exam time is 1 hour 40 minutes. Calculate the total time Harry has for this exam. Give your answer in hours and minutes.',
    questionAr: 'يُسمح لـ "هاري" بوقت إضافي بنسبة 25% لامتحان الجغرافيا. الوقت العادي للامتحان هو ساعة و 40 دقيقة. احسب إجمالي الوقت المتاح لهاري لهذا الامتحان. أعطِ إجابتك بالساعات والدقائق.',
    options: [
      { id: 'A', textEn: '2 hours 5 minutes', textAr: 'ساعتان و 5 دقائق' },
      { id: 'B', textEn: '2 hours 15 minutes', textAr: 'ساعتان و 15 دقيقة' },
      { id: 'C', textEn: '2 hours 0 minutes', textAr: 'ساعتان بالضبط' },
      { id: 'D', textEn: '1 hour 55 minutes', textAr: 'ساعة و 55 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Normal time = 100 minutes. 25% of 100 = 25 minutes extra. Total time = 100 + 25 = 125 minutes = 2 hours 5 minutes.',
    explanationAr: 'الوقت العادي = 100 دقيقة. 25% من 100 = 25 دقيقة إضافية. الوقت الإجمالي = 100 + 25 = 125 دقيقة = ساعتان و 5 دقائق.',
    solutionStepsEn: ['Normal duration = 60 + 40 = 100 minutes', 'Extra time = 0.25 × 100 = 25 minutes', 'Total time = 125 mins = 2 hours 5 minutes'],
    solutionStepsAr: ['الوقت الأصلي = 100 دقيقة', 'الوقت الإضافي = 0.25 × 100 = 25 دقيقة', 'الوقت الكلي = 125 دقيقة = ساعتان و 5 دقائق']
  },
  {
    id: 'IG-2018-FM-32-02',
    code: '0580/32/F/M/18 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Feb/March',
    paper: 'Paper 3 (Core)',
    topicEn: 'Statistics & Data Handling',
    topicAr: 'الإحصاء وتحليل البيانات',
    questionEn: 'The number of exams taken by 196 candidates is recorded: 5 exams (27 candidates), 6 exams (42), 7 exams (63), 8 exams (64). Find the range, median, and mean number of exams taken.',
    questionAr: 'عدد الامتحانات التي يقدمها كل من 196 مرشحاً: 5 امتحانات (27 مرشحاً)، 6 (42)، 7 (63)، 8 (64). أوجد المدى، الوسيط، والمتوسط لعدد الامتحانات.',
    options: [
      { id: 'A', textEn: 'Range = 3, Median = 7, Mean = 6.84', textAr: 'المدى = 3، الوسيط = 7، المتوسط = 6.84' },
      { id: 'B', textEn: 'Range = 4, Median = 6.5, Mean = 6.50', textAr: 'المدى = 4، الوسيط = 6.5، المتوسط = 6.50' },
      { id: 'C', textEn: 'Range = 3, Median = 7, Mean = 7.00', textAr: 'المدى = 3، الوسيط = 7، المتوسط = 7.00' },
      { id: 'D', textEn: 'Range = 3, Median = 6, Mean = 6.84', textAr: 'المدى = 3، الوسيط = 6، المتوسط = 6.84' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Range = 8 - 5 = 3. Median position is between 98th and 99th values, which falls in 7. Mean = (5×27 + 6×42 + 7×63 + 8×64)/196 = 1340/196 ≈ 6.84.',
    explanationAr: 'المدى = 8 - 5 = 3. الوسيط يقع عند القيمة 98 و99 وهي 7. المتوسط = (135 + 252 + 441 + 512) ÷ 196 = 1340 ÷ 196 = 6.84.',
    solutionStepsEn: ['Range = max - min = 8 - 5 = 3', 'Cumulative frequencies: 27, 69, 132, 196 -> Median = 7', 'Mean = 1340 / 196 = 6.84'],
    solutionStepsAr: ['المدى = 8 - 5 = 3', 'الوسيط في الفئة التراكمية الثالثة = 7', 'المتوسط = 1340 ÷ 196 = 6.84']
  },

  // ==========================================
  // FEB/MARCH 2018 - PAPER 42 (0580/42)
  // ==========================================
  {
    id: 'IG-2018-FM-42-01',
    code: '0580/42/F/M/18 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Feb/March',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'A store sells dress fabric for $2.97 per metre. A customer buys 9 metres. (a) Calculate the change from $50. (b) The selling price of $2.97 per metre is an 8% increase on the cost price. Calculate the cost price per metre.',
    questionAr: 'يبيع متجر قماش الفساتين بسعر 2.97 دولار للمتر. يشتري عميل 9 أمتار. (أ) احسب المبلغ المتبقي من 50 دولاراً. (ب) سعر البيع 2.97 دولار للمتر يمثل زيادة بنسبة 8% عن سعر التكلفة. احسب سعر التكلفة للمتر.',
    options: [
      { id: 'A', textEn: '(a) $23.27; (b) $2.75', textAr: '(أ) 23.27$؛ (ب) 2.75$' },
      { id: 'B', textEn: '(a) $23.27; (b) $2.70', textAr: '(أ) 23.27$؛ (ب) 2.70$' },
      { id: 'C', textEn: '(a) $24.00; (b) $2.75', textAr: '(أ) 24.00$؛ (ب) 2.75$' },
      { id: 'D', textEn: '(a) $21.50; (b) $2.80', textAr: '(أ) 21.50$؛ (ب) 2.80$' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Cost of 9 m = 9 × 2.97 = $26.73. Change = 50 - 26.73 = $23.27. (b) 1.08 × Cost = 2.97 => Cost = 2.97 / 1.08 = $2.75.',
    explanationAr: '(أ) تكلفة 9 أمتار = 9 × 2.97 = 26.73$. الباقي = 50 - 26.73 = 23.27$. (ب) 108% تقابل 2.97$، إذن التكلفة = 2.97 ÷ 1.08 = 2.75$.',
    solutionStepsEn: ['Change = 50 - (9 × 2.97) = $23.27', 'Cost price = 2.97 ÷ 1.08 = $2.75'],
    solutionStepsAr: ['الباقي = 50 - 26.73 = 23.27$', 'سعر التكلفة = 2.97 ÷ 1.08 = 2.75$']
  },
  {
    id: 'IG-2018-FM-42-02',
    code: '0580/42/F/M/18 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Feb/March',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Mensuration (Perimeter, Area & Volume)',
    topicAr: 'القياسات (المحيط، المساحة والحجم)',
    questionEn: 'The vertices of a square ABCD lie on the circumference of a circle with radius 8 cm. Calculate (a) the area of the square, and (b) the area of one shaded circular segment between the circle and a side of the square.',
    questionAr: 'تقع رؤوس مربع ABCD على محيط دائرة نصف قطرها 8 سم. احسب (أ) مساحة المربع، و(ب) مساحة القطعة الدائرية المظللة بين الدائرة وأحد أضلاع المربع.',
    options: [
      { id: 'A', textEn: '(a) 128 cm²; (b) 18.3 cm²', textAr: '(أ) 128 سم²؛ (ب) 18.3 سم²' },
      { id: 'B', textEn: '(a) 64 cm²; (b) 25.1 cm²', textAr: '(أ) 64 سم²؛ (ب) 25.1 سم²' },
      { id: 'C', textEn: '(a) 128 cm²; (b) 36.6 cm²', textAr: '(أ) 128 سم²؛ (ب) 36.6 سم²' },
      { id: 'D', textEn: '(a) 100 cm²; (b) 18.3 cm²', textAr: '(أ) 100 سم²؛ (ب) 18.3 سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Diagonal of square = 16 cm. Area = d²/2 = 16²/2 = 128 cm². Circle area = π × 8² ≈ 201.06 cm². Area of 4 segments = 201.06 - 128 = 73.06. One segment = 73.06/4 ≈ 18.3 cm²',
    explanationAr: 'قطر المربع = 16 سم. مساحة المربع = (16²) ÷ 2 = 128 سم². مساحة الدائرة = π × 64 = 201.06. مساحة القطعة الواحدة = (201.06 - 128) ÷ 4 = 18.3 سم².',
    solutionStepsEn: ['Area of square = (16 × 16) / 2 = 128 cm²', 'Circle area = 64π = 201.06 cm²', 'One segment = (201.06 - 128) / 4 = 18.3 cm²'],
    solutionStepsAr: ['مساحة المربع = 128 سم²', 'مساحة الدائرة = 201.06 سم²', 'مساحة القطعة الواحدة = (201.06 - 128) ÷ 4 = 18.3 سم²']
  },

  // ==========================================
  // MAY/JUNE 2018 - PAPER 11 (0580/11)
  // ==========================================
  {
    id: 'IG-2018-MJ-11-01',
    code: '0580/11/M/J/18 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: '(a) Work out 8% of 140. (b) The exchange rate is $1 = €0.88. Change $350 into euros.',
    questionAr: '(أ) احسب 8% من 140. (ب) سعر الصرف هو 1$ = 0.88€. حوّل 350 دولاراً إلى يورو.',
    options: [
      { id: 'A', textEn: '(a) 11.2; (b) €308', textAr: '(أ) 11.2؛ (ب) 308€' },
      { id: 'B', textEn: '(a) 11.2; (b) €397.73', textAr: '(أ) 11.2؛ (ب) 397.73€' },
      { id: 'C', textEn: '(a) 14.0; (b) €308', textAr: '(أ) 14.0؛ (ب) 308€' },
      { id: 'D', textEn: '(a) 10.8; (b) €310', textAr: '(أ) 10.8؛ (ب) 310€' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 0.08 × 140 = 11.2. (b) 350 × 0.88 = €308.',
    explanationAr: '(أ) 0.08 × 140 = 11.2. (b) 350 × 0.88 = 308€.',
    solutionStepsEn: ['8% of 140 = 11.2', '350 × 0.88 = €308'],
    solutionStepsAr: ['8% من 140 = 11.2', '350 × 0.88 = 308 يورو']
  },

  // ==========================================
  // MAY/JUNE 2018 - PAPER 21 (0580/21)
  // ==========================================
  {
    id: 'IG-2018-MJ-21-01',
    code: '0580/21/M/J/18 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Expand and simplify: (3x - 7)(2x + 9).',
    questionAr: 'فك وبسّط المقدار الجبري: (3x - 7)(2x + 9).',
    options: [
      { id: 'A', textEn: '6x² + 13x - 63', textAr: '6x² + 13x - 63' },
      { id: 'B', textEn: '6x² - 13x - 63', textAr: '6x² - 13x - 63' },
      { id: 'C', textEn: '6x² + 41x - 63', textAr: '6x² + 41x - 63' },
      { id: 'D', textEn: '6x² - 63', textAr: '6x² - 63' }
    ],
    correctAnswer: 'A',
    explanationEn: '(3x - 7)(2x + 9) = 6x² + 27x - 14x - 63 = 6x² + 13x - 63.',
    explanationAr: 'عند ضرب القوسين: 6x² + 27x - 14x - 63 = 6x² + 13x - 63.',
    solutionStepsEn: ['3x(2x) + 3x(9) - 7(2x) - 7(9)', '= 6x² + 27x - 14x - 63 = 6x² + 13x - 63'],
    solutionStepsAr: ['فك الأقواس: 6x² + 27x - 14x - 63', 'تجميع الحدود المتشابهة: 6x² + 13x - 63']
  },
  {
    id: 'IG-2018-MJ-21-02',
    code: '0580/21/M/J/18 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Solve the simultaneous equations: 4x - y = 14 and 3x + 2y = 5.',
    questionAr: 'حل المعادلات الآنية: 4x - y = 14 و 3x + 2y = 5.',
    options: [
      { id: 'A', textEn: 'x = 3, y = -2', textAr: 'x = 3، y = -2' },
      { id: 'B', textEn: 'x = -3, y = 2', textAr: 'x = -3، y = 2' },
      { id: 'C', textEn: 'x = 4, y = 2', textAr: 'x = 4، y = 2' },
      { id: 'D', textEn: 'x = 3, y = 2', textAr: 'x = 3، y = 2' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply first equation by 2: 8x - 2y = 28. Add to second equation: 11x = 33 => x = 3. Substitute x = 3: 4(3) - y = 14 => y = -2.',
    explanationAr: 'بضرب المعادلة الأولى في 2: 8x - 2y = 28. بالجمع مع المعادلة الثانية: 11x = 33 ومنها x = 3. بالتعويض نجد y = -2.',
    solutionStepsEn: ['8x - 2y = 28', '+(3x + 2y = 5) => 11x = 33 => x = 3', '4(3) - y = 14 => y = -2'],
    solutionStepsAr: ['8x - 2y = 28', 'بالجمع: 11x = 33 ومنها x = 3', 'بالتعويض: y = -2']
  },

  // ==========================================
  // MAY/JUNE 2018 - PAPER 43 (0580/43)
  // ==========================================
  {
    id: 'IG-2018-MJ-43-01',
    code: '0580/43/M/J/18 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: '(a) Rowena buys a jacket for $40 and sells it for $45.40. Calculate the percentage profit. (b) She sells a dress for $42.60 after making a profit of 20% on the cost price. Calculate the cost price.',
    questionAr: '(أ) تشتري روينا سترة بسعر 40 دولاراً وتبيعها بسعر 45.40 دولاراً. احسب النسبة المئوية للربح. (ب) تبيع فستاناً بسعر 42.60 دولاراً محققة ربحاً بنسبة 20% من سعر التكلفة. احسب سعر التكلفة.',
    options: [
      { id: 'A', textEn: '(a) 13.5%; (b) $35.50', textAr: '(أ) 13.5%؛ (ب) 35.50$' },
      { id: 'B', textEn: '(a) 15.0%; (b) $35.50', textAr: '(أ) 15.0%؛ (ب) 35.50$' },
      { id: 'C', textEn: '(a) 13.5%; (b) $34.08', textAr: '(أ) 13.5%؛ (ب) 34.08$' },
      { id: 'D', textEn: '(a) 12.0%; (b) $36.00', textAr: '(أ) 12.0%؛ (ب) 36.00$' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Profit = 45.40 - 40 = 5.40. Percentage profit = (5.40 / 40) × 100 = 13.5%. (b) 1.20 × Cost = 42.60 => Cost = 42.60 / 1.20 = $35.50.',
    explanationAr: '(أ) الربح = 45.40 - 40 = 5.40$. نسبة الربح = (5.40 ÷ 40) × 100 = 13.5%. (ب) سعر التكلفة = 42.60 ÷ 1.20 = 35.50$.',
    solutionStepsEn: ['Profit % = (5.40 / 40) × 100 = 13.5%', 'Cost price = 42.60 ÷ 1.20 = $35.50'],
    solutionStepsAr: ['نسبة الربح = (5.40 ÷ 40) × 100% = 13.5%', 'سعر التكلفة = 42.60 ÷ 1.20 = 35.50$']
  },
  {
    id: 'IG-2018-MJ-43-02',
    code: '0580/43/M/J/18 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'An adult ticket costs $x and a child ticket costs $(x - 2.50). There are 18,500 adults and 2,400 children. The total received is $320,040. Find the adult ticket price $x.',
    questionAr: 'تذكرة البالغين بسعر $x وتذكرة الأطفال بسعر $(x - 2.50). يوجد 18,500 بالغ و 2,400 طفل، والإجمالي المستلم هو 320,040 دولاراً. أوجد سعر تذكرة البالغين $x.',
    options: [
      { id: 'A', textEn: '$15.60', textAr: '15.60$' },
      { id: 'B', textEn: '$16.00', textAr: '16.00$' },
      { id: 'C', textEn: '$15.00', textAr: '15.00$' },
      { id: 'D', textEn: '$14.50', textAr: '14.50$' }
    ],
    correctAnswer: 'A',
    explanationEn: '18500x + 2400(x - 2.50) = 320040 => 20900x - 6000 = 320040 => 20900x = 326040 => x = 15.60.',
    explanationAr: 'المعادلة: 18500x + 2400(x - 2.5) = 320040 => 20900x - 6000 = 320040 => 20900x = 326040 => x = 15.60.',
    solutionStepsEn: ['18500x + 2400x - 6000 = 320040', '20900x = 326040', 'x = $15.60'],
    solutionStepsAr: ['20900x = 326040', 'x = 15.60$']
  },

  // ==========================================
  // OCT/NOV 2018 - PAPER 41 (0580/41)
  // ==========================================
  {
    id: 'IG-2018-ON-41-01',
    code: '0580/41/O/N/18 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: '(a) A photo sells for $6. The ratio printing cost : profit = 5 : 3. Calculate the profit. (b) Two similar photos have areas 180 cm² and 352.8 cm². The smaller photo has length 15 cm. Calculate the length of the larger photo.',
    questionAr: '(أ) تُباع صورة بسعر 6 دولارات. النسبة بين تكلفة الطباعة : الربح = 5 : 3. احسب الربح. (ب) صورتان متشابهتان مساحتهما 180 سم² و 352.8 سم². طول الصورة الأصغر 15 سم. احسب طول الصورة الأكبر.',
    options: [
      { id: 'A', textEn: '(a) $2.25; (b) 21 cm', textAr: '(أ) 2.25$؛ (ب) 21 سم' },
      { id: 'B', textEn: '(a) $2.00; (b) 20 cm', textAr: '(أ) 2.00$؛ (ب) 20 سم' },
      { id: 'C', textEn: '(a) $2.25; (b) 18.5 cm', textAr: '(أ) 2.25$؛ (ب) 18.5 سم' },
      { id: 'D', textEn: '(a) $3.75; (b) 21 cm', textAr: '(أ) 3.75$؛ (ب) 21 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Profit = (3/8) × 6 = $2.25. (b) Area ratio = 352.8 / 180 = 1.96. Length ratio = √1.96 = 1.4. Larger length = 15 × 1.4 = 21 cm.',
    explanationAr: '(أ) الربح = (3 ÷ 8) × 6 = 2.25$. (ب) نسبة المساحات = 1.96، إذن نسبة الأطوال = √1.96 = 1.4. الطول الأكبر = 15 × 1.4 = 21 سم.',
    solutionStepsEn: ['Profit = (3/8) × 6 = $2.25', 'Scale factor k = √(352.8 / 180) = 1.4', 'Larger length = 15 × 1.4 = 21 cm'],
    solutionStepsAr: ['الربح = 2.25$', 'معامل القياس = √(1.96) = 1.4', 'الطول الأكبر = 15 × 1.4 = 21 سم']
  },
  {
    id: 'IG-2018-ON-42-01',
    code: '0580/42/O/N/18 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Solve: 30 + 2x = 3(3 - 4x).',
    questionAr: 'حل المعادلة: 30 + 2x = 3(3 - 4x).',
    options: [
      { id: 'A', textEn: 'x = -1.5', textAr: 'x = -1.5' },
      { id: 'B', textEn: 'x = 1.5', textAr: 'x = 1.5' },
      { id: 'C', textEn: 'x = -2.5', textAr: 'x = -2.5' },
      { id: 'D', textEn: 'x = -3', textAr: 'x = -3' }
    ],
    correctAnswer: 'A',
    explanationEn: '30 + 2x = 9 - 12x => 14x = 9 - 30 => 14x = -21 => x = -21/14 = -1.5.',
    explanationAr: 'بفك القوس: 30 + 2x = 9 - 12x. بتجميع الحدود: 14x = -21 ومنها x = -1.5.',
    solutionStepsEn: ['30 + 2x = 9 - 12x', '14x = -21', 'x = -1.5'],
    solutionStepsAr: ['30 + 2x = 9 - 12x', '14x = -21', 'x = -1.5']
  },
  {
    id: 'IG-2018-ON-21-01',
    code: '0580/21/O/N/18 Q12',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Make x the subject of the formula: y = (x + 3) / (x - 2).',
    questionAr: 'اجعل x موضوع المعادلة: y = (x + 3) / (x - 2).',
    options: [
      { id: 'A', textEn: 'x = (2y + 3) / (y - 1)', textAr: 'x = (2y + 3) / (y - 1)' },
      { id: 'B', textEn: 'x = (2y - 3) / (y + 1)', textAr: 'x = (2y - 3) / (y + 1)' },
      { id: 'C', textEn: 'x = (y + 3) / (y - 2)', textAr: 'x = (y + 3) / (y - 2)' },
      { id: 'D', textEn: 'x = (2y + 3) / (1 - y)', textAr: 'x = (2y + 3) / (1 - y)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'y(x - 2) = x + 3 => yx - 2y = x + 3 => yx - x = 2y + 3 => x(y - 1) = 2y + 3 => x = (2y + 3) / (y - 1).',
    explanationAr: 'بضرب الطرفين في (x - 2) وتجميع حدود x في طرف: x(y - 1) = 2y + 3 ومنها x = (2y + 3) / (y - 1).',
    solutionStepsEn: ['y(x - 2) = x + 3', 'yx - x = 2y + 3', 'x = (2y + 3) / (y - 1)'],
    solutionStepsAr: ['y(x - 2) = x + 3', 'x = (2y + 3) / (y - 1)']
  },
  {
    id: 'IG-2018-ON-22-01',
    code: '0580/22/O/N/18 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: 'Work out (2.5 × 10⁸) × (4.0 × 10⁻³). Give your answer in standard form.',
    questionAr: 'احسب ناتج: (2.5 × 10⁸) × (4.0 × 10⁻³). اكتب إجابتك بالصيغة القياسية.',
    options: [
      { id: 'A', textEn: '1.0 × 10⁶', textAr: '1.0 × 10⁶' },
      { id: 'B', textEn: '1.0 × 10⁵', textAr: '1.0 × 10⁵' },
      { id: 'C', textEn: '10 × 10⁵', textAr: '10 × 10⁵' },
      { id: 'D', textEn: '1.0 × 10⁷', textAr: '1.0 × 10⁷' }
    ],
    correctAnswer: 'A',
    explanationEn: '2.5 × 4.0 = 10. 10⁸ × 10⁻³ = 10⁵. So 10 × 10⁵ = 1.0 × 10⁶.',
    explanationAr: '2.5 × 4 = 10 و 10⁸ × 10⁻³ = 10⁵. إذن 10 × 10⁵ = 1.0 × 10⁶.',
    solutionStepsEn: ['2.5 × 4.0 = 10', '10⁸ × 10⁻³ = 10⁵', '10 × 10⁵ = 1.0 × 10⁶'],
    solutionStepsAr: ['2.5 × 4.0 = 10', '10 × 10⁵ = 1.0 × 10⁶']
  },
  {
    id: 'IG-2018-MJ-11-02',
    code: '0580/11/M/J/18 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'A coat costs $80. In a sale, the price is reduced by 15%. Calculate the sale price of the coat.',
    questionAr: 'سعر معطف 80 دولاراً. في التخفيضات، تم خفض السعر بنسبة 15%. احسب سعر البيع بعد التخفيض.',
    options: [
      { id: 'A', textEn: '$68', textAr: '68$' },
      { id: 'B', textEn: '$65', textAr: '65$' },
      { id: 'C', textEn: '$72', textAr: '72$' },
      { id: 'D', textEn: '$12', textAr: '12$' }
    ],
    correctAnswer: 'A',
    explanationEn: '15% of 80 = 0.15 × 80 = $12. Sale price = 80 - 12 = $68.',
    explanationAr: 'مقدار التخفيض = 0.15 × 80 = 12 دولاراً. السعر بعد التخفيض = 80 - 12 = 68 دولاراً.',
    solutionStepsEn: ['Discount = 0.15 × 80 = $12', 'Sale price = 80 - 12 = $68'],
    solutionStepsAr: ['مقدار الخصم = 12$', 'السعر بعد الخصم = 80 - 12 = 68$']
  },
  {
    id: 'IG-2018-MJ-12-01',
    code: '0580/12/M/J/18 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: 'Find the lowest common multiple (LCM) of 18 and 24.',
    questionAr: 'أوجد المضاعف المشترك الأصغر (LCM) للعددين 18 و 24.',
    options: [
      { id: 'A', textEn: '72', textAr: '72' },
      { id: 'B', textEn: '36', textAr: '36' },
      { id: 'C', textEn: '6', textAr: '6' },
      { id: 'D', textEn: '144', textAr: '144' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiples of 18: 18, 36, 54, 72, ... Multiples of 24: 24, 48, 72, ... Lowest common multiple is 72.',
    explanationAr: 'مضاعفات 18 هي: 18, 36, 54, 72. ومضاعفات 24 هي: 24, 48, 72. أصغر مضاعف مشترك هو 72.',
    solutionStepsEn: ['18 = 2 × 3²', '24 = 2³ × 3', 'LCM = 2³ × 3² = 72'],
    solutionStepsAr: ['تحليل الأعداد للعوامل الأولية', 'LCM = 8 × 9 = 72']
  }
];
