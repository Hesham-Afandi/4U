import { Curriculum } from '../../types';

export const phy10AdvInspire1: Curriculum = {
  isEnglish: true,
  units: [
    {
      id: 1,
      name: 'Module 1: Vibrations and Waves',
      icon: '🌊',
      color: 'from-orange-500 to-red-600',
      description: 'Study of periodic motion, wave properties, and wave behavior including interference, diffraction, reflection, and refraction.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1-1: Periodic Motion',
          icon: '🔄',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-1.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Periodic motion is motion that repeats at regular time intervals. Simple harmonic motion is the simplest type of periodic motion.',
            sections: [
              { title: 'Period and Frequency', type: 'bullets', content: [
                'Period (T): Time for one complete cycle',
                'Frequency (f): Number of cycles per second',
                'Relationship: f = 1/T',
                'Unit: Hertz (Hz) = 1/s'
              ]},
              { title: 'Simple Harmonic Motion', type: 'bullets', content: [
                'Oscillatory motion about equilibrium position',
                'Restoring force is proportional to displacement',
                'F = -kx (Hooke\'s Law)'
              ]},
              { title: 'Spring-Mass System', type: 'formula', content: 'T = 2π√(m/k)' },
              { title: 'Simple Pendulum', type: 'formula', content: 'T = 2π√(L/g)' },
              { title: 'Velocity and Acceleration', type: 'bullets', content: [
                'Maximum velocity at equilibrium position',
                'Maximum acceleration at maximum displacement',
                'At equilibrium: v = v_max, a = 0',
                'At extremes: v = 0, a = a_max'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 1-2: Wave Properties',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-1.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A wave is a disturbance that travels through a medium, transferring energy without transferring matter.',
            sections: [
              { title: 'Types of Waves', type: 'bullets', content: [
                'Mechanical waves: Require medium (sound, water)',
                'Electromagnetic waves: No medium needed (light)',
                'Transverse: Vibration perpendicular to direction (light)',
                'Longitudinal: Vibration parallel to direction (sound)'
              ]},
              { title: 'Wave Characteristics', type: 'bullets', content: [
                'Wavelength (λ): Distance between two consecutive crests',
                'Frequency (f): Number of waves per second',
                'Wave speed (v): Speed of wave propagation',
                'Amplitude (A): Maximum displacement from equilibrium'
              ]},
              { title: 'Wave Equation', type: 'formula', content: 'v = f·λ' },
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
          id: 3,
          title: 'Lesson 1-3: Wave Behavior',
          icon: '🔀',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-1.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Waves exhibit special behaviors when they encounter obstacles or when they meet other waves.',
            sections: [
              { title: 'Reflection', type: 'bullets', content: [
                'Bouncing back of waves at a barrier',
                'Angle of incidence = Angle of reflection',
                'Phase inversion may occur'
              ]},
              { title: 'Refraction', type: 'bullets', content: [
                'Bending of waves when passing between media',
                'Wavelength and speed change',
                'Frequency remains constant',
                'Bends toward normal if slows down'
              ]},
              { title: 'Diffraction', type: 'bullets', content: [
                'Bending of waves around obstacles',
                'Occurs when waves pass through an opening',
                'Most noticeable when opening size ≈ λ'
              ]},
              { title: 'Interference', type: 'bullets', content: [
                'Superposition of two or more waves',
                'Constructive: Amplitude increases (crest+crest)',
                'Destructive: Amplitude decreases (crest+trough)',
                'Principle of superposition'
              ]},
              { title: 'Standing Waves', type: 'bullets', content: [
                'Result of interference of two opposite waves',
                'Nodes: Points of no motion',
                'Antinodes: Points of maximum amplitude'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Module 2: Sound',
      icon: '🔊',
      color: 'from-blue-600 to-indigo-700',
      description: 'Study of sound properties, sound detection, music and noise, and sound applications in theater.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 2-1: Sound Properties and Detection',
          icon: '🎵',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-2.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Sound is a mechanical longitudinal wave that requires a material medium for propagation. It has unique properties that distinguish it from other waves.',
            sections: [
              { title: 'Nature of Sound', type: 'bullets', content: [
                'Longitudinal mechanical wave',
                'Requires material medium (cannot travel in vacuum)',
                'Travels through gases, liquids, and solids',
                'Fastest in solids'
              ]},
              { title: 'Speed of Sound', type: 'bullets', content: [
                'In air (20°C): 343 m/s',
                'In water: 1482 m/s',
                'In iron: 5120 m/s',
                'Increases with temperature'
              ]},
              { title: 'Sound Characteristics', type: 'bullets', content: [
                'Pitch: Depends on frequency',
                'Loudness: Depends on amplitude',
                'Quality (Timbre): Depends on harmonics',
                'Human hearing range: 20 Hz to 20,000 Hz'
              ]},
              { title: 'Sound Intensity', type: 'formula', content: 'Measured in decibels (dB)' },
              { title: 'Sound Detection', type: 'bullets', content: [
                'Human ear: Converts waves to nerve signals',
                'Microphone: Converts sound to electrical signals',
                'Oscilloscope: Displays sound waves'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2-2: Music and Noise',
          icon: '🎼',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-2.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Music depends on regular tones and harmonious frequencies. Noise is irregular sound.',
            sections: [
              { title: 'Tone and Noise', type: 'bullets', content: [
                'Tone: Waves with regular frequency (music)',
                'Noise: Waves with irregular frequency',
                'Harmonics give sound quality'
              ]},
              { title: 'Resonance', type: 'bullets', content: [
                'Vibration occurs strongly at natural frequency',
                'Used in musical instruments',
                'Can be dangerous in structures'
              ]},
              { title: 'Musical Instruments', type: 'bullets', content: [
                'String instruments: Vibrating strings (violin, guitar)',
                'Wind instruments: Vibrating air column (flute, trumpet)',
                'Percussion instruments: Drums and bells'
              ]},
              { title: 'Harmonics', type: 'formula', content: 'f_n = n·f₁ where n = 1, 2, 3...' },
              { title: 'Doppler Effect', type: 'bullets', content: [
                'Apparent frequency change due to relative motion',
                'When approaching: frequency increases (higher pitch)',
                'When receding: frequency decreases (lower pitch)',
                'Used in radar and medicine'
              ]},
              { title: 'Standing Waves in Strings', type: 'bullets', content: [
                'Formed by interference of two opposite waves',
                'Nodes: Points of no motion',
                'Antinodes: Points of maximum vibration',
                'Determine different tones'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 2-3: Sound in Theater',
          icon: '🎭',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-phy-T1-2.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Sound applications in theater require deep understanding of sound properties, reflection, and resonance.',
            sections: [
              { title: 'Echo', type: 'bullets', content: [
                'Reflected sound heard again',
                'Requires sufficient distance (at least 17 meters)',
                'Used to determine depths and distances'
              ]},
              { title: 'Reverberation', type: 'bullets', content: [
                'Sound continues after source stops',
                'Important in music halls',
                'Optimal time: 1-2 seconds',
                'Too long: Blurs sound',
                'Too short: Sound is dry'
              ]},
              { title: 'Sound Insulation', type: 'bullets', content: [
                'Using sound-absorbing materials',
                'Reducing sound transmission between rooms',
                'Porous materials absorb sound energy'
              ]},
              { title: 'Sound Amplification', type: 'bullets', content: [
                'Using speakers/amplifiers',
                'Converting electrical energy to sound',
                'Controlling intensity and clarity'
              ]},
              { title: 'Practical Applications', type: 'bullets', content: [
                'Designing theater halls',
                'Improving sound quality',
                'Controlling echo and resonance',
                'Optimal speaker distribution'
              ]},
              { title: 'Ultrasonic Waves', type: 'bullets', content: [
                'Frequencies above 20,000 Hz',
                'Used in medical imaging',
                'Ultrasonic cleaning',
                'Detecting defects in materials'
              ]}
            ]
          }
        }
      ]
    }
  ]
};

export const phy10AdvBridge1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: الاهتزازات والموجات',
      icon: '🌊',
      color: 'from-orange-500 to-red-600',
      description: 'دراسة الحركة الدورية، خصائص الموجات، وسلوك الموجات بما في ذلك التداخل والحيود والانعكاس والانكسار.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: الحركة الدورية',
          icon: '🔄',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الحركة الدورية هي حركة تتكرر على فترات زمنية منتظمة. الحركة التوافقية البسيطة هي أبسط أنواع الحركة الدورية.',
            sections: [
              { title: 'الدور والتردد', type: 'bullets', content: [
                'الدور (T): الزمن اللازم لدورة كاملة',
                'التردد (f): عدد الدورات في الثانية',
                'العلاقة: f = 1/T',
                'الوحدة: هرتز (Hz) = 1/s'
              ]},
              { title: 'الحركة التوافقية البسيطة', type: 'bullets', content: [
                'حركة اهتزازية حول موضع الاتزان',
                'القوة المرجعة تتناسب طردياً مع الإزاحة',
                'F = -kx (قانون هوك)'
              ]},
              { title: 'النابض (الزنبرك)', type: 'formula', content: 'T = 2π√(m/k)' },
              { title: 'البندول البسيط', type: 'formula', content: 'T = 2π√(L/g)' },
              { title: 'السرعة والعجلة', type: 'bullets', content: [
                'السرعة العظمى عند موضع الاتزان',
                'العجلة العظمى عند أقصى إزاحة',
                'عند الاتزان: v = v_max, a = 0',
                'عند النهاية: v = 0, a = a_max'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: خصائص الموجات',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-1.2-exam/',
          lessonTitle: ' شرح الدرس',
          examTitle: ' اختبر نفسك',
          content: {
            intro: 'الموجة هي اضطراب ينتقل عبر الوسط حاملاً الطاقة دون انتقال المادة.',
            sections: [
              { title: 'أنواع الموجات', type: 'bullets', content: [
                'موجات ميكانيكية: تحتاج وسط (صوت، ماء)',
                'موجات كهرومغناطيسية: لا تحتاج وسط (ضوء)',
                'مستعرضة: الاهتزاز عمودي على الاتجاه (ضوء)',
                'طولية: الاهتزاز موازٍ للاتجاه (صوت)'
              ]},
              { title: 'خصائص الموجة', type: 'bullets', content: [
                'الطول الموجي (λ): المسافة بين قمتين متتاليتين',
                'التردد (f): عدد الموجات في الثانية',
                'السرعة (v): سرعة انتشار الموجة',
                'السعة (A): أقصى إزاحة عن الاتزان'
              ]},
              { title: 'معادلة الموجة', type: 'formula', content: 'v = f·λ' },
              { title: 'الزمن الدوري', type: 'formula', content: 'T = 1/f' },
              { title: 'الطاقة', type: 'bullets', content: [
                'الطاقة تتناسب مع مربع السعة',
                'E ∝ A²',
                'الموجة تنقل الطاقة وليس المادة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: سلوك الموجات',
          icon: '🔀',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-1.3-exam/',
          lessonTitle: ' شرح الدرس',
          examTitle: ' اختبر نفسك',
          content: {
            intro: 'الموجات تظهر سلوكيات خاصة عند مواجهتها عوائق أو عند التقائها بموجات أخرى.',
            sections: [
              { title: 'الانعكاس', type: 'bullets', content: [
                'ارتداد الموجة عند مواجهة عائق',
                'زاوية السقوط = زاوية الانعكاس',
                'قد يحدث انقلاب في الطور'
              ]},
              { title: 'الانكسار', type: 'bullets', content: [
                'انحراف الموجة عند الانتقال بين وسطين',
                'يتغير الطول الموجي والسرعة',
                'التردد ثابت',
                'ينكسر نحو العمود إذا تباطأ'
              ]},
              { title: 'الحيود', type: 'bullets', content: [
                'انحناء الموجة حول الحواجز',
                'يحدث عند مرور الموجة من فتحة',
                'يظهر بوضوح عندما يكون حجم الفتحة ≈ λ'
              ]},
              { title: 'التداخل', type: 'bullets', content: [
                'تراكب موجتين أو أكثر',
                'تداخل بناء: السعة تزداد (قمة+قمة)',
                'تداخل هدام: السعة تقل (قمة+قاع)',
                'مبدأ التراكب'
              ]},
              { title: 'الموجات الموقوفة', type: 'bullets', content: [
                'نتيجة تداخل موجتين متعاكستين',
                'عقد: نقاط سكون',
                'بطون: نقاط اهتزاز بأقصى سعة'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: الصوت',
      icon: '🔊',
      color: 'from-blue-600 to-indigo-700',
      description: 'دراسة خصائص الصوت، الكشف عنه، الضياء والموسيقى، وتطبيقات الصوت في المسرح.',
      lessons: [
        {
          id: 1,
          title: 'الدرس الأول: خصائص الصوت والكشف عنه',
          icon: '🎵',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الصوت موجة ميكانيكية طولية تحتاج إلى وسط مادي للانتقال. له خصائص فريدة تميزه عن غيره من الموجات.',
            sections: [
              { title: 'طبيعة الصوت', type: 'bullets', content: [
                'موجة طولية ميكانيكية',
                'يحتاج وسط مادي (لا ينتقل في الفراغ)',
                'ينتقل في الغازات، السوائل، والمواد الصلبة',
                'أسرع في المواد الصلبة'
              ]},
              { title: 'سرعة الصوت', type: 'bullets', content: [
                'في الهواء (20°C): 343 m/s',
                'في الماء: 1482 m/s',
                'في الحديد: 5120 m/s',
                'تزداد مع درجة الحرارة'
              ]},
              { title: 'خصائص الصوت', type: 'bullets', content: [
                'الارتفاع (النغمة): تعتمد على التردد',
                'الشدة: تعتمد على السعة',
                'النوعية (الجودة): تعتمد على النغمات التوافقية',
                'مدى السمع البشري: 20 Hz إلى 20,000 Hz'
              ]},
              { title: 'شدة الصوت', type: 'formula', content: 'تقاس بالديسيبل (dB)' },
              { title: 'الكشف عن الصوت', type: 'bullets', content: [
                'الأذن البشرية: تحول الموجات إلى إشارات عصبية',
                'الميكروفون: يحول الصوت إلى إشارات كهربية',
                'راسم الذبذبات: يعرض الموجات الصوتية'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس الثاني: الضياء والموسيقى',
          icon: '🎼',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الموسيقى تعتمد على النغمات المنتظمة والترددات المتناسقة. الضياء هو الصوت غير المنتظم.',
            sections: [
              { title: 'النغمة والضياء', type: 'bullets', content: [
                'النغمة: موجات ذات تردد منتظم (موسيقى)',
                'الضياء: موجات ذات تردد غير منتظم (ضجيج)',
                'النغمات التوافقية تعطي جودة الصوت'
              ]},
              { title: 'الرنين', type: 'bullets', content: [
                'حدوث اهتزاز بقوة عند تطابق التردد مع التردد الطبيعي',
                'يستخدم في الآلات الموسيقية',
                'قد يكون خطيراً في المنشآت'
              ]},
              { title: 'الآلات الموسيقية', type: 'bullets', content: [
                'آلات وترية: العزف على الأوتار (كمان، جيتار)',
                'آلات نفخ: اهتزاز عمود هواء (ناي، بوق)',
                'آلات إيقاعية: الطبول والأجراس'
              ]},
              { title: 'النغمات التوافقية', type: 'formula', content: 'f_n = n·f₁ حيث n = 1, 2, 3...' },
              { title: 'تأثير دوبلر', type: 'bullets', content: [
                'تغير التردد الظاهري عند الحركة النسبية',
                'عند الاقتراب: التردد يزداد (صوت أعلى)',
                'عند الابتعاد: التردد يقل (صوت أخفض)',
                'يستخدم في الرادار والطب'
              ]},
              { title: 'الموجات الموقوفة في الأوتار', type: 'bullets', content: [
                'تتكون من تداخل موجتين متعاكستين',
                'العقد: نقاط سكون',
                'البطون: نقاط اهتزاز بأقصى سعة',
                'تحدد النغمات المختلفة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس الثالث: الصوتينات في المسرح',
          icon: '🎭',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Bri-phy-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'تطبيقات الصوت في المسرح تتطلب فهم عميق لخصائص الصوت والانعكاس والرنين.',
            sections: [
              { title: 'الصدى', type: 'bullets', content: [
                'انعكاس الصوت وسماعه مرة أخرى',
                'يحتاج مسافة كافية (17 متر على الأقل)',
                'يستخدم في تحديد الأعماق والمسافات'
              ]},
              { title: 'زمن التردد (Reverberation)', type: 'bullets', content: [
                'استمرار الصوت بعد توقف المصدر',
                'مهم في قاعات الموسيقى',
                'زمن مثالي: 1-2 ثانية',
                'طويل جداً: يشوّش الصوت',
                'قصير جداً: الصوت جاف'
              ]},
              { title: 'عزل الصوت', type: 'bullets', content: [
                'استخدام مواد ماصة للصوت',
                'تقليل انتقال الصوت بين الغرف',
                'مواد مسامية تمتص الطاقة الصوتية'
              ]},
              { title: 'تضخيم الصوت', type: 'bullets', content: [
                'استخدام مكبرات الصوت',
                'تحويل الطاقة الكهربية إلى صوتية',
                'التحكم في الشدة والوضوح'
              ]},
              { title: 'تطبيقات عملية', type: 'bullets', content: [
                'تصميم القاعات المسرحية',
                'تحسين جودة الصوت',
                'التحكم في الصدى والرنين',
                'توزيع مكبرات الصوت بشكل مثالي'
              ]},
              { title: 'الموجات فوق الصوتية', type: 'bullets', content: [
                'ترددات أعلى من 20,000 Hz',
                'تستخدم في التصوير الطبي',
                'التنظيف بالموجات فوق الصوتية',
                'كشف العيوب في المواد'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
