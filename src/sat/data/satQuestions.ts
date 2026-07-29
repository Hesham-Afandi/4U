import { Question, DomainInfo, UnitInfo } from '../types';

export const DOMAINS: DomainInfo[] = [
  {
    id: 'algebra',
    titleEn: '1. Algebra',
    titleAr: '1. الجبر (Algebra)',
    weight: '35% (~13-15 Questions)',
    descriptionEn: 'Linear equations, systems, inequalities, linear functions, rate & cost word problems.',
    descriptionAr: 'المعادلات الخطية، المتباينات، أنظمة المعادلات، الدوار الخطية، والمسائل اللفظية.',
    iconName: 'Calculator',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'advanced-math',
    titleEn: '2. Advanced Math',
    titleAr: '2. الرياضيات المتقدمة (Advanced Math)',
    weight: '35% (~13-15 Questions)',
    descriptionEn: 'Quadratic equations & functions, exponents, radicals, polynomials, rational expressions & growth models.',
    descriptionAr: 'المعادلات والدوال التربيعية، الأسس، الجذور، كثيرات الحدود، والنمو والتضائل الأسسي.',
    iconName: 'Zap',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'data-analysis',
    titleEn: '3. Problem Solving & Data Analysis',
    titleAr: '3. حل المشكلات وتحليل البيانات',
    weight: '15% (~5-7 Questions)',
    descriptionEn: 'Ratios, percentages, statistics (mean/median), graphs, scatterplots, linear regression & probability.',
    descriptionAr: 'النسب والتناسب، النسب المئوية، الإحصاء، الجداول، المخططات البيانية، والاحتمالات.',
    iconName: 'BarChart3',
    color: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'geometry-trig',
    titleEn: '4. Geometry & Trigonometry',
    titleAr: '4. الهندسة وحساب المثلثات',
    weight: '15% (~5-7 Questions)',
    descriptionEn: 'Angles, lines, triangles, SOH-CAH-TOA trigonometry, circle equations, arc length & 3D volume.',
    descriptionAr: 'الزوايا والخطوط، المثلثات، حساب المثلثات قائم الزاوية، الدوائر، والمساحات والأحجام.',
    iconName: 'Shapes',
    color: 'from-amber-500 to-orange-600'
  }
];

