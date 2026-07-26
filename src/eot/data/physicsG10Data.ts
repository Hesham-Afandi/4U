import { QuestionItem } from '../types';

export const physicsG10Questions: QuestionItem[] = [
  {
    id: 'phys10-q1',
    qNumber: 1,
    title: 'Characteristics of Simple Harmonic Motion',
    titleAr: 'خصائص الحركة التوافقية البسيطة (SHM)',
    learningOutcome: 'Define periodic motion and quantities associated with periodic motion like period and amplitude. Describe the characteristics of simple harmonic motion.',
    learningOutcomeAr: 'تعريف الحركة الدورية والكميات المرتبطة بها مثل الزمن الدوري والسعة، ووصف خصائص الحركة التوافقية البسيطة.',
    unit: 1,
    lesson: 'Lesson 1.1: Periodic Motion / الحركة الدورية',
    page: 4,
    exerciseRef: 'Student Book - p.4 #Figure 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Which of the following conditions is required for a motion to be classified as Simple Harmonic Motion (SHM)?',
    questionTextAr: 'أي من الشروط التالية يلزم توافره لكي تُصنّف الحركة كـ "حركة توافقية بسيطة" (SHM)؟',
    options: [
      { id: 'A', text: 'The restoring force is constant at all displacement points / قوة الإرجاع ثابتة عند جميع نقاط الإزاحة' },
      { id: 'B', text: 'The restoring force is directly proportional to the displacement and directed toward equilibrium / قوة الإرجاع تتناسب طردياً مع الإزاحة وموجهة نحو موضع الاتزان' },
      { id: 'C', text: 'The restoring force is inversely proportional to the square of displacement / قوة الإرجاع تتناسب عكسياً مع مربع الإزاحة' },
      { id: 'D', text: 'The velocity is maximum at maximum displacement / السرعة تكون أقصى ما يمكن عند أقصى إزاحة' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'By definition, Simple Harmonic Motion (SHM) occurs when the restoring force acting on an object is directly proportional to its displacement from equilibrium and directed toward that equilibrium position ($F \\propto -x$).',
      'At equilibrium ($x=0$), net force is zero and speed is maximum.',
      'Therefore, Option B is the correct requirement.'
    ],
    finalAnswer: 'The restoring force is directly proportional to displacement and directed toward equilibrium'
  },
  {
    id: 'phys10-q2',
    qNumber: 2,
    title: 'Hooke\'s Law & Spring Force',
    titleAr: 'قانون هوك وقوة الزنبرك',
    learningOutcome: 'Apply Hooke\'s law to calculate the force exerted by a spring, the spring constant, or the distance stretched/compressed.',
    learningOutcomeAr: 'تطبيق قانون هوك لحساب القوة المؤثرة بواسطة زنبرك أو ثابت الزنبرك أو الاستطالة/الانضغاط.',
    unit: 1,
    lesson: 'Lesson 1.1: Hooke\'s Law / قانون هوك',
    page: 8,
    exerciseRef: 'Student Book - p.8 Example 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A spring stretches by $0.18\\text{ m}$ when a block weighing $56\\text{ N}$ is suspended from its end. What is the spring constant $k$?',
    questionTextAr: 'استطال زنبرك بمقدار $0.18\\text{ m}$ عندما عُلّقت في طرفه كتلة زنها $56\\text{ N}$. احسب ثابت الزنبرك $k$؟',
    options: [
      { id: 'A', text: '$10.08\\text{ N/m}$' },
      { id: 'B', text: '$311\\text{ N/m}$' },
      { id: 'C', text: '$56.0\\text{ N/m}$' },
      { id: 'D', text: '$622\\text{ N/m}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'According to Hooke\'s law: $F = k \\cdot x$ (taking magnitude).',
      'Substitute values: $56\\text{ N} = k \\times 0.18\\text{ m}$.',
      'Solve for $k$: $k = \\frac{56}{0.18} = 311.11\\text{ N/m} \\approx 311\\text{ N/m}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$k = 311\\text{ N/m}$'
  },
  {
    id: 'phys10-q3',
    qNumber: 3,
    title: 'Elastic Potential Energy in a Spring',
    titleAr: 'طاقة الوضع المرونية في الزنبرك',
    learningOutcome: 'Calculate the elastic potential energy stored in a compressed or stretched spring ($PE_{sp} = \\frac{1}{2} k x^2$).',
    learningOutcomeAr: 'حساب طاقة الوضع المرونية المختزنة في الزنبرك عند ضغطه أو استطالته.',
    unit: 1,
    lesson: 'Lesson 1.1: Elastic Potential Energy / طاقة الوضع المرونية',
    page: 10,
    exerciseRef: 'Student Book - p.10 #Check Your Progress 2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A spring with a spring constant $k = 144\\text{ N/m}$ is compressed by $16.5\\text{ cm}$ ($0.165\\text{ m}$). How much elastic potential energy is stored in the spring?',
    questionTextAr: 'ينضغط زنبرك ثابته $k = 144\\text{ N/m}$ بمقدار $16.5\\text{ cm}$ ($0.165\\text{ m}$). كم تبلغ طاقة الوضع المرونية المختزنة فيه؟',
    options: [
      { id: 'A', text: '$1.96\\text{ J}$' },
      { id: 'B', text: '$3.92\\text{ J}$' },
      { id: 'C', text: '$11.88\\text{ J}$' },
      { id: 'D', text: '$23.76\\text{ J}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Formula for elastic potential energy: $PE_{sp} = \\frac{1}{2} k x^2$.',
      'Convert displacement to meters: $x = 16.5\\text{ cm} = 0.165\\text{ m}$.',
      'Substitute: $PE_{sp} = \\frac{1}{2} \\times 144 \\times (0.165)^2 = 0.5 \\times 144 \\times 0.027225 = 1.9602\\text{ J}$.',
      'Rounded to two decimal places: $1.96\\text{ J}$. Option A.'
    ],
    finalAnswer: '$PE_{sp} = 1.96\\text{ J}$'
  },
  {
    id: 'phys10-q4',
    qNumber: 4,
    title: 'Period of a Simple Pendulum',
    titleAr: 'الزمن الدوري للبندول البسيط',
    learningOutcome: 'Apply the formula $T = 2\\pi \\sqrt{\\frac{l}{g}}$ to calculate the period or length of a simple pendulum.',
    learningOutcomeAr: 'تطبيق العلاقة الرياضية للزمن الدوري للبندول البسيط لحساب طول البندول أو تسارع الجاذبية.',
    unit: 1,
    lesson: 'Lesson 1.1: Simple Pendulum / البندول البسيط',
    page: 14,
    exerciseRef: 'Student Book - p.14 Example 2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A pendulum has a length of $36.9\\text{ cm}$ ($0.369\\text{ m}$) and a period of $1.22\\text{ s}$. What is the acceleration due to gravity $g$ at its location?',
    questionTextAr: 'بندول بسيط طوله $36.9\\text{ cm}$ ($0.369\\text{ m}$) وزمنه الدوري $1.22\\text{ s}$. ما مقدار تسارع الجاذبية $g$ في موقعه؟',
    options: [
      { id: 'A', text: '$8.50\\text{ m/s}^2$' },
      { id: 'B', text: '$9.78\\text{ m/s}^2$' },
      { id: 'C', text: '$10.2\\text{ m/s}^2$' },
      { id: 'D', text: '$9.81\\text{ m/s}^2$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Pendulum formula: $T = 2\\pi \\sqrt{\\frac{l}{g}}$.',
      'Square both sides: $T^2 = 4\\pi^2 \\frac{l}{g} \\implies g = \\frac{4\\pi^2 l}{T^2}$.',
      'Substitute values ($l = 0.369\\text{ m}$, $T = 1.22\\text{ s}$):',
      '$g = \\frac{4 \\times 3.14159^2 \\times 0.369}{(1.22)^2} = \\frac{14.567}{1.4884} = 9.787\\text{ m/s}^2 \\approx 9.78\\text{ m/s}^2$.',
      'The correct option is B.'
    ],
    finalAnswer: '$g = 9.78\\text{ m/s}^2$'
  },
  {
    id: 'phys10-q5',
    qNumber: 5,
    title: 'Transverse vs. Longitudinal Waves',
    titleAr: 'المقارنة بين الموجات المستعرضة والطولية',
    learningOutcome: 'Differentiate between transverse, longitudinal, and surface waves with real-world examples.',
    learningOutcomeAr: 'المقارنة والتمييز بين الموجات المستعرضة والطولية والسطحية وإعطاء أمثلة عليها.',
    unit: 1,
    lesson: 'Lesson 1.2: Wave Properties / خصائص الموجات',
    page: 15,
    exerciseRef: 'Student Book - p.15 Figure 6',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'In a sound wave traveling through air, the air molecules oscillate parallel to the direction of wave propagation. What type of wave is sound?',
    questionTextAr: 'في الموجة الصوتية المنتقلة عبر الهواء، تهتز جزيئات الهواء في اتجاه موازٍ لاتجاه انتشار الموجة. ما نوع الموجة الصوتية؟',
    options: [
      { id: 'A', text: 'Transverse wave / موجة مستعرضة' },
      { id: 'B', text: 'Longitudinal wave / موجة طولية' },
      { id: 'C', text: 'Electromagnetic wave / موجة كهرومغناطيسية' },
      { id: 'D', text: 'Torsional wave / موجة التوائية' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Longitudinal waves are waves in which particles of the medium vibrate parallel to the direction of wave movement (forming compressions and rarefactions).',
      'Sound waves in air are classic examples of longitudinal mechanical waves.',
      'Therefore, Option B is correct.'
    ],
    finalAnswer: 'Longitudinal wave / موجة طولية'
  },
  {
    id: 'phys10-q6',
    qNumber: 6,
    title: 'Relationship Between Frequency and Period',
    titleAr: 'العلاقة بين التردد والزمن الدوري',
    learningOutcome: 'Calculate the frequency of a wave from its period and vice-versa using $f = \\frac{1}{T}$.',
    learningOutcomeAr: 'حساب تردد الموجة من زمنها الدوري والعكس باستخدام العلاقة $f = \\frac{1}{T}$.',
    unit: 1,
    lesson: 'Lesson 1.2: Wave Speed & Frequency / التردد والزمن الدوري',
    page: 23,
    exerciseRef: 'Student Book - p.23 #Practice 21',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'How does the frequency $f$ of a mechanical wave change if its period $T$ is doubled?',
    questionTextAr: 'كيف يتغير تردد الموجة الميكانيكية $f$ عندما يتضاعف زمنها الدوري $T$ إلى المثلين؟',
    options: [
      { id: 'A', text: 'The frequency doubles / يتضاعف التردد إلى المثلين' },
      { id: 'B', text: 'The frequency is reduced by one-half / يقل التردد إلى النصف' },
      { id: 'C', text: 'The frequency quadruples / يتضاعف التردد أربعة أضعاف' },
      { id: 'D', text: 'The frequency remains unchanged / يبقى التردد ثابتاً دون تغيير' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Frequency and period are inversely related by $f = \\frac{1}{T}$.',
      'If $T\' = 2T$, then $f\' = \\frac{1}{2T} = \\frac{1}{2} f$.',
      'Thus, the frequency is reduced to one-half of its initial value. Option B.'
    ],
    finalAnswer: 'The frequency is reduced by one-half / يقل التردد إلى النصف'
  },
  {
    id: 'phys10-q7',
    qNumber: 7,
    title: 'Wave Speed Equation',
    titleAr: 'معادلة سرعة الموجة ($v = \\lambda f$)',
    learningOutcome: 'Apply the relation $v = \\lambda f$ to calculate wave speed, wavelength, or frequency.',
    learningOutcomeAr: 'تطبيق العلاقة $v = \\lambda f$ لحساب سرعة الموجة أو الطول الموجي أو التردد.',
    unit: 1,
    lesson: 'Lesson 1.2: Wave Speed / سرعة الموجات',
    page: 26,
    exerciseRef: 'Student Book - p.26 Example 3',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A sound wave has a frequency $f = 192\\text{ Hz}$ and travels a distance of $91.4\\text{ m}$ in $0.271\\text{ s}$. What is its wavelength $\\lambda$?',
    questionTextAr: 'موجة صوتية ترددها $192\\text{ Hz}$ وتقطع مسافة $91.4\\text{ m}$ خلال $0.271\\text{ s}$. كم يبلغ طولها الموجي $\\lambda$؟',
    options: [
      { id: 'A', text: '$0.57\\text{ m}$' },
      { id: 'B', text: '$1.76\\text{ m}$' },
      { id: 'C', text: '$3.37\\text{ m}$' },
      { id: 'D', text: '$52.0\\text{ m}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'First calculate wave speed: $v = \\frac{\\Delta d}{\\Delta t} = \\frac{91.4\\text{ m}}{0.271\\text{ s}} = 337.27\\text{ m/s}$.',
      'Next use $v = \\lambda f \\implies \\lambda = \\frac{v}{f}$.',
      'Substitute: $\\lambda = \\frac{337.27}{192} = 1.756\\text{ m} \\approx 1.76\\text{ m}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$\\lambda = 1.76\\text{ m}$'
  },
  {
    id: 'phys10-q8',
    qNumber: 8,
    title: 'Wave Behavior at Rigid Boundaries',
    titleAr: 'سلوك الموجات عند الحدود الصلبة/الثابتة',
    learningOutcome: 'Describe that a mechanical wave is inverted if reflected from a fixed end and remains upright if reflected from a free end.',
    learningOutcomeAr: 'وصف انعكاس الموجة الميكانيكية مقلوبة عند اصطدامها بحاجز ثابت وتظل معتدلة عند طرف حر.',
    unit: 1,
    lesson: 'Lesson 1.3: Wave Behavior / سلوك الموجات',
    page: 29,
    exerciseRef: 'Student Book - p.29 Figure 13',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'When a wave pulse traveling along a stretched string hits a rigid fixed boundary (like a wall), what happens to the reflected pulse?',
    questionTextAr: 'عندما تصطدم نبضة موجية تنتقل عبر حبل بحد صلب ثابت (مثل حائط)، ماذا يحدث للنبضة المنعكسة؟',
    options: [
      { id: 'A', text: 'It is reflected upright with the same amplitude / تنعكس معتدلة بنفس السعة' },
      { id: 'B', text: 'It is reflected inverted (flipped upside down) / تنعكس مقلوبة (رأساً على عقب)' },
      { id: 'C', text: 'It stops and disappears completely / تتوقف وتختفي تماماً' },
      { id: 'D', text: 'Its speed and wavelength double upon reflection / تتضاعف سرعتها وطولها الموجي' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'When a mechanical wave hits a rigid/fixed boundary, the boundary exerts an equal and opposite reaction force on the spring according to Newton\'s third law.',
      'This flips the pulse upside down (inversion / phase change of $180^\\circ$).',
      'Correct option is B.'
    ],
    finalAnswer: 'It is reflected inverted (flipped upside down) / تنعكس مقلوبة'
  },
  {
    id: 'phys10-q9',
    qNumber: 9,
    title: 'Principle of Superposition & Interference',
    titleAr: 'مبدأ التراكب والتداخل بين الموجات',
    learningOutcome: 'State and apply the principle of superposition to show that two overlapping waves add algebraically to give a resultant wave.',
    learningOutcomeAr: 'تطبيق مبدأ التراكب لإثبات أن إزاحة الموجة الناتجة عن تداخل موجتين تساوي المجموع الجبري لإزاحتيهما.',
    unit: 1,
    lesson: 'Lesson 1.3: Superposition / تداخل الموجات',
    page: 30,
    exerciseRef: 'Student Book - p.30 Figure 14',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Two wave pulses move toward each other on a spring. Pulse 1 has an upward amplitude of $+3\\text{ cm}$ and Pulse 2 has a downward amplitude of $-1\\text{ cm}$. What is the net displacement at the instant they completely overlap?',
    questionTextAr: 'تتحرك نبضتان نحو بعضهما على زنبرك. النبضة 1 سعتها لأعلى $+3\\text{ cm}$ والنبضة 2 سعتها لأسفل $-1\\text{ cm}$. ما الإزاحة الكلية لحظة تراكبهما؟',
    options: [
      { id: 'A', text: '$+4\\text{ cm}$' },
      { id: 'B', text: '$+2\\text{ cm}$' },
      { id: 'C', text: '$-2\\text{ cm}$' },
      { id: 'D', text: '$0\\text{ cm}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'By the Principle of Superposition, the resultant displacement $y_{net} = y_1 + y_2$.',
      '$y_{net} = (+3\\text{ cm}) + (-1\\text{ cm}) = +2\\text{ cm}$.',
      'The net pulse is an upward pulse of $2\\text{ cm}$. Option B.'
    ],
    finalAnswer: '$+2\\text{ cm}$'
  },
  {
    id: 'phys10-q10',
    qNumber: 10,
    title: 'Standing Waves, Nodes and Antinodes',
    titleAr: 'الموجات المستقرة (الموقوفة) - العقد والبطون',
    learningOutcome: 'Define nodes and antinodes and describe how standing waves are formed.',
    learningOutcomeAr: 'تعريف العقد والبطون وتوضيح كيفية تشكّل الموجات الموقوفة على وتر.',
    unit: 1,
    lesson: 'Lesson 1.3: Standing Waves / الموجات الموقوفة',
    page: 33,
    exerciseRef: 'Student Book - p.33 Figure 16',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'In a standing wave pattern, what is the term given to points where the medium experiences zero displacement due to destructive interference?',
    questionTextAr: 'في نمط الموجة المستقرة (الموقوفة)، ما الاسم الذي يُطلق على النقاط التي تكون إزاحتها صفراً دائماً بسبب التداخل الهدام؟',
    options: [
      { id: 'A', text: 'Antinodes / البطون' },
      { id: 'B', text: 'Nodes / العقد' },
      { id: 'C', text: 'Crests / القمم' },
      { id: 'D', text: 'Troughs / القيعان' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Nodes (العقد) are points in a standing wave with zero displacement due to permanent destructive interference.',
      'Antinodes (البطون) are points with maximum displacement due to constructive interference.',
      'Therefore, Option B is correct.'
    ],
    finalAnswer: 'Nodes / العقد'
  },
  {
    id: 'phys10-q11',
    qNumber: 11,
    title: 'Law of Reflection in Two Dimensions',
    titleAr: 'قانون الانعكاس للموجات في بعدين',
    learningOutcome: 'Describe two-dimensional wave behavior and apply the law of reflection (angle of incidence = angle of reflection).',
    learningOutcomeAr: 'وصف سلوك الموجات في بعدين وتطبيق قانون الانعكاس (زاوية السقوط تساوي زاوية الانعكاس).',
    unit: 1,
    lesson: 'Lesson 1.3: Waves in 2D / الموجات في بعدين',
    page: 36,
    exerciseRef: 'Student Book - p.36 Figure 18',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A straight wave ray in a ripple tank strikes a flat barrier at an angle of incidence $\\theta_i = 35^\\circ$ relative to the normal line. What is the angle of reflection $\\theta_r$?',
    questionTextAr: 'يسقط شعاع موجي مستقيم في حوض الموجات على حاجز مستوٍ بزاوية سقوط $\\theta_i = 35^\\circ$ بالنسبة للعمود المقلم. كم تبلغ زاوية الانعكاس $\\theta_r$؟',
    options: [
      { id: 'A', text: '$35^\\circ$' },
      { id: 'B', text: '$55^\\circ$' },
      { id: 'C', text: '$70^\\circ$' },
      { id: 'D', text: '$90^\\circ$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'The Law of Reflection states that the angle of incidence equals the angle of reflection: $\\theta_i = \\theta_r$.',
      'Given $\\theta_i = 35^\\circ$, $\\theta_r = 35^\\circ$.',
      'The correct option is A.'
    ],
    finalAnswer: '$\\theta_r = 35^\\circ$'
  },
  {
    id: 'phys10-q12',
    qNumber: 12,
    title: 'Speed of Sound & Air Temperature',
    titleAr: 'سرعة الصوت ودرجة حرارة الهواء',
    learningOutcome: 'Explain that the speed of sound varies with different mediums and temperatures ($v = 331 + 0.6 T_C$).',
    learningOutcomeAr: 'تفسير اختلاف سرعة الصوت باختلاف الوسط ودرجة الحرارة.',
    unit: 2,
    lesson: 'Lesson 2.1: Sound Waves / الموجات الصوتية',
    page: 41,
    exerciseRef: 'Student Book - p.41 #42a',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'What is the speed of sound in air on a warm summer day when the air temperature is $30^\\circ\\text{C}$? (Speed at $0^\\circ\\text{C}$ is $331\\text{ m/s}$)',
    questionTextAr: 'ما هي سرعة الصوت في الهواء في يوم صيفي دافئ عندما تكون درجة حرارة الهواء $30^\\circ\\text{C}$؟ (علمًا أن السرعة عند $0^\\circ\\text{C}$ هي $331\\text{ m/s}$)',
    options: [
      { id: 'A', text: '$331\\text{ m/s}$' },
      { id: 'B', text: '$343\\text{ m/s}$' },
      { id: 'C', text: '$349\\text{ m/s}$' },
      { id: 'D', text: '$361\\text{ m/s}$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Formula for speed of sound in air as a function of temperature: $v = 331 + 0.6 \\times T_C$.',
      'Substitute $T_C = 30^\\circ\\text{C}$:',
      '$v = 331 + (0.6 \\times 30) = 331 + 18 = 349\\text{ m/s}$.',
      'Option C is correct.'
    ],
    finalAnswer: '$v = 349\\text{ m/s}$'
  },
  {
    id: 'phys10-q13',
    qNumber: 13,
    title: 'Sound Pitch and Frequency',
    titleAr: 'حدة الصوت والتردد',
    learningOutcome: 'Define sound pitch and relate it to the frequency of a sound wave.',
    learningOutcomeAr: 'تعريف حدة الصوت (pitch) وربطها بتردد الموجة الصوتية.',
    unit: 2,
    lesson: 'Lesson 2.1: Pitch & Loudness / حدة الصوت والشدة',
    page: 43,
    exerciseRef: 'Student Book - p.43 Section 2.1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Which physical property of a sound wave directly determines the human perception of pitch (ارتفاع نغمة الصوت أو حدتها)?',
    questionTextAr: 'أي من الخصائص الفيزيائية للموجة الصوتية تحدد بشكل مباشر إدراك الأذن البشرية لـ "حدة الصوت" (Pitch)؟',
    options: [
      { id: 'A', text: 'Wave Amplitude / سعة الموجة' },
      { id: 'B', text: 'Wave Frequency / تردد الموجة' },
      { id: 'C', text: 'Wave Speed / سرعة الموجة' },
      { id: 'D', text: 'Phase Constant / ثابت الطور' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Pitch is the human brain\'s perception of the frequency of a sound wave.',
      'Higher frequency corresponds to higher pitch (صوت حاد), while lower frequency corresponds to lower pitch (صوت غليظ).',
      'Option B is correct.'
    ],
    finalAnswer: 'Wave Frequency / تردد الموجة'
  },
  {
    id: 'phys10-q14',
    qNumber: 14,
    title: 'Doppler Effect Formula',
    titleAr: 'تأثير دوبلر في الصوت',
    learningOutcome: 'Apply the Doppler effect equation $f_d = f_s \\left(\\frac{v - v_d}{v - v_s}\\right)$ to calculate observed frequency.',
    learningOutcomeAr: 'تطبيق معادلة تأثير دوبلر لحساب التردد المدرك عند تحرك المصدر أو المراقب.',
    unit: 2,
    lesson: 'Lesson 2.1: Doppler Effect / تأثير دوبلر',
    page: 46,
    exerciseRef: 'Student Book - p.46 Example Problem 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A car playing a note of $523\\text{ Hz}$ approaches a stationary detector ($v_d = 0$) at $24.6\\text{ m/s}$. If speed of sound is $343\\text{ m/s}$, what frequency $f_d$ is detected?',
    questionTextAr: 'تقترب سيارة تصدر صوتاً تردده $523\\text{ Hz}$ نحو كاشف ساكن ($v_d = 0$) بسرعة $24.6\\text{ m/s}$. إذا كانت سرعة الصوت $343\\text{ m/s}$، ما التردد المدرك $f_d$؟',
    options: [
      { id: 'A', text: '$488\\text{ Hz}$' },
      { id: 'B', text: '$523\\text{ Hz}$' },
      { id: 'C', text: '$564\\text{ Hz}$' },
      { id: 'D', text: '$610\\text{ Hz}$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Doppler formula for approaching source: $f_d = f_s \\left( \\frac{v}{v - v_s} \\right)$.',
      'Substitute values ($f_s = 523\\text{ Hz}, v = 343\\text{ m/s}, v_s = +24.6\\text{ m/s}$):',
      '$f_d = 523 \\times \\left( \\frac{343}{343 - 24.6} \\right) = 523 \\times \\left( \\frac{343}{318.4} \\right) = 523 \\times 1.07726 = 563.4\\text{ Hz} \\approx 564\\text{ Hz}$.',
      'Option C is correct.'
    ],
    finalAnswer: '$f_d = 564\\text{ Hz}$'
  },
  {
    id: 'phys10-q15',
    qNumber: 15,
    title: 'Resonance Frequencies in Open Pipes',
    titleAr: 'الرنين في الأنابيب المفتوحة الطرفين',
    learningOutcome: 'Identify resonance frequencies and node/antinode patterns in open-pipe resonators ($f_n = n \\frac{v}{2L}$).',
    learningOutcomeAr: 'حساب الترددات الرنينية وتحديد العقد والبطون في أنبوب أنبوب مفتوح الطرفين.',
    unit: 2,
    lesson: 'Lesson 2.2: Pipe Resonance / رنين الأعمدة الهوائية',
    page: 50,
    exerciseRef: 'Student Book - p.50 Figure 14',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'An open-pipe resonator of length $L = 0.50\\text{ m}$ is filled with air where the speed of sound is $v = 340\\text{ m/s}$. What is its fundamental frequency $f_1$?',
    questionTextAr: 'أنبوب هوائي مفتوح الطرفين طوله $L = 0.50\\text{ m}$ وسرعة الصوت فيه $v = 340\\text{ m/s}$. ما التردد الأساسي $f_1$ لهذا الأنبوب؟',
    options: [
      { id: 'A', text: '$170\\text{ Hz}$' },
      { id: 'B', text: '$340\\text{ Hz}$' },
      { id: 'C', text: '$510\\text{ Hz}$' },
      { id: 'D', text: '$680\\text{ Hz}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'For an open-pipe resonator, fundamental wavelength $\\lambda_1 = 2L = 2 \\times 0.50\\text{ m} = 1.00\\text{ m}$.',
      'Fundamental frequency $f_1 = \\frac{v}{\\lambda_1} = \\frac{340\\text{ m/s}}{1.00\\text{ m}} = 340\\text{ Hz}$.',
      'Option B is correct.'
    ],
    finalAnswer: '$f_1 = 340\\text{ Hz}$'
  },
  {
    id: 'phys10-q16',
    qNumber: 16,
    title: 'Resonance Frequencies in Closed Pipes',
    titleAr: 'الرنين في الأنابيب المغلقة الطرف',
    learningOutcome: 'Calculate resonance length and wave harmonics for closed-pipe resonators ($f_n = n \\frac{v}{4L}$, odd harmonics $n=1, 3, 5\\dots$).',
    learningOutcomeAr: 'حساب طول الرنين والتوافقيات الفردية في الأنابيب المغلقة الطرفين.',
    unit: 2,
    lesson: 'Lesson 2.2: Closed Pipes / الأنابيب المغلقة',
    page: 52,
    exerciseRef: 'Student Book - p.52 Figure 13',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Which harmonics are present in a closed-pipe resonator (one end closed, one end open)?',
    questionTextAr: 'أي من التوافقيات توجد في أنبوب هوائي مغلق من طرف ومفتوح من الطرف الآخر؟',
    options: [
      { id: 'A', text: 'All integer harmonics ($1f, 2f, 3f, 4f\\dots$) / جميع التوافقيات الصحيحة' },
      { id: 'B', text: 'Only odd harmonics ($1f, 3f, 5f, 7f\\dots$) / التوافقيات الفردية فقط' },
      { id: 'C', text: 'Only even harmonics ($2f, 4f, 6f\\dots$) / التوافقيات الزوجية فقط' },
      { id: 'D', text: 'Fundamental frequency only with no higher harmonics / التردد الأساسي فقط بدون توافقيات أعلى' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'In a closed-pipe resonator, a node forms at the closed end and an antinode at the open end.',
      'This requires column lengths $L = \\frac{1}{4}\\lambda, \\frac{3}{4}\\lambda, \\frac{5}{4}\\lambda\\dots$, generating ONLY odd multiples of the fundamental frequency ($n = 1, 3, 5\\dots$).',
      'Correct option is B.'
    ],
    finalAnswer: 'Only odd harmonics ($1f, 3f, 5f\\dots$) / التوافقيات الفردية فقط'
  },
  {
    id: 'phys10-q17',
    qNumber: 17,
    title: 'Resonance on Stretched Strings',
    titleAr: 'الرنين في الأوتار المشدودة',
    learningOutcome: 'Explain resonance on strings and identify relations between wavelength, frequency, and string length.',
    learningOutcomeAr: 'تفسير الرنين في الأوتار المشدودة وتحديد العلاقة بين الطول الموجي والتردد وطول الوتر.',
    unit: 2,
    lesson: 'Lesson 2.2: Resonance on Strings / الرنين في الأوتار',
    page: 53,
    exerciseRef: 'Student Book - p.53 Section 2.2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A guitar string of length $L = 0.65\\text{ m}$ vibrates at its fundamental frequency. What is the fundamental wavelength $\\lambda_1$ on the string?',
    questionTextAr: 'تهتز سلسلة وتر جيتار طولها $L = 0.65\\text{ m}$ عند ترددها الأساسي. كم يبلغ الطول الموجي الأساسي $\\lambda_1$ على الوتر؟',
    options: [
      { id: 'A', text: '$0.325\\text{ m}$' },
      { id: 'B', text: '$0.65\\text{ m}$' },
      { id: 'C', text: '$1.30\\text{ m}$' },
      { id: 'D', text: '$2.60\\text{ m}$' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'For a string clamped at both ends, the fundamental mode has nodes at both ends and one antinode in the middle.',
      'Therefore, $L = \\frac{1}{2} \\lambda_1 \\implies \\lambda_1 = 2L$.',
      'Substitute $L = 0.65\\text{ m}$: $\\lambda_1 = 2 \\times 0.65\\text{ m} = 1.30\\text{ m}$.',
      'Option C is correct.'
    ],
    finalAnswer: '$\\lambda_1 = 1.30\\text{ m}$'
  },
  {
    id: 'phys10-q18',
    qNumber: 18,
    title: 'Sound Quality & Beat Frequency',
    titleAr: 'جودة الصوت وتردد الضربات (Beats)',
    learningOutcome: 'Calculate the frequency of a beat as the magnitude of difference between two sound wave frequencies ($f_{beat} = |f_A - f_B|$).',
    learningOutcomeAr: 'حساب تردد النبضات (الضربات) كالقيمة المطلقة للفرق بين ترددي موجتين صوتيتين.',
    unit: 2,
    lesson: 'Lesson 2.2: Beats / الضربات الصوتية',
    page: 60,
    exerciseRef: 'Student Book - p.60 Section 2.2',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Two tuning forks with frequencies $f_A = 440\\text{ Hz}$ and $f_B = 444\\text{ Hz}$ are struck simultaneously. What beat frequency $f_{beat}$ is heard?',
    questionTextAr: 'شوكتا رنانة تردداهما $f_A = 440\\text{ Hz}$ و $f_B = 444\\text{ Hz}$ صُدمتا معاً في نفس الوقت. ما تردد الضربات $f_{beat}$ المسموع؟',
    options: [
      { id: 'A', text: '$2\\text{ Hz}$' },
      { id: 'B', text: '$4\\text{ Hz}$' },
      { id: 'C', text: '$442\\text{ Hz}$' },
      { id: 'D', text: '$884\\text{ Hz}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'The beat frequency formula is $f_{beat} = |f_A - f_B|$.',
      'Substitute: $f_{beat} = |440 - 444| = 4\\text{ Hz}$.',
      'Option B is correct.'
    ],
    finalAnswer: '$f_{beat} = 4\\text{ Hz}$'
  },
  {
    id: 'phys10-q19',
    qNumber: 19,
    title: 'Point Source Illuminance Formula',
    titleAr: 'شدة الاستضاءة لمصدر ضوئي نقطي',
    learningOutcome: 'Apply the equation $E = \\frac{P}{4\\pi r^2}$ for illuminance of a point source to numerical problems.',
    learningOutcomeAr: 'تطبيق معادلة الاستضاءة لمصدر نقطي $E = \\frac{P}{4\\pi r^2}$ في المسائل الحسابية.',
    unit: 3,
    lesson: 'Lesson 3.1: Fundamentals of Light / أساسيات الضوء والاستضاءة',
    page: 76,
    exerciseRef: 'Student Book - p.76 Example 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A lamp emits a luminous flux $P = 1750\\text{ lm}$. What is the illuminance $E$ on a desktop located directly below it at a distance $r = 2.50\\text{ m}$?',
    questionTextAr: 'مصباح يصدر تدفقاً ضوئياً $P = 1750\\text{ lm}$. ما مقدار الاستضاءة $E$ على سطح مكتب يقع تحته مباشرة على مسافة $r = 2.50\\text{ m}$؟',
    options: [
      { id: 'A', text: '$11.2\\text{ lx}$' },
      { id: 'B', text: '$22.3\\text{ lx}$' },
      { id: 'C', text: '$70.0\\text{ lx}$' },
      { id: 'D', text: '$223\\text{ lx}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Formula for point source illuminance: $E = \\frac{P}{4\\pi r^2}$.',
      'Substitute $P = 1750\\text{ lm}$ and $r = 2.50\\text{ m}$:',
      '$E = \\frac{1750}{4\\pi \\times (2.50)^2} = \\frac{1750}{4 \\times 3.14159 \\times 6.25} = \\frac{1750}{78.54} = 22.28\\text{ lx} \\approx 22.3\\text{ lx}$.',
      'Option B is correct.'
    ],
    finalAnswer: '$E = 22.3\\text{ lx}$'
  },
  {
    id: 'phys10-q20',
    qNumber: 20,
    title: 'Inverse Square Law for Light',
    titleAr: 'قانون التربيع العكسي للاستضاءة الضوئية',
    learningOutcome: 'Apply the inverse square law to compare illuminance at different distances from a light source.',
    learningOutcomeAr: 'تطبيق قانون التربيع العكسي للمقارنة بين شدة الاستضاءة عند أبعاد مختلفة من مصدر الضوء.',
    unit: 3,
    lesson: 'Lesson 3.1: Illuminance & Distance / الاستضاءة والمسافة',
    page: 77,
    exerciseRef: 'Student Book - p.77 #3',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'If the distance between a surface and a light source is doubled ($r\' = 2r$), how does the illuminance $E$ on the surface change?',
    questionTextAr: 'إذا تضاعفت المسافة بين سطح ومصدر الضوء إلى المِثلين ($r\' = 2r$)، كيف تتغير استضاءة السطح $E$؟',
    options: [
      { id: 'A', text: 'Decreases to $\\frac{1}{2}$ of original / تقل إلى النصف' },
      { id: 'B', text: 'Decreases to $\\frac{1}{4}$ of original / تقل إلى الربع' },
      { id: 'C', text: 'Increases by a factor of $2$ / تزداد بمرتين' },
      { id: 'D', text: 'Increases by a factor of $4$ / تزداد بأربعة أضعاف' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Illuminance follows the inverse square law: $E \\propto \\frac{1}{r^2}$.',
      'If $r\' = 2r$, then $E\' \\propto \\frac{1}{(2r)^2} = \\frac{1}{4r^2} = \\frac{1}{4} E$.',
      'The illuminance decreases to one-fourth of its initial value. Option B.'
    ],
    finalAnswer: 'Decreases to $\\frac{1}{4}$ of original / تقل إلى الربع'
  },

  // Free Response Paper Questions (الأسئلة المقالية الورقية)
  {
    id: 'phys10-paper-q21',
    qNumber: 21,
    title: 'Paper Question 1: Spring Energy & Hooke\'s Law Problem',
    titleAr: 'السؤال المقالي 1: مسألة حسابية شاملة لقانون هوك والطاقة',
    learningOutcome: 'Solve multi-step numerical problems involving Hooke\'s law and elastic potential energy.',
    learningOutcomeAr: 'حل مسائل عدادية مركية تتضمن قانون هوك وطاقة الوضع المرونية للزنبرك.',
    unit: 1,
    lesson: 'Lesson 1.1: Hooke\'s Law / قانون هوك',
    page: 8,
    exerciseRef: 'Student Book - p.8 #Problem 1',
    type: 'paper',
    examYear: '2025/2026',
    questionText: 'A spring with spring constant $k = 310\\text{ N/m}$ is suspended vertically. A mass hanging from it stretches the spring by $0.18\\text{ m}$.\n' +
      'a) Calculate the gravitational force (weight) $F_g$ acting on the mass.\n' +
      'b) Calculate the elastic potential energy $PE_{sp}$ stored in the spring.',
    questionTextAr: 'عُلِّقت كتلة رأسيًا بفي زنبرك ثابته $k = 310\\text{ N/m}$ فاستطال بمقدار $0.18\\text{ m}$.\n' +
      'أ) احسب وزن الكتلة المؤثرة (قوة الجاذبية $F_g$).\n' +
      'ب) احسب طاقة الوضع المرونية $PE_{sp}$ المختزنة في الزنبرك.',
    options: [],
    correctAnswer: '',
    solutionSteps: [
      'أ) حساب وزن الكتلة $F_g$:\n' +
      'من قانون هوك في حالة الاتزان: $F_g = k \\cdot x = 310\\text{ N/m} \\times 0.18\\text{ m} = 55.8\\text{ N} \\approx 56\\text{ N}$.',
      'ب) حساب طاقة الوضع المرونية $PE_{sp}$:\n' +
      '$PE_{sp} = \\frac{1}{2} k x^2 = \\frac{1}{2} \\times 310 \\times (0.18)^2 = 0.5 \\times 310 \\times 0.0324 = 5.022\\text{ J} \\approx 5.0\\text{ J}$.'
    ],
    finalAnswer: 'a) $F_g = 55.8\\text{ N}$, b) $PE_{sp} = 5.02\\text{ J}$'
  },
  {
    id: 'phys10-paper-q22',
    qNumber: 22,
    title: 'Paper Question 2: Simple Pendulum Gravity Calculation',
    titleAr: 'السؤال المقالي 2: حساب تسارع الجاذبية بالبندول البسيط',
    learningOutcome: 'Apply the period equation of a simple pendulum to derive local gravitational acceleration.',
    learningOutcomeAr: 'استخدام معادلة الحركة للبندول البسيط لاستنتاج تسارع الجاذبية في تجربة معلمية.',
    unit: 1,
    lesson: 'Lesson 1.1: Simple Pendulum / البندول البسيط',
    page: 14,
    exerciseRef: 'Student Book - p.14 #Practice 5',
    type: 'paper',
    examYear: '2025/2026',
    questionText: 'A student sets up a pendulum of length $L = 1.00\\text{ m}$ on an unknown planet and measures its period to be $T = 2.00\\text{ s}$.\n' +
      'a) Derive the formula for acceleration due to gravity $g$.\n' +
      'b) Calculate the numerical value of $g$ on this planet.',
    questionTextAr: 'قام طالب بتجهيز بندول بسيط طوله $L = 1.00\\text{ m}$ على كوكب مجهول وقاس زمنه الدوري فكان $T = 2.00\\text{ s}$.\n' +
      'أ) اشتق الصيغة الرياضية لحساب تسارع الجاذبية $g$.\n' +
      'ب) احسب القيمة العددية لـ $g$ على هذا الكوكب.',
    options: [],
    correctAnswer: '',
    solutionSteps: [
      'أ) الاشتقاق الرياضي:\n' +
      'نبدأ بمعادلة البندول: $T = 2\\pi \\sqrt{\\frac{L}{g}}$.\n' +
      'بتربيع الطرفين: $T^2 = 4\\pi^2 \\frac{L}{g}$.\n' +
      'إذن: $g = \\frac{4\\pi^2 L}{T^2}$.',
      'ب) التعويض العددي:\n' +
      '$g = \\frac{4 \\times \\pi^2 \\times 1.00}{(2.00)^2} = \\frac{39.478}{4.00} = 9.87\\text{ m/s}^2$.'
    ],
    finalAnswer: 'a) $g = \\frac{4\\pi^2 L}{T^2}$, b) $g = 9.87\\text{ m/s}^2$'
  },
  {
    id: 'phys10-paper-q23',
    qNumber: 23,
    title: 'Paper Question 3: Doppler Effect for Approaching Vehicle',
    titleAr: 'السؤال المقالي 3: حسابات تأثير دوبلر للمركبات المتحركة',
    learningOutcome: 'Apply the Doppler effect equation for moving sound sources.',
    learningOutcomeAr: 'تطبيق معادلة تأثير دوبلر لحساب التردد الظاهري لمصدر صوتي متحرك.',
    unit: 2,
    lesson: 'Lesson 2.1: Doppler Effect / تأثير دوبلر',
    page: 46,
    exerciseRef: 'Student Book - p.46 #Practice 2',
    type: 'paper',
    examYear: '2025/2026',
    questionText: 'An ambulance siren produces a sound with frequency $f_s = 365\\text{ Hz}$ while driving toward a stationary person at $v_s = 25.0\\text{ m/s}$. Speed of sound in air is $v = 343\\text{ m/s}$.\n' +
      'a) Calculate the observed frequency $f_d$ as the ambulance approaches.\n' +
      'b) Calculate the observed frequency $f_d\'$ after the ambulance passes and moves away at the same speed.',
    questionTextAr: 'تصدر صفارة سيارة إسعاف صوتاً تردده $365\\text{ Hz}$ أثناء تحركها نحو شخص يقف على الرصيف بسرعة $25.0\\text{ m/s}$. وسرعة الصوت في الهواء $343\\text{ m/s}$.\n' +
      'أ) احسب التردد المدرك $f_d$ أثناء اقتراب سيارة الإسعاف.\n' +
      'ب) احسب التردد المدرك $f_d\'$ بعد مرورها وابتعادها بنفس السرعة.',
    options: [],
    correctAnswer: '',
    solutionSteps: [
      'أ) عند الاقتراب ($v_s = +25.0\\text{ m/s}$):\n' +
      '$f_d = f_s \\left( \\frac{v}{v - v_s} \\right) = 365 \\times \\left( \\frac{343}{343 - 25.0} \\right) = 365 \\times \\left( \\frac{343}{318} \\right) = 393.7\\text{ Hz} \\approx 394\\text{ Hz}$.',
      'ب) عند الابتعاد ($v_s = -25.0\\text{ m/s}$):\n' +
      '$f_d\' = f_s \\left( \\frac{v}{v + v_s} \\right) = 365 \\times \\left( \\frac{343}{343 + 25.0} \\right) = 365 \\times \\left( \\frac{343}{368} \\right) = 340.2\\text{ Hz} \\approx 340\\text{ Hz}$.'
    ],
    finalAnswer: 'a) $f_d = 394\\text{ Hz}$, b) $f_d\' = 340\\text{ Hz}$'
  },
  {
    id: 'phys10-paper-q24',
    qNumber: 24,
    title: 'Paper Question 4: Speed of Sound in Resonance Air Column',
    titleAr: 'السؤال المقالي 4: قياس سرعة الصوت بأنابيب الرنين',
    learningOutcome: 'Determine speed of sound using resonance position measurements in closed or open pipes.',
    learningOutcomeAr: 'حساب سرعة الصوت عملياً باستخدام مواقع الرنين في الأنابيب المغلقة.',
    unit: 2,
    lesson: 'Lesson 2.2: Closed Pipe Resonance / أنبوب الرنين المغلق',
    page: 52,
    exerciseRef: 'Student Book - p.52 Example 2',
    type: 'paper',
    examYear: '2025/2026',
    questionText: 'A tuning fork of frequency $f = 392\\text{ Hz}$ is held over a closed-pipe resonator. The first fundamental resonance occurs at length $L_1 = 21.0\\text{ cm}$ ($0.210\\text{ m}$) and the second resonance occurs at length $L_2 = 65.3\\text{ cm}$ ($0.653\\text{ m}$).\n' +
      'a) Find the wavelength $\\lambda$ of the sound wave from the distance between resonance points ($L_2 - L_1 = \\frac{1}{2}\\lambda$).\n' +
      'b) Calculate the speed of sound $v$ in air during this experiment.',
    questionTextAr: 'شكة رنانة ترددها $f = 392\\text{ Hz}$ عُلّقت فوق أنبوب رنين مغلق. حدث الرنين الأول عند طول $L_1 = 21.0\\text{ cm}$ ($0.210\\text{ m}$) والرنين الثاني عند طول $L_2 = 65.3\\text{ cm}$ ($0.653\\text{ m}$).\n' +
      'أ) احسب الطول الموجي $\\lambda$ للصوت من المسافة بين طولي الرنين ($L_2 - L_1 = \\frac{1}{2}\\lambda$).\n' +
      'ب) احسب سرعة الصوت $v$ في الهواء أثناء التجربة.',
    options: [],
    correctAnswer: '',
    solutionSteps: [
      'أ) حساب الطول الموجي $\\lambda$:\n' +
      '$L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$.\n' +
      '$\\lambda = 2(0.653\\text{ m} - 0.210\\text{ m}) = 2(0.443\\text{ m}) = 0.886\\text{ m}$.',
      'ب) حساب سرعة الصوت $v$:\n' +
      '$v = f \\cdot \\lambda = 392\\text{ Hz} \\times 0.886\\text{ m} = 347.3\\text{ m/s} \\approx 347\\text{ m/s}$.'
    ],
    finalAnswer: 'a) $\\lambda = 0.886\\text{ m}$, b) $v = 347\\text{ m/s}$'
  },
  {
    id: 'phys10-paper-q25',
    qNumber: 25,
    title: 'Paper Question 5: Point Source Illuminance & Distance Problem',
    titleAr: 'السؤال المقالي 5: مسألة الاستضاءة لمصدر نقطي وقانون التربيع العكسي',
    learningOutcome: 'Solve numerical problems for illuminance and luminous flux at varying distances.',
    learningOutcomeAr: 'حل المسائل الحسابية المتعلقة بالاستضاءة والتدفق الضوئي على أبعاد مختلفة.',
    unit: 3,
    lesson: 'Lesson 3.1: Illuminance / الاستضاءة الضوئية',
    page: 76,
    exerciseRef: 'Student Book - p.76 #Problem 3',
    type: 'paper',
    examYear: '2025/2026',
    questionText: 'A point light source with luminous intensity $I = 64\\text{ cd}$ is located at a distance of $r_1 = 3.0\\text{ m}$ from a painting.\n' +
      'a) Calculate the illuminance $E_1$ on the painting.\n' +
      'b) If the painting is moved to a distance $r_2 = 6.0\\text{ m}$, calculate the new illuminance $E_2$.',
    questionTextAr: 'مصدر ضوئي نقطي شدة إضاءته $I = 64\\text{ cd}$ يقع على مسافة $r_1 = 3.0\\text{ m}$ من لوحة فنية.\n' +
      'أ) احسب الاستضاءة $E_1$ على اللوحة الفنية.\n' +
      'ب) إذا نُقلت اللوحة إلى مسافة $r_2 = 6.0\\text{ m}$، احسب الاستضاءة الجديدة $E_2$.',
    options: [],
    correctAnswer: '',
    solutionSteps: [
      'أ) الاستضاءة عند المسافة الأولى $r_1 = 3.0\\text{ m}$:\n' +
      '$E_1 = \\frac{I}{r_1^2} = \\frac{64}{3.0^2} = \\frac{64}{9.0} = 7.11\\text{ lx}$.',
      'ب) الاستضاءة عند المسافة الثانية $r_2 = 6.0\\text{ m}$:\n' +
      '$E_2 = \\frac{I}{r_2^2} = \\frac{64}{6.0^2} = \\frac{64}{36.0} = 1.78\\text{ lx}$ (أو باستخدام قانون التربيع العكسي: $E_2 = \\frac{E_1}{4} = \\frac{7.11}{4} = 1.78\\text{ lx}$).'
    ],
    finalAnswer: 'a) $E_1 = 7.11\\text{ lx}$, b) $E_2 = 1.78\\text{ lx}$'
  }
];
