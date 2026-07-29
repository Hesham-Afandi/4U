import { Question } from '../../types';

export const SAT_MODEL_6_QUESTIONS: Question[] = [
  {
    "id": 601,
    "domain": "algebra",
    "category": "linear-inequalities",
    "difficulty": "Easy",
    "questionAr": "ما هي مجموعة حل المتباينة 12x - 18 > 42؟",
    "questionEn": "Which inequality represents the solutions for 12x - 18 > 42?",
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
        "textEn": "C) x > 60",
        "textAr": "ج) x > 60"
      },
      {
        "textEn": "D) x < 2",
        "textAr": "د) x < 2"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "إضافة 18 للطرفين تعطي 12x > 60. بالقسمة على 12 نحصل على x > 5.",
    "explanationEn": "Adding 18 to both sides gives 12x > 60. Dividing by 12 gives x > 5.",
    "solutionStepsAr": [
      "12x > 60",
      "x > 5"
    ],
    "solutionStepsEn": [
      "12x > 60",
      "x > 5"
    ]
  },
  {
    "id": 602,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Easy",
    "questionAr": "إذا كانت 8x + 7 = 27، فما قيمة 16x؟",
    "questionEn": "If 8x + 7 = 27, what is the value of 16x?",
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
        "textEn": "B) 40",
        "textAr": "ب) 40"
      },
      {
        "textEn": "C) 21",
        "textAr": "ج) 21"
      },
      {
        "textEn": "D) 32",
        "textAr": "د) 32"
      }
    ],
    "correctAnswer": 1,
    "explanationAr": "بطرح 7 من الطرفين نجد (8)x = 20 = 3(8). وبالتالي فإن x = 3. إذن 16x = 2(8)(3) = 40.",
    "explanationEn": "Subtracting 7 gives (8)x = 3(8) => x = 3. Therefore 16x = 2(8)*3 = 40.",
    "solutionStepsAr": [
      "(8)x = 24",
      "x = 3",
      "16x = 48"
    ],
    "solutionStepsEn": [
      "(8)x = 24",
      "x = 3",
      "16x = 48"
    ]
  },
  {
    "id": 603,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Easy",
    "questionAr": "يمر مستقيم بالنقطة (0, 10) وله ميل يساوي 7. أي من الدوال التالية تمثل هذا المستقيم؟",
    "questionEn": "A line passes through the point (0, 10) and has a slope of 7. Which equation defines this line?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) f(x) = 7x + 10",
        "textAr": "أ) f(x) = 7x + 10"
      },
      {
        "textEn": "B) f(x) = 10x + 7",
        "textAr": "ب) f(x) = 10x + 7"
      },
      {
        "textEn": "C) f(x) = 7x - 10",
        "textAr": "ج) f(x) = 7x - 10"
      },
      {
        "textEn": "D) f(x) = 11x + 6",
        "textAr": "د) f(x) = 11x + 6"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة المستقيم بصيغة الميل والمقطع هي f(x) = mx + b حيث m = 7 و b = 10.",
    "explanationEn": "The slope-intercept form is f(x) = mx + b with m = 7 and y-intercept b = 10.",
    "solutionStepsAr": [
      "f(x) = (7)x + (10)"
    ],
    "solutionStepsEn": [
      "f(x) = (7)x + (10)"
    ]
  },
  {
    "id": 604,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Easy",
    "questionAr": "ما هو الحل الموجب للمعادلة x² - 64 = 0؟",
    "questionEn": "What is the positive solution to the equation x² - 64 = 0?",
    "svgData": {
      "type": "parabola",
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
        "textEn": "C) 13",
        "textAr": "ج) 13"
      },
      {
        "textEn": "D) 32",
        "textAr": "د) 32"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x² = 64 => x = √64 = 8 (الحل الموجب).",
    "explanationEn": "x² = 64 => x = √64 = 8 (positive solution).",
    "solutionStepsAr": [
      "x² = 64",
      "x = 8"
    ],
    "solutionStepsEn": [
      "x² = 64",
      "x = 8"
    ]
  },
  {
    "id": 605,
    "domain": "data-analysis",
    "category": "percentages",
    "difficulty": "Easy",
    "questionAr": "اشتري متجر 600 جهازاً إلكترونياً وقدم خصماً بنسبة 15% على جميع الأجهزة. كم عدد الأجهزة المخصومة؟",
    "questionEn": "A store purchased 600 electronic items and applied a 15% discount on all items. How many items received a discount?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 90",
        "textAr": "أ) 90"
      },
      {
        "textEn": "B) 100",
        "textAr": "ب) 100"
      },
      {
        "textEn": "C) 510",
        "textAr": "ج) 510"
      },
      {
        "textEn": "D) 45",
        "textAr": "د) 45"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "15% من 600 = (15/100) × 600 = 90.",
    "explanationEn": "15% of 600 = (15/100) * 600 = 90.",
    "solutionStepsAr": [
      "0.15 × 600 = 90"
    ],
    "solutionStepsEn": [
      "0.15 * 600 = 90"
    ]
  },
  {
    "id": 606,
    "domain": "data-analysis",
    "category": "probability",
    "difficulty": "Easy",
    "questionAr": "يحتوي كيس على 24 كرات حمراء و 36 كرات زرقاء. إذا سُحبت كرة واحدة عشوائياً، فما احتمال أن تكون حمراء؟",
    "questionEn": "A bag contains 24 red balls and 36 blue balls. If one ball is drawn at random, what is the probability that it is red?",
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
    "explanationAr": "الاحتمال = عدد الكرات الحمراء / المجموع الكلي = 24 / (24 + 36) = 24/60 = 2/5.",
    "explanationEn": "Probability = Red / Total = 24 / (60) = 2/5.",
    "solutionStepsAr": [
      "24 / 60 = 2/5"
    ],
    "solutionStepsEn": [
      "24 / 60 = 2/5"
    ]
  },
  {
    "id": 607,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Easy",
    "questionAr": "في المثلث ABC، قياس الزاوية A يساوي 56° وقياس الزاوية B يساوي 66°. ما قياس الزاوية C؟",
    "questionEn": "In triangle ABC, angle A measures 56° and angle B measures 66°. What is the measure of angle C?",
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 58°",
        "textAr": "أ) 58°"
      },
      {
        "textEn": "B) 68°",
        "textAr": "ب) 68°"
      },
      {
        "textEn": "C) 48°",
        "textAr": "ج) 48°"
      },
      {
        "textEn": "D) 122°",
        "textAr": "د) 122°"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "مجموع زوايا المثلث 180°. الزاوية C = 180° - (56° + 66°) = 58°.",
    "explanationEn": "Sum of angles in a triangle is 180°. Angle C = 180° - (56° + 66°) = 58°.",
    "solutionStepsAr": [
      "180 - 122 = 58"
    ],
    "solutionStepsEn": [
      "180 - 122 = 58"
    ]
  },
  {
    "id": 608,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Medium",
    "questionAr": "x + y = 16\n2x + y = 23\n\nما قيمة x في نظام المعادلات المعطى؟",
    "questionEn": "x + y = 16\n2x + y = 23\n\nWhat is the value of x in the given system of equations?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 7",
        "textAr": "أ) 7"
      },
      {
        "textEn": "B) 9",
        "textAr": "ب) 9"
      },
      {
        "textEn": "C) 16",
        "textAr": "ج) 16"
      },
      {
        "textEn": "D) 23",
        "textAr": "د) 23"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بطرح المعادلة الأولى من الثانية: (2x + y) - (x + y) = 23 - 16 => x = 7.",
    "explanationEn": "Subtracting equation 1 from equation 2: (2x+y) - (x+y) = 23 - 16 => x = 7.",
    "solutionStepsAr": [
      "x = 23 - 16 = 7"
    ],
    "solutionStepsEn": [
      "x = 23 - 16 = 7"
    ]
  },
  {
    "id": 609,
    "domain": "advanced-math",
    "category": "polynomials",
    "difficulty": "Medium",
    "questionAr": "ما باقي قسمة كثير الحدود P(x) = x² + 6x + -3 على (x - 2)؟",
    "questionEn": "What is the remainder when P(x) = x² + 6x + -3 is divided by (x - 2)?",
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
        "textEn": "B) 16",
        "textAr": "ب) 16"
      },
      {
        "textEn": "C) 0",
        "textAr": "ج) 0"
      },
      {
        "textEn": "D) 8",
        "textAr": "د) 8"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حسب نظرية الباقي، الباقي هو P(2) = 2² + 6(2) + -3 = 4 + 12 + -3 = 13.",
    "explanationEn": "By Remainder Theorem, remainder = P(2) = 4 + 12 + -3 = 13.",
    "solutionStepsAr": [
      "P(2) = 4 + 12 + -3 = 13"
    ],
    "solutionStepsEn": [
      "P(2) = 4 + 12 + -3 = 13"
    ]
  },
  {
    "id": 610,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Medium",
    "questionAr": "ما هي نقطة المنتصف للقطعة المستقيمة الواصلة بين النقطتين (6, 2) و (12, 8)؟",
    "questionEn": "What is the midpoint of the line segment connecting (6, 2) and (12, 8)?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) (9, 5)",
        "textAr": "أ) (9, 5)"
      },
      {
        "textEn": "B) (12, 8)",
        "textAr": "ب) (12, 8)"
      },
      {
        "textEn": "C) (10, 4)",
        "textAr": "ج) (10, 4)"
      },
      {
        "textEn": "D) (18, 10)",
        "textAr": "د) (18, 10)"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "x = (6 + 12)/2 = 9، y = (2 + 8)/2 = 5. نقطة المنتصف هي (9, 5).",
    "explanationEn": "Midpoint x = (6+12)/2 = 9, y = (2+8)/2 = 5 => (9, 5).",
    "solutionStepsAr": [
      "((6+12)/2, (2+8)/2) = (9, 5)"
    ],
    "solutionStepsEn": [
      "((6+12)/2, (2+8)/2) = (9, 5)"
    ]
  },
  {
    "id": 611,
    "domain": "geometry-trig",
    "category": "area-volume",
    "difficulty": "Medium",
    "questionAr": "أسطوانة دائرية قائمة نصف قطر قاعدتها 7 سم وارتفاعها 5 سم. ما حجم الأسطوانة بدلالة π؟",
    "questionEn": "A right circular cylinder has a base radius of 7 cm and a height of 5 cm. What is its volume in terms of π?",
    "svgData": {
      "type": "geometry-rect",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 245π",
        "textAr": "أ) 245π"
      },
      {
        "textEn": "B) 490π",
        "textAr": "ب) 490π"
      },
      {
        "textEn": "C) 35π",
        "textAr": "ج) 35π"
      },
      {
        "textEn": "D) 122.5π",
        "textAr": "د) 122.5π"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "حجم الأسطوانة V = π r² h = π × (7)² × 5 = 245π.",
    "explanationEn": "Volume V = π r² h = π * (7)² * 5 = 245π.",
    "solutionStepsAr": [
      "V = π × 49 × 5 = 245π"
    ],
    "solutionStepsEn": [
      "V = π * 49 * 5 = 245π"
    ]
  },
  {
    "id": 612,
    "domain": "advanced-math",
    "category": "exponential-models",
    "difficulty": "Medium",
    "questionAr": "تتضاعف عينة من البكتيريا كل 8 ساعات. إذا كان العدد الأصلي للبكتيريا هو 3000، فأي دالة تعطي العدد الكلي N(t) بعد t ساعة؟",
    "questionEn": "A bacteria sample doubles every 8 hours. If the initial count is 3000, which function gives the total count N(t) after t hours?",
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) N(t) = 3000(2)^(t/8)",
        "textAr": "أ) N(t) = 3000(2)^(t/8)"
      },
      {
        "textEn": "B) N(t) = 3000(2)^(8t)",
        "textAr": "ب) N(t) = 3000(2)^(8t)"
      },
      {
        "textEn": "C) N(t) = 3000 + 2t",
        "textAr": "ج) N(t) = 3000 + 2t"
      },
      {
        "textEn": "D) N(t) = 2(t/8)^3000",
        "textAr": "د) N(t) = 2(t/8)^3000"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "صيغة التضاعف الأسية هي N(t) = P(2)^(t/d) حيث P = 3000 وفترة التضاعف d = 8.",
    "explanationEn": "The exponential doubling formula is N(t) = P(2)^(t/d) where P = 3000 and period d = 8.",
    "solutionStepsAr": [
      "N(t) = 3000 × 2^(t/8)"
    ],
    "solutionStepsEn": [
      "N(t) = 3000 * 2^(t/8)"
    ]
  },
  {
    "id": 613,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 70$ بالإضافة إلى 21$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $70 plus $21 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 21h + 70",
        "textAr": "أ) C(h) = 21h + 70"
      },
      {
        "textEn": "B) C(h) = 70h + 21",
        "textAr": "ب) C(h) = 70h + 21"
      },
      {
        "textEn": "C) C(h) = (21 + 70)h",
        "textAr": "ج) C(h) = (21 + 70)h"
      },
      {
        "textEn": "D) C(h) = 21h - 70",
        "textAr": "د) C(h) = 21h - 70"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 21h ورسوم ثابتة 70، بالتالي C(h) = 21h + 70.",
    "explanationEn": "Total cost consists of variable rate 21h and flat fee 70: C(h) = 21h + 70.",
    "solutionStepsAr": [
      "C(h) = 21h + 70"
    ],
    "solutionStepsEn": [
      "C(h) = 21h + 70"
    ]
  },
  {
    "id": 614,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Medium",
    "questionAr": "إذا كانت √x = 2، فما قيمة x + 6؟",
    "questionEn": "If √x = 2, what is the value of x + 6?",
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
        "textEn": "B) 8",
        "textAr": "ب) 8"
      },
      {
        "textEn": "C) 10",
        "textAr": "ج) 10"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 2² = 4. إذن x + 6 = 4 + 6 = 10.",
    "explanationEn": "Squaring both sides: x = 2² = 4. Thus x + 6 = 10.",
    "solutionStepsAr": [
      "x = 4",
      "x + 6 = 10"
    ],
    "solutionStepsEn": [
      "x = 4",
      "x + 6 = 10"
    ]
  },
  {
    "id": 615,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Medium",
    "questionAr": "في مستوى xy، المعادلة (x - 6)² + (y + 7)² = 81 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 6)² + (y + 7)² = 81 represents a circle. What is the radius of this circle?",
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
        "textEn": "D) 6",
        "textAr": "د) 6"
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
    "id": 616,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Medium",
    "questionAr": "مجموع 5 أعداد هو 80. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 80. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 16",
        "textAr": "أ) 16"
      },
      {
        "textEn": "B) 32",
        "textAr": "ب) 32"
      },
      {
        "textEn": "C) 80",
        "textAr": "ج) 80"
      },
      {
        "textEn": "D) 13",
        "textAr": "د) 13"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 80 / 5 = 16.",
    "explanationEn": "Mean = Sum / Count = 80 / 5 = 16.",
    "solutionStepsAr": [
      "80 / 5 = 16"
    ],
    "solutionStepsEn": [
      "80 / 5 = 16"
    ]
  },
  {
    "id": 617,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Medium",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 70$ بالإضافة إلى 21$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $70 plus $21 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 21h + 70",
        "textAr": "أ) C(h) = 21h + 70"
      },
      {
        "textEn": "B) C(h) = 70h + 21",
        "textAr": "ب) C(h) = 70h + 21"
      },
      {
        "textEn": "C) C(h) = (21 + 70)h",
        "textAr": "ج) C(h) = (21 + 70)h"
      },
      {
        "textEn": "D) C(h) = 21h - 70",
        "textAr": "د) C(h) = 21h - 70"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 21h ورسوم ثابتة 70، بالتالي C(h) = 21h + 70.",
    "explanationEn": "Total cost consists of variable rate 21h and flat fee 70: C(h) = 21h + 70.",
    "solutionStepsAr": [
      "C(h) = 21h + 70"
    ],
    "solutionStepsEn": [
      "C(h) = 21h + 70"
    ]
  },
  {
    "id": 618,
    "domain": "advanced-math",
    "category": "radicals",
    "difficulty": "Hard",
    "questionAr": "إذا كانت √x = 2، فما قيمة x + 6؟",
    "questionEn": "If √x = 2, what is the value of x + 6?",
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
        "textEn": "B) 8",
        "textAr": "ب) 8"
      },
      {
        "textEn": "C) 10",
        "textAr": "ج) 10"
      },
      {
        "textEn": "D) 4",
        "textAr": "د) 4"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بتربيع الطرفين: x = 2² = 4. إذن x + 6 = 4 + 6 = 10.",
    "explanationEn": "Squaring both sides: x = 2² = 4. Thus x + 6 = 10.",
    "solutionStepsAr": [
      "x = 4",
      "x + 6 = 10"
    ],
    "solutionStepsEn": [
      "x = 4",
      "x + 6 = 10"
    ]
  },
  {
    "id": 619,
    "domain": "geometry-trig",
    "category": "circles",
    "difficulty": "Hard",
    "questionAr": "في مستوى xy، المعادلة (x - 6)² + (y + 7)² = 36 تمثل دائرة. ما طول نصف قطر هذه الدائرة؟",
    "questionEn": "In the xy-plane, the equation (x - 6)² + (y + 7)² = 36 represents a circle. What is the radius of this circle?",
    "svgData": {
      "type": "circle-arc",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 6",
        "textAr": "أ) 6"
      },
      {
        "textEn": "B) 36",
        "textAr": "ب) 36"
      },
      {
        "textEn": "C) 12",
        "textAr": "ج) 12"
      },
      {
        "textEn": "D) 6",
        "textAr": "د) 6"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "معادلة الدائرة القياسية هي (x - h)² + (y - k)² = r². بما أن r² = 36، فإن نصف القطر r = √36 = 6.",
    "explanationEn": "Standard circle equation (x - h)² + (y - k)² = r². Since r² = 36, radius r = √36 = 6.",
    "solutionStepsAr": [
      "r² = 36",
      "r = 6"
    ],
    "solutionStepsEn": [
      "r² = 36",
      "r = 6"
    ]
  },
  {
    "id": 620,
    "domain": "data-analysis",
    "category": "statistics",
    "difficulty": "Hard",
    "questionAr": "مجموع 5 أعداد هو 80. ما هو الوسط الحسابي (المتوسط) لهذه الأعداد الخمسة؟",
    "questionEn": "The sum of 5 numbers is 80. What is the arithmetic mean (average) of these 5 numbers?",
    "svgData": {
      "type": "bar-chart",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 16",
        "textAr": "أ) 16"
      },
      {
        "textEn": "B) 32",
        "textAr": "ب) 32"
      },
      {
        "textEn": "C) 80",
        "textAr": "ج) 80"
      },
      {
        "textEn": "D) 13",
        "textAr": "د) 13"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "الوسط الحسابي = (المجموع الكلي) / (عدد الأعداد) = 80 / 5 = 16.",
    "explanationEn": "Mean = Sum / Count = 80 / 5 = 16.",
    "solutionStepsAr": [
      "80 / 5 = 16"
    ],
    "solutionStepsEn": [
      "80 / 5 = 16"
    ]
  },
  {
    "id": 621,
    "domain": "algebra",
    "category": "algebra-word-problems",
    "difficulty": "Hard",
    "questionAr": "يدفع عميل رسوماً ثابتة قدرها 70$ بالإضافة إلى 21$ عن كل ساعة تأجير معدات. إذا كانت التكلفة الإجمالية C(h) لحساب h ساعة، فأي معادلة تمثل C(h)؟",
    "questionEn": "A customer pays a flat fee of $70 plus $21 per hour of equipment rental. Which equation represents the total cost C(h) for h hours?",
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) C(h) = 21h + 70",
        "textAr": "أ) C(h) = 21h + 70"
      },
      {
        "textEn": "B) C(h) = 70h + 21",
        "textAr": "ب) C(h) = 70h + 21"
      },
      {
        "textEn": "C) C(h) = (21 + 70)h",
        "textAr": "ج) C(h) = (21 + 70)h"
      },
      {
        "textEn": "D) C(h) = 21h - 70",
        "textAr": "د) C(h) = 21h - 70"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "التكلفة الإجمالية تتكون من معدل متغير 21h ورسوم ثابتة 70، بالتالي C(h) = 21h + 70.",
    "explanationEn": "Total cost consists of variable rate 21h and flat fee 70: C(h) = 21h + 70.",
    "solutionStepsAr": [
      "C(h) = 21h + 70"
    ],
    "solutionStepsEn": [
      "C(h) = 21h + 70"
    ]
  },
  {
    "id": 622,
    "domain": "algebra",
    "category": "linear-equations",
    "difficulty": "Medium",
    "questionAr": "إذا كانت 3x + 15 = 201، فما قيمة x؟",
    "questionEn": "If 3x + 15 = 201, what is the value of x?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "62",
    "explanationAr": "بطرح 15 من الطرفين: 3x = 186. بالقسمة على 3: x = 62.",
    "explanationEn": "Subtract 15 from both sides: 3x = 186. Divide by 3: x = 62.",
    "solutionStepsAr": [
      "3x = 186",
      "x = 62"
    ],
    "solutionStepsEn": [
      "3x = 186",
      "x = 62"
    ]
  },
  {
    "id": 623,
    "domain": "advanced-math",
    "category": "quadratic-functions",
    "difficulty": "Medium",
    "questionAr": "ما هي القيمة الصغرى للدالة f(x) = (x - 10)² + 7؟",
    "questionEn": "What is the minimum value of the function f(x) = (x - 10)² + 7?",
    "isGridIn": true,
    "svgData": {
      "type": "parabola",
      "params": {}
    },
    "correctAnswer": "7",
    "explanationAr": "الدالة في صورة الرأس (h, k) والقيمة الصغرى هي k = 7 عندما x = 10.",
    "explanationEn": "Vertex form (h, k), minimum value is k = 7 at x = 10.",
    "solutionStepsAr": [
      "k = 7"
    ],
    "solutionStepsEn": [
      "k = 7"
    ]
  },
  {
    "id": 624,
    "domain": "geometry-trig",
    "category": "angles-lines",
    "difficulty": "Medium",
    "questionAr": "زاويتان متكاملتان، إذا كان قياس الزاوية الأولى 70°، فما قياس الزاوية الثانية بالدرجات؟",
    "questionEn": "Two angles are supplementary. If the first angle measures 70°, what is the measure of the second angle in degrees?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "110",
    "explanationAr": "الزاويتان المتكاملتان مجموع قياسهما 180°. الزاوية الثانية = 180° - 70° = 110°.",
    "explanationEn": "Supplementary angles sum to 180°. Second angle = 180 - 70 = 110.",
    "solutionStepsAr": [
      "180 - 70 = 110"
    ],
    "solutionStepsEn": [
      "180 - 70 = 110"
    ]
  },
  {
    "id": 625,
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
    "id": 626,
    "domain": "algebra",
    "category": "linear-functions",
    "difficulty": "Hard",
    "questionAr": "دالة خطية f(x) = 8x + b تقع عليها النقطة (2, 44). ما قيمة المقطع الصادي b؟",
    "questionEn": "A linear function f(x) = 8x + b passes through (2, 44). What is the value of the y-intercept b?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "28",
    "explanationAr": "بالتعويض بالنقطة: 44 = 8(2) + b => b = 28.",
    "explanationEn": "Substitute the point: 44 = 16 + b => b = 28.",
    "solutionStepsAr": [
      "b = 28"
    ],
    "solutionStepsEn": [
      "b = 28"
    ]
  },
  {
    "id": 627,
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
    "id": 628,
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
    "id": 629,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 630,
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
    "id": 631,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 16؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 16?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 37",
        "textAr": "أ) 37"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 32",
        "textAr": "ج) 32"
      },
      {
        "textEn": "D) 33",
        "textAr": "د) 33"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 16: y = 2(16) + 5 = 32 + 5 = 37.",
    "explanationEn": "Substitute x = 16: y = 2(16) + 5 = 37.",
    "solutionStepsAr": [
      "y = 2 × 16 + 5 = 37"
    ],
    "solutionStepsEn": [
      "y = 2 * 16 + 5 = 37"
    ]
  },
  {
    "id": 632,
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
    "id": 633,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Medium",
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
    "id": 634,
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
    "id": 635,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 16؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 16?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 37",
        "textAr": "أ) 37"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 32",
        "textAr": "ج) 32"
      },
      {
        "textEn": "D) 33",
        "textAr": "د) 33"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 16: y = 2(16) + 5 = 32 + 5 = 37.",
    "explanationEn": "Substitute x = 16: y = 2(16) + 5 = 37.",
    "solutionStepsAr": [
      "y = 2 × 16 + 5 = 37"
    ],
    "solutionStepsEn": [
      "y = 2 * 16 + 5 = 37"
    ]
  },
  {
    "id": 636,
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
    "id": 637,
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
    "id": 638,
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
    "id": 639,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Medium",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 16؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 16?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 37",
        "textAr": "أ) 37"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 32",
        "textAr": "ج) 32"
      },
      {
        "textEn": "D) 33",
        "textAr": "د) 33"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 16: y = 2(16) + 5 = 32 + 5 = 37.",
    "explanationEn": "Substitute x = 16: y = 2(16) + 5 = 37.",
    "solutionStepsAr": [
      "y = 2 × 16 + 5 = 37"
    ],
    "solutionStepsEn": [
      "y = 2 * 16 + 5 = 37"
    ]
  },
  {
    "id": 640,
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
    "id": 641,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 642,
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
    "id": 643,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 16؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 16?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 37",
        "textAr": "أ) 37"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 32",
        "textAr": "ج) 32"
      },
      {
        "textEn": "D) 33",
        "textAr": "د) 33"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 16: y = 2(16) + 5 = 32 + 5 = 37.",
    "explanationEn": "Substitute x = 16: y = 2(16) + 5 = 37.",
    "solutionStepsAr": [
      "y = 2 × 16 + 5 = 37"
    ],
    "solutionStepsEn": [
      "y = 2 * 16 + 5 = 37"
    ]
  },
  {
    "id": 644,
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
    "id": 645,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
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
    "id": 646,
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
    "id": 647,
    "domain": "data-analysis",
    "category": "linear-regression",
    "difficulty": "Hard",
    "questionAr": "يمثل خط أفضل مطابقة لمخطط انتشار المعادلة y = 2x + 5. ما القيمة المتوقعة لـ y عندما تكون x = 16؟",
    "questionEn": "The line of best fit for a scatter plot is given by y = 2x + 5. What is the predicted value of y when x = 16?",
    "svgData": {
      "type": "scatterplot",
      "params": {}
    },
    "options": [
      {
        "textEn": "A) 37",
        "textAr": "أ) 37"
      },
      {
        "textEn": "B) 42",
        "textAr": "ب) 42"
      },
      {
        "textEn": "C) 32",
        "textAr": "ج) 32"
      },
      {
        "textEn": "D) 33",
        "textAr": "د) 33"
      }
    ],
    "correctAnswer": 0,
    "explanationAr": "بالتعويض عن x بـ 16: y = 2(16) + 5 = 32 + 5 = 37.",
    "explanationEn": "Substitute x = 16: y = 2(16) + 5 = 37.",
    "solutionStepsAr": [
      "y = 2 × 16 + 5 = 37"
    ],
    "solutionStepsEn": [
      "y = 2 * 16 + 5 = 37"
    ]
  },
  {
    "id": 648,
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
    "id": 649,
    "domain": "algebra",
    "category": "systems-equations",
    "difficulty": "Hard",
    "questionAr": "في نظام المعادلات التالي:\ny = 3x + 21\ny = cx + 5\nإذا كان للنظام عدد لا نهائي من الحلول، فما قيمة c؟",
    "questionEn": "In the system of equations:\ny = 3x + 21\ny = cx + 5\nIf the system has no solution, what is the value of c?",
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
    "id": 650,
    "domain": "advanced-math",
    "category": "quadratic-equations",
    "difficulty": "Hard",
    "questionAr": "ما حاصل ضرب جذري المعادلة التربيعية x² - 16x + 36 = 0؟",
    "questionEn": "What is the product of the roots of the quadratic equation x² - 16x + 36 = 0?",
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
    "id": 651,
    "domain": "geometry-trig",
    "category": "triangles",
    "difficulty": "Hard",
    "questionAr": "في مثلث 30-60-90 قائم، إذا كان طول الضلع المقابل للزاوية 30° يساوي 11، فما طول الضلع المقابل للزاوية 60° مقسوماً على √3؟",
    "questionEn": "In a 30-60-90 right triangle, if the side opposite the 30° angle is 11, what is the length of the side opposite the 60° angle divided by √3?",
    "isGridIn": true,
    "svgData": {
      "type": "right-triangle",
      "params": {}
    },
    "correctAnswer": "11",
    "explanationAr": "في المثلث 30-60-90، الضلع المقابل للزاوية 60° يساوي (الضلع المقابل لـ 30°) × √3 = (11)√3. بالقسمة على √3 نحصل على 11.",
    "explanationEn": "In a 30-60-90 triangle, side opposite 60° is (11)√3. Divided by √3 gives 11.",
    "solutionStepsAr": [
      "Side opposite 60° = (11)√3",
      "Divided by √3 = 11"
    ],
    "solutionStepsEn": [
      "Side opposite 60° = (11)√3",
      "Divided by √3 = 11"
    ]
  },
  {
    "id": 652,
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
    "id": 653,
    "domain": "geometry-trig",
    "category": "coordinate-geometry",
    "difficulty": "Hard",
    "questionAr": "ما هي المسافة بين النقطتين (6, 2) و (12, 10) في مستوى xy؟",
    "questionEn": "What is the distance between the points (6, 2) and (12, 10) in the xy-plane?",
    "isGridIn": true,
    "svgData": {
      "type": "coordinate-line",
      "params": {}
    },
    "correctAnswer": "10",
    "explanationAr": "قانون المسافة: d = √[(12 - 6)² + (10 - 2)²] = √[6² + 8²] = √[36 + 64] = √100 = 10.",
    "explanationEn": "Distance formula: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "solutionStepsAr": [
      "d = √(6² + 8²) = √100 = 10"
    ],
    "solutionStepsEn": [
      "d = √(6² + 8²) = √100 = 10"
    ]
  },
  {
    "id": 654,
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