export const COURSE_UNITS: UnitInfo[] = [
  {
    unitNum: 1,
    titleEn: 'Unit 1: Linear Equations & Inequalities',
    titleAr: 'الوحدة 1: المعادلات والمتباينات الخطية',
    mainTopicsEn: ['One-step and multi-step equations', 'Variables on both sides', 'Fractions in equations', 'Inequalities and number lines'],
    mainTopicsAr: ['المعادلات ذات الخطوة والخطوات المتعددة', 'المتغيرات في كلا الطرفين', 'المعادلات بالكسور', 'المتباينات وخط الأعداد'],
    desmosTipEn: 'In Desmos, type the full equation directly e.g. 3x + 5 = 2x - 8 to see the vertical line solution at x.',
    desmosTipAr: 'في ديسموس، اكتب المعادلة مباشرة مثل 3x + 5 = 2x - 8 لرؤية خط الحل الرأسي عند x.'
  },
  {
    unitNum: 2,
    titleEn: 'Unit 2: Functions & Systems of Equations',
    titleAr: 'الوحدة 2: الدوال وأنظمة المعادلات',
    mainTopicsEn: ['Slope-intercept & point-slope forms', 'Substitution and elimination', 'Graphical intersection', 'Word problems'],
    mainTopicsAr: ['صيغة الميل والمقطع والصيغة القياسية', 'التعويض والحذف', 'التقاطع البياني', 'المسائل اللفظية'],
    desmosTipEn: 'Plot both lines in Desmos. The intersection point (x, y) gives the exact solution to the system instantly!',
    desmosTipAr: 'ارسم كلا الخطين في ديسموس. نقطة التقاطع (x, y) تعطي الحل الدقيق للنظام مباشرة!'
  },
  {
    unitNum: 3,
    titleEn: 'Unit 3: Quadratics & Polynomials',
    titleAr: 'الوحدة 3: المعادلات التربيعية وكثيرات الحدود',
    mainTopicsEn: ['Factoring & Quadratic formula', 'Vertex form y = a(x-h)² + k', 'Discriminant b² - 4ac', 'Polynomial zeros & remainder theorem'],
    mainTopicsAr: ['التحليل وصيغة القانون العام', 'صيغة الرأس', 'المميز b² - 4ac', 'أصفار كثيرات الحدود ونظرية الباقي'],
    desmosTipEn: 'Click on the parabola vertex in Desmos to read (h, k) or click the x-axis intercepts for roots.',
    desmosTipAr: 'انقر على رأس المنحنى في ديسموس لقراءة (h, k) أو انقر على نقاط التقاطع مع محور x لمعرفة الجذور.'
  },
  {
    unitNum: 4,
    titleEn: 'Unit 4: Exponents, Radicals & Rational Expressions',
    titleAr: 'الوحدة 4: الأسس والجذور والتعبيرات الكسرية',
    mainTopicsEn: ['Exponent rules & negative/fractional powers', 'Simplifying radicals & rationalizing', 'Rational equations & extraneous solutions', 'Exponential growth & decay'],
    mainTopicsAr: ['قوانين الأسس والأسس السالبة والكسرية', 'تبسيط الجذور', 'المعادلات الكسرية والحلول الدخيلة', 'النمو والتضائل الأسي'],
    desmosTipEn: 'Graph rational functions in Desmos to visually inspect vertical asymptotes and domain holes.',
    desmosTipAr: 'ارسم الدوال الكسرية في ديسموس لفحص خطوط التقارب الرأسية وثقوب المجال بصرياً.'
  },
  {
    unitNum: 5,
    titleEn: 'Unit 5: Ratios, Percentages & Word Problems',
    titleAr: 'الوحدة 5: النسب، النسب المئوية، والمسائل اللفظية',
    mainTopicsEn: ['Direct & inverse proportions', 'Percent increase/decrease & change', 'Cost, profit, and mixture problems', 'Unit conversion & rates'],
    mainTopicsAr: ['التناسب الطردي والعكسي', 'نسبة الزيادة والنقصان', 'مسائل التكلفة والربح والمخاليط', 'تحويل الوحدات والمعدلات'],
    desmosTipEn: 'Set up ratio equations in Desmos using simple division sliders to quickly backsolve from options.',
    desmosTipAr: 'أنشئ معادلات النسبة في ديسموس باستخدام شريط المنزلق للتعويض العكسي من الخيارات.'
  },
  {
    unitNum: 6,
    titleEn: 'Unit 6: Statistics, Probability & Data Interpretation',
    titleAr: 'الوحدة 6: الإحصاء والاحتمالات وتحليل البيانات',
    mainTopicsEn: ['Mean, median, mode, range & weighted average', 'Scatterplots & line of best fit', 'Two-way tables & conditional probability', 'Linear regression'],
    mainTopicsAr: ['المتوسط، الوسيط، المنوال، المدى', 'مخططات الانتشار وخط الأفضل ملاءمة', 'الجداول المزدوجة والاحتمال الشرطي', 'الانحدار الخطي'],
    desmosTipEn: 'Use Desmos table feature to perform linear regression with y1 ~ m x1 + b to get r² and slope instantly!',
    desmosTipAr: 'استخدم ميزة الجداول في ديسموس لإجراء الانحدار الخطي بـ y1 ~ m x1 + b للحصول على r² والميل فوراً!'
  },
  {
    unitNum: 7,
    titleEn: 'Unit 7: Geometry & Trigonometry',
    titleAr: 'الوحدة 7: الهندسة وحساب المثلثات',
    mainTopicsEn: ['Angles, parallel lines & transversals', 'Similar triangles & Pythagorean theorem', 'SOH-CAH-TOA right triangle trig', 'Circle equation (x-h)² + (y-k)² = r²', '3D volume & coordinate distance'],
    mainTopicsAr: ['الزوايا والخطوط المتوازية', 'المثلثات المتشابهة ونظرية فيثاغورس', 'حساب المثلثات (جيب، جيب تمام، ظل)', 'معادلة الدائرة', 'الحجم والمسافة في المستوى الاحداثي'],
    desmosTipEn: 'Type circle equations directly in Desmos e.g. (x-3)² + (y+2)² = 25 to see center and radius interactively.',
    desmosTipAr: 'اكتب معادلة الدائرة مباشرة في ديسموس مثل (x-3)² + (y+2)² = 25 لرؤية المركز ونصف القطر بوضوح.'
  },
  {
    unitNum: 8,
    titleEn: 'Unit 8: SAT Strategies + Desmos Mastery',
    titleAr: 'الوحدة 8: استراتيجيات السات واحتراف ديسموس',
    mainTopicsEn: ['Plugging in convenient values', 'Backsolving from answer choices', 'Estimation & eliminating options', 'Time management & Desmos power moves'],
    mainTopicsAr: ['التعويض بقيم سهلة', 'التعويض العكسي من خيارات الإجابة', 'التقدير واستبعاد الإجابات الخاطئة', 'إدارة الوقت وحركات قوة ديسموس'],
    desmosTipEn: 'Desmos is allowed on the entire Math section! Use it for solving non-linear systems, finding maximums, and checking answers.',
    desmosTipAr: 'ديسموس متاح في قسم الرياضيات بالكامل! استخدمه لحل الأنظمة غير الخطية، إيجاد القمم، والتحقق من الحلول.'
  }
];

