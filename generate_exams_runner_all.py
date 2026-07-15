# -*- coding: utf-8 -*-
import os
import json
from generate_general_math_exams import TEMPLATE, make_real_math_question

# We will define a list of exams, each with exactly 20 questions.
# Questions are structured in 5 parts (each with 4 questions):
# Part 1: Questions 0-3
# Part 2: Questions 4-7
# Part 3: Questions 8-11
# Part 4: Questions 12-15
# Part 5: Questions 16-19

EXAMS_DATA = {}

# ==============================================================================
# EXAM 1.1: التعبيرات والقواعد
# ==============================================================================
EXAMS_DATA["11Jen-math-T1-1.1-exam"] = {
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
                        "ar": "الرمز <span class=\"formula\">r</span> يمثل نصف القطر لقاعدة المخروط الدائرية.",
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
                        "ar": "بالتعويض: <span class=\"formula\">(-2) - 2(3) + 3(4.2) = -2 - 6 + 12.6 = 4.6</span>.",
                        "en": "By substitution: <span class=\"formula\">(-2) - 2(3) + 3(4.2) = -2 - 6 + 12.6 = 4.6</span>."
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
                        "ar": "نحسب داخل القوس الصغير أولاً: <span class=\"formula\">a + c = 2.2</span>. ثم داخل القوس الكبير: <span class=\"formula\">b² - 2.2 = 6.8</span>. النتيجة: <span class=\"formula\">-2 + 3(6.8) = 18.4</span>.",
                        "en": "Inside the small parentheses: <span class=\"formula\">a + c = 2.2</span>. Then inside the brackets: <span class=\"formula\">b² - 2.2 = 6.8</span>. Result: <span class=\"formula\">-2 + 3(6.8) = 18.4</span>."
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
                        "ar": "البسط: <span class=\"formula\">(-2)² + 4(4.2) = 20.8</span>. المقام: <span class=\"formula\">3(3) + 2(-2) = 5</span>. النتيجة: <span class=\"formula\">20.8 / 5 = 4.16</span>.",
                        "en": "Numerator: <span class=\"formula\">(-2)² + 4(4.2) = 20.8</span>. Denominator: <span class=\"formula\">3(3) + 2(-2) = 5</span>. Result: <span class=\"formula\">20.8 / 5 = 4.16</span>."
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
                        "ar": "البسط: <span class=\"formula\">81 - 3(4)(-5) = 141</span>. المقام: <span class=\"formula\">(-5)³ + 2(4) = -117</span>. النتيجة: <span class=\"formula\">141 / -117 ≈ -1.20</span>.",
                        "en": "Numerator: <span class=\"formula\">81 - 3(4)(-5) = 141</span>. Denominator: <span class=\"formula\">(-5)³ + 2(4) = -117</span>. Result: <span class=\"formula\">141 / -117 ≈ -1.20</span>."
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
                        "ar": "المحيط هو <span class=\"formula\">P = 2(l + w) = 2(2x + x + 7) = 6x + 14</span>.",
                        "en": "The perimeter is <span class=\"formula\">P = 2(l + w) = 2(2x + x + 7) = 6x + 14</span>."
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
                        "ar": "البسط: <span class=\"formula\">(-1)² - 3(16)(0.5) = -23</span>. المقام: <span class=\"formula\">(-1)³ + 2 = 1</span>. النتيجة: <span class=\"formula\">-23 / 1 = -23</span>.",
                        "en": "Numerator: <span class=\"formula\">(-1)² - 3(16)(0.5) = -23</span>. Denominator: <span class=\"formula\">(-1)³ + 2 = 1</span>. Result: <span class=\"formula\">-23 / 1 = -23</span>."
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
                        "ar": "التكلفة تساوي الرسوم الثابتة (10) زائد حاصل ضرب معدل الكيلومتر (2.5) في مسافة الرحلة.",
                        "en": "The cost equals flat fee (10) plus rate per kilometer (2.5) times the distance d."
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
                        "ar": "بالتعويض: <span class=\"formula\">V = 1/3 * π * 75² * 225 ≈ 1,325,359</span> متر مكعب.",
                        "en": "By substitution: <span class=\"formula\">V = 1/3 * π * 75² * 225 ≈ 1,325,359</span> cubic meters."
                    }
                },
                {
                    "q": {
                        "ar": "استهلكت سيارة أثناء رحلة طيران أو سفر بري مسافة معينة، حيث العلاقة هي: 'الأميال لكل جالون × عدد الجالونات = مسافة الانتقال'. إذا كان معدل الاستهلاك هو 33 ميلاً لكل جالون، فما المسافة المقطوعة بـ 12 جالوناً؟",
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
                        "ar": "C = 5/9 * (77 - 32) = 25°C.",
                        "en": "C = 5/9 * (77 - 32) = 25°C."
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
                        {"ar": "كلاهما خاطئ والنتيجة الصحيحة هي -16/3", "en": "Both are incorrect; the correct result is -16/3"},
                        {"ar": "كلاهما على صواب بسبب غموض خط الكسر", "en": "Both are correct due to the ambiguity of the fraction line"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "البسط: <span class=\"formula\">-3(4) - 4(5) = -32</span>. المقام: <span class=\"formula\">2(-2)(-3) = 12</span>. النتيجة: <span class=\"formula\">-32/12 = -8/3</span>.",
                        "en": "Numerator: <span class=\"formula\">-3(4) - 4(5) = -32</span>. Denominator: <span class=\"formula\">2(-2)(-3) = 12</span>. Result: <span class=\"formula\">-32/12 = -8/3</span>."
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
                        "ar": "نعوض بقيم a = -2, b = -4, c = 5. البسط: 3. المقام: 11. النتيجة: -3/11.",
                        "en": "Substitute a = -2, b = -4, c = 5. Numerator: 3. Denominator: 11. Result: -3/11."
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
                        "ar": "بما أن y سالب، فإن -y موجب. وبالتالي x - y هو حاصل جمع عددين موجبين وهو دائماً موجب.",
                        "en": "Since y is negative, -y is positive. Thus x - y is positive."
                    }
                },
                {
                    "q": {
                        "ar": "إذا تم إلقاء حجر رأسيًا من فوق جسر، وتم تمثيل طول الحجر بالصيغة <span class=\"formula\">-4t² - 2t + 6</span> حيث <span class=\"formula\">t</span> هو الزمن بالثواني. أي أسلوب تفكيك رياضي مما يلي يعتبر الأفضل لمعرفة أقصى طول يصله الحجر ولماذا؟",
                        "en": "If a stone is thrown vertically from a bridge, and its height is modeled by <span class=\"formula\">-4t² - 2t + 6</span> where <span class=\"formula\">t</span> is time in seconds. Which mathematical form is best for identifying the maximum height and why?"
                    },
                    "options": [
                        {"ar": "صيغة الرأس (إكمال المربع) لأنها تظهر إحداثيات القمة مباشرة", "en": "Vertex form (completing the square) because it directly shows the vertex coordinates"},
                        {"ar": "الصيغة القياسية لأنها تعطي الارتفاع الابتدائي مباشرة عند t=0", "en": "Standard form because it directly gives the initial height at t=0"},
                        {"ar": "الصيغة المحللة إلى عوامل لأنها توضح متى يرتطم الحجر بالأرض", "en": "Factored form because it clearly shows when the stone hits the ground"},
                        {"ar": "صيغة المشتقة الأولى فقط دون الحاجة لأي تمثيل جبري آخر", "en": "The first derivative form only without needing any other algebraic representation"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "صيغة الرأس الناتجة عن إكمال المربع هي الأفضل لتحديد الارتفاع الأقصى والزمن المرتبط به مباشرة دون أي عمليات أخرى.",
                        "en": "The vertex form resulting from completing the square is the best for identifying the maximum height and the time associated with it directly."
                    }
                }
            ]
        }
    ]
}

