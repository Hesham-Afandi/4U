import { Question } from '../../types';

export const SAT_MODEL_9_QUESTIONS: Question[] = [
  {
    "id": 901,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 18x - 27 > 63؟",
    "questionEn": "Which inequality represents the solutions for 18x - 27 > 63?",
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
        "textEn": "C) x > 90",
        "textAr": "ج) x > 90"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 27 للطرفين تعطي 18x > 90. بالقسمة على 18 نحصل على x > 5.",
    "explanationEn": "Adding 27 to both sides gives 18x > 90. Dividing by 18 gives x > 5.",
    "solutionStepsAr": [
      "18x > 90",
      "x > 5"
    ],
    "solutionStepsEn": [
      "18x > 90",
      "x > 5"
    ]
  },
  {
    "id": 902,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 11x + 10 = 39، فما قيمة 22x؟",
    "questionEn": "If 11x + 10 = 39, what is the value of 22x?",
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
        "textEn": "B) 58",
        "textAr": "ب) 58"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 44",
        "textAr": "د) 44"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 10 من الطرفين نجد (11)x = 29 = 3(11). وبالتالي فإن x = 3. إذن 22x = 2(11)(3) = 58.",
    "explanationEn": "Subtracting 10 gives (11)x = 3(11) => x = 3. Therefore 22x = 2(11)*3 = 58.",
    "solutionStepsAr": [
      "(11)x = 33",
      "x = 3",
      "22x = 66"
    ],
    "solutionStepsEn": [
      "(11)x = 33",
      "x = 3",
      "22x = 66"
    ]
  },
  {
    "id": 903,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 13) وله ميل يساوي 10. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 13) and has a slope of 10. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 10x + 13",
        "textAr": "أ) f(x) = 10x + 13"
      },
      {
        "textEn": "B) f(x) = 13x + 10",
        "textAr": "ب) f(x) = 13x + 10"
      },
      {
        "textEn": "C) f(x) = 10x - 13",
        "textAr": "ج) f(x) = 10x - 13"
      },
      {
        "textEn": "D) f(x) = 14x + 9",
        "textAr": "د) f(x) = 14x + 9"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 10 و b = 13.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 10 and y-intercept b = 13.",
    "solutionStepsAr": [
      "f(x) = (10)x + (13)"
    ],
    "solutionStepsEn": [
      "f(x) = (10)x + (13)"
    ]
  },
  {
    "id": 904,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 121 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 121 = 0?",
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
        "textEn": "B) 121",
        "textAr": "ب) 121"
      },
      {
        "textEn": "C) 16",
        "textAr": "ج) 16"
      },
      {
        "textEn": "D) 60.5",
        "textAr": "د) 60.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 121 => x = √121 = 11 (الحل الموجب).",
    "explanationEn": "x² = 121 => x = √121 = 11 (positive solution).",
    "solutionStepsAr": [
      "x² = 121",
      "x = 11"
    ],
    "solutionStepsEn": [
      "x² = 121",
      "x = 11"
    ]
  },
  {
    "id": 905,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 900 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 900 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 135",
        "textAr": "أ) 135"
      },
      {
        "textEn": "B) 145",
        "textAr": "ب) 145"
      },
      {
        "textEn": "C) 765",
        "textAr": "ج) 765"
      },
      {
        "textEn": "D) 67.5",
        "textAr": "د) 67.5"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 900 = (15/100) × 900 = 135.",
    "explanationEn": "15% of 900 = (15/100) * 900 = 135.",
    "solutionStepsAr": [
      "0.15 × 900 = 135"
    ],
    "solutionStepsEn": [
      "0.15 * 900 = 135"
    ]
  },
  {
    "id": 906,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 36 كرات حمراء و 54 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 36 red balls and 54 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 36 / (36 + 54) = 36/90 = 2/5.",
    "explanationEn": "Probability = Red / Total = 36 / (90) = 2/5.",
    "solutionStepsAr": [
      "36 / 90 = 2/5"
    ],
    "solutionStepsEn": [
      "36 / 90 = 2/5"
    ]
  },
  {
    "id": 907,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 59° وقياس الزاوية B يساوي 69°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 59° and angle B measures 69°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 52°",
        "textAr": "أ) 52°"
      },
      {
        "textEn": "B) 62°",
        "textAr": "ب) 62°"
      },
      {
        "textEn": "C) 42°",
        "textAr": "ج) 42°"
      },
      {
        "textEn": "D) 128°",
        "textAr": "د) 128°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (59° + 69°) = 52°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (59° + 69°) = 52°.",
    "solutionStepsAr": [
      "180 - 128 = 52"
    ],
    "solutionStepsEn": [
      "180 - 128 = 52"
    ]
  },
  {
    "id": 908,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 22\n2x + y = 32\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 22\n2x + y = 32\n\nWhat is the value of x in the given system of equations?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 10",
        "textAr": "أ) 10"
      },
      {
        "textEn": "B) 12",
        "textAr": "ب) 12"
      },
      {
        "textEn": "C) 22",
        "textAr": "ج) 22"
      },
      {
        "textEn": "D) 32",
        "textAr": "د) 32"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 32 - 22 => x = 10.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 32 - 22 => x = 10.",
    "solutionStepsAr": [
      "x = 32 - 22 = 10"
    ],
    "solutionStepsEn": [
      "x = 32 - 22 = 10"
    ]
  },
  {
    "id": 909,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 9x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 9x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 19",
        "textAr": "أ) 19"
      },
      {
        "textEn": "B) 22",
        "textAr": "ب) 22"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 14",
        "textAr": "د) 14"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 9(2) + -3 = 4 + 18 + -3 = 19.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 18 + -3 = 19.",
    "solutionStepsAr": [
      "P(2) = 4 + 18 + -3 = 19"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 18 + -3 = 19"
    ]
  },
  {
    "id": 910,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (9, 2) و (15, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (9, 2) and (15, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (12, 5)",
        "textAr": "أ) (12, 5)"
      },
      {
        "textEn": "B) (15, 8)",
        "textAr": "ب) (15, 8)"
      },
      {
        "textEn": "C) (13, 4)",
        "textAr": "ج) (13, 4)"
      },
      {
        "textEn": "D) (24, 10)",
        "textAr": "د) (24, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (9 + 15)/2 = 12، y = (2 + 8)/2 = 5. نقطة المنتصف هي (12, 5).",
    "explanationEn": "Midpoint x = (9+15)/2 = 12, y = (2+8)/2 = 5 => (12, 5).",
    "solutionStepsAr": [
      "((9+15)/2, (2+8)/2) = (12, 5)"
    ],
    "solutionStepsEn": [
      "((9+15)/2, (2+8)/2) = (12, 5)"
    ]
  },
  {
    "id": 911,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 10 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 10 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 500π",
        "textAr": "أ) 500π"
      },
      {
        "textEn": "B) 1000π",
        "textAr": "ب) 1000π"
      },
      {
        "textEn": "C) 50π",
        "textAr": "ج) 50π"
      },
      {
        "textEn": "D) 250π",
        "textAr": "د) 250π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (10)² × 5 = 500π.",
    "explanationEn": "Volume V = π r² h = π * (10)² * 5 = 500π.",
    "solutionStepsAr": [
      "V = π × 100 × 5 = 500π"
    ],
    "solutionStepsEn": [
      "V = π * 100 * 5 = 500π"
    ]
  },
  {
    "id": 912,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 11 ساعات. إذا كان العدد الأصلي للبكتيريا هو 4500، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 11 hours. If the initial count is 4500, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 4500(2)^(t/11)",
        "textAr": "أ) N(t) = 4500(2)^(t/11)"
      },
      {
        "textEn": "B) N(t) = 4500(2)^(11t)",
        "textAr": "ب) N(t) = 4500(2)^(11t)"
      },
      {
        "textEn": "C) N(t) = 4500 + 2t",
        "textAr": "ج) N(t) = 4500 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/11)^4500",
        "textAr": "د) N(t) = 2(t/11)^4500"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 4500 وفترة التضاعف d = 11.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 4500 and period d = 11.",
    "solutionStepsAr": [
      "N(t) = 4500 × 2^(t/11)"
    ],
    "solutionStepsEn": [
      "N(t) = 4500 * 2^(t/11)"
    ]
  },
  {
    "id": 913,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 85$ بالإضافة إلى 24$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $85 plus $24 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 24h + 85",
        "textAr": "أ) C(h) = 24h + 85"
      },
      {
        "textEn": "B) C(h) = 85h + 24",
        "textAr": "ب) C(h) = 85h + 24"
      },
      {
        "textEn": "C) C(h) = (24 + 85)h",
        "textAr": "ج) C(h) = (24 + 85)h"
      },
      {
        "textEn": "D) C(h) = 24h - 85",
        "textAr": "د) C(h) = 24h - 85"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 24h ورسوم ثابتة 85، بالتالي C(h) = 24h + 85.",
    "explanationEn": "Total cost consists of variable rate 24h and flat fee 85: C(h) = 24h + 85.",
    "solutionStepsAr": [
      "C(h) = 24h + 85"
    ],
    "solutionStepsEn": [
      "C(h) = 24h + 85"
    ]
  },
  {
    "id": 914,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 8، فما قيمة x + 9؟",
    "questionEn": "If √x = 8, what is the value of x + 9?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 73",
        "textAr": "أ) 73"
      },
      {
        "textEn": "B) 17",
        "textAr": "ب) 17"
      },
      {
        "textEn": "C) 25",
        "textAr": "ج) 25"
      },
      {
        "textEn": "D) 64",
        "textAr": "د) 64"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 8² = 64. إذن x + 9 = 64 + 9 = 73.",
    "explanationEn": "Squaring both sides: x = 8² = 64. Thus x + 9 = 73.",
    "solutionStepsAr": [
      "x = 64",
      "x + 9 = 73"
    ],
    "solutionStepsEn": [
      "x = 64",
      "x + 9 = 73"
    ]
  },
  {
    "id": 915,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 9)² + (y + 10)² = 144 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 9)² + (y + 10)² = 144 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 12",
        "textAr": "أ) 12"
      },
      {
        "textEn": "B) 144",
        "textAr": "ب) 144"
      },
      {
        "textEn": "C) 24",
        "textAr": "ج) 24"
      },
      {
        "textEn": "D) 9",
        "textAr": "د) 9"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 144، فإن نصف القطر r = √144 = 12.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 144, radius r = √144 = 12.",
    "solutionStepsAr": [
      "r² = 144",
      "r = 12"
    ],
    "solutionStepsEn": [
      "r² = 144",
      "r = 12"
    ]
  },
  {
    "id": 916,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 95. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 95. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 19",
        "textAr": "أ) 19"
      },
      {
        "textEn": "B) 38",
        "textAr": "ب) 38"
      },
      {
        "textEn": "C) 95",
        "textAr": "ج) 95"
      },
      {
        "textEn": "D) 16",
        "textAr": "د) 16"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 95 / 5 = 19.",
    "explanationEn": "Mean = Sum / Count = 95 / 5 = 19.",
    "solutionStepsAr": [
      "95 / 5 = 19"
    ],
    "solutionStepsEn": [
      "95 / 5 = 19"
    ]
  },
  {
    "id": 917,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 85$ بالإضافة إلى 24$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $85 plus $24 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 24h + 85",
        "textAr": "أ) C(h) = 24h + 85"
      },
      {
        "textEn": "B) C(h) = 85h + 24",
        "textAr": "ب) C(h) = 85h + 24"
      },
      {
        "textEn": "C) C(h) = (24 + 85)h",
        "textAr": "ج) C(h) = (24 + 85)h"
      },
      {
        "textEn": "D) C(h) = 24h - 85",
        "textAr": "د) C(h) = 24h - 85"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 24h ورسوم ثابتة 85، بالتالي C(h) = 24h + 85.",
    "explanationEn": "Total cost consists of variable rate 24h and flat fee 85: C(h) = 24h + 85.",
    "solutionStepsAr": [
      "C(h) = 24h + 85"
    ],
    "solutionStepsEn": [
      "C(h) = 24h + 85"
    ]
  },
  {
    "id": 918,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 8، فما قيمة x + 9؟",
    "questionEn": "If √x = 8, what is the value of x + 9?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 73",
        "textAr": "أ) 73"
      },
      {
        "textEn": "B) 17",
        "textAr": "ب) 17"
      },
      {
        "textEn": "C) 25",
        "textAr": "ج) 25"
      },
      {
        "textEn": "D) 64",
        "textAr": "د) 64"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 8² = 64. إذن x + 9 = 64 + 9 = 73.",
    "explanationEn": "Squaring both sides: x = 8² = 64. Thus x + 9 = 73.",
    "solutionStepsAr": [
      "x = 64",
      "x + 9 = 73"
    ],
    "solutionStepsEn": [
      "x = 64",
      "x + 9 = 73"
    ]
  },
  {
    "id": 919,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 9)² + (y + 10)² = 81 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 9)² + (y + 10)² = 81 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
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
        "textEn": "C) 18",
        "textAr": "ج) 18"
      },
      {
        "textEn": "D) 9",
        "textAr": "د) 9"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 81، فإن نصف القطر r = √81 = 9.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 81, radius r = √81 = 9.",
    "solutionStepsAr": [
      "r² = 81",
      "r = 9"
    ],
    "solutionStepsEn": [
      "r² = 81",
      "r = 9"
    ]
  },
  {
    "id": 920,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 95. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 95. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 19",
        "textAr": "أ) 19"
      },
      {
        "textEn": "B) 38",
        "textAr": "ب) 38"
      },
      {
        "textEn": "C) 95",
        "textAr": "ج) 95"
      },
      {
        "textEn": "D) 16",
        "textAr": "د) 16"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 95 / 5 = 19.",
    "explanationEn": "Mean = Sum / Count = 95 / 5 = 19.",
    "solutionStepsAr": [
      "95 / 5 = 19"
    ],
    "solutionStepsEn": [
      "95 / 5 = 19"
    ]
  },
  {
    "id": 921,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 85$ بالإضافة إلى 24$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $85 plus $24 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 24h + 85",
        "textAr": "أ) C(h) = 24h + 85"
      },
      {
        "textEn": "B) C(h) = 85h + 24",
        "textAr": "ب) C(h) = 85h + 24"
      },
      {
        "textEn": "C) C(h) = (24 + 85)h",
        "textAr": "ج) C(h) = (24 + 85)h"
      },
      {
        "textEn": "D) C(h) = 24h - 85",
        "textAr": "د) C(h) = 24h - 85"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 24h ورسوم ثابتة 85، بالتالي C(h) = 24h + 85.",
    "explanationEn": "Total cost consists of variable rate 24h and flat fee 85: C(h) = 24h + 85.",
    "solutionStepsAr": [
      "C(h) = 24h + 85"
    ],
    "solutionStepsEn": [
      "C(h) = 24h + 85"
    ]
  },
  {
    "id": 922,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 228، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 228, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "71",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 213. بالقسمة على 3: x = 71.",
    "explanationEn": "Subtract 15 from both sides: 3x = 213. Divide by 3: x = 71.",
    "solutionStepsAr": [
      "3x = 213",
      "x = 71"
    ],
    "solutionStepsEn": [
      "3x = 213",
      "x = 71"
    ]
  },
  {
    "id": 923,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 13)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 13)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 13.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 13.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 924,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 85°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 85°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "95",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 85° = 95°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 85 = 95.",
    "solutionStepsAr": [
      "180 - 85 = 95"
    ],
    "solutionStepsEn": [
      "180 - 85 = 95"
    ]
  },
  {
    "id": 925,
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
    "id": 926,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 11x + b تقع عليها النقطة (2, 59). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 11x + b passes through (2, 59). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "37",
    "explanationAr": "بالتعويض بالنقطة: 59 = 11(2) + b => b = 37.",
    "explanationEn": "Substitute the point: 59 = 22 + b => b = 37.",
    "solutionStepsAr": [
      "b = 37"
    ],
    "solutionStepsEn": [
      "b = 37"
    ]
  },
  {
    "id": 927,
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
    "id": 928,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 2x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 2x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/2",
        "textAr": "أ) -1/2"
      },
      {
        "textEn": "B) 2",
        "textAr": "ب) 2"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) -2",
        "textAr": "د) -2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/2.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 2, which is -1/2.",
    "solutionStepsAr": [
      "m_perp = -1 / 2"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 2"
    ]
  },
  {
    "id": 929,
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
    "id": 930,
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
    "id": 931,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 19؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 19?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 43",
        "textAr": "أ) 43"
      },
      {
        "textEn": "B) 48",
        "textAr": "ب) 48"
      },
      {
        "textEn": "C) 38",
        "textAr": "ج) 38"
      },
      {
        "textEn": "D) 39",
        "textAr": "د) 39"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 19: y = 2(19) + 5 = 38 + 5 = 43.",
    "explanationEn": "Substitute x = 19: y = 2(19) + 5 = 43.",
    "solutionStepsAr": [
      "y = 2 × 19 + 5 = 43"
    ],
    "solutionStepsEn": [
      "y = 2 * 19 + 5 = 43"
    ]
  },
  {
    "id": 932,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 2x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 2x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/2",
        "textAr": "أ) -1/2"
      },
      {
        "textEn": "B) 2",
        "textAr": "ب) 2"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) -2",
        "textAr": "د) -2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/2.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 2, which is -1/2.",
    "solutionStepsAr": [
      "m_perp = -1 / 2"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 2"
    ]
  },
  {
    "id": 933,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 934,
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
    "id": 935,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 19؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 19?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 43",
        "textAr": "أ) 43"
      },
      {
        "textEn": "B) 48",
        "textAr": "ب) 48"
      },
      {
        "textEn": "C) 38",
        "textAr": "ج) 38"
      },
      {
        "textEn": "D) 39",
        "textAr": "د) 39"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 19: y = 2(19) + 5 = 38 + 5 = 43.",
    "explanationEn": "Substitute x = 19: y = 2(19) + 5 = 43.",
    "solutionStepsAr": [
      "y = 2 × 19 + 5 = 43"
    ],
    "solutionStepsEn": [
      "y = 2 * 19 + 5 = 43"
    ]
  },
  {
    "id": 936,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 2x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 2x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/2",
        "textAr": "أ) -1/2"
      },
      {
        "textEn": "B) 2",
        "textAr": "ب) 2"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) -2",
        "textAr": "د) -2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/2.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 2, which is -1/2.",
    "solutionStepsAr": [
      "m_perp = -1 / 2"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 2"
    ]
  },
  {
    "id": 937,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 938,
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
    "id": 939,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 19؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 19?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 43",
        "textAr": "أ) 43"
      },
      {
        "textEn": "B) 48",
        "textAr": "ب) 48"
      },
      {
        "textEn": "C) 38",
        "textAr": "ج) 38"
      },
      {
        "textEn": "D) 39",
        "textAr": "د) 39"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 19: y = 2(19) + 5 = 38 + 5 = 43.",
    "explanationEn": "Substitute x = 19: y = 2(19) + 5 = 43.",
    "solutionStepsAr": [
      "y = 2 × 19 + 5 = 43"
    ],
    "solutionStepsEn": [
      "y = 2 * 19 + 5 = 43"
    ]
  },
  {
    "id": 940,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "مستقيم L له معادلة y = 2x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 2x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/2",
        "textAr": "أ) -1/2"
      },
      {
        "textEn": "B) 2",
        "textAr": "ب) 2"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) -2",
        "textAr": "د) -2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/2.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 2, which is -1/2.",
    "solutionStepsAr": [
      "m_perp = -1 / 2"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 2"
    ]
  },
  {
    "id": 941,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 942,
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
    "id": 943,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 19؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 19?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 43",
        "textAr": "أ) 43"
      },
      {
        "textEn": "B) 48",
        "textAr": "ب) 48"
      },
      {
        "textEn": "C) 38",
        "textAr": "ج) 38"
      },
      {
        "textEn": "D) 39",
        "textAr": "د) 39"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 19: y = 2(19) + 5 = 38 + 5 = 43.",
    "explanationEn": "Substitute x = 19: y = 2(19) + 5 = 43.",
    "solutionStepsAr": [
      "y = 2 × 19 + 5 = 43"
    ],
    "solutionStepsEn": [
      "y = 2 * 19 + 5 = 43"
    ]
  },
  {
    "id": 944,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مستقيم L له معادلة y = 2x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 2x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/2",
        "textAr": "أ) -1/2"
      },
      {
        "textEn": "B) 2",
        "textAr": "ب) 2"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) -2",
        "textAr": "د) -2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/2.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 2, which is -1/2.",
    "solutionStepsAr": [
      "m_perp = -1 / 2"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 2"
    ]
  },
  {
    "id": 945,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 946,
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
    "id": 947,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 19؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 19?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 43",
        "textAr": "أ) 43"
      },
      {
        "textEn": "B) 48",
        "textAr": "ب) 48"
      },
      {
        "textEn": "C) 38",
        "textAr": "ج) 38"
      },
      {
        "textEn": "D) 39",
        "textAr": "د) 39"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 19: y = 2(19) + 5 = 38 + 5 = 43.",
    "explanationEn": "Substitute x = 19: y = 2(19) + 5 = 43.",
    "solutionStepsAr": [
      "y = 2 × 19 + 5 = 43"
    ],
    "solutionStepsEn": [
      "y = 2 * 19 + 5 = 43"
    ]
  },
  {
    "id": 948,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "مستقيم L له معادلة y = 2x + 4. ما هو ميل المستقيم العمودي على L؟",
    "questionEn": "Line L has the equation y = 2x + 4. What is the slope of a line perpendicular to L?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) -1/2",
        "textAr": "أ) -1/2"
      },
      {
        "textEn": "B) 2",
        "textAr": "ب) 2"
      },
      {
        "textEn": "C) 1/2",
        "textAr": "ج) 1/2"
      },
      {
        "textEn": "D) -2",
        "textAr": "د) -2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "ميل المستقيم العمودي هو المقلوب السالب لميل المستقيم الأصلي. بالتالي الميل = -1/2.",
    "explanationEn": "The perpendicular slope is the negative reciprocal of 2, which is -1/2.",
    "solutionStepsAr": [
      "m_perp = -1 / 2"
    ],
    "solutionStepsEn": [
      "m_perp = -1 / 2"
    ]
  },
  {
    "id": 949,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 24\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 24\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 950,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 19x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 19x + 36 = 0?",
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
    "id": 951,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 14، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 14, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "14",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (14)√3. بالقسمة على √3 نحصل على 14.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (14)√3. Divided by √3 gives 14.",
    "solutionStepsAr": [
      "Side opposite 60° = (14)√3",
      "Divided by √3 = 14"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (14)√3",
      "Divided by √3 = 14"
    ]
  },
  {
    "id": 952,
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
    "id": 953,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (9, 2) و (15, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (9, 2) and (15, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(15 - 9)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 954,
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
