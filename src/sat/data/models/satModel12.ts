import { Question } from '../../types';

export const SAT_MODEL_12_QUESTIONS: Question[] = [
  {
    "id": 1201,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 24x - 36 > 84؟",
    "questionEn": "Which inequality represents the solutions for 24x - 36 > 84?",
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
        "textEn": "C) x > 120",
        "textAr": "ج) x > 120"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 36 للطرفين تعطي 24x > 120. بالقسمة على 24 نحصل على x > 5.",
    "explanationEn": "Adding 36 to both sides gives 24x > 120. Dividing by 24 gives x > 5.",
    "solutionStepsAr": [
      "24x > 120",
      "x > 5"
    ],
    "solutionStepsEn": [
      "24x > 120",
      "x > 5"
    ]
  },
  {
    "id": 1202,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 14x + 13 = 51، فما قيمة 28x؟",
    "questionEn": "If 14x + 13 = 51, what is the value of 28x?",
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
        "textEn": "B) 76",
        "textAr": "ب) 76"
      },
      {
        "textEn": "C) 39",
        "textAr": "ج) 39"
      },
      {
        "textEn": "D) 56",
        "textAr": "د) 56"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 13 من الطرفين نجد (14)x = 38 = 3(14). وبالتالي فإن x = 3. إذن 28x = 2(14)(3) = 76.",
    "explanationEn": "Subtracting 13 gives (14)x = 3(14) => x = 3. Therefore 28x = 2(14)*3 = 76.",
    "solutionStepsAr": [
      "(14)x = 42",
      "x = 3",
      "28x = 84"
    ],
    "solutionStepsEn": [
      "(14)x = 42",
      "x = 3",
      "28x = 84"
    ]
  },
  {
    "id": 1203,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 16) وله ميل يساوي 13. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 16) and has a slope of 13. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 13x + 16",
        "textAr": "أ) f(x) = 13x + 16"
      },
      {
        "textEn": "B) f(x) = 16x + 13",
        "textAr": "ب) f(x) = 16x + 13"
      },
      {
        "textEn": "C) f(x) = 13x - 16",
        "textAr": "ج) f(x) = 13x - 16"
      },
      {
        "textEn": "D) f(x) = 17x + 12",
        "textAr": "د) f(x) = 17x + 12"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 13 و b = 16.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 13 and y-intercept b = 16.",
    "solutionStepsAr": [
      "f(x) = (13)x + (16)"
    ],
    "solutionStepsEn": [
      "f(x) = (13)x + (16)"
    ]
  },
  {
    "id": 1204,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 196 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 196 = 0?",
    "svgData": {
      "type": "parabola",
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
        "textEn": "C) 19",
        "textAr": "ج) 19"
      },
      {
        "textEn": "D) 98",
        "textAr": "د) 98"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 196 => x = √196 = 14 (الحل الموجب).",
    "explanationEn": "x² = 196 => x = √196 = 14 (positive solution).",
    "solutionStepsAr": [
      "x² = 196",
      "x = 14"
    ],
    "solutionStepsEn": [
      "x² = 196",
      "x = 14"
    ]
  },
  {
    "id": 1205,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 1200 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 1200 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 180",
        "textAr": "أ) 180"
      },
      {
        "textEn": "B) 190",
        "textAr": "ب) 190"
      },
      {
        "textEn": "C) 1020",
        "textAr": "ج) 1020"
      },
      {
        "textEn": "D) 90",
        "textAr": "د) 90"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 1200 = (15/100) × 1200 = 180.",
    "explanationEn": "15% of 1200 = (15/100) * 1200 = 180.",
    "solutionStepsAr": [
      "0.15 × 1200 = 180"
    ],
    "solutionStepsEn": [
      "0.15 * 1200 = 180"
    ]
  },
  {
    "id": 1206,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 48 كرات حمراء و 72 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 48 red balls and 72 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 48 / (48 + 72) = 48/120 = 2/5.",
    "explanationEn": "Probability = Red / Total = 48 / (120) = 2/5.",
    "solutionStepsAr": [
      "48 / 120 = 2/5"
    ],
    "solutionStepsEn": [
      "48 / 120 = 2/5"
    ]
  },
  {
    "id": 1207,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 52° وقياس الزاوية B يساوي 62°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 52° and angle B measures 62°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 66°",
        "textAr": "أ) 66°"
      },
      {
        "textEn": "B) 76°",
        "textAr": "ب) 76°"
      },
      {
        "textEn": "C) 56°",
        "textAr": "ج) 56°"
      },
      {
        "textEn": "D) 114°",
        "textAr": "د) 114°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (52° + 62°) = 66°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (52° + 62°) = 66°.",
    "solutionStepsAr": [
      "180 - 114 = 66"
    ],
    "solutionStepsEn": [
      "180 - 114 = 66"
    ]
  },
  {
    "id": 1208,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 28\n2x + y = 41\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 28\n2x + y = 41\n\nWhat is the value of x in the given system of equations?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 13",
        "textAr": "أ) 13"
      },
      {
        "textEn": "B) 15",
        "textAr": "ب) 15"
      },
      {
        "textEn": "C) 28",
        "textAr": "ج) 28"
      },
      {
        "textEn": "D) 41",
        "textAr": "د) 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 41 - 28 => x = 13.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 41 - 28 => x = 13.",
    "solutionStepsAr": [
      "x = 41 - 28 = 13"
    ],
    "solutionStepsEn": [
      "x = 41 - 28 = 13"
    ]
  },
  {
    "id": 1209,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 12x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 12x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 25",
        "textAr": "أ) 25"
      },
      {
        "textEn": "B) 28",
        "textAr": "ب) 28"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 20",
        "textAr": "د) 20"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 12(2) + -3 = 4 + 24 + -3 = 25.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 24 + -3 = 25.",
    "solutionStepsAr": [
      "P(2) = 4 + 24 + -3 = 25"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 24 + -3 = 25"
    ]
  },
  {
    "id": 1210,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (12, 2) و (18, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (12, 2) and (18, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (15, 5)",
        "textAr": "أ) (15, 5)"
      },
      {
        "textEn": "B) (18, 8)",
        "textAr": "ب) (18, 8)"
      },
      {
        "textEn": "C) (16, 4)",
        "textAr": "ج) (16, 4)"
      },
      {
        "textEn": "D) (30, 10)",
        "textAr": "د) (30, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (12 + 18)/2 = 15، y = (2 + 8)/2 = 5. نقطة المنتصف هي (15, 5).",
    "explanationEn": "Midpoint x = (12+18)/2 = 15, y = (2+8)/2 = 5 => (15, 5).",
    "solutionStepsAr": [
      "((12+18)/2, (2+8)/2) = (15, 5)"
    ],
    "solutionStepsEn": [
      "((12+18)/2, (2+8)/2) = (15, 5)"
    ]
  },
  {
    "id": 1211,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 13 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 13 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 845π",
        "textAr": "أ) 845π"
      },
      {
        "textEn": "B) 1690π",
        "textAr": "ب) 1690π"
      },
      {
        "textEn": "C) 65π",
        "textAr": "ج) 65π"
      },
      {
        "textEn": "D) 422.5π",
        "textAr": "د) 422.5π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (13)² × 5 = 845π.",
    "explanationEn": "Volume V = π r² h = π * (13)² * 5 = 845π.",
    "solutionStepsAr": [
      "V = π × 169 × 5 = 845π"
    ],
    "solutionStepsEn": [
      "V = π * 169 * 5 = 845π"
    ]
  },
  {
    "id": 1212,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 14 ساعات. إذا كان العدد الأصلي للبكتيريا هو 6000، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 14 hours. If the initial count is 6000, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 6000(2)^(t/14)",
        "textAr": "أ) N(t) = 6000(2)^(t/14)"
      },
      {
        "textEn": "B) N(t) = 6000(2)^(14t)",
        "textAr": "ب) N(t) = 6000(2)^(14t)"
      },
      {
        "textEn": "C) N(t) = 6000 + 2t",
        "textAr": "ج) N(t) = 6000 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/14)^6000",
        "textAr": "د) N(t) = 2(t/14)^6000"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 6000 وفترة التضاعف d = 14.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 6000 and period d = 14.",
    "solutionStepsAr": [
      "N(t) = 6000 × 2^(t/14)"
    ],
    "solutionStepsEn": [
      "N(t) = 6000 * 2^(t/14)"
    ]
  },
  {
    "id": 1213,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 100$ بالإضافة إلى 27$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $100 plus $27 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 27h + 100",
        "textAr": "أ) C(h) = 27h + 100"
      },
      {
        "textEn": "B) C(h) = 100h + 27",
        "textAr": "ب) C(h) = 100h + 27"
      },
      {
        "textEn": "C) C(h) = (27 + 100)h",
        "textAr": "ج) C(h) = (27 + 100)h"
      },
      {
        "textEn": "D) C(h) = 27h - 100",
        "textAr": "د) C(h) = 27h - 100"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 27h ورسوم ثابتة 100، بالتالي C(h) = 27h + 100.",
    "explanationEn": "Total cost consists of variable rate 27h and flat fee 100: C(h) = 27h + 100.",
    "solutionStepsAr": [
      "C(h) = 27h + 100"
    ],
    "solutionStepsEn": [
      "C(h) = 27h + 100"
    ]
  },
  {
    "id": 1214,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 2، فما قيمة x + 12؟",
    "questionEn": "If √x = 2, what is the value of x + 12?",
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
        "textEn": "B) 14",
        "textAr": "ب) 14"
      },
      {
        "textEn": "C) 16",
        "textAr": "ج) 16"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 2² = 4. إذن x + 12 = 4 + 12 = 16.",
    "explanationEn": "Squaring both sides: x = 2² = 4. Thus x + 12 = 16.",
    "solutionStepsAr": [
      "x = 4",
      "x + 12 = 16"
    ],
    "solutionStepsEn": [
      "x = 4",
      "x + 12 = 16"
    ]
  },
  {
    "id": 1215,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 12)² + (y + 13)² = 225 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 12)² + (y + 13)² = 225 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 15",
        "textAr": "أ) 15"
      },
      {
        "textEn": "B) 225",
        "textAr": "ب) 225"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 12",
        "textAr": "د) 12"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 225، فإن نصف القطر r = √225 = 15.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 225, radius r = √225 = 15.",
    "solutionStepsAr": [
      "r² = 225",
      "r = 15"
    ],
    "solutionStepsEn": [
      "r² = 225",
      "r = 15"
    ]
  },
  {
    "id": 1216,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 110. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 110. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 22",
        "textAr": "أ) 22"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 110",
        "textAr": "ج) 110"
      },
      {
        "textEn": "D) 19",
        "textAr": "د) 19"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 110 / 5 = 22.",
    "explanationEn": "Mean = Sum / Count = 110 / 5 = 22.",
    "solutionStepsAr": [
      "110 / 5 = 22"
    ],
    "solutionStepsEn": [
      "110 / 5 = 22"
    ]
  },
  {
    "id": 1217,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 100$ بالإضافة إلى 27$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $100 plus $27 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 27h + 100",
        "textAr": "أ) C(h) = 27h + 100"
      },
      {
        "textEn": "B) C(h) = 100h + 27",
        "textAr": "ب) C(h) = 100h + 27"
      },
      {
        "textEn": "C) C(h) = (27 + 100)h",
        "textAr": "ج) C(h) = (27 + 100)h"
      },
      {
        "textEn": "D) C(h) = 27h - 100",
        "textAr": "د) C(h) = 27h - 100"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 27h ورسوم ثابتة 100، بالتالي C(h) = 27h + 100.",
    "explanationEn": "Total cost consists of variable rate 27h and flat fee 100: C(h) = 27h + 100.",
    "solutionStepsAr": [
      "C(h) = 27h + 100"
    ],
    "solutionStepsEn": [
      "C(h) = 27h + 100"
    ]
  },
  {
    "id": 1218,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 2، فما قيمة x + 12؟",
    "questionEn": "If √x = 2, what is the value of x + 12?",
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
        "textEn": "B) 14",
        "textAr": "ب) 14"
      },
      {
        "textEn": "C) 16",
        "textAr": "ج) 16"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 2² = 4. إذن x + 12 = 4 + 12 = 16.",
    "explanationEn": "Squaring both sides: x = 2² = 4. Thus x + 12 = 16.",
    "solutionStepsAr": [
      "x = 4",
      "x + 12 = 16"
    ],
    "solutionStepsEn": [
      "x = 4",
      "x + 12 = 16"
    ]
  },
  {
    "id": 1219,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 12)² + (y + 13)² = 144 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 12)² + (y + 13)² = 144 represents a circle. What is the radius of this circle?",
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
        "textEn": "D) 12",
        "textAr": "د) 12"
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
    "id": 1220,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 110. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 110. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 22",
        "textAr": "أ) 22"
      },
      {
        "textEn": "B) 44",
        "textAr": "ب) 44"
      },
      {
        "textEn": "C) 110",
        "textAr": "ج) 110"
      },
      {
        "textEn": "D) 19",
        "textAr": "د) 19"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 110 / 5 = 22.",
    "explanationEn": "Mean = Sum / Count = 110 / 5 = 22.",
    "solutionStepsAr": [
      "110 / 5 = 22"
    ],
    "solutionStepsEn": [
      "110 / 5 = 22"
    ]
  },
  {
    "id": 1221,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 100$ بالإضافة إلى 27$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $100 plus $27 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 27h + 100",
        "textAr": "أ) C(h) = 27h + 100"
      },
      {
        "textEn": "B) C(h) = 100h + 27",
        "textAr": "ب) C(h) = 100h + 27"
      },
      {
        "textEn": "C) C(h) = (27 + 100)h",
        "textAr": "ج) C(h) = (27 + 100)h"
      },
      {
        "textEn": "D) C(h) = 27h - 100",
        "textAr": "د) C(h) = 27h - 100"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 27h ورسوم ثابتة 100، بالتالي C(h) = 27h + 100.",
    "explanationEn": "Total cost consists of variable rate 27h and flat fee 100: C(h) = 27h + 100.",
    "solutionStepsAr": [
      "C(h) = 27h + 100"
    ],
    "solutionStepsEn": [
      "C(h) = 27h + 100"
    ]
  },
  {
    "id": 1222,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 255، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 255, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "80",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 240. بالقسمة على 3: x = 80.",
    "explanationEn": "Subtract 15 from both sides: 3x = 240. Divide by 3: x = 80.",
    "solutionStepsAr": [
      "3x = 240",
      "x = 80"
    ],
    "solutionStepsEn": [
      "3x = 240",
      "x = 80"
    ]
  },
  {
    "id": 1223,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 16)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 16)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 16.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 16.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 1224,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 100°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 100°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "80",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 100° = 80°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 100 = 80.",
    "solutionStepsAr": [
      "180 - 100 = 80"
    ],
    "solutionStepsEn": [
      "180 - 100 = 80"
    ]
  },
  {
    "id": 1225,
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
    "id": 1226,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 14x + b تقع عليها النقطة (2, 74). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 14x + b passes through (2, 74). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "46",
    "explanationAr": "بالتعويض بالنقطة: 74 = 14(2) + b => b = 46.",
    "explanationEn": "Substitute the point: 74 = 28 + b => b = 46.",
    "solutionStepsAr": [
      "b = 46"
    ],
    "solutionStepsEn": [
      "b = 46"
    ]
  },
  {
    "id": 1227,
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
    "id": 1228,
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
    "id": 1229,
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
    "id": 1230,
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
    "id": 1231,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 22؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 22?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 49",
        "textAr": "أ) 49"
      },
      {
        "textEn": "B) 54",
        "textAr": "ب) 54"
      },
      {
        "textEn": "C) 44",
        "textAr": "ج) 44"
      },
      {
        "textEn": "D) 45",
        "textAr": "د) 45"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 22: y = 2(22) + 5 = 44 + 5 = 49.",
    "explanationEn": "Substitute x = 22: y = 2(22) + 5 = 49.",
    "solutionStepsAr": [
      "y = 2 × 22 + 5 = 49"
    ],
    "solutionStepsEn": [
      "y = 2 * 22 + 5 = 49"
    ]
  },
  {
    "id": 1232,
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
    "id": 1233,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 1234,
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
    "id": 1235,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 22؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 22?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 49",
        "textAr": "أ) 49"
      },
      {
        "textEn": "B) 54",
        "textAr": "ب) 54"
      },
      {
        "textEn": "C) 44",
        "textAr": "ج) 44"
      },
      {
        "textEn": "D) 45",
        "textAr": "د) 45"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 22: y = 2(22) + 5 = 44 + 5 = 49.",
    "explanationEn": "Substitute x = 22: y = 2(22) + 5 = 49.",
    "solutionStepsAr": [
      "y = 2 × 22 + 5 = 49"
    ],
    "solutionStepsEn": [
      "y = 2 * 22 + 5 = 49"
    ]
  },
  {
    "id": 1236,
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
    "id": 1237,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 1238,
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
    "id": 1239,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 22؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 22?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 49",
        "textAr": "أ) 49"
      },
      {
        "textEn": "B) 54",
        "textAr": "ب) 54"
      },
      {
        "textEn": "C) 44",
        "textAr": "ج) 44"
      },
      {
        "textEn": "D) 45",
        "textAr": "د) 45"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 22: y = 2(22) + 5 = 44 + 5 = 49.",
    "explanationEn": "Substitute x = 22: y = 2(22) + 5 = 49.",
    "solutionStepsAr": [
      "y = 2 × 22 + 5 = 49"
    ],
    "solutionStepsEn": [
      "y = 2 * 22 + 5 = 49"
    ]
  },
  {
    "id": 1240,
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
    "id": 1241,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 1242,
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
    "id": 1243,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 22؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 22?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 49",
        "textAr": "أ) 49"
      },
      {
        "textEn": "B) 54",
        "textAr": "ب) 54"
      },
      {
        "textEn": "C) 44",
        "textAr": "ج) 44"
      },
      {
        "textEn": "D) 45",
        "textAr": "د) 45"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 22: y = 2(22) + 5 = 44 + 5 = 49.",
    "explanationEn": "Substitute x = 22: y = 2(22) + 5 = 49.",
    "solutionStepsAr": [
      "y = 2 × 22 + 5 = 49"
    ],
    "solutionStepsEn": [
      "y = 2 * 22 + 5 = 49"
    ]
  },
  {
    "id": 1244,
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
    "id": 1245,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 1246,
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
    "id": 1247,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 22؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 22?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 49",
        "textAr": "أ) 49"
      },
      {
        "textEn": "B) 54",
        "textAr": "ب) 54"
      },
      {
        "textEn": "C) 44",
        "textAr": "ج) 44"
      },
      {
        "textEn": "D) 45",
        "textAr": "د) 45"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 22: y = 2(22) + 5 = 44 + 5 = 49.",
    "explanationEn": "Substitute x = 22: y = 2(22) + 5 = 49.",
    "solutionStepsAr": [
      "y = 2 × 22 + 5 = 49"
    ],
    "solutionStepsEn": [
      "y = 2 * 22 + 5 = 49"
    ]
  },
  {
    "id": 1248,
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
    "id": 1249,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 27\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 27\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 1250,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 22x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 22x + 36 = 0?",
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
    "id": 1251,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 17، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 17, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "17",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (17)√3. بالقسمة على √3 نحصل على 17.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (17)√3. Divided by √3 gives 17.",
    "solutionStepsAr": [
      "Side opposite 60° = (17)√3",
      "Divided by √3 = 17"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (17)√3",
      "Divided by √3 = 17"
    ]
  },
  {
    "id": 1252,
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
    "id": 1253,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (12, 2) و (18, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (12, 2) and (18, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(18 - 12)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 1254,
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
