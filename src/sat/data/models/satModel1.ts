import { Question } from '../../types';

export const SAT_MODEL_1_QUESTIONS: Question[] = [
  {
    "id": 101,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث الموضح، PQ = QR وقياس الزاوية Q يساوي 132°. ما قيمة x؟",
    "questionEn": "In the triangle shown, PQ = QR and angle Q = 132°. What is the value of x?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 156",
        "textAr": "أ) 156"
      },
      {
        "textEn": "B) 66",
        "textAr": "ب) 66"
      },
      {
        "textEn": "C) 48",
        "textAr": "ج) 48"
      },
      {
        "textEn": "D) 24",
        "textAr": "د) 24"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "في المثلث متساوي الساقين حيث PQ = QR، تكون الزاويتان المقابلتان للضلعين المتساويين متساويتين، بالتالي قياس الزاوية P = قياس الزاوية R = x°. وبما أن قياس الزاوية P الموضح في الشكل هو 24°، فإن x = 24.",
    "explanationEn": "In an isosceles triangle with PQ = QR, the angles opposite to these sides are equal, so angle P = angle R = x°. Given angle P = 24°, x = 24.",
    "solutionStepsAr": [
      "في المثلث متساوي الساقين حيث PQ = QR، تكون الزاويتان المقابلتان للضلعين المتساويين متساويتين، بالتالي قياس الزاوية P = قياس الزاوية R = x°. وبما أن قياس الزاوية P الموضح في الشكل هو 24°، فإن x = 24."
    ],
    "solutionStepsEn": [
      "In an isosceles triangle with PQ = QR, the angles opposite to these sides are equal, so angle P = angle R = x°. Given angle P = 24°, x = 24."
    ]
  },
  {
    "id": 103,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "4x + 1 = 33\n\nأي معادلة مما يلي لها نفس حل المعادلة المعطاة؟",
    "questionEn": "4x + 1 = 33\n\nWhich equation has the same solution as the given equation?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4x = 32",
        "textAr": "أ) 4x = 32"
      },
      {
        "textEn": "B) 4x = 5",
        "textAr": "ب) 4x = 5"
      },
      {
        "textEn": "C) 4x = 1",
        "textAr": "ج) 4x = 1"
      },
      {
        "textEn": "D) 4x = -32",
        "textAr": "د) 4x = -32"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح 1 من طرفي المعادلة 4x + 1 = 33 نحصل على 4x = 32.",
    "explanationEn": "Subtracting 1 from both sides of 4x + 1 = 33 yields 4x = 32.",
    "solutionStepsAr": [
      "بطرح 1 من طرفي المعادلة 4x + 1 = 33 نحصل على 4x = 32."
    ],
    "solutionStepsEn": [
      "Subtracting 1 from both sides of 4x + 1 = 33 yields 4x = 32."
    ]
  },
  {
    "id": 105,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Easy",
    "questionAr": "بالنسبة للدالة الخطية f، فإن تمثيلها البياني y = f(x) في المستوى x-y له ميل يساوي 7 ويمر بالنقطة (0, 5). أي معادلة مما يلي تُعرّف f؟",
    "questionEn": "For the linear function f, the graph of y = f(x) in the xy-plane has a slope of 7 and passes through the point (0, 5). Which equation defines f?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 5x",
        "textAr": "أ) f(x) = 5x"
      },
      {
        "textEn": "B) f(x) = 35x",
        "textAr": "ب) f(x) = 35x"
      },
      {
        "textEn": "C) f(x) = 7x + 5",
        "textAr": "ج) f(x) = 7x + 5"
      },
      {
        "textEn": "D) f(x) = 12x + 5",
        "textAr": "د) f(x) = 12x + 5"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "صيغة الميل والمقطع للدالة الخطية هي f(x) = mx + b. بما أن الميل m = 7 والجزء المقطوع من محور y هو b = 5، فإن المعادلة هي f(x) = 7x + 5.",
    "explanationEn": "The slope-intercept form of a linear equation is f(x) = mx + b. With slope m = 7 and y-intercept b = 5, the equation is f(x) = 7x + 5.",
    "solutionStepsAr": [
      "صيغة الميل والمقطع للدالة الخطية هي f(x) = mx + b. بما أن الميل m = 7 والجزء المقطوع من محور y هو b = 5، فإن المعادلة هي f(x) = 7x + 5."
    ],
    "solutionStepsEn": [
      "The slope-intercept form of a linear equation is f(x) = mx + b. With slope m = 7 and y-intercept b = 5, the equation is f(x) = 7x + 5."
    ]
  },
  {
    "id": 107,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "8x² - 40 = 32\n\nما هو الحل الموجب للمعادلة المعطاة؟",
    "questionEn": "8x² - 40 = 32\n\nWhat is the positive solution to the given equation?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 3",
        "textAr": "أ) 3"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 9",
        "textAr": "ج) 9"
      },
      {
        "textEn": "D) 72",
        "textAr": "د) 72"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بإضافة 40 إلى الطرفين نحصل على 8x² = 72. بالقسمة على 8 نجد x² = 9. وبأخذ الجذر التربيعي الموجب نجد x = 3.",
    "explanationEn": "Adding 40 to both sides gives 8x² = 72. Dividing by 8 gives x² = 9. Taking the positive square root gives x = 3.",
    "solutionStepsAr": [
      "بإضافة 40 إلى الطرفين نحصل على 8x² = 72. بالقسمة على 8 نجد x² = 9. وبأخذ الجذر التربيعي الموجب نجد x = 3."
    ],
    "solutionStepsEn": [
      "Adding 40 to both sides gives 8x² = 72. Dividing by 8 gives x² = 9. Taking the positive square root gives x = 3."
    ]
  },
  {
    "id": 109,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "حضر 50 طفلاً مخيماً صيفياً وقُدمت لهم 4 أنواع من الشطائر. يوضح الجدول عدد الأطفال الذين اختاروا كل نوع.\n\nإذا تم اختيار أحدهم عشوائياً، فما احتمال اختيار طفل اختار شطيرة نباتية؟",
    "questionEn": "A total of 50 children attended a summer camp and were offered 4 types of sandwiches. The table shows the number of children who chose each type of sandwich.\n\nIf one of these children is selected at random, what is the probability of selecting a child who chose a vegetarian sandwich?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 9",
        "textAr": "أ) 100 / أ) 9/100"
      },
      {
        "textEn": "B) 9",
        "textAr": "ب) 50 / ب) 9/50"
      },
      {
        "textEn": "C) 1",
        "textAr": "ج) 4 / ج) 1/4"
      },
      {
        "textEn": "D) 9",
        "textAr": "د) 10 / د) 9/10"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "الاحتمال = (عدد الأطفال الذين اختاروا شطيرة نباتية) / (إجمالي عدد الأطفال) = 9/50.",
    "explanationEn": "Probability = (Number of vegetarian choices) / (Total children) = 9/50.",
    "solutionStepsAr": [
      "الاحتمال = (عدد الأطفال الذين اختاروا شطيرة نباتية) / (إجمالي عدد الأطفال) = 9/50."
    ],
    "solutionStepsEn": [
      "Probability = (Number of vegetarian choices) / (Total children) = 9/50."
    ]
  },
  {
    "id": 111,
    "domain": "data-analysis",
    "category": "data-interpretation",
    "difficulty": "Easy",
    "questionAr": "تزرع أمارة طماطم كرزية في حديقتها. هذا العام، حصدت 750 حبة طماطم كرزية وأعطت 10% منها لجارتها. كم حبة طماطم كرزية أعطت أمارة لجارتها؟",
    "questionEn": "Amara grows cherry tomatoes in her backyard. This year, she harvested 750 cherry tomatoes and gave 10% of them to her neighbor. How many of the harvested cherry tomatoes did Amara give to her neighbor?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "75",
    "explanationAr": "10% من 750 = 0.10 × 750 = 75 حبة.",
    "explanationEn": "10% of 750 = 0.10 × 750 = 75.",
    "solutionStepsAr": [
      "10% من 750 = 0.10 × 750 = 75 حبة."
    ],
    "solutionStepsEn": [
      "10% of 750 = 0.10 × 750 = 75."
    ]
  },
  {
    "id": 113,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Easy",
    "questionAr": "x + y = 125\nx + y + y = 155\n\nحل نظام المعادلات المعطى هو (x, y). ما قيمة y؟",
    "questionEn": "x + y = 125\nx + y + y = 155\n\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "30",
    "explanationAr": "بالتعويض عن x + y = 125 في المعادلة الثانية: 125 + y = 155 => y = 155 - 125 = 30.",
    "explanationEn": "Substitute x + y = 125 into the second equation: 125 + y = 155 => y = 155 - 125 = 30.",
    "solutionStepsAr": [
      "بالتعويض عن x + y = 125 في المعادلة الثانية: 125 + y = 155 => y = 155 - 125 = 30."
    ],
    "solutionStepsEn": [
      "Substitute x + y = 125 into the second equation: 125 + y = 155 => y = 155 - 125 = 30."
    ]
  },
  {
    "id": 115,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "في بطولة شطرنج، يحصل كل مشارك على نقطة واحدة لكل مباراة تنتهي بالتعادل و3 نقاط لكل مباراة يفوز بها. حصل مشارك معين على 41 نقطة. أي معادلة تمثل هذا الموقف، حيث d يمثل عدد المباريات التي تعادل فيها و w يمثل عدد المباريات التي فاز بها؟",
    "questionEn": "In a chess tournament, each participant earns 1 point for each game the participant plays that ends in a draw and 3 points for each game the participant wins. A certain participant in this tournament has earned 41 points. Which equation represents this situation, where d represents the number of games this participant has played that ended in a draw and w represents the number of games this participant has won?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) d + 3w = 41",
        "textAr": "أ) d + 3w = 41"
      },
      {
        "textEn": "B) 3d + w = 41",
        "textAr": "ب) 3d + w = 41"
      },
      {
        "textEn": "C) d + w",
        "textAr": "ج) 3 = 41 / ج) d + w/3 = 41"
      },
      {
        "textEn": "D) d",
        "textAr": "د) 3 + w = 41 / د) d/3 + w = 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع النقاط = 1 × d + 3 × w = d + 3w = 41.",
    "explanationEn": "Total points = 1 × d + 3 × w = d + 3w = 41.",
    "solutionStepsAr": [
      "مجموع النقاط = 1 × d + 3 × w = d + 3w = 41."
    ],
    "solutionStepsEn": [
      "Total points = 1 × d + 3 × w = d + 3w = 41."
    ]
  },
  {
    "id": 117,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Easy",
    "questionAr": "الدالة g مُعرّفة بالمعادلة g(x) = √x + 300. ما قيمة g(x) عندما x = 81؟",
    "questionEn": "The function g is defined by g(x) = √x + 300. What is the value of g(x) when x = 81?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 9",
        "textAr": "أ) 9"
      },
      {
        "textEn": "B) 300",
        "textAr": "ب) 300"
      },
      {
        "textEn": "C) 309",
        "textAr": "ج) 309"
      },
      {
        "textEn": "D) 381",
        "textAr": "د) 381"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "g(81) = √81 + 300 = 9 + 300 = 309.",
    "explanationEn": "g(81) = √81 + 300 = 9 + 300 = 309.",
    "solutionStepsAr": [
      "g(81) = √81 + 300 = 9 + 300 = 309."
    ],
    "solutionStepsEn": [
      "g(81) = √81 + 300 = 9 + 300 = 309."
    ]
  },
  {
    "id": 119,
    "domain": "data-analysis",
    "category": "data-interpretation",
    "difficulty": "Easy",
    "questionAr": "أرادت شركة تقديم خدمة كابل معرفة عدد عملائها البالغ عددهم 30,000 الذين سيرغبون في خطة خدمة جديدة. اختارت الشركة 300 عميل عشوائياً وسألت كل عميل عما إذا كان يرغب في الخطة الجديدة. من بين المستطلعين، أبدى 8 رغبتهم. أي مما يلي هو أفضل تقدير لإجمالي عدد العملاء الذين سيرغبون في خطة الخدمة الجديدة؟",
    "questionEn": "A cable provider wanted to know how many of its 30,000 customers would be interested in a new service plan. The provider selected 300 customers at random and asked each customer whether the customer would be interested in the new plan. Of those surveyed, 8 said they would be interested. Which of the following is the best estimate of the total number of customers who would be interested in the new service plan?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 8",
        "textAr": "أ) 8"
      },
      {
        "textEn": "B) 80",
        "textAr": "ب) 80"
      },
      {
        "textEn": "C) 800",
        "textAr": "ج) 800"
      },
      {
        "textEn": "D) 8,000",
        "textAr": "د) 8,000"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "النسبة المئوية للراغبين = 8 / 300. التقدير الإجمالي = (8 / 300) × 30,000 = 8 × 100 = 800 عميل.",
    "explanationEn": "Proportion interested = 8 / 300. Estimated total = (8 / 300) × 30,000 = 8 × 100 = 800.",
    "solutionStepsAr": [
      "النسبة المئوية للراغبين = 8 / 300. التقدير الإجمالي = (8 / 300) × 30,000 = 8 × 100 = 800 عميل."
    ],
    "solutionStepsEn": [
      "Proportion interested = 8 / 300. Estimated total = (8 / 300) × 30,000 = 8 × 100 = 800."
    ]
  },
  {
    "id": 121,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "أي تعبير مما يلي يطابق 64t²s³ - 56t³s؟",
    "questionEn": "Which expression is equivalent to 64t²s³ - 56t³s?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4ts(16s² - 14ts)",
        "textAr": "أ) 4ts(16s² - 14ts)"
      },
      {
        "textEn": "B) 4ts(16t²s² - 14t)",
        "textAr": "ب) 4ts(16t²s² - 14t)"
      },
      {
        "textEn": "C) 4t²s(16ts - 14s)",
        "textAr": "ج) 4t²s(16ts - 14s)"
      },
      {
        "textEn": "D) 4t²s(16s² - 14t)",
        "textAr": "د) 4t²s(16s² - 14t)"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "بإخراج العامل المشترك 4t²s نحصل على 4t²s(16s² - 14t) = 64t²s³ - 56t³s.",
    "explanationEn": "Factoring out 4t²s gives 4t²s(16s² - 14t) = 4t²s × 16s² - 4t²s × 14t = 64t²s³ - 56t³s.",
    "solutionStepsAr": [
      "بإخراج العامل المشترك 4t²s نحصل على 4t²s(16s² - 14t) = 64t²s³ - 56t³s."
    ],
    "solutionStepsEn": [
      "Factoring out 4t²s gives 4t²s(16s² - 14t) = 4t²s × 16s² - 4t²s × 14t = 64t²s³ - 56t³s."
    ]
  },
  {
    "id": 123,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "x + 5 = 14\ny = 4x² + 4\n\nفي أي نقطة (x, y) يتقاطع التمثيلان البيانيان للمعادلتين في النظام المعطى؟",
    "questionEn": "x + 5 = 14\ny = 4x² + 4\n\nAt what point (x, y) do the graphs of the equations in the given system intersect?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (9, 324)",
        "textAr": "أ) (9, 324)"
      },
      {
        "textEn": "B) (9, 328)",
        "textAr": "ب) (9, 328)"
      },
      {
        "textEn": "C) (14, 4)",
        "textAr": "ج) (14, 4)"
      },
      {
        "textEn": "D) (14, 788)",
        "textAr": "د) (14, 788)"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "من x + 5 = 14 نجد x = 9. بالتعويض عن x = 9 في y = 4x² + 4: y = 4(81) + 4 = 324 + 4 = 328. نقطة التقاطع هي (9, 328).",
    "explanationEn": "From x + 5 = 14, x = 9. Substitute x = 9 into y = 4x² + 4: y = 4(9²) + 4 = 4(81) + 4 = 324 + 4 = 328. The intersection point is (9, 328).",
    "solutionStepsAr": [
      "من x + 5 = 14 نجد x = 9. بالتعويض عن x = 9 في y = 4x² + 4: y = 4(81) + 4 = 324 + 4 = 328. نقطة التقاطع هي (9, 328)."
    ],
    "solutionStepsEn": [
      "From x + 5 = 14, x = 9. Substitute x = 9 into y = 4x² + 4: y = 4(9²) + 4 = 4(81) + 4 = 324 + 4 = 328. The intersection point is (9, 328)."
    ]
  },
  {
    "id": 125,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "8x + 11y = 170\n\nتعطي المعادلة التجميعات الممكنة لعدد سنتات \"Log Cabin\" لعام 2009 ذات الجودة الممتازة (x) وعدد سنتات لينكون لعام 1996 المختارة (y) في مجموعة بقيمة إجمالية 170 دولاراً. إذا كان هناك 6 سنتات من عام 1996، فكم سنت من عام 2009 يوجد في المجموعة؟",
    "questionEn": "8x + 11y = 170\n\nThe equation gives the possible combinations of the number of 2009 premium grade Log Cabin Pennies, x, and the number of 1996 select grade Lincoln Pennies, y, in a collection that is worth a total of $170. If there are 6 1996 select grade Lincoln Pennies in the collection, how many 2009 premium grade Log Cabin Pennies are in the collection?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "13",
    "explanationAr": "بالتعويض عن y = 6 في المعادلة: 8x + 11(6) = 170 => 8x + 66 = 170 => 8x = 104 => x = 13.",
    "explanationEn": "Substitute y = 6 into the equation: 8x + 11(6) = 170 => 8x + 66 = 170 => 8x = 104 => x = 13.",
    "solutionStepsAr": [
      "بالتعويض عن y = 6 في المعادلة: 8x + 11(6) = 170 => 8x + 66 = 170 => 8x = 104 => x = 13."
    ],
    "solutionStepsEn": [
      "Substitute y = 6 into the equation: 8x + 11(6) = 170 => 8x + 66 = 170 => 8x = 104 => x = 13."
    ]
  },
  {
    "id": 127,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تضاعف عدد سكان بلدة سميثفيل كل 75 سنة من عام 1659 إلى عام 1959. كان عدد سكان هذه البلدة 240,000 نسمة في عام 1959. كم كان عدد سكان هذه البلدة في عام 1659؟",
    "questionEn": "The population of the town of Smithville doubled every 75 years from 1659 to 1959. The population of this town was 240,000 in 1959. What was the population of this town in 1659?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "15000",
    "explanationAr": "الفترة الزمنية = 1959 - 1659 = 300 سنة. عدد فترات التضاعف = 300 / 75 = 4. عدد السكان عام 1659 = 240,000 / (2⁴) = 240,000 / 16 = 15,000 نسمة.",
    "explanationEn": "Time period = 1959 - 1659 = 300 years. Number of doubling periods = 300 / 75 = 4. Population in 1659 = 240,000 / (2⁴) = 240,000 / 16 = 15,000.",
    "solutionStepsAr": [
      "الفترة الزمنية = 1959 - 1659 = 300 سنة. عدد فترات التضاعف = 300 / 75 = 4. عدد السكان عام 1659 = 240,000 / (2⁴) = 240,000 / 16 = 15,000 نسمة."
    ],
    "solutionStepsEn": [
      "Time period = 1959 - 1659 = 300 years. Number of doubling periods = 300 / 75 = 4. Population in 1659 = 240,000 / (2⁴) = 240,000 / 16 = 15,000."
    ]
  },
  {
    "id": 129,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يوضح المخطط المبعثر العلاقة بين x و y. كما يُعرض خط أفضل مطابقة. أي مما يلي هو الأقرب لميل خط أفضل مطابقة هذا؟",
    "questionEn": "The scatterplot shows the relationship between x and y. A line of best fit is also shown. Which of the following is closest to the slope of this line of best fit?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 0.60",
        "textAr": "أ) 0.60"
      },
      {
        "textEn": "B) 2.50",
        "textAr": "ب) 2.50"
      },
      {
        "textEn": "C) 7.80",
        "textAr": "ج) 7.80"
      },
      {
        "textEn": "D) 8.00",
        "textAr": "د) 8.00"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "باختيار نقطتين على خط أفضل مطابقة مثل (1, 3.5) و (6, 6.5)، نجد الميل = (6.5 - 3.5) / (6 - 1) = 3 / 5 = 0.60.",
    "explanationEn": "Picking two points on the line of best fit, such as (1, 3.5) and (6, 6.5), slope = (6.5 - 3.5) / (6 - 1) = 3 / 5 = 0.60.",
    "solutionStepsAr": [
      "باختيار نقطتين على خط أفضل مطابقة مثل (1, 3.5) و (6, 6.5)، نجد الميل = (6.5 - 3.5) / (6 - 1) = 3 / 5 = 0.60."
    ],
    "solutionStepsEn": [
      "Picking two points on the line of best fit, such as (1, 3.5) and (6, 6.5), slope = (6.5 - 3.5) / (6 - 1) = 3 / 5 = 0.60."
    ]
  },
  {
    "id": 131,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "أي معادلة تربيعية مما يلي لها حل حقيقي واحد فقط؟",
    "questionEn": "Which quadratic equation has exactly one distinct real solution?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (x + 15)² = 0",
        "textAr": "أ) (x + 15)² = 0"
      },
      {
        "textEn": "B) (x + 15)² = -45",
        "textAr": "ب) (x + 15)² = -45"
      },
      {
        "textEn": "C) (x + 15)² = 45",
        "textAr": "ج) (x + 15)² = 45"
      },
      {
        "textEn": "D) (x + 15)² = 135",
        "textAr": "د) (x + 15)² = 135"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المعادلة من الصورة (x - h)² = k لها حل حقيقي واحد فقط عندما k = 0 (مما يعطي x = -15).",
    "explanationEn": "An equation of the form (x - h)² = k has exactly one distinct real solution when k = 0 (yielding x = -15).",
    "solutionStepsAr": [
      "المعادلة من الصورة (x - h)² = k لها حل حقيقي واحد فقط عندما k = 0 (مما يعطي x = -15)."
    ],
    "solutionStepsEn": [
      "An equation of the form (x - h)² = k has exactly one distinct real solution when k = 0 (yielding x = -15)."
    ]
  },
  {
    "id": 133,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "تكلفة استئجار حافلة من الشركة X هي 950 دولاراً لأول 3 ساعات و50 دولاراً إضافياً لكل ساعة بعد الساعات الثلاث الأولى. إذا كانت التكلفة الإجمالية لاستئجار الحافلة لـ t ساعة (حيث t > 3) هي 1,150 دولاراً، فأي معادلة تمثل هذا الموقف؟",
    "questionEn": "The cost to rent a bus from Company X is $950 for the first 3 hours and an additional $50 per hour for each hour after the first 3 hours. If the total cost to rent the bus from Company X for t hours, where t > 3, is $1,150, which equation represents this situation?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 950(t - 3) + 50t = 1,150",
        "textAr": "أ) 950(t - 3) + 50t = 1,150"
      },
      {
        "textEn": "B) 950(3t) + 50t = 1,150",
        "textAr": "ب) 950(3t) + 50t = 1,150"
      },
      {
        "textEn": "C) 950 + 50(t - 3) = 1,150",
        "textAr": "ج) 950 + 50(t - 3) = 1,150"
      },
      {
        "textEn": "D) 950 + 50(3t) = 1,150",
        "textAr": "د) 950 + 50(3t) = 1,150"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "التكلفة الثابتة لأول 3 ساعات هي 950 دولاراً. الساعات الإضافية فوق الـ 3 ساعات هي (t - 3) بسعر 50 دولاراً لكل ساعة. التكلفة الإجمالية = 950 + 50(t - 3) = 1,150.",
    "explanationEn": "The fixed cost for the first 3 hours is $950. The hours exceeding 3 are (t - 3), charged at $50/hour. Total cost = 950 + 50(t - 3) = 1,150.",
    "solutionStepsAr": [
      "التكلفة الثابتة لأول 3 ساعات هي 950 دولاراً. الساعات الإضافية فوق الـ 3 ساعات هي (t - 3) بسعر 50 دولاراً لكل ساعة. التكلفة الإجمالية = 950 + 50(t - 3) = 1,150."
    ],
    "solutionStepsEn": [
      "The fixed cost for the first 3 hours is $950. The hours exceeding 3 are (t - 3), charged at $50/hour. Total cost = 950 + 50(t - 3) = 1,150."
    ]
  },
  {
    "id": 135,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 53\n11x + 18y = 730\n\nتمثل المعادلتان المعطاتان الأعداد الممكنة لكراسي الشاطئ (x) والمظلات (y) المستأجرة، والمبلغ الإجمالي المستغرق. أي من التمثيل البياني يمثل هذا الموقف؟",
    "questionEn": "x + y = 53\n11x + 18y = 730\n\nThe given equations represent the possible numbers of beach chairs, x, and umbrellas, y, rented at a park last month and the total spent, in dollars, to rent those beach chairs and umbrellas. Which of the following graphs represents this situation?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Graph A (Positive slope line and negative slope line)",
        "textAr": "أ) الرسم البياني أ"
      },
      {
        "textEn": "B) Graph B (Line with intercepts (0,53),(53,0) and line with intercepts (0,40.6),(66.4,0))",
        "textAr": "ب) الرسم البياني ب"
      },
      {
        "textEn": "C) Graph C (Lines intersecting in quadrant II)",
        "textAr": "ج) الرسم البياني ج"
      },
      {
        "textEn": "D) Graph D (Horizontal line y = 53)",
        "textAr": "د) الرسم البياني د"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "المعادلة الأولى x + y = 53 تقطع المحورين عند (0, 53) و (53, 0). المعادلة الثانية تقطع y عند (0, 40.56) و x عند (66.36, 0). الرسم البياني (ب) يمثل كلا الخطين بدقة.",
    "explanationEn": "For x + y = 53, the intercepts are (0, 53) and (53, 0). For 11x + 18y = 730, the y-intercept is (0, 40.56) and x-intercept is (66.36, 0). Graph B correctly shows both lines in quadrant I.",
    "solutionStepsAr": [
      "المعادلة الأولى x + y = 53 تقطع المحورين عند (0, 53) و (53, 0). المعادلة الثانية تقطع y عند (0, 40.56) و x عند (66.36, 0). الرسم البياني (ب) يمثل كلا الخطين بدقة."
    ],
    "solutionStepsEn": [
      "For x + y = 53, the intercepts are (0, 53) and (53, 0). For 11x + 18y = 730, the y-intercept is (0, 40.56) and x-intercept is (66.36, 0). Graph B correctly shows both lines in quadrant I."
    ]
  },
  {
    "id": 137,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Medium",
    "questionAr": "في المثلث QRS الموضح، QR < RS والزاوية R قائمة. إذا كان RS = 18، فأي تعبير يمثل طول QS؟",
    "questionEn": "In triangle QRS shown, QR < RS and angle R = 90°. If RS = 18, which expression represents the length of QS?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 18 cos Q",
        "textAr": "أ) 18 cos Q"
      },
      {
        "textEn": "B) 18 sin Q",
        "textAr": "ب) 18 sin Q"
      },
      {
        "textEn": "C) 18",
        "textAr": "ج) cos Q / ج) 18 / cos Q"
      },
      {
        "textEn": "D) 18",
        "textAr": "د) sin Q / د) 18 / sin Q"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "في المثلث القائم QRS في R، جيب الزاوية sin Q = المقابل / الوتر = RS / QS = 18 / QS. بإعادة الترتيب نجد أن QS = 18 / sin Q.",
    "explanationEn": "In right triangle QRS with right angle R, sin Q = opposite / hypotenuse = RS / QS = 18 / QS. Rearranging gives QS = 18 / sin Q.",
    "solutionStepsAr": [
      "في المثلث القائم QRS في R، جيب الزاوية sin Q = المقابل / الوتر = RS / QS = 18 / QS. بإعادة الترتيب نجد أن QS = 18 / sin Q."
    ],
    "solutionStepsEn": [
      "In right triangle QRS with right angle R, sin Q = opposite / hypotenuse = RS / QS = 18 / QS. Rearranging gives QS = 18 / sin Q."
    ]
  },
  {
    "id": 139,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "الدائرة A في المستوى x-y لها المعادلة (x + 5)² + (y - 5)² = 25. الدائرة B لها نفس مركز الدائرة A. نصف قطر الدائرة B يساوي ضعفي نصف قطر الدائرة A. المعادلة التي تُعرّف الدائرة B هي (x + 5)² + (y - 5)² = k، حيث k ثابت. ما قيمة k؟",
    "questionEn": "Circle A in the xy-plane has the equation (x + 5)² + (y - 5)² = 25. Circle B has the same center as circle A. The radius of circle B is two times the radius of circle A. The equation defining circle B in the xy-plane is (x + 5)² + (y - 5)² = k, where k is a constant. What is the value of k?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "100",
    "explanationAr": "نصف قطر الدائرة A هو √25 = 5. نصف قطر الدائرة B هو 2 × 5 = 10. بالتالي k = 10² = 100.",
    "explanationEn": "Radius of circle A is √25 = 5. Radius of circle B is 2 × 5 = 10. Thus, k = 10² = 100.",
    "solutionStepsAr": [
      "نصف قطر الدائرة A هو √25 = 5. نصف قطر الدائرة B هو 2 × 5 = 10. بالتالي k = 10² = 100."
    ],
    "solutionStepsEn": [
      "Radius of circle A is √25 = 5. Radius of circle B is 2 × 5 = 10. Thus, k = 10² = 100."
    ]
  },
  {
    "id": 141,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "x² + 7x + 5 = 0\n\nيمكن كتابة أحد حلول المعادلة المعطاة على الصورة x = (-7 + √k) / 2، حيث k ثابت. ما قيمة k؟",
    "questionEn": "x² + 7x + 5 = 0\n\nOne solution to the given equation can be written as x = (-7 + √k) / 2, where k is a constant. What is the value of k?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "29",
    "explanationAr": "باستخدام القانون العام لحل المعادلة التربيعية: k = b² - 4ac = 7² - 4(1)(5) = 49 - 20 = 29.",
    "explanationEn": "Using the quadratic formula x = (-b + √(b² - 4ac)) / (2a): a = 1, b = 7, c = 5. Discriminant k = 7² - 4(1)(5) = 49 - 20 = 29.",
    "solutionStepsAr": [
      "باستخدام القانون العام لحل المعادلة التربيعية: k = b² - 4ac = 7² - 4(1)(5) = 49 - 20 = 29."
    ],
    "solutionStepsEn": [
      "Using the quadratic formula x = (-b + √(b² - 4ac)) / (2a): a = 1, b = 7, c = 5. Discriminant k = 7² - 4(1)(5) = 49 - 20 = 29."
    ]
  },
  {
    "id": 143,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "قاس عالم أطوال 240 من الفقمات الرمادية من جزيرة مسكيجيت و120 من جزيرة سابل. وجد أن متوسط طول 240 فقمة من مسكيجيت كان 88 بوصة والمتوسط لـ 120 فقمة من سابل كان 94 بوصة. ما متوسط طول جميع الفقمات الـ 360 التي قيست؟",
    "questionEn": "A scientist measured the lengths of 240 gray seals from Muskeget Island and 120 gray seals from Sable Island. The scientist determined that the mean length of the 240 gray seals from Muskeget Island was 88 inches and the mean length of the 120 gray seals from Sable Island was 94 inches. What was the mean length of all 360 gray seals the scientist measured for this study?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 89",
        "textAr": "أ) 89"
      },
      {
        "textEn": "B) 90",
        "textAr": "ب) 90"
      },
      {
        "textEn": "C) 91",
        "textAr": "ج) 91"
      },
      {
        "textEn": "D) 92",
        "textAr": "د) 92"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "المتوسط الموزون = (240 × 88 + 120 × 94) / 360 = (21,120 + 11,280) / 360 = 32,400 / 360 = 90 بوصة.",
    "explanationEn": "Weighted mean = (240 × 88 + 120 × 94) / (240 + 120) = (21,120 + 11,280) / 360 = 32,400 / 360 = 90 inches.",
    "solutionStepsAr": [
      "المتوسط الموزون = (240 × 88 + 120 × 94) / 360 = (21,120 + 11,280) / 360 = 32,400 / 360 = 90 بوصة."
    ],
    "solutionStepsEn": [
      "Weighted mean = (240 × 88 + 120 × 94) / (240 + 120) = (21,120 + 11,280) / 360 = 32,400 / 360 = 90 inches."
    ]
  },
  {
    "id": 145,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Hard",
    "questionAr": "التمثيل البياني للمعادلة y = f(x) + 4 موضح بالرسم. أي معادلة مما يلي تُعرّف الدالة f؟",
    "questionEn": "The graph of y = f(x) + 4 is shown. Which equation defines function f?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = -3ˣ + 1",
        "textAr": "أ) f(x) = -3ˣ + 1"
      },
      {
        "textEn": "B) f(x) = -3ˣ + 5",
        "textAr": "ب) f(x) = -3ˣ + 5"
      },
      {
        "textEn": "C) f(x) = -3ˣ + 8",
        "textAr": "ج) f(x) = -3ˣ + 8"
      },
      {
        "textEn": "D) f(x) = -3ˣ + 9",
        "textAr": "د) f(x) = -3ˣ + 9"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "من التمثيل البياني لـ y = f(x) + 4، عند x = 0 نجد y = 8 بالتالي f(0) + 4 = 8 أي f(0) = 4. باختبار f(x) = -3ˣ + 5: f(0) = -1 + 5 = 4. وعند x = 1 نجد y = 6 فتكون f(1) = 2. الاختيار ب هو الصحيح.",
    "explanationEn": "From the graph of y = f(x) + 4, at x = 0, y = 8 so f(0) + 4 = 8 => f(0) = 4. Testing f(x) = -3ˣ + 5: f(0) = -3⁰ + 5 = -1 + 5 = 4. At x = 1, y = 6 so f(1) = 2. f(1) = -3¹ + 5 = 2. Matches!",
    "solutionStepsAr": [
      "من التمثيل البياني لـ y = f(x) + 4، عند x = 0 نجد y = 8 بالتالي f(0) + 4 = 8 أي f(0) = 4. باختبار f(x) = -3ˣ + 5: f(0) = -1 + 5 = 4. وعند x = 1 نجد y = 6 فتكون f(1) = 2. الاختيار ب هو الصحيح."
    ],
    "solutionStepsEn": [
      "From the graph of y = f(x) + 4, at x = 0, y = 8 so f(0) + 4 = 8 => f(0) = 4. Testing f(x) = -3ˣ + 5: f(0) = -3⁰ + 5 = -1 + 5 = 4. At x = 1, y = 6 so f(1) = 2. f(1) = -3¹ + 5 = 2. Matches!"
    ]
  },
  {
    "id": 147,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Hard",
    "questionAr": "يتقاطع خطان في نقطة واحدة بالضبط مكونين زاويتين حادتين وزاويتين منفرجتين. قياس إحدى هذه الزوايا هو (9x - 140)°. أي مما يلي لا يمكن أن يكون مجموع قياسي أي زاويتين من هذه الزوايا؟",
    "questionEn": "Two lines intersect at exactly one point, forming two acute angles and two obtuse angles. The measure of one of these angles is (9x - 140)°. Which of the following could NOT be the sum of the measures of any two of these angles?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (-18x + 280)°",
        "textAr": "أ) (-18x + 280)°"
      },
      {
        "textEn": "B) (-18x + 640)°",
        "textAr": "ب) (-18x + 640)°"
      },
      {
        "textEn": "C) (18x - 280)°",
        "textAr": "ج) (18x - 280)°"
      },
      {
        "textEn": "D) 180°",
        "textAr": "د) 180°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "لتكن الزاوية θ = 9x - 140. الزاوية المجاورة لها = 180 - θ = 320 - 9x. المجموعات الممكنة لزاويتين: 2θ = 18x - 280 (ج)، أوالزاويتان المجاورتان = -18x + 640 (ب)، أوزاويتان متجاورتا = 180° (د). التعبير (-18x + 280)° غير ممكن.",
    "explanationEn": "Let angle θ = 9x - 140. Adjacent angle is 180 - (9x - 140) = 320 - 9x. Possible sums of 2 angles: 2θ = 18x - 280 (Choice C), 2(320 - 9x) = -18x + 640 (Choice B), θ + (180 - θ) = 180° (Choice D). Thus (-18x + 280)° is NOT possible.",
    "solutionStepsAr": [
      "لتكن الزاوية θ = 9x - 140. الزاوية المجاورة لها = 180 - θ = 320 - 9x. المجموعات الممكنة لزاويتين: 2θ = 18x - 280 (ج)، أوالزاويتان المجاورتان = -18x + 640 (ب)، أوزاويتان متجاورتا = 180° (د). التعبير (-18x + 280)° غير ممكن."
    ],
    "solutionStepsEn": [
      "Let angle θ = 9x - 140. Adjacent angle is 180 - (9x - 140) = 320 - 9x. Possible sums of 2 angles: 2θ = 18x - 280 (Choice C), 2(320 - 9x) = -18x + 640 (Choice B), θ + (180 - θ) = 180° (Choice D). Thus (-18x + 280)° is NOT possible."
    ]
  },
  {
    "id": 149,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "2x + 9y = 7\n\nالمعادلة المعطاة هي إحدى معادلتي نظام خطي. إذا كان للنظام حل واحد على الأقل، فأي من المعادلتين التاليتين يمكن أن تكون المعادلة الأخرى؟\nI. 3x + 13.5y = 10.5\nII. 3x - 13.5y = 10.5",
    "questionEn": "2x + 9y = 7\n\nThe given equation is one equation in a system of two linear equations. If the system of equations has at least one solution, which of the following equations could be the other equation in the system?\nI. 3x + 13.5y = 10.5\nII. 3x - 13.5y = 10.5",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) I only",
        "textAr": "أ) I فقط"
      },
      {
        "textEn": "B) II only",
        "textAr": "ب) II فقط"
      },
      {
        "textEn": "C) I and II",
        "textAr": "ج) I و II"
      },
      {
        "textEn": "D) Neither I nor II",
        "textAr": "د) لا I ولا II"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "بضرب 2x + 9y = 7 في 1.5 نحصل على المعادلة I (عدد لا نهائي من الحلول). بينما المعادلة II لها ميل مختلف فتحل معها في نقطة واحدة. كلاهما يعطي حلاً واحداً على الأقل.",
    "explanationEn": "Multiplying 2x + 9y = 7 by 1.5 gives 3x + 13.5y = 10.5 (infinitely many solutions, so at least one). Equation II has a different slope, intersecting the first line at exactly one point. Both I and II yield at least one solution.",
    "solutionStepsAr": [
      "بضرب 2x + 9y = 7 في 1.5 نحصل على المعادلة I (عدد لا نهائي من الحلول). بينما المعادلة II لها ميل مختلف فتحل معها في نقطة واحدة. كلاهما يعطي حلاً واحداً على الأقل."
    ],
    "solutionStepsEn": [
      "Multiplying 2x + 9y = 7 by 1.5 gives 3x + 13.5y = 10.5 (infinitely many solutions, so at least one). Equation II has a different slope, intersecting the first line at exactly one point. Both I and II yield at least one solution."
    ]
  },
  {
    "id": 151,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Hard",
    "questionAr": "منشور مستطيل قائم مساحة قاعدته 24t سنتيمتراً مربعاً (cm²). طول قاعدة المنشور هو 8/3 سم، وارتفاع المنشور هو 15 سم. أي تعبير يمثل مساحة السطح الكلية للمنشور بالسنتيمتر المربع؟",
    "questionEn": "A right rectangular prism has a base area of 24t square centimeters (cm²). The length of the base of the rectangular prism is 8/3 cm, and the height of the rectangular prism is 15 cm. Which expression represents the surface area, in cm², of the right rectangular prism?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 48t + 160",
        "textAr": "أ) 48t + 160"
      },
      {
        "textEn": "B) 318t + 80",
        "textAr": "ب) 318t + 80"
      },
      {
        "textEn": "C) 1,968t + 80",
        "textAr": "ج) 1,968t + 80"
      },
      {
        "textEn": "D) 360t",
        "textAr": "د) 360t"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "عرض القاعدة w = المساحة / الطول = 24t / (8/3) = 9t. محيط القاعدة = 2(8/3 + 9t) = 16/3 + 18t. مساحة السطح الكلية = 2 × مساحة القاعدة + المحيط × الارتفاع = 48t + (16/3 + 18t) × 15 = 318t + 80.",
    "explanationEn": "Base width w = Base Area / length = 24t / (8/3) = 9t. Base perimeter P = 2(8/3 + 9t) = 16/3 + 18t. Total Surface Area = 2 × Base Area + P × height = 2(24t) + (16/3 + 18t) × 15 = 48t + 80 + 270t = 318t + 80.",
    "solutionStepsAr": [
      "عرض القاعدة w = المساحة / الطول = 24t / (8/3) = 9t. محيط القاعدة = 2(8/3 + 9t) = 16/3 + 18t. مساحة السطح الكلية = 2 × مساحة القاعدة + المحيط × الارتفاع = 48t + (16/3 + 18t) × 15 = 318t + 80."
    ],
    "solutionStepsEn": [
      "Base width w = Base Area / length = 24t / (8/3) = 9t. Base perimeter P = 2(8/3 + 9t) = 16/3 + 18t. Total Surface Area = 2 × Base Area + P × height = 2(24t) + (16/3 + 18t) × 15 = 48t + 80 + 270t = 318t + 80."
    ]
  },
  {
    "id": 153,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Hard",
    "questionAr": "لسيارة معينة، تعطي الدالة الخطية f القدرة المتوقعة بقوة الحصان الكابحي (bhp) لسرعات المحرك بين 1,000 و 6,000 دورة في الدقيقة (rpm). وفقاً لهذه الدالة، فإن القدرة المتوقعة هي 433 bhp عند 3,331 rpm و 600 bhp عند 4,500 rpm. تُعرّف الدالة بالمعادلة f(x) = (1/7)(x - a) + 433، حيث a ثابت. ما قيمة a؟",
    "questionEn": "For a particular car, the linear function f gives the predicted power, in brake horsepower (bhp), for engine speeds between 1,000 revolutions per minute (rpm) and 6,000 rpm. According to this function, the car's predicted power is 433 bhp at an engine speed of 3,331 rpm and 600 bhp at an engine speed of 4,500 rpm. The equation f(x) = (1/7)(x - a) + 433 defines f, where x is the engine speed, in rpm, and a is a constant. What is the value of a?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "3331",
    "explanationAr": "نعلم أن f(3331) = 433. بالتعويض عن x = 3331 في الدالة: (1/7)(3331 - a) + 433 = 433 => (1/7)(3331 - a) = 0 => a = 3331.",
    "explanationEn": "Given f(3331) = 433. Substituting x = 3331 into f(x) = (1/7)(3331 - a) + 433 = 433 => (1/7)(3331 - a) = 0 => a = 3331.",
    "solutionStepsAr": [
      "نعلم أن f(3331) = 433. بالتعويض عن x = 3331 في الدالة: (1/7)(3331 - a) + 433 = 433 => (1/7)(3331 - a) = 0 => a = 3331."
    ],
    "solutionStepsEn": [
      "Given f(3331) = 433. Substituting x = 3331 into f(x) = (1/7)(3331 - a) + 433 = 433 => (1/7)(3331 - a) = 0 => a = 3331."
    ]
  },
  {
    "id": 155,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "أي تعبير مما يلي يطابق 6x + 5x + 4y؟",
    "questionEn": "Which expression is equivalent to 6x + 5x + 4y?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 15x",
        "textAr": "أ) 15x"
      },
      {
        "textEn": "B) 15y",
        "textAr": "ب) 15y"
      },
      {
        "textEn": "C) 11x + 4y",
        "textAr": "ج) 11x + 4y"
      },
      {
        "textEn": "D) 30x + 4y",
        "textAr": "د) 30x + 4y"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "بجمع الحدود المتشابهة: 6x + 5x = 11x، فتصبح 11x + 4y.",
    "explanationEn": "Combining like terms: 6x + 5x = 11x, so 6x + 5x + 4y = 11x + 4y.",
    "solutionStepsAr": [
      "بجمع الحدود المتشابهة: 6x + 5x = 11x، فتصبح 11x + 4y."
    ],
    "solutionStepsEn": [
      "Combining like terms: 6x + 5x = 11x, so 6x + 5x + 4y = 11x + 4y."
    ]
  },
  {
    "id": 157,
    "domain": "data-analysis",
    "category": "data-interpretation",
    "difficulty": "Easy",
    "questionAr": "لدراسة خصائص نجوم البحر في برك الماد، قاس الباحثون قطر كل نجم بحر لأقرب بوصة. يوضح المخطط النقطي القطر لكل نجم بحر.\n\nبناءً على المخطط النقطي، كم نجم بحر كان قطره 16 بوصة لأقرب بوصة؟",
    "questionEn": "To study the characteristics of sea stars in a group of tide pools, researchers measured the diameter of the sea stars within the tide pools. The dot plot gives the diameter, to the nearest inch, of each of the sea stars in these tide pools.\n\nBased on the dot plot, how many sea stars had a diameter, to the nearest inch, of 16 inches?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 16",
        "textAr": "أ) 16"
      },
      {
        "textEn": "B) 6",
        "textAr": "ب) 6"
      },
      {
        "textEn": "C) 4",
        "textAr": "ج) 4"
      },
      {
        "textEn": "D) 1",
        "textAr": "د) 1"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بعد النقاط الواقعة فوق القيمة 16 على المحور الأفقي نجد أن هناك 6 نقاط، أي 6 نجوم بحر.",
    "explanationEn": "Counting the dots above 16 on the horizontal axis shows there are 6 dots, meaning 6 sea stars.",
    "solutionStepsAr": [
      "بعد النقاط الواقعة فوق القيمة 16 على المحور الأفقي نجد أن هناك 6 نقاط، أي 6 نجوم بحر."
    ],
    "solutionStepsEn": [
      "Counting the dots above 16 on the horizontal axis shows there are 6 dots, meaning 6 sea stars."
    ]
  },
  {
    "id": 159,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Easy",
    "questionAr": "مستطيل طوله 56 بوصة وعرضه 28 بوصة. ما مساحة المستطيل بالبوصة المربعة؟",
    "questionEn": "A rectangle has a length of 56 inches and a width of 28 inches. What is the area, in square inches, of the rectangle?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 28",
        "textAr": "أ) 28"
      },
      {
        "textEn": "B) 84",
        "textAr": "ب) 84"
      },
      {
        "textEn": "C) 168",
        "textAr": "ج) 168"
      },
      {
        "textEn": "D) 1,568",
        "textAr": "د) 1,568"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "مساحة المستطيل = الطول × العرض = 56 × 28 = 1,568 بوصة مربعة.",
    "explanationEn": "Area of rectangle = length × width = 56 × 28 = 1,568 square inches.",
    "solutionStepsAr": [
      "مساحة المستطيل = الطول × العرض = 56 × 28 = 1,568 بوصة مربعة."
    ],
    "solutionStepsEn": [
      "Area of rectangle = length × width = 56 × 28 = 1,568 square inches."
    ]
  },
  {
    "id": 161,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Easy",
    "questionAr": "10x = 110\n6x - 63 = y\n\nحل نظام المعادلات المعطى هو (x, y). ما قيمة y؟",
    "questionEn": "10x = 110\n6x - 63 = y\n\nThe solution to the given system of equations is (x, y). What is the value of y?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 63",
        "textAr": "أ) 63"
      },
      {
        "textEn": "B) 11",
        "textAr": "ب) 11"
      },
      {
        "textEn": "C) 10",
        "textAr": "ج) 10"
      },
      {
        "textEn": "D) 3",
        "textAr": "د) 3"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "من 10x = 110 نجد x = 11. بالتعويض عن x = 11 في المعادلة الثانية: y = 6(11) - 63 = 66 - 63 = 3.",
    "explanationEn": "From 10x = 110, x = 11. Substitute x = 11 into second equation: y = 6(11) - 63 = 66 - 63 = 3.",
    "solutionStepsAr": [
      "من 10x = 110 نجد x = 11. بالتعويض عن x = 11 في المعادلة الثانية: y = 6(11) - 63 = 66 - 63 = 3."
    ],
    "solutionStepsEn": [
      "From 10x = 110, x = 11. Substitute x = 11 into second equation: y = 6(11) - 63 = 66 - 63 = 3."
    ]
  },
  {
    "id": 163,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Easy",
    "questionAr": "الدالة f مُعرّفة بالمعادلة f(x) = 9(2x + 3). لأي قيمة من x تكون f(x) = 63؟",
    "questionEn": "The function f is defined by f(x) = 9(2x + 3). For what value of x does f(x) = 63?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 2",
        "textAr": "أ) 2"
      },
      {
        "textEn": "B) 5",
        "textAr": "ب) 5"
      },
      {
        "textEn": "C) 7",
        "textAr": "ج) 7"
      },
      {
        "textEn": "D) 30",
        "textAr": "د) 30"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "9(2x + 3) = 63 => 2x + 3 = 7 => 2x = 4 => x = 2.",
    "explanationEn": "9(2x + 3) = 63 => 2x + 3 = 7 => 2x = 4 => x = 2.",
    "solutionStepsAr": [
      "9(2x + 3) = 63 => 2x + 3 = 7 => 2x = 4 => x = 2."
    ],
    "solutionStepsEn": [
      "9(2x + 3) = 63 => 2x + 3 = 7 => 2x = 4 => x = 2."
    ]
  },
  {
    "id": 165,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "10x = 86\n\nما قيمة x التي تعبر عن حل المعادلة المعطاة؟",
    "questionEn": "10x = 86\n\nWhat value of x is the solution to the given equation?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "8.6",
    "explanationAr": "x = 86 / 10 = 8.6.",
    "explanationEn": "x = 86 / 10 = 8.6.",
    "solutionStepsAr": [
      "x = 86 / 10 = 8.6."
    ],
    "solutionStepsEn": [
      "x = 86 / 10 = 8.6."
    ]
  },
  {
    "id": 167,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Easy",
    "questionAr": "y = 3,600(a)ˣ\n\nتعطي المعادلة المعطاة، حيث a ثابت موجب، عدد البكتيريا المتوقع y بعد x ساعة من القياس الأولي. وفقاً للمعادلة، كم كان عدد البكتيريا المتوقع المقاس أولياً؟",
    "questionEn": "y = 3,600(a)ˣ\n\nThe given equation, where a is a positive constant, gives the predicted number of bacteria, y, in a growth medium x hours after the number of bacteria was initially measured. According to the equation, what was the predicted number of bacteria initially measured in the growth medium?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "3600",
    "explanationAr": "القياس الأولي يكون عند x = 0: y = 3,600(a)⁰ = 3,600 بكتيريا.",
    "explanationEn": "Initial measurement corresponds to x = 0: y = 3,600(a)⁰ = 3,600.",
    "solutionStepsAr": [
      "القياس الأولي يكون عند x = 0: y = 3,600(a)⁰ = 3,600 بكتيريا."
    ],
    "solutionStepsEn": [
      "Initial measurement corresponds to x = 0: y = 3,600(a)⁰ = 3,600."
    ]
  },
  {
    "id": 169,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ذهب ليو لمحل تغليف لشراء حاويات وشريط لاصق. يملك ليو 15 دولاراً. تكلفة الحاوية الواحدة 1.87 دولار وتكلفة بكرة الشريط 2.40 دولار. أي متباينة تمثل العلاقة بين عدد الحاويات c وعدد بكرات الشريط t التي يمكن لليو شاؤها؟",
    "questionEn": "Leo goes to a packing store to buy containers and tape. Leo has $15. Each container costs $1.87 and each roll of tape costs $2.40. Which inequality represents the relationship between the number of containers, c, and the number of rolls of tape, t, Leo can buy?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 1.87c + 2.40t ≤ 15",
        "textAr": "أ) 1.87c + 2.40t ≤ 15"
      },
      {
        "textEn": "B) 1.87c + 2.40t ≥ 15",
        "textAr": "ب) 1.87c + 2.40t ≥ 15"
      },
      {
        "textEn": "C) 2.40c + 1.87t ≤ 15",
        "textAr": "ج) 2.40c + 1.87t ≤ 15"
      },
      {
        "textEn": "D) 2.40c + 1.87t ≥ 15",
        "textAr": "د) 2.40c + 1.87t ≥ 15"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "تكلفة c من الحاويات هي 1.87c وتكلفة t من الشريط هي 2.40t. ينبغي ألا تتجاوز التكلفة 15 دولاراً: 1.87c + 2.40t ≤ 15.",
    "explanationEn": "Cost of c containers is 1.87c and t rolls of tape is 2.40t. Total cost must be less than or equal to $15: 1.87c + 2.40t ≤ 15.",
    "solutionStepsAr": [
      "تكلفة c من الحاويات هي 1.87c وتكلفة t من الشريط هي 2.40t. ينبغي ألا تتجاوز التكلفة 15 دولاراً: 1.87c + 2.40t ≤ 15."
    ],
    "solutionStepsEn": [
      "Cost of c containers is 1.87c and t rolls of tape is 2.40t. Total cost must be less than or equal to $15: 1.87c + 2.40t ≤ 15."
    ]
  },
  {
    "id": 171,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Easy",
    "questionAr": "التمثيل البياني للدالة f موضح حيث y = f(x). أي مما يلي يصف الدالة f بشكل أفضل؟",
    "questionEn": "The graph of the function f is shown, where y = f(x). Which of the following best describes the function f?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Decreasing exponential",
        "textAr": "أ) أُسية متناقصة"
      },
      {
        "textEn": "B) Increasing exponential",
        "textAr": "ب) أُسية متزايدة"
      },
      {
        "textEn": "C) Decreasing linear",
        "textAr": "ج) خطية متناقصة"
      },
      {
        "textEn": "D) Increasing linear",
        "textAr": "د) خطية متزايدة"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "ينحني التمثيل البياني لأعلى مع تزايد قيم x، مما يمثل دالة أُسية متزايدة.",
    "explanationEn": "The graph curves upward as x increases, which represents an increasing exponential function.",
    "solutionStepsAr": [
      "ينحني التمثيل البياني لأعلى مع تزايد قيم x، مما يمثل دالة أُسية متزايدة."
    ],
    "solutionStepsEn": [
      "The graph curves upward as x increases, which represents an increasing exponential function."
    ]
  },
  {
    "id": 173,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "تمثل المنطقة المظللة في التمثيل البياني جميع الحلول لأي متباينة مما يلي؟",
    "questionEn": "The shaded region shown in the graph represents all the solutions to which inequality?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) x ≤ 36",
        "textAr": "أ) x ≤ 36"
      },
      {
        "textEn": "B) x ≥ 36",
        "textAr": "ب) x ≥ 36"
      },
      {
        "textEn": "C) y ≤ 36",
        "textAr": "ج) y ≤ 36"
      },
      {
        "textEn": "D) y ≥ 36",
        "textAr": "د) y ≥ 36"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "الخط الأفقي يقع عند y = 36 والمنطقة المظللة تقع فوقه، مما يمثل المتباينة y ≥ 36.",
    "explanationEn": "The horizontal line is at y = 36 and the shaded area is above this line, which corresponds to y ≥ 36.",
    "solutionStepsAr": [
      "الخط الأفقي يقع عند y = 36 والمنطقة المظللة تقع فوقه، مما يمثل المتباينة y ≥ 36."
    ],
    "solutionStepsEn": [
      "The horizontal line is at y = 36 and the shaded area is above this line, which corresponds to y ≥ 36."
    ]
  },
  {
    "id": 175,
    "domain": "data-analysis",
    "category": "data-interpretation",
    "difficulty": "Medium",
    "questionAr": "يوجد 240 لاعباً في بطولة تنس تتضمن 4 جولات. يخرج الخاسر في كل جولة ويتأهل الفائز. أي معادلة تعطي عدد اللاعبين المبعدين p في نهاية الجولة r، حيث r ≤ 4؟",
    "questionEn": "There are 240 players in a tennis competition that includes 4 rounds of matches. Each player in the competition will play a match against another player in round 1. At the end of each round, the player who loses the match is eliminated and the player who won the match advances to the next round to play a match against another winning player. Which equation gives the number of players, p, eliminated at the end of round r, where r ≤ 4?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) p = 15(1",
        "textAr": "أ) 2)ʳ / أ) p = 15(1/2)ʳ"
      },
      {
        "textEn": "B) p = 15(2)ʳ",
        "textAr": "ب) p = 15(2)ʳ"
      },
      {
        "textEn": "C) p = 240(1",
        "textAr": "ج) 2)ʳ / ج) p = 240(1/2)ʳ"
      },
      {
        "textEn": "D) p = 240(2)ʳ",
        "textAr": "د) p = 240(2)ʳ"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "في الجولة الأولى يُستبعد 120 لاعباً (نصف 240). وبشكل عام في الجولة r يُستبعد p = 240(1/2)ʳ.",
    "explanationEn": "In round 1, half of 240 = 120 players are eliminated. In round r, p = 240(1/2)ʳ.",
    "solutionStepsAr": [
      "في الجولة الأولى يُستبعد 120 لاعباً (نصف 240). وبشكل عام في الجولة r يُستبعد p = 240(1/2)ʳ."
    ],
    "solutionStepsEn": [
      "In round 1, half of 240 = 120 players are eliminated. In round r, p = 240(1/2)ʳ."
    ]
  },
  {
    "id": 177,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "المستقيم k مُعرّف بالمعادلة y = 6x + 4. المستقيم j يوازي المستقيم k ويمر بالنقطة (0, 5). أي معادلة تُعرّف المستقيم j؟",
    "questionEn": "Line k is defined by y = 6x + 4. Line j is parallel to line k in the xy-plane and passes through the point (0, 5). Which equation defines line j?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) y = 6x + 5",
        "textAr": "أ) y = 6x + 5"
      },
      {
        "textEn": "B) y = -5x + 5",
        "textAr": "ب) y = -5x + 5"
      },
      {
        "textEn": "C) y = -6x + 5",
        "textAr": "ج) y = -6x + 5"
      },
      {
        "textEn": "D) y = 5x + 5",
        "textAr": "د) y = 5x + 5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المستقيمات المتوازية لها نفس الميل، بالتالي ميل j هو 6. وبما أنه يمر بالنقطة (0, 5)، فإن معادلته y = 6x + 5.",
    "explanationEn": "Parallel lines have equal slopes, so line j has slope 6. Since it passes through (0, 5), its equation is y = 6x + 5.",
    "solutionStepsAr": [
      "المستقيمات المتوازية لها نفس الميل، بالتالي ميل j هو 6. وبما أنه يمر بالنقطة (0, 5)، فإن معادلته y = 6x + 5."
    ],
    "solutionStepsEn": [
      "Parallel lines have equal slopes, so line j has slope 6. Since it passes through (0, 5), its equation is y = 6x + 5."
    ]
  },
  {
    "id": 179,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Medium",
    "questionAr": "في المثلث القائم الموضح، طولا الساقين متساويان ويساويان 15، والزاوية الحادة هي x°. ما قيمة x؟",
    "questionEn": "In the triangle shown, legs are both equal to 15, and the angle between hypotenuse and leg is x°. What is the value of x?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "45",
    "explanationAr": "بما أن الساقين متساويان (15)، فإن المثلث قائم ومتساوي الساقين، بالتالي الزوايا الحادة تساوي 45°.",
    "explanationEn": "Since both legs are equal to 15, the triangle is an isosceles right triangle, so the acute angles are x° = 45°.",
    "solutionStepsAr": [
      "بما أن الساقين متساويان (15)، فإن المثلث قائم ومتساوي الساقين، بالتالي الزوايا الحادة تساوي 45°."
    ],
    "solutionStepsEn": [
      "Since both legs are equal to 15, the triangle is an isosceles right triangle, so the acute angles are x° = 45°."
    ]
  },
  {
    "id": 181,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "ما هو نصف قطر الدائرة في المستوى x-y المعرفة بالمعادلة (x + 2)² + (y + 5)² = 169؟",
    "questionEn": "What is the radius of the circle in the xy-plane defined by (x + 2)² + (y + 5)² = 169?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "13",
    "explanationAr": "الصيغة القياسية لمعادلة الدائرة هي (x - h)² + (y - k)² = r². هنا r² = 169، بالتالي نصف القطر r = √169 = 13.",
    "explanationEn": "The standard equation of a circle is (x - h)² + (y - k)² = r². Here r² = 169, so the radius r = √169 = 13.",
    "solutionStepsAr": [
      "الصيغة القياسية لمعادلة الدائرة هي (x - h)² + (y - k)² = r². هنا r² = 169، بالتالي نصف القطر r = √169 = 13."
    ],
    "solutionStepsEn": [
      "The standard equation of a circle is (x - h)² + (y - k)² = r². Here r² = 169, so the radius r = √169 = 13."
    ]
  },
  {
    "id": 183,
    "domain": "data-analysis",
    "category": "data-interpretation",
    "difficulty": "Medium",
    "questionAr": "يوضح التمثيل البياني درجة الغليان المقدرة y لنوع من البارافين ذي وزن جزيئي x. أي عبارة هي أفضل تفسير للنقطة (149.02, 186.05)؟",
    "questionEn": "The graph shows the estimated boiling point y, in degrees Celsius, of a normal paraffin with a molecular weight of x grams per mole, where 1 ≤ x ≤ 280. Which statement is the best interpretation of the point (149.02, 186.05)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) A normal paraffin with a molecular weight of 186.05 grams per mole has an estimated boiling point of 149.02 degrees Celsius.",
        "textAr": "أ) البارافين ذو الوزن الجزيئي 186.05 غرام/مول له درجة غليان مقدرة 149.02 درجة مئوية."
      },
      {
        "textEn": "B) A normal paraffin with a molecular weight of 149.02 grams per mole has an estimated boiling point of 186.05 degrees Celsius.",
        "textAr": "ب) البارافين ذو الوزن الجزيئي 149.02 غرام/مول له درجة غليان مقدرة 186.05 درجة مئوية."
      },
      {
        "textEn": "C) The minimum estimated boiling point for normal paraffins corresponds to a paraffin with a molecular weight of 149.02 grams per mole.",
        "textAr": "ج) الحد الأدنى لدرجة الغليان هو 149.02."
      },
      {
        "textEn": "D) The maximum estimated boiling point for normal paraffins corresponds to a paraffin with a molecular weight of 149.02 grams per mole.",
        "textAr": "د) الحد الأقصى لدرجة الغليان هو 149.02."
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "الإحداثي x يمثل الوزن الجزيئي (149.02 غرام/مول) والإحداثي y يمثل درجة الغليان (186.05 درجة مئوية).",
    "explanationEn": "The x-coordinate is molecular weight (149.02 g/mol) and y-coordinate is estimated boiling point (186.05 °C).",
    "solutionStepsAr": [
      "الإحداثي x يمثل الوزن الجزيئي (149.02 غرام/مول) والإحداثي y يمثل درجة الغليان (186.05 درجة مئوية)."
    ],
    "solutionStepsEn": [
      "The x-coordinate is molecular weight (149.02 g/mol) and y-coordinate is estimated boiling point (186.05 °C)."
    ]
  },
  {
    "id": 185,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "بالنسبة لدالة الكثير الحدود f، يمر تمثيلها البياني بالنقات (-5, 0) و (1, 0) و (4, 0). أي مما يلي يجب أن يكون عاملاً من عوامل f(x)؟",
    "questionEn": "For the polynomial function f, the graph of y = f(x) in the xy-plane passes through the points (-5, 0), (1, 0), and (4, 0). Which of the following must be a factor of f(x)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) x + 1",
        "textAr": "أ) x + 1"
      },
      {
        "textEn": "B) x + 4",
        "textAr": "ب) x + 4"
      },
      {
        "textEn": "C) x - 1",
        "textAr": "ج) x - 1"
      },
      {
        "textEn": "D) x - 5",
        "textAr": "د) x - 5"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "بما أن f(1) = 0، فإن x = 1 جذر للدالة، بالتالي (x - 1) هو عامل من عوامل الكثير الحدود.",
    "explanationEn": "Since f(1) = 0, x = 1 is a root, so (x - 1) must be a factor of f(x).",
    "solutionStepsAr": [
      "بما أن f(1) = 0، فإن x = 1 جذر للدالة، بالتالي (x - 1) هو عامل من عوامل الكثير الحدود."
    ],
    "solutionStepsEn": [
      "Since f(1) = 0, x = 1 is a root, so (x - 1) must be a factor of f(x)."
    ]
  },
  {
    "id": 187,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "بالنسبة للدالة الخطية g، يوضح الجدول أربع قيم لـ x والقيم المقابلة لها g(x). يمكن كتابة الدالة بصورة g(x) = mx + b. ما قيمة b؟",
    "questionEn": "For the linear function g, the table shows four values of x and their corresponding values of g(x). The function can be written as g(x) = mx + b, where m and b are constants. What is the value of b?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4",
        "textAr": "أ) 4"
      },
      {
        "textEn": "B) 16",
        "textAr": "ب) 16"
      },
      {
        "textEn": "C) 32",
        "textAr": "ج) 32"
      },
      {
        "textEn": "D) 36",
        "textAr": "د) 36"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "الميل m = (28 - 32) / (2 - 1) = -4. باستخدام النقطة (1, 32): 32 = -4(1) + b => b = 36.",
    "explanationEn": "Slope m = (28 - 32) / (2 - 1) = -4. Using g(1) = 32: 32 = -4(1) + b => b = 36.",
    "solutionStepsAr": [
      "الميل m = (28 - 32) / (2 - 1) = -4. باستخدام النقطة (1, 32): 32 = -4(1) + b => b = 36."
    ],
    "solutionStepsEn": [
      "Slope m = (28 - 32) / (2 - 1) = -4. Using g(1) = 32: 32 = -4(1) + b => b = 36."
    ]
  },
  {
    "id": 189,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "بالنسبة للدالة التربيعية f، يوضح الجدول ثلاث قيم لـ x والقيم المقابلة لها f(x). أي معادلة تُعرّف f؟",
    "questionEn": "For the quadratic function f, the table shows three values of x and their corresponding values of f(x). Which equation defines f?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = (x - 24)(x - 30) + 4",
        "textAr": "أ) f(x) = (x - 24)(x - 30) + 4"
      },
      {
        "textEn": "B) f(x) = (x - 24)(x - 30) - 8",
        "textAr": "ب) f(x) = (x - 24)(x - 30) - 8"
      },
      {
        "textEn": "C) f(x) = (x - 8)(x - 32) + 32",
        "textAr": "ج) f(x) = (x - 8)(x - 32) + 32"
      },
      {
        "textEn": "D) f(x) = (x - 8)(x - 32) - 32",
        "textAr": "د) f(x) = (x - 8)(x - 32) - 32"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بما أن f(24) = f(30) = -8، فإن f(x) = a(x - 24)(x - 30) - 8. وبالتعويض بالنقطة (32, 8) نجد أن a = 1.",
    "explanationEn": "Since f(24) = f(30) = -8, the roots of f(x) + 8 = 0 are 24 and 30, so f(x) = a(x - 24)(x - 30) - 8. Checking (32, 8): 8 = a(32-24)(32-30) - 8 => 16 = 16a => a = 1.",
    "solutionStepsAr": [
      "بما أن f(24) = f(30) = -8، فإن f(x) = a(x - 24)(x - 30) - 8. وبالتعويض بالنقطة (32, 8) نجد أن a = 1."
    ],
    "solutionStepsEn": [
      "Since f(24) = f(30) = -8, the roots of f(x) + 8 = 0 are 24 and 30, so f(x) = a(x - 24)(x - 30) - 8. Checking (32, 8): 8 = a(32-24)(32-30) - 8 => 16 = 16a => a = 1."
    ]
  },
  {
    "id": 191,
    "domain": "data-analysis",
    "category": "data-interpretation",
    "difficulty": "Hard",
    "questionAr": "يحتوي عنقود نجمي مفتوح على نجوم من النوع M ونجوم من النوع K. الكتلة الإجمالية هي 127,882 كويتاغرام. يوضح الرسم البياني التجميعات الممكنة لعدد النجوم M (x) و K (y). أي مما يلي هو الأقرب للكتلة المقدرة لكل نجم M؟",
    "questionEn": "A certain open star cluster contains M-type stars and K-type stars. The estimated total mass of M-type and K-type stars in this open star cluster is 127,882 quettagrams. The graph shown models the possible combinations of the number of M-type stars, x, and K-type stars, y, that could be in this open star cluster if all the M-type stars have the same estimated mass and all the K-type stars have the same estimated mass. Based on the graph, which of the following is closest to the estimated mass, in quettagrams, of each M-type star in this cluster?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 811",
        "textAr": "أ) 811"
      },
      {
        "textEn": "B) 938",
        "textAr": "ب) 938"
      },
      {
        "textEn": "C) 51,904",
        "textAr": "ج) 51,904"
      },
      {
        "textEn": "D) 75,978",
        "textAr": "د) 75,978"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "عندما y = 0 (لا توجد نجوم K)، المقطع x يكون حوالي 157.7. كتلة النجم الواحد من نوع M = 127,882 / 157.7 ≈ 811 كويتاغرام.",
    "explanationEn": "When y = 0 (no K-type stars), the x-intercept is around 157.7. Mass per M-type star = 127,882 / 157.7 ≈ 811 quettagrams.",
    "solutionStepsAr": [
      "عندما y = 0 (لا توجد نجوم K)، المقطع x يكون حوالي 157.7. كتلة النجم الواحد من نوع M = 127,882 / 157.7 ≈ 811 كويتاغرام."
    ],
    "solutionStepsEn": [
      "When y = 0 (no K-type stars), the x-intercept is around 157.7. Mass per M-type star = 127,882 / 157.7 ≈ 811 quettagrams."
    ]
  },
  {
    "id": 193,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Hard",
    "questionAr": "∛(p²) = t^(9/7)\n\nفي المعادلة المعطاة p > 1 و t > 1. إذا كان t = p^(3n - 1) حيث n ثابت، فما قيمة n؟",
    "questionEn": "∛(p²) = t^(9/7)\n\nIn the given equation, p > 1 and t > 1. If t = p^(3n - 1), where n is a constant, what is the value of n?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "41/81",
    "explanationAr": "p^(2/3) = t^(9/7) => t = p^(14/27). بالتالي 3n - 1 = 14/27 => 3n = 41/27 => n = 41/81.",
    "explanationEn": "p^(2/3) = t^(9/7) => t = (p^(2/3))^(7/9) = p^(14/27). Thus 3n - 1 = 14/27 => 3n = 41/27 => n = 41/81.",
    "solutionStepsAr": [
      "p^(2/3) = t^(9/7) => t = p^(14/27). بالتالي 3n - 1 = 14/27 => 3n = 41/27 => n = 41/81."
    ],
    "solutionStepsEn": [
      "p^(2/3) = t^(9/7) => t = (p^(2/3))^(7/9) = p^(14/27). Thus 3n - 1 = 14/27 => 3n = 41/27 => n = 41/81."
    ]
  },
  {
    "id": 195,
    "domain": "data-analysis",
    "category": "ratios-proportions",
    "difficulty": "Hard",
    "questionAr": "العدد a أقل بنسبة 55% من العدد b. العدد b أكبر بنسبة 320% من العدد 160. ما قيمة a؟",
    "questionEn": "The number a is 55% less than the number b. The number b is 320% greater than 160. What is the value of a?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "302.4",
    "explanationAr": "b = 160 × (1 + 3.20) = 160 × 4.2 = 672. بالتالي a = 672 × (1 - 0.55) = 672 × 0.45 = 302.4.",
    "explanationEn": "b = 160 × (1 + 3.20) = 160 × 4.2 = 672. Then a = 672 × (1 - 0.55) = 672 × 0.45 = 302.4.",
    "solutionStepsAr": [
      "b = 160 × (1 + 3.20) = 160 × 4.2 = 672. بالتالي a = 672 × (1 - 0.55) = 672 × 0.45 = 302.4."
    ],
    "solutionStepsEn": [
      "b = 160 × (1 + 3.20) = 160 × 4.2 = 672. Then a = 672 × (1 - 0.55) = 672 × 0.45 = 302.4."
    ]
  },
  {
    "id": 197,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "f(x) = -6x² + 60x - 126\n\nالدالة f مُعرّفة بالمعادلة المعطاة. أي صيغة مكافئة للمعادلة تعرض القيمة العظمى للدالة كثابت أو معامل؟",
    "questionEn": "f(x) = -6x² + 60x - 126\n\nThe function f is defined by the given equation. Which of the following equivalent forms of the equation displays the maximum value of the function as a constant or coefficient?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = -6x² + 42x + 18x - 126",
        "textAr": "أ) f(x) = -6x² + 42x + 18x - 126"
      },
      {
        "textEn": "B) f(x) = -6x(x - 7) + 18(x - 7)",
        "textAr": "ب) f(x) = -6x(x - 7) + 18(x - 7)"
      },
      {
        "textEn": "C) f(x) = -6(x - 5)² + 24",
        "textAr": "ج) f(x) = -6(x - 5)² + 24"
      },
      {
        "textEn": "D) f(x) = -6(x - 7)(x - 3)",
        "textAr": "د) f(x) = -6(x - 7)(x - 3)"
      }
    ],
    "correctAnswer": 2,
    "explanationAr": "بإكمال المربع: f(x) = -6(x - 5)² + 24. صيغة الرأس تعرض القيمة العظمى 24 كعدد ثابت.",
    "explanationEn": "Completing the square: f(x) = -6(x² - 10x) - 126 = -6((x - 5)² - 25) - 126 = -6(x - 5)² + 24. The vertex form displays the maximum value 24 as a constant.",
    "solutionStepsAr": [
      "بإكمال المربع: f(x) = -6(x - 5)² + 24. صيغة الرأس تعرض القيمة العظمى 24 كعدد ثابت."
    ],
    "solutionStepsEn": [
      "Completing the square: f(x) = -6(x² - 10x) - 126 = -6((x - 5)² - 25) - 126 = -6(x - 5)² + 24. The vertex form displays the maximum value 24 as a constant."
    ]
  },
  {
    "id": 199,
    "domain": "geometry-trig",
    "category": "right-trig",
    "difficulty": "Hard",
    "questionAr": "في الشكل الموضح، يتقاطع WZ و XY في النقطة Q، حيث YQ = 21 و WQ = 70 و WX = 60 و XQ = 120. ما طول YZ؟",
    "questionEn": "In the figure shown, WZ and XY intersect at point Q, YQ = 21, WQ = 70, WX = 60, and XQ = 120. What is the length of YZ?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 18",
        "textAr": "أ) 18"
      },
      {
        "textEn": "B) 36",
        "textAr": "ب) 36"
      },
      {
        "textEn": "C) 120",
        "textAr": "ج) 120"
      },
      {
        "textEn": "D) 200",
        "textAr": "د) 200"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "من تشابه المثلثين △XQW ~ △ZQY نجد أن نسبة الأضلاع المتناظرة: WX / YZ = WQ / YQ => 60 / YZ = 70 / 21 => YZ = 60 × (21 / 70) = 18.",
    "explanationEn": "Since angle W = angle Y = a° and vertical angles at Q are equal, △XQW ~ △ZQY. Ratio of corresponding sides: WX / YZ = WQ / YQ => 60 / YZ = 70 / 21 => YZ = 60 × (21 / 70) = 18.",
    "solutionStepsAr": [
      "من تشابه المثلثين △XQW ~ △ZQY نجد أن نسبة الأضلاع المتناظرة: WX / YZ = WQ / YQ => 60 / YZ = 70 / 21 => YZ = 60 × (21 / 70) = 18."
    ],
    "solutionStepsEn": [
      "Since angle W = angle Y = a° and vertical angles at Q are equal, △XQW ~ △ZQY. Ratio of corresponding sides: WX / YZ = WQ / YQ => 60 / YZ = 70 / 21 => YZ = 60 × (21 / 70) = 18."
    ]
  },
  {
    "id": 201,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Hard",
    "questionAr": "52(x³ + 64)(x⁴ - 81) = 0\n\nكم حلاً حقيقياً مختلفاً للمعادلة المعطاة؟",
    "questionEn": "52(x³ + 64)(x⁴ - 81) = 0\n\nHow many distinct real solutions does the given equation have?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Exactly two",
        "textAr": "أ) حلان بالضبط"
      },
      {
        "textEn": "B) Exactly three",
        "textAr": "ب) ثلاثة حلول بالضبط"
      },
      {
        "textEn": "C) Exactly five",
        "textAr": "ج) خمسة حلول بالضبط"
      },
      {
        "textEn": "D) Exactly seven",
        "textAr": "د) سبعة حلول بالضبط"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "من x³ + 64 = 0 نجد x = -4 (حل واحد). ومن x⁴ - 81 = 0 نجد x = 3 و x = -3 (حلان). إجمالي الحلول الحقيقية المختلفة = 3.",
    "explanationEn": "x³ + 64 = 0 gives x = -4 (1 real solution). x⁴ - 81 = 0 gives x² = 9 => x = 3 and x = -3 (2 real solutions). Total distinct real solutions = 1 + 2 = 3.",
    "solutionStepsAr": [
      "من x³ + 64 = 0 نجد x = -4 (حل واحد). ومن x⁴ - 81 = 0 نجد x = 3 و x = -3 (حلان). إجمالي الحلول الحقيقية المختلفة = 3."
    ],
    "solutionStepsEn": [
      "x³ + 64 = 0 gives x = -4 (1 real solution). x⁴ - 81 = 0 gives x² = 9 => x = 3 and x = -3 (2 real solutions). Total distinct real solutions = 1 + 2 = 3."
    ]
  },
  {
    "id": 203,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "يمثل المدرج التكراري مجموعة البيانات A المكونة من 50 قيمة. أضيفت قيمة جديدة 18 لتكوين المجموعة B المكونة من 51 قيمة. أي مما يلي يجب أن يكون صحيحاً؟\nI. الوسيط في B أقل من الوسيط في A.\nII. المتوسط في B أقل من المتوسط في A.",
    "questionEn": "The histogram summarizes data set A, which represents the number of points per player earned by 50 players of a game. A new player earns 18 points playing the game, and this number of points is added to data set A to create data set B with 51 values. Which of the following must be true?\nI. The median number of points per player for data set B is less than the median number of points per player for data set A.\nII. The mean number of points per player for data set B is less than the mean number of points per player for data set A.",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) I only",
        "textAr": "أ) I فقط"
      },
      {
        "textEn": "B) II only",
        "textAr": "ب) II فقط"
      },
      {
        "textEn": "C) I and II",
        "textAr": "ج) I و II"
      },
      {
        "textEn": "D) Neither I nor II",
        "textAr": "د) لا I ولا II"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بما أن القيمة 18 أقل بكثير من المتوسط الأصلي (~50)، فإن إضافة 18 تُقلل المتوسط حتماً (العبارة II صحيحة). أما الوسيط فيقع في فئة شائعة ولن يتغير حتماً.",
    "explanationEn": "Since 18 is significantly smaller than the mean of data set A (~50), adding 18 strictly decreases the mean, so II is true. However, adding 18 shifts the median position from average of 25th/26th to 26th value, which both fall inside the 50-60 bin, so median does not necessarily decrease. Thus, II only.",
    "solutionStepsAr": [
      "بما أن القيمة 18 أقل بكثير من المتوسط الأصلي (~50)، فإن إضافة 18 تُقلل المتوسط حتماً (العبارة II صحيحة). أما الوسيط فيقع في فئة شائعة ولن يتغير حتماً."
    ],
    "solutionStepsEn": [
      "Since 18 is significantly smaller than the mean of data set A (~50), adding 18 strictly decreases the mean, so II is true. However, adding 18 shifts the median position from average of 25th/26th to 26th value, which both fall inside the 50-60 bin, so median does not necessarily decrease. Thus, II only."
    ]
  },
  {
    "id": 205,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في المثلث XYZ، قياس الزاوية X هو 90°. النقطة W تقع على القطعة YZ والقطعة WX عمودية على YZ. طول WY هو 572 وطول WX هو 429. ما قيمة tan Z؟",
    "questionEn": "In triangle XYZ, the measure of angle X is 90°. Point W lies on segment YZ, and segment WX is perpendicular to segment YZ. The length of segment WY is 572, and the length of segment WX is 429. What is the value of tan Z?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 3",
        "textAr": "أ) 5 / أ) 3/5"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 4 / ب) 3/4"
      },
      {
        "textEn": "C) 4",
        "textAr": "ج) 5 / ج) 4/5"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 3 / د) 4/3"
      }
    ],
    "correctAnswer": 3,
    "explanationAr": "في المثلث القائم WYX، tan(∠WYX) = 429 / 572 = 3/4. بما أن الزاويتين Z و ∠WYX متتامتان، فإن tan Z = cot(∠WYX) = 572 / 429 = 4/3.",
    "explanationEn": "In right triangle WYX, tan(∠WYX) = WX / WY = 429 / 572 = 3/4. Since ∠Z and ∠WYX are complementary in right triangle XYZ, tan Z = cot(∠WYX) = WY / WX = 572 / 429 = 4/3.",
    "solutionStepsAr": [
      "في المثلث القائم WYX، tan(∠WYX) = 429 / 572 = 3/4. بما أن الزاويتين Z و ∠WYX متتامتان، فإن tan Z = cot(∠WYX) = 572 / 429 = 4/3."
    ],
    "solutionStepsEn": [
      "In right triangle WYX, tan(∠WYX) = WX / WY = 429 / 572 = 3/4. Since ∠Z and ∠WYX are complementary in right triangle XYZ, tan Z = cot(∠WYX) = WY / WX = 572 / 429 = 4/3."
    ]
  },
  {
    "id": 207,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مساحة قدرها 46.00 ميل بحري مربع تكافئ k كيلومتر مربع. لأقرب جزء من عشرة، ما قيمة k؟ (1 ميل بحري = 1.852 كيلومتر)",
    "questionEn": "An area of 46.00 square nautical miles is equivalent to k square kilometers. To the nearest tenth, what is the value of k? (1 nautical mile = 1.852 kilometers)",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "isGridIn": true,
    "correctAnswer": "157.8",
    "explanationAr": "1 ميل بحري مربع = (1.852)² = 3.429904 كم². بالتالي k = 46.00 × 3.429904 = 157.775584 كم². وبتقريب الناتج لأقرب جزء من عشرة نجد k = 157.8.",
    "explanationEn": "1 square nautical mile = (1.852)² = 3.429904 km². Thus k = 46.00 × 3.429904 = 157.775584 km². Rounded to the nearest tenth is 157.8.",
    "solutionStepsAr": [
      "1 ميل بحري مربع = (1.852)² = 3.429904 كم². بالتالي k = 46.00 × 3.429904 = 157.775584 كم². وبتقريب الناتج لأقرب جزء من عشرة نجد k = 157.8."
    ],
    "solutionStepsEn": [
      "1 square nautical mile = (1.852)² = 3.429904 km². Thus k = 46.00 × 3.429904 = 157.775584 km². Rounded to the nearest tenth is 157.8."
    ]
  }
];
