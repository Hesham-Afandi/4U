import { Question } from '../../types';

export const SAT_MODEL_7_QUESTIONS: Question[] = [
  {
    "id": 701,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 14x - 21 > 49؟",
    "questionEn": "Which inequality represents the solutions for 14x - 21 > 49?",
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
        "textEn": "C) x > 70",
        "textAr": "ج) x > 70"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 21 للطرفين تعطي 14x > 70. بالقسمة على 14 نحصل على x > 5.",
    "explanationEn": "Adding 21 to both sides gives 14x > 70. Dividing by 14 gives x > 5.",
    "solutionStepsAr": [
      "14x > 70",
      "x > 5"
    ],
    "solutionStepsEn": [
      "14x > 70",
      "x > 5"
    ]
  },
  {
    "id": 702,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 9x + 8 = 31، فما قيمة 18x؟",
    "questionEn": "If 9x + 8 = 31, what is the value of 18x?",
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
        "textEn": "B) 46",
        "textAr": "ب) 46"
      },
      {
        "textEn": "C) 24",
        "textAr": "ج) 24"
      },
      {
        "textEn": "D) 36",
        "textAr": "د) 36"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 8 من الطرفين نجد (9)x = 23 = 3(9). وبالتالي فإن x = 3. إذن 18x = 2(9)(3) = 46.",
    "explanationEn": "Subtracting 8 gives (9)x = 3(9) => x = 3. Therefore 18x = 2(9)*3 = 46.",
    "solutionStepsAr": [
      "(9)x = 27",
      "x = 3",
      "18x = 54"
    ],
    "solutionStepsEn": [
      "(9)x = 27",
      "x = 3",
      "18x = 54"
    ]
  },
  {
    "id": 703,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 11) وله ميل يساوي 8. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 11) and has a slope of 8. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 8x + 11",
        "textAr": "أ) f(x) = 8x + 11"
      },
      {
        "textEn": "B) f(x) = 11x + 8",
        "textAr": "ب) f(x) = 11x + 8"
      },
      {
        "textEn": "C) f(x) = 8x - 11",
        "textAr": "ج) f(x) = 8x - 11"
      },
      {
        "textEn": "D) f(x) = 12x + 7",
        "textAr": "د) f(x) = 12x + 7"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 8 و b = 11.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 8 and y-intercept b = 11.",
    "solutionStepsAr": [
      "f(x) = (8)x + (11)"
    ],
    "solutionStepsEn": [
      "f(x) = (8)x + (11)"
    ]
  },
  {
    "id": 704,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 81 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 81 = 0?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 9",
        "textAr": "أ) 9"
      },
      {
        "textEn": "B) 81",
        "textAr": "ب) 81"
      },
      {
        "textEn": "C) 14",
        "textAr": "ج) 14"
      },
      {
        "textEn": "D) 40.5",
        "textAr": "د) 40.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 81 => x = √81 = 9 (الحل الموجب).",
    "explanationEn": "x² = 81 => x = √81 = 9 (positive solution).",
    "solutionStepsAr": [
      "x² = 81",
      "x = 9"
    ],
    "solutionStepsEn": [
      "x² = 81",
      "x = 9"
    ]
  },
  {
    "id": 705,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 700 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 700 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 105",
        "textAr": "أ) 105"
      },
      {
        "textEn": "B) 115",
        "textAr": "ب) 115"
      },
      {
        "textEn": "C) 595",
        "textAr": "ج) 595"
      },
      {
        "textEn": "D) 52.5",
        "textAr": "د) 52.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 700 = (15/100) × 700 = 105.",
    "explanationEn": "15% of 700 = (15/100) * 700 = 105.",
    "solutionStepsAr": [
      "0.15 × 700 = 105"
    ],
    "solutionStepsEn": [
      "0.15 * 700 = 105"
    ]
  },
  {
    "id": 706,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 28 كرات حمراء و 42 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 28 red balls and 42 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 28 / (28 + 42) = 28/70 = 2/5.",
    "explanationEn": "Probability = Red / Total = 28 / (70) = 2/5.",
    "solutionStepsAr": [
      "28 / 70 = 2/5"
    ],
    "solutionStepsEn": [
      "28 / 70 = 2/5"
    ]
  },
  {
    "id": 707,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 57° وقياس الزاوية B يساوي 67°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 57° and angle B measures 67°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 56°",
        "textAr": "أ) 56°"
      },
      {
        "textEn": "B) 66°",
        "textAr": "ب) 66°"
      },
      {
        "textEn": "C) 46°",
        "textAr": "ج) 46°"
      },
      {
        "textEn": "D) 124°",
        "textAr": "د) 124°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (57° + 67°) = 56°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (57° + 67°) = 56°.",
    "solutionStepsAr": [
      "180 - 124 = 56"
    ],
    "solutionStepsEn": [
      "180 - 124 = 56"
    ]
  },
  {
    "id": 708,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 18\n2x + y = 26\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 18\n2x + y = 26\n\nWhat is the value of x in the given system of equations?",
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
        "textEn": "B) 10",
        "textAr": "ب) 10"
      },
      {
        "textEn": "C) 18",
        "textAr": "ج) 18"
      },
      {
        "textEn": "D) 26",
        "textAr": "د) 26"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 26 - 18 => x = 8.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 26 - 18 => x = 8.",
    "solutionStepsAr": [
      "x = 26 - 18 = 8"
    ],
    "solutionStepsEn": [
      "x = 26 - 18 = 8"
    ]
  },
  {
    "id": 709,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 7x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 7x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 15",
        "textAr": "أ) 15"
      },
      {
        "textEn": "B) 18",
        "textAr": "ب) 18"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 10",
        "textAr": "د) 10"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 7(2) + -3 = 4 + 14 + -3 = 15.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 14 + -3 = 15.",
    "solutionStepsAr": [
      "P(2) = 4 + 14 + -3 = 15"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 14 + -3 = 15"
    ]
  },
  {
    "id": 710,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (7, 2) و (13, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (7, 2) and (13, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (10, 5)",
        "textAr": "أ) (10, 5)"
      },
      {
        "textEn": "B) (13, 8)",
        "textAr": "ب) (13, 8)"
      },
      {
        "textEn": "C) (11, 4)",
        "textAr": "ج) (11, 4)"
      },
      {
        "textEn": "D) (20, 10)",
        "textAr": "د) (20, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (7 + 13)/2 = 10، y = (2 + 8)/2 = 5. نقطة المنتصف هي (10, 5).",
    "explanationEn": "Midpoint x = (7+13)/2 = 10, y = (2+8)/2 = 5 => (10, 5).",
    "solutionStepsAr": [
      "((7+13)/2, (2+8)/2) = (10, 5)"
    ],
    "solutionStepsEn": [
      "((7+13)/2, (2+8)/2) = (10, 5)"
    ]
  },
  {
    "id": 711,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 8 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 8 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 320π",
        "textAr": "أ) 320π"
      },
      {
        "textEn": "B) 640π",
        "textAr": "ب) 640π"
      },
      {
        "textEn": "C) 40π",
        "textAr": "ج) 40π"
      },
      {
        "textEn": "D) 160π",
        "textAr": "د) 160π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (8)² × 5 = 320π.",
    "explanationEn": "Volume V = π r² h = π * (8)² * 5 = 320π.",
    "solutionStepsAr": [
      "V = π × 64 × 5 = 320π"
    ],
    "solutionStepsEn": [
      "V = π * 64 * 5 = 320π"
    ]
  },
  {
    "id": 712,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 9 ساعات. إذا كان العدد الأصلي للبكتيريا هو 3500، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 9 hours. If the initial count is 3500, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 3500(2)^(t/9)",
        "textAr": "أ) N(t) = 3500(2)^(t/9)"
      },
      {
        "textEn": "B) N(t) = 3500(2)^(9t)",
        "textAr": "ب) N(t) = 3500(2)^(9t)"
      },
      {
        "textEn": "C) N(t) = 3500 + 2t",
        "textAr": "ج) N(t) = 3500 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/9)^3500",
        "textAr": "د) N(t) = 2(t/9)^3500"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 3500 وفترة التضاعف d = 9.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 3500 and period d = 9.",
    "solutionStepsAr": [
      "N(t) = 3500 × 2^(t/9)"
    ],
    "solutionStepsEn": [
      "N(t) = 3500 * 2^(t/9)"
    ]
  },
  {
    "id": 713,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 75$ بالإضافة إلى 22$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $75 plus $22 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 22h + 75",
        "textAr": "أ) C(h) = 22h + 75"
      },
      {
        "textEn": "B) C(h) = 75h + 22",
        "textAr": "ب) C(h) = 75h + 22"
      },
      {
        "textEn": "C) C(h) = (22 + 75)h",
        "textAr": "ج) C(h) = (22 + 75)h"
      },
      {
        "textEn": "D) C(h) = 22h - 75",
        "textAr": "د) C(h) = 22h - 75"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 22h ورسوم ثابتة 75، بالتالي C(h) = 22h + 75.",
    "explanationEn": "Total cost consists of variable rate 22h and flat fee 75: C(h) = 22h + 75.",
    "solutionStepsAr": [
      "C(h) = 22h + 75"
    ],
    "solutionStepsEn": [
      "C(h) = 22h + 75"
    ]
  },
  {
    "id": 714,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 4، فما قيمة x + 7؟",
    "questionEn": "If √x = 4, what is the value of x + 7?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 23",
        "textAr": "أ) 23"
      },
      {
        "textEn": "B) 11",
        "textAr": "ب) 11"
      },
      {
        "textEn": "C) 15",
        "textAr": "ج) 15"
      },
      {
        "textEn": "D) 16",
        "textAr": "د) 16"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 4² = 16. إذن x + 7 = 16 + 7 = 23.",
    "explanationEn": "Squaring both sides: x = 4² = 16. Thus x + 7 = 23.",
    "solutionStepsAr": [
      "x = 16",
      "x + 7 = 23"
    ],
    "solutionStepsEn": [
      "x = 16",
      "x + 7 = 23"
    ]
  },
  {
    "id": 715,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 7)² + (y + 8)² = 100 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 7)² + (y + 8)² = 100 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 10",
        "textAr": "أ) 10"
      },
      {
        "textEn": "B) 100",
        "textAr": "ب) 100"
      },
      {
        "textEn": "C) 20",
        "textAr": "ج) 20"
      },
      {
        "textEn": "D) 7",
        "textAr": "د) 7"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 100، فإن نصف القطر r = √100 = 10.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 100, radius r = √100 = 10.",
    "solutionStepsAr": [
      "r² = 100",
      "r = 10"
    ],
    "solutionStepsEn": [
      "r² = 100",
      "r = 10"
    ]
  },
  {
    "id": 716,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 85. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 85. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 17",
        "textAr": "أ) 17"
      },
      {
        "textEn": "B) 34",
        "textAr": "ب) 34"
      },
      {
        "textEn": "C) 85",
        "textAr": "ج) 85"
      },
      {
        "textEn": "D) 14",
        "textAr": "د) 14"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 85 / 5 = 17.",
    "explanationEn": "Mean = Sum / Count = 85 / 5 = 17.",
    "solutionStepsAr": [
      "85 / 5 = 17"
    ],
    "solutionStepsEn": [
      "85 / 5 = 17"
    ]
  },
  {
    "id": 717,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 75$ بالإضافة إلى 22$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $75 plus $22 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 22h + 75",
        "textAr": "أ) C(h) = 22h + 75"
      },
      {
        "textEn": "B) C(h) = 75h + 22",
        "textAr": "ب) C(h) = 75h + 22"
      },
      {
        "textEn": "C) C(h) = (22 + 75)h",
        "textAr": "ج) C(h) = (22 + 75)h"
      },
      {
        "textEn": "D) C(h) = 22h - 75",
        "textAr": "د) C(h) = 22h - 75"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 22h ورسوم ثابتة 75، بالتالي C(h) = 22h + 75.",
    "explanationEn": "Total cost consists of variable rate 22h and flat fee 75: C(h) = 22h + 75.",
    "solutionStepsAr": [
      "C(h) = 22h + 75"
    ],
    "solutionStepsEn": [
      "C(h) = 22h + 75"
    ]
  },
  {
    "id": 718,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 8، فما قيمة x + 7؟",
    "questionEn": "If √x = 8, what is the value of x + 7?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 71",
        "textAr": "أ) 71"
      },
      {
        "textEn": "B) 15",
        "textAr": "ب) 15"
      },
      {
        "textEn": "C) 23",
        "textAr": "ج) 23"
      },
      {
        "textEn": "D) 64",
        "textAr": "د) 64"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 8² = 64. إذن x + 7 = 64 + 7 = 71.",
    "explanationEn": "Squaring both sides: x = 8² = 64. Thus x + 7 = 71.",
    "solutionStepsAr": [
      "x = 64",
      "x + 7 = 71"
    ],
    "solutionStepsEn": [
      "x = 64",
      "x + 7 = 71"
    ]
  },
  {
    "id": 719,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 7)² + (y + 8)² = 49 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 7)² + (y + 8)² = 49 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
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
        "textEn": "C) 14",
        "textAr": "ج) 14"
      },
      {
        "textEn": "D) 7",
        "textAr": "د) 7"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 49، فإن نصف القطر r = √49 = 7.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 49, radius r = √49 = 7.",
    "solutionStepsAr": [
      "r² = 49",
      "r = 7"
    ],
    "solutionStepsEn": [
      "r² = 49",
      "r = 7"
    ]
  },
  {
    "id": 720,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 85. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 85. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 17",
        "textAr": "أ) 17"
      },
      {
        "textEn": "B) 34",
        "textAr": "ب) 34"
      },
      {
        "textEn": "C) 85",
        "textAr": "ج) 85"
      },
      {
        "textEn": "D) 14",
        "textAr": "د) 14"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 85 / 5 = 17.",
    "explanationEn": "Mean = Sum / Count = 85 / 5 = 17.",
    "solutionStepsAr": [
      "85 / 5 = 17"
    ],
    "solutionStepsEn": [
      "85 / 5 = 17"
    ]
  },
  {
    "id": 721,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 75$ بالإضافة إلى 22$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $75 plus $22 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 22h + 75",
        "textAr": "أ) C(h) = 22h + 75"
      },
      {
        "textEn": "B) C(h) = 75h + 22",
        "textAr": "ب) C(h) = 75h + 22"
      },
      {
        "textEn": "C) C(h) = (22 + 75)h",
        "textAr": "ج) C(h) = (22 + 75)h"
      },
      {
        "textEn": "D) C(h) = 22h - 75",
        "textAr": "د) C(h) = 22h - 75"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 22h ورسوم ثابتة 75، بالتالي C(h) = 22h + 75.",
    "explanationEn": "Total cost consists of variable rate 22h and flat fee 75: C(h) = 22h + 75.",
    "solutionStepsAr": [
      "C(h) = 22h + 75"
    ],
    "solutionStepsEn": [
      "C(h) = 22h + 75"
    ]
  },
  {
    "id": 722,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 210، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 210, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "65",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 195. بالقسمة على 3: x = 65.",
    "explanationEn": "Subtract 15 from both sides: 3x = 195. Divide by 3: x = 65.",
    "solutionStepsAr": [
      "3x = 195",
      "x = 65"
    ],
    "solutionStepsEn": [
      "3x = 195",
      "x = 65"
    ]
  },
  {
    "id": 723,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 11)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 11)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 11.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 11.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 724,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 75°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 75°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "105",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 75° = 105°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 75 = 105.",
    "solutionStepsAr": [
      "180 - 75 = 105"
    ],
    "solutionStepsEn": [
      "180 - 75 = 105"
    ]
  },
  {
    "id": 725,
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
    "id": 726,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 9x + b تقع عليها النقطة (2, 49). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 9x + b passes through (2, 49). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "31",
    "explanationAr": "بالتعويض بالنقطة: 49 = 9(2) + b => b = 31.",
    "explanationEn": "Substitute the point: 49 = 18 + b => b = 31.",
    "solutionStepsAr": [
      "b = 31"
    ],
    "solutionStepsEn": [
      "b = 31"
    ]
  },
  {
    "id": 727,
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
    "id": 728,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 3x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 3x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/3",
        "textAr": "أ) -1/3"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 3"
      },
      {
        "textEn": "C) 1/3",
        "textAr": "ج) 1/3"
      },
      {
        "textEn": "D) -3",
        "textAr": "د) -3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/3.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 3, which is -1/3.",
    "solutionStepsAr": [
      "m_perp = -1 / 3"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 3"
    ]
  },
  {
    "id": 729,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 730,
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
    "id": 731,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 17؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 17?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 39",
        "textAr": "أ) 39"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 34",
        "textAr": "ج) 34"
      },
      {
        "textEn": "D) 35",
        "textAr": "د) 35"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 17: y = 2(17) + 5 = 34 + 5 = 39.",
    "explanationEn": "Substitute x = 17: y = 2(17) + 5 = 39.",
    "solutionStepsAr": [
      "y = 2 × 17 + 5 = 39"
    ],
    "solutionStepsEn": [
      "y = 2 * 17 + 5 = 39"
    ]
  },
  {
    "id": 732,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 3x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 3x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/3",
        "textAr": "أ) -1/3"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 3"
      },
      {
        "textEn": "C) 1/3",
        "textAr": "ج) 1/3"
      },
      {
        "textEn": "D) -3",
        "textAr": "د) -3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/3.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 3, which is -1/3.",
    "solutionStepsAr": [
      "m_perp = -1 / 3"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 3"
    ]
  },
  {
    "id": 733,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 734,
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
    "id": 735,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 17؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 17?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 39",
        "textAr": "أ) 39"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 34",
        "textAr": "ج) 34"
      },
      {
        "textEn": "D) 35",
        "textAr": "د) 35"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 17: y = 2(17) + 5 = 34 + 5 = 39.",
    "explanationEn": "Substitute x = 17: y = 2(17) + 5 = 39.",
    "solutionStepsAr": [
      "y = 2 × 17 + 5 = 39"
    ],
    "solutionStepsEn": [
      "y = 2 * 17 + 5 = 39"
    ]
  },
  {
    "id": 736,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 3x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 3x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/3",
        "textAr": "أ) -1/3"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 3"
      },
      {
        "textEn": "C) 1/3",
        "textAr": "ج) 1/3"
      },
      {
        "textEn": "D) -3",
        "textAr": "د) -3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/3.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 3, which is -1/3.",
    "solutionStepsAr": [
      "m_perp = -1 / 3"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 3"
    ]
  },
  {
    "id": 737,
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
    "id": 738,
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
    "id": 739,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 17؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 17?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 39",
        "textAr": "أ) 39"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 34",
        "textAr": "ج) 34"
      },
      {
        "textEn": "D) 35",
        "textAr": "د) 35"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 17: y = 2(17) + 5 = 34 + 5 = 39.",
    "explanationEn": "Substitute x = 17: y = 2(17) + 5 = 39.",
    "solutionStepsAr": [
      "y = 2 × 17 + 5 = 39"
    ],
    "solutionStepsEn": [
      "y = 2 * 17 + 5 = 39"
    ]
  },
  {
    "id": 740,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 3x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 3x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/3",
        "textAr": "أ) -1/3"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 3"
      },
      {
        "textEn": "C) 1/3",
        "textAr": "ج) 1/3"
      },
      {
        "textEn": "D) -3",
        "textAr": "د) -3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/3.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 3, which is -1/3.",
    "solutionStepsAr": [
      "m_perp = -1 / 3"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 3"
    ]
  },
  {
    "id": 741,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 742,
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
    "id": 743,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 17؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 17?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 39",
        "textAr": "أ) 39"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 34",
        "textAr": "ج) 34"
      },
      {
        "textEn": "D) 35",
        "textAr": "د) 35"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 17: y = 2(17) + 5 = 34 + 5 = 39.",
    "explanationEn": "Substitute x = 17: y = 2(17) + 5 = 39.",
    "solutionStepsAr": [
      "y = 2 × 17 + 5 = 39"
    ],
    "solutionStepsEn": [
      "y = 2 * 17 + 5 = 39"
    ]
  },
  {
    "id": 744,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مستقيم L له معادلة y = 3x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 3x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/3",
        "textAr": "أ) -1/3"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 3"
      },
      {
        "textEn": "C) 1/3",
        "textAr": "ج) 1/3"
      },
      {
        "textEn": "D) -3",
        "textAr": "د) -3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/3.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 3, which is -1/3.",
    "solutionStepsAr": [
      "m_perp = -1 / 3"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 3"
    ]
  },
  {
    "id": 745,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 746,
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
    "id": 747,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 17؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 17?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 39",
        "textAr": "أ) 39"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 34",
        "textAr": "ج) 34"
      },
      {
        "textEn": "D) 35",
        "textAr": "د) 35"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 17: y = 2(17) + 5 = 34 + 5 = 39.",
    "explanationEn": "Substitute x = 17: y = 2(17) + 5 = 39.",
    "solutionStepsAr": [
      "y = 2 × 17 + 5 = 39"
    ],
    "solutionStepsEn": [
      "y = 2 * 17 + 5 = 39"
    ]
  },
  {
    "id": 748,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مستقيم L له معادلة y = 3x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 3x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/3",
        "textAr": "أ) -1/3"
      },
      {
        "textEn": "B) 3",
        "textAr": "ب) 3"
      },
      {
        "textEn": "C) 1/3",
        "textAr": "ج) 1/3"
      },
      {
        "textEn": "D) -3",
        "textAr": "د) -3"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/3.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 3, which is -1/3.",
    "solutionStepsAr": [
      "m_perp = -1 / 3"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 3"
    ]
  },
  {
    "id": 749,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 22\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 22\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 750,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 17x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 17x + 36 = 0?",
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
    "id": 751,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 12، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 12, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "12",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (12)√3. بالقسمة على √3 نحصل على 12.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (12)√3. Divided by √3 gives 12.",
    "solutionStepsAr": [
      "Side opposite 60° = (12)√3",
      "Divided by √3 = 12"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (12)√3",
      "Divided by √3 = 12"
    ]
  },
  {
    "id": 752,
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
    "id": 753,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (7, 2) و (13, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (7, 2) and (13, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(13 - 7)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 754,
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
