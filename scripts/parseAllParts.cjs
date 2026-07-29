const fs = require('fs');
const path = require('path');

function detectDomainAndCategory(domainStr, qEn, qAr) {
  let domain = 'algebra';
  let category = 'linear-equations';

  const text = (domainStr + ' ' + qEn + ' ' + qAr).toLowerCase();

  if (domainStr.includes('Geometry') || text.includes('triangle') || text.includes('circle') || text.includes('angle') || text.includes('prism') || text.includes('cone') || text.includes('volume') || text.includes('area') || text.includes('مثلث') || text.includes('دائرة') || text.includes('زاوية') || text.includes('حجم') || text.includes('مساحة')) {
    domain = 'geometry-trig';
    if (text.includes('triangle') || text.includes('مثلث')) category = 'triangles';
    else if (text.includes('circle') || text.includes('دائرة')) category = 'circles';
    else if (text.includes('angle') || text.includes('زاوية')) category = 'angles-lines';
    else if (text.includes('volume') || text.includes('prism') || text.includes('cone') || text.includes('حجم') || text.includes('مخروط') || text.includes('منشور')) category = 'area-volume';
    else if (text.includes('sin') || text.includes('cos') || text.includes('tan') || text.includes('trig') || text.includes('جيب')) category = 'right-trig';
    else category = 'coordinate-geometry';
  } else if (domainStr.includes('Advanced Math') || text.includes('f(x)') || text.includes('x²') || text.includes('quadratic') || text.includes('exponential') || text.includes('polynomial') || text.includes('تربيعية') || text.includes('أسية') || text.includes('دالة')) {
    domain = 'advanced-math';
    if (text.includes('quadratic') || text.includes('x²') || text.includes('تربيعية') || text.includes('قطع مكافئ')) category = 'quadratic-equations';
    else if (text.includes('exponential') || text.includes('doubles') || text.includes('أسية') || text.includes('تضاعف')) category = 'exponential-models';
    else if (text.includes('polynomial') || text.includes('factor') || text.includes('عامل') || text.includes('كثيرة حدود')) category = 'polynomials';
    else if (text.includes('radical') || text.includes('√') || text.includes('جذر')) category = 'radicals';
    else if (text.includes('rational') || text.includes('مقدار نسبي')) category = 'rational-expressions';
    else category = 'quadratic-functions';
  } else if (domainStr.includes('Problem-Solving') || domainStr.includes('Data Analysis') || text.includes('probability') || text.includes('percent') || text.includes('mean') || text.includes('median') || text.includes('scatterplot') || text.includes('ratio') || text.includes('احتمال') || text.includes('نسبة') || text.includes('متوسط') || text.includes('وسيط') || text.includes('تشتت')) {
    domain = 'data-analysis';
    if (text.includes('probability') || text.includes('احتمال')) category = 'probability';
    else if (text.includes('percent') || text.includes('نسبة مئوية')) category = 'percentages';
    else if (text.includes('mean') || text.includes('median') || text.includes('متوسط') || text.includes('وسيط')) category = 'statistics';
    else if (text.includes('scatterplot') || text.includes('انتشار') || text.includes('تشتت')) category = 'linear-regression';
    else if (text.includes('ratio') || text.includes('نسبة')) category = 'ratios-proportions';
    else category = 'data-interpretation';
  } else {
    domain = 'algebra';
    if (text.includes('system') || text.includes('نظام')) category = 'systems-equations';
    else if (text.includes('inequality') || text.includes('متباينة') || text.includes('≤') || text.includes('≥')) category = 'linear-inequalities';
    else if (text.includes('function') || text.includes('f(x)') || text.includes('دالة')) category = 'linear-functions';
    else if (text.includes('cost') || text.includes('fee') || text.includes('تكلفة') || text.includes('رسوم')) category = 'algebra-word-problems';
    else category = 'linear-equations';
  }

  return { domain, category };
}

function detectSvgType(text) {
  const t = text.toLowerCase();
  if (t.includes('triangle') || t.includes('مثلث') || t.includes('وتر') || t.includes('زاويتان قائمتان') || t.includes('sin(') || t.includes('cos(')) return 'right-triangle';
  if (t.includes('parabola') || t.includes('قطع مكافئ') || t.includes('vertex') || t.includes('رأس')) return 'parabola';
  if (t.includes('scatterplot') || t.includes('تشتت') || t.includes('انتشار') || t.includes('best fit')) return 'scatterplot';
  if (t.includes('circle') || t.includes('دائرة') || t.includes('قوس') || t.includes('مركز')) return 'circle-arc';
  if (t.includes('rectangle') || t.includes('square') || t.includes('prism') || t.includes('مستطيل') || t.includes('مربع') || t.includes('منشور')) return 'geometry-rect';
  if (t.includes('graph') || t.includes('line') || t.includes('linear') || t.includes('مستقيم') || t.includes('رسم بياني') || t.includes('نظام')) return 'coordinate-line';
  if (t.includes('percent') || t.includes('نسبة مئوية') || t.includes('شجرة') || t.includes('جدول تكراري') || t.includes('histogram') || t.includes('مخطط تكراري')) return 'bar-chart';
  if (t.includes('speed') || t.includes('rate') || t.includes('distance') || t.includes('سرعة') || t.includes('مسافة') || t.includes('أقدام في الثانية')) return 'rate-distance';
  return 'coordinate-line';
}

