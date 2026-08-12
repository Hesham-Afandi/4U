import { IgQuestion } from '../types';

export const EDEXCEL_2020: IgQuestion[] = [
  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — NOVEMBER 2020
  // =========================================================================
  {
    id: 'ED-2020-NOV-1H-01',
    code: '4MA1/1H Nov 2020 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Venn Diagram Operations',
    topicAr: 'مخططات فين والعمليات على المجموعات',
    questionEn: 'A Venn diagram shows numbers from 1 to 14 in universal set E. Set A contains {2, 3, 5, 7, 11, 13} and set B contains {1, 3, 5, 7, 9, 11, 13}.\n(a) List the members of A ∩ B.\n(b) Find P(A ∩ B\').',
    questionAr: 'مخطط فين يعرض الأعداد من 1 إلى 14. المجموعة A تحتوي {2, 3, 5, 7, 11, 13} والمجموعة B تحتوي {1, 3, 5, 7, 9, 11, 13}.\n(أ) اكتب عناصر A ∩ B.\n(ب) احسب احتمال اختيار عدد من المجموعة A ولكن ليس في B.',
    options: [
      { id: 'A', textEn: '(a) {3, 5, 7, 11, 13}; (b) 1/14', textAr: '(أ) {3, 5, 7, 11, 13}؛ (ب) 1/14' },
      { id: 'B', textEn: '(a) {3, 5, 7}; (b) 2/14', textAr: '(أ) {3, 5, 7}؛ (ب) 2/14' },
      { id: 'C', textEn: '(a) {1, 2, 3, 5, 7, 9, 11, 13}; (b) 5/14', textAr: '(أ) {1, 2, 3, 5, 7, 9, 11, 13}؛ (ب) 5/14' },
      { id: 'D', textEn: '(a) {3, 5, 7, 11, 13}; (b) 3/14', textAr: '(أ) {3, 5, 7, 11, 13}؛ (ب) 3/14' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Intersection A ∩ B = {3, 5, 7, 11, 13}. (b) Elements in A but not B = {2} (1 element out of 14) => Probability = 1/14.',
    explanationAr: '(أ) التقاطع A ∩ B = {3, 5, 7, 11, 13}. (ب) العناصر في A وليست B = {2} فقط (عنصر واحد من 14) => الاحتمال = 1/14.',
    solutionStepsEn: ['A ∩ B = {3, 5, 7, 11, 13}', 'A \\ B = {2}', 'P = 1/14'],
    solutionStepsAr: ['التقاطع = {3, 5, 7, 11, 13}', 'العنصر في A وغير B = {2}', 'الاحتمال = 1/14'],
    marks: 4
  },
  {
    id: 'ED-2020-NOV-1H-04',
    code: '4MA1/1H Nov 2020 Q4',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Statistics: Median & Mean Equations',
    topicAr: 'الإحصاء: معادلات الوسيط والمتوسط الحسابي',
    questionEn: 'Six numbers in order of size: 4, 7, x, 10, y, y. The numbers have a median of 9 and a mean of 11. Find x and y.',
    questionAr: 'ستة أعداد مرتبة تصاعدياً: 4، 7، x، 10، y، y. الوسيط يساوي 9 والمتوسط الحسابي يساوي 11. أوجد x و y.',
    options: [
      { id: 'A', textEn: 'x = 8, y = 18.5', textAr: 'x = 8، y = 18.5' },
      { id: 'B', textEn: 'x = 8, y = 14', textAr: 'x = 8، y = 14' },
      { id: 'C', textEn: 'x = 7, y = 13', textAr: 'x = 7، y = 13' },
      { id: 'D', textEn: 'x = 9, y = 12', textAr: 'x = 9، y = 12' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Median = (x + 10) / 2 = 9 => x + 10 = 18 => x = 8. Mean = (4 + 7 + 8 + 10 + 2y) / 6 = 11 => 29 + 2y = 66 => 2y = 37 => y = 18.5.',
    explanationAr: 'الوسيط = (x + 10) ÷ 2 = 9 => x = 8. مجموع الأعداد = 66 => 29 + 2y = 66 => 2y = 37 => y = 18.5.',
    solutionStepsEn: ['(x + 10) / 2 = 9 => x = 8', 'Sum = 66 => 4 + 7 + 8 + 10 + 2y = 66', '29 + 2y = 66 => y = 18.5'],
    solutionStepsAr: ['x = 8', 'مجموع الأعداد = 66', 'y = 18.5'],
    marks: 4
  },
  {
    id: 'ED-2020-NOV-1HR-01',
    code: '4MA1/1HR Nov 2020 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 1HR (Higher)',
    topicEn: 'Fractions Multiplication',
    topicAr: 'ضرب الأعداد الكسرية',
    questionEn: 'Show that 3 3/4 × 7/9 = 2 11/12.',
    questionAr: 'أثبت أن 3 3/4 × 7/9 = 2 11/12 مع توضيح خطوات الحل.',
    options: [
      { id: 'A', textEn: '3 3/4 × 7/9 = (15/4) × (7/9) = 105/36 = 35/12 = 2 11/12', textAr: '3 3/4 × 7/9 = (15/4) × (7/9) = 105/36 = 35/12 = 2 11/12' },
      { id: 'B', textEn: '3 3/4 × 7/9 = (12/4) × (7/9) = 21/9 = 2 1/3', textAr: '3 3/4 × 7/9 = 2 1/3' },
      { id: 'C', textEn: '3 3/4 × 7/9 = (15/4) × (9/7) = 135/28 = 4 11/28', textAr: '3 3/4 × 7/9 = 4 11/28' },
      { id: 'D', textEn: '3 3/4 × 7/9 = 2 3/4', textAr: '3 3/4 × 7/9 = 2 3/4' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Convert 3 3/4 = 15/4. Multiply: (15/4) × (7/9) = 105/36 = 35/12 = 2 11/12.',
    explanationAr: 'تحويل إلى كسر غير حقيقي: 15/4. الضرب: (15/4) × (7/9) = 105/36 = 35/12 = 2 11/12.',
    solutionStepsEn: ['3 3/4 = 15/4', '(15/4) × (7/9) = 105/36', '105/36 = 35/12 = 2 11/12'],
    solutionStepsAr: ['3 3/4 = 15/4', '(15/4) × (7/9) = 35/12', 'النتيجة = 2 11/12'],
    marks: 3
  },

  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — JANUARY 2020
  // =========================================================================
  {
    id: 'ED-2020-JAN-1H-01',
    code: '4MA1/1H Jan 2020 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Jan',
    paper: 'Paper 1H (Higher)',
    topicEn: 'Coordinates, Midpoint & Gradient',
    topicAr: 'الإحداثيات والمنتصف والميل الخطى',
    questionEn: 'Point A = (5, -4) and point B = (13, 1).\n(a) Work out the coordinates of the midpoint of AB.\n(b) Line L has equation y = 2 - 3x. Write down the gradient of L.',
    questionAr: 'النقطة A = (5, -4) والنقطة B = (13, 1).\n(أ) احسب إحداثيات منتصف القطعة المستقيمة AB.\n(ب) الخط L معادلته y = 2 - 3x. اكتب ميل الخط L.',
    options: [
      { id: 'A', textEn: '(a) (9, -1.5); (b) -3', textAr: '(أ) (9, -1.5)؛ (ب) -3' },
      { id: 'B', textEn: '(a) (8, -1.5); (b) 2', textAr: '(أ) (8, -1.5)؛ (ب) 2' },
      { id: 'C', textEn: '(a) (9, -2.5); (b) -3', textAr: '(أ) (9, -2.5)؛ (ب) -3' },
      { id: 'D', textEn: '(a) (9, 1.5); (b) 3', textAr: '(أ) (9, 1.5)؛ (ب) 3' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Midpoint = ((5+13)/2, (-4+1)/2) = (18/2, -3/2) = (9, -1.5). (b) Gradient = coefficient of x in y = mx + c => m = -3.',
    explanationAr: '(أ) المنتصف = ((5 + 13)÷2, (-4 + 1)÷2) = (9, -1.5). (ب) الميل هو معامل x ويساوي -3.',
    solutionStepsEn: ['Midpoint = (18/2, -3/2) = (9, -1.5)', 'Gradient m = -3'],
    solutionStepsAr: ['المنتصف = (9, -1.5)', 'الميل = -3'],
    marks: 3
  },
  {
    id: 'ED-2020-JAN-2H-01',
    code: '4MA1/2H Jan 2020 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Jan',
    paper: 'Paper 2H (Higher)',
    topicEn: 'Exponent Rules Simplification',
    topicAr: 'تبسيط قواعد الأسس',
    questionEn: 'Simplify x⁹ / x².',
    questionAr: 'بسّط المقدار x⁹ / x².',
    options: [
      { id: 'A', textEn: 'x⁷', textAr: 'x⁷' },
      { id: 'B', textEn: 'x¹¹', textAr: 'x¹¹' },
      { id: 'C', textEn: 'x⁴.⁵', textAr: 'x⁴.⁵' },
      { id: 'D', textEn: 'x¹⁸', textAr: 'x¹⁸' }
    ],
    correctAnswer: 'A',
    explanationEn: 'x⁹ / x² = x⁹⁻² = x⁷.',
    explanationAr: 'x⁹ ÷ x² = x⁹⁻² = x⁷.',
    solutionStepsEn: ['x⁹ / x² = x⁹⁻² = x⁷'],
    solutionStepsAr: ['عند القسمة نطرح الأسس: 9 - 2 = 7'],
    marks: 1
  },
  {
    id: 'ED-2020-NOV-2H-08',
    code: '4MA1/2H Nov 2020 Q8',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 2H (Higher)',
    topicEn: 'Circle Theorems: Angles at Centre & Subtended Arcs',
    topicAr: 'نظريات الدوائر: الزاوية المركزية والزاوية المحيطية',
    questionEn: 'Points A, B, C lie on a circle with centre O. Angle AOC = 130°. Work out the size of obtuse angle ABC.',
    questionAr: 'النقاط A و B و C تقع على دائرة مركزها O. الزاوية المركزية AOC = 130°. احسب قياس الزاوية المنفرجة ABC.',
    diagramSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-full max-w-xs mx-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-2"><circle cx="100" cy="100" r="70" fill="none" stroke="#0d9488" stroke-width="3"/><circle cx="100" cy="100" r="4" fill="#0d9488"/><text x="105" y="95" fill="#334155" font-size="12" font-weight="bold">O</text><line x1="100" y1="100" x2="45" y2="60" stroke="#0d9488" stroke-width="2"/><line x1="100" y1="100" x2="155" y2="60" stroke="#0d9488" stroke-width="2"/><line x1="45" y1="60" x2="100" y2="168" stroke="#e11d48" stroke-width="2"/><line x1="155" y1="60" x2="100" y2="168" stroke="#e11d48" stroke-width="2"/><text x="30" y="55" fill="#334155" font-size="12" font-weight="bold">A</text><text x="160" y="55" fill="#334155" font-size="12" font-weight="bold">C</text><text x="100" y="185" fill="#e11d48" font-size="12" font-weight="bold" text-anchor="middle">B</text></svg>',
    options: [
      { id: 'A', textEn: '115°', textAr: '115°' },
      { id: 'B', textEn: '65°', textAr: '65°' },
      { id: 'C', textEn: '130°', textAr: '130°' },
      { id: 'D', textEn: '120°', textAr: '120°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Reflex angle AOC = 360° - 130° = 230°. Angle ABC = Reflex AOC / 2 = 230° / 2 = 115° (Angle at centre is twice angle at circumference).',
    explanationAr: 'الزاوية المنعكسة AOC = 360° - 130° = 230°. الزاوية المحيطية ABC = 230° ÷ 2 = 115°.',
    solutionStepsEn: ['Reflex angle AOC = 360° - 130° = 230°', 'Angle ABC = 230° / 2 = 115°'],
    solutionStepsAr: ['الزاوية المنعكسة = 230°', 'الزاوية المحيطية = 115°'],
    marks: 3
  },
  {
    id: 'ED-2020-JAN-2H-14',
    code: '4MA1/2H Jan 2020 Q14',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Jan',
    paper: 'Paper 2H (Higher)',
    topicEn: 'Differentiation & Turning Points',
    topicAr: 'التفاضل وإيجاد النقاط الحرجة',
    questionEn: 'A curve has equation y = x³ - 6x² + 9x + 2. Find the x-coordinates of the stationary points on the curve.',
    questionAr: 'منحنى معادلته y = x³ - 6x² + 9x + 2. أوجد إحداثيات x للنقاط الحرجة (الاستقرار) على المنحنى.',
    options: [
      { id: 'A', textEn: 'x = 1 and x = 3', textAr: 'x = 1 و x = 3' },
      { id: 'B', textEn: 'x = 2 and x = 4', textAr: 'x = 2 و x = 4' },
      { id: 'C', textEn: 'x = 0 and x = 3', textAr: 'x = 0 و x = 3' },
      { id: 'D', textEn: 'x = -1 and x = 3', textAr: 'x = -1 و x = 3' }
    ],
    correctAnswer: 'A',
    explanationEn: 'dy/dx = 3x² - 12x + 9. Set dy/dx = 0 => 3(x² - 4x + 3) = 0 => 3(x - 1)(x - 3) = 0 => x = 1 or x = 3.',
    explanationAr: 'المشتقة الأولى dy/dx = 3x² - 12x + 9. بمساواة المشتقة بالصفر: 3(x - 1)(x - 3) = 0 => x = 1 و x = 3.',
    solutionStepsEn: ['dy/dx = 3x² - 12x + 9', '3(x² - 4x + 3) = 0', '(x - 1)(x - 3) = 0 => x = 1 or x = 3'],
    solutionStepsAr: ['dy/dx = 3x² - 12x + 9', '3(x - 1)(x - 3) = 0 => x = 1, x = 3'],
    marks: 4
  }
];
