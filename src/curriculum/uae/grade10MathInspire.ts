import { Curriculum } from '../../types';

export const math10AdvInspire1: Curriculum = {
  isEnglish: true,
  units: [
    {
      id: 1,
      name: 'Module 1: Equations and Inequalities',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'Study of functions, systems of linear equations and inequalities, absolute value functions and graphing.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1-1: Functions and Continuity',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A function is continuous if there are no holes, jumps, or asymptotes in its graph.',
            sections: [
              { title: 'Continuity Test', type: 'bullets', content: [
                '1. f(c) must be defined',
                '2. lim f(x) as x approaches c must exist',
                '3. lim f(x) must equal f(c)'
              ]},
              { title: 'Types of Discontinuity', type: 'bullets', content: [
                'Infinite discontinuity',
                'Jump discontinuity',
                'Removable discontinuity'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 1-2: Absolute Value Functions and Graphs',
          icon: '| |',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Absolute value functions form V-shaped graphs and represent distance.',
            sections: [
              { title: 'Parent Function', type: 'formula', content: 'f(x) = |x|' },
              { title: 'Transformations', type: 'bullets', content: [
                'f(x) = a|x - h| + k',
                'Vertex is at (h, k)'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 1-3: Absolute Value Inequalities',
          icon: '⚠️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Solve and graph absolute value inequalities by breaking them into compound inequalities.',
            sections: [
              { title: 'Inequality Rules', type: 'bullets', content: [
                '|x| < a  ⇒  -a < x < a  (AND condition)',
                '|x| > a  ⇒  x < -a or x > a  (OR condition)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 1-4: Systems of Linear Equations',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A system of linear equations can be solved using graphing, substitution, or elimination.',
            sections: [
              { title: 'Solving Methods', type: 'bullets', content: [
                'Substitution: Isolate a variable and substitute it in the other equation',
                'Elimination: Add or subtract equations to eliminate a variable',
                'Graphing: Look for intersection points'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 1-5: Systems of Linear Inequalities',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Graphing systems of linear inequalities requires shading of overlap regions.',
            sections: [
              { title: 'Process', type: 'bullets', content: [
                'Graph boundary lines (solid/dashed)',
                'Shade correct half-planes',
                'The overlapping shaded region is the solution set'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 1-6: Linear Programming',
          icon: '🎯',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Optimization of a linear objective function under linear inequality constraints.',
            sections: [
              { title: 'Feasible Region', type: 'bullets', content: [
                'Formed by intersection of constraint inequalities',
                'Vertices (corner points) contain the optimal solutions'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'Lesson 1-7: Systems in Three Variables',
          icon: '🧊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-1.7-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Solving a system of 3 equations in 3 variables using systematic elimination or substitution.',
            sections: [
              { title: 'Elimination Method', type: 'bullets', content: [
                'Reduce the 3x3 system to a 2x2 system by eliminating one variable',
                'Solve the 2x2 system',
                'Substitute back to find the third variable'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Module 2: Matrices and Quadratic Functions',
      icon: '📐',
      color: 'from-green-500 to-teal-600',
      description: 'Study of matrices, operations, determinant, Cramer\'s rule, quadratic functions and graphing.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 2-1: Introduction to Matrices',
          icon: '🧱',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A matrix is a rectangular array of numbers organized in rows and columns.',
            sections: [
              { title: 'Matrix Dimensions', type: 'formula', content: 'm × n (rows by columns)' },
              { title: 'Elements', type: 'bullets', content: [
                'Identified by a_ij (row i, column j)',
                'Equal matrices have the same dimensions and equal corresponding elements'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2-2: Matrix Operations',
          icon: '🧮',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Perform matrix addition, subtraction, and scalar multiplication.',
            sections: [
              { title: 'Addition/Subtraction', type: 'bullets', content: [
                'Matrices must be of the same dimension',
                'Add/subtract corresponding elements'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 2-3: Multiplying Matrices',
          icon: '✖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Multiply two matrices if the number of columns in the first equals the rows in the second.',
            sections: [
              { title: 'Rule', type: 'bullets', content: [
                'Matrix multiplication is NOT commutative (AB ≠ BA)',
                'Resulting matrix has dimensions of outer parts (m × p)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 2-4: Determinants and Cramer\'s Rule',
          icon: '🔍',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Determinants are real numbers associated with square matrices. Cramer\'s rule solves systems.',
            sections: [
              { title: '2x2 Determinant', type: 'formula', content: 'det(A) = ad - bc' },
              { title: 'Cramer\'s Rule', type: 'bullets', content: [
                'Solve for variables using ratio of determinants',
                'x = Dx/D, y = Dy/D'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 2-5: Inverse Matrices and Systems',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'An inverse matrix A⁻¹ exists if and only if determinant is non-zero.',
            sections: [
              { title: 'Matrix Equations', type: 'formula', content: 'AX = B  ⇒  X = A⁻¹B' }
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 2-6: Graphing Quadratic Functions',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-2.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Graphing quadratic equations using vertex, axis of symmetry, and table of values.',
            sections: [
              { title: 'Standard Form', type: 'formula', content: 'y = ax² + bx + c' },
              { title: 'Vertex Formula', type: 'bullets', content: [
                'x-coordinate of vertex: x = -b/(2a)',
                'y-coordinate of vertex: f(-b/2a)'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Module 3: Quadratic Equations and Complex Numbers',
      icon: '📊',
      color: 'from-purple-500 to-pink-600',
      description: 'Study of solving quadratic equations using multiple methods, complex numbers, and quadratic inequalities.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 3-1: Solving Quadratic Equations by Graphing',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Graphing to estimate the roots/solutions of a quadratic equation.',
            sections: [
              { title: 'Roots of Equation', type: 'bullets', content: [
                'Solutions are the x-intercepts',
                'Can have 2, 1, or 0 real solutions'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 3-2: Solving Quadratic Equations by Factoring',
          icon: '🎯',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Using the Zero Product Property to solve quadratics.',
            sections: [
              { title: 'Zero Product Property', type: 'formula', content: 'If ab = 0, then a = 0 or b = 0' }
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 3-3: Complex Numbers',
          icon: 'i',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Introducing the imaginary unit i and performing operations on complex numbers.',
            sections: [
              { title: 'Imaginary Unit', type: 'formula', content: 'i = √-1  where i² = -1' },
              { title: 'Complex Form', type: 'bullets', content: [
                'z = a + bi (a: real part, b: imaginary part)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 3-4: Completing the Square',
          icon: '🧱',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Solving quadratic equations by creating a perfect square trinomial.',
            sections: [
              { title: 'Steps', type: 'bullets', content: [
                'Make coefficient of x² equal to 1',
                'Add and subtract (b/2)² to form perfect square'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 3-5: The Quadratic Formula and the Discriminant',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Using the general quadratic formula to solve any quadratic equation.',
            sections: [
              { title: 'Formula', type: 'formula', content: 'x = (-b ± √(b² - 4ac)) / 2a' },
              { title: 'Discriminant', type: 'bullets', content: [
                'b² - 4ac determines number and type of roots'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 3-6: Quadratic Inequalities',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-3.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Solve quadratic inequalities graphically or algebraically.',
            sections: [
              { title: 'Methods', type: 'bullets', content: [
                'Graphing the boundary parabola and shading',
                'Algebraic test intervals on number line'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Module 4: Polynomial Functions and Operations',
      icon: '📐',
      color: 'from-orange-500 to-red-600',
      description: 'Study of operations on polynomials, composition, inverse functions, and graphing radical functions.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 4-1: Operations on Functions',
          icon: '➕',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Perform sum, difference, product, and quotient on functions.',
            sections: [
              { title: 'Operations', type: 'bullets', content: [
                '(f + g)(x) = f(x) + g(x)',
                '(f - g)(x) = f(x) - g(x)',
                '(f · g)(x) = f(x) · g(x)',
                '(f / g)(x) = f(x) / g(x) (g(x) ≠ 0)'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 4-2: Composition of Functions',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Compose two functions to create a new function.',
            sections: [
              { title: 'Composition', type: 'formula', content: '(f ∘ g)(x) = f(g(x))' }
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 4-3: Inverse Relations and Functions',
          icon: '↔️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Find inverse relation/function by swapping x and y.',
            sections: [
              { title: 'Verification', type: 'bullets', content: [
                'f and g are inverses if (f ∘ g)(x) = x and (g ∘ f)(x) = x'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 4-4: Radical Functions and Inequalities',
          icon: '√',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.4/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Graphing square root and cube root functions and solving inequalities.',
            sections: [
              { title: 'Domain of Square Root', type: 'bullets', content: [
                'Expression under radical must be non-negative (x ≥ 0)'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 4-5: n-th Roots',
          icon: 'ⁿ√',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.5/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Simplifying roots with indices higher than 2.',
            sections: [
              { title: 'Radical Notation', type: 'formula', content: 'ⁿ√a = a^(1/n)' }
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 4-6: Rational Exponents',
          icon: '½',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.6/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Convert between radical form and exponential form.',
            sections: [
              { title: 'Basic Formula', type: 'formula', content: 'a^(m/n) = ⁿ√(aᵐ)' }
            ]
          }
        },
        {
          id: 7,
          title: 'Lesson 4-7: Solving Radical Equations and Inequalities',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.7/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.7-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Isolate radical and raise both sides to proper exponent. Watch for extraneous solutions.',
            sections: [
              { title: 'Extraneous Solutions', type: 'bullets', content: [
                'Always plug solutions back into the original equation to check validity'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'Lesson 4-8: Polynomial Functions',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.8/',
          examUrl: 'https://hesham-afandi.github.io/10Adv-Ins-math-T1-4.8-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Identify, evaluate, and graph polynomial functions, analyzing end behavior and turning points.',
            sections: [
              { title: 'End Behavior', type: 'bullets', content: [
                'Determined by degree and leading coefficient'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
