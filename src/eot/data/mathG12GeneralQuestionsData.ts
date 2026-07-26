import { QuestionItem } from '../types';

export const mathG12GeneralQuestions: QuestionItem[] = [
  // --- MCQ ELECTRONIC SECTION (Questions 1 to 20) ---
  {
    id: 'math12g-q1',
    qNumber: 1,
    title: 'Graphing Quadratic Functions & Axis of Symmetry',
    titleAr: 'تمثيل الدوال التربيعية بيانيًا ومعادلة محور التماثل والرأس',
    learningOutcome: 'Graph quadratic functions and identify key features such as axis of symmetry, vertex, and y-intercept.',
    learningOutcomeAr: 'تمثيل الدوال التربيعية بيانيًا وتحديد الخصائص الرئيسية مثل محور التماثل والرأس والمقطع y.',
    unit: 1,
    lesson: 'Lesson 1-1: Graphing Quadratic Functions / تمثيل الدوال التربيعية بيانيًا',
    page: 3,
    exerciseRef: 'Student Book - p.3 Example 5',
    type: 'mcq',
    imageSvgType: 'math12g_quadratic_graph',
    examYear: '2025/2026',
    questionText: 'For the quadratic function $f(x) = x^2 + 4x + 3$, determine the axis of symmetry, the vertex coordinates, whether it has a maximum or minimum, and the y-intercept.',
    questionTextAr: 'للدالة التربيعية $f(x) = x^2 + 4x + 3$، أوجد معادلة محور التماثل، وإحداثيات رأس المنحنى، وما إذا كانت القيمة عظمى أم صغرى، والمقطع y.',
    options: [
      { id: 'A', text: 'Axis: $x = -2$, Vertex: $(-2, -1)$, Minimum, y-intercept: $y = 3$' },
      { id: 'B', text: 'Axis: $x = 2$, Vertex: $(2, 15)$, Maximum, y-intercept: $y = 3$' },
      { id: 'C', text: 'Axis: $x = -4$, Vertex: $(-4, 3)$, Minimum, y-intercept: $y = -1$' },
      { id: 'D', text: 'Axis: $x = 0$, Vertex: $(0, 3)$, Maximum, y-intercept: $y = -2$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Identify coefficients: $a = 1, b = 4, c = 3$.',
      'Axis of symmetry formula: $x = \\frac{-b}{2a} = \\frac{-4}{2(1)} = -2$.',
      'Vertex y-coordinate: $f(-2) = (-2)^2 + 4(-2) + 3 = 4 - 8 + 3 = -1 \\implies$ Vertex is $(-2, -1)$.',
      'Since $a = 1 > 0$, the parabola opens upward, so it has a **minimum value** at $y = -1$.',
      'The y-intercept is at $c = 3$ (Point $(0,3)$).'
    ],
    finalAnswer: 'Axis x = -2, Vertex (-2, -1), Minimum at y = -1, y-intercept = 3'
  },
  {
    id: 'math12g-q2',
    qNumber: 2,
    title: 'Solving Quadratic Equations by Graphing',
    titleAr: 'حل المعادلات التربيعية باستخدام التمثيل البياني (إيجاد الجذور)',
    learningOutcome: 'Solve quadratic equations by finding the x-intercepts (roots/zeros) of the related function.',
    learningOutcomeAr: 'حل المعادلة التربيعية بإيجاد نقاط التقاطع مع المحور x (الأصفار/الجذور).',
    unit: 1,
    lesson: 'Lesson 1-2: Solving Quadratic Equations by Graphing / حل المعادلات بالتمثيل البياني',
    page: 13,
    exerciseRef: 'Student Book - p.13 Q11',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Find the real solutions of the quadratic equation $x^2 + 2x - 24 = 0$ by identifying its graph x-intercepts.',
    questionTextAr: 'أوجد الحلول الحقيقية للمعادلة التربيعية $x^2 + 2x - 24 = 0$ من خلال إيجاد نقاط تقاطع التمثيل البياني مع المحور x.',
    options: [
      { id: 'A', text: '$x = 4$ and $x = -6$' },
      { id: 'B', text: '$x = -4$ and $x = 6$' },
      { id: 'C', text: '$x = -3$ and $x = 1$' },
      { id: 'D', text: 'No real solutions ($x = \\emptyset$)' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Factor the quadratic equation: $(x - 4)(x + 6) = 0$.',
      'Set each factor to zero: $x - 4 = 0 \\implies x = 4$, and $x + 6 = 0 \\implies x = -6$.',
      'The graph crosses the x-axis at $x = 4$ and $x = -6$.'
    ],
    finalAnswer: 'x = 4, x = -6'
  },
  {
    id: 'math12g-q3',
    qNumber: 3,
    title: 'Solving Quadratic Equations by Factoring GCF',
    titleAr: 'حل المعادلات التربيعية بالتحليل بإخراج العامل المشترك الأكبر (GCF)',
    learningOutcome: 'Solve quadratic equations by factoring out the greatest common factor and using the zero-product property.',
    learningOutcomeAr: 'حل المعادلة التربيعية باستخدام إخراج العامل المشترك الأكبر وخاصية الضرب الصفري.',
    unit: 1,
    lesson: 'Lesson 1-4: Solving Quadratic Equations by Factoring / حل المعادلات التربيعية بالتحليل',
    page: 22,
    exerciseRef: 'Student Book - p.22 Example 2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Solve the quadratic equation $16x^2 + 8x = 0$ by factoring.',
    questionTextAr: 'حل المعادلة التربيعية التالية باستخدام التحليل إلى العوامل: $16x^2 + 8x = 0$.',
    options: [
      { id: 'A', text: '$x = 0$ and $x = -\\frac{1}{2}$' },
      { id: 'B', text: '$x = 2$ and $x = \\frac{1}{3}$' },
      { id: 'C', text: '$x = 8$ and $x = \\frac{1}{6}$' },
      { id: 'D', text: '$x = 4$ and $x = \\frac{1}{9}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Factor out the GCF $8x$: $8x(2x + 1) = 0$.',
      'Apply Zero Product Property:',
      '• $8x = 0 \\implies x = 0$.',
      '• $2x + 1 = 0 \\implies 2x = -1 \\implies x = -\\frac{1}{2}$.',
      'The solutions are $x = 0$ and $x = -\\frac{1}{2}$.'
    ],
    finalAnswer: 'x = 0, x = -1/2'
  },
  {
    id: 'math12g-q4',
    qNumber: 4,
    title: 'Completing the Square to Form Perfect Square Trinomials',
    titleAr: 'إكمال المربع لإيجاد قيمة c لتكوين ثلاثي حدود مربع كامل',
    learningOutcome: 'Find the value of c that makes a quadratic expression a perfect square trinomial.',
    learningOutcomeAr: 'إيجاد قيمة c التي تجعل المقدار التربيعي ثلاثي حدود مربعًا كاملاً.',
    unit: 1,
    lesson: 'Lesson 1-3: Completing the Square / إكمال المربع',
    page: 29,
    exerciseRef: 'Student Book - p.29 Example 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Find the value of $c$ that makes $x^2 + 4x + c$ a perfect square trinomial.',
    questionTextAr: 'جد قيمة $c$ التي تجعل التعبير $x^2 + 4x + c$ ثلاثي حدود مربعًا كاملاً.',
    options: [
      { id: 'A', text: '$c = 4$' },
      { id: 'B', text: '$c = 2$' },
      { id: 'C', text: '$c = 8$' },
      { id: 'D', text: '$c = -4$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Identify the coefficient of $x$: $b = 4$.',
      'Formula for $c$: $c = \\left(\\frac{b}{2}\\right)^2$.',
      'Calculate: $c = \\left(\\frac{4}{2}\\right)^2 = (2)^2 = 4$.',
      'The trinomial becomes $x^2 + 4x + 4 = (x + 2)^2$.'
    ],
    finalAnswer: 'c = 4'
  },
  {
    id: 'math12g-q5',
    qNumber: 5,
    title: 'Solving Quadratic Equations by Completing the Square',
    titleAr: 'حل المعادلة التربيعية باستخدام طريقة إكمال المربع',
    learningOutcome: 'Solve quadratic equations by completing the square.',
    learningOutcomeAr: 'حل المعادلة التربيعية بالخطوات باستخدام طريقة إكمال المربع.',
    unit: 1,
    lesson: 'Lesson 1-3: Completing the Square / إكمال المربع',
    page: 32,
    exerciseRef: 'Student Book - p.32 Example 2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Solve the equation $x^2 - 6x + 12 = 19$ by completing the square.',
    questionTextAr: 'حل المعادلة التالية بإكمال المربع: $x^2 - 6x + 12 = 19$.',
    options: [
      { id: 'A', text: '$x = -1$ and $x = 7$' },
      { id: 'B', text: '$x = 2$ and $x = 4$' },
      { id: 'C', text: '$x = 5$ and $x = \\frac{1}{6}$' },
      { id: 'D', text: '$x = 4$ and $x = -7$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Rearrange constant: $x^2 - 6x = 19 - 12 \\implies x^2 - 6x = 7$.',
      'Add $\\left(\\frac{-6}{2}\\right)^2 = 9$ to both sides: $x^2 - 6x + 9 = 7 + 9 \\implies (x - 3)^2 = 16$.',
      'Take square root: $x - 3 = \\pm \\sqrt{16} = \\pm 4$.',
      '• $x = 3 + 4 = 7$',
      '• $x = 3 - 4 = -1$.',
      'Solutions are $x = -1$ and $x = 7$.'
    ],
    finalAnswer: 'x = -1, x = 7'
  },
  {
    id: 'math12g-q6',
    qNumber: 6,
    title: 'Discriminant & Nature of Roots of Quadratic Equations',
    titleAr: 'حساب قيمة المميز وتحديد عدد ونوع جذور المعادلة التربيعية',
    learningOutcome: 'Calculate discriminant $b^2 - 4ac$ to determine the number and type of roots.',
    learningOutcomeAr: 'حساب قيمة المميز $b^2 - 4ac$ لوصف عدد ونوع الجذور.',
    unit: 1,
    lesson: 'Lesson 1-6: Discriminant & General Formula / القانون العام والمميز',
    page: 36,
    exerciseRef: 'Student Book - p.36 Example 5a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Find the discriminant value of $7x^2 - 11x + 5 = 0$ and describe the number and type of its roots.',
    questionTextAr: 'جد قيمة المميز لكل معادلة تربيعية $7x^2 - 11x + 5 = 0$ ثم صف عدد الجذور ونوعها.',
    options: [
      { id: 'A', text: 'Discriminant $= -19 < 0 \\implies 2 \\text{ complex roots (جذران مركبان/تخيلان)}$' },
      { id: 'B', text: 'Discriminant $= 0 \\implies 1 \\text{ real rational repeated root}$' },
      { id: 'C', text: 'Discriminant $= 44 > 0 \\implies 2 \\text{ real irrational roots}$' },
      { id: 'D', text: 'Discriminant $= 289 > 0 \\implies 2 \\text{ real rational roots}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Identify coefficients: $a = 7, b = -11, c = 5$.',
      'Discriminant formula: $D = b^2 - 4ac$.',
      '$D = (-11)^2 - 4(7)(5) = 121 - 140 = -19$.',
      'Since $D < 0$, there are **2 complex roots** (جذران مركبان / حلول تخيلية).'
    ],
    finalAnswer: 'Discriminant = -19, 2 complex roots'
  },
  {
    id: 'math12g-q7',
    qNumber: 7,
    title: 'Graphing Quadratic Inequalities in Two Variables',
    titleAr: 'تمثيل المتباينات التربيعية بمتغيرين بيانيًا',
    learningOutcome: 'Graph quadratic inequalities in two variables and shade the solution region.',
    learningOutcomeAr: 'تمثيل المتباينات التربيعية بمتغيرين بيانيًا وتحديد منطقة الحل المظللة.',
    unit: 1,
    lesson: 'Lesson 1-8: Quadratic Inequalities / المتباينات التربيعية',
    page: 39,
    exerciseRef: 'Student Book - p.39 Q13',
    type: 'mcq',
    imageSvgType: 'math12g_quadratic_inequality_graph',
    examYear: '2025/2026',
    questionText: 'Which graph correctly represents the quadratic inequality $y \\ge x^2 + 5x + 6$?',
    questionTextAr: 'أي من التمثيلات البيانية التالية يمثل المتباينة التربيعية $y \\ge x^2 + 5x + 6$ بصورة صحيحة؟',
    options: [
      { id: 'A', text: 'Solid boundary parabola opening upward, shaded region inside/above the curve containing $(0,6)$' },
      { id: 'B', text: 'Dashed boundary parabola opening downward, shaded region below' },
      { id: 'C', text: 'Solid boundary parabola opening downward, shaded region outside' },
      { id: 'D', text: 'Dashed boundary parabola opening upward, shaded region below' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Boundary line $y = x^2 + 5x + 6$ is **solid** because the inequality includes $\\ge$.',
      'Parabola opens upward ($a = 1 > 0$).',
      'Test point $(0,0)$: $0 \\ge 0^2 + 5(0) + 6 \\implies 0 \\ge 6$ (False).',
      'Test point $(-2, 2)$: $2 \\ge (-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0 \\implies 2 \\ge 0$ (True).',
      'Region inside/above the parabola is shaded.'
    ],
    finalAnswer: 'Solid parabola opening upward, shaded inside/above region'
  },
  {
    id: 'math12g-q8',
    qNumber: 8,
    title: 'Degree and Leading Coefficient of Polynomial Functions',
    titleAr: 'تحديد الدرجة والمعامل الرئيسي لكثيرة الحدود',
    learningOutcome: 'State the degree and leading coefficient of a polynomial in one variable.',
    learningOutcomeAr: 'تحديد درجة كثيرة الحدود بمتغير واحد ومعاملها الرئيسي.',
    unit: 2,
    lesson: 'Lesson 2-3: Polynomial Functions / الدوال كثيرة الحدود',
    page: 49,
    exerciseRef: 'Student Book - p.49 Example 1a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'State the degree and leading coefficient of the polynomial function $f(x) = 8x^5 - 4x^3 + 2x^2 - x - 3$.',
    questionTextAr: 'اذكر الدرجة والمعامل الرئيسي لكثيرة الحدود التالية: $f(x) = 8x^5 - 4x^3 + 2x^2 - x - 3$.',
    options: [
      { id: 'A', text: 'Degree = 5 (الدرجة الخامسة), Leading Coefficient = 8' },
      { id: 'B', text: 'Degree = 3 (الدرجة الثالثة), Leading Coefficient = -4' },
      { id: 'C', text: 'Degree = 2 (الدرجة الثانية), Leading Coefficient = 2' },
      { id: 'D', text: 'Degree = 1 (الدرجة الأولى), Leading Coefficient = -1' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The highest exponent of $x$ is 5, so the **Degree is 5** (خامسة).',
      'The coefficient of $x^5$ is 8, so the **Leading Coefficient is 8** (المعامل الرئيسي).'
    ],
    finalAnswer: 'Degree = 5, Leading Coefficient = 8'
  },
  {
    id: 'math12g-q9',
    qNumber: 9,
    title: 'End Behavior & Number of Zeros of Polynomial Graphs',
    titleAr: 'تحديد السلوك الطرفي ونوع الدالة (زوجية/فردية) وعدد الأصفار',
    learningOutcome: 'Analyze polynomial graphs to describe end behavior, odd/even degree, and count real zeros.',
    learningOutcomeAr: 'تحليل المنحنى البياني لكثيرة الحدود لوصف السلوك الطرفي وتحديد درجة الدالة وعدد أصفارها.',
    unit: 2,
    lesson: 'Lesson 2-3: Analyzing Polynomial Graphs / تحليل التمثيلات البيانية لكثيرات الحدود',
    page: 51,
    exerciseRef: 'Student Book - p.51 Q35',
    type: 'mcq',
    imageSvgType: 'math12g_polynomial_end_behavior',
    examYear: '2025/2026',
    questionText: 'A polynomial graph has both ends going upwards ($f(x) \\to +\\infty$ as $x \\to -\\infty$ and $f(x) \\to +\\infty$ as $x \\to +\\infty$) and crosses the x-axis at 4 distinct points. Describe its degree parity and real zero count.',
    questionTextAr: 'دالة كثيرة حدود يتجه كلا طرفي منحناها للأعلى ($f(x) \\to +\\infty$ عندما $x \\to \\pm\\infty$) ويقطع منحناها المحور x في 4 نقاط. حدد نوع درجة الدالة وعدد أصفارها الحقيقية.',
    options: [
      { id: 'A', text: 'Even degree function (دالة زوجية الدرجة) with 4 real zeros (أربعة أصفار حقيقية)' },
      { id: 'B', text: 'Odd degree function (دالة فردية الدرجة) with 3 real zeros' },
      { id: 'C', text: 'Neither even nor odd with 1 real zero' },
      { id: 'D', text: 'Even degree function with 5 real zeros' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Both ends pointing in the same direction ($+\\infty$) indicates an **Even Degree** (دالة زوجية الدرجة) with a positive leading coefficient.',
      'The number of x-intercepts is 4, so it has **4 real zeros** (أربعة أصفار حقيقية).'
    ],
    finalAnswer: 'Even degree function with 4 real zeros'
  },
  {
    id: 'math12g-q10',
    qNumber: 10,
    title: 'Approximating Zeros of Polynomial Functions using Sign Changes',
    titleAr: 'تقدير أماكن أصفار كثيرة الحدود من تغيرات الإشارة في الجدول',
    learningOutcome: 'Determine consecutive integers between which real zeros lie by locating sign changes in function values.',
    learningOutcomeAr: 'تحديد الأعداد الصحيحة المتتالية التي تقع بينها أصفار الدالة بملاحظة تغير إشارة $f(x)$.',
    unit: 2,
    lesson: 'Lesson 2-4: Analyzing Graphs of Polynomials / تحليل التمثيلات البيانية',
    page: 58,
    exerciseRef: 'Student Book - p.58 Example 2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'For $f(x) = x^3 - 4x^2 + 3x + 1$, given values $f(-1) = -7, f(0) = 1, f(1) = 1, f(2) = -1, f(3) = 1$, between which consecutive integers do the real zeros lie?',
    questionTextAr: 'للدالة $f(x) = x^3 - 4x^2 + 3x + 1$، بالاستعانة بالقيم $f(-1) = -7, f(0) = 1, f(1) = 1, f(2) = -1, f(3) = 1$، بين أي أعداد صحيحة متتالية تقع أصفار الدالة؟',
    options: [
      { id: 'A', text: 'Between $-1$ and $0$, between $1$ and $2$, and between $2$ and $3$' },
      { id: 'B', text: 'Between $0$ and $1$, and between $3$ and $4$' },
      { id: 'C', text: 'Between $-2$ and $-1$ only' },
      { id: 'D', text: 'No real zeros exist' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Sign change between $f(-1) = -7$ and $f(0) = 1 \\implies$ Real zero between $-1$ and $0$.',
      'Sign change between $f(1) = 1$ and $f(2) = -1 \\implies$ Real zero between $1$ and $2$.',
      'Sign change between $f(2) = -1$ and $f(3) = 1 \\implies$ Real zero between $2$ and $3$.'
    ],
    finalAnswer: 'Between -1 and 0, between 1 and 2, and between 2 and 3'
  },
  {
    id: 'math12g-q11',
    qNumber: 11,
    title: 'Finding Relative Extrema (Maxima and Minima)',
    titleAr: 'إيجاد القيم العظمى والصغرى المحلية (النسبية) لدوال كثيرات الحدود',
    learningOutcome: 'Estimate coordinates and values of relative maxima and relative minima of polynomial functions.',
    learningOutcomeAr: 'تقدير إحداثيات وقيم القمم والقيعان (القيم العظمى والصغرى النسبية).',
    unit: 2,
    lesson: 'Lesson 2-4: Extrema of Polynomial Functions / القيم العظمى والصغرى',
    page: 61,
    exerciseRef: 'Student Book - p.61 Example 3',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A polynomial function has a peak at $(0, 3)$ and a trough at $(3, -12)$. Identify the relative maximum and minimum values.',
    questionTextAr: 'تمتلك دالة كثيرة حدود قمة عند النقطة $(0, 3)$ وقاعاً عند النقطة $(3, -12)$. حدد القيم العظمى والصغرى النسبية.',
    options: [
      { id: 'A', text: 'Relative maximum of $3$ at $x = 0$; Relative minimum of $-12$ at $x = 3$' },
      { id: 'B', text: 'Relative maximum of $-12$ at $x = 3$; Relative minimum of $3$ at $x = 0$' },
      { id: 'C', text: 'Relative maximum of $0$ at $x = 3$; Relative minimum of $3$ at $x = -12$' },
      { id: 'D', text: 'No relative extrema' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Peak point $(0, 3)$ represents a **Relative Maximum** (قيمة عظمى نسبية) $= 3$ at $x = 0$.',
      'Trough point $(3, -12)$ represents a **Relative Minimum** (قيمة صغرى نسبية) $= -12$ at $x = 3$.'
    ],
    finalAnswer: 'Relative max = 3 at x = 0; Relative min = -12 at x = 3'
  },
  {
    id: 'math12g-q12',
    qNumber: 12,
    title: 'Adding and Subtracting Polynomial Expressions',
    titleAr: 'جمع وطرح التعابير كثيرة الحدود وتبسيطها',
    learningOutcome: 'Perform addition and subtraction operations on polynomial expressions.',
    learningOutcomeAr: 'إجراء عمليات الجمع والطرح على كثيرات الحدود وتبسيط الناتج.',
    unit: 2,
    lesson: 'Lesson 2-1: Operations on Polynomials / العمليات على كثيرات الحدود',
    page: 64,
    exerciseRef: 'Student Book - p.64 Example 3a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Simplify the expression: $(4x^2 - 5x + 6) - (2x^2 + 3x - 1)$.',
    questionTextAr: 'بسط التعبير الآتي لأبسط صورة: $(4x^2 - 5x + 6) - (2x^2 + 3x - 1)$.',
    options: [
      { id: 'A', text: '$2x^2 - 8x + 7$' },
      { id: 'B', text: '$-0.25x^2 - 4x + 2$' },
      { id: 'C', text: '$x^2 - 4x - 6$' },
      { id: 'D', text: '$2x^2 + 4x - 6$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Distribute the negative sign to the second polynomial:',
      '$(4x^2 - 5x + 6) - 2x^2 - 3x + 1$.',
      'Combine like terms:',
      '• $x^2$ terms: $4x^2 - 2x^2 = 2x^2$',
      '• $x$ terms: $-5x - 3x = -8x$',
      '• Constants: $6 + 1 = 7$.',
      'Result: $2x^2 - 8x + 7$.'
    ],
    finalAnswer: '2x^2 - 8x + 7'
  },
  {
    id: 'math12g-q13',
    qNumber: 13,
    title: 'Multiplying Polynomial Expressions',
    titleAr: 'ضرب التعابير كثيرة الحدود وتبسيطها',
    learningOutcome: 'Multiply polynomial expressions using the distributive property.',
    learningOutcomeAr: 'ضرب كثيرات الحدود باستخدام خاصية التوزيع وتبسيط التعبير.',
    unit: 2,
    lesson: 'Lesson 2-1: Operations on Polynomials / العمليات على كثيرات الحدود',
    page: 72,
    exerciseRef: 'Student Book - p.72 Q32',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Simplify the product: $(x - y)(x^2 + 2xy + y^2)$.',
    questionTextAr: 'حول التعبير التالي لأبسط صورة: $(x - y)(x^2 + 2xy + y^2)$.',
    options: [
      { id: 'A', text: '$x^3 + x^2y - xy^2 - y^3$' },
      { id: 'B', text: '$6x^3y - 9x^3y^2 + 12x^4y^3$' },
      { id: 'C', text: '$-9x^3y^2 + 12x^4y^3$' },
      { id: 'D', text: '$6x^3y - 9x^3y^2 + 4$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Distribute $(x - y)$ over $(x^2 + 2xy + y^2)$:',
      '$x(x^2 + 2xy + y^2) - y(x^2 + 2xy + y^2)$',
      '$= (x^3 + 2x^2y + xy^2) - (x^2y + 2xy^2 + y^3)$',
      'Combine like terms:',
      '$= x^3 + (2x^2y - x^2y) + (xy^2 - 2xy^2) - y^3 = x^3 + x^2y - xy^2 - y^3$.'
    ],
    finalAnswer: 'x^3 + x^2y - xy^2 - y^3'
  },
  {
    id: 'math12g-q14',
    qNumber: 14,
    title: 'Dividing Polynomials by Monomials',
    titleAr: 'قسمة كثيرة الحدود على حدية أحادية',
    learningOutcome: 'Divide polynomial expressions by monomial terms.',
    learningOutcomeAr: 'قسمة تعبير كثيرة الحدود على حدية أحادية وتبسيط الناتج.',
    unit: 2,
    lesson: 'Lesson 2-2: Division of Polynomials / قسمة كثيرات الحدود',
    page: 75,
    exerciseRef: 'Student Book - p.75 Example 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Simplify the division: $\\frac{6x^4y^3 + 12x^3y^2 - 18x^2y}{3xy}$.',
    questionTextAr: 'حول التعبير لأبسط صورة: $\\frac{6x^4y^3 + 12x^3y^2 - 18x^2y}{3xy}$.',
    options: [
      { id: 'A', text: '$2x^3y^2 + 4x^2y - 6x$' },
      { id: 'B', text: '$x^3y^2 + x^2y + 6x$' },
      { id: 'C', text: '$y^2 + 2x^2y - 6x$' },
      { id: 'D', text: '$2x^3 + 4x^2 - 6x$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Divide each term separately by $3xy$:',
      '• $\\frac{6x^4y^3}{3xy} = 2x^3y^2$',
      '• $\\frac{12x^3y^2}{3xy} = 4x^2y$',
      '• $\\frac{-18x^2y}{3xy} = -6x$',
      'Combined quotient: $2x^3y^2 + 4x^2y - 6x$.'
    ],
    finalAnswer: '2x^3y^2 + 4x^2y - 6x'
  },
  {
    id: 'math12g-q15',
    qNumber: 15,
    title: 'Solving Higher Degree Equations in Quadratic Form',
    titleAr: 'حل معادلات درجات عليا تحول إلى الصيغة التربيعية',
    learningOutcome: 'Solve higher-degree polynomial equations by rewriting them in quadratic form.',
    learningOutcomeAr: 'حل معادلات من درجات عليا بكتابتها في الصورة التربيعية بفرض متغيّر جديد.',
    unit: 2,
    lesson: 'Lesson 2-5: Solving Polynomial Equations / حل معادلات كثيرات الحدود',
    page: 86,
    exerciseRef: 'Student Book - p.86 Example 6',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Solve the polynomial equation $18x^4 - 21x^2 + 3 = 0$.',
    questionTextAr: 'حل المعادلة التالية: $18x^4 - 21x^2 + 3 = 0$.',
    options: [
      { id: 'A', text: '$x = \\pm 1$ and $x = \\pm \\frac{\\sqrt{6}}{6}$' },
      { id: 'B', text: 'No real solutions' },
      { id: 'C', text: '$x = \\pm 4$ and $x = \\pm \\sqrt{41}$' },
      { id: 'D', text: '$x = \\pm 2, 0, 3$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Let $u = 3x^2 \\implies 2(3x^2)^2 - 7(3x^2) + 3 = 0 \\implies 2u^2 - 7u + 3 = 0$.',
      'Factor quadratic in $u$: $(u - 3)(2u - 1) = 0 \\implies u = 3$ or $u = \\frac{1}{2}$.',
      'Substitute back $3x^2$:',
      '1. $3x^2 = 3 \\implies x^2 = 1 \\implies x = \\pm 1$.',
      '2. $3x^2 = \\frac{1}{2} \\implies x^2 = \\frac{1}{6} \\implies x = \\pm \\frac{1}{\\sqrt{6}} = \\pm \\frac{\\sqrt{6}}{6}$.',
      'Solutions: $x = \\pm 1, \\pm \\frac{\\sqrt{6}}{6}$.'
    ],
    finalAnswer: 'x = ±1, ±√6/6'
  },
  {
    id: 'math12g-q16',
    qNumber: 16,
    title: 'Graphing Exponential Growth Functions & Transformations',
    titleAr: 'تمثيل دوال النمو الأسي وتحديد المجال والمدى وخط التقارب',
    learningOutcome: 'Graph exponential growth functions and identify domain, range, and horizontal asymptotes.',
    learningOutcomeAr: 'تمثيل دوال النمو الأسي وتحديد المجال والمدى وخطوط التقارب رأسياً وأفقيًا.',
    unit: 2,
    lesson: 'Lesson 2-1: Exponential Functions / الدوال الأسية',
    page: 102,
    exerciseRef: 'Student Book - p.102 Example 5a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'For the exponential function $y = 2^x + 1$, determine its domain, range, and horizontal asymptote.',
    questionTextAr: 'للدالة الأسية $y = 2^x + 1$، حدد المجال والمدى وخط التقارب الأفقي.',
    options: [
      { id: 'A', text: 'Domain: All real numbers $\\mathbb{R}$, Range: $\\{y \\mid y > 1\\}$, Asymptote: $y = 1$' },
      { id: 'B', text: 'Domain: $\\{x \\mid x > 0\\}$, Range: All real numbers, Asymptote: $x = 0$' },
      { id: 'C', text: 'Domain: All real numbers $\\mathbb{R}$, Range: $\\{y \\mid y < -5\\}$, Asymptote: $y = -5$' },
      { id: 'D', text: 'Domain: All real numbers $\\mathbb{R}$, Range: $\\{y \\mid y > -3\\}$, Asymptote: $y = -3$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Base $b = 2 > 1 \\implies$ Exponential Growth.',
      'Vertical shift up by 1 unit ($k = +1$).',
      'Domain is all real numbers $\\mathbb{R}$.',
      'Horizontal asymptote shifts to $y = 1$.',
      'Range is $\\{y \\mid y > 1\\}$.'
    ],
    finalAnswer: 'Domain: R, Range: {y | y > 1}, Horizontal Asymptote: y = 1'
  },
  {
    id: 'math12g-q17',
    qNumber: 17,
    title: 'Graphing Exponential Decay Functions',
    titleAr: 'تمثيل دوال التضاؤل الأسي وتحديد تحويلاتها الهندسية',
    learningOutcome: 'Graph exponential decay functions and describe transformations from parent function $y = b^x$.',
    learningOutcomeAr: 'تمثيل دوال التضاؤل الأسي ووصف التحويلات الهندسية (الانسحاب والانعكاس).',
    unit: 2,
    lesson: 'Lesson 2-1: Exponential Functions / الدوال الأسية',
    page: 108,
    exerciseRef: 'Student Book - p.108 Example 6b',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Describe the transformations for the exponential decay function $y = 2\\left(\\frac{1}{4}\\right)^{x+2} - 3$.',
    questionTextAr: 'صف التحويلات الهندسية لدالة التضاؤل الأسي التالية: $y = 2\\left(\\frac{1}{4}\\right)^{x+2} - 3$.',
    options: [
      { id: 'A', text: 'Vertical stretch factor 2, shift left 2 units ($h = -2$), shift down 3 units ($k = -3$)' },
      { id: 'B', text: 'Vertical compression factor 0.1, shift right 3 units, shift up 1 unit' },
      { id: 'C', text: 'Reflection across x-axis, shift left 4 units, shift up 2 units' },
      { id: 'D', text: 'Shift right 2 units, shift up 3 units' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Base $b = \\frac{1}{4} < 1 \\implies$ Exponential Decay parent function.',
      'Coefficient $a = 2 > 1 \\implies$ Vertical stretch by a factor of 2.',
      'Exponent exponent $x + 2 \\implies h = -2 \\implies$ Horizontal shift left 2 units.',
      'Constant term $k = -3 \\implies$ Vertical shift down 3 units (Asymptote $y = -3$).'
    ],
    finalAnswer: 'Vertical stretch by 2, shift left 2, shift down 3'
  },
  {
    id: 'math12g-q18',
    qNumber: 18,
    title: 'Classifying Statistical Studies: Survey, Experiment & Observational',
    titleAr: 'تصنيف أنواع الدراسات الإحصائية (دراسة مسحية / تجربة / دراسة بالملاحظة)',
    learningOutcome: 'Distinguish among sample surveys, experiments, and observational studies.',
    learningOutcomeAr: 'التمييز بين الدراسات المسحية، والتجارب، والدراسات القائمة على الملاحظة.',
    unit: 3,
    lesson: 'Lesson 3-1: Designing a Study / إعداد دراسة إحصائية',
    page: 112,
    exerciseRef: 'Student Book - p.112 Example 1a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A music recording company selects 50 teenagers at random from local high schools to show them 3 album cover designs and watch/record their reactions without interference. What type of study is this?',
    questionTextAr: 'تريد شركة تسجيلات اختبار ثلاثة تصاميم لغلاف ألبوم. تختار الشركة 50 مراهقاً من المدارس الثانوية المحلية لعرض الأغلفة عليهم وملاحظة وتسجيل ردود أفعالهم. حدد نوع هذه الدراسة.',
    options: [
      { id: 'A', text: 'Observational Study (دراسة بالملاحظة/مسحية بدون تأثير)' },
      { id: 'B', text: 'Sample Survey (استطلاع رأي)' },
      { id: 'C', text: 'Controlled Experiment (تجربة علمية)' },
      { id: 'D', text: 'None of these' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The company monitors and records reactions without attempting to influence or apply a controlled treatment.',
      'Therefore, this scenario is an **Observational Study** (دراسة مسحية / قائمة على الملاحظة).',
      'Sample: 50 selected teenagers. Population: All potential teenage album buyers.'
    ],
    finalAnswer: 'Observational Study (دراسة بالملاحظة)'
  },
  {
    id: 'math12g-q19',
    qNumber: 19,
    title: 'Identifying Bias in Survey Questions',
    titleAr: 'تحديد التحيز في أسئلة الاستطلاع واستبيانات الرأي',
    learningOutcome: 'Classify survey questions as biased or unbiased.',
    learningOutcomeAr: 'تحديد ما إذا كان سؤال الاستطلاع متحيّزاً أم غير متحيز وتفسير السبب.',
    unit: 3,
    lesson: 'Lesson 3-1: Designing a Study / إعداد دراسة إحصائية',
    page: 121,
    exerciseRef: 'Student Book - p.121 Example 3a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Determine whether the survey question is biased or unbiased: "Don\'t you agree that the school cafeteria should serve healthy food?"',
    questionTextAr: 'حدد ما إذا كان سؤال الاستطلاع التالي متحيّزًا أم غير متحيّز: "ألا توافق على وجوب تقديم كافتيريا المدرسة لطعام صحي؟"',
    options: [
      { id: 'A', text: 'Biased (متحيّز) because the phrase "Don\'t you agree" encourages a positive response.' },
      { id: 'B', text: 'Unbiased (غير متحيّز) because it asks about healthy choices.' },
      { id: 'C', text: 'Unbiased because it offers multiple choices.' },
      { id: 'D', text: 'Biased because it is an open-ended numerical question.' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The wording "Don\'t you agree..." leads and persuades the respondent toward agreeing with the statement.',
      'Hence, it is a **Biased question** (سؤال متحيّز).'
    ],
    finalAnswer: 'Biased (متحيز)'
  },
  {
    id: 'math12g-q20',
    qNumber: 20,
    title: 'Normal Distribution & Empirical Rule (68-95-99.7)',
    titleAr: 'حساب النسبة المئوية للبيانات في التوزيع الطبيعي بـ القاعدة التجريبية',
    learningOutcome: 'Analyze normally distributed variables using the Empirical Rule (68-95-99.7%).',
    learningOutcomeAr: 'تطبيق القاعدة التجريبية (68% - 95% - 99.7%) لإيجاد الاحتمالات وعدد العناصر.',
    unit: 3,
    lesson: 'Lesson 3-2: Normal Distribution / التوزيع الطبيعي',
    page: 125,
    exerciseRef: 'Student Book - p.125 Example 1',
    type: 'mcq',
    imageSvgType: 'math12g_normal_distribution_curve',
    examYear: '2025/2026',
    questionText: 'Heights of 880 students are normally distributed with mean $\\mu = 168\\text{ cm}$ and standard deviation $\\sigma = 6\\text{ cm}$. Approximately how many students are taller than $180\\text{ cm}$?',
    questionTextAr: 'يتوزع طول 880 طالبًا توزيعًا طبيعيًا بوسط $\\mu = 168\\text{ cm}$ وانحراف معياري $\\sigma = 6\\text{ cm}$. كم عدد الطلاب تقريبًا الذين يزيد طولهم عن $180\\text{ cm}$؟',
    options: [
      { id: 'A', text: '$22\\text{ students}$ ($2.5\\%$ of total)' },
      { id: 'B', text: '$88\\text{ students}$ ($10\\%$ of total)' },
      { id: 'C', text: '$132\\text{ students}$ ($15\\%$ of total)' },
      { id: 'D', text: '$300\\text{ students}$ ($34\\%$ of total)' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Value $180\\text{ cm}$ corresponds to $\\mu + 2\\sigma = 168 + 2(6) = 180\\text{ cm}$.',
      'By the Empirical Rule, the area under the normal curve beyond $\\mu + 2\\sigma$ is $2.35\\% + 0.15\\% = 2.5\\%$.',
      'Calculate number of students: $880 \\times 2.5\\% = 880 \\times 0.025 = 22\\text{ students}$.'
    ],
    finalAnswer: '22 students'
  },

  // --- PAPER WRITTEN SECTION (Questions 21 to 25 / Q1 to Q5 Paper) ---
  {
    id: 'math12g-paper-q1',
    qNumber: 'Q1 (Paper)',
    title: 'Solving Quadratic Equations using the Quadratic Formula',
    titleAr: 'السؤال الأول كتابي: حل المعادلة التربيعية باستخدام القانون العام والمميز',
    learningOutcome: 'Solve quadratic equations step-by-step using the general quadratic formula and discriminant.',
    learningOutcomeAr: 'حل المعادلة التربيعية بالخطوات بالتفصيل باستخدام القانون العام والمميز.',
    unit: 1,
    lesson: 'Lesson 1-6: Quadratic Formula / القانون العام للحل',
    page: 128,
    exerciseRef: 'Student Book - p.128 Q21',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `**For the quadratic equation $2x^2 + 3x - 3 = 0$:**

1. Find the value of the discriminant ($b^2 - 4ac$).
2. Describe the number and type of roots.
3. Find the exact solutions using the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`,
    questionTextAr: `**للمعادلة التربيعية $2x^2 + 3x - 3 = 0$:**

1. أوجد قيمة المميز ($b^2 - 4ac$).
2. صف عدد الجذور ونوعها.
3. جد الحلول الدقيقة باستخدام القانون العام $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`,
    solutionSteps: [
      '--- Step 1: Identify coefficients & Discriminant ---',
      '$a = 2, b = 3, c = -3$',
      '$D = b^2 - 4ac = (3)^2 - 4(2)(-3) = 9 + 24 = 33$.',
      '--- Step 2: Describe roots ---',
      'Since $D = 33 > 0$ and is not a perfect square, the equation has **2 real irrational roots** (جذران حقيقيان غير نسبيين).',
      '--- Step 3: Exact Solutions ---',
      '$x = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{-3 \\pm \\sqrt{33}}{2(2)} = \\frac{-3 \\pm \\sqrt{33}}{4}$.',
      '• $x_1 = \\frac{-3 + \\sqrt{33}}{4}$',
      '• $x_2 = \\frac{-3 - \\sqrt{33}}{4}$.'
    ],
    finalAnswer: 'Discriminant = 33, 2 real irrational roots, x = (-3 ± √33)/4'
  },
  {
    id: 'math12g-paper-q2',
    qNumber: 'Q2 (Paper)',
    title: 'Synthetic Division of Polynomials',
    titleAr: 'السؤال الثاني كتابي: قسمة كثيرات الحدود باستخدام القسمة التركيبية',
    learningOutcome: 'Divide polynomial expressions by a binomial using synthetic division.',
    learningOutcomeAr: 'إجراء القسمة التركيبية لكثيرة حدود وتحديد الناتج والباقي.',
    unit: 2,
    lesson: 'Lesson 2-2: Synthetic Division / القسمة التركيبية',
    page: 137,
    exerciseRef: 'Student Book - p.137 Example 4',
    type: 'paper',
    imageSvgType: 'math12g_synthetic_division_table',
    examYear: '2025/2026',
    questionText: `**Use synthetic division to evaluate the quotient:**
$$(2x^3 - 13x^2 + 26x - 24) \\div (x - 4)$$

Show the full synthetic division setup grid, the quotient polynomial, and the remainder.`,
    questionTextAr: `**استخدم القسمة التركيبية لإيجاد ناتج القسمة التالي:**
$$(2x^3 - 13x^2 + 26x - 24) \\div (x - 4)$$

اكتب جدول القسمة التركيبية بالكامل، وحدد كثيرة الحدود الناتجة والباقي.`,
    solutionSteps: [
      '--- Step 1: Set up synthetic division grid ---',
      'Divisor root $x - 4 = 0 \\implies x = 4$.',
      'Coefficients of dividend: $2, -13, 26, -24$.',
      'Grid:',
      '  4  |   2   -13    26   -24',
      '     |        8   -20    24',
      '  --------------------------',
      '         2    -5     6     0',
      '--- Step 2: Write quotient and remainder ---',
      'The bottom row numbers are coefficients of quotient of degree 2:',
      'Quotient $= 2x^2 - 5x + 6$.',
      'Remainder $= 0$.',
      'Verification check by multiplication: $(2x^2 - 5x + 6)(x - 4) = 2x^3 - 8x^2 - 5x^2 + 20x + 6x - 24 = 2x^3 - 13x^2 + 26x - 24$.'
    ],
    finalAnswer: 'Quotient = 2x^2 - 5x + 6, Remainder = 0'
  },
  {
    id: 'math12g-paper-q3',
    qNumber: 'Q3 (Paper)',
    title: 'Factoring Polynomial Expressions Completely',
    titleAr: 'السؤال الثالث كتابي: تحليل كثيرات الحدود إلى العوامل الأولية كاملاً',
    learningOutcome: 'Factor polynomial expressions completely using sum/difference of cubes and grouping methods.',
    learningOutcomeAr: 'تحليل كثيرات الحدود إلى عواملها الأولية باستخدام طرق المربعين والمكعبين والتجميع.',
    unit: 2,
    lesson: 'Lesson 2-5: Factoring Polynomials / تحليل كثيرات الحدود',
    page: 148,
    exerciseRef: 'Student Book - p.148 Q20 & Q26',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `**Factor each polynomial expression completely into prime factors:**

1. $8c^3 - 27d^3$
2. $gx^2 - 3hx^2 - 6fy^2 - gy^2 + 6fx^2 + 3hy^2$`,
    questionTextAr: `**حلل كل من كثيرات الحدود التالية إلى عواملها الأولية:**

1. $8c^3 - 27d^3$
2. $gx^2 - 3hx^2 - 6fy^2 - gy^2 + 6fx^2 + 3hy^2$`,
    solutionSteps: [
      '--- Part 1: Difference of Cubes ($8c^3 - 27d^3$) ---',
      'Rewrite terms as cubes: $(2c)^3 - (3d)^3$.',
      'Formula: $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$.',
      'Factored form $= (2c - 3d)((2c)^2 + (2c)(3d) + (3d)^2) = (2c - 3d)(4c^2 + 6cd + 9d^2)$.',
      '--- Part 2: Factoring by Grouping ---',
      'Group terms with $x^2$ and terms with $y^2$:',
      '$(gx^2 + 6fx^2 - 3hx^2) - (gy^2 + 6fy^2 - 3hy^2)$',
      '$= x^2(6f + g - 3h) - y^2(6f + g - 3h)$',
      'Factor out common binomial $(6f + g - 3h)$:',
      '$= (x^2 - y^2)(6f + g - 3h)$',
      'Factor difference of squares $(x^2 - y^2) = (x - y)(x + y)$:',
      'Final Factored Form $= (x - y)(x + y)(6f + g - 3h)$.'
    ],
    finalAnswer: '1) (2c - 3d)(4c^2 + 6cd + 9d^2)  2) (x - y)(x + y)(6f + g - 3h)'
  },
  {
    id: 'math12g-paper-q4',
    qNumber: 'Q4 (Paper)',
    title: 'Solving Exponential Equations with Common Bases',
    titleAr: 'السؤال الرابع كتابي: حل المعادلات الأسية ذات الأساسات المشتركة',
    learningOutcome: 'Solve exponential equations by equating exponents after writing terms in identical bases.',
    learningOutcomeAr: 'حل المعادلات الأسية بجعل الأساسات متساوية ومساواة الأسس.',
    unit: 2,
    lesson: 'Lesson 2-1: Exponential Equations / حل المعادلات الأسية',
    page: 154,
    exerciseRef: 'Student Book - p.154 Q1 & Q2',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `**Solve each exponential equation for the given variable:**

1. $3^{5x} = 27^{2x - 4}$
2. $16^{2y - 3} = 4^{y + 1}$`,
    questionTextAr: `**حل كل من المعادلات الأسية التالية:**

1. $3^{5x} = 27^{2x - 4}$
2. $16^{2y - 3} = 4^{y + 1}$`,
    solutionSteps: [
      '--- Part 1: $3^{5x} = 27^{2x - 4}$ ---',
      'Rewrite base $27$ as power of $3$: $27 = 3^3$.',
      'Equation becomes: $3^{5x} = (3^3)^{2x - 4} \\implies 3^{5x} = 3^{3(2x - 4)}$.',
      'Equate exponents: $5x = 6x - 12$.',
      'Subtract $6x$: $-x = -12 \\implies x = 12$.',
      '--- Part 2: $16^{2y - 3} = 4^{y + 1}$ ---',
      'Rewrite base $16$ as power of $4$: $16 = 4^2$.',
      'Equation becomes: $(4^2)^{2y - 3} = 4^{y + 1} \\implies 4^{2(2y - 3)} = 4^{y + 1}$.',
      'Equate exponents: $2(2y - 3) = y + 1 \\implies 4y - 6 = y + 1$.',
      'Subtract $y$ and add $6$: $3y = 7 \\implies y = \\frac{7}{3}$.'
    ],
    finalAnswer: '1) x = 12   2) y = 7/3'
  },
  {
    id: 'math12g-paper-q5',
    qNumber: 'Q5 (Paper)',
    title: 'Calculating Probabilities in Normal Distributions using Z-Scores',
    titleAr: 'السؤال الخامس كتابي: حساب الاحتمالات في التوزيع الطبيعي بـ Z-score والجدول المعياري',
    learningOutcome: 'Convert normal random variables to standard z-scores and compute probabilities from Z-tables.',
    learningOutcomeAr: 'تحويل متغير التوزيع الطبيعي إلى Z-score المعياري وحساب الاحتمال من جدول التوزيع المعياري.',
    unit: 3,
    lesson: 'Lesson 3-2: Standard Normal Distribution / جدول التوزيع الطبيعي المعياري',
    page: 158,
    exerciseRef: 'Student Book - p.158 Example 5',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `Temperatures in a city during a summer month are normally distributed with mean $\\mu = 81^\\circ\\text{F}$ and standard deviation $\\sigma = 6^\\circ\\text{F}$.

1. Find the probability $P(70^\\circ < X < 90^\\circ)$.
2. Find the probability $P(X \\ge 95^\\circ)$.`,
    questionTextAr: `يتم توزيع درجات الحرارة لأحد الأشهر في إحدى المدن توزيعاً طبيعياً حيث الوسط $\\mu = 81^\\circ\\text{F}$ والانحراف المعياري $\\sigma = 6^\\circ\\text{F}$.

1. أوجد الاحتمال $P(70^\\circ < X < 90^\\circ)$.
2. أوجد الاحتمال $P(X \\ge 95^\\circ)$.`,
    solutionSteps: [
      '--- Part 1: $P(70^\\circ < X < 90^\\circ)$ ---',
      'Convert $X_1 = 70$ to Z-score: $Z_1 = \\frac{70 - 81}{6} = \\frac{-11}{6} \\approx -1.83$.',
      'Table value for $Z = -1.83 \\implies P(Z < -1.83) = 0.0336$.',
      'Convert $X_2 = 90$ to Z-score: $Z_2 = \\frac{90 - 81}{6} = \\frac{9}{6} = 1.50$.',
      'Table value for $Z = 1.50 \\implies P(Z < 1.50) = 0.9332$.',
      'Probability $= 0.9332 - 0.0336 = 0.8996 \\approx 90\\%$.',
      '--- Part 2: $P(X \\ge 95^\\circ)$ ---',
      'Convert $X = 95$ to Z-score: $Z = \\frac{95 - 81}{6} = \\frac{14}{6} \\approx 2.33$.',
      'Table value for $Z = 2.33 \\implies P(Z < 2.33) = 0.9901$.',
      'Probability $P(X \\ge 95^\\circ) = 1 - 0.9901 = 0.0099 \\approx 0.1\\%$ or $1\\%$.'
    ],
    finalAnswer: '1) P(70 < X < 90) = 89.96% (~ 90%)   2) P(X ≥ 95) = 0.99% (~ 0.1% or 1%)'
  }
];
