import fs from 'fs';
import path from 'path';

const rawText = fs.readFileSync(path.join(process.cwd(), 'src/sat/data/raw_prompt.txt'), 'utf8');

// Domain mapping
const domainMap = {
  'Geometry & Trigonometry': 'geometry-trig',
  'Algebra': 'algebra',
  'Advanced Math': 'advanced-math',
  'Problem-Solving & Data Analysis': 'data-analysis'
};

// Default category selection per domain
const defaultCategoryMap = {
  'geometry-trig': 'triangles',
  'algebra': 'linear-equations',
  'advanced-math': 'quadratic-equations',
  'data-analysis': 'data-interpretation'
};

function detectCategory(text, domain) {
  const lower = text.toLowerCase();
  if (domain === 'geometry-trig') {
    if (lower.includes('cos') || lower.includes('sin') || lower.includes('tan') || lower.includes('trig') || lower.includes('جيب')) return 'right-trig';
    if (lower.includes('circle') || lower.includes('radius') || lower.includes('arc') || lower.includes('دائرة') || lower.includes('قطر')) return 'circles';
    if (lower.includes('prism') || lower.includes('volume') || lower.includes('surface area') || lower.includes('cylinder') || lower.includes('cone') || lower.includes('sphere') || lower.includes('منشور') || lower.includes('حجم')) return 'area-volume';
    if (lower.includes('angle') || lower.includes('parallel') || lower.includes('intersect') || lower.includes('زاوية') || lower.includes('متوازين')) return 'angles-lines';
    if (lower.includes('triangle') || lower.includes('مثلث')) return 'triangles';
    return 'triangles';
  }
  if (domain === 'algebra') {
    if (lower.includes('≤') || lower.includes('≥') || lower.includes('<') || lower.includes('>') || lower.includes('inequality') || lower.includes('متباينة')) return 'linear-inequalities';
    if (lower.includes('system') || lower.includes('نظام')) return 'systems-equations';
    if (lower.includes('f(x)') || lower.includes('g(x)') || lower.includes('function') || lower.includes('slope') || lower.includes('y-intercept') || lower.includes('ميل') || lower.includes('دالة')) return 'linear-functions';
    if (lower.includes('percent') || lower.includes('cost') || lower.includes('price') || lower.includes('تكلفة') || lower.includes('نسبة')) return 'algebra-word-problems';
    return 'linear-equations';
  }
  if (domain === 'advanced-math') {
    if (lower.includes('x²') || lower.includes('x^2') || lower.includes('quadratic') || lower.includes('parabola') || lower.includes('تربيعية') || lower.includes('قطع مكافئ')) return 'quadratic-equations';
    if (lower.includes('bacterium') || lower.includes('bacteria') || lower.includes('doubled') || lower.includes('population') || lower.includes('a)ˣ') || lower.includes('a^x') || lower.includes('أسية') || lower.includes('تضاعف')) return 'exponential-models';
    if (lower.includes('√') || lower.includes('∛') || lower.includes('root') || lower.includes('جذر')) return 'radicals';
    if (lower.includes('factor') || lower.includes('polynomial') || lower.includes('كثير') || lower.includes('عامل')) return 'polynomials';
    if (lower.includes('x³') || lower.includes('x⁴') || lower.includes('/') || lower.includes('قسمة')) return 'rational-expressions';
    return 'exponents';
  }
  if (domain === 'data-analysis') {
    if (lower.includes('probability') || lower.includes('random') || lower.includes('احتمال') || lower.includes('عشوائياً')) return 'probability';
    if (lower.includes('%') || lower.includes('percent') || lower.includes('نسبة مئوية')) return 'percentages';
    if (lower.includes('mean') || lower.includes('median') || lower.includes('standard deviation') || lower.includes('histogram') || lower.includes('dot plot') || lower.includes('box plot') || lower.includes('متوسط') || lower.includes('وسيط') || lower.includes('انحراف')) return 'statistics';
    if (lower.includes('scatterplot') || lower.includes('scatter') || lower.includes('line of best fit') || lower.includes('أفضل مطابقة') || lower.includes('مخطط تشتت')) return 'linear-regression';
    if (lower.includes('ratio') || lower.includes('equivalent to') || lower.includes('density') || lower.includes('نسبة') || lower.includes('كثافة')) return 'ratios-proportions';
    return 'data-interpretation';
  }
  return defaultCategoryMap[domain] || 'linear-equations';
}

