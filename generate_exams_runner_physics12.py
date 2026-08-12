# -*- coding: utf-8 -*-
import os
import json
from generate_general_math_exams import TEMPLATE

# Modify the template to match Grade 12 Physics General
G12_PHY_TEMPLATE = TEMPLATE.replace("الحادي عشر", "الثاني عشر")\
                           .replace("11", "12")\
                           .replace("Grade 11", "Grade 12")\
                           .replace("رياضيات", "فيزياء")\
                           .replace("الرياضيات", "الفيزياء")\
                           .replace("Math", "Physics")\
                           .replace("Mathematics", "Physics")

PHYSICS_EXAMS = [
    {
        "id": "12Jen-phy-T1-1.1-exam",
        "title_ar": "امتحان الفيزياء 12 عام - الوحدة 1 الدرس 1 (الشحنة الكهربائية)",
        "title_en": "Grade 12 Physics Exam - Unit 1 Lesson 1 (Electric Charge)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي مفاهيم الشحنة الكهربية، تكميم الشحنة، مبدأ حفظ الشحنة، طرق الشحن المختلفة (الدلك، التماس، الحث)، وخصائص الموصلات والعوازل والكشاف الكهربي.",
        "sections": [
            {
                "title": {
                    "ar": "🔹 الجزء الأول: المفاهيم الأساسية للشحنة والجسيمات دون الذرية",
                    "en": "🔹 Part 1: Basic Concepts of Charge & Subatomic Particles"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "أي من الجسيمات التالية يعتبر متعادلاً كهربائياً ولا يحمل شحنة صافية؟",
                            "en": "Which of the following particles is electrically neutral and carries no net charge?"
                        },
                        "options": [
                            {"ar": "النيوترون", "en": "Neutron"},
                            {"ar": "الإلكترون", "en": "Electron"},
                            {"ar": "البروتون", "en": "Proton"},
                            {"ar": "البوزيترون", "en": "Positron"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "النيوترونات هي جسيمات متعادلة توجد داخل النواة وشحنتها صفر.",
                            "en": "Neutrons are neutral particles located inside the nucleus and their charge is zero."
                        }
                    },
                    {
                        "q": {
                            "ar": "ماذا يحدث للجسم المتعادل عند فقدانه لبعض الإلكترونات؟",
                            "en": "What happens to a neutral body when it loses some electrons?"
                        },
                        "options": [
                            {"ar": "يصبح موجب الشحنة", "en": "It becomes positively charged"},
                            {"ar": "يصبح سالب الشحنة", "en": "It becomes negatively charged"},
                            {"ar": "يبقى متعادلاً كهربائياً", "en": "It remains electrically neutral"},
                            {"ar": "تتضاعف كتلته بشكل كبير", "en": "Its mass increases significantly"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "فقدان الإلكترونات سالبة الشحنة يؤدي إلى زيادة نسبة الشحنات الموجبة (البروتونات) وبالتالي شحنة موجبة صافية.",
                            "en": "Losing negatively charged electrons results in an excess of positive charges (protons), giving a net positive charge."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي القيمة الأساسية لشحنة الإلكترون (الشحنة الأساسية e)؟",
                            "en": "What is the fundamental value of the electron charge (elementary charge e)?"
                        },
                        "options": [
                            {"ar": "1.60 × 10⁻¹⁹ C", "en": "1.60 × 10⁻¹⁹ C"},
                            {"ar": "9.11 × 10⁻³¹ C", "en": "9.11 × 10⁻³¹ C"},
                            {"ar": "1.67 × 10⁻²⁷ C", "en": "1.67 × 10⁻²⁷ C"},
                            {"ar": "8.85 × 10⁻¹٢ C", "en": "8.85 × 10⁻¹٢ C"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الشحنة الأساسية e تساوي 1.6 × 10⁻¹⁹ كولوم، ويحمل الإلكترون قيمة سالبة منها والبروتون قيمة موجبة.",
                            "en": "The elementary charge e equals 1.6 × 10⁻¹⁹ C. Electrons carry a negative value of e, and protons carry a positive value."
                        }
                    },
                    {
                        "q": {
                            "ar": "شحنتان كهربائيتان متشابهتان في النوع (مثلاً كلاهما موجب) يوضعان بالقرب من بعضهما. ما طبيعة القوة بينهما؟",
                            "en": "Two electric charges of the same sign (e.g., both positive) are placed near each other. What is the nature of the force between them?"
                        },
                        "options": [
                            {"ar": "قوة تنافر", "en": "Repulsive force"},
                            {"ar": "قوة تجاذب", "en": "Attractive force"},
                            {"ar": "لا توجد أي قوة بينهما", "en": "There is no force between them"},
                            {"ar": "تارة تجاذب وتارة تنافر بشكل دوري", "en": "Alternating attractive and repulsive periodically"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الشحنات المتشابهة تتنافر والشحنات المختلفة تتجاذب.",
                            "en": "Like charges repel and opposite charges attract."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثاني: تكميم الشحنة وقانون الحفظ",
                    "en": "🔹 Part 2: Quantization & Conservation of Charge"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ماذا نعني بقولنا أن الشحنة الكهربائية 'كمية مكمّاة'؟",
                            "en": "What does it mean that electric charge is 'quantized'?"
                        },
                        "options": [
                            {"ar": "أن شحنة أي جسم يجب أن تكون مضاعفات صحيحة للشحنة الأساسية e", "en": "That any net charge must be an integer multiple of the elementary charge e"},
                            {"ar": "أن الشحنة يمكن تقسيمها إلى أجزاء عشرية لا نهائية بحرية", "en": "That charge can be divided into infinite decimal fractions freely"},
                            {"ar": "أن الشحنة تفنى وتستحدث من العدم تحت ظروف خاصة", "en": "That charge can be created or destroyed under special conditions"},
                            {"ar": "أن الشحنة تقاس بوحدة الكيلوغرام فقط", "en": "That charge is measured only in kilograms"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تكميم الشحنة يعني وجودها على شكل حزم أو وحدات منفصلة، حيث q = n·e، وحيث n عدد صحيح.",
                            "en": "Quantization of charge means it exists in discrete packets, where q = n·e and n is an integer."
                        }
                    },
                    {
                        "q": {
                            "ar": "أي من قيم الشحنات التالية مستحيل علمياً لجسم مشحون بالكهرباء الساكنة؟",
                            "en": "Which of the following charge values is scientifically impossible for a charged body?"
                        },
                        "options": [
                            {"ar": "2.40 × 10⁻¹⁹ C", "en": "2.40 × 10⁻¹⁹ C"},
                            {"ar": "3.20 × 10⁻¹⁹ C", "en": "3.20 × 10⁻¹⁹ C"},
                            {"ar": "4.80 × 10⁻¹⁹ C", "en": "4.80 × 10⁻¹⁹ C"},
                            {"ar": "1.60 × 10⁻¹٨ C", "en": "1.60 × 10⁻¹٨ C"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الشحنة (2.4 × 10⁻¹⁹ C) مستحيلة لأنها تعادل 1.5e، وهذا يخالف تكميم الشحنة حيث n يجب أن يكون عدداً صحيحاً.",
                            "en": "A charge of 2.4 × 10⁻¹⁹ C is impossible because it equals 1.5e, which violates quantization as n must be an integer."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا انتقلت شحنة مقدارها -8.0 nC من قضيب مطاطي متعادل إلى قطعة صوف متعادلة، فما شحنة قطعة الصوف؟",
                            "en": "If a charge of -8.0 nC is transferred from a neutral rubber rod to a neutral wool cloth, what is the charge of the wool cloth?"
                        },
                        "options": [
                            {"ar": "+8.0 nC", "en": "+8.0 nC"},
                            {"ar": "-8.0 nC", "en": "-8.0 nC"},
                            {"ar": "صفر", "en": "Zero"},
                            {"ar": "+16.0 nC", "en": "+16.0 nC"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "وفق قانون حفظ الشحنة، النقص في شحنة المطاط يقابله كسب متساوٍ ومخالف في قطعة الصوف، وبما أن الشحنة السالبة غادرت المطاط إليه، تصبح شحنة المطاط +8 nC بينما الصوف الذي كسبها يصبح -8 nC أو العكس بالعكس حسب اتجاه انتقال الإلكترونات. هنا قال انتقلت الشحنة من المطاط إلى الصوف، فالصوف كسب سالب فيصبح شحنته -8 nC والمطاط فقد فيصبح +8 nC.",
                            "en": "According to the law of conservation of charge, charge is transferred. Since -8.0 nC transferred to the wool, the wool acquires -8.0 nC and the rod is left with +8.0 nC."
                        }
                    },
                    {
                        "q": {
                            "ar": "كم عدد الإلكترونات الإضافية اللازمة لتكوين شحنة سالبة مقدارها -1.0 C؟",
                            "en": "How many extra electrons are required to produce a negative charge of -1.0 C?"
                        },
                        "options": [
                            {"ar": "6.25 × 10¹⁸ إلكترون", "en": "6.25 × 10¹⁸ electrons"},
                            {"ar": "1.60 × 10¹⁹ إلكترون", "en": "1.60 × 10¹⁹ electrons"},
                            {"ar": "6.25 × 10¹⁵ إلكترون", "en": "6.25 × 10¹⁵ electrons"},
                            {"ar": "1.00 × 10¹⁹ إلكترون", "en": "1.00 × 10¹⁹ electrons"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "باستخدام القانون n = q / e: n = 1.0 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ إلكترون.",
                            "en": "Using the formula n = q / e: n = 1.0 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثالث: طرق الشحن الكهربائي والآليات",
                    "en": "🔹 Part 3: Methods of Electric Charging and Mechanisms"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "عند دلك ساق من الزجاج بقطعة من الحرير، تصبح ساق الزجاج موجبة الشحنة لأن الإلكترونات:",
                            "en": "When a glass rod is rubbed with a silk cloth, the glass rod becomes positively charged because electrons:"
                        },
                        "options": [
                            {"ar": "انتقلت من الزجاج إلى الحرير", "en": "Transferred from glass to silk"},
                            {"ar": "انتقلت من الحرير إلى الزجاج", "en": "Transferred from silk to glass"},
                            {"ar": "تلاشت داخل الزجاج تماماً", "en": "Destroyed inside the glass completely"},
                            {"ar": "تحولت إلى بروتونات موجبة", "en": "Transformed into positive protons"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الزجاج يفقد إلكترونات لصالح الحرير أثناء الدلك، مما يجعله مشحوناً بالإيجاب والحرير بالسالب.",
                            "en": "Glass loses electrons to silk during rubbing, making it positively charged and silk negatively charged."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما طريقة الشحن التي يتم فيها تلامس جسم مشحون مع جسم متعادل لنقل الشحنة مباشرة؟",
                            "en": "Which charging method involves touching a charged object to a neutral object to transfer charge directly?"
                        },
                        "options": [
                            {"ar": "التوصيل (التماس)", "en": "Conduction (touching)"},
                            {"ar": "الحث (التقريب دون تلامس)", "en": "Induction (without touching)"},
                            {"ar": "الدلك (الاحتكاك)", "en": "Friction (rubbing)"},
                            {"ar": "التأريض", "en": "Grounding"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الشحن بالتماس أو التوصيل يتطلب ملامسة فيزيائية مباشرة، وتنتقل الشحنات المتشابهة لتتوزع بين الجسمين.",
                            "en": "Charging by conduction requires direct physical contact, transferring similar charges between the two objects."
                        }
                    },
                    {
                        "q": {
                            "ar": "عند شحن موصل متعادل بالحث باستخدام قضيب سالب الشحنة وخط تأريض، فما هي الشحنة النهائية للموصل؟",
                            "en": "When a neutral conductor is charged by induction using a negatively charged rod and a grounding wire, what is the final charge of the conductor?"
                        },
                        "options": [
                            {"ar": "موجبة الشحنة", "en": "Positive charge"},
                            {"ar": "سالبة الشحنة", "en": "Negative charge"},
                            {"ar": "متعادل الشحنة", "en": "Neutral charge"},
                            {"ar": "تعتمد على حجم سلك التأريض", "en": "Depends on the grounding wire size"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "في الشحن بالحث، يكتسب الجسم شحنة مخالفة لشحنة المؤثر. قضيب سالب الشحنة يدفع الإلكترونات الحرة للأرض عبر سلك التأريض، تاركاً شحنة موجبة على الموصل.",
                            "en": "In charging by induction, the object acquires a charge opposite to the inducing source. A negative rod repels electrons to the ground, leaving a net positive charge."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي عملية توصيل جسم مشحون بالأرض للتخلص من الشحنات الزائدة؟",
                            "en": "What is the process of connecting a charged body to the Earth to remove excess charges?"
                        },
                        "options": [
                            {"ar": "التأريض (Grounding)", "en": "Grounding"},
                            {"ar": "العزل (Insulation)", "en": "Insulation"},
                            {"ar": "الاستقطاب (Polarization)", "en": "Polarization"},
                            {"ar": "الحث المغناطيسي", "en": "Magnetic induction"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "التأريض هو توصيل جسم بالأرض عبر سلك موصل، وتعمل الأرض كخزان ضخم يمتص أو يزود الإلكترونات لتعديل شحنة الجسم.",
                            "en": "Grounding is connecting an object to the Earth. The Earth acts as a vast reservoir that can absorb or supply electrons to neutralize the object."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الرابع: الموصلات والعوازل والكشاف الكهربائي",
                    "en": "🔹 Part 4: Conductors, Insulators & Electroscope"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "لماذا تعتبر المعادن (مثل النحاس والألومنيوم) موصلات ممتازة للكهرباء؟",
                            "en": "Why are metals (such as copper and aluminum) excellent conductors of electricity?"
                        },
                        "options": [
                            {"ar": "لأنها تحتوي على إلكترونات حرة الحركة", "en": "Because they contain free, highly mobile electrons"},
                            {"ar": "لأن بروتوناتها تتحرك بحرية خارج النواة", "en": "Because their protons move freely outside the nucleus"},
                            {"ar": "لأنها شديدة الصلابة ومقاومة للحرارة", "en": "Because they are highly solid and heat resistant"},
                            {"ar": "لعدم وجود أي إلكترونات في ذراتها", "en": "Because they have no electrons in their atoms"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تتميز الموصلات بوجود إلكترونات حرة (إلكترونات التكافؤ ضعيفة الارتباط) التي تتحرك بسهولة داخل المادة.",
                            "en": "Conductors are characterized by free electrons (weakly bound valence electrons) that move easily within the material."
                        }
                    },
                    {
                        "q": {
                            "ar": "أي من المواد التالية تصنف كعازل كهربائي قوي؟",
                            "en": "Which of the following materials is classified as a strong electrical insulator?"
                        },
                        "options": [
                            {"ar": "المطاط البلاستيكي", "en": "Plastic rubber"},
                            {"ar": "النحاس الأصفر", "en": "Brass copper"},
                            {"ar": "محلول ملح الطعام", "en": "Saltwater solution"},
                            {"ar": "السيليكون النقي", "en": "Pure silicon"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المطاط والزجاج والبلاستيك هي مواد عازلة قوية تمنع حركة الشحنات بسبب ارتباط إلكتروناتها الوثيق بالذرات.",
                            "en": "Rubber, glass, and plastics are strong insulators because their electrons are tightly bound to atoms."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما فائدة الكشاف الكهربائي في المعمل الفيزيائي؟",
                            "en": "What is the primary function of an electroscope in a physics laboratory?"
                        },
                        "options": [
                            {"ar": "الكشف عن الشحنات وتحديد نوعها تقريبياً", "en": "Detecting charges and identifying their approximate type"},
                            {"ar": "قياس شدة التيار المستمر بالأمبير", "en": "Measuring direct current intensity in amperes"},
                            {"ar": "توليد كميات هائلة من الشحنات الاستاتيكية", "en": "Generating vast amounts of static charges"},
                            {"ar": "قياس مقاومة المواد الصلبة بدقة", "en": "Measuring the electrical resistance of solids precisely"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "يستخدم الكشاف الكهربائي ذو الورقتين الذهبيتين للكشف عن وجود الشحنة الكهربائية وتحديد نوعها بالحث.",
                            "en": "A gold-leaf electroscope is used to detect the presence of electric charge and determine its type through induction."
                        }
                    },
                    {
                        "q": {
                            "ar": "ماذا يحدث لورقتي كشاف كهربائي مشحون بشحنة موجبة عند تقريب جسم مشحون بشحنة موجبة أخرى من قرصه دون تلامس؟",
                            "en": "What happens to the leaves of a positively charged electroscope when another positively charged object is brought near its plate without touching?"
                        },
                        "options": [
                            {"ar": "يزداد انفراجهما", "en": "Their divergence increases"},
                            {"ar": "يقل انفراجهما (ينطبقان)", "en": "Their divergence decreases (they close)"},
                            {"ar": "لا يحدث لهما أي تغيير", "en": "No change occurs to them"},
                            {"ar": "تتحرك الورقتان بشكل اهتزازي مستمر", "en": "The leaves vibrate continuously"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تقريب شحنة موجبة يدفع بالمزيد من الشحنات الموجبة (عن طريق سحب الإلكترونات للأعلى نحو القرص) إلى الورقتين في الأسفل، مما يجعلهما أكثر إيجابية وبالتالي يزداد التنافر والانفراج.",
                            "en": "Bringing a positive charge near pulls electrons up to the disk, leaving more positive charge on the leaves, which increases their repulsion and divergence."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الخامس: مهارات التفكير والتطبيقات العملية والتحليل",
                    "en": "🔹 Part 5: Higher Order Thinking, Applications & Analysis"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "عند دلك بالون من المطاط بالشعر وتقريبه من جدار متعادل كهربائياً، يلتصق البالون بالجدار. ما التفسير العلمي الدقيق لهذه الظاهرة؟",
                            "en": "When a rubber balloon is rubbed with hair and brought close to a neutral wall, it sticks to the wall. What is the scientific explanation?"
                        },
                        "options": [
                            {"ar": "تحدث عملية استقطاب (شحن بالحث الموضعي) لسطح الجدار المتعادل", "en": "Polarization (localized induction) occurs on the surface of the neutral wall"},
                            {"ar": "ينتقل جزء من الإلكترونات من الجدار إلى البالون مباشرة", "en": "Some electrons transfer directly from the wall to the balloon"},
                            {"ar": "يتحول الجدار فجأة إلى موصل فائق الشحنة", "en": "The wall suddenly turns into a highly charged superconductor"},
                            {"ar": "الجاذبية الأرضية تزداد تحت تأثير البالون", "en": "Gravity increases under the influence of the balloon"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تقريب البالون المشحون بالسالب يؤدي لاستقطاب جزيئات الجدار (إزاحة خفيفة للإلكترونات بعيداً) تاركاً شحنة موجبة موضعية قريبة تجذب البالون.",
                            "en": "Bringing the negatively charged balloon near polarizes the wall molecules (pushing electrons slightly away), leaving a localized positive charge that attracts the balloon."
                        }
                    },
                    {
                        "q": {
                            "ar": "كرتان معدنيتان متماثلتان تماماً، الأولى شحنتها +10 nC والثانية شحنتها -2 nC. تلامستا ثم انفصلتا. ما الشحنة النهائية لكل كرة؟",
                            "en": "Two identical metal spheres carry charges of +10 nC and -2 nC. They touch and then separate. What is the final charge on each sphere?"
                        },
                        "options": [
                            {"ar": "+4 nC لكل كرة", "en": "+4 nC on each sphere"},
                            {"ar": "+8 nC لكل كرة", "en": "+8 nC on each sphere"},
                            {"ar": "+6 nC لكل كرة", "en": "+6 nC on each sphere"},
                            {"ar": "-4 nC لكل كرة", "en": "-4 nC on each sphere"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بسبب التماثل، تتوزع الشحنة الكلية بالتساوي: q_total = (+10) + (-2) = +8 nC. بعد الانفصال، شحنة كل كرة = +8 / 2 = +4 nC.",
                            "en": "Due to symmetry, the total charge divides equally: q_total = (+10) + (-2) = +8 nC. After separation, each sphere gets +8 / 2 = +4 nC."
                        }
                    },
                    {
                        "q": {
                            "ar": "كيف يمكن تفسير صدمة الكهرباء الساكنة الخفيفة التي تشعر بها أحياناً عند ملامسة مقبض الباب المعدني بعد المشي على سجادة؟",
                            "en": "How can you explain the mild static shock you sometimes feel when touching a metal doorknob after walking on a carpet?"
                        },
                        "options": [
                            {"ar": "تفريغ كهربائي سريع ومفاجئ للشحنات المتراكمة على جسمك بدلك السجادة", "en": "A rapid and sudden electrostatic discharge of accumulated charges from your body from friction"},
                            {"ar": "بسبب ارتفاع رطوبة الجو التي تمنع الكهرباء الساكنة", "en": "Due to high humidity preventing static build-up"},
                            {"ar": "ارتداد تيار كهربائي متردد AC من مقبض الباب مباشرة", "en": "An AC current feedback from the metal doorknob directly"},
                            {"ar": "انصهار جزئي لطبقة الجلد الخارجية نتيجة الاحتكاك", "en": "Partial melting of the outer skin layer due to friction"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تراكم الشحنات الساكنة على جسمك بالدلك يبحث عن ممر للتفريغ السريع عند ملامسة موصل مثل مقبض الباب المعدني الموصل.",
                            "en": "Friction accumulates static charges on your body, which rapidly discharge upon contacting a conductor like a metal doorknob."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما العلاقة بين الرطوبة الجوية وتراكم شحنات الكهرباء الساكنة على الأجسام؟",
                            "en": "What is the relationship between air humidity and the accumulation of static charges on objects?"
                        },
                        "options": [
                            {"ar": "الرطوبة العالية تقلل تراكم الشحنات لأن بخار الماء في الهواء يسهل تفريغها تدريجياً", "en": "High humidity reduces charge build-up because water vapor in air facilitates gradual discharge"},
                            {"ar": "الرطوبة العالية تزيد تراكم الشحنات بشكل هائل", "en": "High humidity increases charge build-up enormously"},
                            {"ar": "لا توجد أي علاقة بين الرطوبة والكهرباء الساكنة", "en": "There is no relationship between humidity and static electricity"},
                            {"ar": "الرطوبة تحول جميع المواد العازلة إلى موصلات فائقة", "en": "Humidity turns all insulators into superconductors"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الهواء الرطب يحتوي على جزيئات ماء تساعد في تسريب وتفريغ الشحنات الكهربائية الساكنة تدريجياً من الأجسام، ولهذا يقل الإحساس بالصدمات في الأيام الرطبة.",
                            "en": "Moist air contains water molecules that leak and bleed off static charges gradually, reducing static shocks in humid weather."
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "12Jen-phy-T1-1.2-exam",
        "title_ar": "امتحان الفيزياء 12 عام - الوحدة 1 الدرس 2 (القوة الكهروستاتيكية وقانون كولوم)",
        "title_en": "Grade 12 Physics Exam - Unit 1 Lesson 2 (Coulomb's Law)",
        "desc_ar": "اختبار شامل يغطي صياغة قانون كولوم، الثوابت الفيزيائية، العلاقات التناسبية، وحساب محصلة القوى الكهربائية في بعد واحد وفي بعدين بتطبيق مبدأ التراكب وتحليل المتجهات.",
        "sections": [
            {
                "title": {
                    "ar": "🔹 الجزء الأول: قانون كولوم والعوامل المؤثرة على القوة",
                    "en": "🔹 Part 1: Coulomb's Law & Factors Affecting Force"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما هي الصيغة الرياضية الصحيحة لقانون كولوم لحساب القوة الكهربية المتبادلة بين شحنتين؟",
                            "en": "What is the correct mathematical formula of Coulomb's law for the electrostatic force between two charges?"
                        },
                        "options": [
                            {"ar": "F = k · |q₁ · q₂| / r²", "en": "F = k · |q₁ · q₂| / r²"},
                            {"ar": "F = k · |q₁ · q₂| · r²", "en": "F = k · |q₁ · q₂| · r²"},
                            {"ar": "F = k · |q₁ + q₂| / r", "en": "F = k · |q₁ + q₂| / r"},
                            {"ar": "F = |q₁ · q₂| / (k · r²)", "en": "F = |q₁ · q₂| / (k · r²)"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "قانون كولوم ينص على أن القوة تتناسب طردياً مع حاصل ضرب الشحنتين وعكسياً مع مربع المسافة بينهما.",
                            "en": "Coulomb's Law states that force is directly proportional to the product of the charges and inversely proportional to the square of the distance."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا تضاعفت المسافة بين شحنتين نقطيتين إلى مثلي ما كانت عليه (2r)، فماذا يحدث للقوة الكهروستاتيكية بينهما؟",
                            "en": "If the distance between two point charges is doubled (2r), what happens to the electrostatic force between them?"
                        },
                        "options": [
                            {"ar": "تقل إلى ربع قيمتها الأصلية", "en": "It decreases to one-fourth of its original value"},
                            {"ar": "تقل إلى نصف قيمتها الأصلية", "en": "It decreases to one-half of its original value"},
                            {"ar": "تتضاعف إلى مثلي قيمتها الأصلية", "en": "It doubles to twice its original value"},
                            {"ar": "تزداد إلى أربعة أمثال قيمتها الأصلية", "en": "It increases to four times its original value"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بما أن القوة تتناسب عكسياً مع مربع المسافة (1/r²)، فإن مضاعفة r إلى 2r تجعل القوة تقل بمعامل (1/2² = 1/4).",
                            "en": "Since the force is inversely proportional to the square of the distance (1/r²), doubling r to 2r reduces the force by a factor of 1/2² = 1/4."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي وحدة قياس ثابت كولوم (k) في النظام الدولي للوحدات (SI)؟",
                            "en": "What is the unit of Coulomb's constant (k) in the International System of Units (SI)?"
                        },
                        "options": [
                            {"ar": "N · m² / C²", "en": "N · m² / C²"},
                            {"ar": "C² / (N · m²)", "en": "C² / (N · m²)"},
                            {"ar": "N · C / m", "en": "N · C / m"},
                            {"ar": "J · m / C", "en": "J · m / C"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "من قانون كولوم k = F · r² / |q₁ · q₂|، وبالتالي الوحدة هي نيوتن في متر مربع لكل كولوم مربع.",
                            "en": "From Coulomb's law k = F · r² / |q₁ · q₂|, hence the unit is N · m² / C²."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا تضاعفت شحنة إحدى الكرتين إلى الضعف (2q₁) وبقيت المسافة والشحنة الأخرى ثابتة، فماذا يحدث للقوة المتبادلة بينهما؟",
                            "en": "If the charge of one of the spheres is doubled (2q₁) while keeping distance and the other charge constant, what happens to the force?"
                        },
                        "options": [
                            {"ar": "تتضاعف القوة إلى مثلي قيمتها الأصلية", "en": "The force doubles to twice its original value"},
                            {"ar": "تقل القوة إلى النصف", "en": "The force decreases to one-half"},
                            {"ar": "تزداد القوة إلى أربعة أمثال قيمتها", "en": "The force increases to four times its value"},
                            {"ar": "تبقى القوة ثابتة دون أي تغيير", "en": "The force remains constant without change"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "القوة تتناسب طردياً مع حاصل ضرب الشحنتين، ومضاعفة إحداهما تضاعف القوة الكلية بنسبة 2.",
                            "en": "Force is directly proportional to the product of charges, so doubling one charge doubles the total force."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثاني: حساب القوى في بعد واحد والمقارنات",
                    "en": "🔹 Part 2: Calculating Forces in 1D & Comparisons"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "شحنتان نقطيتان، الأولى q₁ = +2.0 μC والثانية q₂ = -4.0 μC، تفصلهما مسافة r = 0.3 m. ما مقدار القوة الكهروستاتيكية المتبادلة بينهما؟ (علماً بأن k ≈ 9.0 × 10⁹ N·m²/C²)",
                            "en": "Two point charges, q₁ = +2.0 μC and q₂ = -4.0 μC, are separated by r = 0.3 m. What is the magnitude of the electrostatic force between them? (k ≈ 9.0 × 10⁹ N·m²/C²)"
                        },
                        "options": [
                            {"ar": "0.8 N", "en": "0.8 N"},
                            {"ar": "8.0 N", "en": "8.0 N"},
                            {"ar": "2.4 N", "en": "2.4 N"},
                            {"ar": "0.24 N", "en": "0.24 N"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "F = k · |q₁ · q₂| / r² = (9.0 × 10⁹) · (2.0 × 10⁻⁶ · 4.0 × 10⁻⁶) / 0.3² = 9.0 × 10⁹ · 8.0 × 10⁻¹² / 0.09 = 0.072 / 0.09 = 0.8 N.",
                            "en": "F = k · |q₁ · q₂| / r² = (9.0 × 10⁹) · (2.0 × 10⁻⁶ · 4.0 × 10⁻⁶) / 0.3² = 9.0 × 10⁹ · 8.0 × 10⁻¹² / 0.09 = 0.072 / 0.09 = 0.8 N."
                        }
                    },
                    {
                        "q": {
                            "ar": "شحنة q₁ تؤثر بقوة مقدارها 10 N على شحنة q₂. ما القوة التي تؤثر بها شحنة q₂ على شحنة q₁؟",
                            "en": "Charge q₁ exerts a force of 10 N on charge q₂. What force does charge q₂ exert on charge q₁?"
                        },
                        "options": [
                            {"ar": "10 N مساوية لها في المقدار ومعاكسة في الاتجاه", "en": "10 N, equal in magnitude and opposite in direction"},
                            {"ar": "تعتمد على قيمة شحنة q₂ تحديداً", "en": "Depends on the specific charge of q₂"},
                            {"ar": "نصف القوة أي 5 N فقط", "en": "Half the force, i.e., 5 N only"},
                            {"ar": "ضعف القوة أي 20 N دائماً", "en": "Double the force, i.e., 20 N always"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "وفق قانون نيوتن الثالث، القوى متبادلة وتكون متساوية في المقدار ومعاكسة في الاتجاه دائماً: F₁₂ = -F₂₁.",
                            "en": "According to Newton's third law, electrostatic forces are mutual, always equal in magnitude and opposite in direction: F₁₂ = -F₂₁."
                        }
                    },
                    {
                        "q": {
                            "ar": "ماذا تمثل القيمة الثابتة ε₀ في الصياغة المتقدمة لقانون كولوم؟",
                            "en": "What does the constant ε₀ represent in the advanced formulation of Coulomb's Law?"
                        },
                        "options": [
                            {"ar": "سماحية الفراغ (الوسط العازل)", "en": "Permittivity of free space (vacuum)"},
                            {"ar": "ثابت قوة التجاذب الجاذبية", "en": "Gravitational attraction constant"},
                            {"ar": "مقاومة الهواء للاحتكاك الاستاتيكي", "en": "Air resistance to static friction"},
                            {"ar": "معامل التوصيل الكهربي للمعدن", "en": "Electrical conductivity of metals"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الثابت ε₀ هو سماحية الفراغ وتساوي 8.85 × 10⁻¹² C² / (N · m²). ويرتبط بثابت كولوم بالعلاقة k = 1 / (4πε₀).",
                            "en": "The constant ε₀ is the permittivity of free space, equal to 8.85 × 10⁻¹² C² / (N · m²). It relates to Coulomb's constant via k = 1 / (4πε₀)."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا وُضعت شحنة ثالثة موجبة q₃ في منتصف المسافة تماماً بين شحنتين متماثلتين وموجبتين (q₁ = q₂)، فكم تكون القوة المحصلة المؤثرة على q₃؟",
                            "en": "If a third positive charge q₃ is placed exactly midway between two identical positive charges (q₁ = q₂), what is the net force on q₃?"
                        },
                        "options": [
                            {"ar": "صفر", "en": "Zero"},
                            {"ar": "ضعف القوة الناتجة عن إحدى الشحنتين", "en": "Double the force exerted by one of the charges"},
                            {"ar": "نصف القوة الناتجة عن إحدى الشحنتين", "en": "Half the force exerted by one of the charges"},
                            {"ar": "تعتمد القيمة على قيمة الشحنة q₃ وتكون لانهائية", "en": "The value depends on q₃ and is infinite"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الشحنتان المتماثلتان تؤثران بقوتين متساويتين في المقدار ومتعاكستين في الاتجاه على الشحنة الثالثة الموضوعة في المنتصف، فتلاشي كل منهما الأخرى وتكون المحصلة صفراً.",
                            "en": "The two identical charges exert equal but opposite forces on the midway charge, canceling each other out, making the net force zero."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثالث: مبدأ التراكب والقوى المتراكبة",
                    "en": "🔹 Part 3: Superposition Principle & Overlapping Forces"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "على ماذا ينص مبدأ التراكب (Superposition) في الكهروستاتيكية؟",
                            "en": "What does the superposition principle state in electrostatics?"
                        },
                        "options": [
                            {"ar": "أن القوة المحصلة المؤثرة على أي شحنة هي المجموع المتجه للقوى الفردية المؤثرة عليها من باقي الشحنات", "en": "That the net force on any charge is the vector sum of the individual forces exerted on it by all other charges"},
                            {"ar": "أن القوة المحصلة هي المجموع الجبري للكتل والمسافات معاً", "en": "That the net force is the algebraic sum of masses and distances combined"},
                            {"ar": "أن القوة الكلية تنعدم تماماً بتعدد الشحنات في الفراغ", "en": "That the total force vanishes completely with multiple charges in space"},
                            {"ar": "أن كل شحنة تضاعف من قوة الشحنات المجاورة تلقائياً", "en": "That each charge automatically doubles the force of neighboring charges"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "مبدأ التراكب يتيح لنا جمع القوى الكهروستاتيكية كمتجهات للحصول على المحصلة النهائية.",
                            "en": "The superposition principle allows us to sum electrostatic forces as vectors to obtain the net force."
                        }
                    },
                    {
                        "q": {
                            "ar": "ثلاث شحنات تقع على خط مستقيم واحد. الشحنة A تؤثر على B بقوة 5 N باتجاه اليمين، والشحنة C تؤثر على B بقوة 3 N باتجاه اليسار. ما القوة المحصلة على الشحنة B؟",
                            "en": "Three charges lie on a straight line. Charge A exerts a force of 5 N to the right on B, and C exerts 3 N to the left on B. What is the net force on B?"
                        },
                        "options": [
                            {"ar": "2 N باتجاه اليمين", "en": "2 N to the right"},
                            {"ar": "8 N باتجاه اليمين", "en": "8 N to the right"},
                            {"ar": "2 N باتجاه اليسار", "en": "2 N to the left"},
                            {"ar": "15 N باتجاه اليمين", "en": "15 N to the right"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بما أن القوتين في اتجاهين متعاكسين، نطرح المقادير ونأخذ اتجاه الأكبر: 5 N - 3 N = 2 N باتجاه اليمين.",
                            "en": "Since the forces are in opposite directions, subtract their magnitudes and take the direction of the larger force: 5 N - 3 N = 2 N to the right."
                        }
                    },
                    {
                        "q": {
                            "ar": "عند وضع شحنة اختبار بالقرب من شحنتين، كيف تؤثر شحنة الاختبار على القوة المتبادلة بين الشحنتين الأصليتين؟",
                            "en": "When a test charge is placed near two charges, how does it affect the mutual force between the two original charges?"
                        },
                        "options": [
                            {"ar": "لا تؤثر عليها مطلقاً، فالقوة بين أي شحنتين مستقلة عن وجود شحنات أخرى", "en": "It does not affect it at all, as the force between any two charges is independent of others"},
                            {"ar": "تضاعف القوة بين الشحنتين الأصليتين فوراً", "en": "It instantly doubles the force between the original charges"},
                            {"ar": "تؤدي لإلغاء القوة المتبادلة بين الشحنتين الأصليتين", "en": "It leads to the cancellation of the mutual force between the originals"},
                            {"ar": "تعتمد القوة على طبيعة المادة العازلة للقرص الحساس", "en": "The force depends on the nature of the insulator of the sensitive disk"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "القوة المتبادلة بين أي شحنتين تعتمد فقط على مقدار شحنتيهما ومربع المسافة بينهما، ولا تتأثر بوجود شحنات إضافية في الفراغ (رغم أن القوة المحصلة الكلية على كل شحنة ستختلف).",
                            "en": "The mutual force between any two charges depends only on their values and the square of the distance between them, unaffected by third charges."
                        }
                    },
                    {
                        "q": {
                            "ar": "أي مما يلي يصف بدقة العلاقة بين القوة الكهروستاتيكية وقوة الجاذبية النيوتونية؟",
                            "en": "Which of the following accurately describes the relation between electrostatic force and gravitational force?"
                        },
                        "options": [
                            {"ar": "القوة الكهروستاتيكية أقوى بكثير من قوة الجاذبية، وتكون جاذبة أو نافرة بينما الجاذبية جاذبة فقط", "en": "Electrostatic force is much stronger, and can be attractive or repulsive, while gravity is only attractive"},
                            {"ar": "قوة الجاذبية أقوى بكثير من القوة الكهروستاتيكية وتعمل على مسافات أقصر", "en": "Gravitational force is much stronger and works at shorter distances"},
                            {"ar": "كلتا القوتين لا تعتمدان على المسافة العكسية مطلقاً", "en": "Both forces are completely independent of distance inverse"},
                            {"ar": "القوة الكهروستاتيكية تتناسب طردياً مع الكتل بينما الجاذبية تتناسب مع الشحنات", "en": "Electrostatic force is proportional to masses while gravity is proportional to charges"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "القوة الكهربائية أقوى بمرات هائلة من قوة الجاذبية (مثلاً بين البروتون والإلكترون)، كما أن الشحنات يمكن أن تتجاذب أو تتنافر بينما الكتل تتجاذب فقط.",
                            "en": "Electrostatic force is vastly stronger than gravity, and can be attractive or repulsive, whereas gravity is attractive only."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الرابع: حساب القوى في بعدين وتحليل المتجهات",
                    "en": "🔹 Part 4: Calculating Forces in 2D & Vector Analysis"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "إذا كانت هناك قوتان كهربائيتان تؤثران على شحنة، القوة الأولى Fx = 3.0 N على طول المحور الأفقي، والقوة الثانية Fy = 4.0 N على طول المحور الرأسي. ما مقدار القوة المحصلة؟",
                            "en": "If two electrostatic forces act on a charge: Fx = 3.0 N along the horizontal axis, and Fy = 4.0 N along the vertical axis. What is the net force magnitude?"
                        },
                        "options": [
                            {"ar": "5.0 N", "en": "5.0 N"},
                            {"ar": "7.0 N", "en": "7.0 N"},
                            {"ar": "1.0 N", "en": "1.0 N"},
                            {"ar": "25.0 N", "en": "25.0 N"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "باستخدام نظرية فيثاغورس للقوى المتعامدة: F = √(Fx² + Fy²) = √(3² + 4²) = √25 = 5.0 N.",
                            "en": "Using Pythagoras theorem for perpendicular forces: F = √(Fx² + Fy²) = √(3² + 4²) = √25 = 5.0 N."
                        }
                    },
                    {
                        "q": {
                            "ar": "كيف نحدد زاوية اتجاه القوة المحصلة في السؤال السابق بالنسبة للمحور الأفقي الموجب x؟",
                            "en": "How do we find the direction angle of the net force in the previous question relative to the positive x-axis?"
                        },
                        "options": [
                            {"ar": "θ = tan⁻¹(Fy / Fx)", "en": "θ = tan⁻¹(Fy / Fx)"},
                            {"ar": "θ = cos⁻¹(Fy / Fx)", "en": "θ = cos⁻¹(Fy / Fx)"},
                            {"ar": "θ = sin⁻¹(Fx / Fy)", "en": "θ = sin⁻¹(Fx / Fy)"},
                            {"ar": "θ = tan⁻¹(Fx / Fy)", "en": "θ = tan⁻¹(Fx / Fy)"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "زاوية الاتجاه تُحسب دائماً من ظل الزاوية العكسي للمركبة الرأسية مقسومة على المركبة الأفقية: θ = tan⁻¹(Fy / Fx).",
                            "en": "The direction angle is calculated using the inverse tangent of the vertical component divided by the horizontal component: θ = tan⁻¹(Fy / Fx)."
                        }
                    },
                    {
                        "q": {
                            "ar": "تؤثر شحنتان متماثلتان وموجبتان A و B موضوعتان على محور الصادات عند (0, 1) و (0, -1) بقوتين على شحنة ثالثة موجبة موضوعة عند نقطة الأصل (0, 0). كم تكون محصلة القوى الرأسية Fy على الشحنة عند الأصل؟",
                            "en": "Two identical positive charges A and B placed on the y-axis at (0, 1) and (0, -1) exert forces on a third positive charge at the origin (0, 0). What is the net vertical force Fy on the origin charge?"
                        },
                        "options": [
                            {"ar": "صفر", "en": "Zero"},
                            {"ar": "ضعف القوة المنفردة لـ A", "en": "Double the individual force of A"},
                            {"ar": "مساوية لقيمة ثابت كولوم k", "en": "Equal to the Coulomb constant k"},
                            {"ar": "نصف القوة المنفردة لـ B", "en": "Half the individual force of B"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "القوة الناتجة عن الشحنة العليا تدفع الشحنة المركزية للأسفل، بينما الشحنة السفلى تدفعها للأعلى بقوة متساوية، فتلاشي القوتان الرأسيان بعضهما ليكون المجموع صفراً.",
                            "en": "The upper charge pushes the origin charge down, while the lower charge pushes it up with equal force, resulting in zero net vertical force."
                        }
                    },
                    {
                        "q": {
                            "ar": "لماذا يجب استخدام التحليل الإتجاهي (Vector Analysis) عند حساب القوة المحصلة لعدة شحنات في مستوٍ ثنائي الأبعاد؟",
                            "en": "Why must vector analysis be used when calculating the net force of multiple charges in a 2D plane?"
                        },
                        "options": [
                            {"ar": "لأن القوة كمية متجهة لها مقدار واتجاه، ولا يمكن جمعها جمعاً جبرياً بسيطاً إلا إذا كانت على خط مستقيم واحد", "en": "Because force is a vector quantity with magnitude and direction, and cannot be summed algebraically unless on a straight line"},
                            {"ar": "لأن قانون كولوم يفقد صحته في الفراغ ثنائي الأبعاد", "en": "Because Coulomb's law loses validity in 2D space"},
                            {"ar": "لتجنب حدوث قيم سالبة للمسافات r في المعادلة", "en": "To avoid negative values of distances r in the equation"},
                            {"ar": "لأن الشحنات تتحرك بسرعة الضوء دائماً", "en": "Because charges always move at the speed of light"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "القوى متجهات، وبالتالي يجب تحليلها إلى مركبات سينية وصادية ثم جمعها اتجاهياً للحصول على المحصلة والاتجاه الصحيح.",
                            "en": "Forces are vectors, so they must be resolved into x and y components and summed vectorially to find the correct net magnitude and direction."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الخامس: مهارات التفكير العليا والمسائل الفيزيائية المتقدمة",
                    "en": "🔹 Part 5: Higher Order Thinking & Advanced Physics Problems"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "إذا زادت الشحنة الأولى بمقدار الضعف (2q₁) والشحنة الثانية بمقدار ثلاثة أضعاف (3q₂)، وقُسمت المسافة بينهما على النصف (r/2). فكم تصبح القوة الكهروستاتيكية الجديدة مقارنة بالأصلية؟",
                            "en": "If the first charge is doubled (2q₁), the second is tripled (3q₂), and the distance between them is halved (r/2), what is the new force compared to the original?"
                        },
                        "options": [
                            {"ar": "24 ضعف القوة الأصلية", "en": "24 times the original force"},
                            {"ar": "12 ضعف القوة الأصلية", "en": "12 times the original force"},
                            {"ar": "6 أضعاف القوة الأصلية", "en": "6 times the original force"},
                            {"ar": "48 ضعف القوة الأصلية", "en": "48 times the original force"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "F' = k · |(2q₁) · (3q₂)| / (r/2)² = k · 6|q₁q₂| / (r²/4) = 24 · (k · |q₁q₂| / r²) = 24F.",
                            "en": "F' = k · |(2q₁) · (3q₂)| / (r/2)² = k · 6|q₁q₂| / (r²/4) = 24 · (k · |q₁q₂| / r²) = 24F."
                        }
                    },
                    {
                        "q": {
                            "ar": "عند وضع شحنتين حرتين في الهواء، تنجذبان نحو بعضهما. أثناء حركتهما واقترابهما، ماذا يحدث لمقدار القوة المتبادلة بينهما وتسارعهما؟",
                            "en": "Two free charges in air attract each other. As they move closer, what happens to their mutual force and their acceleration?"
                        },
                        "options": [
                            {"ar": "تزداد القوة ويزداد التسارع", "en": "The force increases and the acceleration increases"},
                            {"ar": "تقل القوة ويقل التسارع", "en": "The force decreases and the acceleration decreases"},
                            {"ar": "تزداد القوة ويبقى التسارع ثابتاً", "en": "The force increases and the acceleration remains constant"},
                            {"ar": "تبقى القوة ثابتة ويتلاشى التسارع كلياً", "en": "The force remains constant and the acceleration vanishes completely"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "مع اقتراب الشحنات تقل المسافة r، فتزداد القوة الكهروستاتيكية بشكل كبير (F ∝ 1/r²)، وبما أن الكتلة ثابتة، فإن التسارع يزداد أيضاً وفق قانون نيوتن الثاني (a = F/m).",
                            "en": "As they get closer, distance r decreases, increasing the force (F ∝ 1/r²). By Newton's second law (a = F/m), acceleration also increases."
                        }
                    },
                    {
                        "q": {
                            "ar": "لماذا لا نطبق قانون كولوم مباشرة على الكرات الموصلة الكبيرة والقريبة جداً من بعضها دون تعديل؟",
                            "en": "Why can we not apply Coulomb's Law directly to large conducting spheres placed very close to each other without modification?"
                        },
                        "options": [
                            {"ar": "بسبب حدوث هجرة وإعادة توزيع للشحنات (استقطاب) على أسطح الكرات، مما يغير المسافة الفعلية بين مراكز الشحنات", "en": "Because charge migration and redistribution (polarization) occur on the spheres, altering the effective distance between charge centers"},
                            {"ar": "لأن قانون كولوم لا يعمل إلا في درجات حرارة منخفضة جداً", "en": "Because Coulomb's law only works at extremely low temperatures"},
                            {"ar": "لأن الكرات الكبيرة تلغي الجاذبية الأرضية تماماً", "en": "Because large spheres completely cancel Earth's gravity"},
                            {"ar": "لأن الشحنات تتسرب إلى الهواء في الكرات الكبيرة تلقائياً", "en": "Because charges leak to the air automatically in large spheres"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "قانون كولوم يشترط 'الشحنات النقطية' (Point Charges). في الكرات الكبيرة القريبة، تعيد الشحنات توزيع نفسها بالحث (تتجمع على الأطراف القريبة أو البعيدة)، فلا تصبح الشحنة مركزة في المركز الهندسي.",
                            "en": "Coulomb's Law strictly assumes 'point charges'. In close large spheres, charges redistribute via induction, shifting the effective charge center away from the geometric center."
                        }
                    },
                    {
                        "q": {
                            "ar": "في تجربة معملية، عُلقت كرتان صغيرتان مشحونتان بالتماثل بواسطة خيطين خفيفين من نقطة تعليق واحدة. تباعدت الكرتان بزاوية معينة واستقرتا. ما القوى الثلاث المؤثرة على كل كرة عند الاتزان؟",
                            "en": "In a lab experiment, two identically charged small spheres are suspended by light strings from a single point. They repel and rest. What are the three forces acting on each sphere at equilibrium?"
                        },
                        "options": [
                            {"ar": "قوة الجاذبية (الوزن لأسفل)، وقوة الشد في الخيط، والقوة الكهروستاتيكية الأفقية", "en": "Gravitational force (weight downward), tension force in string, and horizontal electrostatic force"},
                            {"ar": "قوة الرياح، وقوة الاحتكاك، وقوة الضغط الجوي", "en": "Wind force, friction force, and atmospheric pressure force"},
                            {"ar": "قوة المغناطيس، وقوة التنافر الطاردة المركزية، وقوة القصور الذاتي", "en": "Magnetic force, centrifugal repulsive force, and inertia force"},
                            {"ar": "الوزن، وقوة كولوم، وقوة النواة القوية", "en": "Weight, Coulomb force, and strong nuclear force"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تتزن كل كرة تحت تأثير وزنها (m·g) لأسفل، وقوة كولوم النافرة أفقياً، وقوة الشد (T) على طول الخيط.",
                            "en": "Each sphere is in equilibrium under its weight (m·g) downward, horizontal electrostatic Coulomb force, and the tension force (T) along the string."
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "12Jen-phy-T1-2.1-exam",
        "title_ar": "امتحان الفيزياء 12 عام - الوحدة 2 الدرس 1 (قياس المجالات الكهربائية)",
        "title_en": "Grade 12 Physics Exam - Unit 2 Lesson 1 (Measuring Electric Fields)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي شدة المجال الكهربائي، شحنة الاختبار الموجبة، خطوط المجال الكهربائي وخصائصها الهندسية والفيزيائية، المجال الناشئ عن شحنة نقطية وقانون جاوس.",
        "sections": [
            {
                "title": {
                    "ar": "🔹 الجزء الأول: مفهوم شدة المجال الكهربائي وشحنة الاختبار",
                    "en": "🔹 Part 1: Electric Field Strength & Test Charge"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما هو التعريف الفيزيائي لشدة المجال الكهربائي (E) عند نقطة ما؟",
                            "en": "What is the physical definition of electric field strength (E) at a point?"
                        },
                        "options": [
                            {"ar": "القوة المؤثرة لكل وحدة شحنة موضوعة عند تلك النقطة (E = F / q)", "en": "The force exerted per unit charge placed at that point (E = F / q)"},
                            {"ar": "طاقة الوضع الكهربية المخزنة لكل وحدة مسافة", "en": "The electrical potential energy stored per unit distance"},
                            {"ar": "حاصل ضرب القوة الكهروستاتيكية في مربع الشحنة", "en": "The product of the electrostatic force and the square of the charge"},
                            {"ar": "معدل تدفق الإلكترونات في وحدة الزمن عبر الموصل", "en": "The flow rate of electrons per unit time through a conductor"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "شدة المجال الكهربي تُعرّف رياضياً بالنسبة بين القوة المؤثرة على شحنة اختبار وقيمة تلك الشحنة: E = F/q.",
                            "en": "Electric field strength is defined as the force acting on a test charge divided by the magnitude of that charge: E = F/q."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي وحدة القياس الدولية المشهورة لشدة المجال الكهربائي؟",
                            "en": "What is the standard International Unit (SI) for electric field strength?"
                        },
                        "options": [
                            {"ar": "N / C (نيوتن لكل كولوم) أو V / m (فولت لكل متر)", "en": "N / C (Newton per Coulomb) or V / m (Volt per Meter)"},
                            {"ar": "C / N (كولوم لكل نيوتن)", "en": "C / N (Coulomb per Newton)"},
                            {"ar": "J / C (جول لكل كولوم)", "en": "J / C (Joule per Coulomb)"},
                            {"ar": "W / m² (واط لكل متر مربع)", "en": "W / m² (Watt per square meter)"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "يُقاس المجال الكهربائي بوحدة N/C من الصيغة E=F/q، أو V/m من الصيغة المرتبطة بفرق الجهد والمسافة E=V/d.",
                            "en": "Electric field is measured in N/C from E=F/q, or V/m from E=V/d relating to potential difference and distance."
                        }
                    },
                    {
                        "q": {
                            "ar": "لماذا يجب أن تكون شحنة الاختبار (Test Charge q') المستخدمة لقياس المجال صغيرة جداً وموجبة؟",
                            "en": "Why must the test charge (q') used to measure an electric field be extremely small and positive?"
                        },
                        "options": [
                            {"ar": "لتجنب تعديل أو تشويه توزيع الشحنات الأصلية المولدة للمجال المراد قياسه", "en": "To avoid modifying or disturbing the original charge distribution creating the field"},
                            {"ar": "لأن الشحنات الكبيرة تحترق وتتلاشى في الهواء بسرعة", "en": "Because large charges burn and dissipate in the air rapidly"},
                            {"ar": "لكي تتحرك بسرعة تقارب سرعة الضوء أثناء القياس", "en": "So that it moves close to the speed of light during measurement"},
                            {"ar": "لتسهيل حساب ثابت كولوم دون الحاجة للكسور العشري", "en": "To facilitate calculating Coulomb's constant without decimal fractions"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "إذا كانت شحنة الاختبار كبيرة، فإن مجالها الخاص سيؤثر على الشحنات المصدرية ويحركها من مكانها، مما يغير المجال الأصلي المراد قياسه.",
                            "en": "If the test charge were large, its own electric field would exert forces on the source charges, rearranging them and altering the field being measured."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا وضعت شحنة مقدارها +2.0 × 10⁻⁶ C في مجال كهربائي، فتأثرت بقوة مقدارها 0.08 N. فما هي شدة المجال الكهربائي عند تلك النقطة؟",
                            "en": "If a charge of +2.0 × 10⁻⁶ C is placed in an electric field and experiences a force of 0.08 N, what is the electric field strength?"
                        },
                        "options": [
                            {"ar": "4.0 × 10⁴ N/C", "en": "4.0 × 10⁴ N/C"},
                            {"ar": "1.6 × 10⁻⁷ N/C", "en": "1.6 × 10⁻⁷ N/C"},
                            {"ar": "2.5 × 10⁴ N/C", "en": "2.5 × 10⁴ N/C"},
                            {"ar": "8.0 × 10³ N/C", "en": "8.0 × 10³ N/C"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "E = F / q = 0.08 / (2.0 × 10⁻⁶) = 8.0 × 10⁻٢ / (2.0 × 10⁻⁶) = 4.0 × 10⁴ N/C.",
                            "en": "E = F / q = 0.08 / (2.0 × 10⁻⁶) = 4.0 × 10⁴ N/C."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثاني: خطوط المجال الكهربائي وخصائصها الهندسية",
                    "en": "🔹 Part 2: Electric Field Lines & Geometric Properties"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما هو اتجاه خطوط المجال الكهربائي الاصطلاحي حول الشحنات؟",
                            "en": "What is the conventional direction of electric field lines around charges?"
                        },
                        "options": [
                            {"ar": "تخرج من الشحنات الموجبة وتدخل في الشحنات السالبة", "en": "Outward from positive charges and inward to negative charges"},
                            {"ar": "تخرج من الشحنات السالبة وتدخل في الشحنات الموجبة", "en": "Outward from negative charges and inward to positive charges"},
                            {"ar": "تدور في مسارات دائرية مغلقة حول الشحنات دائماً", "en": "Rotate in closed circular loops around the charges always"},
                            {"ar": "تكون موازية لسطح الشحنة دون الدخول أو الخروج", "en": "Parallel to the charge surface without entering or exiting"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "اصطلاحاً، يمثل اتجاه خطوط المجال اتجاه القوة المؤثرة على شحنة اختبار موجبة، لذلك فهي تبتعد عن الموجب وتقترب من السالب.",
                            "en": "By convention, field lines show the direction of force on a positive test charge, meaning they exit positive and enter negative charges."
                        }
                    },
                    {
                        "q": {
                            "ar": "لماذا لا يمكن لخطوط المجال الكهربائي أن تتقاطع أبداً في الفراغ؟",
                            "en": "Why can electric field lines never intersect in space?"
                        },
                        "options": [
                            {"ar": "لأن للمجال الكهربائي اتجاهاً واحداً محصلاً عند أي نقطة، والتقاطع يعني وجود اتجاهين مختلفين عند نفس النقطة", "en": "Because the electric field has a unique net direction at any point; intersection would imply two different directions at the same point"},
                            {"ar": "لأن الخطوط مصنوعة من مادة عازلة قوية تمنع التصادم", "en": "Because the lines are made of a strong insulating material preventing collision"},
                            {"ar": "لأن شدة المجال تتلاشى كلياً عند نقطة التقاطع", "en": "Because the field strength vanishes completely at the intersection point"},
                            {"ar": "لأن قانون كولوم يمنع تقاطع الخطوط ذات السرعات العالية", "en": "Because Coulomb's law prevents intersection of high-speed lines"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "عند أي نقطة في الفراغ يوجد متجه مجال محصل واحد فقط، ولو تقاطع خطان لكان هناك اتجاهان للمجال عند نقطة التقاطع وهذا مستحيل فيزيائياً.",
                            "en": "At any point, there is only one net electric field vector. If lines crossed, it would mean the field has two directions at that single point, which is physically impossible."
                        }
                    },
                    {
                        "q": {
                            "ar": "ماذا يدل تقارب وتزاحم خطوط المجال الكهربائي في منطقة ما؟",
                            "en": "What does a high density or crowding of electric field lines in a region indicate?"
                        },
                        "options": [
                            {"ar": "شدة مجال كهربائي قوية في تلك المنطقة", "en": "A strong electric field in that region"},
                            {"ar": "ضعف شدة المجال وتلاشيها تدريجياً", "en": "A weak electric field that vanishes gradually"},
                            {"ar": "انخفاض قيمة الشحنة المولدة للمجال", "en": "A low value of the charge generating the field"},
                            {"ar": "انعدام الجهد وتساوي المقادير الاستاتيكية", "en": "Zero potential and equality of static magnitudes"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "كثافة خطوط المجال (عدد الخطوط في وحدة المساحة العمودية) تتناسب طردياً مع شدة المجال الكهربائي E.",
                            "en": "The density of field lines (number of lines per perpendicular unit area) is directly proportional to the electric field strength E."
                        }
                    },
                    {
                        "q": {
                            "ar": "كيف تكون خطوط المجال الكهربائي بين لوحين متوازيين مشحونين بشحنتين متساويتين ومتضادتين (مجال منتظم)؟",
                            "en": "How do electric field lines appear between two parallel plates with equal and opposite charges (uniform field)?"
                        },
                        "options": [
                            {"ar": "خطوط مستقيمة ومتوازية وتفصل بينها مسافات متساوية وتتجه من اللوح الموجب إلى السالب", "en": "Straight, parallel lines with equal spacing, directed from the positive to the negative plate"},
                            {"ar": "خطوط منحنية دائرية تتركز في المركز الهندسي فقط", "en": "Curved circular lines concentrated only in the geometric center"},
                            {"ar": "خطوط متباعدة وعشوائية لا يحكمها أي مسار محدد", "en": "Diverging, random lines governed by no specific path"},
                            {"ar": "لا تتولد خطوط مجال مطلقاً بين اللوحين بسبب التعادل", "en": "No field lines generate between the plates due to neutralization"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المجال الكهربائي بين لوحين متوازيين مشحونين بشحنتين متضادتين هو مجال منتظم (ثابت الشدة والاتجاه)، وتكون خطوطه متوازية تماماً ومنتظمة التباعد من الموجب للسالب.",
                            "en": "The field between two oppositely charged parallel plates is uniform (constant magnitude and direction). Its lines are straight, parallel, and equally spaced."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثالث: المجال الناشئ عن شحنة نقطية والتراكب",
                    "en": "🔹 Part 3: E-field of Point Charges & Superposition"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما القانون الرياضي لحساب شدة المجال الكهربائي الناشئ عن شحنة نقطية Q على مسافة r منها؟",
                            "en": "What is the mathematical formula for the electric field strength of a point charge Q at a distance r?"
                        },
                        "options": [
                            {"ar": "E = k · Q / r²", "en": "E = k · Q / r²"},
                            {"ar": "E = k · Q · r²", "en": "E = k · Q · r²"},
                            {"ar": "E = k · Q / r", "en": "E = k · Q / r"},
                            {"ar": "E = F · Q / r²", "en": "E = F · Q / r²"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "من قانون كولوم وقانون شدة المجال: E = F / q = (k Q q / r²) / q = k Q / r².",
                            "en": "From Coulomb's law and field strength definition: E = F / q = (k Q q / r²) / q = k Q / r²."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا رُصد مجال كهربائي شدته E عند نقطة تبعد مسافة r عن شحنة نقطية، فكم تصبح شدة المجال إذا تضاعفت المسافة إلى الضعف (2r)؟",
                            "en": "If the electric field of a point charge is E at distance r, what does it become if the distance is doubled (2r)?"
                        },
                        "options": [
                            {"ar": "E / 4", "en": "E / 4"},
                            {"ar": "E / 2", "en": "E / 2"},
                            {"ar": "2 E", "en": "2 E"},
                            {"ar": "4 E", "en": "4 E"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "شدة المجال تتناسب عكسياً مع مربع المسافة (E ∝ 1/r²)، وبالتالي مضاعفة المسافة تقلل شدة المجال إلى الربع.",
                            "en": "The electric field strength is inversely proportional to the square of distance (E ∝ 1/r²), so doubling r reduces E to E/4."
                        }
                    },
                    {
                        "q": {
                            "ar": "شحنة نقطية Q = +4.0 nC. كم تبلغ شدة المجال الكهربائي المتولد عنها عند نقطة تبعد مسافة r = 2.0 m؟ (k ≈ 9.0 × 10⁹ N·m²/C²)",
                            "en": "A point charge Q = +4.0 nC. What is the electric field strength at a point 2.0 m away? (k ≈ 9.0 × 10⁹ N·m²/C²)"
                        },
                        "options": [
                            {"ar": "9.0 N/C", "en": "9.0 N/C"},
                            {"ar": "18.0 N/C", "en": "18.0 N/C"},
                            {"ar": "4.5 N/C", "en": "4.5 N/C"},
                            {"ar": "36.0 N/C", "en": "36.0 N/C"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "E = k · Q / r² = (9.0 × 10⁹) · (4.0 × 10⁻⁹) / (2.0)² = 36.0 / 4.0 = 9.0 N/C.",
                            "en": "E = k · Q / r² = (9.0 × 10⁹) · (4.0 × 10⁻⁹) / (2.0)² = 36.0 / 4.0 = 9.0 N/C."
                        }
                    },
                    {
                        "q": {
                            "ar": "كيف نطبق مبدأ التراكب لحساب المجال الكهربائي المحصل الناشئ عن عدة شحنات نقطية عند نقطة ما؟",
                            "en": "How do we apply the superposition principle to find the net electric field of multiple point charges at a point?"
                        },
                        "options": [
                            {"ar": "نحسب متجهات المجال الفردية الناتجة عن كل شحنة على حدة، ثم نجمعها جمعاً اتجاهياً", "en": "We calculate individual field vectors from each charge, then sum them vectorially"},
                            {"ar": "نجمع المقادير العددية للمجالات جمعاً حسابياً بسيطاً دون اعتبار للاتجاه", "en": "We sum the magnitudes of the fields algebraically without considering direction"},
                            {"ar": "نأخذ دائماً قيمة المجال الأكبر ونلغي المجالات الأخرى الصغير", "en": "We always take the value of the largest field and neglect smaller ones"},
                            {"ar": "نضرب قيم المجالات في بعضها البعض ثم نقسم على المسافة الكلية", "en": "We multiply the field values together and divide by the total distance"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المجال الكهربائي كمية متجهة، والمجال الكلي المحصل هو المجموع الاتجاهي لجميع مجالات الشحنات المحيطة: E_total = E₁ + E₂ + ...",
                            "en": "The electric field is a vector. The net field at any point is the vector sum of the individual fields of all charges: E_total = E₁ + E₂ + ..."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الرابع: المجال الكهربائي المنتظم وقانون جاوس",
                    "en": "🔹 Part 4: Uniform Electric Fields & Gauss's Law"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما العلاقة الرياضية لشدة المجال الكهربائي المنتظم (E) المتولد بين لوحين متوازيين تفصلهما مسافة d وفرق الجهد بينهما V؟",
                            "en": "What is the mathematical relation for the uniform electric field strength (E) between two parallel plates separated by distance d with potential difference V?"
                        },
                        "options": [
                            {"ar": "E = V / d", "en": "E = V / d"},
                            {"ar": "E = V · d", "en": "E = V · d"},
                            {"ar": "E = d / V", "en": "E = d / V"},
                            {"ar": "E = V² · d", "en": "E = V² · d"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المجال الكهربائي المنتظم يرتبط بفرق الجهد والمسافة بالعلاقة خطية بسيطة: E = V / d.",
                            "en": "The uniform electric field relates to potential difference and distance by the simple linear equation: E = V / d."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هو التدفق الكهربائي (Electric Flux Φ) عبر سطح ما؟",
                            "en": "What is electric flux (Φ) through a surface?"
                        },
                        "options": [
                            {"ar": "مقياس لعدد خطوط المجال الكهربائي التي تخترق سطحاً ما عمودياً", "en": "A measure of the number of electric field lines penetrating a surface perpendicularly"},
                            {"ar": "معدل تبديد الطاقة الحرارية في الأسطح المعدنية", "en": "The dissipation rate of thermal energy in metal surfaces"},
                            {"ar": "حجم الإلكترونات الحرة المتراكمة على مساحة سطح الموصل", "en": "The volume of free electrons accumulated on a conductor surface area"},
                            {"ar": "سرعة تحرك الشحنات عبر سطح الدائرة المغلقة", "en": "The speed of charges moving across a closed-loop surface"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "التدفق الكهربائي Φ هو حاصل الضرب النقطي لمتجه المجال ومتجه المساحة، وهو يمثل كمياً خطوط المجال التي تعبر السطح.",
                            "en": "Electric flux Φ is the dot product of the electric field vector and the area vector, representing the lines of force crossing the surface."
                        }
                    },
                    {
                        "q": {
                            "ar": "على ماذا ينص قانون جاوس (Gauss's Law) في الفيزياء الكهربائية؟",
                            "en": "What does Gauss's Law state in electrical physics?"
                        },
                        "options": [
                            {"ar": "التدفق الكهربائي الكلي عبر سطح مغلق يساوي الشحنة الصافية المحتواة بداخل السطح مقسومة على سماحية الفراغ", "en": "The total electric flux through a closed surface equals the net enclosed charge divided by permittivity"},
                            {"ar": "القوة المغناطيسية تتناسب طردياً مع مربع التيار المار في السلك", "en": "The magnetic force is directly proportional to the square of the current in a wire"},
                            {"ar": "الجهد الكهربائي يتناسب طردياً مع المقاومة عند ثبوت درجة الحرارة", "en": "Electric potential is directly proportional to resistance at a constant temperature"},
                            {"ar": "المجال الكهربائي يتلاشى دائماً عند اقتراب الإلكترونات من النواة الذرية", "en": "The electric field always vanishes as electrons approach the atomic nucleus"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "قانون جاوس يربط التدفق الكهربائي الشامل عبر سطح افتراضي مغلق (سطح جاوس) بالشحنة الداخلية: Φ = Q_enclosed / ε₀.",
                            "en": "Gauss's Law relates the net electric flux through an imaginary closed surface (Gaussian surface) to the enclosed charge: Φ = Q_enclosed / ε₀."
                        }
                    },
                    {
                        "q": {
                            "ar": "أين تتركز الشحنات الكهربائية الزائدة على موصل معدني صلب مشحون ومتزن كهروستاتيكياً؟",
                            "en": "Where do excess charges reside on a solid metallic conductor that is charged and in electrostatic equilibrium?"
                        },
                        "options": [
                            {"ar": "على السطح الخارجي للموصل تماماً", "en": "Entirely on the outer surface of the conductor"},
                            {"ar": "في المركز الهندسي الدقيق داخل الموصل", "en": "At the exact geometric center inside the conductor"},
                            {"ar": "تتوزع بالتساوي وبشكل متجانس في كامل حجم الموصل الداخلي والخارجي", "en": "Distributed equally and homogeneously throughout the internal and external volume"},
                            {"ar": "تتحرك باستمرار بين الداخل والخارج بسرعة مروعة", "en": "Move continuously between inside and outside at a terrifying speed"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بسبب قوى التنافر الكهروستاتيكي المتبادل، تبتعد الشحنات المتشابهة بأقصى ما يمكن عن بعضها، فتستقر بالكامل على السطح الخارجي للموصل المعدني، ويكون المجال الداخلي صفراً (E_inside = 0).",
                            "en": "Due to mutual electrostatic repulsion, similar charges repel to the maximum extent, settling entirely on the outer surface, making E_inside = 0."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الخامس: مهارات التحليل الفيزيائي والمسائل المتقدمة",
                    "en": "🔹 Part 5: Physical Analysis Skills & Advanced Problems"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "أي مما يلي يصف بدقة قيمة شدة المجال الكهربائي داخل تجويف موصل معدني مشحون ومتزن؟",
                            "en": "Which of the following accurately describes the electric field strength inside a cavity of a charged metallic conductor?"
                        },
                        "options": [
                            {"ar": "شدة المجال تساوي صفراً دائماً بغض النظر عن شكل الموصل أو شحنته الخارجية", "en": "The field strength is always zero regardless of the conductor shape or outer charge"},
                            {"ar": "شدة المجال تكون لانهائية عند حواف التجويف", "en": "The field strength is infinite at the cavity boundaries"},
                            {"ar": "تساوي قيمة المجال الخارجي مضروباً في ثابت كولوم", "en": "Equals the outer field value multiplied by Coulomb's constant"},
                            {"ar": "تتغير بشكل جيب دائم حسب رطوبة الوسط المحيط", "en": "Changes sinusodially depending on the surrounding humidity"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "هذه هي ظاهرة 'درع فاراداي' (Faraday Cage)؛ حيث ينعدم المجال الكهربي تماماً داخل أي تجويف في موصل مشحون ومتزن.",
                            "en": "This is the 'Faraday Cage' phenomenon. The electric field is strictly zero inside any cavity of a conductor in electrostatic equilibrium."
                        }
                    },
                    {
                        "q": {
                            "ar": "شحنتان نقطيتان: الأولى q₁ = +9.0 μC عند x = 0، والثانية q₂ = +4.0 μC عند x = 2.0 m. أين تقع 'نقطة التعادل' (التي ينعدم عندها المجال الكهربائي المحصل) على الخط الواصل بينهما؟",
                            "en": "Two point charges: q₁ = +9.0 μC at x = 0, and q₂ = +4.0 μC at x = 2.0 m. Where is the 'neutral point' (where the net electric field is zero) on the line connecting them?"
                        },
                        "options": [
                            {"ar": "عند x = 1.2 m", "en": "At x = 1.2 m"},
                            {"ar": "عند x = 1.0 m", "en": "At x = 1.0 m"},
                            {"ar": "عند x = 0.8 m", "en": "At x = 0.8 m"},
                            {"ar": "عند x = 1.5 m", "en": "At x = 1.5 m"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "عند الاتزان: E₁ = E₂ => k(9)/x² = k(4)/(2-x)² => 3/x = 2/(2-x) => 6 - 3x = 2x => 5x = 6 => x = 1.2 m.",
                            "en": "At equilibrium: E₁ = E₂ => k(9)/x² = k(4)/(2-x)² => 3/x = 2/(2-x) => 6 - 3x = 2x => 5x = 6 => x = 1.2 m."
                        }
                    },
                    {
                        "q": {
                            "ar": "إذا تحرك بروتون حر (موجب الشحنة) في اتجاه خطوط مجال كهربائي منتظم، فماذا يحدث لطاقته الحركية وطاقة وضعه الكهربائية؟",
                            "en": "If a free proton (positive charge) moves in the direction of uniform electric field lines, what happens to its kinetic and electric potential energy?"
                        },
                        "options": [
                            {"ar": "تزداد طاقته الحركية وتقل طاقة وضعه الكهربائية", "en": "Its kinetic energy increases and its electric potential energy decreases"},
                            {"ar": "تقل طاقته الحركية وتزداد طاقة وضعه الكهربائية", "en": "Its kinetic energy decreases and its electric potential energy increases"},
                            {"ar": "تزداد الطاقتان الحركية والوضع معاً", "en": "Both kinetic and potential energies increase simultaneously"},
                            {"ar": "تبقى الطاقتان ثابتتين دون تغيير بسبب الحفظ", "en": "Both energies remain constant without change due to conservation"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "البروتون ينجذب طبيعياً في اتجاه خطوط المجال (مع القوة)، وبالتالي يتسارع فتزداد سرعته وطاقته الحركية، على حساب النقص في طاقة الوضع الكهربائية المرتبطة بالمجال.",
                            "en": "The proton naturally moves with the field lines (gaining speed), which increases its kinetic energy while decreasing its electric potential energy."
                        }
                    },
                    {
                        "q": {
                            "ar": "ماذا يحدث لخطوط المجال الكهربائي بالقرب من نتوء مدبب أو رأس حاد لموصل معدني مشحون؟",
                            "en": "What happens to the electric field lines near a sharp point or pointed edge of a charged metal conductor?"
                        },
                        "options": [
                            {"ar": "تتقارب وتزداد كثافتها بشكل هائل، مما يشير إلى شدة مجال كهربائي عالية جداً عند الرؤوس الحادة", "en": "They converge and their density increases dramatically, indicating a very high electric field at sharp edges"},
                            {"ar": "تتباعد وتنعدم الكثافة تماماً وتلاشى شدة المجال", "en": "They diverge, density drops to zero, and field strength vanishes"},
                            {"ar": "تدخل داخل الموصل لتشكل عاصفة شحنات في الداخل", "en": "They enter the conductor, creating a storm of internal charges"},
                            {"ar": "تتحرك بشكل منحن دائري منتظم عريض", "en": "They move in a broad, regular curved circular shape"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الشحنات تتركز بكثافة عالية جداً عند الرؤوس الحادة والمنحنيات الضيقة للموصلات، مما يجعل خطوط المجال تتقارب بقوة وتنشأ شدة مجال عظمى هناك (مبدأ عمل مانعات الصواعق).",
                            "en": "Charges concentrate highly at sharp points and tight curves of conductors, leading to densely crowded field lines and a very strong localized field (the basis of lightning rods)."
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": "12Jen-phy-T1-2.2-exam",
        "title_ar": "امتحان الفيزياء 12 عام - الوحدة 2 الدرس 2 (تطبيقات المجالات الكهربائية والمكثفات)",
        "title_en": "Grade 12 Physics Exam - Unit 2 Lesson 2 (Applications & Capacitors)",
        "desc_ar": "اختبار تقييمي تفاعلي شامل يغطي المكثفات الكهربائية، السعة الكهربائية وتطبيقاتها الفنية، طاقة المكثف، العوامل المؤثرة، وتطبيقات الاستاتيكية الصناعية مثل الطلاء والبرق الجوي ومانعات الصواعق والمرسبات.",
        "sections": [
            {
                "title": {
                    "ar": "🔹 الجزء الأول: المكثف الكهربائي وسعة المكثف والمفاهيم",
                    "en": "🔹 Part 1: Capacitor & Capacitance Concepts"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما هي الوظيفة الأساسية للمكثف الكهربائي (Capacitor) في الدوائر الإلكترونية؟",
                            "en": "What is the primary function of a capacitor in electronic circuits?"
                        },
                        "options": [
                            {"ar": "تخزين الشحنات الكهربائية والطاقة الكهربائية في شكل مجال كهربائي", "en": "Storing electric charges and electrical energy in the form of an electric field"},
                            {"ar": "توليد تيار كهربائي متردد AC مستمر من العدم", "en": "Generating alternating current AC continuously from nothing"},
                            {"ar": "قياس فرق الجهد الكهربائي ومقاومة الموصلات بدقة", "en": "Measuring potential difference and conductor resistance accurately"},
                            {"ar": "تحويل الطاقة الكهربائية إلى طاقة ميكانيكية دورانية", "en": "Converting electrical energy into rotational mechanical energy"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المكثف هو جهاز يتكون من لوحين موصلين يفصل بينهما عازل، ووظيفته تخزين الشحنات والطاقة الكهربائية.",
                            "en": "A capacitor is a device consisting of two conducting plates separated by an insulator, used to store electric charge and energy."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي المعادلة الرياضية المعرفة لسعة المكثف (Capacitance C) بدلالة الشحنة Q وفرق الجهد V؟",
                            "en": "What is the mathematical formula defining capacitance (C) in terms of charge Q and potential difference V?"
                        },
                        "options": [
                            {"ar": "C = Q / V", "en": "C = Q / V"},
                            {"ar": "C = Q · V", "en": "C = Q · V"},
                            {"ar": "C = V / Q", "en": "C = V / Q"},
                            {"ar": "C = Q² · V", "en": "C = Q² · V"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "السعة الكهربائية C هي نسبة الشحنة المتراكمة على أحد اللوحين إلى فرق الجهد المتولد بينهما: C = Q / V.",
                            "en": "Capacitance C is defined as the ratio of charge on one plate to the potential difference between them: C = Q / V."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي وحدة قياس السعة الكهربائية في النظام الدولي (SI)؟",
                            "en": "What is the SI unit for measuring electrical capacitance?"
                        },
                        "options": [
                            {"ar": "الفاراد (Farad, F) وتكافئ كولوم لكل فولت (C/V)", "en": "Farad (F), which is equivalent to Coulomb per Volt (C/V)"},
                            {"ar": "الأوم (Ohm, Ω) وتكافئ فولت لكل أمبير", "en": "Ohm (Ω), which is equivalent to Volt per Ampere"},
                            {"ar": "الهنري (Henry, H) وتكافئ ويبر لكل أمبير", "en": "Henry (H), which is equivalent to Weber per Ampere"},
                            {"ar": "التسلا (Tesla, T) وتكافئ نيوتن لكل أمبير متر", "en": "Tesla (T), which is equivalent to Newton per Ampere meter"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الفاراد هو الوحدة الدولية لقياس السعة، ونظراً لكبر قيمته العملية، نستخدم وحدات أصغر مثل الميكروفاراد (μF) والبيكوفاراد (pF).",
                            "en": "The Farad is the SI unit of capacitance. Because a Farad is very large, practical values are in microfarads (μF) or picofarads (pF)."
                        }
                    },
                    {
                        "q": {
                            "ar": "ماذا يمثل الكولوم لكل فولت (C/V) في الدوائر الكهربائية؟",
                            "en": "What does Coulomb per Volt (C/V) represent in electrical circuits?"
                        },
                        "options": [
                            {"ar": "سعة المكثف (الفاراد)", "en": "Capacitance (Farad)"},
                            {"ar": "مقاومة الموصل (الأوم)", "en": "Resistance (Ohm)"},
                            {"ar": "القدرة الكهربائية (الواط)", "en": "Electric Power (Watt)"},
                            {"ar": "شدة المجال (نيوتن لكل كولوم)", "en": "Field Strength (Newton per Coulomb)"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بما أن C = Q / V، فإن وحدة السعة هي كولوم (C) مقسوماً على فولت (V) وهو ما يعادل الفاراد (F).",
                            "en": "Since C = Q / V, the unit is Coulomb (C) divided by Volt (V), which is equivalent to the Farad (F)."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثاني: العوامل المؤثرة وطاقة المكثف المخزنة",
                    "en": "🔹 Part 2: Factors Affecting Capacitance & Stored Energy"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما هي صيغة حساب سعة مكثف ذي لوحين متوازيين تفصلهما مسافة d ومساحة كل منهما A؟",
                            "en": "What is the formula for the capacitance of a parallel-plate capacitor with plate area A and separation d?"
                        },
                        "options": [
                            {"ar": "C = ε₀ · A / d", "en": "C = ε₀ · A / d"},
                            {"ar": "C = ε₀ · d / A", "en": "C = ε₀ · d / A"},
                            {"ar": "C = ε₀ · A · d", "en": "C = ε₀ · A · d"},
                            {"ar": "C = A / (ε₀ · d)", "en": "C = A / (ε₀ · d)"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "سعة المكثف ذي اللوحين المتوازيين في الفراغ تُحسب بالعلاقة: C = ε₀ · A / d. وتزداد بزيادة المساحة وتقليل المسافة.",
                            "en": "Capacitance of a parallel-plate capacitor in vacuum is: C = ε₀ · A / d. It increases with larger area and smaller separation."
                        }
                    },
                    {
                        "q": {
                            "ar": "أي من التغييرات التالية تؤدي إلى زيادة سعة مكثف ذي لوحين متوازيين؟",
                            "en": "Which of the following changes would increase the capacitance of a parallel-plate capacitor?"
                        },
                        "options": [
                            {"ar": "زيادة مساحة اللوحين وتقليل المسافة بينهما", "en": "Increasing plate area and decreasing the distance between them"},
                            {"ar": "تقليل مساحة اللوحين وزيادة المسافة بينهما", "en": "Decreasing plate area and increasing the distance between them"},
                            {"ar": "تقليل مساحة اللوحين وتقليل المسافة بينهما", "en": "Decreasing plate area and decreasing the distance between them"},
                            {"ar": "زيادة المسافة بشكل هائل مع ترك المساحة ثابتة", "en": "Increasing distance enormously while leaving area constant"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "السعة تتناسب طردياً مع المساحة (A) وعكسياً مع المسافة الفاصلة (d). لذا زيادة المساحة وتقريب اللوحين يزيدان السعة.",
                            "en": "Capacitance is directly proportional to area (A) and inversely proportional to separation distance (d). Thus, more area and less distance raise C."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما تأثير وضع مادة عازلة (مثل الزجاج أو الورق أو الميكا) بدلاً من الهواء بين لوحي مكثف مشحون ومعزول؟",
                            "en": "What is the effect of inserting a dielectric material (like glass, paper, or mica) instead of air between plates?"
                        },
                        "options": [
                            {"ar": "تزداد سعة المكثف بمقدار معامل ثابت العزل κ (κ > 1)", "en": "The capacitance increases by the dielectric constant κ (κ > 1)"},
                            {"ar": "تقل سعة المكثف وتتلاشى طاقة التخزين كلياً", "en": "The capacitance decreases and stored energy vanishes completely"},
                            {"ar": "يبقى المكثف ثابتاً وتتحول الشحنات إلى بروتونات حرة", "en": "The capacitor remains constant and charges turn to free protons"},
                            {"ar": "يحدث انفجار بسبب انعدام المجال بين اللوحين", "en": "An explosion occurs due to zero field between the plates"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المادة العازلة تضعف المجال الكهربائي الفعلي بين اللوحين مما يقلل فرق الجهد لنفس الشحنة، وبالتالي تزيد السعة بمعامل ثابت العزل κ: C = κ · C₀.",
                            "en": "A dielectric weakens the effective electric field between the plates, reducing potential difference for the same charge, increasing capacitance: C = κ · C₀."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي إحدى العلاقات الصحيحة لحساب الطاقة الكهربائية المخزنة (U) في مكثف مشحون؟",
                            "en": "What is one of the correct formulas to calculate the stored electrical energy (U) in a charged capacitor?"
                        },
                        "options": [
                            {"ar": "U = ½ · C · V²", "en": "U = ½ · C · V²"},
                            {"ar": "U = ½ · C² · V", "en": "U = ½ · C² · V"},
                            {"ar": "U = C · V", "en": "U = C · V"},
                            {"ar": "U = Q · V²", "en": "U = Q · V²"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الطاقة المخزنة في المكثف تُحسب من العلاقات المتكافئة: U = ½ C V² = ½ Q V = ½ Q²/C.",
                            "en": "The energy stored in a capacitor is calculated using: U = ½ C V² = ½ Q V = ½ Q²/C."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الثالث: تفريغ المكثفات وتطبيقاتها التقنية والطبية",
                    "en": "🔹 Part 3: Capacitor Discharge & Technical/Medical Applications"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "ما الميزة الأساسية لطريقة تفريغ الطاقة في المكثف مقارنة بتفريغها من البطارية الكيميائية؟",
                            "en": "What is the primary advantage of energy discharge in a capacitor compared to a chemical battery?"
                        },
                        "options": [
                            {"ar": "المكثف يفرغ طاقته المخزنة بسرعة هائلة ولحظية (أجزاء من الثانية) مما يعطي قدرة عالية جداً", "en": "The capacitor discharges its stored energy extremely fast (fractions of a second), providing very high power"},
                            {"ar": "المكثف يفرغ طاقته ببطء شديد يمتد لسنوات طويلة", "en": "The capacitor discharges very slowly over many years"},
                            {"ar": "المكثف لا يفرغ طاقته إلا إذا تعرض لدرجة حرارة الغليان", "en": "The capacitor only discharges when exposed to boiling temperatures"},
                            {"ar": "البطارية تعطي جهداً استاتيكياً متغيراً بينما المكثف جهده ثابت للأبد", "en": "The battery gives alternating static voltage while the capacitor's voltage is constant forever"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "البطارية الكيميائية تنتج طاقة ببطء عبر تفاعلات كيميائية، بينما المكثف يطلق شحنته بالكامل بشكل فوري ولحظي، مما يجعله مثالياً للتطبيقات التي تتطلب دفعات طاقة سريعة.",
                            "en": "Batteries release energy slowly via chemical reactions, while capacitors release their stored charge almost instantly, ideal for high burst-power applications."
                        }
                    },
                    {
                        "q": {
                            "ar": "أي من الأجهزة الطبية التالية يعتمد كلياً على تفريغ المكثفات لإنقاذ حياة المرضى؟",
                            "en": "Which of the following medical devices relies entirely on capacitor discharge to save patients' lives?"
                        },
                        "options": [
                            {"ar": "جهاز تنظيم ضربات القلب وإزالة الرجفان الصدري (Defibrillator)", "en": "Cardiac pacemaker and defibrillator (Defibrillator)"},
                            {"ar": "جهاز غسيل الكلى الاصطناعية المتقدم", "en": "Advanced artificial kidney dialysis machine"},
                            {"ar": "مقياس ضغط الدم الزئبقي التقليدي", "en": "Traditional mercury blood pressure monitor"},
                            {"ar": "المجهر الإلكتروني الماسح للعين", "en": "Scanning electron microscope for the eye"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "جهاز الصدمات الكهربائية للقلب (إزالة الرجفان) يشحن مكثفاً داخلياً بجهد عالٍ ثم يفرغ هذه الطاقة بسرعة عبر صدر المريض لإعادة تنظيم نبضات القلب.",
                            "en": "A cardiac defibrillator charges an internal capacitor to a high voltage, then discharges this energy rapidly through the chest to restore normal heart rhythm."
                        }
                    },
                    {
                        "q": {
                            "ar": "كيف يتم الاستفادة من المكثفات في وميض كاميرا الفلاش (Camera Flash)؟",
                            "en": "How are capacitors utilized in camera flash units?"
                        },
                        "options": [
                            {"ar": "يشحن المكثف ببطء من البطارية ثم يفرغ شحنته بسرعة فائقة في المصباح لينتج ضوءاً ساطعاً للحظة", "en": "The capacitor charges slowly from the battery then discharges extremely fast into the lamp for a bright instant flash"},
                            {"ar": "يستخدم المكثف كعدسة عاكسة للضوء والظلال", "en": "The capacitor is used as a reflective lens for light and shadows"},
                            {"ar": "يقوم بتبريد الكاميرا لمنع سخونة المصباح", "en": "It cools the camera to prevent lamp overheating"},
                            {"ar": "يقوم بتحويل الضوء الخارجي إلى طاقة كيميائية مخزنة", "en": "It converts external light into stored chemical energy"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بطارية الكاميرا جهدها صغير لا يكفي لتشغيل الفلاش بكفاءة، فيقوم مكثف بتجميع الشحنة ببطء ثم ضخها دفعة واحدة بجهد مرتفع لإحداث الوميض الساطع.",
                            "en": "The camera battery voltage is too low to power the flash directly. A capacitor accumulates charge slowly and discharges it in a fraction of a second to produce the flash."
                        }
                    },
                    {
                        "q": {
                            "ar": "في لوحات المفاتيح الخاصة بأجهزة الحاسوب (Keyboards)، ما الآلية التي يعمل بها المفتاح؟",
                            "en": "In computer keyboards, how does a capacitive key switch operate?"
                        },
                        "options": [
                            {"ar": "الضغط على المفتاح يقلل المسافة d بين لوحين معدنيين فتزداد السعة الكهربائية ويرصدها الجهاز كحرف مضغوط", "en": "Pressing the key decreases distance d between two plates, raising capacitance, registered as a keystroke"},
                            {"ar": "الضغط على المفتاح يؤدي إلى صهر وصلة السيليكون بالحرارة", "en": "Pressing the key melts the silicon joint with heat"},
                            {"ar": "يعتمد على حث مغناطيسي للمغناطيس الدائم في القاعدة", "en": "Relies on magnetic induction of a permanent magnet at the base"},
                            {"ar": "يقوم المفتاح بقطع سلك التوصيل لتعطيل التيار تماماً", "en": "The key cuts the connection wire to completely disable current"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تحت كل مفتاح لوح مكثف مرن. عند الضغط عليه، تقترب الألواح (تقل d) فتزداد السعة الكهربائية C، وتتعرف الدائرة الإلكترونية للوحة المفاتيح على هذا التغيير وتحدده كحرف مكتوب.",
                            "en": "Under each key is a flexible capacitor. Pressing the key decreases plate spacing (d), increasing capacitance C, which the computer detects as a keystroke."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الرابع: تطبيقات الكهرباء الساكنة الصناعية والبرق",
                    "en": "🔹 Part 4: Industrial Electrostatic Applications & Lightning"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "كيف يساعد شحن قطيرات الدهان استاتيكياً في عملية الطلاء الكهربائي (Electrostatic Painting) للسيارات؟",
                            "en": "How does charging paint droplets electrostatically assist in car manufacturing (Electrostatic Painting)?"
                        },
                        "options": [
                            {"ar": "تشحن قطرات الدهان بشحنة مماثلة لتتنافر وتتوزع بانتظام، ويشحن هيكل السيارة بشحنة مخالفة لتنجذب القطرات وتلتصق بقوة", "en": "Paint droplets are similarly charged to repel and distribute evenly, while the car frame is oppositely charged to attract them strongly"},
                            {"ar": "تمنع قطرات الطلاء من الاقتراب من السيارة لحمايتها من الخدوش", "en": "Prevents paint droplets from reaching the car to protect it from scratches"},
                            {"ar": "تجعل قطرات الطلاء سائلة جداً مثل الماء المغلي", "en": "Makes paint droplets extremely liquid like boiling water"},
                            {"ar": "تقوم بتحويل لون الدهان تلقائياً حسب رطوبة المصنع", "en": "Automatically converts paint color based on factory humidity"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تنافر قطيرات الدهان المشحونة بنفس الشحنة يجعلها تنتشر كرذاذ ناعم ومنتظم، وانجذابها لهيكل السيارة ذي الشحنة المخالفة يضمن تغطية كاملة ومتساوية لجميع الزوايا ويقلل هدر الدهان.",
                            "en": "Like-charged paint droplets repel to form a fine, uniform mist, and are attracted to the oppositely charged car frame, ensuring even coverage and reducing waste."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما هي فكرة عمل 'المرسبات الكهروستاتيكية' (Electrostatic Precipitators) المستخدمة في مداخن المصانع؟",
                            "en": "What is the working principle of 'Electrostatic Precipitators' used in industrial chimneys?"
                        },
                        "options": [
                            {"ar": "شحن جزيئات الغبار والدخان المتصاعد ثم جذبها باستخدام ألواح معدنية ذات شحنة مخالفة لتصفية الغازات وحماية البيئة", "en": "Charging dust and soot particles, then attracting them with oppositely charged plates to filter gases and protect the environment"},
                            {"ar": "تبريد الغازات الساخنة لتحويلها إلى ثلج صلب", "en": "Cooling hot gases to turn them into solid ice"},
                            {"ar": "حرق جزيئات الهواء بالأكسجين لتوليد شعلة ضخمة", "en": "Burning air particles with oxygen to generate a massive flame"},
                            {"ar": "زيادة سرعة تصاعد الدخان لمنع تراكمه في المداخن", "en": "Increasing smoke emission speed to prevent chimney build-up"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "المرسبات الكهروستاتيكية تشحن جزيئات الفحم والغبار العالقة بالدخان، ثم تسحبها الألواح المشحونة بالمخالف، فتزيل أكثر من 99% من الملوثات قبل خروج الغازات للهواء.",
                            "en": "Electrostatic precipitators charge fly ash and soot particles, which are then collected on oppositely charged plates, removing over 99% of pollutants from emissions."
                        }
                    },
                    {
                        "q": {
                            "ar": "يحدث البرق (Lightning) كشكل من أشكال التفريغ الكهربائي الهائل في الغلاف الجوي عندما يتجاوز المجال الكهربائي بين السحابة والأرض:",
                            "en": "Lightning occurs as a massive electrostatic discharge in the atmosphere when the electric field between clouds and the ground exceeds:"
                        },
                        "options": [
                            {"ar": "قوة العزل الكهربائي للهواء (حوالي 3 × 10⁶ V/m)", "en": "The dielectric strength of air (about 3 × 10⁶ V/m)"},
                            {"ar": "ثابت كولوم القياسي في الفراغ الجوي", "en": "The standard Coulomb constant in the atmospheric vacuum"},
                            {"ar": "سرعة الصوت في الهواء الجاف عند درجة الصفر", "en": "The speed of sound in dry air at zero degrees celsius"},
                            {"ar": "الوزن النوعي لبخار الماء المشبع", "en": "The specific weight of saturated water vapor"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "الهواء عازل ممتاز، لكن عندما يتخطى المجال الكهربي قيمة (3 × 10⁶ V/m)، يتأين الهواء ويصبح موصلاً، مما يؤدي للتفريغ العنيف الفوري على شكل برق.",
                            "en": "Air is a good insulator, but when the electric field exceeds (3 × 10⁶ V/m), air ionizes and conducts, leading to the sudden discharge known as lightning."
                        }
                    },
                    {
                        "q": {
                            "ar": "ما وظيفة مانعات الصواعق (Lightning Rods) المثبتة أعلى المباني الشاهقة؟",
                            "en": "What is the function of lightning rods installed on top of tall buildings?"
                        },
                        "options": [
                            {"ar": "توفير مسار آمن منخفض المقاومة لتفريغ شحنة الصاعقة مباشرة إلى الأرض دون إلحاق ضرر بالمبنى", "en": "Providing a safe, low-resistance path to discharge lightning directly to the Earth without harming the building"},
                            {"ar": "جذب الصواعق واستخدام طاقة البرق لتشغيل أجهزة التكييف بالكامل", "en": "Attracting lightning and using its energy to power the building's air conditioners"},
                            {"ar": "عزل المبنى مغناطيسياً لمنع وصول شبكات الهاتف الجوال", "en": "Magnetically insulating the building to prevent mobile network access"},
                            {"ar": "طرد السحب المشحونة بعيداً عن سماء المدينة باستخدام موجات حرارية", "en": "Repelling charged clouds away from the city sky using thermal waves"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "مانعات الصواعق هي قضبان معدنية مدببة وموصلة بسلك سميك إلى باطن الأرض (التأريض)، تقوم بسحب الشحنات وتوجيهها بسلام للأرض حماية للمباني وسكانها.",
                            "en": "Lightning rods are pointed metal rods grounded with thick wires, routing lightning safely to the ground to protect the building from fire or structural damage."
                        }
                    }
                ]
            },
            {
                "title": {
                    "ar": "🔹 الجزء الخامس: مهارات التفكير المسائل الحسابية المتقدمة",
                    "en": "🔹 Part 5: Higher Order Thinking & Advanced Physics Problems"
                },
                "questions": [
                    {
                        "q": {
                            "ar": "مكثف سعتة C = 5.0 μF تم شحنه بفرق جهد V = 12.0 V. كم تبلغ الشحنة Q المتراكمة على أحد لوحيه؟",
                            "en": "A capacitor has capacitance C = 5.0 μF and is charged with potential difference V = 12.0 V. What is the charge Q stored?"
                        },
                        "options": [
                            {"ar": "6.0 × 10⁻⁵ C (أو 60 μC)", "en": "6.0 × 10⁻⁵ C (or 60 μC)"},
                            {"ar": "2.4 × 10⁻⁶ C (أو 2.4 μC)", "en": "2.4 × 10⁻⁶ C (or 2.4 μC)"},
                            {"ar": "6.0 × 10⁻⁶ C (أو 6 μC)", "en": "6.0 × 10⁻⁶ C (or 6 μC)"},
                            {"ar": "4.17 × 10⁻¹ C (أو 0.417 C)", "en": "4.17 × 10⁻¹ C (or 0.417 C)"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "Q = C · V = (5.0 × 10⁻⁶ F) · (12.0 V) = 60.0 × 10⁻⁶ C = 6.0 × 10⁻⁵ C.",
                            "en": "Q = C · V = (5.0 × 10⁻⁶ F) · (12.0 V) = 60.0 × 10⁻⁶ C = 6.0 × 10⁻⁵ C."
                        }
                    },
                    {
                        "q": {
                            "ar": "كم تبلغ طاقة الوضع الكهربائية المخزنة في المكثف الموصوف في السؤال السابق؟",
                            "en": "What is the electric potential energy stored in the capacitor described in the previous question?"
                        },
                        "options": [
                            {"ar": "3.6 × 10⁻⁴ J", "en": "3.6 × 10⁻⁴ J"},
                            {"ar": "7.2 × 10⁻⁴ J", "en": "7.2 × 10⁻⁴ J"},
                            {"ar": "3.6 × 10⁻⁶ J", "en": "3.6 × 10⁻⁶ J"},
                            {"ar": "1.2 × 10⁻³ J", "en": "1.2 × 10⁻³ J"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "U = ½ C V² = 0.5 · (5.0 × 10⁻⁶ F) · (12.0 V)² = 2.5 × 10⁻⁶ · 144 = 360 × 10⁻⁶ J = 3.6 × 10⁻⁴ J.",
                            "en": "U = ½ C V² = 0.5 · (5.0 × 10⁻⁶ F) · (12.0 V)² = 2.5 × 10⁻⁶ · 144 = 3.6 × 10⁻⁴ J."
                        }
                    },
                    {
                        "q": {
                            "ar": "مكثف هوائي ذو لوحين متوازيين، مساحة لوحيه A والمسافة بينهما d. تم شحنه ببطارية ثم فُصل عنها (الشحنة Q بقيت ثابتة). إذا قمنا بمضاعفة المسافة بين اللوحين إلى الضعف (2d)، فماذا يحدث لفرق الجهد V بين اللوحين والطاقة الكهربائية المخزنة؟",
                            "en": "A parallel-plate air capacitor of area A and distance d is charged and then disconnected from the battery (charge Q remains constant). If the distance is doubled (2d), what happens to V and the stored energy?"
                        },
                        "options": [
                            {"ar": "يتضاعف فرق الجهد وتتضاعف الطاقة المخزنة أيضاً إلى الضعف", "en": "The potential difference doubles and the stored energy also doubles"},
                            {"ar": "يقل فرق الجهد إلى النصف وتقل الطاقة المخزنة إلى النصف", "en": "The potential difference decreases to half and the stored energy decreases to half"},
                            {"ar": "يبقى فرق الجهد ثابتاً وتتلاشى الطاقة كلياً", "en": "The potential difference remains constant and energy vanishes completely"},
                            {"ar": "يتضاعف فرق الجهد وتقل الطاقة إلى النصف", "en": "The potential difference doubles and energy decreases to half"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "بما أن المسافة تضاعفت، السعة تقل للنصف (C' = C/2). وحيث الشحنة ثابتة، فإن فرق الجهد يتضاعف (V = Q/C). والطاقة U = ½ Q²/C، وبما أن C قلّت للنصف فإن الطاقة تتضاعف أيضاً. (تم بذل شغل خارجي لإبعاد اللوحين تخزن كطاقة وضع إضافية).",
                            "en": "As distance doubles, C drops to half (C' = C/2). Since Q is constant, potential difference doubles (V = Q/C). Stored energy U = ½ Q²/C also doubles due to the external work done separating the plates."
                        }
                    },
                    {
                        "q": {
                            "ar": "في تجربة قطرة الزيت لمليكان (Millikan's Oil Drop Experiment)، ما الشرط الفيزيائي اللازم لكي تظل قطرة الزيت المشحونة معلقة في الهواء بوضعية اتزان وسكون تام بين اللوحين؟",
                            "en": "In Millikan's Oil Drop Experiment, what is the physical condition required for a charged oil drop to remain suspended in stationary equilibrium between the plates?"
                        },
                        "options": [
                            {"ar": "أن تكون القوة الكهربية لأعلى مساوية تماماً لقوة الجاذبية (الوزن) لأسفل (Fe = Fg)", "en": "The upward electric force must exactly equal the downward gravitational force (Fe = Fg)"},
                            {"ar": "أن يكون المجال الكهربائي مساوياً تماماً لسرعة الضوء الجوية", "en": "The electric field must exactly equal the speed of light"},
                            {"ar": "أن تتبخر قطرة الزيت بالكامل وتتحول إلى غاز الهيليوم", "en": "The oil drop must evaporate completely and turn to helium gas"},
                            {"ar": "أن يكون الضغط الجوي مساوياً لثابت كولوم ومعدوماً", "en": "The atmospheric pressure must equal Coulomb's constant and be zero"}
                        ],
                        "correct": 0,
                        "answer": {
                            "ar": "تتزن قطرة الزيت عندما تتساوى القوة الكهربائية المؤثرة لأعلى (q·E) مع قوة الجاذبية لأسفل (m·g)، أي q·E = m·g، ومنها تمكن مليكان من حساب شحنة الإلكترون.",
                            "en": "The oil drop is suspended when the upward electric force (q·E) balances the downward gravitational force (m·g): q·E = m·g. This allowed Millikan to calculate the electron's charge."
                        }
                    }
                ]
            }
        ]
    }
]

def generate_exams():
    print("Starting generation of 4 Grade 12 Physics General exams...")
    
    for exam in PHYSICS_EXAMS:
        exam_id = exam["id"]
        dir_path = os.path.join("public", exam_id)
        os.makedirs(dir_path, exist_ok=True)
        
        # Build JSON file representation for the template replacement
        exam_data = {
            "title_ar": exam["title_ar"],
            "title_en": exam["title_en"],
            "desc_ar": exam["desc_ar"],
            "sections": exam["sections"]
        }
        
        exam_json_str = json.dumps(exam_data, ensure_ascii=False, indent=4)
        
        # Replace the placeholders in our template
        html_content = G12_PHY_TEMPLATE.replace("{LESSON_ID}", exam_id)\
                                       .replace("{TITLE_AR}", exam["title_ar"])\
                                       .replace("{TITLE_EN}", exam["title_en"])\
                                       .replace("{DESC_AR}", exam["desc_ar"])\
                                       .replace("{ORIGINAL_EXAM_DATA_JSON}", exam_json_str)
        
        file_path = os.path.join(dir_path, "index.html")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"Generated {file_path}")
        
    print("SUCCESS: Dynamic Generation of 4 Grade 12 Physics exams completed.")

if __name__ == "__main__":
    generate_exams()
