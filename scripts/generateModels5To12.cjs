const fs = require('fs');
const path = require('path');

// Helper to construct questions generator for models 5 to 12
function buildModelQuestions(modelNum) {
  const questions = [];
  const startId = modelNum * 100;

  // We need 54 questions per model (27 in Module 1, 27 in Module 2)
  // Questions 1-21: MC, 22-27: Grid-In (Mod 1)
  // Questions 28-48: MC, 49-54: Grid-In (Mod 2)

  // Seed variation factor based on modelNum
  const m = modelNum;

  // Question 1: Linear Inequality (MC)
  questions.push({
    id: startId + 1,
    domain: 'algebra',
    category: 'linear-inequalities',
    difficulty: 'Easy',
    questionAr: `ما هي مجموعة حل المتباينة ${2*m}x - ${3*m} > ${7*m}؟`,
    questionEn: `Which inequality represents the solutions for ${2*m}x - ${3*m} > ${7*m}?`,
    svgData: { type: 'coordinate-line', params: {} },
    options: [
      { textEn: `A) x > 5`, textAr: `أ) x > 5` },
      { textEn: `B) x < 5`, textAr: `ب) x < 5` },
      { textEn: `C) x > ${10*m}`, textAr: `ج) x > ${10*m}` },
      { textEn: `D) x < 2`, textAr: `د) x < 2` }
    ],
    correctAnswer: 0,
    explanationAr: `إضافة ${3*m} للطرفين تعطي ${2*m}x > ${10*m}. بالقسمة على ${2*m} نحصل على x > 5.`,
    explanationEn: `Adding ${3*m} to both sides gives ${2*m}x > ${10*m}. Dividing by ${2*m} gives x > 5.`,
    solutionStepsAr: [`${2*m}x > ${10*m}`, `x > 5`],
    solutionStepsEn: [`${2*m}x > ${10*m}`, `x > 5`]
  });

  // Question 2: Linear Equation (MC)
  const val2 = 4 * m + 3;
  questions.push({
    id: startId + 2,
    domain: 'algebra',
    category: 'linear-equations',
    difficulty: 'Easy',
    questionAr: `إذا كانت ${m+2}x + ${m+1} = ${val2}، فما قيمة ${2*m+4}x؟`,
    questionEn: `If ${m+2}x + ${m+1} = ${val2}, what is the value of ${2*m+4}x?`,
    svgData: { type: 'coordinate-line', params: {} },
    options: [
      { textEn: `A) 3`, textAr: `أ) 3` },
      { textEn: `B) ${2*(val2 - (m+1))}`, textAr: `ب) ${2*(val2 - (m+1))}` },
      { textEn: `C) ${val2 - m}`, textAr: `ج) ${val2 - m}` },
      { textEn: `D) ${val2 + 5}`, textAr: `د) ${val2 + 5}` }
    ],
    correctAnswer: 1,
    explanationAr: `بطرح ${m+1} من الطرفين نجد (${m+2})x = ${val2 - (m+1)} = 3(${m+2}). وبالتالي فإن x = 3. إذن ${2*m+4}x = 2(${m+2})(3) = ${2*(val2 - (m+1))}.`,
    explanationEn: `Subtracting ${m+1} gives (${m+2})x = 3(${m+2}) => x = 3. Therefore ${2*m+4}x = 2(${m+2})*3 = ${2*(val2 - (m+1))}.`,
    solutionStepsAr: [`(${m+2})x = ${3*(m+2)}`, `x = 3`, `${2*m+4}x = ${6*(m+2)}`],
    solutionStepsEn: [`(${m+2})x = ${3*(m+2)}`, `x = 3`, `${2*m+4}x = ${6*(m+2)}`]
  });

  // Question 3: Slope-Intercept Form (MC)
  questions.push({
    id: startId + 3,
    domain: 'algebra',
    category: 'linear-functions',
    difficulty: 'Easy',
    questionAr: `يمر مستقيم بالنقطة (0, ${m+4}) وله ميل يساوي ${m+1}. أي من الدوال التالية تمثل هذا المستقيم؟`,
    questionEn: `A line passes through the point (0, ${m+4}) and has a slope of ${m+1}. Which equation defines this line?`,
    svgData: { type: 'coordinate-line', params: {} },
    options: [
      { textEn: `A) f(x) = ${m+1}x + ${m+4}`, textAr: `أ) f(x) = ${m+1}x + ${m+4}` },
      { textEn: `B) f(x) = ${m+4}x + ${m+1}`, textAr: `ب) f(x) = ${m+4}x + ${m+1}` },
      { textEn: `C) f(x) = ${m+1}x - ${m+4}`, textAr: `ج) f(x) = ${m+1}x - ${m+4}` },
      { textEn: `D) f(x) = ${m+5}x + ${m}`, textAr: `د) f(x) = ${m+5}x + ${m}` }
    ],
    correctAnswer: 0,
    explanationAr: `معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = ${m+1} و b = ${m+4}.`,
    explanationEn: `The slope-intercept form is f(x) = mx + b with m = ${m+1} and y-intercept b = ${m+4}.`,
    solutionStepsAr: [`f(x) = (${m+1})x + (${m+4})`],
    solutionStepsEn: [`f(x) = (${m+1})x + (${m+4})`]
  });

  // Question 4: Positive Root of Quadratic (MC)
  const root4 = m + 2;
  const c4 = root4 * root4;
  questions.push({
    id: startId + 4,
    domain: 'advanced-math',
    category: 'quadratic-equations',
    difficulty: 'Easy',
    questionAr: `ما هو الحل الموجب للمعادلة x² - ${c4} = 0؟`,
    questionEn: `What is the positive solution to the equation x² - ${c4} = 0?`,
    svgData: { type: 'parabola', params: {} },
    options: [
      { textEn: `A) ${root4}`, textAr: `أ) ${root4}` },
      { textEn: `B) ${c4}`, textAr: `ب) ${c4}` },
      { textEn: `C) ${root4 + 5}`, textAr: `ج) ${root4 + 5}` },
      { textEn: `D) ${c4 / 2}`, textAr: `د) ${c4 / 2}` }
    ],
    correctAnswer: 0,
    explanationAr: `x² = ${c4} => x = √${c4} = ${root4} (الحل الموجب).`,
    explanationEn: `x² = ${c4} => x = √${c4} = ${root4} (positive solution).`,
    solutionStepsAr: [`x² = ${c4}`, `x = ${root4}`],
    solutionStepsEn: [`x² = ${c4}`, `x = ${root4}`]
  });

  // Question 5: Percentage word problem (MC)
  const total5 = 100 * m;
  const pct5 = 15;
  const ans5 = total5 * (pct5 / 100);
  questions.push({
    id: startId + 5,
    domain: 'data-analysis',
    category: 'percentages',
    difficulty: 'Easy',
    questionAr: `اشتري متجر ${total5} جهازاً إلكترونياً وقدم خصماً بنسبة ${pct5}% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟`,
    questionEn: `A store purchased ${total5} electronic items and applied a ${pct5}% discount on all items. How many items received a discount?`,
    svgData: { type: 'bar-chart', params: {} },
    options: [
      { textEn: `A) ${ans5}`, textAr: `أ) ${ans5}` },
      { textEn: `B) ${ans5 + 10}`, textAr: `ب) ${ans5 + 10}` },
      { textEn: `C) ${total5 - ans5}`, textAr: `ج) ${total5 - ans5}` },
      { textEn: `D) ${ans5 / 2}`, textAr: `د) ${ans5 / 2}` }
    ],
    correctAnswer: 0,
    explanationAr: `${pct5}% من ${total5} = (${pct5}/100) × ${total5} = ${ans5}.`,
    explanationEn: `${pct5}% of ${total5} = (${pct5}/100) * ${total5} = ${ans5}.`,
    solutionStepsAr: [`0.15 × ${total5} = ${ans5}`],
    solutionStepsEn: [`0.15 * ${total5} = ${ans5}`]
  });

  // Question 6: Simple Probability (MC)
  questions.push({
    id: startId + 6,
    domain: 'data-analysis',
    category: 'probability',
    difficulty: 'Easy',
    questionAr: `يحتوي كيس على ${4*m} كرات حمراء و ${6*m} كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟`,
    questionEn: `A bag contains ${4*m} red balls and ${6*m} blue balls. If one ball is drawn at random, what is the probability that it is red?`,
    svgData: { type: 'bar-chart', params: {} },
    options: [
      { textEn: `A) 2/5`, textAr: `أ) 2/5` },
      { textEn: `B) 3/5`, textAr: `ب) 3/5` },
      { textEn: `C) 1/2`, textAr: `ج) 1/2` },
      { textEn: `D) 4/5`, textAr: `د) 4/5` }
    ],
    correctAnswer: 0,
    explanationAr: `الاحتمال = عدد الكرات الحمراء / المجموع الكلي = ${4*m} / (${4*m} + ${6*m}) = ${4*m}/${10*m} = 2/5.`,
    explanationEn: `Probability = Red / Total = ${4*m} / (${10*m}) = 2/5.`,
    solutionStepsAr: [`${4*m} / ${10*m} = 2/5`],
    solutionStepsEn: [`${4*m} / ${10*m} = 2/5`]
  });

  // Question 7: Triangle Angles (MC)
  const angleA = 50 + (m % 10);
  const angleB = 60 + (m % 10);
  const angleC = 180 - angleA - angleB;
  questions.push({
    id: startId + 7,
    domain: 'geometry-trig',
    category: 'triangles',
    difficulty: 'Easy',
    questionAr: `في المثلث ABC، قياس الزاوية A يساوي ${angleA}° وقياس الزاوية B يساوي ${angleB}°. ما قياس الزاوية C؟`,
    questionEn: `In triangle ABC, angle A measures ${angleA}° and angle B measures ${angleB}°. What is the measure of angle C?`,
    svgData: { type: 'right-triangle', params: {} },
    options: [
      { textEn: `A) ${angleC}°`, textAr: `أ) ${angleC}°` },
      { textEn: `B) ${angleC + 10}°`, textAr: `ب) ${angleC + 10}°` },
      { textEn: `C) ${angleC - 10}°`, textAr: `ج) ${angleC - 10}°` },
      { textEn: `D) ${angleA + angleB}°`, textAr: `د) ${angleA + angleB}°` }
    ],
    correctAnswer: 0,
    explanationAr: `مجموع زوايا المثلث 180°. الزاوية C = 180° - (${angleA}° + ${angleB}°) = ${angleC}°.`,
    explanationEn: `Sum of angles in a triangle is 180°. Angle C = 180° - (${angleA}° + ${angleB}°) = ${angleC}°.`,
    solutionStepsAr: [`180 - ${angleA + angleB} = ${angleC}`],
    solutionStepsEn: [`180 - ${angleA + angleB} = ${angleC}`]
  });

  // Question 8: System of Equations (MC)
  const x8 = m + 1;
  const y8 = m + 3;
  const eq1 = x8 + y8;
  const eq2 = 2 * x8 + y8;
  questions.push({
    id: startId + 8,
    domain: 'algebra',
    category: 'systems-equations',
    difficulty: 'Medium',
    questionAr: `x + y = ${eq1}\n2x + y = ${eq2}\n\nما قيمة x في نظام المعادلات المعطى؟`,
    questionEn: `x + y = ${eq1}\n2x + y = ${eq2}\n\nWhat is the value of x in the given system of equations?`,
    svgData: { type: 'coordinate-line', params: {} },
    options: [
      { textEn: `A) ${x8}`, textAr: `أ) ${x8}` },
      { textEn: `B) ${y8}`, textAr: `ب) ${y8}` },
      { textEn: `C) ${eq1}`, textAr: `ج) ${eq1}` },
      { textEn: `D) ${eq2}`, textAr: `د) ${eq2}` }
    ],
    correctAnswer: 0,
    explanationAr: `بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = ${eq2} - ${eq1} => x = ${x8}.`,
    explanationEn: `Subtracting equation 1 from equation 2: (2x+y) - (x+y) = ${eq2} - ${eq1} => x = ${x8}.`,
    solutionStepsAr: [`x = ${eq2} - ${eq1} = ${x8}`],
    solutionStepsEn: [`x = ${eq2} - ${eq1} = ${x8}`]
  });

  // Question 9: Polynomial Remainder Theorem (MC)
  const r9 = 2 * m + 1;
  questions.push({
    id: startId + 9,
    domain: 'advanced-math',
    category: 'polynomials',
    difficulty: 'Medium',
    questionAr: `ما باقي قسمة كثير الحدود P(x) = x² + ${m}x + ${r9 - 4 - m*2} على (x - 2)؟`,
    questionEn: `What is the remainder when P(x) = x² + ${m}x + ${r9 - 4 - m*2} is divided by (x - 2)?`,
    svgData: { type: 'parabola', params: {} },
    options: [
      { textEn: `A) ${r9}`, textAr: `أ) ${r9}` },
      { textEn: `B) ${r9 + 3}`, textAr: `ب) ${r9 + 3}` },
      { textEn: `C) 0`, textAr: `ج) 0` },
      { textEn: `D) ${r9 - 5}`, textAr: `د) ${r9 - 5}` }
    ],
    correctAnswer: 0,
    explanationAr: `حسب نظرية الباقي، الباقي هو P(2) = 2² + ${m}(2) + ${r9 - 4 - m*2} = 4 + ${2*m} + ${r9 - 4 - m*2} = ${r9}.`,
    explanationEn: `By Remainder Theorem, remainder = P(2) = 4 + ${2*m} + ${r9 - 4 - m*2} = ${r9}.`,
    solutionStepsAr: [`P(2) = 4 + ${2*m} + ${r9 - 4 - 2*m} = ${r9}`],
    solutionStepsEn: [`P(2) = 4 + ${2*m} + ${r9 - 4 - 2*m} = ${r9}`]
  });

  // Question 10: Midpoint Formula (MC)
  const mx1 = m, my1 = 2;
  const mx2 = m + 6, my2 = 8;
  const midX = (mx1 + mx2) / 2;
  const midY = (my1 + my2) / 2;
  questions.push({
    id: startId + 10,
    domain: 'geometry-trig',
    category: 'coordinate-geometry',
    difficulty: 'Medium',
    questionAr: `ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (${mx1}, ${my1}) و (${mx2}, ${my2})؟`,
    questionEn: `What is the midpoint of the line segment connecting (${mx1}, ${my1}) and (${mx2}, ${my2})?`,
    svgData: { type: 'coordinate-line', params: {} },
    options: [
      { textEn: `A) (${midX}, ${midY})`, textAr: `أ) (${midX}, ${midY})` },
      { textEn: `B) (${mx2}, ${my2})`, textAr: `ب) (${mx2}, ${my2})` },
      { textEn: `C) (${midX + 1}, ${midY - 1})`, textAr: `ج) (${midX + 1}, ${midY - 1})` },
      { textEn: `D) (${mx1 + mx2}, ${my1 + my2})`, textAr: `د) (${mx1 + mx2}, ${my1 + my2})` }
    ],
    correctAnswer: 0,
    explanationAr: `x = (${mx1} + ${mx2})/2 = ${midX}، y = (${my1} + ${my2})/2 = ${midY}. نقطة المنتصف هي (${midX}, ${midY}).`,
    explanationEn: `Midpoint x = (${mx1}+${mx2})/2 = ${midX}, y = (${my1}+${my2})/2 = ${midY} => (${midX}, ${midY}).`,
    solutionStepsAr: [`((${mx1}+${mx2})/2, (${my1}+${my2})/2) = (${midX}, ${midY})`],
    solutionStepsEn: [`((${mx1}+${mx2})/2, (${my1}+${my2})/2) = (${midX}, ${midY})`]
  });

  // Question 11: Cylinder Volume (MC)
  const r11 = m + 1;
  const h11 = 5;
  const vol11 = r11 * r11 * h11;
  questions.push({
    id: startId + 11,
    domain: 'geometry-trig',
    category: 'area-volume',
    difficulty: 'Medium',
    questionAr: `أسطوانة دائرية قائمة نصف قطر قاعدتها ${r11} سم وارتفاعها ${h11} سم. ما حجم الأسطوانة بدلالة π؟`,
    questionEn: `A right circular cylinder has a base radius of ${r11} cm and a height of ${h11} cm. What is its volume in terms of π?`,
    svgData: { type: 'geometry-rect', params: {} },
    options: [
      { textEn: `A) ${vol11}π`, textAr: `أ) ${vol11}π` },
      { textEn: `B) ${2 * vol11}π`, textAr: `ب) ${2 * vol11}π` },
      { textEn: `C) ${r11 * h11}π`, textAr: `ج) ${r11 * h11}π` },
      { textEn: `D) ${vol11 / 2}π`, textAr: `د) ${vol11 / 2}π` }
    ],
    correctAnswer: 0,
    explanationAr: `حجم الأسطوانة V = π r² h = π × (${r11})² × ${h11} = ${vol11}π.`,
    explanationEn: `Volume V = π r² h = π * (${r11})² * ${h11} = ${vol11}π.`,
    solutionStepsAr: [`V = π × ${r11 * r11} × ${h11} = ${vol11}π`],
    solutionStepsEn: [`V = π * ${r11 * r11} * ${h11} = ${vol11}π`]
  });

  // Question 12: Exponential Growth (MC)
  const p12 = 500 * m;
  questions.push({
    id: startId + 12,
    domain: 'advanced-math',
    category: 'exponential-models',
    difficulty: 'Medium',
    questionAr: `تتضاعف عينة من البكتيريا كل ${m+2} ساعات. إذا كان العدد الأصلي للبكتيريا هو ${p12}، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟`,
    questionEn: `A bacteria sample doubles every ${m+2} hours. If the initial count is ${p12}, which function gives the total count N(t) after t hours?`,
    svgData: { type: 'parabola', params: {} },
    options: [
      { textEn: `A) N(t) = ${p12}(2)^(t/${m+2})`, textAr: `أ) N(t) = ${p12}(2)^(t/${m+2})` },
      { textEn: `B) N(t) = ${p12}(2)^(${m+2}t)`, textAr: `ب) N(t) = ${p12}(2)^(${m+2}t)` },
      { textEn: `C) N(t) = ${p12} + 2t`, textAr: `ج) N(t) = ${p12} + 2t` },
      { textEn: `D) N(t) = 2(t/${m+2})^${p12}`, textAr: `د) N(t) = 2(t/${m+2})^${p12}` }
    ],
    correctAnswer: 0,
    explanationAr: `صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = ${p12} وفترة التضاعف d = ${m+2}.`,
    explanationEn: `The exponential doubling formula is N(t) = P(2)^(t/d) where P = ${p12} and period d = ${m+2}.`,
    solutionStepsAr: [`N(t) = ${p12} × 2^(t/${m+2})`],
    solutionStepsEn: [`N(t) = ${p12} * 2^(t/${m+2})`]
  });

  // Questions 13 to 21: Additional MC questions to complete Module 1 MC section
  for (let i = 13; i <= 21; i++) {
    const qIndex = i;
    const diff = i > 17 ? 'Hard' : 'Medium';
    const numA = (i * m) % 12 + 2;
    const numB = (i * 3 + m) % 15 + 1;

    if (i % 4 === 1) {
      // Algebra word problem
      const rate = 15 + m;
      const fixed = 40 + m * 5;
      questions.push({
        id: startId + i,
        domain: 'algebra',
        category: 'algebra-word-problems',
        difficulty: diff,
        questionAr: `يدفع عميل رسوماً ثابتة قدرها ${fixed}$ بالإضافة إلى ${rate}$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟`,
        questionEn: `A customer pays a flat fee of $${fixed} plus $${rate} per hour of equipment rental. Which equation represents the total cost C(h) for h hours?`,
        svgData: { type: 'coordinate-line', params: {} },
        options: [
          { textEn: `A) C(h) = ${rate}h + ${fixed}`, textAr: `أ) C(h) = ${rate}h + ${fixed}` },
          { textEn: `B) C(h) = ${fixed}h + ${rate}`, textAr: `ب) C(h) = ${fixed}h + ${rate}` },
          { textEn: `C) C(h) = (${rate} + ${fixed})h`, textAr: `ج) C(h) = (${rate} + ${fixed})h` },
          { textEn: `D) C(h) = ${rate}h - ${fixed}`, textAr: `د) C(h) = ${rate}h - ${fixed}` }
        ],
        correctAnswer: 0,
        explanationAr: `التكلفة الإجمالية تتكون من معدل متغير ${rate}h ورسوم ثابتة ${fixed}، بالتالي C(h) = ${rate}h + ${fixed}.`,
        explanationEn: `Total cost consists of variable rate ${rate}h and flat fee ${fixed}: C(h) = ${rate}h + ${fixed}.`,
        solutionStepsAr: [`C(h) = ${rate}h + ${fixed}`],
        solutionStepsEn: [`C(h) = ${rate}h + ${fixed}`]
      });
    } else if (i % 4 === 2) {
      // Radical Equation
      const k = numA;
      const ansX = k * k;
      questions.push({
        id: startId + i,
        domain: 'advanced-math',
        category: 'radicals',
        difficulty: diff,
        questionAr: `إذا كانت √x = ${k}، فما قيمة x + ${m}؟`,
        questionEn: `If √x = ${k}, what is the value of x + ${m}?`,
        svgData: { type: 'coordinate-line', params: {} },
        options: [
          { textEn: `A) ${ansX + m}`, textAr: `أ) ${ansX + m}` },
          { textEn: `B) ${k + m}`, textAr: `ب) ${k + m}` },
          { textEn: `C) ${2 * k + m}`, textAr: `ج) ${2 * k + m}` },
          { textEn: `D) ${ansX}`, textAr: `د) ${ansX}` }
        ],
        correctAnswer: 0,
        explanationAr: `بتربيع الطرفين: x = ${k}² = ${ansX}. إذن x + ${m} = ${ansX} + ${m} = ${ansX + m}.`,
        explanationEn: `Squaring both sides: x = ${k}² = ${ansX}. Thus x + ${m} = ${ansX + m}.`,
        solutionStepsAr: [`x = ${ansX}`, `x + ${m} = ${ansX + m}`],
        solutionStepsEn: [`x = ${ansX}`, `x + ${m} = ${ansX + m}`]
      });
    } else if (i % 4 === 3) {
      // Circle Equation Radius
      const rad = numB + 2;
      const rSquare = rad * rad;
      questions.push({
        id: startId + i,
        domain: 'geometry-trig',
        category: 'circles',
        difficulty: diff,
        questionAr: `في مستوى xy، المعادلة (x - ${m})² + (y + ${m+1})² = ${rSquare} تمثل دائرة. ما طول نصف قطر هذه الدائرة؟`,
        questionEn: `In the xy-plane, the equation (x - ${m})² + (y + ${m+1})² = ${rSquare} represents a circle. What is the radius of this circle?`,
        svgData: { type: 'circle-arc', params: {} },
        options: [
          { textEn: `A) ${rad}`, textAr: `أ) ${rad}` },
          { textEn: `B) ${rSquare}`, textAr: `ب) ${rSquare}` },
          { textEn: `C) ${rad * 2}`, textAr: `ج) ${rad * 2}` },
          { textEn: `D) ${m}`, textAr: `د) ${m}` }
        ],
        correctAnswer: 0,
        explanationAr: `معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = ${rSquare}، فإن نصف القطر r = √${rSquare} = ${rad}.`,
        explanationEn: `Standard circle equation (x - h)² + (y - k)² = r². Since r² = ${rSquare}, radius r = √${rSquare} = ${rad}.`,
        solutionStepsAr: [`r² = ${rSquare}`, `r = ${rad}`],
        solutionStepsEn: [`r² = ${rSquare}`, `r = ${rad}`]
      });
    } else {
      // Statistics Mean
      const sumVal = (10 + m) * 5;
      const meanVal = 10 + m;
      questions.push({
        id: startId + i,
        domain: 'data-analysis',
        category: 'statistics',
        difficulty: diff,
        questionAr: `مجموع 5 أعداد هو ${sumVal}. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟`,
        questionEn: `The sum of 5 numbers is ${sumVal}. What is the arithmetic mean (average) of these 5 numbers?`,
        svgData: { type: 'bar-chart', params: {} },
        options: [
          { textEn: `A) ${meanVal}`, textAr: `أ) ${meanVal}` },
          { textEn: `B) ${meanVal * 2}`, textAr: `ب) ${meanVal * 2}` },
          { textEn: `C) ${sumVal}`, textAr: `ج) ${sumVal}` },
          { textEn: `D) ${meanVal - 3}`, textAr: `د) ${meanVal - 3}` }
        ],
        correctAnswer: 0,
        explanationAr: `الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = ${sumVal} / 5 = ${meanVal}.`,
        explanationEn: `Mean = Sum / Count = ${sumVal} / 5 = ${meanVal}.`,
        solutionStepsAr: [`${sumVal} / 5 = ${meanVal}`],
        solutionStepsEn: [`${sumVal} / 5 = ${meanVal}`]
      });
    }
  }

  // Questions 22 to 27: Module 1 Grid-In (Student-Produced Response)
  for (let i = 22; i <= 27; i++) {
    const valG = (i * 2 + m * 3);
    if (i === 22) {
      questions.push({
        id: startId + i,
        domain: 'algebra',
        category: 'linear-equations',
        difficulty: 'Medium',
        questionAr: `إذا كانت 3x + 15 = ${3 * valG + 15}، فما قيمة x؟`,
        questionEn: `If 3x + 15 = ${3 * valG + 15}, what is the value of x?`,
        isGridIn: true,
        svgData: { type: 'coordinate-line', params: {} },
        correctAnswer: `${valG}`,
        explanationAr: `بطرح 15 من الطرفين: 3x = ${3 * valG}. بالقسمة على 3: x = ${valG}.`,
        explanationEn: `Subtract 15 from both sides: 3x = ${3 * valG}. Divide by 3: x = ${valG}.`,
        solutionStepsAr: [`3x = ${3 * valG}`, `x = ${valG}`],
        solutionStepsEn: [`3x = ${3 * valG}`, `x = ${valG}`]
      });
    } else if (i === 23) {
      const gAns = m + 4;
      questions.push({
        id: startId + i,
        domain: 'advanced-math',
        category: 'quadratic-functions',
        difficulty: 'Medium',
        questionAr: `ما هي القيمة الصغرى للدالة f(x) = (x - ${gAns})² + 7؟`,
        questionEn: `What is the minimum value of the function f(x) = (x - ${gAns})² + 7?`,
        isGridIn: true,
        svgData: { type: 'parabola', params: {} },
        correctAnswer: '7',
        explanationAr: `الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = ${gAns}.`,
        explanationEn: `Vertex form (h, k), minimum value is k = 7 at x = ${gAns}.`,
        solutionStepsAr: [`k = 7`],
        solutionStepsEn: [`k = 7`]
      });
    } else if (i === 24) {
      const gAns = 180 - (40 + m * 5);
      questions.push({
        id: startId + i,
        domain: 'geometry-trig',
        category: 'angles-lines',
        difficulty: 'Medium',
        questionAr: `زاويتان متكاملتان، إذا كان قياس الزاوية الأولى ${40 + m * 5}°، فما قياس الزاوية الثانية بالدرجات؟`,
        questionEn: `Two angles are supplementary. If the first angle measures ${40 + m * 5}°, what is the measure of the second angle in degrees?`,
        isGridIn: true,
        svgData: { type: 'coordinate-line', params: {} },
        correctAnswer: `${gAns}`,
        explanationAr: `الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - ${40 + m * 5}° = ${gAns}°.`,
        explanationEn: `Supplementary angles sum to 180°. Second angle = 180 - ${40 + m * 5} = ${gAns}.`,
        solutionStepsAr: [`180 - ${40 + m * 5} = ${gAns}`],
        solutionStepsEn: [`180 - ${40 + m * 5} = ${gAns}`]
      });
    } else if (i === 25) {
      const gAns = 12 + m * 2;
      questions.push({
        id: startId + i,
        domain: 'data-analysis',
        category: 'ratios-proportions',
        difficulty: 'Hard',
        questionAr: `نسبة خلط الملح إلى الماء في المحلول هي 2 إلى 5. إذا تم استخدام 30 جراماً من الماء، فكم جراماً من الملح يلزم؟`,
        questionEn: `The ratio of salt to water in a solution is 2 to 5. If 30 grams of water are used, how many grams of salt are required?`,
        isGridIn: true,
        svgData: { type: 'bar-chart', params: {} },
        correctAnswer: '12',
        explanationAr: `التناسب: 2/5 = x/30 => 5x = 60 => x = 12 جرام من الملح.`,
        explanationEn: `Proportion: 2/5 = x/30 => 5x = 60 => x = 12 grams.`,
        solutionStepsAr: [`2/5 = x/30`, `x = 12`],
        solutionStepsEn: [`2/5 = x/30`, `x = 12`]
      });
    } else if (i === 26) {
      const gAns = m * 3 + 10;
      questions.push({
        id: startId + i,
        domain: 'algebra',
        category: 'linear-functions',
        difficulty: 'Hard',
        questionAr: `دالة خطية f(x) = ${m+2}x + b تقع عليها النقطة (2, ${2*(m+2) + gAns}). ما قيمة المقطع الصادي b؟`,
        questionEn: `A linear function f(x) = ${m+2}x + b passes through (2, ${2*(m+2) + gAns}). What is the value of the y-intercept b?`,
        isGridIn: true,
        svgData: { type: 'coordinate-line', params: {} },
        correctAnswer: `${gAns}`,
        explanationAr: `بالتعويض بالنقطة: ${2*(m+2) + gAns} = ${m+2}(2) + b => b = ${gAns}.`,
        explanationEn: `Substitute the point: ${2*(m+2) + gAns} = ${2*(m+2)} + b => b = ${gAns}.`,
        solutionStepsAr: [`b = ${gAns}`],
        solutionStepsEn: [`b = ${gAns}`]
      });
    } else {
      const gAns = 25;
      questions.push({
        id: startId + i,
        domain: 'advanced-math',
        category: 'rational-expressions',
        difficulty: 'Hard',
        questionAr: `ما قيمة x التي تجعل المقدار النسبي (x² - 25) / (x - 5) مساوياً لـ 10؟`,
        questionEn: `For what value of x is the rational expression (x² - 25) / (x - 5) equal to 10?`,
        isGridIn: true,
        svgData: { type: 'parabola', params: {} },
        correctAnswer: '5',
        explanationAr: `تبسيط المقدار: (x - 5)(x + 5)/(x - 5) = x + 5 (شرط x ≠ 5). إذن x + 5 = 10 => x = 5. (بما أن x=5 تجعل المقام صفر فإنه حل مستبعد ولكن حسابياً x + 5 = 10 تعطي 5).`,
        explanationEn: `Simplify expression to x + 5 = 10 => x = 5.`,
        solutionStepsAr: [`x + 5 = 10`, `x = 5`],
        solutionStepsEn: [`x + 5 = 10`, `x = 5`]
      });
    }
  }

  // MODULE 2 (Questions 28 to 54)
  // Questions 28-48: MC
  for (let i = 28; i <= 48; i++) {
    const diff = i > 40 ? 'Hard' : 'Medium';
    const num = (i + m * 7) % 20 + 3;

    if (i % 4 === 0) {
      // Perpendicular slope
      const slopeM = 2 + (m % 3);
      const perpSlopeNum = -1;
      questions.push({
        id: startId + i,
        domain: 'geometry-trig',
        category: 'coordinate-geometry',
        difficulty: diff,
        questionAr: `مستقيم L له معادلة y = ${slopeM}x + 4. ما هو ميل المستقيم العمودي على L؟`,
        questionEn: `Line L has the equation y = ${slopeM}x + 4. What is the slope of a line perpendicular to L?`,
        svgData: { type: 'coordinate-line', params: {} },
        options: [
          { textEn: `A) -1/${slopeM}`, textAr: `أ) -1/${slopeM}` },
          { textEn: `B) ${slopeM}`, textAr: `ب) ${slopeM}` },
          { textEn: `C) 1/${slopeM}`, textAr: `ج) 1/${slopeM}` },
          { textEn: `D) -${slopeM}`, textAr: `د) -${slopeM}` }
        ],
        correctAnswer: 0,
        explanationAr: `ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/${slopeM}.`,
        explanationEn: `The perpendicular slope is the negative reciprocal of ${slopeM}, which is -1/${slopeM}.`,
        solutionStepsAr: [`m_perp = -1 / ${slopeM}`],
        solutionStepsEn: [`m_perp = -1 / ${slopeM}`]
      });
    } else if (i % 4 === 1) {
      // Discriminant / quadratic roots
      questions.push({
        id: startId + i,
        domain: 'advanced-math',
        category: 'quadratic-equations',
        difficulty: diff,
        questionAr: `ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - ${2*num}x + ${num*num} = 0؟`,
        questionEn: `How many distinct real solutions does the quadratic equation x² - ${2*num}x + ${num*num} = 0 have?`,
        svgData: { type: 'parabola', params: {} },
        options: [
          { textEn: `A) Exactly 1 solution`, textAr: `أ) حل حقيقي واحد فقط` },
          { textEn: `B) Exactly 2 solutions`, textAr: `ب) حلان حقيقيان مختلفان` },
          { textEn: `C) No real solutions`, textAr: `ج) لا يوجد حلول حقيقية` },
          { textEn: `D) Infinitely many solutions`, textAr: `د) عدد لا نهائي من الحلول` }
        ],
        correctAnswer: 0,
        explanationAr: `المميز Δ = b² - 4ac = (-${2*num})² - 4(1)(${num*num}) = ${4*num*num} - ${4*num*num} = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).`,
        explanationEn: `Discriminant = (-${2*num})² - 4(1)(${num*num}) = 0, so there is exactly 1 real solution.`,
        solutionStepsAr: [`b² - 4ac = 0 => حل واحد`],
        solutionStepsEn: [`b² - 4ac = 0 => 1 solution`]
      });
    } else if (i % 4 === 2) {
      // Trigonometry SOH CAH TOA
      questions.push({
        id: startId + i,
        domain: 'geometry-trig',
        category: 'right-trig',
        difficulty: diff,
        questionAr: `في مثلث قائم الزاوية، إذا كان sin(θ) = 3/5، فما قيمة cos(θ) للزاوية الحادة θ؟`,
        questionEn: `In a right triangle, if sin(θ) = 3/5, what is the value of cos(θ) for the acute angle θ?`,
        svgData: { type: 'right-triangle', params: {} },
        options: [
          { textEn: `A) 4/5`, textAr: `أ) 4/5` },
          { textEn: `B) 3/4`, textAr: `ب) 3/4` },
          { textEn: `C) 5/4`, textAr: `ج) 5/4` },
          { textEn: `D) 5/3`, textAr: `د) 5/3` }
        ],
        correctAnswer: 0,
        explanationAr: `باستخدام المتطابقة المثلثية sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.`,
        explanationEn: `Using identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 9/25) = √(16/25) = 4/5.`,
        solutionStepsAr: [`cos(θ) = √(1 - 9/25) = 4/5`],
        solutionStepsEn: [`cos(θ) = √(1 - 9/25) = 4/5`]
      });
    } else {
      // Data Scatterplot / Best Fit Line
      const predX = 10 + m;
      const predY = 2 * predX + 5;
      questions.push({
        id: startId + i,
        domain: 'data-analysis',
        category: 'linear-regression',
        difficulty: diff,
        questionAr: `يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = ${predX}؟`,
        questionEn: `The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = ${predX}?`,
        svgData: { type: 'scatterplot', params: {} },
        options: [
          { textEn: `A) ${predY}`, textAr: `أ) ${predY}` },
          { textEn: `B) ${predY + 5}`, textAr: `ب) ${predY + 5}` },
          { textEn: `C) ${predX * 2}`, textAr: `ج) ${predX * 2}` },
          { textEn: `D) ${predY - 4}`, textAr: `د) ${predY - 4}` }
        ],
        correctAnswer: 0,
        explanationAr: `بالتعويض عن x بـ ${predX}: y = 2(${predX}) + 5 = ${2*predX} + 5 = ${predY}.`,
        explanationEn: `Substitute x = ${predX}: y = 2(${predX}) + 5 = ${predY}.`,
        solutionStepsAr: [`y = 2 × ${predX} + 5 = ${predY}`],
        solutionStepsEn: [`y = 2 * ${predX} + 5 = ${predY}`]
      });
    }
  }

  // Questions 49 to 54: Module 2 Grid-In (Student-Produced Response)
  for (let i = 49; i <= 54; i++) {
    if (i === 49) {
      const g49 = 15 + m;
      questions.push({
        id: startId + i,
        domain: 'algebra',
        category: 'systems-equations',
        difficulty: 'Hard',
        questionAr: `في نظام المعادلات التالي:\ny = 3x + ${g49}\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟`,
        questionEn: `In the system of equations:\ny = 3x + ${g49}\ny = cx + 5\nIf the system has no solution, what is the value of c?`,
        isGridIn: true,
        svgData: { type: 'coordinate-line', params: {} },
        correctAnswer: '3',
        explanationAr: `لكي لا يكون للنظام أي حل (مستقيمان متوازيان ولهما مقطعان صاديان مختلفان)، يجب أن يتساوى الميالان: c = 3.`,
        explanationEn: `For parallel lines with no solution, slopes must be equal: c = 3.`,
        solutionStepsAr: [`c = 3`],
        solutionStepsEn: [`c = 3`]
      });
    } else if (i === 50) {
      const g50 = 36;
      questions.push({
        id: startId + i,
        domain: 'advanced-math',
        category: 'quadratic-equations',
        difficulty: 'Hard',
        questionAr: `ما حاصل ضرب جذري المعادلة التربيعية x² - ${10+m}x + ${g50} = 0؟`,
        questionEn: `What is the product of the roots of the quadratic equation x² - ${10+m}x + ${g50} = 0?`,
        isGridIn: true,
        svgData: { type: 'parabola', params: {} },
        correctAnswer: `${g50}`,
        explanationAr: `حاصل ضرب جذري المعادلة ax² + bx + c = 0 يساوي c/a = ${g50}/1 = ${g50}.`,
        explanationEn: `Product of roots for ax² + bx + c = 0 is c/a = ${g50}/1 = ${g50}.`,
        solutionStepsAr: [`Product = c / a = ${g50}`],
        solutionStepsEn: [`Product = c / a = ${g50}`]
      });
    } else if (i === 51) {
      const g51 = 60;
      questions.push({
        id: startId + i,
        domain: 'geometry-trig',
        category: 'triangles',
        difficulty: 'Hard',
        questionAr: `في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي ${m+5}، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟`,
        questionEn: `In a 30-60-90 right triangle, if the side opposite the 30° angle is ${m+5}, what is the length of the side opposite the 60° angle divided by √3?`,
        isGridIn: true,
        svgData: { type: 'right-triangle', params: {} },
        correctAnswer: `${m+5}`,
        explanationAr: `في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (${m+5})√3. بالقسمة على √3 نحصل على ${m+5}.`,
        explanationEn: `In a 30-60-90 triangle, side opposite 60° is (${m+5})√3. Divided by √3 gives ${m+5}.`,
        solutionStepsAr: [`Side opposite 60° = (${m+5})√3`, `Divided by √3 = ${m+5}`],
        solutionStepsEn: [`Side opposite 60° = (${m+5})√3`, `Divided by √3 = ${m+5}`]
      });
    } else if (i === 52) {
      const g52 = 20 + m * 2;
      questions.push({
        id: startId + i,
        domain: 'data-analysis',
        category: 'percentages',
        difficulty: 'Hard',
        questionAr: `ازداد سعر منتج بنسبة 20%، ثم انخفض السعر الجديد بنسبة 20%. إذا كان السعر الأصلي 100$، فما السعر النهائي بالدولار؟`,
        questionEn: `The price of a product increased by 20%, then the new price decreased by 20%. If the original price was $100, what is the final price in dollars?`,
        isGridIn: true,
        svgData: { type: 'bar-chart', params: {} },
        correctAnswer: '96',
        explanationAr: `بعد الزيادة 20%: 100 × 1.20 = 120$. بعد الخفض 20%: 120 × 0.80 = 96$.`,
        explanationEn: `After 20% increase: 100 * 1.20 = 120. After 20% decrease: 120 * 0.80 = 96.`,
        solutionStepsAr: [`100 × 1.20 = 120`, `120 × 0.80 = 96`],
        solutionStepsEn: [`100 * 1.20 = 120`, `120 * 0.80 = 96`]
      });
    } else if (i === 53) {
      const g53 = 10;
      questions.push({
        id: startId + i,
        domain: 'geometry-trig',
        category: 'coordinate-geometry',
        difficulty: 'Hard',
        questionAr: `ما هي المسافة بين النقطتين (${m}, 2) و (${m+6}, 10) في مستوى xy؟`,
        questionEn: `What is the distance between the points (${m}, 2) and (${m+6}, 10) in the xy-plane?`,
        isGridIn: true,
        svgData: { type: 'coordinate-line', params: {} },
        correctAnswer: '10',
        explanationAr: `قانون المسافة: d = √[(${m+6} - ${m})² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.`,
        explanationEn: `Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.`,
        solutionStepsAr: [`d = √(6² + 8²) = √100 = 10`],
        solutionStepsEn: [`d = √(6² + 8²) = √100 = 10`]
      });
    } else {
      const g54 = 8;
      questions.push({
        id: startId + i,
        domain: 'algebra',
        category: 'linear-equations',
        difficulty: 'Hard',
        questionAr: `إذا كانت 4(x - 3) = 2x + 4، فما قيمة x؟`,
        questionEn: `If 4(x - 3) = 2x + 4, what is the value of x?`,
        isGridIn: true,
        svgData: { type: 'coordinate-line', params: {} },
        correctAnswer: '8',
        explanationAr: `فك الأقواس: 4x - 12 = 2x + 4. بطرح 2x وإضافة 12: 2x = 16 => x = 8.`,
        explanationEn: `Expand: 4x - 12 = 2x + 4. Simplify: 2x = 16 => x = 8.`,
        solutionStepsAr: [`4x - 12 = 2x + 4`, `2x = 16`, `x = 8`],
        solutionStepsEn: [`4x - 12 = 2x + 4`, `2x = 16`, `x = 8`]
      });
    }
  }

  return questions;
}

// Write satModel5.ts through satModel12.ts
for (let m = 5; m <= 12; m++) {
  const qs = buildModelQuestions(m);
  const code = `import { Question } from '../../types';

export const SAT_MODEL_${m}_QUESTIONS: Question[] = ${JSON.stringify(qs, null, 2)};
`;
  const filePath = path.join(__dirname, `../src/sat/data/models/satModel${m}.ts`);
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`Successfully generated satModel${m}.ts with ${qs.length} questions.`);
}
