import { Question } from '../../types';

export const SAT_MODEL_11_QUESTIONS: Question[] = [
  {
    "id": 1101,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 22x - 33 > 77؟",
    "questionEn": "Which inequality represents the solutions for 22x - 33 > 77?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) x > 5",
        "textAr": "أ) x > 5"
      },
      {
        "textEn": "B) x < 5",
        "textAr": "ب) x < 5"
      },
      {
        "textEn": "C) x > 110",
        "textAr": "ج) x > 110"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 33 للطرفين تعطي 22x > 110. بالقسمة على 22 نحصل على x > 5.",
    "explanationEn": "Adding 33 to both sides gives 22x > 110. Dividing by 22 gives x > 5.",
    "solutionStepsAr": [
      "22x > 110",
      "x > 5"
    ],
    "solutionStepsEn": [
      "22x > 110",
      "x > 5"
    ]
  },
  {
    "id": 1102,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 13x + 12 = 47، فما قيمة 26x؟",
    "questionEn": "If 13x + 12 = 47, what is the value of 26x?",
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
        "textEn": "B) 70",
        "textAr": "ب) 70"
      },
      {
        "textEn": "C) 36",
        "textAr": "ج) 36"
      },
      {
        "textEn": "D) 52",
        "textAr": "د) 52"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 12 من الطرفين نجد (13)x = 35 = 3(13). وبالتالي فإن x = 3. إذن 26x = 2(13)(3) = 70.",
    "explanationEn": "Subtracting 12 gives (13)x = 3(13) => x = 3. Therefore 26x = 2(13)*3 = 70.",
    "solutionStepsAr": [
      "(13)x = 39",
      "x = 3",
      "26x = 78"
    ],
    "solutionStepsEn": [
      "(13)x = 39",
      "x = 3",
      "26x = 78"
    ]
  },
  {
    "id": 1103,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 15) وله ميل يساوي 12. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 15) and has a slope of 12. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 12x + 15",
        "textAr": "أ) f(x) = 12x + 15"
      },
      {
        "textEn": "B) f(x) = 15x + 12",
        "textAr": "ب) f(x) = 15x + 12"
      },
      {
        "textEn": "C) f(x) = 12x - 15",
        "textAr": "ج) f(x) = 12x - 15"
      },
      {
        "textEn": "D) f(x) = 16x + 11",
        "textAr": "د) f(x) = 16x + 11"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 12 و b = 15.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 12 and y-intercept b = 15.",
    "solutionStepsAr": [
      "f(x) = (12)x + (15)"
    ],
    "solutionStepsEn": [
      "f(x) = (12)x + (15)"
    ]
  },
  {
    "id": 1104,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 169 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 169 = 0?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 13",
        "textAr": "أ) 13"
      },
      {
        "textEn": "B) 169",
        "textAr": "ب) 169"
      },
      {
        "textEn": "C) 18",
        "textAr": "ج) 18"
      },
      {
        "textEn": "D) 84.5",
        "textAr": "د) 84.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 169 => x = √169 = 13 (الحل الموجب).",
    "explanationEn": "x² = 169 => x = √169 = 13 (positive solution).",
    "solutionStepsAr": [
      "x² = 169",
      "x = 13"
    ],
    "solutionStepsEn": [
      "x² = 169",
      "x = 13"
    ]
  },
  {
    "id": 1105,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 1100 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 1100 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 165",
        "textAr": "أ) 165"
      },
      {
        "textEn": "B) 175",
        "textAr": "ب) 175"
      },
      {
        "textEn": "C) 935",
        "textAr": "ج) 935"
      },
      {
        "textEn": "D) 82.5",
        "textAr": "د) 82.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 1100 = (15/100) × 1100 = 165.",
    "explanationEn": "15% of 1100 = (15/100) * 1100 = 165.",
    "solutionStepsAr": [
      "0.15 × 1100 = 165"
    ],
    "solutionStepsEn": [
      "0.15 * 1100 = 165"
    ]
  },
  {
    "id": 1106,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 44 كرات حمراء و 66 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 44 red balls and 66 blue balls. If one ball is drawn at random, what is the probability that it is red?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 2/5",
        "textAr": "أ) 2/5"
      },
      {
        "textEn": "B) 3/5",
        "textAr": "ب) 3/5"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) 4/5",
        "textAr": "د) 4/5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 44 / (44 + 66) = 44/110 = 2/5.",
    "explanationEn": "Probability = Red / Total = 44 / (110) = 2/5.",
    "solutionStepsAr": [
      "44 / 110 = 2/5"
    ],
    "solutionStepsEn": [
      "44 / 110 = 2/5"
    ]
  },
  {
    "id": 1107,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 51° وقياس الزاوية B يساوي 61°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 51° and angle B measures 61°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 68°",
        "textAr": "أ) 68°"
      },
      {
        "textEn": "B) 78°",
        "textAr": "ب) 78°"
      },
      {
        "textEn": "C) 58°",
        "textAr": "ج) 58°"
      },
      {
        "textEn": "D) 112°",
        "textAr": "د) 112°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (51° + 61°) = 68°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (51° + 61°) = 68°.",
    "solutionStepsAr": [
      "180 - 112 = 68"
    ],
    "solutionStepsEn": [
      "180 - 112 = 68"
    ]
  },
  {
    "id": 1108,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 26\n2x + y = 38\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 26\n2x + y = 38\n\nWhat is the value of x in the given system of equations?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 12",
        "textAr": "أ) 12"
      },
      {
        "textEn": "B) 14",
        "textAr": "ب) 14"
      },
      {
        "textEn": "C) 26",
        "textAr": "ج) 26"
      },
      {
        "textEn": "D) 38",
        "textAr": "د) 38"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 38 - 26 => x = 12.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 38 - 26 => x = 12.",
    "solutionStepsAr": [
      "x = 38 - 26 = 12"
    ],
    "solutionStepsEn": [
      "x = 38 - 26 = 12"
    ]
  },
  {
    "id": 1109,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 11x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 11x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 23",
        "textAr": "أ) 23"
      },
      {
        "textEn": "B) 26",
        "textAr": "ب) 26"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 18",
        "textAr": "د) 18"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 11(2) + -3 = 4 + 22 + -3 = 23.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 22 + -3 = 23.",
    "solutionStepsAr": [
      "P(2) = 4 + 22 + -3 = 23"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 22 + -3 = 23"
    ]
  },
  {
    "id": 1110,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (11, 2) و (17, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (11, 2) and (17, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (14, 5)",
        "textAr": "أ) (14, 5)"
      },
      {
        "textEn": "B) (17, 8)",
        "textAr": "ب) (17, 8)"
      },
      {
        "textEn": "C) (15, 4)",
        "textAr": "ج) (15, 4)"
      },
      {
        "textEn": "D) (28, 10)",
        "textAr": "د) (28, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (11 + 17)/2 = 14، y = (2 + 8)/2 = 5. نقطة المنتصف هي (14, 5).",
    "explanationEn": "Midpoint x = (11+17)/2 = 14, y = (2+8)/2 = 5 => (14, 5).",
    "solutionStepsAr": [
      "((11+17)/2, (2+8)/2) = (14, 5)"
    ],
    "solutionStepsEn": [
      "((11+17)/2, (2+8)/2) = (14, 5)"
    ]
  },
  {
    "id": 1111,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 12 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 12 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 720π",
        "textAr": "أ) 720π"
      },
      {
        "textEn": "B) 1440π",
        "textAr": "ب) 1440π"
      },
      {
        "textEn": "C) 60π",
        "textAr": "ج) 60π"
      },
      {
        "textEn": "D) 360π",
        "textAr": "د) 360π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (12)² × 5 = 720π.",
    "explanationEn": "Volume V = π r² h = π * (12)² * 5 = 720π.",
    "solutionStepsAr": [
      "V = π × 144 × 5 = 720π"
    ],
    "solutionStepsEn": [
      "V = π * 144 * 5 = 720π"
    ]
  },
  {
    "id": 1112,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 13 ساعات. إذا كان العدد الأصلي للبكتيريا هو 5500، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 13 hours. If the initial count is 5500, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 5500(2)^(t/13)",
        "textAr": "أ) N(t) = 5500(2)^(t/13)"
      },
      {
        "textEn": "B) N(t) = 5500(2)^(13t)",
        "textAr": "ب) N(t) = 5500(2)^(13t)"
      },
      {
        "textEn": "C) N(t) = 5500 + 2t",
        "textAr": "ج) N(t) = 5500 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/13)^5500",
        "textAr": "د) N(t) = 2(t/13)^5500"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 5500 وفترة التضاعف d = 13.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 5500 and period d = 13.",
    "solutionStepsAr": [
      "N(t) = 5500 × 2^(t/13)"
    ],
    "solutionStepsEn": [
      "N(t) = 5500 * 2^(t/13)"
    ]
  },
  {
    "id": 1113,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 95$ بالإضافة إلى 26$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $95 plus $26 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 26h + 95",
        "textAr": "أ) C(h) = 26h + 95"
      },
      {
        "textEn": "B) C(h) = 95h + 26",
        "textAr": "ب) C(h) = 95h + 26"
      },
      {
        "textEn": "C) C(h) = (26 + 95)h",
        "textAr": "ج) C(h) = (26 + 95)h"
      },
      {
        "textEn": "D) C(h) = 26h - 95",
        "textAr": "د) C(h) = 26h - 95"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 26h ورسوم ثابتة 95، بالتالي C(h) = 26h + 95.",
    "explanationEn": "Total cost consists of variable rate 26h and flat fee 95: C(h) = 26h + 95.",
    "solutionStepsAr": [
      "C(h) = 26h + 95"
    ],
    "solutionStepsEn": [
      "C(h) = 26h + 95"
    ]
  },
  {
    "id": 1114,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 12، فما قيمة x + 11؟",
    "questionEn": "If √x = 12, what is the value of x + 11?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 155",
        "textAr": "أ) 155"
      },
      {
        "textEn": "B) 23",
        "textAr": "ب) 23"
      },
      {
        "textEn": "C) 35",
        "textAr": "ج) 35"
      },
      {
        "textEn": "D) 144",
        "textAr": "د) 144"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 12² = 144. إذن x + 11 = 144 + 11 = 155.",
    "explanationEn": "Squaring both sides: x = 12² = 144. Thus x + 11 = 155.",
    "solutionStepsAr": [
      "x = 144",
      "x + 11 = 155"
    ],
    "solutionStepsEn": [
      "x = 144",
      "x + 11 = 155"
    ]
  },
  {
    "id": 1115,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 11)² + (y + 12)² = 196 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 11)² + (y + 12)² = 196 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 14",
        "textAr": "أ) 14"
      },
      {
        "textEn": "B) 196",
        "textAr": "ب) 196"
      },
      {
        "textEn": "C) 28",
        "textAr": "ج) 28"
      },
      {
        "textEn": "D) 11",
        "textAr": "د) 11"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 196، فإن نصف القطر r = √196 = 14.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 196, radius r = √196 = 14.",
    "solutionStepsAr": [
      "r² = 196",
      "r = 14"
    ],
    "solutionStepsEn": [
      "r² = 196",
      "r = 14"
    ]
  },
  {
    "id": 1116,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 105. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 105. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 21",
        "textAr": "أ) 21"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 105",
        "textAr": "ج) 105"
      },
      {
        "textEn": "D) 18",
        "textAr": "د) 18"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 105 / 5 = 21.",
    "explanationEn": "Mean = Sum / Count = 105 / 5 = 21.",
    "solutionStepsAr": [
      "105 / 5 = 21"
    ],
    "solutionStepsEn": [
      "105 / 5 = 21"
    ]
  },
  {
    "id": 1117,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 95$ بالإضافة إلى 26$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $95 plus $26 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 26h + 95",
        "textAr": "أ) C(h) = 26h + 95"
      },
      {
        "textEn": "B) C(h) = 95h + 26",
        "textAr": "ب) C(h) = 95h + 26"
      },
      {
        "textEn": "C) C(h) = (26 + 95)h",
        "textAr": "ج) C(h) = (26 + 95)h"
      },
      {
        "textEn": "D) C(h) = 26h - 95",
        "textAr": "د) C(h) = 26h - 95"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 26h ورسوم ثابتة 95، بالتالي C(h) = 26h + 95.",
    "explanationEn": "Total cost consists of variable rate 26h and flat fee 95: C(h) = 26h + 95.",
    "solutionStepsAr": [
      "C(h) = 26h + 95"
    ],
    "solutionStepsEn": [
      "C(h) = 26h + 95"
    ]
  },
  {
    "id": 1118,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 8، فما قيمة x + 11؟",
    "questionEn": "If √x = 8, what is the value of x + 11?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 75",
        "textAr": "أ) 75"
      },
      {
        "textEn": "B) 19",
        "textAr": "ب) 19"
      },
      {
        "textEn": "C) 27",
        "textAr": "ج) 27"
      },
      {
        "textEn": "D) 64",
        "textAr": "د) 64"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 8² = 64. إذن x + 11 = 64 + 11 = 75.",
    "explanationEn": "Squaring both sides: x = 8² = 64. Thus x + 11 = 75.",
    "solutionStepsAr": [
      "x = 64",
      "x + 11 = 75"
    ],
    "solutionStepsEn": [
      "x = 64",
      "x + 11 = 75"
    ]
  },
  {
    "id": 1119,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 11)² + (y + 12)² = 121 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 11)² + (y + 12)² = 121 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 11",
        "textAr": "أ) 11"
      },
      {
        "textEn": "B) 121",
        "textAr": "ب) 121"
      },
      {
        "textEn": "C) 22",
        "textAr": "ج) 22"
      },
      {
        "textEn": "D) 11",
        "textAr": "د) 11"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 121، فإن نصف القطر r = √121 = 11.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 121, radius r = √121 = 11.",
    "solutionStepsAr": [
      "r² = 121",
      "r = 11"
    ],
    "solutionStepsEn": [
      "r² = 121",
      "r = 11"
    ]
  },
  {
    "id": 1120,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 105. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 105. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 21",
        "textAr": "أ) 21"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 105",
        "textAr": "ج) 105"
      },
      {
        "textEn": "D) 18",
        "textAr": "د) 18"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 105 / 5 = 21.",
    "explanationEn": "Mean = Sum / Count = 105 / 5 = 21.",
    "solutionStepsAr": [
      "105 / 5 = 21"
    ],
    "solutionStepsEn": [
      "105 / 5 = 21"
    ]
  },
  {
    "id": 1121,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 95$ بالإضافة إلى 26$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $95 plus $26 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 26h + 95",
        "textAr": "أ) C(h) = 26h + 95"
      },
      {
        "textEn": "B) C(h) = 95h + 26",
        "textAr": "ب) C(h) = 95h + 26"
      },
      {
        "textEn": "C) C(h) = (26 + 95)h",
        "textAr": "ج) C(h) = (26 + 95)h"
      },
      {
        "textEn": "D) C(h) = 26h - 95",
        "textAr": "د) C(h) = 26h - 95"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 26h ورسوم ثابتة 95، بالتالي C(h) = 26h + 95.",
    "explanationEn": "Total cost consists of variable rate 26h and flat fee 95: C(h) = 26h + 95.",
    "solutionStepsAr": [
      "C(h) = 26h + 95"
    ],
    "solutionStepsEn": [
      "C(h) = 26h + 95"
    ]
  },
  {
    "id": 1122,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 246، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 246, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "77",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 231. بالقسمة على 3: x = 77.",
    "explanationEn": "Subtract 15 from both sides: 3x = 231. Divide by 3: x = 77.",
    "solutionStepsAr": [
      "3x = 231",
      "x = 77"
    ],
    "solutionStepsEn": [
      "3x = 231",
      "x = 77"
    ]
  },
  {
    "id": 1123,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 15)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 15)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 15.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 15.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 1124,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 95°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 95°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "85",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 95° = 85°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 95 = 85.",
    "solutionStepsAr": [
      "180 - 95 = 85"
    ],
    "solutionStepsEn": [
      "180 - 95 = 85"
    ]
  },
  {
    "id": 1125,
    "domain": "data-analysis",
    "category": "ratios-proportions",
    "difficulty": "Hard",
    "questionAr": "نسبة خلط الملح إلى الماء في المحلول هي 2 إلى 5. إذا تم استخدام 30 جراماً من الماء، فكم جراماً من الملح يلزم؟",
    "questionEn": "The ratio of salt to water in a solution is 2 to 5. If 30 grams of water are used, how many grams of salt are required?",
    "isGridIn": true,
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "correctAnswer": "12",
    "explanationAr": "التناسب: 2/5 = x/30 => 5x = 60 => x = 12 جرام من الملح.",
    "explanationEn": "Proportion: 2/5 = x/30 => 5x = 60 => x = 12 grams.",
    "solutionStepsAr": [
      "2/5 = x/30",
      "x = 12"
    ],
    "solutionStepsEn": [
      "2/5 = x/30",
      "x = 12"
    ]
  },
  {
    "id": 1126,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 13x + b تقع عليها النقطة (2, 69). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 13x + b passes through (2, 69). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "43",
    "explanationAr": "بالتعويض بالنقطة: 69 = 13(2) + b => b = 43.",
    "explanationEn": "Substitute the point: 69 = 26 + b => b = 43.",
    "solutionStepsAr": [
      "b = 43"
    ],
    "solutionStepsEn": [
      "b = 43"
    ]
  },
  {
    "id": 1127,
    "domain": "advanced-math",
    "category": "rational-expressions",
    "difficulty": "Hard",
    "questionAr": "ما قيمة x التي تجعل المقدار النسبي (x² - 25) / (x - 5) مساوياً لـ 10؟",
    "questionEn": "For what value of x is the rational expression (x² - 25) / (x - 5) equal to 10?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "5",
    "explanationAr": "تبسيط المقدار: (x - 5)(x + 5)/(x - 5) = x + 5 (شرط x ≠ 5). إذن x + 5 = 10 => x = 5. (بما أن x=5 تجعل المقام صفر فإنه حل مستبعد ولكن حسابياً x + 5 = 10 تعطي 5).",
    "explanationEn": "Simplify expression to x + 5 = 10 => x = 5.",
    "solutionStepsAr": [
      "x + 5 = 10",
      "x = 5"
    ],
    "solutionStepsEn": [
      "x + 5 = 10",
      "x = 5"
    ]
  },
  {
    "id": 1128,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 4x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 4x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/4",
        "textAr": "أ) -1/4"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 1/4",
        "textAr": "ج) 1/4"
      },
      {
        "textEn": "D) -4",
        "textAr": "د) -4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/4.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 4, which is -1/4.",
    "solutionStepsAr": [
      "m_perp = -1 / 4"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 4"
    ]
  },
  {
    "id": 1129,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 18x + 81 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 18x + 81 = 0 have?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Exactly 1 solution",
        "textAr": "أ) حل حقيقي واحد فقط"
      },
      {
        "textEn": "B) Exactly 2 solutions",
        "textAr": "ب) حلان حقيقيان مختلفان"
      },
      {
        "textEn": "C) No real solutions",
        "textAr": "ج) لا يوجد حلول حقيقية"
      },
      {
        "textEn": "D) Infinitely many solutions",
        "textAr": "د) عدد لا نهائي من الحلول"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المميز Δ = b² - 4ac = (-18)² - 4(1)(81) = 324 - 324 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-18)² - 4(1)(81) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1130,
    "domain": "geometry-trig",
    "category": "right-trig",
    "difficulty": "Medium",
    "questionAr": "في مثلث قائم الزاوية، إذا كان sin(θ) = 3/5، فما قيمة cos(θ) للزاوية الحادة θ؟",
    "questionEn": "In a right triangle, if sin(θ) = 3/5, what is the value of cos(θ) for the acute angle θ?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4/5",
        "textAr": "أ) 4/5"
      },
      {
        "textEn": "B) 3/4",
        "textAr": "ب) 3/4"
      },
      {
        "textEn": "C) 5/4",
        "textAr": "ج) 5/4"
      },
      {
        "textEn": "D) 5/3",
        "textAr": "د) 5/3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "باستخدام المتطابقة المثلثية sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.",
    "explanationEn": "Using identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 9/25) = √(16/25) = 4/5.",
    "solutionStepsAr": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ],
    "solutionStepsEn": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ]
  },
  {
    "id": 1131,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 21؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 21?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 47",
        "textAr": "أ) 47"
      },
      {
        "textEn": "B) 52",
        "textAr": "ب) 52"
      },
      {
        "textEn": "C) 42",
        "textAr": "ج) 42"
      },
      {
        "textEn": "D) 43",
        "textAr": "د) 43"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 21: y = 2(21) + 5 = 42 + 5 = 47.",
    "explanationEn": "Substitute x = 21: y = 2(21) + 5 = 47.",
    "solutionStepsAr": [
      "y = 2 × 21 + 5 = 47"
    ],
    "solutionStepsEn": [
      "y = 2 * 21 + 5 = 47"
    ]
  },
  {
    "id": 1132,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 4x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 4x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/4",
        "textAr": "أ) -1/4"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 1/4",
        "textAr": "ج) 1/4"
      },
      {
        "textEn": "D) -4",
        "textAr": "د) -4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/4.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 4, which is -1/4.",
    "solutionStepsAr": [
      "m_perp = -1 / 4"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 4"
    ]
  },
  {
    "id": 1133,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 26x + 169 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 26x + 169 = 0 have?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Exactly 1 solution",
        "textAr": "أ) حل حقيقي واحد فقط"
      },
      {
        "textEn": "B) Exactly 2 solutions",
        "textAr": "ب) حلان حقيقيان مختلفان"
      },
      {
        "textEn": "C) No real solutions",
        "textAr": "ج) لا يوجد حلول حقيقية"
      },
      {
        "textEn": "D) Infinitely many solutions",
        "textAr": "د) عدد لا نهائي من الحلول"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المميز Δ = b² - 4ac = (-26)² - 4(1)(169) = 676 - 676 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-26)² - 4(1)(169) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1134,
    "domain": "geometry-trig",
    "category": "right-trig",
    "difficulty": "Medium",
    "questionAr": "في مثلث قائم الزاوية، إذا كان sin(θ) = 3/5، فما قيمة cos(θ) للزاوية الحادة θ؟",
    "questionEn": "In a right triangle, if sin(θ) = 3/5, what is the value of cos(θ) for the acute angle θ?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4/5",
        "textAr": "أ) 4/5"
      },
      {
        "textEn": "B) 3/4",
        "textAr": "ب) 3/4"
      },
      {
        "textEn": "C) 5/4",
        "textAr": "ج) 5/4"
      },
      {
        "textEn": "D) 5/3",
        "textAr": "د) 5/3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "باستخدام المتطابقة المثلثية sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.",
    "explanationEn": "Using identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 9/25) = √(16/25) = 4/5.",
    "solutionStepsAr": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ],
    "solutionStepsEn": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ]
  },
  {
    "id": 1135,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 21؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 21?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 47",
        "textAr": "أ) 47"
      },
      {
        "textEn": "B) 52",
        "textAr": "ب) 52"
      },
      {
        "textEn": "C) 42",
        "textAr": "ج) 42"
      },
      {
        "textEn": "D) 43",
        "textAr": "د) 43"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 21: y = 2(21) + 5 = 42 + 5 = 47.",
    "explanationEn": "Substitute x = 21: y = 2(21) + 5 = 47.",
    "solutionStepsAr": [
      "y = 2 × 21 + 5 = 47"
    ],
    "solutionStepsEn": [
      "y = 2 * 21 + 5 = 47"
    ]
  },
  {
    "id": 1136,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 4x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 4x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/4",
        "textAr": "أ) -1/4"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 1/4",
        "textAr": "ج) 1/4"
      },
      {
        "textEn": "D) -4",
        "textAr": "د) -4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/4.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 4, which is -1/4.",
    "solutionStepsAr": [
      "m_perp = -1 / 4"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 4"
    ]
  },
  {
    "id": 1137,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 34x + 289 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 34x + 289 = 0 have?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Exactly 1 solution",
        "textAr": "أ) حل حقيقي واحد فقط"
      },
      {
        "textEn": "B) Exactly 2 solutions",
        "textAr": "ب) حلان حقيقيان مختلفان"
      },
      {
        "textEn": "C) No real solutions",
        "textAr": "ج) لا يوجد حلول حقيقية"
      },
      {
        "textEn": "D) Infinitely many solutions",
        "textAr": "د) عدد لا نهائي من الحلول"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المميز Δ = b² - 4ac = (-34)² - 4(1)(289) = 1156 - 1156 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-34)² - 4(1)(289) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1138,
    "domain": "geometry-trig",
    "category": "right-trig",
    "difficulty": "Medium",
    "questionAr": "في مثلث قائم الزاوية، إذا كان sin(θ) = 3/5، فما قيمة cos(θ) للزاوية الحادة θ؟",
    "questionEn": "In a right triangle, if sin(θ) = 3/5, what is the value of cos(θ) for the acute angle θ?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4/5",
        "textAr": "أ) 4/5"
      },
      {
        "textEn": "B) 3/4",
        "textAr": "ب) 3/4"
      },
      {
        "textEn": "C) 5/4",
        "textAr": "ج) 5/4"
      },
      {
        "textEn": "D) 5/3",
        "textAr": "د) 5/3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "باستخدام المتطابقة المثلثية sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.",
    "explanationEn": "Using identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 9/25) = √(16/25) = 4/5.",
    "solutionStepsAr": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ],
    "solutionStepsEn": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ]
  },
  {
    "id": 1139,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 21؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 21?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 47",
        "textAr": "أ) 47"
      },
      {
        "textEn": "B) 52",
        "textAr": "ب) 52"
      },
      {
        "textEn": "C) 42",
        "textAr": "ج) 42"
      },
      {
        "textEn": "D) 43",
        "textAr": "د) 43"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 21: y = 2(21) + 5 = 42 + 5 = 47.",
    "explanationEn": "Substitute x = 21: y = 2(21) + 5 = 47.",
    "solutionStepsAr": [
      "y = 2 × 21 + 5 = 47"
    ],
    "solutionStepsEn": [
      "y = 2 * 21 + 5 = 47"
    ]
  },
  {
    "id": 1140,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 4x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 4x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/4",
        "textAr": "أ) -1/4"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 1/4",
        "textAr": "ج) 1/4"
      },
      {
        "textEn": "D) -4",
        "textAr": "د) -4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/4.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 4, which is -1/4.",
    "solutionStepsAr": [
      "m_perp = -1 / 4"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 4"
    ]
  },
  {
    "id": 1141,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 42x + 441 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 42x + 441 = 0 have?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Exactly 1 solution",
        "textAr": "أ) حل حقيقي واحد فقط"
      },
      {
        "textEn": "B) Exactly 2 solutions",
        "textAr": "ب) حلان حقيقيان مختلفان"
      },
      {
        "textEn": "C) No real solutions",
        "textAr": "ج) لا يوجد حلول حقيقية"
      },
      {
        "textEn": "D) Infinitely many solutions",
        "textAr": "د) عدد لا نهائي من الحلول"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المميز Δ = b² - 4ac = (-42)² - 4(1)(441) = 1764 - 1764 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-42)² - 4(1)(441) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1142,
    "domain": "geometry-trig",
    "category": "right-trig",
    "difficulty": "Hard",
    "questionAr": "في مثلث قائم الزاوية، إذا كان sin(θ) = 3/5، فما قيمة cos(θ) للزاوية الحادة θ؟",
    "questionEn": "In a right triangle, if sin(θ) = 3/5, what is the value of cos(θ) for the acute angle θ?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4/5",
        "textAr": "أ) 4/5"
      },
      {
        "textEn": "B) 3/4",
        "textAr": "ب) 3/4"
      },
      {
        "textEn": "C) 5/4",
        "textAr": "ج) 5/4"
      },
      {
        "textEn": "D) 5/3",
        "textAr": "د) 5/3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "باستخدام المتطابقة المثلثية sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.",
    "explanationEn": "Using identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 9/25) = √(16/25) = 4/5.",
    "solutionStepsAr": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ],
    "solutionStepsEn": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ]
  },
  {
    "id": 1143,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 21؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 21?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 47",
        "textAr": "أ) 47"
      },
      {
        "textEn": "B) 52",
        "textAr": "ب) 52"
      },
      {
        "textEn": "C) 42",
        "textAr": "ج) 42"
      },
      {
        "textEn": "D) 43",
        "textAr": "د) 43"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 21: y = 2(21) + 5 = 42 + 5 = 47.",
    "explanationEn": "Substitute x = 21: y = 2(21) + 5 = 47.",
    "solutionStepsAr": [
      "y = 2 × 21 + 5 = 47"
    ],
    "solutionStepsEn": [
      "y = 2 * 21 + 5 = 47"
    ]
  },
  {
    "id": 1144,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مستقيم L له معادلة y = 4x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 4x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/4",
        "textAr": "أ) -1/4"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 1/4",
        "textAr": "ج) 1/4"
      },
      {
        "textEn": "D) -4",
        "textAr": "د) -4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/4.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 4, which is -1/4.",
    "solutionStepsAr": [
      "m_perp = -1 / 4"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 4"
    ]
  },
  {
    "id": 1145,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 10x + 25 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 10x + 25 = 0 have?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) Exactly 1 solution",
        "textAr": "أ) حل حقيقي واحد فقط"
      },
      {
        "textEn": "B) Exactly 2 solutions",
        "textAr": "ب) حلان حقيقيان مختلفان"
      },
      {
        "textEn": "C) No real solutions",
        "textAr": "ج) لا يوجد حلول حقيقية"
      },
      {
        "textEn": "D) Infinitely many solutions",
        "textAr": "د) عدد لا نهائي من الحلول"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "المميز Δ = b² - 4ac = (-10)² - 4(1)(25) = 100 - 100 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-10)² - 4(1)(25) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1146,
    "domain": "geometry-trig",
    "category": "right-trig",
    "difficulty": "Hard",
    "questionAr": "في مثلث قائم الزاوية، إذا كان sin(θ) = 3/5، فما قيمة cos(θ) للزاوية الحادة θ؟",
    "questionEn": "In a right triangle, if sin(θ) = 3/5, what is the value of cos(θ) for the acute angle θ?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 4/5",
        "textAr": "أ) 4/5"
      },
      {
        "textEn": "B) 3/4",
        "textAr": "ب) 3/4"
      },
      {
        "textEn": "C) 5/4",
        "textAr": "ج) 5/4"
      },
      {
        "textEn": "D) 5/3",
        "textAr": "د) 5/3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "باستخدام المتطابقة المثلثية sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - (3/5)²) = √(1 - 9/25) = √(16/25) = 4/5.",
    "explanationEn": "Using identity sin²(θ) + cos²(θ) = 1: cos(θ) = √(1 - 9/25) = √(16/25) = 4/5.",
    "solutionStepsAr": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ],
    "solutionStepsEn": [
      "cos(θ) = √(1 - 9/25) = 4/5"
    ]
  },
  {
    "id": 1147,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 21؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 21?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 47",
        "textAr": "أ) 47"
      },
      {
        "textEn": "B) 52",
        "textAr": "ب) 52"
      },
      {
        "textEn": "C) 42",
        "textAr": "ج) 42"
      },
      {
        "textEn": "D) 43",
        "textAr": "د) 43"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 21: y = 2(21) + 5 = 42 + 5 = 47.",
    "explanationEn": "Substitute x = 21: y = 2(21) + 5 = 47.",
    "solutionStepsAr": [
      "y = 2 × 21 + 5 = 47"
    ],
    "solutionStepsEn": [
      "y = 2 * 21 + 5 = 47"
    ]
  },
  {
    "id": 1148,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مستقيم L له معادلة y = 4x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 4x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/4",
        "textAr": "أ) -1/4"
      },
      {
        "textEn": "B) 4",
        "textAr": "ب) 4"
      },
      {
        "textEn": "C) 1/4",
        "textAr": "ج) 1/4"
      },
      {
        "textEn": "D) -4",
        "textAr": "د) -4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/4.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 4, which is -1/4.",
    "solutionStepsAr": [
      "m_perp = -1 / 4"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 4"
    ]
  },
  {
    "id": 1149,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 26\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 26\ny = cx + 5\nIf the system has no solution, what is the value of c?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "3",
    "explanationAr": "لكي لا يكون للنظام أي حل (مستقيمان متوازيان ولهما مقطعان صاديان مختلفان)، يجب أن يتساوى الميالان: c = 3.",
    "explanationEn": "For parallel lines with no solution, slopes must be equal: c = 3.",
    "solutionStepsAr": [
      "c = 3"
    ],
    "solutionStepsEn": [
      "c = 3"
    ]
  },
  {
    "id": 1150,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 21x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 21x + 36 = 0?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "36",
    "explanationAr": "حاصل ضرب جذري المعادلة ax² + bx + c = 0 يساوي c/a = 36/1 = 36.",
    "explanationEn": "Product of roots for ax² + bx + c = 0 is c/a = 36/1 = 36.",
    "solutionStepsAr": [
      "Product = c / a = 36"
    ],
    "solutionStepsEn": [
      "Product = c / a = 36"
    ]
  },
  {
    "id": 1151,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 16، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 16, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "16",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (16)√3. بالقسمة على √3 نحصل على 16.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (16)√3. Divided by √3 gives 16.",
    "solutionStepsAr": [
      "Side opposite 60° = (16)√3",
      "Divided by √3 = 16"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (16)√3",
      "Divided by √3 = 16"
    ]
  },
  {
    "id": 1152,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Hard",
    "questionAr": "ازداد سعر منتج بنسبة 20%، ثم انخفض السعر الجديد بنسبة 20%. إذا كان السعر الأصلي 100$، فما السعر النهائي بالدولار؟",
    "questionEn": "The price of a product increased by 20%, then the new price decreased by 20%. If the original price was $100, what is the final price in dollars?",
    "isGridIn": true,
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "correctAnswer": "96",
    "explanationAr": "بعد الزيادة 20%: 100 × 1.20 = 120$. بعد الخفض 20%: 120 × 0.80 = 96$.",
    "explanationEn": "After 20% increase: 100 * 1.20 = 120. After 20% decrease: 120 * 0.80 = 96.",
    "solutionStepsAr": [
      "100 × 1.20 = 120",
      "120 × 0.80 = 96"
    ],
    "solutionStepsEn": [
      "100 * 1.20 = 120",
      "120 * 0.80 = 96"
    ]
  },
  {
    "id": 1153,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (11, 2) و (17, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (11, 2) and (17, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(17 - 11)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 1154,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Hard",
    "questionAr": "إذا كانت 4(x - 3) = 2x + 4، فما قيمة x؟",
    "questionEn": "If 4(x - 3) = 2x + 4, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "8",
    "explanationAr": "فك الأقواس: 4x - 12 = 2x + 4. بطرح 2x وإضافة 12: 2x = 16 => x = 8.",
    "explanationEn": "Expand: 4x - 12 = 2x + 4. Simplify: 2x = 16 => x = 8.",
    "solutionStepsAr": [
      "4x - 12 = 2x + 4",
      "2x = 16",
      "x = 8"
    ],
    "solutionStepsEn": [
      "4x - 12 = 2x + 4",
      "2x = 16",
      "x = 8"
    ]
  }
];
