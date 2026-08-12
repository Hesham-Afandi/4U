# -*- coding: utf-8 -*-
import os
import json
from generate_general_math_exams import TEMPLATE

# Define the exams
EXAMS = {}

# ==============================================================================
# EXAM 1.1: التعبيرات والقواعد (Expressions and Rules)
# ==============================================================================
EXAMS["11Jen-math-T1-1.1-exam"] = {
    "title_ar": "الدرس الأول: التعبيرات والقواعد",
    "title_en": "Lesson 1: Expressions and Rules",
    "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي أسئلة ترتيب العمليات الحسابية وتقييم التعبيرات الجبرية والقوانين الرياضية.",
    "sections": [
        {
            "id": "sec1",
            "title": {
                "ar": "🔹 الجزء الأول: المفاهيم والقواعد الأساسية والتعريفات",
                "en": "🔹 Part 1: Basic Concepts, Rules, and Definitions"
            },
            "questions": [
                {
                    "q": {
                        "ar": "ما هو الترتيب الصحيح لإجراء العمليات الحسابية عند تقييم تعبير جبري؟",
                        "en": "What is the correct order of operations when evaluating an algebraic expression?"
                    },
                    "options": [
                        {"ar": "الأقواس، الأسس، الضرب والقسمة، ثم الجمع والطرح", "en": "Parentheses, Exponents, Multiplication & Division, then Addition & Subtraction"},
                        {"ar": "الجمع والطرح، الضرب والقسمة، الأسس، ثم الأقواس", "en": "Addition & Subtraction, Multiplication & Division, Exponents, then Parentheses"},
                        {"ar": "الضرب والقسمة، الجمع والطرح، الأقواس، ثم الأسس", "en": "Multiplication & Division, Addition & Subtraction, Parentheses, then Exponents"},
                        {"ar": "الأسس، الأقواس، الضرب والقسمة، ثم الجمع والطرح", "en": "Exponents, Parentheses, Multiplication & Division, then Addition & Subtraction"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الترتيب الصحيح هو دائماً الأقواس أولاً، تليها الأسس، ثم الضرب والقسمة من اليسار لليمين، وأخيراً الجمع والطرح من اليسار لليمين.",
                        "en": "The correct order is always parentheses first, then exponents, then multiplication and division, and finally addition and subtraction."
                    }
                },
                {
                    "q": {
                        "ar": "أي مما يلي يمثل تعبيراً جبرياً وليس معادلة؟",
                        "en": "Which of the following represents an algebraic expression and not an equation?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">3x² - 5y + 7</span>", "en": "<span class=\"formula\">3x² - 5y + 7</span>"},
                        {"ar": "<span class=\"formula\">3x - 5 = 10</span>", "en": "<span class=\"formula\">3x - 5 = 10</span>"},
                        {"ar": "<span class=\"formula\">y = 2x + 1</span>", "en": "<span class=\"formula\">y = 2x + 1</span>"},
                        {"ar": "<span class=\"formula\">A = l · w</span>", "en": "<span class=\"formula\">A = l · w</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "التعبير الجبري لا يحتوي على علامة المساواة (=)، بينما المعادلة أو الصيغة تحتوي عليها.",
                        "en": "An algebraic expression does not contain an equal sign (=), whereas an equation or formula does."
                    }
                },
                {
                    "q": {
                        "ar": "في الصيغة الهندسية لحجم المخروط <span class=\"formula\">V = 1/3 π r² h</span>، ماذا يمثل الرمز <span class=\"formula\">r</span>؟",
                        "en": "In the geometric formula for the volume of a cone <span class=\"formula\">V = 1/3 π r² h</span>, what does the symbol <span class=\"formula\">r</span> represent?"
                    },
                    "options": [
                        {"ar": "نصف قطر قاعدة المخروط", "en": "The radius of the cone's base"},
                        {"ar": "ارتفاع المخروط", "en": "The height of the cone"},
                        {"ar": "المحيط الخارجي للمخروط", "en": "The outer perimeter of the cone"},
                        {"ar": "مساحة السطح الجانبي للمخروط", "en": "The lateral surface area of the cone"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الرمز <span class=\"formula\">r</span> يمثل نصف القطر (radius) لقاعدة المخروط الدائرية.",
                        "en": "The symbol <span class=\"formula\">r</span> represents the radius of the circular base of the cone."
                    }
                },
                {
                    "q": {
                        "ar": "ما الذي يعنيه 'تقييم' التعبير الجبري؟",
                        "en": "What does 'evaluating' an algebraic expression mean?"
                    },
                    "options": [
                        {"ar": "استبدال المتغيرات بأعداد معطاة وحساب القيمة العددية الناتجة", "en": "Replacing variables with given numbers and calculating the resulting numerical value"},
                        {"ar": "حل المعادلة لإيجاد قيمة المتغير المجهول", "en": "Solving the equation to find the value of the unknown variable"},
                        {"ar": "تبسيط الحدود المتشابهة دون استبدال المتغيرات", "en": "Simplifying like terms without replacing variables"},
                        {"ar": "رسم المنحنى البياني المرتبط بالتعبير", "en": "Drawing the graphical curve associated with the expression"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "التقييم هو عملية التعويض عن المتغيرات بأعداد ثم حساب النتيجة باستخدام ترتيب العمليات.",
                        "en": "Evaluating is the process of substituting variables with numbers and calculating the result using the order of operations."
                    }
                }
            ]
        },
        {
            "id": "sec2",
            "title": {
                "ar": "🔹 الجزء الثاني: العمليات الحسابية والحلول العددية الدقيقة",
                "en": "🔹 Part 2: Calculations and Exact Numerical Solutions"
            },
            "questions": [
                {
                    "q": {
                        "ar": "أوجد قيمة التعبير <span class=\"formula\">a - 2b + 3c</span> إذا كان <span class=\"formula\">a = -2, b = 3, c = 4.2</span>؟",
                        "en": "Find the value of the expression <span class=\"formula\">a - 2b + 3c</span> if <span class=\"formula\">a = -2, b = 3, c = 4.2</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">4.6</span>", "en": "<span class=\"formula\">4.6</span>"},
                        {"ar": "<span class=\"formula\">-2.6</span>", "en": "<span class=\"formula\">-2.6</span>"},
                        {"ar": "<span class=\"formula\">6.2</span>", "en": "<span class=\"formula\">6.2</span>"},
                        {"ar": "<span class=\"formula\">-4.6</span>", "en": "<span class=\"formula\">-4.6</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض: <span class=\"formula\">(-2) - 2(3) + 3(4.2) = -2 - 6 + 12.6 = -8 + 12.6 = 4.6</span>.",
                        "en": "By substitution: <span class=\"formula\">(-2) - 2(3) + 3(4.2) = -2 - 6 + 12.6 = -8 + 12.6 = 4.6</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد قيمة التعبير <span class=\"formula\">2a + (b + 3)²</span> إذا كان <span class=\"formula\">a = -2, b = 3</span>؟",
                        "en": "Find the value of the expression <span class=\"formula\">2a + (b + 3)²</span> if <span class=\"formula\">a = -2, b = 3</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">32</span>", "en": "<span class=\"formula\">32</span>"},
                        {"ar": "<span class=\"formula\">28</span>", "en": "<span class=\"formula\">28</span>"},
                        {"ar": "<span class=\"formula\">40</span>", "en": "<span class=\"formula\">40</span>"},
                        {"ar": "<span class=\"formula\">16</span>", "en": "<span class=\"formula\">16</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض: <span class=\"formula\">2(-2) + (3 + 3)² = -4 + (6)² = -4 + 36 = 32</span>.",
                        "en": "By substitution: <span class=\"formula\">2(-2) + (3 + 3)² = -4 + (6)² = -4 + 36 = 32</span>."
                    }
                },
                {
                    "q": {
                        "ar": "قم بتقييم التعبير التالي: <span class=\"formula\">a + 3[b² - (a + c)]</span> إذا كان <span class=\"formula\">a = -2, b = 3, c = 4.2</span>؟",
                        "en": "Evaluate the following expression: <span class=\"formula\">a + 3[b² - (a + c)]</span> if <span class=\"formula\">a = -2, b = 3, c = 4.2</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">18.4</span>", "en": "<span class=\"formula\">18.4</span>"},
                        {"ar": "<span class=\"formula\">20.2</span>", "en": "<span class=\"formula\">20.2</span>"},
                        {"ar": "<span class=\"formula\">15.6</span>", "en": "<span class=\"formula\">15.6</span>"},
                        {"ar": "<span class=\"formula\">24.8</span>", "en": "<span class=\"formula\">24.8</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نحسب داخل القوس الصغير أولاً: <span class=\"formula\">a + c = -2 + 4.2 = 2.2</span>. ثم داخل القوس الكبير: <span class=\"formula\">b² - 2.2 = 3² - 2.2 = 9 - 2.2 = 6.8</span>. أخيراً: <span class=\"formula\">-2 + 3(6.8) = -2 + 20.4 = 18.4</span>.",
                        "en": "Inside the small parentheses first: <span class=\"formula\">a + c = -2 + 4.2 = 2.2</span>. Then inside the brackets: <span class=\"formula\">b² - 2.2 = 9 - 2.2 = 6.8</span>. Finally: <span class=\"formula\">-2 + 3(6.8) = -2 + 20.4 = 18.4</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد قيمة التعبير الكسري التالي: <span class=\"formula\">(a² + 4c) / (3b + 2a)</span> إذا علم أن <span class=\"formula\">a = -2, b = 3, c = 4.2</span>؟",
                        "en": "Find the value of the following rational expression: <span class=\"formula\">(a² + 4c) / (3b + 2a)</span> if <span class=\"formula\">a = -2, b = 3, c = 4.2</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">4.16</span>", "en": "<span class=\"formula\">4.16</span>"},
                        {"ar": "<span class=\"formula\">3.50</span>", "en": "<span class=\"formula\">3.50</span>"},
                        {"ar": "<span class=\"formula\">2.08</span>", "en": "<span class=\"formula\">2.08</span>"},
                        {"ar": "<span class=\"formula\">5.22</span>", "en": "<span class=\"formula\">5.22</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "البسط: <span class=\"formula\">(-2)² + 4(4.2) = 4 + 16.8 = 20.8</span>. المقام: <span class=\"formula\">3(3) + 2(-2) = 9 - 4 = 5</span>. النتيجة: <span class=\"formula\">20.8 / 5 = 4.16</span>.",
                        "en": "Numerator: <span class=\"formula\">(-2)² + 4(4.2) = 4 + 16.8 = 20.8</span>. Denominator: <span class=\"formula\">3(3) + 2(-2) = 9 - 4 = 5</span>. Result: <span class=\"formula\">20.8 / 5 = 4.16</span>."
                    }
                }
            ]
        },
        {
            "id": "sec3",
            "title": {
                "ar": "🔹 الجزء الثالث: المهارات المتقدمة والتطبيقات والمسائل",
                "en": "🔹 Part 3: Advanced Skills, Applications, and Problems"
            },
            "questions": [
                {
                    "q": {
                        "ar": "أوجد قيمة التعبير <span class=\"formula\">(x⁴ - 3wy) / (y³ + 2w)</span> إذا كان <span class=\"formula\">w = 4, x = -3, y = -5</span>؟",
                        "en": "Find the value of the expression <span class=\"formula\">(x⁴ - 3wy) / (y³ + 2w)</span> if <span class=\"formula\">w = 4, x = -3, y = -5</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-1.20</span>", "en": "<span class=\"formula\">-1.20</span>"},
                        {"ar": "<span class=\"formula\">1.20</span>", "en": "<span class=\"formula\">1.20</span>"},
                        {"ar": "<span class=\"formula\">-0.18</span>", "en": "<span class=\"formula\">-0.18</span>"},
                        {"ar": "<span class=\"formula\">0.18</span>", "en": "<span class=\"formula\">0.18</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "البسط: <span class=\"formula\">(-3)⁴ - 3(4)(-5) = 81 - (-60) = 81 + 60 = 141</span>. المقام: <span class=\"formula\">(-5)³ + 2(4) = -125 + 8 = -117</span>. النتيجة: <span class=\"formula\">141 / -117 = -47/39 ≈ -1.205</span>.",
                        "en": "Numerator: <span class=\"formula\">(-3)⁴ - 3(4)(-5) = 81 - (-60) = 81 + 60 = 141</span>. Denominator: <span class=\"formula\">(-5)³ + 2(4) = -125 + 8 = -117</span>. Result: <span class=\"formula\">141 / -117 = -47/39 ≈ -1.205</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أي تعبير مما يلي يمثل الصياغة اللفظية: 'خمسة عشر مطروحاً من مكعب عدد ما مضروباً في 4'؟",
                        "en": "Which expression represents the verbal phrase: 'fifteen subtracted from the cube of a number multiplied by 4'?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">4x³ - 15</span>", "en": "<span class=\"formula\">4x³ - 15</span>"},
                        {"ar": "<span class=\"formula\">15 - 4x³</span>", "en": "<span class=\"formula\">15 - 4x³</span>"},
                        {"ar": "<span class=\"formula\">4(x - 15)³</span>", "en": "<span class=\"formula\">4(x - 15)³</span>"},
                        {"ar": "<span class=\"formula\">(4x)³ - 15</span>", "en": "<span class=\"formula\">(4x)³ - 15</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "مكعب عدد ما هو <span class=\"formula\">x³</span>، مضروباً في 4 هو <span class=\"formula\">4x³</span>، ونطرح منه 15 فيصبح <span class=\"formula\">4x³ - 15</span>.",
                        "en": "The cube of a number is <span class=\"formula\">x³</span>, multiplied by 4 is <span class=\"formula\">4x³</span>, and subtracting 15 yields <span class=\"formula\">4x³ - 15</span>."
                    }
                },
                {
                    "q": {
                        "ar": "إذا كان لدينا مستطيل طوله <span class=\"formula\">2x</span> وعرضه <span class=\"formula\">x + 7</span>، فما هو التعبير الذي يمثل محيط هذا المستطيل؟",
                        "en": "If we have a rectangle with length <span class=\"formula\">2x</span> and width <span class=\"formula\">x + 7</span>, what is the expression for its perimeter?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">6x + 14</span>", "en": "<span class=\"formula\">6x + 14</span>"},
                        {"ar": "<span class=\"formula\">3x + 7</span>", "en": "<span class=\"formula\">3x + 7</span>"},
                        {"ar": "<span class=\"formula\">2x² + 14x</span>", "en": "<span class=\"formula\">2x² + 14x</span>"},
                        {"ar": "<span class=\"formula\">4x + 14</span>", "en": "<span class=\"formula\">4x + 14</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المحيط هو <span class=\"formula\">P = 2(l + w) = 2(2x + x + 7) = 2(3x + 7) = 6x + 14</span>.",
                        "en": "The perimeter is <span class=\"formula\">P = 2(l + w) = 2(2x + x + 7) = 2(3x + 7) = 6x + 14</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد قيمة التعبير <span class=\"formula\">j² - 3h²k / (j³ + 2)</span> إذا علم أن <span class=\"formula\">h = 4, j = -1, k = 0.5</span>؟",
                        "en": "Find the value of the expression <span class=\"formula\">j² - 3h²k / (j³ + 2)</span> if <span class=\"formula\">h = 4, j = -1, k = 0.5</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-23</span>", "en": "<span class=\"formula\">-23</span>"},
                        {"ar": "<span class=\"formula\">25</span>", "en": "<span class=\"formula\">25</span>"},
                        {"ar": "<span class=\"formula\">13</span>", "en": "<span class=\"formula\">13</span>"},
                        {"ar": "<span class=\"formula\">-11</span>", "en": "<span class=\"formula\">-11</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "البسط: <span class=\"formula\">(-1)² - 3(4²)(0.5) = 1 - 3(16)(0.5) = 1 - 24 = -23</span>. المقام: <span class=\"formula\">(-1)³ + 2 = -1 + 2 = 1</span>. النتيجة: <span class=\"formula\">-23 / 1 = -23</span>.",
                        "en": "Numerator: <span class=\"formula\">(-1)² - 3(4²)(0.5) = 1 - 3(16)(0.5) = 1 - 24 = -23</span>. Denominator: <span class=\"formula\">(-1)³ + 2 = -1 + 2 = 1</span>. Result: <span class=\"formula\">-23 / 1 = -23</span>."
                    }
                }
            ]
        },
        {
            "id": "sec4",
            "title": {
                "ar": "🔹 الجزء الرابع: النمذجة الرياضية والتمثيل البياني والمسائل العملية",
                "en": "🔹 Part 4: Mathematical Modeling, Graphing, and Practical Problems"
            },
            "questions": [
                {
                    "q": {
                        "ar": "تقوم شركة سيارات أجرة بفرض رسوم ثابتة بقيمة AED 10 بالإضافة إلى AED 2.5 لكل كيلومتر تقطعه السيارة. أي صيغة تعبر عن التكلفة الإجمالية <span class=\"formula\">C</span> لرحلة مسافتها <span class=\"formula\">d</span> كيلومتر؟",
                        "en": "A taxi company charges a flat fee of AED 10 plus AED 2.5 per kilometer. Which formula represents the total cost <span class=\"formula\">C</span> for a trip of <span class=\"formula\">d</span> kilometers?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">C = 10 + 2.5d</span>", "en": "<span class=\"formula\">C = 10 + 2.5d</span>"},
                        {"ar": "<span class=\"formula\">C = 2.5 + 10d</span>", "en": "<span class=\"formula\">C = 2.5 + 10d</span>"},
                        {"ar": "<span class=\"formula\">C = 12.5d</span>", "en": "<span class=\"formula\">C = 12.5d</span>"},
                        {"ar": "<span class=\"formula\">C = 10(2.5 + d)</span>", "en": "<span class=\"formula\">C = 10(2.5 + d)</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "التكلفة تساوي الرسوم الثابتة (10) زائد حاصل ضرب معدل الكيلومتر (2.5) في عدد الكيلومترات <span class=\"formula\">d</span>.",
                        "en": "The cost equals the fixed fee (10) plus the product of the rate per kilometer (2.5) and the number of kilometers <span class=\"formula\">d</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد الحجم التقريبي لإعصار على شكل مخروط دائري قائم إذا كان نصف قطر قاعدته <span class=\"formula\">r = 75</span> متراً، وارتفاعه <span class=\"formula\">h = 225</span> متراً؟ (استخدم <span class=\"formula\">V = 1/3 π r² h</span>)",
                        "en": "Find the approximate volume of a cone-shaped tornado if its base radius is <span class=\"formula\">r = 75</span> meters, and height is <span class=\"formula\">h = 225</span> meters? (Use <span class=\"formula\">V = 1/3 π r² h</span>)"
                    },
                    "options": [
                        {"ar": "حوالي <span class=\"formula\">1,325,359</span> متر مكعب", "en": "About <span class=\"formula\">1,325,359</span> cubic meters"},
                        {"ar": "حوالي <span class=\"formula\">3,976,078</span> متر مكعب", "en": "About <span class=\"formula\">3,976,078</span> cubic meters"},
                        {"ar": "حوالي <span class=\"formula\">441,786</span> متر مكعب", "en": "About <span class=\"formula\">441,786</span> cubic meters"},
                        {"ar": "حوالي <span class=\"formula\">981,747</span> متر مكعب", "en": "About <span class=\"formula\">981,747</span> cubic meters"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض: <span class=\"formula\">V = 1/3 * π * 75² * 225 = 75 * π * 5625 = 421875 * π ≈ 1,325,359.4</span> متر مكعب.",
                        "en": "By substitution: <span class=\"formula\">V = 1/3 * π * 75² * 225 = 75 * π * 5625 = 421875 * π ≈ 1,325,359.4</span> cubic meters."
                    }
                },
                {
                    "q": {
                        "ar": "استهلكت سيارة أثناء رحلة طيران أو سفر بري مسافة معينة، حيث العلاقة هي: 'ال أميال لكل جالون × عدد الجالونات = مسافة الانتقال'. إذا كان معدل الاستهلاك هو 33 ميلاً لكل جالون، فما المسافة المقطوعة بـ 12 جالوناً؟",
                        "en": "A car consumed fuel during a trip, where the relationship is: 'Miles per gallon × number of gallons = distance'. If the efficiency is 33 miles per gallon, what is the distance traveled using 12 gallons?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">396</span> ميلاً", "en": "<span class=\"formula\">396</span> miles"},
                        {"ar": "<span class=\"formula\">2.75</span> ميلاً", "en": "<span class=\"formula\">2.75</span> miles"},
                        {"ar": "<span class=\"formula\">450</span> ميلاً", "en": "<span class=\"formula\">450</span> miles"},
                        {"ar": "<span class=\"formula\">330</span> ميلاً", "en": "<span class=\"formula\">330</span> miles"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المسافة = الكفاءة × عدد الجالونات = <span class=\"formula\">33 * 12 = 396</span> ميلاً.",
                        "en": "Distance = efficiency × number of gallons = <span class=\"formula\">33 * 12 = 396</span> miles."
                    }
                },
                {
                    "q": {
                        "ar": "تستخدم القاعدة <span class=\"formula\">C = 5/9 (F - 32)</span> لتحويل درجات الحرارة من فهرنهايت إلى مئوية. إذا كانت درجة الحرارة في الغرفة هي <span class=\"formula\">77°F</span>، فكم تكون بالدرجات المئوية؟",
                        "en": "The formula <span class=\"formula\">C = 5/9 (F - 32)</span> is used to convert Fahrenheit to Celsius. If the room temperature is <span class=\"formula\">77°F</span>, what is it in Celsius?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">25°C</span>", "en": "<span class=\"formula\">25°C</span>"},
                        {"ar": "<span class=\"formula\">30°C</span>", "en": "<span class=\"formula\">30°C</span>"},
                        {"ar": "<span class=\"formula\">20°C</span>", "en": "<span class=\"formula\">20°C</span>"},
                        {"ar": "<span class=\"formula\">35°C</span>", "en": "<span class=\"formula\">35°C</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض: <span class=\"formula\">C = 5/9 * (77 - 32) = 5/9 * 45 = 5 * 5 = 25°C</span>.",
                        "en": "By substitution: <span class=\"formula\">C = 5/9 * (77 - 32) = 5/9 * 45 = 5 * 5 = 25°C</span>."
                    }
                }
            ]
        },
        {
            "id": "sec5",
            "title": {
                "ar": "🔹 الجزء الخامس: مهارات التفكير العليا والتحليل والربط المنطقي",
                "en": "🔹 Part 5: Higher-Order Thinking, Analysis, and Logical Connections"
            },
            "questions": [
                {
                    "q": {
                        "ar": "يقيم كلاً من محمد وعبد الله التعبير التالي: <span class=\"formula\">-3d - 4c / 2ab</span> عندما يكون <span class=\"formula\">a = -2, b = -3, c = 5, d = 4</span>. محمد حصل على <span class=\"formula\">-8/3</span> وعبد الله حصل على <span class=\"formula\">2/3</span>. من منهما على صواب؟",
                        "en": "Mohamed and Abdullah evaluate the expression <span class=\"formula\">-3d - 4c / 2ab</span> when <span class=\"formula\">a = -2, b = -3, c = 5, d = 4</span>. Mohamed got <span class=\"formula\">-8/3</span> and Abdullah got <span class=\"formula\">2/3</span>. Who is correct?"
                    },
                    "options": [
                        {"ar": "محمد هو الصحيح والخطأ عند عبد الله في إشارة المقام", "en": "Mohamed is correct; Abdullah made an error with the sign in the denominator"},
                        {"ar": "عبد الله هو الصحيح ومحمد أخطأ في ترتيب العمليات", "en": "Abdullah is correct; Mohamed made an error in the order of operations"},
                        {"ar": "كلاهما خاطئ والنتيجة الصحيحة هي <span class=\"formula\">-16/3</span>", "en": "Both are incorrect; the correct result is <span class=\"formula\">-16/3</span>"},
                        {"ar": "كلاهما على صواب بسبب غموض خط الكسر", "en": "Both are correct due to the ambiguity of the fraction line"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "البسط: <span class=\"formula\">-3(4) - 4(5) = -12 - 20 = -32</span>. المقام: <span class=\"formula\">2(-2)(-3) = 12</span>. النتيجة: <span class=\"formula\">-32/12 = -8/3</span>. عبد الله أخطأ واعتبر حاصل ضرب المقام سالباً.",
                        "en": "Numerator: <span class=\"formula\">-3(4) - 4(5) = -12 - 20 = -32</span>. Denominator: <span class=\"formula\">2(-2)(-3) = 12</span>. Result: <span class=\"formula\">-32/12 = -8/3</span>. Abdullah made a sign error in the denominator."
                    }
                },
                {
                    "q": {
                        "ar": "لأي ثلاثة أرقام محددة <span class=\"formula\">a, b, c</span> نعرف عملية مخصصة <span class=\"formula\">a ★ b ★ c = -(a - b - c) / (c - b - a)</span>. أوجد قيمة <span class=\"formula\">-2 ★ (-4) ★ 5</span>؟",
                        "en": "For any three numbers <span class=\"formula\">a, b, c</span>, we define an operation <span class=\"formula\">a ★ b ★ c = -(a - b - c) / (c - b - a)</span>. Find the value of <span class=\"formula\">-2 ★ (-4) ★ 5</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-3/11</span>", "en": "<span class=\"formula\">-3/11</span>"},
                        {"ar": "<span class=\"formula\">3/11</span>", "en": "<span class=\"formula\">3/11</span>"},
                        {"ar": "<span class=\"formula\">-1/3</span>", "en": "<span class=\"formula\">-1/3</span>"},
                        {"ar": "<span class=\"formula\">1/3</span>", "en": "<span class=\"formula\">1/3</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نعوض بقيم <span class=\"formula\">a = -2, b = -4, c = 5</span>. البسط: <span class=\"formula\">-(-2 - (-4) - 5) = -(-2 + 4 - 5) = -(-3) = 3</span>. المقام: <span class=\"formula\">5 - (-4) - (-2) = 5 + 4 + 2 = 11</span>. النتيجة: <span class=\"formula\">-3/11</span> (بسبب الإشارة الكلية المعطاة).",
                        "en": "Substitute <span class=\"formula\">a = -2, b = -4, c = 5</span>. Numerator: <span class=\"formula\">-(-2 - (-4) - 5) = -(-3) = 3</span>. Denominator: <span class=\"formula\">5 - (-4) - (-2) = 11</span>. The result is <span class=\"formula\">-3/11</span>."
                    }
                },
                {
                    "q": {
                        "ar": "إذا كان <span class=\"formula\">x</span> عدداً حقيقياً موجباً و <span class=\"formula\">y</span> عدداً حقيقياً سالباً، فأي من التعبيرات التالية يجب أن يعطي قيمة موجبة دائماً؟",
                        "en": "If <span class=\"formula\">x</span> is a positive real number and <span class=\"formula\">y</span> is a negative real number, which of the following expressions must always be positive?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x - y</span>", "en": "<span class=\"formula\">x - y</span>"},
                        {"ar": "<span class=\"formula\">x + y</span>", "en": "<span class=\"formula\">x + y</span>"},
                        {"ar": "<span class=\"formula\">xy</span>", "en": "<span class=\"formula\">xy</span>"},
                        {"ar": "<span class=\"formula\">y / x</span>", "en": "<span class=\"formula\">y / x</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن <span class=\"formula\">y</span> سالب، فإن <span class=\"formula\">-y</span> موجب. وبالتالي <span class=\"formula\">x - y = x + (-y)</span> هو حاصل جمع عددين موجبين وهو دائماً موجب.",
                        "en": "Since <span class=\"formula\">y</span> is negative, <span class=\"formula\">-y</span> is positive. Thus <span class=\"formula\">x - y = x + (-y)</span> is the sum of two positive numbers and must always be positive."
                    }
                },
                {
                    "q": {
                        "ar": "إذا تم إلقاء حجر رأسيًا من فوق جسر، وتم تمثيل طول الحجر بالصيغة <span class=\"formula\">-4t² - 2t + 6</span> حيث <span class=\"formula\">t</span> هو الزمن بالثواني. أي أسلوب تفكيك رياضي مما يلي يعتبر الأفضل لمعرفة أقصى طول يصله الحجر ولماذا؟",
                        "en": "If a stone is thrown vertically from a bridge, and its height is modeled by <span class=\"formula\">-4t² - 2t + 6</span> where <span class=\"formula\">t</span> is time in seconds. Which mathematical form is best for identifying the maximum height and why?"
                    },
                    "options": [
                        {"ar": "صيغة الرأس (إكمال المربع) لأنها تظهر إحداثيات القمة مباشرة", "en": "Vertex form (completing the square) because it directly shows the vertex coordinates"},
                        {"ar": "الصيغة القياسية لأنها تعطي الارتفاع الابتدائي مباشرة عند <span class=\"formula\">t=0</span>", "en": "Standard form because it directly gives the initial height at <span class=\"formula\">t=0</span>"},
                        {"ar": "الصيغة المحللة إلى عوامل لأنها توضح متى يرتطم الحجر بالأرض", "en": "Factored form because it clearly shows when the stone hits the ground"},
                        {"ar": "صيغة المشتقة الأولى فقط دون الحاجة لأي تمثيل جبري آخر", "en": "The first derivative form only without needing any other algebraic representation"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "صيغة الرأس (Vertex Form) الناتجة عن إكمال المربع هي الأفضل لتحديد الارتفاع الأقصى والزمن المرتبط به مباشرة دون أي عمليات أخرى.",
                        "en": "The vertex form resulting from completing the square is the best for identifying the maximum height and the time associated with it directly."
                    }
                }
            ]
        }
    ]
}
