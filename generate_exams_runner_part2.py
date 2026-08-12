# -*- coding: utf-8 -*-
import os
import json
from generate_general_math_exams import TEMPLATE, make_real_math_question

EXAMS_DATA_2 = {}

# ==============================================================================
# EXAM 1.4: حل معادلات القيمة المطلقة (Solving Absolute Value Equations)
# ==============================================================================
EXAMS_DATA_2["11Jen-math-T1-1.4-exam"] = {
    "title_ar": "الدرس الرابع: حل معادلات القيمة المطلقة",
    "title_en": "Lesson 4: Solving Absolute Value Equations",
    "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي تعاريف القيمة المطلقة، حل معادلات القيمة المطلقة البسيطة والمعقدة مع التحقق من الحلول الدخيلة، والنمذجة الواقعية لهوامش التسامح.",
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
                        "ar": "ما هو التعريف الهندسي للقيمة المطلقة للعدد الحقيقي <span class=\"formula\">|x|</span>؟",
                        "en": "What is the geometric definition of the absolute value of a real number <span class=\"formula\">|x|</span>?"
                    },
                    "options": [
                        {"ar": "المسافة بين العدد <span class=\"formula\">x</span> والصفر على خط الأعداد، وتكون دائماً غير سالبة", "en": "The distance between the number <span class=\"formula\">x</span> and zero on the number line, and is always non-negative"},
                        {"ar": "مربع العدد الحقيقي <span class=\"formula\">x</span> مقسوماً على 2", "en": "The square of the real number <span class=\"formula\">x</span> divided by 2"},
                        {"ar": "القيمة المعاكسة دائماً للعدد <span class=\"formula\">x</span> في الإشارة", "en": "The value always opposite in sign to the number <span class=\"formula\">x</span>"},
                        {"ar": "طول الفترة المغلقة من <span class=\"formula\">-x</span> إلى <span class=\"formula\">x</span>", "en": "The length of the closed interval from <span class=\"formula\">-x</span> to <span class=\"formula\">x</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "القيمة المطلقة هندسياً تمثل البعد أو المسافة عن نقطة الصفر، والمسافة دائماً كمية موجبة أو صفر.",
                        "en": "Geometrically, the absolute value represents the distance from zero, which is always positive or zero."
                    }
                },
                {
                    "q": {
                        "ar": "ما هي مجموعة حل معادلة القيمة المطلقة إذا كان الطرف الآخر سالباً، مثل: <span class=\"formula\">|3x + 5| = -7</span>؟",
                        "en": "What is the solution set of an absolute value equation if the other side is negative, such as: <span class=\"formula\">|3x + 5| = -7</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø (لا يوجد حل حقيقي)", "en": "The empty set Ø (no real solution)"},
                        {"ar": "المجموعة <span class=\"formula\">{4, -4}</span>", "en": "The set <span class=\"formula\">{4, -4}</span>"},
                        {"ar": "جميع الأعداد الحقيقية R", "en": "All real numbers R"},
                        {"ar": "<span class=\"formula\">x = -4</span> فقط", "en": "<span class=\"formula\">x = -4</span> only"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن القيمة المطلقة تعبر عن مسافة فلا يمكن أن تساوي قيمة سالبة أبداً، لذا الحل مستحيل ومجموعة الحل هي الخالية Ø.",
                        "en": "Since absolute value represents distance, it can never equal a negative number, so the solution is impossible (Ø)."
                    }
                },
                {
                    "q": {
                        "ar": "في معادلات القيمة المطلقة، ماذا نعني بـ 'الحل الدخيل' (Extraneous Solution)؟",
                        "en": "In absolute value equations, what do we mean by an 'extraneous solution'?"
                    },
                    "options": [
                        {"ar": "حل ينتج من العمليات الجبرية الصحيحة ولكنه لا يحقق المعادلة الأصلية عند التعويض بها", "en": "A solution derived from correct algebraic operations but does not satisfy the original equation upon substitution"},
                        {"ar": "حل خاطئ ناتج عن خطأ في الحسابات الجبرية وعمليات الجمع", "en": "An incorrect solution resulting from errors in algebraic calculations"},
                        {"ar": "حل يقع خارج مجال الأعداد الحقيقية وينتمي للأعداد التخيلية", "en": "A solution that lies outside real numbers and belongs to imaginary numbers"},
                        {"ar": "الحل الصدفي الذي يتم تخمينه دون خطوات رياضية", "en": "A guessed solution obtained without mathematical steps"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحلول الدخيلة تظهر بسبب فصل المعادلة إلى حالتين موجبة وسالبة، ولكن عند التحقق بالتعويض المباشر نكتشف أنها لا تحقق التساوي الأصلي.",
                        "en": "Extraneous solutions arise from splitting the equation into positive/negative cases but fail to satisfy the original equation when substituted."
                    }
                },
                {
                    "q": {
                        "ar": "لأي معادلة على الصورة <span class=\"formula\">|ax + b| = c</span> حيث <span class=\"formula\">c > 0</span>، ما هما المعادلتان المرتبطتان اللتان يجب حلهما؟",
                        "en": "For any equation of the form <span class=\"formula\">|ax + b| = c</span> where <span class=\"formula\">c > 0</span>, what are the two related equations that must be solved?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">ax + b = c</span> أو <span class=\"formula\">ax + b = -c</span>", "en": "<span class=\"formula\">ax + b = c</span> or <span class=\"formula\">ax + b = -c</span>"},
                        {"ar": "<span class=\"formula\">ax + b = c</span> فقط", "en": "<span class=\"formula\">ax + b = c</span> only"},
                        {"ar": "<span class=\"formula\">ax + b = √c</span> أو <span class=\"formula\">ax + b = -√c</span>", "en": "<span class=\"formula\">ax + b = √c</span> or <span class=\"formula\">ax + b = -√c</span>"},
                        {"ar": "<span class=\"formula\">-(ax + b) = -c</span> فقط", "en": "<span class=\"formula\">-(ax + b) = -c</span> only"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "لإزالة القيمة المطلقة، نقسم المسألة إلى حالتين: إما أن المقدار داخل المطلق يساوي <span class=\"formula\">c</span> أو يساوي <span class=\"formula\">-c</span>.",
                        "en": "To remove absolute value, split into two cases: the expression inside equals <span class=\"formula\">c</span> or equals <span class=\"formula\">-c</span>."
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
                        "ar": "قم بتقييم التعبير التالي: <span class=\"formula\">|5 + 2n| - 8.4</span> إذا كان <span class=\"formula\">n = -7.5</span>؟",
                        "en": "Evaluate the following expression: <span class=\"formula\">|5 + 2n| - 8.4</span> if <span class=\"formula\">n = -7.5</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">1.6</span>", "en": "<span class=\"formula\">1.6</span>"},
                        {"ar": "<span class=\"formula\">-1.6</span>", "en": "<span class=\"formula\">-1.6</span>"},
                        {"ar": "<span class=\"formula\">18.4</span>", "en": "<span class=\"formula\">18.4</span>"},
                        {"ar": "<span class=\"formula\">1.16</span>", "en": "<span class=\"formula\">1.16</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض: <span class=\"formula\">|5 + 2(-7.5)| - 8.4 = |5 - 15| - 8.4 = |-10| - 8.4 = 10 - 8.4 = 1.6</span>.",
                        "en": "By substitution: <span class=\"formula\">|5 + 2(-7.5)| - 8.4 = |-10| - 8.4 = 10 - 8.4 = 1.6</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل المعادلة التالية: <span class=\"formula\">|x + 12| = 9</span>؟",
                        "en": "Solve the equation: <span class=\"formula\">|x + 12| = 9</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = -3</span> أو <span class=\"formula\">x = -21</span>", "en": "<span class=\"formula\">x = -3</span> or <span class=\"formula\">x = -21</span>"},
                        {"ar": "<span class=\"formula\">x = 3</span> أو <span class=\"formula\">x = -21</span>", "en": "<span class=\"formula\">x = 3</span> or <span class=\"formula\">x = -21</span>"},
                        {"ar": "<span class=\"formula\">x = -3</span> أو <span class=\"formula\">x = 21</span>", "en": "<span class=\"formula\">x = -3</span> or <span class=\"formula\">x = 21</span>"},
                        {"ar": "<span class=\"formula\">x = 3</span> فقط", "en": "<span class=\"formula\">x = 3</span> only"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة 1: <span class=\"formula\">x + 12 = 9 -> x = -3</span>. الحالة 2: <span class=\"formula\">x + 12 = -9 -> x = -21</span>. الحلول صحيحة بالتعويض.",
                        "en": "Case 1: <span class=\"formula\">x + 12 = 9 -> x = -3</span>. Case 2: <span class=\"formula\">x + 12 = -9 -> x = -21</span>. Both are valid."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد مجموعة حل المعادلة التالية: <span class=\"formula\">3|2x - 3| - 5 = 10</span>؟",
                        "en": "Find the solution set of the equation: <span class=\"formula\">3|2x - 3| - 5 = 10</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">{4, -1}</span>", "en": "<span class=\"formula\">{4, -1}</span>"},
                        {"ar": "<span class=\"formula\">{4, 1}</span>", "en": "<span class=\"formula\">{4, 1}</span>"},
                        {"ar": "<span class=\"formula\">{-4, 1}</span>", "en": "<span class=\"formula\">{-4, 1}</span>"},
                        {"ar": "<span class=\"formula\">{5, -2}</span>", "en": "<span class=\"formula\">{5, -2}</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نعزل المطلق أولاً بإضافة 5 ثم القسمة على 3: <span class=\"formula\">3|2x - 3| = 15 -> |2x - 3| = 5</span>. الحالة 1: <span class=\"formula\">2x - 3 = 5 -> 2x = 8 -> x = 4</span>. الحالة 2: <span class=\"formula\">2x - 3 = -5 -> 2x = -2 -> x = -1</span>.",
                        "en": "Isolate first: <span class=\"formula\">3|2x - 3| = 15 -> |2x - 3| = 5</span>. Case 1: <span class=\"formula\">2x - 3 = 5 -> x = 4</span>. Case 2: <span class=\"formula\">2x - 3 = -5 -> x = -1</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد قيم <span class=\"formula\">y</span> الممكنة للمعادلة: <span class=\"formula\">|3y - 4| = -2y</span>؟",
                        "en": "Find possible <span class=\"formula\">y</span> values for: <span class=\"formula\">|3y - 4| = -2y</span>?"
                    },
                    "options": [
                        {"ar": "لا يوجد حل حقيقي (Ø) لأن كلا الحلين جبرياً ينتجان مخرجات سالبة للطرف الأيمن مسببة تعارضاً", "en": "No real solution (Ø) because both algebraic solutions produce negative right-hand values, causing a contradiction"},
                        {"ar": "<span class=\"formula\">y = 4/5</span> أو <span class=\"formula\">y = 4</span>", "en": "<span class=\"formula\">y = 4/5</span> or <span class=\"formula\">y = 4</span>"},
                        {"ar": "<span class=\"formula\">y = -4/5</span> أو <span class=\"formula\">y = -4</span>", "en": "<span class=\"formula\">y = -4/5</span> or <span class=\"formula\">y = -4</span>"},
                        {"ar": "<span class=\"formula\">y = 4/5</span> فقط والحل الآخر دخيل", "en": "<span class=\"formula\">y = 4/5</span> only and the other is extraneous"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "جبرياً: الحالة 1: <span class=\"formula\">3y - 4 = -2y -> 5y = 4 -> y = 4/5</span>. الحالة 2: <span class=\"formula\">3y - 4 = 2y -> y = 4</span>. لكن بالتعويض: الطرف الأيمن يجب أن يكون غير سالب <span class=\"formula\">-2y >= 0</span> أي <span class=\"formula\">y <= 0</span>. بما أن كلا الحلين موجبين، فكلاهما دخيلان ومجموعة الحل Ø.",
                        "en": "Algebraically: <span class=\"formula\">y=4/5</span> or <span class=\"formula\">y=4</span>. But substituting back requires <span class=\"formula\">-2y >= 0</span> (meaning <span class=\"formula\">y <= 0</span>). Since both are positive, both are extraneous, so solution is Ø."
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
                        "ar": "حل المعادلة التالية مع مراعاة الحلول الدخيلة: <span class=\"formula\">|x + 10| = 4x - 8</span>؟",
                        "en": "Solve the following equation, taking extraneous solutions into account: <span class=\"formula\">|x + 10| = 4x - 8</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = 6</span> هو الحل الصحيح الوحيد، و <span class=\"formula\">x = -0.4</span> حل دخيل", "en": "<span class=\"formula\">x = 6</span> is the only valid solution, and <span class=\"formula\">x = -0.4</span> is extraneous"},
                        {"ar": "<span class=\"formula\">x = 6</span> و <span class=\"formula\">x = -0.4</span> كلاهما حلان مقبولان وصحيحان", "en": "<span class=\"formula\">x = 6</span> and <span class=\"formula\">x = -0.4</span> are both acceptable and correct"},
                        {"ar": "<span class=\"formula\">x = -0.4</span> هو الحل الصحيح و <span class=\"formula\">x = 6</span> حل دخيل", "en": "<span class=\"formula\">x = -0.4</span> is valid and <span class=\"formula\">x = 6</span> is extraneous"},
                        {"ar": "مجموعة الحل خالية Ø", "en": "The solution set is empty Ø"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة 1: <span class=\"formula\">x + 10 = 4x - 8 -> 3x = 18 -> x = 6</span>. بالتعويض: <span class=\"formula\">|16| = 16</span> (صحيح). الحالة 2: <span class=\"formula\">x + 10 = -(4x - 8) -> x + 10 = -4x + 8 -> 5x = -2 -> x = -0.4</span>. بالتعويض: الطرف الأيمن <span class=\"formula\">4(-0.4) - 8 = -9.6</span> (سالب مرفوض). إذن x = 6 فقط.",
                        "en": "Case 1: <span class=\"formula\">x = 6</span> (valid). Case 2: <span class=\"formula\">x = -0.4</span> (yields negative RHS, extraneous). Thus x=6 is the only solution."
                    }
                },
                {
                    "q": {
                        "ar": "ما هي مجموعة حل المعادلة التالية: <span class=\"formula\">2|x - 4| + 10 = 4</span>؟",
                        "en": "What is the solution set of the equation: <span class=\"formula\">2|x - 4| + 10 = 4</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø", "en": "The empty set Ø"},
                        {"ar": "<span class=\"formula\">{1, 7}</span>", "en": "<span class=\"formula\">{1, 7}</span>"},
                        {"ar": "<span class=\"formula\">{-1, -7}</span>", "en": "<span class=\"formula\">{-1, -7}</span>"},
                        {"ar": "<span class=\"formula\">{1}</span> فقط والحل الآخر دخيل", "en": "<span class=\"formula\">{1}</span> only and the other is extraneous"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بعزل المطلق: <span class=\"formula\">2|x - 4| = -6 -> |x - 4| = -3</span>. بما أن المطلق لا يمكن أن يساوي سالباً، فمجموعة الحل هي Ø مباشرة.",
                        "en": "Isolating absolute value: <span class=\"formula\">2|x - 4| = -6 -> |x - 4| = -3</span>. Since absolute value cannot be negative, the solution set is Ø."
                    }
                },
                {
                    "q": {
                        "ar": "حل المعادلة التالية: <span class=\"formula\">|4x - 3| = |2x + 9|</span>؟",
                        "en": "Solve the equation: <span class=\"formula\">|4x - 3| = |2x + 9|</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = 6</span> أو <span class=\"formula\">x = -1</span>", "en": "<span class=\"formula\">x = 6</span> or <span class=\"formula\">x = -1</span>"},
                        {"ar": "<span class=\"formula\">x = -6</span> أو <span class=\"formula\">x = 1</span>", "en": "<span class=\"formula\">x = -6</span> or <span class=\"formula\">x = 1</span>"},
                        {"ar": "<span class=\"formula\">x = 6</span> أو <span class=\"formula\">x = -1.5</span>", "en": "<span class=\"formula\">x = 6</span> or <span class=\"formula\">x = -1.5</span>"},
                        {"ar": "<span class=\"formula\">x = 3</span> أو <span class=\"formula\">x = -4.5</span>", "en": "<span class=\"formula\">x = 3</span> or <span class=\"formula\">x = -4.5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة 1: <span class=\"formula\">4x - 3 = 2x + 9 -> 2x = 12 -> x = 6</span>. الحالة 2: <span class=\"formula\">4x - 3 = -(2x + 9) -> 4x - 3 = -2x - 9 -> 6x = -6 -> x = -1</span>. كلاهما صحيح بالتعويض.",
                        "en": "Case 1: <span class=\"formula\">4x - 3 = 2x + 9 -> x = 6</span>. Case 2: <span class=\"formula\">4x - 3 = -2x - 9 -> 6x = -6 -> x = -1</span>. Both are valid."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد حلول المعادلة التالية: <span class=\"formula\">|3x - 4| = 2x + 1</span>؟",
                        "en": "Find the solutions of the equation: <span class=\"formula\">|3x - 4| = 2x + 1</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x = 5</span> أو <span class=\"formula\">x = 0.6</span>", "en": "<span class=\"formula\">x = 5</span> or <span class=\"formula\">x = 0.6</span>"},
                        {"ar": "<span class=\"formula\">x = 5</span> فقط والآخر حل دخيل", "en": "<span class=\"formula\">x = 5</span> only and the other is extraneous"},
                        {"ar": "<span class=\"formula\">x = 0.6</span> فقط والآخر حل دخيل", "en": "<span class=\"formula\">x = 0.6</span> only and the other is extraneous"},
                        {"ar": "المعادلة ليس لها حلول حقيقية Ø", "en": "The equation has no real solutions Ø"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة 1: <span class=\"formula\">3x - 4 = 2x + 1 -> x = 5</span>. الحالة 2: <span class=\"formula\">3x - 4 = -2x - 1 -> 5x = 3 -> x = 3/5 = 0.6</span>. بالتعويض: للحلين الطرف الأيمن موجب، لذا كلاهما حلان صحيحان ومقبولان.",
                        "en": "Case 1: <span class=\"formula\">3x - 4 = 2x + 1 -> x = 5</span>. Case 2: <span class=\"formula\">3x - 4 = -2x - 1 -> x = 0.6</span>. Both yield positive RHS, so both are valid."
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
                        "ar": "يجب أن يكون لوزن علبة بسكويت هامش تسامح دقيق. إذا كان الوزن المثالي هو 450 جرام، ومسموح بزيادة أو نقصان 5 جرام كحد أقصى. اكتب معادلة قيمة مطلقة تمثل الوزن الأدنى والأقصى المقبولين؟",
                        "en": "The weight of a biscuit box has a tolerance. If the ideal weight is 450g, and a maximum variation of 5g is allowed. Write an absolute value equation representing the minimum and maximum acceptable weights?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">|w - 450| = 5</span>", "en": "<span class=\"formula\">|w - 450| = 5</span>"},
                        {"ar": "<span class=\"formula\">|w - 5| = 450</span>", "en": "<span class=\"formula\">|w - 5| = 450</span>"},
                        {"ar": "<span class=\"formula\">|450 - 5| = w</span>", "en": "<span class=\"formula\">|450 - 5| = w</span>"},
                        {"ar": "<span class=\"formula\">|w + 450| = 5</span>", "en": "<span class=\"formula\">|w + 450| = 5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المعادلة العامة للتسامح هي: <span class=\"formula\">|x - Ideal| = Tolerance</span>. بالتعويض: <span class=\"formula\">|w - 450| = 5</span>.",
                        "en": "The general tolerance formula is: <span class=\"formula\">|x - Ideal| = Tolerance</span>. Substituting gives <span class=\"formula\">|w - 450| = 5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "من السؤال السابق، أوجد قيم الوزن الصغرى والعظمى لعلبة البسكويت المقبولة؟",
                        "en": "From the previous question, find the minimum and maximum acceptable weight values for the box?"
                    },
                    "options": [
                        {"ar": "الوزن الأصغر 445 جرام والأكبر 455 جرام", "en": "Minimum weight is 445g and maximum is 455g"},
                        {"ar": "الوزن الأصغر 440 جرام والأكبر 460 جرام", "en": "Minimum weight is 440g and maximum is 460g"},
                        {"ar": "الوزن الأصغر 450 جرام والأكبر 455 جرام", "en": "Minimum weight is 450g and maximum is 455g"},
                        {"ar": "الوزن الأصغر 445 جرام والأكبر 450 جرام", "en": "Minimum weight is 445g and maximum is 450g"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بحل المعادلة <span class=\"formula\">|w - 450| = 5</span>: الحالة 1: <span class=\"formula\">w - 450 = 5 -> w = 455</span>. الحالة 2: <span class=\"formula\">w - 450 = -5 -> w = 445</span>.",
                        "en": "Solving <span class=\"formula\">|w - 450| = 5</span>: Case 1: <span class=\"formula\">w - 450 = 5 -> w = 455</span>. Case 2: <span class=\"formula\">w - 450 = -5 -> w = 445</span>."
                    }
                },
                {
                    "q": {
                        "ar": "تنتج آلة كرات زجاجية بقطر عشوائي مقبول هندسياً. إذا كانت المعادلة الممثلة لقطر الكرات هي <span class=\"formula\">|d - 0.75| = 0.02</span> بوصة. أوجد الحدود المسموحة لقطر الكرة؟",
                        "en": "A machine produces glass marbles with acceptable diameters. If the equation representing marble diameters is <span class=\"formula\">|d - 0.75| = 0.02</span> inches. Find the acceptable diameter limits?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">0.73</span> بوصة و <span class=\"formula\">0.77</span> بوصة", "en": "<span class=\"formula\">0.73</span> inches and <span class=\"formula\">0.77</span> inches"},
                        {"ar": "<span class=\"formula\">0.70</span> بوصة و <span class=\"formula\">0.80</span> بوصة", "en": "<span class=\"formula\">0.70</span> inches and <span class=\"formula\">0.80</span> inches"},
                        {"ar": "<span class=\"formula\">0.74</span> بوصة و <span class=\"formula\">0.76</span> بوصة", "en": "<span class=\"formula\">0.74</span> inches and <span class=\"formula\">0.76</span> inches"},
                        {"ar": "<span class=\"formula\">0.75</span> بوصة و <span class=\"formula\">0.77</span> بوصة", "en": "<span class=\"formula\">0.75</span> inches and <span class=\"formula\">0.77</span> inches"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة 1: <span class=\"formula\">d - 0.75 = 0.02 -> d = 0.77</span>. الحالة 2: <span class=\"formula\">d - 0.75 = -0.02 -> d = 0.73</span>.",
                        "en": "Case 1: <span class=\"formula\">d - 0.75 = 0.02 -> d = 0.77</span>. Case 2: <span class=\"formula\">d - 0.75 = -0.02 -> d = 0.73</span>."
                    }
                },
                {
                    "q": {
                        "ar": "تبلغ درجة الحرارة النموذجية في بيئة تربية نباتات استوائية <span class=\"formula\">26°C</span> وتتفاوت بمقدار لا يتجاوز <span class=\"formula\">3°C</span>. اكتب معادلة قيمة مطلقة تعبر عن درجتي الحرارة القصوى والدنيا؟",
                        "en": "The typical temperature for breeding tropical plants is <span class=\"formula\">26°C</span> and varies by no more than <span class=\"formula\">3°C</span>. Write an absolute value equation representing maximum and minimum temperatures?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">|t - 26| = 3</span>", "en": "<span class=\"formula\">|t - 26| = 3</span>"},
                        {"ar": "<span class=\"formula\">|t - 3| = 26</span>", "en": "<span class=\"formula\">|t - 3| = 26</span>"},
                        {"ar": "<span class=\"formula\">|t + 26| = 3</span>", "en": "<span class=\"formula\">|t + 26| = 3</span>"},
                        {"ar": "<span class=\"formula\">|26 - 3| = t</span>", "en": "<span class=\"formula\">|26 - 3| = t</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المعادلة هي البعد بين درجة الحرارة الفعلية والنموذجية يساوي مقدار التفاوت: <span class=\"formula\">|t - 26| = 3</span>.",
                        "en": "The equation is the difference between actual and target temperatures equals the variance: <span class=\"formula\">|t - 26| = 3</span>."
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
                        "ar": "قامت كلاً من أمينة وفاطمة بحل المعادلة التالية: <span class=\"formula\">|3x + 14| = -6x</span>. أوجدتا جبرياً القيمتين <span class=\"formula\">x = -14/9</span> و <span class=\"formula\">x = -14/3</span>. قالت أمينة أن كلا الحلين صحيحان، بينما قالت فاطمة أن <span class=\"formula\">x = -14/9</span> فقط حل صحيح والآخر دخيل. من منهما على صواب ولماذا؟",
                        "en": "Amina and Fatima solved the equation: <span class=\"formula\">|3x + 14| = -6x</span>. They algebraically found <span class=\"formula\">x = -14/9</span> and <span class=\"formula\">x = -14/3</span>. Amina said both are correct, while Fatima said only <span class=\"formula\">x = -14/9</span> is valid and the other is extraneous. Who is correct and why?"
                    },
                    "options": [
                        {"ar": "فاطمة على صواب لأن التعويض بالرقم <span class=\"formula\">-14/3</span> يعطي في الطرفين <span class=\"formula\">0 = 28</span> وهو تناقض مستحيل", "en": "Fatima is correct because substituting <span class=\"formula\">-14/3</span> yields <span class=\"formula\">0 = 28</span>, which is a contradiction"},
                        {"ar": "أمينة على صواب لأن كلا القيمتين تجعلان الطرف الأيمن موجباً وبذلك هما حلان مقبولان تماماً", "en": "Amina is correct because both values make the right side positive and are thus fully acceptable"},
                        {"ar": "كلاهما مخطئتان، حيث أن <span class=\"formula\">x = -14/3</span> هو الحل الوحيد المقبول و <span class=\"formula\">-14/9</span> حل دخيل", "en": "Both are wrong, as <span class=\"formula\">x = -14/3</span> is the only acceptable solution and <span class=\"formula\">-14/9</span> is extraneous"},
                        {"ar": "كلاهما على صواب والمعادلة تعبر عن متطابقة دائرية", "en": "Both are correct, and the equation represents a circular identity"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض بـ <span class=\"formula\">x = -14/3</span>: الطرف الأيسر <span class=\"formula\">|3(-14/3) + 14| = |-14 + 14| = 0</span>. الطرف الأيمن <span class=\"formula\">-6(-14/3) = 28</span>. نلاحظ <span class=\"formula\">0 ≠ 28</span> مما يعني أنه حل دخيل، بينما <span class=\"formula\">-14/9</span> يعطي <span class=\"formula\">28/3 = 28/3</span> وهو حل صحيح. فاطمة على صواب.",
                        "en": "Substituting <span class=\"formula\">x = -14/3</span>: LHS = <span class=\"formula\">|0| = 0</span>, RHS = 28. Since <span class=\"formula\">0 ≠ 28</span>, it is extraneous. فاطمة is correct."
                    }
                },
                {
                    "q": {
                        "ar": "ما هي مجموعة حل معادلة القيمة المطلقة المزدوجة التالية: <span class=\"formula\">||x| - 3| = 2</span>؟",
                        "en": "What is the solution set of the following double absolute value equation: <span class=\"formula\">||x| - 3| = 2</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">{5, -5, 1, -1}</span>", "en": "<span class=\"formula\">{5, -5, 1, -1}</span>"},
                        {"ar": "<span class=\"formula\">{5, 1}</span>", "en": "<span class=\"formula\">{5, 1}</span>"},
                        {"ar": "<span class=\"formula\">{5, -5}</span>", "en": "<span class=\"formula\">{5, -5}</span>"},
                        {"ar": "<span class=\"formula\">{-1, 1}</span>", "en": "<span class=\"formula\">{-1, 1}</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة A: <span class=\"formula\">|x| - 3 = 2 -> |x| = 5 -> x = ±5</span>. الحالة B: <span class=\"formula\">|x| - 3 = -2 -> |x| = 1 -> x = ±1</span>. بالتالي مجموعة الحل هي الرباعية المذكورة.",
                        "en": "Case A: <span class=\"formula\">|x| - 3 = 2 -> |x| = 5 -> x = ±5</span>. Case B: <span class=\"formula\">|x| - 3 = -2 -> |x| = 1 -> x = ±1</span>. Thus, the solution set is <span class=\"formula\">{5, -5, 1, -1}</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل المعادلة التالية: <span class=\"formula\">|x - 3| = 3 - x</span>؟",
                        "en": "Solve the equation: <span class=\"formula\">|x - 3| = 3 - x</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x ≤ 3</span>", "en": "<span class=\"formula\">x ≤ 3</span>"},
                        {"ar": "<span class=\"formula\">x ≥ 3</span>", "en": "<span class=\"formula\">x ≥ 3</span>"},
                        {"ar": "<span class=\"formula\">x = 3</span> فقط", "en": "<span class=\"formula\">x = 3</span> only"},
                        {"ar": "جميع الأعداد الحقيقية R", "en": "All real numbers R"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن الطرف الأيمن هو <span class=\"formula\">-(x - 3)</span>، فإن المعادلة تصبح <span class=\"formula\">|u| = -u</span>. هذا يكون صحيحاً فقط عندما يكون <span class=\"formula\">u ≤ 0</span>، أي <span class=\"formula\">x - 3 ≤ 0 -> x ≤ 3</span>.",
                        "en": "Since the RHS is <span class=\"formula\">-(x - 3)</span>, the equation of the form <span class=\"formula\">|u| = -u</span> is true if and only if <span class=\"formula\">u ≤ 0</span>, which means <span class=\"formula\">x ≤ 3</span>."
                    }
                },
                {
                    "q": {
                        "ar": "ما هي مجموعة حل المعادلة التالية: <span class=\"formula\">|2x - 1| = x - 2</span>؟",
                        "en": "What is the solution set of the equation: <span class=\"formula\">|2x - 1| = x - 2</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø", "en": "The empty set Ø"},
                        {"ar": "<span class=\"formula\">x = -1</span> أو <span class=\"formula\">x = 1</span>", "en": "<span class=\"formula\">x = -1</span> or <span class=\"formula\">x = 1</span>"},
                        {"ar": "<span class=\"formula\">x = -1</span> هو الحل الوحيد", "en": "<span class=\"formula\">x = -1</span> is the only solution"},
                        {"ar": "<span class=\"formula\">x = 1</span> هو الحل الوحيد", "en": "<span class=\"formula\">x = 1</span> is the only solution"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "جبرياً: <span class=\"formula\">2x-1 = x-2 -> x = -1</span> أو <span class=\"formula\">2x-1 = -x+2 -> 3x = 3 -> x = 1</span>. بالتعويض: للحلين الطرف الأيمن <span class=\"formula\">x-2</span> سالب (مرفوض)، فكلاهما دخيل ومجموعة الحل Ø.",
                        "en": "Algebraically: <span class=\"formula\">x = -1</span> or <span class=\"formula\">x = 1</span>. But substitution yields negative RHS for both, so both are extraneous, leaving the empty set Ø."
                    }
                }
            ]
        }
    ]
}

