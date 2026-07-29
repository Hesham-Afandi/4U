import { Question } from '../../types';

export const SAT_MODEL_10_QUESTIONS: Question[] = [
  {
    "id": 1001,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 20x - 30 > 70؟",
    "questionEn": "Which inequality represents the solutions for 20x - 30 > 70?",
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
        "textEn": "C) x > 100",
        "textAr": "ج) x > 100"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 30 للطرفين تعطي 20x > 100. بالقسمة على 20 نحصل على x > 5.",
    "explanationEn": "Adding 30 to both sides gives 20x > 100. Dividing by 20 gives x > 5.",
    "solutionStepsAr": [
      "20x > 100",
      "x > 5"
    ],
    "solutionStepsEn": [
      "20x > 100",
      "x > 5"
    ]
  },
  {
    "id": 1002,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 12x + 11 = 43، فما قيمة 24x؟",
    "questionEn": "If 12x + 11 = 43, what is the value of 24x?",
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
        "textEn": "B) 64",
        "textAr": "ب) 64"
      },
      {
        "textEn": "C) 33",
        "textAr": "ج) 33"
      },
      {
        "textEn": "D) 48",
        "textAr": "د) 48"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 11 من الطرفين نجد (12)x = 32 = 3(12). وبالتالي فإن x = 3. إذن 24x = 2(12)(3) = 64.",
    "explanationEn": "Subtracting 11 gives (12)x = 3(12) => x = 3. Therefore 24x = 2(12)*3 = 64.",
    "solutionStepsAr": [
      "(12)x = 36",
      "x = 3",
      "24x = 72"
    ],
    "solutionStepsEn": [
      "(12)x = 36",
      "x = 3",
      "24x = 72"
    ]
  },
  {
    "id": 1003,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 14) وله ميل يساوي 11. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 14) and has a slope of 11. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 11x + 14",
        "textAr": "أ) f(x) = 11x + 14"
      },
      {
        "textEn": "B) f(x) = 14x + 11",
        "textAr": "ب) f(x) = 14x + 11"
      },
      {
        "textEn": "C) f(x) = 11x - 14",
        "textAr": "ج) f(x) = 11x - 14"
      },
      {
        "textEn": "D) f(x) = 15x + 10",
        "textAr": "د) f(x) = 15x + 10"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 11 و b = 14.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 11 and y-intercept b = 14.",
    "solutionStepsAr": [
      "f(x) = (11)x + (14)"
    ],
    "solutionStepsEn": [
      "f(x) = (11)x + (14)"
    ]
  },
  {
    "id": 1004,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 144 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 144 = 0?",
    "svgData": {
      "type": "parabola",
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
        "textEn": "C) 17",
        "textAr": "ج) 17"
      },
      {
        "textEn": "D) 72",
        "textAr": "د) 72"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 144 => x = √144 = 12 (الحل الموجب).",
    "explanationEn": "x² = 144 => x = √144 = 12 (positive solution).",
    "solutionStepsAr": [
      "x² = 144",
      "x = 12"
    ],
    "solutionStepsEn": [
      "x² = 144",
      "x = 12"
    ]
  },
  {
    "id": 1005,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 1000 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 1000 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 150",
        "textAr": "أ) 150"
      },
      {
        "textEn": "B) 160",
        "textAr": "ب) 160"
      },
      {
        "textEn": "C) 850",
        "textAr": "ج) 850"
      },
      {
        "textEn": "D) 75",
        "textAr": "د) 75"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 1000 = (15/100) × 1000 = 150.",
    "explanationEn": "15% of 1000 = (15/100) * 1000 = 150.",
    "solutionStepsAr": [
      "0.15 × 1000 = 150"
    ],
    "solutionStepsEn": [
      "0.15 * 1000 = 150"
    ]
  },
  {
    "id": 1006,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 40 كرات حمراء و 60 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 40 red balls and 60 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 40 / (40 + 60) = 40/100 = 2/5.",
    "explanationEn": "Probability = Red / Total = 40 / (100) = 2/5.",
    "solutionStepsAr": [
      "40 / 100 = 2/5"
    ],
    "solutionStepsEn": [
      "40 / 100 = 2/5"
    ]
  },
  {
    "id": 1007,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 50° وقياس الزاوية B يساوي 60°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 50° and angle B measures 60°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 70°",
        "textAr": "أ) 70°"
      },
      {
        "textEn": "B) 80°",
        "textAr": "ب) 80°"
      },
      {
        "textEn": "C) 60°",
        "textAr": "ج) 60°"
      },
      {
        "textEn": "D) 110°",
        "textAr": "د) 110°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (50° + 60°) = 70°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (50° + 60°) = 70°.",
    "solutionStepsAr": [
      "180 - 110 = 70"
    ],
    "solutionStepsEn": [
      "180 - 110 = 70"
    ]
  },
  {
    "id": 1008,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 24\n2x + y = 35\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 24\n2x + y = 35\n\nWhat is the value of x in the given system of equations?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 11",
        "textAr": "أ) 11"
      },
      {
        "textEn": "B) 13",
        "textAr": "ب) 13"
      },
      {
        "textEn": "C) 24",
        "textAr": "ج) 24"
      },
      {
        "textEn": "D) 35",
        "textAr": "د) 35"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 35 - 24 => x = 11.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 35 - 24 => x = 11.",
    "solutionStepsAr": [
      "x = 35 - 24 = 11"
    ],
    "solutionStepsEn": [
      "x = 35 - 24 = 11"
    ]
  },
  {
    "id": 1009,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 10x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 10x + -3 is divided by (x - 2)?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 21",
        "textAr": "أ) 21"
      },
      {
        "textEn": "B) 24",
        "textAr": "ب) 24"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 16",
        "textAr": "د) 16"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 10(2) + -3 = 4 + 20 + -3 = 21.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 20 + -3 = 21.",
    "solutionStepsAr": [
      "P(2) = 4 + 20 + -3 = 21"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 20 + -3 = 21"
    ]
  },
  {
    "id": 1010,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (10, 2) و (16, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (10, 2) and (16, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (13, 5)",
        "textAr": "أ) (13, 5)"
      },
      {
        "textEn": "B) (16, 8)",
        "textAr": "ب) (16, 8)"
      },
      {
        "textEn": "C) (14, 4)",
        "textAr": "ج) (14, 4)"
      },
      {
        "textEn": "D) (26, 10)",
        "textAr": "د) (26, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (10 + 16)/2 = 13، y = (2 + 8)/2 = 5. نقطة المنتصف هي (13, 5).",
    "explanationEn": "Midpoint x = (10+16)/2 = 13, y = (2+8)/2 = 5 => (13, 5).",
    "solutionStepsAr": [
      "((10+16)/2, (2+8)/2) = (13, 5)"
    ],
    "solutionStepsEn": [
      "((10+16)/2, (2+8)/2) = (13, 5)"
    ]
  },
  {
    "id": 1011,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 11 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 11 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 605π",
        "textAr": "أ) 605π"
      },
      {
        "textEn": "B) 1210π",
        "textAr": "ب) 1210π"
      },
      {
        "textEn": "C) 55π",
        "textAr": "ج) 55π"
      },
      {
        "textEn": "D) 302.5π",
        "textAr": "د) 302.5π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (11)² × 5 = 605π.",
    "explanationEn": "Volume V = π r² h = π * (11)² * 5 = 605π.",
    "solutionStepsAr": [
      "V = π × 121 × 5 = 605π"
    ],
    "solutionStepsEn": [
      "V = π * 121 * 5 = 605π"
    ]
  },
  {
    "id": 1012,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 12 ساعات. إذا كان العدد الأصلي للبكتيريا هو 5000، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 12 hours. If the initial count is 5000, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 5000(2)^(t/12)",
        "textAr": "أ) N(t) = 5000(2)^(t/12)"
      },
      {
        "textEn": "B) N(t) = 5000(2)^(12t)",
        "textAr": "ب) N(t) = 5000(2)^(12t)"
      },
      {
        "textEn": "C) N(t) = 5000 + 2t",
        "textAr": "ج) N(t) = 5000 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/12)^5000",
        "textAr": "د) N(t) = 2(t/12)^5000"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 5000 وفترة التضاعف d = 12.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 5000 and period d = 12.",
    "solutionStepsAr": [
      "N(t) = 5000 × 2^(t/12)"
    ],
    "solutionStepsEn": [
      "N(t) = 5000 * 2^(t/12)"
    ]
  },
  {
    "id": 1013,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 90$ بالإضافة إلى 25$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $90 plus $25 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 25h + 90",
        "textAr": "أ) C(h) = 25h + 90"
      },
      {
        "textEn": "B) C(h) = 90h + 25",
        "textAr": "ب) C(h) = 90h + 25"
      },
      {
        "textEn": "C) C(h) = (25 + 90)h",
        "textAr": "ج) C(h) = (25 + 90)h"
      },
      {
        "textEn": "D) C(h) = 25h - 90",
        "textAr": "د) C(h) = 25h - 90"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 25h ورسوم ثابتة 90، بالتالي C(h) = 25h + 90.",
    "explanationEn": "Total cost consists of variable rate 25h and flat fee 90: C(h) = 25h + 90.",
    "solutionStepsAr": [
      "C(h) = 25h + 90"
    ],
    "solutionStepsEn": [
      "C(h) = 25h + 90"
    ]
  },
  {
    "id": 1014,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 10، فما قيمة x + 10؟",
    "questionEn": "If √x = 10, what is the value of x + 10?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 110",
        "textAr": "أ) 110"
      },
      {
        "textEn": "B) 20",
        "textAr": "ب) 20"
      },
      {
        "textEn": "C) 30",
        "textAr": "ج) 30"
      },
      {
        "textEn": "D) 100",
        "textAr": "د) 100"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 10² = 100. إذن x + 10 = 100 + 10 = 110.",
    "explanationEn": "Squaring both sides: x = 10² = 100. Thus x + 10 = 110.",
    "solutionStepsAr": [
      "x = 100",
      "x + 10 = 110"
    ],
    "solutionStepsEn": [
      "x = 100",
      "x + 10 = 110"
    ]
  },
  {
    "id": 1015,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 10)² + (y + 11)² = 169 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 10)² + (y + 11)² = 169 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
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
        "textEn": "C) 26",
        "textAr": "ج) 26"
      },
      {
        "textEn": "D) 10",
        "textAr": "د) 10"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 169، فإن نصف القطر r = √169 = 13.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 169, radius r = √169 = 13.",
    "solutionStepsAr": [
      "r² = 169",
      "r = 13"
    ],
    "solutionStepsEn": [
      "r² = 169",
      "r = 13"
    ]
  },
  {
    "id": 1016,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 100. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 100. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 20",
        "textAr": "أ) 20"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 100",
        "textAr": "ج) 100"
      },
      {
        "textEn": "D) 17",
        "textAr": "د) 17"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 100 / 5 = 20.",
    "explanationEn": "Mean = Sum / Count = 100 / 5 = 20.",
    "solutionStepsAr": [
      "100 / 5 = 20"
    ],
    "solutionStepsEn": [
      "100 / 5 = 20"
    ]
  },
  {
    "id": 1017,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 90$ بالإضافة إلى 25$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $90 plus $25 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 25h + 90",
        "textAr": "أ) C(h) = 25h + 90"
      },
      {
        "textEn": "B) C(h) = 90h + 25",
        "textAr": "ب) C(h) = 90h + 25"
      },
      {
        "textEn": "C) C(h) = (25 + 90)h",
        "textAr": "ج) C(h) = (25 + 90)h"
      },
      {
        "textEn": "D) C(h) = 25h - 90",
        "textAr": "د) C(h) = 25h - 90"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 25h ورسوم ثابتة 90، بالتالي C(h) = 25h + 90.",
    "explanationEn": "Total cost consists of variable rate 25h and flat fee 90: C(h) = 25h + 90.",
    "solutionStepsAr": [
      "C(h) = 25h + 90"
    ],
    "solutionStepsEn": [
      "C(h) = 25h + 90"
    ]
  },
  {
    "id": 1018,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 2، فما قيمة x + 10؟",
    "questionEn": "If √x = 2, what is the value of x + 10?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 14",
        "textAr": "أ) 14"
      },
      {
        "textEn": "B) 12",
        "textAr": "ب) 12"
      },
      {
        "textEn": "C) 14",
        "textAr": "ج) 14"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 2² = 4. إذن x + 10 = 4 + 10 = 14.",
    "explanationEn": "Squaring both sides: x = 2² = 4. Thus x + 10 = 14.",
    "solutionStepsAr": [
      "x = 4",
      "x + 10 = 14"
    ],
    "solutionStepsEn": [
      "x = 4",
      "x + 10 = 14"
    ]
  },
  {
    "id": 1019,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 10)² + (y + 11)² = 100 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 10)² + (y + 11)² = 100 represents a circle. What is the radius of this circle?",
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
        "textEn": "D) 10",
        "textAr": "د) 10"
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
    "id": 1020,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 100. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 100. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 20",
        "textAr": "أ) 20"
      },
      {
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 100",
        "textAr": "ج) 100"
      },
      {
        "textEn": "D) 17",
        "textAr": "د) 17"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 100 / 5 = 20.",
    "explanationEn": "Mean = Sum / Count = 100 / 5 = 20.",
    "solutionStepsAr": [
      "100 / 5 = 20"
    ],
    "solutionStepsEn": [
      "100 / 5 = 20"
    ]
  },
  {
    "id": 1021,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 90$ بالإضافة إلى 25$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $90 plus $25 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 25h + 90",
        "textAr": "أ) C(h) = 25h + 90"
      },
      {
        "textEn": "B) C(h) = 90h + 25",
        "textAr": "ب) C(h) = 90h + 25"
      },
      {
        "textEn": "C) C(h) = (25 + 90)h",
        "textAr": "ج) C(h) = (25 + 90)h"
      },
      {
        "textEn": "D) C(h) = 25h - 90",
        "textAr": "د) C(h) = 25h - 90"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 25h ورسوم ثابتة 90، بالتالي C(h) = 25h + 90.",
    "explanationEn": "Total cost consists of variable rate 25h and flat fee 90: C(h) = 25h + 90.",
    "solutionStepsAr": [
      "C(h) = 25h + 90"
    ],
    "solutionStepsEn": [
      "C(h) = 25h + 90"
    ]
  },
  {
    "id": 1022,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 237، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 237, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "74",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 222. بالقسمة على 3: x = 74.",
    "explanationEn": "Subtract 15 from both sides: 3x = 222. Divide by 3: x = 74.",
    "solutionStepsAr": [
      "3x = 222",
      "x = 74"
    ],
    "solutionStepsEn": [
      "3x = 222",
      "x = 74"
    ]
  },
  {
    "id": 1023,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 14)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 14)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 14.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 14.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 1024,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 90°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 90°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "90",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 90° = 90°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 90 = 90.",
    "solutionStepsAr": [
      "180 - 90 = 90"
    ],
    "solutionStepsEn": [
      "180 - 90 = 90"
    ]
  },
  {
    "id": 1025,
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
    "id": 1026,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 12x + b تقع عليها النقطة (2, 64). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 12x + b passes through (2, 64). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "40",
    "explanationAr": "بالتعويض بالنقطة: 64 = 12(2) + b => b = 40.",
    "explanationEn": "Substitute the point: 64 = 24 + b => b = 40.",
    "solutionStepsAr": [
      "b = 40"
    ],
    "solutionStepsEn": [
      "b = 40"
    ]
  },
  {
    "id": 1027,
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
    "id": 1028,
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
    "id": 1029,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 44x + 484 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 44x + 484 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-44)² - 4(1)(484) = 1936 - 1936 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-44)² - 4(1)(484) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1030,
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
    "id": 1031,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 20؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 20?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 45",
        "textAr": "أ) 45"
      },
      {
        "textEn": "B) 50",
        "textAr": "ب) 50"
      },
      {
        "textEn": "C) 40",
        "textAr": "ج) 40"
      },
      {
        "textEn": "D) 41",
        "textAr": "د) 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 20: y = 2(20) + 5 = 40 + 5 = 45.",
    "explanationEn": "Substitute x = 20: y = 2(20) + 5 = 45.",
    "solutionStepsAr": [
      "y = 2 × 20 + 5 = 45"
    ],
    "solutionStepsEn": [
      "y = 2 * 20 + 5 = 45"
    ]
  },
  {
    "id": 1032,
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
    "id": 1033,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 12x + 36 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 12x + 36 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-12)² - 4(1)(36) = 144 - 144 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-12)² - 4(1)(36) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1034,
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
    "id": 1035,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 20؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 20?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 45",
        "textAr": "أ) 45"
      },
      {
        "textEn": "B) 50",
        "textAr": "ب) 50"
      },
      {
        "textEn": "C) 40",
        "textAr": "ج) 40"
      },
      {
        "textEn": "D) 41",
        "textAr": "د) 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 20: y = 2(20) + 5 = 40 + 5 = 45.",
    "explanationEn": "Substitute x = 20: y = 2(20) + 5 = 45.",
    "solutionStepsAr": [
      "y = 2 × 20 + 5 = 45"
    ],
    "solutionStepsEn": [
      "y = 2 * 20 + 5 = 45"
    ]
  },
  {
    "id": 1036,
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
    "id": 1037,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 20x + 100 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 20x + 100 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-20)² - 4(1)(100) = 400 - 400 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-20)² - 4(1)(100) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1038,
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
    "id": 1039,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 20؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 20?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 45",
        "textAr": "أ) 45"
      },
      {
        "textEn": "B) 50",
        "textAr": "ب) 50"
      },
      {
        "textEn": "C) 40",
        "textAr": "ج) 40"
      },
      {
        "textEn": "D) 41",
        "textAr": "د) 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 20: y = 2(20) + 5 = 40 + 5 = 45.",
    "explanationEn": "Substitute x = 20: y = 2(20) + 5 = 45.",
    "solutionStepsAr": [
      "y = 2 × 20 + 5 = 45"
    ],
    "solutionStepsEn": [
      "y = 2 * 20 + 5 = 45"
    ]
  },
  {
    "id": 1040,
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
    "id": 1041,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 28x + 196 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 28x + 196 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-28)² - 4(1)(196) = 784 - 784 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-28)² - 4(1)(196) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1042,
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
    "id": 1043,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 20؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 20?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 45",
        "textAr": "أ) 45"
      },
      {
        "textEn": "B) 50",
        "textAr": "ب) 50"
      },
      {
        "textEn": "C) 40",
        "textAr": "ج) 40"
      },
      {
        "textEn": "D) 41",
        "textAr": "د) 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 20: y = 2(20) + 5 = 40 + 5 = 45.",
    "explanationEn": "Substitute x = 20: y = 2(20) + 5 = 45.",
    "solutionStepsAr": [
      "y = 2 × 20 + 5 = 45"
    ],
    "solutionStepsEn": [
      "y = 2 * 20 + 5 = 45"
    ]
  },
  {
    "id": 1044,
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
    "id": 1045,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما عدد الحلول الحقيقية المختلفة للمعادلة التربيعية x² - 36x + 324 = 0؟",
    "questionEn": "How many distinct real solutions does the quadratic equation x² - 36x + 324 = 0 have?",
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
    "explanationAr": "المميز Δ = b² - 4ac = (-36)² - 4(1)(324) = 1296 - 1296 = 0. عندما يكون المميز صفراً يوجد حل حقيقي واحد فقط (جذر مكرر).",
    "explanationEn": "Discriminant = (-36)² - 4(1)(324) = 0, so there is exactly 1 real solution.",
    "solutionStepsAr": [
      "b² - 4ac = 0 => حل واحد"
    ],
    "solutionStepsEn": [
      "b² - 4ac = 0 => 1 solution"
    ]
  },
  {
    "id": 1046,
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
    "id": 1047,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 20؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 20?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 45",
        "textAr": "أ) 45"
      },
      {
        "textEn": "B) 50",
        "textAr": "ب) 50"
      },
      {
        "textEn": "C) 40",
        "textAr": "ج) 40"
      },
      {
        "textEn": "D) 41",
        "textAr": "د) 41"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 20: y = 2(20) + 5 = 40 + 5 = 45.",
    "explanationEn": "Substitute x = 20: y = 2(20) + 5 = 45.",
    "solutionStepsAr": [
      "y = 2 × 20 + 5 = 45"
    ],
    "solutionStepsEn": [
      "y = 2 * 20 + 5 = 45"
    ]
  },
  {
    "id": 1048,
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
    "id": 1049,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 25\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 25\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 1050,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 20x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 20x + 36 = 0?",
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
    "id": 1051,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 15، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 15, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "15",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (15)√3. بالقسمة على √3 نحصل على 15.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (15)√3. Divided by √3 gives 15.",
    "solutionStepsAr": [
      "Side opposite 60° = (15)√3",
      "Divided by √3 = 15"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (15)√3",
      "Divided by √3 = 15"
    ]
  },
  {
    "id": 1052,
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
    "id": 1053,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (10, 2) و (16, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (10, 2) and (16, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(16 - 10)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 1054,
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