// Helper generator to ensure 30 questions per domain (Total = 120 Questions)
export const QUESTIONS: Question[] = [
  // ==========================================
  // DOMAIN 1: ALGEBRA (Questions 1 to 30)
  // ==========================================
  {
    id: 1,
    domain: 'algebra',
    category: 'linear-equations',
    difficulty: 'Easy',
    questionEn: 'If 3x + 7 = 22, what is the value of 6x - 5?',
    questionAr: 'إذا كان 3x + 7 = 22، فما هي قيمة 6x - 5؟',
    equationStr: '3x + 7 = 22',
    svgData: {
      type: 'balance-scale',
      titleEn: 'Linear Equation Balance Model',
      titleAr: 'نموذج ميزان المعادلة الخطية',
      params: { leftExpr: '3x + 7', rightExpr: '22' }
    },
    options: [
      { textEn: '25', textAr: '25' },
      { textEn: '28', textAr: '28' },
      { textEn: '30', textAr: '30' },
      { textEn: '35', textAr: '35' }
    ],
    correctAnswer: 0,
    explanationEn: 'First, solve for 3x: 3x = 22 - 7 = 15. Since 6x is double 3x, 6x = 30. Then 6x - 5 = 30 - 5 = 25.',
    explanationAr: 'أولاً، نحسب قيمة 3x: 3x = 22 - 7 = 15. بما أن 6x ضعف 3x، فإن 6x = 30. إذن 6x - 5 = 30 - 5 = 25.',
    solutionStepsEn: ['3x + 7 = 22', '3x = 15 => x = 5', '6(5) - 5 = 30 - 5 = 25'],
    solutionStepsAr: ['3x + 7 = 22', '3x = 15 => x = 5', '6(5) - 5 = 30 - 5 = 25']
  },
  {
    id: 2,
    domain: 'algebra',
    category: 'linear-inequalities',
    difficulty: 'Medium',
    questionEn: 'Which inequality represents all real numbers x such that -4x + 12 < 28?',
    questionAr: 'أي متباينة تمثل جميع الأعداد الحقيقية x بحيث تكون -4x + 12 < 28؟',
    equationStr: '-4x + 12 < 28',
    svgData: {
      type: 'number-line',
      titleEn: 'Inequality Solution on Number Line',
      titleAr: 'حل المتباينة على خط الأعداد',
      params: { val: -4 }
    },
    options: [
      { textEn: 'x < -4', textAr: 'x < -4' },
      { textEn: 'x > -4', textAr: 'x > -4' },
      { textEn: 'x < 10', textAr: 'x < 10' },
      { textEn: 'x > 10', textAr: 'x > 10' }
    ],
    correctAnswer: 1,
    explanationEn: 'Subtract 12 from both sides: -4x < 16. Divide by -4 and REVERSE the inequality sign: x > -4.',
    explanationAr: 'اطرح 12 من الطرفين: -4x < 16. اقسم على -4 واقُلب إشارة المتباينة: x > -4.',
    solutionStepsEn: ['-4x + 12 < 28', '-4x < 16', 'Divide by -4 and flip sign: x > -4'],
    solutionStepsAr: ['-4x + 12 < 28', '-4x < 16', 'القسمة على -4 وعكس الإشارة: x > -4']
  },
  {
    id: 3,
    domain: 'algebra',
    category: 'systems-equations',
    difficulty: 'Hard',
    questionEn: 'A system of equations is given by 2x + 3y = 12 and 4x + 6y = k. For what value of k does the system have infinitely many solutions?',
    questionAr: 'نظام من المعادلات معطى بـ 2x + 3y = 12 و 4x + 6y = k. ما قيمة k التي تجعل للنظام عدد لا نهائي من الحلول؟',
    equationStr: '2x + 3y = 12 \\n 4x + 6y = k',
    svgData: {
      type: 'coordinate-line',
      titleEn: 'Coincident Parallel Lines',
      titleAr: 'المستقيمان المطبقان',
      params: { label1: 'Line 1: 2x+3y=12', label2: 'Line 2: 4x+6y=k' }
    },
    options: [
      { textEn: '12', textAr: '12' },
      { textEn: '18', textAr: '18' },
      { textEn: '24', textAr: '24' },
      { textEn: '36', textAr: '36' }
    ],
    correctAnswer: 2,
    explanationEn: 'For infinitely many solutions, the second equation must be a scalar multiple of the first equation. Multiplying 2x + 3y = 12 by 2 gives 4x + 6y = 24. Thus k = 24.',
    explanationAr: 'ليكون للنظام عدد لا نهائي من الحلول، يجب أن تكون المعادلة الثانية مضاعفاً للأولى. ضرب المعادلة الأولى بـ 2 يعطي 4x + 6y = 24. بالتالي k = 24.',
    solutionStepsEn: ['2 × (2x + 3y = 12)', '4x + 6y = 24', 'Compare with 4x + 6y = k => k = 24'],
    solutionStepsAr: ['2 × (2x + 3y = 12)', '4x + 6y = 24', 'بالمقارنة مع 4x + 6y = k => k = 24']
  },
  {
    id: 4,
    domain: 'algebra',
    category: 'linear-functions',
    difficulty: 'Medium',
    questionEn: 'Line L passes through the points (2, -3) and (6, 5). What is the slope-intercept form of the equation of line L?',
    questionAr: 'المستقيم L يمر بالنقطتين (2, -3) و (6, 5). ما هي صيغة الميل والمقطع لمعادلة المستقيم L؟',
    options: [
      { textEn: 'y = 2x - 7', textAr: 'y = 2x - 7' },
      { textEn: 'y = 2x + 1', textAr: 'y = 2x + 1' },
      { textEn: 'y = 0.5x - 4', textAr: 'y = 0.5x - 4' },
      { textEn: 'y = -2x + 7', textAr: 'y = -2x + 7' }
    ],
    correctAnswer: 0,
    explanationEn: 'Slope m = (5 - (-3)) / (6 - 2) = 8 / 4 = 2. Using y - y1 = m(x - x1): y - (-3) = 2(x - 2) => y + 3 = 2x - 4 => y = 2x - 7.',
    explanationAr: 'الميل m = (5 - (-3)) / (6 - 2) = 8 / 4 = 2. بالتعويض في y - y1 = m(x - x1): y + 3 = 2(x - 2) => y = 2x - 7.',
    solutionStepsEn: ['m = (5 - (-3)) / (6 - 2) = 8/4 = 2', 'y - (-3) = 2(x - 2)', 'y = 2x - 4 - 3 = 2x - 7'],
    solutionStepsAr: ['m = (5 - (-3)) / (6 - 2) = 8/4 = 2', 'y - (-3) = 2(x - 2)', 'y = 2x - 4 - 3 = 2x - 7']
  },
  {
    id: 5,
    domain: 'algebra',
    category: 'algebra-word-problems',
    difficulty: 'Medium',
    questionEn: 'A taxi ride costs $3.50 flat fee plus $1.75 per mile. If Omar spent a total of $24.50 on a ride, how many miles did he travel?',
    questionAr: 'تبلغ تكلفة رحلة التاكسي 3.50 دولار ورسوم ثابتة بالإضافة إلى 1.75 دولار لكل ميل. إذا أنفق عمر 24.50 دولارًا إجماليًا، فكم ميلًا قطع؟',
    isGridIn: true,
    correctAnswer: 12,
    explanationEn: 'Let m be miles: 1.75m + 3.50 = 24.50. Subtract 3.50: 1.75m = 21.00. Divide by 1.75: m = 21 / 1.75 = 12 miles.',
    explanationAr: 'نفرض عدد الأميال m: 1.75m + 3.50 = 24.50. اطرح 3.50: 1.75m = 21.00. اقسم على 1.75: m = 12 ميل.',
    solutionStepsEn: ['1.75m + 3.50 = 24.50', '1.75m = 21.00', 'm = 21 / 1.75 = 12'],
    solutionStepsAr: ['1.75m + 3.50 = 24.50', '1.75m = 21.00', 'm = 21 / 1.75 = 12']
  }
];

