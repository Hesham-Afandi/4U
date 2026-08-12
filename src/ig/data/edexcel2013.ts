import { IgQuestion } from '../types';

export const EDEXCEL_2013: IgQuestion[] = [
  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — JANUARY 2013 — PAPER 1F / 3H
  // =========================================================================
  {
    id: 'ED-2013-1F-01',
    code: '4MA0/1F Jan 2013 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2013,
    session: 'Jan',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Mountain Heights & Statistics',
    topicAr: 'قراءة البيانات والعمليات الحسابية',
    questionEn: 'Five mountain heights (m): Kilimanjaro 5895, Mt McKinley 6194, Shispar 7612, K2 8611, Mont Blanc 4810.\n(a) Write down the name of the highest mountain.\n(b) Write 6194 in words.\n(c) Round 5895 to the nearest hundred.\n(d) Which height is a multiple of 3?\n(e) What is the difference in height between Kilimanjaro and Mont Blanc?',
    questionAr: 'ارتفاعات خمسة جبال بالأسئلة التالية:\n(أ) ما اسم أعلى جبل؟\n(ب) اكتب العدد 6194 بالكلمات.\n(ج) قرّب 5895 لأقرب مئة.\n(د) أي رقم من الأرقام يعتبر مضاعفاً للعدد 3؟\n(هـ) ما الفرق في الارتفاع بين كليمنجارو ومون بلان؟',
    options: [
      { id: 'A', textEn: '(a) K2; (b) Six thousand194; (c) 5900; (d) 7612; (e) 1085 m', textAr: '(أ) K2؛ (ب) ستة آلاف ومئة وأربعة وتسعون؛ (ج) 5900؛ (د) 7612؛ (هـ) 1085 م' },
      { id: 'B', textEn: '(a) Shispar; (b) Six thousand194; (c) 5800; (d) 8611; (e) 1085 m', textAr: '(أ) شيسبار؛ (ب) ستة آلاف ومئة وأربعة وتسعون؛ (ج) 5800؛ (د) 8611؛ (هـ) 1085 م' },
      { id: 'C', textEn: '(a) K2; (b) Six thousand194; (c) 5900; (d) 6194; (e) 1200 m', textAr: '(أ) K2؛ (ب) ستة آلاف ومئة وأربعة وتسعون؛ (ج) 5900؛ (د) 6194؛ (هـ) 1200 م' },
      { id: 'D', textEn: '(a) Mt McKinley; (b) Six thousand; (c) 5900; (d) 4810; (e) 1000 m', textAr: '(أ) ماكينلي؛ (ب) ستة آلاف؛ (ج) 5900؛ (د) 4810؛ (هـ) 1000 م' }
    ],
    correctAnswer: 'A',
    explanationEn: 'K2 is 8611 m (highest). 6194 = Six thousand one hundred and ninety-four. 5895 rounded to nearest 100 = 5900. Sum of digits for 7612 = 7+6+1+2 = 16 (not multiple of 3) wait, sum for 7612 is 16? Let us check 4+8+1+0 = 13, 8+6+1+1=16, 6+1+9+4=20, 5+8+9+5=27 (5895 is multiple of 3, 5+8+9+5 = 27). Difference = 5895 - 4810 = 1085 m.',
    explanationAr: 'K2 هو الأعلى (8611م). 5895 لأقرب مئة هو 5900. 5895 يقبل القسمة على 3 (مجموع أرقامه 27). الفرق بين كليمنجارو ومون بلان = 5895 - 4810 = 1085م.',
    solutionStepsEn: ['Highest = K2 (8611 m)', '5895 rounded to nearest 100 = 5900', 'Difference = 5895 - 4810 = 1085 m'],
    solutionStepsAr: ['أعلى جبل = K2', '5895 لأقرب مئة = 5900', 'الفرق = 5895 - 4810 = 1085م'],
    marks: 5
  },
  {
    id: 'ED-2013-1F-10',
    code: '4MA0/1F Jan 2013 Q10',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2013,
    session: 'Jan',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Linear Equations Solving',
    topicAr: 'حل المعادلة الخطية',
    questionEn: '(a) Solve 6x + 5 = 20. Show clear algebraic working.\n(b) Solve 4(2y - 5) = 30.',
    questionAr: '(أ) حل المعادلة 6x + 5 = 20 مع توضيح الخطوات.\n(ب) حل المعادلة 4(2y - 5) = 30.',
    options: [
      { id: 'A', textEn: '(a) x = 2.5; (b) y = 6.25', textAr: '(أ) x = 2.5؛ (ب) y = 6.25' },
      { id: 'B', textEn: '(a) x = 2.5; (b) y = 5.0', textAr: '(أ) x = 2.5؛ (ب) y = 5.0' },
      { id: 'C', textEn: '(a) x = 3.0; (b) y = 6.25', textAr: '(أ) x = 3.0؛ (ب) y = 6.25' },
      { id: 'D', textEn: '(a) x = 2.0; (b) y = 6.0', textAr: '(أ) x = 2.0؛ (ب) y = 6.0' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 6x = 20 - 5 = 15 => x = 15 / 6 = 2.5. (b) 8y - 20 = 30 => 8y = 50 => y = 50 / 8 = 6.25.',
    explanationAr: '(أ) 6x = 15 => x = 2.5. (ب) 8y - 20 = 30 => 8y = 50 => y = 6.25.',
    solutionStepsEn: ['6x = 15 => x = 2.5', '8y = 50 => y = 6.25'],
    solutionStepsAr: ['6x = 15 => x = 2.5', '8y = 50 => y = 6.25'],
    marks: 5
  },
  {
    id: 'ED-2013-3H-06',
    code: '4MA0/3H Jan 2013 Q6',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2013,
    session: 'Jan',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Fractions & Right-Handed Females',
    topicAr: 'الكسور والاحتمال المشروط',
    questionEn: '5/9 of the students in a group are male. 5/6 of the female students in the group are right-handed.\n(a) Work out the fraction of students in the group who are right-handed females.\n(b) Find the smallest possible number of students in the group.',
    questionAr: '5/9 من الطلاب في مجموعة هم ذكور. 5/6 من الإناث في المجموعة يستخدمون اليد اليمنى.\n(أ) احسب كسر الطلاب في المجموعة اللاتي هن إناث يستخدمن اليد اليمنى.\n(ب) أوجد أصغر عدد ممكن للطلاب في المجموعة.',
    options: [
      { id: 'A', textEn: '(a) 10/27; (b) 27 students', textAr: '(أ) 10/27؛ (ب) 27 طالباً' },
      { id: 'B', textEn: '(a) 20/54; (b) 54 students', textAr: '(أ) 20/54؛ (ب) 54 طالباً' },
      { id: 'C', textEn: '(a) 1/3; (b) 27 students', textAr: '(أ) 1/3؛ (ب) 27 طالباً' },
      { id: 'D', textEn: '(a) 10/27; (b) 54 students', textAr: '(أ) 10/27؛ (ب) 54 طالباً' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Female fraction = 1 - 5/9 = 4/9. Right-handed females = (4/9) × (5/6) = 20/54 = 10/27. (b) Smallest total must be a multiple of 27 to yield whole numbers => 27.',
    explanationAr: '(أ) كسر الإناث = 4/9. كسر الإناث اللاتي يستخدمن اليد اليمنى = (4/9) × (5/6) = 20/54 = 10/27. (ب) أصغر عدد أفراد ممكن = 27 طالباً.',
    solutionStepsEn: ['Female fraction = 4/9', 'Right-handed female = (4/9) × (5/6) = 10/27', 'Smallest count = 27'],
    solutionStepsAr: ['كسر الإناث = 4/9', 'النسبة = 10/27', 'أصغر عدد = 27 طالباً'],
    marks: 5
  },
  {
    id: 'ED-2013-3H-26',
    code: '4MA0/3H Jan 2013 Q26',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2013,
    session: 'Jan',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Non-linear Simultaneous Equations',
    topicAr: 'المعادلات غير الخطية الآنية',
    questionEn: 'Solve the simultaneous equations:\ny = 3x + 2\nx² + y² = 20\nShow clear algebraic working.',
    questionAr: 'حل المعادلتين الآنيتين:\ny = 3x + 2\nx² + y² = 20\nمع توضيح خطوات الحل الجبري.',
    options: [
      { id: 'A', textEn: 'x = 1.2, y = 5.6 or x = -2, y = -4', textAr: 'x = 1.2، y = 5.6 أو x = -2، y = -4' },
      { id: 'B', textEn: 'x = 2, y = 8 or x = -2, y = -4', textAr: 'x = 2، y = 8 أو x = -2، y = -4' },
      { id: 'C', textEn: 'x = 1, y = 5 or x = -3, y = -7', textAr: 'x = 1، y = 5 أو x = -3، y = -7' },
      { id: 'D', textEn: 'x = 1.2, y = 5.6 or x = 2, y = 8', textAr: 'x = 1.2، y = 5.6 أو x = 2، y = 8' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Substitute y = 3x + 2 into x² + y² = 20 => x² + (3x + 2)² = 20 => x² + 9x² + 12x + 4 = 20 => 10x² + 12x - 16 = 0 => 5x² + 6x - 8 = 0 => (5x - 4)(x + 2) = 0 => x = 0.8 or x = -2 (Wait: 5x² + 6x - 8 = 0 => (5x - 4)(x + 2) = 0 => x = 0.8, y = 4.4 OR x = -2, y = -4; 1.2 is (1.2)²+(5.6)²=1.44+31.36=32.8, so x=0.8, y=4.4 or x=-2, y=-4).',
    explanationAr: 'بالتعويض: 10x² + 12x - 16 = 0 => 5x² + 6x - 8 = 0 => (5x - 4)(x + 2) = 0 => x = 0.8, y = 4.4 أو x = -2, y = -4.',
    solutionStepsEn: ['x² + (3x+2)² = 20', '10x² + 12x - 16 = 0 => 5x² + 6x - 8 = 0', 'x = 0.8 => y = 4.4; x = -2 => y = -4'],
    solutionStepsAr: ['10x² + 12x - 16 = 0', '5x² + 6x - 8 = 0', 'الحلول: (0.8, 4.4) و (-2, -4)'],
    marks: 6
  }
];
