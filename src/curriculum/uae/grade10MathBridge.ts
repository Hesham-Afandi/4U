import { Curriculum } from '../../types';

export const math10AdvBridge1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: الدوال والمتباينات',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'دراسة الدوال، خصائصها، العمليات عليها، وحل أنظمة المعادلات والمتباينات.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 1-1: الدوال والتحليل الإحصائي',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة هي علاقة يرتبط فيها كل عنصر بالمجال بعنصر واحد فقط بالمدى.',
            sections: [
              { title: 'المجال والمدى', type: 'bullets', content: [
                'المجال: مجموعة قيم x',
                'المدى: مجموعة قيم y'
              ]},
              { title: 'التحليل الإحصائي', type: 'bullets', content: [
                'المتوسط الحسابي',
                'الوسيط والمنوال',
                'الانحراف المعياري'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 1-2: تمثيل دوال القيمة المطلقة بيانياً',
          icon: '| |',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تمثيل دوال القيمة المطلقة يكون على شكل حرف V.',
            sections: [
              { title: 'الدالة الأم', type: 'formula', content: 'f(x) = |x|' },
              { title: 'التحويلات', type: 'bullets', content: [
                'f(x) = a|x-h| + k',
                'الرأس هو (h, k)'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 1-3: تمثيل متباينات القيمة المطلقة بيانياً',
          icon: '⚠️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'متباينات القيمة المطلقة تتطلب تحديد مناطق الحل والتظليل.',
            sections: [
              { title: 'خطوات الرسم', type: 'bullets', content: [
                'نرسل دالة القيمة المطلقة كحدود',
                'خط متصل في حال وجود مساواة',
                'خط متقطع في حال عدم وجود مساواة',
                'نختبر نقطة ونظلل منطقة الحل'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 1-4: حل أنظمة المعادلات خطياً',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'حل أنظمة المعادلات يتم بعدة طرق منها الحذف والتعويض والبياني.',
            sections: [
              { title: 'طرق الحل', type: 'bullets', content: [
                'التعويض: عزل متغير والتعويض به بالمعادلة الأخرى',
                'الحذف: جمع أو طرح المعادلات لحذف أحد المتغيرات',
                'البياني: نقطة التقاطعات بين المستقيمين'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 1-5: حل أنظمة المتباينات خطياً بيانياً',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'منطقة الحل المشترك لأنظمة المتباينات تمثل المنطقة المظللة المشتركة.',
            sections: [
              { title: 'الحل المشترك', type: 'bullets', content: [
                'نرسم المستقيمات الحدودية للمتباينات',
                'نظلل منطقة الحل لكل متباينة',
                'المنطقة المتداخلة تمثل حل النظام'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 1-6: البرمجة الخطية وتحديد القيم المثلى',
          icon: '🎯',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'البرمجة الخطية تستخدم لإيجاد القيم العظمى أو الصغرى لدالة موضوع تحت قيود.',
            sections: [
              { title: 'دالة الهدف والقيود', type: 'bullets', content: [
                'دالة الهدف: f(x, y) المراد تعظيمها أو تقليلها',
                'القيود: نظام متباينات يحدد المنطقة الممكنة',
                'الرؤوس: النقاط التي تحد المنطقة، والحل الأمثل يقع دائماً عند أحد هذه الرؤوس'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 1-7: حل أنظمة المعادلات في ثلاثة متغيرات',
          icon: '立方体',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'يتطلب حل نظام من ثلاث معادلات في ثلاثة متغيرات استخدام الحذف المتتالي لتقليص النظام إلى متغيرين.',
            sections: [
              { title: 'خطوات الحل', type: 'bullets', content: [
                '1. نختار معادلتين ونحذف منهما متغيراً',
                '2. نختار معادلتين أخريين ونحذف منهما نفس المتغير',
                '3. نحل النظام الثنائي الناتج للوصول لقيم متغيرين',
                '4. نعوض لإيجاد المتغير الثالث'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 1-8: تمثيل الدوال التربيعية بيانياً',
          icon: '📐',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.8/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال التربيعية تمثل بيانياً بقطع مكافئ (Parabola).',
            sections: [
              { title: 'معادلة القطع المكافئ', type: 'formula', content: 'f(x) = ax² + bx + c' },
              { title: 'محور التماثل ورأس القطع', type: 'bullets', content: [
                'محور التماثل: x = -b/(2a)',
                'إحداثيات الرأس: ( -b/(2a) , f(-b/(2a)) )',
                'إذا كان a > 0، القطع مفتوح لأعلى وللدالة قيمة صغرى',
                'إذا كان a < 0، القطع مفتوح لأسفل وللدالة قيمة عظمى'
              ]}
            ]
          }
        },
        {
          id: 9,
          title: 'الدرس 1-9: حل المعادلات التربيعية بالتمثيل البياني',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.9/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-1.9-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'حلول المعادلة التربيعية بيانياً هي نقاط تقاطع القطع المكافئ مع محور x (الأصفار).',
            sections: [
              { title: 'عدد الحلول الحقيقية', type: 'bullets', content: [
                'حلان حقيقيان: يتقاطع القطع مع محور x في نقطتين',
                'حل حقيقي واحد: يلامس رأس القطع محور x',
                'لا توجد حلول حقيقية: القطع لا يقطع محور x مطلقاً'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: المصفوفات والدوال التربيعية المتقدمة',
      icon: '📐',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة المصفوفات والعمليات عليها، والتحليل إلى عوامل، والحلول التربيعية المتقدمة والأعداد التخيلية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 2-1: مقدمة في المصفوفات',
          icon: '🧱',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المصفوفة هي تنظيم مستطيل للأعداد في صفوف وأعمدة.',
            sections: [
              { title: 'رتبة المصفوفة', type: 'formula', content: 'm × n (صفوف × أعمدة)' },
              { title: 'العناصر', type: 'bullets', content: [
                'يرمز للعنصر بالرمز aᵢⱼ (الصف i، العمود j)',
                'تساوي مصفوفتين يتطلب نفس الرتبة وتساوي العناصر المتناظرة'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 2-2: العمليات على المصفوفات',
          icon: '🧮',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'العمليات تشمل جمع وطرح المصفوفات وضربها في عدد حقيقي.',
            sections: [
              { title: 'الجمع والطرح', type: 'bullets', content: [
                'يتطلب نفس الرتبة',
                'نجمع أو نطرح العناصر المتناظرة'
              ]},
              { title: 'الضرب في عدد حقيقي', type: 'bullets', content: [
                'نضرب العدد في جميع عناصر المصفوفة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 2-3: ضرب المصفوفات',
          icon: '✖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'ضرب مصفوفتين يتطلب أن يكون عدد أعمدة الأولى مساوياً لعدد صفوف الثانية.',
            sections: [
              { title: 'شرط الضرب', type: 'bullets', content: [
                'A رتبتها m × n و B رتبتها n × p',
                'المصفوفة الناتجة AB رتبتها m × p',
                'الضرب ليس إبدالياً عموماً AB ≠ BA'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 2-4: المحددات وقاعدة كرامر',
          icon: '🔍',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المحددات تستخدم لحل أنظمة المعادلات الخطية بطريقة كرامر.',
            sections: [
              { title: 'محدد مصفوفة 2×2', type: 'formula', content: 'det(A) = ad - bc' },
              { title: 'قاعدة كرامر', type: 'bullets', content: [
                'حل النظام x = Dₓ/D، y = D_y/D',
                'شرط الحل: D ≠ 0'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 2-5: النظير الضربي للمصفوفة وأنظمة المعادلات',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'النظير الضربي للمصفوفة يستخدم لحل المعادلات المصفوفية.',
            sections: [
              { title: 'شرط وجود النظير الضربي', type: 'bullets', content: [
                'يوجد النظير الضربي A⁻¹ إذا وفقط إذا كان det(A) ≠ 0',
                'AA⁻¹ = A⁻¹A = I (مصفوفة الوحدة)'
              ]},
              { title: 'المعادلة المصفوفية', type: 'formula', content: 'AX = B ⇒ X = A⁻¹B' }
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 2-6: حل المعادلات التربيعية بالتحليل إلى عوامل',
          icon: '🎯',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التحليل إلى عوامل من أهم طرق حل المعادلات التربيعية.',
            sections: [
              { title: 'أشكال التحليل', type: 'bullets', content: [
                'إخراج العامل المشترك الأكبر (GCF)',
                'فرق المربعين: a² - b² = (a - b)(a + b)',
                'المربع الكامل: a² ± 2ab + b² = (a ± b)²'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 2-7: الأعداد المركبة والتخيلية',
          icon: 'i',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.7/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تظهر الأعداد التخيلية عند إيجاد الجذور التربيعية للأعداد السالبة.',
            sections: [
              { title: 'الوحدة التخيلية', type: 'formula', content: 'i = √-1  حيث i² = -1' },
              { title: 'العدد المركب', type: 'bullets', content: [
                'z = a + bi (حيث a الجزء الحقيقي، b الجزء التخيلي)',
                'مرافق العدد المركب a + bi هو a - bi'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 2-8: إكمال المربع',
          icon: '🧱',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.8/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-2.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'إكمال المربع طريقة منهجية لتحويل أي ثلاثي حدود تربيعي إلى مربع كامل.',
            sections: [
              { title: 'طريقة إكمال المربع', type: 'bullets', content: [
                'نجعل معامل x² يساوي 1',
                'نضيف ونطرح مربع نصف معامل x: (b/2)²',
                'نكتب المعادلة بصورة (x - h)² = k'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: القانون العام والمتباينات التربيعية والدوال الجبرية',
      icon: '📊',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة القانون العام للمميز، المتباينات التربيعية، الدوال والعمليات عليها والتركيب والدوال العكسية والجذرية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 3-1: القانون العام والمميز',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القانون العام يحل أي معادلة تربيعية.',
            sections: [
              { title: 'القانون العام', type: 'formula', content: 'x = (-b ± √(b² - 4ac)) / 2a' },
              { title: 'المميز', type: 'bullets', content: [
                'المميز = b² - 4ac',
                'إذا كان > 0: حلان حقيقيان',
                'إذا كان = 0: حل حقيقي واحد متكرر',
                'إذا كان < 0: حلان تخيليان مرافقان'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 3-2: تمثيل المتباينات التربيعية وحلها',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتباينات التربيعية تمثل بمناطق حل تفصلها القطوع المكافئة.',
            sections: [
              { title: 'الرسم البياني', type: 'bullets', content: [
                'نرسم القطع المكافئ الحدي',
                'نختبر نقطة داخل أو خارج القطع',
                'نظلل منطقة الحل الصحيحة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 3-3: العمليات على الدوال',
          icon: '➕',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'يمكن إجراء العمليات الأساسية على الدوال كأي تعابير جبرية.',
            sections: [
              { title: 'الجمع والطرح والضرب والقسمة', type: 'bullets', content: [
                '(f + g)(x) = f(x) + g(x)',
                '(f - g)(x) = f(x) - g(x)',
                '(f · g)(x) = f(x) · g(x)',
                '(f / g)(x) = f(x) / g(x) بشرط g(x) ≠ 0'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 3-4: تركيب الدوال',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تركيب الدوال يعني إدخال مخرجات دالة كمدخلات لدالة أخرى.',
            sections: [
              { title: 'صيغة التركيب', type: 'formula', content: '(f ∘ g)(x) = f(g(x))' },
              { title: 'خطوات الحل', type: 'bullets', content: [
                'نعوض بـ g(x) كاملة كمدخل في x بداخل f(x)',
                'ننتبه للمجال الجديد للدالة المركبة'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 3-5: العلاقات والدوال العكسية',
          icon: '↔️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة العكسية تعكس تأثير الدالة الأصلية.',
            sections: [
              { title: 'طريقة الحل الحسابية', type: 'bullets', content: [
                'نضع y مكان f(x)',
                'نبدل المتغيرين x و y',
                'نحل المعادلة للمتغير y الجديد ليصبح f⁻¹(x)'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 3-6: دوال ومتباينات الجذر التربيعي',
          icon: '√',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'دوال ومتباينات الجذر التربيعي تتطلب الانتباه لمجال الدالة (المحتوى تحت الجذر يجب أن يكون أكبر من أو يساوي الصفر).',
            sections: [
              { title: 'المجال', type: 'bullets', content: [
                'f(x) = √(x - h) + k',
                'المجال: x ≥ h',
                'المدى: y ≥ k (إذا كان معامل الجذر موجباً)'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 3-7: الجذر النوني',
          icon: 'ⁿ√',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.7/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الجذر النوني يعكس رفع العدد للأس النوني.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'ᵇ√aⁿ = a^(n/b)' },
              { title: 'التبسيط', type: 'bullets', content: [
                'الجذور الفردية للأعداد السالبة تكون سالبة وموجودة',
                'الجذور الزوجية للأعداد السالبة تكون أعداداً تخيلية وليست حقيقية'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 3-8: العمليات على الجذور وتبسيطها',
          icon: '⚙️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.8/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-3.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تبسيط الجذور والجمع والطرح والضرب بالضرب في المرافق للتخلص من الجذور بالمقام.',
            sections: [
              { title: 'إنطاق المقام', type: 'bullets', content: [
                'عند وجود جذر بالمقام نضرب بسطاً ومقاماً بنفس الجذر لجعله عدداً نسبياً',
                'في حالة المقامات المركبة نضرب بمرافق المقام'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'الوحدة الرابعة: الأسس الكسرية والمعادلات الجذرية وكثيرات الحدود',
      icon: '📐',
      color: 'from-orange-500 to-red-600',
      description: 'دراسة الأسس الكسرية، حل المعادلات الجذرية، ودوال كثيرات الحدود والعمليات عليها وقسمتها ونظرياتها.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 4-1: الأسس الكسرية والمنطقية',
          icon: '½',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الأسس الكسرية تمثل طريقة أخرى لكتابة الجذور.',
            sections: [
              { title: 'الصيغة الأساسية', type: 'formula', content: 'x^(1/n) = ⁿ√x' },
              { title: 'أمثلة للتبسيط', type: 'bullets', content: [
                '8^(1/3) = ³√8 = 2',
                '9^(3/2) = (√9)³ = 3³ = 27'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 4-2: حل المعادلات والمتباينات الجذرية',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'لحل المعادلات الجذرية نقوم بعزل الجذر أولاً ثم رفع الطرفين للقوة المناسبة.',
            sections: [
              { title: 'خطوات الحل الحذرة', type: 'bullets', content: [
                '1. اعزل الجذر في طرف',
                '2. ارفع الطرفين لأس مساوٍ لدليل الجذر',
                '3. حل المعادلة الناتجة',
                '4. تحقق من الحلول الدخيلة (Extraneous Solutions)'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 4-3: دوال كثيرات الحدود',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'دوال كثيرات الحدود تتميز بتمثيلها البياني المتصل والناعم.',
            sections: [
              { title: 'الصيغة القياسية للدرجة n', type: 'formula', content: 'f(x) = aₙxⁿ + ... + a₀' },
              { title: 'سلوك الأطراف', type: 'bullets', content: [
                'يعتمد على المعامل الرئيسي (Leading Coefficient) ودرجة كثير الحدود (فردية أو زوجية)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 4-4: تحليل التمثيلات البيانية لكثيرات الحدود',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تحليل التمثيل البياني يشمل الأصفار، القيم العظمى والصغرى المحلية وفترات التزايد والتناقص.',
            sections: [
              { title: 'أصفار الدالة', type: 'bullets', content: [
                'نقاط التقاطع مع محور x',
                'موقع القيم العظمى والصغرى المحلية'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 4-5: قسمة كثيرات الحدود',
          icon: '➗',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نقسم كثيرات الحدود باستخدام القسمة المطولة أو القسمة التركيبية.',
            sections: [
              { title: 'القسمة التركيبية (Synthetic Division)', type: 'bullets', content: [
                'طريقة مختصرة وسريعة للقسمة على مقسوم عليه على صورة (x - c)'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 4-6: نظريتا الباقي والعوامل',
          icon: '💡',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نظريتا الباقي والعوامل تسهلان تقييم كثيرات الحدود وتحديد عواملها.',
            sections: [
              { title: 'نظرية الباقي', type: 'formula', content: 'إذا قسمنا f(x) على (x - c)، فإن الباقي هو f(c)' },
              { title: 'نظرية العوامل', type: 'bullets', content: [
                '(x - c) هو عامل للدالة f(x) إذا وفقط إذا كان f(c) = 0'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 4-7: الجذور والأصفار لكثيرات الحدود',
          icon: '🌱',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.7/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-math-T1-4.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'إيجاد جذور الأصفار بالاعتماد على النظرية الأساسية في الجبر وقانون ديكارت للإشارات.',
            sections: [
              { title: 'النظرية الأساسية في الجبر', type: 'bullets', content: [
                'كل دالة كثير حدود من الدرجة n (حيث n ≥ 1) لها على الأقل جذر واحد في مجموعة الأعداد المركبة',
                'عدد الجذور الإجمالي (مع التكرار) يساوي تماماً درجة كثير الحدود n'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
