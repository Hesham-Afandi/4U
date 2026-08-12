const fs = require('fs');
const filepath = '/app/applet/src/curriculum/uae/addedCurriculums.ts';
const content = fs.readFileSync(filepath, 'utf8');

// Backup if not exists
if (!fs.existsSync(filepath + '.bak')) {
  fs.writeFileSync(filepath + '.bak', content, 'utf8');
}

const startMath12 = content.indexOf('export const math12General1: Curriculum = {');
if (startMath12 === -1) {
  console.log('Error: math12General1 not found');
  process.exit(1);
}

const targetStartText = "'عدد تقاطعات x على الأكثر n',";
const startPos = content.indexOf(targetStartText, startMath12);
if (startPos === -1) {
  console.log('Error: targetStartText not found');
  process.exit(1);
}

const targetEndText = "'2. خذ اللوغاريتم للطرفين (طبيعي أو مشترك)',";
const endPos = content.indexOf(targetEndText, startPos);
if (endPos === -1) {
  console.log('Error: targetEndText not found');
  process.exit(1);
}

// Find the line break before targetEndText
const lastLineStart = content.lastIndexOf('\n', endPos);

const replacement = `'عدد تقاطعات x على الأكثر n',
                'عدد النقاط الحرجة على الأكثر n-1',
                'عدد نقاط الانعطاف على الأكثر n-2'
              ]},
              { title: 'الانضغاط (Multiplicities)', type: 'bullets', content: [
                'تعدد فردي: المنحنى يعبر محور x',
                'تعدد زوجي: المنحنى يلامس محور x ويرتد',
                'كلما زاد التعدد، أصبح المنحنى أكثر تسطحاً عند الصفر'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: نظريتا الباقي والعامل',
          icon: '🔑',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نظرية الباقي ونظرية العامل هما أداتان أساسيتان لتبسيط كثيرات الحدود وإيجاد عواملها وأصفارها دون الحاجة دائماً للقسمة الطويلة.',
            sections: [
              { title: 'نظرية الباقي', type: 'formula', content: 'إذا قُسم P(x) على (x - a)، فإن الباقي = P(a)' },
              { title: 'تطبيقات نظرية الباقي', type: 'bullets', content: [
                'إيجاد قيمة الدالة عند نقطة بسرعة (التعويض التركيبي)',
                'تحديد ما إذا كان عدد ما صفراً للدالة'
              ]},
              { title: 'نظرية العامل', type: 'formula', content: '(x - a) عامل لـ P(x) إذا وفقط إذا P(a) = 0' },
              { title: 'تطبيقات نظرية العامل', type: 'bullets', content: [
                'تحليل كثير الحدود إلى عوامله الخطية',
                'التحقق من صحة العوامل المقترحة'
              ]},
              { title: 'القسمة التركيبية', type: 'bullets', content: [
                'طريقة مختصرة لقسمة كثير حدود على ثنائية حد من الصورة (x - c)',
                'تستخدم المعاملات فقط، وهي أسرع بكثير من القسمة المطولة'
              ]},
              { title: 'نظرية الأصفار النسبية (Rational Zero Theorem)', type: 'formula', content: 'الأصفار النسبية المحتملة = ±(عوامل الحد الثابت) / (عوامل المعامل الرئيسي)' }
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: أصفار الدوال كثيرة الحدود',
          icon: '🧮',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تعلم كيفية إيجاد جميع أصفار (جذور) الدوال كثيرة الحدود، سواء كانت حقيقية أو نسبية أو مركبة، باستخدام نظريات مختلفة.',
            sections: [
              { title: 'الأصفار الحقيقية', type: 'bullets', content: [
                'هي نقاط تقاطع المنحنى مع محور x',
                'يمكن إيجادها بالتحليل، أو القانون العام، أو بيانيا'
              ]},
              { title: 'نظرية الأصفار النسبية', type: 'formula', content: 'p/q حيث p عامل للحد الثابت و q عامل للمعامل الرئيسي' },
              { title: 'الخطوات العملية لإيجاد الأصفار', type: 'bullets', content: [
                '1. سرد الأصفار النسبية الممكنة',
                '2. استخدام القسمة التركيبية لاختبارها حتى نجد صفراً',
                '3. تقليل درجة كثير الحدود وحله'
              ]},
              { title: 'القانون العام (للتربيعي)', type: 'formula', content: 'x = [-b ± √(b² - 4ac)] / 2a' },
              { title: 'المميز (Discriminant)', type: 'bullets', content: [
                'b² - 4ac > 0: جذران حقيقيان مختلفان',
                'b² - 4ac = 0: جذر حقيقي مكرر',
                'b² - 4ac < 0: جذران مركبان مترافقان'
              ]},
              { title: 'نظرية الجذور الأساسية', type: 'text', content: 'كثير حدود من الدرجة n له بالضبط n جذر في مجموعة الأعداد المركبة (مع احتساب التعدد)' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس الخامس: الدوال النسبية',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة النسبية هي نسبة بين كثيرتي حدود. نركز في هذا الدرس على تحديد مجالها وخطوطها المقاربة الرأسية والأفقية والمائلة.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = P(x) / Q(x) حيث Q(x) ≠ 0' },
              { title: 'المجال', type: 'bullets', content: [
                'جميع الأعداد الحقيقية باستثناء القيم التي تجعل المقام صفراً Q(x) = 0'
              ]},
              { title: 'التقارب الرأسي (Vertical Asymptote)', type: 'bullets', content: [
                'يحدث عند أصفار المقام (بعد تبسيط الكسر بأقصى حد)',
                'المعادلة: x = c'
              ]},
              { title: 'التقارب الأفقي (Horizontal Asymptote)', type: 'bullets', content: [
                'إذا درجة البسط < درجة المقام: y = 0',
                'إذا درجة البسط = درجة المقام: y = المعامل الرئيسي للبسط / المعامل الرئيسي للمقام',
                'إذا درجة البسط > درجة المقام: لا يوجد تقارب أفقي'
              ]},
              { title: 'التقارب المائل (Oblique Asymptote)', type: 'bullets', content: [
                'يحدث إذا كانت درجة البسط أكبر من درجة المقام بدرجة واحدة بالضبط',
                'نحصل عليه بالقسمة المطولة لكثيرات الحدود (نصيب القسمة بدون الباقي)'
              ]},
              { title: 'الثقوب (Holes)', type: 'bullets', content: [
                'تحدث عند النقاط التي تجعل البسط والمقام معاً صفرين (عامل مشترك ملغى)',
                'تسمى نقطة انفصال قابلة للإزالة'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس السادس: المتباينات غير الخطية',
          icon: '📉',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-2.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'حل المتباينات كثيرة الحدود والمتباينات النسبية باستخدام طريقة اختبار إشارة الفترات على خط الأعداد.',
            sections: [
              { title: 'خطوات حل المتباينات', type: 'bullets', content: [
                '1. اجعل أحد الطرفين صفراً',
                '2. أوجد النقاط الحرجة (أصفار البسط والمقام)',
                '3. قسّم خط الأعداد إلى فترات باستخدام هذه النقاط',
                '4. اختبر إشارة كل فترة بتعويض نقطة اختيارية',
                '5. حدد فترات الحل المطلوبة واكتبها كفترة'
              ]},
              { title: 'المتباينات كثيرة الحدود', type: 'bullets', content: [
                'نحل المعادلة المرافقة لإيجاد الجذور',
                'ندرس الإشارة بين الجذور وخارجها'
              ]},
              { title: 'المتباينات النسبية', type: 'bullets', content: [
                'يجب الانتباه إلى عدم إشراك أصفار المقام في الحل (تكون دائماً فترة مفتوحة)'
              ]},
              { title: 'قواعد الإشارات', type: 'bullets', content: [
                'موجب × موجب = موجب | سالب × سالب = موجب',
                'موجب × سالب = سالب'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: الدوال الأسية واللوغاريتمية',
      icon: '📈',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة الدوال الأسية واللوغاريتمية، خصائص اللوغاريتمات، حل المعادلات الأسية واللوغاريتمية، والانحدار الخطي.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: الدوال الأسية',
          icon: 'e\\u02e3',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة الأسية هي دالة يكون فيها المتغير في الأس. تنمو أو تتناقص بمعدل يتناسب مع قيمتها الحالية، وتستخدم لنمذجة النمو السكاني، الاضمحلال الإشعاعي، والفائدة المركبة.',
            sections: [
              { title: 'الصيغة العامة', type: 'formula', content: 'f(x) = a\\u00b7b\\u02e3' },
              { title: 'شروط الأساس b', type: 'bullets', content: [
                'b > 0 و b \\u2260 1',
                'إذا b > 1: دالة أسية متزايدة (نمو)',
                'إذا 0 < b < 1: دالة أسية متناقصة (اضمحلال)'
              ]},
              { title: 'خصائص الدالة الأسية', type: 'bullets', content: [
                'المجال: جميع الأعداد الحقيقية (-\\u221e, \\u221e)',
                'المدى: (0, \\u221e) فقط (دائماً موجبة)',
                'تقاطع y: (0, a) لأن b\\u2070 = 1',
                'لا يوجد تقاطع x (الدالة لا تساوي صفر أبداً)',
                'تقارب أفقي: y = 0'
              ]},
              { title: 'قوانين الأسس', type: 'bullets', content: [
                'b\\u1d50 \\u00b7 b\\u207n = b\\u1d50\\u207a\\u207n',
                'b\\u1d50 / b\\u207n = b\\u1d50\\u207b\\u207n',
                '(b\\u1d50)\\u207n = b\\u1d50\\u207n',
                'b\\u2070 = 1',
                'b\\u207b\\u207n = 1/b\\u207n'
              ]},
              { title: 'الدالة الأسية الطبيعية', type: 'formula', content: 'f(x) = a\\u00b7e\\u02e3 حيث e \\u2248 2.718' },
              { title: 'تطبيقات', type: 'bullets', content: [
                'النمو السكاني: P(t) = P\\u2080\\u00b7e\\u02e3\\u1d57',
                'الاضمحلال الإشعاعي: A(t) = A\\u2080\\u00b7e\\u207b\\u1d4f\\u1d57',
                'الفائدة المركبة المستمرة: A = P\\u00b7e\\u02e3\\u1d57'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الدوال اللوغاريتمية',
          icon: 'log',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة اللوغاريتمية هي الدالة العكسية للدالة الأسية. اللوغاريتم يجيب على السؤال: "ما الأس الذي يجب رفع الأساس إليه للحصول على هذا العدد؟"',
            sections: [
              { title: 'تعريف اللوغاريتم', type: 'formula', content: 'log_b(x) = y إذا وفقط إذا b\\u02e4 = x' },
              { title: 'شروط اللوغاريتم', type: 'bullets', content: [
                'الأساس b > 0 و b \\u2260 1',
                'المحتوى x > 0 (لا يوجد لوغاريتم لصفر أو عدد سالب)',
                'log_b(1) = 0 دائماً لأن b\\u2070 = 1'
              ]},
              { title: 'أنواع اللوغاريتمات', type: 'bullets', content: [
                'اللوغاريتم المشترك: log(x) = log\\u2081\\u2080(x)',
                'اللوغاريتم الطبيعي: ln(x) = log_e(x) حيث e \\u2248 2.718'
              ]},
              { title: 'خصائص الدالة اللوغاريتمية', type: 'bullets', content: [
                'المجال: (0, \\u221e)',
                'المدى: (-\\u221e, \\u221e)',
                'تقاطع x: (1, 0) لأن log_b(1) = 0',
                'لا يوجد تقاطع y',
                'تقارب رأسي: x = 0'
              ]},
              { title: 'العلاقة مع الدالة الأسية', type: 'bullets', content: [
                'f(x) = b\\u02e3 و g(x) = log_b(x) دالتان عكسيتان',
                'f(g(x)) = x و g(f(x)) = x',
                'التمثيلان البيانيان متناظران حول y = x'
              ]},
              { title: 'تحويل بين الصيغ', type: 'formula', content: 'y = log_b(x) \\u27fa b\\u02e4 = x' }
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: خصائص اللوغاريتمات',
          icon: '🔧',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خصائص اللوغاريتمات تسمح لنا بتبسيط التعبيرات اللوغاريتمية المعقدة، وفك اللوغاريتمات، وحل المعادلات.',
            sections: [
              { title: 'خاصية الضرب (حاصل الضرب)', type: 'formula', content: 'log_b(MN) = log_b(M) + log_b(N)' },
              { title: 'خاصية القسمة (حاصل القسمة)', type: 'formula', content: 'log_b(M/N) = log_b(M) - log_b(N)' },
              { title: 'خاصية القوة', type: 'formula', content: 'log_b(M\\u207f) = n\\u00b7log_b(M)' },
              { title: 'خصائص أساسية أخرى', type: 'bullets', content: [
                'log_b(1) = 0',
                'log_b(b) = 1',
                'log_b(b\\u207f) = n',
                'b^(log_b(x)) = x'
              ]},
              { title: 'تغيير الأساس', type: 'formula', content: 'log_b(x) = log_a(x) / log_a(b)' },
              { title: 'تغيير الأساس للحاسبة', type: 'formula', content: 'log_b(x) = ln(x) / ln(b) = log(x) / log(b)' },
              { title: 'تطبيقات الخصائص', type: 'bullets', content: [
                'فك: log(x\\u00b2y\\u00b3) = 2log(x) + 3log(y)',
                'دمج: 2log(x) + 3log(y) = log(x\\u00b2y\\u00b3)',
                'تبسيط: log(100) = log(10\\u00b2) = 2'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس الرابع: حل المعادلات الأسية واللوغاريتمية',
          icon: '🧮',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/12Jen-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'لحل المعادلات الأسية واللوغاريتمية، نستخدم الخصائص العكسية بينهما: اللوغاريتم يلغي الأس، والأس يلغي اللوغاريتم.',
            sections: [
              { title: 'حل المعادلات الأسية', type: 'bullets', content: [
                '1. اعزل الحد الأسي',`;

const finalContent = content.substring(0, startPos) + replacement + content.substring(lastLineStart + 1);
fs.writeFileSync(filepath, finalContent, 'utf8');
console.log('Successfully updated addedCurriculums.ts!');
