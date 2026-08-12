import { IgQuestion } from '../types';

export const QUESTIONS_2004_ON: IgQuestion[] = [
  // OCT/NOV 2004 - PAPER 1 (0580/01)
  {
    id: 'IG-2004-ON-01-01',
    code: '0580/01/O/N/04 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Temperature & Directed Numbers',
    topicAr: 'درجات الحرارة والأعداد الموجهة',
    questionEn: 'At midnight the temperature was -21°C. By noon the next day it had risen to -4°C. By how many degrees did the temperature rise?',
    questionAr: 'في مركز الأرصاد، كانت درجة الحرارة عند منتصف الليل -21°م. وبحلول الظهر ارتفعت إلى -4°م. بكم درجة ارتفعت درجة الحرارة؟',
    options: [
      { id: 'A', textEn: '17°C', textAr: '17°م' },
      { id: 'B', textEn: '-17°C', textAr: '-17°م' },
      { id: 'C', textEn: '25°C', textAr: '25°م' },
      { id: 'D', textEn: '13°C', textAr: '13°م' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Temperature rise = -4 - (-21) = -4 + 21 = 17°C.',
    explanationAr: 'الارتفاع = -4 - (-21) = -4 + 21 = 17°م.',
    solutionStepsEn: ['Step 1: Rise = Final - Initial.', 'Step 2: -4 - (-21) = 17°C.'],
    solutionStepsAr: ['الخطوة 1: مقدار الارتفاع = القيمة النهائية - القيمة الأولى.', 'الخطوة 2: -4 - (-21) = 17°م.'],
    marks: 1
  },
  {
    id: 'IG-2004-ON-01-04',
    code: '0580/01/O/N/04 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Algebraic Substitution',
    topicAr: 'التعويض الجبري',
    questionEn: 'When x = 5, find the value of: (a) 4x², (b) (4x)².',
    questionAr: 'عندما تكون x = 5، أوجد قيمة كل من: (أ) 4x²، (ب) (4x)².',
    options: [
      { id: 'A', textEn: '(a) 100, (b) 400', textAr: '(أ) 100، (ب) 400' },
      { id: 'B', textEn: '(a) 400, (b) 100', textAr: '(أ) 400، (ب) 100' },
      { id: 'C', textEn: '(a) 80, (b) 160', textAr: '(أ) 80، (ب) 160' },
      { id: 'D', textEn: '(a) 100, (b) 100', textAr: '(أ) 100، (ب) 100' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 4x² = 4 × (5²) = 4 × 25 = 100. (b) (4x)² = (4 × 5)² = 20² = 400.',
    explanationAr: '(أ) 4x² = 4 × 25 = 100. (ب) (4x)² = 20² = 400.',
    solutionStepsEn: ['(a) 4 × 5² = 4 × 25 = 100.', '(b) (4 × 5)² = 20² = 400.'],
    solutionStepsAr: ['(أ) 4 × 25 = 100.', '(ب) (20)² = 400.'],
    marks: 2
  },
  {
    id: 'IG-2004-ON-01-08',
    code: '0580/01/O/N/04 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Vector Arithmetic',
    topicAr: 'عمليات المتجهات',
    questionEn: 'Given vectors a = (3, 4) and b = (-1, 2). Calculate the vector a - 2b.',
    questionAr: 'إذا كان المتجهان a = (3, 4) و b = (-1, 2). احسب المتجه a - 2b.',
    options: [
      { id: 'A', textEn: '(5, 0)', textAr: '(5, 0)' },
      { id: 'B', textEn: '(1, 0)', textAr: '(1, 0)' },
      { id: 'C', textEn: '(5, 8)', textAr: '(5, 8)' },
      { id: 'D', textEn: '(2, 2)', textAr: '(2, 2)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'a - 2b = (3 - 2(-1), 4 - 2(2)) = (3 + 2, 4 - 4) = (5, 0).',
    explanationAr: 'a - 2b = (3 - 2(-1), 4 - 2(2)) = (3 + 2, 4 - 4) = (5, 0).',
    solutionStepsEn: ['Step 1: 2b = (-2, 4).', 'Step 2: a - 2b = (3 - (-2), 4 - 4) = (5, 0).'],
    solutionStepsAr: ['الخطوة 1: 2b = (-2, 4).', 'الخطوة 2: a - 2b = (3 - (-2), 4 - 4) = (5, 0).'],
    marks: 2
  },
  {
    id: 'IG-2004-ON-01-15',
    code: '0580/01/O/N/04 Q15',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Cuboid Volume in Litres',
    topicAr: 'حجم متوازي المستطيلات باللترات',
    questionEn: 'A water tank has a square base of side 350 cm and height 200 cm. Calculate the volume of water when full in litres.',
    questionAr: 'خزان مياه كبير له قاعدة مربعة طول ضلعها 350 سم وارتفاعه 200 سم. أوجد حجم الماء باللتر عندما يكون ممتلئاً.',
    options: [
      { id: 'A', textEn: '24,500 litres', textAr: '24,500 لتر' },
      { id: 'B', textEn: '24,500,000 litres', textAr: '24,500,000 لتر' },
      { id: 'C', textEn: '2,450 litres', textAr: '2,450 لتر' },
      { id: 'D', textEn: '70,000 litres', textAr: '70,000 لتر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Volume in cm³ = 350 × 350 × 200 = 24,500,000 cm³. In litres = 24,500,000 / 1000 = 24,500 litres.',
    explanationAr: 'الحجم بالسنتيمتر المكعب = 350 × 350 × 200 = 24,500,000 سم³. باللتر = 24,500,000 ÷ 1000 = 24,500 لتر.',
    solutionStepsEn: ['Step 1: Vol = 350 × 350 × 200 = 24,500,000 cm³.', 'Step 2: Convert to litres: 24,500,000 / 1000 = 24,500 L.'],
    solutionStepsAr: ['الخطوة 1: الحجم بالسنتيمتر = 350 × 350 × 200 = 24,500,000 سم³.', 'الخطوة 2: التحويل للترات ÷ 1000 = 24,500 لتر.'],
    marks: 3
  },
  {
    id: 'IG-2004-ON-01-22',
    code: '0580/01/O/N/04 Q22',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Semicircle Perimeter & Area',
    topicAr: 'محيط ومساحة نصف الدائرة',
    questionEn: 'A semicircle has diameter AB = 12 cm. Calculate: (a) perimeter of the shape, (b) area of the shape.',
    questionAr: 'نصف دائرة طول قطرها AB = 12 سم. احسب: (أ) محيط الشكل، (ب) مساحة الشكل.',
    diagramTitle: 'Semicircle AB = 12cm / نصف دائرة قطرها 12 سم',
    diagramSvg: `<svg viewBox="0 0 200 130" class="w-48 h-32 mx-auto text-slate-800 dark:text-slate-100">
      <path d="M 20,100 A 80,80 0 0,1 180,100 Z" fill="none" stroke="currentColor" stroke-width="2" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      <text x="10" y="110" font-size="12" font-weight="bold" fill="currentColor">A</text>
      <text x="185" y="110" font-size="12" font-weight="bold" fill="currentColor">B</text>
      <text x="100" y="115" font-size="10" fill="currentColor">O</text>
      <line x1="20" y1="100" x2="180" y2="100" stroke="#0d9488" stroke-width="2" />
      <text x="100" y="90" font-size="10" text-anchor="middle" fill="#0d9488">12 cm</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 30.85 cm, (b) 56.55 cm²', textAr: '(أ) 30.85 سم، (ب) 56.55 سم²' },
      { id: 'B', textEn: '(a) 18.85 cm, (b) 113.10 cm²', textAr: '(أ) 18.85 سم، (ب) 113.10 سم²' },
      { id: 'C', textEn: '(a) 30.85 cm, (b) 113.10 cm²', textAr: '(أ) 30.85 سم، (ب) 113.10 سم²' },
      { id: 'D', textEn: '(a) 37.70 cm, (b) 56.55 cm²', textAr: '(أ) 37.70 سم، (ب) 56.55 سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Radius r = 6 cm. (a) Perimeter = diameter + arc = 12 + π × 6 = 12 + 18.85 = 30.85 cm. (b) Area = 0.5 × π × 6² = 18π ≈ 56.55 cm².',
    explanationAr: '(أ) المحل = القطر + القوس = 12 + 6π = 30.85 سم. (ب) المساحة = 0.5 × π × 36 = 56.55 سم².',
    solutionStepsEn: ['(a) Perimeter = 12 + π × 6 = 30.85 cm.', '(b) Area = 0.5 × π × 6² = 56.55 cm².'],
    solutionStepsAr: ['(أ) المحيط = 12 + 6π = 30.85 سم.', '(ب) المساحة = 0.5 × π × 36 = 56.55 سم².'],
    marks: 5
  },

  // OCT/NOV 2004 - PAPER 2 (0580/02)
  {
    id: 'IG-2004-ON-02-07',
    code: '0580/02/O/N/04 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Direct Proportion with Squares',
    topicAr: 'التناسب الطردي مع المربعات',
    questionEn: 'Air resistance R is directly proportional to v². When v = 30, R = 1800. Calculate R when v = 40.',
    questionAr: 'مقاومة الهواء R تتناسب طردياً مع مربع السرعة v². عندما v = 30 تكون R = 1800. احسب R عندما v = 40.',
    options: [
      { id: 'A', textEn: '3200', textAr: '3200' },
      { id: 'B', textEn: '2400', textAr: '2400' },
      { id: 'C', textEn: '3600', textAr: '3600' },
      { id: 'D', textEn: '1600', textAr: '1600' }
    ],
    correctAnswer: 'A',
    explanationEn: 'R = k v² => 1800 = k (30)² => k = 1800 / 900 = 2. When v = 40: R = 2 × (40)² = 2 × 1600 = 3200.',
    explanationAr: 'R = k v² => 1800 = k (900) => k = 2. عند v = 40 => R = 2 × 1600 = 3200.',
    solutionStepsEn: ['Step 1: k = 1800 / 30² = 2.', 'Step 2: R = 2 × 40² = 2 × 1600 = 3200.'],
    solutionStepsAr: ['الخطوة 1: k = 1800 ÷ 900 = 2.', 'الخطوة 2: R = 2 × 1600 = 3200.'],
    marks: 3
  },
  {
    id: 'IG-2004-ON-02-17',
    code: '0580/02/O/N/04 Q17',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Quadratic Formula',
    topicAr: 'القانون العام للمعادلة التربيعية',
    questionEn: 'Solve the equation 2x² + 4x - 22 = 0. Give your answers rounded to 2 decimal places.',
    questionAr: 'حل المعادلة 2x² + 4x - 22 = 0. أعطِ إجاباتك مقربة إلى منزلتين عشريتين.',
    options: [
      { id: 'A', textEn: 'x = 2.46 or x = -4.46', textAr: 'x = 2.46 أو x = -4.46' },
      { id: 'B', textEn: 'x = 3.12 or x = -5.12', textAr: 'x = 3.12 أو x = -5.12' },
      { id: 'C', textEn: 'x = 2.46 or x = 4.46', textAr: 'x = 2.46 أو x = 4.46' },
      { id: 'D', textEn: 'x = 1.82 or x = -3.82', textAr: 'x = 1.82 أو x = -3.82' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Divide by 2: x² + 2x - 11 = 0. x = [-2 ± √(4 - 4(1)(-11))] / 2 = [-2 ± √48] / 2 = -1 ± √12 = -1 ± 3.464 => x = 2.46 or x = -4.46.',
    explanationAr: 'بالقسمة على 2: x² + 2x - 11 = 0. بالقانون العام x = -1 ± √12 => x = 2.46 أو x = -4.46.',
    solutionStepsEn: ['Step 1: Simplify to x² + 2x - 11 = 0.', 'Step 2: Quadratic formula: x = [-2 ± √(4 + 44)] / 2.', 'Step 3: x = -1 ± √12 => x = 2.46 or -4.46.'],
    solutionStepsAr: ['الخطوة 1: التبسيط إلى x² + 2x - 11 = 0.', 'الخطوة 2: x = [-2 ± √48] ÷ 2.', 'الخطوة 3: x = -1 ± 3.464 => x = 2.46 أو -4.46.'],
    marks: 4
  },
  {
    id: 'IG-2004-ON-02-19',
    code: '0580/02/O/N/04 Q19',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Perimeter of Athletics Track',
    topicAr: 'محيط مضمار ألعاب القوى',
    questionEn: 'A track consists of two semicircular ends (r = 35m) and two straight sections. Total inside length = 400m. Calculate: (a) total straight length, (b) extra distance around outside if track width is 6m.',
    questionAr: 'مضمار يتكون من نهايتين نصف دائريتين (نق = 35 م) وجزءين مستقيمين. محيط المسار الداخلي = 400 م. احسب: (أ) طول الجزءين المستقيمين، (ب) فرق المسافة عند الجانب الخارجي إذا كان عرض المضمار 6 أمتار.',
    diagramTitle: 'Stadium Track Geometry / مضمار ألعاب القوى',
    diagramSvg: `<svg viewBox="0 0 240 120" class="w-60 h-32 mx-auto text-slate-800 dark:text-slate-100">
      <path d="M 60,20 L 180,20 A 40,40 0 0,1 180,100 L 60,100 A 40,40 0 0,1 60,20 Z" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M 60,10 L 180,10 A 50,50 0 0,1 180,110 L 60,110 A 50,50 0 0,1 60,10 Z" fill="none" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="3" />
      <text x="120" y="15" font-size="9" text-anchor="middle" fill="currentColor">مستقيم</text>
      <text x="120" y="105" font-size="9" text-anchor="middle" fill="currentColor">مستقيم</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 180.1 m, (b) 37.7 m', textAr: '(أ) 180.1 متر، (ب) 37.7 متر' },
      { id: 'B', textEn: '(a) 200.0 m, (b) 37.7 m', textAr: '(أ) 200.0 متر، (ب) 37.7 متر' },
      { id: 'C', textEn: '(a) 180.1 m, (b) 75.4 m', textAr: '(أ) 180.1 متر، (ب) 75.4 متر' },
      { id: 'D', textEn: '(a) 220.0 m, (b) 40.0 m', textAr: '(أ) 220.0 متر، (ب) 40.0 متر' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Two semicircles form 1 full circle of radius 35m => Circumference = 2 × π × 35 ≈ 219.91m. Total straights = 400 - 219.91 = 180.09 ≈ 180.1m. (b) Outer difference = 2π(35 + 6) - 2π(35) = 2π(6) = 12π ≈ 37.7m.',
    explanationAr: '(أ) محيط الدائرة = 2π(35) = 219.91م. المستقيمان = 400 - 219.91 = 180.1م. (ب) الفرق الخارجي = 2π(6) = 37.7م.',
    solutionStepsEn: ['(a) 2π × 35 = 219.91 m => Straights = 400 - 219.91 = 180.1 m.', '(b) 2π × (35 + 6) - 2π × 35 = 2π × 6 = 37.7 m.'],
    solutionStepsAr: ['(أ) محيط القوسين = 219.91 م => المستقيمان = 180.1 م.', '(ب) الفرق = 2 × π × 6 = 37.7 م.'],
    marks: 5
  },

  // OCT/NOV 2004 - PAPER 4 (0580/04)
  {
    id: 'IG-2004-ON-04-03',
    code: '0580/04/O/N/04 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2004,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Cylindrical Tank & Pipe Flow',
    topicAr: 'خزان أسطواني وسريان الأنبوب',
    questionEn: 'A cylindrical tank has radius 40 cm and height 110 cm. Water flows from a pipe of cross-section 1.6 cm² at speed 14 cm/s. Calculate: (a) tank volume, (b) time to fill tank in hours and minutes.',
    questionAr: 'خزان أسطواني الشكل نصف قطره 40 سم وارتفاعه 110 سم. يتدفق الماء من أنبوب مساحة مقطعه 1.6 سم² بسرعه 14 سم/ث. احسب: (أ) حجم الخزان، (ب) الزمن لملء الخزان بالساعات والدقائق.',
    diagramTitle: 'Tank & Pipe / الخزان الأسطواني والأنبوب',
    diagramSvg: `<svg viewBox="0 0 200 180" class="w-48 h-44 mx-auto text-slate-800 dark:text-slate-100">
      <ellipse cx="100" cy="40" rx="45" ry="15" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M 55,40 L 55,150 A 45,15 0 0,0 145,150 L 145,40" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="85" y="5" width="30" height="20" fill="none" stroke="#0d9488" stroke-width="1.5" />
      <text x="100" y="32" font-size="9" text-anchor="middle" fill="#0d9488">أنبوب 1.6cm²</text>
    </svg>`,
    options: [
      { id: 'A', textEn: '(a) 552,920 cm³, (b) 6 hours 51 minutes', textAr: '(أ) 552,920 سم³، (ب) 6 ساعات و 51 دقيقة' },
      { id: 'B', textEn: '(a) 552,920 cm³, (b) 3 hours 26 minutes', textAr: '(أ) 552,920 سم³، (ب) 3 ساعات و 26 دقيقة' },
      { id: 'C', textEn: '(a) 176,000 cm³, (b) 2 hours 10 minutes', textAr: '(أ) 176,000 سم³، (ب) ساعتان و 10 دقائق' },
      { id: 'D', textEn: '(a) 552,920 cm³, (b) 4 hours 15 minutes', textAr: '(أ) 552,920 سم³، (ب) 4 ساعات و 15 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Vol = π × 40² × 110 = 176,000π ≈ 552,920 cm³. (b) Flow rate = 1.6 × 14 = 22.4 cm³/s. Time = 552,920 / 22.4 = 24,683.9 seconds = 411.4 mins = 6 hours 51 minutes.',
    explanationAr: '(أ) الحجم = 552,920 سم³. (ب) معدل التدفق = 22.4 سم³/ثانية. الزمن = 24,683.9 ثانية = 6 ساعات و 51 دقيقة.',
    solutionStepsEn: ['(a) Vol = π × 1600 × 110 = 552,920 cm³.', '(b) Flow rate = 1.6 × 14 = 22.4 cm³/s.', 'Time = 552920 / 22.4 = 24,684 seconds = 411.4 mins = 6h 51m.'],
    solutionStepsAr: ['(أ) الحجم = π × 1600 × 110 = 552,920 سم³.', '(ب) معدل تدفق الأنبوب = 1.6 × 14 = 22.4 سم³/ثانية.', 'الزمن = 24684 ثانية = 6 ساعات و 51 دقيقة.'],
    marks: 6
  }
];
