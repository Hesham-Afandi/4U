import { IgQuestion } from '../types';

export const QUESTIONS_2008: IgQuestion[] = [
  // ==========================================
  // MAY/JUNE 2008 - PAPER 1 (Core 0580/01)
  // ==========================================
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
    id: 'IG-2008-MJ-01-03',
    code: '0580/01/M/J/08 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Standard Form & Significant Figures',
    topicAr: 'الصيغة القياسية والأرقام المعنوية',
    questionEn: 'Write 0.00528 (a) in standard form, (b) correct to 2 significant figures.',
    questionAr: 'اكتب العدد 0.00528 (أ) بالصيغة القياسية (العلمية)، (ب) مقرباً إلى رقمين معنويين.',
    options: [
      { id: 'A', textEn: '(a) 5.28 × 10⁻³, (b) 0.0053', textAr: '(أ) 5.28 × 10⁻³، (ب) 0.0053' },
      { id: 'B', textEn: '(a) 5.28 × 10³, (b) 0.0052', textAr: '(أ) 5.28 × 10³، (ب) 0.0052' },
      { id: 'C', textEn: '(a) 52.8 × 10⁻⁴, (b) 0.0053', textAr: '(أ) 52.8 × 10⁻⁴، (ب) 0.0053' },
      { id: 'D', textEn: '(a) 5.28 × 10⁻³, (b) 0.0052', textAr: '(أ) 5.28 × 10⁻³، (ب) 0.0052' }
    ],
    correctAnswer: 'A',
    explanationEn: '0.00528 = 5.28 × 10⁻³. For 2 sig figs, look at the third significant digit (8), which rounds up 2 to 3, giving 0.0053.',
    explanationAr: 'الصيغة القياسية للعدد هي 5.28 × 10⁻³. عند التقريب لرقمين معنويين ننظر للرقم الثالث (8) فيقرب 2 إلى 3 ليصبح 0.0053.',
    solutionStepsEn: ['Move decimal point 3 places right => 5.28 × 10⁻³.', '2 significant figures: 0.00528 -> 0.0053.'],
    solutionStepsAr: ['تحريك العلامة 3 منازل لليمين => 5.28 × 10⁻³.', 'التقريب لرقمين معنويين => 0.0053.'],
    marks: 2
  },
  {
    id: 'IG-2008-MJ-01-05',
    code: '0580/01/M/J/08 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Directed Numbers & Temperature',
    topicAr: 'الأعداد الموجهة وحساب فرق درجات الحرارة',
    questionEn: 'The lowest temperature recorded in Moscow was -11 °C. The highest temperature was 4 °C. Find the difference between these two temperatures.',
    questionAr: 'أدنى درجة حرارة سُجلت في موسكو كانت -11 °C وأعلى درجة كانت 4 °C. أوجد الفرق بين درجتي الحرارة.',
    options: [
      { id: 'A', textEn: '15 °C', textAr: '15 °C' },
      { id: 'B', textEn: '-7 °C', textAr: '-7 °C' },
      { id: 'C', textEn: '7 °C', textAr: '7 °C' },
      { id: 'D', textEn: '-15 °C', textAr: '-15 °C' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Difference = Highest - Lowest = 4 - (-11) = 4 + 11 = 15 °C.',
    explanationAr: 'الفرق = الدرجة الكبرى - الصغرى = 4 - (-11) = 4 + 11 = 15 °C.',
    solutionStepsEn: ['4 - (-11) = 15 °C'],
    solutionStepsAr: ['4 - (-11) = 15 °C'],
    marks: 1
  },
  {
    id: 'IG-2008-MJ-01-07',
    code: '0580/01/M/J/08 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Fraction Operations',
    topicAr: 'العمليات على الكسور دون آلة حاسبة',
    questionEn: 'Without using a calculator, work out: (2/3) + (1/6) - (1/4). Give your answer as a single fraction in its simplest form.',
    questionAr: 'بدون استخدام الآلة الحاسبة، احسب: (2/3) + (1/6) - (1/4). اكتب إجابتك في صورة كسر في أبسط صورة.',
    options: [
      { id: 'A', textEn: '7/12', textAr: '7/12' },
      { id: 'B', textEn: '5/12', textAr: '5/12' },
      { id: 'C', textEn: '2/5', textAr: '2/5' },
      { id: 'D', textEn: '3/4', textAr: '3/4' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Common denominator is 12. 2/3 = 8/12, 1/6 = 2/12, 1/4 = 3/12. So (8 + 2 - 3)/12 = 7/12.',
    explanationAr: 'المقام المشترك هو 12. (8/12) + (2/12) - (3/12) = 7/12.',
    solutionStepsEn: ['LCM of 3, 6, 4 is 12.', '8/12 + 2/12 - 3/12 = 7/12.'],
    solutionStepsAr: ['المضاعف المشترك الأصغر للمقامات هو 12.', '(8 + 2 - 3) ÷ 12 = 7/12.'],
    marks: 2
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
  {
    id: 'IG-2008-MJ-01-15',
    code: '0580/01/M/J/08 Q15',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Solving Linear Equations',
    topicAr: 'حل المعادلات الخطية في متغير واحد',
    questionEn: 'Solve the linear equation: 5x - 7 = 3x + 11',
    questionAr: 'حل المعادلة الخطية الآتية: 5x - 7 = 3x + 11',
    options: [
      { id: 'A', textEn: 'x = 9', textAr: 'x = 9' },
      { id: 'B', textEn: 'x = 2', textAr: 'x = 2' },
      { id: 'C', textEn: 'x = 6', textAr: 'x = 6' },
      { id: 'D', textEn: 'x = 4.5', textAr: 'x = 4.5' }
    ],
    correctAnswer: 'A',
    explanationEn: '5x - 3x = 11 + 7 => 2x = 18 => x = 9.',
    explanationAr: 'بجمع الحدود المتشابهة: 5x - 3x = 11 + 7 => 2x = 18 ومنه بالقسمة على 2 نجد x = 9.',
    solutionStepsEn: ['5x - 3x = 11 + 7', '2x = 18 => x = 9'],
    solutionStepsAr: ['2x = 18', 'x = 9'],
    marks: 2
  },

  // ==========================================
  // MAY/JUNE 2008 - PAPER 2 (Extended 0580/02)
  // ==========================================
  {
    id: 'IG-2008-MJ-02-01',
    code: '0580/02/M/J/08 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Standard Form & Lower Bound',
    topicAr: 'الصيغة القياسية والحد الأدنى للتقريب',
    questionEn: 'A stadium holds 45,600 people correct to the nearest hundred. (a) Write 45,600 in standard form. (b) Write down the lower bound for the number of people.',
    questionAr: 'يتسع ملعب لـ 45,600 شخص مقرباً لأقرب مائة. (أ) اكتب 45,600 بالصيغة القياسية. (ب) اكتب الحد الأدنى (lower bound) لعدد الأشخاص.',
    options: [
      { id: 'A', textEn: '(a) 4.56 × 10⁴, (b) 45,550', textAr: '(أ) 4.56 × 10⁴، (ب) 45,550' },
      { id: 'B', textEn: '(a) 4.56 × 10³, (b) 45,500', textAr: '(أ) 4.56 × 10³، (ب) 45,500' },
      { id: 'C', textEn: '(a) 45.6 × 10³, (b) 45,550', textAr: '(أ) 45.6 × 10³، (ب) 45,550' },
      { id: 'D', textEn: '(a) 4.56 × 10⁴, (b) 45,500', textAr: '(أ) 4.56 × 10⁴، (ب) 45,500' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 45,600 = 4.56 × 10⁴. (b) Nearest hundred means ±50, so lower bound = 45,600 - 50 = 45,550.',
    explanationAr: '(أ) 45,600 بالصيغة العلمية هي 4.56 × 10⁴. (ب) التقريب لأقرب مائة يعني ±50، إذن الحد الأدنى = 45600 - 50 = 45,550.',
    solutionStepsEn: ['(a) 4.56 × 10⁴.', '(b) Lower bound = 45,600 - 50 = 45,550.'],
    solutionStepsAr: ['(أ) 4.56 × 10⁴', '(ب) 45600 - 50 = 45,550'],
    marks: 2
  },
  {
    id: 'IG-2008-MJ-02-03',
    code: '0580/02/M/J/08 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Simplifying Algebraic Fractions',
    topicAr: 'تبسيط الكسور الجبرية والتحليل',
    questionEn: 'Simplify completely: (2x² - 8) / (x² - 2x)',
    questionAr: 'بسط المقدار الآتي لأبسط صورة: (2x² - 8) / (x² - 2x)',
    options: [
      { id: 'A', textEn: '2(x + 2) / x', textAr: '2(x + 2) / x' },
      { id: 'B', textEn: '(2x + 4) / (x - 2)', textAr: '(2x + 4) / (x - 2)' },
      { id: 'C', textEn: '2(x - 2) / x', textAr: '2(x - 2) / x' },
      { id: 'D', textEn: '(x + 2) / x', textAr: '(x + 2) / x' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator: 2(x² - 4) = 2(x - 2)(x + 2). Denominator: x(x - 2). Cancel (x - 2) => 2(x + 2) / x.',
    explanationAr: 'البسط: 2(x² - 4) = 2(x - 2)(x + 2). المقام: x(x - 2). بحذف القوس المشترك (x - 2) يبقى 2(x + 2) / x.',
    solutionStepsEn: ['2x² - 8 = 2(x - 2)(x + 2)', 'x² - 2x = x(x - 2)', 'Cancel (x - 2) => 2(x + 2) / x'],
    solutionStepsAr: ['تحليل البسط: 2(x - 2)(x + 2)', 'تحليل المقام: x(x - 2)', 'الناتج: 2(x + 2) ÷ x'],
    marks: 3
  },
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
    id: 'IG-2008-MJ-02-08',
    code: '0580/02/M/J/08 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Vector Operations & Magnitude',
    topicAr: 'العمليات على المتجهات وحساب الطول',
    questionEn: 'Let vector a = (3, -4) and vector b = (-1, 2). Find: (a) 2a - 3b as a column vector, (b) the magnitude |a|.',
    questionAr: 'إذا كان المتجه a = (3, -4) والمتجه b = (-1, 2). أوجد: (أ) 2a - 3b في صورة متجه، (ب) معيار (طول) المتجه |a|.',
    options: [
      { id: 'A', textEn: '(a) (9, -14), (b) |a| = 5', textAr: '(أ) (9, -14)، (ب) |a| = 5' },
      { id: 'B', textEn: '(a) (3, -14), (b) |a| = 5', textAr: '(أ) (3, -14)، (ب) |a| = 5' },
      { id: 'C', textEn: '(a) (9, -2), (b) |a| = 7', textAr: '(أ) (9, -2)، (ب) |a| = 7' },
      { id: 'D', textEn: '(a) (9, -14), (b) |a| = 25', textAr: '(أ) (9, -14)، (ب) |a| = 25' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 2a - 3b = 2(3, -4) - 3(-1, 2) = (6, -8) - (-3, 6) = (9, -14). (b) |a| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.',
    explanationAr: '(أ) 2a - 3b = (6, -8) - (-3, 6) = (9, -14). (ب) معيار a = جذر(3² + 4²) = جذر 25 = 5.',
    solutionStepsEn: ['2(3, -4) - 3(-1, 2) = (9, -14)', '|a| = √(9 + 16) = 5'],
    solutionStepsAr: ['(6, -8) - (-3, 6) = (9, -14)', '|a| = جذر(9 + 16) = 5'],
    marks: 3
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
  {
    id: 'IG-2008-MJ-02-19',
    code: '0580/02/M/J/08 Q19',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Functions & Inverse Functions',
    topicAr: 'الدوال وتركيبها والدالة العكسية',
    questionEn: 'Given f(x) = 2x - 3 and g(x) = x² + 1. Find: (a) fg(x) in its simplest form, (b) f⁻¹(x).',
    questionAr: 'إذا كان f(x) = 2x - 3 و g(x) = x² + 1. أوجد: (أ) fg(x) في أبسط صورة، (ب) الدالة العكسية f⁻¹(x).',
    options: [
      { id: 'A', textEn: '(a) 2x² - 1, (b) (x + 3) / 2', textAr: '(أ) 2x² - 1، (ب) (x + 3) / 2' },
      { id: 'B', textEn: '(a) 2x² + 1, (b) (x - 3) / 2', textAr: '(أ) 2x² + 1، (ب) (x - 3) / 2' },
      { id: 'C', textEn: '(a) 4x² - 12x + 10, (b) (x + 3) / 2', textAr: '(أ) 4x² - 12x + 10، (ب) (x + 3) / 2' },
      { id: 'D', textEn: '(a) 2x² - 1, (b) 2x + 3', textAr: '(أ) 2x² - 1، (ب) 2x + 3' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) fg(x) = f(g(x)) = 2(x² + 1) - 3 = 2x² + 2 - 3 = 2x² - 1. (b) Let y = 2x - 3 => 2x = y + 3 => x = (y + 3)/2. So f⁻¹(x) = (x + 3)/2.',
    explanationAr: '(أ) fg(x) = 2(x² + 1) - 3 = 2x² - 1. (ب) بجعل y = 2x - 3 ومنه x = (y + 3)/2 إذن f⁻¹(x) = (x + 3)/2.',
    solutionStepsEn: ['fg(x) = 2(x² + 1) - 3 = 2x² - 1', 'f⁻¹(x) = (x + 3) / 2'],
    solutionStepsAr: ['fg(x) = 2x² + 2 - 3 = 2x² - 1', 'f⁻¹(x) = (x + 3) ÷ 2'],
    marks: 4
  },

  // ==========================================
  // OCT/NOV 2008 - PAPER 1 (Core 0580/01)
  // ==========================================
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
  },

  // ==========================================
  // OCT/NOV 2008 - PAPER 2 (Extended 0580/02)
  // ==========================================
  {
    id: 'IG-2008-ON-02-02',
    code: '0580/02/O/N/08 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Simple & Compound Interest',
    topicAr: 'الربح البسيط والربح المركب',
    questionEn: 'Ali invests $1000 at 4% per year simple interest for 3 years. Sara invests $1000 at 4% per year compound interest for 3 years. Calculate the difference between the total amounts of interest they earn correct to the nearest cent.',
    questionAr: 'يستثمر علي 1000 دولار بفائدة بسيطة 4% سنوياً لمدة 3 سنوات. وتستثمر سارة 1000 دولار بفائدة مركبة 4% سنوياً لمدة 3 سنوات. احسب الفرق بين إجمالي الفائدة التي يحصل عليها كل منهما لأقرب سنت.',
    options: [
      { id: 'A', textEn: '$4.86', textAr: '$4.86' },
      { id: 'B', textEn: '$12.00', textAr: '$12.00' },
      { id: 'C', textEn: '$124.86', textAr: '$124.86' },
      { id: 'D', textEn: '$4.00', textAr: '$4.00' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Ali simple interest = 1000 × 0.04 × 3 = $120.00. Sara compound amount = 1000 × (1.04)³ = $1124.864 => compound interest = $124.86. Difference = 124.86 - 120 = $4.86.',
    explanationAr: 'فائدة علي البسيطة = 1000 × 0.04 × 3 = 120$. جملة سارة المركبة = 1000 × (1.04)³ = 1124.86$ ففائدتها 124.86$. الفرق = 4.86$.',
    solutionStepsEn: ['Simple interest = 1000 × 0.04 × 3 = $120.', 'Compound interest = 1000 × (1.04)³ - 1000 = $124.86.', 'Difference = $4.86.'],
    solutionStepsAr: ['الفائدة البسيطة = 120$', 'الفائدة المركبة = 124.86$', 'الفرق = 4.86$'],
    marks: 3
  },
  {
    id: 'IG-2008-ON-02-14',
    code: '0580/02/O/N/08 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Matrix Multiplication & Determinant',
    topicAr: 'ضرب المصفوفات ومحدد المصفوفة',
    questionEn: 'Let matrix M = [[3, -1], [2, 4]]. (a) Calculate M², (b) Find the determinant of M.',
    questionAr: 'إذا كانت المصفوفة M = [[3, -1], [2, 4]]. (أ) احسب M²، (ب) أوجد محدد المصفوفة M.',
    options: [
      { id: 'A', textEn: '(a) [[7, -7], [14, 14]], (b) det(M) = 14', textAr: '(أ) [[7, -7], [14, 14]]، (ب) المحدد = 14' },
      { id: 'B', textEn: '(a) [[9, 1], [4, 16]], (b) det(M) = 14', textAr: '(أ) [[9, 1], [4, 16]]، (ب) المحدد = 14' },
      { id: 'C', textEn: '(a) [[7, -7], [14, 14]], (b) det(M) = 10', textAr: '(أ) [[7, -7], [14, 14]]، (ب) المحدد = 10' },
      { id: 'D', textEn: '(a) [[7, -1], [2, 14]], (b) det(M) = 14', textAr: '(أ) [[7, -1], [2, 14]]، (ب) المحدد = 14' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) M² = [[3, -1], [2, 4]] × [[3, -1], [2, 4]] = [[9-2, -3-4], [6+8, -2+16]] = [[7, -7], [14, 14]]. (b) det(M) = (3)(4) - (-1)(2) = 12 + 2 = 14.',
    explanationAr: '(أ) ضرب المصفوفة في نفسها يعطي: الصف1×العمود1 = 7، الصف1×العمود2 = -7، الصف2×العمود1 = 14، الصف2×العمود2 = 14. (ب) المحدد = 12 - (-2) = 14.',
    solutionStepsEn: ['M² = [[3(3)+(-1)(2), 3(-1)+(-1)(4)], [2(3)+4(2), 2(-1)+4(4)]] = [[7, -7], [14, 14]]', 'det(M) = 12 + 2 = 14'],
    solutionStepsAr: ['M² = [[7, -7], [14, 14]]', 'المحدد = 12 + 2 = 14'],
    marks: 4
  },

  // ==========================================
  // OCT/NOV 2008 - PAPER 4 (Extended 0580/04)
  // ==========================================
  {
    id: 'IG-2008-ON-04-01',
    code: '0580/04/O/N/08 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratios, Percentages & Family Budget',
    topicAr: 'النسب والمئويات وميزانية الأسرة',
    questionEn: 'A family spends $1400 per month. The ratio of expenditure on food : housing : other = 4 : 5 : 5. (a) Calculate how much is spent on housing. (b) The food expenditure ($400) increases by 8% next year. Calculate the new food expenditure. (c) The family savings ($250) was after spending 80% of their total income. Calculate their total monthly income.',
    questionAr: 'تصرف أسرة 1400 دولار شهرياً. نسبة الإنفاق على (الطعام : السكن : مصاريف أخرى) = 4 : 5 : 5. (أ) احسب ما ينفقونه على السكن. (ب) ارتفع إنفاق الطعام (400$) بنسبة 8% في العام التالي. احسب إنفاق الطعام الجديد. (ج) ادخار الأسرة (250$) يمثل 20% المتبقية بعد إنفاق 80% من الدخل. احسب الدخل الشهري الكلي.',
    options: [
      { id: 'A', textEn: '(a) $500, (b) $432, (c) $1250', textAr: '(أ) 500$، (ب) 432$، (ج) 1250$' },
      { id: 'B', textEn: '(a) $500, (b) $432, (c) $1500', textAr: '(أ) 500$، (ب) 432$، (ج) 1500$' },
      { id: 'C', textEn: '(a) $400, (b) $432, (c) $1250', textAr: '(أ) 400$، (ب) 432$، (ج) 1250$' },
      { id: 'D', textEn: '(a) $500, (b) $480, (c) $1250', textAr: '(أ) 500$، (ب) 480$، (ج) 1250$' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Total parts = 4 + 5 + 5 = 14. Housing = (5/14) × 1400 = $500. (b) New food = 400 × 1.08 = $432. (c) Savings = 100% - 80% = 20% of Income. 0.20 × Income = $250 => Income = $250 / 0.20 = $1250.',
    explanationAr: '(أ) مجموع الأجزاء = 14. السكن = (5/14) × 1400 = 500$. (ب) إنفاق الطعام الجديد = 400 × 1.08 = 432$. (ج) الادخار 20% = 250$ إذن الدخل الكلي = 250 ÷ 0.20 = 1250$.',
    solutionStepsEn: ['(a) 1400 × 5/14 = $500', '(b) 400 × 1.08 = $432', '(c) $250 / 0.20 = $1250'],
    solutionStepsAr: ['(أ) 1400 × 5 ÷ 14 = 500$', '(ب) 400 × 1.08 = 432$', '(ج) 250 ÷ 0.20 = 1250$'],
    marks: 8
  }
];

