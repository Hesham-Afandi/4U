import { QuestionItem } from '../types';

export const physicsG11BridgeQuestions: QuestionItem[] = [
  {
    id: 'phys11-bridge-q1',
    qNumber: 1,
    title: 'Vector Components in 3D Space',
    titleAr: 'تمثيل المتجهات بالمركبات في الفضاء ثلاثي الأبعاد (3D)',
    learningOutcome: 'Represent a vector in terms of its components in Cartesian coordinates in 3D space.',
    learningOutcomeAr: 'تمثيل متجه في صورة المركبات باستخدام إحداثيات ديكارتية ثلاثية الأبعاد.',
    unit: 1,
    lesson: 'Lesson 1.6: Vectors / المتجهات',
    page: 17,
    exerciseRef: 'Student Textbook - p.17 #1.15',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'What are the Cartesian components of a position vector $\\vec{A}$ directed from the origin $(0,0,0)$ to the point $P(4, -2, 5)\\text{ cm}$?',
    questionTextAr: 'ما هي المركبات الديكارتية لمتجه الموقع $\\vec{A}$ الممتد من نقطة الأصل $(0,0,0)$ إلى النقطة $P(4, -2, 5)\\text{ cm}$؟',
    options: [
      { id: 'A', text: '$\\vec{A} = (4, 2, 5)\\text{ cm}$' },
      { id: 'B', text: '$\\vec{A} = (4, -2, 5)\\text{ cm}$' },
      { id: 'C', text: '$\\vec{A} = (-4, 2, -5)\\text{ cm}$' },
      { id: 'D', text: '$\\vec{A} = (2, 4, 5)\\text{ cm}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'In 3D Cartesian coordinates, a position vector is written as $\\vec{A} = (A_x, A_y, A_z) = A_x \\hat{x} + A_y \\hat{y} + A_z \\hat{z}$.',
      'For point $P(4, -2, 5)$, $A_x = 4$, $A_y = -2$, $A_z = 5$.',
      'Thus, $\\vec{A} = (4, -2, 5)\\text{ cm}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$\\vec{A} = (4, -2, 5)\\text{ cm}$'
  },
  {
    id: 'phys11-bridge-q2',
    qNumber: 2,
    title: 'Scalar Product of Vectors',
    titleAr: 'حساب الضرب القياسي للمتجهات (Scalar Product)',
    learningOutcome: 'Calculate the scalar product of two vectors using components.',
    learningOutcomeAr: 'حساب حاصل الضرب القياسي لمتجهين باستخدام المركبات.',
    unit: 1,
    lesson: 'Lesson 1.6: Vectors / الضرب القياسي',
    page: 22,
    exerciseRef: 'Student Textbook - Example 1.5 (p.22)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Find the scalar product $\\vec{A} \\cdot \\vec{B}$ for $\\vec{A} = (4.00, 2.00, 5.00)\\text{ cm}$ and $\\vec{B} = (4.50, 4.00, 3.00)\\text{ cm}$.',
    questionTextAr: 'احسب حاصل الضرب القياسي $\\vec{A} \\cdot \\vec{B}$ للمتجهين $\\vec{A} = (4.00, 2.00, 5.00)\\text{ cm}$ و $\\vec{B} = (4.50, 4.00, 3.00)\\text{ cm}$.',
    options: [
      { id: 'A', text: '$26.0\\text{ cm}^2$' },
      { id: 'B', text: '$32.5\\text{ cm}^2$' },
      { id: 'C', text: '$41.0\\text{ cm}^2$' },
      { id: 'D', text: '$54.0\\text{ cm}^2$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Formula: $\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z$.',
      '$A_x B_x = 4.00 \\times 4.50 = 18.00$.',
      '$A_y B_y = 2.00 \\times 4.00 = 8.00$.',
      '$A_z B_z = 5.00 \\times 3.00 = 15.00$.',
      'Sum = $18.00 + 8.00 + 15.00 = 41.00\\text{ cm}^2$.',
      'The correct option is C.'
    ],
    finalAnswer: '$41.0\\text{ cm}^2$'
  },
  {
    id: 'phys11-bridge-q3',
    qNumber: 3,
    title: 'Vector Cross Product Magnitude',
    titleAr: 'مقدار الضرب الاتجاهي للمتجهات (Vector Product)',
    learningOutcome: 'Calculate the magnitude of the vector cross product.',
    learningOutcomeAr: 'حساب مقدار حاصل الضرب الاتجاهي لمتجهين.',
    unit: 1,
    lesson: 'Lesson 1.6: Vectors / الضرب الاتجاهي',
    page: 24,
    exerciseRef: 'Student Textbook - p.24 Eq.(1.34)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'If $|\\vec{A}| = 5.0$, $|\\vec{B}| = 8.0$, and the angle between them is $\\theta = 30^\\circ$, what is the magnitude $|\\vec{A} \\times \\vec{B}|$?',
    questionTextAr: 'إذا كان $|\\vec{A}| = 5.0$ و $|\\vec{B}| = 8.0$ والزاوية بينهما $\\theta = 30^\\circ$، فما هو مقدار حاصل الضرب الاتجاهي $|\\vec{A} \\times \\vec{B}|$؟',
    options: [
      { id: 'A', text: '$20.0$' },
      { id: 'B', text: '$34.6$' },
      { id: 'C', text: '$40.0$' },
      { id: 'D', text: '$10.0$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Formula: $|\\vec{C}| = |\\vec{A} \\times \\vec{B}| = |\\vec{A}| |\\vec{B}| \\sin\\theta$.',
      '$|\\vec{C}| = 5.0 \\times 8.0 \\times \\sin(30^\\circ) = 40.0 \\times 0.5 = 20.0$.',
      'The correct option is A.'
    ],
    finalAnswer: '$20.0$'
  },
  {
    id: 'phys11-bridge-q4',
    qNumber: 4,
    title: 'Kinematics and Mechanics Definitions',
    titleAr: 'تعريف علم الكينماتيكا (علم وصف الحركة)',
    learningOutcome: 'Define kinematics as a branch of mechanics.',
    learningOutcomeAr: 'تعريف علم الكينماتيكا كفرع من علم الميكانيكا المختص بوصف الحركة.',
    unit: 2,
    lesson: 'Lesson 2.1: Introduction to Kinematics',
    page: 33,
    exerciseRef: 'Student Textbook - p.33 #2.1',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Which branch of physics describes the motion of objects without considering the forces that cause the motion?',
    questionTextAr: 'أي فرع من أفرع الميكانيكا يختص بوصف حركة الأجسام دون النظر إلى القوى المسببة لهذه الحركة؟',
    options: [
      { id: 'A', text: 'Dynamics (الديناميكا)' },
      { id: 'B', text: 'Kinematics (الكينماتيكا)' },
      { id: 'C', text: 'Thermodynamics (الديناميكا الحرارية)' },
      { id: 'D', text: 'Electrostatics (الكهرباء السكونية)' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Kinematics is the study of motion (position, velocity, acceleration) without regard to the forces causing it.',
      'Dynamics studies motion along with the forces that cause it.',
      'The correct option is B.'
    ],
    finalAnswer: 'Kinematics (الكينماتيكا)'
  },
  {
    id: 'phys11-bridge-q5',
    qNumber: 5,
    title: 'Position-Time Graph Slope',
    titleAr: 'تفسير ميل منحنى (الموقع - الزمن)',
    learningOutcome: 'Interpret motion from position-time graphs.',
    learningOutcomeAr: 'تفسير حركة جسم من خلال الرسم البياني للموقع مقابل الزمن.',
    unit: 2,
    lesson: 'Lesson 2.2: Position, Displacement & Velocity',
    page: 34,
    exerciseRef: 'Student Textbook - p.34 Fig 2.2',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'On a position-time graph ($x$ vs $t$), what physical quantity does the slope of the line represent?',
    questionTextAr: 'في الرسم البياني للموقع مقابل الزمن ($x-t$)، ما هي الكمية الفيزيائية التي يمثلها ميل الخط المستقيم؟',
    options: [
      { id: 'A', text: 'Acceleration (التسارع)' },
      { id: 'B', text: 'Displacement (الإزاحة)' },
      { id: 'C', text: 'Average Velocity (السرعة المتجهة المتوسطة)' },
      { id: 'D', text: 'Force (القوة)' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Slope = $\\frac{\\Delta x}{\\Delta t} = \\bar{v}_x$.',
      'The slope of a position-time graph gives the average velocity of the moving object.',
      'The correct option is C.'
    ],
    finalAnswer: 'Average Velocity (السرعة المتجهة المتوسطة)'
  },
  {
    id: 'phys11-bridge-q6',
    qNumber: 6,
    title: 'Instantaneous Velocity Calculation',
    titleAr: 'حساب السرعة اللحظية كمركبة اشتقاق للموقع',
    learningOutcome: 'Calculate instantaneous velocity as derivative of position.',
    learningOutcomeAr: 'حساب السرعة المتجهة اللحظية من مشتقة دالة الموقع بالنسبة للزمن.',
    unit: 2,
    lesson: 'Lesson 2.3: Velocity Vector',
    page: 38,
    exerciseRef: 'Student Textbook - Example 2.1 (p.38)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Given position $x(t) = 17.2 - 10.1 t + 1.10 t^2\\text{ m}$, calculate the instantaneous velocity $v_x(t)$ at $t = 5.0\\text{ s}$.',
    questionTextAr: 'إذا كانت دالة الموقع $x(t) = 17.2 - 10.1 t + 1.10 t^2\\text{ m}$، احسب السرعة اللحظية $v_x$ عند الزمن $t = 5.0\\text{ s}$.',
    options: [
      { id: 'A', text: '$-0.90\\text{ m/s}$' },
      { id: 'B', text: '$+0.90\\text{ m/s}$' },
      { id: 'C', text: '$+1.10\\text{ m/s}$' },
      { id: 'D', text: '$-10.1\\text{ m/s}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Take the derivative of position: $v_x(t) = \\frac{dx}{dt} = -10.1 + 2(1.10)t = -10.1 + 2.20 t$.',
      'Substitute $t = 5.0\\text{ s}$: $v_x(5.0) = -10.1 + 2.20(5.0) = -10.1 + 11.0 = +0.90\\text{ m/s}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$+0.90\\text{ m/s}$'
  },
  {
    id: 'phys11-bridge-q7',
    qNumber: 7,
    title: 'Instantaneous Acceleration Calculation',
    titleAr: 'حساب التسارع اللحظي من المشتقة الثانية للموقع',
    learningOutcome: 'Determine instantaneous acceleration from position function.',
    learningOutcomeAr: 'حساب التسارع اللحظي للجسم بتمييزه عن التسارع المتوسط.',
    unit: 2,
    lesson: 'Lesson 2.4: Acceleration Vector',
    page: 40,
    exerciseRef: 'Student Textbook - p.40 Eq.(2.12)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'If velocity is $v_x(t) = 3t^2 - 4t + 2\\text{ m/s}$, what is the instantaneous acceleration $a_x$ at $t = 3.0\\text{ s}$?',
    questionTextAr: 'إذا كانت دالة السرعة $v_x(t) = 3t^2 - 4t + 2\\text{ m/s}$، فما هو التسارع اللحظي $a_x$ عند $t = 3.0\\text{ s}$؟',
    options: [
      { id: 'A', text: '$14.0\\text{ m/s}^2$' },
      { id: 'B', text: '$17.0\\text{ m/s}^2$' },
      { id: 'C', text: '$12.0\\text{ m/s}^2$' },
      { id: 'D', text: '$8.0\\text{ m/s}^2$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Take the derivative: $a_x(t) = \\frac{dv_x}{dt} = 6t - 4$.',
      'Substitute $t = 3.0\\text{ s}$: $a_x(3.0) = 6(3.0) - 4 = 18 - 4 = 14.0\\text{ m/s}^2$.',
      'The correct option is A.'
    ],
    finalAnswer: '$14.0\\text{ m/s}^2$'
  },
  {
    id: 'phys11-bridge-q8',
    qNumber: 8,
    title: 'Velocity from Variable Acceleration',
    titleAr: 'دوال الحركة ذات التسارع غير المنتظم',
    learningOutcome: 'Determine velocity function for non-uniform acceleration.',
    learningOutcomeAr: 'حساب دالة السرعة في حالة تسارع متغير عن طريق التكامل.',
    unit: 2,
    lesson: 'Lesson 2.4: Non-uniform Acceleration',
    page: 42,
    exerciseRef: 'Student Textbook - p.42 Problem 8',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'An object moves from rest ($v_{x0} = 0$) with variable acceleration $a_x(t) = 6t\\text{ m/s}^2$. What is its velocity $v_x(t)$?',
    questionTextAr: 'تحرك جسم من السكون ($v_{x0} = 0$) بتسارع متغير $a_x(t) = 6t\\text{ m/s}^2$. ما هي دالة السرعة $v_x(t)$؟',
    options: [
      { id: 'A', text: '$v_x(t) = 3t^2\\text{ m/s}$' },
      { id: 'B', text: '$v_x(t) = 6t^2\\text{ m/s}$' },
      { id: 'C', text: '$v_x(t) = 6\\text{ m/s}$' },
      { id: 'D', text: '$v_x(t) = t^3\\text{ m/s}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Integrate acceleration over time: $v_x(t) = \\int a_x(t) dt = \\int 6t dt = 3t^2 + C$.',
      'Since $v_{x0} = 0$, constant $C = 0 \\implies v_x(t) = 3t^2\\text{ m/s}$.',
      'The correct option is A.'
    ],
    finalAnswer: '$v_x(t) = 3t^2\\text{ m/s}$'
  },
  {
    id: 'phys11-bridge-q9',
    qNumber: 9,
    title: 'Constant Acceleration Motion Equation',
    titleAr: 'معادلات الحركة بتسارع منتظم ثابت',
    learningOutcome: 'Apply constant-acceleration motion equations to calculate displacement.',
    learningOutcomeAr: 'تطبيق معادلات الحركة بتسارع ثابت لحساب المسافة والإزاحة.',
    unit: 2,
    lesson: 'Lesson 2.5: Motion with Constant Acceleration',
    page: 43,
    exerciseRef: 'Student Textbook - p.43 Fig 2.14',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A car accelerates from rest ($v_{x0} = 0$) at a constant acceleration of $a_x = 2.5\\text{ m/s}^2$ for $t = 4.0\\text{ s}$. How far does it travel?',
    questionTextAr: 'تتسارع سيارة من السكون ($v_{x0} = 0$) بتسارع منتظم $a_x = 2.5\\text{ m/s}^2$ لمدة $t = 4.0\\text{ s}$. كم تبلغ المسافة المقطوعة؟',
    options: [
      { id: 'A', text: '$10.0\\text{ m}$' },
      { id: 'B', text: '$20.0\\text{ m}$' },
      { id: 'C', text: '$40.0\\text{ m}$' },
      { id: 'D', text: '$80.0\\text{ m}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Use kinematic formula: $\\Delta x = v_{x0} t + \\frac{1}{2} a_x t^2$.',
      '$\\Delta x = 0 + \\frac{1}{2} (2.5)(4.0)^2 = 0.5 \\times 2.5 \\times 16 = 20.0\\text{ m}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$20.0\\text{ m}$'
  },
  {
    id: 'phys11-bridge-q10',
    qNumber: 10,
    title: 'Free Fall Trajectory & Acceleration',
    titleAr: 'حركة السقوط الحر وتسارع الجاذبية',
    learningOutcome: 'Identify free fall motion characteristics and constant $g$.',
    learningOutcomeAr: 'معرفة أن تسارع السقوط الحر ثابت وموجه للأسفل بمقدار $9.81\\text{ m/s}^2$.',
    unit: 2,
    lesson: 'Lesson 2.8: Free Fall',
    page: 51,
    exerciseRef: 'Student Textbook - p.51 Concept Review 2.7',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A ball is thrown vertically upward into the air. At its highest point, what are its velocity and acceleration?',
    questionTextAr: 'قُذفت كرة رأسيّاً إلى الأعلى في الهواء. عند أقصى ارتفاع تصل إليه الكرة، ما هي قيمتا السرعة والتسارع؟',
    options: [
      { id: 'A', text: 'Velocity = $0$, Acceleration = $0$' },
      { id: 'B', text: 'Velocity = $0$, Acceleration = $9.81\\text{ m/s}^2$ downward' },
      { id: 'C', text: 'Velocity = $9.81\\text{ m/s}$, Acceleration = $0$' },
      { id: 'D', text: 'Velocity = $9.81\\text{ m/s}$, Acceleration = $9.81\\text{ m/s}^2$ upward' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'At the maximum height of vertical motion, the instantaneous velocity momentarily drops to $0$.',
      'However, gravity continues to act, so acceleration remains constant at $g = 9.81\\text{ m/s}^2$ downward.',
      'The correct option is B.'
    ],
    finalAnswer: 'Velocity = $0$, Acceleration = $9.81\\text{ m/s}^2$ downward'
  },
  {
    id: 'phys11-bridge-q11',
    qNumber: 11,
    title: '3D Derivative for Velocity & Acceleration',
    titleAr: 'المشتقة الزمانية لمركبات متجه الموقع في 3D',
    learningOutcome: 'Calculate acceleration vector components by derivative of velocity vector.',
    learningOutcomeAr: 'حساب مركبات متجه التسارع بمشتقة السرعة في الفضاء ثلاثي الأبعاد.',
    unit: 3,
    lesson: 'Lesson 3.1: Motion in 3D',
    page: 67,
    exerciseRef: 'Student Textbook - p.67 #11',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'If position is $\\vec{r}(t) = (2t^3)\\hat{x} + (5t)\\hat{y} - 4\\hat{z}\\text{ m}$, what is the acceleration vector $\\vec{a}(t)$ at $t = 2.0\\text{ s}$?',
    questionTextAr: 'إذا كان متجه الموقع $\\vec{r}(t) = (2t^3)\\hat{x} + (5t)\\hat{y} - 4\\hat{z}\\text{ m}$، ما هو متجه التسارع $\\vec{a}(t)$ عند $t = 2.0\\text{ s}$؟',
    options: [
      { id: 'A', text: '$\\vec{a} = 12\\hat{x}\\text{ m/s}^2$' },
      { id: 'B', text: '$\\vec{a} = 24\\hat{x}\\text{ m/s}^2$' },
      { id: 'C', text: '$\\vec{a} = (24\\hat{x} + 5\\hat{y})\\text{ m/s}^2$' },
      { id: 'D', text: '$\\vec{a} = 6\\hat{x}\\text{ m/s}^2$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Velocity vector $\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = (6t^2)\\hat{x} + 5\\hat{y} + 0\\hat{z}$.',
      'Acceleration vector $\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = (12t)\\hat{x} + 0\\hat{y} + 0\\hat{z}$.',
      'At $t = 2.0\\text{ s}$: $\\vec{a}(2.0) = 12(2.0)\\hat{x} = 24.0\\hat{x}\\text{ m/s}^2$.',
      'The correct option is B.'
    ],
    finalAnswer: '$\\vec{a} = 24\\hat{x}\\text{ m/s}^2$'
  },
  {
    id: 'phys11-bridge-q12',
    qNumber: 12,
    title: 'Acceleration from Changing Direction',
    titleAr: 'نشوء التسارع عند تغير اتجاه السرعة',
    learningOutcome: 'Realize acceleration arises when velocity changes magnitude OR direction.',
    learningOutcomeAr: 'إدراك أن التسارع ينشأ إذا تغير مقدار السرعة أو اتجاهها.',
    unit: 3,
    lesson: 'Lesson 3.1: Acceleration in 2D/3D',
    page: 68,
    exerciseRef: 'Student Textbook - p.68 Concept Review 3.1',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A particle moves in a circle at a constant speed of $10\\text{ m/s}$. Does it have acceleration?',
    questionTextAr: 'تحرك جسم في مسار دائري بسرعة ثابتة المقدار تبلغ $10\\text{ m/s}$. هل يمتلك هذا الجسم تسارعاً؟',
    options: [
      { id: 'A', text: 'No, because the speed is constant.' },
      { id: 'B', text: 'Yes, because the direction of the velocity vector is continuously changing.' },
      { id: 'C', text: 'No, because net force is zero.' },
      { id: 'D', text: 'Yes, but only if the radius increases.' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Velocity is a vector quantity with both magnitude and direction.',
      'Even if speed (magnitude) is constant, a changing direction produces centripetal acceleration.',
      'The correct option is B.'
    ],
    finalAnswer: 'Yes, because the direction of the velocity vector is continuously changing.'
  },
  {
    id: 'phys11-bridge-q13',
    qNumber: 13,
    title: 'Galilean Velocity Transformation',
    titleAr: 'السرعة النسبية وتحويلات جاليليو (Galilean Transformation)',
    learningOutcome: 'Apply Galilean transformation to calculate relative velocity.',
    learningOutcomeAr: 'تطبيق تحويلات جاليليو لحساب السرعة النسبية للأجسام.',
    unit: 3,
    lesson: 'Lesson 3.4: Relative Velocity',
    page: 80,
    exerciseRef: 'Student Textbook - Example 3.3 (p.80)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A train moves east at $20\\text{ m/s}$ relative to the ground. A passenger walks forward (east) at $2\\text{ m/s}$ relative to the train. What is the passenger\'s speed relative to the ground?',
    questionTextAr: 'يتحرك قطار شرقا بسرعة $20\\text{ m/s}$ بالنسبة للأرض. يمشي راكب للأمام (شرقاً) بسرعة $2\\text{ m/s}$ بالنسبة للقطار. ما هي سرعة الراكب بالنسبة للأرض؟',
    options: [
      { id: 'A', text: '$18\\text{ m/s}$' },
      { id: 'B', text: '$22\\text{ m/s}$' },
      { id: 'C', text: '$10\\text{ m/s}$' },
      { id: 'D', text: '$40\\text{ m/s}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Galilean relative velocity formula: $v_{\\text{passenger,ground}} = v_{\\text{passenger,train}} + v_{\\text{train,ground}}$.',
      '$v_{\\text{p,g}} = 2 + 20 = 22\\text{ m/s}$ east.',
      'The correct option is B.'
    ],
    finalAnswer: '$22\\text{ m/s}$'
  },
  {
    id: 'phys11-bridge-q14',
    qNumber: 14,
    title: 'Mass vs Weight Relationship',
    titleAr: 'العلاقة بين كتلة الجسم ووزنه وقوة الجاذبية',
    learningOutcome: 'Relate mass to weight and gravitational force.',
    learningOutcomeAr: 'المقارنة والربط بين كتلة الجسم ووزنه والتفريق بين وحدات القياس.',
    unit: 4,
    lesson: 'Lesson 4.1: Force & Mass',
    page: 94,
    exerciseRef: 'Student Textbook - p.94 Fig 4.4',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'An object has a mass of $10.0\\text{ kg}$ on Earth ($g = 9.81\\text{ m/s}^2$). What is its weight ($F_g$)?',
    questionTextAr: 'جسم كتلته $10.0\\text{ kg}$ على سطح الأرض ($g = 9.81\\text{ m/s}^2$). كم يبلغ وزنه ($F_g$)؟',
    options: [
      { id: 'A', text: '$10.0\\text{ N}$' },
      { id: 'B', text: '$9.81\\text{ N}$' },
      { id: 'C', text: '$98.1\\text{ N}$' },
      { id: 'D', text: '$981\\text{ N}$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Weight formula: $F_g = m g$.',
      '$F_g = 10.0 \\times 9.81 = 98.1\\text{ N}$.',
      'The correct option is C.'
    ],
    finalAnswer: '$98.1\\text{ N}$'
  },
  {
    id: 'phys11-bridge-q15',
    qNumber: 15,
    title: 'Normal Force Calculation',
    titleAr: 'حساب القوة العمودية على سطح أفقي',
    learningOutcome: 'Identify normal force and compute its magnitude.',
    learningOutcomeAr: 'تحديد القوة العمودية المؤثرة على جسم وتطبيق شروط الاتزان.',
    unit: 4,
    lesson: 'Lesson 4.2: Newton\'s Laws',
    page: 96,
    exerciseRef: 'Student Textbook - p.96 Eq.(4.5)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A $5.0\\text{ kg}$ box rests stationary on a flat horizontal table. What is the magnitude of the normal force ($N$) acting on the box?',
    questionTextAr: 'صندوق كتلته $5.0\\text{ kg}$ يستقر ساكناً على طاولة أفقية. ما مقدار القوة العمودية ($N$) المؤثرة على الصندوق؟',
    options: [
      { id: 'A', text: '$5.0\\text{ N}$' },
      { id: 'B', text: '$24.5\\text{ N}$' },
      { id: 'C', text: '$49.05\\text{ N}$' },
      { id: 'D', text: '$98.1\\text{ N}$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'In static equilibrium along vertical direction: $\\sum F_y = N - F_g = 0 \\implies N = mg$.',
      '$N = 5.0 \\times 9.81 = 49.05\\text{ N}$.',
      'The correct option is C.'
    ],
    finalAnswer: '$49.05\\text{ N}$'
  },
  {
    id: 'phys11-bridge-q16',
    qNumber: 16,
    title: 'Free-Body Diagram (FBD)',
    titleAr: 'رسم مخطط الجسم الحر بتمثيل أسهم القوى',
    learningOutcome: 'Sketch free-body diagrams for physical systems.',
    learningOutcomeAr: 'رسم مخطط الجسم الحر وتمثيل جميع القوى الخارجية المؤثرة كمتجهات.',
    unit: 4,
    lesson: 'Lesson 4.2: Newton\'s Laws',
    page: 97,
    exerciseRef: 'Student Textbook - p.97 Fig 4.7',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'In a free-body diagram for a laptop resting on a desk, which two forces are represented as vectors acting on the laptop?',
    questionTextAr: 'في مخطط الجسم الحر لجهاز كمبيوتر محمول يستقر على مكتب، ما هما القوتان الممثلتان بأسهم تؤثران في الكمبيوتر المحمول؟',
    options: [
      { id: 'A', text: 'Gravitational force downward and Normal force upward' },
      { id: 'B', text: 'Friction force left and Tension force right' },
      { id: 'C', text: 'Gravitational force upward and Normal force downward' },
      { id: 'D', text: 'Centripetal force and Applied force' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The gravitational force $F_g$ acts downward toward the center of Earth.',
      'The normal force $N$ exerted by the table acts upward perpendicular to the contact surface.',
      'The correct option is A.'
    ],
    finalAnswer: 'Gravitational force downward and Normal force upward'
  },
  {
    id: 'phys11-bridge-q17',
    qNumber: 17,
    title: 'Newton\'s First Law & Equilibrium',
    titleAr: 'قانون نيوتن الأول وحالتا الاتزان السكوني والديناميكي',
    learningOutcome: 'Apply Newton\'s First Law to equilibrium situations.',
    learningOutcomeAr: 'شرح قانون نيوتن الأول وتطبيقه في الاتزان السكوني والديناميكي.',
    unit: 4,
    lesson: 'Lesson 4.2: Newton\'s Laws',
    page: 97,
    exerciseRef: 'Student Textbook - p.97-98',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'According to Newton\'s First Law, if the net force acting on a moving object is zero ($\\sum \\vec{F} = 0$), the object will:',
    questionTextAr: 'وفقاً لقانون نيوتن الأول، إذا كانت محصلة القوى المؤثرة على جسم متحرك تساوي صفراً ($\\sum \\vec{F} = 0$)، فإن الجسم:',
    options: [
      { id: 'A', text: 'Immediately stop moving' },
      { id: 'B', text: 'Continue moving in a straight line at a constant velocity' },
      { id: 'C', text: 'Accelerate continuously' },
      { id: 'D', text: 'Change its direction of motion' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Newton\'s First Law states an object in motion will maintain a constant velocity in a straight line unless acted upon by a net external force.',
      'This state is dynamic equilibrium.',
      'The correct option is B.'
    ],
    finalAnswer: 'Continue moving in a straight line at a constant velocity'
  },
  {
    id: 'phys11-bridge-q18',
    qNumber: 18,
    title: 'Newton\'s Third Law Action-Reaction',
    titleAr: 'قانون نيوتن الثالث وتحديد أزواج الفعل ورد الفعل',
    learningOutcome: 'Identify action-reaction force pairs according to Newton\'s Third Law.',
    learningOutcomeAr: 'تحديد أزواج القوى المتبادلة وتطبيق $\\vec{F}_{1\\to 2} = -\\vec{F}_{2\\to 1}$.',
    unit: 4,
    lesson: 'Lesson 4.2: Newton\'s Laws',
    page: 98,
    exerciseRef: 'Student Textbook - p.98 #18',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'When a horse exerts a forward force $\\vec{F}$ on a cart, what is the reaction force according to Newton\'s Third Law?',
    questionTextAr: 'عندما يمارس حصان قوة إلى الأمام $\\vec{F}$ على عربة، ما هي قوة رد الفعل وفقاً لقانون نيوتن الثالث؟',
    options: [
      { id: 'A', text: 'The ground pushing forward on the cart' },
      { id: 'B', text: 'The cart pulling backward on the horse with an equal force $-\\vec{F}$' },
      { id: 'C', text: 'The horse\'s weight downward' },
      { id: 'D', text: 'The normal force on the cart' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Newton\'s Third Law states for every action force, there is an equal and opposite reaction force acting on the other body.',
      'Action: Horse on Cart (forward $\\vec{F}$). Reaction: Cart on Horse (backward $-\\vec{F}$).',
      'The correct option is B.'
    ],
    finalAnswer: 'The cart pulling backward on the horse with an equal force $-\\vec{F}$'
  },
  {
    id: 'phys11-bridge-q19',
    qNumber: 19,
    title: 'Tension Force in Pulley Systems',
    titleAr: 'قوة الشد والتسارع في أنظمة البكرات والحبال',
    learningOutcome: 'Apply Newton\'s laws to systems with strings and pulleys.',
    learningOutcomeAr: 'تطبيق قوانين نيوتن لحساب الشد والتسارع في أنظمة البكرات.',
    unit: 4,
    lesson: 'Lesson 4.2: Systems with Pulley',
    page: 101,
    exerciseRef: 'Student Textbook - Example 4.2 (p.101)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A gymnast of mass $m = 55\\text{ kg}$ hangs motionless from two vertical parallel rings. What is the tension $T$ in each rope?',
    questionTextAr: 'لاعب جمباز كتلته $55\\text{ kg}$ يتدلى ساكناً رأسيّاً من حبلين متوازيين. ما مقدار قوة الشد $T$ في كل حبل؟',
    options: [
      { id: 'A', text: '$539.55\\text{ N}$' },
      { id: 'B', text: '$269.8\\text{ N}$' },
      { id: 'C', text: '$1079.1\\text{ N}$' },
      { id: 'D', text: '$55.0\\text{ N}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Total upward force = $2T$. Total downward force = $mg$.',
      'Equilibrium: $2T = mg \\implies T = \\frac{mg}{2}$.',
      '$T = \\frac{55 \\times 9.81}{2} = \\frac{539.55}{2} = 269.78\\text{ N} \\approx 269.8\\text{ N}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$269.8\\text{ N}$'
  },
  {
    id: 'phys11-bridge-q20',
    qNumber: 20,
    title: 'Kinetic Friction Force Calculation',
    titleAr: 'حساب قوة الاحتراك الحركي $f_k = \\mu_k N$',
    learningOutcome: 'Distinguish static and kinetic friction and calculate kinetic friction force.',
    learningOutcomeAr: 'حساب قوة الاحتكاك الحركي باستخدام معامل الاحتكاك والقوة العمودية.',
    unit: 4,
    lesson: 'Lesson 4.4: Friction Force',
    page: 108,
    exerciseRef: 'Student Textbook - p.108 #20',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A $10.0\\text{ kg}$ block is pulled along a flat floor with kinetic friction coefficient $\\mu_k = 0.20$. What is the kinetic friction force $f_k$?',
    questionTextAr: 'يُسحب صندوق كتلته $10.0\\text{ kg}$ على أرضية أفقية بمعامل احتكاك حركي $\\mu_k = 0.20$. ما هي قوة الاحتكاك الحركي $f_k$؟',
    options: [
      { id: 'A', text: '$2.0\\text{ N}$' },
      { id: 'B', text: '$19.62\\text{ N}$' },
      { id: 'C', text: '$49.05\\text{ N}$' },
      { id: 'D', text: '$98.1\\text{ N}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Kinetic friction formula: $f_k = \\mu_k N = \\mu_k (mg)$.',
      '$f_k = 0.20 \\times (10.0 \\times 9.81) = 0.20 \\times 98.1 = 19.62\\text{ N}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$19.62\\text{ N}$'
  }
];
