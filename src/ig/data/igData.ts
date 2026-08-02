import { IgExamBoard, IgSubject, IgQuestion } from '../types';
import { QUESTIONS_2004_MJ } from './questions2004MJ';
import { QUESTIONS_2003_MJ } from './questions2003MJ';
import { QUESTIONS_2004_ON } from './questions2004ON';
import { QUESTIONS_2005 } from './questions2005';
import { QUESTIONS_2006 } from './questions2006';
import { QUESTIONS_2007 } from './questions2007';
import { QUESTIONS_2008 } from './questions2008';
import { QUESTIONS_2009 } from './questions2009';
import { QUESTIONS_2010 } from './questions2010';
import { QUESTIONS_2011 } from './questions2011';
import { QUESTIONS_2012 } from './questions2012';
import { QUESTIONS_2013 } from './questions2013';

export const IG_BOARDS: IgExamBoard[] = [
  {
    id: 'cambridge',
    nameEn: 'Cambridge',
    nameAr: 'كامبريدج الدولية (Cambridge)',
    badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
    accentBg: 'from-teal-600 to-emerald-700',
    borderColor: 'border-teal-500',
    icon: '📖',
    levels: [
      { id: 'o_level_igcse', nameEn: 'O Level (IGCSE)', nameAr: 'O Level (IGCSE)' },
      { id: 'as_a2_level', nameEn: 'AS / A2 Level', nameAr: 'AS / A2 Level' },
      { id: 'o_level_gcse', nameEn: 'O Level (GCSE)', nameAr: 'O Level (GCSE)' }
    ]
  },
  {
    id: 'edexcel',
    nameEn: 'Edexcel',
    nameAr: 'إدكسل (Pearson Edexcel)',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    accentBg: 'from-amber-600 to-orange-700',
    borderColor: 'border-amber-500',
    icon: '📖',
    levels: [
      { id: 'o_level_igcse', nameEn: 'O Level (IGCSE)', nameAr: 'O Level (IGCSE)' },
      { id: 'as_ial', nameEn: 'AS / IAL', nameAr: 'AS / IAL' }
    ]
  },
  {
    id: 'oxford',
    nameEn: 'Oxford',
    nameAr: 'أوكسفورد (OxfordAQA)',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    accentBg: 'from-indigo-600 to-blue-700',
    borderColor: 'border-indigo-500',
    icon: '📖',
    levels: [
      { id: 'igcse', nameEn: 'IGCSE', nameAr: 'IGCSE' },
      { id: 'as_ial', nameEn: 'AS / IAL', nameAr: 'AS / IAL' }
    ]
  }
];

export const IG_CAMBRIDGE_SUBJECTS: IgSubject[] = [
  { id: 'maths', code: '0580', nameEn: 'Maths', nameAr: 'الرياضيات', icon: '📐', status: 'available', hasQuestions: true },
  { id: 'chemistry', code: '0620', nameEn: 'Chemistry 0620', nameAr: 'الكيمياء', icon: '🧪', status: 'coming_soon' },
  { id: 'physics', code: '0625', nameEn: 'Physics 0625', nameAr: 'الفيزياء', icon: '⚡', status: 'coming_soon' },
  { id: 'biology', code: '0610', nameEn: 'Biology', nameAr: 'الأحياء', icon: '🧬', status: 'coming_soon' },
  { id: 'accounting', code: '0452', nameEn: 'Accounting', nameAr: 'المحاسبة', icon: '📊', status: 'coming_soon' },
  { id: 'arabic', code: '0544', nameEn: 'Arabic', nameAr: 'اللغة العربية', icon: '🕌', status: 'coming_soon' },
  { id: 'art_design', code: '0400', nameEn: 'Art And Design', nameAr: 'الفنون والتصميم', icon: '🎨', status: 'coming_soon' },
  { id: 'business', code: '0450', nameEn: 'Business', nameAr: 'إدارة الأعمال', icon: '💼', status: 'coming_soon' },
  { id: 'computer_science', code: '0478', nameEn: 'Computer Science', nameAr: 'علوم الحاسوب', icon: '💻', status: 'coming_soon' },
  { id: 'economics', code: '0455', nameEn: 'Economics', nameAr: 'الاقتصاد', icon: '📈', status: 'coming_soon' },
  { id: 'esl', code: '0510', nameEn: 'English As A Second Language (ESL)', nameAr: 'اللغة الإنجليزية لغير الناطقين بها', icon: '🗣️', status: 'coming_soon' },
  { id: 'english_lit', code: '0475', nameEn: 'English Literature', nameAr: 'الأدب الإنجليزي', icon: '📚', status: 'coming_soon' },
  { id: 'french', code: '0520', nameEn: 'French Foreign Language', nameAr: 'اللغة الفرنسية', icon: '🇫🇷', status: 'coming_soon' },
  { id: 'geography', code: '0460', nameEn: 'Geography', nameAr: 'الجغرافيا', icon: '🗺️', status: 'coming_soon' },
  { id: 'german', code: '0525', nameEn: 'German Foreign Language', nameAr: 'اللغة الألمانية', icon: '🇩🇪', status: 'coming_soon' },
  { id: 'history', code: '0470', nameEn: 'History', nameAr: 'التاريخ', icon: '📜', status: 'coming_soon' },
  { id: 'ict', code: '0417', nameEn: 'Information And Communication Technology (ICT)', nameAr: 'تكنولوجيا المعلومات والاتصالات', icon: '🖥️', status: 'coming_soon' },
  { id: 'lit_english', code: '0472', nameEn: 'Literature in English', nameAr: 'الدراسات الأدبية بالإنجليزية', icon: '📖', status: 'coming_soon' },
  { id: 'sociology', code: '0495', nameEn: 'Sociology', nameAr: 'علم الاجتماع', icon: '👥', status: 'coming_soon' },
  { id: 'travel_tourism', code: '0471', nameEn: 'Travel and Tourism', nameAr: 'السياحة والسفر', icon: '✈️', status: 'coming_soon' },
];

