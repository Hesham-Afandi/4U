import { Curriculum } from '../../types';

export const math9AdvInspire1: Curriculum = {
  isEnglish: true,
  units: [
    {
      id: 1,
      name: 'Module 1: Relationships in Triangles',
      icon: '🔺',
      color: 'from-blue-500 to-indigo-600',
      description: 'Explore relationships formed by perpendicular bisectors, angle bisectors, medians, altitudes, and inequalities in triangles.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1-1: Perpendicular Bisectors',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A perpendicular bisector is a line that is perpendicular to a segment and passes through its midpoint.',
            sections: [
              { title: 'Perpendicular Bisector Theorem', type: 'formula', content: 'If a point is on the perpendicular bisector of a segment, then it is equidistant from the endpoints.' },
              { title: 'Converse', type: 'formula', content: 'If a point is equidistant from the endpoints, then it is on the perpendicular bisector.' },
              { title: 'Circumcenter', type: 'bullets', content: [
                'Point of concurrency of perpendicular bisectors',
                'Equidistant from the three vertices',
                'Center of circumscribed circle'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 1-2: Angle Bisectors',
          icon: '∠',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.2-exam/',
          lessonTitle: ' Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'An angle bisector divides an angle into two congruent angles.',
            sections: [
              { title: 'Angle Bisector Theorem', type: 'formula', content: 'If a point is on the bisector of an angle, then it is equidistant from the sides of the angle.' },
              { title: 'Incenter', type: 'bullets', content: [
                'Point of concurrency of angle bisectors',
                'Equidistant from the three sides',
                'Center of inscribed circle'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 1-3: Medians and Altitudes of Triangles',
          icon: '',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Medians connect vertices to midpoints. Altitudes are perpendicular segments from vertices.',
            sections: [
              { title: 'Centroid', type: 'bullets', content: [
                'Point of concurrency of medians',
                'Divides each median in 2:1 ratio',
                'Center of gravity'
              ]},
              { title: 'Orthocenter', type: 'bullets', content: [
                'Point of concurrency of altitudes',
                'Can be inside, outside, or on triangle'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 1-4: Inequalities in One Triangle',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Triangle inequalities relate angle and side measures.',
            sections: [
              { title: 'Angle-Side Relationship', type: 'bullets', content: [
                'Longer side ↔ Larger angle',
                'Shorter side ↔ Smaller angle'
              ]},
              { title: 'Triangle Inequality', type: 'formula', content: 'a + b > c, a + c > b, b + c > a' }
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 1-5: Indirect Proof',
          icon: '🔀',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Indirect proof assumes the opposite and shows it leads to contradiction.',
            sections: [
              { title: 'Steps', type: 'bullets', content: [
                '1. Assume opposite of what to prove',
                '2. Use logical reasoning',
                '3. Arrive at contradiction',
                '4. Conclude assumption is false'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 1-6: The Triangle Inequality',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.6-exam/',
          lessonTitle: ' Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'The Triangle Inequality Theorem states relationships among side lengths.',
            sections: [
              { title: 'Theorem', type: 'formula', content: 'Sum of any two sides > third side' },
              { title: 'Applications', type: 'bullets', content: [
                'Determine if three lengths form triangle',
                'Find range for third side'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'Lesson 1-7: Inequalities in Two Triangles',
          icon: '🔺',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.7-exam/',
          lessonTitle: ' Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'Compare triangles using inequality theorems.',
            sections: [
              { title: 'Hinge Theorem (SAS)', type: 'formula', content: 'If two sides congruent and included angle larger, then third side longer.' },
              { title: 'Converse (SSS)', type: 'formula', content: 'If two sides congruent and third side longer, then included angle larger.' }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Module 2: Quadrilaterals',
      icon: '⬜',
      color: 'from-purple-500 to-pink-600',
      description: 'Study angles of polygons, properties of parallelograms, rectangles, rhombi, squares, trapezoids, and kites.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 2-1: Angles of Polygons',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.1-exam/',
          lessonTitle: ' Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'Polygons have interior and exterior angles with specific relationships.',
            sections: [
              { title: 'Interior Angle Sum', type: 'formula', content: 'S = (n - 2) × 180°' },
              { title: 'Exterior Angle Sum', type: 'formula', content: 'Sum = 360° for any polygon' }
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2-2: Parallelograms',
          icon: '',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A parallelogram has both pairs of opposite sides parallel.',
            sections: [
              { title: 'Properties', type: 'bullets', content: [
                'Opposite sides parallel and congruent',
                'Opposite angles congruent',
                'Consecutive angles supplementary',
                'Diagonals bisect each other'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 2-3: Tests for Parallelograms',
          icon: '✓',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Several ways to prove a quadrilateral is a parallelogram.',
            sections: [
              { title: 'Tests', type: 'bullets', content: [
                'Both pairs opposite sides parallel',
                'Both pairs opposite sides congruent',
                'Both pairs opposite angles congruent',
                'Diagonals bisect each other',
                'One pair both parallel and congruent'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 2-4: Rectangles',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A rectangle is a parallelogram with four right angles.',
            sections: [
              { title: 'Properties', type: 'bullets', content: [
                'All properties of parallelogram',
                'All angles 90°',
                'Diagonals congruent'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 2-5: Rhombi and Squares',
          icon: '◆',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A rhombus has four congruent sides. A square has four congruent sides and four right angles.',
            sections: [
              { title: 'Rhombus', type: 'bullets', content: [
                'All sides congruent',
                'Diagonals perpendicular',
                'Diagonals bisect angles'
              ]},
              { title: 'Square', type: 'bullets', content: [
                'All properties of rhombus',
                'All properties of rectangle',
                '4 lines of symmetry'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 2-6: Trapezoids and Kites',
          icon: '🪁',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.6-exam/',
          lessonTitle: ' Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'Trapezoids have one pair of parallel sides. Kites have two pairs of consecutive congruent sides.',
            sections: [
              { title: 'Trapezoid', type: 'bullets', content: [
                'Exactly one pair parallel sides',
                'Isosceles: legs congruent'
              ]},
              { title: 'Kite', type: 'bullets', content: [
                'Two pairs consecutive sides congruent',
                'Diagonals perpendicular'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Module 3: Similarity',
      icon: '🔍',
      color: 'from-green-500 to-teal-600',
      description: 'Explore dilations, similar polygons, triangle similarity criteria (AA, SSS, SAS), and proportionality.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 3-1: Dilations',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A dilation changes size but not shape.',
            sections: [
              { title: 'Scale Factor', type: 'bullets', content: [
                'k > 1: enlargement',
                '0 < k < 1: reduction',
                'Preserves angle measures'
              ]},
              { title: 'Coordinate Notation', type: 'formula', content: '(x, y) → (kx, ky)' }
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 3-2: Similar Polygons',
          icon: '◐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Similar polygons have same shape but not necessarily same size.',
            sections: [
              { title: 'Properties', type: 'bullets', content: [
                'Corresponding angles congruent',
                'Corresponding sides proportional',
                'Perimeter ratio = scale factor',
                'Area ratio = scale factor²'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 3-3: Similar Triangles: AA Similarity',
          icon: '△',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.3-exam/',
          lessonTitle: ' Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'AA Similarity: If two angles congruent, triangles are similar.',
            sections: [
              { title: 'AA Similarity Postulate', type: 'formula', content: 'If A ≅ ∠D and ∠B ≅ ∠E, then △ABC ~ △DEF' }
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 3-4: Similar Triangles: SSS and SAS Similarity',
          icon: '📏',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'SSS and SAS provide additional ways to prove triangles similar.',
            sections: [
              { title: 'SSS Similarity', type: 'formula', content: 'If corresponding sides proportional, triangles similar.' },
              { title: 'SAS Similarity', type: 'formula', content: 'If two sides proportional and included angle congruent, triangles similar.' }
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 3-5: Triangle Proportionality',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A line parallel to one side creates proportional segments.',
            sections: [
              { title: 'Triangle Proportionality', type: 'formula', content: 'If DE || BC, then AD/DB = AE/EC' }
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 3-6: Parts of Similar Triangles',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: ' Take the Quiz',
          content: {
            intro: 'Corresponding parts of similar triangles are proportional.',
            sections: [
              { title: 'Proportional Parts', type: 'bullets', content: [
                'Altitudes proportional',
                'Medians proportional',
                'Angle bisectors proportional',
                'Perimeters proportional'
              ]}
            ]
          }
        }
      ]
    }
  ]
};

export const math9AdvBridge1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: التعابير والمعادلات والدوال',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'دراسة المتغيرات، التعابير الجبرية، خصائص الأعداد، المعادلات، والعلاقات والدوال.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 1-1: المتغيرات والتعابير',
          icon: '🔢',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتغير هو رمز (عادة حرف) يمثل عدداً مجهولاً. التعبير الجبري هو مجموعة من الأعداد والمتغيرات والعمليات.',
            sections: [
              { title: 'المتغير', type: 'text', content: 'حرف أو رمز يمثل عدداً مجهولاً أو متغيراً (مثل x, y, a, b)' },
              { title: 'التعبير الجبري', type: 'bullets', content: [
                'مجموعة من الأعداد والمتغيرات والعمليات',
                'مثال: 3x + 5، 2y² - 7، a + b'
              ]},
              { title: 'تقييم التعابير', type: 'bullets', content: [
                'نعوض بقيمة المتغير',
                'نتبع ترتيب العمليات',
                'مثال: إذا x = 4، فإن 3x + 2 = 3(4) + 2 = 14'
              ]},
              { title: 'الحد', type: 'bullets', content: [
                'جزء من التعبير مفصول بـ + أو -',
                'مثال: في 3x² + 5x - 2، هناك 3 حدود'
              ]},
              { title: 'المعامل', type: 'bullets', content: [
                'العدد أمام المتغير',
                'في 5x، المعامل هو 5'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 1-2: ترتيب العمليات',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'ترتيب العمليات هو قاعدة تحدد التسلسل الصحيح لإجراء العمليات الحسابية.',
            sections: [
              { title: 'PEMDAS', type: 'bullets', content: [
                'P: Parentheses (الأقواس)',
                'E: Exponents (الأسس)',
                'M/D: Multiplication/Division (الضرب/القسمة) من اليسار لليمين',
                'A/S: Addition/Subtraction (الجمع/الطرح) من اليسار لليمين'
              ]},
              { title: 'الترتيب الصحيح', type: 'bullets', content: [
                '1. الأقواس (من الداخل للخارج)',
                '2. الأسس',
                '3. الضرب والقسمة (من اليسار لليمين)',
                '4. الجمع والطرح (من اليسار لليمين)'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '3 + 4 × 2 = 3 + 8 = 11 (ليس 14)',
                '(3 + 4) × 2 = 7 × 2 = 14',
                '2 + 3² = 2 + 9 = 11',
                '12 ÷ 3 × 2 = 4 × 2 = 8'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 1-3: خصائص الأعداد',
          icon: '⚙️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الأعداد لها خصائص مهمة تسهل العمليات الجبرية.',
            sections: [
              { title: 'الخاصية التبديلية', type: 'bullets', content: [
                'الجمع: a + b = b + a',
                'الضرب: a × b = b × a'
              ]},
              { title: 'الخاصية التجميعية', type: 'bullets', content: [
                'الجمع: (a + b) + c = a + (b + c)',
                'الضرب: (a × b) × c = a × (b × c)'
              ]},
              { title: 'الخاصية التوزيعية', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'عنصر المحايد', type: 'bullets', content: [
                'الجمع: a + 0 = a',
                'الضرب: a × 1 = a'
              ]},
              { title: 'العنصر المعاكس', type: 'bullets', content: [
                'الجمع: a + (-a) = 0',
                'الضرب: a × (1/a) = 1 (عندما a ≠ 0)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 1-4: خاصية التوزيع',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خاصية التوزيع تسمح لنا بتوزيع الضرب على الجمع أو الطرح.',
            sections: [
              { title: 'الصيغة الأساسية', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'أمثلة', type: 'bullets', content: [
                '3(x + 5) = 3x + 15',
                '2(4y - 7) = 8y - 14',
                '-5(a + 3) = -5a - 15',
                'x(x + 2) = x² + 2x'
              ]},
              { title: 'تبسيط التعابير', type: 'bullets', content: [
                'نوزع أولاً',
                'نجمع الحدود المتشابهة',
                'مثال: 2(x + 3) + 4(x - 1) = 2x + 6 + 4x - 4 = 6x + 2'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 1-5: المعادلات',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المعادلة هي عبارة رياضية تحتوي على علامة التساوي.',
            sections: [
              { title: 'تعريف المعادلة', type: 'text', content: 'عبارة تحتوي على =، مثل: 2x + 3 = 7' },
              { title: 'الحل', type: 'bullets', content: [
                'القيمة التي تجعل المعادلة صحيحة',
                'نعوض بها للتحقق'
              ]},
              { title: 'خواص المساواة', type: 'bullets', content: [
                'الجمع: إذا a = b فإن a + c = b + c',
                'الطرح: إذا a = b فإن a - c = b - c',
                'الضرب: إذا a = b فإن a × c = b × c',
                'القسمة: إذا a = b فإن a/c = b/c (عندما c ≠ 0)'
              ]},
              { title: 'خطوات الحل', type: 'bullets', content: [
                '1. نبسط الطرفين',
                '2. نجمع الحدود المتشابهة',
                '3. نعزل المتغير',
                '4. نتحقق من الحل'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'x + 5 = 12 ⇒ x = 7',
                '3x = 15 ⇒ x = 5',
                '2x + 3 = 11 ⇒ 2x = 8 ⇒ x = 4'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 1-6: العلاقات',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'العلاقة هي مجموعة من الأزواج المرتبة.',
            sections: [
              { title: 'الزوج المرتب', type: 'formula', content: '(x, y) حيث x هو الإحداثي السيني و y هو الصادي' },
              { title: 'المجال', type: 'bullets', content: [
                'مجموعة جميع قيم x',
                'الإحداثيات الأولى'
              ]},
              { title: 'المدى', type: 'bullets', content: [
                'مجموعة جميع قيم y',
                'الإحداثيات الثانية'
              ]},
              { title: 'تمثيل العلاقة', type: 'bullets', content: [
                'جدول',
                'رسم بياني',
                'مجموعة أزواج مرتبة',
                'معادلة'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                '{(1, 2), (3, 4), (5, 6)}',
                'المجال: {1, 3, 5}',
                'المدى: {2, 4, 6}'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 1-7: الدوال',
          icon: 'ƒ',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة هي علاقة خاصة تربط كل عنصر في المجال بعنصر واحد فقط في المدى.',
            sections: [
              { title: 'تعريف الدالة', type: 'bullets', content: [
                'كل x يقابل y واحدة فقط',
                'اختبار الخط الرأسي: إذا قطع الخط الرأسي المنحنى في أكثر من نقطة، فهي ليست دالة'
              ]},
              { title: 'الترميز الدالي', type: 'formula', content: 'f(x) = 2x + 3' },
              { title: 'تقييم الدالة', type: 'bullets', content: [
                'نعوض قيمة x',
                'إذا f(x) = 2x + 3، فإن f(4) = 2(4) + 3 = 11'
              ]},
              { title: 'أمثلة على الدوال', type: 'bullets', content: [
                '{(1, 2), (2, 4), (3, 6)} دالة',
                '{(1, 2), (1, 3), (2, 4)} ليست دالة (1 لها قيمتان)'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 1-8: تفسير التمثيل البياني للدالة',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.8/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التمثيل البياني يساعدنا على فهم سلوك الدالة.',
            sections: [
              { title: 'التقاطعات', type: 'bullets', content: [
                'تقاطع y: حيث x = 0',
                'تقاطع x: حيث y = 0'
              ]},
              { title: 'الزيادة والنقصان', type: 'bullets', content: [
                'متزايدة: y تزداد عندما x يزداد',
                'متناقصة: y تنقص عندما x يزداد',
                'ثابتة: y لا تتغير'
              ]},
              { title: 'الإشارة', type: 'bullets', content: [
                'موجبة: فوق محور x',
                'سالبة: تحت محور x'
              ]},
              { title: 'القيم العظمى والصغرى', type: 'bullets', content: [
                'أعلى نقطة: قيمة عظمى',
                'أدنى نقطة: قيمة صغرى'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: المعادلات الخطية',
      icon: '📐',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة كتابة وحل المعادلات الخطية، النسب، التناسب، والنسبة المئوية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 2-1: كتابة المعادلات',
          icon: '✍️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نترجم المسائل اللفظية إلى معادلات جبرية.',
            sections: [
              { title: 'كلمات مفتاحية', type: 'bullets', content: [
                'مجموع، زيادة: +',
                'فرق، نقصان: -',
                'حاصل ضرب، ضعف: ×',
                'حاصل قسمة، نصف: ÷',
                'يساوي، يصبح: ='
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'عدد زاد على 5: x + 5',
                'ضعف عدد ناقص 3: 2x - 3',
                'مجموع عددين متتاليين: x + (x+1)',
                'ثلاثة أمثال عدد زائد 7: 3x + 7'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 2-2: حل معادلات الخطوة الواحدة',
          icon: '1️⃣',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التي تحتاج لعملية واحدة.',
            sections: [
              { title: 'معادلات الجمع', type: 'bullets', content: [
                'x + 5 = 12',
                'نطرح 5 من الطرفين',
                'x = 7'
              ]},
              { title: 'معادلات الطرح', type: 'bullets', content: [
                'x - 3 = 8',
                'نضيف 3 للطرفين',
                'x = 11'
              ]},
              { title: 'معادلات الضرب', type: 'bullets', content: [
                '3x = 15',
                'نقسم على 3',
                'x = 5'
              ]},
              { title: 'معادلات القسمة', type: 'bullets', content: [
                'x/4 = 6',
                'نضرب في 4',
                'x = 24'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 2-3: حل معادلات متعددة الخطوات',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التي تحتاج لأكثر من خطوتين.',
            sections: [
              { title: 'الخطوات', type: 'bullets', content: [
                '1. نوزع إذا لزم الأمر',
                '2. نجمع الحدود المتشابهة',
                '3. ننقل المتغيرات لطرف والثوابت لطرف',
                '4. نحل للمتغير'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '2x + 5 = 13 ⇒ 2x = 8 ⇒ x = 4',
                '3(x - 2) = 15 ⇒ 3x - 6 = 15 ⇒ 3x = 21 ⇒ x = 7',
                '4x + 3 = 2x + 11 ⇒ 2x = 8 ⇒ x = 4'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 2-4: حل معادلات متغير في كل طرف',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عندما يكون المتغير في الطرفين، نجمع المتغيرات في طرف واحد.',
            sections: [
              { title: 'الاستراتيجية', type: 'bullets', content: [
                'ننقل جميع المتغيرات لطرف واحد',
                'ننقل الثوابت للطرف الآخر',
                'نحل للمتغير'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '3x + 5 = x + 11 ⇒ 2x = 6 ⇒ x = 3',
                '5x - 2 = 2x + 10 ⇒ 3x = 12 ⇒ x = 4',
                '7x + 3 = 4x - 9 ⇒ 3x = -12 ⇒ x = -4'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 2-5: حل المعادلات التي تحتوي قيمة مطلقة',
          icon: '| |',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القيمة المطلقة هي المسافة من الصفر، دائماً موجبة.',
            sections: [
              { title: 'تعريف القيمة المطلقة', type: 'bullets', content: [
                '|x| = x إذا x ≥ 0',
                '|x| = -x إذا x < 0',
                '|5| = 5 و |-5| = 5'
              ]},
              { title: 'حل المعادلات', type: 'bullets', content: [
                '|x| = a ⇒ x = a أو x = -a',
                '|x - 3| = 5 ⇒ x - 3 = 5 أو x - 3 = -5',
                'x = 8 أو x = -2'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '|x| = 7 ⇒ x = 7 أو x = -7',
                '|2x + 1| = 9 ⇒ 2x + 1 = 9 أو 2x + 1 = -9',
                'x = 4 أو x = -5'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 2-6: النسب والتناسب',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'النسبة هي مقارنة بين كميتين. التناسب هو تساوي نسبتين.',
            sections: [
              { title: 'النسبة', type: 'formula', content: 'a/b أو a:b' },
              { title: 'التناسب', type: 'formula', content: 'a/b = c/d' },
              { title: 'الضرب التبادلي', type: 'formula', content: 'إذا a/b = c/d فإن ad = bc' },
              { title: 'أمثلة', type: 'bullets', content: [
                'نسبة الأولاد للبنات: 3/5',
                '2/3 = 4/6 (لأن 2×6 = 3×4)',
                'x/5 = 3/15 ⇒ x = 1'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 2-7: النسبة المئوية للتغيير',
          icon: '%',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'النسبة المئوية للتغيير تقيس مقدار الزيادة أو النقصان.',
            sections: [
              { title: 'صيغة النسبة المئوية', type: 'formula', content: 'النسبة = (التغيير / الأصل) × 100%' },
              { title: 'الزيادة المئوية', type: 'bullets', content: [
                'إذا زاد السعر من 50 إلى 60',
                'التغيير = 10',
                'النسبة = (10/50) × 100% = 20%'
              ]},
              { title: 'النقصان المئوي', type: 'bullets', content: [
                'إذا نقص السعر من 80 إلى 60',
                'التغيير = 20',
                'النسبة = (20/80) × 100% = 25%'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 2-8: المعادلات الحرفية والتحليل البعدي',
          icon: '🔤',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.8/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المعادلات الحرفية تحتوي على أكثر من متغير.',
            sections: [
              { title: 'حل المعادلات الحرفية', type: 'bullets', content: [
                'نعزل المتغير المطلوب',
                'مثال: P = 2l + 2w، نجد l',
                'P - 2w = 2l',
                'l = (P - 2w)/2'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'A = lw ⇒ l = A/w',
                'd = rt ⇒ t = d/r',
                'V = lwh ⇒ h = V/(lw)'
              ]}
            ]
          }
        },
        {
          id: 9,
          title: 'الدرس 2-9: المتوسط الحسابي الموزون',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.9/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.9-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتوسط الموزون يأخذ في الاعتبار أهمية كل قيمة.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'المتوسط = Σ(القيمة × الوزن) / Σالوزن' },
              { title: 'أمثلة', type: 'bullets', content: [
                'إذا كان لدينا اختباران وزنهما 40% و 60% ودرجاتهما 80 و 90',
                'المتوسط = (80 × 0.4) + (90 × 0.6) = 32 + 54 = 86'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: الدوال الخطية',
      icon: '📈',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة تمثيل وحل الدوال الخطية بيانياً، الميل، ومعدل التغير.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 3-1: تمثيل المعادلات الخطية بيانياً',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المعادلة الخطية تمثل بخط مستقيم على المستوى الإحداثي.',
            sections: [
              { title: 'طريقة الجدول', type: 'bullets', content: [
                'نختار قيم لـ x',
                'نحسب قيم y',
                'نرسم النقاط',
                'نوصلها بخط'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'y = 2x + 1',
                'x = 0 ⇒ y = 1',
                'x = 1 ⇒ y = 3',
                'x = 2 ⇒ y = 5'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 3-2: حل المعادلات الخطية بالتمثيل البياني',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات بإيجاد تقاطع الخط مع محور x.',
            sections: [
              { title: 'طريقة الحل', type: 'bullets', content: [
                'نرسم الدالة',
                'نجد نقطة تقاطع الخط مع محور x',
                'إحداثي x هو الحل'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                '2x + 4 = 0',
                'نرسم y = 2x + 4',
                'التقاطع مع x عند x = -2',
                'الحل: x = -2'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 3-3: معدل التغير والميل',
          icon: '📉',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الميل يقيس معدل التغير في y بالنسبة للتغير في x.',
            sections: [
              { title: 'صيغة الميل', type: 'formula', content: 'm = (y₂ - y₁)/(x₂ - x₁)' },
              { title: 'أنواع الميل', type: 'bullets', content: [
                'موجب: الخط صاعد',
                'سالب: الخط هابط',
                'صفر: خط أفقي',
                'غير معرف: خط رأسي'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'النقطتان (2, 3) و (5, 9)',
                'm = (9-3)/(5-2) = 2'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 3-4: التغير الطردي',
          icon: '∝',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التغير الطردي يعني أن y تتناسب طردياً مع x.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'y = kx حيث k ثابت التناسب' },
              { title: 'الخصائص', type: 'bullets', content: [
                'يمر بنقطة الأصل (0, 0)',
                'الميل = k',
                'إذا زاد x، تزداد y'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'إذا y = 10 عندما x = 2',
                'k = y/x = 10/2 = 5',
                'المعادلة: y = 5x'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 3-5: المتتاليات الحسابية كدوال خطية',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتتالية الحسابية لها فرق مشترك ثابت.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'a_n = a₁ + (n-1)d' },
              { title: 'الفرق المشترك', type: 'bullets', content: [
                'd = الفرق بين حدين متتاليين',
                'مثال: 2, 5, 8, 11,... الفرق = 3'
              ]},
              { title: 'علاقتها بالدوال الخطية', type: 'bullets', content: [
                'المتتالية دالة خطية متقطعة',
                'الميل = الفرق المشترك',
                'y = mx + b'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 3-6: العلاقات الخطية وغير الخطية',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نميز بين العلاقات الخطية (خط مستقيم) وغير الخطية (منحنى).',
            sections: [
              { title: 'العلاقة الخطية', type: 'bullets', content: [
                'تمثل بخط مستقيم',
                'معدل التغير ثابت',
                'الصيغة: y = mx + b'
              ]},
              { title: 'العلاقة غير الخطية', type: 'bullets', content: [
                'تمثل بمنحنى',
                'معدل التغير متغير',
                'أمثلة: y = x²، y = 2ˣ'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'الوحدة الرابعة: معادلات الدوال الخطية',
      icon: '📐',
      color: 'from-orange-500 to-red-600',
      description: 'دراسة صيغ معادلات الدوال الخطية، المستقيمات المتوازية والمتعامدة، والدوال العكسية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 4-1: تمثيل المعادلات بصيغة الميل والمقطع',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'صيغة الميل والمقطع هي y = mx + b.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'y = mx + b' },
              { title: 'المكونات', type: 'bullets', content: [
                'm: الميل',
                'b: تقاطع y'
              ]},
              { title: 'الرسم', type: 'bullets', content: [
                'نبدأ من النقطة (0, b)',
                'نستخدم الميل للرسم',
                'مثال: y = 2x + 3، نبدأ من (0, 3)، الميل 2 يعني صعود 2 لليمين 1'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 4-2: كتابة المعادلات بصيغة الميل والمقطع',
          icon: '✍️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نكتب المعادلة من معلومات معطاة.',
            sections: [
              { title: 'من الميل وتقاطع y', type: 'bullets', content: [
                'm = 3، b = -2',
                'y = 3x - 2'
              ]},
              { title: 'من الرسم', type: 'bullets', content: [
                'نجد الميل من الرسم',
                'نجد تقاطع y',
                'نكتب المعادلة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 4-3: كتابة المعادلات بصيغة النقطة والميل',
          icon: '📝',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'صيغة النقطة والميل تستخدم عندما نعرف نقطة وميل.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'y - y₁ = m(x - x₁)' },
              { title: 'مثال', type: 'bullets', content: [
                'm = 2، النقطة (3, 5)',
                'y - 5 = 2(x - 3)',
                'y - 5 = 2x - 6',
                'y = 2x - 1'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 4-4: المستقيمات المتوازية والمتعامدة',
          icon: '∥',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المستقيمات المتوازية لها نفس الميل. المتعامدة حاصل ضرب ميليهما = -1.',
            sections: [
              { title: 'المتوازية', type: 'bullets', content: [
                'نفس الميل',
                'm₁ = m₂',
                'مثال: y = 2x + 3 و y = 2x - 5'
              ]},
              { title: 'المتعامدة', type: 'bullets', content: [
                'm₁ × m₂ = -1',
                'm₂ = -1/m₁',
                'مثال: y = 2x + 1 و y = -½x + 3'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 4-5: الانحدار ومستقيمات التواءمة الوسطية',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نستخدم الانحدار لإيجاد أفضل خط يصف البيانات.',
            sections: [
              { title: 'مخطط التشتت', type: 'bullets', content: [
                'نرسم النقاط',
                'نلاحظ العلاقة'
              ]},
              { title: 'خط التواءمة', type: 'bullets', content: [
                'أفضل خط يمر بالبيانات',
                'يمكن استخدامه للتنبؤ'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 4-6: الدوال الخطية العكسية',
          icon: '↔️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة العكسية تعكس تأثير الدالة الأصلية.',
            sections: [
              { title: 'إيجاد الدالة العكسية', type: 'bullets', content: [
                'نبدل x و y',
                'نحل لـ y',
                'مثال: y = 2x + 3',
                'x = 2y + 3',
                'y = (x - 3)/2',
                'f⁻¹(x) = (x - 3)/2'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 4-7: الدوال الخطية الخاصة',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال الثابتة ودالة الهوية.',
            sections: [
              { title: 'الدالة الثابتة', type: 'bullets', content: [
                'y = c',
                'خط أفقي',
                'ميلها = 0'
              ]},
              { title: 'دالة الهوية', type: 'bullets', content: [
                'y = x',
                'خط يمر بالأصل',
                'ميلها = 1'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
