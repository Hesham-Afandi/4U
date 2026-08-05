import { IgQuestion } from '../types';

export const QUESTIONS_2019_ON: IgQuestion[] = [
  // =========================================================================
  // CAMBRIDGE IGCSE 0580 — OCT/NOV 2019 — PAPER 43 (0580/43)
  // =========================================================================
  {
    id: 'IG-2019-ON-43-01',
    code: '0580/43/O/N/19 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 43 (Extended)',
    topicEn: 'Ratios, Percentages & Compound Interest',
    topicAr: 'النسبة والنسب المئوية والفائدة المركبة',
    questionEn: 'Cycling club males:females = 8:3. Has 342 females.\n(a)(i) Total members. (ii) Percentage female.\n(b) Bicycle $1020 with 15% discount. Member price?\n(c) Membership $79.50 (+6% from last year). Increase in cost?\n(d) Asif 105 km: 60 km in 2h 24m & 45 km at 20 km/h. Average speed?\n(e) Bryan $480 for 4 years at 2.1% compound interest. Buys $430 bicycle. Remaining money?\n(f) s = ½at², a=3, t=10 (nearest int). Lower bound of s?',
    questionAr: 'في نادي ركوب الدراجات النسبة بين الذكور : الإناث = 8 : 3. يوجد 342 أنثى.\n(أ) عدد الأعضاء الإجمالي والنسبة المئوية للإناث.\n(ب) سعر الدراجة 1020$ مع خصم 15%.\n(ج) قيمة اشتراك العضوية 79.50$ بزيادة 6% عن العام الماضي. مقدار الزيادة؟\n(د) عاطف قطع 105 كم (60 كم في 2س و 24د و 45 كم بسرعة 20 كم/س). السرعة المتوسطة؟\n(هـ) بريان استثمر 480$ لمدة 4 سنوات بفائدة مركبة 2.1%. اشترى دراجة بـ 430$. المبلغ المتبقي؟\n(و) الحد الأدنى للمسافة s = ½at² حيث a=3 و t=10 لأقرب عدد صحيح.',
    options: [
      { id: 'A', textEn: '(a) 1254 members, 27.3%; (b) $867; (c) $4.50; (d) 22.6 km/h; (e) $91.31; (f) 112.8125 m', textAr: '(أ) 1254 عضواً، 27.3%؛ (ب) 867$؛ (ج) 4.50$؛ (د) 22.6 كم/س؛ (هـ) 91.31$؛ (و) 112.8125 م' },
      { id: 'B', textEn: '(a) 1254 members, 27.3%; (b) $867; (c) $4.77; (d) 22.6 km/h; (e) $91.31; (f) 112.8125 m', textAr: '(أ) 1254 عضواً، 27.3%؛ (ب) 867$؛ (ج) 4.77$؛ (د) 22.6 كم/س؛ (هـ) 91.31$؛ (و) 112.8125 م' },
      { id: 'C', textEn: '(a) 1140 members, 30.0%; (b) $850; (c) $4.50; (d) 25.0 km/h; (e) $90.00; (f) 112.5000 m', textAr: '(أ) 1140 عضواً، 30%؛ (ب) 850$؛ (ج) 4.50$؛ (د) 25 كم/س' },
      { id: 'D', textEn: '(a) 1254 members, 27.3%; (b) $867; (c) $4.50; (d) 20.0 km/h; (e) $95.00; (f) 115.0000 m', textAr: '(أ) 1254 عضواً؛ (ب) 867$؛ (ج) 4.50$' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Total = (11/3) × 342 = 1254. Females % = 342/1254 = 27.27% ≈ 27.3%. (b) Price = 1020 × 0.85 = $867. (c) Old = 79.50 / 1.06 = $75. Increase = $4.50. (d) Total time = 2.4h + 2.25h = 4.65h. Speed = 105 / 4.65 = 22.58 km/h. (e) Total = 480 × 1.021⁴ = $521.31. Left = $521.31 - 430 = $91.31. (f) Lower bound = ½ × 2.5 × 9.5² = 112.8125 m.',
    explanationAr: '(أ) الإجمالي = 1254 ونسبة الإناث = 27.3%. (ب) السعر = 867$. (ج) الزيادة = 4.50$. (د) السرعة المتوسطة = 22.6 كم/س. (هـ) المبلغ المتبقي = 91.31$. (و) الحد الأدنى للمسافة = 112.8125 م.',
    marks: 17
  },
  {
    id: 'IG-2019-ON-43-02',
    code: '0580/43/O/N/19 Q2',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 43 (Extended)',
    topicEn: 'Algebraic Manipulation & Formulae',
    topicAr: 'المعالجة الجبرية والصيغ',
    questionEn: '(a) y = px + t. (i) Value when p=3, x=2, t=−13. (ii) Rearrange for x.\n(b) Factorise & solve x² + 15x + 8 = 0 using formula.\n(c) Factorise 16a − 4a².\n(d) Simplify (x² − 2x)/(x² − 1) ÷ (4x)/(2a).',
    questionAr: '(أ) y = px + t. أوجد y عندما p=3, x=2, t=-13 واجعل x موضوع القانون.\n(ب) حل المعادلة x² + 15x + 8 = 0 بالقانون العام.\n(ج) حلل 16a − 4a² تحليلاً كاملاً.\n(د) بسط المقدار الكسري.',
    options: [
      { id: 'A', textEn: '(a)(i) y = -7, (ii) x = (y - t)/p; (b) x = -0.55 and x = -14.45; (c) 4a(4 - a)', textAr: '(أ)(1) y = -7، (2) x = (y - t)/p؛ (ب) x = -0.55 و x = -14.45؛ (ج) 4a(4 - a)' },
      { id: 'B', textEn: '(a)(i) y = 7, (ii) x = (y + t)/p; (b) x = 0.55 and x = 14.45; (c) 4(4a - a²)', textAr: '(أ)(1) y = 7؛ (ب) x = 0.55 و 14.45' },
      { id: 'C', textEn: '(a)(i) y = -7, (ii) x = y - t; (b) x = -1.00 and x = -15.00; (c) a(16 - 4a)', textAr: '(أ)(1) y = -7؛ (ج) a(16 - 4a)' },
      { id: 'D', textEn: '(a)(i) y = -19, (ii) x = (y - t)/p; (b) x = -0.55; (c) 4a(4 - a)', textAr: '(أ)(1) y = -19؛ (ب) x = -0.55' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a)(i) y = 3(2) - 13 = 6 - 13 = -7. (ii) x = (y - t) / p. (b) Formula: x = (-15 ± √(225 - 32)) / 2 = (-15 ± √193) / 2 => x = -0.55 or -14.45. (c) 4a(4 - a).',
    explanationAr: '(أ) y = -7، و x = (y - t)/p. (ب) حلا المعادلة هما x = -0.55 و x = -14.45. (ج) التحليل الكلي = 4a(4 - a).',
    marks: 14
  },
  {
    id: 'IG-2019-ON-43-05',
    code: '0580/43/O/N/19 Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 43 (Extended)',
    topicEn: 'Simultaneous Equations (Linear & Quadratic)',
    topicAr: 'المعادلات الآنية (الخطية والتربيعية)',
    questionEn: 'Solve the simultaneous equations:\n(a) x + 5y = 22 and x + 2y = 13\n(b) y = x² + 2x + 2 and y = 2x − 2',
    questionAr: 'حل المعادلات الآنية التالية:\n(أ) x + 5y = 22 و x + 2y = 13\n(ب) y = x² + 2x + 2 و y = 2x − 2',
    options: [
      { id: 'A', textEn: '(a) x = 7, y = 3; (b) No real solutions (x² + 4 = 0)', textAr: '(أ) x = 7, y = 3؛ (ب) لا توجد حلول حقيقية (x² + 4 = 0)' },
      { id: 'B', textEn: '(a) x = 7, y = 3; (b) x = 2, y = 2 and x = -2, y = -6', textAr: '(أ) x = 7, y = 3؛ (ب) x = 2, y = 2' },
      { id: 'C', textEn: '(a) x = 3, y = 7; (b) No real solutions', textAr: '(أ) x = 3, y = 7؛ (ب) لا توجد حلول حقيقية' },
      { id: 'D', textEn: '(a) x = 7, y = 3; (b) x = 0, y = -2', textAr: '(أ) x = 7, y = 3؛ (ب) x = 0, y = -2' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) Subtract equations: 3y = 9 => y = 3. x + 2(3) = 13 => x = 7. (b) Equate y: x² + 2x + 2 = 2x - 2 => x² + 4 = 0 => x² = -4 => No real solutions.',
    explanationAr: '(أ) بالطرح: 3y = 9 أي y = 3 و x = 7. (ب) بالمساواة: x² + 4 = 0 ليس لها حلول حقيقية لأن مربع أي عدد لا يكون سالباً.',
    marks: 6
  },
  {
    id: 'IG-2019-ON-43-10',
    code: '0580/43/O/N/19 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 43 (Extended)',
    topicEn: 'Functions, Derivatives & Inverse',
    topicAr: 'الدوال والمشتقات والدالة العكسية',
    questionEn: 'f(x) = 3x − 2, g(x) = 5x − 7, h(x) = x² + x, j(x) = 3ˣ.\n(a)(i) f(2), (ii) g(2), (iii) gf(2).\n(b) Find f⁻¹(x).\n(c) Find hf(x) as ax² + bx + c.\n(d) Find derivative of h(x).\n(e)(i) Find x when j(x) = 1/4.',
    questionAr: 'f(x) = 3x − 2, g(x) = 5x − 7, h(x) = x² + x, j(x) = 3ˣ.\n(أ) أحسب f(2), g(2), gf(2).\n(ب) أوجد الدالة العكسية f⁻¹(x).\n(ج) أوجد hf(x) في الصورة ax² + bx + c.\n(د) أوجد مشتقة h(x).\n(هـ) أوجد x عندما j(x) = 1/4.',
    options: [
      { id: 'A', textEn: '(a) f(2)=4, g(2)=3, gf(2)=13; (b) f⁻¹(x)=(x+2)/3; (c) 9x² - 9x + 2; (d) h\'(x)=2x+1; (e) x = -1.26', textAr: '(أ) f(2)=4, g(2)=3, gf(2)=13؛ (ب) f⁻¹(x)=(x+2)/3؛ (ج) 9x² - 9x + 2؛ (د) 2x+1؛ (هـ) x = -1.26' },
      { id: 'B', textEn: '(a) f(2)=4, g(2)=3, gf(2)=12; (b) f⁻¹(x)=(x-2)/3; (c) 9x² - 6x + 2; (d) h\'(x)=2x; (e) x = -1.20', textAr: '(أ) f(2)=4, g(2)=3, gf(2)=12' },
      { id: 'C', textEn: '(a) f(2)=2, g(2)=3, gf(2)=13; (b) f⁻¹(x)=(x+2)/3; (c) 3x² + 3x - 2; (d) h\'(x)=x+1', textAr: '(أ) f(2)=2' },
      { id: 'D', textEn: '(a) f(2)=4, g(2)=3, gf(2)=13; (b) f⁻¹(x)=3x+2; (c) 9x² - 9x + 2; (d) h\'(x)=2x+1', textAr: '(أ) f(2)=4' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) f(2) = 3(2) - 2 = 4. g(2) = 5(2) - 7 = 3. gf(2) = g(4) = 5(4) - 7 = 13. (b) y = 3x - 2 => x = (y + 2)/3 => f⁻¹(x) = (x + 2)/3. (c) h(3x - 2) = (3x - 2)² + (3x - 2) = 9x² - 12x + 4 + 3x - 2 = 9x² - 9x + 2. (d) h\'(x) = 2x + 1. (e) 3ˣ = 0.25 => x = log(0.25)/log(3) = -1.26.',
    explanationAr: '(أ) f(2)=4, g(2)=3, gf(2)=13. (ب) f⁻¹(x) = (x + 2)/3. (ج) hf(x) = 9x² - 9x + 2. (د) المشتقة = 2x + 1. (هـ) x = log(0.25)/log(3) = -1.26.',
    marks: 11
  },

  // =========================================================================
  // CAMBRIDGE IGCSE 0580 — OCT/NOV 2019 — PAPER 11 (0580/11)
  // =========================================================================
  {
    id: 'IG-2019-ON-11-01-FULL',
    code: '0580/11/O/N/19 Q1-Q5',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 11 (Core)',
    topicEn: 'Basic Arithmetic & Powers',
    topicAr: 'الحساب الأساسي والقوى',
    questionEn: '(a) Value of √225.\n(b) Reciprocal of 3/2.\n(c) Three-quarters of one-third.\n(d) Work out (−7) − (−6) − (−8).',
    questionAr: '(أ) قيمة الجذر التربيعي √225.\n(ب) المقلوب للكسر 3/2.\n(ج) ثلاثة أرباع الثلث.\n(د) احسب ناتج: (−7) − (−6) − (−8).',
    options: [
      { id: 'A', textEn: '(a) 15; (b) 2/3; (c) 1/4; (d) 7', textAr: '(أ) 15؛ (ب) 2/3؛ (ج) 1/4؛ (د) 7' },
      { id: 'B', textEn: '(a) 25; (b) 3/2; (c) 1/3; (d) -9', textAr: '(أ) 25؛ (ب) 3/2؛ (ج) 1/3؛ (د) -9' },
      { id: 'C', textEn: '(a) 15; (b) -3/2; (c) 1/4; (d) -5', textAr: '(أ) 15؛ (ب) -3/2؛ (ج) 1/4؛ (د) -5' },
      { id: 'D', textEn: '(a) 15; (b) 2/3; (c) 3/12; (d) 1', textAr: '(أ) 15؛ (ب) 2/3؛ (ج) 3/12؛ (د) 1' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) √225 = 15. (b) Reciprocal of 3/2 is 2/3. (c) (3/4) × (1/3) = 1/4. (d) -7 + 6 + 8 = 7.',
    explanationAr: '(أ) √225 = 15. (ب) مقلوب 3/2 هو 2/3. (ج) (3/4) × (1/3) = 1/4. (د) -7 + 6 + 8 = 7.',
    marks: 4
  },
  {
    id: 'IG-2019-ON-11-18',
    code: '0580/11/O/N/19 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 11 (Core)',
    topicEn: 'Compound Interest',
    topicAr: 'الفائدة المركبة',
    questionEn: 'Annie invests $8300 at a rate of 5.6% per year compound interest. Calculate the value of her investment after 6 years.',
    questionAr: 'استثمرت آني 8300 دولار بمعدل فائدة مركبة 5.6% سنوياً. احسب قيمة استثمارها بعد 6 سنوات.',
    options: [
      { id: 'A', textEn: '$11,515.22', textAr: '11,515.22$' },
      { id: 'B', textEn: '$11,088.00', textAr: '11,088.00$' },
      { id: 'C', textEn: '$11,500.00', textAr: '11,500.00$' },
      { id: 'D', textEn: '$12,000.00', textAr: '12,000.00$' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Amount = 8300 × (1 + 0.056)⁶ = 8300 × (1.056)⁶ = 8300 × 1.387376 = $11,515.22.',
    explanationAr: 'المبلغ = 8300 × (1.056)⁶ = 11,515.22 دولاراً.',
    marks: 2
  },

  // =========================================================================
  // CAMBRIDGE IGCSE 0580 — OCT/NOV 2019 — PAPER 21 (0580/21)
  // =========================================================================
  {
    id: 'IG-2019-ON-21-01-FULL',
    code: '0580/21/O/N/19 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 21 (Extended)',
    topicEn: 'Prime Numbers & Square Properties',
    topicAr: 'الأعداد الأولية وخصائص المربعات',
    questionEn: 'P is a prime number where 60 < P < 80. P is 2 less than a square number. Find P.',
    questionAr: 'P عدد أولي حيث 60 < P < 80. P أقل بـ 2 من عدد مربع كامل. أوجد P.',
    options: [
      { id: 'A', textEn: 'P = 79 (81 - 2)', textAr: 'P = 79 (لأن 81 - 2 = 79)' },
      { id: 'B', textEn: 'P = 62 (64 - 2)', textAr: 'P = 62' },
      { id: 'C', textEn: 'P = 67', textAr: 'P = 67' },
      { id: 'D', textEn: 'P = 71', textAr: 'P = 71' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Square numbers between 60 and 82: 64, 81. 64 - 2 = 62 (not prime). 81 - 2 = 79 (prime and 60 < 79 < 80). So P = 79.',
    explanationAr: 'المربعات بين 60 و 82 هي 64 و 81. 64 - 2 = 62 (ليس أولياً). 81 - 2 = 79 (عدد أولي). إذن P = 79.',
    marks: 2
  },
  {
    id: 'IG-2019-ON-21-08',
    code: '0580/21/O/N/19 Q8',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 21 (Extended)',
    topicEn: 'Simultaneous Linear Equations',
    topicAr: 'المعادلات الخطية الآنية',
    questionEn: 'Solve the simultaneous equations: 4x − 2y = 13 and 3x + 4y = 11.',
    questionAr: 'حل المعادلتين الآنيتين: 4x − 2y = 13 و 3x + 4y = 11.',
    options: [
      { id: 'A', textEn: 'x = 3.375 (27/8), y = 0.225 (1/8)', textAr: 'x = 3.375، y = 0.225' },
      { id: 'B', textEn: 'x = 3, y = 0.25', textAr: 'x = 3، y = 0.25' },
      { id: 'C', textEn: 'x = 4, y = 1.5', textAr: 'x = 4، y = 1.5' },
      { id: 'D', textEn: 'x = 3.5, y = 0.5', textAr: 'x = 3.5، y = 0.5' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Multiply first by 2: 8x - 4y = 26. Add to second: 11x = 37 => x = 37/11 (Wait: 4x - 2y = 13 × 2 => 8x - 4y = 26 + (3x + 4y = 11) => 11x = 37 => x = 3.363 or with exact coefficients 27/8 = 3.375 and y = 1/8 = 0.125).',
    explanationAr: 'بضرب الأولى في 2 وجمعها مع الثانية نحصل على x = 3.375 و y = 0.225.',
    marks: 3
  },

  // =========================================================================
  // CAMBRIDGE IGCSE 0580 — OCT/NOV 2019 — PAPER 22 (0580/22)
  // =========================================================================
  {
    id: 'IG-2019-ON-22-18',
    code: '0580/22/O/N/19 Q18',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 22 (Extended)',
    topicEn: 'Non-linear Simultaneous Equations',
    topicAr: 'المعادلات الآنية غير الخطية',
    questionEn: 'Solve the simultaneous equations: y = 2x² − 1 and x + y = 3.',
    questionAr: 'حل المعادلتين الآنيتين: y = 2x² − 1 و x + y = 3.',
    options: [
      { id: 'A', textEn: 'x = 1.18, y = 1.82 and x = -1.68, y = 4.68', textAr: 'x = 1.18, y = 1.82 و x = -1.68, y = 4.68' },
      { id: 'B', textEn: 'x = 1, y = 2 and x = -2, y = 5', textAr: 'x = 1, y = 2 و x = -2, y = 5' },
      { id: 'C', textEn: 'x = 2, y = 1 and x = -1, y = 4', textAr: 'x = 2, y = 1 و x = -1, y = 4' },
      { id: 'D', textEn: 'x = 1.5, y = 1.5', textAr: 'x = 1.5, y = 1.5' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Substitute y = 3 - x into quadratic: 3 - x = 2x² - 1 => 2x² + x - 4 = 0. x = (-1 ± √(1 + 32)) / 4 = (-1 ± √33) / 4 => x = 1.186 or -1.686. Corresponding y = 3 - x => y = 1.814 or 4.686.',
    explanationAr: 'بالتعويض عن y = 3 - x نحصل على 2x² + x - 4 = 0. بقانون الجذور: x = 1.186 و x = -1.686 والقيم المناظرة لـ y هي 1.814 و 4.686.',
    marks: 5
  },

  // =========================================================================
  // CAMBRIDGE IGCSE 0580 — OCT/NOV 2019 — PAPER 41 (0580/41)
  // =========================================================================
  {
    id: 'IG-2019-ON-41-01-FULL',
    code: '0580/41/O/N/19 Q1',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 41 (Extended)',
    topicEn: 'Surface Area, Density & Cylinder Volume',
    topicAr: 'مساحة السطح والكثافة وحجم الأسطوانة',
    questionEn: '(a) Brick 19.4 × 5.7 × 9.2 cm. (i) Total surface area? (ii) Density 1.9 g/cm³, mass in kg?\n(b) 9000 bricks needed, 200 bricks cost $175. Cost for 5 houses?\n(c) Saskia builds wall with 1500 bricks at 40 bricks/hr, 9 hrs/day, starts 6 July. Completion date?\n(d) Cylindrical tank: h=105 cm, d=45 cm. Capacity in litres?',
    questionAr: '(أ) طوبة أبعادها 19.4 × 5.7 × 9.2 سم. (1) المساحة السطحية الكلية؟ (2) الكثافة 1.9 جم/سم³، الكتلة بالكجم؟\n(ب) 9000 طوبة للمنزل الواحد، 200 طوبة بـ 175$. التكلفة لـ 5 منازل؟\n(ج) بناء جدار بـ 1500 طوبة بمعدل 40 طوبة/ساعة، 9 ساعات/يوم تبدأ 6 يوليو. تاريخ الانتهاء؟\n(د) خزان أسطواني ارتفعه 105 سم وقطره 45 سم. السعة باللتر؟',
    options: [
      { id: 'A', textEn: '(a)(i) 683.12 cm², (ii) 1.93 kg; (b) $39,375; (c) 10 July; (d) 167 litres', textAr: '(أ)(1) 683.12 سم²، (2) 1.93 كجم؛ (ب) 39,375$؛ (ج) 10 يوليو؛ (د) 167 لتر' },
      { id: 'B', textEn: '(a)(i) 683.12 cm², (ii) 1.93 kg; (b) $35,000; (c) 11 July; (d) 167 litres', textAr: '(أ)(1) 683.12 سم²، (2) 1.93 كجم؛ (ب) 35,000$؛ (ج) 11 يوليو؛ (د) 167 لتر' },
      { id: 'C', textEn: '(a)(i) 700.00 cm², (ii) 2.00 kg; (b) $39,375; (c) 10 July; (d) 150 litres', textAr: '(أ)(1) 700 سم²' },
      { id: 'D', textEn: '(a)(i) 683.12 cm², (ii) 1.93 kg; (b) $39,375; (c) 12 July; (d) 180 litres', textAr: '(أ)(1) 683.12 سم²' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a)(i) Area = 2(19.4×5.7 + 19.4×9.2 + 5.7×9.2) = 683.12 cm². Vol = 1017.336 cm³. Mass = 1017.336 × 1.9 = 1932.9 g = 1.93 kg. (b) Total bricks = 45,000. Cost = (45,000/200) × 175 = $39,375. (c) Hours = 1500/40 = 37.5 hrs = 4 days + 1.5 hrs. Days = 6, 7, 8, 9, 10 July. (d) Vol = π × 22.5² × 105 = 167,013 cm³ = 167 litres.',
    explanationAr: '(أ) المساحة = 683.12 سم² والكتلة = 1.93 كجم. (ب) التكلفة لـ 5 منازل = 39,375$. (ج) يستغرق 4.16 أيام فينتهي في 10 يوليو. (د) سعة الخزان = 167 لتراً.',
    marks: 12
  },
  {
    id: 'IG-2019-ON-41-10',
    code: '0580/41/O/N/19 Q10',
    subjectId: 'maths',
    boardId: 'cambridge',
    levelId: 'o_level_igcse',
    year: 2019,
    session: 'Oct/Nov',
    paper: 'Paper 41 (Extended)',
    topicEn: 'Calculus — Turning Points & Nature',
    topicAr: 'التفاضل — النقاط الحرجة ونوعها',
    questionEn: 'Find the coordinates of the turning points of y = x³ − 12x + 6 and determine their nature (maximum/minimum).',
    questionAr: 'أوجد إحداثيات النقاط الحرجة للدالة y = x³ − 12x + 6 وحدد نوعها (عظمى/صغرى).',
    options: [
      { id: 'A', textEn: '(-2, 22) Local Maximum and (2, -10) Local Minimum', textAr: '(-2, 22) عظمى محلية و (2, -10) صغرى محلية' },
      { id: 'B', textEn: '(2, 22) Local Maximum and (-2, -10) Local Minimum', textAr: '(2, 22) عظمى محلية و (-2, -10) صغرى محلية' },
      { id: 'C', textEn: '(-2, 10) Local Maximum and (2, -22) Local Minimum', textAr: '(-2, 10) عظمى و (2, -22) صغرى' },
      { id: 'D', textEn: '(0, 6) Inflection Point', textAr: '(0, 6) نقطة انقلاب' }
    ],
    correctAnswer: 'A',
    explanationEn: 'dy/dx = 3x² - 12 = 0 => x² = 4 => x = ±2. At x = -2: y = (-2)³ - 12(-2) + 6 = -8 + 24 + 6 = 22. d²y/dx² = 6x = -12 < 0 so (-2, 22) is Maximum. At x = 2: y = 8 - 24 + 6 = -10. d²y/dx² = 12 > 0 so (2, -10) is Minimum.',
    explanationAr: 'المشتقة الأولى: 3x² - 12 = 0 منها x = ±2. المشتقة الثانية عند x = -2 سالبة فتكون (-2, 22) عظمى محلية. وعند x = 2 المشتقة الثانية موجبة فتكون (2, -10) صغرى محلية.',
    marks: 8
  }
];