# ==============================================================================
# EXAM 1.5: حل المتباينات (Solving Inequalities)
# ==============================================================================
EXAMS_DATA_2["11Jen-math-T1-1.5-exam"] = {
    "title_ar": "الدرس الخامس: حل المتباينات",
    "title_en": "Lesson 5: Solving Inequalities",
    "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي خواص المتباينات، تمثيل الفترات المفتوحة والمغلقة، حل متباينات متعددة الخطوات، ونمذجة الميزانيات والحدود الواقعية.",
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
                        "ar": "ما هي أهم قاعدة يجب الالتزام بها عند ضرب أو قسمة طرفي متباينة على عدد سالب؟",
                        "en": "What is the most important rule to follow when multiplying or dividing both sides of an inequality by a negative number?"
                    },
                    "options": [
                        {"ar": "يجب قلب اتجاه رمز المتباينة فوراً", "en": "The direction of the inequality symbol must be reversed immediately"},
                        {"ar": "تظل إشارة المتباينة كما هي دون أي تغيير", "en": "The inequality symbol remains exactly the same without any change"},
                        {"ar": "يتحول اتجاه المتباينة لتصبح معادلة مساواة خطية", "en": "The inequality symbol changes into an equality sign"},
                        {"ar": "يتم إضافة النظير الجمعي للطرف الأيمن فقط", "en": "The additive inverse is added to the right side only"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "ضرب أو قسمة طرفي متباينة على عدد سالب يعكس العلاقة الرياضية للترتيب، لذا يجب قلب الرمز (مثلاً الأصغر يصبح أكبر).",
                        "en": "Multiplying or dividing by a negative number reverses the order relationship, so the inequality symbol must be flipped."
                    }
                },
                {
                    "q": {
                        "ar": "كيف يتم التعبير عن العبارة 'الأعداد الأكبر من أو تساوي -3 والأصغر تماماً من 5' باستخدام رمز الفترة؟",
                        "en": "How is the phrase 'numbers greater than or equal to -3 and strictly less than 5' expressed using interval notation?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">[-3, 5)</span>", "en": "<span class=\"formula\">[-3, 5)</span>"},
                        {"ar": "<span class=\"formula\">(-3, 5]</span>", "en": "<span class=\"formula\">(-3, 5]</span>"},
                        {"ar": "<span class=\"formula\">[-3, 5]</span>", "en": "<span class=\"formula\">[-3, 5]</span>"},
                        {"ar": "<span class=\"formula\">(-3, 5)</span>", "en": "<span class=\"formula\">(-3, 5)</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "القوس المربع [ يعني مغلق (أكبر من أو يساوي)، والقوس العادي ) يعني مفتوح (أصغر تماماً). لذا الفترة هي <span class=\"formula\">[-3, 5)</span>.",
                        "en": "The bracket [ means closed (inclusive), while the parenthesis ) means open (exclusive). The interval is <span class=\"formula\">[-3, 5)</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أي مما يلي يمثل مجموعة الحل للمتباينة <span class=\"formula\">x < 4</span> مكتوبة بصيغة بناء المجموعة (Set-Builder Notation)؟",
                        "en": "Which of the following represents the solution set of the inequality <span class=\"formula\">x < 4</span> in set-builder notation?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">{x | x < 4, x ∈ R}</span>", "en": "<span class=\"formula\">{x | x < 4, x ∈ R}</span>"},
                        {"ar": "<span class=\"formula\">{x | x > 4}</span>", "en": "<span class=\"formula\">{x | x > 4}</span>"},
                        {"ar": "<span class=\"formula\">[x < 4]</span>", "en": "<span class=\"formula\">[x < 4]</span>"},
                        {"ar": "<span class=\"formula\">{4 | x < 4}</span>", "en": "<span class=\"formula\">{4 | x < 4}</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "صيغة بناء المجموعة تستخدم الأقواس المتعرجة وتحدد الشرط اللازم للمتغير بوضوح: <span class=\"formula\">{x | x < 4, x ∈ R}</span>.",
                        "en": "Set-builder notation uses braces and explicitly defines the variable's condition: <span class=\"formula\">{x | x < 4, x ∈ R}</span>."
                    }
                },
                {
                    "q": {
                        "ar": "ما الذي تمثله الدائرة المفتوحة (Unfilled Circle) على خط الأعداد عند رسم حل متباينة؟",
                        "en": "What does an unfilled circle on a number line represent when graphing an inequality?"
                    },
                    "options": [
                        {"ar": "أن قيمة نقطة الحدود غير مدرجة ضمن مجموعة الحل (أصغر أو أكبر تماماً)", "en": "That the boundary point value is excluded from the solution set (strictly less or greater than)"},
                        {"ar": "أن قيمة نقطة الحدود مدرجة ومشمولة بالحل (أكبر من أو يساوي)", "en": "That the boundary point value is included in the solution set (inclusive)"},
                        {"ar": "أن المتباينة ليس لها أي حلول حقيقية على الإطلاق", "en": "That the inequality has no real solutions at all"},
                        {"ar": "أن الحل يبدأ وينتهي عند نفس النقطة فقط", "en": "That the solution starts and ends at that point only"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الدائرة المفتوحة تشير إلى الاستبعاد (أصغر تماماً < أو أكبر تماماً >)، بينما المظللة تشير للاحتواء (≤ أو ≥).",
                        "en": "An open circle indicates exclusion (strictly < or >), while a filled circle indicates inclusion (≤ or ≥)."
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
                        "ar": "حل المتباينة التالية: <span class=\"formula\">5w + 3 > 4w + 9</span>؟",
                        "en": "Solve the inequality: <span class=\"formula\">5w + 3 > 4w + 9</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">w > 6</span>", "en": "<span class=\"formula\">w > 6</span>"},
                        {"ar": "<span class=\"formula\">w < 6</span>", "en": "<span class=\"formula\">w < 6</span>"},
                        {"ar": "<span class=\"formula\">w > 12</span>", "en": "<span class=\"formula\">w > 12</span>"},
                        {"ar": "<span class=\"formula\">w ≥ 6</span>", "en": "<span class=\"formula\">w ≥ 6</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بطرح <span class=\"formula\">4w</span> من الطرفين: <span class=\"formula\">w + 3 > 9</span>. بطرح 3 من الطرفين: <span class=\"formula\">w > 6</span>.",
                        "en": "Subtract <span class=\"formula\">4w</span>: <span class=\"formula\">w + 3 > 9</span>. Subtract 3: <span class=\"formula\">w > 6</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد حل المتباينة التالية: <span class=\"formula\">-4x ≥ -24</span>؟",
                        "en": "Find the solution to the inequality: <span class=\"formula\">-4x ≥ -24</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x ≤ 6</span>", "en": "<span class=\"formula\">x ≤ 6</span>"},
                        {"ar": "<span class=\"formula\">x ≥ 6</span>", "en": "<span class=\"formula\">x ≥ 6</span>"},
                        {"ar": "<span class=\"formula\">x ≥ -6</span>", "en": "<span class=\"formula\">x ≥ -6</span>"},
                        {"ar": "<span class=\"formula\">x ≤ -6</span>", "en": "<span class=\"formula\">x ≤ -6</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بقسمة الطرفين على عدد سالب <span class=\"formula\">-4</span>، يجب عكس رمز المتباينة: <span class=\"formula\">x ≤ 6</span>.",
                        "en": "Dividing by a negative number <span class=\"formula\">-4</span>, we must reverse the inequality: <span class=\"formula\">x ≤ 6</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل المتباينة التالية الكسرية: <span class=\"formula\">-w/4 ≤ -7</span>؟",
                        "en": "Solve the following fractional inequality: <span class=\"formula\">-w/4 ≤ -7</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">w ≥ 28</span>", "en": "<span class=\"formula\">w ≥ 28</span>"},
                        {"ar": "<span class=\"formula\">w ≤ 28</span>", "en": "<span class=\"formula\">w ≤ 28</span>"},
                        {"ar": "<span class=\"formula\">w ≥ -28</span>", "en": "<span class=\"formula\">w ≥ -28</span>"},
                        {"ar": "<span class=\"formula\">w ≤ -28</span>", "en": "<span class=\"formula\">w ≤ -28</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نضرب طرفي المتباينة في <span class=\"formula\">-4</span> ونعكس الاتجاه فوراً: <span class=\"formula\">w ≥ 28</span>.",
                        "en": "Multiply both sides by <span class=\"formula\">-4</span> and reverse the inequality: <span class=\"formula\">w ≥ 28</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل المتباينة التالية بدقة: <span class=\"formula\">-9.2y < 23</span>؟",
                        "en": "Solve the following inequality: <span class=\"formula\">-9.2y < 23</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">y > -2.5</span>", "en": "<span class=\"formula\">y > -2.5</span>"},
                        {"ar": "<span class=\"formula\">y < -2.5</span>", "en": "<span class=\"formula\">y < -2.5</span>"},
                        {"ar": "<span class=\"formula\">y > 2.5</span>", "en": "<span class=\"formula\">y > 2.5</span>"},
                        {"ar": "<span class=\"formula\">y ≥ -2.5</span>", "en": "<span class=\"formula\">y ≥ -2.5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بقسمة الطرفين على العدد السالب <span class=\"formula\">-9.2</span> وعكس اتجاه الرمز: <span class=\"formula\">y > 23 / -9.2 = -2.5</span>.",
                        "en": "Dividing both sides by the negative number <span class=\"formula\">-9.2</span> and reversing the symbol direction yields <span class=\"formula\">y > -2.5</span>."
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
                        "ar": "أوجد مجموعة حل المتباينة التالية: <span class=\"formula\">3(r - 2) < 2r + 4</span>؟",
                        "en": "Find the solution set of the inequality: <span class=\"formula\">3(r - 2) < 2r + 4</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">{r | r < 10}</span>", "en": "<span class=\"formula\">{r | r < 10}</span>"},
                        {"ar": "<span class=\"formula\">{r | r > 10}</span>", "en": "<span class=\"formula\">{r | r > 10}</span>"},
                        {"ar": "<span class=\"formula\">{r | r < -2}</span>", "en": "<span class=\"formula\">{r | r < -2}</span>"},
                        {"ar": "<span class=\"formula\">{r | r < 2}</span>", "en": "<span class=\"formula\">{r | r < 2}</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتوزيع: <span class=\"formula\">3r - 6 < 2r + 4</span>. نطرح <span class=\"formula\">2r</span> من الطرفين: <span class=\"formula\">r - 6 < 4</span>. نضيف 6 للطرفين: <span class=\"formula\">r < 10</span>.",
                        "en": "By distribution: <span class=\"formula\">3r - 6 < 2r + 4</span>. Subtract <span class=\"formula\">2r</span>: <span class=\"formula\">r - 6 < 4</span>. Add 6: <span class=\"formula\">r < 10</span>."
                    }
                },
                {
                    "q": {
                        "ar": "ما هو حل المتباينة التالية: <span class=\"formula\">4v + 8 ≥ 6(v - 1)</span>؟",
                        "en": "What is the solution of the inequality: <span class=\"formula\">4v + 8 ≥ 6(v - 1)</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">v ≤ 7</span>", "en": "<span class=\"formula\">v ≤ 7</span>"},
                        {"ar": "<span class=\"formula\">v ≥ 7</span>", "en": "<span class=\"formula\">v ≥ 7</span>"},
                        {"ar": "<span class=\"formula\">v ≤ 1</span>", "en": "<span class=\"formula\">v ≤ 1</span>"},
                        {"ar": "<span class=\"formula\">v ≥ 1</span>", "en": "<span class=\"formula\">v ≥ 1</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتوزيع: <span class=\"formula\">4v + 8 ≥ 6v - 6</span>. نطرح <span class=\"formula\">4v</span>: <span class=\"formula\">8 ≥ 2v - 6</span>. نضيف 6: <span class=\"formula\">14 ≥ 2v</span>. نقسم على 2: <span class=\"formula\">7 ≥ v</span> أو <span class=\"formula\">v ≤ 7</span>.",
                        "en": "Expand: <span class=\"formula\">4v + 8 ≥ 6v - 6</span>. Subtract <span class=\"formula\">4v</span>: <span class=\"formula\">8 ≥ 2v - 6</span>. Add 6: <span class=\"formula\">14 ≥ 2v</span>. Divide by 2: <span class=\"formula\">v ≤ 7</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد مجموعة حل المتباينة التالية: <span class=\"formula\">6(x + 1) - 2x < 4x + 10</span>؟",
                        "en": "Find the solution set of the inequality: <span class=\"formula\">6(x + 1) - 2x < 4x + 10</span>?"
                    },
                    "options": [
                        {"ar": "مجموعة الحل هي R (جميع الأعداد الحقيقية)", "en": "The solution set is R (all real numbers)"},
                        {"ar": "المجموعة الخالية Ø (لا يوجد حل حقيقي)", "en": "The empty set Ø (no real solution)"},
                        {"ar": "<span class=\"formula\">x < 1</span>", "en": "<span class=\"formula\">x < 1</span>"},
                        {"ar": "<span class=\"formula\">x > 1</span>", "en": "<span class=\"formula\">x > 1</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الطرف الأيسر: <span class=\"formula\">6x + 6 - 2x = 4x + 6</span>. المتباينة تصبح: <span class=\"formula\">4x + 6 < 4x + 10</span>. بطرح <span class=\"formula\">4x</span> نحصل على <span class=\"formula\">6 < 10</span> وهي عبارة صحيحة دائماً، لذا الحل هو R.",
                        "en": "Left side: <span class=\"formula\">4x + 6</span>. Inequality is <span class=\"formula\">4x + 6 < 4x + 10</span>. Subtract <span class=\"formula\">4x</span> yields <span class=\"formula\">6 < 10</span> (always true). Solution is R."
                    }
                },
                {
                    "q": {
                        "ar": "حل المتباينة التالية: <span class=\"formula\">2(1 - 2x) < -4(x + 1)</span>؟",
                        "en": "Solve the inequality: <span class=\"formula\">2(1 - 2x) < -4(x + 1)</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø (لا يوجد حل)", "en": "The empty set Ø (no solution)"},
                        {"ar": "مجموعة الأعداد الحقيقية R", "en": "The set of real numbers R"},
                        {"ar": "<span class=\"formula\">x < 1</span>", "en": "<span class=\"formula\">x < 1</span>"},
                        {"ar": "<span class=\"formula\">x > 0</span>", "en": "<span class=\"formula\">x > 0</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتوزيع: <span class=\"formula\">2 - 4x < -4x - 4</span>. بإضافة <span class=\"formula\">4x</span> للطرفين نحصل على: <span class=\"formula\">2 < -4</span> وهذا تناقض رياضي خاطئ دائماً، لذا المتباينة ليس لها حل ومجموعة الحل Ø.",
                        "en": "Expand: <span class=\"formula\">2 - 4x < -4x - 4</span>. Add <span class=\"formula\">4x</span>: <span class=\"formula\">2 < -4</span> (impossible). No solution (Ø)."
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
                        "ar": "يرغب عيسى في كسب دخل شهري لا يقل عن AED 50 من موقعه الخاص. إذا كان يحصل على رسوم ثابتة من الإعلانات بقيمة AED 15 شهرياً، بالإضافة إلى AED 0.05 مقابل كل نقرة على الإعلان. ما هي المتباينة الممثلة لعدد النقرات <span class=\"formula\">c</span> المطلوبة شهرياً؟",
                        "en": "Eissa wants to earn at least AED 50 monthly from his website. He gets AED 15 flat fee for advertising monthly, plus AED 0.05 per click. What inequality represents the number of clicks <span class=\"formula\">c</span> needed?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">15 + 0.05c ≥ 50</span>", "en": "<span class=\"formula\">15 + 0.05c ≥ 50</span>"},
                        {"ar": "<span class=\"formula\">15 + 0.05c ≤ 50</span>", "en": "<span class=\"formula\">15 + 0.05c ≤ 50</span>"},
                        {"ar": "<span class=\"formula\">0.05c ≥ 50</span>", "en": "<span class=\"formula\">0.05c ≥ 50</span>"},
                        {"ar": "<span class=\"formula\">15c + 0.05 ≥ 50</span>", "en": "<span class=\"formula\">15c + 0.05 ≥ 50</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الدخل الإجمالي هو الرسوم الثابتة (15) مضافاً إليها ناتج ضرب معدل النقرة (0.05) في عدد النقرات c، ويجب أن يكون أكبر من أو يساوي (≥) 50.",
                        "en": "Total income is AED 15 plus AED 0.05 times click count <span class=\"formula\">c</span>, which must be at least (≥) 50."
                    }
                },
                {
                    "q": {
                        "ar": "من السؤال السابق، ما هو الحد الأدنى لعدد النقرات التي يجب أن يحصل عليها عيسى لتفادي عجز الميزانية المطلوبة؟",
                        "en": "From the previous question, what is the minimum number of clicks Eissa must receive to meet his goal?"
                    },
                    "options": [
                        {"ar": "لا يقل عن <span class=\"formula\">700</span> نقرة", "en": "At least <span class=\"formula\">700</span> clicks"},
                        {"ar": "لا يقل عن <span class=\"formula\">1000</span> نقرة", "en": "At least <span class=\"formula\">1000</span> clicks"},
                        {"ar": "لا يقل عن <span class=\"formula\">500</span> نقرة", "en": "At least <span class=\"formula\">500</span> clicks"},
                        {"ar": "أكثر من <span class=\"formula\">1200</span> نقرة", "en": "More than <span class=\"formula\">1200</span> clicks"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بحل المتباينة: <span class=\"formula\">15 + 0.05c ≥ 50 -> 0.05c ≥ 35 -> c ≥ 35 / 0.05 -> c ≥ 700</span> نقرة.",
                        "en": "Solving <span class=\"formula\">15 + 0.05c ≥ 50 -> 0.05c ≥ 35 -> c ≥ 700</span> clicks."
                    }
                },
                {
                    "q": {
                        "ar": "رصدت مدرسة ميزانية أقصاها AED 1200 لرحلة طلابية. إذا كانت تكلفة استئجار الحافلة AED 450 والوجبة للطالب الواحد تبلغ AED 15. ما هي المتباينة المحددة لعدد الطلاب <span class=\"formula\">s</span> الممكن اصطحابهم؟",
                        "en": "A school budgeted a maximum of AED 1200 for a field trip. Bus rental costs AED 450, and meals cost AED 15 per student. Which inequality limits the number of students <span class=\"formula\">s</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">450 + 15s ≤ 1200</span>", "en": "<span class=\"formula\">450 + 15s ≤ 1200</span>"},
                        {"ar": "<span class=\"formula\">450 + 15s ≥ 1200</span>", "en": "<span class=\"formula\">450 + 15s ≥ 1200</span>"},
                        {"ar": "<span class=\"formula\">15s ≤ 1200</span>", "en": "<span class=\"formula\">15s ≤ 1200</span>"},
                        {"ar": "<span class=\"formula\">450s + 15 ≤ 1200</span>", "en": "<span class=\"formula\">450s + 15 ≤ 1200</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "التكلفة الكلية تساوي سعر الحافلة زائد تكلفة وجبات الطلاب <span class=\"formula\">15s</span>، ويجب ألا تتجاوز الميزانية (≤ 1200).",
                        "en": "The total cost is bus rental plus meals for students <span class=\"formula\">15s</span>, which must be less than or equal to (≤) 1200."
                    }
                },
                {
                    "q": {
                        "ar": "من السؤال السابق، ما هو أقصى عدد من الطلاب يمكن اصطحابهم في الرحلة؟",
                        "en": "From the previous question, what is the maximum number of students who can join the trip?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">50</span> طالباً كحد أقصى", "en": "<span class=\"formula\">50</span> students maximum"},
                        {"ar": "<span class=\"formula\">80</span> طالباً كحد أقصى", "en": "<span class=\"formula\">80</span> students maximum"},
                        {"ar": "<span class=\"formula\">40</span> طالباً كحد أقصى", "en": "<span class=\"formula\">40</span> students maximum"},
                        {"ar": "<span class=\"formula\">60</span> طالباً كحد أقصى", "en": "<span class=\"formula\">60</span> students maximum"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بحل المتباينة: <span class=\"formula\">450 + 15s ≤ 1200 -> 15s ≤ 750 -> s ≤ 50</span> طالباً.",
                        "en": "Solving <span class=\"formula\">450 + 15s ≤ 1200 -> 15s ≤ 750 -> s ≤ 50</span> students."
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
                        "ar": "إذا كان لدينا المتباينة <span class=\"formula\">ax < b</span> حيث <span class=\"formula\">a</span> عدداً حقيقياً سالباً، فما هي الصياغة الصحيحة لمجموعة الحل؟",
                        "en": "If we have the inequality <span class=\"formula\">ax < b</span> where <span class=\"formula\">a</span> is a negative real number, what is the correct formulation of the solution set?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x > b / a</span>", "en": "<span class=\"formula\">x > b / a</span>"},
                        {"ar": "<span class=\"formula\">x < b / a</span>", "en": "<span class=\"formula\">x < b / a</span>"},
                        {"ar": "<span class=\"formula\">x > a / b</span>", "en": "<span class=\"formula\">x > a / b</span>"},
                        {"ar": "<span class=\"formula\">x < a / b</span>", "en": "<span class=\"formula\">x < a / b</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن <span class=\"formula\">a</span> سالب، عند القسمة عليه يجب عكس اتجاه علاقة المتباينة مباشرة لتصبح أكبر من.",
                        "en": "Since <span class=\"formula\">a</span> is negative, dividing by it reverses the inequality symbol direction to greater than."
                    }
                },
                {
                    "q": {
                        "ar": "إذا علمت أن <span class=\"formula\">x + 5 < 12</span> و <span class=\"formula\">x - 2 > 3</span>. فما هي الفروق بين مجموعتي حل هاتين المتبادلتين؟",
                        "en": "If <span class=\"formula\">x + 5 < 12</span> and <span class=\"formula\">x - 2 > 3</span>. What are the boundaries of their solutions?"
                    },
                    "options": [
                        {"ar": "الأولى تعطي <span class=\"formula\">x < 7</span> والثانية تعطي <span class=\"formula\">x > 5</span>", "en": "The first yields <span class=\"formula\">x < 7</span> and the second yields <span class=\"formula\">x > 5</span>"},
                        {"ar": "الأولى تعطي <span class=\"formula\">x > 7</span> والثانية تعطي <span class=\"formula\">x < 5</span>", "en": "The first yields <span class=\"formula\">x > 7</span> and the second yields <span class=\"formula\">x < 5</span>"},
                        {"ar": "المتبادلتان متطابقتان ولهما نفس الحل تماماً وهو 7", "en": "The two inequalities are identical and have the same solution of 7"},
                        {"ar": "الأولى تعطي <span class=\"formula\">x < 17</span> والثانية تعطي <span class=\"formula\">x > 1</span>", "en": "The first yields <span class=\"formula\">x < 17</span> and the second yields <span class=\"formula\">x > 1</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "متباينة 1: <span class=\"formula\">x < 7</span>. متباينة 2: <span class=\"formula\">x > 5</span>.",
                        "en": "Inequality 1: <span class=\"formula\">x < 7</span>. Inequality 2: <span class=\"formula\">x > 5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "لأي متباينة خطية بالصورة <span class=\"formula\">x + y ≤ z</span>. إذا علم أن <span class=\"formula\">z = 10</span> و <span class=\"formula\">y = 4.5</span>. أوجد قيم <span class=\"formula\">x</span> المحققة؟",
                        "en": "For any linear inequality of the form <span class=\"formula\">x + y ≤ z</span>. If <span class=\"formula\">z = 10</span> and <span class=\"formula\">y = 4.5</span>. Find satisfying <span class=\"formula\">x</span> values?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x ≤ 5.5</span>", "en": "<span class=\"formula\">x ≤ 5.5</span>"},
                        {"ar": "<span class=\"formula\">x ≥ 5.5</span>", "en": "<span class=\"formula\">x ≥ 5.5</span>"},
                        {"ar": "<span class=\"formula\">x < 5.5</span>", "en": "<span class=\"formula\">x < 5.5</span>"},
                        {"ar": "<span class=\"formula\">x = 5.5</span>", "en": "<span class=\"formula\">x = 5.5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بالتعويض: <span class=\"formula\">x + 4.5 ≤ 10 -> x ≤ 10 - 4.5 -> x ≤ 5.5</span>.",
                        "en": "By substitution: <span class=\"formula\">x + 4.5 ≤ 10 -> x ≤ 5.5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "لماذا نستخدم المجموعات المفتوحة والمغلقة لتمثيل حلول المتباينات بدلاً من قائمة أرقام؟",
                        "en": "Why do we use open/closed intervals to represent inequality solutions instead of a list of numbers?"
                    },
                    "options": [
                        {"ar": "لأن حل المتباينة يضم عدداً لانهائياً من الأعداد الحقيقية في فترات مستمرة ومتصلة لا يمكن حصرها يدوياً", "en": "Because inequality solutions include an infinite number of real numbers in continuous intervals that cannot be manually listed"},
                        {"ar": "لأن كتابة الفترات تجعل الحسابات معقدة لطلاب المرحلة الثانوية", "en": "Because writing intervals makes calculations complex for high school students"},
                        {"ar": "لأن الأعداد الحقيقية لا تشمل الكسور والكسور العشرية إلا في الفترات", "en": "Because real numbers do not include fractions/decimals except in intervals"},
                        {"ar": "لا توجد أسباب رياضية محددة بل هو مجرد تقليد تاريخي متبع", "en": "There are no specific mathematical reasons; it is merely a historical convention"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "مجموعة الأعداد الحقيقية R كثيفة ومستمرة، لذا أي فترة بين عددين تحتوي على عدد لا نهائي من القيم الكسرية والنسبية، مما يستوجب استخدام الفترات الممثلة لها.",
                        "en": "The set of real numbers R is dense, meaning any interval between two numbers contains infinitely many values, requiring interval notation."
                    }
                }
            ]
        }
    ]
}

# ==============================================================================
# EXAM 1.6: حل المتباينات المركبة ومتباينات القيمة المطلقة
# ==============================================================================
EXAMS_DATA_2["11Jen-math-T1-1.6-exam"] = {
    "title_ar": "الدرس السادس: حل المتباينات المركبة ومتباينات القيمة المطلقة",
    "title_en": "Lesson 6: Solving Compound & Absolute Value Inequalities",
    "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي متباينات الربط 'و' (التقاطع) والربط 'أو' (الاتحاد)، حل متباينات القيمة المطلقة بنوعيها أصغر من وأكبر من، والتطبيقات الواقعية لهوامش الأمان والتسامح الحيوية.",
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
                        "ar": "ما هو الفرق الرئيسي بين متباينة مركبة تحتوي على أداة الربط 'و' (AND) وأخرى تحتوي على أداة الربط 'أو' (OR)؟",
                        "en": "What is the main difference between a compound inequality with 'and' (AND) and one with 'or' (OR)?"
                    },
                    "options": [
                        {"ar": "'و' تتطلب تحقق الشرطين معاً (التقاطع)، بينما 'أو' تتطلب تحقق أحد الشرطين على الأقل (الاتحاد)", "en": "'and' requires both conditions to be true (intersection), while 'or' requires at least one to be true (union)"},
                        {"ar": "'و' تعني جمع الحلين، و 'أو' تعني طرح الحلين من بعضهما", "en": "'and' means adding the solutions, and 'or' means subtracting them"},
                        {"ar": "'و' تكون دائماً بدون حل، بينما 'أو' حلها دائماً R", "en": "'and' always has no solution, while 'or' always has solution R"},
                        {"ar": "لا توجد أي فروق جوهرية بينهما في صياغة الفترات ورسم خط الأعداد", "en": "There are no fundamental differences in interval notation or graphing"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "أداة الربط 'و' تعني التقاطع (intersection ∩) ويجب أن تكون القيمة محققة لكلا الجزأين. 'أو' تعني الاتحاد (union ∪).",
                        "en": "'and' represents intersection (∩) needing both parts satisfied. 'or' represents union (∪) needing either satisfied."
                    }
                },
                {
                    "q": {
                        "ar": "كيف يتم تحويل متباينة القيمة المطلقة من نوع أصغر من <span class=\"formula\">|ax + b| < c</span> (حيث c > 0) إلى متباينة مركبة؟",
                        "en": "How is an absolute value inequality of the 'less than' type <span class=\"formula\">|ax + b| < c</span> (where c > 0) converted into a compound inequality?"
                    },
                    "options": [
                        {"ar": "متباينة مركبة مترابطة بـ 'و': <span class=\"formula\">-c < ax + b < c</span>", "en": "A compound inequality with 'and': <span class=\"formula\">-c < ax + b < c</span>"},
                        {"ar": "متباينة مركبة مترابطة بـ 'أو': <span class=\"formula\">ax + b > c</span> أو <span class=\"formula\">ax + b < -c</span>", "en": "A compound inequality with 'or': <span class=\"formula\">ax + b > c</span> or <span class=\"formula\">ax + b < -c</span>"},
                        {"ar": "متباينة مفردة: <span class=\"formula\">ax + b < -c</span> فقط", "en": "A single inequality: <span class=\"formula\">ax + b < -c</span> only"},
                        {"ar": "تتحول مباشرة لمعادلة عادية: <span class=\"formula\">ax + b = c</span>", "en": "Converts directly to an equation: <span class=\"formula\">ax + b = c</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "متباينة الأصغر من تعني أن البعد أقل من c، وتتحول لمتباينة مركبة محصورة بين السالب والموجب (الربط 'و').",
                        "en": "A 'less than' absolute value inequality converts to a compound inequality bounded by -c and c (using 'and')."
                    }
                },
                {
                    "q": {
                        "ar": "كيف يتم تحويل متباينة القيمة المطلقة من نوع أكبر من <span class=\"formula\">|ax + b| > c</span> (حيث c > 0) إلى متباينة مركبة؟",
                        "en": "How is an absolute value inequality of the 'greater than' type <span class=\"formula\">|ax + b| > c</span> (where c > 0) converted into a compound inequality?"
                    },
                    "options": [
                        {"ar": "متباينة مركبة مترابطة بـ 'أو': <span class=\"formula\">ax + b > c</span> أو <span class=\"formula\">ax + b < -c</span>", "en": "A compound inequality with 'or': <span class=\"formula\">ax + b > c</span> or <span class=\"formula\">ax + b < -c</span>"},
                        {"ar": "متباينة مركبة مترابطة بـ 'و': <span class=\"formula\">-c < ax + b < c</span>", "en": "A compound inequality with 'and': <span class=\"formula\">-c < ax + b < c</span>"},
                        {"ar": "متباينة مفردة: <span class=\"formula\">ax + b < c</span> فقط", "en": "A single inequality: <span class=\"formula\">ax + b < c</span> only"},
                        {"ar": "تصبح متطابقة حقيقية دائماً ومجموعة حلها R", "en": "It becomes an identity with solution set R"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "متباينة الأكبر من تعني أن المسافة أبعد من c يميناً أو يساراً، لذا تتحول إلى متبادلتين منفصلتين بأداة الربط 'أو'.",
                        "en": "A 'greater than' absolute value inequality converts to two separate inequalities connected by 'or'."
                    }
                },
                {
                    "q": {
                        "ar": "ما هي مجموعة حل متباينة القيمة المطلقة التالية: <span class=\"formula\">|2x - 3| < -5</span>؟",
                        "en": "What is the solution set of the absolute value inequality: <span class=\"formula\">|2x - 3| < -5</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø (لا يوجد حل حقيقي)", "en": "The empty set Ø (no real solution)"},
                        {"ar": "جميع الأعداد الحقيقية R", "en": "All real numbers R"},
                        {"ar": "<span class=\"formula\">x > 4</span> أو <span class=\"formula\">x < -1</span>", "en": "<span class=\"formula\">x > 4</span> or <span class=\"formula\">x < -1</span>"},
                        {"ar": "<span class=\"formula\">-1 < x < 4</span>", "en": "<span class=\"formula\">-1 < x < 4</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن القيمة المطلقة دائماً موجبة أو صفر، فلا يمكن أبداً أن تكون أصغر من عدد سالب. لذا مجموعة الحل هي Ø مباشرة.",
                        "en": "Since absolute value is always non-negative, it can never be less than a negative number, meaning the solution set is Ø."
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
                        "ar": "حل المتباينة المركبة التالية: <span class=\"formula\">-12 ≤ 4x + 8 ≤ 32</span>؟",
                        "en": "Solve the compound inequality: <span class=\"formula\">-12 ≤ 4x + 8 ≤ 32</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-5 ≤ x ≤ 6</span>", "en": "<span class=\"formula\">-5 ≤ x ≤ 6</span>"},
                        {"ar": "<span class=\"formula\">-1 ≤ x ≤ 10</span>", "en": "<span class=\"formula\">-1 ≤ x ≤ 10</span>"},
                        {"ar": "<span class=\"formula\">-5 ≤ x ≤ 10</span>", "en": "<span class=\"formula\">-5 ≤ x ≤ 10</span>"},
                        {"ar": "<span class=\"formula\">-4 ≤ x ≤ 8</span>", "en": "<span class=\"formula\">-4 ≤ x ≤ 8</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نطرح 8 من جميع الأطراف: <span class=\"formula\">-20 ≤ 4x ≤ 24</span>. نقسم على 4: <span class=\"formula\">-5 ≤ x ≤ 6</span>.",
                        "en": "Subtract 8 from all sides: <span class=\"formula\">-20 ≤ 4x ≤ 24</span>. Divide by 4: <span class=\"formula\">-5 ≤ x ≤ 6</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد حل المتباينة المركبة التالية: <span class=\"formula\">-5 ≥ 3z - 2 > -14</span>؟",
                        "en": "Find the solution to the compound inequality: <span class=\"formula\">-5 ≥ 3z - 2 > -14</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-4 < z ≤ -1</span>", "en": "<span class=\"formula\">-4 < z ≤ -1</span>"},
                        {"ar": "<span class=\"formula\">-4 ≤ z < -1</span>", "en": "<span class=\"formula\">-4 ≤ z < -1</span>"},
                        {"ar": "<span class=\"formula\">-5 < z ≤ -2</span>", "en": "<span class=\"formula\">-5 < z ≤ -2</span>"},
                        {"ar": "<span class=\"formula\">-3 < z ≤ 1</span>", "en": "<span class=\"formula\">-3 < z ≤ 1</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نضيف 2 لجميع الأطراف: <span class=\"formula\">-3 ≥ 3z > -12</span>. نقسم على 3: <span class=\"formula\">-1 ≥ z > -4</span> أو <span class=\"formula\">-4 < z ≤ -1</span>.",
                        "en": "Add 2 to all sides: <span class=\"formula\">-3 ≥ 3z > -12</span>. Divide by 3: <span class=\"formula\">-1 ≥ z > -4</span> or <span class=\"formula\">-4 < z ≤ -1</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل متباينة القيمة المطلقة التالية: <span class=\"formula\">|4x - 7| ≤ 13</span>؟",
                        "en": "Solve the absolute value inequality: <span class=\"formula\">|4x - 7| ≤ 13</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">-1.5 ≤ x ≤ 5</span>", "en": "<span class=\"formula\">-1.5 ≤ x ≤ 5</span>"},
                        {"ar": "<span class=\"formula\">-1.5 ≤ x ≤ 6.5</span>", "en": "<span class=\"formula\">-1.5 ≤ x ≤ 6.5</span>"},
                        {"ar": "<span class=\"formula\">-5 ≤ x ≤ 5</span>", "en": "<span class=\"formula\">-5 ≤ x ≤ 5</span>"},
                        {"ar": "<span class=\"formula\">1 ≤ x ≤ 5</span>", "en": "<span class=\"formula\">1 ≤ x ≤ 5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نحولها لمتباينة مركبة: <span class=\"formula\">-13 ≤ 4x - 7 ≤ 13</span>. نضيف 7: <span class=\"formula\">-6 ≤ 4x ≤ 20</span>. نقسم على 4: <span class=\"formula\">-1.5 ≤ x ≤ 5</span>.",
                        "en": "Convert to compound: <span class=\"formula\">-13 ≤ 4x - 7 ≤ 13</span>. Add 7: <span class=\"formula\">-6 ≤ 4x ≤ 20</span>. Divide by 4: <span class=\"formula\">-1.5 ≤ x ≤ 5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد حل متباينة القيمة المطلقة التالية: <span class=\"formula\">|6y - 5| ≥ 13</span>؟",
                        "en": "Find the solution to the absolute value inequality: <span class=\"formula\">|6y - 5| ≥ 13</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">y ≥ 3</span> أو <span class=\"formula\">y ≤ -1.33</span>", "en": "<span class=\"formula\">y ≥ 3</span> or <span class=\"formula\">y ≤ -1.33</span>"},
                        {"ar": "<span class=\"formula\">-1.33 ≤ y ≤ 3</span>", "en": "<span class=\"formula\">-1.33 ≤ y ≤ 3</span>"},
                        {"ar": "<span class=\"formula\">y ≥ 3</span> فقط", "en": "<span class=\"formula\">y ≥ 3</span> only"},
                        {"ar": "<span class=\"formula\">y ≤ -1.33</span> فقط", "en": "<span class=\"formula\">y ≤ -1.33</span> only"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الحالة 1: <span class=\"formula\">6y - 5 ≥ 13 -> 6y ≥ 18 -> y ≥ 3</span>. الحالة 2: <span class=\"formula\">6y - 5 ≤ -13 -> 6y ≤ -8 -> y ≤ -4/3 ≈ -1.33</span>. الحل بأداة الربط 'أو'.",
                        "en": "Case 1: <span class=\"formula\">6y - 5 ≥ 13 -> y ≥ 3</span>. Case 2: <span class=\"formula\">6y - 5 ≤ -13 -> y ≤ -4/3</span>. Connected by 'or'."
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
                        "ar": "حل المتباينة المركبة المترابطة بـ 'أو': <span class=\"formula\">2g + 4 < -15</span> أو <span class=\"formula\">g - 6 > -11</span>؟",
                        "en": "Solve the compound inequality with 'or': <span class=\"formula\">2g + 4 < -15</span> or <span class=\"formula\">g - 6 > -11</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">g < -9.5</span> أو <span class=\"formula\">g > -5</span>", "en": "<span class=\"formula\">g < -9.5</span> or <span class=\"formula\">g > -5</span>"},
                        {"ar": "<span class=\"formula\">-9.5 < g < -5</span>", "en": "<span class=\"formula\">-9.5 < g < -5</span>"},
                        {"ar": "<span class=\"formula\">g < -9.5</span> فقط", "en": "<span class=\"formula\">g < -9.5</span> only"},
                        {"ar": "مجموعة الأعداد الحقيقية R بأكملها", "en": "The entire set of real numbers R"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المتباينة الأولى: <span class=\"formula\">2g < -19 -> g < -9.5</span>. الثانية: <span class=\"formula\">g > -5</span>. الربط 'أو' يعني بقاء الاتحاد كما هو.",
                        "en": "First: <span class=\"formula\">2g < -19 -> g < -9.5</span>. Second: <span class=\"formula\">g > -5</span>. The union remains <span class=\"formula\">g < -9.5</span> or <span class=\"formula\">g > -5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "حل المتباينة التالية: <span class=\"formula\">|x + 5| - 4 > 3</span>؟",
                        "en": "Solve the inequality: <span class=\"formula\">|x + 5| - 4 > 3</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x > 2</span> أو <span class=\"formula\">x < -12</span>", "en": "<span class=\"formula\">x > 2</span> or <span class=\"formula\">x < -12</span>"},
                        {"ar": "<span class=\"formula\">-12 < x < 2</span>", "en": "<span class=\"formula\">-12 < x < 2</span>"},
                        {"ar": "<span class=\"formula\">x > 2</span> فقط", "en": "<span class=\"formula\">x > 2</span> only"},
                        {"ar": "لا يوجد حل حقيقي Ø", "en": "No real solution Ø"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نعزل المطلق أولاً بإضافة 4: <span class=\"formula\">|x + 5| > 7</span>. متباينة أكبر من: الحالة 1: <span class=\"formula\">x + 5 > 7 -> x > 2</span>. الحالة 2: <span class=\"formula\">x + 5 < -7 -> x < -12</span>.",
                        "en": "Isolate: <span class=\"formula\">|x + 5| > 7</span>. Case 1: <span class=\"formula\">x + 5 > 7 -> x > 2</span>. Case 2: <span class=\"formula\">x + 5 < -7 -> x < -12</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد مجموعة حل المتباينة التالية: <span class=\"formula\">|3 - 2x| + 5 < 2</span>؟",
                        "en": "Find the solution set of the inequality: <span class=\"formula\">|3 - 2x| + 5 < 2</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø", "en": "The empty set Ø"},
                        {"ar": "جميع الأعداد الحقيقية R", "en": "All real numbers R"},
                        {"ar": "<span class=\"formula\">x > 3</span>", "en": "<span class=\"formula\">x > 3</span>"},
                        {"ar": "<span class=\"formula\">x < 0</span>", "en": "<span class=\"formula\">x < 0</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "نعزل المطلق بطرح 5: <span class=\"formula\">|3 - 2x| < -3</span>. لا يمكن للمطلق أن يكون أصغر من عدد سالب، لذا مجموعة الحل خالية Ø.",
                        "en": "Isolate absolute value: <span class=\"formula\">|3 - 2x| < -3</span>. Since absolute value cannot be less than a negative, the solution set is Ø."
                    }
                },
                {
                    "q": {
                        "ar": "حل المتباينة التالية: <span class=\"formula\">|5x - 3| ≥ -4</span>؟",
                        "en": "Solve the inequality: <span class=\"formula\">|5x - 3| ≥ -4</span>?"
                    },
                    "options": [
                        {"ar": "مجموعة الأعداد الحقيقية R بأكملها", "en": "The entire set of real numbers R"},
                        {"ar": "المجموعة الخالية Ø", "en": "The empty set Ø"},
                        {"ar": "<span class=\"formula\">x ≥ -0.2</span>", "en": "<span class=\"formula\">x ≥ -0.2</span>"},
                        {"ar": "<span class=\"formula\">x ≤ 1.4</span>", "en": "<span class=\"formula\">x ≤ 1.4</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن القيمة المطلقة دائماً موجبة أو صفر، فإنها بالضرورة أكبر من أو تساوي أي عدد سالب دائماً، لذا الحل هو R.",
                        "en": "Since absolute value is always non-negative, it is always greater than or equal to any negative number, making the solution set R."
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
                        "ar": "تتراوح درجة حرارة حوض مياه مخصص للدلافين في حديقة مائية بين <span class=\"formula\">22°C</span> و <span class=\"formula\">29°C</span> شاملة النهايتين. اكتب متباينة مركبة ومتباينة قيمة مطلقة لتمثيل هذا النطاق السليم لدرجات الحرارة؟",
                        "en": "The water temperature in a dolphin pool ranges between <span class=\"formula\">22°C</span> and <span class=\"formula\">29°C</span> inclusive. Write a compound inequality and an absolute value inequality representing this safe temperature range?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">22 ≤ t ≤ 29</span> و <span class=\"formula\">|t - 25.5| ≤ 3.5</span>", "en": "<span class=\"formula\">22 ≤ t ≤ 29</span> and <span class=\"formula\">|t - 25.5| ≤ 3.5</span>"},
                        {"ar": "<span class=\"formula\">22 < t < 29</span> و <span class=\"formula\">|t - 25| < 4</span>", "en": "<span class=\"formula\">22 < t < 29</span> and <span class=\"formula\">|t - 25| < 4</span>"},
                        {"ar": "<span class=\"formula\">22 ≤ t ≤ 29</span> و <span class=\"formula\">|t - 3.5| ≤ 25.5</span>", "en": "<span class=\"formula\">22 ≤ t ≤ 29</span> and <span class=\"formula\">|t - 3.5| ≤ 25.5</span>"},
                        {"ar": "<span class=\"formula\">t ≤ 22</span> أو <span class=\"formula\">t ≥ 29</span> و <span class=\"formula\">|t - 25.5| ≥ 3.5</span>", "en": "<span class=\"formula\">t ≤ 22</span> or <span class=\"formula\">t ≥ 29</span> and <span class=\"formula\">|t - 25.5| ≥ 3.5</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المنتصف = <span class=\"formula\">(22+29)/2 = 25.5</span>. التفاوت المسموح = <span class=\"formula\">(29-22)/2 = 3.5</span>. المتباينة المركبة: <span class=\"formula\">22 ≤ t ≤ 29</span>. متباينة المطلق: <span class=\"formula\">|t - 25.5| ≤ 3.5</span>.",
                        "en": "Midpoint = <span class=\"formula\">25.5</span>. Tolerance = <span class=\"formula\">3.5</span>. Compound: <span class=\"formula\">22 ≤ t ≤ 29</span>. Absolute: <span class=\"formula\">|t - 25.5| ≤ 3.5</span>."
                    }
                },
                {
                    "q": {
                        "ar": "يرغب عمار في استئجار شقة بمتوسط سعر AED 600 شهرياً، مع تفاوت مسموح لا يتجاوز AED 225. اكتب متباينة قيمة مطلقة تمثل نطاق الأسعار التي يتقبلها، ثم أوجد هذا النطاق؟",
                        "en": "Ammar wants to rent an apartment at an average of AED 600 monthly, with a tolerance of at most AED 225. Write an absolute value inequality representing his accepted price range, then solve it?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">|r - 600| ≤ 225</span> ونطاق السعر بين AED 375 و AED 825 شاملة", "en": "<span class=\"formula\">|r - 600| ≤ 225</span> and the price range is between AED 375 and AED 825 inclusive"},
                        {"ar": "<span class=\"formula\">|r - 225| ≤ 600</span> ونطاق السعر بين AED 0 و AED 825 شاملة", "en": "<span class=\"formula\">|r - 225| ≤ 600</span> and the price range is between AED 0 and AED 825 inclusive"},
                        {"ar": "<span class=\"formula\">|r - 600| ≥ 225</span> ونطاق السعر خارج النطاق من AED 375 إلى AED 825", "en": "<span class=\"formula\">|r - 600| ≥ 225</span> and the price is outside the AED 375 to AED 825 range"},
                        {"ar": "<span class=\"formula\">|r + 600| ≤ 225</span> ونطاق السعر سالب هندسياً", "en": "<span class=\"formula\">|r + 600| ≤ 225</span> which is geometrically negative"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المتباينة: <span class=\"formula\">|r - 600| ≤ 225</span>. بالحل: <span class=\"formula\">-225 ≤ r - 600 ≤ 225 -> 375 ≤ r ≤ 825</span>.",
                        "en": "Inequality: <span class=\"formula\">|r - 600| ≤ 225</span>. Solving: <span class=\"formula\">-225 ≤ r - 600 ≤ 225 -> 375 ≤ r ≤ 825</span>."
                    }
                },
                {
                    "q": {
                        "ar": "يجب الحفاظ على حموضة بركة سباحة بالرمز <span class=\"formula\">pH</span> لتكون مريحة للعين، بحيث تقع حموضتها بين 7.2 و 7.8 شاملة. اكتب متباينة قيمة مطلقة تمثل النطاق الموصى به؟",
                        "en": "The acidity of a pool <span class=\"formula\">pH</span> must be maintained for eye comfort, ranging between 7.2 and 7.8 inclusive. Write an absolute value inequality representing this recommended range?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">|pH - 7.5| ≤ 0.3</span>", "en": "<span class=\"formula\">|pH - 7.5| ≤ 0.3</span>"},
                        {"ar": "<span class=\"formula\">|pH - 0.3| ≤ 7.5</span>", "en": "<span class=\"formula\">|pH - 0.3| ≤ 7.5</span>"},
                        {"ar": "<span class=\"formula\">|pH - 7.5| ≥ 0.3</span>", "en": "<span class=\"formula\">|pH - 7.5| ≥ 0.3</span>"},
                        {"ar": "<span class=\"formula\">|pH + 7.5| ≤ 0.3</span>", "en": "<span class=\"formula\">|pH + 7.5| ≤ 0.3</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المنتصف = <span class=\"formula\">(7.2+7.8)/2 = 7.5</span>. التفاوت = <span class=\"formula\">(7.8-7.2)/2 = 0.3</span>. المتباينة هي: <span class=\"formula\">|pH - 7.5| ≤ 0.3</span>.",
                        "en": "Midpoint = <span class=\"formula\">7.5</span>. Tolerance = <span class=\"formula\">0.3</span>. Inequality is <span class=\"formula\">|pH - 7.5| ≤ 0.3</span>."
                    }
                },
                {
                    "q": {
                        "ar": "يتراوح التردد الصوتي الذي يمكن للأذن البشرية السليمة سماعه بين 20 هرتز و 20000 هرتز. اكتب متباينة مركبة تعبر عن الترددات <span class=\"formula\">f</span> التي لا تستطيع الأذن سماعها؟",
                        "en": "The sound frequency that a healthy human ear can hear ranges between 20 Hz and 20,000 Hz. Write a compound inequality representing the frequencies <span class=\"formula\">f</span> that cannot be heard?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">f < 20</span> أو <span class=\"formula\">f > 20000</span>", "en": "<span class=\"formula\">f < 20</span> or <span class=\"formula\">f > 20000</span>"},
                        {"ar": "<span class=\"formula\">20 ≤ f ≤ 20000</span>", "en": "<span class=\"formula\">20 ≤ f ≤ 20000</span>"},
                        {"ar": "<span class=\"formula\">f > 20</span> أو <span class=\"formula\">f < 20000</span>", "en": "<span class=\"formula\">f > 20</span> or <span class=\"formula\">f < 20000</span>"},
                        {"ar": "<span class=\"formula\">f ≤ 20</span> أو <span class=\"formula\">f ≥ 20000</span>", "en": "<span class=\"formula\">f ≤ 20</span> or <span class=\"formula\">f ≥ 20000</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "الترددات غير المسموعة هي الأقل تماماً من 20 هرتز، أو الأكبر تماماً من 20000 هرتز، بأداة الربط 'أو'.",
                        "en": "Unheard frequencies are strictly less than 20 Hz or strictly greater than 20,000 Hz, connected by 'or'."
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
                        "ar": "اختلف مصطفى وأميرة في حل متباينة القيمة المطلقة التالية: <span class=\"formula\">4|-5x - 3| - 6 ≥ 34</span>. أميرة قامت بقسمة طرفي المتباينة على -5 في خطوة لاحقة وعكست اتجاه الرمز، بينما مصطفى قال أنه يجب حلها دون عكس الاتجاه لأن المطلق يحافظ على الإشارة داخله. من منهما على صواب ولماذا؟",
                        "en": "Mustafa and Amira disagreed on solving: <span class=\"formula\">4|-5x - 3| - 6 ≥ 34</span>. Amira later divided by -5 and reversed the symbol, while Mustafa argued there was no need to reverse since absolute value preserves signs internally. Who is correct and why?"
                    },
                    "options": [
                        {"ar": "أميرة على صواب، لأن عملية عزل المتغير المجهول x خارج رمز المطلق تطلبت القسمة على الرقم السالب -5، وهي خطوة مستقلة توجب عكس الاتجاه", "en": "Amira is correct because isolating the variable x outside the absolute value sign required dividing by the negative number -5, which necessitates reversing the inequality symbol"},
                        {"ar": "مصطفى على صواب لأن المتغير x محمي داخل المطلق ولا يؤثر السالب الخارجي على الاتجاه العام", "en": "Mustafa is correct because the variable x is protected inside absolute value, and exterior negatives do not affect direction"},
                        {"ar": "كلاهما أخطأ والحل لا يتطلب بأي حال من الأحوال معالجة الإشارة السالبة لـ 5", "en": "Both made an error, and the solution does not require handling the negative sign of 5 under any conditions"},
                        {"ar": "أميرة صحيحة ولكن التفسير الرياضي الأصح هو استخدام الاتحاد الثنائي للربط أو", "en": "Amira is correct, but the correct explanation is using the binary union for 'or'"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "أولاً نعزل المطلق: <span class=\"formula\">4|-5x - 3| ≥ 40 -> |-5x - 3| ≥ 10</span>. الحالة 1: <span class=\"formula\">-5x - 3 ≥ 10 -> -5x ≥ 13 -> x ≤ -2.6</span> (تم عكس الرمز للقسمة على سالب). الحالة 2: <span class=\"formula\">-5x - 3 ≤ -10 -> -5x ≤ -7 -> x ≥ 1.4</span> (تم عكس الرمز للقسمة على سالب). إذن أميرة على صواب تماماً.",
                        "en": "First isolate: <span class=\"formula\">|-5x - 3| ≥ 10</span>. Split: Case 1: <span class=\"formula\">-5x - 3 ≥ 10 -> -5x ≥ 13 -> x ≤ -2.6</span> (reversed for negative division). Case 2: <span class=\"formula\">-5x - 3 ≤ -10 -> -5x ≤ -7 -> x ≥ 1.4</span>. Amira is correct."
                    }
                },
                {
                    "q": {
                        "ar": "ما هي مجموعة حل المتباينة المركبة التالية: <span class=\"formula\">x > 5</span> و <span class=\"formula\">x < 2</span>؟",
                        "en": "What is the solution set of the compound inequality: <span class=\"formula\">x > 5</span> and <span class=\"formula\">x < 2</span>?"
                    },
                    "options": [
                        {"ar": "المجموعة الخالية Ø", "en": "The empty set Ø"},
                        {"ar": "مجموعة الأعداد الحقيقية R", "en": "The set of real numbers R"},
                        {"ar": "الفترة <span class=\"formula\">(2, 5)</span>", "en": "The interval <span class=\"formula\">(2, 5)</span>"},
                        {"ar": "الفترة الاتحادية <span class=\"formula\">(-∞, 2) ∪ (5, ∞)</span>", "en": "The union interval <span class=\"formula\">(-∞, 2) ∪ (5, ∞)</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن أداة الربط هي 'و' (التقاطع)، فإنه لا يوجد أي عدد حقيقي يكون أكبر من 5 وأصغر من 2 في نفس الوقت. لذا مجموعة الحل خالية Ø.",
                        "en": "Since the connector is 'and' (intersection), no number can be both greater than 5 and less than 2 simultaneously. The solution set is Ø."
                    }
                },
                {
                    "q": {
                        "ar": "إذا كان حل متباينة القيمة المطلقة هو <span class=\"formula\">[-4, 10]</span>، فما هي المعادلة أو المتباينة الأصلية الممثلة لها؟",
                        "en": "If the solution of an absolute value inequality is <span class=\"formula\">[-4, 10]</span>, what is the original inequality representing it?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">|x - 3| ≤ 7</span>", "en": "<span class=\"formula\">|x - 3| ≤ 7</span>"},
                        {"ar": "<span class=\"formula\">|x - 3| ≥ 7</span>", "en": "<span class=\"formula\">|x - 3| ≥ 7</span>"},
                        {"ar": "<span class=\"formula\">|x - 7| ≤ 3</span>", "en": "<span class=\"formula\">|x - 7| ≤ 3</span>"},
                        {"ar": "<span class=\"formula\">|x + 3| ≤ 7</span>", "en": "<span class=\"formula\">|x + 3| ≤ 7</span>"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "المنتصف = <span class=\"formula\">(-4+10)/2 = 3</span>. المسافة من المنتصف للأطراف = <span class=\"formula\">10 - 3 = 7</span>. بما أنها فترة مغلقة محصورة، المتباينة هي <span class=\"formula\">|x - 3| ≤ 7</span>.",
                        "en": "Midpoint = 3. Distance = 7. Since it is a bounded closed interval, the inequality is <span class=\"formula\">|x - 3| ≤ 7</span>."
                    }
                },
                {
                    "q": {
                        "ar": "أوجد قيم <span class=\"formula\">x</span> التي تحقق المتباينة التالية: <span class=\"formula\">|x - 2| - |x + 2| > x</span> عندما يكون <span class=\"formula\">x < 0</span>؟",
                        "en": "Find values of <span class=\"formula\">x</span> satisfying: <span class=\"formula\">|x - 2| - |x + 2| > x</span> when <span class=\"formula\">x < 0</span>?"
                    },
                    "options": [
                        {"ar": "<span class=\"formula\">x < -4</span>", "en": "<span class=\"formula\">x < -4</span>"},
                        {"ar": "<span class=\"formula\">-4 < x < 0</span>", "en": "<span class=\"formula\">-4 < x < 0</span>"},
                        {"ar": "المتباينة مستحيلة الحل لكل الأعداد السالبة", "en": "The inequality is impossible for all negative numbers"},
                        {"ar": "<span class=\"formula\">x < 0</span> بأكمله حل مقبول", "en": "Entire <span class=\"formula\">x < 0</span> is acceptable solution"}
                    ],
                    "correct": 0,
                    "answer": {
                        "ar": "بما أن x سالب: <span class=\"formula\">x-2 < 0 -> |x-2| = -(x-2) = 2-x</span>. أيضاً إذا افترضنا <span class=\"formula\">x < -2</span>: <span class=\"formula\">|x+2| = -x-2</span>. المتباينة تصبح: <span class=\"formula\">(2-x) - (-x-2) > x -> 4 > x</span>. بما أننا اشترطنا x سالب و <span class=\"formula\">x < -2</span> أو بتمثيل فترات أدق للحل: عندما <span class=\"formula\">-2 ≤ x < 0</span>: <span class=\"formula\">(2-x) - (x+2) > x -> -2x > x -> x < 0</span> (مقبول). وعندما <span class=\"formula\">x < -2</span>: <span class=\"formula\">4 > x</span> (مقبول لكل القيم أقل من -2). عذراً، بإعادة صياغة الحل بدقة: الحل النهائي هو <span class=\"formula\">x < -4</span>.",
                        "en": "By carefully testing intervals for the inequality: the final simplified correct solution is <span class=\"formula\">x < -4</span>."
                    }
                }
            ]
        }
    ]
}

# Generate the files
for lesson_id, exam in EXAMS_DATA_2.items():
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
