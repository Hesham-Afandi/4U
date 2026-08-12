import { Question } from '../../types';

export const SAT_MODEL_5_QUESTIONS: Question[] = [
  {
    "id": 501,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 10x - 15 > 35؟",
    "questionEn": "Which inequality represents the solutions for 10x - 15 > 35?",
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
        "textEn": "C) x > 50",
        "textAr": "ج) x > 50"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 15 للطرفين تعطي 10x > 50. بالقسمة على 10 نحصل على x > 5.",
    "explanationEn": "Adding 15 to both sides gives 10x > 50. Dividing by 10 gives x > 5.",
    "solutionStepsAr": [
      "10x > 50",
      "x > 5"
    ],
    "solutionStepsEn": [
      "10x > 50",
      "x > 5"
    ]
  },
  {
    "id": 502,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 7x + 6 = 23، فما قيمة 14x؟",
    "questionEn": "If 7x + 6 = 23, what is the value of 14x?",
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
        "textEn": "B) 34",
        "textAr": "ب) 34"
      },
      {
        "textEn": "C) 18",
        "textAr": "ج) 18"
      },
      {
        "textEn": "D) 28",
        "textAr": "د) 28"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 6 من الطرفين نجد (7)x = 17 = 3(7). وبالتالي فإن x = 3. إذن 14x = 2(7)(3) = 34.",
    "explanationEn": "Subtracting 6 gives (7)x = 3(7) => x = 3. Therefore 14x = 2(7)*3 = 34.",
    "solutionStepsAr": [
      "(7)x = 21",
      "x = 3",
      "14x = 42"
    ],
    "solutionStepsEn": [
      "(7)x = 21",
      "x = 3",
      "14x = 42"
    ]
  },
  {
    "id": 503,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 9) وله ميل يساوي 6. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 9) and has a slope of 6. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 6x + 9",
        "textAr": "أ) f(x) = 6x + 9"
      },
      {
        "textEn": "B) f(x) = 9x + 6",
        "textAr": "ب) f(x) = 9x + 6"
      },
      {
        "textEn": "C) f(x) = 6x - 9",
        "textAr": "ج) f(x) = 6x - 9"
      },
      {
        "textEn": "D) f(x) = 10x + 5",
        "textAr": "د) f(x) = 10x + 5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 6 و b = 9.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 6 and y-intercept b = 9.",
    "solutionStepsAr": [
      "f(x) = (6)x + (9)"
    ],
    "solutionStepsEn": [
      "f(x) = (6)x + (9)"
    ]
  },
  {
    "id": 504,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 49 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 49 = 0?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 7",
        "textAr": "أ) 7"
      },
      {
        "textEn": "B) 49",
        "textAr": "ب) 49"
      },
      {
        "textEn": "C) 12",
        "textAr": "ج) 12"
      },
      {
        "textEn": "D) 24.5",
        "textAr": "د) 24.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 49 => x = √49 = 7 (الحل الموجب).",
    "explanationEn": "x² = 49 => x = √49 = 7 (positive solution).",
    "solutionStepsAr": [
      "x² = 49",
      "x = 7"
    ],
    "solutionStepsEn": [
      "x² = 49",
      "x = 7"
    ]
  },
  {
    "id": 505,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 500 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 500 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 75",
        "textAr": "أ) 75"
      },
      {
        "textEn": "B) 85",
        "textAr": "ب) 85"
      },
      {
        "textEn": "C) 425",
        "textAr": "ج) 425"
      },
      {
        "textEn": "D) 37.5",
        "textAr": "د) 37.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 500 = (15/100) × 500 = 75.",
    "explanationEn": "15% of 500 = (15/100) * 500 = 75.",
    "solutionStepsAr": [
      "0.15 × 500 = 75"
    ],
    "solutionStepsEn": [
      "0.15 * 500 = 75"
    ]
  },
  {
    "id": 506,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 20 كرات حمراء و 30 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 20 red balls and 30 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 20 / (20 + 30) = 20/50 = 2/5.",
    "explanationEn": "Probability = Red / Total = 20 / (50) = 2/5.",
    "solutionStepsAr": [
      "20 / 50 = 2/5"
    ],
    "solutionStepsEn": [
      "20 / 50 = 2/5"
    ]
  },
  {
    "id": 507,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 55° وقياس الزاوية B يساوي 65°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 55° and angle B measures 65°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 60°",
        "textAr": "أ) 60°"
      },
      {
        "textEn": "B) 70°",
        "textAr": "ب) 70°"
      },
      {
        "textEn": "C) 50°",
        "textAr": "ج) 50°"
      },
      {
        "textEn": "D) 120°",
        "textAr": "د) 120°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (55° + 65°) = 60°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (55° + 65°) = 60°.",
    "solutionStepsAr": [
      "180 - 120 = 60"
    ],
    "solutionStepsEn": [
      "180 - 120 = 60"
    ]
  },
  {
    "id": 508,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 14\n2x + y = 20\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 14\n2x + y = 20\n\nWhat is the value of x in the given system of equations?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 6",
        "textAr": "أ) 6"
      },
      {
        "textEn": "B) 8",
        "textAr": "ب) 8"
      },
      {
        "textEn": "C) 14",
        "textAr": "ج) 14"
      },
      {
        "textEn": "D) 20",
        "textAr": "د) 20"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 20 - 14 => x = 6.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 20 - 14 => x = 6.",
    "solutionStepsAr": [
      "x = 20 - 14 = 6"
    ],
    "solutionStepsEn": [
      "x = 20 - 14 = 6"
    ]
  },
  {
    "id": 509,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 5x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 5x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 11",
        "textAr": "أ) 11"
      },
      {
        "textEn": "B) 14",
        "textAr": "ب) 14"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 6",
        "textAr": "د) 6"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 5(2) + -3 = 4 + 10 + -3 = 11.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 10 + -3 = 11.",
    "solutionStepsAr": [
      "P(2) = 4 + 10 + -3 = 11"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 10 + -3 = 11"
    ]
  },
  {
    "id": 510,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (5, 2) و (11, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (5, 2) and (11, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (8, 5)",
        "textAr": "أ) (8, 5)"
      },
      {
        "textEn": "B) (11, 8)",
        "textAr": "ب) (11, 8)"
      },
      {
        "textEn": "C) (9, 4)",
        "textAr": "ج) (9, 4)"
      },
      {
        "textEn": "D) (16, 10)",
        "textAr": "د) (16, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (5 + 11)/2 = 8، y = (2 + 8)/2 = 5. نقطة المنتصف هي (8, 5).",
    "explanationEn": "Midpoint x = (5+11)/2 = 8, y = (2+8)/2 = 5 => (8, 5).",
    "solutionStepsAr": [
      "((5+11)/2, (2+8)/2) = (8, 5)"
    ],
    "solutionStepsEn": [
      "((5+11)/2, (2+8)/2) = (8, 5)"
    ]
  },
  {
    "id": 511,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 6 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 6 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 180π",
        "textAr": "أ) 180π"
      },
      {
        "textEn": "B) 360π",
        "textAr": "ب) 360π"
      },
      {
        "textEn": "C) 30π",
        "textAr": "ج) 30π"
      },
      {
        "textEn": "D) 90π",
        "textAr": "د) 90π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (6)² × 5 = 180π.",
    "explanationEn": "Volume V = π r² h = π * (6)² * 5 = 180π.",
    "solutionStepsAr": [
      "V = π × 36 × 5 = 180π"
    ],
    "solutionStepsEn": [
      "V = π * 36 * 5 = 180π"
    ]
  },
  {
    "id": 512,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 7 ساعات. إذا كان العدد الأصلي للبكتيريا هو 2500، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 7 hours. If the initial count is 2500, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 2500(2)^(t/7)",
        "textAr": "أ) N(t) = 2500(2)^(t/7)"
      },
      {
        "textEn": "B) N(t) = 2500(2)^(7t)",
        "textAr": "ب) N(t) = 2500(2)^(7t)"
      },
      {
        "textEn": "C) N(t) = 2500 + 2t",
        "textAr": "ج) N(t) = 2500 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/7)^2500",
        "textAr": "د) N(t) = 2(t/7)^2500"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 2500 وفترة التضاعف d = 7.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 2500 and period d = 7.",
    "solutionStepsAr": [
      "N(t) = 2500 × 2^(t/7)"
    ],
    "solutionStepsEn": [
      "N(t) = 2500 * 2^(t/7)"
    ]
  },
  {
    "id": 513,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 65$ بالإضافة إلى 20$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $65 plus $20 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 20h + 65",
        "textAr": "أ) C(h) = 20h + 65"
      },
      {
        "textEn": "B) C(h) = 65h + 20",
        "textAr": "ب) C(h) = 65h + 20"
      },
      {
        "textEn": "C) C(h) = (20 + 65)h",
        "textAr": "ج) C(h) = (20 + 65)h"
      },
      {
        "textEn": "D) C(h) = 20h - 65",
        "textAr": "د) C(h) = 20h - 65"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 20h ورسوم ثابتة 65، بالتالي C(h) = 20h + 65.",
    "explanationEn": "Total cost consists of variable rate 20h and flat fee 65: C(h) = 20h + 65.",
    "solutionStepsAr": [
      "C(h) = 20h + 65"
    ],
    "solutionStepsEn": [
      "C(h) = 20h + 65"
    ]
  },
  {
    "id": 514,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 12، فما قيمة x + 5؟",
    "questionEn": "If √x = 12, what is the value of x + 5?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 149",
        "textAr": "أ) 149"
      },
      {
        "textEn": "B) 17",
        "textAr": "ب) 17"
      },
      {
        "textEn": "C) 29",
        "textAr": "ج) 29"
      },
      {
        "textEn": "D) 144",
        "textAr": "د) 144"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 12² = 144. إذن x + 5 = 144 + 5 = 149.",
    "explanationEn": "Squaring both sides: x = 12² = 144. Thus x + 5 = 149.",
    "solutionStepsAr": [
      "x = 144",
      "x + 5 = 149"
    ],
    "solutionStepsEn": [
      "x = 144",
      "x + 5 = 149"
    ]
  },
  {
    "id": 515,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 5)² + (y + 6)² = 64 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 5)² + (y + 6)² = 64 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 8",
        "textAr": "أ) 8"
      },
      {
        "textEn": "B) 64",
        "textAr": "ب) 64"
      },
      {
        "textEn": "C) 16",
        "textAr": "ج) 16"
      },
      {
        "textEn": "D) 5",
        "textAr": "د) 5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 64، فإن نصف القطر r = √64 = 8.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 64, radius r = √64 = 8.",
    "solutionStepsAr": [
      "r² = 64",
      "r = 8"
    ],
    "solutionStepsEn": [
      "r² = 64",
      "r = 8"
    ]
  },
  {
    "id": 516,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 75. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 75. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 15",
        "textAr": "أ) 15"
      },
      {
        "textEn": "B) 30",
        "textAr": "ب) 30"
      },
      {
        "textEn": "C) 75",
        "textAr": "ج) 75"
      },
      {
        "textEn": "D) 12",
        "textAr": "د) 12"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 75 / 5 = 15.",
    "explanationEn": "Mean = Sum / Count = 75 / 5 = 15.",
    "solutionStepsAr": [
      "75 / 5 = 15"
    ],
    "solutionStepsEn": [
      "75 / 5 = 15"
    ]
  },
  {
    "id": 517,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 65$ بالإضافة إلى 20$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $65 plus $20 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 20h + 65",
        "textAr": "أ) C(h) = 20h + 65"
      },
      {
        "textEn": "B) C(h) = 65h + 20",
        "textAr": "ب) C(h) = 65h + 20"
      },
      {
        "textEn": "C) C(h) = (20 + 65)h",
        "textAr": "ج) C(h) = (20 + 65)h"
      },
      {
        "textEn": "D) C(h) = 20h - 65",
        "textAr": "د) C(h) = 20h - 65"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 20h ورسوم ثابتة 65، بالتالي C(h) = 20h + 65.",
    "explanationEn": "Total cost consists of variable rate 20h and flat fee 65: C(h) = 20h + 65.",
    "solutionStepsAr": [
      "C(h) = 20h + 65"
    ],
    "solutionStepsEn": [
      "C(h) = 20h + 65"
    ]
  },
  {
    "id": 518,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 8، فما قيمة x + 5؟",
    "questionEn": "If √x = 8, what is the value of x + 5?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 69",
        "textAr": "أ) 69"
      },
      {
        "textEn": "B) 13",
        "textAr": "ب) 13"
      },
      {
        "textEn": "C) 21",
        "textAr": "ج) 21"
      },
      {
        "textEn": "D) 64",
        "textAr": "د) 64"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 8² = 64. إذن x + 5 = 64 + 5 = 69.",
    "explanationEn": "Squaring both sides: x = 8² = 64. Thus x + 5 = 69.",
    "solutionStepsAr": [
      "x = 64",
      "x + 5 = 69"
    ],
    "solutionStepsEn": [
      "x = 64",
      "x + 5 = 69"
    ]
  },
  {
    "id": 519,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 5)² + (y + 6)² = 25 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 5)² + (y + 6)² = 25 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 5",
        "textAr": "أ) 5"
      },
      {
        "textEn": "B) 25",
        "textAr": "ب) 25"
      },
      {
        "textEn": "C) 10",
        "textAr": "ج) 10"
      },
      {
        "textEn": "D) 5",
        "textAr": "د) 5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 25، فإن نصف القطر r = √25 = 5.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 25, radius r = √25 = 5.",
    "solutionStepsAr": [
      "r² = 25",
      "r = 5"
    ],
    "solutionStepsEn": [
      "r² = 25",
      "r = 5"
    ]
  },
  {
    "id": 520,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 75. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 75. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 15",
        "textAr": "أ) 15"
      },
      {
        "textEn": "B) 30",
        "textAr": "ب) 30"
      },
      {
        "textEn": "C) 75",
        "textAr": "ج) 75"
      },
      {
        "textEn": "D) 12",
        "textAr": "د) 12"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 75 / 5 = 15.",
    "explanationEn": "Mean = Sum / Count = 75 / 5 = 15.",
    "solutionStepsAr": [
      "75 / 5 = 15"
    ],
    "solutionStepsEn": [
      "75 / 5 = 15"
    ]
  },
  {
    "id": 521,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 65$ بالإضافة إلى 20$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $65 plus $20 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 20h + 65",
        "textAr": "أ) C(h) = 20h + 65"
      },
      {
        "textEn": "B) C(h) = 65h + 20",
        "textAr": "ب) C(h) = 65h + 20"
      },
      {
        "textEn": "C) C(h) = (20 + 65)h",
        "textAr": "ج) C(h) = (20 + 65)h"
      },
      {
        "textEn": "D) C(h) = 20h - 65",
        "textAr": "د) C(h) = 20h - 65"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 20h ورسوم ثابتة 65، بالتالي C(h) = 20h + 65.",
    "explanationEn": "Total cost consists of variable rate 20h and flat fee 65: C(h) = 20h + 65.",
    "solutionStepsAr": [
      "C(h) = 20h + 65"
    ],
    "solutionStepsEn": [
      "C(h) = 20h + 65"
    ]
  },
  {
    "id": 522,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 192، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 192, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "59",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 177. بالقسمة على 3: x = 59.",
    "explanationEn": "Subtract 15 from both sides: 3x = 177. Divide by 3: x = 59.",
    "solutionStepsAr": [
      "3x = 177",
      "x = 59"
    ],
    "solutionStepsEn": [
      "3x = 177",
      "x = 59"
    ]
  },
  {
    "id": 523,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 9)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 9)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 9.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 9.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 524,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 65°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 65°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "115",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 65° = 115°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 65 = 115.",
    "solutionStepsAr": [
      "180 - 65 = 115"
    ],
    "solutionStepsEn": [
      "180 - 65 = 115"
    ]
  },
  {
    "id": 525,
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
    "id": 526,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 7x + b تقع عليها النقطة (2, 39). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 7x + b passes through (2, 39). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "25",
    "explanationAr": "بالتعويض بالنقطة: 39 = 7(2) + b => b = 25.",
    "explanationEn": "Substitute the point: 39 = 14 + b => b = 25.",
    "solutionStepsAr": [
      "b = 25"
    ],
    "solutionStepsEn": [
      "b = 25"
    ]
  },
  {
    "id": 527,
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
    "id": 528,
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
    "id": 529,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 14x + 49 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 14x + 49 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-14)² - 4(1)(49) = 196 - 196 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-14)² - 4(1)(49) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 530,
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
    "id": 531,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 15؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 15?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 35",
        "textAr": "أ) 35"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 31",
        "textAr": "د) 31"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 15: y = 2(15) + 5 = 30 + 5 = 35.",
    "explanationEn": "Substitute x = 15: y = 2(15) + 5 = 35.",
    "solutionStepsAr": [
      "y = 2 × 15 + 5 = 35"
    ],
    "solutionStepsEn": [
      "y = 2 * 15 + 5 = 35"
    ]
  },
  {
    "id": 532,
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
    "id": 533,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 22x + 121 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 22x + 121 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-22)² - 4(1)(121) = 484 - 484 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-22)² - 4(1)(121) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 534,
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
    "id": 535,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 15؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 15?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 35",
        "textAr": "أ) 35"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 31",
        "textAr": "د) 31"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 15: y = 2(15) + 5 = 30 + 5 = 35.",
    "explanationEn": "Substitute x = 15: y = 2(15) + 5 = 35.",
    "solutionStepsAr": [
      "y = 2 × 15 + 5 = 35"
    ],
    "solutionStepsEn": [
      "y = 2 * 15 + 5 = 35"
    ]
  },
  {
    "id": 536,
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
    "id": 537,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 30x + 225 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 30x + 225 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-30)² - 4(1)(225) = 900 - 900 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-30)² - 4(1)(225) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 538,
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
    "id": 539,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 15؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 15?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 35",
        "textAr": "أ) 35"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 31",
        "textAr": "د) 31"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 15: y = 2(15) + 5 = 30 + 5 = 35.",
    "explanationEn": "Substitute x = 15: y = 2(15) + 5 = 35.",
    "solutionStepsAr": [
      "y = 2 × 15 + 5 = 35"
    ],
    "solutionStepsEn": [
      "y = 2 * 15 + 5 = 35"
    ]
  },
  {
    "id": 540,
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
    "id": 541,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 38x + 361 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 38x + 361 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-38)² - 4(1)(361) = 1444 - 1444 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-38)² - 4(1)(361) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 542,
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
    "id": 543,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 15؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 15?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 35",
        "textAr": "أ) 35"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 31",
        "textAr": "د) 31"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 15: y = 2(15) + 5 = 30 + 5 = 35.",
    "explanationEn": "Substitute x = 15: y = 2(15) + 5 = 35.",
    "solutionStepsAr": [
      "y = 2 × 15 + 5 = 35"
    ],
    "solutionStepsEn": [
      "y = 2 * 15 + 5 = 35"
    ]
  },
  {
    "id": 544,
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
    "id": 545,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 6x + 9 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 6x + 9 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-6)² - 4(1)(9) = 36 - 36 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-6)² - 4(1)(9) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 546,
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
    "id": 547,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 15؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 15?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 35",
        "textAr": "أ) 35"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 31",
        "textAr": "د) 31"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 15: y = 2(15) + 5 = 30 + 5 = 35.",
    "explanationEn": "Substitute x = 15: y = 2(15) + 5 = 35.",
    "solutionStepsAr": [
      "y = 2 × 15 + 5 = 35"
    ],
    "solutionStepsEn": [
      "y = 2 * 15 + 5 = 35"
    ]
  },
  {
    "id": 548,
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
    "id": 549,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 20\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 20\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 550,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 15x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 15x + 36 = 0?",
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
    "id": 551,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 10، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 10, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (10)√3. بالقسمة على √3 نحصل على 10.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (10)√3. Divided by √3 gives 10.",
    "solutionStepsAr": [
      "Side opposite 60° = (10)√3",
      "Divided by √3 = 10"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (10)√3",
      "Divided by √3 = 10"
    ]
  },
  {
    "id": 552,
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
    "id": 553,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (5, 2) و (11, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (5, 2) and (11, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(11 - 5)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 554,
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
