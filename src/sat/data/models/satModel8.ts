import { Question } from '../../types';

export const SAT_MODEL_8_QUESTIONS: Question[] = [
  {
    "id": 801,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 16x - 24 > 56؟",
    "questionEn": "Which inequality represents the solutions for 16x - 24 > 56?",
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
        "textEn": "C) x > 80",
        "textAr": "ج) x > 80"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 24 للطرفين تعطي 16x > 80. بالقسمة على 16 نحصل على x > 5.",
    "explanationEn": "Adding 24 to both sides gives 16x > 80. Dividing by 16 gives x > 5.",
    "solutionStepsAr": [
      "16x > 80",
      "x > 5"
    ],
    "solutionStepsEn": [
      "16x > 80",
      "x > 5"
    ]
  },
  {
    "id": 802,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 10x + 9 = 35، فما قيمة 20x؟",
    "questionEn": "If 10x + 9 = 35, what is the value of 20x?",
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
        "textEn": "B) 52",
        "textAr": "ب) 52"
      },
      {
        "textEn": "C) 27",
        "textAr": "ج) 27"
      },
      {
        "textEn": "D) 40",
        "textAr": "د) 40"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 9 من الطرفين نجد (10)x = 26 = 3(10). وبالتالي فإن x = 3. إذن 20x = 2(10)(3) = 52.",
    "explanationEn": "Subtracting 9 gives (10)x = 3(10) => x = 3. Therefore 20x = 2(10)*3 = 52.",
    "solutionStepsAr": [
      "(10)x = 30",
      "x = 3",
      "20x = 60"
    ],
    "solutionStepsEn": [
      "(10)x = 30",
      "x = 3",
      "20x = 60"
    ]
  },
  {
    "id": 803,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 12) وله ميل يساوي 9. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 12) and has a slope of 9. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 9x + 12",
        "textAr": "أ) f(x) = 9x + 12"
      },
      {
        "textEn": "B) f(x) = 12x + 9",
        "textAr": "ب) f(x) = 12x + 9"
      },
      {
        "textEn": "C) f(x) = 9x - 12",
        "textAr": "ج) f(x) = 9x - 12"
      },
      {
        "textEn": "D) f(x) = 13x + 8",
        "textAr": "د) f(x) = 13x + 8"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 9 و b = 12.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 9 and y-intercept b = 12.",
    "solutionStepsAr": [
      "f(x) = (9)x + (12)"
    ],
    "solutionStepsEn": [
      "f(x) = (9)x + (12)"
    ]
  },
  {
    "id": 804,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 100 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 100 = 0?",
    "svgData": {
      "type": "parabola",
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
        "textEn": "C) 15",
        "textAr": "ج) 15"
      },
      {
        "textEn": "D) 50",
        "textAr": "د) 50"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 100 => x = √100 = 10 (الحل الموجب).",
    "explanationEn": "x² = 100 => x = √100 = 10 (positive solution).",
    "solutionStepsAr": [
      "x² = 100",
      "x = 10"
    ],
    "solutionStepsEn": [
      "x² = 100",
      "x = 10"
    ]
  },
  {
    "id": 805,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 800 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 800 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 120",
        "textAr": "أ) 120"
      },
      {
        "textEn": "B) 130",
        "textAr": "ب) 130"
      },
      {
        "textEn": "C) 680",
        "textAr": "ج) 680"
      },
      {
        "textEn": "D) 60",
        "textAr": "د) 60"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 800 = (15/100) × 800 = 120.",
    "explanationEn": "15% of 800 = (15/100) * 800 = 120.",
    "solutionStepsAr": [
      "0.15 × 800 = 120"
    ],
    "solutionStepsEn": [
      "0.15 * 800 = 120"
    ]
  },
  {
    "id": 806,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 32 كرات حمراء و 48 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 32 red balls and 48 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 32 / (32 + 48) = 32/80 = 2/5.",
    "explanationEn": "Probability = Red / Total = 32 / (80) = 2/5.",
    "solutionStepsAr": [
      "32 / 80 = 2/5"
    ],
    "solutionStepsEn": [
      "32 / 80 = 2/5"
    ]
  },
  {
    "id": 807,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 58° وقياس الزاوية B يساوي 68°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 58° and angle B measures 68°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 54°",
        "textAr": "أ) 54°"
      },
      {
        "textEn": "B) 64°",
        "textAr": "ب) 64°"
      },
      {
        "textEn": "C) 44°",
        "textAr": "ج) 44°"
      },
      {
        "textEn": "D) 126°",
        "textAr": "د) 126°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (58° + 68°) = 54°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (58° + 68°) = 54°.",
    "solutionStepsAr": [
      "180 - 126 = 54"
    ],
    "solutionStepsEn": [
      "180 - 126 = 54"
    ]
  },
  {
    "id": 808,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 20\n2x + y = 29\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 20\n2x + y = 29\n\nWhat is the value of x in the given system of equations?",
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
        "textEn": "B) 11",
        "textAr": "ب) 11"
      },
      {
        "textEn": "C) 20",
        "textAr": "ج) 20"
      },
      {
        "textEn": "D) 29",
        "textAr": "د) 29"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 29 - 20 => x = 9.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 29 - 20 => x = 9.",
    "solutionStepsAr": [
      "x = 29 - 20 = 9"
    ],
    "solutionStepsEn": [
      "x = 29 - 20 = 9"
    ]
  },
  {
    "id": 809,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 8x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 8x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 17",
        "textAr": "أ) 17"
      },
      {
        "textEn": "B) 20",
        "textAr": "ب) 20"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 12",
        "textAr": "د) 12"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 8(2) + -3 = 4 + 16 + -3 = 17.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 16 + -3 = 17.",
    "solutionStepsAr": [
      "P(2) = 4 + 16 + -3 = 17"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 16 + -3 = 17"
    ]
  },
  {
    "id": 810,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (8, 2) و (14, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (8, 2) and (14, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (11, 5)",
        "textAr": "أ) (11, 5)"
      },
      {
        "textEn": "B) (14, 8)",
        "textAr": "ب) (14, 8)"
      },
      {
        "textEn": "C) (12, 4)",
        "textAr": "ج) (12, 4)"
      },
      {
        "textEn": "D) (22, 10)",
        "textAr": "د) (22, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (8 + 14)/2 = 11، y = (2 + 8)/2 = 5. نقطة المنتصف هي (11, 5).",
    "explanationEn": "Midpoint x = (8+14)/2 = 11, y = (2+8)/2 = 5 => (11, 5).",
    "solutionStepsAr": [
      "((8+14)/2, (2+8)/2) = (11, 5)"
    ],
    "solutionStepsEn": [
      "((8+14)/2, (2+8)/2) = (11, 5)"
    ]
  },
  {
    "id": 811,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 9 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 9 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 405π",
        "textAr": "أ) 405π"
      },
      {
        "textEn": "B) 810π",
        "textAr": "ب) 810π"
      },
      {
        "textEn": "C) 45π",
        "textAr": "ج) 45π"
      },
      {
        "textEn": "D) 202.5π",
        "textAr": "د) 202.5π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (9)² × 5 = 405π.",
    "explanationEn": "Volume V = π r² h = π * (9)² * 5 = 405π.",
    "solutionStepsAr": [
      "V = π × 81 × 5 = 405π"
    ],
    "solutionStepsEn": [
      "V = π * 81 * 5 = 405π"
    ]
  },
  {
    "id": 812,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 10 ساعات. إذا كان العدد الأصلي للبكتيريا هو 4000، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 10 hours. If the initial count is 4000, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 4000(2)^(t/10)",
        "textAr": "أ) N(t) = 4000(2)^(t/10)"
      },
      {
        "textEn": "B) N(t) = 4000(2)^(10t)",
        "textAr": "ب) N(t) = 4000(2)^(10t)"
      },
      {
        "textEn": "C) N(t) = 4000 + 2t",
        "textAr": "ج) N(t) = 4000 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/10)^4000",
        "textAr": "د) N(t) = 2(t/10)^4000"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 4000 وفترة التضاعف d = 10.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 4000 and period d = 10.",
    "solutionStepsAr": [
      "N(t) = 4000 × 2^(t/10)"
    ],
    "solutionStepsEn": [
      "N(t) = 4000 * 2^(t/10)"
    ]
  },
  {
    "id": 813,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 80$ بالإضافة إلى 23$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $80 plus $23 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 23h + 80",
        "textAr": "أ) C(h) = 23h + 80"
      },
      {
        "textEn": "B) C(h) = 80h + 23",
        "textAr": "ب) C(h) = 80h + 23"
      },
      {
        "textEn": "C) C(h) = (23 + 80)h",
        "textAr": "ج) C(h) = (23 + 80)h"
      },
      {
        "textEn": "D) C(h) = 23h - 80",
        "textAr": "د) C(h) = 23h - 80"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 23h ورسوم ثابتة 80، بالتالي C(h) = 23h + 80.",
    "explanationEn": "Total cost consists of variable rate 23h and flat fee 80: C(h) = 23h + 80.",
    "solutionStepsAr": [
      "C(h) = 23h + 80"
    ],
    "solutionStepsEn": [
      "C(h) = 23h + 80"
    ]
  },
  {
    "id": 814,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 6، فما قيمة x + 8؟",
    "questionEn": "If √x = 6, what is the value of x + 8?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 44",
        "textAr": "أ) 44"
      },
      {
        "textEn": "B) 14",
        "textAr": "ب) 14"
      },
      {
        "textEn": "C) 20",
        "textAr": "ج) 20"
      },
      {
        "textEn": "D) 36",
        "textAr": "د) 36"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 6² = 36. إذن x + 8 = 36 + 8 = 44.",
    "explanationEn": "Squaring both sides: x = 6² = 36. Thus x + 8 = 44.",
    "solutionStepsAr": [
      "x = 36",
      "x + 8 = 44"
    ],
    "solutionStepsEn": [
      "x = 36",
      "x + 8 = 44"
    ]
  },
  {
    "id": 815,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 8)² + (y + 9)² = 121 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 8)² + (y + 9)² = 121 represents a circle. What is the radius of this circle?",
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
        "textEn": "D) 8",
        "textAr": "د) 8"
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
    "id": 816,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 90. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 90. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
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
        "textEn": "C) 90",
        "textAr": "ج) 90"
      },
      {
        "textEn": "D) 15",
        "textAr": "د) 15"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 90 / 5 = 18.",
    "explanationEn": "Mean = Sum / Count = 90 / 5 = 18.",
    "solutionStepsAr": [
      "90 / 5 = 18"
    ],
    "solutionStepsEn": [
      "90 / 5 = 18"
    ]
  },
  {
    "id": 817,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 80$ بالإضافة إلى 23$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $80 plus $23 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 23h + 80",
        "textAr": "أ) C(h) = 23h + 80"
      },
      {
        "textEn": "B) C(h) = 80h + 23",
        "textAr": "ب) C(h) = 80h + 23"
      },
      {
        "textEn": "C) C(h) = (23 + 80)h",
        "textAr": "ج) C(h) = (23 + 80)h"
      },
      {
        "textEn": "D) C(h) = 23h - 80",
        "textAr": "د) C(h) = 23h - 80"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 23h ورسوم ثابتة 80، بالتالي C(h) = 23h + 80.",
    "explanationEn": "Total cost consists of variable rate 23h and flat fee 80: C(h) = 23h + 80.",
    "solutionStepsAr": [
      "C(h) = 23h + 80"
    ],
    "solutionStepsEn": [
      "C(h) = 23h + 80"
    ]
  },
  {
    "id": 818,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 2، فما قيمة x + 8؟",
    "questionEn": "If √x = 2, what is the value of x + 8?",
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
        "textEn": "B) 10",
        "textAr": "ب) 10"
      },
      {
        "textEn": "C) 12",
        "textAr": "ج) 12"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 2² = 4. إذن x + 8 = 4 + 8 = 12.",
    "explanationEn": "Squaring both sides: x = 2² = 4. Thus x + 8 = 12.",
    "solutionStepsAr": [
      "x = 4",
      "x + 8 = 12"
    ],
    "solutionStepsEn": [
      "x = 4",
      "x + 8 = 12"
    ]
  },
  {
    "id": 819,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 8)² + (y + 9)² = 64 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 8)² + (y + 9)² = 64 represents a circle. What is the radius of this circle?",
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
        "textEn": "D) 8",
        "textAr": "د) 8"
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
    "id": 820,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 90. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 90. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
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
        "textEn": "C) 90",
        "textAr": "ج) 90"
      },
      {
        "textEn": "D) 15",
        "textAr": "د) 15"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 90 / 5 = 18.",
    "explanationEn": "Mean = Sum / Count = 90 / 5 = 18.",
    "solutionStepsAr": [
      "90 / 5 = 18"
    ],
    "solutionStepsEn": [
      "90 / 5 = 18"
    ]
  },
  {
    "id": 821,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 80$ بالإضافة إلى 23$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $80 plus $23 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 23h + 80",
        "textAr": "أ) C(h) = 23h + 80"
      },
      {
        "textEn": "B) C(h) = 80h + 23",
        "textAr": "ب) C(h) = 80h + 23"
      },
      {
        "textEn": "C) C(h) = (23 + 80)h",
        "textAr": "ج) C(h) = (23 + 80)h"
      },
      {
        "textEn": "D) C(h) = 23h - 80",
        "textAr": "د) C(h) = 23h - 80"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 23h ورسوم ثابتة 80، بالتالي C(h) = 23h + 80.",
    "explanationEn": "Total cost consists of variable rate 23h and flat fee 80: C(h) = 23h + 80.",
    "solutionStepsAr": [
      "C(h) = 23h + 80"
    ],
    "solutionStepsEn": [
      "C(h) = 23h + 80"
    ]
  },
  {
    "id": 822,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 219، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 219, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "68",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 204. بالقسمة على 3: x = 68.",
    "explanationEn": "Subtract 15 from both sides: 3x = 204. Divide by 3: x = 68.",
    "solutionStepsAr": [
      "3x = 204",
      "x = 68"
    ],
    "solutionStepsEn": [
      "3x = 204",
      "x = 68"
    ]
  },
  {
    "id": 823,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 12)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 12)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 12.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 12.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 824,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 80°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 80°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "100",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 80° = 100°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 80 = 100.",
    "solutionStepsAr": [
      "180 - 80 = 100"
    ],
    "solutionStepsEn": [
      "180 - 80 = 100"
    ]
  },
  {
    "id": 825,
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
    "id": 826,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 10x + b تقع عليها النقطة (2, 54). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 10x + b passes through (2, 54). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "34",
    "explanationAr": "بالتعويض بالنقطة: 54 = 10(2) + b => b = 34.",
    "explanationEn": "Substitute the point: 54 = 20 + b => b = 34.",
    "solutionStepsAr": [
      "b = 34"
    ],
    "solutionStepsEn": [
      "b = 34"
    ]
  },
  {
    "id": 827,
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
    "id": 828,
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
    "id": 829,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 16x + 64 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 16x + 64 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-16)² - 4(1)(64) = 256 - 256 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-16)² - 4(1)(64) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 830,
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
    "id": 831,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 18؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 18?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 41",
        "textAr": "أ) 41"
      },
      {
        "textEn": "B) 46",
        "textAr": "ب) 46"
      },
      {
        "textEn": "C) 36",
        "textAr": "ج) 36"
      },
      {
        "textEn": "D) 37",
        "textAr": "د) 37"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 18: y = 2(18) + 5 = 36 + 5 = 41.",
    "explanationEn": "Substitute x = 18: y = 2(18) + 5 = 41.",
    "solutionStepsAr": [
      "y = 2 × 18 + 5 = 41"
    ],
    "solutionStepsEn": [
      "y = 2 * 18 + 5 = 41"
    ]
  },
  {
    "id": 832,
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
    "id": 833,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 24x + 144 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 24x + 144 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-24)² - 4(1)(144) = 576 - 576 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-24)² - 4(1)(144) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 834,
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
    "id": 835,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 18؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 18?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 41",
        "textAr": "أ) 41"
      },
      {
        "textEn": "B) 46",
        "textAr": "ب) 46"
      },
      {
        "textEn": "C) 36",
        "textAr": "ج) 36"
      },
      {
        "textEn": "D) 37",
        "textAr": "د) 37"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 18: y = 2(18) + 5 = 36 + 5 = 41.",
    "explanationEn": "Substitute x = 18: y = 2(18) + 5 = 41.",
    "solutionStepsAr": [
      "y = 2 × 18 + 5 = 41"
    ],
    "solutionStepsEn": [
      "y = 2 * 18 + 5 = 41"
    ]
  },
  {
    "id": 836,
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
    "id": 837,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 32x + 256 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 32x + 256 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-32)² - 4(1)(256) = 1024 - 1024 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-32)² - 4(1)(256) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 838,
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
    "id": 839,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 18؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 18?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 41",
        "textAr": "أ) 41"
      },
      {
        "textEn": "B) 46",
        "textAr": "ب) 46"
      },
      {
        "textEn": "C) 36",
        "textAr": "ج) 36"
      },
      {
        "textEn": "D) 37",
        "textAr": "د) 37"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 18: y = 2(18) + 5 = 36 + 5 = 41.",
    "explanationEn": "Substitute x = 18: y = 2(18) + 5 = 41.",
    "solutionStepsAr": [
      "y = 2 × 18 + 5 = 41"
    ],
    "solutionStepsEn": [
      "y = 2 * 18 + 5 = 41"
    ]
  },
  {
    "id": 840,
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
    "id": 841,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 40x + 400 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 40x + 400 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-40)² - 4(1)(400) = 1600 - 1600 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-40)² - 4(1)(400) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 842,
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
    "id": 843,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 18؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 18?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 41",
        "textAr": "أ) 41"
      },
      {
        "textEn": "B) 46",
        "textAr": "ب) 46"
      },
      {
        "textEn": "C) 36",
        "textAr": "ج) 36"
      },
      {
        "textEn": "D) 37",
        "textAr": "د) 37"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 18: y = 2(18) + 5 = 36 + 5 = 41.",
    "explanationEn": "Substitute x = 18: y = 2(18) + 5 = 41.",
    "solutionStepsAr": [
      "y = 2 × 18 + 5 = 41"
    ],
    "solutionStepsEn": [
      "y = 2 * 18 + 5 = 41"
    ]
  },
  {
    "id": 844,
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
    "id": 845,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 8x + 16 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 8x + 16 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-8)² - 4(1)(16) = 64 - 64 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-8)² - 4(1)(16) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 846,
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
    "id": 847,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 18؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 18?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 41",
        "textAr": "أ) 41"
      },
      {
        "textEn": "B) 46",
        "textAr": "ب) 46"
      },
      {
        "textEn": "C) 36",
        "textAr": "ج) 36"
      },
      {
        "textEn": "D) 37",
        "textAr": "د) 37"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 18: y = 2(18) + 5 = 36 + 5 = 41.",
    "explanationEn": "Substitute x = 18: y = 2(18) + 5 = 41.",
    "solutionStepsAr": [
      "y = 2 × 18 + 5 = 41"
    ],
    "solutionStepsEn": [
      "y = 2 * 18 + 5 = 41"
    ]
  },
  {
    "id": 848,
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
    "id": 849,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 23\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 23\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 850,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 18x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 18x + 36 = 0?",
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
    "id": 851,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 13، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 13, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "13",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (13)√3. بالقسمة على √3 نحصل على 13.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (13)√3. Divided by √3 gives 13.",
    "solutionStepsAr": [
      "Side opposite 60° = (13)√3",
      "Divided by √3 = 13"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (13)√3",
      "Divided by √3 = 13"
    ]
  },
  {
    "id": 852,
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
    "id": 853,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (8, 2) و (14, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (8, 2) and (14, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(14 - 8)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 854,
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
