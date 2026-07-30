import { IgQuestion } from '../types';

export const QUESTIONS_2004_MJ: IgQuestion[] = [
  // MAY/JUNE 2004 - PAPER 1 (0580/01)
  {
    id: 'IG-2004-MJ-01-01',
    code: '0580/01/M/J/04 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Basic Arithmetic',
    topicAr: 'الحساب الأساسي',
    questionEn: 'Calculate: 43 - 52',
    questionAr: 'احسب: 43 - 52',
    options: [
      { id: 'A', textEn: '-9', textAr: '-9' },
      { id: 'B', textEn: '9', textAr: '9' },
      { id: 'C', textEn: '-11', textAr: '-11' },
      { id: 'D', textEn: '95', textAr: '95' }
    ],
    correctAnswer: 'A',
    explanationEn: '43 - 52 = -9.',
    explanationAr: '43 - 52 = -9.',
    solutionStepsEn: ['Step 1: Subtract 52 from 43 to get -9.'],
    solutionStepsAr: ['الخطوة 1: اطرح 52 من 43 لتحصل على -9.'],
    marks: 1
  },
  {
    id: 'IG-2004-MJ-01-02',
    code: '0580/01/M/J/04 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Directed Numbers & Altitude',
    topicAr: 'الأعداد الموجهة والارتفاعات',
    questionEn: 'The Dead Sea coast is 395 metres below sea level (-395 m). Hebron is 447 metres above sea level (+447 m). Find the difference in altitude between them.',
    questionAr: 'يقع ساحل البحر الميت على ارتفاع 395 متراً تحت مستوى سطح البحر (-395 م). وتقع مدينة الخليل على ارتفاع 447 متراً فوق مستوى سطح البحر (+447 م). أوجد الفرق في الارتفاع بينهما.',
    options: [
      { id: 'A', textEn: '842 metres', textAr: '842 متراً' },
      { id: 'B', textEn: '52 metres', textAr: '52 متراً' },
      { id: 'C', textEn: '-842 metres', textAr: '-842 متراً' },
      { id: 'D', textEn: '742 metres', textAr: '742 متراً' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Difference = 447 - (-395) = 447 + 395 = 842 metres.',
    explanationAr: 'الفرق = 447 - (-395) = 447 + 395 = 842 متراً.',
    solutionStepsEn: ['Step 1: Difference = 447 - (-395).', 'Step 2: 447 + 395 = 842 m.'],
    solutionStepsAr: ['الخطوة 1: الفرق = 447 - (-395).', 'الخطوة 2: 447 + 395 = 842 متراً.'],
    marks: 1
  },
  {
    id: 'IG-2004-MJ-01-03',
    code: '0580/01/M/J/04 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Fractions & Decimals Conversion',
    topicAr: 'تحويل الكسور والأعداد العشرية',
    questionEn: 'Write as a fraction in its simplest form: (a) 75%, (b) 0.07.',
    questionAr: 'اكتب ككسر في أبسط صورة: (أ) 75%، (ب) 0.07.',
    options: [
      { id: 'A', textEn: '(a) 3/4, (b) 7/100', textAr: '(أ) 3/4، (ب) 7/100' },
      { id: 'B', textEn: '(a) 75/10, (b) 7/10', textAr: '(أ) 75/10، (ب) 7/10' },
      { id: 'C', textEn: '(a) 1/4, (b) 7/100', textAr: '(أ) 1/4، (ب) 7/100' },
      { id: 'D', textEn: '(a) 3/4, (b) 7/10', textAr: '(أ) 3/4، (ب) 7/10' }
    ],
    correctAnswer: 'A',
    explanationEn: '75% = 75/100 = 3/4. 0.07 = 7/100.',
    explanationAr: '75% = 75/100 = 3/4. 0.07 = 7/100.',
    solutionStepsEn: ['Step 1: 75 / 100 simplifies to 3/4 by dividing by 25.', 'Step 2: 0.07 has two decimal places, so it equals 7/100.'],
    solutionStepsAr: ['الخطوة 1: 75 ÷ 100 تبسط إلى 3/4 بعد القسمة على 25.', 'الخطوة 2: 0.07 تحتوي على منزلتين عشرية إذن تساوي 7/100.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-04',
    code: '0580/01/M/J/04 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Number Properties',
    topicAr: 'خواص الأعداد',
    questionEn: 'From the list [21, 35, 49, 31, 24], write down: (a) a square number, (b) a prime number.',
    questionAr: 'من القائمة [21, 35, 49, 31, 24]، اكتب: (أ) عدداً مربعاً، (ب) عدداً أولياً.',
    options: [
      { id: 'A', textEn: '(a) 49, (b) 31', textAr: '(أ) 49، (ب) 31' },
      { id: 'B', textEn: '(a) 24, (b) 35', textAr: '(أ) 24، (ب) 35' },
      { id: 'C', textEn: '(a) 21, (b) 49', textAr: '(أ) 21، (ب) 49' },
      { id: 'D', textEn: '(a) 49, (b) 21', textAr: '(أ) 49، (ب) 21' }
    ],
    correctAnswer: 'A',
    explanationEn: '49 = 7² (square number). 31 has no factors other than 1 and itself (prime number).',
    explanationAr: '49 = 7² (عدد مربع). 31 لا يقبل القسمة إلا على 1 ونفسه (عدد أولي).',
    solutionStepsEn: ['Step 1: Check 49 = 7² => square.', 'Step 2: Check 31 => prime.'],
    solutionStepsAr: ['الخطوة 1: 49 = 7² إذن هو عدد مربع.', 'الخطوة 2: 31 عدد أولي.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-05',
    code: '0580/01/M/J/04 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Scale Drawing',
    topicAr: 'مقياس الرسم',
    questionEn: 'A model car has a scale of 1:25. The length of the model is 18 cm. Calculate the actual length of the car in metres.',
    questionAr: 'نموذج سيارة بمقياس رسم 1:25. طول النموذج 18 سم. احسب الطول الفعلي للسيارة بوحدة المتر.',
    options: [
      { id: 'A', textEn: '4.5 m', textAr: '4.5 أمتار' },
      { id: 'B', textEn: '450 m', textAr: '450 متراً' },
      { id: 'C', textEn: '0.72 m', textAr: '0.72 متر' },
      { id: 'D', textEn: '3.6 m', textAr: '3.6 أمتار' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Actual length = 18 cm × 25 = 450 cm = 450 / 100 = 4.5 metres.',
    explanationAr: 'الطول الفعلي = 18 سم × 25 = 450 سم = 4.5 أمتار.',
    solutionStepsEn: ['Step 1: Multiply 18 by 25 = 450 cm.', 'Step 2: Convert to metres: 450 / 100 = 4.5 m.'],
    solutionStepsAr: ['الخطوة 1: اضرب 18 في 25 = 450 سم.', 'الخطوة 2: حول إلى أمتار: 450 ÷ 100 = 4.5 م.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-06',
    code: '0580/01/M/J/04 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Fractions Subtraction',
    topicAr: 'طرح الكسور',
    questionEn: 'Without using a calculator, calculate 2 (1/4) - 1/2 as a single fraction in its simplest form.',
    questionAr: 'بدون استخدام الآلة الحاسبة، احسب 2 (1/4) - 1/2 على شكل كسر واحد في أبسط صورة.',
    options: [
      { id: 'A', textEn: '7/4', textAr: '7/4' },
      { id: 'B', textEn: '5/4', textAr: '5/4' },
      { id: 'C', textEn: '3/4', textAr: '3/4' },
      { id: 'D', textEn: '9/4', textAr: '9/4' }
    ],
    correctAnswer: 'A',
    explanationEn: '2 (1/4) = 9/4. 1/2 = 2/4. Result = 9/4 - 2/4 = 7/4 (or 1 3/4).',
    explanationAr: '2 (1/4) = 9/4. 1/2 = 2/4. الناتج = 9/4 - 2/4 = 7/4.',
    solutionStepsEn: ['Step 1: Convert 2 1/4 to improper fraction: 9/4.', 'Step 2: Convert 1/2 to equivalent fraction with denominator 4: 2/4.', 'Step 3: 9/4 - 2/4 = 7/4.'],
    solutionStepsAr: ['الخطوة 1: تحويل 2 وربع إلى كسر غير حقيقي: 9/4.', 'الخطوة 2: توحيد المقام: 1/2 = 2/4.', 'الخطوة 3: 9/4 - 2/4 = 7/4.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-07',
    code: '0580/01/M/J/04 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Upper and Lower Bounds',
    topicAr: 'الحدود الدنيا والعليا',
    questionEn: 'Sergio\'s height is 142 cm, rounded to the nearest centimetre. Complete the statement: ___ cm ≤ height < ___ cm.',
    questionAr: 'طول سيرجيو هو 142 سم، مقرباً إلى أقرب سنتيمتر. أكمل العبارة: ___ سم ≤ الطول < ___ سم.',
    options: [
      { id: 'A', textEn: '141.5 ≤ height < 142.5', textAr: '141.5 ≤ الطول < 142.5' },
      { id: 'B', textEn: '141.0 ≤ height < 143.0', textAr: '141.0 ≤ الطول < 143.0' },
      { id: 'C', textEn: '141.5 ≤ height ≤ 142.5', textAr: '141.5 ≤ الطول ≤ 142.5' },
      { id: 'D', textEn: '140.0 ≤ height < 145.0', textAr: '140.0 ≤ الطول < 145.0' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Margin of error is 0.5 cm. Lower bound = 142 - 0.5 = 141.5 cm. Upper bound = 142 + 0.5 = 142.5 cm.',
    explanationAr: 'هامش الخطأ هو 0.5 سم. الحد الأدنى = 141.5، والحد الأعلى = 142.5.',
    solutionStepsEn: ['Step 1: Half of 1 cm = 0.5 cm.', 'Step 2: Lower bound = 142 - 0.5 = 141.5 cm.', 'Step 3: Upper bound = 142 + 0.5 = 142.5 cm.'],
    solutionStepsAr: ['الخطوة 1: نصف السنتيمتر = 0.5 سم.', 'الخطوة 2: الحد الأدنى = 141.5 سم.', 'الخطوة 3: الحد الأعلى = 142.5 سم.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-08',
    code: '0580/01/M/J/04 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Factorisation',
    topicAr: 'التحليل الجبري',
    questionEn: 'Factorise completely: 4xy - 6xz',
    questionAr: 'حلل المقدار تحليلاً كاملاً: 4xy - 6xz',
    options: [
      { id: 'A', textEn: '2x(2y - 3z)', textAr: '2x(2y - 3z)' },
      { id: 'B', textEn: 'x(4y - 6z)', textAr: 'x(4y - 6z)' },
      { id: 'C', textEn: '2(2xy - 3xz)', textAr: '2(2xy - 3xz)' },
      { id: 'D', textEn: '2x(2y + 3z)', textAr: '2x(2y + 3z)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The highest common factor of 4xy and 6xz is 2x. So 4xy - 6xz = 2x(2y - 3z).',
    explanationAr: 'العامل المشترك الأكبر هو 2x. إذن 4xy - 6xz = 2x(2y - 3z).',
    solutionStepsEn: ['Step 1: HCF of 4 and 6 is 2.', 'Step 2: Common variable is x.', 'Step 3: Factor out 2x: 2x(2y - 3z).'],
    solutionStepsAr: ['الخطوة 1: ع.م.أ للأعداد 4 و 6 هو 2.', 'الخطوة 2: الرمز المشترك هو x.', 'الخطوة 3: إخراج 2x عامل مشترك => 2x(2y - 3z).'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-10',
    code: '0580/01/M/J/04 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Symmetry of Quadrilaterals',
    topicAr: 'تناظر الأشكال الرباعية',
    questionEn: 'For the kite shown in the diagram, write down: (a) the number of lines of symmetry, (b) the order of rotational symmetry.',
    questionAr: 'بالنسبة لشكل الطائرة الورقية (Kite) الموضحة، اكتب: (أ) عدد خطوط التناظر، (ب) رتبة التناظر الدوراني.',
    diagramTitle: 'Kite Symmetry / تناظر الطائرة الورقية',
    diagramSvg: `<svg viewBox="0 0 200 200" class="w-48 h-48 mx-auto text-slate-800 dark:text-slate-100">
      <polygon points="100,20 160,80 100,180 40,80" fill="none" stroke="currentColor" stroke-width="2.5" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4" />
      <text x="100" y="12" text-anchor="middle" font-size="12" fill="currentColor">A</text>
      <text x="170" y="85" text-anchor="start" font-size="12" fill="currentColor">B</text>
      <text x="100" y="195" text-anchor="middle" font-size="12" fill="currentColor">C</text>
      <text x="30" y="85" text-anchor="end" font-size="12" fill="currentColor">D</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 1 line of symmetry, (b) Order 1', textAr: '(أ) خط تناظر واحد، (ب) رتبة التناظر الدوراني 1' },
      { id: 'B', textEn: '(a) 2 lines of symmetry, (b) Order 2', textAr: '(أ) خطان للتناظر، (ب) رتبة التناظر الدوراني 2' },
      { id: 'C', textEn: '(a) 1 line of symmetry, (b) Order 2', textAr: '(أ) خط تناظر واحد، (ب) رتبة التناظر الدوراني 2' },
      { id: 'D', textEn: '(a) 0 lines of symmetry, (b) Order 1', textAr: '(أ) لا يوجد خطوط تناظر، (ب) رتبة 1' }
    ],
    correctAnswer: 'A',
    explanationEn: 'A kite has 1 vertical line of symmetry (along the main diagonal AC) and rotational symmetry of order 1 (only matches itself after a full 360° turn).',
    explanationAr: 'شكل الطائرة الورقية له خط تناظر رأسي واحد فقط (على طول القطر الرئيس AC) ورتبة تناظر دوراني تساوي 1.',
    solutionStepsEn: ['Step 1: Check main diagonal AC -> splits kite into two congruent halves => 1 line.', 'Step 2: Check full 360° rotation -> matches position only once at 360° => Order 1.'],
    solutionStepsAr: ['الخطوة 1: القطر AC يقسم الشكل لنصفين متطابقين => 1 خط تناظر.', 'الخطوة 2: ينطبق على نفسه مرة واحدة كل 360 درجة => رتبة 1.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-11',
    code: '0580/01/M/J/04 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Circle Theorems & Isosceles Triangles',
    topicAr: 'نظريات الدوائر والمثلث متساوي الساقين',
    questionEn: 'PQ is a chord of a circle with centre O. Angle OPQ = 35°. Calculate the angle POQ.',
    questionAr: 'PQ هو وتر في دائرة مركزها O. قياس الزاوية OPQ = 35°. احسب قياس الزاوية POQ.',
    diagramTitle: 'Circle with Chord PQ / دائرة مع الوتر PQ',
    diagramSvg: `<svg viewBox="0 0 200 200" class="w-48 h-48 mx-auto text-slate-800 dark:text-slate-100">
      <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="2" />
      <polygon points="100,100 45,145 155,145" fill="none" stroke="#0d9488" stroke-width="2" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      <text x="100" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">O</text>
      <text x="35" y="155" text-anchor="end" font-size="12" font-weight="bold" fill="currentColor">P</text>
      <text x="165" y="155" text-anchor="start" font-size="12" font-weight="bold" fill="currentColor">Q</text>
      <text x="60" y="140" font-size="10" fill="#0d9488">35°</text>
      <text x="130" y="140" font-size="10" fill="#0d9488">35°</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '110°', textAr: '110°' },
      { id: 'B', textEn: '145°', textAr: '145°' },
      { id: 'C', textEn: '70°', textAr: '70°' },
      { id: 'D', textEn: '125°', textAr: '125°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Triangle OPQ is isosceles because OP = OQ (both are radii). Thus angle OQP = angle OPQ = 35°. Angle POQ = 180° - (35° + 35°) = 110°.',
    explanationAr: 'المثلث OPQ متساوي الساقين لأن OP = OQ (أنصاف أقطار). إذن الزاوية OQP = 35°. الزاوية POQ = 180 - (35 + 35) = 110°.',
    solutionStepsEn: ['Step 1: OP = OQ (radii) => triangle OPQ is isosceles.', 'Step 2: Angle OQP = 35°.', 'Step 3: Angle POQ = 180° - 35° - 35° = 110°.'],
    solutionStepsAr: ['الخطوة 1: OP = OQ (أنصاف أقطار) => المثلث OPQ متساوي الساقين.', 'الخطوة 2: الزاوية OQP = 35°.', 'الخطوة 3: الزاوية POQ = 180 - 70 = 110°.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-01-15',
    code: '0580/01/M/J/04 Q15',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Right-Angled Trigonometry',
    topicAr: 'حساب المثلثات القائمة',
    questionEn: 'In right-angled triangle ABC, AC = 5 metres and angle CAB = 32°. Calculate the length of side BC.',
    questionAr: 'في المثلث القائم الزاوية ABC، AC = 5 أمتار والزاوية CAB = 32°. احسب طول الضلع BC.',
    diagramTitle: 'Triangle ABC / المثلث ABC',
    diagramSvg: `<svg viewBox="0 0 220 150" class="w-52 h-36 mx-auto text-slate-800 dark:text-slate-100">
      <polygon points="30,120 180,120 180,30" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="165" y="105" width="15" height="15" fill="none" stroke="#0d9488" stroke-width="1.5" />
      <text x="20" y="130" font-size="12" font-weight="bold" fill="currentColor">A</text>
      <text x="190" y="130" font-size="12" font-weight="bold" fill="currentColor">B</text>
      <text x="190" y="25" font-size="12" font-weight="bold" fill="currentColor">C</text>
      <text x="95" y="70" font-size="11" fill="#0d9488">5 m</text>
      <text x="50" y="115" font-size="10" fill="#0d9488">32°</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '2.65 m', textAr: '2.65 متر' },
      { id: 'B', textEn: '3.12 m', textAr: '3.12 متر' },
      { id: 'C', textEn: '4.24 m', textAr: '4.24 متر' },
      { id: 'D', textEn: '2.35 m', textAr: '2.35 متر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Assuming hypotenuse AC = 5 m, sin(32°) = BC / 5 => BC = 5 × sin(32°) = 5 × 0.5299 = 2.65 metres.',
    explanationAr: 'باستخدام الجيب sin(32°) = BC / 5 => BC = 5 × sin(32°) = 2.65 متر.',
    solutionStepsEn: ['Step 1: sin(32°) = BC / 5.', 'Step 2: BC = 5 × sin(32°) = 2.65 m.'],
    solutionStepsAr: ['الخطوة 1: جا(32°) = BC ÷ 5.', 'الخطوة 2: BC = 5 × sin(32°) = 2.65 متر.'],
    marks: 3
  },
  {
    id: 'IG-2004-MJ-01-17',
    code: '0580/01/M/J/04 Q17',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Bar Charts',
    topicAr: 'المخططات الشريطية',
    questionEn: 'Students participating in sports: Basketball: 40, Football: 55, Tennis: 35, Volleyball: 70. Represent this data in a bar chart.',
    questionAr: 'أعداد الطلاب المشاركين في الرياضات: كرة السلة: 40، كرة القدم: 55، التنس: 35، الكرة الطائرة: 70. أرسم مخططاً شريطياً لهذه البيانات.',
    diagramTitle: 'Sports Participation Bar Chart / المخطط الشريط للرياضة',
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-64 h-40 mx-auto text-slate-800 dark:text-slate-100">
      <line x1="40" y1="20" x2="40" y2="140" stroke="currentColor" stroke-width="2" />
      <line x1="40" y1="140" x2="260" y2="140" stroke="currentColor" stroke-width="2" />
      <!-- Basketball -->
      <rect x="55" y="80" width="35" height="60" fill="#0d9488" opacity="0.8" />
      <text x="72" y="155" font-size="9" text-anchor="middle" fill="currentColor">سلة</text>
      <!-- Football -->
      <rect x="105" y="57.5" width="35" height="82.5" fill="#0d9488" opacity="0.8" />
      <text x="122" y="155" font-size="9" text-anchor="middle" fill="currentColor">قدم</text>
      <!-- Tennis -->
      <rect x="155" y="87.5" width="35" height="52.5" fill="#0d9488" opacity="0.8" />
      <text x="172" y="155" font-size="9" text-anchor="middle" fill="currentColor">تنس</text>
      <!-- Volleyball -->
      <rect x="205" y="35" width="35" height="105" fill="#0d9488" opacity="0.8" />
      <text x="222" y="155" font-size="9" text-anchor="middle" fill="currentColor">طائرة</text>
      <text x="25" y="85" font-size="8" fill="currentColor">40</text>
      <text x="25" y="40" font-size="8" fill="currentColor">70</text>
    </svg>`,
    options: [
      { id: 'A', textEn: 'Heights: 40, 55, 35, 70', textAr: 'الارتفاعات: 40، 55، 35، 70' },
      { id: 'B', textEn: 'Heights: 40, 50, 30, 70', textAr: 'الارتفاعات: 40، 50، 30، 70' },
      { id: 'C', textEn: 'Heights: 45, 55, 35, 65', textAr: 'الارتفاعات: 45، 55، 35، 65' },
      { id: 'D', textEn: 'Heights: 50, 55, 40, 70', textAr: 'الارتفاعات: 50، 55، 40، 70' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The vertical axis scale represents student numbers: Basketball = 40, Football = 55, Tennis = 35, Volleyball = 70.',
    explanationAr: 'المحور الرأسي يمثل أعداد الطلاب: كرة السلة = 40، كرة القدم = 55، التنس = 35، الكرة الطائرة = 70.',
    solutionStepsEn: ['Step 1: Set vertical scale.', 'Step 2: Draw bars with heights 40, 55, 35, 70.'],
    solutionStepsAr: ['الخطوة 1: تحديد المقياس الرأسي.', 'الخطوة 2: رسم الأعمدة بارتفاعات 40، 55، 35، 70.'],
    marks: 4
  },
  {
    id: 'IG-2004-MJ-01-19',
    code: '0580/01/M/J/04 Q19',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 1 (Core)',
    topicEn: 'Cylinder Area and Volume',
    topicAr: 'مساحة وحجم الأسطوانة',
    questionEn: 'A cylindrical tank has radius r = 30 cm and height h = 80 cm. Calculate: (a) base area, (b) total volume in litres.',
    questionAr: 'خزان أسطواني الشكل نصف قطر قاعدته 30 سم وارتفاعه 80 سم. احسب: (أ) مساحة القاعدة، (ب) حجم الخزان بوحدة اللتر.',
    diagramTitle: 'Cylindrical Tank / الخزان الأسطواني',
    diagramSvg: `<svg viewBox="0 0 160 200" class="w-40 h-48 mx-auto text-slate-800 dark:text-slate-100">
      <ellipse cx="80" cy="40" rx="50" ry="18" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M 30,40 L 30,160 A 50,18 0 0,0 130,160 L 130,40" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M 30,160 A 50,18 0 0,1 130,160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3" />
      <line x1="80" y1="40" x2="130" y2="40" stroke="#0d9488" stroke-width="2" />
      <text x="105" y="32" font-size="10" fill="#0d9488">r = 30 cm</text>
      <line x1="140" y1="40" x2="140" y2="160" stroke="#0d9488" stroke-width="1.5" />
      <text x="145" y="105" font-size="10" fill="#0d9488">h = 80 cm</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 2827.4 cm², (b) 226.2 Litres', textAr: '(أ) 2827.4 سم²، (ب) 226.2 لتر' },
      { id: 'B', textEn: '(a) 1884.9 cm², (b) 150.8 Litres', textAr: '(أ) 1884.9 سم²، (ب) 150.8 لتر' },
      { id: 'C', textEn: '(a) 2827.4 cm², (b) 226,194 Litres', textAr: '(أ) 2827.4 سم²، (ب) 226,194 لتر' },
      { id: 'D', textEn: '(a) 900.0 cm², (b) 72.0 Litres', textAr: '(أ) 900.0 سم²، (ب) 72.0 لتر' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Base area = π × r² = π × 30² = 2827.4 cm². (b) Volume = 2827.4 × 80 = 226,194 cm³ = 226.2 litres.',
    explanationAr: '(أ) مساحة القاعدة = π × 30² = 2827.4 سم². (ب) الحجم = 2827.4 × 80 = 226,194 سم³ ÷ 1000 = 226.2 لتر.',
    solutionStepsEn: ['Step 1: Base area = π × 30² = 2827.4 cm².', 'Step 2: Volume in cm³ = 2827.4 × 80 = 226,194.7 cm³.', 'Step 3: Convert to litres: 226,194.7 / 1000 = 226.2 L.'],
    solutionStepsAr: ['الخطوة 1: مساحة القاعدة = π × 30² = 2827.4 سم².', 'الخطوة 2: الحجم = 2827.4 × 80 = 226,194.7 سم³.', 'الخطوة 3: التحويل للترات ÷ 1000 = 226.2 لتر.'],
    marks: 4
  },

  // MAY/JUNE 2004 - PAPER 2 (0580/02)
  {
    id: 'IG-2004-MJ-02-01',
    code: '0580/02/M/J/04 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Time Interval Calculation',
    topicAr: 'حساب الفترة الزمنية',
    questionEn: 'A train left Sydney at 23:20 on 18 December and arrived in Brisbane at 02:40 on 19 December. How long did the journey take?',
    questionAr: 'غادر قطار مدينة (سيدني) الساعة 23:20 يوم 18 ديسمبر، ووصل إلى (بريزبان) الساعة 02:40 يوم 19 ديسمبر. كم استغرقت الرحلة من الوقت؟',
    options: [
      { id: 'A', textEn: '3 hours 20 minutes', textAr: '3 ساعات و 20 دقيقة' },
      { id: 'B', textEn: '3 hours 40 minutes', textAr: '3 ساعات و 40 دقيقة' },
      { id: 'C', textEn: '2 hours 40 minutes', textAr: 'ساعتان و 40 دقيقة' },
      { id: 'D', textEn: '4 hours 20 minutes', textAr: '4 ساعات و 20 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'From 23:20 to midnight (24:00) is 40 minutes. From midnight to 02:40 is 2 hours 40 minutes. Total time = 40m + 2h 40m = 3 hours 20 minutes.',
    explanationAr: 'من 23:20 إلى منتصف الليل 40 دقيقة، ومن منتصف الليل إلى 02:40 ساعتان و40 دقيقة. المجموع = 3 ساعات و20 دقيقة.',
    solutionStepsEn: ['Step 1: 24:00 - 23:20 = 40 mins.', 'Step 2: 02:40 - 00:00 = 2 hours 40 mins.', 'Step 3: Total = 2h 40m + 40m = 3h 20m.'],
    solutionStepsAr: ['الخطوة 1: الزمن لمنتصف الليل = 40 دقيقة.', 'الخطوة 2: الزمن بعد منتصف الليل = ساعتان و40 دقيقة.', 'الخطوة 3: الإجمالي = 3 ساعات و20 دقيقة.'],
    marks: 1
  },
  {
    id: 'IG-2004-MJ-02-05',
    code: '0580/02/M/J/04 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Linear Equations',
    topicAr: 'المعادلات الخطية',
    questionEn: 'Solve the equation: 4 - 2x = 8',
    questionAr: 'حل المعادلة: 4 - 2x = 8',
    options: [
      { id: 'A', textEn: 'x = -2', textAr: 'x = -2' },
      { id: 'B', textEn: 'x = 2', textAr: 'x = 2' },
      { id: 'C', textEn: 'x = -6', textAr: 'x = -6' },
      { id: 'D', textEn: 'x = 6', textAr: 'x = 6' }
    ],
    correctAnswer: 'A',
    explanationEn: '-2x = 8 - 4 => -2x = 4 => x = -2.',
    explanationAr: '-2x = 8 - 4 => -2x = 4 => x = -2.',
    solutionStepsEn: ['Step 1: Subtract 4 from both sides: -2x = 4.', 'Step 2: Divide by -2: x = -2.'],
    solutionStepsAr: ['الخطوة 1: اطرح 4 من الطرفين: -2x = 4.', 'الخطوة 2: اقسم على -2: x = -2.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-02-09',
    code: '0580/02/M/J/04 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Simple Interest',
    topicAr: 'الفائدة البسيطة',
    questionEn: 'Sarah has $3000 to invest for 2 years at a simple interest rate of 7.5% per year. Calculate the interest earned.',
    questionAr: 'تملك سارة مبلغ 3000$ لاستثماره لمدة سنتين بفائدة بسيطة 7.5% سنوياً. احسب مقدار الفائدة التي ستحصل عليها.',
    options: [
      { id: 'A', textEn: '$450', textAr: '$450' },
      { id: 'B', textEn: '$225', textAr: '$225' },
      { id: 'C', textEn: '$3450', textAr: '$3450' },
      { id: 'D', textEn: '$500', textAr: '$500' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Interest = P × r × t / 100 = 3000 × 7.5 × 2 / 100 = $450.',
    explanationAr: 'الفائدة = 3000 × 7.5 × 2 ÷ 100 = 450$.',
    solutionStepsEn: ['Step 1: I = P r t / 100.', 'Step 2: I = 3000 × 0.075 × 2 = $450.'],
    solutionStepsAr: ['الخطوة 1: الفائدة = المبلغ × المعدل × الزمن.', 'الخطوة 2: 3000 × 0.075 × 2 = 450$.'],
    marks: 2
  },
  {
    id: 'IG-2004-MJ-02-11',
    code: '0580/02/M/J/04 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Simultaneous Equations',
    topicAr: 'المعادلات الآنية',
    questionEn: 'Solve the simultaneous equations: 2x + y = 5 and x - 2y = 6.',
    questionAr: 'حل المعادلتين آنياً: 2x + y = 5 و x - 2y = 6.',
    options: [
      { id: 'A', textEn: 'x = 3.2, y = -1.4', textAr: 'x = 3.2, y = -1.4' },
      { id: 'B', textEn: 'x = 2, y = 1', textAr: 'x = 2, y = 1' },
      { id: 'C', textEn: 'x = 4, y = -3', textAr: 'x = 4, y = -3' },
      { id: 'D', textEn: 'x = 3, y = -1', textAr: 'x = 3, y = -1' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply first equation by 2: 4x + 2y = 10. Add to second equation: 5x = 16 => x = 3.2. Substitute: y = 5 - 2(3.2) = -1.4.',
    explanationAr: 'بضرب الأولى في 2 => 4x + 2y = 10. بالجمع مع الثانية => 5x = 16 => x = 3.2، ومنها y = -1.4.',
    solutionStepsEn: ['Step 1: Multiply 2x + y = 5 by 2 => 4x + 2y = 10.', 'Step 2: Add (x - 2y = 6) => 5x = 16 => x = 3.2.', 'Step 3: y = 5 - 2(3.2) = -1.4.'],
    solutionStepsAr: ['الخطوة 1: نضرب المعادلة الأولى في 2 => 4x + 2y = 10.', 'الخطوة 2: بجمع المعادلتين => 5x = 16 => x = 3.2.', 'الخطوة 3: التعويض يمنح y = -1.4.'],
    marks: 3
  },
  {
    id: 'IG-2004-MJ-02-14',
    code: '0580/02/M/J/04 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Loci & Area',
    topicAr: 'المحل الهندسي والمساحة',
    questionEn: 'A goat is tied by a 4m rope to a post at point P in a rectangular garden. (a) Describe the locus of points the goat can reach. (b) Calculate the maximum area of grass the goat can eat.',
    questionAr: 'ماعز مربوط بحبل طوله 4 أمتار في عمود عند النقطة P بحديقة مستطيلة. (أ) صف المحل الهندسي للنقاط التي يصل إليها الماعز. (ب) احسب المساحة العظمى للعشب التي يمكن للماعز أكلها (بافتراض ربع دائرة عند زاوية الحديقة).',
    diagramTitle: 'Goat Tether Locus / المحل الهندسي لحبل الماعز',
    diagramSvg: `<svg viewBox="0 0 200 160" class="w-52 h-40 mx-auto text-slate-800 dark:text-slate-100">
      <rect x="20" y="20" width="160" height="120" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M 20,80 A 60,60 0 0,0 80,20" fill="#0d9488" fill-opacity="0.2" stroke="#0d9488" stroke-width="2" stroke-dasharray="4" />
      <circle cx="20" cy="20" r="4" fill="#0d9488" />
      <text x="12" y="15" font-size="12" font-weight="bold" fill="currentColor">P</text>
      <text x="45" y="45" font-size="10" fill="#0d9488">4 m</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) Circular arc of radius 4m, (b) 12.57 m²', textAr: '(أ) قوس دائري نصف قطره 4م، (ب) 12.57 م²' },
      { id: 'B', textEn: '(a) Straight line, (b) 16.00 m²', textAr: '(أ) خط مستقيم، (ب) 16.00 م²' },
      { id: 'C', textEn: '(a) Quarter circle, (b) 50.27 m²', textAr: '(أ) ربع دائرة، (ب) 50.27 م²' },
      { id: 'D', textEn: '(a) Semicircle, (b) 25.13 m²', textAr: '(أ) نصف دائرة، (ب) 25.13 م²' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Locus is a quadrant of a circle of radius 4m. (b) Area = (1/4) × π × 4² = 4π ≈ 12.57 m².',
    explanationAr: '(أ) المحل الهندسي ربع دائرة نصف قطرها 4م. (ب) المساحة = (1/4) × π × 16 = 4π ≈ 12.57 م².',
    solutionStepsEn: ['Step 1: Radius r = 4 m.', 'Step 2: Area of quarter circle = (1/4) × π × 4² = 4π = 12.57 m².'],
    solutionStepsAr: ['الخطوة 1: نصف القطر = 4 م.', 'الخطوة 2: مساحة ربع الدائرة = 0.25 × π × 16 = 12.57 م².'],
    marks: 3
  },

  // MAY/JUNE 2004 - PAPER 3 (0580/03)
  {
    id: 'IG-2004-MJ-03-01',
    code: '0580/03/M/J/04 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 3 (Core)',
    topicEn: 'Statistics - Averages',
    topicAr: 'الإحصاء - المتوسطات',
    questionEn: 'Scores of 10 students: 65, 51, 35, 34, 12, 51, 50, 75, 48, 39. Find: (1) Mode, (2) Median, (3) Mean.',
    questionAr: 'درجات 10 طلاب: 65، 51، 35، 34، 12، 51، 50، 75، 48، 39. أوجد: (1) المنوال، (2) الوسيط، (3) المتوسط الحسابي.',
    options: [
      { id: 'A', textEn: '(1) Mode = 51, (2) Median = 49, (3) Mean = 46', textAr: '(1) المنوال = 51، (2) الوسيط = 49، (3) المتوسط = 46' },
      { id: 'B', textEn: '(1) Mode = 50, (2) Median = 48, (3) Mean = 46', textAr: '(1) المنوال = 50، (2) الوسيط = 48، (3) المتوسط = 46' },
      { id: 'C', textEn: '(1) Mode = 51, (2) Median = 50, (3) Mean = 48', textAr: '(1) المنوال = 51، (2) الوسيط = 50، (3) المتوسط = 48' },
      { id: 'D', textEn: '(1) Mode = 35, (2) Median = 49, (3) Mean = 46', textAr: '(1) المنوال = 35، (2) الوسيط = 49، (3) المتوسط = 46' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Mode = 51 (most frequent). Sorted list: [12, 34, 35, 39, 48, 50, 51, 51, 65, 75]. Median = (48 + 50)/2 = 49. Mean = 460 / 10 = 46.',
    explanationAr: 'المنوال = 51. البيانات المرتبة بها القيمتان 48 و 50 في المنتصف => الوسيط = 49. مجموع البيانات 460 ÷ 10 = 46.',
    solutionStepsEn: ['Step 1: Count highest frequency -> 51 appears twice.', 'Step 2: Ordered values: 12, 34, 35, 39, 48, 50, 51, 51, 65, 75.', 'Step 3: Median = (48 + 50)/2 = 49.', 'Step 4: Sum = 460 => Mean = 460 / 10 = 46.'],
    solutionStepsAr: ['الخطوة 1: الأكثر تكراراً هو 51.', 'الخطوة 2: الترتيب: 12، 34، 35، 39، 48، 50، 51، 51، 65، 75.', 'الخطوة 3: الوسيط = (48 + 50) ÷ 2 = 49.', 'الخطوة 4: مجموع القيم 460 ÷ 10 = 46.'],
    marks: 5
  },

  // MAY/JUNE 2004 - PAPER 4 (0580/04)
  {
    id: 'IG-2004-MJ-04-01',
    code: '0580/04/M/J/04 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Percentages & Reverse Percentages',
    topicAr: 'النسب المئوية والنسب العكسية',
    questionEn: '(a) Fatma buys a bike for $120. She pays 60% deposit + $10/mo for 6 months. Total paid? (b) Mohamed buys a bike for $159.10 after a 14% discount. Find original price.',
    questionAr: '(أ) اشترت فاطمة دراجة بـ 120$، دفعت 60% مقدم + 10$ شهرياً لمدة 6 أشهر. كم دفعت إجمالاً؟ (ب) اشترى محمد دراجة بـ 159.10$ بعد خصم 14%. احسب السعر الأصلي.',
    options: [
      { id: 'A', textEn: '(a) $132, (b) $185', textAr: '(أ) $132، (ب) $185' },
      { id: 'B', textEn: '(a) $120, (b) $181.37', textAr: '(أ) $120، (ب) $181.37' },
      { id: 'C', textEn: '(a) $132, (b) $180', textAr: '(أ) $132، (ب) $180' },
      { id: 'D', textEn: '(a) $140, (b) $185', textAr: '(أ) $140، (ب) $185' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Deposit = 0.60 × 120 = $72. Installments = 6 × 10 = $60. Total = $132. (b) Original price = 159.10 / (1 - 0.14) = 159.10 / 0.86 = $185.',
    explanationAr: '(أ) المقدم = 72$ + الأقساط 60$ = 132$. (ب) السعر الأصلي = 159.10 ÷ 0.86 = 185$.',
    solutionStepsEn: ['(a) 0.6 × 120 = 72; 72 + 60 = $132.', '(b) 100% - 14% = 86% = 0.86; 159.10 / 0.86 = $185.'],
    solutionStepsAr: ['(أ) المقدم 72$ + الأقساط 60$ = 132$.', '(ب) 159.10 ÷ 0.86 = 185$.'],
    marks: 6
  },
  {
    id: 'IG-2004-MJ-04-04',
    code: '0580/04/M/J/04 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Cyclic Quadrilateral & Cosine Rule',
    topicAr: 'الشكل الرباعي الدائري وقانون جيب التمام',
    questionEn: 'In cyclic quad ABCD, AB = 9.5cm, BC = 11.1cm, angle ABC = 70°, angle CAD = 37°. Calculate: (a) AC, (b) angle ADC.',
    questionAr: 'في الشكل الرباعي الدائري ABCD، AB = 9.5 سم، BC = 11.1 سم، والزاوية ABC = 70°، CAD = 37°. احسب: (أ) AC، (ب) الزاوية ADC.',
    diagramTitle: 'Cyclic Quadrilateral ABCD / الرباعي الدائري ABCD',
    diagramSvg: `<svg viewBox="0 0 200 200" class="w-52 h-52 mx-auto text-slate-800 dark:text-slate-100">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2" />
      <polygon points="40,60 160,50 170,140 50,150" fill="none" stroke="#0d9488" stroke-width="2" />
      <line x1="40" y1="60" x2="170" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3" />
      <text x="30" y="55" font-size="12" font-weight="bold" fill="currentColor">A</text>
      <text x="170" y="45" font-size="12" font-weight="bold" fill="currentColor">B</text>
      <text x="180" y="150" font-size="12" font-weight="bold" fill="currentColor">C</text>
      <text x="38" y="160" font-size="12" font-weight="bold" fill="currentColor">D</text>
      <text x="145" y="70" font-size="10" fill="#0d9488">70°</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) AC = 11.89 cm, (b) angle ADC = 110°', textAr: '(أ) AC = 11.89 سم، (ب) الزاوية ADC = 110°' },
      { id: 'B', textEn: '(a) AC = 12.50 cm, (b) angle ADC = 70°', textAr: '(أ) AC = 12.50 سم، (ب) الزاوية ADC = 70°' },
      { id: 'C', textEn: '(a) AC = 11.89 cm, (b) angle ADC = 120°', textAr: '(أ) AC = 11.89 سم، (ب) الزاوية ADC = 120°' },
      { id: 'D', textEn: '(a) AC = 10.45 cm, (b) angle ADC = 110°', textAr: '(أ) AC = 10.45 سم، (ب) الزاوية ADC = 110°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) By Cosine Rule in ΔABC: AC² = 9.5² + 11.1² - 2(9.5)(11.1)cos(70°) = 90.25 + 123.21 - 72.13 = 141.33 => AC = 11.89 cm. (b) Opposite angles in cyclic quad add up to 180° => angle ADC = 180° - 70° = 110°.',
    explanationAr: '(أ) بقانون جيب التمام AC = 11.89 سم. (ب) الزوايا المتقابلة في الرباعي الدائري متكاملة => ADC = 180 - 70 = 110°.',
    solutionStepsEn: ['Step 1: AC² = 9.5² + 11.1² - 2(9.5)(11.1)cos(70°).', 'Step 2: AC = √141.33 = 11.89 cm.', 'Step 3: Opposite angles in cyclic quad sum to 180° => ADC = 180° - 70° = 110°.'],
    solutionStepsAr: ['الخطوة 1: AC² = 9.5² + 11.1² - 2(9.5)(11.1)cos(70°).', 'الخطوة 2: AC = √141.33 = 11.89 سم.', 'الخطوة 3: الزاوية ADC = 180 - 70 = 110°.'],
    marks: 5
  }
];
