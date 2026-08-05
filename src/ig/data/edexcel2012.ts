import { IgQuestion } from '../types';

export const EDEXCEL_2012: IgQuestion[] = [
  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JANUARY 2012 — PAPER 1F (4MA0/1F)
  // =========================================================================
  {
    id: 'ED-2012-1F-01',
    code: '4MA0/1F Jan 2012 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Area, Perimeter & Percentages on Grid',
    topicAr: 'المساحة والمحيط والنسب المئوية على الشبكة',
    questionEn: 'A shape is drawn on a centimetre grid (L-shape: 10 squares total).\n(a) Find the area of the shape.\n(b) Find the perimeter of the shape.\n(c) Work out 60% of 10 squares to shade.',
    questionAr: 'شكل مرسوم على شبكة مربعات سنتيمترية (يتكون من 10 مربعات).\n(أ) أوجد مساحة الشكل.\n(ب) أوجد محيط الشكل.\n(ج) تظليل 60% من الشكل (كم مربع؟).',
    options: [
      { id: 'A', textEn: '(a) 10 cm²; (b) 16 cm; (c) 6 squares', textAr: '(أ) 10 سم²؛ (ب) 16 سم؛ (ج) 6 مربعات' },
      { id: 'B', textEn: '(a) 10 cm²; (b) 14 cm; (c) 5 squares', textAr: '(أ) 10 سم²؛ (ب) 14 سم؛ (ج) 5 مربعات' },
      { id: 'C', textEn: '(a) 12 cm²; (b) 16 cm; (c) 6 squares', textAr: '(أ) 12 سم²؛ (ب) 16 سم؛ (ج) 6 مربعات' },
      { id: 'D', textEn: '(a) 8 cm²; (b) 12 cm; (c) 4 squares', textAr: '(أ) 8 سم²؛ (ب) 12 سم؛ (ج) 4 مربعات' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Area = 10 squares = 10 cm². Perimeter of outer edges = 16 cm. 60% of 10 squares = 0.60 × 10 = 6 squares.',
    explanationAr: 'المساحة = 10 مربعات = 10 سم². المحيط الخارجي = 16 سم. 60% من 10 = 6 مربعات.',
    marks: 3
  },
  {
    id: 'ED-2012-1F-02',
    code: '4MA0/1F Jan 2012 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Basic Operations & Card Digits',
    topicAr: 'العمليات الأساسية وأرقام البطاقات',
    questionEn: '(a) Fill the missing box:\n(i) ☐ + 249 = 361\n(ii) ☐ × 110 = 176\n(iii) ☐ ÷ 900 = 153\n(iv) ☐ + 52 = 31\n(b) Cards 5, 7, 3, 2. (i) Smallest 3-digit number? (ii) Largest odd 3-digit number from Ben\'s cards.',
    questionAr: '(أ) أكمل المربع الناقص في الحسابات.\n(ب) البطاقات 5، 7، 3، 2. أوجد أصغر عدد من 3 أرقام، وأكبر عدد فردي.',
    options: [
      { id: 'A', textEn: '(a)(i) 112, (ii) 1.6, (iii) 137,700, (iv) -21; (b)(i) 235, (ii) 523', textAr: '(أ)(1) 112، (2) 1.6، (3) 137,700، (4) -21؛ (ب)(1) 235، (2) 523' },
      { id: 'B', textEn: '(a)(i) 112, (ii) 1.5, (iii) 135,000, (iv) -21; (b)(i) 235, (ii) 325', textAr: '(أ)(1) 112، (2) 1.5؛ (ب)(1) 235، (2) 325' },
      { id: 'C', textEn: '(a)(i) 120, (ii) 1.6, (iii) 137,700, (iv) 21; (b)(i) 253, (ii) 532', textAr: '(أ)(1) 120، (2) 1.6؛ (ب)(1) 253، (2) 532' },
      { id: 'D', textEn: '(a)(i) 112, (ii) 2.0, (iii) 100,000, (iv) -21; (b)(i) 325, (ii) 523', textAr: '(أ)(1) 112؛ (ب)(1) 325، (2) 523' }
    ],
    correctAnswer: 'A',
    explanationEn: '(i) 361 - 249 = 112. (ii) 176 / 110 = 1.6. (iii) 153 × 900 = 137700. (iv) 31 - 52 = -21. Smallest 3 digits = 2, 3, 5 => 235. Largest odd = 523.',
    explanationAr: '(1) 361 - 249 = 112. (2) 176 ÷ 110 = 1.6. (3) 153 × 900 = 137700. (4) 31 - 52 = -21. أصغر عدد هو 235. أكبر عدد فردي هو 523.',
    marks: 6
  },
  {
    id: 'ED-2012-1F-07',
    code: '4MA0/1F Jan 2012 Q7',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Negative Temperatures & Time',
    topicAr: 'درجات الحرارة السالبة والوقت',
    questionEn: '(a) Freezer is −18°C, fridge is 3°C. Find the difference in temperature.\n(b) Pie taken from freezer (−18°C) is 11°C higher 1 hour later. Find new temperature.\n(c) At 1425 Zak takes chicken from fridge. 10 mins later puts in oven. Cooks 1h 45m.\n(i) Write 1425 in pm format. (ii) What time cooked?',
    questionAr: '(أ) الفريزر −18°م والثلاجة 3°م. أوجد الفرق في درجة الحرارة.\n(ب) فطيرة بدمية −18°م ارتفعت 11°م بعد ساعة. أوجد الحرارة الجديدة.\n(ج) الساعة 1425 تم وضع الدجاج في الفرن بعد 10 دقائق وتستغرق 1س و 45د. اكتب الوقت بالشكل العادي وقت الجاهزية.',
    options: [
      { id: 'A', textEn: '(a) 21°C; (b) −7°C; (c)(i) 2:25 pm, (ii) 16:20 (4:20 pm)', textAr: '(أ) 21°م؛ (ب) −7°م؛ (ج)(1) 2:25 مساءً، (2) 16:20 (4:20 مساءً)' },
      { id: 'B', textEn: '(a) 15°C; (b) −7°C; (c)(i) 2:25 pm, (ii) 16:10 (4:10 pm)', textAr: '(أ) 15°م؛ (ب) −7°م؛ (ج)(1) 2:25 مساءً، (2) 16:10' },
      { id: 'C', textEn: '(a) 21°C; (b) 7°C; (c)(i) 1:25 pm, (ii) 15:20 (3:20 pm)', textAr: '(أ) 21°م؛ (ب) 7°م؛ (ج)(1) 1:25 مساءً، (2) 15:20' },
      { id: 'D', textEn: '(a) 21°C; (b) −7°C; (c)(i) 2:25 pm, (ii) 17:00 (5:00 pm)', textAr: '(أ) 21°م؛ (ب) −7°م؛ (ج)(1) 2:25 مساءً، (2) 17:00' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Difference = 3 - (-18) = 21°C. New temp = -18 + 11 = -7°C. 1425 = 2:25 pm. Put in oven at 1435. Finish = 1435 + 1h 45m = 1620 (4:20 pm).',
    explanationAr: 'الفرق = 3 - (-18) = 21°م. الحرارة = -18 + 11 = -7°م. 1425 = 2:25 مساءً. توضع في الفرن 14:35، وتجهز 16:20 (4:20 مساءً).',
    marks: 7
  },
  {
    id: 'ED-2012-1F-17',
    code: '4MA0/1F Jan 2012 Q17',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Cylinder Volume',
    topicAr: 'حجم الأسطوانة',
    questionEn: 'A cylinder has a diameter of 15 cm and a height of 26 cm. Work out the volume of the cylinder, correct to 3 significant figures.',
    questionAr: 'أسطوانة قطرها 15 سم وارتفاعها 26 سم. احسب حجم الأسطوانة مقرباً لـ 3 أرقام معنوية.',
    options: [
      { id: 'A', textEn: '4590 cm³', textAr: '4590 سم³' },
      { id: 'B', textEn: '18300 cm³', textAr: '18300 سم³' },
      { id: 'C', textEn: '4594 cm³', textAr: '4594 سم³' },
      { id: 'D', textEn: '1460 cm³', textAr: '1460 سم³' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Radius r = 15 / 2 = 7.5 cm. Volume = π × r² × h = π × (7.5)² × 26 = π × 56.25 × 26 = 4594.58... cm³. Correct to 3 s.f. is 4590 cm³.',
    explanationAr: 'نصف القطر r = 7.5 سم. الحجم = π × (7.5)² × 26 ≈ 4594.58 سم³. التقريب لـ 3 أرقام معنوية هو 4590 سم³.',
    marks: 3
  },

  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JANUARY 2012 — PAPER 2F (4MA0/2F)
  // =========================================================================
  {
    id: 'ED-2012-2F-13',
    code: '4MA0/2F Jan 2012 Q13',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Car Payments & Average Speed',
    topicAr: 'مدفوعات السيارة والسرعة المتوسطة',
    questionEn: '(a) Rachael is paid 32 cents per km. Yesterday she was paid $48. Find the distance she travelled by car.\n(b) Journey length = 72 km, time = 1 hour 20 minutes. Work out average speed in km/h.',
    questionAr: '(أ) تحصل راشيل على 32 سنتاً لكل كم. تلقت أمس 48 دولاراً. أوجد المسافة المقطوعة.\n(ب) طول الرحلة 72 كم واستغرقت ساعة و 20 دقيقة. احسب السرعة المتوسطة بـ كم/ساعة.',
    options: [
      { id: 'A', textEn: '(a) 150 km; (b) 54 km/h', textAr: '(أ) 150 كم؛ (ب) 54 كم/ساعة' },
      { id: 'B', textEn: '(a) 150 km; (b) 60 km/h', textAr: '(أ) 150 كم؛ (ب) 60 كم/ساعة' },
      { id: 'C', textEn: '(a) 120 km; (b) 54 km/h', textAr: '(أ) 120 كم؛ (ب) 54 كم/ساعة' },
      { id: 'D', textEn: '(a) 150 km; (b) 48 km/h', textAr: '(أ) 150 كم؛ (ب) 48 كم/ساعة' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) $48 = 4800 cents. Distance = 4800 / 32 = 150 km. (b) Time = 1h 20m = 4/3 hours = 1.333 hours. Average speed = 72 / (4/3) = 72 × 3 / 4 = 54 km/h.',
    explanationAr: '(أ) 48$ = 4800 سنت. المسافة = 4800 ÷ 32 = 150 كم. (ب) الزمن = 4/3 ساعة. السرعة = 72 ÷ (4/3) = 54 كم/ساعة.',
    marks: 6
  },
  {
    id: 'ED-2012-2F-20',
    code: '4MA0/2F Jan 2012 Q20',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Prime Factorisation & Index Form',
    topicAr: 'التحليل إلى العوامل الأولية والصورة الأسية',
    questionEn: 'Express 200 as a product of powers of its prime factors.',
    questionAr: 'اكتب العدد 200 في صورة حاصل ضرب قوى عوامله الأولية.',
    options: [
      { id: 'A', textEn: '2³ × 5²', textAr: '2³ × 5²' },
      { id: 'B', textEn: '2² × 5³', textAr: '2² × 5³' },
      { id: 'C', textEn: '2 × 10²', textAr: '2 × 10²' },
      { id: 'D', textEn: '2⁴ × 5', textAr: '2⁴ × 5' }
    ],
    correctAnswer: 'A',
    explanationEn: '200 = 2 × 100 = 2 × 2 × 50 = 2 × 2 × 2 × 25 = 2³ × 5².',
    explanationAr: '200 = 8 × 25 = 2³ × 5².',
    marks: 3
  },
  {
    id: 'ED-2012-2F-22',
    code: '4MA0/2F Jan 2012 Q22',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Rhombus Area & Pythagoras',
    topicAr: 'مساحة المعين ونظرية فيثاغورس',
    questionEn: 'ABCD is a rhombus. Diagonals AC and BD cross at E. AE = CE = 6 cm, BE = DE = 4 cm, angle AEB = 90°.\n(a) Work out the area of the rhombus.\n(b) Work out the length of AB correct to 3 s.f.',
    questionAr: 'ABCD معين. القطران AC و BD يتقاطعان في E. AE = CE = 6 سم، BE = DE = 4 سم، الزاوية AEB = 90°.\n(أ) احسب مساحة المعين.\n(ب) احسب طول الضلع AB مقرباً لـ 3 أرقام معنوية.',
    options: [
      { id: 'A', textEn: '(a) Area = 24 cm²; (b) AB = 7.21 cm', textAr: '(أ) المساحة = 24 سم²؛ (ب) AB = 7.21 سم' },
      { id: 'B', textEn: '(a) Area = 48 cm²; (b) AB = 7.21 cm', textAr: '(أ) المساحة = 48 سم²؛ (ب) AB = 7.21 سم' },
      { id: 'C', textEn: '(a) Area = 24 cm²; (b) AB = 10.0 cm', textAr: '(أ) المساحة = 24 سم²؛ (ب) AB = 10.0 سم' },
      { id: 'D', textEn: '(a) Area = 12 cm²; (b) AB = 5.00 cm', textAr: '(أ) المساحة = 12 سم²؛ (ب) AB = 5.00 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Diagonals AC = 12 cm, BD = 8 cm. (a) Area = ½ × d₁ × d₂ = ½ × 12 × 8 = 48 cm² (or 4 × (½ × 6 × 4) = 48 cm²). (b) By Pythagoras in right triangle ABE: AB² = 6² + 4² = 36 + 16 = 52 => AB = √52 = 7.211... ≈ 7.21 cm.',
    explanationAr: 'القطران 12 سم و 8 سم. المساحة = ½ × 12 × 8 = 48 سم² (أو 4 مثلثات = 24 سم² إذا حسب النصّف). بنظرية فيثاغورس: AB = √52 = 7.21 سم.',
    marks: 6
  },

  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JANUARY 2012 — PAPER 3H (4MA0/3H)
  // =========================================================================
  {
    id: 'ED-2012-3H-01',
    code: '4MA0/3H Jan 2012 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Calculators & Decimals',
    topicAr: 'الحسابات والأعداد العشرية',
    questionEn: 'Work out (6.7 × 2.5) / (2.8 × 0.4). Give your answer as a decimal.',
    questionAr: 'احسب قيمة (6.7 × 2.5) ÷ (2.8 × 0.4). اكتب إجابتك كعدد عشري.',
    options: [
      { id: 'A', textEn: '14.95535714', textAr: '14.95535714' },
      { id: 'B', textEn: '14.96', textAr: '14.96' },
      { id: 'C', textEn: '15.00', textAr: '15.00' },
      { id: 'D', textEn: '16.75', textAr: '16.75' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator = 16.75. Denominator = 1.12. 16.75 / 1.12 = 14.955357142857...',
    explanationAr: 'البسط = 16.75، المقام = 1.12. النتيجة = 14.95535714.',
    marks: 2
  },
  {
    id: 'ED-2012-3H-02',
    code: '4MA0/3H Jan 2012 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Speed, Distance & Time',
    topicAr: 'السرعة والمسافة والزمن',
    questionEn: 'An aeroplane flew 135 km at 180 km/h. Find the time taken in minutes.',
    questionAr: 'طارت طائرة مسافة 135 كم بسرعة 180 كم/ساعة. أوجد الزمن المستغرق بالدقائق.',
    options: [
      { id: 'A', textEn: '45 minutes', textAr: '45 دقيقة' },
      { id: 'B', textEn: '0.75 minutes', textAr: '0.75 دقيقة' },
      { id: 'C', textEn: '80 minutes', textAr: '80 دقيقة' },
      { id: 'D', textEn: '50 minutes', textAr: '50 دقيقة' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Time = Distance / Speed = 135 / 180 = 0.75 hours. Convert to minutes: 0.75 × 60 = 45 minutes.',
    explanationAr: 'الزمن = المسافة ÷ السرعة = 135 ÷ 180 = 0.75 ساعة = 45 دقيقة.',
    marks: 3
  },
  {
    id: 'ED-2012-3H-03',
    code: '4MA0/3H Jan 2012 Q3',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Solving Linear Equations',
    topicAr: 'حل المعادلات الخطية',
    questionEn: 'Solve 7x − 5 = 3x + 2. Show your working clearly.',
    questionAr: 'حل المعادلة: 7x − 5 = 3x + 2. وضح خطوات الحل بوضوح.',
    options: [
      { id: 'A', textEn: 'x = 1.75 (or 7/4)', textAr: 'x = 1.75 (أو 7/4)' },
      { id: 'B', textEn: 'x = 0.70', textAr: 'x = 0.70' },
      { id: 'C', textEn: 'x = 2.00', textAr: 'x = 2.00' },
      { id: 'D', textEn: 'x = 1.25', textAr: 'x = 1.25' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Subtract 3x from both sides: 4x - 5 = 2. Add 5 to both sides: 4x = 7. x = 7 / 4 = 1.75.',
    explanationAr: 'بمعادلة الأطراف: 7x - 3x = 2 + 5 أي 4x = 7 فتكون x = 1.75.',
    marks: 3
  },
  {
    id: 'ED-2012-3H-04',
    code: '4MA0/3H Jan 2012 Q4',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Statistics — Median, Mean & Range',
    topicAr: 'الإحصاء — الوسيط والمتوسط والمدى',
    questionEn: 'Three positive whole numbers have a median of 7 and a mean of 5. Find the range of the three numbers.',
    questionAr: 'ثلاثة أعداد صحيحة موجبة وسيطها 7 ومتوسطها 5. أوجد مدى هذه الأعداد الثلاثة.',
    options: [
      { id: 'A', textEn: 'Range = 6', textAr: 'المدى = 6' },
      { id: 'B', textEn: 'Range = 7', textAr: 'المدى = 7' },
      { id: 'C', textEn: 'Range = 5', textAr: 'المدى = 5' },
      { id: 'D', textEn: 'Range = 8', textAr: 'المدى = 8' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Let numbers be a ≤ b ≤ c. Median b = 7. Mean = 5 => (a + 7 + c) / 3 = 5 => a + 7 + c = 15 => a + c = 8. Since a ≥ 1 and a ≤ 7, small whole number a = 1, then c = 7. Numbers are 1, 7, 7. Range = 7 - 1 = 6.',
    explanationAr: 'بما أن الوسيط 7، فإن المجموع = 15، إذن a + c = 8. بما أن الأعداد صحيحة وموجبة و a ≤ 7، أحدث إمكانية هي 1، 7، 7. المدى = 7 - 1 = 6.',
    marks: 3
  },
  {
    id: 'ED-2012-3H-20',
    code: '4MA0/3H Jan 2012 Q20',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Cone Volume & Curved Surface Area',
    topicAr: 'حجم المخروط ومساحته الجانبية',
    questionEn: 'A solid cone has slant height l = 9 cm and curved surface area = 100 cm². Find the volume of the cone, correct to 3 significant figures.',
    questionAr: 'مخروط صلب طول راشِمه l = 9 سم ومساحته الجانبية = 100 سم². أوجد حجم المخروط مقرباً لـ 3 أرقام معنوية.',
    options: [
      { id: 'A', textEn: '107 cm³', textAr: '107 سم³' },
      { id: 'B', textEn: '120 cm³', textAr: '120 سم³' },
      { id: 'C', textEn: '95.4 cm³', textAr: '95.4 سم³' },
      { id: 'D', textEn: '115 cm³', textAr: '115 سم³' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Curved Surface Area = π r l => 100 = π × r × 9 => r = 100 / (9π) = 3.5368 cm. Height h = √(l² - r²) = √(81 - 12.509) = √68.491 = 8.276 cm. Volume = ⅓ π r² h = ⅓ × π × (3.5368)² × 8.276 = 107.28... ≈ 107 cm³.',
    explanationAr: 'المساحة الجانبية π r l = 100 => r = 3.5368 سم. الارتفاع العمودي h = √(9² - r²) = 8.276 سم. الحجم = ⅓ π r² h ≈ 107 سم³.',
    marks: 5
  },

  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JANUARY 2012 — PAPER 4H (4MA0/4H)
  // =========================================================================
  {
    id: 'ED-2012-4H-21',
    code: '4MA0/4H Jan 2012 Q21',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Fractional Indices & Powers of 2',
    topicAr: 'الأسس الكسرية وقوى العدد 2',
    questionEn: '(a) Simplify (16 y⁸)^(3/4).\n(b) Given 2ᵖ × 8^q = 2ⁿ. Express n in terms of p and q.',
    questionAr: '(أ) بَسِّط المقدار: (16 y⁸)^(3/4).\n(ب) إذا كان 2ᵖ × 8^q = 2ⁿ. عبّر عن n بدلالة p و q.',
    options: [
      { id: 'A', textEn: '(a) 8 y⁶; (b) n = p + 3q', textAr: '(أ) 8 y⁶؛ (ب) n = p + 3q' },
      { id: 'B', textEn: '(a) 12 y⁶; (b) n = p + q', textAr: '(أ) 12 y⁶؛ (ب) n = p + q' },
      { id: 'C', textEn: '(a) 8 y⁶; (b) n = 3p + q', textAr: '(أ) 8 y⁶؛ (ب) n = 3p + q' },
      { id: 'D', textEn: '(a) 16 y⁶; (b) n = p + 3q', textAr: '(أ) 16 y⁶؛ (ب) n = p + 3q' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) (16)^(3/4) = (2⁴)^(3/4) = 2³ = 8. (y⁸)^(3/4) = y⁶. Result = 8 y⁶. (b) 8^q = (2³)^q = 2^(3q). 2ᵖ × 2^(3q) = 2^(p + 3q) => n = p + 3q.',
    explanationAr: '(أ) (16)^(3/4) = 8 و (y⁸)^(3/4) = y⁶ فالنتيجة 8 y⁶. (ب) 8^q = 2^(3q)، إذن 2ᵖ × 2^(3q) = 2^(p + 3q) ومنها n = p + 3q.',
    marks: 4
  },
  {
    id: 'ED-2012-4H-22',
    code: '4MA0/4H Jan 2012 Q22',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2012,
    session: 'Feb/March',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Vector Geometry & Collinear Points',
    topicAr: 'هندسة المتجهات واستقامة النقاط',
    questionEn: 'OPQR is a rectangle. D on OP with OD = ⅓ OP. E on OQ with OE = ⅔ OQ. F on PQ extended with QF = ⅓ PQ. OD = a, OR = 3b.\n(a) Find OQ, OE, DE in terms of a and b.\n(b) Prove DEF is a straight line.',
    questionAr: 'OPQR مستطيل. D على OP حيث OD = ⅓ OP. E على OQ حيث OE = ⅔ OQ. F على امتداد PQ حيث QF = ⅓ PQ. OD = a, OR = 3b.\n(أ) أوجد المتجهات OQ, OE, DE بدلالة a و b.\n(ب) أثبت أن النقاط D, E, F تقع على استقامة واحدة.',
    options: [
      { id: 'A', textEn: '(a) OQ = 3a + 3b, OE = 2a + 2b, DE = a + 2b; (b) EF = a + 2b => DE = EF so collinear', textAr: '(أ) OQ = 3a + 3b، OE = 2a + 2b، DE = a + 2b؛ (ب) EF = a + 2b إذن على استقامة واحدة' },
      { id: 'B', textEn: '(a) OQ = a + b, OE = 2a + b, DE = a + b; (b) DE parallel to EF', textAr: '(أ) OQ = a + b، OE = 2a + b، DE = a + b' },
      { id: 'C', textEn: '(a) OQ = 3a + 3b, OE = a + b, DE = 2a + b; (b) Collinear', textAr: '(أ) OQ = 3a + 3b، OE = a + b، DE = 2a + b' },
      { id: 'D', textEn: '(a) OQ = 3a + b, OE = 2a + 2b, DE = a + 2b; (b) Collinear', textAr: '(أ) OQ = 3a + b، OE = 2a + 2b، DE = a + 2b' }
    ],
    correctAnswer: 'A',
    explanationEn: 'OP = 3a, OR = 3b => OQ = 3a + 3b. OE = ⅔ OQ = 2a + 2b. DE = OE - OD = (2a + 2b) - a = a + 2b. EF = OF - OE = (3a + 4b) - (2a + 2b) = a + 2b. Since DE = EF, DEF is a straight line.',
    explanationAr: 'OP = 3a, OR = 3b => OQ = 3a + 3b. OE = 2a + 2b. DE = a + 2b. كذلك المتجه EF = a + 2b. بما أن DE = EF والنقطة E مشتركة، فالنقاط D, E, F على استقامة واحدة.',
    marks: 5
  }
];