function parseFileContent(filePath, modelIndex) {
  const rawText = fs.readFileSync(filePath, 'utf-8');
  const rawBlocks = rawText.split(/\r?\n(?==== Module|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-)/);

  const questions = [];

  let qCount = 0;
  for (const block of rawBlocks) {
    if (!block.trim()) continue;

    qCount++;
    const qId = modelIndex * 100 + qCount;

    // Header match
    const headerMatch = block.match(/=== Module (\d+) - Question (\d+)(?: \[([^\]]+)\])? ===/);
    let domainStr = '';
    let difficulty = 'Medium';
    if (headerMatch) {
      const infoStr = headerMatch[3] || '';
      if (infoStr.includes('Easy')) difficulty = 'Easy';
      else if (infoStr.includes('Hard')) difficulty = 'Hard';
      else difficulty = 'Medium';
      domainStr = infoStr;
    }

    // AR & EN Question text
    const arMatch = block.match(/\[AR\] ([\s\S]*?)(?=\[EN\]|Choices:|$)/);
    const enMatch = block.match(/\[EN\] ([\s\S]*?)(?=Choices:|[A-D]\)|Correct Answer:|$)/);

    const questionAr = arMatch ? arMatch[1].trim() : '';
    const questionEn = enMatch ? enMatch[1].trim() : '';

    if (!questionAr && !questionEn) continue;

    // Options match
    const options = [];
    const optionMatches = [...block.matchAll(/([A-D])\)\s*(.*?)\s*\/\s*(?:[أ-د]\)\s*)?(.*)/g)];
    
    if (optionMatches.length >= 4) {
      for (let i = 0; i < 4; i++) {
        const m = optionMatches[i];
        options.push({
          textEn: m[1] + ') ' + m[2].trim(),
          textAr: ['أ', 'ب', 'ج', 'د'][i] + ') ' + m[3].trim()
        });
      }
    } else {
      // Fallback line-by-line options parsing
      const lines = block.split('\n');
      for (const line of lines) {
        const optM = line.match(/^\s*([A-D])\)\s*(.*?)\s*\/\s*(?:([أ-د])\)\s*)?(.*)/);
        if (optM) {
          options.push({
            textEn: `${optM[1]}) ${optM[2].trim()}`,
            textAr: `${optM[3] || ['أ','ب','ج','د'][options.length]}) ${optM[4].trim()}`
          });
        }
      }
    }

    // Correct Answer
    const correctAnsMatch = block.match(/Correct Answer:\s*([A-D]|[\d\.\/-]+)/);
    let correctAnswer = 0;
    let isGridIn = false;

    if (correctAnsMatch) {
      const ansVal = correctAnsMatch[1].trim();
      if (['A', 'B', 'C', 'D'].includes(ansVal)) {
        correctAnswer = ['A', 'B', 'C', 'D'].indexOf(ansVal);
      } else {
        isGridIn = true;
        correctAnswer = ansVal;
      }
    }

    // Solutions
    const solArMatch = block.match(/Solution \(AR\):\s*(.*)/);
    const solEnMatch = block.match(/Solution \(EN\):\s*(.*)/);

    const explanationAr = solArMatch ? solArMatch[1].trim() : (questionAr.substring(0, 100) + '...');
    const explanationEn = solEnMatch ? solEnMatch[1].trim() : (questionEn.substring(0, 100) + '...');

    const { domain, category } = detectDomainAndCategory(domainStr, questionEn, questionAr);
    const svgType = detectSvgType(questionEn + ' ' + questionAr);

    const questionObj = {
      id: qId,
      domain,
      category,
      difficulty,
      questionAr,
      questionEn,
      svgData: {
        type: svgType,
        params: {}
      },
      ...(isGridIn ? { isGridIn: true } : {}),
      ...(options.length > 0 ? { options } : {}),
      correctAnswer,
      explanationAr,
      explanationEn,
      solutionStepsAr: [explanationAr],
      solutionStepsEn: [explanationEn]
    };

    questions.push(questionObj);
  }

  return questions;
}

const partFiles = [
  { file: path.join(__dirname, '../src/sat/data/part1.txt'), modelIdx: 1 },
  { file: path.join(__dirname, '../src/sat/data/part2.txt'), modelIdx: 2 },
  { file: path.join(__dirname, '../src/sat/data/part3.txt'), modelIdx: 3 },
  { file: path.join(__dirname, '../src/sat/data/part4.txt'), modelIdx: 4 },
];

for (const p of partFiles) {
  const questions = parseFileContent(p.file, p.modelIdx);
  const code = `import { Question } from '../../types';

export const SAT_MODEL_${p.modelIdx}_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};
`;

  const targetFile = path.join(__dirname, `../src/sat/data/models/satModel${p.modelIdx}.ts`);
  fs.writeFileSync(targetFile, code, 'utf-8');
  console.log(`Generated satModel${p.modelIdx}.ts with ${questions.length} questions.`);
}
