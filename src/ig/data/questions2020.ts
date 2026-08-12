import { IgQuestion } from '../types';

export const QUESTIONS_2020: IgQuestion[] = [
  // ==========================================
  // FEB/MARCH 2020 - PAPER 42 (0580/42)
  // ==========================================
  {
    id: 'IG-2020-FM-42-01',
    code: '0580/42/F/M/20 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Feb/March',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'In January 2020, the population of a town was 5% more than in January 2018. In January 2021, it was 2% less than in January 2020. Calculate the overall percentage increase from January 2018 to January 2021.',
    questionAr: 'في يناير 2020، كان عدد سكان بلدة يزيد بنسبة 5% عن يناير 2018. وفي يناير 2021، كان يقل بنسبة 2% عن يناير 2020. احسب النسبة المئوية الإجمالية للزيادة من يناير 2018 إلى يناير 2021.',
    options: [
      { id: 'A', textEn: '2.9%', textAr: '2.9%' },
      { id: 'B', textEn: '3.0%', textAr: '3.0%' },
      { id: 'C', textEn: '2.8%', textAr: '2.8%' },
      { id: 'D', textEn: '3.1%', textAr: '3.1%' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Let original population in 2018 be 100. In 2020: 100 × 1.05 = 105. In 2021: 105 × 0.98 = 102.9. Overall increase = 102.9 - 100 = 2.9%.',
    explanationAr: 'بفرض أن عدد السكان في 2018 هو 100. في 2020 يصبح 105. في 2021 يصبح 105 × 0.98 = 102.9. الزيادة الكلية = 2.9%.',
    solutionStepsEn: ['Multiplier = 1.05 × 0.98 = 1.029', 'Overall percentage increase = (1.029 - 1) × 100% = 2.9%'],
    solutionStepsAr: ['معامل التغير = 1.05 × 0.98 = 1.029', 'النسبة المئوية للزيادة = 2.9%']
  },
  {
    id: 'IG-2020-FM-42-02',
    code: '0580/42/F/M/20 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Feb/March',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Factorise completely: x³ - 16x',
    questionAr: 'حلّل تحليلاً كاملاً: x³ - 16x',
    options: [
      { id: 'A', textEn: 'x(x - 4)(x + 4)', textAr: 'x(x - 4)(x + 4)' },
      { id: 'B', textEn: 'x(x² - 16)', textAr: 'x(x² - 16)' },
      { id: 'C', textEn: '(x - 4)²(x + 4)', textAr: '(x - 4)²(x + 4)' },
      { id: 'D', textEn: 'x(x - 8)(x + 2)', textAr: 'x(x - 8)(x + 2)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'First take out the common factor x: x(x² - 16). Then factorise the difference of two squares: x(x - 4)(x + 4).',
    explanationAr: 'بأخذ العامل المشترك x نصل إلى x(x² - 16). ثم نحلل الفرق بين مربعين إلى x(x - 4)(x + 4).',
    solutionStepsEn: ['x³ - 16x = x(x² - 16)', '= x(x - 4)(x + 4)'],
    solutionStepsAr: ['أخذ x عامل مشترك: x(x² - 16)', 'تحليل الفرق بين مربعين: x(x - 4)(x + 4)']
  },

  // ==========================================
  // MAY/JUNE 2020 - PAPER 22 (0580/22)
  // ==========================================
  {
    id: 'IG-2020-MJ-22-01',
    code: '0580/22/M/J/20 Q12',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Simplify: (x² - 2x) / (x² - 4x + 4)',
    questionAr: 'بسّط الكسر الجبري: (x² - 2x) / (x² - 4x + 4)',
    options: [
      { id: 'A', textEn: 'x / (x - 2)', textAr: 'x / (x - 2)' },
      { id: 'B', textEn: 'x / (x + 2)', textAr: 'x / (x + 2)' },
      { id: 'C', textEn: '1 / (x - 2)', textAr: '1 / (x - 2)' },
      { id: 'D', textEn: '(x - 2) / x', textAr: '(x - 2) / x' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator = x(x - 2). Denominator = (x - 2)². Cancel the common factor (x - 2) to get x / (x - 2).',
    explanationAr: 'تحليل البسط: x(x - 2). تحليل المقام: (x - 2)². باختصار العامل المشترك (x - 2) يتبقى x / (x - 2).',
    solutionStepsEn: ['Numerator = x(x - 2)', 'Denominator = (x - 2)(x - 2)', 'Simplified = x / (x - 2)'],
    solutionStepsAr: ['البسط = x(x - 2)', 'المقام = (x - 2)²', 'الناتج = x / (x - 2)']
  },
  {
    id: 'IG-2020-MJ-21-01',
    code: '0580/21/M/J/20 Q14',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'y is inversely proportional to x². When x = 4, y = 3. Find y when x = 2.',
    questionAr: 'y تتناسب عكسياً مع x². عندما x = 4 تكون y = 3. أوجد y عندما x = 2.',
    options: [
      { id: 'A', textEn: 'y = 12', textAr: 'y = 12' },
      { id: 'B', textEn: 'y = 6', textAr: 'y = 6' },
      { id: 'C', textEn: 'y = 24', textAr: 'y = 24' },
      { id: 'D', textEn: 'y = 9', textAr: 'y = 9' }
    ],
    correctAnswer: 'A',
    explanationEn: 'y = k / x². Since y = 3 when x = 4, we have 3 = k / 16 => k = 48. When x = 2, y = 48 / 4 = 12.',
    explanationAr: 'بما أن y = k / x²، نعوض بالقيم: 3 = k / 16 ومنها k = 48. عندما x = 2 تكون y = 48 ÷ 4 = 12.',
    solutionStepsEn: ['y = k / x²', '3 = k / 16 => k = 48', 'y = 48 / 4 = 12'],
    solutionStepsAr: ['y = k / x²', 'k = 48', 'y = 12']
  },
  {
    id: 'IG-2020-MJ-22-02',
    code: '0580/22/M/J/20 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Simplify: (x² - 16) / (2x² - 8x).',
    questionAr: 'بسّط الكسر الجبري: (x² - 16) / (2x² - 8x).',
    options: [
      { id: 'A', textEn: '(x + 4) / (2x)', textAr: '(x + 4) / (2x)' },
      { id: 'B', textEn: '(x - 4) / (2x)', textAr: '(x - 4) / (2x)' },
      { id: 'C', textEn: '(x + 4) / 2', textAr: '(x + 4) / 2' },
      { id: 'D', textEn: '(x + 4) / x', textAr: '(x + 4) / x' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Numerator = (x - 4)(x + 4). Denominator = 2x(x - 4). Cancelling (x - 4) leaves (x + 4) / (2x).',
    explanationAr: 'البسط تحليل فرق بين مربعين: (x - 4)(x + 4). المقام بأخذ 2x عامل مشترك: 2x(x - 4). بعد الاختصار يبقى (x + 4) / (2x).',
    solutionStepsEn: ['Numerator = (x - 4)(x + 4)', 'Denominator = 2x(x - 4)', 'Result = (x + 4) / (2x)'],
    solutionStepsAr: ['البسط = (x - 4)(x + 4)', 'المقام = 2x(x - 4)', 'الناتج = (x + 4) / (2x)']
  },
  {
    id: 'IG-2020-MJ-23-01',
    code: '0580/23/M/J/20 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'May/June',
    paper: 'Paper 2 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Make x the subject of: y = √(x² + 5).',
    questionAr: 'اجعل x موضوع المعادلة: y = √(x² + 5).',
    options: [
      { id: 'A', textEn: 'x = √(y² - 5)', textAr: 'x = √(y² - 5)' },
      { id: 'B', textEn: 'x = y² - 5', textAr: 'x = y² - 5' },
      { id: 'C', textEn: 'x = √(y - 5)', textAr: 'x = √(y - 5)' },
      { id: 'D', textEn: 'x = √(y² + 5)', textAr: 'x = √(y² + 5)' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Square both sides: y² = x² + 5 => x² = y² - 5 => x = √(y² - 5).',
    explanationAr: 'بتربيع الطرفين: y² = x² + 5، بنقل 5 نجد x² = y² - 5، ثم بأخذ الجذر التربيعي نجد x = √(y² - 5).',
    solutionStepsEn: ['y² = x² + 5', 'x² = y² - 5', 'x = √(y² - 5)'],
    solutionStepsAr: ['y² = x² + 5', 'x = √(y² - 5)']
  },

  // ==========================================
  // OCT/NOV 2020 - PAPER 43 (0580/43) - EXTENDED
  // ==========================================
  {
    id: 'IG-2020-ON-43-01',
    code: '0580/43/O/N/20 Q3(c)(d)',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Solve the simultaneous equations: x + 5y = 22 and x + 2y = 13.',
    questionAr: 'حل المعادلات الآنية: x + 5y = 22 و x + 2y = 13.',
    options: [
      { id: 'A', textEn: 'x = 7, y = 3', textAr: 'x = 7، y = 3' },
      { id: 'B', textEn: 'x = 3, y = 7', textAr: 'x = 3، y = 7' },
      { id: 'C', textEn: 'x = 5, y = 4', textAr: 'x = 5، y = 4' },
      { id: 'D', textEn: 'x = 8, y = 2', textAr: 'x = 8، y = 2' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Subtracting the second equation from the first gives 3y = 9, so y = 3. Substituting into x + 2(3) = 13 gives x = 7.',
    explanationAr: 'بطرح المعادلة الثانية من الأولى: 3y = 9 ومنها y = 3. بالتعويض في الثانية: x + 6 = 13 ومنها x = 7.',
    solutionStepsEn: ['(x + 5y = 22) - (x + 2y = 13) => 3y = 9 => y = 3', 'x + 6 = 13 => x = 7'],
    solutionStepsAr: ['بالطرح: 3y = 9 => y = 3', 'بالتعويض: x + 6 = 13 => x = 7']
  },
  {
    id: 'IG-2020-ON-43-02',
    code: '0580/43/O/N/20 Q9(a)',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Find the integer values that satisfy the inequality: -3 < 2x - 1 ≤ 5.',
    questionAr: 'أوجد القيم الصحيحة لـ x التي تحقق المتباينة: -3 < 2x - 1 ≤ 5.',
    options: [
      { id: 'A', textEn: '0, 1, 2, 3', textAr: '0, 1, 2, 3' },
      { id: 'B', textEn: '-1, 0, 1, 2, 3', textAr: '-1, 0, 1, 2, 3' },
      { id: 'C', textEn: '1, 2, 3', textAr: '1, 2, 3' },
      { id: 'D', textEn: '-1, 0, 1, 2', textAr: '-1, 0, 1, 2' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Add 1 to all parts: -2 < 2x ≤ 6. Divide by 2: -1 < x ≤ 3. The integers strictly greater than -1 and less than or equal to 3 are 0, 1, 2, 3.',
    explanationAr: 'بإضافة 1 لجميع الأطراف: -2 < 2x ≤ 6. بالقسمة على 2: -1 < x ≤ 3. القيم الصحيحة الأكبر من -1 وحتى 3 هي 0، 1، 2، 3.',
    solutionStepsEn: ['-3 + 1 < 2x ≤ 5 + 1 => -2 < 2x ≤ 6', '-1 < x ≤ 3', 'Integer values: 0, 1, 2, 3'],
    solutionStepsAr: ['-2 < 2x ≤ 6', '-1 < x ≤ 3', 'الأعداد الصحيحة: 0، 1، 2، 3']
  },
  {
    id: 'IG-2020-ON-43-03',
    code: '0580/43/O/N/20 Q9(b)',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Factorise completely: (i) 3a² - 12b², (ii) 2x² - 5x - 12.',
    questionAr: 'حلّل تحليلاً كاملاً: (i) 3a² - 12b²، (ii) 2x² - 5x - 12.',
    options: [
      { id: 'A', textEn: '(i) 3(a - 2b)(a + 2b); (ii) (2x + 3)(x - 4)', textAr: '(i) 3(a - 2b)(a + 2b)؛ (ii) (2x + 3)(x - 4)' },
      { id: 'B', textEn: '(i) 3(a - 2b)²; (ii) (2x - 3)(x + 4)', textAr: '(i) 3(a - 2b)²؛ (ii) (2x - 3)(x + 4)' },
      { id: 'C', textEn: '(i) (3a - 6b)(a + 2b); (ii) (2x - 3)(x - 4)', textAr: '(i) (3a - 6b)(a + 2b)؛ (ii) (2x - 3)(x - 4)' },
      { id: 'D', textEn: '(i) 3(a - 4b)(a + 4b); (ii) (2x + 3)(x - 4)', textAr: '(i) 3(a - 4b)(a + 4b)؛ (ii) (2x + 3)(x - 4)' }
    ],
    correctAnswer: 'A',
    explanationEn: '(i) 3(a² - 4b²) = 3(a - 2b)(a + 2b). (ii) We need factors of 2(-12) = -24 that add to -5: -8 and 3 => 2x² - 8x + 3x - 12 = 2x(x - 4) + 3(x - 4) = (2x + 3)(x - 4).',
    explanationAr: '(i) بأخذ 3 عامل مشترك: 3(a² - 4b²) ثم تحليل الفرق بين مربعين 3(a - 2b)(a + 2b). (ii) التحليل بالمقص أو التقسيم يعطي (2x + 3)(x - 4).',
    solutionStepsEn: ['3a² - 12b² = 3(a² - 4b²) = 3(a - 2b)(a + 2b)', '2x² - 5x - 12 = (2x + 3)(x - 4)'],
    solutionStepsAr: ['3(a - 2b)(a + 2b)', '(2x + 3)(x - 4)']
  },
  {
    id: 'IG-2020-ON-43-04',
    code: '0580/43/O/N/20 Q10(a)',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Functions & Transformations',
    topicAr: 'الدوال والتحويلات الهندسة',
    questionEn: 'Given f(x) = 2x + 5 and g(x) = 1 - 3x. Find: (i) f(4), (ii) gf(x) in its simplest form.',
    questionAr: 'بفرض f(x) = 2x + 5 و g(x) = 1 - 3x. أوجد: (i) f(4)، (ii) gf(x) في أبسط صورة.',
    options: [
      { id: 'A', textEn: '(i) 13; (ii) -14 - 6x', textAr: '(i) 13؛ (ii) -14 - 6x' },
      { id: 'B', textEn: '(i) 13; (ii) -14 + 6x', textAr: '(i) 13؛ (ii) -14 + 6x' },
      { id: 'C', textEn: '(i) 11; (ii) 16 - 6x', textAr: '(i) 11؛ (ii) 16 - 6x' },
      { id: 'D', textEn: '(i) 13; (ii) -6x - 4', textAr: '(i) 13؛ (ii) -6x - 4' }
    ],
    correctAnswer: 'A',
    explanationEn: '(i) f(4) = 2(4) + 5 = 13. (ii) gf(x) = g(2x + 5) = 1 - 3(2x + 5) = 1 - 6x - 15 = -14 - 6x.',
    explanationAr: '(i) f(4) = 8 + 5 = 13. (ii) gf(x) = 1 - 3(2x + 5) = 1 - 6x - 15 = -14 - 6x.',
    solutionStepsEn: ['f(4) = 2(4) + 5 = 13', 'gf(x) = 1 - 3(2x + 5) = -14 - 6x'],
    solutionStepsAr: ['f(4) = 13', 'gf(x) = -14 - 6x']
  },
  {
    id: 'IG-2020-ON-43-05',
    code: '0580/43/O/N/20 Q11',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 4 (Extended)',
    topicEn: 'Number & Operations',
    topicAr: 'الأعداد والعمليات الحسابية',
    questionEn: 'Find the nth term for Sequence A: 13, 9, 5, 1, ..., and Sequence B: 0, 7, 26, 63, ...',
    questionAr: 'أوجد الحد النوني لكل من المتتابعة A: 13, 9, 5, 1, ... والمتتابعة B: 0, 7, 26, 63, ...',
    options: [
      { id: 'A', textEn: 'Sequence A: 17 - 4n; Sequence B: n³ - 1', textAr: 'المتتابعة A: 17 - 4n؛ المتتابعة B: n³ - 1' },
      { id: 'B', textEn: 'Sequence A: 13 - 4n; Sequence B: n³ + 1', textAr: 'المتتابعة A: 13 - 4n؛ المتتابعة B: n³ + 1' },
      { id: 'C', textEn: 'Sequence A: 17 - 4n; Sequence B: n² - 1', textAr: 'المتتابعة A: 17 - 4n؛ المتتابعة B: n² - 1' },
      { id: 'D', textEn: 'Sequence A: 9 - 4n; Sequence B: n³ - 1', textAr: 'المتتابعة A: 9 - 4n؛ المتتابعة B: n³ - 1' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Sequence A decreases by 4 => -4n + 17 = 17 - 4n. Sequence B numbers are 1³-1, 2³-1, 3³-1, 4³-1 => n³ - 1.',
    explanationAr: 'المتتابعة A تتناقص بمقدار 4 إذن حدها النوني 17 - 4n. المتتابعة B أرقامها هي مكعب رتبة الحد ناقص 1، أي n³ - 1.',
    solutionStepsEn: ['A: difference -4 => 17 - 4n', 'B: 0=1³-1, 7=2³-1, 26=3³-1 => n³ - 1'],
    solutionStepsAr: ['المتتابعة A: 17 - 4n', 'المتتابعة B: n³ - 1']
  },

  // ==========================================
  // OCT/NOV 2020 - PAPER 11 (0580/11) - CORE
  // ==========================================
  {
    id: 'IG-2020-ON-11-01',
    code: '0580/11/O/N/20 Q17',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'Trina invests $600 at a rate of 5% per year compound interest. Work out the value of her investment at the end of 4 years.',
    questionAr: 'تستثمر ترينا مبلغ 600 دولار بفائدة مركبة 5% سنوياً. احسب قيمة استثمارها في نهاية 4 سنوات (لأقرب سنت).',
    options: [
      { id: 'A', textEn: '$729.30', textAr: '729.30$' },
      { id: 'B', textEn: '$720.00', textAr: '720.00$' },
      { id: 'C', textEn: '$735.15', textAr: '735.15$' },
      { id: 'D', textEn: '$750.00', textAr: '750.00$' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Compound interest formula: Amount = P(1 + r/100)^n = 600 × (1.05)^4 = 600 × 1.21550625 = $729.30.',
    explanationAr: 'صيغة الفائدة المركبة: المبلغ = 600 × (1.05)⁴ = 600 × 1.21550625 = 729.30 دولاراً.',
    solutionStepsEn: ['Multiplier = 1 + 5/100 = 1.05', 'Amount = 600 × 1.05⁴', '= $729.30'],
    solutionStepsAr: ['المعامل = 1.05', 'المبلغ = 600 × 1.05⁴ = 729.30$']
  },
  {
    id: 'IG-2020-ON-11-02',
    code: '0580/11/O/N/20 Q9',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Ratio, Percentages & Simple/Compound Interest',
    topicAr: 'النسبة، النسب المئوية والفائدة البسيطة/المركبة',
    questionEn: 'Alan and Beth share $1190 in the ratio 5 : 2. Work out how much Alan receives.',
    questionAr: 'ألان وبيث يتقاسمان 1190 دولاراً بنسبة 5 : 2. احسب نصيب ألان.',
    options: [
      { id: 'A', textEn: '$850', textAr: '850$' },
      { id: 'B', textEn: '$340', textAr: '340$' },
      { id: 'C', textEn: '$800', textAr: '800$' },
      { id: 'D', textEn: '$750', textAr: '750$' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Total ratio parts = 5 + 2 = 7. Value of 1 part = 1190 / 7 = $170. Alan receives 5 × 170 = $850.',
    explanationAr: 'مجموع الأجزاء = 5 + 2 = 7. قيمة الجزء = 1190 ÷ 7 = 170 دولاراً. نصيب ألان = 5 × 170 = 850 دولاراً.',
    solutionStepsEn: ['Total parts = 7 => 1 part = $170', 'Alan = 5 × 170 = $850'],
    solutionStepsAr: ['قيمة الجزء = 170$', 'نصيب ألان = 5 × 170 = 850$']
  },
  {
    id: 'IG-2020-ON-11-03',
    code: '0580/11/O/N/20 Q16',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2020,
    session: 'Oct/Nov',
    paper: 'Paper 1 (Core)',
    topicEn: 'Algebra & Equations',
    topicAr: 'الجبر والمعادلات',
    questionEn: 'Make p the subject of this formula: y = 3p - 8.',
    questionAr: 'اجعل p موضوع المعادلة: y = 3p - 8.',
    options: [
      { id: 'A', textEn: 'p = (y + 8) / 3', textAr: 'p = (y + 8) / 3' },
      { id: 'B', textEn: 'p = (y - 8) / 3', textAr: 'p = (y - 8) / 3' },
      { id: 'C', textEn: 'p = 3y + 8', textAr: 'p = 3y + 8' },
      { id: 'D', textEn: 'p = y/3 + 8', textAr: 'p = y/3 + 8' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Add 8 to both sides: y + 8 = 3p. Divide by 3: p = (y + 8) / 3.',
    explanationAr: 'بإضافة 8 للطرفين: y + 8 = 3p. بالقسمة على 3 نجد p = (y + 8) / 3.',
    solutionStepsEn: ['y + 8 = 3p', 'p = (y + 8) / 3'],
    solutionStepsAr: ['y + 8 = 3p', 'p = (y + 8) / 3']
  }
];