export const IG_MATHS_QUESTIONS: IgQuestion[] = [
  // 2021
  {
    id: 'IG-2021-01',
    code: '0580/21/M/J/21 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Solve the simultaneous equations: 2x + 3y = 13 and 5x - y = 7.',
    questionAr: 'أوجد حل المعادلتين الآنيتين: 2x + 3y = 13 و 5x - y = 7.',
    options: [
      { id: 'A', textEn: 'x = 2, y = 3', textAr: 'x = 2, y = 3' },
      { id: 'B', textEn: 'x = 3, y = 2', textAr: 'x = 3, y = 2' },
      { id: 'C', textEn: 'x = 4, y = 1', textAr: 'x = 4, y = 1' },
      { id: 'D', textEn: 'x = 1, y = 5', textAr: 'x = 1, y = 5' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply the second equation by 3: 15x - 3y = 21. Add to first: 17x = 34 => x = 2. Substitute x=2 into 5(2) - y = 7 => 10 - y = 7 => y = 3.',
    explanationAr: 'بضرب المعادلة الثانية في 3 نحصل على: 15x - 3y = 21. بجمعها مع المعادلة الأولى: 17x = 34 أي x = 2. بالتعويض عن x=2 نجد أن y = 3.',
    solutionStepsEn: [
      'Step 1: Multiply 5x - y = 7 by 3 to get 15x - 3y = 21.',
      'Step 2: Add (2x + 3y = 13) and (15x - 3y = 21) => 17x = 34.',
      'Step 3: Solve for x: x = 34 / 17 = 2.',
      'Step 4: Substitute x = 2 into 2(2) + 3y = 13 => 4 + 3y = 13 => 3y = 9 => y = 3.'
    ],
    solutionStepsAr: [
      'الخطوة 1: نضرب المعادلة الثانية في 3 لنحصل على 15x - 3y = 21.',
      'الخطوة 2: نجمع المعادلتين فتختفي y: 17x = 34.',
      'الخطوة 3: نقسم على 17 لنحصل على x = 2.',
      'الخطوة 4: نعوض بـ x = 2 في المعادلة الأولى: 4 + 3y = 13 فتكون y = 3.'
    ],
    marks: 3
  },
  {
    id: 'IG-2021-02',
    code: '0580/42/M/J/21 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2021,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Trigonometric Ratios',
    topicAr: 'النسب المثلثية',
    questionEn: 'In a right-angled triangle ABC, angle B = 90°, AB = 8 cm and BC = 15 cm. Calculate the length of AC.',
    questionAr: 'في المثلث قائم الزاوية ABC حيث B = 90° و AB = 8 cm و BC = 15 cm. احسب طول الضلع AC.',
    options: [
      { id: 'A', textEn: '17 cm', textAr: '17 سم' },
      { id: 'B', textEn: '16.1 cm', textAr: '16.1 سم' },
      { id: 'C', textEn: '23 cm', textAr: '23 سم' },
      { id: 'D', textEn: '13 cm', textAr: '13 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'By Pythagoras Theorem: AC² = AB² + BC² = 8² + 15² = 64 + 225 = 289 => AC = √289 = 17 cm.',
    explanationAr: 'باستخدام نظرية فيثاغورس: AC² = 8² + 15² = 64 + 225 = 289. إذاً AC = √289 = 17 سم.',
    solutionStepsEn: [
      'Step 1: Apply Pythagoras Theorem: AC² = AB² + BC².',
      'Step 2: AC² = 64 + 225 = 289.',
      'Step 3: AC = √289 = 17 cm.'
    ],
    solutionStepsAr: [
      'الخطوة 1: تطبيق نظرية فيثاغورس: AC² = AB² + BC².',
      'الخطوة 2: حساب المربعات: 64 + 225 = 289.',
      'الخطوة 3: أخذ الجذر التربيعي: √289 = 17 سم.'
    ],
    marks: 2
  },

  // 2020
  {
    id: 'IG-2020-01',
    code: '0580/22/O/N/20 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Percentages & Finance',
    topicAr: 'النسب المئوية والمالية',
    questionEn: 'A car loses 15% of its value each year. If it is bought for $12,000, what is its value after 2 years?',
    questionAr: 'تنخفض قيمة سيارة بنسبة 15% سنوياً. إذا تم شراؤها بـ $12,000، فما قيمتها بعد سنتين؟',
    options: [
      { id: 'A', textEn: '$8,670', textAr: '$8,670' },
      { id: 'B', textEn: '$8,400', textAr: '$8,400' },
      { id: 'C', textEn: '$9,180', textAr: '$9,180' },
      { id: 'D', textEn: '$10,200', textAr: '$10,200' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Compound depreciation formula: V = P(1 - r)^n = 12000 * (0.85)^2 = 12000 * 0.7225 = $8,670.',
    explanationAr: 'القيمة بعد سنتين باستهلاك مركب: V = 12000 × (0.85)² = 12000 × 0.7225 = $8,670.',
    solutionStepsEn: [
      'Step 1: Multiplier per year = 1 - 0.15 = 0.85.',
      'Step 2: Value after 2 years = 12000 × (0.85)². ',
      'Step 3: 12000 × 0.7225 = $8,670.'
    ],
    solutionStepsAr: [
      'الخطوة 1: عامل القيمة المتبقية سنوياً = 1 - 0.15 = 0.85.',
      'الخطوة 2: القيمة بعد 2 سنة = 12000 × (0.85)².',
      'الخطوة 3: النتيجة = $8,670.'
    ],
    marks: 3
  },

  // 2019
  {
    id: 'IG-2019-01',
    code: '0580/21/M/J/19 Q12',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Indices & Surds',
    topicAr: 'الأسس والجذور',
    questionEn: 'Simplify completely: (81x^8)^(3/4).',
    questionAr: 'بسط التعبير التالي لأبسط صورة: (81x^8)^(3/4).',
    options: [
      { id: 'A', textEn: '27x^6', textAr: '27x^6' },
      { id: 'B', textEn: '9x^6', textAr: '9x^6' },
      { id: 'C', textEn: '27x^4', textAr: '27x^4' },
      { id: 'D', textEn: '81x^6', textAr: '81x^6' }
    ],
    correctAnswer: 'A',
    explanationEn: '(81)^(3/4) = (3^4)^(3/4) = 3^3 = 27. (x^8)^(3/4) = x^(8 * 3/4) = x^6. Combining gives 27x^6.',
    explanationAr: '(81)^(3/4) = (3^4)^(3/4) = 3³ = 27. وبالمثل (x^8)^(3/4) = x^6. الناتج النهائي هو 27x^6.',
    solutionStepsEn: [
      'Step 1: Apply exponent to coefficient: 81^(3/4) = (4th root of 81)^3 = 3^3 = 27.',
      'Step 2: Apply exponent to variable: (x^8)^(3/4) = x^(8 × 3/4) = x^6.',
      'Step 3: Combine terms: 27x^6.'
    ],
    solutionStepsAr: [
      'الخطوة 1: توزيع الأس على المعامل: 81^(3/4) = (الرمز الرابع لـ 81) مكعباً = 3³ = 27.',
      'الخطوة 2: توزيع الأس على المتغير: (x^8)^(3/4) = x^(6).',
      'الخطوة 3: الدمج: 27x^6.'
    ],
    marks: 2
  },

  // 2018
  {
    id: 'IG-2018-01',
    code: '0580/41/M/J/18 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2018,
    session: 'May/June',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Mensuration & Volume',
    topicAr: 'القياسات والحجوم',
    questionEn: 'A cylinder has radius r = 5 cm and height h = 12 cm. Find its total surface area in terms of π.',
    questionAr: 'أسطوانة نصف قطر قاعدتها r = 5 cm وارتفاعها h = 12 cm. أوجد مساحتها السطحية الكلية بدلالة π.',
    options: [
      { id: 'A', textEn: '170π cm²', textAr: '170π سم²' },
      { id: 'B', textEn: '120π cm²', textAr: '120π سم²' },
      { id: 'C', textEn: '145π cm²', textAr: '145π سم²' },
      { id: 'D', textEn: '300π cm²', textAr: '300π سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Total Surface Area = 2πr² + 2πrh = 2π(5)² + 2π(5)(12) = 50π + 120π = 170π cm².',
    explanationAr: 'المساحة السطحية الكلية = 2πr² + 2πrh = 2π(25) + 2π(60) = 50π + 120π = 170π سم².',
    solutionStepsEn: [
      'Step 1: Formula for Area = 2πr² + 2πrh.',
      'Step 2: Base area sum = 2π(5²) = 50π.',
      'Step 3: Curved surface area = 2π(5)(12) = 120π.',
      'Step 4: Total = 50π + 120π = 170π cm².'
    ],
    solutionStepsAr: [
      'الخطوة 1: القانون الكلي: المساحة = 2πr² + 2πrh.',
      'الخطوة 2: مساحة القاعدتين = 2π(25) = 50π.',
      'الخطوة 3: المساحة الجانبية = 2π(5)(12) = 120π.',
      'الخطوة 4: المجموع = 170π سم².'
    ],
    marks: 3
  },

  // 2016
  {
    id: 'IG-2016-01',
    code: '0580/23/O/N/16 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2016,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Probability & Tree Diagrams',
    topicAr: 'الاحتمالات وشجرة الأحداث',
    questionEn: 'A bag contains 5 red balls and 3 blue balls. Two balls are drawn without replacement. Find the probability that both are red.',
    questionAr: 'يحتوي كيس على 5 كرات حمراء و3 كرات زرقاء. سُحبت كرتان عشوائياً بدون إرجاع. أوجد احتمال أن تكون الكرتان حمراوين.',
    options: [
      { id: 'A', textEn: '5 / 14', textAr: '5 / 14' },
      { id: 'B', textEn: '25 / 64', textAr: '25 / 64' },
      { id: 'C', textEn: '15 / 56', textAr: '15 / 56' },
      { id: 'D', textEn: '5 / 28', textAr: '5 / 28' }
    ],
    correctAnswer: 'A',
    explanationEn: 'P(Red 1st) = 5/8. P(Red 2nd) = 4/7. P(Both Red) = (5/8) * (4/7) = 20/56 = 5/14.',
    explanationAr: 'احتمال الحمراء الأولى = 5/8. احتمال الحمراء الثانية = 4/7. احتمال السحبين = (5/8) × (4/7) = 20/56 = 5/14.',
    solutionStepsEn: [
      'Step 1: First pick P(Red 1) = 5/8.',
      'Step 2: Without replacement, remaining balls = 4 red out of 7 total.',
      'Step 3: P(Both Red) = (5/8) × (4/7) = 20/56.',
      'Step 4: Simplify 20/56 by dividing by 4 => 5/14.'
    ],
    solutionStepsAr: [
      'الخطوة 1: احتمال السحبة الأولى حمراء = 5/8.',
      'الخطوة 2: المتبقي في الكيس = 4 كرات حمراء من أصل 7.',
      'الخطوة 3: ضرب الاحتمالين: (5/8) × (4/7) = 20/56.',
      'الخطوة 4: التبسيط إلى 5/14.'
    ],
    marks: 3
  },

  // 2012
  {
    id: 'IG-2012-01',
    code: '0580/22/M/J/12 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Functions & Inverses',
    topicAr: 'الدوال والدوال العكسية',
    questionEn: 'If f(x) = 3x - 5, find f⁻¹(7).',
    questionAr: 'إذا كانت f(x) = 3x - 5، فأوجد قيمة f⁻¹(7).',
    options: [
      { id: 'A', textEn: '4', textAr: '4' },
      { id: 'B', textEn: '16', textAr: '16' },
      { id: 'C', textEn: '2/3', textAr: '2/3' },
      { id: 'D', textEn: '6', textAr: '6' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Set f(x) = 7 => 3x - 5 = 7 => 3x = 12 => x = 4. Therefore f⁻¹(7) = 4.',
    explanationAr: 'نضع f(x) = 7 أي 3x - 5 = 7 وبالتالي 3x = 12 فنجد أن x = 4.',
    solutionStepsEn: [
      'Step 1: Find inverse function: y = 3x - 5 => x = (y + 5)/3.',
      'Step 2: Evaluate f⁻¹(7) = (7 + 5)/3 = 12/3 = 4.'
    ],
    solutionStepsAr: [
      'الخطوة 1: إيجاد الدالة العكسية: y = 3x - 5 إذن x = (y + 5)/3.',
      'الخطوة 2: التعويض بـ 7: (7 + 5)/3 = 12/3 = 4.'
    ],
    marks: 2
  },

  // 2008
  {
    id: 'IG-2008-01',
    code: '0580/02/M/J/08 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2008,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Vectors & Transformations',
    topicAr: 'المتجهات والتحويلات الهندسة',
    questionEn: 'Vector A = (3, -4) and Vector B = (-1, 5). Calculate 2A + B.',
    questionAr: 'المتجه A = (3, -4) والمتجه B = (-1, 5). احسب 2A + B.',
    options: [
      { id: 'A', textEn: '(5, -3)', textAr: '(5, -3)' },
      { id: 'B', textEn: '(4, 1)', textAr: '(4, 1)' },
      { id: 'C', textEn: '(5, 3)', textAr: '(5, 3)' },
      { id: 'D', textEn: '(2, 1)', textAr: '(2, 1)' }
    ],
    correctAnswer: 'A',
    explanationEn: '2A = (6, -8). 2A + B = (6 + (-1), -8 + 5) = (5, -3).',
    explanationAr: '2A = (6, -8). 2A + B = (6 - 1, -8 + 5) = (5, -3).',
    solutionStepsEn: [
      'Step 1: Multiply vector A by 2: 2(3, -4) = (6, -8).',
      'Step 2: Add vector B: (6 + (-1), -8 + 5) = (5, -3).'
    ],
    solutionStepsAr: [
      'الخطوة 1: نضرب المتجه A في 2: 2(3, -4) = (6, -8).',
      'الخطوة 2: نجمع مع المتجه B: (6 - 1, -8 + 5) = (5, -3).'
    ],
    marks: 2
  },

  // 2002 - Comprehensive Exam Papers Collection (0580/01, 0580/02, 0580/03, 0580/04 Oct/Nov 2002)
  // PAPER 1 (0580/01)
  {
    id: 'IG-2002-ON-01-01',
    code: '0580/01/O/N/02 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Basic Arithmetic & Money',
    topicAr: 'الحساب الأساسي والأموال',
    questionEn: 'Calculate: $50 - $23.46',
    questionAr: 'احسب: 50$ - 23.46$',
    options: [
      { id: 'A', textEn: '$26.54', textAr: '$26.54' },
      { id: 'B', textEn: '$27.54', textAr: '$27.54' },
      { id: 'C', textEn: '$26.46', textAr: '$26.46' },
      { id: 'D', textEn: '$25.54', textAr: '$25.54' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Subtracting 23.46 from 50 gives 26.54.',
    explanationAr: 'طرح 23.46 من 50 يعطي 26.54.',
    solutionStepsEn: [
      'Step 1: 50.00 - 23.46',
      'Step 2: 50.00 - 23.00 = 27.00',
      'Step 3: 27.00 - 0.46 = 26.54'
    ],
    solutionStepsAr: [
      'الخطوة 1: 50.00 - 23.46',
      'الخطوة 2: 50.00 - 23.00 = 27.00',
      'الخطوة 3: 27.00 - 0.46 = 26.54'
    ],
    marks: 1
  },
  {
    id: 'IG-2002-ON-01-02',
    code: '0580/01/O/N/02 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Time Calculations',
    topicAr: 'حسابات الوقت',
    questionEn: 'A train leaves Johannesburg at 09:45 and arrives in Pretoria at 10:32. How many minutes does the journey take?',
    questionAr: 'يغادر قطار محطة جوهانسبرغ الساعة 09:45 ويصل إلى بريتوريا الساعة 10:32. كم دقيقة تستغرق الرحلة؟',
    options: [
      { id: 'A', textEn: '47 minutes', textAr: '47 دقيقة' },
      { id: 'B', textEn: '57 minutes', textAr: '57 دقيقة' },
      { id: 'C', textEn: '42 minutes', textAr: '42 دقيقة' },
      { id: 'D', textEn: '87 minutes', textAr: '87 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'From 09:45 to 10:00 is 15 mins. From 10:00 to 10:32 is 32 mins. Total = 15 + 32 = 47 mins.',
    explanationAr: 'من 09:45 إلى 10:00 = 15 دقيقة. ومن 10:00 إلى 10:32 = 32 دقيقة. الإجمالي = 47 دقيقة.',
    solutionStepsEn: [
      'Step 1: Minutes until 10:00 = 60 - 45 = 15 mins.',
      'Step 2: Minutes after 10:00 = 32 mins.',
      'Step 3: Total journey time = 15 + 32 = 47 minutes.'
    ],
    solutionStepsAr: [
      'الخطوة 1: الدقائق حتى 10:00 هي 60 - 45 = 15 دقيقة.',
      'الخطوة 2: الدقائق بعد 10:00 هي 32 دقيقة.',
      'الخطوة 3: زمن الرحلة الكلي = 15 + 32 = 47 دقيقة.'
    ],
    marks: 1
  },
  {
    id: 'IG-2002-ON-01-03',
    code: '0580/01/O/N/02 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Arithmetic Evaluation',
    topicAr: 'حساب المقادير العددیة',
    questionEn: 'Calculate the value of: (13³ + 37³) / 50',
    questionAr: 'احسب قيمة المقدار: (13³ + 37³) / 50',
    options: [
      { id: 'A', textEn: '1057', textAr: '1057' },
      { id: 'B', textEn: '1120', textAr: '1120' },
      { id: 'C', textEn: '985', textAr: '985' },
      { id: 'D', textEn: '1025', textAr: '1025' }
    ],
    correctAnswer: 'A',
    explanationEn: '13³ = 2197, 37³ = 50653. Sum = 52850. Divide by 50 = 1057.',
    explanationAr: '13³ = 2197 و 37³ = 50653. المجموع = 52850. عند القسمة على 50 الناتج = 1057.',
    solutionStepsEn: [
      'Step 1: 13³ = 2197',
      'Step 2: 37³ = 50653',
      'Step 3: 2197 + 50653 = 52850',
      'Step 4: 52850 / 50 = 1057'
    ],
    solutionStepsAr: [
      'الخطوة 1: 13³ = 2197',
      'الخطوة 2: 37³ = 50653',
      'الخطوة 3: 2197 + 50653 = 52850',
      'الخطوة 4: 52850 ÷ 50 = 1057'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-01-04',
    code: '0580/01/O/N/02 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Fractions & Percentages',
    topicAr: 'الكسور والنسب المئوية',
    questionEn: 'Write the percentage 24% as a fraction in its simplest form.',
    questionAr: 'اكتب النسبة 24% على شكل كسر في أبسط صورة.',
    options: [
      { id: 'A', textEn: '6/25', textAr: '6/25' },
      { id: 'B', textEn: '12/50', textAr: '12/50' },
      { id: 'C', textEn: '4/25', textAr: '4/25' },
      { id: 'D', textEn: '24/100', textAr: '24/100' }
    ],
    correctAnswer: 'A',
    explanationEn: '24% = 24/100. Divide numerator and denominator by 4 to get 6/25.',
    explanationAr: '24% = 24/100. بقسمة البسط والمقام على 4 نحصل على 6/25.',
    solutionStepsEn: [
      'Step 1: Write 24% as 24/100.',
      'Step 2: Simplify by dividing top and bottom by 4.',
      'Step 3: 24÷4 = 6, 100÷4 = 25 => 6/25.'
    ],
    solutionStepsAr: [
      'الخطوة 1: كتابة 24% في صورة كسر: 24/100.',
      'الخطوة 2: التبسيط عن طريق قسمة البسط والمقام على 4.',
      'الخطوة 3: 24÷4 = 6 و 100÷4 = 25، الناتج: 6/25.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-01-05',
    code: '0580/01/O/N/02 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Inequalities & Integers',
    topicAr: 'المتباينات والأعداد الصحيحة',
    questionEn: 'The integer n satisfies the inequality: -3 ≤ n < 3. Write down all possible values of n.',
    questionAr: 'العدد الصحيح n يحقق المتباينة: -3 ≤ n < 3. اكتب جميع القيم الممكنة لـ n.',
    options: [
      { id: 'A', textEn: '-3, -2, -1, 0, 1, 2', textAr: '-3, -2, -1, 0, 1, 2' },
      { id: 'B', textEn: '-2, -1, 0, 1, 2', textAr: '-2, -1, 0, 1, 2' },
      { id: 'C', textEn: '-3, -2, -1, 0, 1, 2, 3', textAr: '-3, -2, -1, 0, 1, 2, 3' },
      { id: 'D', textEn: '-2, -1, 0, 1, 2, 3', textAr: '-2, -1, 0, 1, 2, 3' }
    ],
    correctAnswer: 'A',
    explanationEn: 'n includes -3 (since ≤) up to 2 (since < 3). Integers are: -3, -2, -1, 0, 1, 2.',
    explanationAr: 'تشمل المتباينة -3 بسبب وجود علامة يساوي وتتوقف عند 2 لأنها أقل قطعا من 3. القيم هي: -3, -2, -1, 0, 1, 2.',
    solutionStepsEn: [
      'Step 1: Note inclusive lower limit -3 (≤).',
      'Step 2: Note exclusive upper limit 3 (<).',
      'Step 3: List integers: -3, -2, -1, 0, 1, 2.'
    ],
    solutionStepsAr: [
      'الخطوة 1: ملاحظة تضمين الحد الأدنى -3 وجود علامه (≤).',
      'الخطوة 2: استبعاد الحد الأعلى 3 لوجود علامة الأصغر قطعا (<).',
      'الخطوة 3: قائمة الأعداد الصحيحة: -3, -2, -1, 0, 1, 2.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-01-06',
    code: '0580/01/O/N/02 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Circle Tangents & Geometry',
    topicAr: 'مماسات الدائرة والهندسة',
    diagramTitle: 'Tangents AB and AC to Circle Centre O',
    diagramSvg: `<svg viewBox="0 0 200 160" class="w-full max-w-xs text-slate-800 dark:text-slate-100">
      <circle cx="120" cy="80" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="20" y1="80" x2="120" y2="30" stroke="#0d9488" stroke-width="2"/>
      <line x1="20" y1="80" x2="120" y2="130" stroke="#0d9488" stroke-width="2"/>
      <line x1="120" y1="80" x2="120" y2="30" stroke="currentColor" stroke-dasharray="2 2"/>
      <line x1="120" y1="80" x2="120" y2="130" stroke="currentColor" stroke-dasharray="2 2"/>
      <text x="10" y="85" fill="currentColor" class="text-[12px] font-bold">A (54°)</text>
      <text x="120" y="20" fill="currentColor" class="text-[12px] font-bold">B</text>
      <text x="120" y="145" fill="currentColor" class="text-[12px] font-bold">C</text>
      <text x="125" y="85" fill="currentColor" class="text-[12px] font-bold">O</text>
    </svg>`,
    questionEn: 'AB and AC are tangents to the circle, centre O. Angle BAC = 54°.\n(a) Write down the size of angle ABO.\n(b) Work out angle BOC.',
    questionAr: 'AB و AC مماسّان للدائرة التي مركزها O. الزاوية BAC = 54°.\n(أ) اكتب قياس الزاوية ABO.\n(ب) احسب قياس الزاوية المركزية BOC.',
    options: [
      { id: 'A', textEn: '(a) 90°, (b) 126°', textAr: '(أ) 90°، (ب) 126°' },
      { id: 'B', textEn: '(a) 90°, (b) 136°', textAr: '(أ) 90°، (ب) 136°' },
      { id: 'C', textEn: '(a) 54°, (b) 126°', textAr: '(أ) 54°، (ب) 126°' },
      { id: 'D', textEn: '(a) 90°, (b) 108°', textAr: '(أ) 90°، (ب) 108°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Tangent is perpendicular to radius => Angle ABO = 90°. (b) Sum of angles in quadrilateral ABOC = 360° => Angle BOC = 360° - (90° + 90° + 54°) = 126°.',
    explanationAr: '(أ) المماس عمودي على نصف القطر عند نقطة التماس، إذن الزاوية ABO = 90°. (ب) مجموع زوايا الشكل الرباعي ABOC يساوي 360°، بالتالي الزاوية BOC = 360° - (90° + 90° + 54°) = 126°.',
    solutionStepsEn: [
      'Step 1: Tangent line AB meets radius OB at 90° => Angle ABO = 90°.',
      'Step 2: Similarly, angle ACO = 90°.',
      'Step 3: Quadrilateral ABOC total angle sum = 360°.',
      'Step 4: Angle BOC = 360° - (90° + 90° + 54°) = 126°.'
    ],
    solutionStepsAr: [
      'الخطوة 1: المماس AB عمودي على نصف القطر OB عند نقطة التماس B، إذن الزاوية ABO = 90°.',
      'الخطوة 2: المماس AC عمودي على نصف القطر OC، إذن الزاوية ACO = 90°.',
      'الخطوة 3: مجموع زوايا الشكل الرباعي ABOC يساوي 360°.',
      'الخطوة 4: الزاوية المركزية BOC = 360° - (90° + 90° + 54°) = 126°.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-01-07',
    code: '0580/01/O/N/02 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Standard Form & Estimation',
    topicAr: 'الصورة القياسية والتقريب',
    questionEn: 'Write 0.000456 in standard form correct to 2 significant figures.',
    questionAr: 'اكتب الرقم 0.000456 بالصورة القياسية (الصيغة العلمية) مقرباً لرقمين معنويين.',
    options: [
      { id: 'A', textEn: '4.6 × 10⁻⁴', textAr: '4.6 × 10⁻⁴' },
      { id: 'B', textEn: '4.5 × 10⁻⁴', textAr: '4.5 × 10⁻⁴' },
      { id: 'C', textEn: '4.6 × 10⁻³', textAr: '4.6 × 10⁻³' },
      { id: 'D', textEn: '45.6 × 10⁻⁵', textAr: '45.6 × 10⁻⁵' }
    ],
    correctAnswer: 'A',
    explanationEn: '0.000456 in standard form is 4.56 × 10⁻⁴. Rounded to 2 sig figs gives 4.6 × 10⁻⁴.',
    explanationAr: '0.000456 بالصورة القياسية 4.56 × 10⁻⁴. عند التقريب لرقمين معنويين يصبح 4.6 × 10⁻⁴.',
    solutionStepsEn: [
      'Step 1: Move decimal point 4 places right: 4.56 × 10⁻⁴.',
      'Step 2: Round 4.56 to 2 sig figs: 4.6.',
      'Step 3: Final answer: 4.6 × 10⁻⁴.'
    ],
    solutionStepsAr: [
      'الخطوة 1: تحريك الفاصلة 4 منازل نحو اليمين: 4.56 × 10⁻⁴.',
      'الخطوة 2: تقريب العدد 4.56 إلى رقمين معنويين: 4.6.',
      'الخطوة 3: النتيجة النهائية: 4.6 × 10⁻⁴.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-01-08',
    code: '0580/01/O/N/02 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Algebraic Factorisation',
    topicAr: 'التحليل إلى العوامل Algebraic Factorisation',
    questionEn: 'Factorise completely: 6x² - 9xy',
    questionAr: 'حلل تحليلاً كاملاً: 6x² - 9xy',
    options: [
      { id: 'A', textEn: '3x(2x - 3y)', textAr: '3x(2x - 3y)' },
      { id: 'B', textEn: '3(2x² - 3xy)', textAr: '3(2x² - 3xy)' },
      { id: 'C', textEn: 'x(6x - 9y)', textAr: 'x(6x - 9y)' },
      { id: 'D', textEn: '3xy(2x - 3)', textAr: '3xy(2x - 3)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Highest common factor of 6 and 9 is 3. Highest common variable factor is x. HCF = 3x. 6x²/3x = 2x, -9xy/3x = -3y.',
    explanationAr: 'العامل المشترك الأكبر للعددين 6 و 9 هو 3، وللمتغيرات هو x. العامل المشترك = 3x. التحليل: 3x(2x - 3y).',
    solutionStepsEn: [
      'Step 1: Identify HCF of 6x² and 9xy => 3x.',
      'Step 2: Divide terms by 3x => 6x²/3x = 2x and -9xy/3x = -3y.',
      'Step 3: Express as 3x(2x - 3y).'
    ],
    solutionStepsAr: [
      'الخطوة 1: إيجاد العامل المشترك الأكبر لـ 6x² و 9xy وهو 3x.',
      'الخطوة 2: قسمة الحدود على العامل المشترك: 6x² ÷ 3x = 2x و -9xy ÷ 3x = -3y.',
      'الخطوة 3: كتابة المقدار في صورة 3x(2x - 3y).'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-01-09',
    code: '0580/01/O/N/02 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Sequences & Number Patterns',
    topicAr: 'الأنماط والمتتاليات العددیة',
    questionEn: 'Consider the sequence: 4, 11, 18, 25, ...\n(a) Write down the next term.\n(b) Find an expression for the nth term.',
    questionAr: 'لتكن المتتالية التالية: 4, 11, 18, 25, ...\n(أ) اكتب الحد التالي.\n(ب) أوجد صيغة للحد العام nth term.',
    options: [
      { id: 'A', textEn: '(a) 32, (b) 7n - 3', textAr: '(أ) 32، (ب) 7n - 3' },
      { id: 'B', textEn: '(a) 31, (b) 7n - 3', textAr: '(أ) 31، (ب) 7n - 3' },
      { id: 'C', textEn: '(a) 32, (b) 4n + 7', textAr: '(أ) 32، (ب) 4n + 7' },
      { id: 'D', textEn: '(a) 30, (b) 7n - 1', textAr: '(أ) 30، (ب) 7n - 1' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Common difference = 7. Next term = 25 + 7 = 32. (b) nth term = dn + c = 7n + (4 - 7) = 7n - 3.',
    explanationAr: '(أ) الفرق الثابت = 7. الحد التالي = 25 + 7 = 32. (ب) صيغة الحد العام nth term = 7n - 3.',
    solutionStepsEn: [
      'Step 1: Difference between consecutive terms = 11 - 4 = 7.',
      'Step 2: Next term = 25 + 7 = 32.',
      'Step 3: nth term formula = 7n + c. When n=1, 7(1) + c = 4 => c = -3.',
      'Step 4: nth term = 7n - 3.'
    ],
    solutionStepsAr: [
      'الخطوة 1: حساب الفارق بين الحدود المتعاقبة: 11 - 4 = 7.',
      'الخطوة 2: الحد الخامس = 25 + 7 = 32.',
      'الخطوة 3: الحد العام = 7n + c. عندما n=1: 7(1) + c = 4 أي c = -3.',
      'الخطوة 4: الحد النوني = 7n - 3.'
    ],
    marks: 2
  },

  // PAPER 2 (0580/02)
  {
    id: 'IG-2002-ON-02-01',
    code: '0580/02/O/N/02 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Statistics & Temperature',
    topicAr: 'الإحصاء ودرجات الحرارة',
    questionEn: 'The table shows maximum daily temperatures in Punta Arenas for one week:\nMon: 2°C, Tue: 3°C, Wed: 1°C, Thu: 2.5°C, Fri: -1.5°C, Sat: 1°C, Sun: 2°C.\n(a) By how many degrees did the maximum temperature change between Thursday and Friday?\n(b) What is the difference between the greatest and least of these temperatures?',
    questionAr: 'يوضح الجدول درجات الحرارة العظمى في بونتا أريناس خلال أسبوع:\nالخميس: 2.5°C ، الجمعة: -1.5°C. أعلى درجة: 3°C، أدنى درجة: -1.5°C.\n(أ) التغير من الخميس للجمعة.\n(ب) الفرق بين أعلى وأدنى درجة حرارة.',
    options: [
      { id: 'A', textEn: '(a) 4°C, (b) 4.5°C', textAr: '(أ) 4 درجات، (ب) 4.5 درجة' },
      { id: 'B', textEn: '(a) 1°C, (b) 3.5°C', textAr: '(أ) درجة واحدة، (ب) 3.5 درجة' },
      { id: 'C', textEn: '(a) 2.5°C, (b) 5°C', textAr: '(أ) 2.5 درجة، (ب) 5 درجات' },
      { id: 'D', textEn: '(a) 3°C, (b) 4°C', textAr: '(أ) 3 درجات، (ب) 4 درجات' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Change = 2.5 - (-1.5) = 4°C. (b) Difference = 3 - (-1.5) = 4.5°C.',
    explanationAr: '(أ) مقدار التغير من 2.5 إلى -1.5 يساوي 2.5 - (-1.5) = 4 درجات. (ب) الفرق بين العظمى والصغرى = 3 - (-1.5) = 4.5 درجة.',
    solutionStepsEn: [
      'Step 1: Thursday temp = 2.5°C, Friday temp = -1.5°C.',
      'Step 2: Change = 2.5 - (-1.5) = 4°C.',
      'Step 3: Greatest temp = 3°C (Tuesday), Least temp = -1.5°C (Friday).',
      'Step 4: Difference = 3 - (-1.5) = 4.5°C.'
    ],
    solutionStepsAr: [
      'الخطوة 1: حرارة الخميس = 2.5°C وحرارة الجمعة = -1.5°C.',
      'الخطوة 2: حساب التغير: 2.5 - (-1.5) = 4 درجات.',
      'الخطوة 3: أعلى درجة حرارة = 3°C (الثلاثاء) وأدنى درجة = -1.5°C (الجمعة).',
      'الخطوة 4: الفرق بين أعلى وأدنى قيمة = 3 - (-1.5) = 4.5 درجة.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-02-02',
    code: '0580/02/O/N/02 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Percentages & Financial Maths',
    topicAr: 'النسب المئوية والرياضيات المالية',
    questionEn: 'Nyali paid $62 for a bicycle. She sold it later for $46. What was her percentage loss?',
    questionAr: 'اشترت نيالي دراجة بـ $62 وباعتها لاحقاً بـ $46. ما هي نسبة الخسارة المئوية؟',
    options: [
      { id: 'A', textEn: '25.8%', textAr: '25.8%' },
      { id: 'B', textEn: '34.8%', textAr: '34.8%' },
      { id: 'C', textEn: '22.5%', textAr: '22.5%' },
      { id: 'D', textEn: '16.0%', textAr: '16.0%' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Loss = 62 - 46 = 16. Percentage Loss = (16 / 62) * 100 = 25.806% ≈ 25.8%.',
    explanationAr: 'مبلغ الخسارة = 62 - 46 = 16. نسبة الخسارة المئوية = (16 ÷ 62) × 100 = 25.8%.',
    solutionStepsEn: [
      'Step 1: Calculate amount of loss: $62 - $46 = $16.',
      'Step 2: Divide loss by cost price: 16 / 62 = 0.25806.',
      'Step 3: Multiply by 100: 25.8% (correct to 3 significant figures).'
    ],
    solutionStepsAr: [
      'الخطوة 1: حساب قيمة الخسارة: 62 - 46 = 16 دولار.',
      'الخطوة 2: قسمة الخسارة على سعر الشراء الأصلي: 16 ÷ 62 = 0.25806.',
      'الخطوة 3: الضرب في 100 للحصول على النسب المئوية: 25.8%.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-02-03',
    code: '0580/02/O/N/02 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Linear Equations & Algebra',
    topicAr: 'المعادلات الخطية والجبر',
    questionEn: 'Solve the equation: 4(2x - 3) = 3(x + 6)',
    questionAr: 'حل المعادلة التالية: 4(2x - 3) = 3(x + 6)',
    options: [
      { id: 'A', textEn: 'x = 6', textAr: 'x = 6' },
      { id: 'B', textEn: 'x = 4', textAr: 'x = 4' },
      { id: 'C', textEn: 'x = 8', textAr: 'x = 8' },
      { id: 'D', textEn: 'x = 5', textAr: 'x = 5' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Expand both sides: 8x - 12 = 3x + 18. Subtract 3x: 5x - 12 = 18. Add 12: 5x = 30 => x = 6.',
    explanationAr: 'فك الأقواس: 8x - 12 = 3x + 18. بنقل 3x: 5x - 12 = 18. إضافة 12: 5x = 30 أي x = 6.',
    solutionStepsEn: [
      'Step 1: Expand brackets: 8x - 12 = 3x + 18.',
      'Step 2: Group x terms: 8x - 3x = 18 + 12.',
      'Step 3: Simplify: 5x = 30.',
      'Step 4: Divide by 5: x = 6.'
    ],
    solutionStepsAr: [
      'الخطوة 1: فك الأقواس في الطرفين: 8x - 12 = 3x + 18.',
      'الخطوة 2: تجميع الحدود المتشابهة: 8x - 3x = 18 + 12.',
      'الخطوة 3: التبسيط: 5x = 30.',
      'الخطوة 4: القسمة على 5: x = 6.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-02-13',
    code: '0580/02/O/N/02 Q13',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Kinematics & Speed-Time Graphs',
    topicAr: 'الحركة ورسم السرعة مع الزمن',
    diagramTitle: 'Speed-Time Graph for Ameni',
    diagramSvg: `<svg viewBox="0 0 300 200" class="w-full max-w-xs text-slate-800 dark:text-slate-100 font-sans">
      <line x1="40" y1="160" x2="270" y2="160" stroke="currentColor" stroke-width="2"/>
      <line x1="40" y1="160" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
      <text x="275" y="165" fill="currentColor" class="text-[11px]">t (s)</text>
      <text x="25" y="20" fill="currentColor" class="text-[11px]">v (m/s)</text>
      <!-- Grid ticks -->
      <line x1="40" y1="40" x2="270" y2="40" stroke="currentColor" stroke-dasharray="2 2" opacity="0.3"/>
      <text x="25" y="45" fill="currentColor" class="text-[10px]">4</text>
      <!-- Speed line -->
      <polyline points="40,40 180,40 250,160" fill="none" stroke="#0d9488" stroke-width="3"/>
      <!-- Time markers -->
      <text x="40" y="175" fill="currentColor" class="text-[10px]">0</text>
      <text x="180" y="175" fill="currentColor" class="text-[10px]">3.5</text>
      <text x="250" y="175" fill="currentColor" class="text-[10px]">6</text>
    </svg>`,
    questionEn: 'Ameni is cycling at 4 metres per second. After 3.5 seconds she starts to decelerate and after a further 2.5 seconds she stops.\n(a) Calculate the constant deceleration.\n(b) Calculate the total distance travelled during the 6 seconds.',
    questionAr: 'تقود أمني دراجة بسرعة 4 م/ث. بعد 3.5 ثانية تبدأ بالتباطؤ وبعد 2.5 ثانية إضافية تتوقف تماماً.\n(أ) احسب التباطؤ الثابت.\n(ب) احسب المسافة الكلية المقطوعة خلال الـ 6 ثوانٍ.',
    options: [
      { id: 'A', textEn: '(a) 1.6 m/s², (b) 19 m', textAr: '(أ) 1.6 م/ث²، (ب) 19 متراً' },
      { id: 'B', textEn: '(a) 2.0 m/s², (b) 24 m', textAr: '(أ) 2.0 م/ث²، (ب) 24 متراً' },
      { id: 'C', textEn: '(a) 1.2 m/s², (b) 16 m', textAr: '(أ) 1.2 م/ث²، (ب) 16 متراً' },
      { id: 'D', textEn: '(a) 1.6 m/s², (b) 14 m', textAr: '(أ) 1.6 م/ث²، (ب) 14 متراً' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Deceleration = change in speed / time = 4 / 2.5 = 1.6 m/s². (b) Distance = Area under graph = (3.5 * 4) + 0.5 * 2.5 * 4 = 14 + 5 = 19 m.',
    explanationAr: '(أ) التباطؤ = التغير في السرعة ÷ الزمن = 4 ÷ 2.5 = 1.6 م/ث². (ب) المسافة الكلية = المساحة تحت المنحنى (مستطيل + مثلث) = (3.5 × 4) + (0.5 × 2.5 × 4) = 14 + 5 = 19 متراً.',
    solutionStepsEn: [
      'Step 1: Deceleration = Speed change / Deceleration time = 4 m/s / 2.5 s = 1.6 m/s².',
      'Step 2: Distance in constant speed phase = 3.5 s × 4 m/s = 14 m.',
      'Step 3: Distance in deceleration phase = 1/2 × base × height = 0.5 × 2.5 s × 4 m/s = 5 m.',
      'Step 4: Total Distance = 14 m + 5 m = 19 m.'
    ],
    solutionStepsAr: [
      'الخطوة 1: التباطؤ = مقدار النقصان في السرعة ÷ زمن التباطؤ = 4 ÷ 2.5 = 1.6 م/ث².',
      'الخطوة 2: مسافة المرحلة الأولى (سرعة منتظمة) = 3.5 × 4 = 14 متراً.',
      'الخطوة 3: مسافة المرحلة الثانية (مرحلة التباطؤ) = مساحة المثلث = 0.5 × 2.5 × 4 = 5 أمتار.',
      'الخطوة 4: المسافة الكلية = 14 + 5 = 19 متراً.'
    ],
    marks: 3
  },
  {
    id: 'IG-2002-ON-02-14',
    code: '0580/02/O/N/02 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Circle Theorems & Geometry',
    topicAr: 'نظريات الدوائر والهندسة',
    diagramTitle: 'Cyclic Quadrilateral PQRS',
    diagramSvg: `<svg viewBox="0 0 200 200" class="w-full max-w-xs text-slate-800 dark:text-slate-100">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2"/>
      <polygon points="50,60 40,130 160,140 170,70" fill="none" stroke="#0d9488" stroke-width="2"/>
      <line x1="50" y1="60" x2="160" y2="140" stroke="currentColor" stroke-dasharray="2 2"/>
      <line x1="40" y1="130" x2="170" y2="70" stroke="currentColor" stroke-dasharray="2 2"/>
      <text x="40" y="55" fill="currentColor" class="text-[12px] font-bold">P</text>
      <text x="25" y="135" fill="currentColor" class="text-[12px] font-bold">Q</text>
      <text x="165" y="150" fill="currentColor" class="text-[12px] font-bold">R</text>
      <text x="175" y="65" fill="currentColor" class="text-[12px] font-bold">S</text>
      <text x="95" y="105" fill="currentColor" class="text-[10px]">X</text>
    </svg>`,
    questionEn: 'PQRS is a cyclic quadrilateral. Diagonals PR and QS intersect at X. Angle SPR = 21°, angle PRS = 80° and angle PXQ = 33°.\nCalculate:\n(a) angle PQS\n(b) angle QPR\n(c) angle PSQ.',
    questionAr: 'الشكل الرباعي الدائري PQRS تتقاطع قطرتاه PR و QS في النقطة X. الزاوية SPR = 21° والزاوية PRS = 80° والزاوية PXQ = 33°.\nاحسب:\n(أ) الزاوية PQS\n(ب) الزاوية QPR\n(ج) الزاوية PSQ.',
    options: [
      { id: 'A', textEn: '(a) 80°, (b) 67°, (c) 12°', textAr: '(أ) 80°، (ب) 67°، (ج) 12°' },
      { id: 'B', textEn: '(a) 70°, (b) 60°, (c) 15°', textAr: '(أ) 70°، (ب) 60°، (ج) 15°' },
      { id: 'C', textEn: '(a) 85°, (b) 65°, (c) 10°', textAr: '(أ) 85°، (ب) 65°، (ج) 10°' },
      { id: 'D', textEn: '(a) 80°, (b) 57°, (c) 20°', textAr: '(أ) 80°، (ب) 57°، (ج) 20°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Angle PQS = angle PRS = 80° (angles in same segment). (b) In triangle PXQ, angle QPR = 180° - (33° + 80°) = 67°. (c) Angle PSQ = 180° - (21° + 80° + 67°) = 12°.',
    explanationAr: '(أ) الزاوية PQS = الزاوية PRS = 80° (زاويتان محيطيتان تشتركان في نفس القوس PS). (ب) في المثلث PXQ: الزاوية QPR = 180° - (33° + 80°) = 67°. (ج) الزاوية PSQ = 12°.',
    solutionStepsEn: [
      'Step 1: Angle PQS and angle PRS subtend the same arc PS => Angle PQS = 80°.',
      'Step 2: Sum of angles in triangle PXQ = 180° => Angle QPR = 180° - (33° + 80°) = 67°.',
      'Step 3: In triangle PXR or triangle PSR => Angle PSQ = 180° - (21° + 80° + 67°) = 12°.'
    ],
    solutionStepsAr: [
      'الخطوة 1: الزاويتان PQS و PRS محيطيتان مرسومتان على نفس القوس PS، إذن الزاوية PQS = 80°.',
      'الخطوة 2: مجموع زوايا المثلث PXQ = 180°، إذاً الزاوية QPR = 180° - (33° + 80°) = 67°.',
      'الخطوة 3: في المثلث الكلي PRS: الزاوية PSQ = 180° - (21° + 80° + 67°) = 12°.'
    ],
    marks: 3
  },

  // PAPER 3 (0580/03)
  {
    id: 'IG-2002-ON-03-01',
    code: '0580/03/O/N/02 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 3 (Core)',
    topicEn: 'Polygons & Interior Angles',
    topicAr: 'المضلعات والزوايا الداخلية',
    questionEn: 'Calculate the interior angle of a regular 8-sided polygon (octagon).',
    questionAr: 'احسب قياس الزاوية الداخلية لمضلع منتظم ذي 8 أضلاع (ثماني منتظم).',
    options: [
      { id: 'A', textEn: '135°', textAr: '135°' },
      { id: 'B', textEn: '140°', textAr: '140°' },
      { id: 'C', textEn: '120°', textAr: '120°' },
      { id: 'D', textEn: '108°', textAr: '108°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sum of interior angles = (8 - 2) * 180 = 1080°. Each angle = 1080 / 8 = 135°.',
    explanationAr: 'مجموع الزوايا الداخلية = (8 - 2) × 180 = 1080°. الزاوية الواحدة = 1080 ÷ 8 = 135°.',
    solutionStepsEn: [
      'Step 1: Formula for interior angle sum = (n - 2) × 180°.',
      'Step 2: For n = 8: (8 - 2) × 180° = 6 × 180° = 1080°.',
      'Step 3: Each interior angle = 1080° / 8 = 135°.'
    ],
    solutionStepsAr: [
      'الخطوة 1: قانون مجموع الزوايا الداخلية = (n - 2) × 180°.',
      'الخطوة 2: التعويض بـ n = 8: (8 - 2) × 180° = 6 × 180° = 1080°.',
      'الخطوة 3: قسمة المجموع على 8: 1080° ÷ 8 = 135°.'
    ],
    marks: 2
  },
  {
    id: 'IG-2002-ON-03-02',
    code: '0580/03/O/N/02 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 3 (Core)',
    topicEn: 'Simultaneous Linear Equations',
    topicAr: 'المعادلات الخطية الآنية',
    questionEn: 'Solve the simultaneous equations:\n3x + 2y = 17\n2x - 5y = 5',
    questionAr: 'حل نظام المعادلتين الآنيتين:\n3x + 2y = 17\n2x - 5y = 5',
    options: [
      { id: 'A', textEn: 'x = 5, y = 1', textAr: 'x = 5, y = 1' },
      { id: 'B', textEn: 'x = 3, y = 4', textAr: 'x = 3, y = 4' },
      { id: 'C', textEn: 'x = 4, y = 2.5', textAr: 'x = 4, y = 2.5' },
      { id: 'D', textEn: 'x = 5, y = -1', textAr: 'x = 5, y = -1' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply Eq1 by 5 and Eq2 by 2: 15x + 10y = 85 and 4x - 10y = 10. Add them: 19x = 95 => x = 5. Sub x=5 into Eq1: 15 + 2y = 17 => y = 1.',
    explanationAr: 'بضرب الأولى في 5 والثانية في 2: 15x + 10y = 85 و 4x - 10y = 10. بالجمع: 19x = 95 إذن x = 5. بالتعويض نحصل على y = 1.',
    solutionStepsEn: [
      'Step 1: Multiply 3x + 2y = 17 by 5 => 15x + 10y = 85.',
      'Step 2: Multiply 2x - 5y = 5 by 2 => 4x - 10y = 10.',
      'Step 3: Add both equations => 19x = 95 => x = 5.',
      'Step 4: Substitute x = 5 into 3(5) + 2y = 17 => 2y = 2 => y = 1.'
    ],
    solutionStepsAr: [
      'الخطوة 1: ضرب المعادلة الأولى × 5: 15x + 10y = 85.',
      'الخطوة 2: ضرب المعادلة الثانية × 2: 4x - 10y = 10.',
      'الخطوة 3: جمع المعادلتين للتخلص من y: 19x = 95 وبالتالي x = 5.',
      'الخطوة 4: التعويض بقيمة x في الأولى: 3(5) + 2y = 17 => 2y = 2 إذاً y = 1.'
    ],
    marks: 3
  },

  // PAPER 4 (0580/04)
  {
    id: 'IG-2002-ON-04-01',
    code: '0580/04/O/N/02 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Trigonometry & Cosine Rule',
    topicAr: 'حساب المثلثات وقانون جيب التمام',
    questionEn: 'In triangle ABC, side a = 8 cm, side b = 11 cm, and angle C = 42°. Calculate the length of side c.',
    questionAr: 'في المثلث ABC، الضلع a = 8 cm والضلع b = 11 cm والزاوية المحصورة C = 42°. احسب طول الضلع c.',
    options: [
      { id: 'A', textEn: '7.42 cm', textAr: '7.42 سم' },
      { id: 'B', textEn: '8.15 cm', textAr: '8.15 سم' },
      { id: 'C', textEn: '6.95 cm', textAr: '6.95 سم' },
      { id: 'D', textEn: '9.30 cm', textAr: '9.30 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Using Cosine Rule: c² = a² + b² - 2ab cos(C) = 64 + 121 - 2(8)(11) cos(42°) = 185 - 176(0.7431) = 54.21 => c = 7.42 cm.',
    explanationAr: 'باستخدام قانون جيب التمام: c² = 8² + 11² - 2(8)(11) cos(42°) = 64 + 121 - 130.79 = 54.21. إذن c = √54.21 = 7.42 سم.',
    solutionStepsEn: [
      'Step 1: Write Cosine Rule: c² = a² + b² - 2ab cos(C).',
      'Step 2: Substitute values: c² = 8² + 11² - 2(8)(11) cos(42°).',
      'Step 3: c² = 64 + 121 - 176 × 0.74314 = 185 - 130.79 = 54.21.',
      'Step 4: Take square root: c = √54.21 ≈ 7.42 cm.'
    ],
    solutionStepsAr: [
      'الخطوة 1: تطبيق قانون جيب التمام: c² = a² + b² - 2ab cos(C).',
      'الخطوة 2: التعويض بالأرقام: c² = 8² + 11² - 2(8)(11) cos(42°).',
      'الخطوة 3: حساب النواتج: c² = 64 + 121 - 130.79 = 54.21.',
      'الخطوة 4: الجذر التربيعي للطرفين: c = √54.21 ≈ 7.42 سم.'
    ],
    marks: 4
  },
  {
    id: 'IG-2002-ON-04-04',
    code: '0580/04/O/N/02 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2002,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Probability & Spinners',
    topicAr: 'الاحتمالات وعجلة الأرقام',
    diagramTitle: '10-Sector Numbered Wheel Spinner',
    diagramSvg: `<svg viewBox="0 0 200 200" class="w-full max-w-xs text-slate-800 dark:text-slate-100">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2"/>
      <!-- 10 sectors -->
      <line x1="100" y1="100" x2="100" y2="20" stroke="currentColor"/>
      <line x1="100" y1="100" x2="147" y2="35" stroke="currentColor"/>
      <line x1="100" y1="100" x2="176" y2="75" stroke="currentColor"/>
      <line x1="100" y1="100" x2="176" y2="125" stroke="currentColor"/>
      <line x1="100" y1="100" x2="147" y2="165" stroke="currentColor"/>
      <line x1="100" y1="100" x2="100" y2="180" stroke="currentColor"/>
      <line x1="100" y1="100" x2="53" y2="165" stroke="currentColor"/>
      <line x1="100" y1="100" x2="24" y2="125" stroke="currentColor"/>
      <line x1="100" y1="100" x2="24" y2="75" stroke="currentColor"/>
      <line x1="100" y1="100" x2="53" y2="35" stroke="currentColor"/>
      <!-- Arrow -->
      <polygon points="20,100 40,95 40,105" fill="#0d9488"/>
      <!-- Numbers 1 to 10 -->
      <text x="70" y="50" fill="currentColor" class="text-[11px] font-bold">1</text>
      <text x="120" y="50" fill="currentColor" class="text-[11px] font-bold">2</text>
      <text x="150" y="80" fill="currentColor" class="text-[11px] font-bold">3</text>
      <text x="150" y="130" fill="currentColor" class="text-[11px] font-bold">4</text>
      <text x="120" y="160" fill="currentColor" class="text-[11px] font-bold">5</text>
      <text x="70" y="160" fill="currentColor" class="text-[11px] font-bold">6</text>
      <text x="40" y="130" fill="currentColor" class="text-[11px] font-bold">7</text>
      <text x="40" y="80" fill="currentColor" class="text-[11px] font-bold">8</text>
    </svg>`,
    questionEn: 'A wheel is divided into 10 equal sectors numbered 1 to 10. Sectors 1, 2, 3 and 4 are shaded.\n(a) The wheel is spun once. Find the probability that:\n(i) the number is even\n(ii) the sector is shaded\n(iii) the number is even OR shaded\n(iv) the number is odd AND shaded.',
    questionAr: 'عجلة مقسمة إلى 10 قطاعات متساوية مرقمة من 1 إلى 10. القطاعات 1 و 2 و 3 و 4 مضللة.\n(أ) دُوّرت العجلة مرة واحدة. أوجد احتمال أن يكون الرقم:\n(1) زوجياً\n(2) مضللاً\n(3) زوجياً أو مضللاً\n(4) فردياً ومضللاً بنفس الوقت.',
    options: [
      { id: 'A', textEn: '(i) 0.5, (ii) 0.4, (iii) 0.7, (iv) 0.2', textAr: '(1) 0.5، (2) 0.4، (3) 0.7، (4) 0.2' },
      { id: 'B', textEn: '(i) 0.5, (ii) 0.5, (iii) 0.8, (iv) 0.1', textAr: '(1) 0.5، (2) 0.5، (3) 0.8، (4) 0.1' },
      { id: 'C', textEn: '(i) 0.4, (ii) 0.4, (iii) 0.6, (iv) 0.2', textAr: '(1) 0.4، (2) 0.4، (3) 0.6، (4) 0.2' },
      { id: 'D', textEn: '(i) 0.5, (ii) 0.3, (iii) 0.7, (iv) 0.3', textAr: '(1) 0.5، (2) 0.3، (3) 0.7، (4) 0.3' }
    ],
    correctAnswer: 'A',
    explanationEn: '(i) Evens: {2,4,6,8,10} => 5/10 = 0.5. (ii) Shaded: {1,2,3,4} => 4/10 = 0.4. (iii) Even OR shaded: {1,2,3,4,6,8,10} => 7/10 = 0.7. (iv) Odd AND shaded: {1,3} => 2/10 = 0.2.',
    explanationAr: '(1) الأعداد الزوجية: {2,4,6,8,10} وعددهم 5 من 10 = 0.5. (2) المضللة: {1,2,3,4} وعددهم 4 من 10 = 0.4. (3) زوجي أو مضلل: {1,2,3,4,6,8,10} وعددهم 7 من 10 = 0.7. (4) فردي ومضلل: {1,3} وعددهم 2 من 10 = 0.2.',
    solutionStepsEn: [
      'Step 1: Total possible sectors = 10.',
      'Step 2: Even numbers = 2, 4, 6, 8, 10 (5 outcomes) => P(Even) = 5/10 = 0.5.',
      'Step 3: Shaded sectors = 1, 2, 3, 4 (4 outcomes) => P(Shaded) = 4/10 = 0.4.',
      'Step 4: Even OR Shaded = {1, 2, 3, 4, 6, 8, 10} (7 outcomes) => P = 7/10 = 0.7.',
      'Step 5: Odd AND Shaded = {1, 3} (2 outcomes) => P = 2/10 = 0.2.'
    ],
    solutionStepsAr: [
      'الخطوة 1: المجموع الكلي للقطاعات = 10.',
      'الخطوة 2: الأعداد الزوجية هي {2,4,6,8,10}، الاحتمال = 5 ÷ 10 = 0.5.',
      'الخطوة 3: القطاعات المضللة هي {1,2,3,4}، الاحتمال = 4 ÷ 10 = 0.4.',
      'الخطوة 4: زوجي أو مضلل = الاتحاد = {1,2,3,4,6,8,10} (7 عناصر)، الاحتمال = 7 ÷ 10 = 0.7.',
      'الخطوة 5: فردي ومضلل = التقاطع = {1,3} (عنصران)، الاحتمال = 2 ÷ 10 = 0.2.'
    ],
    marks: 4
  },

  // 2003 - Comprehensive Exam Papers Collection (0580/01, 0580/02, 0580/03, 0580/04 Oct/Nov 2003)
  // PAPER 1 (0580/01 - Core)
  {
    id: 'IG-2003-ON-01-01',
    code: '0580/01/O/N/03 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Unit Conversion',
    topicAr: 'تحويل الوحدات',
    questionEn: 'Write 0.4 kilograms in grams.',
    questionAr: 'اكتب 0.4 كيلوجرام بوحدة الجرامات.',
    options: [
      { id: 'A', textEn: '400 g', textAr: '400 جرام' },
      { id: 'B', textEn: '40 g', textAr: '40 جرام' },
      { id: 'C', textEn: '4000 g', textAr: '4000 جرام' },
      { id: 'D', textEn: '4 g', textAr: '4 جرام' }
    ],
    correctAnswer: 'A',
    explanationEn: '0.4 kg = 0.4 × 1000 = 400 g.',
    explanationAr: '0.4 كجم = 0.4 × 1000 = 400 جرام.',
    solutionStepsEn: ['Step 1: 1 kg = 1000 g.', 'Step 2: 0.4 × 1000 = 400 g.'],
    solutionStepsAr: ['الخطوة 1: 1 كجم = 1000 جرام.', 'الخطوة 2: 0.4 × 1000 = 400 جرام.'],
    marks: 1
  },
  {
    id: 'IG-2003-ON-01-02',
    code: '0580/01/O/N/03 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Percentages & Discounts',
    topicAr: 'النسب المئوية والخصومات',
    questionEn: 'The price of a book is $18. Sarah receives a discount of 15%. Calculate the value of this discount.',
    questionAr: 'سعر كتاب هو 18$. حصلت سارة على خصم بنسبة 15%. احسب قيمة هذا الخصم.',
    options: [
      { id: 'A', textEn: '$2.70', textAr: '$2.70' },
      { id: 'B', textEn: '$3.60', textAr: '$3.60' },
      { id: 'C', textEn: '$15.30', textAr: '$15.30' },
      { id: 'D', textEn: '$2.50', textAr: '$2.50' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Discount = 15% of $18 = 0.15 × 18 = $2.70.',
    explanationAr: 'الخصم = 15% من 18$ = 0.15 × 18 = 2.70$.',
    solutionStepsEn: ['Step 1: 15 / 100 = 0.15.', 'Step 2: 0.15 × 18 = $2.70.'],
    solutionStepsAr: ['الخطوة 1: 15 ÷ 100 = 0.15.', 'الخطوة 2: 0.15 × 18 = 2.70$.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-01-03',
    code: '0580/01/O/N/03 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Probability',
    topicAr: 'الاحتمالات',
    questionEn: 'Susan writes the letters of her name on 5 separate cards (S, U, S, A, N). One card is chosen at random. Find the probability that the letter on the card is: (a) letter S, (b) letter E.',
    questionAr: 'كتبت (Susan) أحرف اسمها على خمس بطاقات منفصلة (S, U, S, A, N). تم اختيار إحدى البطاقات عشوائياً. أوجد احتمال أن يكون الحرف: (أ) الحرف S، (ب) الحرف E.',
    options: [
      { id: 'A', textEn: '(a) 2/5, (b) 0', textAr: '(أ) 2/5، (ب) 0' },
      { id: 'B', textEn: '(a) 1/5, (b) 1/5', textAr: '(أ) 1/5، (ب) 1/5' },
      { id: 'C', textEn: '(a) 2/5, (b) 1/5', textAr: '(أ) 2/5، (ب) 1/5' },
      { id: 'D', textEn: '(a) 3/5, (b) 0', textAr: '(أ) 3/5، (ب) 0' }
    ],
    correctAnswer: 'A',
    explanationEn: 'P(S) = 2/5 because there are two S letters out of 5 cards. P(E) = 0 because E does not exist in SUSAN.',
    explanationAr: 'احتمال S = 2/5 لوجود حرفين S. احتمال E = 0 لعدم وجود الحرف E في الاسم.',
    solutionStepsEn: ['Step 1: Total cards = 5.', 'Step 2: Count of S = 2 => P(S) = 2/5.', 'Step 3: Count of E = 0 => P(E) = 0.'],
    solutionStepsAr: ['الخطوة 1: المجموع = 5 بطاقات.', 'الخطوة 2: عدد أحرف S هو 2 => P(S) = 2/5.', 'الخطوة 3: عدد أحرف E هو 0 => P(E) = 0.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-01-04',
    code: '0580/01/O/N/03 Q4',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Pie Charts',
    topicAr: 'المخططات الدائرية',
    questionEn: 'A pie chart shows votes for Red, Blue, and Green parties. Sector angle for Red is x°, and the other two sectors are 144° and 132°. (a) Find x. (b) Find the percentage of votes for Red.',
    questionAr: 'يوضح مخطط دائري أصوات الأحزاب: زاوية الحزب الأحمر x° والآخران 144° و 132°. (أ) أوجد قيمة x. (ب) ما النسبة المئوية لأصوات الحزب الأحمر؟',
    options: [
      { id: 'A', textEn: '(a) x = 84, (b) 23.3%', textAr: '(أ) x = 84، (ب) 23.3%' },
      { id: 'B', textEn: '(a) x = 94, (b) 26.1%', textAr: '(أ) x = 94، (ب) 26.1%' },
      { id: 'C', textEn: '(a) x = 74, (b) 20.5%', textAr: '(أ) x = 74، (ب) 20.5%' },
      { id: 'D', textEn: '(a) x = 84, (b) 25.0%', textAr: '(أ) x = 84، (ب) 25.0%' }
    ],
    correctAnswer: 'A',
    explanationEn: 'x = 360 - (144 + 132) = 84°. Percentage = (84 / 360) × 100 = 23.33%.',
    explanationAr: 'x = 360 - (144 + 132) = 84°. النسبة المئوية = (84 ÷ 360) × 100 = 23.3%.',
    solutionStepsEn: ['Step 1: Total circle angle = 360°.', 'Step 2: x = 360 - 276 = 84°.', 'Step 3: Percentage = (84 / 360) × 100 = 23.3%.'],
    solutionStepsAr: ['الخطوة 1: زاوية الدائرة = 360°.', 'الخطوة 2: x = 360 - 276 = 84°.', 'الخطوة 3: النسبة = (84 ÷ 360) × 100 = 23.3%.'],
    marks: 3
  },
  {
    id: 'IG-2003-ON-01-05',
    code: '0580/01/O/N/03 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Trigonometric Ratios',
    topicAr: 'النسب المثلثية',
    questionEn: 'In right-angled triangle ABC, AB = 5 metres and angle BAC = 20°. Calculate the length of side BC.',
    questionAr: 'في المثلث القائم ABC، إذا كان AB = 5 م والزاوية BAC = 20°، احسب طول الضلع BC.',
    options: [
      { id: 'A', textEn: '1.71 m', textAr: '1.71 متر' },
      { id: 'B', textEn: '1.82 m', textAr: '1.82 متر' },
      { id: 'C', textEn: '4.70 m', textAr: '4.70 متر' },
      { id: 'D', textEn: '1.55 m', textAr: '1.55 متر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'BC = 5 × sin(20°) = 5 × 0.3420 = 1.71 metres.',
    explanationAr: 'BC = 5 × sin(20°) = 5 × 0.3420 = 1.71 متر.',
    solutionStepsEn: ['Step 1: sin(20°) = BC / AB = BC / 5.', 'Step 2: BC = 5 × sin(20°) = 1.71 m.'],
    solutionStepsAr: ['الخطوة 1: جا(20°) = BC ÷ 5.', 'الخطوة 2: BC = 5 × sin(20°) = 1.71 متر.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-01-06',
    code: '0580/01/O/N/03 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Average Speed',
    topicAr: 'السرعة المتوسطة',
    questionEn: 'Jeff takes 10 minutes to walk 1 km. Find his average walking speed in km/h.',
    questionAr: 'يستغرق (Jeff) 10 دقائق لقطع مسافة 1 كم مشياً. أوجد متوسط سرعته بوحدة كم/ساعة.',
    options: [
      { id: 'A', textEn: '6 km/h', textAr: '6 كم/ساعة' },
      { id: 'B', textEn: '10 km/h', textAr: '10 كم/ساعة' },
      { id: 'C', textEn: '5 km/h', textAr: '5 كم/ساعة' },
      { id: 'D', textEn: '60 km/h', textAr: '60 كم/ساعة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Time = 10 mins = 10/60 = 1/6 hours. Speed = Distance / Time = 1 / (1/6) = 6 km/h.',
    explanationAr: 'الزمن = 10 دقائق = 1/6 ساعة. السرعة = المسافة ÷ الزمن = 1 ÷ (1/6) = 6 كم/ساعة.',
    solutionStepsEn: ['Step 1: 10 minutes = 1/6 hour.', 'Step 2: Speed = 1 km ÷ (1/6 h) = 6 km/h.'],
    solutionStepsAr: ['الخطوة 1: 10 دقائق = 1/6 ساعة.', 'الخطوة 2: السرعة = 1 كم ÷ (1/6 ساعة) = 6 كم/ساعة.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-01-07',
    code: '0580/01/O/N/03 Q7',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Polygon Angles',
    topicAr: 'زوايا المضلعات',
    questionEn: 'Find the size of one interior angle of a regular 10-sided polygon (decagon).',
    questionAr: 'أوجد قياس إحدى الزوايا الداخلية لمضلع منتظم ذو 10 أضلاع.',
    options: [
      { id: 'A', textEn: '144°', textAr: '144°' },
      { id: 'B', textEn: '135°', textAr: '135°' },
      { id: 'C', textEn: '150°', textAr: '150°' },
      { id: 'D', textEn: '140°', textAr: '140°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Interior angle = (n - 2) × 180° / n = (10 - 2) × 180° / 10 = 8 × 18 = 144°.',
    explanationAr: 'الزاوية الداخلية = (n - 2) × 180° ÷ n = (8 × 180°) ÷ 10 = 144°.',
    solutionStepsEn: ['Step 1: Sum of angles = (10 - 2) × 180° = 1440°.', 'Step 2: One interior angle = 1440° / 10 = 144°.'],
    solutionStepsAr: ['الخطوة 1: مجموع الزوايا = 8 × 180° = 1440°.', 'الخطوة 2: الزاوية الواحدة = 1440° ÷ 10 = 144°.'],
    marks: 3
  },
  {
    id: 'IG-2003-ON-01-08',
    code: '0580/01/O/N/03 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Lower and Upper Bounds',
    topicAr: 'الحدود الدنيا والعليا',
    questionEn: 'The length of a road is 1300 metres, rounded to the nearest 100 metres. Complete: ___ m ≤ length < ___ m.',
    questionAr: 'طول طريق هو 1300 متر مقرباً لأقرب 100 متر. أكمل العبارة بالحدود: ___ ≤ طول الطريق < ___.',
    options: [
      { id: 'A', textEn: '1250 ≤ length < 1350', textAr: '1250 ≤ طول الطريق < 1350' },
      { id: 'B', textEn: '1200 ≤ length < 1400', textAr: '1200 ≤ طول الطريق < 1400' },
      { id: 'C', textEn: '1295 ≤ length < 1305', textAr: '1295 ≤ طول الطريق < 1305' },
      { id: 'D', textEn: '1250 ≤ length ≤ 1350', textAr: '1250 ≤ طول الطريق ≤ 1350' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Accuracy is 100 m, so error margin is ±50 m. Lower bound = 1250, Upper bound = 1350.',
    explanationAr: 'درجة التقريب 100 متر، هامش الخطأ ±50 متر. الحد الأدنى = 1250، والحد الأعلى = 1350.',
    solutionStepsEn: ['Step 1: Half of unit = 100 / 2 = 50 m.', 'Step 2: Lower bound = 1300 - 50 = 1250 m.', 'Step 3: Upper bound = 1300 + 50 = 1350 m.'],
    solutionStepsAr: ['الخطوة 1: نصف وحدة التقريب = 100 ÷ 2 = 50 متر.', 'الخطوة 2: الحد الأدنى = 1300 - 50 = 1250 متر.', 'الخطوة 3: الحد الأعلى = 1300 + 50 = 1350 متر.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-01-09',
    code: '0580/01/O/N/03 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Algebraic Expansion & Factorisation',
    topicAr: 'فك الأقواس والتحليل الجبري',
    questionEn: '(a) Expand 5x(2x - 3y). (b) Factorise completely: 6x² + 12x.',
    questionAr: '(أ) فك الأقواس: 5x(2x - 3y). (ب) حلل تحليلاً كاملاً: 6x² + 12x.',
    options: [
      { id: 'A', textEn: '(a) 10x² - 15xy, (b) 6x(x + 2)', textAr: '(أ) 10x² - 15xy، (ب) 6x(x + 2)' },
      { id: 'B', textEn: '(a) 10x² - 3y, (b) 6(x² + 2x)', textAr: '(أ) 10x² - 3y، (ب) 6(x² + 2x)' },
      { id: 'C', textEn: '(a) 7x² - 15xy, (b) 3x(2x + 4)', textAr: '(أ) 7x² - 15xy، (ب) 3x(2x + 4)' },
      { id: 'D', textEn: '(a) 10x² - 15x, (b) 6x(x + 12)', textAr: '(أ) 10x² - 15x، (ب) 6x(x + 12)' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 5x × 2x - 5x × 3y = 10x² - 15xy. (b) HCF of 6x² and 12x is 6x => 6x(x + 2).',
    explanationAr: '(أ) 5x × 2x - 5x × 3y = 10x² - 15xy. (ب) العامل المشترك الأكبر هو 6x => 6x(x + 2).',
    solutionStepsEn: ['Step 1: Multiply terms inside parenthesis: 5x(2x) - 5x(3y) = 10x² - 15xy.', 'Step 2: Factor out 6x from 6x² + 12x => 6x(x + 2).'],
    solutionStepsAr: ['الخطوة 1: فك الأقواس: 5x(2x) - 5x(3y) = 10x² - 15xy.', 'الخطوة 2: إخراج 6x كعامل مشترك من 6x² + 12x => 6x(x + 2).'],
    marks: 4
  },
  {
    id: 'IG-2003-ON-01-12',
    code: '0580/01/O/N/03 Q12',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Simultaneous Equations',
    topicAr: 'المعادلات الآنية',
    questionEn: 'Solve the simultaneous equations: 3x - y = 0 and x + 2y = 28.',
    questionAr: 'حل المعادلتين آنياً: 3x - y = 0 و x + 2y = 28.',
    options: [
      { id: 'A', textEn: 'x = 4, y = 12', textAr: 'x = 4، y = 12' },
      { id: 'B', textEn: 'x = 3, y = 9', textAr: 'x = 3، y = 9' },
      { id: 'C', textEn: 'x = 6, y = 18', textAr: 'x = 6، y = 18' },
      { id: 'D', textEn: 'x = 4, y = 8', textAr: 'x = 4، y = 8' }
    ],
    correctAnswer: 'A',
    explanationEn: 'From equation 1, y = 3x. Substitute into equation 2: x + 2(3x) = 28 => 7x = 28 => x = 4. Then y = 3(4) = 12.',
    explanationAr: 'من الأولى y = 3x. بالتعويض في الثانية: x + 6x = 28 => 7x = 28 => x = 4، ومنها y = 12.',
    solutionStepsEn: ['Step 1: Express y = 3x.', 'Step 2: Substitute: x + 2(3x) = 28 => 7x = 28 => x = 4.', 'Step 3: y = 3 × 4 = 12.'],
    solutionStepsAr: ['الخطوة 1: التعويض بـ y = 3x.', 'الخطوة 2: x + 6x = 28 => 7x = 28 => x = 4.', 'الخطوة 3: y = 3(4) = 12.'],
    marks: 3
  },
  {
    id: 'IG-2003-ON-01-14',
    code: '0580/01/O/N/03 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Statistics & Mean',
    topicAr: 'الإحصاء والمتوسط الحسابي',
    questionEn: 'Dawn temperatures in Berne over 7 days: Sun -1°C, Mon -7°C, Tue -6°C, Wed 1°C, Thu 3°C, Fri 0°C, Sat -4°C. (a) Days below -3°C. (b) Calculate mean temperature.',
    questionAr: 'حرارة الشروق في Berne: الأحد -1، الإثنين -7، الثلاثاء -6، الأربعاء 1، الخميس 3، الجمعة 0، السبت -4. (أ) الأيام أقل من -3°م. (ب) المتوسط الحسابي.',
    options: [
      { id: 'A', textEn: '(a) Monday, Tuesday, Saturday; (b) -2°C', textAr: '(أ) الإثنين، الثلاثاء، السبت؛ (ب) -2°م' },
      { id: 'B', textEn: '(a) Monday, Tuesday; (b) -2°C', textAr: '(أ) الإثنين، الثلاثاء؛ (ب) -2°م' },
      { id: 'C', textEn: '(a) Monday, Tuesday, Saturday; (b) -3°C', textAr: '(أ) الإثنين، الثلاثاء، السبت؛ (ب) -3°م' },
      { id: 'D', textEn: '(a) Tuesday, Saturday; (b) -1°C', textAr: '(أ) الثلاثاء، السبت؛ (ب) -1°م' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Temperatures < -3°C are -7°C (Mon), -6°C (Tue), -4°C (Sat). Sum = -1 -7 -6 + 1 + 3 + 0 -4 = -14. Mean = -14 / 7 = -2°C.',
    explanationAr: 'الأيام الأقل من -3°م هي الإثنين والثلاثاء والسبت. المجموع = -14 ÷ 7 = -2°م.',
    solutionStepsEn: ['Step 1: Check values < -3 => Mon, Tue, Sat.', 'Step 2: Sum = -14.', 'Step 3: Mean = -14 / 7 = -2°C.'],
    solutionStepsAr: ['الخطوة 1: الأيام الأقل من -3°م هي الإثنين، الثلاثاء، السبت.', 'الخطوة 2: مجموع الحرارة = -14.', 'الخطوة 3: المتوسط = -14 ÷ 7 = -2°م.'],
    marks: 4
  },
  {
    id: 'IG-2003-ON-01-16',
    code: '0580/01/O/N/03 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Pythagoras & Trigonometry',
    topicAr: 'فيثاغورس وحساب المثلثات',
    questionEn: 'A 5m ladder AB rests against a palm tree, with its base 2m from the tree. (a) How far up the tree does it reach? (b) Calculate the angle x° with the ground.',
    questionAr: 'سلم طوله 5 م يرتكز على شجرة نخيل، وتبعد قاعدته 2 م عن الشجرة. (أ) احسب ارتفاع الوصول، (ب) احسب الزاوية x° مع الأرض.',
    options: [
      { id: 'A', textEn: '(a) 4.58 m, (b) 66.4°', textAr: '(أ) 4.58 متر، (ب) 66.4°' },
      { id: 'B', textEn: '(a) 4.12 m, (b) 63.6°', textAr: '(أ) 4.12 متر، (ب) 63.6°' },
      { id: 'C', textEn: '(a) 4.58 m, (b) 23.6°', textAr: '(أ) 4.58 متر، (ب) 23.6°' },
      { id: 'D', textEn: '(a) 5.39 m, (b) 66.4°', textAr: '(أ) 5.39 متر، (ب) 66.4°' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Height = √(5² - 2²) = √21 ≈ 4.58 m. (b) cos(x) = 2 / 5 => x = cos⁻¹(0.4) = 66.42°.',
    explanationAr: '(أ) الارتفاع = √(25 - 4) = √21 = 4.58 م. (ب) جتا(x) = 2 ÷ 5 => x = 66.4°.',
    solutionStepsEn: ['Step 1: Height = √(25 - 4) = √21 = 4.58 m.', 'Step 2: cos(x) = 2 / 5 = 0.4.', 'Step 3: x = cos⁻¹(0.4) = 66.4°.'],
    solutionStepsAr: ['الخطوة 1: الارتفاع = √(25 - 4) = √21 = 4.58 متر.', 'الخطوة 2: cos(x) = 2 / 5 = 0.4.', 'الخطوة 3: x = 66.4°.'],
    marks: 4
  },
  {
    id: 'IG-2003-ON-01-17',
    code: '0580/01/O/N/03 Q17',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Indices & Standard Form',
    topicAr: 'الأسس والصيغة المعيارية',
    questionEn: 'Write the value of n in each: (a) 1500 = 1.5 × 10ⁿ, (b) 0.00015 = 1.5 × 10ⁿ, (c) 5ⁿ = 1, (d) 1/36 = 6ⁿ.',
    questionAr: 'اكتب قيمة n في كل مما يلي: (أ) 1500 = 1.5 × 10ⁿ، (ب) 0.00015 = 1.5 × 10ⁿ، (ج) 5ⁿ = 1، (د) 1/36 = 6ⁿ.',
    options: [
      { id: 'A', textEn: '(a) n = 3, (b) n = -4, (c) n = 0, (d) n = -2', textAr: '(أ) n = 3، (ب) n = -4، (ج) n = 0، (د) n = -2' },
      { id: 'B', textEn: '(a) n = 2, (b) n = -5, (c) n = 1, (d) n = -2', textAr: '(أ) n = 2، (ب) n = -5، (ج) n = 1، (د) n = -2' },
      { id: 'C', textEn: '(a) n = 3, (b) n = -3, (c) n = 0, (d) n = 2', textAr: '(أ) n = 3، (ب) n = -3، (ج) n = 0، (د) n = 2' },
      { id: 'D', textEn: '(a) n = 4, (b) n = -4, (c) n = 0, (d) n = -6', textAr: '(أ) n = 4، (ب) n = -4، (ج) n = 0، (د) n = -6' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 1500 = 1.5 × 10³. (b) 0.00015 = 1.5 × 10⁻⁴. (c) 5⁰ = 1. (d) 1/36 = 6⁻².',
    explanationAr: '(أ) 1500 = 1.5 × 10³. (ب) 0.00015 = 1.5 × 10⁻⁴. (ج) 5⁰ = 1. (د) 1/36 = 6⁻².',
    solutionStepsEn: ['(a) n = 3', '(b) n = -4', '(c) n = 0', '(d) n = -2'],
    solutionStepsAr: ['(أ) n = 3', '(ب) n = -4', '(ج) n = 0', '(د) n = -2'],
    marks: 4
  },

  // PAPER 2 (0580/02 - Extended)
  {
    id: 'IG-2003-ON-02-01',
    code: '0580/02/O/N/03 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Order of Operations',
    topicAr: 'ترتيب العمليات الحسابية',
    questionEn: 'Calculate: (2 + 12) / (4 + 3 × 8)',
    questionAr: 'احسب: (2 + 12) / (4 + 3 × 8)',
    options: [
      { id: 'A', textEn: '0.5', textAr: '0.5' },
      { id: 'B', textEn: '0.25', textAr: '0.25' },
      { id: 'C', textEn: '1.0', textAr: '1.0' },
      { id: 'D', textEn: '0.75', textAr: '0.75' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator = 2 + 12 = 14. Denominator = 4 + 24 = 28. Result = 14 / 28 = 0.5.',
    explanationAr: 'البسط = 14. المقام = 4 + 24 = 28. الناتج = 14 ÷ 28 = 0.5.',
    solutionStepsEn: ['Step 1: Numerator = 14.', 'Step 2: Denominator = 4 + 24 = 28.', 'Step 3: 14 / 28 = 0.5.'],
    solutionStepsAr: ['الخطوة 1: البسط = 14.', 'الخطوة 2: المقام = 4 + 24 = 28.', 'الخطوة 3: 14 ÷ 28 = 0.5.'],
    marks: 1
  },
  {
    id: 'IG-2003-ON-02-02',
    code: '0580/02/O/N/03 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Directed Numbers & Altitude',
    topicAr: 'الأعداد الموجهة والارتفاعات',
    questionEn: 'Death Valley altitude is -86 metres. Mount Whitney altitude is 4418 metres. Calculate the difference between these altitudes.',
    questionAr: 'ارتفاع وادي الموت -86 متراً. ارتفاع جبل ويتني 4418 متراً. احسب الفرق بين الارتفاعين.',
    options: [
      { id: 'A', textEn: '4504 m', textAr: '4504 متر' },
      { id: 'B', textEn: '4332 m', textAr: '4332 متر' },
      { id: 'C', textEn: '4418 m', textAr: '4418 متر' },
      { id: 'D', textEn: '4604 m', textAr: '4604 متر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Difference = 4418 - (-86) = 4418 + 86 = 4504 metres.',
    explanationAr: 'الفرق = 4418 - (-86) = 4418 + 86 = 4504 متر.',
    solutionStepsEn: ['Step 1: Difference = 4418 - (-86).', 'Step 2: 4418 + 86 = 4504 m.'],
    solutionStepsAr: ['الخطوة 1: الفرق = 4418 - (-86).', 'الخطوة 2: 4418 + 86 = 4504 متر.'],
    marks: 1
  },
  {
    id: 'IG-2003-ON-02-03',
    code: '0580/02/O/N/03 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Sequences & Nth Term',
    topicAr: 'المتتاليات والحد العام',
    questionEn: 'First 5 terms: 4, 9, 16, 25, 36, ... Find: (a) 10th term, (b) general nth term.',
    questionAr: 'الحدود الأولى لمتتالية: 4, 9, 16, 25, 36, ... أوجد: (أ) الحد العاشر، (ب) الحد العام.',
    options: [
      { id: 'A', textEn: '(a) 121, (b) (n + 1)²', textAr: '(أ) 121، (ب) (n + 1)²' },
      { id: 'B', textEn: '(a) 100, (b) n²', textAr: '(أ) 100، (ب) n²' },
      { id: 'C', textEn: '(a) 144, (b) (n + 2)²', textAr: '(أ) 144، (ب) (n + 2)²' },
      { id: 'D', textEn: '(a) 121, (b) n² + 3', textAr: '(أ) 121، (ب) n² + 3' }
    ],
    correctAnswer: 'A',
    explanationEn: 'The terms are 2², 3², 4², 5², 6², ... So nth term = (n + 1)². 10th term = (10 + 1)² = 11² = 121.',
    explanationAr: 'الحدود هي مربعات الأعداد بداية من 2² => (n + 1)². الحد العاشر = 11² = 121.',
    solutionStepsEn: ['Step 1: Notice 4=2², 9=3², 16=4².', 'Step 2: nth term = (n + 1)².', 'Step 3: 10th term = 11² = 121.'],
    solutionStepsAr: ['الخطوة 1: لاحظ أن 4=2²، 9=3².', 'الخطوة 2: الحد العام = (n + 1)².', 'الخطوة 3: الحد العاشر = 11² = 121.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-02-06',
    code: '0580/02/O/N/03 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Simple Interest Formula',
    topicAr: 'قانون الفائدة البسيطة',
    questionEn: 'Abid invests $240 at simple interest r% per year. After m months, interest is I dollars. Express I in terms of m and r.',
    questionAr: 'استثمر عبد 240$ بفائدة بسيطة معدلها r% سنوياً. بعد m شهراً، كانت الفائدة I. اكتب تعبيراً لـ I بدلالة m و r.',
    options: [
      { id: 'A', textEn: 'I = (m × r) / 5', textAr: 'I = (m × r) ÷ 5' },
      { id: 'B', textEn: 'I = 2mr', textAr: 'I = 2mr' },
      { id: 'C', textEn: 'I = (m × r) / 10', textAr: 'I = (m × r) ÷ 10' },
      { id: 'D', textEn: 'I = 24mr', textAr: 'I = 24mr' }
    ],
    correctAnswer: 'A',
    explanationEn: 'I = P × r × t = 240 × (r / 100) × (m / 12) = (240 / 1200) × m × r = 0.2 mr = (mr) / 5.',
    explanationAr: 'الفائدة = 240 × (r ÷ 100) × (m ÷ 12) = 0.2 mr = (m × r) ÷ 5.',
    solutionStepsEn: ['Step 1: Time in years = m / 12.', 'Step 2: I = 240 × (r / 100) × (m / 12) = (240 / 1200) mr = mr / 5.'],
    solutionStepsAr: ['الخطوة 1: الزمن بالسنوات = m ÷ 12.', 'الخطوة 2: I = 240 × (r ÷ 100) × (m ÷ 12) = (mr) ÷ 5.'],
    marks: 2
  },
  {
    id: 'IG-2003-ON-02-10',
    code: '0580/02/O/N/03 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Direct Proportion',
    topicAr: 'التناسب الطردي',
    questionEn: 'Force F is directly proportional to v². When v = 40, F = 18. Find F when v = 32.',
    questionAr: 'القوة F تتناسب طردياً مع مربع السرعة v². عند v = 40 تكون F = 18. أوجد F عندما v = 32.',
    options: [
      { id: 'A', textEn: '11.52', textAr: '11.52' },
      { id: 'B', textEn: '14.40', textAr: '14.40' },
      { id: 'C', textEn: '12.80', textAr: '12.80' },
      { id: 'D', textEn: '10.24', textAr: '10.24' }
    ],
    correctAnswer: 'A',
    explanationEn: 'F = k v² => 18 = k (40)² => k = 18 / 1600 = 0.01125. When v = 32: F = 0.01125 × (32)² = 11.52.',
    explanationAr: 'F = k v² => 18 = k (1600) => k = 0.01125. عند v = 32: F = 0.01125 × 1024 = 11.52.',
    solutionStepsEn: ['Step 1: k = 18 / 40² = 18 / 1600 = 0.01125.', 'Step 2: F = 0.01125 × 32² = 0.01125 × 1024 = 11.52.'],
    solutionStepsAr: ['الخطوة 1: k = 18 ÷ 1600 = 0.01125.', 'الخطوة 2: F = 0.01125 × 32² = 11.52.'],
    marks: 3
  },
  {
    id: 'IG-2003-ON-02-14',
    code: '0580/02/O/N/03 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebraic Fractions',
    topicAr: 'الكسور الجبرية',
    questionEn: '(a) Express 3/x - 2/(x+1) as a single fraction in simplest form. (b) Solve 3/x - 2/(x+1) = 0.',
    questionAr: '(أ) اكتب 3/x - 2/(x+1) ككسر واحد في أبسط صورة. (ب) حل المعادلة 3/x - 2/(x+1) = 0.',
    options: [
      { id: 'A', textEn: '(a) (x + 3) / [x(x + 1)], (b) x = -3', textAr: '(أ) (x + 3) / [x(x + 1)]، (ب) x = -3' },
      { id: 'B', textEn: '(a) 1 / [x(x + 1)], (b) x = 0', textAr: '(أ) 1 / [x(x + 1)]، (ب) x = 0' },
      { id: 'C', textEn: '(a) (x - 3) / [x(x + 1)], (b) x = 3', textAr: '(أ) (x - 3) / [x(x + 1)]، (ب) x = 3' },
      { id: 'D', textEn: '(a) (x + 3) / (2x + 1), (b) x = -3', textAr: '(أ) (x + 3) / (2x + 1)، (ب) x = -3' }
    ],
    correctAnswer: 'A',
    explanationEn: '3(x + 1) - 2x = 3x + 3 - 2x = x + 3 over x(x + 1). Setting numerator = 0 gives x + 3 = 0 => x = -3.',
    explanationAr: 'البسط = 3(x + 1) - 2x = x + 3. مساواة البسط بالصفر تعطي x = -3.',
    solutionStepsEn: ['Step 1: Common denominator x(x + 1).', 'Step 2: Numerator = 3(x + 1) - 2x = x + 3.', 'Step 3: Solve x + 3 = 0 => x = -3.'],
    solutionStepsAr: ['الخطوة 1: توحيد المقامات على x(x + 1).', 'الخطوة 2: البسط = 3x + 3 - 2x = x + 3.', 'الخطوة 3: حل x + 3 = 0 => x = -3.'],
    marks: 4
  },
  {
    id: 'IG-2003-ON-02-18',
    code: '0580/02/O/N/03 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Standard Form & Population Density',
    topicAr: 'الصيغة المعيارية والكثافة السكانية',
    questionEn: 'Europe pop: 580,000,000. Land area: 5,900,000 km². (a) Write 580,000,000 in standard form. (b) Persons per km² (nearest int). (c) Square metres per person.',
    questionAr: 'سكان أوروبا 580,000,000. المساحة 5,900,000 كم². (أ) اكتب السكان بالصيغة المعيارية. (ب) أوجد الكثافة (نسمة/كم²). (ج) م² لكل شخص.',
    options: [
      { id: 'A', textEn: '(a) 5.8 × 10⁸, (b) 98, (c) 10,172', textAr: '(أ) 5.8 × 10⁸، (ب) 98، (ج) 10,172' },
      { id: 'B', textEn: '(a) 58 × 10⁷, (b) 102, (c) 9,800', textAr: '(أ) 58 × 10⁷، (ب) 102، (ج) 9,800' },
      { id: 'C', textEn: '(a) 5.8 × 10⁸, (b) 98, (c) 1,017', textAr: '(أ) 5.8 × 10⁸، (ب) 98، (ج) 1,017' },
      { id: 'D', textEn: '(a) 5.8 × 10⁹, (b) 98, (c) 10,172', textAr: '(أ) 5.8 × 10⁹، (ب) 98، (ج) 10,172' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 5.8 × 10⁸. (b) Density = 580M / 5.9M ≈ 98.3 => 98. (c) Area per person = 5.9 × 10¹² m² / 5.8 × 10⁸ = 10,172 m².',
    explanationAr: '(أ) 5.8 × 10⁸. (ب) الكثافة = 580,000,000 ÷ 5,900,000 = 98. (ج) المساحة للشخص = 5.9 × 10¹² ÷ 5.8 × 10⁸ = 10,172 م².',
    solutionStepsEn: ['(a) 580,000,000 = 5.8 × 10⁸.', '(b) 580 / 5.9 = 98.3 => 98.', '(c) (5.9 × 10¹²) / (5.8 × 10⁸) = 10,172 m².'],
    solutionStepsAr: ['(أ) 5.8 × 10⁸.', '(ب) 580 ÷ 5.9 = 98.', '(ج) 5.9 × 10¹² ÷ 5.8 × 10⁸ = 10,172 م².'],
    marks: 5
  },

  // PAPER 3 (0580/03 - Core)
  {
    id: 'IG-2003-ON-03-01',
    code: '0580/03/O/N/03 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 3 (Core)',
    topicEn: 'Number Properties',
    topicAr: 'خواص الأعداد',
    questionEn: 'From numbers 1 to 30: (a) multiple of 8, (b) square number, (c) cube number, (d) two prime numbers, (e) factor of 156, (f) √784, (g) two numbers with product 567.',
    questionAr: 'من الأعداد 1 إلى 30: (أ) مضاعف لـ 8، (ب) عدد مربع، (ج) عدد مكعب، (د) أوليان، (هـ) عامل لـ 156، (و) √784، (ز) ناتج ضربهما 567.',
    options: [
      { id: 'A', textEn: '(a) 16, (b) 25, (c) 27, (d) 2 & 3, (e) 12, (f) 28, (g) 21 & 27', textAr: '(أ) 16، (ب) 25، (ج) 27، (د) 2 و 3، (هـ) 12، (و) 28، (ز) 21 و 27' },
      { id: 'B', textEn: '(a) 12, (b) 20, (c) 16, (d) 4 & 6, (e) 10, (f) 24, (g) 9 & 63', textAr: '(أ) 12، (ب) 20، (ج) 16، (د) 4 و 6، (هـ) 10، (و) 24، (ز) 9 و 63' },
      { id: 'C', textEn: '(a) 16, (b) 25, (c) 8, (d) 9 & 15, (e) 12, (f) 28, (g) 21 & 27', textAr: '(أ) 16، (ب) 25، (ج) 8، (د) 9 و 15، (هـ) 12، (و) 28، (ز) 21 و 27' },
      { id: 'D', textEn: '(a) 24, (b) 16, (c) 27, (d) 2 & 3, (e) 15, (f) 28, (g) 19 & 30', textAr: '(أ) 24، (ب) 16، (ج) 27، (د) 2 و 3، (هـ) 15، (و) 28، (ز) 19 و 30' }
    ],
    correctAnswer: 'A',
    explanationEn: '√784 = 28. 21 × 27 = 567. 16 is multiple of 8. 25 is square. 27 is cube.',
    explanationAr: '√784 = 28. و 21 × 27 = 567. و 16 مضاعف لـ 8. و 25 عدد مربع.',
    solutionStepsEn: ['Check each property individually against numbers 1 to 30.'],
    solutionStepsAr: ['التحقق من كل خاصية بشكل مستقل للأعداد بين 1 و 30.'],
    marks: 7
  },
  {
    id: 'IG-2003-ON-03-03',
    code: '0580/03/O/N/03 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 3 (Core)',
    topicEn: 'Volumes of Rectangular Tank & Cylinder',
    topicAr: 'حجم الخزان المستطيل والأسطوانة',
    questionEn: '(a) Rectangular tank 30cm × 25cm contains water to depth 8cm. Find volume. (b) Full cylinder (r=10cm, h=14cm) poured into tank. Find: cylinder volume, total volume, new depth.',
    questionAr: '(أ) خزان 30 × 25 سم بماء عمقه 8 سم. (ب) أسطوانة (نق=10، ع=14) سُكبت في الخزان. احسب حجم الأسطوانة، الحجم الكلي، والعمق الجديد.',
    options: [
      { id: 'A', textEn: 'Tank: 6000 cm³, Cyl: 4398.2 cm³, Total: 10398.2 cm³, Depth: 13.86 cm', textAr: 'الخزان: 6000 سم³، الأسطوانة: 4398.2 سم³، الكلي: 10398.2 سم³، العمق: 13.86 سم' },
      { id: 'B', textEn: 'Tank: 5000 cm³, Cyl: 4400 cm³, Total: 9400 cm³, Depth: 12.53 cm', textAr: 'الخزان: 5000 سم³، الأسطوانة: 4400 سم³، الكلي: 9400 سم³، العمق: 12.53 سم' },
      { id: 'C', textEn: 'Tank: 6000 cm³, Cyl: 1400 cm³, Total: 7400 cm³, Depth: 9.87 cm', textAr: 'الخزان: 6000 سم³، الأسطوانة: 1400 سم³، الكلي: 7400 سم³، العمق: 9.87 سم' },
      { id: 'D', textEn: 'Tank: 6000 cm³, Cyl: 4398.2 cm³, Total: 10398.2 cm³, Depth: 15.20 cm', textAr: 'الخزان: 6000 سم³، الأسطوانة: 4398.2 سم³، الكلي: 10398.2 سم³، العمق: 15.20 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Initial vol = 30 × 25 × 8 = 6000 cm³. Cyl vol = π × 10² × 14 ≈ 4398.2 cm³. Total = 10398.2 cm³. New depth = 10398.2 / (30 × 25) = 13.86 cm.',
    explanationAr: 'حجم الخزان = 6000 سم³. حجم الأسطوانة = 4398.2 سم³. الحجم الكلي = 10398.2 سم³. العمق الجديد = 13.86 سم.',
    solutionStepsEn: ['(a) Vol = 30 × 25 × 8 = 6000 cm³.', '(b1) Cyl = π × 100 × 14 = 4398.2 cm³.', '(b2) Total = 10398.2 cm³.', '(b3) Depth = 10398.2 / 750 = 13.86 cm.'],
    solutionStepsAr: ['(أ) الحجم = 6000 سم³.', '(ب1) الأسطوانة = 4398.2 سم³.', '(ب2) الإجمالي = 10398.2 سم³.', '(ب3) العمق = 13.86 سم.'],
    marks: 9
  },
  {
    id: 'IG-2003-ON-03-08',
    code: '0580/03/O/N/03 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 3 (Core)',
    topicEn: 'Percentage Increase & Time Usage',
    topicAr: 'الزيادة المئوية واستهلاك الدقائق',
    questionEn: '(a) Mobile fee changed from $80/yr to $7.50/mo. Calculate percentage increase. (b) Phone card lasts 300 mins. George used 3/5. Find remaining minutes.',
    questionAr: '(أ) غيرت شركة رسوم الإيجار من 80$ سنوياً إلى 7.50$ شهرياً. احسب النسبة المئوية للزيادة. (ب) بطاقة 300 دقيقة استخدم 3/5 منها. احسب المتبقي.',
    options: [
      { id: 'A', textEn: '(a) 12.5%, (b) 120 minutes', textAr: '(أ) 12.5%، (ب) 120 دقيقة' },
      { id: 'B', textEn: '(a) 10.0%, (b) 180 minutes', textAr: '(أ) 10.0%، (ب) 180 دقيقة' },
      { id: 'C', textEn: '(a) 15.0%, (b) 120 minutes', textAr: '(أ) 15.0%، (ب) 120 دقيقة' },
      { id: 'D', textEn: '(a) 12.5%, (b) 150 minutes', textAr: '(أ) 12.5%، (ب) 150 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) New annual fee = 7.50 × 12 = $90. Increase = 10 / 80 × 100 = 12.5%. (b) Fraction remaining = 2/5. Remaining mins = 2/5 × 300 = 120 mins.',
    explanationAr: '(أ) الرسوم الجديدة = 90$ سنوياً. الزيادة = 10 ÷ 80 × 100 = 12.5%. (ب) الدقائق المتبقية = 2/5 × 300 = 120 دقيقة.',
    solutionStepsEn: ['(a) 7.50 × 12 = $90. Increase = $10. (10/80) × 100 = 12.5%.', '(b) Remaining fraction = 1 - 3/5 = 2/5. 2/5 × 300 = 120 mins.'],
    solutionStepsAr: ['(أ) الرسوم السنوية = 90$. الزيادة = 10$. النسبة = (10 ÷ 80) × 100 = 12.5%.', '(ب) المتبقي = 2/5. 2/5 × 300 = 120 دقيقة.'],
    marks: 6
  },

  // PAPER 4 (0580/04 - Extended)
  {
    id: 'IG-2003-ON-04-01',
    code: '0580/04/O/N/03 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratios, Multi-stage Passengers & Time',
    topicAr: 'النسب والركاب والوقت',
    questionEn: '240 passengers (144 adults). (a)(i) Adult:children ratio. (ii) At 1st stop 1/3 adults & 1/4 children off, 20 adults & x children board, total = 200. Find x. (b) Next station total 300, M:W:C = 6:5:4. Find children count. (c) 7h 20m journey started at 13:53. (i) Finish time? (ii) Tuesday trip was 10% longer than Monday. How many mins shorter was Monday?',
    questionAr: '240 راكباً (144 بالغين). (أ) نسبة البالغين إلى الأطفال ومحطات الركاب وحساب x. (ب) 300 راكب بنسبة 6:5:4 كم عدد الأطفال؟ (ج) رحلة 7س 20د بدأت 13:53. زمن انتهاء ورحلة الإثنين.',
    options: [
      { id: 'A', textEn: '(a) 3:2, x = 12; (b) 80 children; (c) 21:13, 40 mins shorter', textAr: '(أ) 3:2، x = 12؛ (ب) 80 طفلاً؛ (ج) 21:13، 40 دقيقة أقصر' },
      { id: 'B', textEn: '(a) 3:2, x = 10; (b) 75 children; (c) 21:13, 44 mins shorter', textAr: '(أ) 3:2، x = 10؛ (ب) 75 طفلاً؛ (ج) 21:13، 44 دقيقة أقصر' },
      { id: 'C', textEn: '(a) 4:3, x = 12; (b) 80 children; (c) 20:53, 40 mins shorter', textAr: '(أ) 4:3، x = 12؛ (ب) 80 طفلاً؛ (ج) 20:53، 40 دقيقة أقصر' },
      { id: 'D', textEn: '(a) 3:2, x = 15; (b) 90 children; (c) 21:13, 30 mins shorter', textAr: '(أ) 3:2، x = 15؛ (ب) 90 طفلاً؛ (ج) 21:13، 30 دقيقة أقصر' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Adults 144, Children 96 => Ratio 144:96 = 3:2. x = 12. (b) Children = (4/15) × 300 = 80. (c) Finish = 13:53 + 7h20m = 21:13. Mon = 440 / 1.1 = 400 => 40 mins shorter.',
    explanationAr: '(أ) النسبة = 3:2، و x = 12. (ب) الأطفال = (4 ÷ 15) × 300 = 80. (ج) وقت الانتهاء = 21:13، ورحلة الإثنين أقصر بـ 40 دقيقة.',
    solutionStepsEn: ['Ratio = 144 : 96 = 3 : 2.', 'Children = (4 / 15) × 300 = 80.', 'Time = 440 mins / 1.1 = 400 mins (40 mins shorter).'],
    solutionStepsAr: ['النسبة = 144 : 96 = 3 : 2.', 'الأطفال = (4 ÷ 15) × 300 = 80.', 'زمن الإثنين = 440 ÷ 1.1 = 400 دقيقة (أقصر بـ 40 دقيقة).'],
    marks: 11
  },
  {
    id: 'IG-2003-ON-04-02',
    code: '0580/04/O/N/03 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Formulas, Factorisation & Speed Equation',
    topicAr: 'الصيغ والتحليل ومعادلة السرعة',
    questionEn: '(a) Surface area A = √(hm / 3600). (i) Dolores h=167, m=70 => A? (ii) Eric m=80, A=1.99 => h? (iii) Make h subject. (b) Factorise: x²-16, x²-16x, x²-9x+8. (c) Speed x, time 3x-9, dist 2x²-8 => x²-9x+8=0.',
    questionAr: '(أ) مساحة الجسم A = √(hm / 3600). حساب A و h وجعل h موضوع القانون. (ب) تحليل المقادير الجبرية. (ج) قطع مسافة بسرعات وأزمنة جبرية.',
    options: [
      { id: 'A', textEn: '(a) 1.80 m², 178.2 cm, h = 3600A²/m; (b)(iii) (x-1)(x-8); (c) x = 8, 15 s, 120 m', textAr: '(أ) 1.80 م²، 178.2 سم، h = 3600A²/m؛ (ب)(3) (x-1)(x-8)؛ (ج) x = 8، 15 ثانية، 120 متر' },
      { id: 'B', textEn: '(a) 1.80 m², 170.0 cm, h = 3600A/m; (b)(iii) (x-2)(x-4); (c) x = 8, 15 s, 120 m', textAr: '(أ) 1.80 م²، 170.0 سم، h = 3600A/m؛ (ب)(3) (x-2)(x-4)؛ (ج) x = 8، 15 ثانية، 120 متر' },
      { id: 'C', textEn: '(a) 1.95 m², 178.2 cm, h = 3600A²/m; (b)(iii) (x+1)(x-8); (c) x = 9, 18 s, 154 m', textAr: '(أ) 1.95 م²، 178.2 سم، h = 3600A²/m؛ (ب)(3) (x+1)(x-8)؛ (ج) x = 9، 18 ثانية، 154 متر' },
      { id: 'D', textEn: '(a) 1.80 m², 182.5 cm, h = 3600A²/m; (b)(iii) (x-1)(x-8); (c) x = 8, 15 s, 120 m', textAr: '(أ) 1.80 م²، 182.5 سم، h = 3600A²/m؛ (ب)(3) (x-1)(x-8)؛ (ج) x = 8، 15 ثانية، 120 متر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'A = √(167 × 70 / 3600) = 1.80 m². 1.99² = 80h / 3600 => h = 178.2 cm. h = 3600 A² / m. Solving x² - 9x + 8 = 0 gives x = 8.',
    explanationAr: 'A = 1.80 م². h = 178.2 سم. h = 3600 A² ÷ m. وحل المعادلة يعطي x = 8، الزمن = 15 ثانية، المسافة = 120 متراً.',
    solutionStepsEn: ['A = √(11690 / 3600) = 1.80 m².', 'h = 3600 × 1.99² / 80 = 178.2 cm.', 'x = 8 => Time = 3(8) - 9 = 15 s, Distance = 2(64) - 8 = 120 m.'],
    solutionStepsAr: ['A = 1.80 م².', 'h = 178.2 سم.', 'x = 8 => الزمن = 15 ثانية، المسافة = 120 متر.'],
    marks: 14
  },
  {
    id: 'IG-2003-ON-04-03',
    code: '0580/04/O/N/03 Q3',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Cosine Rule, Bearings & Elevation',
    topicAr: 'قانون جيب التمام والاتجاهات وزاوية الارتفاع',
    questionEn: 'Felipe is 17m from bridge B and 32m from tree T. Angle BFT = 40°. (a) Calculate BT & angle BTF. (b) Bearing of B from F is 085°. Find bearings of T from F, F from T, B from T. (c) Tree height 30m, find angle of elevation from F.',
    questionAr: 'يقف فيليب على بعد 17 م من الجسر B و 32 م من الشجرة T والزاوية BFT = 40°. (أ) احسب المسافة BT والزاوية BTF. (ب) اتجاهات النقط. (ج) زاوية ارتفاع الشجرة من F.',
    options: [
      { id: 'A', textEn: '(a) BT = 21.9 m, angle BTF = 29.9°; (b) 045°, 225°, 334.9°; (c) 43.1°', textAr: '(أ) BT = 21.9 متر، الزاوية BTF = 29.9°؛ (ب) 045°، 225°، 334.9°؛ (ج) 43.1°' },
      { id: 'B', textEn: '(a) BT = 25.0 m, angle BTF = 35.0°; (b) 045°, 225°, 315.0°; (c) 40.0°', textAr: '(أ) BT = 25.0 متر، الزاوية BTF = 35.0°؛ (ب) 045°، 225°، 315.0°؛ (ج) 40.0°' },
      { id: 'C', textEn: '(a) BT = 21.9 m, angle BTF = 29.9°; (b) 125°, 305°, 334.9°; (c) 43.1°', textAr: '(أ) BT = 21.9 متر، الزاوية BTF = 29.9°؛ (ب) 125°، 305°، 334.9°؛ (ج) 43.1°' },
      { id: 'D', textEn: '(a) BT = 21.9 m, angle BTF = 40.0°; (b) 045°, 225°, 334.9°; (c) 48.2°', textAr: '(أ) BT = 21.9 متر، الزاوية BTF = 40.0°؛ (ب) 045°، 225°، 334.9°؛ (ج) 48.2°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'BT² = 17² + 32² - 2(17)(32)cos(40°) = 289 + 1024 - 833.45 = 479.55 => BT = 21.9 m. sin(BTF)/17 = sin(40°)/21.9 => BTF = 29.9°. Angle of elevation = tan⁻¹(30/32) = 43.1°.',
    explanationAr: 'BT = 21.9 متر بقانون جيب التمام. الزاوية BTF = 29.9° بقانون الجيب. زاوية الارتفاع = tan⁻¹(30 ÷ 32) = 43.1°.',
    solutionStepsEn: ['BT = √(17² + 32² - 2×17×32×cos(40°)) = 21.9 m.', 'BTF = sin⁻¹(17 × sin(40°) / 21.9) = 29.9°.', 'Elevation angle = tan⁻¹(30 / 32) = 43.1°.'],
    solutionStepsAr: ['BT = 21.9 متر.', 'الزاوية BTF = 29.9°.', 'زاوية الارتفاع = 43.1°.'],
    marks: 12
  },
  {
    id: 'IG-2003-ON-04-06',
    code: '0580/04/O/N/03 Q6',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2003,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Cylinder Volume & Partially Filled Cross-Section',
    topicAr: 'حجم الأسطوانة والمقطع المائي الأفقية',
    questionEn: '(a) Cyl vol (r=30cm, h=50cm). (b) Cyl on side, max water depth 12cm, OA=OB=30cm. Find OX & angle AOB. (c) Segment area. (d) Water volume in litres. (e) Litres to reach half full.',
    questionAr: '(أ) حجم الأسطوانة. (ب) أسطوانة أفقية بعمق ماء 12 سم، احسب OX والزاوية AOB. (ج) مساحة القطعة. (د) الحجم باللتر. (هـ) اللترات لنصف الامتلاء.',
    options: [
      { id: 'A', textEn: '(a) 141,372 cm³; (b) OX = 18 cm, AOB = 106.26°; (c) Seg = 402.8 cm²; (d) 20.14 L; (e) 50.55 L', textAr: '(أ) 141,372 سم³؛ (ب) OX = 18 سم، الزاوية = 106.26°؛ (ج) المساحة = 402.8 سم²؛ (د) 20.14 لتر؛ (هـ) 50.55 لتر' },
      { id: 'B', textEn: '(a) 150,000 cm³; (b) OX = 20 cm, AOB = 100.00°; (c) Seg = 450.0 cm²; (d) 22.50 L; (e) 48.00 L', textAr: '(أ) 150,000 سم³؛ (ب) OX = 20 سم، الزاوية = 100.00°؛ (ج) المساحة = 450.0 سم²؛ (د) 22.50 لتر؛ (هـ) 48.00 لتر' },
      { id: 'C', textEn: '(a) 141,372 cm³; (b) OX = 12 cm, AOB = 110.00°; (c) Seg = 402.8 cm²; (d) 20.14 L; (e) 60.00 L', textAr: '(أ) 141,372 سم³؛ (ب) OX = 12 سم، الزاوية = 110.00°؛ (ج) المساحة = 402.8 سم²؛ (د) 20.14 لتر؛ (هـ) 60.00 لتر' },
      { id: 'D', textEn: '(a) 141,372 cm³; (b) OX = 18 cm, AOB = 106.26°; (c) Seg = 350.0 cm²; (d) 18.50 L; (e) 50.55 L', textAr: '(أ) 141,372 سم³؛ (ب) OX = 18 سم، الزاوية = 106.26°؛ (ج) المساحة = 350.0 سم²؛ (د) 18.50 لتر؛ (هـ) 50.55 لتر' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Cyl Vol = π × 30² × 50 = 45000π ≈ 141,372 cm³. OX = 30 - 12 = 18 cm. cos(AOX) = 18/30 = 0.6 => AOX = 53.13° => AOB = 106.26°. Water vol = 402.8 × 50 = 20,140 cm³ = 20.14 L. Half vol = 70.69 L. Extra = 70.69 - 20.14 = 50.55 L.',
    explanationAr: 'حجم الأسطوانة = 141,372 سم³. OX = 18 سم. الزاوية AOB = 106.26°. حجم الماء = 20.14 لتر. اللترات الإضافية لنصف الامتلاء = 50.55 لتر.',
    solutionStepsEn: ['Vol = π × 900 × 50 = 141,372 cm³.', 'OX = 30 - 12 = 18 cm.', 'cos(AOX) = 18 / 30 => AOB = 2 × 53.13° = 106.26°.', 'Water Vol = 402.8 × 50 = 20140 cm³ = 20.14 L.', 'Half = 70.69 L => Extra = 50.55 L.'],
    solutionStepsAr: ['الحجم = 141,372 سم³.', 'OX = 18 سم.', 'الزاوية = 106.26°.', 'حجم الماء = 20.14 لتر.', 'التبقي للنصف = 50.55 لتر.'],
    marks: 17
  },
  ...QUESTIONS_2004_MJ,
  ...QUESTIONS_2003_MJ,
  ...QUESTIONS_2004_ON,
  ...QUESTIONS_2005,
  ...QUESTIONS_2006,
  ...QUESTIONS_2007,
  ...QUESTIONS_2008,
  ...QUESTIONS_2009,
  ...QUESTIONS_2010,
  ...QUESTIONS_2011,
  ...QUESTIONS_2012,
  ...QUESTIONS_2013
];

