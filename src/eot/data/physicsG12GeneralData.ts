import { QuestionItem } from '../types';

export const physicsG12GeneralQuestions: QuestionItem[] = [
  // --- MCQ QUESTIONS (1 to 16) ---
  {
    id: 'phys12g-q1',
    qNumber: 1,
    title: 'Elementary Charge & Number of Removed Electrons',
    titleAr: 'الشحنة الأساسية وحساب عدد الإلكترونات المزالة من كشاف كهربائي',
    learningOutcome: 'Determine the quantity of charge in Coulombs and calculate the number of excess or removed elementary charges using $N_e = q / e$.',
    learningOutcomeAr: 'تحديد مقدار الشحنة بالكولوم وحساب عدد الإلكترونات الزائدة أو المزالة باستخدام $N_e = q / e$.',
    unit: 1,
    lesson: 'Lesson 1.1: Static Electricity & Charge / الكهرباء الساكنة والشحنة',
    page: 14,
    exerciseRef: 'Student Book - p.14 Q1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'How many electrons were removed from a positively charged electroscope if its net positive charge is $+7.5 \\times 10^{-11}\\text{ C}$?',
    questionTextAr: 'كم عدد الإلكترونات التي تمت إزالتها من كشاف كهربائي ذي شحنة موجبة إذا كان صافي شحنته يبلغ $+7.5 \\times 10^{-11}\\text{ C}$؟',
    options: [
      { id: 'A', text: '$7.5 \\times 10^{-11}\\text{ electrons}$' },
      { id: 'B', text: '$2.1 \\times 10^{-9}\\text{ electrons}$' },
      { id: 'C', text: '$1.2 \\times 10^{-9}\\text{ electrons}$' },
      { id: 'D', text: '$4.7 \\times 10^8\\text{ electrons}$' }
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'Elementary charge magnitude: $e = 1.602 \\times 10^{-19}\\text{ C}$.',
      'Formula: $N_e = \\frac{q}{e}$.',
      'Substitute values: $N_e = \\frac{7.5 \\times 10^{-11}\\text{ C}}{1.602 \\times 10^{-19}\\text{ C}} \\approx 4.68 \\times 10^8 \\approx 4.7 \\times 10^8\\text{ electrons}$.'
    ],
    finalAnswer: '$4.7 \\times 10^8\\text{ electrons}$'
  },
  {
    id: 'phys12g-q2',
    qNumber: 2,
    title: 'Charging Processes: Friction, Contact & Induction',
    titleAr: 'طرق الشحن: الدلك والتوصيل والحث الكهروستاتيكي',
    learningOutcome: 'Explain the mechanisms of charging objects by friction, contact, and electrostatic induction.',
    learningOutcomeAr: 'شرح آلية شحن الأجسام بالدلك والتوصيل والحث الكهروستاتيكي وتأثير التأريض.',
    unit: 1,
    lesson: 'Lesson 1.1: Charging Objects / طرق شحن الأجسام',
    page: 12,
    exerciseRef: 'Student Book - p.12 Q18',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'An electroscope is charged by induction using a negatively charged rubber rod. What is the net charge on the electroscope after the ground connection is removed and then the rod is removed?',
    questionTextAr: 'تم شحن كشاف كهربائي عن طريق الحث باستخدام قضيب مطاطي مشحون بشحنة سالبة مع استخدام التأريض. ما شحنة الكشاف الكهربائي النهائية بعد فصل الأرضي ثم إبعاد القضيب؟',
    options: [
      { id: 'A', text: 'Negative charge / شحنة سالبة' },
      { id: 'B', text: 'Positive charge / شحنة موجبة' },
      { id: 'C', text: 'Neutral / متعادل كهربائياً' },
      { id: 'D', text: 'Unchanged charge / لا يتغير' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'When a negatively charged rod approaches the neutral electroscope, negative charges (free electrons) are repelled to ground.',
      'When the ground wire is disconnected while the negative rod is still nearby, net positive charges remain trapped on the electroscope.',
      'Removing the rod leaves the electroscope with a net **Positive charge** (شحنة موجبة).'
    ],
    finalAnswer: 'Positive charge (شحنة موجبة)'
  },
  {
    id: 'phys12g-q3',
    qNumber: 3,
    title: 'Coulomb\'s Law Force Between Two Point Charges',
    titleAr: 'حساب القوة الكهروستاتيكية بين شحنتين باستخدام قانون كولوم',
    learningOutcome: 'Apply Coulomb\'s Law $F = K \\frac{|q_A q_B|}{r^2}$ to calculate electrostatic forces between charged particles.',
    learningOutcomeAr: 'تطبيق قانون كولوم $F = K \\frac{|q_A q_B|}{r^2}$ لحساب القوة الكهروستاتيكية المتبادلة بين الشحنات.',
    unit: 1,
    lesson: 'Lesson 1.2: Coulomb\'s Law / قانون كولوم',
    page: 15,
    exerciseRef: 'Student Book - p.15 Q9',
    type: 'mcq',
    imageSvgType: 'phys12g_coulomb_two_charges',
    examYear: '2025/2026',
    questionText: 'A negative charge $q_A = -2.0 \\times 10^{-4}\\text{ C}$ and a positive charge $q_B = +8.0 \\times 10^{-4}\\text{ C}$ are separated by a distance of $0.30\\text{ m}$. What is the magnitude of the electrostatic force between them?',
    questionTextAr: 'شحنة سالبة $q_A = -2.0 \\times 10^{-4}\\text{ C}$ وشحنة موجبة $q_B = +8.0 \\times 10^{-4}\\text{ C}$ متباعدتان بمسافة $0.30\\text{ m}$. ما مقدار القوة الكهروستاتيكية بين هاتين الشحنتين؟',
    options: [
      { id: 'A', text: '$1.6 \\times 10^4\\text{ N}$' },
      { id: 'B', text: '$4.8 \\times 10^3\\text{ N}$' },
      { id: 'C', text: '$5.3 \\times 10^2\\text{ N}$' },
      { id: 'D', text: '$1.6 \\times 10^2\\text{ N}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Coulomb\'s Law formula: $F = K \\frac{|q_A q_B|}{r^2}$.',
      'Constant $K = 9.0 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.',
      '$F = \\frac{(9.0 \\times 10^9) \\times (2.0 \\times 10^{-4}) \\times (8.0 \\times 10^{-4})}{(0.30)^2}$.',
      '$F = \\frac{1440}{0.09} = 1.6 \\times 10^4\\text{ N}$.',
      'Since the charges are opposite in sign, this is an attractive force.'
    ],
    finalAnswer: '$1.6 \\times 10^4\\text{ N}$'
  },
  {
    id: 'phys12g-q4',
    qNumber: 4,
    title: 'Inverse Square Law & Force Variation with Distance',
    titleAr: 'قانون التربيع العكسي وتغير القوة الكهربائية بتغير المسافة',
    learningOutcome: 'Analyze how electrostatic force changes when distance or charge magnitudes are scaled.',
    learningOutcomeAr: 'تحليل كيفية تغير القوة الكهروستاتيكية عند مضاعفة المسافة أو الشحنات بناءً على قانون التربيع العكسي.',
    unit: 1,
    lesson: 'Lesson 1.2: Coulomb\'s Law / قانون كولوم',
    page: 16,
    exerciseRef: 'Student Book - p.16 Q104',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'If the electrostatic force between two charges is $F$ at distance $r$, what will be the new force if the distance between them is tripled ($3r$)?',
    questionTextAr: 'إذا كانت القوة الكهروستاتيكية بين شحنتين هي $F$ عند مسافة $r$، فما مقدار القوة الجديدة إذا زادت المسافة بين الشحنتين إلى ثلاثة أضعاف ($3r$)؟',
    options: [
      { id: 'A', text: '$F / 9$' },
      { id: 'B', text: '$3 F$' },
      { id: 'C', text: '$F / 3$' },
      { id: 'D', text: '$9 F$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Coulomb\'s force is inversely proportional to the square of distance: $F \\propto \\frac{1}{r^2}$.',
      'New distance $r\' = 3r$.',
      'New force $F\' = \\frac{K q_A q_B}{(3r)^2} = \\frac{K q_A q_B}{9 r^2} = \\frac{F}{9}$.'
    ],
    finalAnswer: '$F / 9$'
  },
  {
    id: 'phys12g-q5',
    qNumber: 5,
    title: 'Electric Field Definition & Test Charge Calculation',
    titleAr: 'تعريف شدة المجال الكهربائي وحساب القوة على شحنة اختبار',
    learningOutcome: 'Calculate the strength and direction of electric field $E = F / q\'$ using a test charge.',
    learningOutcomeAr: 'حساب مقدار واتجاه شدة المجال الكهربائي $E = F / q\'$ باستخدام شحنة اختبار موجبة.',
    unit: 2,
    lesson: 'Lesson 2.1: Electric Fields / المجال الكهربائي',
    page: 35,
    exerciseRef: 'Student Book - p.35 Example 1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A positive test charge $q\' = 3.0 \\times 10^{-6}\\text{ C}$ experiences an electrostatic force $F = 0.12\\text{ N}$ directed at $15^\\circ$ north of east. What is the strength and direction of the electric field at the test charge position?',
    questionTextAr: 'افترض أنك تقيس المجال الكهربائي باستخدام شحنة اختبار موجبة $q\' = 3.0 \\times 10^{-6}\\text{ C}$ تتعرض لقوة $0.12\\text{ N}$ بزاوية $15^\\circ$ شمال الشرق. ما مقدار شدة المجال الكهربائي واتجاهها؟',
    options: [
      { id: 'A', text: '$4.0 \\times 10^4\\text{ N/C}$ at $15^\\circ$ North of East' },
      { id: 'B', text: '$3.6 \\times 10^{-7}\\text{ N/C}$ at $15^\\circ$ North of East' },
      { id: 'C', text: '$2.5 \\times 10^5\\text{ N/C}$ at $15^\\circ$ South of West' },
      { id: 'D', text: '$1.2 \\times 10^3\\text{ N/C}$ at $15^\\circ$ North of East' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Electric field strength formula: $E = \\frac{F}{q\'}$.',
      'Substitute values: $E = \\frac{0.12\\text{ N}}{3.0 \\times 10^{-6}\\text{ C}} = 4.0 \\times 10^4\\text{ N/C}$.',
      'The direction of $E$ for a positive test charge is the same as the direction of force: $15^\\circ$ North of East.'
    ],
    finalAnswer: '$4.0 \\times 10^4\\text{ N/C}$ at $15^circ$ North of East'
  },
  {
    id: 'phys12g-q6',
    qNumber: 6,
    title: 'Electric Field Strength around a Point Charge',
    titleAr: 'حساب شدة المجال الكهربائي على مسافة من شحنة نقطية',
    learningOutcome: 'Calculate the electric field produced by a point charge using $E = K q / r^2$.',
    learningOutcomeAr: 'حساب شدة المجال الكهربائي المتولد عن شحنة نقطية باستخدام $E = K q / r^2$.',
    unit: 2,
    lesson: 'Lesson 2.1: Electric Fields / المجال الكهربائي',
    page: 36,
    exerciseRef: 'Student Book - p.36 Q59',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'What is the electric field strength at a distance of $20.0\\text{ cm}$ ($0.20\\text{ m}$) from a point charge $q = +8.0 \\times 10^{-7}\\text{ C}$?',
    questionTextAr: 'ما شدة المجال الكهربائي على بعد $20.0\\text{ cm}$ ($0.20\\text{ m}$) من شحنة نقطية مقدارها $+8.0 \\times 10^{-7}\\text{ C}$؟',
    options: [
      { id: 'A', text: '$1.8 \\times 10^5\\text{ N/C}$' },
      { id: 'B', text: '$3.6 \\times 10^4\\text{ N/C}$' },
      { id: 'C', text: '$7.2 \\times 10^3\\text{ N/C}$' },
      { id: 'D', text: '$9.0 \\times 10^5\\text{ N/C}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Point charge field formula: $E = \\frac{K q}{r^2}$.',
      'Distance $r = 0.20\\text{ m}$.',
      '$E = \\frac{(9.0 \\times 10^9) \\times (8.0 \\times 10^{-7})}{(0.20)^2} = \\frac{7200}{0.04} = 1.8 \\times 10^5\\text{ N/C}$.'
    ],
    finalAnswer: '$1.8 \\times 10^5\\text{ N/C}$'
  },
  {
    id: 'phys12g-q7',
    qNumber: 7,
    title: 'Work Done Moving a Charge in an Electric Potential Difference',
    titleAr: 'حساب الشغل المبذول لنقل شحنة كهربائية عبر فرق جهد',
    learningOutcome: 'Apply $W = q \\Delta V$ to calculate the work required to move a charge through a potential difference.',
    learningOutcomeAr: 'تطبيق $W = q \\Delta V$ لحساب الشغل المبذول لنقل شحنة بين نقطتين بينهما فرق جهد.',
    unit: 2,
    lesson: 'Lesson 2.2: Potential Difference & Energy / فرق الجهد والطاقة',
    page: 37,
    exerciseRef: 'Student Book - p.37 Q26',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'How much work is required to move a charge $q = 3.0\\text{ C}$ through an electric potential difference $\\Delta V = 1.5\\text{ V}$?',
    questionTextAr: 'ما الشغل المبذول لنقل شحنة تبلغ $3.0\\text{ C}$ من خلال فرق جهد كهربائي يساوي $1.5\\text{ V}$؟',
    options: [
      { id: 'A', text: '$4.5\\text{ J}$' },
      { id: 'B', text: '$2.0\\text{ J}$' },
      { id: 'C', text: '$0.5\\text{ J}$' },
      { id: 'D', text: '$6.75\\text{ J}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Formula relating work, charge, and potential difference: $W = q \\Delta V$.',
      '$W = 3.0\\text{ C} \\times 1.5\\text{ V} = 4.5\\text{ J}$.'
    ],
    finalAnswer: '$4.5\\text{ J}$'
  },
  {
    id: 'phys12g-q8',
    qNumber: 8,
    title: 'Uniform Electric Field between Parallel Conductive Plates',
    titleAr: 'المجال الكهربائي المنتظم وفرق الجهد بين لوحين متوازيين',
    learningOutcome: 'Relate potential difference, electric field, and plate separation using $\\Delta V = E d$.',
    learningOutcomeAr: 'ربط فرق الجهد والمجال الكهربائي المنتظم والمسافة بين اللوحين $\\Delta V = E d$.',
    unit: 2,
    lesson: 'Lesson 2.2: Uniform Electric Fields / المجال الكهربائي المنتظم',
    page: 36,
    exerciseRef: 'Student Book - p.36 Example 3',
    type: 'mcq',
    imageSvgType: 'phys12g_parallel_plates',
    examYear: '2025/2026',
    questionText: 'Two parallel charged plates are separated by $1.5\\text{ cm}$ ($0.015\\text{ m}$). The uniform electric field between them is $1800\\text{ N/C}$. What is the potential difference $\\Delta V$ between the plates?',
    questionTextAr: 'لوحان متوازيان مشحونان تفصلهما مسافة $1.5\\text{ cm}$ ($0.015\\text{ m}$). شدة المجال الكهربائي المنتظم بينهما $1800\\text{ N/C}$. ما مقدار فرق الجهد الكهربائي بين اللوحين؟',
    options: [
      { id: 'A', text: '$27\\text{ V}$' },
      { id: 'B', text: '$120\\text{ V}$' },
      { id: 'C', text: '$2.7 \\times 10^3\\text{ V}$' },
      { id: 'D', text: '$18\\text{ V}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Uniform field formula: $\\Delta V = E d$.',
      'Convert distance to meters: $d = 1.5\\text{ cm} = 0.015\\text{ m}$.',
      '$\\Delta V = 1800\\text{ N/C} \\times 0.015\\text{ m} = 27\\text{ V}$.'
    ],
    finalAnswer: '$27\\text{ V}$'
  },
  {
    id: 'phys12g-q9',
    qNumber: 9,
    title: 'Millikan Oil Drop Experiment & Charge Quantification',
    titleAr: 'تجربة قطرة الزيت لميليكان وحساب الشغل المنجز في المجال',
    learningOutcome: 'Apply conditions for electrostatic equilibrium in Millikan\'s oil drop experiment ($q E = m g$).',
    learningOutcomeAr: 'تطبيق شروط الاتزان الكهروستاتيكي في تجربة ميليكان $q E = m g$ لحساب الشحنة أو المجال الكهربائي.',
    unit: 2,
    lesson: 'Lesson 2.2: Millikan Oil Drop Experiment / تجربة قطرة الزيت لميليكان',
    page: 38,
    exerciseRef: 'Student Book - p.38 Q33',
    type: 'mcq',
    imageSvgType: 'phys12g_millikan_experiment',
    examYear: '2025/2026',
    questionText: 'An oil drop carries one extra elementary electron ($q = 1.6 \\times 10^{-19}\\text{ C}$) and has a weight of $F_g = 6.4 \\times 10^{-15}\\text{ N}$. What electric field strength $E$ is required to suspend the oil drop motionless in mid-air?',
    questionTextAr: 'تحمل قطرة زيت إلكتروناً زائداً ($q = 1.6 \\times 10^{-19}\\text{ C}$) ووزنها $F_g = 6.4 \\times 10^{-15}\\text{ N}$. ما شدة المجال الكهربائي اللازم لتعليق القطرة لتبقى معلقة بلا حركة؟',
    options: [
      { id: 'A', text: '$4.0 \\times 10^4\\text{ N/C}$' },
      { id: 'B', text: '$1.0 \\times 10^{-33}\\text{ N/C}$' },
      { id: 'C', text: '$1.6 \\times 10^5\\text{ N/C}$' },
      { id: 'D', text: '$2.5 \\times 10^4\\text{ N/C}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'For the oil drop to be suspended in equilibrium: $F_e = F_g \\implies q E = F_g$.',
      'Solve for $E$: $E = \\frac{F_g}{q}$.',
      'Substitute values: $E = \\frac{6.4 \\times 10^{-15}\\text{ N}}{1.6 \\times 10^{-19}\\text{ C}} = 4.0 \\times 10^4\\text{ N/C}$.'
    ],
    finalAnswer: '$4.0 \\times 10^4\\text{ N/C}$'
  },
  {
    id: 'phys12g-q10',
    qNumber: 10,
    title: 'Potential Difference in Parallel Plates with Work',
    titleAr: 'حساب فرق الجهد من الشغل المبذول بين لوحين متوازيين',
    learningOutcome: 'Calculate electric potential difference from work and charge using $\\Delta V = W / q$.',
    learningOutcomeAr: 'حساب فرق الجهد الكهربائي بمعلومية الشغل المنجز والشحنة $\\Delta V = W / q$.',
    unit: 2,
    lesson: 'Lesson 2.2: Potential Difference / فرق الجهد الكهربائي',
    page: 38,
    exerciseRef: 'Student Book - p.38 Q73',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'If $120\\text{ J}$ of work is required to move a charge $q = 2.4\\text{ C}$ from the positive plate to the negative plate, what is the electric potential difference $\\Delta V$ between the plates?',
    questionTextAr: 'إذا بذل شغل مقداره $120\\text{ J}$ لتحريك شحنة مقدارها $2.4\\text{ C}$ من اللوح الموجب إلى اللوح السالم. فما فرق الجهد الكهربائي بين اللوحين؟',
    options: [
      { id: 'A', text: '$50\\text{ V}$ ($5.0 \\times 10^1\\text{ V}$)' },
      { id: 'B', text: '$288\\text{ V}$' },
      { id: 'C', text: '$0.02\\text{ V}$' },
      { id: 'D', text: '$100\\text{ V}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Potential difference formula: $\\Delta V = \\frac{W}{q}$.',
      '$\\Delta V = \\frac{120\\text{ J}}{2.4\\text{ C}} = 50\\text{ V} = 5.0 \\times 10^1\\text{ V}$.'
    ],
    finalAnswer: '$50\\text{ V}$'
  },
  {
    id: 'phys12g-q11',
    qNumber: 11,
    title: 'Capacitance & Stored Charge in a Capacitor',
    titleAr: 'السعة الكهربائية وحساب الشحنة المختزنة في المكثف',
    learningOutcome: 'Apply $C = q / \\Delta V$ to find the charge stored on a capacitor.',
    learningOutcomeAr: 'تطبيق العلاقة $C = q / \\Delta V$ لإيجاد الشحنة الكهربائية المختزنة على لوحي مكثف.',
    unit: 2,
    lesson: 'Lesson 2.3: Capacitors & Capacitance / المكثفات والسعة الكهربائية',
    page: 41,
    exerciseRef: 'Student Book - p.41 Q35',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'A capacitor with capacitance $C = 27\\mu\\text{F}$ is connected across a potential difference $\\Delta V = 45\\text{ V}$. What is the magnitude of charge on its positive plate?',
    questionTextAr: 'مكثف سعته $27\\mu\\text{F}$ يمر عبره فرق جهد كهربائي مقداره $45\\text{ V}$. ما مقدار الشحنة المختزنة على صفحته الموجبة؟',
    options: [
      { id: 'A', text: '$1.2 \\times 10^{-3}\\text{ C}$ ($1.215\\text{ mC}$)' },
      { id: 'B', text: '$6.0 \\times 10^{-1}\\text{ C}$' },
      { id: 'C', text: '$1.67\\text{ C}$' },
      { id: 'D', text: '$3.5 \\times 10^{-4}\\text{ C}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Capacitance equation: $C = \\frac{q}{\\Delta V} \\implies q = C \\Delta V$.',
      'Convert $\\mu\\text{F}$ to Farads: $C = 27 \\times 10^{-6}\\text{ F}$.',
      '$q = 27 \\times 10^{-6}\\text{ F} \\times 45\\text{ V} = 1.215 \\times 10^{-3}\\text{ C} \\approx 1.2 \\times 10^{-3}\\text{ C}$.'
    ],
    finalAnswer: '$1.2 \\times 10^{-3}\\text{ C}$'
  },
  {
    id: 'phys12g-q12',
    qNumber: 12,
    title: 'Interpretation of Charge vs Potential Graph for a Capacitor',
    titleAr: 'تفسير الرسم البياني بين الشحنة وفرق الجهد للمكثف',
    learningOutcome: 'Interpret a $q - \\Delta V$ graph to determine capacitance from the line slope.',
    learningOutcomeAr: 'تفسير الرسم البياني بين الشحنة وفرق الجهد لحساب السعة الكهربائية من الميل.',
    unit: 2,
    lesson: 'Lesson 2.3: Capacitance Graphs / منحنى الشحنة وفرق الجهد',
    page: 42,
    exerciseRef: 'Student Book - p.42 Q100',
    type: 'mcq',
    imageSvgType: 'phys12g_capacitance_graph',
    examYear: '2025/2026',
    questionText: 'In a graph of charge $q\\,(\\mu\\text{C})$ versus potential difference $\\Delta V\\,(\\text{V})$ for a capacitor, a line passes through $(0,0)$ and $(30\\text{ V}, 15\\mu\\text{C})$. What property does the slope represent, and what is the capacitance?',
    questionTextAr: 'في الرسم البياني للشحنة $q\\,(\\mu\\text{C})$ مقابل فرق الجهد $\\Delta V\\,(\\text{V})$ لمكثف، يمر الخط بالنقطة $(30\\text{ V}, 15\\mu\\text{C})$. ماذا يمثل ميل الخط، وما قيمة السعة؟',
    options: [
      { id: 'A', text: 'Slope represents Capacitance $C$; $C = 0.50\\mu\\text{F}$' },
      { id: 'B', text: 'Slope represents Stored Energy; $E = 450\\text{ J}$' },
      { id: 'C', text: 'Slope represents Resistance; $R = 2.0\\,\\Omega$' },
      { id: 'D', text: 'Slope represents Electric Field; $E = 15\\text{ N/C}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Slope of $q$ vs $\\Delta V$ is: $\\text{Slope} = \\frac{\\Delta q}{\\Delta V} = C$.',
      'Calculated value: $\\text{Slope} = \\frac{15\\mu\\text{C}}{30\\text{ V}} = 0.50\\mu\\text{F}$.',
      'Therefore, the slope represents the capacitance of the capacitor $C = 0.50\\mu\\text{F}$.'
    ],
    finalAnswer: 'Slope = Capacitance C; C = 0.50 μF'
  },
  {
    id: 'phys12g-q13',
    qNumber: 13,
    title: 'Charge Distribution on Conductors vs Insulators',
    titleAr: 'توزيع الشحنات على أسطح الموصلات والعوازل الكروية والمجوفة',
    learningOutcome: 'Describe how static charge distributes on solid spherical conductors, hollow shells, and non-uniform surfaces.',
    learningOutcomeAr: 'وصف كيفية توزيع الشحنات الساكنة على الموصلات الكروية الصلبة، والمجوفة، والأسطح غير المنتظمة.',
    unit: 1,
    lesson: 'Lesson 1.1: Conductors & Insulators / الموصلات والعوازل',
    page: 20,
    exerciseRef: 'Student Book - p.20 Figure 14',
    type: 'mcq',
    imageSvgType: 'phys12g_conductor_shapes',
    examYear: '2025/2026',
    questionText: 'Where do excess static charges accumulate on a charged hollow metallic sphere conductor in electrostatic equilibrium?',
    questionTextAr: 'أين تتجمع الشحنات الكهربائية الساكنة الزائدة على موصل كروي فلزي مجوف في حالة الاتزان الكهروستاتيكي؟',
    options: [
      { id: 'A', text: 'Entirely on the outer exterior surface of the sphere / بالكامل على السطح الخارجي للكرة' },
      { id: 'B', text: 'Equally distributed on inner and outer surfaces / بالتساوي على السطحين الداخلي والخارجي' },
      { id: 'C', text: 'Entirely inside the hollow inner cavity / بالكامل داخل التجويف الداخلي' },
      { id: 'D', text: 'At the exact center point / في المركز تماماً' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Like charges repel each other as far as possible.',
      'In a hollow metallic conductor, free electrons migrate to the outer boundary.',
      'Therefore, all excess charge resides **entirely on the outer surface** (على السطح الخارجي بالكامل), making electric field inside the cavity zero.'
    ],
    finalAnswer: 'Entirely on the outer exterior surface'
  },
  {
    id: 'phys12g-q14',
    qNumber: 14,
    title: 'Electric Field Lines Representation for Point Charges',
    titleAr: 'تمثيل خطوط المجال الكهربائي حول الشحنات المفردة والمتعددة',
    learningOutcome: 'Identify correct patterns and direction of electric field lines around positive and negative point charges.',
    learningOutcomeAr: 'التعرف على أنماط واتجاه خطوط المجال الكهربائي حول الشحنات النقطية الموجبة والسالبة.',
    unit: 2,
    lesson: 'Lesson 2.1: Field Lines / خطوط المجال الكهربائي',
    page: 30,
    exerciseRef: 'Student Book - p.30 Figure 5',
    type: 'mcq',
    imageSvgType: 'phys12g_field_lines_patterns',
    examYear: '2025/2026',
    questionText: 'Which statement correctly describes electric field lines surrounding an isolated positive point charge?',
    questionTextAr: 'أي عبارة مما يلي تصف بشكل صحيح خطوط المجال الكهربائي المحيطة بشحنة نقطية موجبة معزولة؟',
    options: [
      { id: 'A', text: 'Radial lines directed outward away from the charge / خطوط شعاعية موجهة نحو الخارج بعيداً عن الشحنة' },
      { id: 'B', text: 'Radial lines directed inward toward the charge / خطوط شعاعية موجهة نحو الداخل' },
      { id: 'C', text: 'Concentric closed circular loops around the charge / دوائر مغلقة متحدة المركز' },
      { id: 'D', text: 'Parallel straight horizontal lines / خطوط مستقيمة متوازية' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'By convention, electric field lines represent the direction of force on a positive test charge.',
      'A positive test charge is repelled by a positive point charge.',
      'Hence, field lines point **radially outward** away from a positive charge.'
    ],
    finalAnswer: 'Radial lines directed outward away from charge'
  },
  {
    id: 'phys12g-q15',
    qNumber: 15,
    title: 'Lightning Rod Mechanism & Charge Concentration at Sharp Points',
    titleAr: 'آلية عمل مانعة الصواعق وتمركز الشحنات عند الرؤوس المدببة',
    learningOutcome: 'Explain how lightning conductors function based on surface charge density at sharp points.',
    learningOutcomeAr: 'شرح آلية عمل مانعات الصواعق بالاعتماد على زيادة كثافة الشحنات عند الأطراف الحادة والمدببة.',
    unit: 2,
    lesson: 'Lesson 2.3: Applications of Electrostatics / تطبيقات القوى الكهروستاتيكية',
    page: 40,
    exerciseRef: 'Student Book - p.40 Q1',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'Why are lightning rods constructed with sharp pointed metal tips on building rooftops?',
    questionTextAr: 'لماذا تُصمم مانعات الصواعق بأطراف ورؤوس فلزية حادة ومدببة أعلى المباني؟',
    options: [
      { id: 'A', text: 'Charge density is highest at pointed ends, ionizing air to safely bleed off cloud charges / لأن كثافة الشحنة تكون أعلى ما يمكن عند الأطراف المدببة مما يؤين الهواء ويعادل شحنة السحب بأمان' },
      { id: 'B', text: 'Sharp points reflect cloud charge away / لكي تعكس شحنات السحب إلى الأعلى' },
      { id: 'C', text: 'Points reduce the electrical conductivity of metal / لتقليل الموصلية الكهربائية للفلز' },
      { id: 'D', text: 'Pointed tips store electrical voltage permanently / لتخزين الجهد الكهربائي بشكل دائم' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'On non-uniform conductors, charges concentrate at regions with smaller radius of curvature (sharp points).',
      'High electric fields at these points ionize surrounding air molecules, providing a safe grounding path for storm cloud discharge.'
    ],
    finalAnswer: 'Charge density is highest at sharp pointed ends'
  },
  {
    id: 'phys12g-q16',
    qNumber: 16,
    title: 'Charge Sharing Between Two Conductive Spheres',
    titleAr: 'مشاركة الشحنة بين كرتين موصلتين متلامستين',
    learningOutcome: 'Analyze charge redistribution when two conducting objects touch and separate.',
    learningOutcomeAr: 'تحليل إعادة توزيع الشحنة عند تلامس جسمين موصلين وانفصالهما.',
    unit: 1,
    lesson: 'Lesson 1.1: Conduction / الشحن بالتوصيل',
    page: 28,
    exerciseRef: 'Student Book - p.28 Q47',
    type: 'mcq',
    examYear: '2025/2026',
    questionText: 'When a large charged conducting sphere touches a smaller uncharged neutral conducting sphere, how do their final potential and charge compare?',
    questionTextAr: 'عند تلامس كرة موصلة كبيرة مشحونة مع كرة موصلة صغيرة متعادلة، كيف يتساوى الجهد والشحنة بينهما عند الاتزان؟',
    options: [
      { id: 'A', text: 'They reach equal electric potential; the larger sphere holds more charge / يتساوى جهدهما الكهربائي وتكون شحنة الكرة الكبيرة أكبر' },
      { id: 'B', text: 'They hold equal net charges / تمتلكان نفس مقدار الشحنة تماماً' },
      { id: 'C', text: 'The smaller sphere loses all charge / تفرغ الكرة الصغيرة شحنتها بالكامل' },
      { id: 'D', text: 'The smaller sphere achieves higher potential / يصبح جهد الكرة الصغيرة أعلى' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'When conductors touch, charge flows until both reach the same electric potential ($V_1 = V_2$).',
      'Since $V = \\frac{K q}{R}$, the object with larger radius $R$ holds a larger share of charge $q$.',
      'Therefore, potentials are equal, but the larger sphere retains a greater quantity of charge.'
    ],
    finalAnswer: 'Equal electric potential; larger sphere holds more charge'
  },

  // --- PAPER BASED FRQ QUESTIONS (17 to 20 / Q1 to Q4) ---
  {
    id: 'phys12g-paper-q1',
    qNumber: 'Q1 (Paper)',
    title: 'Electrostatic Induction & Attraction of Neutral Objects',
    titleAr: 'السؤال الأول كتابي: التجاذب الكهروستاتيكي وتأثير الحث على الأجسام المتعادلة',
    learningOutcome: 'Explain why charged objects attract neutral light items (paper bits, comb, balloons) using electrostatic induction.',
    learningOutcomeAr: 'تفسير تجاذب المشط أو البالون المشحون مع قصاصات الورق المتعادلة باستخدام ظاهرة الاستقطاب والحث الكهروستاتيكي.',
    unit: 1,
    lesson: 'Lesson 1.1: Electrostatic Attraction / التجاذب الكهروستاتيكي',
    page: 23,
    exerciseRef: 'Student Book - p.23 Q24 & Q25',
    type: 'paper',
    examYear: '2025/2026',
    questionText: `**Answer the following conceptual questions in full detail:**

1. **Comb & Paper Attraction:**
Explain why a plastic comb charged by rubbing through hair attracts small neutral pieces of paper. What happens when the paper touches the comb?

2. **Electroscope & Conservation of Charge:**
If you brush dry hair on a dry day, your hair stands up and sticks to the hairbrush. Is charge created in this process? Explain using the Law of Conservation of Charge.`,
    questionTextAr: `**أجب عن الأسئلة المفهومية التالية بالتفصيل:**

1. **تجاذب المشط وقصاصات الورق:**
فسر لماذا يجذب المشط البلاستيكي المشحون بعد دلكه بالشعر قصاصات الورق المتعادلة الصغير. وماذا يحدث بعد أن تلمس قصاصات الورق المشط؟

2. **قانون حفظ الشحنة:**
إذا قمت بتمشيط شعرك الجاف في يوم جاف، فإن شعر يتنافر ويلتصق بالفرشاة. هل استحدثت شحنة جديدة في هذه العملية؟ فسر ذلك بناءً على قانون حفظ الشحنة.`,
    solutionSteps: [
      '--- Part 1: Comb & Paper Attraction ---',
      '• Step 1 (Induction / Polarization): The charged comb creates an electric field that polarizes neutral paper bits, attracting opposite charges toward the edge near the comb.',
      '• Step 2 (Attraction Force): The attractive force on the closer opposite charges overcomes gravity and repels liked charges further away, pulling the paper up.',
      '• Step 3 (Contact & Repulsion): Upon direct contact with the comb, paper bits gain the same sign charge by conduction and are repelled away.',
      '--- Part 2: Conservation of Charge ---',
      '• Charge is NOT created ($q_{\\text{created}} = 0$).',
      '• Friction transfers pre-existing valence electrons from hair to the comb/brush.',
      '• Hair becomes positively charged while the brush becomes negatively charged with equal magnitude. Total net charge remains constant.'
    ],
    finalAnswer: '1) Polarization attracts paper; contact transfers charge causing repulsion. 2) No new charge is created; electrons transfer according to Law of Conservation of Charge.'
  },
  {
    id: 'phys12g-paper-q2',
    qNumber: 'Q2 (Paper)',
    title: 'Net Electrostatic Force Vectors on Multiple Point Charges in 1D',
    titleAr: 'السؤال الثاني كتابي: حساب محصلة القوة الكهروستاتيكية المتجهة على شحنة بين شحنتين',
    learningOutcome: 'Calculate the net electrostatic force vector on a central point charge exerted by surrounding charges using vector addition.',
    learningOutcomeAr: 'حساب محصلة القوة الكهروستاتيكية المتجهة على شحنة تقع بين شحنتين باستخدام قانون كولوم وجمع المتجهات.',
    unit: 1,
    lesson: 'Lesson 1.2: Coulomb\'s Law in 1D / قانون كولوم لمحصلة القوى',
    page: 27,
    exerciseRef: 'Student Book - p.27 Q3',
    type: 'paper',
    imageSvgType: 'phys12g_three_charges_line',
    examYear: '2025/2026',
    questionText: `Three point charges are aligned horizontally along the x-axis:
• Charge $A = +8.5 \\times 10^{-6}\\text{ C}$ ($+8.5\\mu\\text{C}$)
• Charge $B = +3.1 \\times 10^{-6}\\text{ C}$ ($+3.1\\mu\\text{C}$) located at distance $d_{AB} = 4.2\\text{ cm} = 0.042\\text{ m}$ to the right of A.
• Charge $C = +6.4 \\times 10^{-6}\\text{ C}$ ($+6.4\\mu\\text{C}$) located at distance $d_{BC} = 2.9\\text{ cm} = 0.029\\text{ m}$ to the right of B.

1. Calculate force $F_{A \\text{ on } B}$ exerted by Charge A on Charge B.
2. Calculate force $F_{C \\text{ on } B}$ exerted by Charge C on Charge B.
3. Determine the net electrostatic force $F_{\\text{net}}$ acting on Charge B (magnitude and direction).`,
    questionTextAr: `تقع ثلاث شحنات نقطية A و B و C على خط مستقيم واحد كالتالي:
• الشحنة $A = +8.5 \\times 10^{-6}\\text{ C}$
• الشحنة $B = +3.1 \\times 10^{-6}\\text{ C}$ تقع على مسافة $d_{AB} = 4.2\\text{ cm} = 0.042\\text{ m}$ على يمين A.
• الشحنة $C = +6.4 \\times 10^{-6}\\text{ C}$ تقع على مسافة $d_{BC} = 2.9\\text{ cm} = 0.029\\text{ m}$ على يمين B.

1. احسب القوة $F_{A \\text{ on } B}$ التي تؤثر بها الشحنة A على الشحنة B.
2. احسب القوة $F_{C \\text{ on } B}$ التي تؤثر بها الشحنة C على الشحنة B.
3. أوجد محصلة القوة الكهروستاتيكية $F_{\\text{net}}$ المؤثرة على الشحنة B (المقدار والاتجاه).`,
    solutionSteps: [
      '--- Step 1: Force exerted by A on B ($F_{A \\text{ on } B}$) ---',
      '$F_{AB} = \\frac{K |q_A q_B|}{d_{AB}^2} = \\frac{(9.0 \\times 10^9) \\times (8.5 \\times 10^{-6}) \\times (3.1 \\times 10^{-6})}{(0.042)^2}$.',
      '$F_{AB} = \\frac{0.23715}{0.001764} \\approx 134.4\\text{ N}$ (Repulsive $\\implies$ directed to the RIGHT / نحو اليمين, $+x$).',
      '--- Step 2: Force exerted by C on B ($F_{C \\text{ on } B}$) ---',
      '$F_{CB} = \\frac{K |q_C q_B|}{d_{BC}^2} = \\frac{(9.0 \\times 10^9) \\times (6.4 \\times 10^{-6}) \\times (3.1 \\times 10^{-6})}{(0.029)^2}$.',
      '$F_{CB} = \\frac{0.17856}{0.000841} \\approx 212.3\\text{ N}$ (Repulsive $\\implies$ directed to the LEFT / نحو اليسار, $-x$).',
      '--- Step 3: Net Force $F_{\\text{net}}$ on Charge B ---',
      '$F_{\\text{net}} = F_{AB} - F_{CB} = 134.4\\text{ N} - 212.3\\text{ N} = -77.9\\text{ N}$.',
      'Magnitude: $77.9\\text{ N} \\approx 78\\text{ N}$. Direction: Toward Charge A (To the left / نحو اليسار).'
    ],
    finalAnswer: 'F_AB = 134.4 N (Right), F_CB = 212.3 N (Left), F_net = 78 N to the Left (toward A)'
  },
  {
    id: 'phys12g-paper-q3',
    qNumber: 'Q3 (Paper)',
    title: 'Van de Graaff Generator Mechanism & Electric Field Inside Conductors',
    titleAr: 'السؤال الثالث كتابي: آلية عمل مولد فان دي غراف وتوزيع الشحنة والمجال داخل الموصل',
    learningOutcome: 'Analyze the construction and operational principles of a Van de Graaff generator and hollow sphere conductors.',
    learningOutcomeAr: 'تحليل تركيبة وآلية عمل مولد فان دي غراف ودراسة خلو التجويف الداخلي من المجال الكهربائي.',
    unit: 2,
    lesson: 'Lesson 2.3: Van de Graaff Generator / مولد فان دي غراف',
    page: 28,
    exerciseRef: 'Student Book - p.28 Figure 7 & Q48',
    type: 'paper',
    imageSvgType: 'phys12g_vande_graaff',
    examYear: '2025/2026',
    questionText: `**Answer the following regarding the Van de Graaff Generator:**

1. **Working Principle:**
Describe how a belt-driven Van de Graaff generator transfers charge to the outer hollow metallic dome.

2. **Field Inside the Dome:**
Why does no electric field exist inside the hollow metallic dome when it is heavily charged? Explain why person touching the dome experiences standing hair without receiving a high voltage shock inside.`,
    questionTextAr: `**أجب عن الأسئلة التالية المتعلقة بمولد فان دي غراف:**

1. **مبدأ العمل:**
اشرح كيف ينقل حزام الدلك الشحنات الكهربائية إلى القبة المعدنية المجوفة لمولد فان دي غراف.

2. **المجال داخل القبة:**
لماذا ينعدم المجال الكهربائي داخل القبة المعدنية المجوفة رغم شحنها بشحنة عالية؟ وضح سبب انتصاب شعر شخص يلمس المولد من الخارج دون أن يصاب بصدمة من الداخل.`,
    solutionSteps: [
      '--- Part 1: Working Principle ---',
      '• A motor drives a rubber belt over rollers, creating static charge via friction.',
      '• A sharp comb electrode sprays charge onto the moving belt.',
      '• The upper electrode inside the metallic dome collects the charge from the belt and conducts it directly to the OUTER surface of the hollow sphere.',
      '--- Part 2: Electric Field & Shielding ---',
      '• Electric Field Inside ($E_{\\text{inside}} = 0$): Charges repel to the maximum distance, spreading entirely on the outer surface. Hence, the interior cavity is electrostatically shielded (Faraday cage effect).',
      '• Person touching the outside dome becomes charged with the same polarity. Repulsion between individual hair strands causes hair to stand upright.'
    ],
    finalAnswer: '1) Belt carries charge from lower roller to inner upper comb, conducting charge to dome outer surface. 2) E_inside = 0 due to electrostatic shielding; hair stands due to like-charge repulsion.'
  },
  {
    id: 'phys12g-paper-q4',
    qNumber: 'Q4 (Paper)',
    title: 'Electric Field Vectors in 2D Triangle Configuration',
    titleAr: 'السؤال الرابع كتابي: حساب محصلة المجال الكهربائي المتجه عند رأس مثلث متساوي الأضلاع',
    learningOutcome: 'Calculate the net electric field vector produced by two point charges at a 2D location using vector components.',
    learningOutcomeAr: 'حساب محصلة المجال الكهربائي المتجه المتولد عن شحنتين عند نقطة تشكل رأس مثلث متساوي الأضلاع.',
    unit: 2,
    lesson: 'Lesson 2.1: Electric Field in 2D / المجال الكهربائي في بعدين',
    page: 29,
    exerciseRef: 'Student Book - p.29 Q101',
    type: 'paper',
    imageSvgType: 'phys12g_2d_field_triangle',
    examYear: '2025/2026',
    questionText: `Two small charged spheres $A$ and $B$ are placed on the x-axis separated by $d = 0.800\\text{ m}$:
• Charge $A = +3.00 \\times 10^{-6}\\text{ C}$
• Charge $B = -5.00 \\times 10^{-6}\\text{ C}$

Calculate the magnitude and direction of the net electric field $E_{\\text{net}}$ at a point $P$ above the x-axis such that $A$, $B$, and $P$ form an equilateral triangle with side lengths $r = 0.800\\text{ m}$.`,
    questionTextAr: `وضعت الكرتان المشحونتان A و B على المحور x وتبعدان بمسافة $0.800\\text{ m}$:
• الشحنة $A = +3.00 \\times 10^{-6}\\text{ C}$
• الشحنة $B = -5.00 \\times 10^{-6}\\text{ C}$

احسب مقدار واتجاه محصلة المجال الكهربائي $E_{\\text{net}}$ عند نقطة P تقع أعلى المحور x وتشكل مع A و B مثلثاً متساوي الأضلاع طول ضلعه $r = 0.800\\text{ m}$.`,
    solutionSteps: [
      '--- Step 1: Magnitude of individual electric fields at P ($r = 0.800\\text{ m}$) ---',
      '$E_A = \\frac{K |q_A|}{r^2} = \\frac{(9.0 \\times 10^9) \\times (3.00 \\times 10^{-6})}{(0.800)^2} = \\frac{27000}{0.64} = 4.21875 \\times 10^4\\text{ N/C}$.',
      '$E_B = \\frac{K |q_B|}{r^2} = \\frac{(9.0 \\times 10^9) \\times (5.00 \\times 10^{-6})}{(0.800)^2} = \\frac{45000}{0.64} = 7.03125 \\times 10^4\\text{ N/C}$.',
      '--- Step 2: Vector directions in Equilateral Triangle ($60^\\circ$ angles) ---',
      '• Field $E_A$ points AWAY from A (along line AP at angle $60^\\circ$).',
      '• Field $E_B$ points TOWARD B (along line PB at angle $-60^\\circ$ or $300^\\circ$).',
      '--- Step 3: Vector Components ---',
      '$E_{Ax} = E_A \\cos(60^\\circ) = 4.219 \\times 10^4 \\times 0.5 = 2.109 \\times 10^4\\text{ N/C}$.',
      '$E_{Ay} = E_A \\sin(60^\\circ) = 4.219 \\times 10^4 \\times 0.866 = 3.653 \\times 10^4\\text{ N/C}$.',
      '$E_{Bx} = E_B \\cos(-60^\\circ) = 7.031 \\times 10^4 \\times 0.5 = 3.516 \\times 10^4\\text{ N/C}$.',
      '$E_{By} = E_B \\sin(-60^\\circ) = 7.031 \\times 10^4 \\times (-0.866) = -6.089 \\times 10^4\\text{ N/C}$.',
      '--- Step 4: Sum of Components & Net Field ---',
      '$E_{net,x} = E_{Ax} + E_{Bx} = 2.109 \\times 10^4 + 3.516 \\times 10^4 = 5.625 \\times 10^4\\text{ N/C}$.',
      '$E_{net,y} = E_{Ay} + E_{By} = 3.653 \\times 10^4 - 6.089 \\times 10^4 = -2.436 \\times 10^4\\text{ N/C}$.',
      '$E_{\\text{net}} = \\sqrt{(5.625)^2 + (-2.436)^2} \\times 10^4 \\approx 6.13 \\times 10^4\\text{ N/C}$.',
      'Angle $\\theta = \\tan^{-1}\\left(\\frac{-2.436}{5.625}\\right) \\approx -23.4^\\circ$ (below the $+x$ axis).'
    ],
    finalAnswer: 'E_net = 6.13 × 10^4 N/C at angle 23.4° below positive x-axis'
  }
];
