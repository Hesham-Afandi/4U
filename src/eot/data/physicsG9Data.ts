import { QuestionItem } from '../types';

export const physicsG9Questions: QuestionItem[] = [
  // --- MCQ QUESTIONS (1 to 20) ---
  {
    id: 'phys9-q1',
    qNumber: 1,
    title: 'Scientific Method & Hypothesis Definition',
    titleAr: 'خطوات المنهج العلمي وتحديد الفرضية العلمية',
    learningOutcome: '1. Define the term scientific method and list the common steps of scientific methods used in investigations. 2. Define the term hypothesis and identify the ways in which a hypothesis can be tested.',
    learningOutcomeAr: '1. تعريف المنهج العلمي وتعداد خطواته الشائعة المستخدمة في التحقيقات. 2. تعريف الفرضية وتحديد الطرق التي يمكن بها اختبار الفرضية.',
    unit: 1,
    lesson: 'Lesson 1.1: Methods of Science / طرق العلم في الفيزياء',
    page: 4,
    exerciseRef: 'Student Book - p.4-6; Q.(1-3) p.8',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'What is the scientific method, and which statement correctly describes a scientific hypothesis and how it can be tested?',
    questionTextAr: 'ما هو المنهج العلمي، وأي عبارة مما يلي تصف بشكل صحيح الفرضية العلمية وطريقة اختبارها؟',
    imageSvgType: 'scientific_method_flow',
    options: [
      { id: 'A', text: 'A series of steps to solve a problem; A hypothesis is a testable proposed explanation based on limited evidence that can be tested via experimentation, observation, or surveys / سلسلة خطوات لحل المشكلات؛ والفرضية تخمين قابل للاختبار يُختبر بالسرعة أو التجربة أو الملاحظة' },
      { id: 'B', text: 'An absolute rule that never changes; A hypothesis is a proven scientific law that needs no testing / قاعدة مطلقة لا تتغير؛ والفرضية قانون علمي لا يحتاج لاختبار' },
      { id: 'C', text: 'A random collection of facts; A hypothesis cannot be modified once written / مجموعة عشوائية من الحقائق؛ والفرضية لا يمكن تعديلها بعد كتابتها' },
      { id: 'D', text: 'A mathematical formula only; A hypothesis is tested only by mental guessing / صيغة رياضية فقط؛ والفرضية تُختبر بالتخمين العقلي فقط' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The scientific method is a series of steps used by scientists to solve a problem or answer a question (State problem -> Gather info -> Form hypothesis -> Test hypothesis -> Analyze data -> Draw conclusions).',
      'A hypothesis is a proposed explanation or prediction based on limited evidence.',
      'Hypotheses are tested through: 1) Controlled experimentation, 2) Direct observation, 3) Surveys/models.'
    ],
    finalAnswer: 'A series of steps to solve problems; A hypothesis is a testable proposed explanation.'
  },
  {
    id: 'phys9-q2',
    qNumber: 2,
    title: 'Avoiding Bias in Research & Sample Selection',
    titleAr: 'أهمية تجنب التحيز في البحث العلمي واختيار العينات',
    learningOutcome: 'Explain why it is important for scientists to avoid bias.',
    learningOutcomeAr: 'شرح سبب أهمية تجنب العلماء للتحيز في أبحاثهم وتجاربهم.',
    unit: 1,
    lesson: 'Lesson 1.1: Methods of Science / طرق العلم',
    page: 6,
    exerciseRef: 'Student Book - p.6 Q.8 & Q.(3, 5, 6)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Why is it essential for scientists to avoid bias, and how should you respond if a friend claims "90% of students surveyed in the cafeteria like pizza proves everyone likes pizza"?',
    questionTextAr: 'لماذا يُعد تجنب التحيز أمرًا حاسمًا للعلماء، وكيف تجيب إذا ادعى صديق أن "استطلاع 90% من طلاب الكافتيريا يفضلون البيتزا يثبت أن الجميع يحب البيتزا"؟',
    options: [
      { id: 'A', text: 'To ensure research integrity; The friend\'s conclusion is inaccurate because the sample was taken from a specific location and does not represent the whole population / لضمان نزاهة البحث ودقته؛ والنتيجة غير دقيقة علمياً لأن العينة أُخذت من مكان محدد ولا تمثل كل المجتمع' },
      { id: 'B', text: 'To make experiments faster; The claim is scientifically sound and proven / لجعل التجربة أسرع؛ والادعاء صحيح ومثبت علمياً' },
      { id: 'C', text: 'To support personal opinions; Surveys are always 100% accurate / لدعم الآراء الشخصية؛ والاستطلاعات دائماً دقيقة 100%' },
      { id: 'D', text: 'Bias does not affect physics calculations / التحيز لا يؤثر على حسابات الفيزياء' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Scientists must avoid bias to ensure the integrity, objectivity, and accuracy of their scientific findings.',
      'Surveying students only in a cafeteria creates sample selection bias (location bias).',
      'A conclusion about the general population cannot be drawn from an unrepresentative sample.'
    ],
    finalAnswer: 'To ensure research integrity and accuracy; the sample is biased and not representative.'
  },
  {
    id: 'phys9-q3',
    qNumber: 3,
    title: 'Common Sources of Error & Good Measurement Techniques',
    titleAr: 'مصادر الأخطاء الشائعة وتقنيات القياس الجيدة',
    learningOutcome: 'State the common sources of error when making a measurement and state the good techniques of measurement.',
    learningOutcomeAr: 'تحديد مصادر الخطأ الشائعة عند إجراء القياس وتحديد التقنيات الجيدة للقياس.',
    unit: 1,
    lesson: 'Lesson 1.3: Measurement / القياس في الفيزياء',
    page: 15,
    exerciseRef: 'Student Book - p.14-15; Q.16',
    type: 'mcq',
    examYear: '2025/2026',
    imageSvgType: 'errors_and_precision_target',
    questionText: 'Which source of measurement error is caused by reading a instrument scale from an angle, and what is the best technique to avoid it?',
    questionTextAr: 'أي من مصادر أخطاء القياس ينشأ عن قراءة تدريج الجهاز بمهارة خاطئة أو من زاوية مائلة، وما هي أفضل طريقة لتفاديه؟',
    options: [
      { id: 'A', text: 'Observational (Parallax) error; Always read the scale directly perpendicular in front of your eye / خطأ ملاحظة (اختلاف المنظر)؛ ويُتفاذى بالقراءة المستقيمة عمودياً أمام العين تماماً' },
      { id: 'B', text: 'Instrumental error; Increase room temperature / خطأ آلي؛ ويُتفاذى برفع درجة حرارة الغرفة' },
      { id: 'C', text: 'Environmental error; Replace the measuring ruler / خطأ بيئي؛ ويُتفاذى باستبدال المسطرة' },
      { id: 'D', text: 'Procedural error; Use a smaller object / خطأ إجرائي؛ ويُتفاذى باستخدام جسم أصغر' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Parallax error is an observational human error caused by viewing a measurement line/scale from an angle rather than perpendicular to it.',
      'Good techniques of measurement include:',
      '1. Avoid parallax error (view scale straight-on).',
      '2. Check zero error on measuring devices.',
      '3. Repeat measurements and take the average.'
    ],
    finalAnswer: 'Parallax error; read the scale perpendicularly directly in front of your eye.'
  },
  {
    id: 'phys9-q4',
    qNumber: 4,
    title: 'Significant Figures Rules & Operations',
    titleAr: 'قواعد الأرقام المعنوية والحسابات الرياضية',
    learningOutcome: '1. Identify the significant digits in a given number. 2. Use appropriate significant figures to record answers from mathematical operations.',
    learningOutcomeAr: '1. تحديد الأرقام المعنوية في عدد معطى. 2. استخدام الأرقام المعنوية المناسبة لتسجيل إجابات العمليات الحسابية.',
    unit: 1,
    lesson: 'Lesson 1.2: Mathematics in Physics / الرياضيات والفيزياء',
    page: 11,
    exerciseRef: 'Student Book - p.11-12; Q.8',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A box has length $18.1\\text{ cm}$, width $19.2\\text{ cm}$, and height $20.3\\text{ cm}$. Calculate its volume using the correct number of significant figures.',
    questionTextAr: 'صندوق طوله $18.1\\text{ cm}$، وعرضه $19.2\\text{ cm}$، وارتفاعه $20.3\\text{ cm}$. احسب حجمه مراعياً الأرقام المعنوية الصحيحة.',
    options: [
      { id: 'A', text: '$7.05 \\times 10^3\\text{ cm}^3$' },
      { id: 'B', text: '$7053.984\\text{ cm}^3$' },
      { id: 'C', text: '$7054\\text{ cm}^3$' },
      { id: 'D', text: '$7.1 \\times 10^3\\text{ cm}^3$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Volume formula: $V = \\text{length} \\times \\text{width} \\times \\text{height}$.',
      'Calculate raw product: $V = 18.1 \\times 19.2 \\times 20.3 = 7053.984\\text{ cm}^3$.',
      'In multiplication, round the result to the fewest significant figures in inputs.',
      'Each input ($18.1$, $19.2$, $20.3$) has 3 significant figures.',
      'Rounding $7053.984$ to 3 sig figs gives $7050\\text{ cm}^3 = 7.05 \\times 10^3\\text{ cm}^3$.'
    ],
    finalAnswer: '$V = 7.05 \\times 10^3\\text{ cm}^3$'
  },
  {
    id: 'phys9-q5',
    qNumber: 5,
    title: 'Precision vs Accuracy & Instrumental Calibration',
    titleAr: 'المقارنة بين الدقة والضبط ومعايرة الأجهزة',
    learningOutcome: 'Determine the sources of error and distinguish between precision and accuracy.',
    learningOutcomeAr: 'تحديد مصادر الخطأ والتمييز بين الدقة (Precision) والضبط (Accuracy).',
    unit: 1,
    lesson: 'Lesson 1.3: Measurement / القياس',
    page: 16,
    exerciseRef: 'Student Book - p.14-15; Q.(12-17)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A micrometer (measuring to $0.001\\text{ mm}$) is slightly bent. How does it compare in precision and accuracy to a new, high-quality meter stick?',
    questionTextAr: 'ميكرومتر (أداة تقيس بدقة $0.001\\text{ mm}$) تعرض للانثناء. كيف تُقارَن دقته (Precision) وضبطه (Accuracy) بمسطرة مترية جديدة عالية الجودة؟',
    options: [
      { id: 'A', text: 'More precise, but less accurate / أكثر دقة (Fine scale) ولكن أقل ضبطاً (Systematic error)' },
      { id: 'B', text: 'More accurate, but less precise / أكثر ضبطاً ولكن أقل دقة' },
      { id: 'C', text: 'Both more precise and more accurate / أكثر دقة وأكثر ضبطاً معا' },
      { id: 'D', text: 'Neither precise nor accurate / ليس دقيقاً ولا مضبوطاً' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Precision depends on the fineness of the instrument\'s division scale ($0.001\\text{ mm}$ is much finer than $1\\text{ mm}$).',
      'Accuracy is how close measured values are to the true/accepted value.',
      'Being bent introduces a systematic offset error, making readings inaccurate.',
      'Therefore, it remains more precise but less accurate.'
    ],
    finalAnswer: 'More precise, but less accurate.'
  },
  {
    id: 'phys9-q6',
    qNumber: 6,
    title: 'Base SI Quantities vs Derived Quantities',
    titleAr: 'الكميات الأساسية والكميات المشتقة في النظام الدولي SI',
    learningOutcome: 'Measure the base quantities and some derived quantities using suitable tools and record measurements in scientific notation.',
    learningOutcomeAr: 'قياس الكميات الأساسية والكميات المشتقة باستخدام أدوات القياس المناسبة وتسجيلها.',
    unit: 1,
    lesson: 'Lesson 1.2: Mathematics in Physics / الرياضيات والفيزياء',
    page: 11,
    exerciseRef: 'Student Book - p.11; Q.(7-8), p.13; p.16',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Which of the following correct pairs identifies a Base SI quantity with its unit and a Derived SI quantity with its unit?',
    questionTextAr: 'أي من الأزواج التالية يحدد بشكل صحيح كمية أساسية بوحدتها وكمية مشتقة بوحدتها في النظام الدولي SI؟',
    options: [
      { id: 'A', text: 'Base: Mass (kg); Derived: Speed (m/s) / الكمية الأساسية: الكتلة (kg)؛ والكمية المشتقة: السرعة (m/s)' },
      { id: 'B', text: 'Base: Volume (m³); Derived: Time (s) / الكمية الأساسية: الحجم؛ والكمية المشتقة: الزمن' },
      { id: 'C', text: 'Base: Density (g/cm³); Derived: Length (m) / الكمية الأساسية: الكثافة؛ والكمية المشتقة: الطول' },
      { id: 'D', text: 'Base: Area (m²); Derived: Electric current (A) / الكمية الأساسية: المساحة؛ والكمية المشتقة: التيار الكهربائي' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The 7 Base SI Quantities are: Length (m), Mass (kg), Time (s), Temperature (K), Electric current (A), Amount of substance (mol), Luminous intensity (cd).',
      'Derived quantities are calculated from base quantities (e.g., Speed = distance/time = m/s, Volume = m³, Density = kg/m³).'
    ],
    finalAnswer: 'Base: Mass (kg); Derived: Speed (m/s).'
  },
  {
    id: 'phys9-q7',
    qNumber: 7,
    title: 'Velocity-Time Graph Acceleration Calculation',
    titleAr: 'حساب التسارع من منحنى السرعة المتجهة والزمن v-t',
    learningOutcome: 'Analyze curves of position versus time graphs and velocity versus time graphs for an object moving along a straight line.',
    learningOutcomeAr: 'تحليل منحنيات الموقع-الزمن والسرعة المتجهة-الزمن لجسم يتحرك في خط مستقيم.',
    unit: 2,
    lesson: 'Lesson 2.3: Acceleration / التسارع',
    page: 57,
    exerciseRef: 'Student Book - p.57, p.64, p.60; Fig. 9 Q.2',
    type: 'mcq',
    examYear: '2025/2026',
    imageSvgType: 'toy_train_vt_graph',
    questionText: 'Refer to Figure 9 (Toy Train v-t Graph). What is the train\'s average acceleration during the time interval $15.0\\text{ s}$ to $20.0\\text{ s}$ as its velocity drops from $10.0\\text{ m/s}$ to $4.0\\text{ m/s}$?',
    questionTextAr: 'بالرجوع إلى الشكل 9 (منحنى v-t للقطار اللعبة)، ما هو التسارع المتوسط للقطار خلال الفترة من $15.0\\text{ s}$ إلى $20.0\\text{ s}$ عند انخفاض السرعة من $10.0\\text{ m/s}$ إلى $4.0\\text{ m/s}$؟',
    options: [
      { id: 'A', text: '$-1.2\\text{ m/s}^2$' },
      { id: 'B', text: '$+2.0\\text{ m/s}^2$' },
      { id: 'C', text: '$-2.0\\text{ m/s}^2$' },
      { id: 'D', text: '$0.0\\text{ m/s}^2$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Average acceleration formula: $\\bar{a} = \\frac{v_2 - v_1}{t_2 - t_1}$.',
      '$v_1 = 10.0\\text{ m/s}$ at $t_1 = 15.0\\text{ s}$.',
      '$v_2 = 4.0\\text{ m/s}$ at $t_2 = 20.0\\text{ s}$.',
      '$\\bar{a} = \\frac{4.0\\text{ m/s} - 10.0\\text{ m/s}}{20.0\\text{ s} - 15.0\\text{ s}} = \\frac{-6.0\\text{ m/s}}{5.0\\text{ s}} = -1.2\\text{ m/s}^2$.'
    ],
    finalAnswer: '$\\bar{a} = -1.2\\text{ m/s}^2$'
  },
  {
    id: 'phys9-q8',
    qNumber: 8,
    title: 'Average Velocity vs Instantaneous Velocity from Graphs',
    titleAr: 'حساب السرعة المتجهة المتوسطة واللحظية من المنحنيات البيانية',
    learningOutcome: 'Calculate average velocity from the slope of a position-time graph during a time interval and instantaneous velocity from the slope at a certain instant.',
    learningOutcomeAr: 'حساب السرعة المتجهة المتوسطة من ميل منحنى الموقع والزمن خلال فترة زمنية، والسرعة اللحظية من مماس المنحنى.',
    unit: 2,
    lesson: 'Lesson 2.4: Position-Time Graphs / منحنيات الموقع والزمن',
    page: 44,
    exerciseRef: 'Student Book - p.44; Q.39',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'How are average velocity and instantaneous velocity obtained from a position-time graph curve?',
    questionTextAr: 'كيف نحدد كلاً من السرعة المتجهة المتوسطة والسرعة المتجهة اللحظية من منحنى الموقع والزمن؟',
    options: [
      { id: 'A', text: 'Average velocity is the slope of the secant line between two points; Instantaneous velocity is the slope of the tangent line at a single instant / المتوسطة هي ميل الخط القاطع بين نقطتين؛ واللحظية هي ميل المماس عند نقطة واحدة' },
      { id: 'B', text: 'Both are calculated by multiplying initial position by time / كلاهما يُحسب بضرب الموقع الابتدائي في الزمن' },
      { id: 'C', text: 'Average velocity is the area under the curve; Instantaneous velocity is the y-intercept / المتوسطة هي المساحة تحت المنحنى؛ واللحظية هي نقطة التقاطع' },
      { id: 'D', text: 'Instantaneous velocity is always zero for curved graphs / السرعة اللحظية دائما صفر للمنحنيات' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Average velocity over interval $\\Delta t$ is the slope of line connecting initial and final positions: $v_{avg} = \\frac{\\Delta x}{\\Delta t}$.',
      'Instantaneous velocity at a specific time $t$ is the slope of the tangent line drawn to the curve at that precise point.'
    ],
    finalAnswer: 'Average velocity = secant slope; Instantaneous velocity = tangent line slope.'
  },
  {
    id: 'phys9-q9',
    qNumber: 9,
    title: 'Position-Time Graph Analysis for Direction & Speed',
    titleAr: 'تحليل منحنى الموقع والزمن لتحديد الاتجاه والسرعة',
    learningOutcome: 'Analyze a position-time graph to describe an object\'s motion.',
    learningOutcomeAr: 'تحليل منحنى الموقع والزمن لوصف حركة الجسم.',
    unit: 2,
    lesson: 'Lesson 2.4: Position-Time Graphs / منحنيات الموقع والزمن',
    page: 43,
    exerciseRef: 'Student Book - p.42-43; Fig (19-20), Q.(26-31)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A cruise ship moves along a straight path where South is defined as negative position. If its position changes from $0.0\\text{ m}$ to $-1.0\\text{ m}$ in $3.0\\text{ s}$, what is its average speed and velocity?',
    questionTextAr: 'تتحرك سفينة في اتجاه يُعتبر فيه الجنوب موقعًا سالباً. إذا تغير موقعها من $0.0\\text{ m}$ إلى $-1.0\\text{ m}$ خلال $3.0\\text{ s}$، فما هي سرعتها العددية والسرعة المتجهة؟',
    options: [
      { id: 'A', text: 'Speed $= 0.33\\text{ m/s}$; Velocity $= -0.33\\text{ m/s}$ (or $0.33\\text{ m/s}$ North) / السرعة العددية $0.33\\text{ m/s}$ والسرعة المتجهة $-0.33\\text{ m/s}$ (شمالاً)' },
      { id: 'B', text: 'Speed $= -0.33\\text{ m/s}$; Velocity $= +0.33\\text{ m/s}$' },
      { id: 'C', text: 'Speed $= 3.0\\text{ m/s}$; Velocity $= -3.0\\text{ m/s}$' },
      { id: 'D', text: 'Speed $= 1.0\\text{ m/s}$; Velocity $= 0.0\\text{ m/s}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Velocity slope $v = \\frac{x_2 - x_1}{t_2 - t_1} = \\frac{-1.0\\text{ m} - 0.0\\text{ m}}{3.0\\text{ s} - 0.0\\text{ s}} = -0.33\\text{ m/s}$.',
      'Speed is the magnitude of velocity: $|-0.33\\text{ m/s}| = 0.33\\text{ m/s}$.',
      'Negative sign indicates North direction when South is positive x-axis.'
    ],
    finalAnswer: 'Speed = 0.33 m/s; Velocity = -0.33 m/s.'
  },
  {
    id: 'phys9-q10',
    qNumber: 10,
    title: 'Motion Diagrams & Particle Models',
    titleAr: 'مخططات الحركة ونماذج الجسيم النقطي',
    learningOutcome: 'Conduct an investigation to show different kinds of motion using motion diagrams and particle models.',
    learningOutcomeAr: 'إجراء تحقيق لإظهار أنواع مختلفة من الحركة باستخدام مخططات الحركة ونموذج الجسيم النقطي.',
    unit: 2,
    lesson: 'Lesson 2.1: Picturing Motion / تصوير الحركة',
    page: 30,
    exerciseRef: 'Student Book - p.30-31; Q.(1-5), Q.(20-24)',
    type: 'mcq',
    examYear: '2025/2026',
    imageSvgType: 'motion_diagram_dots',
    questionText: 'In a particle model motion diagram, dots represent an object\'s positions at equal time intervals. If a puck glides $140\\text{ m}$ in $7.0\\text{ s}$ at uniform speed, how far does it travel between $t = 0.0\\text{ s}$ and $t = 5.0\\text{ s}$?',
    questionTextAr: 'في نموذج الجسيم النقطي، تمثل النقاط مواضع الجسم عند فترات زمنية متساوية. إذا ينزلق قرص $140\\text{ m}$ خلال $7.0\\text{ s}$ بسرعه منتظمة، كم المسافة المقطوعة بين $t = 0.0\\text{ s}$ و $t = 5.0\\text{ s}$؟',
    options: [
      { id: 'A', text: '$100\\text{ m}$' },
      { id: 'B', text: '$140\\text{ m}$' },
      { id: 'C', text: '$70\\text{ m}$' },
      { id: 'D', text: '$20\\text{ m}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Uniform speed $v = \\frac{140\\text{ m}}{7.0\\text{ s}} = 20\\text{ m/s}$.',
      'Distance moved in $5.0\\text{ s}$: $d = v \\times t = 20\\text{ m/s} \\times 5.0\\text{ s} = 100\\text{ m}$.'
    ],
    finalAnswer: '$d = 100\\text{ m}$'
  },
  {
    id: 'phys9-q11',
    qNumber: 11,
    title: 'Coordinate Systems, Origin & Scalar vs Vector Quantities',
    titleAr: 'أنظمة الإحداثيات ونقطة الأصل والفرق بين الكميات القياسية والمتجهة',
    learningOutcome: '1. Define a coordinate system and identify origin, position, and distance. 2. Differentiate between scalar and vector quantities with examples.',
    learningOutcomeAr: '1. تعريف نظام الإحداثيات ونقطة الأصل والموقع والمسافة. 2. التمييز بين الكميات القياسية والمتجهة مع ذكر الأمثلة.',
    unit: 2,
    lesson: 'Lesson 2.2: Where and When? / أين ومتى؟',
    page: 33,
    exerciseRef: 'Student Book - p.33; Q.(7-9) p.36',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Which statement correctly defines position in a coordinate system and differentiates displacement from distance?',
    questionTextAr: 'أي عبارة مما يلي تصف بشكل صحيح الموقع في نظام الإحداثيات وتميز الإزاحة عن المسافة؟',
    options: [
      { id: 'A', text: 'Position is a vector representing distance and direction from origin; Displacement is a vector change in position ($\Delta x$), while Distance is a scalar representing total path length / الموقع كمية متجهة تحدد البعد والاتجاه عن الأصل؛ والإزاحة كمية متجهة تمثل التغير في الموقع بينما المسافة كمية قياسية تمثل طول المسار الكلي' },
      { id: 'B', text: 'Position is always positive; Displacement is a scalar without direction / الموقع دائما موجب والإزاحة قياسية' },
      { id: 'C', text: 'Distance is a vector and displacement is a scalar / المسافة متجهة والإزاحة قياسية' },
      { id: 'D', text: 'The origin must always be located at the end of the motion path / يجب أن تكون نقطة الأصل دائماً نهاية المسار' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Coordinate system establishes zero point (origin) and positive direction.',
      'Position ($x$) is a vector from origin to object.',
      'Distance is scalar (total ground covered).',
      'Displacement ($\\Delta x = x_f - x_i$) is a vector (net change with direction).'
    ],
    finalAnswer: 'Position is a vector from origin; Displacement is vector change, Distance is scalar total length.'
  },
  {
    id: 'phys9-q12',
    qNumber: 12,
    title: 'Linear Motion Equation $x_f = v_{avg} t + x_i$ Application',
    titleAr: 'تطبيق معادلة الحركة المستقيمة $x_f = v_{avg} t + x_i$',
    learningOutcome: 'Apply the equation of motion ($x_f = v_{avg} t + x_i$) in numerical problems to calculate position or other physical quantities.',
    learningOutcomeAr: 'تطبيق معادلة الحركة لحساب الموقع أو الكميات الفيزيائية الأخرى في المسائل العددية.',
    unit: 2,
    lesson: 'Lesson 2.4: Position-Time Graphs / معادلة الحركة',
    page: 46,
    exerciseRef: 'Student Book - p.46-47; Q.(32-35); Q.(41-43)',
    type: 'mcq',
    examYear: '2025/2026',
    imageSvgType: 'ship_position_line',
    questionText: 'A ship sails East at constant velocity $42\\text{ km/h}$. If it sails from point B (located $25\\text{ km}$ East of origin A) for $1.5\\text{ h}$ to point C, what is its final position relative to A?',
    questionTextAr: 'تُبحر سفينة شرقًا بسرعة متجهة منتظمة $42\\text{ km/h}$. إذا أبحرت من النقطة B (التي تبعد $25\\text{ km}$ شرق نقطة الأصل A) لمدة $1.5\\text{ h}$ حتى النقطة C، ما موقعها بالنسبة لنقطة الأصل A؟',
    options: [
      { id: 'A', text: '$88\\text{ km}$ East' },
      { id: 'B', text: '$63\\text{ km}$ East' },
      { id: 'C', text: '$112\\text{ km}$ East' },
      { id: 'D', text: '$38\\text{ km}$ East' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Initial position from A: $x_i = +25\\text{ km}$ East.',
      'Displacement during $1.5\\text{ h}$: $\\Delta x = v \\times t = 42\\text{ km/h} \\times 1.5\\text{ h} = 63\\text{ km}$.',
      'Final position relative to A: $x_f = x_i + \\Delta x = 25\\text{ km} + 63\\text{ km} = 88\\text{ km}$ East.'
    ],
    finalAnswer: '$x_f = 88\\text{ km}$ East'
  },
  {
    id: 'phys9-q13',
    qNumber: 13,
    title: 'Average Velocity and Direction Calculations',
    titleAr: 'حساب السرعة المتجهة المتوسطة واتجاه الحركة',
    learningOutcome: 'Define and calculate the average velocity / the average speed using a suitable mathematical representation.',
    learningOutcomeAr: 'تعريف وحساب السرعة المتجهة المتوسطة والسرعة العددية المتوسطة باستخدام المعادلات الرياضيات.',
    unit: 2,
    lesson: 'Lesson 2.4: Speed and Velocity / السرعة والسرعة المتجهة',
    page: 44,
    exerciseRef: 'Student Book - p.43-44; Q.(26-31)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'An object moves from $x_1 = 6.5\\text{ cm}$ to $x_2 = 3.7\\text{ cm}$ relative to the origin in $2.3\\text{ s}$. What is its average velocity?',
    questionTextAr: 'يتحرك جسم من الموقع $x_1 = 6.5\\text{ cm}$ إلى الموقع $x_2 = 3.7\\text{ cm}$ بالنسبة لنقطة الأصل خلال زمن $2.3\\text{ s}$. احسب سرعته المتجهة المتوسطة.',
    options: [
      { id: 'A', text: '$-1.2\\text{ cm/s}$ (or $-0.012\\text{ m/s}$)' },
      { id: 'B', text: '$+1.2\\text{ cm/s}$' },
      { id: 'C', text: '$-4.43\\text{ cm/s}$' },
      { id: 'D', text: '$+0.012\\text{ m/s}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Displacement: $\\Delta x = x_2 - x_1 = 3.7\\text{ cm} - 6.5\\text{ cm} = -2.8\\text{ cm}$.',
      'Average velocity: $v_{avg} = \\frac{\\Delta x}{\\Delta t} = \\frac{-2.8\\text{ cm}}{2.3\\text{ s}} = -1.217\\text{ cm/s} \\approx -1.2\\text{ cm/s}$.',
      'In SI units: $-1.217 \\times 10^{-2}\\text{ m/s} = -0.012\\text{ m/s}$.'
    ],
    finalAnswer: '$v_{avg} = -1.2\\text{ cm/s} = -0.012\\text{ m/s}$'
  },
  {
    id: 'phys9-q14',
    qNumber: 14,
    title: 'Average Acceleration Calculation ($a = \Delta v / \Delta t$)',
    titleAr: 'حساب التسارع المتوسط مالتسارع اللحظي',
    learningOutcome: '1. Relate the slope of a velocity time graph to the average acceleration. 2. Calculate instantaneous acceleration.',
    learningOutcomeAr: '1. ربط ميل منحنى السرعة والزمن بالتسارع المتوسط. 2. حساب التسارع اللحظي.',
    unit: 2,
    lesson: 'Lesson 2.3: Acceleration / التسارع',
    page: 58,
    exerciseRef: 'Student Book - p.58-59; Fig 7; Q.(1-10)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A race car\'s forward velocity increases from $4.0\\text{ m/s}$ to $36\\text{ m/s}$ over a $4.0\\text{ s}$ time interval. What is its average acceleration?',
    questionTextAr: 'تزداد السرعة الأمامية لسيارة سباق من $4.0\\text{ m/s}$ إلى $36\\text{ m/s}$ خلال زمن مقداره $4.0\\text{ s}$. احسب تسارعها المتوسط.',
    options: [
      { id: 'A', text: '$8.0\\text{ m/s}^2$' },
      { id: 'B', text: '$10.0\\text{ m/s}^2$' },
      { id: 'C', text: '$-7.0\\text{ m/s}^2$' },
      { id: 'D', text: '$32.0\\text{ m/s}^2$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Average acceleration formula: $\\bar{a} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}$.',
      '$\\bar{a} = \\frac{36\\text{ m/s} - 4.0\\text{ m/s}}{4.0\\text{ s}} = \\frac{32\\text{ m/s}}{4.0\\text{ s}} = 8.0\\text{ m/s}^2$.'
    ],
    finalAnswer: '$\\bar{a} = 8.0\\text{ m/s}^2$'
  },
  {
    id: 'phys9-q15',
    qNumber: 15,
    title: 'Velocity and Acceleration Vectors: Speeding Up vs Slowing Down',
    titleAr: 'علاقة اتجاه السرعة والتسارع بالزيادة والإبطاء في السرعة',
    learningOutcome: 'Describe the motion of an object if its velocity and acceleration are either in the same directions or opposite directions, hence state if an object is slowing down or speeding up.',
    learningOutcomeAr: 'وصف حركة جسم إذا كان اتجاه سرعته وتسارعه في نفس الاتجاه أو في اتجاهين متعاكسين وبيان ما إذا كان يسرع أو يبطئ.',
    unit: 2,
    lesson: 'Lesson 2.3: Acceleration Vectors / متجهات التسارع والسرعة',
    page: 56,
    exerciseRef: 'Student Book - p.56; Figure 4',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A car is traveling in the negative direction (Westward) and its speed is increasing (speeding up). What are the signs of its velocity ($v$) and acceleration ($a$)?',
    questionTextAr: 'تتحرك سيارة في الاتجاه السالب (غرباً) وتتزايد سرعتها (Speeding up). ما هي إشارات كل من سرعتها المتجهة ($v$) وتستارعها ($a$)؟',
    options: [
      { id: 'A', text: 'Both $v$ and $a$ are negative ($v < 0$, $a < 0$) / كلاهما سالب كونهما في نفس الاتجاه' },
      { id: 'B', text: '$v$ is negative, $a$ is positive ($v < 0$, $a > 0$)' },
      { id: 'C', text: 'Both $v$ and $a$ are positive ($v > 0$, $a > 0$)' },
      { id: 'D', text: '$v$ is positive, $a$ is negative ($v > 0$, $a < 0$)' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Rule: When an object is speeding up, its velocity and acceleration vectors point in the SAME direction (same signs).',
      'Since motion is in the negative direction, $v$ is negative.',
      'Because it is speeding up, $a$ must also be negative in the same direction ($a < 0$).'
    ],
    finalAnswer: 'Both velocity and acceleration are negative ($v < 0$, $a < 0$).'
  },
  {
    id: 'phys9-q16',
    qNumber: 16,
    title: 'Kinematic Problem Solving for Incline Motion',
    titleAr: 'حل مسائل الحركة على السطح المائل بتسارع منتظم',
    learningOutcome: 'Analyze curves of position-time and velocity-time graphs and use equations of motion to solve relevant problems.',
    learningOutcomeAr: 'استخدام معادلات الحركة بتسارع منتظم لحل المسائل الفيزيائية المتعلقة بالسرعة والتسارع.',
    unit: 2,
    lesson: 'Lesson 2.3: Acceleration / معادلات الحركة',
    page: 61,
    exerciseRef: 'Student Book - p.61; Example Problem 2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A ball rolls up a slanted driveway starting at $2.50\\text{ m/s}$, slows down to a stop in $5.00\\text{ s}$. Taking uphill as positive, what is the ball\'s acceleration?',
    questionTextAr: 'تتدحرج كرة صاعدة ممر مائل بسرعة ابتدائية $2.50\\text{ m/s}$ وتتبطأ حتى تتوقف خلال $5.00\\text{ s}$. بافتراض أن صعود الممر هو الاتجاه الموجب، ما هو تسارع الكرة؟',
    options: [
      { id: 'A', text: '$-0.500\\text{ m/s}^2$ (down the driveway)' },
      { id: 'B', text: '$+0.500\\text{ m/s}^2$ (up the driveway)' },
      { id: 'C', text: '$-2.50\\text{ m/s}^2$' },
      { id: 'D', text: '$0.00\\text{ m/s}^2$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Given: $v_i = +2.50\\text{ m/s}$, $v_f = 0.00\\text{ m/s}$, $\\Delta t = 5.00\\text{ s}$.',
      'Formula: $a = \\frac{v_f - v_i}{\\Delta t} = \\frac{0.00 - 2.50}{5.00} = -0.500\\text{ m/s}^2$.',
      'Negative sign indicates acceleration is directed downhill (opposite to velocity).'
    ],
    finalAnswer: '$a = -0.500\\text{ m/s}^2$ downhill'
  },
  {
    id: 'phys9-q17',
    qNumber: 17,
    title: 'Stopping Time Calculation on Incline',
    titleAr: 'حساب زمن التوقف والعودة للأسفل على منحدر',
    learningOutcome: 'Apply the equation of motion relating final position/velocity to initial parameters under uniform acceleration.',
    learningOutcomeAr: 'تطبيق معادلة الحركة للربط بين السرعة الابتدائية والنهائية والتسارع والزمن.',
    unit: 2,
    lesson: 'Lesson 2.3: Equations of Motion / معادلات الحركة',
    page: 68,
    exerciseRef: 'Student Book - p.68; Q.(23-27)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A skateboarder moves at $1.75\\text{ m/s}$ up an incline that causes her to slow down with constant acceleration $-0.20\\text{ m/s}^2$. How much time passes before she momentarily stops ($v_f = 0$)?',
    questionTextAr: 'تتحرك متزلجة بسرعة $1.75\\text{ m/s}$ صاعدة منحدراً يتسبب بتباطؤها بتسارع ثابت $-0.20\\text{ m/s}^2$. كم من الزمن ينقضي حتى تتوقف لحظياً؟',
    options: [
      { id: 'A', text: '$8.8\\text{ s}$' },
      { id: 'B', text: '$0.35\\text{ s}$' },
      { id: 'C', text: '$4.4\\text{ s}$' },
      { id: 'D', text: '$17.5\\text{ s}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Kinematic formula: $v_f = v_i + a t \\implies t = \\frac{v_f - v_i}{a}$.',
      'Substitute: $t = \\frac{0.0\\text{ m/s} - 1.75\\text{ m/s}}{-0.20\\text{ m/s}^2} = \\frac{-1.75}{-0.20} = 8.75\\text{ s} \\approx 8.8\\text{ s}$.'
    ],
    finalAnswer: '$t = 8.8\\text{ s}$'
  },
  {
    id: 'phys9-q18',
    qNumber: 18,
    title: 'Free Fall Velocity & Acceleration at Top Peak',
    titleAr: 'حسابات السقوط الحر والسرعة والتسارع عند أعلى نقطة',
    learningOutcome: 'Analyze the position-time, velocity-time, and acceleration-time graphs for an object under free fall.',
    learningOutcomeAr: 'تحليل منحنيات الموقع والسرعة والتسارع مع الزمن لجسم في حالة سقوط حر.',
    unit: 2,
    lesson: 'Lesson 2.5: Free Fall / السقوط الحر',
    page: 72,
    exerciseRef: 'Student Book - p.72-74; Q.44 & Q.(49-51)',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A coin is flipped straight up into the air reaching a peak height of $0.25\\text{ m}$. What are its velocity and acceleration at the top of its trajectory?',
    questionTextAr: 'قُذِفت عملة معدنية رأسيًا لأعلى ووصلت لأقصى ارتفاع $0.25\\text{ m}$. ما هما قيمتا السرعة المتجهة والتسارع للعملة عند أقصى ارتفاع (القمة)؟',
    options: [
      { id: 'A', text: 'Velocity $= 0\\text{ m/s}$; Acceleration $= 9.8\\text{ m/s}^2$ downward ($-9.8\\text{ m/s}^2$) / السرعة تساوي صفراً والتسارع يساوي $-9.8\\text{ m/s}^2$ أسفل' },
      { id: 'B', text: 'Velocity $= 9.8\\text{ m/s}$; Acceleration $= 0\\text{ m/s}^2$' },
      { id: 'C', text: 'Velocity $= 0\\text{ m/s}$; Acceleration $= 0\\text{ m/s}^2$' },
      { id: 'D', text: 'Velocity $= 2.2\\text{ m/s}$; Acceleration $= +9.8\\text{ m/s}^2$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'At the highest point of vertical trajectory, the object instantaneously stops, so $v_{top} = 0\\text{ m/s}$.',
      'Gravity continuously pulls downward throughout the entire flight, so acceleration remains constant at $a = -g = -9.8\\text{ m/s}^2$.'
    ],
    finalAnswer: '$v_{top} = 0\\text{ m/s}$; $a = -9.8\\text{ m/s}^2$'
  },
  {
    id: 'phys9-q19',
    qNumber: 19,
    title: 'Position Graph Slope & Area under Velocity Graph',
    titleAr: 'ميل منحنى الموقع والمساحة تحت منحنى السرعة بتسارع ثابت',
    learningOutcome: 'Conduct an experiment to investigate an object\'s motion by determining how position, velocity, and acceleration change over time.',
    learningOutcomeAr: 'إجراء تجربة لبحث حركة جسم وتحديد كيفية تغير الموقع والسرعة والتسارع مع الزمن.',
    unit: 2,
    lesson: 'Lesson 2.3: Accelerated Motion / الحركة المعجلة',
    page: 64,
    exerciseRef: 'Student Book - p.63-64; Fig 11 & Fig 12',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'For an object moving with constant acceleration, how does its position-time graph appear and what physical quantity does the area under its $v-t$ graph represent?',
    questionTextAr: 'جسم يتحرك بتسارع ثابت، كيف يظهر منحنى موقع-زمن له، وما هي الكمية الفيزيائية التي تمثلها المساحة تحت منحنى السرعة والزمن $v-t$؟',
    options: [
      { id: 'A', text: 'Position-time graph is a parabola (slope increases); Area under $v-t$ equals displacement ($\Delta x$) / منحنى الموقع قطع مكافئ والمساحة تحت $v-t$ تمثل الإزاحة' },
      { id: 'B', text: 'Position-time graph is horizontal; Area equals acceleration' },
      { id: 'C', text: 'Position-time graph is a straight line; Area equals force' },
      { id: 'D', text: 'Position-time graph is a circle; Area equals velocity' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Under constant acceleration, position quadratic relation $x_f = x_i + v_i t + \\frac{1}{2} a t^2$ produces a parabolic $p-t$ graph.',
      'The area under $v-t$ graph (base $\\times$ height) equals displacement $\\Delta x$.'
    ],
    finalAnswer: 'Parabolic p-t graph; Area under v-t graph equals displacement.'
  },
  {
    id: 'phys9-q20',
    qNumber: 20,
    title: 'Free Fall Gravity Variation & David Scott Experiment',
    titleAr: 'تغير تسارع الجاذبية مع الارتفاع وتجربة ديفيد سكوت على القمر',
    learningOutcome: 'Perform an investigation to study the acceleration due to gravity for a system in free fall.',
    learningOutcomeAr: 'إجراء تحقيق لدراسة تسارع الجاذبية لنظام في حالة سقوط حر.',
    unit: 2,
    lesson: 'Lesson 2.5: Free Fall Acceleration / تسارع السقوط الحر',
    page: 76,
    exerciseRef: 'Student Book - p.76; Figure 24',
    type: 'mcq',
    examYear: '2025/2026',
    imageSvgType: 'free_fall_gravity_rings',
    questionText: 'During the Moon free-fall experiment, why did astronaut David Scott\'s hammer and feather fall together, and how does Earth\'s $g$ change as distance from Earth increases?',
    questionTextAr: 'خلال تجربة السقوط الحر على القمر، لماذا سقطت المطرقة والريشة معًا بنفس المعدل برفق رائد الفضاء ديفيد سكوت، وكيف يتغير $g$ بالابتعاد عن سطح الأرض؟',
    options: [
      { id: 'A', text: 'They fall at $1.6\\text{ m/s}^2$ because the Moon has gravity but no air resistance; Earth\'s $g$ decreases as distance from Earth increases / تسقطان بنفس التسارع لعدم وجود هواء على القمر، وتقل جاذبية الأرض كلما ابتعدنا عن مركزها' },
      { id: 'B', text: 'Because objects have no mass on the Moon; $g$ is constant everywhere in space' },
      { id: 'C', text: 'The hammer fell faster because it was heavier' },
      { id: 'D', text: 'Gravitational acceleration increases as distance increases' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'In free fall (absence of air resistance), all objects accelerate at the same rate regardless of mass ($g_{Moon} \\approx 1.6\\text{ m/s}^2$).',
      'Earth\'s gravitational acceleration decreases with distance from Earth\'s center ($9.8\\text{ m/s}^2$ at surface $\\rightarrow 7.4 \\rightarrow 4.9 \\rightarrow 2.5\\text{ m/s}^2$).'
    ],
    finalAnswer: 'Both fall at 1.6 m/s² (no air resistance); Earth\'s g decreases with distance.'
  },

  // --- PAPER BASED FRQ QUESTIONS (21 to 25 / Q1 to Q5) ---
  {
    id: 'phys9-paper-q1',
    qNumber: 'Q1 (Paper)',
    title: 'Base & Derived Quantities and Graph Analysis (Spring & Travel Time)',
    titleAr: 'السؤال الأول ورقي: الكميات الأساسية والمشتقة وتحليل العلاقات البيانية (الزنبرك وزمن السفر)',
    learningOutcome: '1. Recognize physical quantities like time, mass, temp, volume, density and classify them into base and derived SI quantities. 2. Represent data in suitable graphs to obtain mathematical equations describing relationships.',
    learningOutcomeAr: '1. التعرف على الكميات الفيزيائية وتصنيفها إلى أساسية ومشتقة في SI. 2. تحديد المتغيرات المستقلة والتابعة وتمثيلها بيانيا لاستنتاج العلاقات الرياضيات.',
    unit: 1,
    lesson: 'Lesson 1.2 & 1.4: Math & Graphs in Physics / الرياضيات والتمثيل البياني',
    page: 17,
    exerciseRef: 'Student Book - p.9-10; p.17-22; Q.(19-23)',
    type: 'paper',
    examYear: '2025/2026',
    imageSvgType: 'spring_mass_graph',
    questionText: `**Part A:**
Classify the following physical quantities into Base SI Quantities and Derived SI Quantities along with their SI units:
- Time, Mass, Temperature, Volume ($m^3$), Density ($kg/m^3$).

**Part B:**
Refer to Figure 16 (Spring Length vs. Mass: $y = mx + b \implies L = 0.08 m + 13.7$) and Figure 18 (Speed vs. Travel Time inverse relationship $y = a/x$):
1. **Predict:** Determine the mass required to stretch the spring to a total length of $15.0\\text{ cm}$.
2. **Predict:** Predict the travel time when speed is $110\\text{ km/h}$ from Figure 18.`,
    questionTextAr: `**الجزء A:**
صنف الكميات الفيزيائية التالية إلى كميات أساسية (Base) وكميات مشتقة (Derived) في النظام الدولي للوحدات SI مع كتابة وحداتها:
- الزمن (Time)، الكتلة (Mass)، درجة الحرارة (Temperature)، الحجم (Volume)، الكثافة (Density).

**الجزء B:**
بالرجوع إلى الشكل 16 (طول الزنبرك مع الكتلة $L = 0.08 m + 13.7$) والشكل 18 (العلاقة العكسية بين السرعة وزمن السفر):
1. **التنبؤ:** حدد الكتلة المطلوبة لاستطالة الزنبرك ليصبح طوله الكلي $15.0\\text{ cm}$.
2. **التنبؤ:** استنتج زمن السفر عندما تكون السرعة $110\\text{ km/h}$ بالاستعانة بالشكل 18.`,
    solutionSteps: [
      '--- PART A ---',
      '• Base Quantities: Time (s), Mass (kg), Temperature (K).',
      '• Derived Quantities: Volume (m³), Density (kg/m³).',
      '--- PART B1 ---',
      'Linear Equation: $L = 0.08 m + 13.7$.',
      'Substitute $L = 15.0\\text{ cm} \\implies 15.0 = 0.08 m + 13.7$.',
      '$0.08 m = 15.0 - 13.7 = 1.3$.',
      '$m = \\frac{1.3}{0.08} = 16.25\\text{ g} \\approx 16\\text{ g}$.',
      '--- PART B2 ---',
      'In Figure 18 inverse curve ($t \\propto 1/v$), locating $v = 110\\text{ km/h}$ gives travel time $t \\approx 2.5 - 2.8\\text{ h}$.'
    ],
    finalAnswer: 'Part A: Base (Time, Mass, Temp), Derived (Volume, Density); Part B1: m ≈ 16 g; Part B2: t ≈ 2.5 - 2.8 hours'
  },
  {
    id: 'phys9-paper-q2',
    qNumber: 'Q2 (Paper)',
    title: 'Motion Curves, Equations of Motion & Scalar vs Vector',
    titleAr: 'السؤال الثاني ورقي: منحنيات الحركة ومعادلات الحركة والفرق بين القياسي والمتجه',
    learningOutcome: 'Analyze curves of position-time and velocity-time graphs for uniform or non-uniform motion, write equations of motion, and differentiate scalar and vector quantities.',
    learningOutcomeAr: 'تحليل منحنيات الموقع-الزمن والسرعة-الزمن للحركة المنتظمة وغير المنتظمة، وكتابة معادلات الحركة والتمييز بين الكميات القياسية والمتجهة.',
    unit: 2,
    lesson: 'Lesson 2.2 & 2.3: Representing Motion & Acceleration / تمثيل الحركة والتسارع',
    page: 46,
    exerciseRef: 'Student Book - p.33-36; p.46-47; p.57-58',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `**Part A:**
1. Differentiate between uniform acceleration and non-uniform acceleration as displayed on a velocity-time graph ($v-t$).
2. State the 3 main kinematic equations of motion for constant acceleration.

**Part B:**
Differentiate between Scalar quantities and Vector quantities. List 3 examples of each in physics.`,
    questionTextAr: `**الجزء A:**
1. قارن بين التسارع المنتظم والتسارع غير المنتظم كما يظهران على منحنى السرعة المتجهة والزمن ($v-t$).
2. اذكر معادلات الحركة الثلاث بتسارع منتظم.

**الجزء B:**
ميّز بين الكميات القياسية (العددية) والكميات المتجهة، مع إعطاء 3 أمثلة لكل منهما في الفيزياء.`,
    solutionSteps: [
      '--- PART A ---',
      '1. Uniform Acceleration: Appears as a straight diagonal line on a v-t graph (constant slope). Non-Uniform Acceleration: Appears as a curve (changing slope).',
      '2. Equations of Motion:',
      '  - $v_f = v_i + a \\Delta t$',
      '  - $x_f = x_i + v_i t + \\frac{1}{2} a t^2$',
      '  - $v_f^2 = v_i^2 + 2 a \\Delta x$',
      '--- PART B ---',
      '• Scalar Quantities: Described by magnitude only (no direction). Examples: Distance, Speed, Mass, Time, Volume.',
      '• Vector Quantities: Described by both magnitude and direction. Examples: Displacement, Velocity, Acceleration, Force.'
    ],
    finalAnswer: 'Part A: v_f = v_i + at, x_f = x_i + v_it + 1/2at², v_f² = v_i² + 2aΔx; Part B: Scalars (Speed, Mass, Time), Vectors (Displacement, Velocity, Force)'
  },
  {
    id: 'phys9-paper-q3',
    qNumber: 'Q3 (Paper)',
    title: 'Solving Problems using Equations of Motion with Constant Acceleration',
    titleAr: 'السؤال الثالث ورقي: حل مسائل معقدة باستخدام معادلات الحركة بتسارع منتظم',
    learningOutcome: 'Solve problems using the combination of equations of motion for constant acceleration.',
    learningOutcomeAr: 'حل المسائل باستخدام مجموعة معادلات الحركة في حالة التسارع الثابت.',
    unit: 2,
    lesson: 'Lesson 2.3: Acceleration Problems / مسائل التسارع',
    page: 65,
    exerciseRef: 'Student Book - p.63-70; Q.(16-39)',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `Solve the following multi-part physics problems showing all formula steps:

1. A golf ball rolls up a hill toward a hole starting with speed $2.0\\text{ m/s}$ and slows at a constant rate of $0.50\\text{ m/s}^2$:
   a. What is its velocity after $t = 2.0\\text{ s}$?
   b. What is its velocity if acceleration continues for $t = 6.0\\text{ s}$?

2. A car with initial velocity $24.5\\text{ m/s}$ East accelerates at $4.2\\text{ m/s}^2$ West ($a = -4.2\\text{ m/s}^2$). What is its displacement at the moment its velocity is $18.3\\text{ m/s}$ East?

3. A runner runs along a path from point A to B at forward velocity $4.5\\text{ m/s}$ for $15.0\\text{ min}$. From B to C, he runs up a hill slowing at $0.050\\text{ m/s}^2$ for $90.0\\text{ s}$ to a complete stop at C. Calculate the total distance $d_{total}$.`,
    questionTextAr: `أجب عن المسائل التالية موضحاً جميع خطوات الحل والقوانين المستخدمة:

1. تتدحرج كرة جولف صاعدة تلاً نحو الحفرة بسرعة ابتدائية $2.0\\text{ m/s}$ وتبطئ بمعدل ثابت $0.50\\text{ m/s}^2$:
   a. ما سرعتها المتجهة بعد $t = 2.0\\text{ s}$؟
   b. ما سرعتها المتجهة إذا استمر التباطؤ لمدة $t = 6.0\\text{ s}$؟

2. سيارة لها سرعة ابتدائية $24.5\\text{ m/s}$ شرقاً وتسارعها $4.2\\text{ m/s}^2$ غرباً ($a = -4.2\\text{ m/s}^2$). احسب إزاحتها عندما تبطئ سرعتها إلى $18.3\\text{ m/s}$ شرقاً.

3. يركض رجل من A إلى B بسرعة $4.5\\text{ m/s}$ لمدة $15.0\\text{ min}$. ثم من B إلى C يصعد تلاً وينخفض معدل سرعته بتسارع $-0.050\\text{ m/s}^2$ لمدة $90.0\\text{ s}$ حتى يتوقف عند C. احسب المسافة الكلية التي قطعها.`,
    solutionSteps: [
      '--- PROBLEM 1 ---',
      'a. $v_f = v_i + a t = 2.0\\text{ m/s} + (-0.50\\text{ m/s}^2)(2.0\\text{ s}) = 1.0\\text{ m/s}$.',
      'b. $v_f = 2.0\\text{ m/s} + (-0.50\\text{ m/s}^2)(6.0\\text{ s}) = -1.0\\text{ m/s}$ (rolling back down hill).',
      '--- PROBLEM 2 ---',
      'Formula: $v_f^2 = v_i^2 + 2 a \\Delta x \\implies \\Delta x = \\frac{v_f^2 - v_i^2}{2a}$.',
      '$\\Delta x = \\frac{(18.3)^2 - (24.5)^2}{2(-4.2)} = \\frac{334.89 - 600.25}{-8.4} = \\frac{-265.36}{-8.4} = +31.6\\text{ m}$ East.',
      '--- PROBLEM 3 ---',
      'Part 1 (A to B): $t_1 = 15.0\\text{ min} \\times 60 = 900\\text{ s}$. Distance $d_1 = v_1 t_1 = 4.5 \\times 900 = 4050\\text{ m}$.',
      'Part 2 (B to C): $d_2 = \\frac{v_i + v_f}{2} t_2 = \\frac{4.5 + 0}{2} (90.0\\text{ s}) = 202.5\\text{ m}$.',
      'Total distance: $d_{total} = d_1 + d_2 = 4050 + 202.5 = 4252.5\\text{ m} \\approx 4.3 \\times 10^3\\text{ m}$.'
    ],
    finalAnswer: '1) 1.0 m/s & -1.0 m/s; 2) Δx = 31.6 m East; 3) d_total = 4252.5 m ≈ 4.3 × 10³ m'
  },
  {
    id: 'phys9-paper-q4',
    qNumber: 'Q4 (Paper)',
    title: 'Free Fall Equations & Definitions',
    titleAr: 'السؤال الرابع ورقي: مسائل وتعريفات السقوط الحر وتسارع الجاذبية',
    learningOutcome: 'Part A: Apply the equations of motion for objects under free fall to calculate unknown parameters. Part B: Define free fall and free fall acceleration.',
    learningOutcomeAr: 'الجزء A: تطبيق معادلات الحركة للأجسام تحت السقوط الحر لحساب القيم المجهولة. الجزء B: تعريف السقوط الحر وتسارع السقوط الحر.',
    unit: 2,
    lesson: 'Lesson 2.5: Free Fall / السقوط الحر',
    page: 75,
    exerciseRef: 'Student Book - p.71-76; Q.(40-45); Q.(47-51)',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `**Part A (Numerical Free-Fall Problems):**
1. A construction worker drops a brick from a high scaffold. Taking upward as positive ($a = -9.8\\text{ m/s}^2$):
   a. Calculate the velocity of the brick after $4.0\\text{ s}$.
   b. Calculate how far the brick falls during this time.
2. A tennis ball is thrown straight up with initial speed $v_i = 22.5\\text{ m/s}$.
   a. Calculate the maximum height $d_{max}$ reached by the ball.
   b. Calculate the total time $t_{air}$ the ball remains in the air before caught at the release height.
3. Your sister drops house keys from a window $h = 4.3\\text{ m}$ above your hands. What is the velocity of the keys when caught?

**Part B (Conceptual Definitions):**
Define: 1. Free fall, 2. Free fall acceleration.`,
    questionTextAr: `**الجزء A (مسائل عددية في السقوط الحر):**
1. أسقط عامل بناء طابوقة من سقالة مرتفعة. بافتراض الاتجاه الرأسي لأعلى موجباً ($a = -9.8\\text{ m/s}^2$):
   a. احسب سرعة الطابوقة المتجهة بعد $4.0\\text{ s}$.
   b. احسب المسافة التي تسقطها الطابوقة خلال هذا الزمن.
2. قُذِفت كرة تنس رأسيًا لأعلى بسرعة ابتدائية $22.5\\text{ m/s}$:
   a. احسب أقصى ارتفاع $d_{max}$ تصل إليه الكرة.
   b. احسب إجمالي زمن التحليق $t_{air}$ حتى التقاطها عند نفس ارتفاع الإطلاق.
3. أسقطت أختك مفاتيح منزل من نافذة ترتفع $h = 4.3\\text{ m}$ فوق يديك. ما سرعة المفاتيح عند التقاطها؟

**الجزء B (تعريفات مفهومية):**
عرّف: 1. السقوط الحر (Free fall)، 2. تسارع السقوط الحر (Free fall acceleration).`,
    solutionSteps: [
      '--- PART A1 ---',
      'a. $v_f = v_i + a t = 0 + (-9.8\\text{ m/s}^2)(4.0\\text{ s}) = -39.2\\text{ m/s} \\approx -39\\text{ m/s}$ (downward).',
      'b. $d = v_i t + \\frac{1}{2} a t^2 = 0 + \\frac{1}{2}(-9.8)(4.0)^2 = -78.4\\text{ m} \\implies$ brick falls $78.4\\text{ m} \\approx 78\\text{ m}$.',
      '--- PART A2 ---',
      'a. At peak $v_f = 0 \\implies d_{max} = \\frac{v_i^2}{2g} = \\frac{(22.5)^2}{2(9.8)} = \\frac{506.25}{19.6} = 25.8\\text{ m}$.',
      'b. Time to rise: $t_{rise} = \\frac{v_i}{g} = \\frac{22.5}{9.8} = 2.30\\text{ s}$. Total flight $t_{air} = 2 \\times 2.30 = 4.60\\text{ s}$.',
      '--- PART A3 ---',
      '$v_f = \\sqrt{2 g h} = \\sqrt{2 (9.80\\text{ m/s}^2)(4.3\\text{ m})} = \\sqrt{84.28} = 9.18\\text{ m/s} \\approx 9.2\\text{ m/s}$ downward.',
      '--- PART B ---',
      '1. Free fall: The motion of an object when gravity is the only significant force acting on it (air resistance is ignored).',
      '2. Free fall acceleration: The acceleration of an object due solely to the effect of gravity ($g = 9.8\\text{ m/s}^2$ downward near Earth\'s surface).'
    ],
    finalAnswer: 'A1: v = -39 m/s, d = 78 m; A2: d_max = 25.8 m, t_air = 4.60 s; A3: v = 9.2 m/s; Part B: Motion under gravity alone with g = 9.8 m/s².'
  },
  {
    id: 'phys9-paper-q5',
    qNumber: 'Q5 (Paper)',
    title: 'Clarification of Terms and Concepts in Physics Toolkit & Representing Motion',
    titleAr: 'السؤال الخامس ورقي: توضيح المصطلحات والمفاهيم الأساسية في أدوات الفيزياء وتمثيل الحركة',
    learningOutcome: 'Clarify the meaning of the important terms and concepts contained in Module 1: A Physics Toolkit, and Module 2: Representing Motion.',
    learningOutcomeAr: 'توضيح معنى المصطلحات والمفاهيم الهامة الواردة في الوحدة 1: أدوات الفيزياء، والوحدة 2: تمثيل الحركة.',
    unit: 1,
    lesson: 'Module 1 & 2 Key Concepts / مفاهيم الموديول الأول والثاني',
    page: 3,
    exerciseRef: 'Student Book - p.(3-50); Terms & Concepts in Textbook',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `Clarify and write bilingual definitions for the key physics terms below:

1. **Scientific Methods** vs. **Hypothesis** vs. **Scientific Theory** vs. **Scientific Law**.
2. **Precision** vs. **Accuracy** vs. **Measurement Uncertainty**.
3. **Position**, **Displacement**, **Average Speed**, and **Average Velocity**.`,
    questionTextAr: ` وضح واكتب تعاريف ثنائية اللغة للمصطلحات الفيزيائية الرئيسية التالية:

1. **المنهج العلمي**، **الفرضية**، **النظرية العلمية**، و**القانون العلمي**.
2. **الدقة (Precision)**، **الضبط (Accuracy)**، و**الشك في القياس (Uncertainty)**.
3. **الموقع (Position)**، **الإزاحة (Displacement)**، **السرعة العددية المتوسطة**، و**السرعة المتجهة المتوسطة**.`,
    solutionSteps: [
      '--- GROUP 1: SCIENTIFIC INQUIRY ---',
      '• Scientific Methods: Systematic step-by-step approach used by scientists to investigate questions, gather data, test hypotheses, and draw conclusions.',
      '• Hypothesis: A testable prediction or proposed explanation based on limited evidence.',
      '• Scientific Theory: An explanation of natural phenomena based on extensive observation and repeated experimentations.',
      '• Scientific Law: A rule or statement describing a consistent, universal relationship in nature.',
      '--- GROUP 2: MEASUREMENT QUALITY ---',
      '• Precision: The degree of exactness and repeatability among measured values.',
      '• Accuracy: How close a measured value is to the true or accepted standard value.',
      '• Uncertainty: The margin of error in measurement, equal to +/- half the smallest division on the scale.',
      '--- GROUP 3: KINEMATIC DESCRIPTORS ---',
      '• Position (x): Vector distance and direction from origin to object.',
      '• Displacement (Δx): Net change in position (x_f - x_i), a vector.',
      '• Average Speed: Total path distance divided by total time (scalar).',
      '• Average Velocity (v_avg): Displacement divided by time interval (vector).'
    ],
    finalAnswer: 'Complete bilingual definitions provided for all 10 core physics terms across Modules 1 & 2.'
  }
];
