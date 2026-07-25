import { QuestionItem } from '../types';

export const mathG11Questions: QuestionItem[] = [
  {
    id: 'math11-q1',
    qNumber: 1,
    title: 'Graph Exponential Decay Functions',
    titleAr: 'التمثيل البياني للدوال الأسية للتضاؤل (Exponential Decay)',
    learningOutcome: 'Graph exponential decay functions and find domain, range, y-intercept, and asymptote.',
    learningOutcomeAr: 'تمثيل دوال التضاؤل الأسية بيانياً وتحديد المجال، المدى، المقطع y، والمقارب.',
    unit: 5,
    lesson: 'Lesson 5-1: Graphing Exponential Functions',
    page: 222,
    exerciseRef: 'Reveal Math G11 Adv - Example 6 (p.222 #23-26)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Identify the exponential decay function among the following options:',
    questionTextAr: 'حدد دالة التضاؤل الأسي (Exponential Decay) من بين الدوال التالية:',
    options: [
      { id: 'A', text: '$f(x) = (1.01)^x$' },
      { id: 'B', text: '$f(x) = \\left(\\frac{3}{2}\\right)^x$' },
      { id: 'C', text: '$f(x) = 0.25^x$' },
      { id: 'D', text: '$f(x) = 2^x$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'An exponential function $f(x) = b^x$ represents exponential decay if $0 < b < 1$.',
      'For $f(x) = 0.25^x$, the base $b = 0.25$ satisfies $0 < 0.25 < 1$.',
      'The domain is all real numbers $(\\mathbb{R})$, the range is $(0, \\infty)$, y-intercept is $(0,1)$, and horizontal asymptote is $y = 0$.',
      'The correct option is C.'
    ],
    finalAnswer: '$f(x) = 0.25^x$'
  },
  {
    id: 'math11-q2',
    qNumber: 2,
    title: 'Natural Base Exponential Functions & Rate of Change',
    titleAr: 'دوال الأساس الطبيعي e ومعدل التغير المتوسط',
    learningOutcome: 'Analyze expressions and functions involving natural base e and find average rate of change.',
    learningOutcomeAr: 'تحليل التعبيرات والدوال التي تتضمن الأساس الطبيعي e وحساب معدل التغير المتوسط.',
    unit: 5,
    lesson: 'Lesson 5-3: Special Exponential Functions',
    page: 255,
    exerciseRef: 'Reveal Math G11 Adv - Practice Problems (p.255 #9)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'What is the average rate of change of $f(x) = -e^{x+1}$ over the interval $[-1, 2]$?',
    questionTextAr: 'ما هو معدل التغير المتوسط للدالة $f(x) = -e^{x+1}$ على الفترة $[-1, 2]$؟',
    options: [
      { id: 'A', text: '$-3.19$' },
      { id: 'B', text: '$-4.93$' },
      { id: 'C', text: '$-6.36$' },
      { id: 'D', text: '$-12.70$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Average rate of change formula: $\\frac{f(b) - f(a)}{b - a}$ where $a = -1, b = 2$.',
      '$f(-1) = -e^{-1+1} = -e^0 = -1$.',
      '$f(2) = -e^{2+1} = -e^3 \\approx -20.0855$.',
      'Rate of change = $\\frac{-20.0855 - (-1)}{2 - (-1)} = \\frac{-19.0855}{3} \\approx -6.36$.',
      'The correct option is C.'
    ],
    finalAnswer: '$-6.36$'
  },
  {
    id: 'math11-q3',
    qNumber: 3,
    title: 'Logarithmic Expressions Evaluation',
    titleAr: 'إيجاد قيمة التعبيرات اللوجاريتمية',
    learningOutcome: 'Evaluate logarithmic expressions using properties and definitions.',
    learningOutcomeAr: 'حساب قيم التعبيرات اللوجاريتمية باستخدام التعريف والخصائص.',
    unit: 6,
    lesson: 'Lesson 6-1: Logarithms and Logarithmic Functions',
    page: 265,
    exerciseRef: 'Reveal Math G11 Adv - Example 3 (p.265 #14 & #16)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Evaluate the logarithmic expression: $\\log_{27} 81$',
    questionTextAr: 'احسب قيمة التعبير اللوجاريتمي: $\\log_{27} 81$',
    options: [
      { id: 'A', text: '$\\frac{3}{4}$' },
      { id: 'B', text: '$\\frac{4}{3}$' },
      { id: 'C', text: '$\\frac{1}{3}$' },
      { id: 'D', text: '3' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Let $y = \\log_{27} 81 \\implies 27^y = 81$.',
      'Express both sides with base 3: $(3^3)^y = 3^4 \\implies 3^{3y} = 3^4$.',
      'Set exponents equal: $3y = 4 \\implies y = \\frac{4}{3}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$\\frac{4}{3}$'
  },
  {
    id: 'math11-q4',
    qNumber: 4,
    title: 'Solving Logarithmic Equations',
    titleAr: 'حل المعادلات اللوجاريتمية',
    learningOutcome: 'Solve logarithmic equations using properties of equality.',
    learningOutcomeAr: 'حل المعادلات اللوجاريتمية باستخدام خصائص المساواة.',
    unit: 6,
    lesson: 'Lesson 6-2: Properties of Logarithms',
    page: 273,
    exerciseRef: 'Reveal Math G11 Adv - Example 1 & 2 (p.273 #1 & #8)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve the equation: $\\log_5(x^2 - 6) = \\log_5 x$',
    questionTextAr: 'حل المعادلة اللوجاريتمية: $\\log_5(x^2 - 6) = \\log_5 x$',
    options: [
      { id: 'A', text: '$x = -2$' },
      { id: 'B', text: '$x = 3$' },
      { id: 'C', text: '$x = 2$' },
      { id: 'D', text: '$x = 3 \\text{ or } x = -2$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'By property of equality for logarithms: $x^2 - 6 = x$.',
      'Rearrange into standard quadratic form: $x^2 - x - 6 = 0$.',
      'Factor: $(x - 3)(x + 2) = 0 \\implies x = 3$ or $x = -2$.',
      'Check extraneous solutions: $x = -2$ gives $\\log_5(-2)$ which is undefined in real numbers.',
      'Therefore, the only valid solution is $x = 3$. The correct option is B.'
    ],
    finalAnswer: '$x = 3$'
  },
  {
    id: 'math11-q5',
    qNumber: 5,
    title: 'Solving Exponential Equations with Natural Logarithms',
    titleAr: 'حل المعادلات الأسية باستخدام اللوجاريتم الطبيعي ln',
    learningOutcome: 'Solve exponential equations using natural logarithms and round to nearest ten-thousandth.',
    learningOutcomeAr: 'حل المعادلات الأسية باستخدام اللوجاريتم الطبيعي مع التقريب لأقرب جزء من عشرة آلاف.',
    unit: 6,
    lesson: 'Lesson 6-4: Natural Logarithms',
    page: 291,
    exerciseRef: 'Reveal Math G11 Adv - Example 4 (p.291 #28)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve the equation $2e^x - 1 = 11$. Round to four decimal places.',
    questionTextAr: 'حل المعادلة الأسية $2e^x - 1 = 11$. قرّب الناتج لأقرب أربعة أرقام عشرية.',
    options: [
      { id: 'A', text: '$1.0986$' },
      { id: 'B', text: '$1.7918$' },
      { id: 'C', text: '$2.7081$' },
      { id: 'D', text: '$0.6931$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Add 1 to both sides: $2e^x = 12$.',
      'Divide by 2: $e^x = 6$.',
      'Take natural logarithm on both sides: $x = \\ln(6)$.',
      '$x \\approx 1.791759... \\approx 1.7918$.',
      'The correct option is B.'
    ],
    finalAnswer: '$x \\approx 1.7918$'
  },
  {
    id: 'math11-q6',
    qNumber: 6,
    title: 'Exponential Growth Population Modeling',
    titleAr: 'نمذجة النمو الأسي للسكّان',
    learningOutcome: 'Write and solve exponential growth equations for real-world population data.',
    learningOutcomeAr: 'كتابة وحل معادلات النمو الأسي للبيانات السكانية الواقعية.',
    unit: 6,
    lesson: 'Lesson 6-5: Using Exponential and Logarithmic Functions',
    page: 308,
    exerciseRef: 'Reveal Math G11 Adv - Practice Problems (p.308 #17)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'In 1980, the population of Alaska was $410,851$ and in 2010 it was $713,985$. Which equation models the population $y$ after $t$ years from 1980?',
    questionTextAr: 'في عام 1980 كان عدد سكان ألاسكا 410,851 وفي عام 2010 أصبح 713,985. أي من المعادلات التالية تنمذج عدد السكان y بعد t سنة من عام 1980؟',
    options: [
      { id: 'A', text: '$y = 410,851 e^{0.0184t}$' },
      { id: 'B', text: '$y = 410,851 e^{-0.0184t}$' },
      { id: 'C', text: '$y = 713,985 e^{0.0184t}$' },
      { id: 'D', text: '$y = 713,985 e^{-0.0184t}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Model formula: $y = a e^{kt}$ where $a = 410,851$ (initial value at $t = 0$ in 1980).',
      'At $t = 30$ (2010): $713,985 = 410,851 e^{30k}$.',
      '$\\frac{713,985}{410,851} = e^{30k} \\implies k = \\frac{\\ln(1.73783)}{30} \\approx 0.0184$.',
      'Equation: $y = 410,851 e^{0.0184t}$. The correct option is A.'
    ],
    finalAnswer: '$y = 410,851 e^{0.0184t}$'
  },
  {
    id: 'math11-q7',
    qNumber: 7,
    title: 'Multiplying and Dividing Rational Expressions',
    titleAr: 'ضرب وقسمة المقادير النسبية',
    learningOutcome: 'Simplify rational expressions by factoring numerators and denominators.',
    learningOutcomeAr: 'تبسيط المقادير النسبية بالتحليل إلى العوامل.',
    unit: 7,
    lesson: 'Lesson 7-1: Multiplying and Dividing Rational Expressions',
    page: 316,
    exerciseRef: 'Reveal Math G11 Adv - Example 5 (p.316 #20)',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'Simplify the rational expression completely: $$\\frac{x^2 - 9}{6x - 12} \\div \\frac{x^2 + 10x + 21}{x^2 - x - 2}$$',
    questionTextAr: 'بسط المقدار النسبي التالي لأبسط صورة: $$\\frac{x^2 - 9}{6x - 12} \\div \\frac{x^2 + 10x + 21}{x^2 - x - 2}$$',
    options: [
      { id: 'A', text: '$\\frac{(x-3)(x+1)}{6(x+7)}$' },
      { id: 'B', text: '$\\frac{(x+3)(x-1)}{6(x-7)}$' },
      { id: 'C', text: '$\\frac{x-3}{6}$' },
      { id: 'D', text: '$\\frac{x+1}{x+7}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      '1) Convert division to multiplication by multiplying by the reciprocal:',
      '$$\\frac{x^2 - 9}{6x - 12} \\cdot \\frac{x^2 - x - 2}{x^2 + 10x + 21}$$',
      '2) Factor all quadratics and binomials:',
      '$x^2 - 9 = (x-3)(x+3)$',
      '$6x - 12 = 6(x-2)$',
      '$x^2 - x - 2 = (x-2)(x+1)$',
      '$x^2 + 10x + 21 = (x+3)(x+7)$',
      '3) Substitute and cancel common factors $(x+3)$ and $(x-2)$:',
      '$$\\frac{(x-3)(x+3)}{6(x-2)} \\cdot \\frac{(x-2)(x+1)}{(x+3)(x+7)} = \\frac{(x-3)(x+1)}{6(x+7)}$$'
    ],
    finalAnswer: '$\\frac{(x-3)(x+1)}{6(x+7)}$'
  },
  {
    id: 'math11-q8',
    qNumber: 8,
    title: 'Adding Rational Expressions with Different Denominators',
    titleAr: 'جمع المقادير النسبية بمقامات مختلفة',
    learningOutcome: 'Find the least common denominator (LCD) to add rational expressions.',
    learningOutcomeAr: 'إيجاد المضاعف المشترك الأصغر للمقامات (LCD) لجمع المقادير النسبية.',
    unit: 7,
    lesson: 'Lesson 7-2: Adding and Subtracting Rational Expressions',
    page: 323,
    exerciseRef: 'Reveal Math G11 Adv - Example 1 (p.323 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Simplify the expression: $\\frac{3}{x} + \\frac{5}{y}$',
    questionTextAr: 'بسط التعبير النسبي: $\\frac{3}{x} + \\frac{5}{y}$',
    options: [
      { id: 'A', text: '$\\frac{8}{x+y}$' },
      { id: 'B', text: '$\\frac{5x + 3y}{xy}$' },
      { id: 'C', text: '$\\frac{15}{xy}$' },
      { id: 'D', text: '$\\frac{3x + 5y}{xy}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'The least common denominator (LCD) of $x$ and $y$ is $xy$.',
      '$\\frac{3}{x} + \\frac{5}{y} = \\frac{3y}{xy} + \\frac{5x}{xy} = \\frac{5x + 3y}{xy}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$\\frac{5x + 3y}{xy}$'
  },
  {
    id: 'math11-q9',
    qNumber: 9,
    title: 'Graphing Reciprocal Functions & Transformations',
    titleAr: 'دوال المقلوب وتحويلاتها الهندسية',
    learningOutcome: 'Identify the parameters a, h, and k to write a reciprocal function $g(x) = \\frac{a}{x-h} + k$.',
    learningOutcomeAr: 'تحديد المعاملات a, h, k لكتابة دالة المقلوب $g(x) = \\frac{a}{x-h} + k$.',
    unit: 7,
    lesson: 'Lesson 7-3: Graphing Reciprocal Functions',
    page: 334,
    exerciseRef: 'Reveal Math G11 Adv - Example 5 (p.334 #17)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A reciprocal function graph has a vertical asymptote at $x = 5$, horizontal asymptote at $y = 0$, and passes through $(3, 1)$. Write its equation $g(x) = \\frac{a}{x-h} + k$.',
    questionTextAr: 'دالة مقلوب لها خط تقارب رأسي عند $x = 5$ وخط تقارب أفقي عند $y = 0$ وتمر بالنقطة $(3, 1)$. اكتب معادلتها $g(x) = \\frac{a}{x-h} + k$.',
    options: [
      { id: 'A', text: '$g(x) = \\frac{-2}{x-5}$' },
      { id: 'B', text: '$g(x) = \\frac{2}{x-5}$' },
      { id: 'C', text: '$g(x) = \\frac{-2}{x+5}$' },
      { id: 'D', text: '$g(x) = \\frac{1}{x-5}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Vertical asymptote at $x = 5 \\implies h = 5$.',
      'Horizontal asymptote at $y = 0 \\implies k = 0$.',
      'Substitute point $(3, 1)$ into $1 = \\frac{a}{3 - 5} + 0 \\implies 1 = \\frac{a}{-2} \\implies a = -2$.',
      'Function equation: $g(x) = \\frac{-2}{x-5}$. The correct option is A.'
    ],
    finalAnswer: '$g(x) = \\frac{-2}{x-5}$'
  },
  {
    id: 'math11-q10',
    qNumber: 10,
    title: 'Oblique Asymptotes of Rational Functions',
    titleAr: 'خطوط التقارب المائلة للدوال النسبية',
    learningOutcome: 'Graph and analyze rational functions with oblique (slant) asymptotes.',
    learningOutcomeAr: 'تمثيل وتحليل الدوال النسبية التي تحتوي على خطوط تقارب مائلة.',
    unit: 7,
    lesson: 'Lesson 7-4: Graphing Rational Functions',
    page: 344,
    exerciseRef: 'Reveal Math G11 Adv - Example 4 (p.344 #11)',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'Find the zeros, vertical asymptotes, and oblique asymptote for the function $$f(x) = \\frac{(x-4)^2}{x+2}$$',
    questionTextAr: 'أوجد الأصفار، خطوط التقارب الراسية، وخط التقارب المائل للدالة $$f(x) = \\frac{(x-4)^2}{x+2}$$',
    options: [
      { id: 'A', text: 'Zero: $x=4$; Vertical asymptote: $x=-2$; Oblique asymptote: $f(x) = x - 10$' },
      { id: 'B', text: 'Zero: $x=-2$; Vertical asymptote: $x=4$; Oblique asymptote: $f(x) = x + 10$' },
      { id: 'C', text: 'Zero: $x=16$; Vertical asymptote: $x=2$; Oblique asymptote: $f(x) = x - 4$' },
      { id: 'D', text: 'Zero: None; Vertical asymptote: $x=-2$; Oblique asymptote: $f(x) = x$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      '1) Zeros occur where numerator equals 0: $(x-4)^2 = 0 \\implies x = 4$.',
      '2) Vertical asymptote occurs where denominator equals 0: $x + 2 = 0 \\implies x = -2$.',
      '3) Expand numerator: $(x-4)^2 = x^2 - 8x + 16$.',
      '4) Polynomial division: $\\frac{x^2 - 8x + 16}{x+2} = (x - 10) + \\frac{36}{x+2}$.',
      '5) The quotient gives the oblique asymptote line: $f(x) = x - 10$.'
    ],
    finalAnswer: 'Zero: $x=4$, V.A: $x=-2$, Oblique Asymptote: $y = x - 10$'
  },
  {
    id: 'math11-q11',
    qNumber: 11,
    title: 'Joint Variation Equations',
    titleAr: 'معادلات التغير المشترك (Joint Variation)',
    learningOutcome: 'Recognize and solve direct and joint variation equations.',
    learningOutcomeAr: 'التعرف على معادلات التغير المشترك وحلها.',
    unit: 7,
    lesson: 'Lesson 7-5: Variation',
    page: 351,
    exerciseRef: 'Reveal Math G11 Adv - Example 2 (p.351 #11)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'If $y$ varies jointly as $x$ and $z$, and $y = 18$ when $x = 2$ and $z = 3$, find $y$ when $x = 5$ and $z = 6$.',
    questionTextAr: 'إذا كانت y تتغير تغيراً مشتركاً مع x و z، وكانت $y = 18$ عندما $x = 2, z = 3$، فأوجد قيمة y عندما $x = 5, z = 6$.',
    options: [
      { id: 'A', text: '$45$' },
      { id: 'B', text: '$90$' },
      { id: 'C', text: '$72$' },
      { id: 'D', text: '$36$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Joint variation equation: $y = k x z$.',
      'Find constant $k$: $18 = k (2)(3) = 6k \\implies k = 3$.',
      'Calculate $y$ when $x = 5$ and $z = 6$: $y = 3(5)(6) = 90$.',
      'The correct option is B.'
    ],
    finalAnswer: '$y = 90$'
  },
  {
    id: 'math11-q12',
    qNumber: 12,
    title: 'Solving Rational Inequalities',
    titleAr: 'حل المتباينات النسبية',
    learningOutcome: 'Solve rational inequalities in one variable and show solution on number line.',
    learningOutcomeAr: 'حل المتباينات النسبية في متغير واحد وتمثيل الحل على خط الأعداد.',
    unit: 7,
    lesson: 'Lesson 7-6: Solving Rational Equations and Inequalities',
    page: 368,
    exerciseRef: 'Reveal Math G11 Adv - Practice Problems (p.368 #17)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve the rational inequality: $\\frac{x - 3}{x + 1} < 5$',
    questionTextAr: 'حل المتباينة النسبية: $\\frac{x - 3}{x + 1} < 5$',
    options: [
      { id: 'A', text: '$-2 < x < -1$' },
      { id: 'B', text: '$x < -2 \\text{ or } x > -1$' },
      { id: 'C', text: '$x > -1$' },
      { id: 'D', text: '$x < -1$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      '1) Subtract 5 to compare to 0: $\\frac{x - 3}{x + 1} - 5 < 0$.',
      '2) Combine fractions: $\\frac{x - 3 - 5(x + 1)}{x + 1} = \\frac{-4x - 8}{x + 1} < 0$.',
      '3) Key critical numbers where numerator or denominator equals 0: $x = -2$ and $x = -1$.',
      '4) Test intervals $(-\\infty, -2)$, $(-2, -1)$, and $(-1, \\infty)$:',
      'For $x = -3$: $\\frac{-4(-3)-8}{-3+1} = \\frac{4}{-2} = -2 < 0$ (True)',
      'For $x = -1.5$: $\\frac{-4(-1.5)-8}{-1.5+1} = \\frac{-2}{-0.5} = 4 > 0$ (False)',
      'For $x = 0$: $\\frac{-8}{1} = -8 < 0$ (True)',
      '5) Solution set: $x < -2$ or $x > -1$. The correct option is B.'
    ],
    finalAnswer: '$x < -2 \\text{ or } x > -1$'
  },
  {
    id: 'math11-q13',
    qNumber: 13,
    title: 'Theoretical vs Experimental Probability',
    titleAr: 'الاحتمال النظري والتجريبي',
    learningOutcome: 'Compare theoretical and experimental probabilities from trial data.',
    learningOutcomeAr: 'المقارنة بين الاحتمال النظري والتجريبي من واقع نتائج التجارب.',
    unit: 8,
    lesson: 'Lesson 8-2: Using Statistical Experiments',
    page: 383,
    exerciseRef: 'Reveal Math G11 Adv - Example 1 (p.383 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A spinner with 4 equal sections (Red, Blue, Green, Yellow) was spun 100 times. Blue resulted 38 times. What are the theoretical and experimental probabilities of spinning Blue?',
    questionTextAr: 'قرص دوار به 4 قطاعات متساوية (أحمر، أزرق، أخضر، أصفر) تم تدويره 100 مرة. ظهر اللون الأزرق 38 مرة. ما هما الاحتمالان النظري والتجريبي للون الأزرق؟',
    options: [
      { id: 'A', text: 'Theoretical: $25\\%$, Experimental: $38\\%$' },
      { id: 'B', text: 'Theoretical: $38\\%$, Experimental: $25\\%$' },
      { id: 'C', text: 'Theoretical: $50\\%$, Experimental: $38\\%$' },
      { id: 'D', text: 'Theoretical: $25\\%$, Experimental: $25\\%$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Theoretical probability = $\\frac{1 \\text{ blue section}}{4 \\text{ total sections}} = 0.25 = 25\\%$.',
      'Experimental probability = $\\frac{38 \\text{ blue results}}{100 \\text{ total spins}} = 0.38 = 38\\%$.',
      'The correct option is A.'
    ],
    finalAnswer: 'Theoretical: 25%, Experimental: 38%'
  },
  {
    id: 'math11-q14',
    qNumber: 14,
    title: 'Standard Deviation and Mean Analysis',
    titleAr: 'الانحراف المعياري ومتوسط البيانات السكانية',
    learningOutcome: 'Describe distributions by finding their mean $\\mu$ and standard deviation $\\sigma$.',
    learningOutcomeAr: 'وصف التوزيعات الإحصائية بإنشاء المتوسط الحسابي والانحراف المعياري.',
    unit: 8,
    lesson: 'Lesson 8-3: Analyzing Population Data',
    page: 388,
    exerciseRef: 'Reveal Math G11 Adv - Example 1 (p.388)',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'Calculate the mean $\\mu$ and standard deviation $\\sigma$ for the dataset: $\\{57.1, 59.3, 54.6, 55.2, 55.9, 54.9, 50.3, 53.5\\}$',
    questionTextAr: 'احسب المتوسط الحسابي $\\mu$ والانحراف المعياري $\\sigma$ لمجموعة البيانات التالية: $\\{57.1, 59.3, 54.6, 55.2, 55.9, 54.9, 50.3, 53.5\\}$',
    options: [
      { id: 'A', text: '$\\mu = 55.1$, $\\sigma = 2.45$' },
      { id: 'B', text: '$\\mu = 50.0$, $\\sigma = 4.82$' },
      { id: 'C', text: '$\\mu = 55.1$, $\\sigma = 6.02$' },
      { id: 'D', text: '$\\mu = 58.2$, $\\sigma = 1.25$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      '1) Sum of 8 values = $440.8$.',
      '2) Mean $\\mu = \\frac{440.8}{8} = 55.1$.',
      '3) Squared differences $(x_i - \\mu)^2$ sum up to $48.18$.',
      '4) Population variance $\\sigma^2 = \\frac{48.18}{8} = 6.0225$.',
      '5) Standard deviation $\\sigma = \\sqrt{6.0225} \\approx 2.45$.'
    ],
    finalAnswer: '$\\mu = 55.1, \\sigma = 2.45$'
  },
  {
    id: 'math11-q15',
    qNumber: 15,
    title: 'Standard Normal Distribution & Z-Values',
    titleAr: 'التوزيع الطبيعي المعياري والدرجة المعيارية Z',
    learningOutcome: 'Analyze standardized data and distributions by using z-values ($z = \\frac{X - \\mu}{\\sigma}$).',
    learningOutcomeAr: 'تحليل البيانات المعيارية وحساب قيمة الدرجة المعيارية z.',
    unit: 8,
    lesson: 'Lesson 8-4: Normal Distributions',
    page: 399,
    exerciseRef: 'Reveal Math G11 Adv - Example 6 (p.399)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Find the z-value if $X = 24$, $\\mu = 19$, and $\\sigma = 3.8$.',
    questionTextAr: 'أوجد الدرجة المعيارية $z$ إذا كانت $X = 24$ والمتوسط $\\mu = 19$ والانحراف المعياري $\\sigma = 3.8$.',
    options: [
      { id: 'A', text: '$1.316$' },
      { id: 'B', text: '$-1.316$' },
      { id: 'C', text: '$0.760$' },
      { id: 'D', text: '$2.105$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Z-value formula: $z = \\frac{X - \\mu}{\\sigma}$.',
      '$z = \\frac{24 - 19}{3.8} = \\frac{5}{3.8} \\approx 1.31578... \\approx 1.316$.',
      'The correct option is A.'
    ],
    finalAnswer: '$z \\approx 1.316$'
  },
  {
    id: 'math11-q16',
    qNumber: 16,
    title: 'Trigonometric Functions for Acute Angles in Right Triangles',
    titleAr: 'الدوال المثلثية للزوايا الحادة في المثلث القائم',
    learningOutcome: 'Find values of the remaining trigonometric functions given one ratio in a right triangle.',
    learningOutcomeAr: 'إيجاد قيم الدوال المثلثية المتبقية لزاوية حادة معطاة في مثلث قائم الزاوية.',
    unit: 9,
    lesson: 'Lesson 9-2: Trigonometric Functions of General Angles',
    page: 431,
    exerciseRef: 'Reveal Math G11 Adv - Example 2 (p.431 #7)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'In a right triangle, $\\angle A$ is acute and $\\tan A = \\frac{8}{15}$. Find $\\sin A$ and $\\cos A$.',
    questionTextAr: 'في مثلث قائم الزاوية، $\\angle A$ زاوية حادة حيث $\\tan A = \\frac{8}{15}$. أوجد قيمتي $\\sin A$ و $\\cos A$.',
    options: [
      { id: 'A', text: '$\\sin A = \\frac{8}{17}, \\cos A = \\frac{15}{17}$' },
      { id: 'B', text: '$\\sin A = \\frac{15}{17}, \\cos A = \\frac{8}{17}$' },
      { id: 'C', text: '$\\sin A = \\frac{8}{10}, \\cos A = \\frac{6}{10}$' },
      { id: 'D', text: '$\\sin A = \\frac{17}{8}, \\cos A = \\frac{17}{15}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Given $\\tan A = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{8}{15}$.',
      'Hypotenuse $c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$.',
      '$\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{8}{17}$.',
      '$\\cos A = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{15}{17}$.',
      'The correct option is A.'
    ],
    finalAnswer: '$\\sin A = \\frac{8}{17}, \\cos A = \\frac{15}{17}$'
  },
  {
    id: 'math11-q17',
    qNumber: 17,
    title: 'Trigonometric Values Using Reference Angles',
    titleAr: 'إيجاد القيم الدقيقة للدوال المثلثية باستخدام زوايا الإسناد',
    learningOutcome: 'Find exact values of trigonometric functions using reference angles.',
    learningOutcomeAr: 'حساب القيمة الدقيقة للدوال المثلثية باستخدام زوايا الإسناد (Reference Angles).',
    unit: 9,
    lesson: 'Lesson 9-2: Trigonometric Functions of General Angles',
    page: 432,
    exerciseRef: 'Reveal Math G11 Adv - Example 6 (p.432 #40)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Find the exact value of $\\tan 330^\\circ$.',
    questionTextAr: 'أوجد القيمة الدقيقة لـ $\\tan 330^\\circ$.',
    options: [
      { id: 'A', text: '$-\\frac{\\sqrt{3}}{3}$' },
      { id: 'B', text: '$-\\sqrt{3}$' },
      { id: 'C', text: '$\\frac{\\sqrt{3}}{3}$' },
      { id: 'D', text: '$-\\frac{1}{2}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Angle $330^\\circ$ lies in Quadrant IV, where tangent is negative.',
      'Reference angle $\\theta\' = 360^\\circ - 330^\\circ = 30^\\circ$.',
      '$\\tan 330^\\circ = -\\tan 30^\\circ = -\\frac{\\sqrt{3}}{3}$.',
      'The correct option is A.'
    ],
    finalAnswer: '$-\\frac{\\sqrt{3}}{3}$'
  },
  {
    id: 'math11-q18',
    qNumber: 18,
    title: 'Unit Circle Points and Trigonometric Values',
    titleAr: 'دائرة الوحدة وإيجاد قيم $\\cos\\theta$ و $\\sin\\theta$',
    learningOutcome: 'Find values of trigonometric functions given a point on the unit circle.',
    learningOutcomeAr: 'إيجاد قيم الدوال المثلثية بدلالة إحداثيات نقطة على دائرة الوحدة.',
    unit: 9,
    lesson: 'Lesson 9-3: Circular and Periodic Functions',
    page: 441,
    exerciseRef: 'Reveal Math G11 Adv - Example 1 (p.441 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'The terminal side of angle $\\theta$ in standard position intersects the unit circle at point $P\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$. Find $\\cos \\theta$ and $\\sin \\theta$.',
    questionTextAr: 'ضلع الانتهاء للزاوية $\\theta$ في الوضع القياسي يقطع دائرة الوحدة في النقطة $P\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$. أوجد $\\cos \\theta$ و $\\sin \\theta$.',
    options: [
      { id: 'A', text: '$\\cos \\theta = -\\frac{\\sqrt{3}}{2}, \\sin \\theta = \\frac{1}{2}$' },
      { id: 'B', text: '$\\cos \\theta = \\frac{1}{2}, \\sin \\theta = -\\frac{\\sqrt{3}}{2}$' },
      { id: 'C', text: '$\\cos \\theta = -\\sqrt{3}, \\sin \\theta = 1$' },
      { id: 'D', text: '$\\cos \\theta = \\frac{\\sqrt{3}}{2}, \\sin \\theta = -\\frac{1}{2}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'On a unit circle, any point $P(x, y)$ on the terminal side corresponds directly to $(\\cos \\theta, \\sin \\theta)$.',
      '$x = \\cos \\theta = -\\frac{\\sqrt{3}}{2}$',
      '$y = \\sin \\theta = \\frac{1}{2}$',
      'The correct option is A.'
    ],
    finalAnswer: '$\\cos \\theta = -\\frac{\\sqrt{3}}{2}, \\sin \\theta = \\frac{1}{2}$'
  },
  {
    id: 'math11-q19',
    qNumber: 19,
    title: 'Period and Equation of Sine and Cosine Graphs',
    titleAr: 'السعة والدورة لمعادلات دالتي الجيب وجيب التمام',
    learningOutcome: 'Graph and analyze sine and cosine functions and determine their period and amplitude.',
    learningOutcomeAr: 'تحليل السعة والدورة لدوال الجيب وجيب التمام كتابة معادلاتها.',
    unit: 9,
    lesson: 'Lesson 9-4: Graphing Sine and Cosine Functions',
    page: 452,
    exerciseRef: 'Reveal Math G11 Adv - Example 4 (p.452 #25)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A sine function has an amplitude of $5$ and a period of $180^\\circ$. What is its equation $y = a \\sin b\\theta$?',
    questionTextAr: 'دالة جيب لها سعة تساوي 5 ودورة مقدارها $180^\\circ$. ما هي معادلتها على الصورة $y = a \\sin b\\theta$؟',
    options: [
      { id: 'A', text: '$y = 5 \\sin 2\\theta$' },
      { id: 'B', text: '$y = 2 \\sin 5\\theta$' },
      { id: 'C', text: '$y = 5 \\sin \\theta$' },
      { id: 'D', text: '$y = 2.5 \\sin 2\\theta$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Amplitude $|a| = 5 \\implies a = 5$.',
      'Period formula for sine: Period = $\\frac{360^\\circ}{b} = 180^\\circ \\implies b = \\frac{360^\\circ}{180^\\circ} = 2$.',
      'Equation: $y = 5 \\sin 2\\theta$. The correct option is A.'
    ],
    finalAnswer: '$y = 5 \\sin 2\\theta$'
  },
  {
    id: 'math11-q20',
    qNumber: 20,
    title: 'Graphing and Transformations of Tangent Functions',
    titleAr: 'دورة دالة الظل tan وتحويلاتها الهندسية',
    learningOutcome: 'Graph and analyze tangent functions, finding period, asymptotes, and transformations.',
    learningOutcomeAr: 'تحليل وتمثيل دالة الظل (tan) وإيجاد دورتها وخطوط تقاربها.',
    unit: 9,
    lesson: 'Lesson 9-5: Graphing Other Trigonometric Functions',
    page: 461,
    exerciseRef: 'Reveal Math G11 Adv - Examples 1 & 2 (p.461 #1-3)',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'Find the period and vertical asymptotes for the tangent function: $y = \\tan 2x$',
    questionTextAr: 'أوجد الدورة وخطوط التقارب الرأسية لدالة الظل التالية: $y = \\tan 2x$',
    options: [
      { id: 'A', text: 'Period = $90^\\circ$; Asymptotes at $x = (90n + 45)^\\circ$ where $n$ is an integer' },
      { id: 'B', text: 'Period = $180^\\circ$; Asymptotes at $x = (180n + 90)^\\circ$' },
      { id: 'C', text: 'Period = $45^\\circ$; Asymptotes at $x = (45n + 22.5)^\\circ$' },
      { id: 'D', text: 'Period = $360^\\circ$; Asymptotes at $x = (360n + 180)^\\circ$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      '1) Parent tangent function $y = \\tan x$ has period $180^\\circ$ (or $\\pi$).',
      '2) For $y = \\tan bx$ with $b = 2$, new Period = $\\frac{180^\\circ}{b} = \\frac{180^\\circ}{2} = 90^\\circ$.',
      '3) Vertical asymptotes occur where $2x = 90^\\circ + 180^\\circ n \\implies x = 45^\\circ + 90^\\circ n$.',
      '4) Horizontal compression factor is $\\frac{1}{2}$.'
    ],
    finalAnswer: 'Period = $90^\\circ$, Asymptotes: $x = (90n + 45)^\\circ$'
  }
];