// Dynamically generate the full question bank up to 120 questions (30 per domain)
const generateFullQuestionBank = (): Question[] => {
  const list: Question[] = [...QUESTIONS];

  const domainCategories: Record<string, string[]> = {
    'algebra': ['linear-equations', 'linear-inequalities', 'systems-equations', 'linear-functions', 'algebra-word-problems'],
    'advanced-math': ['quadratic-equations', 'quadratic-functions', 'exponents', 'radicals', 'polynomials', 'rational-expressions', 'exponential-models'],
    'data-analysis': ['ratios-proportions', 'percentages', 'statistics', 'data-interpretation', 'probability', 'linear-regression'],
    'geometry-trig': ['angles-lines', 'triangles', 'right-trig', 'circles', 'area-volume', 'coordinate-geometry']
  };

  const domainList = ['algebra', 'advanced-math', 'data-analysis', 'geometry-trig'] as const;

  domainList.forEach((domain) => {
    const existingInDomain = list.filter(q => q.domain === domain).length;
    const needed = 30 - existingInDomain;

    const cats = domainCategories[domain];

    for (let i = 0; i < needed; i++) {
      const qId = list.length + 1;
      const cat = cats[i % cats.length] as any;
      const difficulty = i % 3 === 0 ? 'Easy' : i % 3 === 1 ? 'Medium' : 'Hard';

      if (domain === 'algebra') {
        list.push({
          id: qId,
          domain: 'algebra',
          category: cat,
          difficulty,
          questionEn: `Solve for x in the linear relationship: ${(i + 2)}x - ${i + 3} = ${2 * (i + 2)}x + ${i + 5}.`,
          questionAr: `أوجد قيمة x في العلاقة الخطية: ${(i + 2)}x - ${i + 3} = ${2 * (i + 2)}x + ${i + 5}.`,
          equationStr: `${i + 2}x - ${i + 3} = ${2 * (i + 2)}x + ${i + 5}`,
          svgData: {
            type: 'balance-scale',
            titleEn: 'Linear Equation Balance',
            titleAr: 'ميزان المعادلة الخطية',
            params: { leftExpr: `${i + 2}x - ${i + 3}`, rightExpr: `${2 * (i + 2)}x + ${i + 5}` }
          },
          options: [
            { textEn: `${-(2 * i + 8)}`, textAr: `${-(2 * i + 8)}` },
            { textEn: `${-(i + 8)}`, textAr: `${-(i + 8)}` },
            { textEn: `${i + 4}`, textAr: `${i + 4}` },
            { textEn: `${2 * i + 10}`, textAr: `${2 * i + 10}` }
          ],
          correctAnswer: 1,
          explanationEn: `Isolate terms with x on one side: -${i + 2}x = ${2 * i + 8} => x = -${i + 8}.`,
          explanationAr: `تجميع المتغيرات في طرف والأرقام في طرف: -${i + 2}x = ${2 * i + 8} => x = -${i + 8}.`,
          solutionStepsEn: [`${i + 2}x - ${i + 3} = ${2 * (i + 2)}x + ${i + 5}`, `-${i + 2}x = ${2 * i + 8}`, `x = -${i + 8}`],
          solutionStepsAr: [`${i + 2}x - ${i + 3} = ${2 * (i + 2)}x + ${i + 5}`, `-${i + 2}x = ${2 * i + 8}`, `x = -${i + 8}`]
        });
      } else if (domain === 'advanced-math') {
        list.push({
          id: qId,
          domain: 'advanced-math',
          category: cat,
          difficulty,
          questionEn: `For the quadratic function f(x) = (x - ${i + 2})² - ${(i + 3) * 2}, what is the vertex of the parabola?`,
          questionAr: `للدالة التربيعية f(x) = (x - ${i + 2})² - ${(i + 3) * 2}، ما هي إحداثيات رأس المنحنى؟`,
          equationStr: `f(x) = (x - ${i + 2})^2 - ${(i + 3) * 2}`,
          svgData: {
            type: 'parabola',
            titleEn: 'Parabola Vertex Graph',
            titleAr: 'رأس منحنى القطع المكافئ',
            params: { h: i + 2, k: -(i + 3) * 2 }
          },
          options: [
            { textEn: `(${i + 2}, ${-(i + 3) * 2})`, textAr: `(${i + 2}, ${-(i + 3) * 2})` },
            { textEn: `(${- (i + 2)}, ${(i + 3) * 2})`, textAr: `(${- (i + 2)}, ${(i + 3) * 2})` },
            { textEn: `(${i + 2}, ${(i + 3) * 2})`, textAr: `(${i + 2}, ${(i + 3) * 2})` },
            { textEn: `(0, ${-(i + 3) * 2})`, textAr: `(0, ${-(i + 3) * 2})` }
          ],
          correctAnswer: 0,
          explanationEn: `In vertex form y = a(x - h)² + k, the vertex is (h, k). Here h = ${i + 2} and k = ${-(i + 3) * 2}.`,
          explanationAr: `في صيغة الرأس y = a(x - h)² + k، يكون الرأس (h, k). هنا h = ${i + 2} و k = ${-(i + 3) * 2}.`,
          solutionStepsEn: [`Compare f(x) with y = a(x - h)² + k`, `h = ${i + 2}`, `k = ${-(i + 3) * 2}`, `Vertex = (${i + 2}, ${-(i + 3) * 2})`],
          solutionStepsAr: [`المقارنة مع y = a(x - h)² + k`, `h = ${i + 2}`, `k = ${-(i + 3) * 2}`, `الرأس = (${i + 2}, ${-(i + 3) * 2})`]
        });
      } else if (domain === 'data-analysis') {
        const meanVal = 70 + (i * 2);
        list.push({
          id: qId,
          domain: 'data-analysis',
          category: cat,
          difficulty,
          questionEn: `A dataset of 5 test scores has a mean of ${meanVal}. If a score of ${meanVal + 18} is added to the dataset, what is the new mean of the 6 scores?`,
          questionAr: `مجموعة بيانات تحتوي على 5 درجات باختبار متوسطها ${meanVal}. إذا أضيفت درجة ${meanVal + 18} إلى المجموعة، فما هو المتوسط الجديد للدرجات الست؟`,
          svgData: {
            type: 'bar-chart',
            titleEn: 'Data Scores Distribution',
            titleAr: 'توزيع درجات البيانات',
            params: { mean: meanVal }
          },
          options: [
            { textEn: `${meanVal + 2}`, textAr: `${meanVal + 2}` },
            { textEn: `${meanVal + 3}`, textAr: `${meanVal + 3}` },
            { textEn: `${meanVal + 4}`, textAr: `${meanVal + 4}` },
            { textEn: `${meanVal + 5}`, textAr: `${meanVal + 5}` }
          ],
          correctAnswer: 1,
          explanationEn: `Sum of 5 scores = 5 × ${meanVal} = ${5 * meanVal}. New sum = ${5 * meanVal} + ${meanVal + 18} = ${6 * meanVal + 18}. New mean = (${6 * meanVal + 18}) / 6 = ${meanVal + 3}.`,
          explanationAr: `مجموع 5 درجات = 5 × ${meanVal} = ${5 * meanVal}. المجموع الجديد = ${5 * meanVal + meanVal + 18}. المتوسط الجديد = (${6 * meanVal + 18}) / 6 = ${meanVal + 3}.`,
          solutionStepsEn: [`Original sum = 5 × ${meanVal} = ${5 * meanVal}`, `New sum = ${5 * meanVal} + ${meanVal + 18}`, `New mean = (${6 * meanVal + 18}) / 6 = ${meanVal + 3}`],
          solutionStepsAr: [`المجموع الأصلي = 5 × ${meanVal} = ${5 * meanVal}`, `المجموع الجديد = ${5 * meanVal} + ${meanVal + 18}`, `المتوسط الجديد = (${6 * meanVal + 18}) / 6 = ${meanVal + 3}`]
        });
      } else if (domain === 'geometry-trig') {
        const sideA = 3 + i;
        const sideB = 4 + i;
        list.push({
          id: qId,
          domain: 'geometry-trig',
          category: cat,
          difficulty,
          questionEn: `In a right triangle, side a = ${sideA} and side b = ${sideB}. What is tan(θ) for the angle opposite side a?`,
          questionAr: `في مثلث قائم الزاوية، الضلع a = ${sideA} والضلع b = ${sideB}. ما هي قيمة ظا(θ) للزاوية المقابلة للضلع a؟`,
          svgData: {
            type: 'right-triangle',
            titleEn: 'Right Triangle Trigonometry',
            titleAr: 'مثلث قائم الزاوية - حساب مثلثات',
            params: { opposite: `a = ${sideA}`, adjacent: `b = ${sideB}`, hypotenuse: 'c' }
          },
          options: [
            { textEn: `${sideA} / ${sideB}`, textAr: `${sideA} / ${sideB}` },
            { textEn: `${sideB} / ${sideA}`, textAr: `${sideB} / ${sideA}` },
            { textEn: `${sideA} / (${sideA} + ${sideB})`, textAr: `${sideA} / (${sideA} + ${sideB})` },
            { textEn: `1 / ${sideA}`, textAr: `1 / ${sideA}` }
          ],
          correctAnswer: 0,
          explanationEn: `By definition of tangent (TOA in SOH-CAH-TOA): tan(θ) = Opposite / Adjacent = a / b = ${sideA} / ${sideB}.`,
          explanationAr: `بتعريف الظل tan(θ) = المقابل / المجاور = a / b = ${sideA} / ${sideB}.`,
          solutionStepsEn: [`tan(θ) = Opposite / Adjacent`, `Opposite = ${sideA}`, `Adjacent = ${sideB}`, `tan(θ) = ${sideA}/${sideB}`],
          solutionStepsAr: [`tan(θ) = المقابل / المجاور`, `المقابل = ${sideA}`, `المجاور = ${sideB}`, `tan(θ) = ${sideA}/${sideB}`]
        });
      }
    }
  });

  return list;
};

export const ALL_QUESTIONS = generateFullQuestionBank();
