import { IgQuestion } from '../types';

export const QUESTIONS_2009: IgQuestion[] = [
  // ==========================================
  // MAY/JUNE 2009 - PAPER 1 (Core 0580/01)
  // ==========================================
  {
    id: 'IG-2009-MJ-01-01',
    code: '0580/01/M/J/09 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Comparing Decimals & Fractions',
    topicAr: 'مقارنة الكسور والأعداد العشرية',
    questionEn: 'Insert one of the symbols (<, >, =) to make the statement true: 0.4 ... 4/9',
    questionAr: 'اختر أحد الرموز (<, >, =) لجعل العبارة التالية صحيحة: 0.4 ... 4/9',
    options: [
      { id: 'A', textEn: '<', textAr: '<' },
      { id: 'B', textEn: '>', textAr: '>' },
      { id: 'C', textEn: '=', textAr: '=' },
      { id: 'D', textEn: '≤', textAr: '≤' }
    ],
    correctAnswer: 'A',
    explanationEn: '4/9 = 0.4444... which is greater than 0.4000. Therefore, 0.4 < 4/9.',
    explanationAr: '4/9 = 0.4444... وهو أكبر من 0.4. إذن الرمز الصحيح هو <.',
    solutionStepsEn: ['4/9 = 0.444...', '0.4 < 0.444... => 0.4 < 4/9'],
    solutionStepsAr: ['4/9 = 0.4444...', '0.4 < 0.444...'],
    marks: 1
  },
  {
    id: 'IG-2009-MJ-01-03',
    code: '0580/01/M/J/09 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Volume & Capacity Conversion',
    topicAr: 'السعة وتحويل اللترات إلى سنتيمتر مكعب',
    questionEn: 'How many 200 cm³ glasses can be completely filled from a bottle containing 4.5 litres of water?',
    questionAr: 'كم كأساً سعة كل منها 200 cm³ يمكن ملؤها بالكامل من زجاجة ماء سعتها 4.5 لتر؟',
    options: [
      { id: 'A', textEn: '22 glasses', textAr: '22 كأساً' },
      { id: 'B', textEn: '23 glasses', textAr: '23 كأساً' },
      { id: 'C', textEn: '22.5 glasses', textAr: '22.5 كأساً' },
      { id: 'D', textEn: '45 glasses', textAr: '45 كأساً' }
    ],
    correctAnswer: 'A',
    explanationEn: '4.5 litres = 4500 cm³. Number of glasses = 4500 / 200 = 22.5. Completely filled glasses = 22.',
    explanationAr: '4.5 لتر = 4500 سم³. عدد الكؤوس = 4500 ÷ 200 = 22.5. إذن الكؤوس الممتلئة بالكامل هي 22 كأساً.',
    solutionStepsEn: ['4.5 L = 4500 cm³', '4500 / 200 = 22.5', 'Complete glasses = 22'],
    solutionStepsAr: ['4.5 لتر = 4500 سم³', '4500 ÷ 200 = 22.5 => 22 كأساً كاملاً'],
    marks: 2
  },
  {
    id: 'IG-2009-MJ-01-07',
    code: '0580/01/M/J/09 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Angles of a Regular Polygon',
    topicAr: 'زوايا المضلع المنتظم (المثمن)',
    questionEn: 'Calculate the size of one interior angle of a regular octagon (8 sides).',
    questionAr: 'احسب قياس الزاوية الداخلية الواحدة لمثمن منتظم (8 أضلاع).',
    options: [
      { id: 'A', textEn: '135°', textAr: '135°' },
      { id: 'B', textEn: '120°', textAr: '120°' },
      { id: 'C', textEn: '144°', textAr: '144°' },
      { id: 'D', textEn: '108°', textAr: '108°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Exterior angle = 360° / 8 = 45°. Interior angle = 180° - 45° = 135°. Alternatively: (8 - 2) × 180° / 8 = 1080° / 8 = 135°.',
    explanationAr: 'الزاوية الخارجية = 360 ÷ 8 = 45°. الزاوية الداخلية = 180 - 45 = 135°. أو بالقانون (8 - 2) × 180 ÷ 8 = 135°.',
    solutionStepsEn: ['Exterior angle = 360 / 8 = 45°', 'Interior angle = 180 - 45 = 135°'],
    solutionStepsAr: ['360 ÷ 8 = 45°', '180 - 45 = 135°'],
    marks: 2
  },
  {
    id: 'IG-2009-MJ-01-09',
    code: '0580/01/M/J/09 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Currency Exchange',
    topicAr: 'تحويل العملات (اليورو والشلن الكيني)',
    questionEn: 'In 2007 Klaus paid 350 euros (€) for a flight from Berlin to Nairobi. Return flight cost 30,700 Kenyan Shillings (KES). Exchange rate was €1 = 79.6 KES. Calculate difference in euro between the two flight costs.',
    questionAr: 'في عام 2007، دفع كلاوس 350 يورو (€) لرحلة من برلين إلى نيروبي. تكلفة رحلة العودة كانت 30,700 شلن كيني (KES). كان سعر الصرف 1 € = 79.6 KES. احسب الفرق باليورو بين تكلفتي الرحلتين.',
    options: [
      { id: 'A', textEn: '€35.68', textAr: '€35.68' },
      { id: 'B', textEn: '€38.50', textAr: '€38.50' },
      { id: 'C', textEn: '€35.00', textAr: '€35.00' },
      { id: 'D', textEn: '€36.18', textAr: '€36.18' }
    ],
    correctAnswer: 'A',
    explanationEn: '30,700 KES / 79.6 = €385.68. Difference = 385.68 - 350 = €35.68.',
    explanationAr: 'تكلفة العودة باليورو = 30700 ÷ 79.6 = 385.68 يورو. الفرق = 385.68 - 350 = 35.68 يورو.',
    solutionStepsEn: ['30700 / 79.6 = €385.68', '385.68 - 350 = €35.68'],
    solutionStepsAr: ['30700 ÷ 79.6 = 385.68 يورو', '385.68 - 350 = 35.68 يورو'],
    marks: 2
  },
  {
    id: 'IG-2009-MJ-01-11',
    code: '0580/01/M/J/09 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Percentage Profit & Selling Price',
    topicAr: 'حساب نسبة الربح وسعر البيع',
    questionEn: 'A shopkeeper buys a bicycle for $120 and sells it for $156. Calculate his percentage profit.',
    questionAr: 'اشترى تاجر دراجة بمبلغ 120 دولاراً وباعها بمبلغ 156 دولاراً. احسب النسبة المئوية للربح.',
    options: [
      { id: 'A', textEn: '30%', textAr: '30%' },
      { id: 'B', textEn: '36%', textAr: '36%' },
      { id: 'C', textEn: '25%', textAr: '25%' },
      { id: 'D', textEn: '20%', textAr: '20%' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Profit = $156 - $120 = $36. Percentage profit = (36 / 120) × 100% = 30%.',
    explanationAr: 'مقدار الربح = 156 - 120 = 36$. النسبة المئوية للربح = (36 ÷ 120) × 100% = 30%.',
    solutionStepsEn: ['Profit = 156 - 120 = 36', '% profit = (36 / 120) × 100 = 30%'],
    solutionStepsAr: ['الربح = 36$', 'النسبة = 36 ÷ 120 × 100 = 30%'],
    marks: 2
  },
  {
    id: 'IG-2009-MJ-01-18',
    code: '0580/01/M/J/09 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Simultaneous Linear Equations',
    topicAr: 'حل نظام المعادلات الخطية آنياً',
    questionEn: 'Solve the simultaneous equations: 3x + 2y = 12 and 5x - 2y = 20.',
    questionAr: 'حل المعادلتين آنياً: 3x + 2y = 12 و 5x - 2y = 20.',
    options: [
      { id: 'A', textEn: 'x = 4, y = 0', textAr: 'x = 4, y = 0' },
      { id: 'B', textEn: 'x = 2, y = 3', textAr: 'x = 2, y = 3' },
      { id: 'C', textEn: 'x = 4, y = 2', textAr: 'x = 4, y = 2' },
      { id: 'D', textEn: 'x = 3, y = 1.5', textAr: 'x = 3, y = 1.5' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Add both equations: 8x = 32 => x = 4. Substitute x = 4 into first: 3(4) + 2y = 12 => 12 + 2y = 12 => 2y = 0 => y = 0.',
    explanationAr: 'بجمع المعادلتين: 8x = 32 ومنه x = 4. بالتعويض في المعادلة الأولى نجد 12 + 2y = 12 إذن y = 0.',
    solutionStepsEn: ['(3x+2y) + (5x-2y) = 12 + 20 => 8x = 32 => x = 4', '3(4) + 2y = 12 => y = 0'],
    solutionStepsAr: ['8x = 32 => x = 4', '12 + 2y = 12 => y = 0'],
    marks: 3
  },

  // ==========================================
  // MAY/JUNE 2009 - PAPER 2 (Extended 0580/02)
  // ==========================================
  {
    id: 'IG-2009-MJ-02-01',
    code: '0580/02/M/J/09 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebraic Factorisation',
    topicAr: 'التحليل الجبري (الفرق بين مربعين والعبارة التربيعية)',
    questionEn: 'Factorise completely: (a) 9x² - 16y², (b) 2x² - 5x - 12.',
    questionAr: 'حلل تحليلاً كاملاً: (أ) 9x² - 16y²، (ب) 2x² - 5x - 12.',
    options: [
      { id: 'A', textEn: '(a) (3x - 4y)(3x + 4y), (b) (2x + 3)(x - 4)', textAr: '(أ) (3x - 4y)(3x + 4y)، (ب) (2x + 3)(x - 4)' },
      { id: 'B', textEn: '(a) (3x - 4y)², (b) (2x - 3)(x + 4)', textAr: '(أ) (3x - 4y)²، (ب) (2x - 3)(x + 4)' },
      { id: 'C', textEn: '(a) (3x - 4y)(3x + 4y), (b) (2x - 3)(x + 4)', textAr: '(أ) (3x - 4y)(3x + 4y)، (ب) (2x - 3)(x + 4)' },
      { id: 'D', textEn: '(a) (9x - 16y)(x + y), (b) (2x + 3)(x - 4)', textAr: '(أ) (9x - 16y)(x + y)، (ب) (2x + 3)(x - 4)' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Difference of two squares: (3x)² - (4y)² = (3x - 4y)(3x + 4y). (b) For 2x² - 5x - 12, check (2x + 3)(x - 4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12.',
    explanationAr: '(أ) فرق بين مربعين: (3x - 4y)(3x + 4y). (ب) تحليل العبارة التربيعية يعطي القوسين (2x + 3)(x - 4).',
    solutionStepsEn: ['(a) 9x² - 16y² = (3x - 4y)(3x + 4y)', '(b) 2x² - 5x - 12 = (2x + 3)(x - 4)'],
    solutionStepsAr: ['(أ) (3x - 4y)(3x + 4y)', '(ب) (2x + 3)(x - 4)'],
    marks: 4
  },
  {
    id: 'IG-2009-MJ-02-05',
    code: '0580/02/M/J/09 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Inverse of a 2x2 Matrix',
    topicAr: 'المصفوفة العكسية',
    questionEn: 'Find A⁻¹, the inverse of matrix A = [[-4, 3], [-2, 5]].',
    questionAr: 'أوجد A⁻¹، معكوس المصفوفة A = [[-4, 3], [-2, 5]].',
    options: [
      { id: 'A', textEn: '-1/14 [[5, -3], [2, -4]]', textAr: '-1/14 [[5, -3], [2, -4]]' },
      { id: 'B', textEn: '1/14 [[5, -3], [2, -4]]', textAr: '1/14 [[5, -3], [2, -4]]' },
      { id: 'C', textEn: '-1/14 [[-4, 3], [-2, 5]]', textAr: '-1/14 [[-4, 3], [-2, 5]]' },
      { id: 'D', textEn: '-1/26 [[5, -3], [2, -4]]', textAr: '-1/26 [[5, -3], [2, -4]]' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Determinant |A| = (-4)(5) - (3)(-2) = -20 + 6 = -14. Adjugate matrix swaps diagonal and negates off-diagonal: [[5, -3], [2, -4]]. So A⁻¹ = -1/14 [[5, -3], [2, -4]].',
    explanationAr: 'المحدد |A| = -20 - (-6) = -14. المصفوفة العكسية = -1/14 [[5, -3], [2, -4]].',
    solutionStepsEn: ['det(A) = -20 + 6 = -14', 'A⁻¹ = (-1/14) [[5, -3], [2, -4]]'],
    solutionStepsAr: ['المحدد = -14', 'المعكوس = -1/14 [[5, -3], [2, -4]]'],
    marks: 2
  },
  {
    id: 'IG-2009-MJ-02-09',
    code: '0580/02/M/J/09 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Changing the Subject of a Formula',
    topicAr: 'تغيير موضوع الصيغة',
    questionEn: 'Rearrange the formula to make y the subject: x + 9y = 1.',
    questionAr: 'أعد ترتيب الصيغة لجعل y موضوعاً لها: x + 9y = 1.',
    options: [
      { id: 'A', textEn: 'y = (1 - x) / 9', textAr: 'y = (1 - x) / 9' },
      { id: 'B', textEn: 'y = (x - 1) / 9', textAr: 'y = (x - 1) / 9' },
      { id: 'C', textEn: 'y = 1 - x / 9', textAr: 'y = 1 - x / 9' },
      { id: 'D', textEn: 'y = 9(1 - x)', textAr: 'y = 9(1 - x)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'x + 9y = 1 => 9y = 1 - x => y = (1 - x) / 9.',
    explanationAr: 'بنقل x للطرف الآخر: 9y = 1 - x ومنه بالقسمة على 9 نجد y = (1 - x) / 9.',
    solutionStepsEn: ['9y = 1 - x', 'y = (1 - x) / 9'],
    solutionStepsAr: ['9y = 1 - x', 'y = (1 - x) ÷ 9'],
    marks: 3
  },
  {
    id: 'IG-2009-MJ-02-13',
    code: '0580/02/M/J/09 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Inverse Square Variation',
    topicAr: 'التناسب العكسي مع المربع',
    questionEn: 't is inversely proportional to the square of d. t = 0.2 when d = 8. Find t when d = 10.',
    questionAr: 't يتناسب عكسياً مع مربع d. t = 0.2 عندما d = 8. أوجد قيمة t عندما d = 10.',
    options: [
      { id: 'A', textEn: 't = 0.128', textAr: 't = 0.128' },
      { id: 'B', textEn: 't = 0.160', textAr: 't = 0.160' },
      { id: 'C', textEn: 't = 0.250', textAr: 't = 0.250' },
      { id: 'D', textEn: 't = 0.100', textAr: 't = 0.100' }
    ],
    correctAnswer: 'A',
    explanationEn: 't = k / d² => k = t × d² = 0.2 × 64 = 12.8. When d = 10, t = 12.8 / 100 = 0.128.',
    explanationAr: 't = k ÷ d² ومنه k = 0.2 × 64 = 12.8. عندما d=10 يكون t = 12.8 ÷ 100 = 0.128.',
    solutionStepsEn: ['k = 0.2 × 8² = 12.8', 't = 12.8 / 10² = 0.128'],
    solutionStepsAr: ['k = 0.2 × 64 = 12.8', 't = 12.8 ÷ 100 = 0.128'],
    marks: 3
  },
  {
    id: 'IG-2009-MJ-02-16',
    code: '0580/02/M/J/09 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Coordinate Geometry',
    topicAr: 'الهندسة الإحداثية (نقطة المنتصف والميل)',
    questionEn: 'A is the point (2, -3) and B is the point (8, 5). Find: (a) the coordinates of the midpoint of AB, (b) the gradient of the straight line AB.',
    questionAr: 'النقطة A هي (2, -3) والنقطة B هي (8, 5). أوجد: (أ) إحداثيات نقطة منتصف AB، (ب) ميل الخط المستقيم AB.',
    options: [
      { id: 'A', textEn: '(a) (5, 1), (b) gradient = 4/3', textAr: '(أ) (5, 1)، (ب) الميل = 4/3' },
      { id: 'B', textEn: '(a) (5, 1), (b) gradient = 3/4', textAr: '(أ) (5, 1)، (ب) الميل = 3/4' },
      { id: 'C', textEn: '(a) (6, 2), (b) gradient = 4/3', textAr: '(أ) (6, 2)، (ب) الميل = 4/3' },
      { id: 'D', textEn: '(a) (5, 1), (b) gradient = 2', textAr: '(أ) (5, 1)، (ب) الميل = 2' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Midpoint = ((2+8)/2, (-3+5)/2) = (5, 1). (b) Gradient m = (5 - (-3)) / (8 - 2) = 8 / 6 = 4/3.',
    explanationAr: '(أ) نقطة المنتصف = ((2+8)÷2, (-3+5)÷2) = (5, 1). (ب) الميل = (5 - (-3)) ÷ (8 - 2) = 8 ÷ 6 = 4/3.',
    solutionStepsEn: ['Midpoint = (10/2, 2/2) = (5, 1)', 'Gradient = 8 / 6 = 4/3'],
    solutionStepsAr: ['نقطة المنتصف = (5, 1)', 'الميل = 8 ÷ 6 = 4/3'],
    marks: 3
  },

  // ==========================================
  // OCT/NOV 2009 - PAPER 2 (Extended 0580/02)
  // ==========================================
  {
    id: 'IG-2009-ON-02-04',
    code: '0580/02/O/N/09 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Indices & Fractional Powers',
    topicAr: 'الأسس السالبة والكسرية',
    questionEn: 'Simplify completely: (8x⁶ / 27y³) ^ (-1/3)',
    questionAr: 'بسط المقدار الآتي لأبسط صورة: (8x⁶ / 27y³) ^ (-1/3)',
    options: [
      { id: 'A', textEn: '3y / (2x²)', textAr: '3y / (2x²)' },
      { id: 'B', textEn: '2x² / (3y)', textAr: '2x² / (3y)' },
      { id: 'C', textEn: '3y³ / (2x²)', textAr: '3y³ / (2x²)' },
      { id: 'D', textEn: '9y / (4x²)', textAr: '9y / (4x²)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Negative power flips fraction: (27y³ / 8x⁶) ^ (1/3). Cube root of 27 is 3, of y³ is y, of 8 is 2, of x⁶ is x². So 3y / (2x²).',
    explanationAr: 'الأس السالب يقلب الكسر ليصبح: (27y³ / 8x⁶) ^ (1/3). الجذر التكعيبي لـ 27 هو 3، ولـ y³ هو y، ولـ 8 هو 2، ولـ x⁶ هو x²، فيكون الناتج 3y / (2x²).',
    solutionStepsEn: ['Flip fraction: (27y³ / 8x⁶)^(1/3)', 'Cube root each term: 3y / (2x²)'],
    solutionStepsAr: ['قلب الكسر لأس موجب: (27y³ / 8x⁶)^(1/3)', 'أخذ الجذر التكعيبي: 3y / (2x²)'],
    marks: 3
  },
  {
    id: 'IG-2009-ON-02-18',
    code: '0580/02/O/N/09 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Adding Algebraic Fractions',
    topicAr: 'جمع وطرح الكسور الجبرية',
    questionEn: 'Write as a single fraction in its simplest form: 3/(x - 2) - 2/(x + 1)',
    questionAr: 'اكتب في صورة كسر واحد في أبسط صورة: 3/(x - 2) - 2/(x + 1)',
    options: [
      { id: 'A', textEn: '(x + 7) / ((x - 2)(x + 1))', textAr: '(x + 7) / ((x - 2)(x + 1))' },
      { id: 'B', textEn: '(x - 1) / ((x - 2)(x + 1))', textAr: '(x - 1) / ((x - 2)(x + 1))' },
      { id: 'C', textEn: '1 / ((x - 2)(x + 1))', textAr: '1 / ((x - 2)(x + 1))' },
      { id: 'D', textEn: '(5x - 1) / ((x - 2)(x + 1))', textAr: '(5x - 1) / ((x - 2)(x + 1))' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Common denominator: (x - 2)(x + 1). Numerator: 3(x + 1) - 2(x - 2) = 3x + 3 - 2x + 4 = x + 7.',
    explanationAr: 'توحيد المقامات على (x - 2)(x + 1). البسط: 3(x + 1) - 2(x - 2) = 3x + 3 - 2x + 4 = x + 7.',
    solutionStepsEn: ['3(x + 1) - 2(x - 2) = 3x + 3 - 2x + 4 = x + 7', 'Result: (x + 7) / ((x - 2)(x + 1))'],
    solutionStepsAr: ['البسط: 3x + 3 - 2x + 4 = x + 7', 'المقام: (x - 2)(x + 1)'],
    marks: 3
  },

  // ==========================================
  // OCT/NOV 2009 - PAPER 4 (Extended 0580/04)
  // ==========================================
  {
    id: 'IG-2009-ON-04-01',
    code: '0580/04/O/N/09 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Shopping Costs, Ratios & Percentage Increase',
    topicAr: 'تكاليف الشراء والنسب والنسبة المئوية للزيادة',
    questionEn: 'Chris buys meat, vegetables and fruit. (a)(i) Cost ratio meat:veg:fruit = 2:2:3. Meat cost $2.40. Calculate total. (ii) Paid with $20. What percentage spent? (b) Mass ratio = 1:8:3. Total mass = 9 kg. Calculate veg mass. (c) Calculate cost per kg of fruit. (d) Meat cost $2.40 was 25% increase on previous week. Calculate previous week cost.',
    questionAr: 'يشتري كريس لحماً وخضاراً وفاكهة. (أ)(i) نسبة التكلفة (لحم:خضار:فاكهة) = 2 : 2 : 3. اللحم $2.40. احسب الإجمالي. (ii) دفع 20$. ما النسبة المئوية لما صرفه؟ (ب) نسبة الكتلة = 1 : 8 : 3. الإجمالي 9 كجم. احسب كتلة الخضار. (ج) احسب تكلفة الكيلوجرام من الفاكهة. (د) اللحم $2.40 يمثل زيادة 25% عن الأسبوع السابق. احسب تكلفة الأسبوع السابق.',
    options: [
      { id: 'A', textEn: '(a)(i) $8.40 (ii) 42%; (b) 6 kg; (c) $1.60/kg; (d) $1.92', textAr: '(أ)(i) $8.40 (ii) 42%؛ (ب) 6 كجم؛ (ج) $1.60/كجم؛ (د) $1.92' },
      { id: 'B', textEn: '(a)(i) $8.40 (ii) 42%; (b) 6 kg; (c) $1.80/kg; (d) $1.80', textAr: '(أ)(i) $8.40 (ii) 42%؛ (ب) 6 كجم؛ (ج) $1.80/كجم؛ (د) $1.80' },
      { id: 'C', textEn: '(a)(i) $8.00 (ii) 40%; (b) 6 kg; (c) $1.60/kg; (d) $1.92', textAr: '(أ)(i) $8.00 (ii) 40%؛ (ب) 6 كجم؛ (ج) $1.60/كجم؛ (د) $1.92' },
      { id: 'D', textEn: '(a)(i) $8.40 (ii) 42%; (b) 5 kg; (c) $1.60/kg; (d) $1.92', textAr: '(أ)(i) $8.40 (ii) 42%؛ (ب) 5 كجم؛ (ج) $1.60/كجم؛ (د) $1.92' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a)(i) 2 parts = 2.40 => 1 part = 1.20 => 7 parts = $8.40. (ii) (8.40/20) × 100% = 42%. (b) Total parts = 12. Veg = (8/12) × 9 = 6 kg. (c) Fruit cost = 3 × 1.20 = $3.60. Fruit mass = (3/12) × 9 = 2.25 kg. Price/kg = 3.60 / 2.25 = $1.60. (d) Previous week = 2.40 / 1.25 = $1.92.',
    explanationAr: '(أ)(i) الجزء = 1.20 إذن 7 أجزاء = $8.40. (ii) 8.40 ÷ 20 = 42%. (ب) الخضار = (8/12) × 9 = 6 كجم. (ج) الفاكهة = 3.60$ وكتلتها 2.25 كجم إذن الكيلو بـ $1.60. (د) 2.40 ÷ 1.25 = $1.92.',
    solutionStepsEn: ['(a)(i) 2.40 × 7/2 = $8.40', '(a)(ii) 8.40 / 20 = 42%', '(b) 9 × 8/12 = 6 kg', '(c) $3.60 / 2.25 kg = $1.60/kg', '(d) 2.40 / 1.25 = $1.92'],
    solutionStepsAr: ['(أ)(i) 2.40 × 7/2 = $8.40', '(أ)(ii) 8.40 / 20 = 42%', '(ب) 9 × 8/12 = 6 كجم', '(ج) $3.60 / 2.25 = $1.60', '(د) 2.40 ÷ 1.25 = $1.92'],
    marks: 11
  },
  {
    id: 'IG-2009-ON-04-03',
    code: '0580/04/O/N/09 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Probability & Card Selections',
    topicAr: 'احتمال سحب البطاقات والمتوسط',
    questionEn: 'Six cards numbered: 1, 1, 6, 7, 11, 12. (a)(i) Which number has probability 1/3? (ii) Prob number smaller than at least 3 others? (b) Two cards chosen without replacement: (i) both 1, (ii) sum = 18, (iii) first not 1 and second is 1. (d) 7th card added so mean becomes 6. Find 7th card number.',
    questionAr: 'ست بطاقات مرقمة: 1, 1, 6, 7, 11, 12. (أ)(i) ما الرقم الذي احتماله 1/3؟ (ii) احتمال رقم أصغر من 3 أرقام على الأقل؟ (ب) سحب بطاقتين بدون إرجاع: (i) كلتاهما 1، (ii) المجموع 18، (iii) الأولى ليست 1 والثانية 1. (د) أضيفت بطاقة سابعة فأصبح المتوسط 6. أوجد رقم البطاقة السابعة.',
    options: [
      { id: 'A', textEn: '(a)(i) 1 (ii) 1/2; (b)(i) 1/15 (ii) 2/15 (iii) 4/15; (d) 4', textAr: '(أ)(i) 1 (ii) 1/2؛ (ب)(i) 1/15 (ii) 2/15 (iii) 4/15؛ (د) 4' },
      { id: 'B', textEn: '(a)(i) 1 (ii) 1/3; (b)(i) 1/15 (ii) 1/15 (iii) 4/15; (d) 6', textAr: '(أ)(i) 1 (ii) 1/3؛ (ب)(i) 1/15 (ii) 1/15 (iii) 4/15؛ (د) 6' },
      { id: 'C', textEn: '(a)(i) 1 (ii) 1/2; (b)(i) 2/15 (ii) 2/15 (iii) 1/3; (d) 4', textAr: '(أ)(i) 1 (ii) 1/2؛ (ب)(i) 2/15 (ii) 2/15 (iii) 1/3؛ (د) 4' },
      { id: 'D', textEn: '(a)(i) 6 (ii) 1/2; (b)(i) 1/15 (ii) 2/15 (iii) 4/15; (d) 5', textAr: '(أ)(i) 6 (ii) 1/2؛ (ب)(i) 1/15 (ii) 2/15 (iii) 4/15؛ (د) 5' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a)(i) Two 1s out of 6 => 2/6 = 1/3. So number is 1. (a)(ii) Numbers smaller than 7, 11, 12 are 1, 1, 6 (3 out of 6 => 1/2). (b)(i) 2/6 × 1/5 = 2/30 = 1/15. (b)(ii) Sum 18 can be (6,12), (12,6), (7,11), (11,7) => 4/30 = 2/15. (b)(iii) 4/6 × 2/5 = 8/30 = 4/15. (d) Total of 6 cards = 38. For mean 6 with 7 cards, total = 42 => 7th card = 42 - 38 = 4.',
    explanationAr: '(أ)(i) الرقم 1 مكرر مرتين (2/6 = 1/3). (ii) الأرقام 1,1,6 أصغر من 3 أرقام (3/6 = 1/2). (ب)(i) 2/6 × 1/5 = 1/15. (ii) الأزواج (6,12), (12,6), (7,11), (11,7) تعطي 4/30 = 2/15. (iii) 4/6 × 2/5 = 4/15. (د) المجموع الجديد 7 × 6 = 42، ناقص 38 = 4.',
    solutionStepsEn: ['(a)(i) 2/6 = 1/3 => number 1', '(a)(ii) 3/6 = 1/2', '(b)(i) (2/6) × (1/5) = 1/15', '(b)(ii) 4 outcomes / 30 = 2/15', '(d) 42 - 38 = 4'],
    solutionStepsAr: ['(أ)(i) الرقم 1', '(أ)(ii) 1/2', '(ب)(i) 1/15', '(ب)(ii) 2/15', '(د) 42 - 38 = 4'],
    marks: 14
  },

  // ==========================================
  // OCT/NOV 2009 - PAPER 1 (Core 0580/01)
  // ==========================================
  {
    id: 'IG-2009-ON-01-02',
    code: '0580/01/O/N/09 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Standard Form & Scientific Notation',
    topicAr: 'الصيغة القياسية (العلمية) للأعداد',
    questionEn: 'Write 0.000047 in standard form.',
    questionAr: 'اكتب العدد 0.000047 بالصيغة القياسية (العلمية).',
    options: [
      { id: 'A', textEn: '4.7 × 10⁻⁵', textAr: '4.7 × 10⁻⁵' },
      { id: 'B', textEn: '4.7 × 10⁵', textAr: '4.7 × 10⁵' },
      { id: 'C', textEn: '47 × 10⁻⁶', textAr: '47 × 10⁻⁶' },
      { id: 'D', textEn: '0.47 × 10⁻⁴', textAr: '0.47 × 10⁻⁴' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Move decimal point 5 places to the right: 4.7 × 10⁻⁵.',
    explanationAr: 'تحريك الفاصلة العشرية 5 خانات لليمين يعطي 4.7 × 10⁻⁵.',
    solutionStepsEn: ['0.000047 = 4.7 × 10⁻⁵'],
    solutionStepsAr: ['0.000047 = 4.7 × 10⁻⁵'],
    marks: 1
  },
  {
    id: 'IG-2009-ON-01-06',
    code: '0580/01/O/N/09 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Time & Travel Durations',
    topicAr: 'حساب زمن الرحلات والساعات',
    questionEn: 'A train leaves Geneva at 08:45 and arrives in Lyon at 11:12. Calculate the journey time in hours and minutes.',
    questionAr: 'غادر قطار جنيف الساعة 08:45 ووصل إلى ليون الساعة 11:12. احسب زمن الرحلة بالساعات والدقائق.',
    options: [
      { id: 'A', textEn: '2 hours 27 minutes', textAr: 'ساعتان و 27 دقيقة' },
      { id: 'B', textEn: '2 hours 33 minutes', textAr: 'ساعتان و 33 دقيقة' },
      { id: 'C', textEn: '3 hours 27 minutes', textAr: '3 ساعات و 27 دقيقة' },
      { id: 'D', textEn: '2 hours 15 minutes', textAr: 'ساعتان و 15 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'From 08:45 to 09:00 is 15 minutes. From 09:00 to 11:00 is 2 hours. From 11:00 to 11:12 is 12 minutes. Total = 2 hours + 15 min + 12 min = 2 hours 27 minutes.',
    explanationAr: 'من 08:45 إلى 09:00 (15 دقيقة)، من 09:00 إلى 11:00 (ساعتان)، ومن 11:00 إلى 11:12 (12 دقيقة). المجموع = ساعتان و 27 دقيقة.',
    solutionStepsEn: ['08:45 to 09:00 -> 15 min', '09:00 to 11:00 -> 2 hrs', '11:00 to 11:12 -> 12 min', 'Total: 2 h 27 min'],
    solutionStepsAr: ['من 08:45 لـ 09:00 = 15 دقيقة', 'من 09:00 لـ 11:00 = ساعتان', 'من 11:00 لـ 11:12 = 12 دقيقة', 'المجموع: ساعتان و 27 دقيقة'],
    marks: 2
  },
  {
    id: 'IG-2009-ON-01-10',
    code: '0580/01/O/N/09 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Simple Interest',
    topicAr: 'الفائدة البسيطة',
    questionEn: 'Calculate the simple interest earned on $600 invested for 3 years at a rate of 4.5% per year.',
    questionAr: 'احسب الفائدة البسيطة المكتسبة على مبلغ 600 دولار مستثمر لمدة 3 سنوات بمعدل 4.5% سنوياً.',
    options: [
      { id: 'A', textEn: '$81', textAr: '$81' },
      { id: 'B', textEn: '$85', textAr: '$85' },
      { id: 'C', textEn: '$72', textAr: '$72' },
      { id: 'D', textEn: '$681', textAr: '$681' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Simple interest I = (P × R × T) / 100 = (600 × 4.5 × 3) / 100 = 6 × 13.5 = $81.',
    explanationAr: 'الفائدة البسيطة = (المبلغ × المعدل × الزمن) ÷ 100 = (600 × 4.5 × 3) ÷ 100 = 81 دولاراً.',
    solutionStepsEn: ['I = (600 × 4.5 × 3) / 100', 'I = 6 × 13.5 = $81'],
    solutionStepsAr: ['الفائدة = (600 × 4.5 × 3) ÷ 100', 'الفائدة = 81$'],
    marks: 2
  },

  // ==========================================
  // OCT/NOV 2009 - PAPER 3 (Core 0580/03)
  // ==========================================
  {
    id: 'IG-2009-ON-03-01',
    code: '0580/03/O/N/09 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2009,
    session: 'Oct/Nov',
    paper: 'Paper 3 (Core)',
    topicEn: 'Geometry of Circles & Triangles',
    topicAr: 'هندسة الدائرة والمثلثات والنسب المثلثية',
    questionEn: 'AB is the diameter of a circle, centre O. C is a point on the circumference such that angle CAB = 36°. (a) Write down the size of angle ACB. (b) Calculate angle ABC. (c) Given that AB = 10 cm, calculate the length of BC.',
    questionAr: 'AB قطر في دائرة مركزها O. النقطة C تقع على المحيط بحيث الزاوية CAB = 36°. (أ) اكتب قياس الزاوية ACB. (ب) احسب قياس الزاوية ABC. (ج) إذا كان طول القطر AB = 10 cm، احسب طول الضلع BC.',
    options: [
      { id: 'A', textEn: '(a) 90°, (b) 54°, (c) 5.88 cm', textAr: '(أ) 90°، (ب) 54°، (ج) 5.88 cm' },
      { id: 'B', textEn: '(a) 90°, (b) 44°, (c) 5.88 cm', textAr: '(أ) 90°، (ب) 44°، (ج) 5.88 cm' },
      { id: 'C', textEn: '(a) 90°, (b) 54°, (c) 8.09 cm', textAr: '(أ) 90°، (ب) 54°، (ج) 8.09 cm' },
      { id: 'D', textEn: '(a) 45°, (b) 54°, (c) 5.88 cm', textAr: '(أ) 45°، (ب) 54°، (ج) 5.88 cm' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Angle in a semicircle ACB = 90°. (b) Angle ABC = 180° - (90° + 36°) = 54°. (c) In right triangle ABC, sin(36°) = BC / AB => BC = 10 × sin(36°) = 10 × 0.5878 = 5.88 cm.',
    explanationAr: '(أ) الزاوية المحيطية المرسومة في نصف دائرة ACB = 90°. (ب) الزاوية ABC = 180 - (90 + 36) = 54°. (ج) sin(36°) = BC / 10 ومنه BC = 10 × 0.5878 = 5.88 cm.',
    solutionStepsEn: ['Angle ACB = 90° (semicircle)', 'Angle ABC = 180 - 90 - 36 = 54°', 'BC = 10 × sin(36°) = 5.88 cm'],
    solutionStepsAr: ['الزاوية ACB = 90° (نصف دائرة)', 'الزاوية ABC = 180 - 126 = 54°', 'BC = 10 × sin(36°) = 5.88 cm'],
    marks: 6
  }
];
