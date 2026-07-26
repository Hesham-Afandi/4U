import { QuestionItem } from '../types';

export const mathG9Questions: QuestionItem[] = [
  // --- TOPIC 1: MCQ - Distributive Property (p.29 Q25-39) ---
  {
    id: 'math9-t1-q25',
    qNumber: 1,
    title: 'Distributive Property / خاصية التوزيع',
    titleAr: 'استخدام خاصية التوزيع لتبسيط التعابير الجبرية',
    learningOutcome: 'Apply the distributive property to simplify algebraic expressions.',
    learningOutcomeAr: 'تطبيق خاصية التوزيع لتبسيط التعابير الجبرية.',
    unit: 1,
    lesson: 'Lesson 1.4: Distributive Property / خاصية التوزيع',
    page: 29,
    exerciseRef: 'p.29 Q.25',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Use the distributive property to simplify: $2(x + 4)$',
    questionTextAr: 'استخدم خاصية التوزيع لتبسيط التعبير الجبري: $2(x + 4)$',
    options: [
      { id: 'A', text: '$2x + 4$' },
      { id: 'B', text: '$x + 8$' },
      { id: 'C', text: '$2x + 6$' },
      { id: 'D', text: '$2x + 8$' }
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'خاصية التوزيع: $a(b + c) = ab + ac$.',
      'اضرب 2 في $x$ واضرب 2 في 4:',
      '$2 \\cdot x + 2 \\cdot 4 = 2x + 8$.'
    ],
    finalAnswer: '$2x + 8$'
  },
  {
    id: 'math9-t1-q28',
    qNumber: 2,
    title: 'Distributive Property with Negative Factor',
    titleAr: 'خاصية التوزيع مع معامل سالب',
    learningOutcome: 'Simplify expressions with negative distributive factors.',
    learningOutcomeAr: 'تبسيط التعابير باستخدام التوزيع مع إشارة سالبة.',
    unit: 1,
    lesson: 'Lesson 1.4: Distributive Property / خاصية التوزيع',
    page: 29,
    exerciseRef: 'p.29 Q.28',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Simplify the expression: $-3(2x - 6)$',
    questionTextAr: 'بسط التعبير الجبري التالي: $-3(2x - 6)$',
    options: [
      { id: 'A', text: '$-6x - 18$' },
      { id: 'B', text: '$-6x - 6$' },
      { id: 'C', text: '$-6x + 18$' },
      { id: 'D', text: '$6x - 18$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'توزيع $-3$ على الحدود داخل القوسين:',
      '$-3 \\cdot (2x) = -6x$.',
      '$-3 \\cdot (-6) = +18$.',
      'النتيجة المبسطة: $-6x + 18$.'
    ],
    finalAnswer: '$-6x + 18$'
  },
  {
    id: 'math9-t1-q36',
    qNumber: 3,
    title: 'Simplifying Algebraic Expressions by Combining Like Terms',
    titleAr: 'تبسيط التعابير وتجميع الحدود المتشابهة',
    learningOutcome: 'Simplify expressions involving parenthesis and like terms.',
    learningOutcomeAr: 'تبسيط التعابير الجبرية بتجميع الحدود المتشابهة بعد التوزيع.',
    unit: 1,
    lesson: 'Lesson 1.4: Distributive Property / خاصية التوزيع',
    page: 29,
    exerciseRef: 'p.29 Q.36',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Simplify: $3x + 7(3x + 4)$',
    questionTextAr: 'بسط التعبير التالي لأبسط صورة: $3x + 7(3x + 4)$',
    options: [
      { id: 'A', text: '$21x + 28$' },
      { id: 'B', text: '$24x + 4$' },
      { id: 'C', text: '$24x + 28$' },
      { id: 'D', text: '$10x + 28$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'فك الأقواس أولاً بالتوزيع: $7(3x + 4) = 21x + 28$.',
      'تجميع الحدود المتشابهة: $3x + 21x + 28 = (3 + 21)x + 28 = 24x + 28$.'
    ],
    finalAnswer: '$24x + 28$'
  },

  // --- TOPIC 2: MCQ - Order of Operations & Evaluating Expressions (p.13 Q30-38) ---
  {
    id: 'math9-t2-q32',
    qNumber: 4,
    title: 'Evaluating Expressions using Order of Operations',
    titleAr: 'إيجاد قيمة التعابير الجبرية باستخدام ترتيب العمليات',
    learningOutcome: 'Evaluate expressions for given variable values.',
    learningOutcomeAr: 'تعويض القيم المعطاة للمتغيرات وحساب الناتج بترتيب العمليات.',
    unit: 1,
    lesson: 'Lesson 1.2: Order of Operations / ترتيب العمليات الحسابية',
    page: 13,
    exerciseRef: 'p.13 Q.32',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Evaluate $r^2 + (g^3 - 8)^5$ when $t=11, r=3, g=2$.',
    questionTextAr: 'أوجد قيمة التعبير $r^2 + (g^3 - 8)^5$ إذا كان $t=11, r=3, g=2$.',
    options: [
      { id: 'A', text: '$0$' },
      { id: 'B', text: '$9$' },
      { id: 'C', text: '$17$' },
      { id: 'D', text: '$73$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'التعويض بالقيم: $g=2, r=3$.',
      'داخل القوس: $g^3 - 8 = 2^3 - 8 = 8 - 8 = 0$.',
      'حساب الأس: $0^5 = 0$.',
      'حساب المربع والجمع: $r^2 + 0 = 3^2 + 0 = 9$.'
    ],
    finalAnswer: '$9$'
  },
  {
    id: 'math9-t2-q36',
    qNumber: 5,
    title: 'Area of a Triangle with Height h',
    titleAr: 'إيجاد مساحة مثلث بدلالة الارتفاع h',
    learningOutcome: 'Evaluate geometric formulas for specified variable values.',
    learningOutcomeAr: 'تطبيق صيغة مساحة المثلث وحساب قيمتها بمتغير معطى.',
    unit: 1,
    lesson: 'Lesson 1.2: Order of Operations / ترتيب العمليات',
    page: 13,
    exerciseRef: 'p.13 Q.36',
    type: 'mcq',
    examYear: '2024/2025',
    imageSvgType: 'math9_triangle_area',
    questionText: 'The area of a triangle is given by $A = \\frac{1}{2}(h + 6)h$. Find the area if $h = 12\\text{ in}$.',
    questionTextAr: 'تُعطى مساحة المثلث بالصيغة $A = \\frac{1}{2}(h + 6)h$. احسب مساحة المثلث إذا كان الارتفاع $h = 12\\text{ in}$.',
    options: [
      { id: 'A', text: '$54\\text{ in}^2$' },
      { id: 'B', text: '$72\\text{ in}^2$' },
      { id: 'C', text: '$108\\text{ in}^2$' },
      { id: 'D', text: '$216\\text{ in}^2$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'التعويض عن $h = 12$ في قانون المساحة:',
      '$A = \\frac{1}{2}(12 + 6)(12)$.',
      '$A = \\frac{1}{2}(18)(12) = 9 \\times 12 = 108\\text{ in}^2$.'
    ],
    finalAnswer: '$108\\text{ in}^2$'
  },

  // --- TOPIC 3: MCQ - Writing Sentences as Equations (p.78 Q21-29) ---
  {
    id: 'math9-t3-q21',
    qNumber: 6,
    title: 'Translating Sentences into Equations',
    titleAr: 'تحويل الجمل اللفظية إلى معادلات جبرية',
    learningOutcome: 'Translate verbal sentences into algebraic equations.',
    learningOutcomeAr: 'صياغة معادلة جبرية تعبر عن جملة لفظية معطاة.',
    unit: 2,
    lesson: 'Lesson 2.1: Writing Equations / كتابة المعادلات',
    page: 78,
    exerciseRef: 'p.78 Q.21',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Translate to an equation: "The difference of f and five times g is equal to negative 25."',
    questionTextAr: 'ترجم إلى معادلة: "الفرق بين f وخمسة مضروبة في g يساوي سالب 25."',
    options: [
      { id: 'A', text: '$f - 5g = -25$' },
      { id: 'B', text: '$5g - f = -25$' },
      { id: 'C', text: '$f - g^5 = -25$' },
      { id: 'D', text: '$f + 5g = 25$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'الفرق يعني عملية طرح: $f - ...$',
      'خمسة مضروبة في g تعني $5g$.',
      'يساوي $-25 \implies f - 5g = -25$.'
    ],
    finalAnswer: '$f - 5g = -25$'
  },
  {
    id: 'math9-t3-q24',
    qNumber: 7,
    title: 'Piano Octaves Real-World Problem',
    titleAr: 'مسألة أوكتافات ومفاتيح البيانو',
    learningOutcome: 'Set up equations from real-world piano octave contexts.',
    learningOutcomeAr: 'كتابة معادلة تعبر عن عدد الأوكتافات لمفاتيح البيانو وحلها.',
    unit: 2,
    lesson: 'Lesson 2.1: Writing Equations / كتابة المعادلات',
    page: 78,
    exerciseRef: 'p.78 Q.24',
    type: 'mcq',
    examYear: '2024/2025',
    imageSvgType: 'math9_piano_keys',
    questionText: 'A standard piano has 52 white keys divided into octaves of 8 white keys each. Write an equation to find the number of octaves $x$.',
    questionTextAr: 'يحتوي البيانو القياسي على 52 مفتاحاً أبيضاً مقسمة إلى أوكتافات بحيث يحتوي كل أوكتاف على 8 مفاتيح بيضاء. اكتب معادلة لإيجاد عدد الأوكتافات $x$.',
    options: [
      { id: 'A', text: '$8 + x = 52$' },
      { id: 'B', text: '$8x = 52$' },
      { id: 'C', text: '$\\frac{x}{8} = 52$' },
      { id: 'D', text: '$52x = 8$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'عدد المفاتيح الكلي = 52.',
      'كل أوكتاف يحتوي 8 مفاتيح بيضاء.',
      'المعادلة الصحيحة: $8x = 52$ (والحل $x = 6.5$ أوكتاف).'
    ],
    finalAnswer: '$8x = 52$'
  },

  // --- TOPIC 4: MCQ - One-Step Equations (p.86 Q18-41) ---
  {
    id: 'math9-t4-q22',
    qNumber: 8,
    title: 'Solving One-Step Equations with Negative Coefficients',
    titleAr: 'حل معادلة خطوة واحدة بمعامل سالب',
    learningOutcome: 'Solve one-step equations involving negative integers.',
    learningOutcomeAr: 'حل معادلة خطوة واحدة باستخدام القسمة على معامل سالب.',
    unit: 2,
    lesson: 'Lesson 2.2: Solving One-Step Equations / حل معادلات الخطوة الواحدة',
    page: 86,
    exerciseRef: 'p.86 Q.22',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve the equation: $-4a = 48$',
    questionTextAr: 'حُلّ المعادلة التالية: $-4a = 48$',
    options: [
      { id: 'A', text: '$a = -12$' },
      { id: 'B', text: '$a = 12$' },
      { id: 'C', text: '$a = -44$' },
      { id: 'D', text: '$a = -192$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'قسمة طرفي المعادلة على المعامل $-4$:',
      '$a = \\frac{48}{-4} = -12$.'
    ],
    finalAnswer: '$a = -12$'
  },
  {
    id: 'math9-t4-q36',
    qNumber: 9,
    title: 'One-Step Equation with Fraction Coefficient',
    titleAr: 'حل معادلة ذات معامل كسري سالب',
    learningOutcome: 'Solve equations with fraction coefficients using reciprocals.',
    learningOutcomeAr: 'حل المعادلات الكسرية بالضرب في المقلوب.',
    unit: 2,
    lesson: 'Lesson 2.2: Solving One-Step Equations / حل معادلات الخطوة الواحدة',
    page: 86,
    exerciseRef: 'p.86 Q.36',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve: $-\\frac{1}{7}c = 21$',
    questionTextAr: 'حُلّ المعادلة: $-\\frac{1}{7}c = 21$',
    options: [
      { id: 'A', text: '$c = -147$' },
      { id: 'B', text: '$c = 147$' },
      { id: 'C', text: '$c = -3$' },
      { id: 'D', text: '$c = 3$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'الضرب في مقلوب الكسر $(-7)$ في كلا الطرفين:',
      '$c = 21 \\times (-7) = -147$.'
    ],
    finalAnswer: '$c = -147$'
  },

  // --- TOPIC 5: MCQ - Consecutive Integers (p.94 Q24-41) ---
  {
    id: 'math9-t5-q26',
    qNumber: 10,
    title: 'Consecutive Even Integers',
    titleAr: 'حل مسائل الأعداد الصحيحة الزوجية المتتالية',
    learningOutcome: 'Solve problems involving consecutive even or odd integers.',
    learningOutcomeAr: 'كتابة معادلة تمثل أعداداً زوجية متتالية وحلها.',
    unit: 2,
    lesson: 'Lesson 2.3: Multi-Step Equations / حل المعادلات متعددة الخطوات',
    page: 94,
    exerciseRef: 'p.94 Q.26',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Find three consecutive even integers whose sum is $-84$.',
    questionTextAr: 'جد ثلاثة أعداد صحيحة زوجية متتالية مجموعها يساوي $-84$.',
    options: [
      { id: 'A', text: '$-30, -28, -26$' },
      { id: 'B', text: '$-28, -26, -24$' },
      { id: 'C', text: '$-32, -30, -28$' },
      { id: 'D', text: '$-29, -28, -27$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'فرض الأعداد الزوجية المتتالية: $x, x+2, x+4$.',
      'مجموع الأعداد: $x + (x+2) + (x+4) = -84$.',
      '$3x + 6 = -84 \implies 3x = -90 \implies x = -30$.',
      'الأعداد هي: $-30, -28, -26$.'
    ],
    finalAnswer: '$-30, -28, -26$'
  },

  // --- TOPIC 6: MCQ - Equations with Variable on Both Sides (p.100 Q1-8) ---
  {
    id: 'math9-t6-q1',
    qNumber: 11,
    title: 'Solving Equations with Variables on Both Sides',
    titleAr: 'حل معادلات تحتوي على المتغير في كل طرف',
    learningOutcome: 'Solve linear equations with variables on both sides.',
    learningOutcomeAr: 'تجميع المتغيرات في طرف والأعداد في الطرف الآخر لحل المعادلة.',
    unit: 2,
    lesson: 'Lesson 2.4: Variables on Both Sides / المتغيرات في كلا الطرفين',
    page: 100,
    exerciseRef: 'p.100 Q.1',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve the equation: $13x + 2 = 4x + 38$',
    questionTextAr: 'حُلّ المعادلة التالية: $13x + 2 = 4x + 38$',
    options: [
      { id: 'A', text: '$x = 3$' },
      { id: 'B', text: '$x = 4$' },
      { id: 'C', text: '$x = 5$' },
      { id: 'D', text: '$x = 6$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'طرح $4x$ من الطرفين: $9x + 2 = 38$.',
      'طرح 2 من الطرفين: $9x = 36$.',
      'القسمة على 9: $x = 4$.'
    ],
    finalAnswer: '$x = 4$'
  },
  {
    id: 'math9-t6-q5',
    qNumber: 12,
    title: 'Equations with No Solution',
    titleAr: 'معادلة ليس لها حل (مستحيلة الحل)',
    learningOutcome: 'Identify equations with no solution.',
    learningOutcomeAr: 'تمييز المعادلة التي تنتج تناقضاً وليس لها حل.',
    unit: 2,
    lesson: 'Lesson 2.4: Variables on Both Sides / المتغيرات في كلا الطرفين',
    page: 100,
    exerciseRef: 'p.100 Q.5',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve: $5 + 2(n + 1) = 2n$',
    questionTextAr: 'حُلّ المعادلة: $5 + 2(n + 1) = 2n$',
    options: [
      { id: 'A', text: '$n = 0$' },
      { id: 'B', text: 'لا يوجد حل (No solution)' },
      { id: 'C', text: 'جميع الأعداد الحقيقية (All real numbers)' },
      { id: 'D', text: '$n = -7$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'تفكيك الأقواس: $5 + 2n + 2 = 2n$.',
      'تبسيط الطرف الأيسر: $2n + 7 = 2n$.',
      'طرح $2n$ من الطرفين يعطي: $7 = 0$ (عبارة خاطئة وتناقض!).',
      'لذلك المعادلة ليس لها حل (No solution).'
    ],
    finalAnswer: 'لا يوجد حل'
  },

  // --- TOPIC 7: MCQ - Absolute Value Equations (p.106 Q22-36) ---
  {
    id: 'math9-t7-q22',
    qNumber: 13,
    title: 'Absolute Value Equations',
    titleAr: 'حل معادلات القيمة المطلقة',
    learningOutcome: 'Solve absolute value equations creating two cases.',
    learningOutcomeAr: 'حل معادلة القيمة المطلقة بتكوين حالتين موجبة وسالبة.',
    unit: 2,
    lesson: 'Lesson 2.5: Absolute Value Equations / معادلات القيمة المطلقة',
    page: 106,
    exerciseRef: 'p.106 Q.22',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Solve the absolute value equation: $|n - 3| = 5$',
    questionTextAr: 'حُلّ معادلة القيمة المطلقة التالية: $|n - 3| = 5$',
    options: [
      { id: 'A', text: '$n = 8$ فقط' },
      { id: 'B', text: '$n = -2$ فقط' },
      { id: 'C', text: '$n = 8$ أو $n = -2$' },
      { id: 'D', text: 'لا يوجد حل' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'الحالة الأولى (الموجبة): $n - 3 = 5 \implies n = 8$.',
      'الحالة الثانية (السالبة): $n - 3 = -5 \implies n = -2$.',
      'مجموعة الحل هي $\{8, -2\}$.'
    ],
    finalAnswer: '$n = 8$ أو $n = -2$'
  },
  {
    id: 'math9-t7-q31',
    qNumber: 14,
    title: 'Absolute Value Margin of Error Survey',
    titleAr: 'مسألة هامش الخطأ في الاستبيانات والقيمة المطلقة',
    learningOutcome: 'Apply absolute value equations to margin of error problems.',
    learningOutcomeAr: 'استخدام معادلات القيمة المطلقة لحساب النسبة المئوية الدنياوالعليا.',
    unit: 2,
    lesson: 'Lesson 2.5: Absolute Value Equations / معادلات القيمة المطلقة',
    page: 106,
    exerciseRef: 'p.106 Q.31',
    type: 'mcq',
    examYear: '2024/2025',
    imageSvgType: 'math9_piechart',
    questionText: 'A survey shows $15\\%$ answered "Very likely" with a margin of error $\\pm 4\\%$. Write and solve an absolute value equation for the range $x$.',
    questionTextAr: 'أظهر استبيان أن $15\\%$ أجابوا بـ "محتمل جداً" مع هامش خطأ $\\pm 4\\%$. اكتب معادلة قيمة مطلقة وحدد مدى النسبة $x$.',
    options: [
      { id: 'A', text: '$|x - 0.15| = 0.04 \\implies 11\\% \\le x \\le 19\\%$' },
      { id: 'B', text: '$|x + 0.15| = 0.04 \\implies 15\\% \\le x \\le 19\\%$' },
      { id: 'C', text: '$|x - 0.04| = 0.15 \\implies 4\\% \\le x \\le 15\\%$' },
      { id: 'D', text: '$|x - 15| = 40 \\implies 11\\% \\le x \\le 19\\%$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'معادلة هامش الخطأ: $|x - \\text{المتوسط}| = \\text{هامش الخطأ}$.',
      '$|x - 0.15| = 0.04$.',
      'الحل الأول: $x - 0.15 = 0.04 \implies x = 0.19 = 19\\%$.',
      'الحل الثاني: $x - 0.15 = -0.04 \implies x = 0.11 = 11\\%$.',
      'المدى من $11\\%$ إلى $19\\%$.'
    ],
    finalAnswer: '$11\\%$ إلى $19\\%$'
  },

  // --- TOPIC 8: MCQ - Rate of Change & Slope (p.177-178 Q14-23) ---
  {
    id: 'math9-t8-q16',
    qNumber: 15,
    title: 'Finding Slope through Two Points',
    titleAr: 'إيجاد ميل المستقيم المار بنقطتين',
    learningOutcome: 'Calculate the slope of a line passing through given points.',
    learningOutcomeAr: 'حساب ميل المستقيم باستخدام صيغة $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
    unit: 3,
    lesson: 'Lesson 3.3: Rate of Change and Slope / معدل التغير والميل',
    page: 177,
    exerciseRef: 'p.177 Q.16',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Find the slope of the line passing through $(-3, 7)$ and $(3, -1)$.',
    questionTextAr: 'جد ميل المستقيم المار بالنقطتين $(-3, 7)$ و $(3, -1)$.',
    options: [
      { id: 'A', text: '$m = -\\frac{4}{3}$' },
      { id: 'B', text: '$m = -\\frac{3}{4}$' },
      { id: 'C', text: '$m = \\frac{4}{3}$' },
      { id: 'D', text: '$m = -1$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'قانون الميل: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
      '$m = \\frac{-1 - 7}{3 - (-3)} = \\frac{-8}{6} = -\\frac{4}{3}$.'
    ],
    finalAnswer: '$m = -\\frac{4}{3}$'
  },

  // --- TOPIC 9: MCQ - Linear Equations & Intercepts (p.159-160 Q13-34) ---
  {
    id: 'math9-t9-q19',
    qNumber: 16,
    title: 'X and Y Intercepts of a Line',
    titleAr: 'إيجاد المقطعين السيني والصادي للخط المستقيم',
    learningOutcome: 'Find x-intercept and y-intercept from a linear equation.',
    learningOutcomeAr: 'إيجاد المقطع السيني ($x$-intercept) والمقطع الصادي ($y$-intercept).',
    unit: 3,
    lesson: 'Lesson 3.1: Graphing Linear Equations / تمثيل المعادلات الخطية',
    page: 160,
    exerciseRef: 'p.160 Q.19',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Find the x-intercept and y-intercept for the line $4x + 3y = 12$.',
    questionTextAr: 'جد المقطع السيني والمقطع الصادي للمستقيم الذي معادلته $4x + 3y = 12$.',
    options: [
      { id: 'A', text: 'المقطع السيني $= 3$ ، المقطع الصادي $= 4$' },
      { id: 'B', text: 'المقطع السيني $= 4$ ، المقطع الصادي $= 3$' },
      { id: 'C', text: 'المقطع السيني $= 12$ ، المقطع الصادي $= 12$' },
      { id: 'D', text: 'المقطع السيني $= -3$ ، المقطع الصادي $= -4$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'المقطع السيني ($x$-intercept): نضع $y=0 \implies 4x + 3(0) = 12 \implies 4x = 12 \implies x = 3$.',
      'المقطع الصادي ($y$-intercept): نضع $x=0 \implies 4(0) + 3y = 12 \implies 3y = 12 \implies y = 4$.'
    ],
    finalAnswer: 'المقطع السيني = 3 ، المقطع الصادي = 4'
  },

  // --- TOPIC 10: MCQ - Direct Variation (p.186 Q24-28) ---
  {
    id: 'math9-t10-q24',
    qNumber: 17,
    title: 'Direct Variation Equation',
    titleAr: 'معادلة التغير الطردي وحلها',
    learningOutcome: 'Write and solve direct variation equations $y = kx$.',
    learningOutcomeAr: 'إيجاد ثابت التغير الطردي $k$ وحل المسألة.',
    unit: 3,
    lesson: 'Lesson 3.4: Direct Variation / التغير الطردي',
    page: 186,
    exerciseRef: 'p.186 Q.24',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Suppose $y$ varies directly as $x$, and $y = 6$ when $x = 10$. Find $x$ when $y = 18$.',
    questionTextAr: 'إذا كانت $y$ تتغير طردياً مع $x$ وكان $y = 6$ عندما $x = 10$. أوجد قيمة $x$ عندما $y = 18$.',
    options: [
      { id: 'A', text: '$x = 30$' },
      { id: 'B', text: '$x = 20$' },
      { id: 'C', text: '$x = 10.8$' },
      { id: 'D', text: '$x = 15$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'معادلة التغير الطردي: $y = kx$.',
      'إيجاد $k$: $6 = k(10) \implies k = \\frac{6}{10} = \\frac{3}{5}$.',
      'إيجاد $x$ عندما $y = 18$: $18 = \\frac{3}{5} x \implies x = 18 \\times \\frac{5}{3} = 30$.'
    ],
    finalAnswer: '$x = 30$'
  },

  // --- TOPIC 12: MCQ - Slope-Intercept Form (p.220-221 Q17-36) ---
  {
    id: 'math9-t12-q17',
    qNumber: 18,
    title: 'Writing Slope-Intercept Form',
    titleAr: 'كتابة معادلة المستقيم بصيغة الميل والمقطع',
    learningOutcome: 'Write linear equations in slope-intercept form $y = mx + b$.',
    learningOutcomeAr: 'كتابة معادلة المستقيم بمعلومية الميل $m$ والمقطع الصادي $b$.',
    unit: 4,
    lesson: 'Lesson 4.1: Slope-Intercept Form / صيغة الميل والمقطع',
    page: 220,
    exerciseRef: 'p.220 Q.17',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Write the equation of the line with slope $m = 5$ and y-intercept $b = 8$.',
    questionTextAr: 'اكتب معادلة المستقيم الذي ميله $m = 5$ والمقطع الصادي له $b = 8$ بصيغة الميل والمقطع.',
    options: [
      { id: 'A', text: '$y = 5x + 8$' },
      { id: 'B', text: '$y = 8x + 5$' },
      { id: 'C', text: '$y = 5x - 8$' },
      { id: 'D', text: '$5x + y = 8$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'صيغة الميل والمقطع: $y = mx + b$.',
      'التعويض عن $m = 5$ و $b = 8$ يعطي: $y = 5x + 8$.'
    ],
    finalAnswer: '$y = 5x + 8$'
  },

  // --- TOPIC 13: MCQ - Slope-Intercept Form from 2 Points (p.229 Q16-24) ---
  {
    id: 'math9-t13-q16',
    qNumber: 19,
    title: 'Equation of Line through Two Points',
    titleAr: 'كتابة معادلة خط مستقيم يمر بنقطتين',
    learningOutcome: 'Write a line equation passing through two points.',
    learningOutcomeAr: 'حساب الميل أولاً ثم كتابة معادلة المستقيم بصيغة الميل والمقطع.',
    unit: 4,
    lesson: 'Lesson 4.2: Writing Equations in Slope-Intercept Form / كتابة المعادلة بصيغة الميل والمقطع',
    page: 229,
    exerciseRef: 'p.229 Q.16',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Write the equation of the line passing through points $(9, -2)$ and $(4, 3)$ in slope-intercept form.',
    questionTextAr: 'اكتب معادلة المستقيم المار بالنقطتين $(9, -2)$ و $(4, 3)$ بصيغة الميل والمقطع.',
    options: [
      { id: 'A', text: '$y = x + 7$' },
      { id: 'B', text: '$y = -x + 7$' },
      { id: 'C', text: '$y = -x - 7$' },
      { id: 'D', text: '$y = -2x + 16$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'حساب الميل $m$: $m = \\frac{3 - (-2)}{4 - 9} = \\frac{5}{-5} = -1$.',
      'استخدام إحدى النقطتين وليكن $(4, 3)$: $y - y_1 = m(x - x_1)$.',
      '$y - 3 = -1(x - 4) \implies y - 3 = -x + 4 \implies y = -x + 7$.'
    ],
    finalAnswer: '$y = -x + 7$'
  },

  // --- TOPIC 14: MCQ - Perpendicular & Parallel Lines (p.243 Q17-38) ---
  {
    id: 'math9-t14-q23',
    qNumber: 20,
    title: 'Perpendicular Line Equation',
    titleAr: 'معادلة مستقيم عمودي يمر بنقطة معطاة',
    learningOutcome: 'Write equation of a line perpendicular to a given line.',
    learningOutcomeAr: 'إيجاد ميل المستقيم العمودي (المقلوب السالب) وكتابة المعادلة.',
    unit: 4,
    lesson: 'Lesson 4.4: Parallel and Perpendicular Lines / المستقيمات المتوازية والمتعامدة',
    page: 243,
    exerciseRef: 'p.243 Q.23',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Write an equation for the line passing through $(-3, -2)$ and perpendicular to $y = -2x + 4$.',
    questionTextAr: 'اكتب معادلة المستقيم المار بالنقطة $(-3, -2)$ والعمودي على المستقيم $y = -2x + 4$.',
    options: [
      { id: 'A', text: '$y = -2x - 8$' },
      { id: 'B', text: '$y = \\frac{1}{2}x - \\frac{1}{2}$' },
      { id: 'C', text: '$y = 2x + 4$' },
      { id: 'D', text: '$y = -\\frac{1}{2}x - \\frac{7}{2}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'ميل المستقيم المعطى هو $-2$.',
      'ميل المستقيم العمودي عليه هو المقلوب السالب: $m_\\perp = \\frac{1}{2}$.',
      'تعويض النقطة $(-3, -2)$ في صيغة نقطة وميل:',
      '$y - (-2) = \\frac{1}{2}(x - (-3)) \implies y + 2 = \\frac{1}{2}x + \\frac{3}{2}$.',
      'طرح 2 من الطرفين: $y = \\frac{1}{2}x - \\frac{1}{2}$.'
    ],
    finalAnswer: '$y = \\frac{1}{2}x - \\frac{1}{2}$'
  },

  // --- PAPER / FRQ QUESTIONS (21 to 30) ---

  // --- TOPIC 16: FRQ - Verbal to Algebraic (p.7 Q1-34) ---
  {
    id: 'math9-t16-paper-q21',
    qNumber: 21,
    title: 'Verbal Expressions to Algebraic Expressions (Paper)',
    titleAr: 'كتابة التعابير الجبرية للتعابير اللفظية (سؤال كتابي ورقي)',
    learningOutcome: 'Translate word phrases into algebraic expressions accurately.',
    learningOutcomeAr: 'كتابة تعبير جبري دقيق يطابق التعبير اللفظي المعطى.',
    unit: 1,
    lesson: 'Lesson 1.1: Variables and Expressions / المتغيرات والتعابير الجبرية',
    page: 7,
    exerciseRef: 'p.7 Q.(1-34)',
    type: 'paper',
    examYear: '2024/2025',
    imageSvgType: 'math9_cylinder',
    questionText: 'Write an algebraic expression for each verbal phrase:\na) 18 decreased by 3 times d\nb) Volume of a cylinder with radius r and height h',
    questionTextAr: 'اكتب تعبيراً جبرياً لكل تعبير لفظي مما يلي:\na) العدد 18 مطروحاً منه 3 أمثال d\nb) حجم أسطوانة نصف قطر قاعدتها r وارتفاعها h',
    solutionSteps: [
      'a) 18 مطروحاً منه 3 أمثال d: تعني $18 - 3d$.',
      'b) قانون حجم الأسطوانة: $V = \\pi r^2 h$.'
    ],
    finalAnswer: 'a) $18 - 3d$  ،  b) $V = \\pi r^2 h$'
  },

  // --- TOPIC 17: FRQ - Percent of Change & Tax/Discount (p.121 Q6-13) ---
  {
    id: 'math9-t17-paper-q22',
    qNumber: 22,
    title: 'Sales Tax & Total Cost Problem (Paper)',
    titleAr: 'مسائل النسبة المئوية للتغير وحساب ضريبة المبيعات والسعر الإجمالي',
    learningOutcome: 'Calculate sales tax amount and total price.',
    learningOutcomeAr: 'حساب قيمة ضريبة المبيعات والإجمالي الكلي بالدرهم.',
    unit: 2,
    lesson: 'Lesson 2.7: Percent of Change / النسبة المئوية للتغير',
    page: 121,
    exerciseRef: 'p.121 Q.6',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'A dress costs 22.50 AED. If the sales tax is 7.5%, find:\na) The tax amount\nb) The total cost including tax',
    questionTextAr: 'فستان سعره الأصلي 22.50 درهماً. إذا كانت ضريبة المبيعات $7.5\\%$، احسب:\na) قيمة الضريبة المضافة بالدرهم\nb) التكلفة الإجمالية للفستان شاملة الضريبة',
    solutionSteps: [
      'a) حساب الضريبة = السعر الأصلي $\\times$ نسبة الضريبة:',
      '$\\text{الضريبة} = 22.50 \\times 0.075 = 1.6875 \\approx 1.69\\text{ AED}$.',
      'b) التكلفة الإجمالية = السعر الأصلي + الضريبة:',
      '$\\text{الإجمالي} = 22.50 + 1.6875 = 24.1875 \\approx 24.19\\text{ AED}$.'
    ],
    finalAnswer: 'مبلغ الضريبة = $1.69\\text{ AED}$ ، التكلفة الإجمالية = $24.19\\text{ AED}$'
  },

  // --- TOPIC 18: FRQ - Literal Equations / Solving for Specified Variables (p.129 Q8-15) ---
  {
    id: 'math9-t18-paper-q23',
    qNumber: 23,
    title: 'Solving Literal Equations for a Specified Variable (Paper)',
    titleAr: 'حل المعادلا اللفظية والجبرية لإيجاد متغير محدد (سؤال ورقي)',
    learningOutcome: 'Rearrange multi-variable equations for a specific variable.',
    learningOutcomeAr: 'إعادة ترتيب المعادلات صيغياً لعزل المتغير المطلوب.',
    unit: 2,
    lesson: 'Lesson 2.8: Literal Equations and Formulas / المعادلات والمعاملات اللفظية',
    page: 129,
    exerciseRef: 'p.129 Q.8 & Q.12',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'Solve each equation for the specified variable:\na) $u = vw + z$ for $v$\nb) $r = \\frac{2}{3}t + v$ for $t$',
    questionTextAr: 'حل كل معادلة مما يلي بالنسبة للمتغير المحدد:\na) $u = vw + z$ بالنسبة للمتغير $v$\nb) $r = \\frac{2}{3}t + v$ بالنسبة للمتغير $t$',
    solutionSteps: [
      'a) حل $u = vw + z$ لإيجاد $v$:',
      'طرح $z$ من الطرفين: $u - z = vw$.',
      'قسمة الطرفين على $w$: $v = \\frac{u - z}{w}$.',
      'b) حل $r = \\frac{2}{3}t + v$ لإيجاد $t$:',
      'طرح $v$ من الطرفين: $r - v = \\frac{2}{3}t$.',
      'الضرب في مقلوب الكسر $\\frac{3}{2}$: $t = \\frac{3}{2}(r - v)$.'
    ],
    finalAnswer: 'a) $v = \\frac{u - z}{w}$  ،  b) $t = \\frac{3}{2}(r - v)$'
  },

  // --- TOPIC 19: FRQ - Finding Slope & Real-World Ramps (p.178 Q24-41) ---
  {
    id: 'math9-t19-paper-q24',
    qNumber: 24,
    title: 'Finding Slope and Real-World Ramp Slopes (Paper)',
    titleAr: 'إيجاد ميل المستقيم وتطبيقات المنحدرات (سؤال كتابي ورقي)',
    learningOutcome: 'Calculate slope from coordinates and real-world vertical/horizontal drops.',
    learningOutcomeAr: 'حساب الميل هندسياً وتطبيقه على المنحدرات الواقعية.',
    unit: 3,
    lesson: 'Lesson 3.3: Rate of Change and Slope / معدل التغير والميل',
    page: 178,
    exerciseRef: 'p.178 Q.24 & Q.40',
    type: 'paper',
    examYear: '2024/2025',
    imageSvgType: 'math9_ramp',
    questionText: 'a) Find the slope of the line passing through points $(4, 3)$ and $(-1, 6)$.\nb) A skateboard ramp has a vertical height of $1.5\\text{ cm}$ and horizontal base of $3\\text{ cm}$. Calculate its slope.',
    questionTextAr: 'a) أوجد ميل المستقيم المار بالنقطتين $(4, 3)$ و $(-1, 6)$.\nb) لوح تزلج له منحدر بارتفاع رأسي $1.5\\text{ cm}$ وقاعدة أفقية $3\\text{ cm}$. احسب ميل المنحدر.',
    solutionSteps: [
      'a) قانون الميل بين نقطتين: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
      '$m = \\frac{6 - 3}{-1 - 4} = \\frac{3}{-5} = -\\frac{3}{5}$.',
      'b) ميل المنحدر = $\\frac{\\text{التغير الراسي}}{\text{التغير الأفقي}} = -\\frac{1.5}{3} = -0.5$.'
    ],
    finalAnswer: 'a) $m = -\\frac{3}{5}$  ،  b) الميل = $-0.5$'
  },

  // --- TOPIC 20: FRQ - Writing Linear Equations in Different Forms (p.236 Q19-39) ---
  {
    id: 'math9-t20-paper-q25',
    qNumber: 25,
    title: 'Writing Linear Equations in Standard & Slope-Intercept Forms (Paper)',
    titleAr: 'كتابة المعادلات الخطية بالصيغة القياسية وصيغة الميل والمقطع (سؤال ورقي)',
    learningOutcome: 'Convert point-slope equations to standard form $Ax + By = C$ and slope-intercept form.',
    learningOutcomeAr: 'تحويل معادلة بصيغة ميل ونقطة إلى الصيغة القياسية وصيغة الميل والمقطع.',
    unit: 4,
    lesson: 'Lesson 4.3: Writing Equations in Point-Slope Form / صيغة الميل ونقطة',
    page: 236,
    exerciseRef: 'p.236 Q.19 & Q.27',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'Given the equation $y - 10 = 2(x - 8)$:\na) Write it in Standard Form ($Ax + By = C$)\nb) Write it in Slope-Intercept Form ($y = mx + b$)',
    questionTextAr: 'معطى المعادلة الخطية $y - 10 = 2(x - 8)$:\na) اكتبها بالصيغة القياسية ($Ax + By = C$ حيث أعداد صحيحة)\nb) اكتبها بصيغة الميل والمقطع ($y = mx + b$)',
    solutionSteps: [
      'فك الأقواس في الطرف الأيمن: $y - 10 = 2x - 16$.',
      'a) التحويل للصيغة القياسية $Ax + By = C$:',
      'طرح $2x$ وجمع 10: $-2x + y = -6 \implies 2x - y = 6$.',
      'b) التحويل لصيغة الميل والمقطع $y = mx + b$:',
      'إضافة 10 لكلا الطرفين: $y = 2x - 6$.'
    ],
    finalAnswer: 'a) $2x - y = 6$ (الصيغة القياسية)  ،  b) $y = 2x - 6$ (صيغة الميل والمقطع)'
  },

  // --- TOPIC 21: FRQ - Multi-Step Linear Inequalities (p.275 Q12-28) ---
  {
    id: 'math9-t21-paper-q26',
    qNumber: 26,
    title: 'Solving Multi-Step Linear Inequalities (Paper)',
    titleAr: 'حل المتباينات الخطية متعددة الخطوات وتمثيلها (سؤال كتابي ورقي)',
    learningOutcome: 'Solve multi-step linear inequalities and write verbal inequality problems.',
    learningOutcomeAr: 'حل المتباينات الخطية متعددة الخطوات مع تجميع الحدود وتحويل الجمل اللفظية.',
    unit: 5,
    lesson: 'Lesson 5.3: Solving Multi-Step Inequalities / حل المتباينات متعددة الخطوات',
    page: 275,
    exerciseRef: 'p.275 Q.12 & Q.22',
    type: 'paper',
    examYear: '2024/2025',
    questionText: 'a) Solve the inequality: $5b - 1 \\ge -11$\nb) Translate and solve: "Three-fourths of a number minus nine is at least 42."',
    questionTextAr: 'a) حُلّ المتباينة التالية: $5b - 1 \\ge -11$\nb) ترجم وحُلّ المتباينة: "ثلاثة أرباع عدد ناقصاً منها تسعة يساوي على الأقل 42."',
    solutionSteps: [
      'a) حل المتباينة $5b - 1 \\ge -11$:',
      'إضافة 1 للطرفين: $5b \\ge -10$.',
      'القسمة على 5: $b \\ge -2$.',
      'b) ترجمة المتباينة اللفظية "ثلاثة أرباع عدد ناقصاً 9 يساوي على الأقل 42":',
      'الرمز "على الأقل" يعني $\\ge$.',
      'المتباينة: $\\frac{3}{4}x - 9 \\ge 42$.',
      'إضافة 9 للطرفين: $\\frac{3}{4}x \\ge 51$.',
      'الضرب في المقلوب $\\frac{4}{3}$: $x \\ge 51 \\times \\frac{4}{3} = 68$.'
    ],
    finalAnswer: 'a) $b \\ge -2$  ،  b) المتباينة $\\frac{3}{4}x - 9 \\ge 42$ والحل $x \\ge 68$'
  }
];
