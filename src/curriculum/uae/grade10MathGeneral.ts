import { Curriculum } from '../../types';

export const math10General1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: التعابير والمعادلات التربيعية',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'دراسة كثيرات الحدود، العمليات عليها، والتحليل إلى العوامل، وحل المعادلات التربيعية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 1-1: جمع كثيرات الحدود وطرحها',
          icon: '➕',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'كثيرات الحدود هي تعابير جبرية مكونة من حدود. نتعلم في هذا الدرس جمع وطرح كثيرات الحدود.',
            sections: [
              { title: 'كثير الحدود', type: 'formula', content: 'P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀' },
              { title: 'الحدود المتشابهة', type: 'bullets', content: [
                'لها نفس المتغير ونفس الأس',
                'نجمع أو نطرح معاملاتها فقط',
                'مثال: 3x² + 5x² = 8x²'
              ]},
              { title: 'الدرجة', type: 'bullets', content: [
                'أكبر أس في كثير الحدود',
                'تحدد نوع كثير الحدود',
                'ثابت (0)، خطي (1)، تربيعي (2)، تكعيبي (3)'
              ]},
              { title: 'الجمع', type: 'bullets', content: [
                'نرتب الحدود تنازلياً',
                'نجمع الحدود المتشابهة',
                '(3x² + 2x + 1) + (2x² - x + 3) = 5x² + x + 4'
              ]},
              { title: 'الطرح', type: 'bullets', content: [
                'نوزع الإشارة السالبة',
                'نغير إشارة كل حد في المطروح',
                'نجمع الحدود المتشابهة'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 1-2: ضرب كثيرة حدود في أحادية الحد',
          icon: '✖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عند ضرب أحادية حد في كثيرة حدود، نستخدم الخاصية التوزيعية.',
            sections: [
              { title: 'الخاصية التوزيعية', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'قوانين الأسس', type: 'bullets', content: [
                'xᵐ · xⁿ = xᵐ⁺ⁿ',
                '(xᵐ)ⁿ = xᵐⁿ',
                '(xy)ⁿ = xyⁿ'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '3x(2x² + 5x - 1) = 6x³ + 15x² - 3x',
                '-2x²(3x³ - 4x + 7) = -6x⁵ + 8x³ - 14x²',
                '5(2x² - 3x + 4) = 10x² - 15x + 20'
              ]},
              { title: 'الخطوات', type: 'bullets', content: [
                '1. نضرب الأحادية في كل حد',
                '2. نضرب المعاملات',
                '3. نجمع الأسس للمتغيرات المتشابهة',
                '4. نكتب الناتج'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 1-3: ضرب كثيرات الحدود',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عند ضرب كثيرات حدود، نضرب كل حد في الأول بكل حد في الثاني.',
            sections: [
              { title: 'ضرب حدين في حدين', type: 'formula', content: '(a + b)(c + d) = ac + ad + bc + bd' },
              { title: 'طريقة FOIL', type: 'bullets', content: [
                'F: First (الأول × الأول)',
                'O: Outer (الخارجي × الخارجي)',
                'I: Inner (الداخلي × الداخلي)',
                'L: Last (الأخير × الأخير)'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15',
                '(2x - 1)(x + 4) = 2x² + 8x - x - 4 = 2x² + 7x - 4',
                '(x + 2)(x² + 3x - 1) = x³ + 3x² - x + 2x² + 6x - 2 = x³ + 5x² + 5x - 2'
              ]},
              { title: 'الخطوات', type: 'bullets', content: [
                '1. نضرب كل حد في الأول بكل حد في الثاني',
                '2. نجمع الحدود المتشابهة',
                '3. نرتب الناتج تنازلياً'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 1-4: نواتج الضرب الخاصة',
          icon: '🎯',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'هناك صيغ خاصة لضرب كثيرات الحدود تظهر بشكل متكرر.',
            sections: [
              { title: 'مربع مجموع', type: 'formula', content: '(a + b)² = a² + 2ab + b²' },
              { title: 'مربع فرق', type: 'formula', content: '(a - b)² = a² - 2ab + b²' },
              { title: 'فرق مربعين', type: 'formula', content: '(a + b)(a - b) = a² - b²' },
              { title: 'أمثلة', type: 'bullets', content: [
                '(x + 5)² = x² + 10x + 25',
                '(2x - 3)² = 4x² - 12x + 9',
                '(x + 4)(x - 4) = x² - 16',
                '(3x + 2)² = 9x² + 12x + 4'
              ]},
              { title: 'مكعب مجموع', type: 'formula', content: '(a + b)³ = a³ + 3a²b + 3ab² + b³' },
              { title: 'مكعب فرق', type: 'formula', content: '(a - b)³ = a³ - 3a²b + 3ab² - b³' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 1-5: استخدام خاصية التوزيع',
          icon: '📐',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خاصية التوزيع تساعدنا في التحليل إلى العوامل.',
            sections: [
              { title: 'التحليل باستخدام التوزيع', type: 'bullets', content: [
                'نبحث عن عامل مشترك',
                'نخرجه خارج القوس',
                'نبسط ما داخل القوس'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '6x² + 9x = 3x(2x + 3)',
                '12x³ - 8x² = 4x²(3x - 2)',
                '15x²y + 10xy² = 5xy(3x + 2y)'
              ]},
              { title: 'التحليل بالتجميع', type: 'bullets', content: [
                'نقسم إلى مجموعتين',
                'نخرج عامل مشترك من كل مجموعة',
                'نخرج العامل المشترك النهائي'
              ]},
              { title: 'مثال على التجميع', type: 'bullets', content: [
                'ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)',
                '2x² + 4x + 3x + 6 = 2x(x + 2) + 3(x + 2) = (2x + 3)(x + 2)'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 1-6: حل x² + bx + c = 0',
          icon: '🎯',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التربيعية بالتحليل إلى عوامل.',
            sections: [
              { title: 'الطريقة', type: 'bullets', content: [
                'نبحث عن عددين حاصل ضربهما c ومجموعهما b',
                'نحلل إلى عوامل',
                'نساوي كل عامل بالصفر',
                'نحل كل معادلة'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'x² + 5x + 6 = 0 ⇒ (x + 2)(x + 3) = 0 ⇒ x = -2 أو x = -3',
                'x² - 7x + 12 = 0 ⇒ (x - 3)(x - 4) = 0 ⇒ x = 3 أو x = 4',
                'x² + 2x - 15 = 0 ⇒ (x + 5)(x - 3) = 0 ⇒ x = -5 أو x = 3'
              ]},
              { title: 'خاصية الضرب الصفري', type: 'formula', content: 'إذا ab = 0 فإن a = 0 أو b = 0' },
              { title: 'خطوات الحل', type: 'bullets', content: [
                '1. نكتب المعادلة على الصورة القياسية',
                '2. نحلل الطرف الأيسر',
                '3. نساوي كل عامل بالصفر',
                '4. نوجد الحلول'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 1-7: حل ax² + bx + c = 0',
          icon: '🔍',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عندما a ≠ 1، نستخدم طرق خاصة للتحليل.',
            sections: [
              { title: 'طريقة التحليل', type: 'bullets', content: [
                'نبحث عن عددين حاصل ضربهما ac ومجموعهما b',
                'نكتب الحد الأوسط باستخدام العددين',
                'نحلل بالتجميع'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '2x² + 7x + 3 = 0 ⇒ 2x² + 6x + x + 3 = 0 ⇒ 2x(x + 3) + 1(x + 3) = 0 ⇒ (2x + 1)(x + 3) = 0',
                '3x² - 5x - 2 = 0 ⇒ 3x² - 6x + x - 2 = 0 ⇒ 3x(x - 2) + 1(x - 2) = 0 ⇒ (3x + 1)(x - 2) = 0'
              ]},
              { title: 'القانون العام', type: 'formula', content: 'x = [-b ± √(b² - 4ac)] / 2a' },
              { title: 'المميز', type: 'bullets', content: [
                'Δ = b² - 4ac',
                'Δ > 0: حلان حقيقيان مختلفان',
                'Δ = 0: حل حقيقي مكرر',
                'Δ < 0: لا توجد حلول حقيقية'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 1-8: الفرق بين مربعين',
          icon: '🔲',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.8/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الفرق بين مربعين له صيغة تحليل خاصة.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'a² - b² = (a + b)(a - b)' },
              { title: 'التعرف عليها', type: 'bullets', content: [
                'حدان مربعان كاملان',
                'إشارة الطرح بينهما',
                'يمكن كتابتهما على صورة مربع'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'x² - 9 = (x + 3)(x - 3)',
                '4x² - 25 = (2x + 5)(2x - 5)',
                '9x² - 16y² = (3x + 4y)(3x - 4y)',
                'x⁴ - 1 = (x² + 1)(x² - 1) = (x² + 1)(x + 1)(x - 1)'
              ]},
              { title: 'حل المعادلات', type: 'bullets', content: [
                'x² - 16 = 0 ⇒ (x + 4)(x - 4) = 0 ⇒ x = ±4',
                '9x² - 25 = 0 ⇒ (3x + 5)(3x - 5) = 0 ⇒ x = ±5/3'
              ]}
            ]
          }
        },
        {
          id: 9,
          title: 'الدرس 1-9: المربعات الكاملة',
          icon: '⬜',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.9/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.9-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المربعات الكاملة لها صيغ تحليل خاصة.',
            sections: [
              { title: 'مربع مجموع', type: 'formula', content: 'a² + 2ab + b² = (a + b)²' },
              { title: 'مربع فرق', type: 'formula', content: 'a² - 2ab + b² = (a - b)²' },
              { title: 'التعرف عليها', type: 'bullets', content: [
                'ثلاثة حدود',
                'الحد الأول والأخير مربعان كاملان',
                'الحد الأوسط = 2 × الجذر الأول × الجذر الأخير'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'x² + 6x + 9 = (x + 3)²',
                '4x² - 12x + 9 = (2x - 3)²',
                '9x² + 24x + 16 = (3x + 4)²',
                'x² - 10x + 25 = (x - 5)²'
              ]},
              { title: 'حل المعادلات', type: 'bullets', content: [
                'x² + 8x + 16 = 0 ⇒ (x + 4)² = 0 ⇒ x = -4',
                '4x² - 20x + 25 = 0 ⇒ (2x - 5)² = 0 ⇒ x = 5/2'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: الأسس والتعابير الجذرية',
      icon: '√',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة خصائص الأسس، الأسس النسبية، الترميز العلمي، والتعابير الجذرية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 2-1: خصائص ضرب الأسس',
          icon: '✖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الأسس لها خصائص خاصة تسهل العمليات عليها.',
            sections: [
              { title: 'حاصل الضرب', type: 'formula', content: 'xᵐ · xⁿ = xᵐ⁺ⁿ' },
              { title: 'قوة قوة', type: 'formula', content: '(xᵐ)ⁿ = xᵐⁿ' },
              { title: 'قوة حاصل الضرب', type: 'formula', content: '(xy)ⁿ = xⁿyⁿ' },
              { title: 'أمثلة', type: 'bullets', content: [
                'x³ · x⁵ = x⁸',
                '(x²)⁴ = x⁸',
                '(2x³)² = 4x⁶',
                '(3xy²)³ = 27x³y⁶'
              ]},
              { title: 'الأس صفر', type: 'formula', content: 'x⁰ = 1 (عندما x ≠ 0)' },
              { title: 'الأس السالب', type: 'formula', content: 'x⁻ⁿ = 1/xⁿ' }
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 2-2: خصائص قسمة الأسس',
          icon: '÷',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عند قسمة الأسس، نطرح الأسس.',
            sections: [
              { title: 'حاصل القسمة', type: 'formula', content: 'xᵐ / xⁿ = xᵐ⁻ⁿ (عندما x ≠ 0)' },
              { title: 'قوة حاصل القسمة', type: 'formula', content: '(x/y)ⁿ = xⁿ/yⁿ (عندما y ≠ 0)' },
              { title: 'أمثلة', type: 'bullets', content: [
                'x⁷ / x³ = x⁴',
                'x⁵ / x⁸ = x⁻³ = 1/x³',
                '(2x³/y²)² = 4x⁶/y⁴',
                '15x⁵ / 3x² = 5x³'
              ]},
              { title: 'تبسيط التعابير', type: 'bullets', content: [
                'نجمع أو نطرح الأسس',
                'نبسط المعاملات',
                'نكتب الناتج بأسس موجبة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 2-3: الأسس النسبية',
          icon: '½',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الأسس النسبية تربط بين الأسس والجذور.',
            sections: [
              { title: 'الجذر النوني', type: 'formula', content: 'x^(1/n) = ⁿ√x' },
              { title: 'الأس الكسري', type: 'formula', content: 'x^(m/n) = ⁿ√(xᵐ) = (ⁿ√x)ᵐ' },
              { title: 'أمثلة', type: 'bullets', content: [
                'x^(1/2) = √x',
                'x^(1/3) = ∛x',
                'x^(3/2) = √(x³) = (√x)³',
                '8^(2/3) = (∛8)² = 2² = 4'
              ]},
              { title: 'الأسس السالبة', type: 'formula', content: 'x^(-m/n) = 1/x^(m/n)' },
              { title: 'تطبيقات', type: 'bullets', content: [
                'تبسيط التعابير',
                'حل المعادلات',
                'التحويل بين الصيغ'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 2-4: الترميز العلمي',
          icon: '🔬',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الترميز العلمي يستخدم للتعبير عن الأعداد الكبيرة جداً أو الصغيرة جداً.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'N = a × 10ⁿ حيث 1 ≤ a < 10' },
              { title: 'أمثلة على أعداد كبيرة', type: 'bullets', content: [
                '300,000,000 = 3 × 10⁸',
                '6,370,000 = 6.37 × 10⁶',
                '1,420,000,000 = 1.42 × 10⁹'
              ]},
              { title: 'أمثلة على أعداد صغيرة', type: 'bullets', content: [
                '0.000000001 = 1 × 10⁻⁹',
                '0.000045 = 4.5 × 10⁻⁵',
                '0.00000000016 = 1.6 × 10⁻¹⁰'
              ]},
              { title: 'العمليات', type: 'bullets', content: [
                'الضرب: نضرب المعاملات ونجمع الأسس',
                'القسمة: نقسم المعاملات ونطرح الأسس',
                '(3 × 10⁵)(2 × 10³) = 6 × 10⁸',
                '(8 × 10⁷)/(2 × 10⁴) = 4 × 10³'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 2-5: تبسيط التعابير الجذرية',
          icon: '➗',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نبسط التعابير الجذرية بإخراج العوامل الكاملة.',
            sections: [
              { title: 'الجذر التربيعي', type: 'bullets', content: [
                'نبحث عن مربع كامل',
                '√(a²b) = a√b',
                '√50 = √(25×2) = 5√2'
              ]},
              { title: 'الجذر التكعيبي', type: 'bullets', content: [
                'نبحث عن مكعب كامل',
                '∛(a³b) = a∛b',
                '∛54 = ∛(27×2) = 3∛2'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '√72 = √(36×2) = 6√2',
                '√128 = √(64×2) = 8√2',
                '∛108 = ∛(27×4) = 3∛4',
                '√(x⁴y³) = x²y√y'
              ]},
              { title: 'المتغيرات', type: 'bullets', content: [
                '√(x⁶) = x³',
                '√(x⁵) = x²√x',
                '∛(x⁹) = x³'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 2-6: العمليات على التعابير الجذرية',
          icon: '🔧',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-2.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نجري العمليات على التعابير الجذرية بعد تبسيطها.',
            sections: [
              { title: 'الجمع والطرح', type: 'bullets', content: [
                'نجمع أو نطرح الجذور المتشابهة',
                'نفس الجذر ونفس ما تحته',
                '3√2 + 5√2 = 8√2',
                '√12 + √27 = 2√3 + 3√3 = 5√3'
              ]},
              { title: 'الضرب', type: 'bullets', content: [
                '√a · √b = √(ab)',
                'نضرب ما تحت الجذر',
                '√3 · √5 = √15',
                '2√3 · 4√5 = 8√15'
              ]},
              { title: 'القسمة', type: 'bullets', content: [
                '√a / √b = √(a/b)',
                'نقسم ما تحت الجذر',
                '√12 / √3 = √4 = 2'
              ]},
              { title: 'ترشيد المقام', type: 'bullets', content: [
                'نزيل الجذر من المقام',
                '1/√2 = √2/2',
                '3/√5 = 3√5/5'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: المستقيمات المتوازية والمتعامدة',
      icon: '📐',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة المستقيمات المتوازية والمتعامدة، الزوايا، الميل، ومعادلات المستقيمات.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 3-1: المستقيمات المتوازية والمتقاطعة',
          icon: '∥',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المستقيمات المتوازية لا تتقاطع أبداً. المستقيمات المتقاطعة تتقاطع في نقطة.',
            sections: [
              { title: 'المستقيمات المتوازية', type: 'bullets', content: [
                'لا تتقاطع',
                'في نفس المستوى',
                'نفس الميل',
                'الرمز: ∥'
              ]},
              { title: 'المستقيمات المتقاطعة', type: 'bullets', content: [
                'تتقاطع في نقطة واحدة',
                'تكون زوايا',
                'قد تكون متعامدة'
              ]},
              { title: 'المستقيمات المتعامدة', type: 'bullets', content: [
                'تتقاطع بزاوية 90°',
                'حاصل ضرب ميليهما = -1',
                'الرمز: ⊥'
              ]},
              { title: 'الزوايا', type: 'bullets', content: [
                'حادة: أقل من 90°',
                'قائمة: 90°',
                'منفرجة: أكثر من 90°',
                'مستقيمة: 180°'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 3-2: الزوايا والمستقيمات المتوازية',
          icon: '∠',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عند تقاطع مستقيم مع مستقيمين متوازيين، تتكون زوايا لها خصائص خاصة.',
            sections: [
              { title: 'الزوايا المتناظرة', type: 'bullets', content: [
                'في نفس الموضع',
                'متساوية',
                '∠1 = ∠5'
              ]},
              { title: 'الزوايا المتبادلة', type: 'bullets', content: [
                'داخلية متبادلة: متساوية',
                'خارجية متبادلة: متساوية',
                '∠3 = ∠6، ∠4 = ∠5'
              ]},
              { title: 'الزوايا المتحالفة', type: 'bullets', content: [
                'داخلية متحالفة: مجموعها 180°',
                'خارجية متحالفة: مجموعها 180°',
                '∠3 + ∠5 = 180°'
              ]},
              { title: 'الزوايا المتقابلة', type: 'bullets', content: [
                'بالرأس: متساوية',
                '∠1 = ∠4، ∠2 = ∠3'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 3-3: ميل الخط المستقيم',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الميل يقيس انحدار الخط المستقيم.',
            sections: [
              { title: 'تعريف الميل', type: 'formula', content: 'm = (y₂ - y₁)/(x₂ - x₁)' },
              { title: 'أنواع الميل', type: 'bullets', content: [
                'موجب: الخط صاعد',
                'سالب: الخط هابط',
                'صفر: خط أفقي',
                'غير معرف: خط رأسي'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'النقطتان (2, 3) و (5, 9): m = (9-3)/(5-2) = 6/3 = 2',
                'النقطتان (1, 4) و (3, 0): m = (0-4)/(3-1) = -4/2 = -2'
              ]},
              { title: 'الخط الأفقي', type: 'formula', content: 'y = b (ميله = 0)' },
              { title: 'الخط الرأسي', type: 'formula', content: 'x = a (ميله غير معرف)' }
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 3-4: معادلات المستقيم',
          icon: '📝',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'للمستقيم عدة صيغ لكتابة معادلته.',
            sections: [
              { title: 'صيغة الميل والمقطع', type: 'formula', content: 'y = mx + b' },
              { title: 'صيغة النقطة والميل', type: 'formula', content: 'y - y₁ = m(x - x₁)' },
              { title: 'الصيغة القياسية', type: 'formula', content: 'Ax + By = C' },
              { title: 'أمثلة', type: 'bullets', content: [
                'm = 3، b = -2 ⇒ y = 3x - 2',
                'm = 2، النقطة (1, 5) ⇒ y - 5 = 2(x - 1) ⇒ y = 2x + 3',
                'النقطتان (2, 3) و (4, 7): m = 2 ⇒ y - 3 = 2(x - 2) ⇒ y = 2x - 1'
              ]},
              { title: 'إيجاد المعادلة', type: 'bullets', content: [
                'نجد الميل',
                'نعوض في الصيغة المناسبة',
                'نبسط المعادلة'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 3-5: إثبات توازي المستقيمات',
          icon: '✓',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نثبت توازي المستقيمات بعدة طرق.',
            sections: [
              { title: 'طرق الإثبات', type: 'bullets', content: [
                'الميلان متساويان',
                'الزوايا المتناظرة متساوية',
                'الزوايا المتبادلة متساوية',
                'الزوايا المتحالفة مجموعها 180°'
              ]},
              { title: 'باستخدام الميل', type: 'bullets', content: [
                'نحسب ميل كل مستقيم',
                'إذا تساوى الميلان: المستقيمان متوازيان',
                'm₁ = m₂ ⇒ المستقيمان متوازيان'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'y = 3x + 2 و y = 3x - 5: متوازيان (نفس الميل 3)',
                '2x + y = 4 و 2x + y = -3: متوازيان (نفس الميل -2)'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 3-6: المتعامدات والمسافة',
          icon: '📏',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-3.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المستقيمات المتعامدة والمسافة بين النقاط.',
            sections: [
              { title: 'المستقيمات المتعامدة', type: 'bullets', content: [
                'تتقاطع بزاوية 90°',
                'حاصل ضرب الميلين = -1',
                'm₁ × m₂ = -1',
                'm₂ = -1/m₁'
              ]},
              { title: 'المسافة بين نقطتين', type: 'formula', content: 'd = √[(x₂-x₁)² + (y₂-y₁)²]' },
              { title: 'منتصف قطعة مستقيمة', type: 'formula', content: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)' },
              { title: 'أمثلة', type: 'bullets', content: [
                'y = 2x + 1 و y = -½x + 3: متعامدان (2 × -½ = -1)',
                'المسافة بين (1, 2) و (4, 6): d = √[(4-1)² + (6-2)²] = √(9+16) = 5',
                'منتصف (2, 3) و (6, 9): M = (4, 6)'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'الوحدة الرابعة: التحويلات الهندسية والتناظر',
      icon: '🔄',
      color: 'from-orange-500 to-red-600',
      description: 'دراسة الانعكاس، الإزاحة، الدوران، التناظر، وتركيب التحويلات.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 4-1: الانعكاس',
          icon: '🪞',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الانعكاس هو تحويل يقلب الشكل حول خط.',
            sections: [
              { title: 'الانعكاس حول محور x', type: 'formula', content: '(x, y) → (x, -y)' },
              { title: 'الانعكاس حول محور y', type: 'formula', content: '(x, y) → (-x, y)' },
              { title: 'الانعكاس حول y = x', type: 'formula', content: '(x, y) → (y, x)' },
              { title: 'الانعكاس حول y = -x', type: 'formula', content: '(x, y) → (-y, -x)' },
              { title: 'الخصائص', type: 'bullets', content: [
                'يحافظ على الأطوال',
                'يحافظ على الزوايا',
                'يغير الاتجاه',
                'محور الانعكاس هو منصف العمودي'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'انعكاس (3, 4) حول محور x: (3, -4)',
                'انعكاس (-2, 5) حول محور y: (2, 5)',
                'انعكاس (3, 4) حول y = x: (4, 3)'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 4-2: الإزاحة',
          icon: '➡️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الإزاحة هي تحويل ينقل الشكل بمسافة واتجاه محددين.',
            sections: [
              { title: 'صيغة الإزاحة', type: 'formula', content: '(x, y) → (x + a, y + b)' },
              { title: 'المتجه', type: 'bullets', content: [
                '⟨a, b⟩ يمثل الإزاحة',
                'a: الإزاحة الأفقية',
                'b: الإزاحة الرأسية'
              ]},
              { title: 'الخصائص', type: 'bullets', content: [
                'يحافظ على الأطوال',
                'يحافظ على الزوايا',
                'يحافظ على الاتجاه',
                'يحافظ على التوازي'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'إزاحة ⟨3, -2⟩: (x, y) → (x + 3, y - 2)',
                '(1, 4) بإزاحة ⟨2, 5⟩: (3, 9)',
                '(-3, 2) بإزاحة ⟨4, -1⟩: (1, 1)'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 4-3: الدوران',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوران هو تحويل يدور الشكل حول نقطة بزاوية محددة.',
            sections: [
              { title: 'الدوران 90° عكس عقارب الساعة', type: 'formula', content: '(x, y) → (-y, x)' },
              { title: 'الدوران 180°', type: 'formula', content: '(x, y) → (-x, -y)' },
              { title: 'الدوران 270° عكس عقارب الساعة', type: 'formula', content: '(x, y) → (y, -x)' },
              { title: 'الدوران 360°', type: 'bullets', content: [
                'يعود الشكل لموضعه الأصلي',
                '(x, y) → (x, y)'
              ]},
              { title: 'الخصائص', type: 'bullets', content: [
                'يحافظ على الأطوال',
                'يحافظ على الزوايا',
                'نقطة الدوران ثابتة',
                'الزاوية تحدد مقدار الدوران'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '(3, 4) دوران 90°: (-4, 3)',
                '(2, -5) دوران 180°: (-2, 5)',
                '(1, 3) دوران 270°: (3, -1)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 4-4: تركيب التحويلات',
          icon: '🔀',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.4/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تركيب التحويلات يعني تطبيق أكثر من تحويل على التوالي.',
            sections: [
              { title: 'التركيب', type: 'bullets', content: [
                'تطبيق تحويلين أو أكثر',
                'الترتيب مهم',
                'قد يعطي تحويل واحد'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'انعكاسان حول محورين متوازيين = إزاحة',
                'انعكاسان حول محورين متعامدين = دوران 180°',
                'انعكاس ثم إزاحة = انزلاق'
              ]},
              { title: 'التحويل الناتج', type: 'bullets', content: [
                'نعتمد على نوع التحويلات',
                'نعتمد على ترتيبها',
                'قد يكون نفس نوع التحويلات أو مختلف'
              ]},
              { title: 'التطبيقات', type: 'bullets', content: [
                'في الرسوم المتحركة',
                'في التصميم الهندسي',
                'في الألعاب الإلكترونية'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 4-5: التناظر',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.5/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-4.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التناظر هو خاصية الشكل التي تجعله يبدو متشابهاً بعد تحويل معين.',
            sections: [
              { title: 'التناظر الانعكاسي', type: 'bullets', content: [
                'محور التناظر يقسم الشكل لنصفين متطابقين',
                'كل نصف صورة معكوسة للآخر',
                'الدائرة: عدد لا نهائي من محاور التناظر',
                'المربع: 4 محاور تناظر'
              ]},
              { title: 'التناظر الدوراني', type: 'bullets', content: [
                'الشكل يطابق نفسه بعد دوران',
                'زاوية الدوران تحدد درجة التناظر',
                'المثلث المتساوي الأضلاع: تناظر 120°',
                'المربع: تناظر 90°'
              ]},
              { title: 'التناظر النقطي', type: 'bullets', content: [
                'تناظر حول نقطة',
                'كل نقطة لها نظيرة على البعد نفسه',
                'الدوران 180° حول المركز'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'الحرف A: تناظر انعكاسي',
                'الحرف S: تناظر دوراني',
                'الحرف H: تناظر انعكاسي ونقطي'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
