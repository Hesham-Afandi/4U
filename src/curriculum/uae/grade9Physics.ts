import { Curriculum } from '../../types';

export const phy9AdvBridge1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: أدوات الفيزياء',
      icon: '🔬',
      color: 'from-blue-500 to-indigo-600',
      description: 'مقدمة في طرق الفيزياء، الرياضيات في الفيزياء، تقنيات القياس، وتمثيل البيانات بيانياً.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 1-1: طرق العلم',
          icon: '🧪',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تستخدم الفيزياء الطريقة العلمية لدراسة العالم الطبيعي من خلال الملاحظة والتجربة والتحليل.',
            sections: [
              { title: 'خطوات الطريقة العلمية', type: 'bullets', content: [
                '1. الملاحظة: ملاحظة ظاهرة طبيعية',
                '2. الفرضية: اقتراح تفسير قابل للاختبار',
                '3. التجربة: تصميم وإجراء اختبار',
                '4. التحليل: تفسير البيانات',
                '5. الاستنتاج: قبول أو رفض أو تعديل الفرضية'
              ]},
              { title: 'المفاهيم الأساسية', type: 'bullets', content: [
                'المتغير المستقل: ما تقوم بتغييره',
                'المتغير التابع: ما تقوم بقياسه',
                'المتغيرات الضابطة: ما تحافظ عليه ثابتاً',
                'المجموعة الضابطة: الأساس للمقارنة'
              ]},
              { title: 'النظرية مقابل القانون', type: 'bullets', content: [
                'النظرية: تفسير مدعوم جيداً لسبب حدوث شيء',
                'القانون: وصف لما يحدث (غالباً رياضي)',
                'كلاهما يتطلب أدلة كثيرة'
              ]},
              { title: 'التفكير العلمي', type: 'bullets', content: [
                'نتائج قابلة للتكرار',
                'مراجعة الأقران',
                'الموضوعية',
                'الشك والانفتاح'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 1-2: الرياضيات والفيزياء',
          icon: '🔢',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الرياضيات هي لغة الفيزياء. تسمح لنا بالتعبير عن العلاقات وإجراء التنبؤات.',
            sections: [
              { title: 'الجبر في الفيزياء', type: 'bullets', content: [
                'حل المعادلات لإيجاد المجاهيل',
                'إعادة ترتيب الصيغ',
                'التعويض بالقيم'
              ]},
              { title: 'الصيغة العلمية', type: 'formula', content: 'N = a × 10ⁿ حيث 1 ≤ a < 10' },
              { title: 'أمثلة', type: 'bullets', content: [
                '300,000,000 = 3 × 10⁸',
                '0.000000001 = 1 × 10⁻⁹',
                'سرعة الضوء: c = 3 × 10⁸ m/s'
              ]},
              { title: 'الأرقام المعنوية', type: 'bullets', content: [
                'جميع الأرقام غير الصفرية معنوية',
                'الأصفار بين الأرقام المعنوية معنوية',
                'الأصفار البادئة ليست معنوية',
                'الأصفار النهائية بعد الفاصلة معنوية'
              ]},
              { title: 'التحليل البعدي', type: 'bullets', content: [
                'التحقق من اتساق المعادلات',
                'تحويل الوحدات',
                'الطول: [L]، الكتلة: [M]، الزمن: [T]',
                'السرعة: [L/T]، العجلة: [L/T²]'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 1-3: القياس',
          icon: '📏',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القياس هو أساس الفيزياء التجريبية. نستخدم الوحدات القياسية للتعبير عن النتائج.',
            sections: [
              { title: 'الوحدات الأساسية في النظام الدولي (SI)', type: 'bullets', content: [
                'الطول: المتر (m)',
                'الكتلة: الكيلوجرام (kg)',
                'الزمن: الثانية (s)',
                'التيار الكهربي: الأمبير (A)',
                'درجة الحرارة: الكلفن (K)',
                'كمية المادة: المول (mol)'
              ]},
              { title: 'الوحدات المشتقة', type: 'bullets', content: [
                'السرعة: m/s',
                'القوة: نيوتن (N) = kg·m/s²',
                'الطاقة: جول (J) = kg·m²/s²',
                'القدرة: واط (W) = J/s'
              ]},
              { title: 'البادئات المترية', type: 'bullets', content: [
                'كيلو (k) = 10³',
                'سنتي (c) = 10⁻²',
                'ملي (m) = 10⁻³',
                'ميكرو (μ) = 10⁻⁶',
                'نانو (n) = 10⁻⁹'
              ]},
              { title: 'الدقة والضبط', type: 'bullets', content: [
                'الدقة: قرب القيمة المقاسة من القيمة الحقيقية',
                'الضبط: تقارب القياسات المتكررة',
                'عدم التأكد: نطاق القيم الممكنة',
                'الخطأ: الفرق بين القيمة المقاسة والحقيقية'
              ]},
              { title: 'تحويل الوحدات', type: 'bullets', content: [
                'استخدام عوامل التحويل',
                'إلغاء الوحدات بشكل صحيح',
                'مثال: 60 km/h = 60 × (1000/3600) = 16.67 m/s'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 1-4: تمثيل البيانات بيانياً',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الرسوم البيانية تساعد على تصور العلاقات بين المتغيرات وكشف الأنماط في البيانات.',
            sections: [
              { title: 'مكونات الرسم البياني', type: 'bullets', content: [
                'محور x: المتغير المستقل',
                'محور y: المتغير التابع',
                'العنوان: يصف العلاقة',
                'تسميات مع الوحدات'
              ]},
              { title: 'أنواع العلاقات', type: 'bullets', content: [
                'خطية: y = mx + b (خط مستقيم)',
                'عكسية: y = k/x (قطع زائد)',
                'تربيعية: y = ax² (قطع مكافئ)',
                'أسية: y = a·bˣ'
              ]},
              { title: 'الميل', type: 'formula', content: 'm = Δy/Δx = (y₂ - y₁)/(x₂ - x₁)' },
              { title: 'خط الملائمة الأفضل', type: 'bullets', content: [
                'خط مستقيم يمر بنقاط البيانات',
                'يقلل المسافة لجميع النقاط',
                'يستخدم لإيجاد العلاقات',
                'الميل يعطي كمية فيزيائية ذات معنى'
              ]},
              { title: 'تفسير الرسوم البيانية', type: 'bullets', content: [
                'الميل = معدل التغير',
                'تقاطع y = القيمة الابتدائية',
                'المساحة تحت المنحنى = الكمية المتراكمة',
                'الارتباط ≠ السببية'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: تمثيل الحركة',
      icon: '🚗',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة كيفية وصف الحركة باستخدام الموقع، الزمن، السرعة، ومخططات الحركة.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 2-1: تصور الحركة',
          icon: '📍',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'مخططات الحركة توضح موقع الجسم المتحرك على فترات زمنية متساوية.',
            sections: [
              { title: 'مخطط الحركة', type: 'bullets', content: [
                'سلسلة من الصور توضح الموقع على فترات زمنية متساوية',
                'المسافات تبين السرعة',
                'مسافات متساوية = سرعة ثابتة',
                'مسافات متزايدة = تسارع',
                'مسافات متناقصة = تباطؤ'
              ]},
              { title: 'نموذج الجسيم', type: 'bullets', content: [
                'تمثيل مبسط',
                'معاملة الجسم كنقطة',
                'تجاهل الحجم والشكل',
                'التركيز على الحركة'
              ]},
              { title: 'التمثيل بالمتجهات', type: 'bullets', content: [
                'الأسهم توضح الاتجاه والمقدار',
                'متجهات السرعة: توضح اتجاه الحركة',
                'السهم الأطول = سرعة أكبر',
                'متجهات العجلة: توضح التغير في السرعة'
              ]},
              { title: 'الإطار المرجعي', type: 'bullets', content: [
                'نظام إحداثيات للقياس',
                'نقطة الأصل: نقطة البداية',
                'الاتجاه الموجب: الاتجاه المختار',
                'الحركة نسبية للإطار'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 2-2: أين ومتى؟',
          icon: '⏰',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الموقع والزمن هما كميتان أساسيتان لوصف الحركة.',
            sections: [
              { title: 'الموقع', type: 'bullets', content: [
                'الموقع بالنسبة لنقطة الأصل',
                'يمكن أن يكون موجباً أو سالباً',
                'الوحدة: متر (m)',
                'يرمز له بـ x أو d'
              ]},
              { title: 'الزمن', type: 'bullets', content: [
                'اللحظة: لحظة محددة',
                'الفترة الزمنية: المدة بين حدثين',
                'Δt = t₂ - t₁',
                'الوحدة: ثانية (s)'
              ]},
              { title: 'المسافة مقابل الإزاحة', type: 'bullets', content: [
                'المسافة: طول المسار الكلي (كمية قياسية)',
                'الإزاحة: التغير في الموقع (كمية متجهة)',
                'Δd = d_f - d_i',
                'الإزاحة يمكن أن تكون صفراً حتى لو كانت المسافة ليست صفراً'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'المشي 5m شرقاً، ثم 3m غرباً',
                'المسافة = 8 م',
                'الإزاحة = 2 م شرقاً',
                '|الإزاحة| ≤ المسافة دائماً'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 2-3: رسوم الموقع-الزمن',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'رسوم الموقع-الزمن توضح كيف يتغير الموقع مع الزمن.',
            sections: [
              { title: 'خصائص الرسم', type: 'bullets', content: [
                'محور y: الموقع',
                'محور x: الزمن',
                'الميل = السرعة',
                'تقاطع y = الموقع الابتدائي'
              ]},
              { title: 'تفسير الميل', type: 'bullets', content: [
                'ميل موجب: حركة في الاتجاه الموجب',
                'ميل سالب: حركة في الاتجاه السالب',
                'ميل صفري: في حالة سكون',
                'ميل أشد انحداراً = حركة أسرع'
              ]},
              { title: 'السرعة الثابتة', type: 'formula', content: 'd = d₀ + vt (خط مستقيم)' },
              { title: 'قراءة الرسم', type: 'bullets', content: [
                'الموقع عند أي زمن: قراءة قيمة y',
                'السرعة: حساب الميل',
                'الإزاحة: التغير في قيمة y',
                'الفترة الزمنية: التغير في قيمة x'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'خط مستقيم من (0, 2) إلى (4, 10)',
                'الموقع الابتدائي: 2 م',
                'السرعة: (10-2)/(4-0) = 2 م/ث',
                'المعادلة: d = 2 + 2t'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 2-4: ما مدى السرعة؟',
          icon: '⚡',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'السرعة المتجهة تصف مدى سرعة حركة الجسم وفي أي اتجاه.',
            sections: [
              { title: 'السرعة المتجهة المتوسطة', type: 'formula', content: 'v_avg = Δd/Δt = (d_f - d_i)/(t_f - t_i)' },
              { title: 'السرعة المتجهة اللحظية', type: 'bullets', content: [
                'السرعة المتجهة عند لحظة محددة',
                'ميل المماس لمنحنى الموقع-الزمن',
                'ما يظهره عداد السرعة (مع الاتجاه)'
              ]},
              { title: 'السرعة القياسية مقابل السرعة المتجهة', type: 'bullets', content: [
                'السرعة القياسية: كمية قياسية (مقدار فقط)',
                'السرعة المتجهة: كمية متجهة (مقدار + اتجاه)',
                'السرعة القياسية = |السرعة المتجهة|',
                'السرعة القياسية المتوسطة = المسافة الكلية / الزمن الكلي'
              ]},
              { title: 'الوحدات', type: 'bullets', content: [
                'm/s (الوحدة في النظام الدولي)',
                'km/h (شائعة في الحياة اليومية)',
                'التحويل: 1 m/s = 3.6 km/h'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'سيارة تقطع 100 م في 10 ث: v = 10 م/ث',
                'عداء يكمل دورة 400 م في 50 ث',
                'السرعة القياسية المتوسطة = 8 م/ث',
                'السرعة المتجهة المتوسطة = 0 م/ث (عاد إلى نقطة البداية)'
              ]},
              { title: 'الاتجاه', type: 'bullets', content: [
                'سرعة متجهة موجبة: حركة في الاتجاه الموجب',
                'سرعة متجهة سالبة: حركة في الاتجاه السالب',
                'إشارة السرعة المتجهة تدل على الاتجاه'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: الحركة بعجلة',
      icon: '🏎️',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة العجلة، الحركة بعجلة ثابتة، والسقوط الحر.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 3-1: العجلة',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'العجلة هي معدل التغير في السرعة. تصف مدى سرعة تغير السرعة.',
            sections: [
              { title: 'العجلة المتوسطة', type: 'formula', content: 'a_avg = Δv/Δt = (v_f - v_i)/(t_f - t_i)' },
              { title: 'الوحدات', type: 'bullets', content: [
                'm/s² (الوحدة في النظام الدولي)',
                'تقرأ "متر لكل ثانية مربعة"',
                'تعني أن السرعة تتغير بهذا المقدار كل ثانية'
              ]},
              { title: 'تفسير العجلة', type: 'bullets', content: [
                'عجلة موجبة: السرعة تزداد (إذا كانت v > 0)',
                'عجلة سالبة: السرعة تنقص (إذا كانت v > 0)',
                'العجلة والسرعة بنفس الإشارة: الجسم يزداد سرعة',
                'العجلة والسرعة بإشارتين مختلفتين: الجسم يتباطأ'
              ]},
              { title: 'رسوم السرعة-الزمن', type: 'bullets', content: [
                'الميل = العجلة',
                'تقاطع y = السرعة الابتدائية',
                'المساحة تحت المنحنى = الإزاحة',
                'خط مستقيم = عجلة ثابتة'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'سيارة تنتقل من 0 إلى 20 م/ث في 5 ث',
                'a = (20-0)/5 = 4 م/ث²',
                'سيارة تكبح من 30 م/ث إلى 0 في 6 ث',
                'a = (0-30)/6 = -5 م/ث²'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 3-2: الحركة بعجلة ثابتة',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عندما تكون العجلة ثابتة، يمكننا استخدام معادلات الحركة لوصف الحركة.',
            sections: [
              { title: 'معادلات الحركة', type: 'bullets', content: [
                'v = v₀ + at',
                'd = d₀ + v₀t + ½at²',
                'v² = v₀² + 2a(d - d₀)',
                'd = d₀ + ½(v₀ + v)t'
              ]},
              { title: 'المتغيرات', type: 'bullets', content: [
                'd: الإزاحة (الموقع)',
                'v: السرعة النهائية',
                'v₀: السرعة الابتدائية',
                'a: العجلة',
                't: الزمن'
              ]},
              { title: 'متى نستخدم كل معادلة', type: 'bullets', content: [
                'لا نعرف d: نستخدم v = v₀ + at',
                'لا نعرف v: نستخدم d = d₀ + v₀t + ½at²',
                'لا نعرف t: نستخدم v² = v₀² + 2a(d - d₀)',
                'لا نعرف a: نستخدم d = d₀ + ½(v₀ + v)t'
              ]},
              { title: 'استراتيجية حل المسائل', type: 'bullets', content: [
                '1. ارسم مخططاً',
                '2. اكتب القيم المعلومة',
                '3. حدد المجهول',
                '4. اختر المعادلة المناسبة',
                '5. حل جبرياً',
                '6. تحقق من الوحدات والمعقولية'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'سيارة تتسارع من السكون بعجلة 3 م/ث² لمدة 5 ث',
                'v₀ = 0, a = 3, t = 5',
                'v = 0 + 3(5) = 15 م/ث',
                'd = 0 + 0 + ½(3)(25) = 37.5 م'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 3-3: السقوط الحر',
          icon: '⬇️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'السقوط الحر هو الحركة تحت تأثير الجاذبية فقط، دون مقاومة الهواء.',
            sections: [
              { title: 'عجلة الجاذبية', type: 'formula', content: 'g = 9.8 م/ث² (باتجاه الأسفل)' },
              { title: 'معادلات السقوط الحر', type: 'bullets', content: [
                'v = v₀ - gt',
                'y = y₀ + v₀t - ½gt²',
                'v² = v₀² - 2g(y - y₀)',
                'حيث الأعلى موجب، g = 9.8 م/ث²'
              ]},
              { title: 'الخصائص', type: 'bullets', content: [
                'جميع الأجسام تسقط بنفس المعدل (بدون مقاومة الهواء)',
                'العجلة ثابتة',
                'عند أقصى ارتفاع: v = 0',
                'زمن الصعود = زمن الهبوط (لنفس الارتفاع)'
              ]},
              { title: 'الحالات الخاصة', type: 'bullets', content: [
                'جسم يُسقط من السكون: v₀ = 0',
                'جسم يُقذف لأعلى: v₀ > 0، يتباطأ',
                'جسم يُقذف لأسفل: v₀ < 0، يزداد سرعة',
                'عند القمة: v = 0، لكن a = -g لا تزال'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'كرة تُسقط من ارتفاع 20 م',
                'y = ½gt² ⇒ 20 = ½(9.8)t² ⇒ t ≈ 2.02 ث',
                'v = gt = 9.8(2.02) ≈ 19.8 م/ث'
              ]},
              { title: 'مقدمة في حركة المقذوفات', type: 'bullets', content: [
                'الحركة الأفقية والرأسية مستقلتان',
                'أفقياً: سرعة ثابتة',
                'رأسياً: سقوط حر (a = -g)',
                'تتحدان لتشكل مساراً قطعاً مكافئاً'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'الوحدة الرابعة: القوى في بعد واحد',
      icon: '💪',
      color: 'from-red-500 to-orange-600',
      description: 'دراسة القوة والحركة، الوزن وقوة السحب، وقانون نيوتن الثالث.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 4-1: القوة والحركة',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القوة هي دفعة أو سحب يمكن أن تغير حركة الجسم. قانون نيوتن الثاني يربط بين القوة والكتلة والعجلة.',
            sections: [
              { title: 'القوة', type: 'bullets', content: [
                'كمية متجهة (مقدار + اتجاه)',
                'الوحدة: نيوتن (N) = kg·m/s²',
                'يمكن أن تسبب تسارعاً أو تباطؤاً أو تغييراً في الاتجاه',
                'قوى تماس مقابل قوى حقل'
              ]},
              { title: 'القوة المحصلة', type: 'formula', content: 'F_net = ΣF = F₁ + F₂ + F₃ + ...' },
              { title: 'قانون نيوتن الأول (القصور الذاتي)', type: 'bullets', content: [
                'الجسم الساكن يبقى ساكناً',
                'الجسم المتحرك يبقى متحركاً بسرعة ثابتة في خط مستقيم',
                'ما لم تؤثر عليه قوة محصلة خارجية',
                'القصور الذاتي: مقاومة التغيير في الحركة'
              ]},
              { title: 'قانون نيوتن الثاني', type: 'formula', content: 'F_net = m·a' },
              { title: 'المكونات', type: 'bullets', content: [
                'F_net: القوة المحصلة (N)',
                'm: الكتلة (kg)',
                'a: العجلة (m/s²)',
                'العجلة في اتجاه القوة المحصلة'
              ]},
              { title: 'مخطط الجسم الحر (FBD)', type: 'bullets', content: [
                'ارسم الجسم كنقطة',
                'ارسم جميع القوى كسهام من النقطة',
                'ضع علامة على كل قوة',
                'اختر نظام إحداثيات',
                'طبق F_net = ma على كل محور'
              ]},
              { title: 'أنواع القوى', type: 'bullets', content: [
                'القوة المؤثرة (F_app)',
                'الاحتكاك (f)',
                'القوة العمودية (N)',
                'الوزن (W = mg)',
                'الشد (T)',
                'مقاومة الهواء (السحب)'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'صندوق كتلته 10 كجم يُدفع بقوة 50 N، الاحتكاك = 10 N',
                'F_net = 50 - 10 = 40 N',
                'a = F_net/m = 40/10 = 4 م/ث²'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 4-2: الوزن وقوة السحب',
          icon: '🌍',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الوزن هو قوة الجاذبية على الجسم. قوة السحب تعارض الحركة خلال مائع.',
            sections: [
              { title: 'الوزن', type: 'formula', content: 'W = m·g' },
              { title: 'الوزن مقابل الكتلة', type: 'bullets', content: [
                'الكتلة: كمية المادة (kg)، ثابتة في كل مكان',
                'الوزن: قوة الجاذبية (N)، يعتمد على الموقع',
                'g = 9.8 م/ث² على سطح الأرض',
                'g = 1.6 م/ث² على القمر'
              ]},
              { title: 'القوة العمودية', type: 'bullets', content: [
                'عمودية على السطح',
                'قوة رد فعل تمنع الجسم من اختراق السطح',
                'ليست دائماً مساوية للوزن!',
                'على سطح مستوٍ: N = mg (إذا لم توجد قوى رأسية أخرى)'
              ]},
              { title: 'قوة الاحتكاك', type: 'bullets', content: [
                'تعارض الحركة أو الحركة المحتملة',
                'موازية للسطح',
                'تعتمد على القوة العمودية ونوع السطح'
              ]},
              { title: 'الاحتكاك السكوني', type: 'formula', content: 'f_s ≤ μ_s·N' },
              { title: 'الاحتكاك الحركي', type: 'formula', content: 'f_k = μ_k·N' },
              { title: 'خصائص الاحتكاك', type: 'bullets', content: [
                'μ_s > μ_k (السكوني > الحركي)',
                'يعتمد على المواد، وليس المساحة',
                'مستقل عن السرعة (تقريباً)'
              ]},
              { title: 'قوة السحب', type: 'bullets', content: [
                'تعارض الحركة خلال مائع (هواء أو سائل)',
                'تعتمد على السرعة والشكل وكثافة المائع',
                'تزداد مع السرعة',
                'الاتجاه: معاكس للسرعة'
              ]},
              { title: 'السرعة الحدية', type: 'bullets', content: [
                'عندما تتساوى قوة السحب مع الوزن (لجسم ساقط)',
                'القوة المحصلة = 0',
                'العجلة = 0',
                'الجسم يسقط بسرعة ثابتة',
                'F_net = W - F_drag = 0'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'شخص كتلته 60 كجم على سطح مستوٍ',
                'W = mg = 60 × 9.8 = 588 N',
                'N = 588 N (لأعلى)',
                'إذا μ_k = 0.3، فإن f_k = 0.3 × 588 = 176.4 N'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 4-3: قانون نيوتن الثالث',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-phy-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القوى تأتي دائماً في أزواج. عندما يؤثر جسم بقوة على جسم آخر، يؤثر الجسم الثاني بقوة مساوية ومعاكسة.',
            sections: [
              { title: 'قانون نيوتن الثالث', type: 'formula', content: 'F_A/B = -F_B/A' },
              { title: 'الصياغة', type: 'bullets', content: [
                'لكل فعل رد فعل مساوٍ له في المقدار ومعاكس له في الاتجاه',
                'قوتا الفعل ورد الفعل متساويتان في المقدار',
                'معاكستان في الاتجاه',
                'تؤثران على جسمين مختلفين'
              ]},
              { title: 'نقاط أساسية', type: 'bullets', content: [
                'الفعل ورد الفعل يؤثران على جسمين مختلفين',
                'لا يلغي أحدهما الآخر',
                'يحدثان في نفس اللحظة',
                'من نفس نوع القوة (مثلاً، كلاهما جاذبية)'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'أنت تدفع الجدار: الجدار يدفعك للخلف',
                'الأرض تجذبك للأسفل: أنت تجذب الأرض للأعلى',
                'القدم تدفع الأرض للخلف: الأرض تدفع القدم للأمام (المشي)',
                'الصاروخ يدفع الغاز للخارج: الغاز يدفع الصاروخ للأمام'
              ]},
              { title: 'لماذا لا يلغي أحدهما الآخر؟', type: 'bullets', content: [
                'الفعل على الجسم A، ورد الفعل على الجسم B',
                'كل قوة تؤثر على جسمها الخاص',
                'عند تحليل جسم واحد، نعتبر فقط القوى المؤثرة عليه'
              ]},
              { title: 'مفاهيم خاطئة شائعة', type: 'bullets', content: [
                'ليس: "القوى المتساوية تعني لا حركة"',
                'ليس: "الجسم الأكبر يؤثر بقوة أكبر"',
                'صحيح: "القوى دائماً متساوية بغض النظر عن الكتلة"',
                'صحيح: "العجلات مختلفة بسبب الكتل المختلفة"'
              ]},
              { title: 'التطبيقات', type: 'bullets', content: [
                'المشي: ادفع الأرض للخلف، الأرض تدفعك للأمام',
                'السباحة: ادفع الماء للخلف، الماء يدفعك للأمام',
                'الصواريخ: اطرد الغاز للخلف، الغاز يدفع الصاروخ للأمام',
                'القفز: ادفع الأرض للأسفل، الأرض تدفعك للأعلى'
              ]},
              { title: 'مثال حسابي', type: 'bullets', content: [
                'شخص كتلته 60 كجم يدفع عربة كتلتها 30 كجم بقوة 120 N',
                'القوة على العربة: 120 N للأمام',
                'القوة على الشخص: 120 N للخلف',
                'a_cart = 120/30 = 4 م/ث²',
                'a_person = 120/60 = 2 م/ث²',
                'عجلات مختلفة بسبب كتل مختلفة!'
              ]}
            ]
          }
        }
      ]
    }
  ]
};

export const phy9AdvInspire1: Curriculum = {
  isEnglish: true,
  units: [
    {
      id: 1,
      name: 'Module 1: A Physics Toolkit',
      icon: '🔬',
      color: 'from-blue-500 to-indigo-600',
      description: 'Introduction to physics methods, mathematics in physics, measurement techniques, and graphing data.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1-1: Methods of Science',
          icon: '🧪',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Physics uses the scientific method to investigate the natural world through observation, experimentation, and analysis.',
            sections: [
              { title: 'Scientific Method Steps', type: 'bullets', content: [
                '1. Observation: Notice a phenomenon',
                '2. Hypothesis: Propose a testable explanation',
                '3. Experiment: Design and conduct a test',
                '4. Analysis: Interpret the data',
                '5. Conclusion: Accept, reject, or modify hypothesis'
              ]},
              { title: 'Key Concepts', type: 'bullets', content: [
                'Independent variable: what you change',
                'Dependent variable: what you measure',
                'Control variables: what you keep constant',
                'Control group: baseline for comparison'
              ]},
              { title: 'Theory vs Law', type: 'bullets', content: [
                'Theory: Well-tested explanation of why something happens',
                'Law: Description of what happens (often mathematical)',
                'Both require extensive evidence'
              ]},
              { title: 'Scientific Thinking', type: 'bullets', content: [
                'Reproducible results',
                'Peer review',
                'Objectivity',
                'Skepticism and open-mindedness'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 1-2: Mathematics and Physics',
          icon: '🔢',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Mathematics is the language of physics. It allows us to express relationships and make predictions.',
            sections: [
              { title: 'Algebra in Physics', type: 'bullets', content: [
                'Solving equations for unknowns',
                'Rearranging formulas',
                'Substituting values'
              ]},
              { title: 'Scientific Notation', type: 'formula', content: 'N = a × 10ⁿ where 1 ≤ a < 10' },
              { title: 'Examples', type: 'bullets', content: [
                '300,000,000 = 3 × 10⁸',
                '0.000000001 = 1 × 10⁻⁹',
                'Speed of light: c = 3 × 10⁸ m/s'
              ]},
              { title: 'Significant Figures', type: 'bullets', content: [
                'All non-zero digits are significant',
                'Zeros between significant digits are significant',
                'Leading zeros are NOT significant',
                'Trailing zeros after decimal ARE significant'
              ]},
              { title: 'Dimensional Analysis', type: 'bullets', content: [
                'Check equation consistency',
                'Convert units',
                'Length: [L], Mass: [M], Time: [T]',
                'Speed: [L/T], Acceleration: [L/T²]'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 1-3: Measurement',
          icon: '📏',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Measurement is the foundation of experimental physics. We use standard units to communicate results.',
            sections: [
              { title: 'SI Base Units', type: 'bullets', content: [
                'Length: meter (m)',
                'Mass: kilogram (kg)',
                'Time: second (s)',
                'Electric current: ampere (A)',
                'Temperature: kelvin (K)',
                'Amount of substance: mole (mol)'
              ]},
              { title: 'Derived Units', type: 'bullets', content: [
                'Speed: m/s',
                'Force: Newton (N) = kg·m/s²',
                'Energy: Joule (J) = kg·m²/s²',
                'Power: Watt (W) = J/s'
              ]},
              { title: 'Metric Prefixes', type: 'bullets', content: [
                'kilo (k) = 10³',
                'centi (c) = 10⁻²',
                'milli (m) = 10⁻³',
                'micro (μ) = 10⁻⁶',
                'nano (n) = 10⁻⁹'
              ]},
              { title: 'Accuracy vs Precision', type: 'bullets', content: [
                'Accuracy: closeness to true value',
                'Precision: closeness of repeated measurements',
                'Uncertainty: range of possible values',
                'Error: difference between measured and true value'
              ]},
              { title: 'Unit Conversion', type: 'bullets', content: [
                'Use conversion factors',
                'Cancel units properly',
                'Example: 60 km/h = 60 × (1000/3600) = 16.67 m/s'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 1-4: Graphing Data',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-1.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Graphs help visualize relationships between variables and reveal patterns in data.',
            sections: [
              { title: 'Graph Components', type: 'bullets', content: [
                'X-axis: independent variable',
                'Y-axis: dependent variable',
                'Title: describes the relationship',
                'Labels with units'
              ]},
              { title: 'Types of Relationships', type: 'bullets', content: [
                'Linear: y = mx + b (straight line)',
                'Inverse: y = k/x (hyperbola)',
                'Quadratic: y = ax² (parabola)',
                'Exponential: y = a·bˣ'
              ]},
              { title: 'Slope', type: 'formula', content: 'm = Δy/Δx = (y₂ - y₁)/(x₂ - x₁)' },
              { title: 'Line of Best Fit', type: 'bullets', content: [
                'Straight line through data points',
                'Minimizes distance to all points',
                'Used to find relationships',
                'Slope gives meaningful physical quantity'
              ]},
              { title: 'Interpreting Graphs', type: 'bullets', content: [
                'Slope = rate of change',
                'Y-intercept = initial value',
                'Area under curve = accumulated quantity',
                'Correlation ≠ causation'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Module 2: Representing Motion',
      icon: '🚗',
      color: 'from-green-500 to-teal-600',
      description: 'Study how to describe motion using position, time, velocity, and motion diagrams.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 2-1: Picturing Motion',
          icon: '📍',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Motion diagrams show the position of a moving object at equal time intervals.',
            sections: [
              { title: 'Motion Diagram', type: 'bullets', content: [
                'Series of images showing position at equal time intervals',
                'Spacing indicates speed',
                'Equal spacing = constant speed',
                'Increasing spacing = accelerating',
                'Decreasing spacing = decelerating'
              ]},
              { title: 'Particle Model', type: 'bullets', content: [
                'Simplified representation',
                'Treat object as a point',
                'Ignores size and shape',
                'Focuses on motion'
              ]},
              { title: 'Vector Representation', type: 'bullets', content: [
                'Arrows show direction and magnitude',
                'Velocity vectors: show direction of motion',
                'Longer arrow = greater speed',
                'Acceleration vectors: show change in velocity'
              ]},
              { title: 'Reference Frame', type: 'bullets', content: [
                'Coordinate system for measurement',
                'Origin: starting point',
                'Positive direction: chosen direction',
                'Motion is relative to frame'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2-2: Where and When?',
          icon: '⏰',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Position and time are fundamental quantities for describing motion.',
            sections: [
              { title: 'Position', type: 'bullets', content: [
                'Location relative to origin',
                'Can be positive or negative',
                'Units: meters (m)',
                'Denoted by x or d'
              ]},
              { title: 'Time', type: 'bullets', content: [
                'Instant: specific moment',
                'Time interval: duration between events',
                'Δt = t₂ - t₁',
                'Units: seconds (s)'
              ]},
              { title: 'Distance vs Displacement', type: 'bullets', content: [
                'Distance: total path length (scalar)',
                'Displacement: change in position (vector)',
                'Δd = d_f - d_i',
                'Displacement can be zero even if distance is not'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'Walk 5m east, then 3m west',
                'Distance = 8 m',
                'Displacement = 2 m east',
                '|Displacement| ≤ Distance always'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 2-3: Position-Time Graphs',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Position-time graphs show how position changes with time.',
            sections: [
              { title: 'Graph Features', type: 'bullets', content: [
                'Y-axis: position',
                'X-axis: time',
                'Slope = velocity',
                'Y-intercept = initial position'
              ]},
              { title: 'Interpreting Slope', type: 'bullets', content: [
                'Positive slope: moving in positive direction',
                'Negative slope: moving in negative direction',
                'Zero slope: at rest',
                'Steeper slope = faster motion'
              ]},
              { title: 'Constant Velocity', type: 'formula', content: 'd = d₀ + vt (straight line)' },
              { title: 'Reading the Graph', type: 'bullets', content: [
                'Position at any time: read y-value',
                'Velocity: calculate slope',
                'Displacement: change in y-value',
                'Time interval: change in x-value'
              ]},
              { title: 'Example', type: 'bullets', content: [
                'Straight line from (0, 2) to (4, 10)',
                'Initial position: 2 m',
                'Velocity: (10-2)/(4-0) = 2 m/s',
                'Equation: d = 2 + 2t'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 2-4: How Fast?',
          icon: '⚡',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-2.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Velocity describes how fast and in what direction an object moves.',
            sections: [
              { title: 'Average Velocity', type: 'formula', content: 'v_avg = Δd/Δt = (d_f - d_i)/(t_f - t_i)' },
              { title: 'Instantaneous Velocity', type: 'bullets', content: [
                'Velocity at a specific instant',
                'Slope of tangent to position-time graph',
                'What speedometer shows (with direction)'
              ]},
              { title: 'Speed vs Velocity', type: 'bullets', content: [
                'Speed: scalar (magnitude only)',
                'Velocity: vector (magnitude + direction)',
                'Speed = |velocity|',
                'Average speed = total distance / total time'
              ]},
              { title: 'Units', type: 'bullets', content: [
                'm/s (SI unit)',
                'km/h (common in daily life)',
                'Conversion: 1 m/s = 3.6 km/h'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'Car travels 100 m in 10 s: v = 10 m/s',
                'Runner completes 400 m lap in 50 s',
                'Average speed = 8 m/s',
                'Average velocity = 0 m/s (returned to start)'
              ]},
              { title: 'Direction', type: 'bullets', content: [
                'Positive velocity: moving in + direction',
                'Negative velocity: moving in - direction',
                'Velocity sign indicates direction'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Module 3: Accelerated Motion',
      icon: '🏎️',
      color: 'from-purple-500 to-pink-600',
      description: 'Study acceleration, motion with constant acceleration, and free fall.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 3-1: Acceleration',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Acceleration is the rate of change of velocity. It describes how quickly velocity changes.',
            sections: [
              { title: 'Average Acceleration', type: 'formula', content: 'a_avg = Δv/Δt = (v_f - v_i)/(t_f - t_i)' },
              { title: 'Units', type: 'bullets', content: [
                'm/s² (SI unit)',
                'Read as "meters per second squared"',
                'Means velocity changes by this amount each second'
              ]},
              { title: 'Interpreting Acceleration', type: 'bullets', content: [
                'Positive acceleration: velocity increasing (if v > 0)',
                'Negative acceleration: velocity decreasing (if v > 0)',
                'Acceleration and velocity same sign: speeding up',
                'Acceleration and velocity opposite sign: slowing down'
              ]},
              { title: 'Velocity-Time Graphs', type: 'bullets', content: [
                'Slope = acceleration',
                'Y-intercept = initial velocity',
                'Area under curve = displacement',
                'Straight line = constant acceleration'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'Car goes from 0 to 20 m/s in 5 s',
                'a = (20-0)/5 = 4 m/s²',
                'Car brakes from 30 m/s to 0 in 6 s',
                'a = (0-30)/6 = -5 m/s²'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 3-2: Motion with Constant Acceleration',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'When acceleration is constant, we can use kinematic equations to describe motion.',
            sections: [
              { title: 'Kinematic Equations', type: 'bullets', content: [
                'v = v₀ + at',
                'd = d₀ + v₀t + ½at²',
                'v² = v₀² + 2a(d - d₀)',
                'd = d₀ + ½(v₀ + v)t'
              ]},
              { title: 'Variables', type: 'bullets', content: [
                'd: displacement (position)',
                'v: final velocity',
                'v₀: initial velocity',
                'a: acceleration',
                't: time'
              ]},
              { title: 'When to Use Each', type: 'bullets', content: [
                'Missing d: use v = v₀ + at',
                'Missing v: use d = d₀ + v₀t + ½at²',
                'Missing t: use v² = v₀² + 2a(d - d₀)',
                'Missing a: use d = d₀ + ½(v₀ + v)t'
              ]},
              { title: 'Problem Solving Strategy', type: 'bullets', content: [
                '1. Draw diagram',
                '2. List known values',
                '3. Identify unknown',
                '4. Choose appropriate equation',
                '5. Solve algebraically',
                '6. Check units and reasonableness'
              ]},
              { title: 'Example', type: 'bullets', content: [
                'Car accelerates from rest at 3 m/s² for 5 s',
                'v₀ = 0, a = 3, t = 5',
                'v = 0 + 3(5) = 15 m/s',
                'd = 0 + 0 + ½(3)(25) = 37.5 m'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 3-3: Free Fall',
          icon: '⬇️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-3.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Free fall is motion under the influence of gravity alone, with no air resistance.',
            sections: [
              { title: 'Acceleration Due to Gravity', type: 'formula', content: 'g = 9.8 m/s² (downward)' },
              { title: 'Free Fall Equations', type: 'bullets', content: [
                'v = v₀ - gt',
                'y = y₀ + v₀t - ½gt²',
                'v² = v₀² - 2g(y - y₀)',
                'Where up is positive, g = 9.8 m/s²'
              ]},
              { title: 'Characteristics', type: 'bullets', content: [
                'All objects fall at same rate (no air resistance)',
                'Acceleration is constant',
                'At maximum height: v = 0',
                'Time up = time down (for same height)'
              ]},
              { title: 'Special Cases', type: 'bullets', content: [
                'Dropped from rest: v₀ = 0',
                'Thrown upward: v₀ > 0, slows down',
                'Thrown downward: v₀ < 0, speeds up',
                'At peak: v = 0, but a = -g still'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'Ball dropped from 20 m height',
                'y = ½gt² ⇒ 20 = ½(9.8)t² ⇒ t ≈ 2.02 s',
                'v = gt = 9.8(2.02) ≈ 19.8 m/s'
              ]},
              { title: 'Projectile Motion Intro', type: 'bullets', content: [
                'Horizontal and vertical motion independent',
                'Horizontal: constant velocity',
                'Vertical: free fall (a = -g)',
                'Combines to form parabolic path'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Module 4: Forces in One Dimension',
      icon: '💪',
      color: 'from-red-500 to-orange-600',
      description: 'Study force and motion, weight and drag force, and Newton\'s Third Law.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 4-1: Force and Motion',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Force is a push or pull that can change an object\'s motion. Newton\'s Second Law relates force, mass, and acceleration.',
            sections: [
              { title: 'Force', type: 'bullets', content: [
                'Vector quantity (magnitude + direction)',
                'Unit: Newton (N) = kg·m/s²',
                'Can cause acceleration, deceleration, or change direction',
                'Contact forces vs field forces'
              ]},
              { title: 'Net Force', type: 'formula', content: 'F_net = ΣF = F₁ + F₂ + F₃ + ...' },
              { title: 'Newton\'s First Law (Inertia)', type: 'bullets', content: [
                'Object at rest stays at rest',
                'Object in motion stays in motion at constant velocity',
                'Unless acted upon by a net external force',
                'Inertia: resistance to change in motion'
              ]},
              { title: 'Newton\'s Second Law', type: 'formula', content: 'F_net = m·a' },
              { title: 'Components', type: 'bullets', content: [
                'F_net: net force (N)',
                'm: mass (kg)',
                'a: acceleration (m/s²)',
                'Acceleration is in direction of net force'
              ]},
              { title: 'Free Body Diagram (FBD)', type: 'bullets', content: [
                'Treat object as point',
                'Draw all forces acting on object as arrows starting from point',
                'Label each force',
                'Choose coordinate system',
                'Apply Newton\'s second law'
              ]},
              { title: 'Types of Forces', type: 'bullets', content: [
                'Applied force (F_app)',
                'Friction (f)',
                'Normal force (N)',
                'Weight (W = mg)',
                'Tension (T)',
                'Air resistance (drag)'
              ]},
              { title: 'Example', type: 'bullets', content: [
                '10 kg box pushed with 50 N force, friction = 10 N',
                'F_net = 50 - 10 = 40 N',
                'a = F_net/m = 40/10 = 4 m/s²'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 4-2: Weight and Drag Force',
          icon: '🌍',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Weight is the gravitational force on an object. Drag force opposes motion through a fluid.',
            sections: [
              { title: 'Weight', type: 'formula', content: 'W = m·g' },
              { title: 'Weight vs Mass', type: 'bullets', content: [
                'Mass: amount of matter (kg), constant everywhere',
                'Weight: gravitational force (N), depends on location',
                'g = 9.8 m/s² on Earth\'s surface',
                'g = 1.6 m/s² on Moon'
              ]},
              { title: 'Normal Force', type: 'bullets', content: [
                'Perpendicular to surface',
                'Reaction force preventing object from passing through surface',
                'Not always equal to weight!',
                'On flat surface: N = mg (if no other vertical forces)'
              ]},
              { title: 'Friction Force', type: 'bullets', content: [
                'Opposes motion or attempted motion',
                'Parallel to surface',
                'Depends on normal force and surface type'
              ]},
              { title: 'Static Friction', type: 'formula', content: 'f_s ≤ μ_s·N' },
              { title: 'Kinetic Friction', type: 'formula', content: 'f_k = μ_k·N' },
              { title: 'Friction Properties', type: 'bullets', content: [
                'μ_s > μ_k (static > kinetic)',
                'Depends on materials, not area',
                'Independent of speed (approximately)'
              ]},
              { title: 'Drag Force', type: 'bullets', content: [
                'Opposes motion through fluid (air or liquid)',
                'Depends on speed, shape, and fluid density',
                'Increases with speed',
                'Direction: opposite to velocity'
              ]},
              { title: 'Terminal Velocity', type: 'bullets', content: [
                'When drag = weight (for falling object)',
                'Net force = 0',
                'Acceleration = 0',
                'Object falls at constant speed',
                'F_net = W - F_drag = 0'
              ]},
              { title: 'Example', type: 'bullets', content: [
                '60 kg person on flat surface',
                'W = mg = 60 × 9.8 = 588 N',
                'N = 588 N (upward)',
                'If μ_k = 0.3, then f_k = 0.3 × 588 = 176.4 N'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 4-3: Newton\'s Third Law',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-phy-T1-4.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Forces always come in pairs. When one object exerts a force on another, the second object exerts an equal and opposite force.',
            sections: [
              { title: 'Newton\'s Third Law', type: 'formula', content: 'F_A/B = -F_B/A' },
              { title: 'Statement', type: 'bullets', content: [
                'For every action, there is an equal and opposite reaction',
                'Action and reaction forces are equal in magnitude',
                'Opposite in direction',
                'Act on DIFFERENT objects'
              ]},
              { title: 'Key Points', type: 'bullets', content: [
                'Action and reaction act on different objects',
                'They do NOT cancel each other',
                'They occur simultaneously',
                'Same type of force (e.g., both gravitational)'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'You push wall: wall pushes you back',
                'Earth pulls you down: you pull Earth up',
                'Foot pushes ground back: ground pushes foot forward (walking)',
                'Rocket pushes gas out: gas pushes rocket forward'
              ]},
              { title: 'Why Don\'t They Cancel?', type: 'bullets', content: [
                'Action on object A, reaction on object B',
                'Each force affects its own object',
                'When analyzing one object, only consider forces ON it'
              ]},
              { title: 'Common Misconceptions', type: 'bullets', content: [
                'NOT: "equal forces mean no motion"',
                'NOT: "bigger object exerts bigger force"',
                'YES: "forces are always equal regardless of mass"',
                'YES: "accelerations differ due to different masses"'
              ]},
              { title: 'Applications', type: 'bullets', content: [
                'Walking: push ground back, ground pushes you forward',
                'Swimming: push water back, water pushes you forward',
                'Rockets: expel gas backward, gas pushes rocket forward',
                'Jumping: push Earth down, Earth pushes you up'
              ]},
              { title: 'Example Calculation', type: 'bullets', content: [
                '60 kg person pushes 30 kg cart with 120 N',
                'Force on cart: 120 N forward',
                'Force on person: 120 N backward',
                'a_cart = 120/30 = 4 m/s²',
                'a_person = 120/60 = 2 m/s²',
                'Different accelerations due to different masses!'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