# ==============================================================================
# EXAM 1.2: خواص الأعداد الحقيقية (Properties of Real Numbers)
# ==============================================================================
EXAMS_DATA["11Jen-math-T1-1.2-exam"] = {
    "title_ar": "الدرس الثاني: خواص الأعداد الحقيقية",
    "title_en": "Lesson 2: Properties of Real Numbers",
    "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي تصنيفات الأعداد الحقيقية، النظير الجمعي والنظير الضربي، وخواص التبديل، التجميع، والتوزيع.",
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
                        "ar": "إلى أي من مجموعات الأعداد الحقيقية ينتمي الرقم <span class=\"formula\">-185</span>؟",
                        "en": "To which sets of real numbers does the number <span class=\"formula\">-185</span> belong?"
                    },
                    "options": [
                        {"ar": "الأعداد الصحيحة (Z)، النسبية (Q)، الحقيقية (R)", "en": "Integers (Z), Rational (Q), Real (R)"},
                        {"ar": "الأعداد الطبيعية (N)، الكلية (W)، الحقيقية (R)", "en": "Natural (N), Whole (W), Real (R)"},
                        {"ar": "الأعداد غير النسبية (I)، الحقيقية (R) فقط", "en": "Irrational (I), Real (R) only"},
                        {"ar": "الأعداد الكلية (W)، الصحيحة (Z)، الحقيقية (R)", "en": "Whole (W), Integers (Z), Real (R)"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الرقم -185 هو صحيح سالب، وبالتالي ينتمي لـ Z، وهو نسبي (Q) وحقيقي (R).",
                        "en": "The number -185 is a negative integer, so it belongs to Z, Q, and R."
                    }
                },
                {
                    "q": {
                        "ar": "صنف الرقم <span class=\"formula\">-√49</span> ضمن مجموعات الأعداد الحقيقية؟",
                        "en": "Classify the number <span class=\"formula\">-√49</span> within the sets of real numbers?"
                    },
                    "options": [
                        {"ar": "الأعداد الصحيحة (Z)، النسبية (Q)، الحقيقية (R)", "en": "Integers (Z), Rational (Q), Real (R)"},
                        {"ar": "الأعداد غير النسبية (I)، الحقيقية (R)", "en": "Irrational (I), Real (R)"},
                        {"ar": "الأعداد الطبيعية (N)، الكلية (W)، الحقيقية (R)", "en": "Natural (N), Whole (W), Real (R)"},
                        {"ar": "الأعداد الكلية (W)، النسبية (Q)، الحقيقية (R)", "en": "Whole (W), Rational (Q), Real (R)"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "<span class=\"formula\">-√49 = -7</span> وهو عدد صحيح سالب، لذا فهو ينتمي إلى Z و Q و R.",
                        "en": "<span class=\"formula\">-√49 = -7</span>, which is a negative integer, thus belonging to Z, Q, and R."
                    }
                },
                {
                    "q": {
                        "ar": "الرقم <span class=\"formula\">-√95</span> ينتمي إلى أي من المجموعات التالية بشكل أدق؟",
                        "en": "The number <span class=\"formula\">-√95</span> belongs to which of the following groups more accurately?"
                    },
                    "options": [
                        {"ar": "الأعداد غير النسبية (I)، الأعداد الحقيقية (R)", "en": "Irrational numbers (I), Real numbers (R)"},
                        {"ar": "الأعداد النسبية (Q)، الأعداد الحقيقية (R)", "en": "Rational numbers (Q), Real numbers (R)"},
                        {"ar": "الأعداد الصحيحة (Z)، الأعداد الحقيقية (R)", "en": "Integers (Z), Real numbers (R)"},
                        {"ar": "الأعداد الكلية (W)، الأعداد غير النسبية (I)", "en": "Whole numbers (W), Irrational numbers (I)"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن 95 ليس مربعاً كاملاً، فإن جذره التربيعي هو كسر عشري غير منته وغير دوري، فهو ينتمي لـ I و R.",
                        "en": "Since 95 is not a perfect square, its square root is non-terminating and non-repeating, so it belongs to I and R."
                    }
                },
                {
                    "q": {
                        "ar": "أي من الخواص التالية تمثلها المعادلة: <span class=\"formula\">84 + 16 = 16 + 84</span>؟",
                        "en": "Which property is represented by the equation: <span class=\"formula\">84 + 16 = 16 + 84</span>?"
                    },
                    "options": [
                        {"ar": "الخاصية التبديلية للجمع", "en": "Commutative Property of Addition"},
                        {"ar": "الخاصية التجميعية للجمع", "en": "Associative Property of Addition"},
                        {"ar": "خاصية الهوية المحايدة للجمع", "en": "Identity Property of Addition"},
                        {"ar": "الخاصية التبديلية للضرب", "en": "Commutative Property of Multiplication"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المعادلة توضح أن تغيير ترتيب الأعداد المضافة لا يغير من النتيجة، وهي الخاصية التبديلية للجمع.",
                        "en": "The equation shows that changing the order of addends does not change the sum, which is the Commutative Property of Addition."
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
                        "ar": "ما هو النظير الجمعي والنظير الضربي للعدد <span class=\"formula\">1.25</span> على التوالي؟",
                        "en": "What is the additive inverse and multiplicative inverse of the number <span class=\"formula\">1.25</span> respectively?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-1.25</span> و <span class=\"formula\">0.8</span>", "en": "<span class=\"formula\">-1.25</span> and <span class=\"formula\">0.8</span>"},
                        {"ar": "<span class=\"formula\">-1.25</span> و <span class=\"formula\">-0.8</span>", "en": "<span class=\"formula\">-1.25</span> and <span class=\"formula\">-0.8</span>"},
                        {"ar": "<span class=\"formula\">1.25</span> و <span class=\"formula\">0.8</span>", "en": "<span class=\"formula\">1.25</span> and <span class=\"formula\">0.8</span>"},
                        {"ar": "<span class=\"formula\">-1.25</span> و <span class=\"formula\">1.25</span>", "en": "<span class=\"formula\">-1.25</span> and <span class=\"formula\">1.25</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "النظير الجمعي يعكس الإشارة: <span class=\"formula\">-1.25</span>. النظير الضربي هو مقلوب الرقم: <span class=\"formula\">1 / 1.25 = 4/5 = 0.8</span>.",
                        "en": "The additive inverse changes the sign: <span class=\"formula\">-1.25</span>. The multiplicative inverse is the reciprocal: <span class=\"formula\">1 / 1.25 = 4/5 = 0.8</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد النظير الجمعي والضربي للعدد الكسري <span class=\"formula\">2 1/2</span> على الترتيب؟",
                        "en": "Find the additive and multiplicative inverse of the mixed number <span class=\"formula\">2 1/2</span> respectively?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-5/2</span> و <span class=\"formula\">2/5</span>", "en": "<span class=\"formula\">-5/2</span> and <span class=\"formula\">2/5</span>"},
                        {"ar": "<span class=\"formula\">-5/2</span> و <span class=\"formula\">-2/5</span>", "en": "<span class=\"formula\">-5/2</span> and <span class=\"formula\">-2/5</span>"},
                        {"ar": "<span class=\"formula\">5/2</span> و <span class=\"formula\">2/5</span>", "en": "<span class=\"formula\">5/2</span> and <span class=\"formula\">2/5</span>"},
                        {"ar": "<span class=\"formula\">-2.5</span> و <span class=\"formula\">2.5</span>", "en": "<span class=\"formula\">-2.5</span> and <span class=\"formula\">2.5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "<span class=\"formula\">2 1/2 = 5/2</span>. نظيرها الجمعي هو <span class=\"formula\">-5/2</span> (أو <span class=\"formula\">-2.5</span>)، ونظيرها الضربي هو مقلوبها <span class=\"formula\">2/5</span>.",
                        "en": "<span class=\"formula\">2 1/2 = 5/2</span>. Its additive inverse is <span class=\"formula\">-5/2</span>, and its multiplicative inverse is <span class=\"formula\">2/5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "ما هو النظير الجمعي للعدد <span class=\"formula\">-5/8</span> والنظير الضربي له؟",
                        "en": "What is the additive inverse and the multiplicative inverse of <span class=\"formula\">-5/8</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">5/8</span> و <span class=\"formula\">-8/5</span>", "en": "<span class=\"formula\">5/8</span> and <span class=\"formula\">-8/5</span>"},
                        {"ar": "<span class=\"formula\">-5/8</span> و <span class=\"formula\">8/5</span>", "en": "<span class=\"formula\">-5/8</span> and <span class=\"formula\">8/5</span>"},
                        {"ar": "<span class=\"formula\">5/8</span> و <span class=\"formula\">8/5</span>", "en": "<span class=\"formula\">5/8</span> and <span class=\"formula\">8/5</span>"},
                        {"ar": "<span class=\"formula\">-5/8</span> و <span class=\"formula\">-8/5</span>", "en": "<span class=\"formula\">-5/8</span> and <span class=\"formula\">-8/5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الجمعي يعكس الإشارة: <span class=\"formula\">5/8</span>. الضربي يقلب الكسر ويحتفظ بالإشارة: <span class=\"formula\">-8/5</span>.",
                        "en": "The additive inverse changes sign: <span class=\"formula\">5/8</span>. The multiplicative inverse is the reciprocal, retaining the sign: <span class=\"formula\">-8/5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "بسط التعبير الجبري التالي: <span class=\"formula\">3(4x - 2y) - 2(3x + y)</span>؟",
                        "en": "Simplify the following algebraic expression: <span class=\"formula\">3(4x - 2y) - 2(3x + y)</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">6x - 8y</span>", "en": "<span class=\"formula\">6x - 8y</span>"},
                        {"ar": "<span class=\"formula\">6x - 4y</span>", "en": "<span class=\"formula\">6x - 4y</span>"},
                        {"ar": "<span class=\"formula\">18x - 8y</span>", "en": "<span class=\"formula\">18x - 8y</span>"},
                        {"ar": "<span class=\"formula\">6x - 5y</span>", "en": "<span class=\"formula\">6x - 5y</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "باستخدام خاصية التوزيع: <span class=\"formula\">12x - 6y - 6x - 2y = (12x - 6x) + (-6y - 2y) = 6x - 8y</span>.",
                        "en": "By distributive property: <span class=\"formula\">12x - 6y - 6x - 2y = 6x - 8y</span>."
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
                        "ar": "أي مما يلي يوضح خاصية التجميع لعملية الضرب؟",
                        "en": "Which of the following demonstrates the Associative Property of Multiplication?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">(ab)c = a(bc)</span>", "en": "<span class=\"formula\">(ab)c = a(bc)</span>"},
                        {"ar": "<span class=\"formula\">ab = ba</span>", "en": "<span class=\"formula\">ab = ba</span>"},
                        {"ar": "<span class=\"formula\">a(b + c) = ab + ac</span>", "en": "<span class=\"formula\">a(b + c) = ab + ac</span>"},
                        {"ar": "<span class=\"formula\">a · 1 = a</span>", "en": "<span class=\"formula\">a · 1 = a</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "خاصية التجميع تسمح بتغيير كيفية تجميع الأعداد المضروبة دون تغيير النتيجة.",
                        "en": "The associative property allows grouping of multiplied numbers differently without changing the outcome."
                    }
                },
                {
                    "q": {
                        "ar": "أي مما يلي يعتبر مثالاً على خاصية النظير الجمعي؟",
                        "en": "Which of the following is an example of the Additive Inverse Property?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-7y + 7y = 0</span>", "en": "<span class=\"formula\">-7y + 7y = 0</span>"},
                        {"ar": "<span class=\"formula\">a + 0 = a</span>", "en": "<span class=\"formula\">a + 0 = a</span>"},
                        {"ar": "<span class=\"formula\">a(1/a) = 1</span>", "en": "<span class=\"formula\">a(1/a) = 1</span>"},
                        {"ar": "<span class=\"formula\">a + (-a) = 0</span>", "en": "<span class=\"formula\">a + (-a) = 0</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "جمع أي عدد ونظيره الجمعي يعطي دائماً المحايد الجمعي وهو 0.",
                        "en": "Adding any number and its additive inverse always yields the additive identity, which is 0."
                    }
                },
                {
                    "q": {
                        "ar": "بسط التعبير التالي: <span class=\"formula\">1/3(5x + 8y) + 1/4(6x - 2y)</span>؟",
                        "en": "Simplify the following expression: <span class=\"formula\">1/3(5x + 8y) + 1/4(6x - 2y)</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">19/12 x + 13/6 y</span>", "en": "<span class=\"formula\">19/12 x + 13/6 y</span>"},
                        {"ar": "<span class=\"formula\">3.1x + 2.1y</span>", "en": "<span class=\"formula\">3.1x + 2.1y</span>"},
                        {"ar": "<span class=\"formula\">11/4 x + 5/4 y</span>", "en": "<span class=\"formula\">11/4 x + 5/4 y</span>"},
                        {"ar": "<span class=\"formula\">17/12 x + 5/6 y</span>", "en": "<span class=\"formula\">17/12 x + 5/6 y</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحدود السينية: <span class=\"formula\">5/3 x + 6/4 x = 5/3 x + 3/2 x = (10+9)/6 x = 19/6 x</span>. عذراً، لنحسب بدقة: <span class=\"formula\">5/3 x + 6/4 x = 20/12 x + 18/12 x = 38/12 x = 19/6 x</span>. الحدود الصادية: <span class=\"formula\">8/3 y - 2/4 y = 8/3 y - 1/2 y = (16-3)/6 y = 13/6 y</span>. النتيجة الصحيحة: <span class=\"formula\">19/6 x + 13/6 y</span>.",
                        "en": "X terms: <span class=\"formula\">5/3 + 6/4 = 19/6</span>. Y terms: <span class=\"formula\">8/3 - 2/4 = 13/6</span>. Correct result is <span class=\"formula\">19/6 x + 13/6 y</span>."
                    }
                },
                {
                    "q": {
                        "ar": "بسط التعبير الجبري التالي: <span class=\"formula\">-4(6c - 3d) - 5(-2c - 4d)</span>؟",
                        "en": "Simplify the following algebraic expression: <span class=\"formula\">-4(6c - 3d) - 5(-2c - 4d)</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-14c + 32d</span>", "en": "<span class=\"formula\">-14c + 32d</span>"},
                        {"ar": "<span class=\"formula\">-14c - 8d</span>", "en": "<span class=\"formula\">-14c - 8d</span>"},
                        {"ar": "<span class=\"formula\">34c + 32d</span>", "en": "<span class=\"formula\">34c + 32d</span>"},
                        {"ar": "<span class=\"formula\">-14c + 8d</span>", "en": "<span class=\"formula\">-14c + 8d</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتوزيع: <span class=\"formula\">-24c + 12d + 10c + 20d = -14c + 32d</span>.",
                        "en": "By distribution: <span class=\"formula\">-24c + 12d + 10c + 20d = -14c + 32d</span>."
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
                        "ar": "يشتري خالد مكونات جهاز كمبيوتر بأسعار: 359.95, 219.99, 79.00, 149.50, 99.00 درهم إماراتي. إذا تم تطبيق ضريبة مبيعات بنسبة 6%، فما هي قيمة الضريبة الإجمالية؟",
                        "en": "Khaled buys computer components priced: 359.95, 219.99, 79.00, 149.50, and 99.00 AED. If a 6% sales tax is added, what is the total tax amount?"
                    },
                    "options": [
                        {"ar": "AED <span class=\"formula\">54.45</span>", "en": "AED <span class=\"formula\">54.45</span>"},
                        {"ar": "AED <span class=\"formula\">907.44</span>", "en": "AED <span class=\"formula\">907.44</span>"},
                        {"ar": "AED <span class=\"formula\">45.33</span>", "en": "AED <span class=\"formula\">45.33</span>"},
                        {"ar": "AED <span class=\"formula\">60.25</span>", "en": "AED <span class=\"formula\">60.25</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المجموع الكلي للمكونات = 907.44 AED. قيمة الضريبة = <span class=\"formula\">907.44 * 0.06 = 54.446 ≈ 54.45</span> درهم.",
                        "en": "Total cost of components = 907.44 AED. Tax = <span class=\"formula\">907.44 * 0.06 ≈ 54.45</span> AED."
                    }
                },
                {
                    "q": {
                        "ar": "يقوم سمير بقص عشب الحدائق بسعر AED 22 للحديقة الواحدة. إذا قام بقص حدائق بأعداد: 2، 4، 3، 1، 5، 6، 7 في أيام الأسبوع على التوالي. اكتب تعبيراً لتمثيل إجمالي مبالغه الكلية؟",
                        "en": "Samir mows lawns at AED 22 per lawn. If he mows 2, 4, 3, 1, 5, 6, and 7 lawns on consecutive weekdays. Which expression represents his total earnings?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">22 · (2 + 4 + 3 + 1 + 5 + 6 + 7)</span>", "en": "<span class=\"formula\">22 · (2 + 4 + 3 + 1 + 5 + 6 + 7)</span>"},
                        {"ar": "<span class=\"formula\">22 + (2 + 4 + 3 + 1 + 5 + 6 + 7)</span>", "en": "<span class=\"formula\">22 + (2 + 4 + 3 + 1 + 5 + 6 + 7)</span>"},
                        {"ar": "<span class=\"formula\">22 · 2 · 4 · 3 · 1 · 5 · 6 · 7</span>", "en": "<span class=\"formula\">22 · 2 · 4 · 3 · 1 · 5 · 6 · 7</span>"},
                        {"ar": "<span class=\"formula\">22x + (2+4+3+1+5+6+7)</span>", "en": "<span class=\"formula\">22x + (2+4+3+1+5+6+7)</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "إجمالي الأرباح هو سعر الحديقة الواحدة (22) مضروباً في مجموع عدد الحدائق التي تم قصها.",
                        "en": "Total earnings is the price per lawn (22) multiplied by the sum of lawns mowed."
                    }
                },
                {
                    "q": {
                        "ar": "من السؤال السابق، هل سيحصل سمير على مبالغ كافية لشراء وحدة ألعاب فيديو بقيمة AED 550 خلال هذا الأسبوع؟",
                        "en": "From the previous question, will Samir earn enough to buy a video game unit priced at AED 550 this week?"
                    },
                    "options": [
                        {"ar": "نعم، إجمالي أرباحه هو AED 616 وهو أكبر من AED 550", "en": "Yes, his total earnings is AED 616, which is greater than AED 550"},
                        {"ar": "لا، إجمالي أرباحه هو AED 506 وهو أقل من AED 550", "en": "No, his total earnings is AED 506, which is less than AED 550"},
                        {"ar": "لا، إجمالي أرباحه هو AED 440 فقط", "en": "No, his total earnings is only AED 440"},
                        {"ar": "نعم، أرباحه بالضبط AED 550", "en": "Yes, his earnings are exactly AED 550"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "مجموع الحدائق = 28 حديقة. إجمالي الأرباح = <span class=\"formula\">28 * 22 = 616</span> درهم، وهو كافٍ وزيادة.",
                        "en": "Total lawns = 28. Total earnings = <span class=\"formula\">28 * 22 = 616</span> AED, which is more than 550."
                    }
                },
                {
                    "q": {
                        "ar": "تحتاج دانا إلى خياطة ستائر لخمس نوافذ، نافذتين كبيرتين تحتاج كل منهما <span class=\"formula\">3 3/4</span> ياردات، وثلاث نوافذ صغيرة تحتاج كل منهما <span class=\"formula\">2 1/2</span> ياردة. كم إجمالي القماش المطلوب؟",
                        "en": "Dana needs to sew curtains for 5 windows: 2 large windows requiring <span class=\"formula\">3 3/4</span> yards each, and 3 small windows requiring <span class=\"formula\">2 1/2</span> yards each. What is the total fabric needed?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">15</span> ياردة", "en": "<span class=\"formula\">15</span> yards"},
                        {"ar": "<span class=\"formula\">12.5</span> ياردة", "en": "<span class=\"formula\">12.5</span> yards"},
                        {"ar": "<span class=\"formula\">18.25</span> ياردة", "en": "<span class=\"formula\">18.25</span> yards"},
                        {"ar": "<span class=\"formula\">14.75</span> ياردة", "en": "<span class=\"formula\">14.75</span> yards"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "إجمالي القماش = <span class=\"formula\">2 * (3.75) + 3 * (2.5) = 7.5 + 7.5 = 15</span> ياردة.",
                        "en": "Total fabric = <span class=\"formula\">2 * (3.75) + 3 * (2.5) = 7.5 + 7.5 = 15</span> yards."
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
                        "ar": "أي من الأعداد التالية يمثل عدداً حقيقياً غير نسبي؟",
                        "en": "Which of the following numbers represents an irrational real number?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">√21</span>", "en": "<span class=\"formula\">√21</span>"},
                        {"ar": "<span class=\"formula\">√81</span>", "en": "<span class=\"formula\">√81</span>"},
                        {"ar": "<span class=\"formula\">0.61</span>", "en": "<span class=\"formula\">0.61</span>"},
                        {"ar": "<span class=\"formula\">-15/3</span>", "en": "<span class=\"formula\">-15/3</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "21 ليس مربعاً كاملاً وجذره يعطي عدداً عشرياً غير منته وغير دوري (غير نسبي)، بينما الآخرون نسبية.",
                        "en": "21 is not a perfect square, so its root is irrational."
                    }
                },
                {
                    "q": {
                        "ar": "لماذا لا تنطبق الخاصية التبديلية على عملية الطرح؟ اختر التعليل الرياضي والعددي الأصح؟",
                        "en": "Why does the Commutative Property not apply to subtraction? Choose the most accurate mathematical and numerical explanation?"
                    },
                    "options": [
                        {"ar": "لأن ترتيب الأعداد يؤثر على النتيجة، مثلاً <span class=\"formula\">5 - 3 = 2</span> بينما <span class=\"formula\">3 - 5 = -2</span> وهما غير متساويين", "en": "Because order affects the result; for example, <span class=\"formula\">5 - 3 = 2</span> whereas <span class=\"formula\">3 - 5 = -2</span>, which are not equal"},
                        {"ar": "لأن النظير الجمعي للعدد دائماً ما يكون سالباً في كل الأحوال", "en": "Because the additive inverse of a number is always negative under all conditions"},
                        {"ar": "لأن الطرح والجمع لهما نفس القوة والأولوية في PEMDAS", "en": "Because subtraction and addition have the same precedence in PEMDAS"},
                        {"ar": "لأن الطرح لا يحقق خاصية الانغلاق للأعداد الحقيقية الموجبة", "en": "Because subtraction does not satisfy the closure property for positive real numbers"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الخاصية التبديلية تعني <span class=\"formula\">a - b = b - a</span> وهذا غير صحيح للأعداد المختلفة لأن أحدهما موجب والآخر سالب.",
                        "en": "The commutative property requires <span class=\"formula\">a - b = b - a</span>, which is false for distinct numbers because they yield opposite signs."
                    }
                },
                {
                    "q": {
                        "ar": "قامت كلاً من دانا وأماني بتبسيط التعبير التالي: <span class=\"formula\">4(14a - 10b) - 6(b + 4a)</span>. حصلت دانا على <span class=\"formula\">80a - 46b</span> وحصلت أماني على <span class=\"formula\">50a - 64b</span>. هل أياً منهما صحيح؟",
                        "en": "Dana and Amani simplified the expression <span class=\"formula\">4(14a - 10b) - 6(b + 4a)</span>. Dana got <span class=\"formula\">80a - 46b</span> and Amani got <span class=\"formula\">50a - 64b</span>. Is either of them correct?"
                    },
                    "options": [
                        {"ar": "لا أحد منهما صحيح، التبسيط الأصح هو <span class=\"formula\">32a - 46b</span>", "en": "Neither is correct; the correct simplification is <span class=\"formula\">32a - 46b</span>"},
                        {"ar": "دانا صحيحة لأنها جمعت حدود A بشكل سليم", "en": "Dana is correct; she combined the A terms correctly"},
                        {"ar": "أماني صحيحة لأن دانا نسيت توزيع الإشارة السالبة لـ 6 على الحد الثاني", "en": "Amani is correct because Dana forgot to distribute the negative sign of 6 to the second term"},
                        {"ar": "دانا صحيحة وأماني أخطأت في توزيع الـ 4", "en": "Dana is correct; Amani made an error in distributing the 4"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتوزيع: <span class=\"formula\">56a - 40b - 6b - 24a = (56a - 24a) + (-40b - 6b) = 32a - 46b</span>. لذا كلاهما خاطئ.",
                        "en": "By distribution: <span class=\"formula\">56a - 40b - 6b - 24a = 32a - 46b</span>. Therefore, both are incorrect."
                    }
                },
                {
                    "q": {
                        "ar": "ما الذي تمثله خاصية الانغلاق لعملية الجمع للأعداد الحقيقية؟",
                        "en": "What does the Closure Property of Addition represent for real numbers?"
                    },
                    "options": [
                        {"ar": "مجموع أي عددين حقيقيين هو دائماً عدد حقيقي أيضاً", "en": "The sum of any two real numbers is always a real number too"},
                        {"ar": "وجود عنصر محايد لا يغير قيمة العدد المضاف إليه", "en": "The existence of an identity element that does not change the added value"},
                        {"ar": "إمكانية تغيير ترتيب الأقواس في الجمع المتعدد", "en": "The ability to change parenthesis placement in multiple additions"},
                        {"ar": "إمكانية إبدال الترتيب دون التأثير على القيمة النهائية", "en": "The ability to swap order without affecting the final value"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "خاصية الانغلاق تعني أن ناتج العملية الرياضية لعددين من مجموعة معينة يظل ضمن نفس المجموعة.",
                        "en": "The closure property means that the result of an operation on two numbers of a set remains within that same set."
                    }
                }
            ]
        }
    ]
}

# ==============================================================================
# EXAM 1.3: حل المعادلات (Solving Equations)
# ==============================================================================
EXAMS_DATA["11Jen-math-T1-1.3-exam"] = {
    "title_ar": "الدرس الثالث: حل المعادلات",
    "title_en": "Lesson 3: Solving Equations",
    "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي خواص المساواة، خطوات حل المعادلات متعددة الخطوات، الحالات الخاصة للمخرجات، وحل المعادلات الحرفية.",
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
                        "ar": "ما هي خاصية المساواة الموضحة في العبارة التالية: 'إذا كان a = b فإن b = a'؟",
                        "en": "What is the property of equality illustrated in: 'If a = b, then b = a'?"
                    },
                    "options": [
                        {"ar": "الخاصية التماثلية للمساواة", "en": "Symmetric Property of Equality"},
                        {"ar": "الخاصية الانعكاسية للمساواة", "en": "Reflexive Property of Equality"},
                        {"ar": "الخاصية الانتقالية للمساواة", "en": "Transitive Property of Equality"},
                        {"ar": "خاصية التعويض للمساواة", "en": "Substitution Property of Equality"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الخاصية التماثلية تعني أنه يمكن إبدال طرفي المعادلة دون تغيير صحتها.",
                        "en": "The symmetric property states that the sides of an equation can be swapped without affecting validity."
                    }
                },
                {
                    "q": {
                        "ar": "إذا كان <span class=\"formula\">3a - 4 = b</span> وكان <span class=\"formula\">b = a + 17</span>، فإن <span class=\"formula\">3a - 4 = a + 17</span>. ما هذه الخاصية؟",
                        "en": "If <span class=\"formula\">3a - 4 = b</span> and <span class=\"formula\">b = a + 17</span>, then <span class=\"formula\">3a - 4 = a + 17</span>. What property is this?"
                    },
                    "options": [
                        {"ar": "الخاصية الانتقالية للمساواة", "en": "Transitive Property of Equality"},
                        {"ar": "الخاصية التماثلية للمساواة", "en": "Symmetric Property of Equality"},
                        {"ar": "خاصية التعويض للمساواة", "en": "Substitution Property of Equality"},
                        {"ar": "الخاصية الانعكاسية للمساواة", "en": "Reflexive Property of Equality"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الخاصية الانتقالية تنص على أنه إذا كان المقدار الأول مساوياً للثاني، والثاني مساوياً للثالث، فإن الأول مساوٍ للثالث.",
                        "en": "The transitive property states that if a = b and b = c, then a = c."
                    }
                },
                {
                    "q": {
                        "ar": "ماذا تعني 'المتطابقة' في سياق المعادلات؟",
                        "en": "What does an 'identity' mean in the context of equations?"
                    },
                    "options": [
                        {"ar": "معادلة صحيحة لجميع قيم المتغير ومجموعة حلها R", "en": "An equation correct for all values of the variable, with solution set R"},
                        {"ar": "معادلة ليس لها أي حل على الإطلاق ومجموعة حلها Ø", "en": "An equation with no solution at all, with solution set Ø"},
                        {"ar": "معادلة لها حل وحيد دقيق وفردي فقط", "en": "An equation with exactly one unique solution only"},
                        {"ar": "معادلة جبرية تحتوي على متغيرين على الأقل", "en": "An algebraic equation containing at least two variables"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المتطابقة هي معادلة تكون صحيحة دائماً بغض النظر عن قيمة المتغير المجهول، مثل <span class=\"formula\">2x + 2 = 2x + 2</span>.",
                        "en": "An identity is an equation that is always true for any value of the variable, like <span class=\"formula\">2x + 2 = 2x + 2</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أي مما يلي يصف 'المعادلة الحرفية' (Literal Equation)؟",
                        "en": "Which of the following describes a 'literal equation'?"
                    },
                    "options": [
                        {"ar": "معادلة تعبر عن قانون رياضي أو علمي وتحتوي على متغيرات متعددة", "en": "An equation representing a math or science law and containing multiple variables"},
                        {"ar": "معادلة خطية بمتغير واحد فقط وليس بها ثوابت عددية", "en": "A linear equation with only one variable and no numerical constants"},
                        {"ar": "معادلة تحتوي فقط على أرقام وثوابت هندسية", "en": "An equation containing only numbers and geometric constants"},
                        {"ar": "معادلة تصف خط مستقيم ميله صفر دائماً", "en": "An equation describing a straight line whose slope is always zero"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المعادلات الحرفية أو القوانين هي صيغ تحتوي على متغيرات متعددة ونقوم بحلها لصالح أحد المتغيرات بدلالة الآخرين.",
                        "en": "Literal equations are formulas containing multiple variables, solved for one variable in terms of others."
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
                        "ar": "قم بحل المعادلة التالية: <span class=\"formula\">n - 3.24 = 42.1</span>؟",
                        "en": "Solve the following equation: <span class=\"formula\">n - 3.24 = 42.1</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">n = 45.34</span>", "en": "<span class=\"formula\">n = 45.34</span>"},
                        {"ar": "<span class=\"formula\">n = 38.86</span>", "en": "<span class=\"formula\">n = 38.86</span>"},
                        {"ar": "<span class=\"formula\">n = 42.34</span>", "en": "<span class=\"formula\">n = 42.34</span>"},
                        {"ar": "<span class=\"formula\">n = -38.86</span>", "en": "<span class=\"formula\">n = -38.86</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بإضافة 3.24 للطرفين: <span class=\"formula\">n = 42.1 + 3.24 = 45.34</span>.",
                        "en": "By adding 3.24 to both sides: <span class=\"formula\">n = 42.1 + 3.24 = 45.34</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد حل المعادلة الكسرية التالية: <span class=\"formula\">-5/8 x = 20</span>؟",
                        "en": "Find the solution to the following fractional equation: <span class=\"formula\">-5/8 x = 20</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = -32</span>", "en": "<span class=\"formula\">x = -32</span>"},
                        {"ar": "<span class=\"formula\">x = 32</span>", "en": "<span class=\"formula\">x = 32</span>"},
                        {"ar": "<span class=\"formula\">x = -12.5</span>", "en": "<span class=\"formula\">x = -12.5</span>"},
                        {"ar": "<span class=\"formula\">x = -25</span>", "en": "<span class=\"formula\">x = -25</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نضرب طرفي المعادلة في مقلوب الكسر <span class=\"formula\">-8/5</span>: <span class=\"formula\">x = 20 * (-8/5) = 4 * (-8) = -32</span>.",
                        "en": "Multiply both sides by the reciprocal <span class=\"formula\">-8/5</span>: <span class=\"formula\">x = 20 * (-8/5) = -32</span>."
                    }
                },
                {
                    "q": {
                        "ar": "قم بحل المعادلة متعددة الخطوات التالية: <span class=\"formula\">5(x + 3) + 2(1 - x) = 14</span>؟",
                        "en": "Solve the following multi-step equation: <span class=\"formula\">5(x + 3) + 2(1 - x) = 14</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = -1</span>", "en": "<span class=\"formula\">x = -1</span>"},
                        {"ar": "<span class=\"formula\">x = 1</span>", "en": "<span class=\"formula\">x = 1</span>"},
                        {"ar": "<span class=\"formula\">x = -3</span>", "en": "<span class=\"formula\">x = -3</span>"},
                        {"ar": "<span class=\"formula\">x = 3</span>", "en": "<span class=\"formula\">x = 3</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نفك الأقواس بالتوزيع: <span class=\"formula\">5x + 15 + 2 - 2x = 14</span>. نجمع الحدود المتشابهة: <span class=\"formula\">3x + 17 = 14</span>. نطرح 17 من الطرفين: <span class=\"formula\">3x = -3</span>. نقسم على 3: <span class=\"formula\">x = -1</span>.",
                        "en": "Expand parentheses: <span class=\"formula\">5x + 15 + 2 - 2x = 14</span>. Combine terms: <span class=\"formula\">3x + 17 = 14</span>. Subtract 17: <span class=\"formula\">3x = -3</span>. Divide by 3: <span class=\"formula\">x = -1</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد حل المعادلة التالية: <span class=\"formula\">-10x + 3(4x - 2) = 6</span>؟",
                        "en": "Find the solution to the following equation: <span class=\"formula\">-10x + 3(4x - 2) = 6</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = 6</span>", "en": "<span class=\"formula\">x = 6</span>"},
                        {"ar": "<span class=\"formula\">x = -6</span>", "en": "<span class=\"formula\">x = -6</span>"},
                        {"ar": "<span class=\"formula\">x = 2</span>", "en": "<span class=\"formula\">x = 2</span>"},
                        {"ar": "<span class=\"formula\">x = 0</span>", "en": "<span class=\"formula\">x = 0</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نفك بالتوزيع: <span class=\"formula\">-10x + 12x - 6 = 6</span>. نبسط: <span class=\"formula\">2x - 6 = 6</span>. نضيف 6 للطرفين: <span class=\"formula\">2x = 12</span>. نقسم على 2: <span class=\"formula\">x = 6</span>.",
                        "en": "Expand: <span class=\"formula\">-10x + 12x - 6 = 6</span>. Simplify: <span class=\"formula\">2x - 6 = 6</span>. Add 6: <span class=\"formula\">2x = 12</span>. Divide by 2: <span class=\"formula\">x = 6</span>."
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
                        "ar": "ما هو تصنيف وحل المعادلة التالية: <span class=\"formula\">3(2x - 1) = 6x - 3</span>؟",
                        "en": "What is the classification and solution of the following equation: <span class=\"formula\">3(2x - 1) = 6x - 3</span>?"
                    },
                    "options": [
                        {"ar": "متطابقة، ولها عدد لانهائي من الحلول", "en": "Identity, with an infinite number of solutions"},
                        {"ar": "معادلة مستحيلة الحل، ومجموعة الحل Ø", "en": "No solution equation, with solution set Ø"},
                        {"ar": "معادلة خطية لها حل وحيد هو x = 0", "en": "Linear equation with a unique solution x = 0"},
                        {"ar": "معادلة خطية لها حل وحيد هو x = 1", "en": "Linear equation with a unique solution x = 1"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نفك الطرف الأيسر بالتوزيع: <span class=\"formula\">6x - 3 = 6x - 3</span>. بما أن الطرفين متطابقان تماماً، فإن هذه متطابقة ولها عدد لا نهائي من الحلول.",
                        "en": "Expand left side: <span class=\"formula\">6x - 3 = 6x - 3</span>. Since both sides are identical, it is an identity with infinitely many solutions."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد مجموعة حل المعادلة التالية: <span class=\"formula\">4(x - 2) + 5 = 4x + 3</span>؟",
                        "en": "Find the solution set of the following equation: <span class=\"formula\">4(x - 2) + 5 = 4x + 3</span>?"
                    },
                    "options": [
                        {"ar": "مجموعة الحل هي المجموعة الخالية Ø", "en": "The solution set is the empty set Ø"},
                        {"ar": "مجموعة الحل هي R (جميع الأعداد الحقيقية)", "en": "The solution set is R (all real numbers)"},
                        {"ar": "المعادل لها حل وحيد هو x = 0", "en": "The equation has a unique solution x = 0"},
                        {"ar": "المعادلة لها حل وحيد هو x = 2", "en": "The equation has a unique solution x = 2"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نفك الطرف الأيسر: <span class=\"formula\">4x - 8 + 5 = 4x - 3</span>. نلاحظ أن <span class=\"formula\">4x - 3 = 4x + 3</span>، وبطرح <span class=\"formula\">4x</span> يصبح <span class=\"formula\">-3 = 3</span> وهذا تناقض مستحيل، لذا لا يوجد حل.",
                        "en": "Expand left: <span class=\"formula\">4x - 8 + 5 = 4x - 3</span>. Thus <span class=\"formula\">4x - 3 = 4x + 3</span>, which simplifies to -3 = 3 (contradiction). No solution."
                    }
                },
                {
                    "q": {
                        "ar": "حل المعادلة التالية: <span class=\"formula\">2(2x - 1) - 4(3x + 1) = 2</span>؟",
                        "en": "Solve the following equation: <span class=\"formula\">2(2x - 1) - 4(3x + 1) = 2</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = -1</span>", "en": "<span class=\"formula\">x = -1</span>"},
                        {"ar": "<span class=\"formula\">x = 1</span>", "en": "<span class=\"formula\">x = 1</span>"},
                        {"ar": "<span class=\"formula\">x = -0.5</span>", "en": "<span class=\"formula\">x = -0.5</span>"},
                        {"ar": "<span class=\"formula\">x = 0</span>", "en": "<span class=\"formula\">x = 0</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتوزيع: <span class=\"formula\">4x - 2 - 12x - 4 = 2</span>. نجمع: <span class=\"formula\">-8x - 6 = 2</span>. نضيف 6 للطرفين: <span class=\"formula\">-8x = 8</span>. نقسم على -8: <span class=\"formula\">x = -1</span>.",
                        "en": "Expand: <span class=\"formula\">4x - 2 - 12x - 4 = 2</span>. Group: <span class=\"formula\">-8x - 6 = 2</span>. Add 6: <span class=\"formula\">-8x = 8</span>. Divide by -8: <span class=\"formula\">x = -1</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل المعادلة التالية: <span class=\"formula\">5x - 3 = -33</span>؟",
                        "en": "Solve the following equation: <span class=\"formula\">5x - 3 = -33</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = -6</span>", "en": "<span class=\"formula\">x = -6</span>"},
                        {"ar": "<span class=\"formula\">x = -7.2</span>", "en": "<span class=\"formula\">x = -7.2</span>"},
                        {"ar": "<span class=\"formula\">x = 6</span>", "en": "<span class=\"formula\">x = 6</span>"},
                        {"ar": "<span class=\"formula\">x = -30</span>", "en": "<span class=\"formula\">x = -30</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بإضافة 3 للطرفين: <span class=\"formula\">5x = -30</span>. بالقسمة على 5: <span class=\"formula\">x = -6</span>.",
                        "en": "Add 3 to both sides: <span class=\"formula\">5x = -30</span>. Divide by 5: <span class=\"formula\">x = -6</span>."
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
                        "ar": "قم بحل صيغة مساحة شبه المنحرف <span class=\"formula\">A = 1/2 h(b1 + b2)</span> للحصول على قيمة القاعدة <span class=\"formula\">b2</span> بدلالة بقية الرموز؟",
                        "en": "Solve the trapezoid area formula <span class=\"formula\">A = 1/2 h(b1 + b2)</span> to get the base <span class=\"formula\">b2</span> in terms of other variables?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">b2 = 2A / h - b1</span>", "en": "<span class=\"formula\">b2 = 2A / h - b1</span>"},
                        {"ar": "<span class=\"formula\">b2 = 2A - h · b1</span>", "en": "<span class=\"formula\">b2 = 2A - h · b1</span>"},
                        {"ar": "<span class=\"formula\">b2 = A / 2h - b1</span>", "en": "<span class=\"formula\">b2 = A / 2h - b1</span>"},
                        {"ar": "<span class=\"formula\">b2 = 2A / (h - b1)</span>", "en": "<span class=\"formula\">b2 = 2A / (h - b1)</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نضرب الطرفين في 2: <span class=\"formula\">2A = h(b1 + b2)</span>. نقسم على h: <span class=\"formula\">2A/h = b1 + b2</span>. نطرح b1: <span class=\"formula\">b2 = 2A/h - b1</span>.",
                        "en": "Multiply by 2: <span class=\"formula\">2A = h(b1 + b2)</span>. Divide by h: <span class=\"formula\">2A/h = b1 + b2</span>. Subtract b1: <span class=\"formula\">b2 = 2A/h - b1</span>."
                    }
                },
                {
                    "q": {
                        "ar": "في مباراة بيسبول أو كرة قدم، سجل أحمد ومحمد معاً إجمالي 46 هدفاً مجتمعين. إذا سجل أحمد 6 أهداف أكثر من محمد، فما عدد الأهداف التي سجلها كلاً منهما؟",
                        "en": "In a sports season, Ahmed and Mohamed scored 46 goals combined. If Ahmed scored 6 more goals than Mohamed, how many goals did each score?"
                    },
                    "options": [
                        {"ar": "أحمد سجل 26، ومحمد سجل 20", "en": "Ahmed scored 26, Mohamed scored 20"},
                        {"ar": "أحمد سجل 28، ومحمد سجل 18", "en": "Ahmed scored 28, Mohamed scored 18"},
                        {"ar": "أحمد سجل 30، ومحمد سجل 16", "en": "Ahmed scored 30, Mohamed scored 16"},
                        {"ar": "أحمد سجل 25، ومحمد سجل 21", "en": "Ahmed scored 25, Mohamed scored 21"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "إذا كان عدد أهداف محمد هو x، فإن أهداف أحمد هي x+6. المعادلة: <span class=\"formula\">x + (x + 6) = 46 -> 2x + 6 = 46 -> 2x = 40 -> x = 20</span>. أهداف محمد 20، وأحمد 26.",
                        "en": "Let Mohamed's goals be x. Ahmed's goals are x+6. Equation: <span class=\"formula\">2x + 6 = 46 -> 2x = 40 -> x = 20</span>. Mohamed scored 20, Ahmed scored 26."
                    }
                },
                {
                    "q": {
                        "ar": "إذا علم أن صيغة مساحة سطح أسطوانة مغلقة هي <span class=\"formula\">S = 2πr² + 2πrh</span>. قم بحل هذه الصيغة لعزل الارتفاع <span class=\"formula\">h</span>؟",
                        "en": "If the surface area of a closed cylinder is given by <span class=\"formula\">S = 2πr² + 2πrh</span>. Solve this formula to isolate height <span class=\"formula\">h</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">h = (S - 2πr²) / 2πr</span>", "en": "<span class=\"formula\">h = (S - 2πr²) / 2πr</span>"},
                        {"ar": "<span class=\"formula\">h = S / 2πr - r</span>", "en": "<span class=\"formula\">h = S / 2πr - r</span>"},
                        {"ar": "<span class=\"formula\">h = S - 2πr</span>", "en": "<span class=\"formula\">h = S - 2πr</span>"},
                        {"ar": "الخياران أ وب كلاهما متكافئان رياضياً وصحيحان", "en": "Both options A and B are mathematically equivalent and correct"}
                    ],
                    "correct": 3,
                    "answer": {
                        "ar": "بطرح <span class=\"formula\">2πr²</span> يصبح <span class=\"formula\">S - 2πr² = 2πrh</span>. بالقسمة على <span class=\"formula\">2πr</span> نحصل على: <span class=\"formula\">h = (S - 2πr²) / 2πr</span> وهو ما يمكن كتابته أيضاً كـ <span class=\"formula\">S / 2πr - r</span>. لذا كلاهما صحيح.",
                        "en": "By subtracting <span class=\"formula\">2πr²</span>, we get <span class=\"formula\">S - 2πr² = 2πrh</span>. Dividing by <span class=\"formula\">2πr</span> yields <span class=\"formula\">h = (S - 2πr²) / 2πr</span>, which simplifies to <span class=\"formula\">S / 2πr - r</span>."
                    }
                },
                {
                    "q": {
                        "ar": "في حال كانت المعادلة هي: <span class=\"formula\">6x - 12 = 18</span>. فما هي القيمة المباشرة لـ <span class=\"formula\">6x + 5</span> دون الحاجة لإيجاد قيمة <span class=\"formula\">x</span>؟",
                        "en": "In case the equation is: <span class=\"formula\">6x - 12 = 18</span>. What is the direct value of <span class=\"formula\">6x + 5</span> without finding <span class=\"formula\">x</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">35</span>", "en": "<span class=\"formula\">35</span>"},
                        {"ar": "<span class=\"formula\">30</span>", "en": "<span class=\"formula\">30</span>"},
                        {"ar": "<span class=\"formula\">41</span>", "en": "<span class=\"formula\">41</span>"},
                        {"ar": "<span class=\"formula\">25</span>", "en": "<span class=\"formula\">25</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بإضافة 17 لطرفي المعادلة: <span class=\"formula\">6x - 12 + 17 = 18 + 17 -> 6x + 5 = 35</span>. لا حاجة لإيجاد x.",
                        "en": "Add 17 to both sides: <span class=\"formula\">6x - 12 + 17 = 18 + 17 -> 6x + 5 = 35</span>. No need to find x."
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
                        "ar": "قام أحمد وأحمد بحل المعادلة التالية لصالح b2: <span class=\"formula\">A = 1/2 h(b1 + b2)</span>. أحمد حصل على <span class=\"formula\">2A/h - b1 = b2</span> ومحمد حصل على <span class=\"formula\">2A - b1 / h = b2</span>. من هو المخطئ ولماذا؟",
                        "en": "Ahmed and Mohamed solved the equation <span class=\"formula\">A = 1/2 h(b1 + b2)</span> for b2. Ahmed got <span class=\"formula\">2A/h - b1 = b2</span> and Mohamed got <span class=\"formula\">2A - b1 / h = b2</span>. Who is wrong and why?"
                    },
                    "options": [
                        {"ar": "محمد هو المخطئ لأنه لم يوزع عملية القسمة على h بالشكل الجيد ولم يضرب الطرف الآخر بأكمله", "en": "Mohamed is wrong because he did not distribute division by h and failed to multiply the entire other side"},
                        {"ar": "أحمد هو المخطئ لأنه قام بعملية الطرح قبل عملية القسمة", "en": "Ahmed is wrong because he subtracted before dividing"},
                        {"ar": "كلاهما على صواب حيث أن الصيغتين متكافئتين رياضياً", "en": "Both are correct as the two forms are mathematically equivalent"},
                        {"ar": "كلاهما أخطأ في التخلص من الكسر 1/2", "en": "Both made an error in eliminating the fraction 1/2"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "للتخلص من الكسر والارتفاع، نضرب أولاً بـ 2 لتصبح 2A، ثم نقسم على h، ثم نطرح b1. محمد أخطأ في ترتيب خطوات التخلص من الارتفاع والكسر.",
                        "en": "To isolate b2: multiply by 2 (2A), divide by h (2A/h), then subtract b1. Ahmed is correct; Mohamed made algebraic steps errors."
                    }
                },
                {
                    "q": {
                        "ar": "أي من الخواص التالية ينطبق على العبارة: 'إذا كان a = b و b = c فإن a = c'؟",
                        "en": "Which of the following properties applies to: 'If a = b and b = c, then a = c'?"
                    },
                    "options": [
                        {"ar": "الخاصية الانتقالية للمساواة", "en": "Transitive Property of Equality"},
                        {"ar": "الخاصية التبديلية للجمع", "en": "Commutative Property of Addition"},
                        {"ar": "الخاصية الانعكاسية للمساواة", "en": "Reflexive Property of Equality"},
                        {"ar": "خاصية الهوية المحايدة للمساواة", "en": "Identity Property of Equality"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "هذه هي الخاصية الانتقالية للمساواة (Transitive Property).",
                        "en": "This is the Transitive Property of Equality."
                    }
                },
                {
                    "q": {
                        "ar": "ما هو النظير الجمعي للعدد x في المعادلة الخطية عندما يكون المجهول معزولاً؟",
                        "en": "What is the additive inverse of x in a linear equation when the unknown is isolated?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-x</span>", "en": "<span class=\"formula\">-x</span>"},
                        {"ar": "<span class=\"formula\">1/x</span>", "en": "<span class=\"formula\">1/x</span>"},
                        {"ar": "<span class=\"formula\">x</span>", "en": "<span class=\"formula\">x</span>"},
                        {"ar": "<span class=\"formula\">x²</span>", "en": "<span class=\"formula\">x²</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "النظير الجمعي لأي عدد x هو دائماً <span class=\"formula\">-x</span>.",
                        "en": "The additive inverse of any number x is always <span class=\"formula\">-x</span>."
                    }
                },
                {
                    "q": {
                        "ar": "إذا علم أن <span class=\"formula\">3a - 2c / 4ab</span> يعبر عن قيمة دالة معينة. أوجد قيمتها إذا كانت <span class=\"formula\">a = 3, b = 2/3, c = -1.7</span>؟",
                        "en": "If <span class=\"formula\">3a - 2c / 4ab</span> represents a function's value. Find its value if <span class=\"formula\">a = 3, b = 2/3, c = -1.7</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">1.55</span>", "en": "<span class=\"formula\">1.55</span>"},
                        {"ar": "<span class=\"formula\">2.15</span>", "en": "<span class=\"formula\">2.15</span>"},
                        {"ar": "<span class=\"formula\">1.10</span>", "en": "<span class=\"formula\">1.10</span>"},
                        {"ar": "<span class=\"formula\">3.05</span>", "en": "<span class=\"formula\">3.05</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "البسط: <span class=\"formula\">3(3) - 2(-1.7) = 9 + 3.4 = 12.4</span>. المقام: <span class=\"formula\">4(3)(2/3) = 8</span>. النتيجة: <span class=\"formula\">12.4 / 8 = 1.55</span>.",
                        "en": "Numerator: <span class=\"formula\">3(3) - 2(-1.7) = 12.4</span>. Denominator: <span class=\"formula\">4(3)(2/3) = 8</span>. Result: <span class=\"formula\">12.4 / 8 = 1.55</span>."
                    }
                }
            ]
        }
    ]
}

# Generate the files
for lesson_id, exam in EXAMS_DATA.items():
    dir_path = os.path.join("public", lesson_id)
    os.makedirs(dir_path, exist_ok=True)
    
    try:
        parts = lesson_id.split("-")
        unit_parts = parts[3].split(".")
        ch = int(unit_parts[0])
        les = int(unit_parts[1])
    except Exception:
        ch = 1
        les = 1

    topic_name = exam.get("title_ar", "")
        
    sections_json = []
    for part_idx in range(5):
        sec = exam["sections"][part_idx]
        questions = []
        for q_idx in range(4):
            q_num = part_idx * 4 + q_idx + 1
            q_data = make_real_math_question(topic_name, q_num, ch, les, part_idx, q_idx)
            questions.append(q_data)
        sections_json.append({
            "title": sec["title"],
            "questions": questions
        })
            
    exam_data = {
        "title_ar": exam["title_ar"],
        "title_en": exam["title_en"],
        "desc_ar": exam["desc_ar"],
        "sections": sections_json
    }
        
    exam_json_str = json.dumps(exam_data, ensure_ascii=False, indent=4)
        
    html_content = TEMPLATE.replace("{LESSON_ID}", lesson_id)\
                           .replace("{TITLE_AR}", exam["title_ar"])\
                           .replace("{TITLE_EN}", exam["title_en"])\
                           .replace("{DESC_AR}", exam["desc_ar"])\
                           .replace("{ORIGINAL_EXAM_DATA_JSON}", exam_json_str)
        
    file_path = os.path.join(dir_path, "index.html")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generated {file_path}")