// Split the entire text into question blocks by matching header pattern
const questionBlocks = rawText.split(/(?====\s*Module\s*\d+\s*-\s*Question)/g).filter(b => b.trim().length > 0 && b.includes('=== Module'));

console.log(`Total question blocks found in raw_prompt.txt: ${questionBlocks.length}`);

// Group every 54 questions into a Model
const QUESTIONS_PER_MODEL = 54;
const totalModels = Math.ceil(questionBlocks.length / QUESTIONS_PER_MODEL);

console.log(`Total models to process: ${totalModels}`);

for (let modelIdx = 0; modelIdx < totalModels; modelIdx++) {
  const modelNum = modelIdx + 1;
  const startIndex = modelIdx * QUESTIONS_PER_MODEL;
  const modelBlocks = questionBlocks.slice(startIndex, startIndex + QUESTIONS_PER_MODEL);
  
  console.log(`Processing Model ${modelNum}: ${modelBlocks.length} questions`);
  
  const parsedQuestions = [];
  
  modelBlocks.forEach((block, qIdx) => {
    const lines = block.trim().split('\n');
    const headerLine = lines[0]; // e.g. "=== Module 1 - Question 1 [Geometry & Trigonometry | Easy] ==="
    
    const metaMatch = headerLine.match(/Module\s*(\d+)\s*-\s*Question\s*(\d+)\s*\[([^\|]+)\|\s*([^\]]+)\]/);
    if (!metaMatch) {
      console.warn(`Could not parse header in Model ${modelNum}, qIdx ${qIdx}: ${headerLine}`);
      return;
    }
    
    const moduleNum = parseInt(metaMatch[1], 10);
    const questionNum = parseInt(metaMatch[2], 10);
    const domainStr = metaMatch[3].trim();
    const difficultyStr = metaMatch[4].trim();
    
    const domain = domainMap[domainStr] || 'algebra';
    const difficulty = (['Easy', 'Medium', 'Hard'].includes(difficultyStr)) ? difficultyStr : 'Medium';
    
    // Calculate global Question ID for this model (Model 1 -> 101-154, Model 2 -> 201-254, ...)
    const overallQNum = (moduleNum === 1) ? questionNum : (27 + questionNum);
    const id = modelNum * 100 + overallQNum;
    
    let questionAr = '';
    let questionEn = '';
    let choicesText = '';
    let correctAnswerStr = '';
    let solutionAr = '';
    let solutionEn = '';
    
    // Parse AR
    const arMatch = block.match(/\[AR\]\s*([\s\S]*?)(?=\[EN\]|Choices:|Correct Answer:|$)/);
    if (arMatch) questionAr = arMatch[1].trim();
    
    // Parse EN
    const enMatch = block.match(/\[EN\]\s*([\s\S]*?)(?=Choices:|Correct Answer:|$)/);
    if (enMatch) questionEn = enMatch[1].trim();
    
    // Parse Choices
    const choicesMatch = block.match(/Choices:\s*([\s\S]*?)(?=Correct Answer:|$)/);
    if (choicesMatch) choicesText = choicesMatch[1].trim();
    
    // Parse Correct Answer
    const caMatch = block.match(/Correct Answer:\s*([^\n]+)/);
    if (caMatch) correctAnswerStr = caMatch[1].trim();
    
    // Parse Solution (AR)
    const solArMatch = block.match(/Solution \(AR\):\s*([\s\S]*?)(?=Solution \(EN\):|---|===|$)/);
    if (solArMatch) solutionAr = solArMatch[1].trim();
    
    // Parse Solution (EN)
    const solEnMatch = block.match(/Solution \(EN\):\s*([\s\S]*?)(?=---|===|$)/);
    if (solEnMatch) solutionEn = solEnMatch[1].trim();
    
    const category = detectCategory(questionEn + ' ' + questionAr, domain);
    
    const options = [];
    let isGridIn = true;
    let correctAnswerVal = null;
    
    if (choicesText && choicesText.length > 0) {
      isGridIn = false;
      const choiceLines = choicesText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      choiceLines.forEach(cLine => {
        const cParts = cLine.split(/\s*\/\s*/);
        if (cParts.length >= 2) {
          options.push({
            textEn: cParts[0].trim(),
            textAr: cParts[1].trim()
          });
        } else if (cParts.length === 1) {
          options.push({
            textEn: cParts[0].trim(),
            textAr: cParts[0].trim()
          });
        }
      });
      
      const letterMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      if (letterMap[correctAnswerStr] !== undefined) {
        correctAnswerVal = letterMap[correctAnswerStr];
      } else {
        correctAnswerVal = 0;
      }
    } else {
      isGridIn = true;
      correctAnswerVal = correctAnswerStr;
    }
    
    let svgData = undefined;
    const combinedText = (questionEn + ' ' + questionAr).toLowerCase();
    if (combinedText.includes('scatterplot') || combinedText.includes('مخطط المبعثر') || combinedText.includes('مخطط التشتت') || combinedText.includes('رسم الانتشار')) {
      svgData = { type: 'scatterplot', params: { title: 'Scatterplot' } };
    } else if (combinedText.includes('bar graph') || combinedText.includes('شريطي') || combinedText.includes('أعمدة') || combinedText.includes('histogram') || combinedText.includes('مدرج تكراري')) {
      svgData = { type: 'bar-chart', params: { title: 'Bar Chart / Histogram' } };
    } else if (combinedText.includes('dot plot') || combinedText.includes('مخطط نقطي')) {
      svgData = { type: 'bar-chart', params: { title: 'Dot Plot' } };
    } else if (combinedText.includes('box plot') || combinedText.includes('الصندوق والطرفين') || combinedText.includes('صندوق بياني')) {
      svgData = { type: 'bar-chart', params: { title: 'Box Plot' } };
    } else if (combinedText.includes('triangle') || combinedText.includes('مثلث')) {
      svgData = { type: 'right-triangle', params: {} };
    } else if (combinedText.includes('circle') || combinedText.includes('دائرة') || combinedText.includes('قوس')) {
      svgData = { type: 'circle-arc', params: {} };
    } else if (combinedText.includes('line') || combinedText.includes('مستقيم') || combinedText.includes('خط')) {
      svgData = { type: 'coordinate-line', params: {} };
    }
    
    const qObj = {
      id,
      domain,
      category,
      difficulty,
      questionAr,
      questionEn,
      ...(svgData ? { svgData } : {}),
      ...(isGridIn ? { isGridIn: true } : { options }),
      correctAnswer: correctAnswerVal,
      explanationAr: solutionAr || questionAr,
      explanationEn: solutionEn || questionEn,
      solutionStepsAr: [solutionAr || questionAr],
      solutionStepsEn: [solutionEn || questionEn]
    };
    
    parsedQuestions.push(qObj);
  });
  
  const fileContent = `import { Question } from '../../types';

export const SAT_MODEL_${modelNum}_QUESTIONS: Question[] = ${JSON.stringify(parsedQuestions, null, 2)};
`;

  const targetPath = path.join(process.cwd(), `src/sat/data/models/satModel${modelNum}.ts`);
  fs.writeFileSync(targetPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${parsedQuestions.length} questions to satModel${modelNum}.ts`);
}

console.log('All 12 models successfully generated and saved!');
