import { IgQuestion } from '../types';

export const EDEXCEL_2011: IgQuestion[] = [
  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JUNE 2011 — PAPER 1F (4MA0/1F)
  // =========================================================================
  {
    id: 'ED-2011-1F-01',
    code: '4MA0/1F June 2011 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Numbers & Place Value',
    topicAr: 'الأعداد والقيمة المنزلية',
    questionEn: 'The table shows the melting point of 6 metals: Nickel (1452°C), Copper (1083°C), Platinum (1773°C), Gold (1063°C), Silicon (1411°C), Iron (1530°C).\n(a) Which number is smallest?\n(b) Write 1083 in words.\n(c) Value of 5 in 1452.\n(d) Write 1773 to nearest ten.\n(e) Which is a multiple of 10?\n(f) Which number correct to nearest hundred is 1400?\n(g) Silver melting point is 102°C lower than gold (1063°C). Find silver melting point.',
    questionAr: 'الجدول يوضح درجة انصهار 6 معادن: النيكل (1452°م)، النحاس (1083°م)، البلاتين (1773°م)، الذهب (1063°م)، السيليكون (1411°م)، الحديد (1530°م).\n(أ) ما أصغر رقم؟\n(ب) اكتب 1083 بالكلمات.\n(ج) ما قيمة الرقم 5 في 1452؟\n(د) قَرِّب 1773 لأقرب عشره.\n(هـ) أي عدد مضاعف للعدد 10؟\n(و) أي عدد تقريبه لأقرب مئة هو 1400؟\n(ز) درجة انصهار الفضة أقل بـ 102°م من الذهب. احسب درجة انصهار الفضة.',
    options: [
      { id: 'A', textEn: '(a) 1063, (b) One thousand eighty-three, (c) 50, (d) 1770, (e) 1530, (f) 1411, (g) 961°C', textAr: '(أ) 1063، (ب) ألف وثلاثة وثمانون، (ج) 50، (د) 1770، (هـ) 1530، (و) 1411، (ز) 961°م' },
      { id: 'B', textEn: '(a) 1083, (b) One thousand eighty-three, (c) 500, (d) 1770, (e) 1530, (f) 1452, (g) 961°C', textAr: '(أ) 1083، (ب) ألف وثلاثة وثمانون، (ج) 500، (د) 1770، (هـ) 1530، (و) 1452، (ز) 961°م' },
      { id: 'C', textEn: '(a) 1063, (b) One thousand eighty, (c) 5, (d) 1800, (e) 1411, (f) 1411, (g) 950°C', textAr: '(أ) 1063، (ب) ألف وثمانون، (ج) 5، (د) 1800، (هـ) 1411، (و) 1411، (ز) 950°م' },
      { id: 'D', textEn: '(a) 1411, (b) One thousand eighty-three, (c) 50, (d) 1770, (e) 1530, (f) 1452, (g) 961°C', textAr: '(أ) 1411، (ب) ألف وثلاثة وثمانون، (ج) 50، (د) 1770، (هـ) 1530، (و) 1452، (ز) 961°م' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Smallest = 1063 (Gold). 1083 = One thousand eighty-three. Value of 5 in 1452 is 5 tens = 50. 1773 rounded to nearest 10 is 1770. Multiple of 10 ends in 0 = 1530. 1411 to nearest 100 is 1400. Silver = 1063 - 102 = 961°C.',
    explanationAr: 'أصغر عدد هو 1063. بالقيمة المنزلية 5 تعني 50. تقريب 1773 لأقرب عشرة هو 1770. مضاعف 10 هو 1530. 1411 لأقرب مئة هو 1400. انصهار الفضة = 1063 - 102 = 961°م.',
    marks: 7
  },
  {
    id: 'ED-2011-1F-02',
    code: '4MA0/1F June 2011 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Bar Charts & Ratios',
    topicAr: 'الأعمدة البيانية والنسب',
    questionEn: 'The bar chart shows silver medals won at 2008 Olympics: USA (16), Germany (10), Australia (15), China (21), Great Britain (13).\n(a) Which two countries won equal medals? (None in chart, Australia & Germany ratio?)\n(b) How many silver medals did USA win?\n(c) Draw Great Britain bar (13).\n(d) Ratio of Germany (10) to Australia (15) in simplest form.',
    questionAr: 'الرسم البياني بالأعمدة يوضح الميداليات الفضية في أولمبياد 2008: أمريكا (16)، ألمانيا (10)، أستراليا (15)، الصين (21)، بريطانيا العظمى (13).\n(أ) أي دولتين متساويتان؟ (لا توجد، لكن المطلوب أجزاء السؤال).\n(ب) كم عدد ميداليات أمريكا الفضية؟\n(ج) تحديد بريطانيا عند 13.\n(د) أوجد نسبة ميداليات ألمانيا (10) إلى أستراليا (15) في أبسط صورة.',
    options: [
      { id: 'A', textEn: '(b) 16 medals; (d) 2 : 3', textAr: '(ب) 16 ميدالية؛ (د) 2 : 3' },
      { id: 'B', textEn: '(b) 15 medals; (d) 3 : 2', textAr: '(ب) 15 ميدالية؛ (د) 3 : 2' },
      { id: 'C', textEn: '(b) 16 medals; (d) 10 : 15', textAr: '(ب) 16 ميدالية؛ (د) 10 : 15' },
      { id: 'D', textEn: '(b) 21 medals; (d) 1 : 2', textAr: '(ب) 21 ميدالية؛ (د) 1 : 2' }
    ],
    correctAnswer: 'A',
    explanationEn: 'USA = 16 medals. Germany : Australia = 10 : 15. Divide both by 5 to get 2 : 3.',
    explanationAr: 'أمريكا = 16 ميدالية. نسبة ألمانيا إلى أستراليا = 10 : 15 = 2 : 3 بعد القسمة على 5.',
    marks: 5,
    diagramSvg: `<svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto my-2">
      <rect width="400" height="200" fill="#f8fafc" rx="8" />
      <line x1="50" y1="160" x2="370" y2="160" stroke="#334155" strokeWidth="2" />
      <line x1="50" y1="20" x2="50" y2="160" stroke="#334155" strokeWidth="2" />
      <rect x="70" y="64" width="35" height="96" fill="#3b82f6" />
      <text x="87" y="55" fontSize="10" textAnchor="middle" fontWeight="bold">16 (USA)</text>
      <rect x="130" y="100" width="35" height="60" fill="#eab308" />
      <text x="147" y="91" fontSize="10" textAnchor="middle" fontWeight="bold">10 (GER)</text>
      <rect x="190" y="70" width="35" height="90" fill="#10b981" />
      <text x="207" y="61" fontSize="10" textAnchor="middle" fontWeight="bold">15 (AUS)</text>
      <rect x="250" y="34" width="35" height="126" fill="#ef4444" />
      <text x="267" y="25" fontSize="10" textAnchor="middle" fontWeight="bold">21 (CHN)</text>
      <rect x="310" y="82" width="35" height="78" fill="#8b5cf6" stroke="#4c1d95" strokeDasharray="3 3" />
      <text x="327" y="73" fontSize="10" textAnchor="middle" fontWeight="bold">13 (GBR)</text>
    </svg>`,
    diagramTitle: 'Olympic Silver Medals 2008 Bar Chart'
  },
  {
    id: 'ED-2011-1F-03',
    code: '4MA0/1F June 2011 Q3',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: '3D Geometry & Volume of Prism',
    topicAr: 'الأشكال ثلاثية الأبعاد وحجم المنشور',
    questionEn: '(a) Mathematical name of 3D shapes: (i) Cuboid, (ii) Cylinder, (iii) Triangular Prism.\n(b)(i) How many faces has shape (i)? (ii) How many edges has shape (i)?\n(c) A solid prism is made from 12 centimetre cubes. Find its volume with units.',
    questionAr: '(أ) الأسماء الهندسية للأشكال: (1) متوازي مستطيلات، (2) أسطوانة، (3) منشور ثلاثي.\n(ب) عدد أوجه وحواف متوازي المستطيلات.\n(ج) مجسم مكون من 12 مكعب سنتيمتري، أوجد حجمه مع كتابة الوحدة.',
    options: [
      { id: 'A', textEn: '(a) Cuboid, Cylinder, Triangular Prism; (b) 6 faces, 12 edges; (c) 12 cm³', textAr: '(أ) متوازي مستطيلات، أسطوانة، منشور ثلاثي؛ (ب) 6 أوجه، 12 حرفاً؛ (ج) 12 سم³' },
      { id: 'B', textEn: '(a) Cube, Cone, Prism; (b) 6 faces, 8 edges; (c) 12 cm²', textAr: '(أ) مكعب، مخروط، منشور؛ (ب) 6 أوجه، 8 أحرف؛ (ج) 12 سم²' },
      { id: 'C', textEn: '(a) Cuboid, Cylinder, Pyramid; (b) 4 faces, 12 edges; (c) 12 cm', textAr: '(أ) متوازي مستطيلات، أسطوانة، هرم؛ (ب) 4 أوجه، 12 حرفاً؛ (ج) 12 سم' },
      { id: 'D', textEn: '(a) Rectangle, Circle, Triangle; (b) 6 faces, 12 edges; (c) 24 cm³', textAr: '(أ) مستطيل، دائرة، مثلث؛ (ب) 6 أوجه، 12 حرفاً؛ (ج) 24 سم³' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Cuboid has 6 rectangular faces, 12 edges, 8 vertices. Volume of 12 cm cubes = 12 cm³.',
    explanationAr: 'متوازي المستطيلات له 6 أوجه و 12 حرفاً. حجم 12 مكعب سنتيمتري = 12 سم³.',
    marks: 6
  },
  {
    id: 'ED-2011-1F-04',
    code: '4MA0/1F June 2011 Q4',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Sequences & Patterns',
    topicAr: 'المتتاليات والأنماط',
    questionEn: 'Sequence: 1, 4, 16, 64, 256...\n(a) Work out the next two terms.\n(b) Explain how you worked out your answer.\n(c) The 5th term (256) ends in 6. What number does the 29th term end with?',
    questionAr: 'المتتالية: 1، 4، 16، 64، 256...\n(أ) أوجد الحدين التاليين.\n(ب) اشرح كيف حصلت على الإجابة.\n(ج) الحد الخامس (256) ينتهي بالرقم 6. ما الرقم الذي ينتهي به الحد 29؟',
    options: [
      { id: 'A', textEn: '(a) 1024, 4096; (b) Multiply previous term by 4; (c) 6', textAr: '(أ) 1024، 4096؛ (ب) ضرب الحد السابق في 4؛ (ج) 6' },
      { id: 'B', textEn: '(a) 512, 1024; (b) Add 3, 12, 48...; (c) 4', textAr: '(أ) 512، 1024؛ (ب) إضافة الزيادة؛ (ج) 4' },
      { id: 'C', textEn: '(a) 1024, 4096; (b) Multiply by 4; (c) 4', textAr: '(أ) 1024، 4096؛ (ب) الضرب في 4؛ (ج) 4' },
      { id: 'D', textEn: '(a) 300, 400; (b) Add 100; (c) 6', textAr: '(أ) 300، 400؛ (ب) إضافة 100؛ (ج) 6' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Rule is multiply by 4: 256 × 4 = 1024, 1024 × 4 = 4096. Powers of 4 end in: 4¹=4, 4²=6, 4³=4, 4⁴=6... Odd powers end in 4, even powers end in 6. The 29th term is 4²⁸ (even power), so it ends in 6.',
    explanationAr: 'القاعدة هي الضرب في 4. الحدين هما 1024 و 4096. آحاد قوى العدد 4 تتناوب بين 4 (للقوى الفردية) و 6 (للقوى الزوجية). الحد 29 هو 4²⁸ قوى زوجية، فيكون آحاده 6.',
    marks: 4
  },
  {
    id: 'ED-2011-1F-05',
    code: '4MA0/1F June 2011 Q5',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Statistics — Mode & Mean',
    topicAr: 'الإحصاء — المنوال والمتوسط الحسابي',
    questionEn: 'Wendy surveyed 9 friends on foreign countries visited: 7, 3, 4, 3, 9, 10, 2, 3, 4.\n(a) Find the mode.\n(b) Work out the mean.',
    questionAr: 'سألت ويندي 9 أصدقاء عن عدد الدول التي زاروها: 7، 3، 4، 3، 9، 10، 2، 3، 4.\n(أ) أوجد المنوال.\n(ب) احسب المتوسط الحسابي.',
    options: [
      { id: 'A', textEn: '(a) Mode = 3; (b) Mean = 5', textAr: '(أ) المنوال = 3؛ (ب) المتوسط = 5' },
      { id: 'B', textEn: '(a) Mode = 4; (b) Mean = 4.5', textAr: '(أ) المنوال = 4؛ (ب) المتوسط = 4.5' },
      { id: 'C', textEn: '(a) Mode = 3; (b) Mean = 4.5', textAr: '(أ) المنوال = 3؛ (ب) المتوسط = 4.5' },
      { id: 'D', textEn: '(a) Mode = 7; (b) Mean = 5', textAr: '(أ) المنوال = 7؛ (ب) المتوسط = 5' }
    ],
    correctAnswer: 'A',
    explanationEn: '3 appears 3 times (most frequent) so Mode = 3. Sum = 7+3+4+3+9+10+2+3+4 = 45. Mean = 45 / 9 = 5.',
    explanationAr: 'الرقم 3 تكرر 3 مرات فهو المنوال. المجموع = 45، المتوسط = 45 ÷ 9 = 5.',
    marks: 3
  },
  {
    id: 'ED-2011-1F-06',
    code: '4MA0/1F June 2011 Q6',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Fractions, Decimals & Percentages',
    topicAr: 'الكسور والأعداد العشرية والنسب المئوية',
    questionEn: 'Sri Lanka religions: Buddhism 69%, Hinduism 16%, Islam 8%, Christianity 7%.\n(a) Write 16% as a fraction in simplest form.\n(b) Write 7% as a decimal.\n(c) Percentage that does NOT follow Buddhism?\n(d) Population is 21 million. Work out 16% of 21 million to nearest million.',
    questionAr: 'الأديان في سريلانكا: البوذية 69%، الهندوسية 16%، الإسلام 8%، المسيحية 7%.\n(أ) اكتب 16% في صورة كسر في أبسط صورة.\n(ب) اكتب 7% كعدد عشري.\n(ج) النسبة المئوية للسكان الذين لا يتبعون البوذية؟\n(د) عدد السكان 21 مليوناً. احسب 16% من 21 مليوناً لأقرب مليون.',
    options: [
      { id: 'A', textEn: '(a) 4/25, (b) 0.07, (c) 31%, (d) 3 million', textAr: '(أ) 4/25، (ب) 0.07، (ج) 31%، (د) 3 ملايين' },
      { id: 'B', textEn: '(a) 16/100, (b) 0.7, (c) 31%, (d) 4 million', textAr: '(أ) 16/100، (ب) 0.7، (ج) 31%، (د) 4 ملايين' },
      { id: 'C', textEn: '(a) 4/25, (b) 0.07, (c) 69%, (d) 3.36 million', textAr: '(أ) 4/25، (ب) 0.07، (ج) 69%، (د) 3.36 مليون' },
      { id: 'D', textEn: '(a) 8/50, (b) 0.007, (c) 31%, (d) 3 million', textAr: '(أ) 8/50، (ب) 0.007، (ج) 31%، (د) 3 ملايين' }
    ],
    correctAnswer: 'A',
    explanationEn: '16% = 16/100 = 4/25. 7% = 0.07. Not Buddhism = 100% - 69% = 31%. 16% of 21m = 0.16 × 21 = 3.36m ≈ 3 million.',
    explanationAr: '16% = 4/25. 7% = 0.07. غير البوذية = 100% - 69% = 31%. 16% من 21 مليون = 3.36 مليون ≈ 3 ملايين.',
    marks: 6
  },
  {
    id: 'ED-2011-1F-07',
    code: '4MA0/1F June 2011 Q7',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Geometry — Angles on Straight Lines',
    topicAr: 'الهندسة — الزوايا على مستقيم',
    questionEn: 'ABC is a straight line. Angle 107° and angle 42° are given.\n(a)(i) Work out angle w = 180° - (107° + 42°).\n(a)(ii) Reason: Angles on a straight line sum to 180°.\n(b) Intersecting lines JKL & MKN with angles 52° and 81°: find x and y.',
    questionAr: 'ABC مستقيم. الزاويتان 107° و 42° معلومتان.\n(أ) احسب الزاوية w والسبب.\n(ب) مستقيمان متقاطعان، أوجد x و y.',
    options: [
      { id: 'A', textEn: '(a)(i) w = 31°, (ii) Angles on a straight line add up to 180°; (b) x = 52°, y = 47°', textAr: '(أ) w = 31°، السبب: زوايا على خط مستقيم مجموعها 180°؛ (ب) x = 52°، y = 47°' },
      { id: 'B', textEn: '(a)(i) w = 31°, (ii) Vertically opposite angles; (b) x = 81°, y = 52°', textAr: '(أ) w = 31°؛ (ب) x = 81°، y = 52°' },
      { id: 'C', textEn: '(a)(i) w = 41°, (ii) Straight line sum 180°; (b) x = 52°, y = 52°', textAr: '(أ) w = 41°؛ (ب) x = 52°، y = 52°' },
      { id: 'D', textEn: '(a)(i) w = 31°, (ii) Angles in triangle; (b) x = 128°, y = 52°', textAr: '(أ) w = 31°؛ (ب) x = 128°، y = 52°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'w = 180° - 107° - 42° = 31°. Reason: Angles on a straight line sum to 180°. Vertically opposite angle x = 52°, y = 180° - 52° - 81° = 47°.',
    explanationAr: 'w = 180° - 107° - 42° = 31°. السبب زوايا المستقيم مجموعها 180°. بالتقابل بالرأس x = 52°، و y = 47°.',
    marks: 6
  },
  {
    id: 'ED-2011-1F-08',
    code: '4MA0/1F June 2011 Q8',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Roots & Decimals',
    topicAr: 'الجذور والأعداد العشرية',
    questionEn: '(a)(i) Find √19 full display.\n(a)(ii) Write to 2 decimal places.\n(b) Find ∛16.',
    questionAr: '(أ) أوجد √19 بالكامل ثم مقرباً لـ 2 منزلين عشريتين.\n(ب) أوجد الجذر التكعيبي ∛16.',
    options: [
      { id: 'A', textEn: '(a)(i) 4.358898944, (ii) 4.36; (b) 2.5198421', textAr: '(أ) 4.358898944، مقرباً 4.36؛ (ب) 2.52' },
      { id: 'B', textEn: '(a)(i) 4.358898944, (ii) 4.35; (b) 2.52', textAr: '(أ) 4.358898944، مقرباً 4.35؛ (ب) 2.52' },
      { id: 'C', textEn: '(a)(i) 4.5, (ii) 4.50; (b) 2.50', textAr: '(أ) 4.5؛ (ب) 2.50' },
      { id: 'D', textEn: '(a)(i) 4.36, (ii) 4.36; (b) 4.00', textAr: '(أ) 4.36؛ (ب) 4.00' }
    ],
    correctAnswer: 'A',
    explanationEn: '√19 = 4.358898944... ≈ 4.36 to 2 d.p. ∛16 = 2.5198421...',
    explanationAr: '√19 ≈ 4.36 لـ منزلين عشريتين. ∛16 ≈ 2.52.',
    marks: 4
  },
  {
    id: 'ED-2011-1F-09',
    code: '4MA0/1F June 2011 Q9',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Algebraic Simplification',
    topicAr: 'تبسيط المقادير الجبرية',
    questionEn: '(a) Simplify m + m + m − m + m − m\n(b) Simplify 5x − 3y + 4x − 2y',
    questionAr: '(أ) بَسِّط: m + m + m − m + m − m\n(ب) بَسِّط: 5x − 3y + 4x − 2y',
    options: [
      { id: 'A', textEn: '(a) 2m; (b) 9x − 5y', textAr: '(أ) 2m؛ (ب) 9x − 5y' },
      { id: 'B', textEn: '(a) 3m; (b) 9x − y', textAr: '(أ) 3m؛ (ب) 9x − y' },
      { id: 'C', textEn: '(a) 2m; (b) 20x + 6y', textAr: '(أ) 2m؛ (ب) 20x + 6y' },
      { id: 'D', textEn: '(a) m²; (b) 9x + 5y', textAr: '(أ) m²؛ (ب) 9x + 5y' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 3m - 2m + m - m = 2m. (b) (5x + 4x) + (-3y - 2y) = 9x - 5y.',
    explanationAr: '(أ) النتيجة 2m. (ب) تجميع الحدود المتشابهة: 9x - 5y.',
    marks: 3
  },
  {
    id: 'ED-2011-1F-10',
    code: '4MA0/1F June 2011 Q10',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 1F (Foundation)',
    topicEn: 'Unit Conversions & Mass',
    topicAr: 'تحويل الوحدات والكتلة',
    questionEn: 'A box containing screws weighs 1.21 kilograms. Each screw weighs 2.5 grams. When empty, the box weighs 60 grams. Work out the number of screws in the box.',
    questionAr: 'صندوق به براغي يزن 1.21 كيلوجرام. كل برغي يزن 2.5 جرام. الصندوق فارغاً يزن 60 جراماً. احسب عدد البراغي في الصندوق.',
    options: [
      { id: 'A', textEn: '460 screws', textAr: '460 برغياً' },
      { id: 'B', textEn: '484 screws', textAr: '484 برغياً' },
      { id: 'C', textEn: '440 screws', textAr: '440 برغياً' },
      { id: 'D', textEn: '500 screws', textAr: '500 برغي' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Total mass = 1.21 kg = 1210 g. Screws mass = 1210 - 60 = 1150 g. Number of screws = 1150 / 2.5 = 460.',
    explanationAr: 'الكتلة الكلية = 1210 جم. كتلة البراغي = 1210 - 60 = 1150 جم. عدد البراغي = 1150 ÷ 2.5 = 460.',
    marks: 3
  },

  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JUNE 2011 — PAPER 2F (4MA0/2F)
  // =========================================================================
  {
    id: 'ED-2011-2F-01',
    code: '4MA0/2F June 2011 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Pictograms & Percentages',
    topicAr: 'الصور البيانية والنسب المئوية',
    questionEn: 'Pictogram of goals scored by Newton United: Aug (6), Sep (12), Oct (8), Nov (10).\n(a) Goals in Aug?\n(b) How many more in Sep than Oct?\n(c) Show Nov = 10 goals.\n(d) 20% of 10 goals were headers. Work out 20% of 10.',
    questionAr: 'تصوير بياني لأهداف نيوتون يونايتد: أغسطس (6)، سبتمبر (12)، أكتوبر (8)، نوفمبر (10).\n(أ) عدد الأهداف في أغسطس؟\n(ب) كم يزيد سبتمبر عن أكتوبر؟\n(ج) تمثيل أهداف نوفمبر (10).\n(د) 20% من أهداف نوفمبر كانت بالرأس. احسب 20% من 10.',
    options: [
      { id: 'A', textEn: '(a) 6 goals; (b) 4 goals; (d) 2 goals', textAr: '(أ) 6 أهداف؛ (ب) 4 أهداف؛ (د) هدفان' },
      { id: 'B', textEn: '(a) 8 goals; (b) 4 goals; (d) 2 goals', textAr: '(أ) 8 أهداف؛ (ب) 4 أهداف؛ (د) هدفان' },
      { id: 'C', textEn: '(a) 6 goals; (b) 2 goals; (d) 1 goal', textAr: '(أ) 6 أهداف؛ (ب) هدفان؛ (د) هدف واحد' },
      { id: 'D', textEn: '(a) 12 goals; (b) 4 goals; (d) 3 goals', textAr: '(أ) 12 أهداف؛ (ب) 4 أهداف؛ (د) 3 أهداف' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Aug = 6. Sep - Oct = 12 - 8 = 4. 20% of 10 = 0.2 × 10 = 2.',
    explanationAr: 'أغسطس = 6 أهداف. زيادة سبتمبر = 12 - 8 = 4. أهداف الرأس = 0.2 × 10 = 2.',
    marks: 5,
    diagramSvg: `<svg viewBox="0 0 380 150" className="w-full max-w-md mx-auto my-2">
      <rect width="380" height="150" fill="#f1f5f9" rx="8" />
      <text x="20" y="30" fontSize="11" fontWeight="bold">August:</text>
      <text x="100" y="30" fontSize="16">⚽ ⚽ ⚽</text>
      <text x="20" y="60" fontSize="11" fontWeight="bold">September:</text>
      <text x="100" y="60" fontSize="16">⚽ ⚽ ⚽ ⚽ ⚽ ⚽</text>
      <text x="20" y="90" fontSize="11" fontWeight="bold">October:</text>
      <text x="100" y="90" fontSize="16">⚽ ⚽ ⚽ ⚽</text>
      <text x="20" y="120" fontSize="11" fontWeight="bold">Key:</text>
      <text x="60" y="120" fontSize="11">⚽ = 2 goals</text>
    </svg>`,
    diagramTitle: 'Goals Scored Pictogram'
  },
  {
    id: 'ED-2011-2F-04',
    code: '4MA0/2F June 2011 Q4',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Parallelogram Area & Grid Coordinates',
    topicAr: 'مساحة متوازي الأضلاع وإحداثيات الشبكة',
    questionEn: 'Parallelogram PQRS on centimetre grid: base = 6 cm, height = 4 cm.\n(a) Measure length of PQ.\n(b) Write coordinates of point R.\n(c) Work out area of parallelogram PQRS with units.',
    questionAr: 'متوازي أضلاع PQRS على شبكة مربعات: القاعدة = 6 سم، الارتفاع = 4 سم.\n(أ) قياس طول PQ.\n(ب) إحداثيات النقطة R.\n(ج) احسب مساحة متوازي الأضلاع مع ذكر الوحدة.',
    options: [
      { id: 'A', textEn: '(a) 6 cm; (b) (8, 6); (c) 24 cm²', textAr: '(أ) 6 سم؛ (ب) (8, 6)؛ (ج) 24 سم²' },
      { id: 'B', textEn: '(a) 5 cm; (b) (6, 8); (c) 20 cm²', textAr: '(أ) 5 سم؛ (ب) (6, 8)؛ (ج) 20 سم²' },
      { id: 'C', textEn: '(a) 6 cm; (b) (8, 6); (c) 12 cm²', textAr: '(أ) 6 سم؛ (ب) (8, 6)؛ (ج) 12 سم²' },
      { id: 'D', textEn: '(a) 4 cm; (b) (6, 6); (c) 24 cm', textAr: '(أ) 4 سم؛ (ب) (6, 6)؛ (ج) 24 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Base = 6 cm, height = 4 cm. Area = base × height = 6 × 4 = 24 cm².',
    explanationAr: 'القاعدة = 6 سم والارتفاع = 4 سم. المساحة = 6 × 4 = 24 سم².',
    marks: 5
  },
  {
    id: 'ED-2011-2F-05',
    code: '4MA0/2F June 2011 Q5',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 2F (Foundation)',
    topicEn: 'Symmetry in Road Signs',
    topicAr: 'التماثل في إشارات المرور',
    questionEn: 'Five road signs: A (Triangle), B (Circle), C (Octagon), D (Rectangle), E (Shield).\n(a) Write letters of two signs with only 1 line of symmetry.\n(b)(i) Write letter of sign with rotational symmetry.\n(b)(ii) Order of rotational symmetry.',
    questionAr: 'خمس إشارات مرور: A (مثلث)، B (دائرة)، C (ثماني)، D (مستطيل)، E (درع).\n(أ) حدد الإشارتين اللتين لهما خط تماثل واحد فقط.\n(ب) الإشارة ذات التماثل الدوراني ورتبته.',
    options: [
      { id: 'A', textEn: '(a) A and E; (b)(i) C, (ii) Order 8', textAr: '(أ) A و E؛ (ب) C برتبة 8' },
      { id: 'B', textEn: '(a) B and C; (b)(i) A, (ii) Order 3', textAr: '(أ) B و C؛ (ب) A برتبة 3' },
      { id: 'C', textEn: '(a) A and D; (b)(i) B, (ii) Order 2', textAr: '(أ) A و D؛ (ب) B برتبة 2' },
      { id: 'D', textEn: '(a) C and E; (b)(i) D, (ii) Order 4', textAr: '(أ) C و E؛ (ب) D برتبة 4' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Isosceles triangle (A) and shield (E) have 1 line of symmetry. Regular octagon (C) has rotational symmetry of order 8.',
    explanationAr: 'المثلث والدرع لهما خط تماثل واحد. الثماني المنتظم له تماثل دوراني من الرتبة 8.',
    marks: 4
  },

  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JUNE 2011 — PAPER 3H (4MA0/3H)
  // =========================================================================
  {
    id: 'ED-2011-3H-01',
    code: '4MA0/3H June 2011 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Calculators & Significant Figures',
    topicAr: 'الحسابات والأرقام المعنوية',
    questionEn: '(a) Use calculator to evaluate (24.1 - 8.47) / (8.6 - 2.2). Write full display.\n(b) Give answer to 3 significant figures.',
    questionAr: '(أ) احسب قيمة (24.1 - 8.47) ÷ (8.6 - 2.2) واكتب الشاشة بالكامل.\n(ب) اكتب إجابتك مقربة لـ 3 أرقام معنوية.',
    options: [
      { id: 'A', textEn: '(a) 2.4421875; (b) 2.44', textAr: '(أ) 2.4421875؛ (ب) 2.44' },
      { id: 'B', textEn: '(a) 2.4421875; (b) 2.45', textAr: '(أ) 2.4421875؛ (ب) 2.45' },
      { id: 'C', textEn: '(a) 2.4400000; (b) 2.40', textAr: '(أ) 2.4400000؛ (ب) 2.40' },
      { id: 'D', textEn: '(a) 3.1251211; (b) 3.13', textAr: '(أ) 3.1251211؛ (ب) 3.13' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator = 15.63. Denominator = 6.4. 15.63 / 6.4 = 2.4421875. Correct to 3 s.f. is 2.44.',
    explanationAr: 'البسط = 15.63، المقام = 6.4. النتيجة = 2.4421875. التقريب لـ 3 أرقام معنوية هو 2.44.',
    marks: 3
  },
  {
    id: 'ED-2011-3H-02',
    code: '4MA0/3H June 2011 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Polygons & Interior Angles',
    topicAr: 'المضلعات والزوايا الداخلية',
    questionEn: 'Four of the interior angles of a pentagon are 97°, 114°, 127° and 84°. Work out the size of the fifth angle.',
    questionAr: 'أربع زوايا داخلية لشكل خماسي هي 97°، 114°، 127°، و 84°. احسب قياس الزاوية الخامس.',
    options: [
      { id: 'A', textEn: '118°', textAr: '118°' },
      { id: 'B', textEn: '108°', textAr: '108°' },
      { id: 'C', textEn: '128°', textAr: '128°' },
      { id: 'D', textEn: '112°', textAr: '112°' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sum of interior angles of pentagon = (5 - 2) × 180° = 540°. Sum of given 4 = 97 + 114 + 127 + 84 = 422°. Fifth angle = 540° - 422° = 118°.',
    explanationAr: 'مجموع زوايا الخماسي الداخلي = (5 - 2) × 180 = 540°. مجموع الزوايا الأربع = 422°. الزاوية الخامسة = 540 - 422 = 118°.',
    marks: 3
  },
  {
    id: 'ED-2011-3H-09',
    code: '4MA0/3H June 2011 Q9',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Compound Interest',
    topicAr: 'الفائدة المركبة',
    questionEn: 'Ella invested $8000 for 3 years at 5% per annum compound interest. Calculate the value of her investment at the end of 3 years.',
    questionAr: 'استثمرت إيلا 8000 دولار لمدة 3 سنوات بفائدة مركبة 5% سنوياً. احسب قيمة استثمارها في نهاية السنوات الثلاث.',
    options: [
      { id: 'A', textEn: '$9261.00', textAr: '9261.00 دولار' },
      { id: 'B', textEn: '$9200.00', textAr: '9200.00 دولار' },
      { id: 'C', textEn: '$9260.50', textAr: '9260.50 دولار' },
      { id: 'D', textEn: '$8400.00', textAr: '8400.00 دولار' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Value = 8000 × (1 + 0.05)³ = 8000 × (1.05)³ = 8000 × 1.157625 = $9261.00.',
    explanationAr: 'القيمة الإجمالية = 8000 × (1.05)³ = 9261 دولاراً.',
    marks: 3
  },
  {
    id: 'ED-2011-3H-12',
    code: '4MA0/3H June 2011 Q12',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Similar Triangles',
    topicAr: 'المثلثات المتشابهة',
    questionEn: 'AB is parallel to DE. ACE and BCD are straight lines. AB = 9 cm, AC = 7.2 cm, CD = 5.2 cm, DE = 6 cm.\n(a) Calculate BC.\n(b) Calculate CE.',
    questionAr: 'AB يوازي DE. ACE و BCD مستقيمان. AB = 9 سم، AC = 7.2 سم، CD = 5.2 سم، DE = 6 سم.\n(أ) احسب طول BC.\n(ب) احسب طول CE.',
    options: [
      { id: 'A', textEn: '(a) BC = 7.8 cm; (b) CE = 4.8 cm', textAr: '(أ) BC = 7.8 سم؛ (ب) CE = 4.8 سم' },
      { id: 'B', textEn: '(a) BC = 6.5 cm; (b) CE = 4.2 cm', textAr: '(أ) BC = 6.5 سم؛ (ب) CE = 4.2 سم' },
      { id: 'C', textEn: '(a) BC = 7.8 cm; (b) CE = 5.0 cm', textAr: '(أ) BC = 7.8 سم؛ (ب) CE = 5.0 سم' },
      { id: 'D', textEn: '(a) BC = 8.0 cm; (b) CE = 4.8 cm', textAr: '(أ) BC = 8.0 سم؛ (ب) CE = 4.8 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Scale factor = AB / DE = 9 / 6 = 1.5. (a) BC = 1.5 × CD = 1.5 × 5.2 = 7.8 cm. (b) CE = AC / 1.5 = 7.2 / 1.5 = 4.8 cm.',
    explanationAr: 'معامل التشابه = 9 ÷ 6 = 1.5. (أ) BC = 1.5 × 5.2 = 7.8 سم. (ب) CE = 7.2 ÷ 1.5 = 4.8 سم.',
    marks: 4
  },
  {
    id: 'ED-2011-3H-18',
    code: '4MA0/3H June 2011 Q18',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 3H (Higher)',
    topicEn: 'Trigonometry & Multi-Step Right Triangles',
    topicAr: 'حساب المثلثات والمثلثات القائمة متعددة الخطوات',
    questionEn: 'Triangle ABC is right-angled at B. Angle BAC = 32°. AC = 47 m. D is on AB such that angle BDC = 51°. Calculate the length of BD correct to 3 s.f.',
    questionAr: 'المثلث ABC قائم الزاوية في B. الزاوية BAC = 32° و AC = 47 م. D نقطة على AB حيث BDC = 51°. احسب طول BD مقرباً لـ 3 أرقام معنوية.',
    options: [
      { id: 'A', textEn: '20.2 m', textAr: '20.2 م' },
      { id: 'B', textEn: '19.8 m', textAr: '19.8 م' },
      { id: 'C', textEn: '24.9 m', textAr: '24.9 م' },
      { id: 'D', textEn: '22.5 m', textAr: '22.5 م' }
    ],
    correctAnswer: 'A',
    explanationEn: 'BC = 47 × sin(32°) = 24.906 m. In right triangle BCD: tan(51°) = BC / BD => BD = 24.906 / tan(51°) = 24.906 / 1.2349 = 20.169 ≈ 20.2 m.',
    explanationAr: 'BC = 47 × sin(32°) = 24.906 م. في المثلث BCD: tan(51°) = BC ÷ BD أي BD = 24.906 ÷ tan(51°) = 20.2 م.',
    marks: 5
  },

  // =========================================================================
  // EDEXCEL IGCSE MATHEMATICS A — JUNE 2011 — PAPER 4H (4MA0/4H)
  // =========================================================================
  {
    id: 'ED-2011-4H-01',
    code: '4MA0/4H June 2011 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Percentage Discounts',
    topicAr: 'التخفيضات والخصم المئوي',
    questionEn: 'In a sale, normal prices are reduced by 15%. The normal price of a television was $640. Work out the sale price of the television.',
    questionAr: 'في تخفيضات، تُخفض الأسعار بنسبة 15%. كان السعر الأصلي للتلفزيون 640 دولاراً. احسب سعر التلفزيون في التخفيضات.',
    options: [
      { id: 'A', textEn: '$544', textAr: '544 دولاراً' },
      { id: 'B', textEn: '$520', textAr: '520 دولاراً' },
      { id: 'C', textEn: '$550', textAr: '550 دولاراً' },
      { id: 'D', textEn: '$96', textAr: '96 دولاراً' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Discount = 15% of $640 = 0.15 × 640 = $96. Sale price = 640 - 96 = $544 (or 0.85 × 640 = $544).',
    explanationAr: 'مقدار الخصم = 15% × 640 = 96$. سعر البيع = 640 - 96 = 544$.',
    marks: 3
  },
  {
    id: 'ED-2011-4H-23',
    code: '4MA0/4H June 2011 Q23',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Optimization & Calculus',
    topicAr: 'التفاضل والتطبيقات المثلى',
    questionEn: 'ABCD is rectangle (10×8 cm). Points P, Q, R, S on sides with BP = CQ = DR = AS = x.\n(a) Show quadrilateral PQRS area A = 2x² - 18x + 80.\n(b)(i) Find dA/dx.\n(ii) Find x for minimum A.\n(iii) Explain why minimum.',
    questionAr: 'ABCD مستطيل (10×8 سم). النقاط P, Q, R, S تقع على الأضلاع بحيث BP = CQ = DR = AS = x.\n(أ) أثبت أن مساحة PQRS هي A = 2x² - 18x + 80.\n(ب) أوجد dA/dx واليمة x التي تجعل المساحة أصغر ما يمكن مع التعلِيل.',
    options: [
      { id: 'A', textEn: '(b)(i) dA/dx = 4x - 18; (ii) x = 4.5 cm; (iii) d²A/dx² = 4 > 0', textAr: '(ب) dA/dx = 4x - 18؛ قيمة x = 4.5 سم؛ المشتقة الثانية = 4 > 0' },
      { id: 'B', textEn: '(b)(i) dA/dx = 2x - 18; (ii) x = 9.0 cm; (iii) Parabola opens up', textAr: '(ب) dA/dx = 2x - 18؛ قيمة x = 9.0 سم' },
      { id: 'C', textEn: '(b)(i) dA/dx = 4x - 18; (ii) x = 5.0 cm; (iii) Linear', textAr: '(ب) dA/dx = 4x - 18؛ قيمة x = 5.0 سم' },
      { id: 'D', textEn: '(b)(i) dA/dx = 4x + 18; (ii) x = 4.5 cm; (iii) Minimum', textAr: '(ب) dA/dx = 4x + 18؛ قيمة x = 4.5 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'A = 10×8 - 2(½ x(10-x)) - 2(½ x(8-x)) = 80 - 10x + x² - 8x + x² = 2x² - 18x + 80. dA/dx = 4x - 18 = 0 => x = 4.5 cm. d²A/dx² = 4 > 0 so minimum.',
    explanationAr: 'طرح المساحات الأربع يعطي A = 2x² - 18x + 80. بوضع المشتقة الأولى 4x - 18 = 0 نجد x = 4.5 سم. المشتقة الثانية موجبة إذن قيمة صغرى.',
    marks: 7
  },
  {
    id: 'ED-2011-4H-24',
    code: '4MA0/4H June 2011 Q24',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2011,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: '3D Geometry — Sphere & Cylinder Volume Ratio',
    topicAr: 'الهندسة ثلاثية الأبعاد — نسبة حجم الكرة والأسطوانة',
    questionEn: 'Solid cylinder (radius r, height h) and solid sphere (radius r). Given:\n(Total Surface Area of Cylinder) / (Surface Area of Sphere) = 2.\nFind the value of (Volume of Cylinder) / (Volume of Sphere).',
    questionAr: 'أسطوانة قائمة (نصف قطر r وارتفاع h) وكُرة (نصف قطر r). إذا كان:\n(المساحة الكلية للأسطوانة) ÷ (مساحة سطح الكرة) = 2.\nأوجد قيمة: (حجم الأسطوانة) ÷ (حجم الكرة).',
    options: [
      { id: 'A', textEn: '9 / 4 = 2.25', textAr: '9 / 4 = 2.25' },
      { id: 'B', textEn: '3 / 2 = 1.50', textAr: '3 / 2 = 1.50' },
      { id: 'C', textEn: '2 / 1 = 2.00', textAr: '2 / 1 = 2.00' },
      { id: 'D', textEn: '4 / 3 = 1.33', textAr: '4 / 3 = 1.33' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Cylinder total area = 2πr² + 2πrh. Sphere area = 4πr². (2πr² + 2πrh) / (4πr²) = 2 => (r + h) / (2r) = 2 => r + h = 4r => h = 3r. Volume ratio = (πr² h) / ( (4/3)πr³ ) = (πr²(3r)) / ( (4/3)πr³ ) = 3 / (4/3) = 9/4 = 2.25.',
    explanationAr: 'نسبة المساحتين تعطي ارتفاع الأسطوانة h = 3r. بالتعويض في نسبة الحجمين: (πr² × 3r) ÷ (4/3 πr³) = 3 ÷ (4/3) = 9/4 = 2.25.',
    marks: 5
  }
];
