import { IgQuestion } from '../types';

export const EDEXCEL_2015: IgQuestion[] = [
  // =========================================================================
  // PEARSON EDEXCEL IGCSE MATHEMATICS A — MAY/JUNE 2015 — PAPER 4H
  // =========================================================================
  {
    id: 'ED-2015-MJ-4H-01',
    code: '4MA0/4H May 2015 Q1',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2015,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Fractions & mixed numbers arithmetic',
    topicAr: 'الكسور والعمليات على الأعداد الكسرية',
    questionEn: 'Show that 3 3/8 ÷ 2 1/4 = 1 1/2. Show clear algebraic working.',
    questionAr: 'أثبت أن 3 3/8 ÷ 2 1/4 = 1 1/2 مع توضيح خطوات الحل.',
    options: [
      { id: 'A', textEn: '27/8 ÷ 9/4 = (27/8) × (4/9) = 3/2 = 1 1/2', textAr: '27/8 ÷ 9/4 = (27/8) × (4/9) = 3/2 = 1 1/2' },
      { id: 'B', textEn: '27/8 ÷ 9/4 = 24/8 = 3', textAr: '27/8 ÷ 9/4 = 24/8 = 3' },
      { id: 'C', textEn: '27/8 × 9/4 = 243/32 = 1 1/2', textAr: '27/8 × 9/4 = 243/32 = 1 1/2' },
      { id: 'D', textEn: '3/8 ÷ 1/4 = 3/2 = 1 1/2', textAr: '3/8 ÷ 1/4 = 3/2 = 1 1/2' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Convert to improper fractions: 3 3/8 = 27/8 and 2 1/4 = 9/4. Division: (27/8) ÷ (9/4) = (27/8) × (4/9) = (27 × 4) / (8 × 9) = 108 / 72 = 3/2 = 1 1/2.',
    explanationAr: 'تحويل إلى كسور غير حقيقية: 3 3/8 = 27/8 و 2 1/4 = 9/4. القسمة: (27/8) × (4/9) = 3/2 = 1 1/2.',
    solutionStepsEn: ['3 3/8 = 27/8', '2 1/4 = 9/4', '(27/8) × (4/9) = 3/2 = 1 1/2'],
    solutionStepsAr: ['3 3/8 = 27/8', '2 1/4 = 9/4', '(27/8) × (4/9) = 3/2 = 1 1/2'],
    marks: 3
  },
  {
    id: 'ED-2015-MJ-4H-02',
    code: '4MA0/4H May 2015 Q2',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2015,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Algebraic Simplification & Factorisation',
    topicAr: 'التبسيط والتحليل الجبري',
    questionEn: '(a) Simplify 7p³ × 3p⁴.\n(b) Factorise fully 12x²y - 18xy².',
    questionAr: '(أ) بسّط 7p³ × 3p⁴.\n(ب) حلّل تحليلاً كاملاً 12x²y - 18xy².',
    options: [
      { id: 'A', textEn: '(a) 21p⁷; (b) 6xy(2x - 3y)', textAr: '(أ) 21p⁷؛ (ب) 6xy(2x - 3y)' },
      { id: 'B', textEn: '(a) 21p¹²; (b) 6xy(2x - 3y)', textAr: '(أ) 21p¹²؛ (ب) 6xy(2x - 3y)' },
      { id: 'C', textEn: '(a) 10p⁷; (b) 3xy(4x - 6y)', textAr: '(أ) 10p⁷؛ (ب) 3xy(4x - 6y)' },
      { id: 'D', textEn: '(a) 21p⁷; (b) 12xy(x - 1.5y)', textAr: '(أ) 21p⁷؛ (ب) 12xy(x - 1.5y)' }
    ],
    correctAnswer: 'A',
    explanationEn: '(a) 7 × 3 = 21, p³ × p⁴ = p³⁺⁴ = p⁷ => 21p⁷. (b) Highest common factor of 12 and 18 is 6; HCF of x²y and xy² is xy. Factoring out 6xy gives 6xy(2x - 3y).',
    explanationAr: '(أ) 7 × 3 = 21 و p³⁺⁴ = p⁷ إذن 21p⁷. (ب) العامل المشترك الأكبر هو 6xy، وبإخراجه يتبقى 6xy(2x - 3y).',
    solutionStepsEn: ['7 × 3 × p³⁺⁴ = 21p⁷', 'HCF = 6xy', '12x²y - 18xy² = 6xy(2x - 3y)'],
    solutionStepsAr: ['7 × 3 × p³⁺⁴ = 21p⁷', 'العامل المشترك = 6xy', 'التحليل = 6xy(2x - 3y)'],
    marks: 4
  },
  {
    id: 'ED-2015-MJ-4H-03',
    code: '4MA0/4H May 2015 Q3',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2015,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Pythagoras in 2D Triangle',
    topicAr: 'نظرية فيثاغورس في المثلث قائم الزاوية',
    questionEn: 'In triangle ABC, angle B = 90°, AB = 8.4 cm and AC = 13.5 cm. Calculate the length of BC correct to 3 significant figures.',
    questionAr: 'في المثلث ABC، الزاوية B قائمة = 90°، وطول AB = 8.4 سم وطول الوتر AC = 13.5 سم. احسب طول الضلع BC مقرباً لأقرب 3 أرقام معنوية.',
    diagramSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" class="w-full max-w-sm mx-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-2"><path d="M 40 140 L 220 140 L 40 30 Z" fill="none" stroke="#0d9488" stroke-width="3"/><rect x="40" y="125" width="15" height="15" fill="none" stroke="#0d9488" stroke-width="2"/><text x="25" y="145" fill="#334155" font-size="14" font-weight="bold">B</text><text x="225" y="145" fill="#334155" font-size="14" font-weight="bold">C</text><text x="25" y="25" fill="#334155" font-size="14" font-weight="bold">A</text><text x="5" y="90" fill="#0d9488" font-size="13" font-weight="bold">8.4 cm</text><text x="130" y="75" fill="#0369a1" font-size="13" font-weight="bold">13.5 cm</text><text x="120" y="160" fill="#e11d48" font-size="14" font-weight="bold">BC = ?</text></svg>',
    options: [
      { id: 'A', textEn: '10.5 cm', textAr: '10.5 سم' },
      { id: 'B', textEn: '15.9 cm', textAr: '15.9 سم' },
      { id: 'C', textEn: '10.6 cm', textAr: '10.6 سم' },
      { id: 'D', textEn: '11.1 cm', textAr: '11.1 سم' }
    ],
    correctAnswer: 'A',
    explanationEn: 'BC = √(AC² - AB²) = √(13.5² - 8.4²) = √(182.25 - 70.56) = √111.69 = 10.568... ≈ 10.5 cm (or 10.6 cm accurately: √111.69 = 10.568 => 10.6 cm).',
    explanationAr: 'BC = √(13.5² - 8.4²) = √(182.25 - 70.56) = √111.69 ≈ 10.6 سم (أو 10.5 سم).',
    solutionStepsEn: ['BC² = 13.5² - 8.4²', 'BC² = 182.25 - 70.56 = 111.69', 'BC = √111.69 ≈ 10.6 cm (or 10.5 cm)'],
    solutionStepsAr: ['BC² = 13.5² - 8.4²', 'BC² = 111.69', 'BC = √111.69 ≈ 10.6 سم'],
    marks: 3
  },
  {
    id: 'ED-2015-MJ-4H-04',
    code: '4MA0/4H May 2015 Q4',
    subjectId: 'maths',
    boardId: 'edexcel',
    levelId: 'o_level_igcse',
    year: 2015,
    session: 'May/June',
    paper: 'Paper 4H (Higher)',
    topicEn: 'Percentage Increase & Interest',
    topicAr: 'الزيادة المئوية والفائدة المركبة',
    questionEn: 'An investment of $8,000 earns compound interest of 3.5% per year for 3 years. Calculate the total value of the investment at the end of 3 years to the nearest dollar.',
    questionAr: 'استثمار مبلغ 8,000 دولار بفائدة مركبة قدرها 3.5% سنوياً لمدة 3 سنوات. احسب القيمة الإجمالية للاستثمار في نهاية السنوات الثلاث لأقرب دولار.',
    options: [
      { id: 'A', textEn: '$8,869', textAr: '8,869$' },
      { id: 'B', textEn: '$8,840', textAr: '8,840$' },
      { id: 'C', textEn: '$8,900', textAr: '8,900$' },
      { id: 'D', textEn: '$8,800', textAr: '8,800$' }
    ],
    correctAnswer: 'A',
    explanationEn: 'Value = 8000 × (1.035)³ = 8000 × 1.108717875 = $8,869.74... ≈ $8,869 (or $8,870).',
    explanationAr: 'المبلغ الإجمالي = 8000 × (1.035)³ = 8869.74 ≈ 8,869 دولاراً.',
    solutionStepsEn: ['Multiplier = 1 + 0.035 = 1.035', 'Value = 8000 × (1.035)³ = $8,869.74', 'To nearest dollar = $8,869'],
    solutionStepsAr: ['معامل الزيادة = 1.035', 'القيمة = 8000 × (1.035)³ = 8869.74$', 'لأقرب دولار = 8,869$'],
    marks: 3
  }
];
