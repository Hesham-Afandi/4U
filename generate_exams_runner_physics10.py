# -*- coding: utf-8 -*-
import os
import json
from generate_general_math_exams import TEMPLATE

# Modify the template to match Grade 10 Advanced Physics
G10_ADV_PHY_TEMPLATE = TEMPLATE.replace("الصف الحادي عشر عام", "الصف العاشر متقدم")\
                               .replace("الحادي عشر عام", "العاشر متقدم")\
                               .replace("Grade 11 General", "Grade 10 Advanced")\
                               .replace("Grade 11", "Grade 10")\
                               .replace("رياضيات", "فيزياء")\
                               .replace("الرياضيات", "الفيزياء")\
                               .replace("Math", "Physics")\
                               .replace("Mathematics", "Physics")\
                               .replace("رياضيات الصف 11 عام", "فيزياء الصف 10 متقدم")

PHYSICS_EXAMS = [
    {
        "id": "10Adv-phy-T1-1.1-exam",
        "title_ar": "الوحدة 1: الحركة الدورية (الحركة التوافقية وقانون هوك والبندول ورنين الزنبرك)",
        "title_en": "Unit 1: Periodic Motion (Simple Harmonic Motion, Hooke's Law & Pendulum)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي مفاهيم الحركة التوافقية البسيطة وقانون هوك وثابت الزنبرك وطاقة الوضع المرونية وقوانين البندول البسيط ومفهوم الرنين الميكانيكي وتطبيقاته.",
        "sections": [
            {
                "title": {"ar": "🔹 الجزء الأول: الحركة التوافقية البسيطة والاهتزازات", "en": "🔹 Part 1: Simple Harmonic Motion & Oscillations"},
                "questions": [
                    {
                        "q": {"ar": "أي من الحركات التالية تعبر عن حركة دورية تتكرر في دورة منتظمة؟", "en": "Which of the following motions represents periodic motion repeating in a regular cycle?"},
                        "options": [
                            {"ar": "أرجوحة تتحرك ذهاباً وإياباً في مسارها", "en": "A swing moving back and forth in its path"},
                            {"ar": "سيارة تسير في خط مستقيم بسرعة ثابتة", "en": "A car moving in a straight line with constant speed"},
                            {"ar": "سقوط حجر سقوطاً حراً نحو الأرض", "en": "A stone falling freely towards the ground"},
                            {"ar": "رصاصة منطلقة من مدفع بسرعة عالية", "en": "A bullet fired from a cannon with high speed"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الحركة الدورية هي الحركة التي تتكرر في دورات منتظمة مثل الأرجوحة والبندول.", "en": "Periodic motion is motion that repeats in regular cycles, like a swing or a pendulum."}
                    },
                    {
                        "q": {"ar": "في الحركة التوافقية البسيطة، تتناسب القوة المعيدة التي تعيد الجسم إلى موضع اتزانه طردياً مع:", "en": "In simple harmonic motion, the restoring force that returns the object to its equilibrium position is directly proportional to:"},
                        "options": [
                            {"ar": "إزاحة الجسم عن موضع الاتزان", "en": "The displacement of the body from the equilibrium position"},
                            {"ar": "سرعة الجسم المتجهة أثناء حركته", "en": "The velocity of the body during its motion"},
                            {"ar": "كتلة الجسم المهتز الكلية", "en": "The total mass of the vibrating body"},
                            {"ar": "ثابت قوة الجاذبية الأرضية المعياري", "en": "The standard gravitational force constant"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تنص قوانين الحركة التوافقية البسيطة على أن القوة المعيدة تتناسب طردياً مع الإزاحة وتعاكسها في الاتجاه.", "en": "Simple harmonic motion laws state that the restoring force is directly proportional to displacement and opposite in direction."}
                    },
                    {
                        "q": {"ar": "تسمى أقصى مسافة يتحركها الجسم المهتز يميناً أو يساراً عن موضع اتزانه بـ:", "en": "The maximum distance the vibrating body moves to the right or left from its equilibrium position is called:"},
                        "options": [
                            {"ar": "سعة الاهتزازة (Amplitude)", "en": "Amplitude"},
                            {"ar": "الزمن الدوري (Period)", "en": "Period"},
                            {"ar": "التردد الموجي (Frequency)", "en": "Frequency"},
                            {"ar": "الرنين الميكانيكي (Resonance)", "en": "Resonance"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "سعة الاهتزازة هي أقصى إزاحة للجسم المهتز عن موضع سكونه أو اتزانه.", "en": "Amplitude is the maximum displacement of the vibrating body from its position of rest or equilibrium."}
                    },
                    {
                        "q": {"ar": "الزمن الذي يحتاجه الجسم المهتز لإكمال دورة كاملة يسمى:", "en": "The time required for a vibrating body to complete one full cycle is called:"},
                        "options": [
                            {"ar": "الزمن الدوري (T)", "en": "The Period (T)"},
                            {"ar": "التردد بالهرتز (f)", "en": "The Frequency (f)"},
                            {"ar": "السعة القصوى (A)", "en": "The Amplitude (A)"},
                            {"ar": "طول الموجة الافتراضي", "en": "The Wavelength"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الزمن الدوري هو الزمن اللازم لعمل دورة أو اهتزازة كاملة واحدة.", "en": "The period is the time needed to make one complete cycle or oscillation."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثاني: قانون هوك والزنبرك وطاقة الوضع المرونية", "en": "🔹 Part 2: Hooke's Law, Springs & Elastic Potential Energy"},
                "questions": [
                    {
                        "q": {"ar": "ينص قانون هوك على أن القوة المؤثرة في زنبرك تتناسب طردياً مع مقدار الاستطالة وفق العلاقة:", "en": "Hooke's Law states that the force exerted on a spring is directly proportional to the elongation according to the relation:"},
                        "options": [
                            {"ar": "F = -kx", "en": "F = -kx"},
                            {"ar": "F = -mv", "en": "F = -mv"},
                            {"ar": "F = -mg", "en": "F = -mg"},
                            {"ar": "F = -kx²", "en": "F = -kx²"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "قانون هوك يعبر عنه رياضياً بالصيغة F = -kx حيث k هو ثابت الزنبرك وx هو الاستطالة والرمز السالب يدل على القوة المعيدة.", "en": "Hooke's Law is mathematically expressed as F = -kx, where k is the spring constant and x is the elongation."}
                    },
                    {
                        "q": {"ar": "ما هي وحدة قياس ثابت الزنبرك (k) في النظام الدولي للوحدات (SI)؟", "en": "What is the SI unit of measurement for the spring constant (k)?"},
                        "options": [
                            {"ar": "N/m", "en": "N/m"},
                            {"ar": "N·m", "en": "N·m"},
                            {"ar": "kg·m/s", "en": "kg·m/s"},
                            {"ar": "J/m²", "en": "J/m²"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "ثابت الزنبرك يقاس بوحدة نيوتن لكل متر (N/m) وهي تعبر عن مدى صلابة ومقاومة الزنبرك.", "en": "The spring constant is measured in Newtons per meter (N/m), expressing the stiffness of the spring."}
                    },
                    {
                        "q": {"ar": "إذا علق جسم وزنه 15 N في زنبرك فاستطال بمقدار 0.3 m، فما قيمة ثابت هذا الزنبرك؟", "en": "If an object weighing 15 N is suspended from a spring causing it to stretch by 0.3 m, what is the spring constant?"},
                        "options": [
                            {"ar": "50 N/m", "en": "50 N/m"},
                            {"ar": "4.5 N/m", "en": "4.5 N/m"},
                            {"ar": "5 N/m", "en": "5 N/m"},
                            {"ar": "150 N/m", "en": "150 N/m"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "ثابت الزنبرك k = F / x = 15 / 0.3 = 50 N/m.", "en": "The spring constant k = F / x = 15 / 0.3 = 50 N/m."}
                    },
                    {
                        "q": {"ar": "تساوي طاقة الوضع المرونية (PE) المختزنة في زنبرك مستطيل بالصيغة:", "en": "The elastic potential energy (PE) stored in a stretched spring is equal to:"},
                        "options": [
                            {"ar": "PE = 0.5 k x²", "en": "PE = 0.5 k x²"},
                            {"ar": "PE = k x", "en": "PE = k x"},
                            {"ar": "PE = m g h", "en": "PE = m g h"},
                            {"ar": "PE = 0.5 m v²", "en": "PE = 0.5 m v²"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "طاقة الوضع المرونية المختزنة في الزنبرك تساوي نصف ثابت الزنبرك مضروباً في مربع الاستطالة.", "en": "The elastic potential energy stored in a spring is equal to half the spring constant times the square of the stretch."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثالث: البندول البسيط وقوانينه والجاذبية", "en": "🔹 Part 3: The Simple Pendulum, its Laws & Gravity"},
                "questions": [
                    {
                        "q": {"ar": "يتكون البندول البسيط من خيط خفيف معلق به كتلة، ويعتمد زمنه الدوري (T) بشكل أساسي على:", "en": "A simple pendulum consists of a light string with a suspended mass, and its period (T) depends on:"},
                        "options": [
                            {"ar": "طول خيط البندول وتسارع الجاذبية فقط", "en": "Length of the pendulum string and gravitational acceleration only"},
                            {"ar": "كتلة الثقل المعلق وسعة الاهتزازة فقط", "en": "Mass of the suspended weight and amplitude only"},
                            {"ar": "كتلة الثقل وطول خيط البندول معاً", "en": "Mass of the weight and length of the pendulum string together"},
                            {"ar": "سعة الاهتزازة ونوع المادة المصنوع منها الخيط", "en": "Amplitude and the type of material the string is made of"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "يعتمد الزمن الدوري للبندول البسيط على طول الخيط L وتسارع الجاذبية g وفق العلاقة T = 2π√(L/g) ولا يعتمد على الكتلة في السعات الصغيرة.", "en": "The period of a simple pendulum depends on string length L and gravitational acceleration g according to T = 2π√(L/g) and is independent of mass."}
                    },
                    {
                        "q": {"ar": "ماذا يحدث للزمن الدوري للبندول البسيط إذا قمنا بزيادة طول الخيط إلى أربعة أمثاله؟", "en": "What happens to the period of a simple pendulum if we increase the string length to four times its original length?"},
                        "options": [
                            {"ar": "يزداد الزمن الدوري إلى الضعف", "en": "The period increases to double"},
                            {"ar": "يزداد الزمن الدوري إلى أربعة أمثاله", "en": "The period increases to four times"},
                            {"ar": "يقل الزمن الدوري إلى النصف", "en": "The period decreases to half"},
                            {"ar": "يبقى الزمن الدوري ثابتاً دون أي تغيير", "en": "The period remains constant without any change"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "بما أن T تتناسب طردياً مع الجذر التربيعي للطول، فإن زيادة الطول 4 مرات تزيد الزمن الدوري بمقدار √4 = 2 (أي إلى الضعف).", "en": "Since T is directly proportional to the square root of length, increasing the length 4 times increases the period by √4 = 2 (i.e., doubles it)."}
                    },
                    {
                        "q": {"ar": "احسب الزمن الدوري التقريبي لبندول بسيط طول خيطه 0.99 m على سطح الأرض حيث تسارع الجاذبية g = 9.8 m/s²؟", "en": "Calculate the approximate period of a simple pendulum with string length of 0.99 m on Earth, where g = 9.8 m/s²?"},
                        "options": [
                            {"ar": "2.0 s", "en": "2.0 s"},
                            {"ar": "1.0 s", "en": "1.0 s"},
                            {"ar": "3.14 s", "en": "3.14 s"},
                            {"ar": "0.5 s", "en": "0.5 s"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "باستخدام القانون: T = 2π√(L/g) = 2 × 3.1416 × √(0.99 / 9.8) ≈ 2.0 s.", "en": "Using the formula: T = 2π√(L/g) = 2 × 3.1416 × √(0.99 / 9.8) ≈ 2.0 s."}
                    },
                    {
                        "q": {"ar": "عند أي نقطة تكون طاقة الحركة للبندول البسيط في قيمتها العظمى؟", "en": "At which point is the kinetic energy of a simple pendulum at its maximum value?"},
                        "options": [
                            {"ar": "عند موضع الاتزان (أخفض نقطة)", "en": "At the equilibrium position (lowest point)"},
                            {"ar": "عند أقصى إزاحة يميناً في حركته", "en": "At the maximum displacement to the right"},
                            {"ar": "عند أقصى إزاحة يساراً في حركته", "en": "At the maximum displacement to the left"},
                            {"ar": "تكون ثابتة ومتساوية عند جميع نقاط المسار", "en": "It is constant and equal at all points of the path"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تكون السرعة وبالتالي طاقة الحركة أكبر ما يمكن عند مرور البندول بموضع الاتزان حيث تكون طاقة الوضع صفرية.", "en": "The velocity and thus kinetic energy are maximum when the pendulum passes the equilibrium position, where potential energy is zero."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الرابع: ظاهرة الرنين والجاذبية وتطبيقاتها الميكانيكية", "en": "🔹 Part 4: Resonance, Gravity & Mechanical Applications"},
                "questions": [
                    {
                        "q": {"ar": "تسمى الحالة التي تحدث عندما يتم تطبيق قوى صغيرة في فترات زمنية منتظمة على جسم مهتز، مما يؤدي إلى زيادة سعة الاهتزاز بـ:", "en": "The phenomenon that occurs when small forces are applied at regular intervals to a vibrating body, leading to an increase in amplitude is:"},
                        "options": [
                            {"ar": "الرنين (Resonance)", "en": "Resonance"},
                            {"ar": "التخميد (Damping)", "en": "Damping"},
                            {"ar": "السرعة الحدية الميكانيكية", "en": "Terminal velocity"},
                            {"ar": "تأثير دوبلر السمعي", "en": "Doppler Effect"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الرنين يحدث عندما يتوافق تردد القوة الخارجية المؤثرة مع التردد الطبيعي لاهتزاز الجسم.", "en": "Resonance occurs when the frequency of the external force matches the natural frequency of the vibrating body."}
                    },
                    {
                        "q": {"ar": "أي مما يلي يعد تطبيقاً مباشراً على ظاهرة الرنين في الفيزياء الميكانيكية وحياتنا اليومية؟", "en": "Which of the following is a direct application of resonance in mechanical physics and daily life?"},
                        "options": [
                            {"ar": "دفع شخص على الأرجوحة بتوقيت دوري متوافق لزيادة الارتفاع", "en": "Pushing someone on a swing with regular matching timing to increase height"},
                            {"ar": "تصميم فرامل السيارات لزيادة الاحتكاك", "en": "Designing car brakes to increase friction"},
                            {"ar": "تقليص طول الزنبرك لزيادة ثابته", "en": "Shortening the spring to increase its constant"},
                            {"ar": "استخدام جدران عازلة للصوت في غرف التسجيل", "en": "Using soundproof walls in recording rooms"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "دفع الأرجوحة في أوقات محددة يتطابق مع ترددها الطبيعي هو من أشهر أمثلة الرنين الميكانيكي لزيادة السعة.", "en": "Pushing a swing at specific times corresponding to its natural frequency is one of the most famous examples of mechanical resonance."}
                    },
                    {
                        "q": {"ar": "ما هو مصدر القوة المعيدة التي تسبب الحركة التوافقية للبندول البسيط عند إزاحته عن مركزه؟", "en": "What is the source of the restoring force causing simple harmonic motion in a pendulum when displaced?"},
                        "options": [
                            {"ar": "مركبة قوة الجاذبية الموازية لمسار الحركة دائرية التماس", "en": "The component of gravitational force parallel to the circular path of motion"},
                            {"ar": "قوة الشد في الخيط المعلق التي تسحبه للأعلى", "en": "The tension force in the suspended string pulling it up"},
                            {"ar": "قوة مقاومة الهواء التي تدفعه لتثبيته في اتجاه محدد", "en": "The air resistance force pushing it to stabilize"},
                            {"ar": "القوة الناتجة عن القصور الذاتي للكتلة المعلقة في نهايته", "en": "The force resulting from the inertia of the suspended mass at its end"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "مركبة قوة الجاذبية الأرضية (mg sin θ) الموازية لمسار حركة البندول هي القوة المعيدة المسؤولة عن حركته الاهتزازية المرتجعة.", "en": "The component of gravity (mg sin θ) parallel to the pendulum's motion is the restoring force responsible for its oscillation."}
                    },
                    {
                        "q": {"ar": "إذا قمنا بنقل بندول بسيط يمتلك زمناً دورياً مقداره 2s على الأرض إلى القمر حيث تسارع الجاذبية سدس جاذبية الأرض، فماذا يحدث لزمنه الدوري؟", "en": "If we transport a simple pendulum with a period of 2s on Earth to the Moon where gravity is one-sixth of Earth's, what happens to its period?"},
                        "options": [
                            {"ar": "يزداد الزمن الدوري للبندول بشكل ملحوظ", "en": "The period of the pendulum increases significantly"},
                            {"ar": "يقل الزمن الدوري للبندول ويتحرك أسرع", "en": "The period of the pendulum decreases and it moves faster"},
                            {"ar": "يبقى الزمن الدوري ثابتاً كما هو دون تأثير", "en": "The period remains exactly the same without effect"},
                            {"ar": "ينعدم الزمن الدوري للبندول ويتوقف فوراً عن الاهتزاز", "en": "The period vanishes and it stops oscillating immediately"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "بما أن الجاذبية على القمر أقل، وبما أن الزمن الدوري يتناسب عكسياً مع جذر الجاذبية، فإن الزمن الدوري سيزداد بمقدار √6 مرات.", "en": "Since gravity on the Moon is lower, and because the period is inversely proportional to the square root of gravity, the period will increase."}
                    }
                ]
            }
        ]
    },
    {
        "id": "10Adv-phy-T1-2.1-exam",
        "title_ar": "الوحدة 2: خصائص الموجات (الموجات الميكانيكية والمستعرضة والطولية وخصائصها الرياضية)",
        "title_en": "Unit 2: Wave Properties (Mechanical, Transverse & Longitudinal Waves)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي أنواع الموجات (الميكانيكية، الطولية، المستعرضة، السطحية) وخصائصها الرياضية من سعة، طول موجي، زمن دوري، تردد، وسرعة انتشار الموجة وعلاقة طاقتها بالسعة.",
        "sections": [
            {
                "title": {"ar": "🔹 الجزء الأول: أنواع الموجات (الميكانيكية، المستعرضة، الطولية)", "en": "🔹 Part 1: Types of Waves (Mechanical, Transverse, Longitudinal)"},
                "questions": [
                    {
                        "q": {"ar": "تتميز الموجات الميكانيكية عن غيرها من الموجات بأنها تحتاج بالضرورة إلى:", "en": "Mechanical waves are distinguished from other waves by fundamentally requiring:"},
                        "options": [
                            {"ar": "وسط مادي للانتقال والانتشار من خلاله", "en": "A physical medium to propagate and travel through"},
                            {"ar": "مجال مغناطيسي قوي يحرك الإلكترونات", "en": "A strong magnetic field that moves electrons"},
                            {"ar": "مصدر ضوء ليزر أحادي اللون لتنشيطها", "en": "A monochromatic laser light source to activate them"},
                            {"ar": "فراغ تام وخالٍ من الهواء والجزئيات الكيميائية", "en": "A complete vacuum empty of air and chemical molecules"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الموجات الميكانيكية مثل الصوت وموجات الماء والزنبرك تتطلب وسطاً مادياً (صلب أو سائل أو غاز) لكي تنتقل.", "en": "Mechanical waves like sound, water, and spring waves require a physical medium (solid, liquid, or gas) to travel."}
                    },
                    {
                        "q": {"ar": "في الموجة المستعرضة، تهتز وتتحرك جزيئات الوسط في اتجاه:", "en": "In a transverse wave, the particles of the medium vibrate in a direction:"},
                        "options": [
                            {"ar": "عمودي على اتجاه انتشار الموجة نفسها", "en": "Perpendicular to the direction of the wave propagation"},
                            {"ar": "موازٍ تماماً لاتجاه انتشار الموجة نفسها", "en": "Perfectally parallel to the direction of the wave propagation"},
                            {"ar": "معاكس تماماً لاتجاه حركة الطاقة الموجية", "en": "Exactly opposite to the direction of wave energy"},
                            {"ar": "دائري حلزوني يرتد نحو المصدر الاهتزازي", "en": "Circular helical returning to the vibrational source"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الموجة المستعرضة تهتز جزيئاتها بشكل عمودي على خط انتشار الموجة مكونة قمم وقيعان.", "en": "Transverse wave particles vibrate perpendicular to the direction of wave propagation, forming crests and troughs."}
                    },
                    {
                        "q": {"ar": "تنتقل الموجات الطولية في الأوساط المادية على شكل:", "en": "Longitudinal waves propagate through physical media in the form of:"},
                        "options": [
                            {"ar": "تضاغطات وتخلخلات متتابعة موازية لاتجاه الحركة", "en": "Sequential compressions and rarefactions parallel to the motion"},
                            {"ar": "قمم مرتفعة وقيعان منخفضة عمودية على الحركة", "en": "High crests and low troughs perpendicular to the motion"},
                            {"ar": "حلقات دائرية متداخلة تتباعد عن المركز بسرعة ميكانيكية", "en": "Interlapping circular rings spreading from the center"},
                            {"ar": "أشعة مستقيمة متوازية لا يحدث لها انكسار مادي", "en": "Straight parallel rays that do not undergo refraction"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الموجات الطولية (مثل الصوت) تهتز جزيئاتها موازياً لخط الانتشار وتتكون من تضاغطات (تقارب) وتخلخلات (تباعد).", "en": "Longitudinal waves (like sound) vibrate parallel to propagation, consisting of compressions and rarefactions."}
                    },
                    {
                        "q": {"ar": "تعتبر موجات الماء السطحية مثالاً شهيراً على الموجات:", "en": "Surface water waves are a famous example of:"},
                        "options": [
                            {"ar": "التي تجمع حركتها بين الطولية والمستعرضة معاً (موجات سطحية)", "en": "Waves combining both longitudinal and transverse motion (surface waves)"},
                            {"ar": "المستعرضة البحتة التي تنتشر في الفراغ الكوني", "en": "Purely transverse waves propagating in cosmic vacuum"},
                            {"ar": "الطولية البحتة التي لا تمتلك قاعاً أو قمة اهتزازية", "en": "Purely longitudinal waves lacking any trough or crest"},
                            {"ar": "الكهرومغناطيسية ذات الترددات بالغة الارتفاع والخطورة", "en": "High frequency electromagnetic waves of extreme danger"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "موجات سطح الماء هي موجات سطحية تتحرك فيها الجزيئات في مسار دائري يدمج بين الحركة الطولية والمستعرضة.", "en": "Water surface waves are surface waves where particles move in a circular path, combining longitudinal and transverse motions."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثاني: الخصائص الرياضية للموجة (التردد، الطول الموجي، السرعة)", "en": "🔹 Part 2: Mathematical Wave Properties (Frequency, Wavelength, Speed)"},
                "questions": [
                    {
                        "q": {"ar": "تسمى المسافة بين قمتين متتاليتين أو قاعين متتاليين في الموجة المستعرضة بـ:", "en": "The distance between two consecutive crests or two consecutive troughs in a transverse wave is called:"},
                        "options": [
                            {"ar": "الطول الموجي (λ)", "en": "Wavelength (λ)"},
                            {"ar": "التردد الدوري (f)", "en": "Frequency (f)"},
                            {"ar": "سعة الموجة (A)", "en": "Wave Amplitude (A)"},
                            {"ar": "سرعة انتشار الموجة", "en": "Propagation Speed"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الطول الموجي (لامدا) هو المسافة بين نقطتين متتاليتين تهتزان بالطور نفسه، كقمتين متتاليتين.", "en": "Wavelength (lambda) is the distance between two consecutive in-phase points, such as two consecutive crests."}
                    },
                    {
                        "q": {"ar": "ما العلاقة الرياضية الصحيحة التي تربط بين سرعة الموجة (v) وترددها (f) وطولها الموجي (λ)؟", "en": "What is the correct mathematical relation linking wave speed (v), frequency (f), and wavelength (λ)?"},
                        "options": [
                            {"ar": "v = f · λ", "en": "v = f · λ"},
                            {"ar": "v = f / λ", "en": "v = f / λ"},
                            {"ar": "v = λ / f", "en": "v = λ / f"},
                            {"ar": "v = f + λ", "en": "v = f + λ"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "سرعة الموجة تساوي حاصل ضرب التردد في الطول الموجي: v = f · λ.", "en": "Wave speed equals the product of frequency and wavelength: v = f · λ."}
                    },
                    {
                        "q": {"ar": "إذا كانت سرعة موجة مائية 12 m/s وترددها 3 Hz، فما هو طولها الموجي؟", "en": "If a water wave travels at 12 m/s with a frequency of 3 Hz, what is its wavelength?"},
                        "options": [
                            {"ar": "4.0 m", "en": "4.0 m"},
                            {"ar": "36 m", "en": "36 m"},
                            {"ar": "0.25 m", "en": "0.25 m"},
                            {"ar": "15 m", "en": "15 m"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الطول الموجي λ = v / f = 12 / 3 = 4.0 m.", "en": "Wavelength λ = v / f = 12 / 3 = 4.0 m."}
                    },
                    {
                        "q": {"ar": "يقاس التردد بوحدة الهرتز (Hz)، والتي تعادل وتساوي رياضياً:", "en": "Frequency is measured in Hertz (Hz), which is mathematically equivalent to:"},
                        "options": [
                            {"ar": "1/s (أو s⁻¹)", "en": "1/s (or s⁻¹)"},
                            {"ar": "m/s", "en": "m/s"},
                            {"ar": "m·s", "en": "m·s"},
                            {"ar": "kg/s", "en": "kg/s"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التردد يعبر عن عدد الاهتزازات في الثانية الواحدة، وبالتالي وحدته هي مقلوب الثانية (s⁻¹).", "en": "Frequency represents the number of oscillations per second, so its unit is the inverse of a second (s⁻¹)."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثالث: سعة الموجة وعلاقتها بالطاقة والزمن", "en": "🔹 Part 3: Wave Amplitude, Energy & Time Relations"},
                "questions": [
                    {
                        "q": {"ar": "يعتمد مقدار الطاقة التي تنقلها الموجة الميكانيكية بشكل مباشر وصارم على:", "en": "The amount of energy transported by a mechanical wave depends directly and strictly on:"},
                        "options": [
                            {"ar": "مربع سعة الموجة (A²)", "en": "The square of the wave amplitude (A²)"},
                            {"ar": "التردد الخطي للموجة فقط", "en": "The linear frequency of the wave only"},
                            {"ar": "نوع الوسط المادي وسرعة انتشارها", "en": "The medium type and propagation speed"},
                            {"ar": "طول الموجة الهندسية المسجل", "en": "The geometric wavelength recorded"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تتناسب طاقة الموجة طردياً مع مربع سعتها (E ∝ A²). فإذا تضاعفت السعة مرتين، تزداد الطاقة المنقولة 4 مرات.", "en": "Wave energy is directly proportional to the square of its amplitude (E ∝ A²). Doubling the amplitude increases energy fourfold."}
                    },
                    {
                        "q": {"ar": "موجة صوتية تضاعفت سعتها إلى ثلاثة أمثال ما كانت عليه. كم مرة تزداد طاقة هذه الموجة الصوتية؟", "en": "A sound wave's amplitude is tripled. How many times does the energy of this sound wave increase?"},
                        "options": [
                            {"ar": "9 مرات", "en": "9 times"},
                            {"ar": "3 مرات", "en": "3 times"},
                            {"ar": "6 مرات", "en": "6 times"},
                            {"ar": "تبقى الطاقة ثابتة دون زيادة", "en": "The energy remains constant without increase"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "بما أن الطاقة تتناسب مع مربع السعة، فإن زيادة السعة 3 مرات تزيد الطاقة بمقدار 3² = 9 مرات.", "en": "Since energy is proportional to the square of amplitude, tripling the amplitude increases energy by 3² = 9 times."}
                    },
                    {
                        "q": {"ar": "ما العلاقة الرياضية التي تربط بين التردد (f) والزمن الدوري (T) للموجة؟", "en": "What is the mathematical relation linking wave frequency (f) and period (T)?"},
                        "options": [
                            {"ar": "f = 1 / T", "en": "f = 1 / T"},
                            {"ar": "f = T²", "en": "f = T²"},
                            {"ar": "f = 2πT", "en": "f = 2πT"},
                            {"ar": "f = T - 1", "en": "f = T - 1"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التردد والزمن الدوري يمثل كل منهما مقلوب الآخر، وبالتالي f = 1 / T.", "en": "Frequency and period are reciprocals of each other, hence f = 1 / T."}
                    },
                    {
                        "q": {"ar": "إذا كان الزمن الدوري للاهتزازة الميكانيكية يساوي 0.05 s، فما هو ترددها؟", "en": "If the period of a mechanical oscillation is 0.05 s, what is its frequency?"},
                        "options": [
                            {"ar": "20 Hz", "en": "20 Hz"},
                            {"ar": "50 Hz", "en": "50 Hz"},
                            {"ar": "5 Hz", "en": "5 Hz"},
                            {"ar": "0.05 Hz", "en": "0.05 Hz"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التردد f = 1 / T = 1 / 0.05 = 20 Hz.", "en": "Frequency f = 1 / T = 1 / 0.05 = 20 Hz."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الرابع: سرعة الموجات في الأوساط المختلفة وتفسير السلوك", "en": "🔹 Part 4: Wave Speed in Different Media & Behavior"},
                "questions": [
                    {
                        "q": {"ar": "تعتمد سرعة انتشار الموجة الميكانيكية (مثل الصوت) بشكل رئيسي وأساسي على:", "en": "The propagation speed of a mechanical wave (like sound) depends mainly on:"},
                        "options": [
                            {"ar": "خصائص الوسط الذي تنتقل فيه (كالمرونة والكثافة)", "en": "The properties of the medium it travels through (like elasticity & density)"},
                            {"ar": "تردد المصدر الاهتزازي المولد للموجة", "en": "The frequency of the vibrating source generating the wave"},
                            {"ar": "سعة الموجة ومقدار الطاقة المنقولة بها", "en": "The wave amplitude and the amount of energy transported"},
                            {"ar": "زاوية انطلاق الموجة من المصدر الأصلي", "en": "The angle at which the wave leaves the original source"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تحدد خصائص الوسط المادي (المرونة، الكثافة، درجة الحرارة) سرعة انتقال الموجات فيه ولا يغير التردد أو الطول الموجي السرعة في نفس الوسط.", "en": "Medium properties (elasticity, density, temperature) determine wave speed; changing frequency or wavelength does not affect speed in the same medium."}
                    },
                    {
                        "q": {"ar": "عندما تنتقل موجة من وسط مادي إلى وسط مادي آخر مختلف (مثلاً من الهواء إلى الماء)، فما هي الخاصية التي تظل ثابتة تماماً دون تغيير؟", "en": "When a wave transitions from one medium to another (e.g., air to water), which property remains strictly constant?"},
                        "options": [
                            {"ar": "تردد الموجة (f)", "en": "Wave frequency (f)"},
                            {"ar": "سرعة الموجة (v)", "en": "Wave speed (v)"},
                            {"ar": "الطول الموجي للموجة (λ)", "en": "Wavelength (λ)"},
                            {"ar": "سعة الموجة واتجاه انتشارها الدقيق", "en": "Wave amplitude and its precise propagation direction"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "يبقى تردد الموجة ثابتاً لأنه يعتمد على مصدر الاهتزاز الأصلي، بينما تتغير السرعة والطول الموجي تبعاً لتغير الوسط.", "en": "The frequency of the wave remains constant because it depends on the original vibration source, while speed and wavelength change."}
                    },
                    {
                        "q": {"ar": "سرعة انتشار الموجات الصوتية تكون أكبر ما يمكن في الأوساط المادية:", "en": "The propagation speed of sound waves is greatest in physical media that are:"},
                        "options": [
                            {"ar": "الصلبة لارتفاع معامل مرونتها وتقارب جزيئاتها", "en": "Solid, due to high elasticity and proximity of particles"},
                            {"ar": "السائلة لانخفاض كثافتها وقوة ترابط جزيئاتها", "en": "Liquid, due to low density and cohesive forces"},
                            {"ar": "الغازية لتخلخلها وحرية حركة جزيئاتها", "en": "Gaseous, due to low density and free molecular motion"},
                            {"ar": "الفراغية لعدم وجود أي مقاومة مادية تذكر", "en": "Vacuum, due to the total absence of physical resistance"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تنتقل موجات الصوت أسرع ما يمكن في المواد الصلبة لقوة ترابطها الكبيرة ومرونتها العالية، وتكون أبطأ ما يمكن في الغازات.", "en": "Sound waves travel fastest in solids because of strong molecular bonds and high elasticity, and slowest in gases."}
                    },
                    {
                        "q": {"ar": "موجة ترددها 100 Hz وطولها الموجي 3 m، تنتقل في وسط مادي. ما هي سرعة انتشار هذه الموجة؟", "en": "A wave with a frequency of 100 Hz and a wavelength of 3 m travels in a medium. What is the wave speed?"},
                        "options": [
                            {"ar": "300 m/s", "en": "300 m/s"},
                            {"ar": "33 m/s", "en": "33 m/s"},
                            {"ar": "0.03 m/s", "en": "0.03 m/s"},
                            {"ar": "3000 m/s", "en": "3000 m/s"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "السرعة v = f · λ = 100 × 3 = 300 m/s.", "en": "Speed v = f · λ = 100 × 3 = 300 m/s."}
                    }
                ]
            }
        ]
    },
    {
        "id": "10Adv-phy-T1-3.1-exam",
        "title_ar": "الوحدة 3: سلوك الموجات (الموجات عند الحدود، التداخل، الموجات المستقرة والانعكاس والانكسار)",
        "title_en": "Unit 3: Wave Behavior (Interference, Standing Waves, Reflection & Refraction)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي سلوك الموجات عند الحدود الفاصلة (الانعكاس، النفاذ) ومبدأ التراكب والتداخل البناء والهدام وتشكل الموجات المستقرة (العقد والبطون) وظاهرتي الانعكاس والانكسار في بعدين وقانون الانعكاس.",
        "sections": [
            {
                "title": {"ar": "🔹 الجزء الأول: الموجات عند الحدود ومبدأ التراكب", "en": "🔹 Part 1: Waves at Boundaries & The Superposition Principle"},
                "questions": [
                    {
                        "q": {"ar": "عندما تصطدم موجة منتشرة في حبل بحد فاصل صلب ومثبت بإحكام (نهاية ثابتة)، فإن الموجة المنعكسة المرتدة تكون:", "en": "When a wave propagating in a rope hits a solid, tightly fixed boundary (fixed end), the reflected wave is:"},
                        "options": [
                            {"ar": "مقلوبة (انقلاب في الطور بمقدار 180 درجة)", "en": "Inverted (180-degree phase shift)"},
                            {"ar": "معتدلة وفي الطور نفسه تماماً للموجة الساقطة", "en": "Upright and in the exact same phase as the incident wave"},
                            {"ar": "منعدمة كلياً لامتصاص الجدار لكل الطاقة الموجية", "en": "Completely absorbed by the wall, vanishing entirely"},
                            {"ar": "طولية بدلاً من كونها مستعرضة", "en": "Longitudinal instead of remaining transverse"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "عندما تصطدم الموجة بنهاية صلبة ومثبتة، فإن الجدار يؤثر بقوة مساوية ومعاكسة مما يسبب ارتداد النبضة الموجية مقلوبة رأساً على عقب.", "en": "When a wave hits a fixed end, the boundary exerts an equal and opposite force, causing the reflected wave to bounce back inverted."}
                    },
                    {
                        "q": {"ar": "إذا انتقلت نبضة موجية من حبل خفيف ومرن إلى حبل آخر ثقيل وسميك، فماذا يحدث للنبضة المنعكسة والنبضة النافذة؟", "en": "If a wave pulse moves from a light rope to a heavy, thick rope, what happens to the reflected and transmitted pulses?"},
                        "options": [
                            {"ar": "تنعكس النبضة مقلوبة، وتنفذ النبضة معتدلة", "en": "The reflected pulse is inverted, and the transmitted pulse is upright"},
                            {"ar": "تنعكس النبضة معتدلة، وتنفذ النبضة مقلوبة", "en": "The reflected pulse is upright, and the transmitted pulse is inverted"},
                            {"ar": "تنعكس وتنفذ النبضتان مقلوبتين تماماً", "en": "Both pulses are reflected and transmitted inverted"},
                            {"ar": "تنفذ النبضة بالكامل ولا ينعكس منها أي جزء", "en": "The pulse is fully transmitted with no reflection at all"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الحد الفاصل مع حبل أثقل يتصرف كحاجز صلب جزئياً فيعكس جزءاً من الموجة مقلوباً، بينما ينفذ الجزء الآخر في الحبل الأثقل دائماً معتدلاً.", "en": "The boundary with a heavier rope acts partially as a fixed support, reflecting an inverted pulse and transmitting an upright pulse."}
                    },
                    {
                        "q": {"ar": "ينص مبدأ التراكب (Principle of Superposition) على أن الإزاحة الناتجة عن التقاء موجتين أو أكثر تساوي:", "en": "The Principle of Superposition states that the displacement resulting from the meeting of two or more waves equals:"},
                        "options": [
                            {"ar": "المجموع المتجه للإزاحات الفردية الناتجة عن كل موجة بمفردها", "en": "The algebraic vector sum of the individual displacements of each wave"},
                            {"ar": "حاصل ضرب الإزاحات الفردية للموجات الملتقية", "en": "The product of the individual displacements of the meeting waves"},
                            {"ar": "متوسط إزاحة الموجة الكبرى مقسوماً على الصغرى", "en": "The average displacement of the larger wave divided by the smaller"},
                            {"ar": "صفراً دائماً بسبب تلاشي الموجات عند الالتقاء", "en": "Zero always due to waves canceling out upon meeting"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "مبدأ التراكب ينص على أن الإزاحة الكلية عند نقطة التقاء موجتين تساوي المجموع الجبري (المتجه) للإزاحات التي تحدثها كل موجة بشكل منفصل.", "en": "The superposition principle states that the total displacement when waves meet is the algebraic vector sum of their individual displacements."}
                    },
                    {
                        "q": {"ar": "تسمى الأثر الناتج عن تراكب موجتين أو أكثر في الوسط نفسه بـ:", "en": "The effect resulting from the superposition of two or more waves in the same medium is called:"},
                        "options": [
                            {"ar": "التداخل (Interference)", "en": "Interference"},
                            {"ar": "الانكسار المادي (Refraction)", "en": "Refraction"},
                            {"ar": "الرنين الذاتي (Resonance)", "en": "Resonance"},
                            {"ar": "تأثير دوبلر الحركي", "en": "Doppler Effect"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التداخل هو الظاهرة الناتجة عن التقاء وتراكب موجتين أو أكثر في الوسط نفسه وتكوين نمط إزاحة جديد.", "en": "Interference is the phenomenon resulting from the meeting and superposition of two or more waves in the same medium."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثاني: التداخل البناء والهدام والموجات المستقرة", "en": "🔹 Part 2: Constructive & Destructive Interference & Standing Waves"},
                "questions": [
                    {
                        "q": {"ar": "يحدث التداخل البناء (Constructive Interference) عندما يلتقي:", "en": "Constructive interference occurs when there is a meeting of:"},
                        "options": [
                            {"ar": "قمة موجة مع قمة موجة أخرى، أو قاع مع قاع", "en": "A crest with another crest, or a trough with a trough"},
                            {"ar": "قمة موجة مع قاع موجة أخرى معاكسة لها", "en": "A crest with a trough of another opposite wave"},
                            {"ar": "موجة طولية مع موجة مستعرضة في وسط غازي", "en": "A longitudinal wave with a transverse wave in a gaseous medium"},
                            {"ar": "موجتان متعامدتان تماماً في الطور والاتجاه", "en": "Two waves that are completely perpendicular in phase and direction"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التداخل البناء يحدث عندما تلتقي نبضات موجية في الاتجاه نفسه (قمة مع قمة أو قاع مع قاع) مما ينتج عنه سعة كلية كبرى.", "en": "Constructive interference occurs when wave pulses in the same direction meet (crest-to-crest or trough-to-trough), producing a larger amplitude."}
                    },
                    {
                        "q": {"ar": "ماذا ينتج عن التداخل الهدام التام لقمة وقاع متساويين تماماً في السعة ومعاكسين في الاتجاه؟", "en": "What results from the total destructive interference of a crest and a trough of equal amplitude and opposite direction?"},
                        "options": [
                            {"ar": "تلاشي الموجة مؤقتاً وانعدام السعة عند نقطة الالتقاء (إزاحة صفرية)", "en": "Temporary disappearance of the wave and zero amplitude at the meeting point"},
                            {"ar": "تضاعف سعة الموجة الناتجة إلى الضعف", "en": "Doubling of the resulting wave amplitude"},
                            {"ar": "انعكاس الموجتين وتحولهما إلى موجات كهرومغناطيسية", "en": "Reflection and conversion of both waves into electromagnetic waves"},
                            {"ar": "توليد حرارة عالية جداً في الحبل الناقل", "en": "Generating extremely high heat in the propagating rope"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التداخل الهدام التام يؤدي إلى إلغاء وتلاشي الإزاحات الفردية تماماً، فتصبح السعة المحصلة صفراً عند نقطة التراكب.", "en": "Total destructive interference leads to the complete cancellation of individual displacements, rendering the net amplitude zero."}
                    },
                    {
                        "q": {"ar": "تتشكل الموجة المستقرة (الواقفة - Standing Wave) في الحبل نتيجة تداخل:", "en": "A standing wave is formed in a rope as a result of the interference of:"},
                        "options": [
                            {"ar": "موجتين متساويتين في التردد والسعة وتنتشران في اتجاهين متعاكسين", "en": "Two waves equal in frequency and amplitude traveling in opposite directions"},
                            {"ar": "موجتين مختلفتين تماماً في التردد والسعة وتنتشران في الاتجاه نفسه", "en": "Two waves completely different in frequency and amplitude traveling in the same direction"},
                            {"ar": "موجات طولية من مصادر اهتزازية متعددة متباعدة", "en": "Longitudinal waves from multiple scattered vibrating sources"},
                            {"ar": "النبضات الساقطة فقط مع تلاشي النبضات المنعكسة ارتدادياً", "en": "Incident pulses only, with the complete decay of reflected pulses"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الموجة المستقرة تنشأ من تراكب موجتين لهما نفس التردد والسعة ولكنهما تسيران في اتجاهين متعاكسين (الموجة الساقطة والمنعكسة).", "en": "A standing wave arises from the superposition of two waves with the same frequency and amplitude traveling in opposite directions."}
                    },
                    {
                        "q": {"ar": "في نمط الموجات المستقرة، تسمى النقاط التي تكون فيها الإزاحة منعدمة تماماً (صفرية السعة) بـ:", "en": "In a standing wave pattern, the points where displacement is completely zero (zero amplitude) are called:"},
                        "options": [
                            {"ar": "العقد (Nodes)", "en": "Nodes"},
                            {"ar": "البطون (Antinodes)", "en": "Antinodes"},
                            {"ar": "القمم الموجية القصوى", "en": "Crests"},
                            {"ar": "بؤر التركيز الهندسي", "en": "Focus points"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "العقد (Nodes) هي النقاط الثابتة في الموجة المستقرة التي تكون إزاحتها صفراً دائماً نتيجة التداخل الهدام المستمر.", "en": "Nodes are the stationary points in a standing wave with zero displacement due to continuous destructive interference."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثالث: بطون الموجات المستقرة والتمثيل الهندسي", "en": "🔹 Part 3: Standing Wave Antinodes & Geometric Representation"},
                "questions": [
                    {
                        "q": {"ar": "تسمى النقاط التي تصل فيها الإزاحة إلى قيمتها العظمى (أكبر سعة اهتزازية) في الموجة المستقرة بـ:", "en": "The points where displacement reaches its maximum value (largest amplitude) in a standing wave are called:"},
                        "options": [
                            {"ar": "البطون (Antinodes)", "en": "Antinodes"},
                            {"ar": "العقد الصفرية (Nodes)", "en": "Nodes"},
                            {"ar": "الخطوط العقيمة ميكانيكياً", "en": "Nodal lines"},
                            {"ar": "محاور التماثل الاهتزازية", "en": "Symmetry axes"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "البطون (Antinodes) هي النقاط التي تهتز بأكبر سعة ممكنة في الموجة المستقرة نتيجة التداخل البناء المستمر.", "en": "Antinodes are the points that vibrate with the maximum possible amplitude in a standing wave due to continuous constructive interference."}
                    },
                    {
                        "q": {"ar": "المسافة الفاصلة بين أي عقدتين متتاليتين في نمط الموجة المستقرة تساوي دائماً:", "en": "The distance between any two consecutive nodes in a standing wave pattern always equals:"},
                        "options": [
                            {"ar": "نصف طول موجي (0.5 λ)", "en": "Half a wavelength (0.5 λ)"},
                            {"ar": "طول موجي كامل (1.0 λ)", "en": "One full wavelength (1.0 λ)"},
                            {"ar": "ربع طول موجي فقط (0.25 λ)", "en": "A quarter of a wavelength (0.25 λ)"},
                            {"ar": "ضعف الطول الموجي للموجة (2.0 λ)", "en": "Double the wavelength (2.0 λ)"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تساوي المسافة بين عقدتين متتاليتين (أو بطنين متتاليين) نصف طول موجي (λ/2) في الموجات المستقرة.", "en": "The distance between two consecutive nodes (or two consecutive antinodes) in a standing wave is half a wavelength (λ/2)."}
                    },
                    {
                        "q": {"ar": "حبل طوله 2.0 m تشكلت فيه موجة مستقرة تتكون من عقدتين عند الطرفين وبطن واحدة في المنتصف (الرنين الأول)، فما قيمة الطول الموجي للموجة؟", "en": "A rope of length 2.0 m forms a standing wave with nodes at the ends and a single antinode at the center (1st harmonic). What is the wavelength?"},
                        "options": [
                            {"ar": "4.0 m", "en": "4.0 m"},
                            {"ar": "2.0 m", "en": "2.0 m"},
                            {"ar": "1.0 m", "en": "1.0 m"},
                            {"ar": "0.5 m", "en": "0.5 m"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "في الرنين الأول للحبل المشدود، يكون طول الحبل L مساوياً لنصف طول موجي (L = λ/2)، وبالتالي λ = 2L = 2 × 2.0 = 4.0 m.", "en": "For the first harmonic, rope length L equals half a wavelength (L = λ/2), thus λ = 2L = 2 × 2.0 = 4.0 m."}
                    },
                    {
                        "q": {"ar": "إذا تضاعف عدد البطون في الحبل المشدود مع ثبات طوله، فماذا يحدث للتردد؟", "en": "If the number of antinodes in a fixed-length stretched rope is doubled, what happens to the frequency?"},
                        "options": [
                            {"ar": "يتضاعف التردد إلى الضعف (يصبح تردد الرنين الثاني)", "en": "The frequency is doubled (becomes the 2nd harmonic)"},
                            {"ar": "يقل التردد إلى النصف تماماً", "en": "The frequency decreases to half"},
                            {"ar": "يبقى التردد ثابتاً كما هو دون تأثير", "en": "The frequency remains unchanged"},
                            {"ar": "ينخفض التردد إلى الصفر ويتوقف الحبل عن الحركة", "en": "The frequency drops to zero and the rope stops moving"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تضاعف عدد البطون (الحلقات) يعني نقصان الطول الموجي للنصف، وبالتالي يتضاعف التردد للضعف لثبات السرعة (f₂ = 2f₁).", "en": "Doubling the number of loops means halving the wavelength, thus doubling the frequency to keep speed constant (f₂ = 2f₁)."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الرابع: الانعكاس والانكسار في بعدين وقانون الانعكاس", "en": "🔹 Part 4: Reflection & Refraction in 2D & Law of Reflection"},
                "questions": [
                    {
                        "q": {"ar": "ينص قانون الانعكاس (Law of Reflection) للموجات الثنائية الأبعاد على أن:", "en": "The Law of Reflection for two-dimensional waves states that:"},
                        "options": [
                            {"ar": "زاوية السقوط تساوي دائماً زاوية الانعكاس (θi = θr)", "en": "The angle of incidence always equals the angle of reflection (θi = θr)"},
                            {"ar": "زاوية السقوط تكون دائماً ضعف زاوية الانعكاس المرتدة", "en": "The angle of incidence is always double the angle of reflection"},
                            {"ar": "الموجة المنعكسة تنفذ بالكامل في الوسط المقابل دون زاوية", "en": "The reflected wave is fully transmitted into the opposite medium"},
                            {"ar": "مجموع زاويتي السقوط والانعكاس يساوي 180 درجة دائماً", "en": "The sum of the incidence and reflection angles is always 180 degrees"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "ينص قانون الانعكاس على أن زاوية سقوط صدر الموجة المقاسة بالنسبة للعمود المقام تساوي زاوية انعكاسها المقابلة (θi = θr).", "en": "The law of reflection states that the angle of incidence measured relative to the normal equals the angle of reflection (θi = θr)."}
                    },
                    {
                        "q": {"ar": "تسمى الظاهرة التي يحدث فيها انحراف وتغير في اتجاه انتشار الموجات عند عبورها حداً فاصلاً بين وسطين مختلفين نتيجة تغير سرعتها بـ:", "en": "The phenomenon of wave bending and direction change when crossing a boundary between two different media due to speed change is:"},
                        "options": [
                            {"ar": "الانكسار (Refraction)", "en": "Refraction"},
                            {"ar": "الانعكاس (Reflection)", "en": "Reflection"},
                            {"ar": "الحيود حول العقبات (Diffraction)", "en": "Diffraction"},
                            {"ar": "التداخل المزدوج المتبادل", "en": "Interference"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الانكسار هو انحراف اتجاه انتشار الموجات عند الحد الفاصل بين وسطين مختلفين بسبب اختلاف سرعة الموجات في الوسطين.", "en": "Refraction is the bending of waves at a boundary between two media due to the difference in wave speed between them."}
                    },
                    {
                        "q": {"ar": "عندما تنتقل موجات مائية مستقيمة من منطقة مياه عميقة إلى منطقة مياه ضحلة (أقل عمقاً) في حوض الأمواج، فماذا يحدث لسرعتها وطولها الموجي؟", "en": "When water waves travel from deep water to shallow water in a ripple tank, what happens to their speed and wavelength?"},
                        "options": [
                            {"ar": "تقل السرعة ويقل الطول الموجي معاً", "en": "The speed and wavelength both decrease"},
                            {"ar": "تزداد السرعة ويزداد الطول الموجي معاً", "en": "The speed and wavelength both increase"},
                            {"ar": "تقل السرعة بينما يزداد الطول الموجي لتعويض النقص", "en": "The speed decreases while the wavelength increases"},
                            {"ar": "تزداد السرعة بينما يقل الطول الموجي لتظل الطاقة ثابتة", "en": "The speed increases while the wavelength decreases"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "في المياه الضحلة، تزداد مقاومة القاع لحركة جزيئات الماء فتقل سرعة الموجة ويقصر طولها الموجي مع بقاء التردد ثابتاً.", "en": "In shallow water, drag from the bottom increases, decreasing wave speed and wavelength, while frequency remains constant."}
                    },
                    {
                        "q": {"ar": "العمود المقام (The Normal) المستخدم لتحديد زوايا السقوط والانعكاس والانكسار هو خط وهمي يرسم:", "en": "The Normal line used to define angles of incidence, reflection, and refraction is an imaginary line drawn:"},
                        "options": [
                            {"ar": "عمودياً (بزاوية 90 درجة) على السطح العاكس عند نقطة السقوط", "en": "Perpendicular (95 degrees) to the boundary at the point of incidence"},
                            {"ar": "موازياً للسطح الفاصل وممتداً على طول جبهة صدر الموجة", "en": "Parallel to the boundary along the wavefront"},
                            {"ar": "منطبقاً تماماً على مسار الموجة المنعكسة المرتدة", "en": "Coinciding exactly with the path of the reflected wave"},
                            {"ar": "بزاوية 45 درجة مع السطح العاكس لتسهيل الحساب الجبري", "en": "At a 45-degree angle to the reflecting surface"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "العمود المقام هو مستقيم وهمي يرسم عمودياً على السطح الفاصل أو العاكس عند نقطة سقوط الشعاع لتحديد الزوايا بدقة.", "en": "The normal is an imaginary line perpendicular to the boundary at the point of incidence, used to precisely measure angles."}
                    }
                ]
            }
        ]
    },
    {
        "id": "10Adv-phy-T1-4.1-exam",
        "title_ar": "الوحدة 4: خصائص الصوت والكشف عنه (سرعة الصوت، إدراك الصوت بالديسيبل، وتأثير دوبلر)",
        "title_en": "Unit 4: Properties of Sound & Detection (Sound Speed, Level in dB & Doppler Effect)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي طبيعة الموجات الصوتية وسرعتها في الأوساط المادية ودرجات الحرارة المختلفة، وإدراك الصوت (الحدة، الشدة، مستوى الصوت بالديسيبل وعتبة السمع)، وآلية عمل الكاشفات والأذن، وتأثير دوبلر وقوانينه الحسابية وتطبيقاته.",
        "sections": [
            {
                "title": {"ar": "🔹 الجزء الأول: طبيعة الموجات الصوتية وسرعتها وحساباتها", "en": "🔹 Part 1: Nature of Sound Waves, Speed & Calculations"},
                "questions": [
                    {
                        "q": {"ar": "تعتبر الموجات الصوتية في الهواء والغازات موجات ميكانيكية:", "en": "Sound waves in air and gases are mechanical waves of type:"},
                        "options": [
                            {"ar": "طولية، تتكون من تضاغطات وتخلخلات متتابعة موازية لاتجاه الحركة", "en": "Longitudinal, consisting of consecutive compressions and rarefactions"},
                            {"ar": "مستعرضة، تتكون من قمم وقيعان تهتز عمودياً على اتجاه الانتشار", "en": "Transverse, consisting of crests and troughs vibrating perpendicularly"},
                            {"ar": "كهرومغناطيسية، لا تتطلب وسيطاً مادياً ويمكنها الانتشار بالفراغ", "en": "Electromagnetic, propagating through vacuum without requiring a medium"},
                            {"ar": "مستقرة ساكنة، لا تنقل الطاقة وتكون عقد وبطون ثابتة", "en": "Standing waves, which do not transmit energy"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "موجات الصوت هي موجات طولية ميكانيكية تنتشر بالاهتزاز الموازي لجزيئات الوسط على هيئة تضاغطات وتخلخلات.", "en": "Sound waves are longitudinal mechanical waves propagating via parallel molecular vibrations as compressions and rarefactions."}
                    },
                    {
                        "q": {"ar": "كيف تؤثر درجة حرارة الهواء على سرعة انتقال الصوت فيه؟", "en": "How does air temperature affect the speed of sound?"},
                        "options": [
                            {"ar": "تزداد سرعة الصوت مع ارتفاع درجة حرارة الهواء", "en": "The speed of sound increases as the air temperature rises"},
                            {"ar": "تقل سرعة الصوت مع ارتفاع درجة حرارة الهواء", "en": "The speed of sound decreases as the air temperature rises"},
                            {"ar": "تبقى سرعة الصوت ثابتة ومستقلة تماماً عن درجة الحرارة", "en": "The speed of sound remains constant and independent of temperature"},
                            {"ar": "تتذبذب سرعة الصوت عشوائياً دون نمط علمي محدد", "en": "The speed of sound fluctuates randomly without a clear pattern"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تزداد سرعة الصوت في الهواء بمعدل 0.6 m/s لكل درجة مئوية واحدة (C°) لزيادة سرعة واصطدام جزيئات الهواء الساخن.", "en": "The speed of sound in air increases by about 0.6 m/s for each Celsius degree rise due to increased molecular collisions."}
                    },
                    {
                        "q": {"ar": "احسب السرعة التقريبية للصوت في الهواء عند درجة حرارة 20°C إذا كانت سرعته عند الصفر المئوي هي 331 m/s؟", "en": "Calculate the approximate speed of sound in air at 20°C if its speed at 0°C is 331 m/s?"},
                        "options": [
                            {"ar": "343 m/s", "en": "343 m/s"},
                            {"ar": "331 m/s", "en": "331 m/s"},
                            {"ar": "353 m/s", "en": "353 m/s"},
                            {"ar": "320 m/s", "en": "320 m/s"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "باستخدام الصيغة التقريبية: v = 331 + 0.6(T) = 331 + 0.6(20) = 331 + 12 = 343 m/s.", "en": "Using the formula: v = 331 + 0.6(T) = 331 + 0.6(20) = 331 + 12 = 343 m/s."}
                    },
                    {
                        "q": {"ar": "أي من الخصائص التالية تفسر عدم قدرة رواد الفضاء على سماع بعضهم البعض بالتخاطب المباشر في الفضاء الخارجي؟", "en": "Which property explains why astronauts cannot hear each other via direct speech in outer space?"},
                        "options": [
                            {"ar": "عدم وجود وسط مادي (فراغ) لنقل الاهتزازات الصوتية الميكانيكية", "en": "The absence of a physical medium (vacuum) to transmit sound vibrations"},
                            {"ar": "الانخفاض الشديد لدرجة الحرارة الذي يجمد جبهة صدر الموجة", "en": "The extreme drop in temperature freezing the wavefront"},
                            {"ar": "الارتفاع الشديد لضغط الفضاء الذي يلاشي السعة كلياً", "en": "The high atmospheric pressure of space dampening the amplitude"},
                            {"ar": "سرعة الصوت الفائقة في الفراغ التي تتخطى قدرة الأذن السمعية", "en": "The superluminal speed of sound in vacuum exceeding human hearing"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الصوت موجة ميكانيكية تتطلب وسطاً مادياً للانتقال، والفضاء عبارة عن فراغ خالٍ من الجزيئات، لذا لا يمكن للصوت الانتشار فيه.", "en": "Sound is a mechanical wave requiring a physical medium; space is a vacuum devoid of molecules, preventing sound from propagating."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثاني: إدراك الصوت (الحدة، الشدة، مستوى الصوت بالديسيبل)", "en": "🔹 Part 2: Sound Perception (Pitch, Loudness & Level in dB)"},
                "questions": [
                    {
                        "q": {"ar": "ترتبط حدة الصوت (Pitch) التي تدركها الأذن البشرية (صوت حاد أو غليظ) بشكل مباشر بـ:", "en": "The pitch of sound perceived by the human ear (high or low pitch) is directly linked to:"},
                        "options": [
                            {"ar": "تردد الموجة الصوتية (f)", "en": "The frequency of the sound wave (f)"},
                            {"ar": "سعة الموجة الصوتية (A)", "en": "The amplitude of the sound wave (A)"},
                            {"ar": "سرعة انتشار الصوت في الوسط", "en": "The propagation speed of sound in the medium"},
                            {"ar": "نوع الآلة أو الحنجرة المصدرة للصوت", "en": "The type of instrument or larynx producing the sound"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "حدة الصوت تعتمد على التردد؛ فالأصوات ذات التردد العالي تكون حادة (مثل صوت المرأة) والأصوات ذات التردد المنخفض تكون غليظة.", "en": "Pitch depends on frequency; high-frequency sounds are perceived as high-pitched, while low-frequency sounds are low-pitched."}
                    },
                    {
                        "q": {"ar": "تتراوح الترددات الصوتية التي تستطيع الأذن البشرية الطبيعية سماعها وإدراكها (مدى السمع البشري) بين:", "en": "The range of acoustic frequencies that a normal human ear can hear and perceive (human hearing range) is between:"},
                        "options": [
                            {"ar": "20 Hz و 20,000 Hz", "en": "20 Hz and 20,000 Hz"},
                            {"ar": "2 Hz و 200 Hz", "en": "2 Hz and 200 Hz"},
                            {"ar": "200 kHz و 2,000 kHz", "en": "200 kHz and 2,000 kHz"},
                            {"ar": "صفر و 100,000 Hz", "en": "Zero and 100,000 Hz"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "مدى السمع البشري المعياري يتراوح بين 20 هرتز للأصوات الأكثر غلظة و 20,000 هرتز للأصوات الأكثر حدة.", "en": "The standard human hearing range is from 20 Hz (lowest pitch) up to 20,000 Hz (highest pitch)."}
                    },
                    {
                        "q": {"ar": "يقاس مستوى الصوت (Sound Level) الذي يعبر عن شدة الصوت وإدراك علوه بوحدة لوغاريتمية تسمى:", "en": "The sound level expressing loudness and perceived volume is measured in a logarithmic unit called:"},
                        "options": [
                            {"ar": "الديسيبل (dB)", "en": "Decibel (dB)"},
                            {"ar": "الهرتز (Hz)", "en": "Hertz (Hz)"},
                            {"ar": "الوات لكل متر مربع (W/m²)", "en": "Watt per square meter (W/m²)"},
                            {"ar": "النيوتن لكل متر مربع", "en": "Newton per square meter"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "يقاس مستوى الصوت بوحدة الديسيبل (dB) وهي مقياس لوغاريتمي يعتمد على مقارنة الشدة الصوتية بشدة عتبة السمع.", "en": "Sound level is measured in decibels (dB), which is a logarithmic scale comparing intensity to the threshold of hearing."}
                    },
                    {
                        "q": {"ar": "تسمى أدنى شدة صوتية تستطيع الأذن البشرية سماعها وإدراكها (عتبة السمع) بـ:", "en": "The lowest sound intensity that a human ear can detect (threshold of hearing) is:"},
                        "options": [
                            {"ar": "0 dB (تعادل شدة 1.0 × 10⁻¹² W/m²)", "en": "0 dB (equivalent to 1.0 × 10⁻¹² W/m²)"},
                            {"ar": "100 dB (تعادل شدة مرتفعة)", "en": "100 dB (equivalent to a high intensity)"},
                            {"ar": "10 dB (تعادل الهمس الخفيف)", "en": "10 dB (equivalent to soft whispering)"},
                            {"ar": "120 dB (تعادل عتبة الألم السمعي)", "en": "120 dB (equivalent to the threshold of pain)"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "عتبة السمع البشري تسجل عند مستوى 0 dB والتي تقابل فيزيائياً شدة متناهية الصغر تبلغ 10⁻¹² W/m².", "en": "The threshold of human hearing is registered at 0 dB, corresponding to an intensity of 10⁻¹² W/m²."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثالث: كواشف الصوت وتأثير الضوضاء وتأثير دوبلر", "en": "🔹 Part 3: Sound Detectors, Noise Pollution & Doppler Effect"},
                "questions": [
                    {
                        "q": {"ar": "أي جزء في الأذن البشرية يقوم باستقبال الاهتزازات الصوتية الميكانيكية من الهواء أولاً ليهتز بالتردد نفسه؟", "en": "Which part of the human ear first receives sound vibrations from the air to vibrate at the same frequency?"},
                        "options": [
                            {"ar": "غشاء الطبلة (Tympanic membrane)", "en": "The Eardrum (Tympanic membrane)"},
                            {"ar": "القوقعة المملوءة بالسائل السمعي", "en": "The Cochlea filled with fluid"},
                            {"ar": "العظيمات الثلاث (المطرقة، السندان، الركاب)", "en": "The three tiny bones (hammer, anvil, stirrup)"},
                            {"ar": "العصب السمعي المتصل بالدماغ مباشرة", "en": "The auditory nerve connected to the brain"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "غشاء الطبلة هو غشاء رقيق يهتز متأثراً بتضاغطات وتخلخلات موجة الصوت الساقطة عليه.", "en": "The eardrum is a thin membrane that vibrates in response to the compressions and rarefactions of sound waves."}
                    },
                    {
                        "q": {"ar": "التعرض المستمر والطويل لأصوات تزيد مستوياتها عن 100 dB (كالآلات الثقيلة ومواقع الحفر) يؤدي علمياً إلى:", "en": "Continuous, long-term exposure to sound levels exceeding 100 dB (like heavy machinery) scientifically leads to:"},
                        "options": [
                            {"ar": "تلف وتدمير الخلايا الشعرية الحساسة في القوقعة وفقدان السمع", "en": "Damage to hair cells in the cochlea and hearing loss"},
                            {"ar": "زيادة مرونة الطبلة وتحسين جودة السمع تدريجياً", "en": "Increasing eardrum flexibility, gradually improving hearing"},
                            {"ar": "تحويل الترددات العالية إلى ترددات منخفضة آمنة", "en": "Converting high frequencies into safe lower frequencies"},
                            {"ar": "تضخم حجم عظيمات الأذن الوسطى لتقوية مقاومتها", "en": "Enlargement of the middle ear ossicles to increase resistance"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الأصوات الصاخبة تدمر الشعيرات الدقيقة الحساسة بالقوقعة مما يسبب تلفاً غير قابل للتجدد وفقداناً تدريجياً للسمع.", "en": "Loud sounds destroy the sensitive tiny hair cells in the cochlea, causing irreversible nerve damage and progressive hearing loss."}
                    },
                    {
                        "q": {"ar": "تسمى ظاهرة التغير في التردد المسموع للصوت الناتجة عن الحركة النسبية بين مصدر الصوت والمراقب بـ:", "en": "The phenomenon of a shift in the perceived pitch of sound due to relative motion between source and observer is:"},
                        "options": [
                            {"ar": "تأثير دوبلر (Doppler Effect)", "en": "Doppler Effect"},
                            {"ar": "الرنين الموجي المتوافق", "en": "Wave Resonance"},
                            {"ar": "التداخل البناء الدائري", "en": "Constructive Interference"},
                            {"ar": "الحيود والانعكاس السطحي", "en": "Diffraction & Wave Bending"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تأثير دوبلر هو الانزياح والتحول في التردد المسموع للصوت نتيجة تحرك المصدر أو الكاشف أو كلاهما بالنسبة للآخر.", "en": "The Doppler Effect is the shift in perceived sound frequency due to the relative motion of the source or detector."}
                    },
                    {
                        "q": {"ar": "عندما تقترب سيارة إسعاف تطلق صفارتها مسرعة نحو مراقب واقف على الرصيف، فماذا يحدث للتردد والطول الموجي اللذين يستقبلهما المراقب؟", "en": "When an ambulance sounding its siren speeds towards a stationary observer, what happens to frequency and wavelength perceived?"},
                        "options": [
                            {"ar": "يزداد التردد المسموع ويقل الطول الموجي المقاس", "en": "The perceived frequency increases, and the measured wavelength decreases"},
                            {"ar": "يقل التردد المسموع ويزداد الطول الموجي المقاس", "en": "The perceived frequency decreases, and the measured wavelength increases"},
                            {"ar": "يزداد التردد ويزداد الطول الموجي معاً لزيادة الطاقة", "en": "Both perceived frequency and wavelength increase"},
                            {"ar": "يبقى التردد والطول الموجي ثابتين تماماً كما هما", "en": "Both frequency and wavelength remain strictly constant"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "بسبب اقتراب المصدر، تتقارب قمم وصدر الموجات أمام السيارة فيقصر الطول الموجي وتزداد حدة الصوت (يرتفع التردد المسموع).", "en": "As the source approaches, wavefronts compress in front of the vehicle, reducing the wavelength and raising the perceived pitch (higher frequency)."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الرابع: تطبيقات تأثير دوبلر والمعادلة الحسابية", "en": "🔹 Part 4: Doppler Effect Applications & Computational Equation"},
                "questions": [
                    {
                        "q": {"ar": "أي مما يلي لا يعتبر تطبيقاً عملياً أو طبياً مباشراً لتأثير دوبلر في حياتنا؟", "en": "Which of the following is not a direct practical or medical application of the Doppler Effect?"},
                        "options": [
                            {"ar": "تصنيع العدسات المكبرة والتلسكوبات العاكسة البسيطة", "en": "Manufacturing magnifying lenses and simple reflecting telescopes"},
                            {"ar": "رادارات قياس سرعة المركبات على الطرقات السريعة (الشرطة)", "en": "Police speed radars measuring vehicle speeds on highways"},
                            {"ar": "أجهزة التخطيط بالموجات فوق الصوتية الطبية لقياس تدفق الدم", "en": "Medical ultrasound scanning measuring blood flow velocities"},
                            {"ar": "دراسة وتتبع انزياح طيف الضوء القادم من النجوم والمجرات البعيدة", "en": "Tracking spectral shifts of light from distant stars and galaxies"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "العدسات المكبرة تعتمد على انكسار الضوء وتكبيره الهندسي ولا تعتمد على تأثير دوبلر الحركي.", "en": "Magnifying lenses rely on refraction and geometric magnification, not the Doppler Effect."}
                    },
                    {
                        "q": {"ar": "ما هي الصيغة العامة لمعادلة تأثير دوبلر لحساب التردد المستقبَل (fd) بدلالة تردد المصدر (fs) وسرعة الصوت (v) وسرعة الكاشف (vd) والمصدر (vs)؟", "en": "What is the general Doppler Effect formula for calculating detected frequency (fd) using source frequency (fs) and velocities?"},
                        "options": [
                            {"ar": "fd = fs · (v - vd) / (v - vs)", "en": "fd = fs · (v - vd) / (v - vs)"},
                            {"ar": "fd = fs · (v + vs) / (v + vd)", "en": "fd = fs · (v + vs) / (v + vd)"},
                            {"ar": "fd = fs · (vd / vs)", "en": "fd = fs · (vd / vs)"},
                            {"ar": "fd = fs · v² / (vd · vs)", "en": "fd = fs · v² / (vd · vs)"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الصيغة العامة هي fd = fs · (v - vd) / (v - vs) مع مراعاة اتجاهات الحركة لتحديد الإشارات الموجبة والسالبة بدقة.", "en": "The general formula is fd = fs · (v - vd) / (v - vs) taking into account directional signs relative to sound propagation."}
                    },
                    {
                        "q": {"ar": "يقف مراقب ساكن (vd = 0) بالقرب من سكة حديد. يطلق قطار يقترب بسرعة 20 m/s صفيراً بتردد 400 Hz. إذا كانت سرعة الصوت 340 m/s، فما التردد الذي يستقبله المراقب تقريباً؟", "en": "A stationary observer (vd = 0) is near a track. An approaching train at 20 m/s sounds a 400 Hz horn. With sound speed of 340 m/s, what is the perceived frequency?"},
                        "options": [
                            {"ar": "425 Hz", "en": "425 Hz"},
                            {"ar": "377 Hz", "en": "377 Hz"},
                            {"ar": "400 Hz", "en": "400 Hz"},
                            {"ar": "480 Hz", "en": "480 Hz"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "باستخدام القانون للمصدر المقترب: fd = fs · v / (v - vs) = 400 × 340 / (340 - 20) = 400 × 340 / 320 = 425 Hz.", "en": "Using the formula for an approaching source: fd = fs · v / (v - vs) = 400 × 340 / (340 - 20) = 425 Hz."}
                    },
                    {
                        "q": {"ar": "ماذا يحدث للتردد المسموع عندما يبتعد مصدر الصوت مسرعاً عن كاشف ساكن؟", "en": "What happens to the perceived pitch when the sound source recedes from a stationary detector?"},
                        "options": [
                            {"ar": "يقل التردد المسموع ويصبح الصوت غليظاً مقارنة بتردده الأصلي", "en": "The perceived frequency decreases and becomes lower in pitch"},
                            {"ar": "يزداد التردد المسموع ويصبح حاداً ومرتفع العلو", "en": "The perceived frequency increases and becomes higher in pitch"},
                            {"ar": "يبقى التردد ثابتاً ولكن تزداد سرعة الصوت المتجهة", "en": "The frequency remains constant but the sound velocity increases"},
                            {"ar": "يتحول الصوت إلى موجات تخيلية صامتة تماماً", "en": "The sound turns into completely silent imaginary waves"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "عند الابتعاد، تتباعد جبهات الموجات الصوتية فيزداد الطول الموجي ويقل التردد المسموع فتنخفض حدته.", "en": "When receding, sound wavefronts stretch, increasing wavelength and lowering the perceived frequency."}
                    }
                ]
            }
        ]
    },
    {
        "id": "10Adv-phy-T1-5.1-exam",
        "title_ar": "الوحدة 5: الفيزياء والموسيقى (مصادر الصوت، الرنين في الأنابيب المغلقة والمفتوحة والأوتار وجودة الصوت)",
        "title_en": "Unit 5: Physics & Music (Resonance in Pipes & Strings, Sound Quality)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي اهتزازات الأجسام كمصادر للصوت، والرنين في أنابيب الهواء المغلقة والمفتوحة وحساب أطوال الأعمدة الهوائية وتردداتها، والرنين في الأوتار والآلات الموسيقية، وجودة الصوت ومفهوم الضربات والتناغم والنشاز.",
        "sections": [
            {
                "title": {"ar": "🔹 الجزء الأول: اهتزازات الأجسام ومصادر الصوت والرنين بالأنابيب", "en": "🔹 Part 1: Body Vibrations, Sound Sources & Pipe Resonance"},
                "questions": [
                    {
                        "q": {"ar": "تنتج جميع الأصوات في الطبيعة (سواء الكلام أو الموسيقى) بالضرورة نتيجة:", "en": "All sounds in nature (whether speech or music) are produced fundamentally by:"},
                        "options": [
                            {"ar": "اهتزازات الأجسام المادية المهتزة", "en": "Vibrations of physical vibrating bodies"},
                            {"ar": "التحلل الضوئي للإلكترونات داخل الذرات", "en": "The light decay of electrons inside atoms"},
                            {"ar": "التفاعلات الكيميائية بين الغازات في الهواء", "en": "Chemical reactions between gases in the air"},
                            {"ar": "انعكاس الضوء على الأسطح الملساء المصقولة", "en": "Light reflecting off smooth polished surfaces"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تنشأ الموجات الصوتية من اهتزاز الأجسام؛ حيث يدفع الجسم المهتز جزيئات الهواء المحيطة مسبباً التضاغط والتخلخل.", "en": "Sound waves originate from vibrating bodies; the vibrating body pushes surrounding air molecules, causing compression and rarefaction."}
                    },
                    {
                        "q": {"ar": "أي جزء في الآلات الموسيقية الوترية (كالعود والكمان) هو المسؤول الأساسي عن تضخيم الصوت ونقله للهواء بوضوح؟", "en": "Which part of stringed instruments (like oud or violin) is primarily responsible for amplifying and transmitting sound?"},
                        "options": [
                            {"ar": "صندوق الرنين الخشبي الأجوف (صندوق الصوت)", "en": "The hollow wooden resonance box (soundbox)"},
                            {"ar": "الأوتار المعدنية الرقيقة المشدودة بمفردها", "en": "The thin stretched metal strings alone"},
                            {"ar": "المفاتيح البلاستيكية المستخدمة لضبط دوزان الوتر", "en": "The plastic pegs used to tune the strings"},
                            {"ar": "القوس الخارجي المصنوع من شعر الخيل", "en": "The external bow made of horsehair"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الأوتار تهتز بحد ذاتها وتزيح كمية صغيرة من الهواء، ولكن صندوق الرنين الخشبي يهتز بالتوافق معها ويزيح كمية كبيرة من الهواء مما يضخم الصوت بشكل ملحوظ.", "en": "Strings vibrate and displace a small amount of air, but the wooden soundbox vibrates in resonance with them, displacing much more air to amplify the sound."}
                    },
                    {
                        "q": {"ar": "أنبوب الرنين مغلق الطرف (Closed-pipe resonator) هو أنبوب أجوف:", "en": "A closed-pipe resonator is a hollow pipe that is:"},
                        "options": [
                            {"ar": "مفتوح من أحد طرفيه ومغلق من الطرف الآخر", "en": "Open at one end and closed at the other end"},
                            {"ar": "مغلق تماماً ومحكم الإغلاق من كلا طرفيه الماديين", "en": "Completely sealed and closed at both physical ends"},
                            {"ar": "مفتوح بالكامل من كلا طرفيه المقابلين للهواء", "en": "Completely open at both of its opposite ends"},
                            {"ar": "مصنوع من المعدن الثقيل غير القابل للاهتزاز", "en": "Made of heavy metal that cannot vibrate"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "أنبوب الرنين المغلق يكون مفتوحاً من طرف ومغلقاً من الطرف الآخر (مثل زجاجة أو بعض المزامير).", "en": "A closed-pipe resonator is open at one end and closed at the other (like a bottle or certain flutes)."}
                    },
                    {
                        "q": {"ar": "يتكون أنبوب الرنين مفتوح الطرفين (Open-pipe resonator) من أنبوب أجوف يكون:", "en": "An open-pipe resonator consists of a hollow tube that is:"},
                        "options": [
                            {"ar": "مفتوحاً من كلا طرفيه المقابلين لانتشار الهواء", "en": "Open at both of its opposite ends exposed to air"},
                            {"ar": "مغلقاً من طرف ومفتوحاً من الطرف المقابل له", "en": "Closed at one end and open at the opposite end"},
                            {"ar": "مغلقاً من كلا الطرفين ومفرغاً تماماً من الغازات", "en": "Closed at both ends and completely evacuated of gases"},
                            {"ar": "مثقوباً من المنتصف فقط وثابتاً عند الأطراف", "en": "Perforated only at the center and fixed at the ends"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "أنبوب الرنين المفتوح يكون مفتوحاً من كلا طرفيه (مثل المزمار المفتوح أو أنابيب الجهاز الصوتي المفتوحة).", "en": "An open-pipe resonator is open at both of its ends (such as an open flute or open organ pipe)."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثاني: أطوال أنابيب الرنين والترددات والتحليل الرياضي", "en": "🔹 Part 2: Resonance Pipe Lengths, Frequencies & Math Analysis"},
                "questions": [
                    {
                        "q": {"ar": "في الأنبوب المغلق، يتشكل الرنين الأول (التردد الأساسي) عندما يكون طول الأنبوب (L) مساوياً لـ:", "en": "In a closed pipe, the first resonance (fundamental frequency) occurs when the pipe length (L) equals:"},
                        "options": [
                            {"ar": "ربع طول موجي (λ/4)", "en": "A quarter of a wavelength (λ/4)"},
                            {"ar": "نصف طول موجي (λ/2)", "en": "Half a wavelength (λ/2)"},
                            {"ar": "ثلاثة أرباع طول موجي (3λ/4)", "en": "Three-quarters of a wavelength (3λ/4)"},
                            {"ar": "طول موجي كامل (λ)", "en": "One full wavelength (λ)"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "يتشكل الرنين الأول في الأنبوب المغلق عند تشكل عقدة عند الطرف المغلق وبطن عند الطرف المفتوح، مما يشكل ربع موجة: L = λ/4.", "en": "First resonance in a closed pipe forms with a node at the closed end and an antinode at the open end, spanning a quarter wavelength: L = λ/4."}
                    },
                    {
                        "q": {"ar": "ما هي رتب رنين التوافقات والترددات التي يمكن أن تتشكل وتنتج في الأنبوب المغلق الطرف؟", "en": "What are the harmonic resonance numbers and frequencies that can form in a closed pipe?"},
                        "options": [
                            {"ar": "مضاعفات فردية فقط للتردد الأساسي (1f, 3f, 5f, ...)", "en": "Odd harmonics only of the fundamental frequency (1f, 3f, 5f, ...)"},
                            {"ar": "جميع المضاعفات الصحيحة الفردية والزوجية (1f, 2f, 3f, ...)", "en": "All integer harmonics, both odd and even (1f, 2f, 3f, ...)"},
                            {"ar": "مضاعفات زوجية فقط للتردد الأساسي (2f, 4f, 6f, ...)", "en": "Even harmonics only of the fundamental frequency (2f, 4f, 6f, ...)"},
                            {"ar": "تردد وحيد ثابت لا يمكن تغييره بتغير التوافقات", "en": "A single fixed frequency that cannot be changed"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تنتج الأنابيب المغلقة توافقيات وترددات ذات مضاعفات فردية فقط للتردد الأساسي بسبب شرط تشكل عقدة وبطن عند الحدود.", "en": "Closed pipes produce odd harmonics only (1, 3, 5...) of the fundamental frequency due to the boundary condition of having a node and an antinode."}
                    },
                    {
                        "q": {"ar": "في الأنبوب المفتوح، يتشكل الرنين الأول (التردد الأساسي) عندما يكون طول الأنبوب (L) مساوياً لـ:", "en": "In an open pipe, the first resonance (fundamental frequency) occurs when the pipe length (L) equals:"},
                        "options": [
                            {"ar": "نصف طول موجي (λ/2)", "en": "Half a wavelength (λ/2)"},
                            {"ar": "ربع طول موجي (λ/4)", "en": "A quarter of a wavelength (λ/4)"},
                            {"ar": "طول موجي كامل (λ)", "en": "One full wavelength (λ)"},
                            {"ar": "ضعف الطول الموجي للموجة (2λ)", "en": "Double the wavelength (2λ)"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "يتشكل الرنين الأول في الأنبوب المفتوح بوجود بطن عند كلا الطرفين وعقدة في المنتصف، مما يشكل نصف موجة: L = λ/2.", "en": "First resonance in an open pipe forms with antinodes at both ends and a node in the center, spanning half a wavelength: L = λ/2."}
                    },
                    {
                        "q": {"ar": "ما هي رتب رنين التوافقات والترددات التي يمكن أن تنتج وتتشكل في الأنبوب مفتوح الطرفين؟", "en": "What are the harmonic resonance numbers and frequencies that can form in an open pipe?"},
                        "options": [
                            {"ar": "جميع المضاعفات الصحيحة الفردية والزوجية (1f, 2f, 3f, 4f, ...)", "en": "All integer harmonics, both odd and even (1f, 2f, 3f, 4f, ...)"},
                            {"ar": "مضاعفات فردية فقط للتردد الأساسي (1f, 3f, 5f, ...)", "en": "Odd harmonics only of the fundamental frequency (1f, 3f, 5f, ...)"},
                            {"ar": "مضاعفات زوجية فقط للتردد الأساسي (2f, 4f, 6f, ...)", "en": "Even harmonics only of the fundamental frequency (2f, 4f, 6f, ...)"},
                            {"ar": "ترددات عشوائية تعتمد على درجة رطوبة الهواء فقط", "en": "Random frequencies depending on air humidity only"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الأنابيب المفتوحة تنتج جميع التوافقيات الصحيحة (الفردية والزوجية) للتردد الأساسي، مما يعطيها صوتاً غنياً بالتوافقات.", "en": "Open pipes produce all integer harmonics (both odd and even, 1, 2, 3...) of the fundamental frequency, yielding a rich timbre."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الثالث: الرنين في الأوتار والآلات الموسيقية وجودة الصوت", "en": "🔹 Part 3: Resonance in Strings, Instruments & Sound Quality"},
                "questions": [
                    {
                        "q": {"ar": "يتشكل الرنين في وتر مشدود ومثبت من طرفيه (مثل وتر الجيتار) عندما يكون طول الوتر مساوياً لـ:", "en": "Resonance forms in a stretched string fixed at both ends (like a guitar string) when its length equals:"},
                        "options": [
                            {"ar": "مضاعفات صحيحة لنصف الطول الموجي (L = n · λ/2)", "en": "Integer multiples of half a wavelength (L = n · λ/2)"},
                            {"ar": "مضاعفات فردية فقط لربع الطول الموجي (L = n · λ/4)", "en": "Odd multiples only of a quarter wavelength (L = n · λ/4)"},
                            {"ar": "طول موجي كامل دائماً بغض النظر عن الرنين", "en": "One full wavelength always, regardless of harmonic"},
                            {"ar": "قيمة ثابتة تساوي نصف طول الحنجرة البشرية", "en": "A fixed value equal to half the human larynx length"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "بما أن الوتر مثبت من طرفيه، يتشكل عقد عند الأطراف دائماً، مما يتطلب أن يكون الطول مساوياً لمضاعفات نصف طول موجي (L = n · λ/2) لإنتاج الرنين.", "en": "Since the string is fixed at both ends, nodes always form at the boundaries, requiring the length to equal integer multiples of half-wavelengths."}
                    },
                    {
                        "q": {"ar": "تسمى السمة أو الصفة التي تمكن السامع من التمييز بين صوتين لهما نفس الحدة والشدة (مثل البيانو والمزمار) بـ:", "en": "The quality that allows a listener to distinguish between two sounds of the same pitch and loudness (like piano & flute) is:"},
                        "options": [
                            {"ar": "جودة الصوت أو طابع الصوت (Timbre / Sound Quality)", "en": "Sound Quality or Timbre"},
                            {"ar": "شدة الصوت المسموعة بالديسيبل", "en": "Audible sound level in decibels"},
                            {"ar": "التردد الأساسي للموجة الجيبية", "en": "The fundamental frequency of the sine wave"},
                            {"ar": "تأثير دوبلر الموجي المنزاح", "en": "The Doppler wave shift"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "جودة الصوت أو طابع الصوت (Timbre) يعتمد على مزيج الترددات التوافقية المرافقة للتردد الأساسي، وتختلف من آلة لأخرى.", "en": "Sound quality or timbre depends on the unique mixture of harmonic frequencies accompanying the fundamental frequency, varying between instruments."}
                    },
                    {
                        "q": {"ar": "يسمى التردد الأقل الذي يهتز عنده عمود الهواء أو الوتر لإنتاج الرنين الأول بـ:", "en": "The lowest frequency at which an air column or string vibrates to produce the first resonance is called:"},
                        "options": [
                            {"ar": "التردد الأساسي (Fundamental frequency)", "en": "Fundamental frequency"},
                            {"ar": "التوافقية الزوجية الأولى", "en": "First even harmonic"},
                            {"ar": "التردد الرنيني النهائي", "en": "Ultimate resonant frequency"},
                            {"ar": "تردد الضربات التراكمي", "en": "Cumulative beat frequency"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التردد الأساسي هو التردد الأقل للاهتزاز في الآلة الموسيقية، وتسمى الترددات الأعلى المصاحبة له بالتوافقيات (Harmonics).", "en": "The fundamental frequency is the lowest frequency of vibration in an instrument; higher accompanying frequencies are called harmonics."}
                    },
                    {
                        "q": {"ar": "ماذا يحدث عندما تهتز آلة موسيقية بالتردد الأساسي مع توافقيات متعددة مصاحبة له بشكل منظم وجميل؟", "en": "What happens when an instrument vibrates at its fundamental frequency along with multiple orderly accompanying harmonics?"},
                        "options": [
                            {"ar": "ينتج صوت ذو جودة عالية ونغمة غنية تسمى التناغم (Consonance)", "en": "It produces a high-quality rich sound called harmony or consonance"},
                            {"ar": "ينتج صوت مزعج وغير مريح يسمى النشاز (Dissonance)", "en": "It produces an irritating and uncomfortable sound called dissonance"},
                            {"ar": "يتلاشى الصوت تماماً بسبب التداخل الهدام المستمر للقمم", "en": "The sound completely fades out due to continuous destructive interference"},
                            {"ar": "تتساوى سرعة جميع التوافقيات وتتشتت الطاقة في الفراغ", "en": "The speed of all harmonics equals, scattering energy"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "التناغم هو تراكب أصوات وتوافقيات ذات ترددات متناسبة بشكل مريح ومبهج للأذن البشرية.", "en": "Consonance is the combination of sounds and harmonics with frequencies that blend in a pleasant, stable manner to the ear."}
                    }
                ]
            },
            {
                "title": {"ar": "🔹 الجزء الرابع: مفهوم الضربات والتداخل والموجات السمعية", "en": "🔹 Part 4: The Concept of Beats, Interference & Acoustic Waves"},
                "questions": [
                    {
                        "q": {"ar": "تنشأ ظاهرة الضربات (Beats) السمعية نتيجة تراكب وتداخل موجتين صوتيتين:", "en": "The phenomenon of acoustic beats arises from the superposition of two sound waves that have:"},
                        "options": [
                            {"ar": "لهما ترددان متقاربان جداً (بينهما فرق بسيط)", "en": "Slightly different frequencies (a very small difference)"},
                            {"ar": "لهما نفس التردد والسعة تماماً وتنتشران بالاتجاه نفسه", "en": "Exactly the same frequency and amplitude traveling in the same direction"},
                            {"ar": "متعامدتان تماماً في الطور وتنتشران بسرعات مختلفة", "en": "Completely perpendicular phases and different speeds"},
                            {"ar": "إحداهما كهرومغناطيسية والأخرى ميكانيكية طولية", "en": "One electromagnetic and the other mechanical longitudinal"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "الضربات تنتج من تداخل موجتين صوتيتين بترددين متقاربين جداً، مما يسبب تذبذباً دورياً في العلو (تداخل بناء يليه هدام بالتناوب).", "en": "Beats result from the interference of two sound waves of slightly different frequencies, causing a periodic rise and fall in loudness."}
                    },
                    {
                        "q": {"ar": "إذا رنّت شوكتان رنانتان بترددين 440 Hz و 444 Hz معاً في الوقت نفسه، فما هو تردد الضربات المسموعة؟", "en": "If two tuning forks of frequencies 440 Hz and 444 Hz are sounded together, what is the frequency of the beats heard?"},
                        "options": [
                            {"ar": "4 Hz (أربع ضربات في الثانية)", "en": "4 Hz (four beats per second)"},
                            {"ar": "884 Hz (مجموع الترددين)", "en": "884 Hz (the sum of the frequencies)"},
                            {"ar": "442 Hz (متوسط الترددين)", "en": "442 Hz (the average of the frequencies)"},
                            {"ar": "صفر Hz (بسبب التلاشي الهدام للترددين)", "en": "Zero Hz (due to destructive cancelation)"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "تردد الضربات يساوي القيمة المطلقة للفرق بين الترددين: f_beat = |f₁ - f₂| = |444 - 440| = 4 Hz.", "en": "The beat frequency is the absolute difference between the two frequencies: f_beat = |f₁ - f₂| = |444 - 440| = 4 Hz."}
                    },
                    {
                        "q": {"ar": "أي من توليفات الترددات التالية تمثل صوتاً متناغماً ومريحاً جداً للأذن (Consonance) وفق القواعد الفيزيائية؟", "en": "Which of the following combinations of frequencies represents a pleasant and consonant sound?"},
                        "options": [
                            {"ar": "شوكتان بنسبة ترددات بسيطة وصحيحة مثل 1:2 أو 2:3", "en": "Two forks with a simple integer frequency ratio like 1:2 or 2:3"},
                            {"ar": "ترددات عشوائية ومعقدة وبنسب كسرية صعبة مثل 17:31", "en": "Random, complex frequencies with complex fractional ratios like 17:31"},
                            {"ar": "أصوات ذات مستويات ديسيبل مرتفعة جداً تتجاوز 120 dB", "en": "Sounds with highly elevated decibel levels exceeding 120 dB"},
                            {"ar": "موجات ميكانيكية وموجات ضوئية منطلقة معاً", "en": "Mechanical and light waves traveling together"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "يكون الصوت متناغماً ومريحاً عندما تكون النسبة بين الترددات بسيطة وصغيرة (مثل الأوكتاف بنسبة 1:2 أو الخمس التام بنسبة 2:3).", "en": "A sound is consonant and pleasant when the ratio between their frequencies is simple and small (like 1:2 or 2:3)."}
                    },
                    {
                        "q": {"ar": "تسمى التراكيب غير المتناغمة للأصوات التي تنتج نغمة مزعجة وغير مريحة للسمع البشري بـ:", "en": "The unpleasant and unstable combination of sound frequencies is called:"},
                        "options": [
                            {"ar": "النشاز (Dissonance)", "en": "Dissonance / Discord"},
                            {"ar": "التناجم المتوافق (Consonance)", "en": "Consonance"},
                            {"ar": "الرنين المستقر للأنبوب", "en": "Resonant pipe harmonics"},
                            {"ar": "التأثير السمعي المتزايد", "en": "Incremental hearing effect"}
                        ],
                        "correct": 0,
                        "answer": {"ar": "النشاز (Dissonance) ينتج من تداخل أصوات ذات ترددات غير متناسبة رياضياً بنسب بسيطة، مما يسبب إزعاجاً للأذن.", "en": "Dissonance/Discord results from the combination of sound frequencies with complex mathematical ratios, irritating the ear."}
                    }
                ]
            }
        ]
    }
]

# Create target directory
os.makedirs("public", exist_ok=True)

for exam in PHYSICS_EXAMS:
    # Setup dynamic exam JSON payload
    exam_data = {
        "title_ar": exam["title_ar"],
        "title_en": exam["title_en"],
        "desc_ar": exam["desc_ar"],
        "sections": exam["sections"]
    }
    exam_json_str = json.dumps(exam_data, ensure_ascii=False, indent=4)

    # Inject into G10 ADV PHY TEMPLATE
    exam_html = G10_ADV_PHY_TEMPLATE.replace("{TITLE_AR}", exam["title_ar"])\
                                    .replace("{TITLE_EN}", exam["title_en"])\
                                    .replace("{DESC_AR}", exam["desc_ar"])\
                                    .replace("{LESSON_ID}", exam["id"])\
                                    .replace("{ORIGINAL_EXAM_DATA_JSON}", exam_json_str)

    # Create exam dir and write file
    exam_dir = f"public/{exam['id']}"
    os.makedirs(exam_dir, exist_ok=True)
    with open(f"{exam_dir}/index.html", "w", encoding="utf-8") as f:
        f.write(exam_html)
    print(f"Generated {exam_dir}/index.html")

print("SUCCESS: Dynamic Generation of 5 Grade 10 Advanced physics exams completed.")
