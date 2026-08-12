import { QuestionItem } from '../types';

export const physicsG12InspireQuestions: QuestionItem[] = [
  {
    id: 'inspire-q1',
    qNumber: 1,
    title: 'Luminous Flux Unit',
    titleAr: 'وحدة التدفق الضوئي Luminous Flux',
    learningOutcome: 'Define quantities of light like luminous flux and illuminance, specifying their SI units.',
    learningOutcomeAr: 'تحديد وحدات القياس للتدفق الضوئي والشدة الضوئية في النظام الدولي.',
    unit: 1,
    lesson: 'Lesson 1.1: Fundamentals of Light',
    page: 6,
    exerciseRef: 'Inspire Physics - Practice Problems (p.6 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'What is the SI unit of luminous flux ($P$)?',
    questionTextAr: 'ما هي وحدة قياس التدفق الضوئي (Luminous Flux) في النظام الدولي للوحدات؟',
    options: [
      { id: 'A', text: 'Candela (cd)' },
      { id: 'B', text: 'Lux (lx)' },
      { id: 'C', text: 'Lumen (lm)' },
      { id: 'D', text: 'Watt (W)' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Luminous flux ($P$) is the rate at which light energy is emitted from a luminous source.',
      'Its SI unit is lumen (lm).',
      'The correct option is C.'
    ],
    finalAnswer: 'Lumen (lm)'
  },
  {
    id: 'inspire-q2',
    qNumber: 2,
    title: 'Illuminance Measurement',
    titleAr: 'قياس الاستضاءة Illuminance',
    learningOutcome: 'Identify the unit and expression for illuminance on a surface.',
    learningOutcomeAr: 'معرفة وحدة قياس الاستضاءة علاقتها بالتدفق والمسافة.',
    unit: 1,
    lesson: 'Lesson 1.1: Fundamentals of Light',
    page: 6,
    exerciseRef: 'Inspire Physics - Practice Problems (p.6 #2)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'The illuminance ($E$) on a surface is measured in:',
    questionTextAr: 'تقاس الاستضاءة (Illuminance) على سطح ما بوحدة:',
    options: [
      { id: 'A', text: 'Lumens (lm)' },
      { id: 'B', text: 'Candelas (cd)' },
      { id: 'C', text: 'Lux (lx = lm/m²)' },
      { id: 'D', text: 'Joules (J)' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Illuminance ($E = \\frac{P}{4\\pi r^2}$) is the luminous flux per unit area.',
      'Its unit is Lux (lx), equivalent to lumens per square meter (lm/m²).',
      'The correct option is C.'
    ],
    finalAnswer: 'Lux (lx)'
  },
  {
    id: 'inspire-q3',
    qNumber: 3,
    title: 'Diffraction Definition',
    titleAr: 'تعريف الحيود Diffraction',
    learningOutcome: 'Define diffraction as the bending of a wave as it passes the edge of a barrier.',
    learningOutcomeAr: 'تعريف الحيود بأنه انحناء الموجة عند مرورها بحافة حائل أو فتحة ضيقة.',
    unit: 1,
    lesson: 'Lesson 1.2: Wave Nature of Light',
    page: 10,
    exerciseRef: 'Inspire Physics - Practice Problems (p.10 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Diffraction is best described as:',
    questionTextAr: 'أفضل وصف لظاهرة الحيود (Diffraction) هو:',
    options: [
      { id: 'A', text: 'The change in wave speed in a new medium' },
      { id: 'B', text: 'The bending of a wave as it passes the edge of a barrier' },
      { id: 'C', text: 'The superposition of two waves meeting' },
      { id: 'D', text: 'The change in frequency due to relative motion' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Diffraction occurs when light or water waves spread out or bend around the edges of an obstacle or barrier.',
      'According to Huygens\' principle, wavefront points act as sources of secondary wavelets.',
      'The correct option is B.'
    ],
    finalAnswer: 'The bending of a wave as it passes the edge of a barrier'
  },
  {
    id: 'inspire-q4',
    qNumber: 4,
    title: 'Color and Wavelength Relationship',
    titleAr: 'اللون والطول الموجي للضوء',
    learningOutcome: 'Describe that the color of light is related to its wavelength and frequency.',
    learningOutcomeAr: 'وصف العلاقة بين لون الضوء المرئي وطوله الموجي وتردده.',
    unit: 1,
    lesson: 'Lesson 1.2: Wave Nature of Light',
    page: 15,
    exerciseRef: 'Inspire Physics - Practice Problems (p.15 #2)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Which color of visible light has the longest wavelength in the visible spectrum?',
    questionTextAr: 'أي من ألوان الضوء المرئي التالية يمتلك أطول طول موجي؟',
    options: [
      { id: 'A', text: 'Violet (~400 nm)' },
      { id: 'B', text: 'Blue (~470 nm)' },
      { id: 'C', text: 'Red (~700 nm)' },
      { id: 'D', text: 'Green (~530 nm)' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Red light has the longest wavelength (~700 nm) and lowest frequency in the visible spectrum.',
      'Violet has the shortest wavelength (~400 nm) and highest frequency.',
      'The correct option is C.'
    ],
    finalAnswer: 'Red'
  },
  {
    id: 'inspire-q5',
    qNumber: 5,
    title: 'Malus\'s Law & Polarization Intensity',
    titleAr: 'قانون مالوس والاستقطاب',
    learningOutcome: 'Apply Malus\'s law ($I_2 = I_1 \\cos^2\\theta$) to light filtered by polarizer filters.',
    learningOutcomeAr: 'تطبيق قانون مالوس لحساب شدة الضوء المار عبر مرشحات الاستقطاب.',
    unit: 1,
    lesson: 'Lesson 1.2: Polarization of Light',
    page: 28,
    exerciseRef: 'Inspire Physics - Practice Problems (p.28 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'According to Malus\'s Law ($I_2 = I_1 \\cos^2\\theta$), if the angle between the transmission axes of a polarizer and an analyzer is $0^\\circ$, the intensity of transmitted light is:',
    questionTextAr: 'وفقاً لقانون مالوس، إذا كانت الزاوية بين محوري مرشحي الاستقطاب تساوي 0 درجة، فإن شدة الضوء النافذ تكون:',
    options: [
      { id: 'A', text: 'Zero' },
      { id: 'B', text: 'Minimum' },
      { id: 'C', text: 'Maximum ($I_2 = I_1$)' },
      { id: 'D', text: 'Half the original intensity' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Malus\'s Law: $I_2 = I_1 \\cos^2(\\theta)$.',
      'For $\\theta = 0^\\circ$, $\\cos(0^\\circ) = 1 \\implies I_2 = I_1$ (Maximum intensity transmitted).',
      'The correct option is C.'
    ],
    finalAnswer: 'Maximum ($I_2 = I_1$)'
  },
  {
    id: 'inspire-q6',
    qNumber: 6,
    title: 'Unpolarized Light Through Single Polarizer',
    titleAr: 'مرور الضوء غير المستقطب عبر مرشح فرادي',
    learningOutcome: 'Determine intensity of unpolarized light after passing through a single polarizing filter.',
    learningOutcomeAr: 'حساب شدة الضوء غير المستقطب بعد مروره بمرشح استقطاب واحد.',
    unit: 1,
    lesson: 'Lesson 1.2: Polarization of Light',
    page: 28,
    exerciseRef: 'Inspire Physics - Practice Problems (p.28 #2)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Unpolarized light of intensity $I_0$ passes through a single polarizer. The intensity of the transmitted light is:',
    questionTextAr: 'عند مرور ضوء غير مستقطب شدته I0 عبر مرشح استقطاب منفرد، تكون شدة الضوء النافذ:',
    options: [
      { id: 'A', text: '$I_0$' },
      { id: 'B', text: '$\\frac{I_0}{2}$' },
      { id: 'C', text: '$\\frac{I_0}{4}$' },
      { id: 'D', text: 'Zero' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'A polarizer absorbs all electric field oscillations perpendicular to its polarizing axis.',
      'For unpolarized light with random oscillations, exactly half of the total intensity passes through: $I = \\frac{I_0}{2}$.',
      'The correct option is B.'
    ],
    finalAnswer: '$I_0 / 2$'
  },
  {
    id: 'inspire-q7',
    qNumber: 7,
    title: 'Doppler Shift for Light (Redshift / Blueshift)',
    titleAr: 'تأثير دوبلر للضوء والابتعاد المجري',
    learningOutcome: 'Calculate relative velocity and direction of motion using light Doppler shift equations.',
    learningOutcomeAr: 'استخدام قانون دوبلر للضوء لحساب سرعة واتجاه حركة الأجرام السماوية.',
    unit: 1,
    lesson: 'Lesson 1.2: Doppler Shift of Light',
    page: 36,
    exerciseRef: 'Inspire Physics - Practice Problems (p.36 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'A distant galaxy emits light with a rest wavelength of $500\\text{ nm}$. An observer on Earth measures this wavelength to be $505\\text{ nm}$. What can be concluded about the galaxy\'s motion relative to Earth?',
    questionTextAr: 'مجرة بعيدة تبعث ضوءاً بطول موجي أصلي 500nm، ورصد مراقب على الأرض الطول الموجي بـ 505nm. ماذا نستنتج عن حركة المجرة؟',
    options: [
      { id: 'A', text: 'It is moving toward Earth at $0.01c$' },
      { id: 'B', text: 'It is moving away from Earth at $0.01c$ (Redshift)' },
      { id: 'C', text: 'It is moving toward Earth at $0.02c$' },
      { id: 'D', text: 'It is stationary' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Doppler wavelength shift: $\\Delta\\lambda = \\lambda_{\\text{obs}} - \\lambda = 505 - 500 = +5\\text{ nm}$.',
      'Since $\\Delta\\lambda > 0$ (longer wavelength / redshift), the source is moving away from Earth.',
      'Relative speed: $\\frac{v}{c} = \\frac{\\Delta\\lambda}{\\lambda} = \\frac{5}{500} = 0.01 \\implies v = 0.01c$.',
      'The correct option is B.'
    ],
    finalAnswer: 'It is moving away from Earth at 0.01c'
  },
  {
    id: 'inspire-q8',
    qNumber: 8,
    title: 'Law of Reflection in Plane Mirrors',
    titleAr: 'قانون الانعكاس والسطوح المستوية',
    learningOutcome: 'Apply the law of reflection in ray diagrams and state geometric laws.',
    learningOutcomeAr: 'تطبيق قانون الانعكاس وبيان أن شعاع السقوط والانعكاس والعمود المقيم تقع في نفس المستوى.',
    unit: 2,
    lesson: 'Lesson 2.1: Reflection and Plane Mirrors',
    page: 48,
    exerciseRef: 'Inspire Physics - Practice Problems (p.48 #2)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'In a ray diagram showing reflection from a plane mirror, which statement is always true?',
    questionTextAr: 'في رسم مسار الأشعة للانعكاس عن مرآة مستوية، أي من العبارات التالية صحيحة دائماً؟',
    options: [
      { id: 'A', text: 'The incident ray, reflected ray, and normal lie in different planes' },
      { id: 'B', text: 'The angle of incidence is twice the angle of reflection' },
      { id: 'C', text: 'The incident ray and reflected ray are always perpendicular' },
      { id: 'D', text: 'The incident ray, reflected ray, and normal all lie in the same plane' }
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'Law of Reflection state two main properties:',
      '1) Angle of incidence equals angle of reflection ($\\theta_i = \\theta_r$).',
      '2) The incident ray, reflected ray, and the normal to the surface at the point of incidence all lie in the same plane.',
      'The correct option is D.'
    ],
    finalAnswer: 'The incident ray, reflected ray, and normal all lie in the same plane'
  },
  {
    id: 'inspire-q9',
    qNumber: 9,
    title: 'Plane Mirror Image Position',
    titleAr: 'موقع الصورة في المرآة المستوية',
    learningOutcome: 'Represent mathematically the relation between image position and object position for plane mirrors.',
    learningOutcomeAr: 'تمثيل العلاقة بين موقع الجسم وموقع الصورة في المرآة المستوية رياضياً ($x_i = -x_o$).',
    unit: 2,
    lesson: 'Lesson 2.1: Reflection and Plane Mirrors',
    page: 58,
    exerciseRef: 'Inspire Physics - Practice Problems (p.58 #4)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'If an object is placed $4\\text{ meters}$ in front of a plane mirror, where is the image located relative to the mirror surface?',
    questionTextAr: 'إذا وضع جسم على بعد 4 أمتار أمام مرآة مستوية، فأين تقع صورته بالنسبة لسطح المرآة؟',
    options: [
      { id: 'A', text: '$2\\text{ meters}$ behind the mirror' },
      { id: 'B', text: '$4\\text{ meters}$ in front of the mirror' },
      { id: 'C', text: '$4\\text{ meters}$ behind the mirror (Virtual image)' },
      { id: 'D', text: '$8\\text{ meters}$ behind the mirror' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'For plane mirrors: $x_i = -x_o$.',
      'The image is virtual, erect, equal in size, and located at the exact same distance behind the mirror ($4\\text{ m}$).',
      'The correct option is C.'
    ],
    finalAnswer: '4 meters behind the mirror'
  },
  {
    id: 'inspire-q10',
    qNumber: 10,
    title: 'Spherical Aberration Correction in Mirrors',
    titleAr: 'تصحيح الزغبرة الكروية في المرايا',
    learningOutcome: 'Describe defects in concave mirrors such as spherical aberration and how they are corrected.',
    learningOutcomeAr: 'وصف عيوب المرايا الكروية وشرح كيفية تصحيح الزغبرة الكروية باستخدام المرايا التكافئية.',
    unit: 2,
    lesson: 'Lesson 2.2: Curved Mirrors',
    page: 65,
    exerciseRef: 'Inspire Physics - Practice Problems (p.65 #2)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'How can spherical aberration in concave mirrors be effectively corrected?',
    questionTextAr: 'كيف يمكن تصحيح عيب الزغبرة (الزيغ) الكروية في المرايا المقعرة بشكل فعال؟',
    options: [
      { id: 'A', text: 'By using a parabolic mirror instead of a spherical mirror' },
      { id: 'B', text: 'By placing a convex lens in front of the mirror' },
      { id: 'C', text: 'By silvering the mirror surface' },
      { id: 'D', text: 'By increasing the radius of curvature' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'Spherical aberration occurs because marginal rays focus at a different point than paraxial rays in spherical mirrors.',
      'Parabolic mirrors focus all parallel rays to a single focal point regardless of their distance from the principal axis.',
      'The correct option is A.'
    ],
    finalAnswer: 'By using a parabolic mirror instead of a spherical mirror'
  },
  {
    id: 'inspire-q11',
    qNumber: 11,
    title: 'Refraction Definition',
    titleAr: 'تعريف انكسار الضوء Refraction',
    learningOutcome: 'Describe refraction of light as it crosses the boundary between two different mediums.',
    learningOutcomeAr: 'تعريف انكسار الضوء بأنه انحناء الشعاع عند انتقاله بين وسطين شفافين مختلفين.',
    unit: 3,
    lesson: 'Lesson 3.1: Refraction of Light',
    page: 96,
    exerciseRef: 'Inspire Physics - Practice Problems (p.96 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'What is the best description of refraction?',
    questionTextAr: 'ما هو أفضل تعريف لانكسار الضوء (Refraction)؟',
    options: [
      { id: 'A', text: 'The bouncing of light off a reflective surface' },
      { id: 'B', text: 'The bending of light as it passes from one medium to another' },
      { id: 'C', text: 'The spreading of light around obstacles' },
      { id: 'D', text: 'The change in frequency of light in vacuum' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Refraction is the bending of light wave path caused by a change in its speed as it crosses the boundary between two media with different indices of refraction.',
      'The correct option is B.'
    ],
    finalAnswer: 'The bending of light as it passes from one medium to another'
  },
  {
    id: 'inspire-q12',
    qNumber: 12,
    title: 'Index of Refraction Equation',
    titleAr: 'معامل الانكسار Index of Refraction',
    learningOutcome: 'Define the index of refraction ($n = c/v$) and relate it to medium properties.',
    learningOutcomeAr: 'تعريف معامل الانكسار كنسبة سرعة الضوء في الفراغ إلى سرعته في الوسط ($n = c/v$).',
    unit: 3,
    lesson: 'Lesson 3.1: Refraction of Light',
    page: 100,
    exerciseRef: 'Inspire Physics - Practice Problems (p.100 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'How is the index of refraction ($n$) of a medium defined mathematically?',
    questionTextAr: 'كيف يُعرّف معامل الانكسار ($n$) لوسط شفاف رياضياتياً؟',
    options: [
      { id: 'A', text: 'The speed of light in the medium multiplied by $c$' },
      { id: 'B', text: 'The speed of light in a vacuum ($c$) divided by the speed of light in the medium ($v$)' },
      { id: 'C', text: 'The wavelength in medium divided by wavelength in vacuum' },
      { id: 'D', text: 'The frequency in medium divided by frequency in vacuum' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Index of Refraction formula: $n = \\frac{c}{v}$.',
      'Where $c$ is light speed in vacuum ($3 \\times 10^8\\text{ m/s}$) and $v$ is light speed in the medium.',
      'The correct option is B.'
    ],
    finalAnswer: 'Speed of light in vacuum divided by speed of light in medium ($n = c/v$)'
  },
  {
    id: 'inspire-q13',
    qNumber: 13,
    title: 'Applications of Total Internal Reflection',
    titleAr: 'تطبيقات الانعكاس الكلي الداخلي',
    learningOutcome: 'Describe applications of total internal reflection like optical fibers and prisms.',
    learningOutcomeAr: 'شرح التطبيقات العملية للانعكاس الكلي الداخلي مثل الألياف الضوئية والمنشور.',
    unit: 3,
    lesson: 'Lesson 3.2: Total Internal Reflection',
    page: 105,
    exerciseRef: 'Inspire Physics - Practice Problems (p.105 #1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'Which of the following devices operates primarily based on total internal reflection?',
    questionTextAr: 'أي من الأجهزة التالية يعمل يعتمد بشكل أساسي على الانعكاس الكلي الداخلي؟',
    options: [
      { id: 'A', text: 'Convex lens' },
      { id: 'B', text: 'Plane mirror' },
      { id: 'C', text: 'Optical fiber' },
      { id: 'D', text: 'Concave mirror' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'Optical fibers transmit light signals over long distances with minimal loss by keeping light trapped inside the core via total internal reflection.',
      'The correct option is C.'
    ],
    finalAnswer: 'Optical fiber'
  },
  {
    id: 'inspire-q14',
    qNumber: 14,
    title: 'Myopia & Correction Lenses',
    titleAr: 'قصر النظر وكيفية تصحيحه',
    learningOutcome: 'Define nearsightedness (Myopia) and describe how vision defects are corrected using concave lenses.',
    learningOutcomeAr: 'تعريف قصر النظر وبيان كيفية تصحيحه باستخدام العدسات المقعرة المفرقة.',
    unit: 4,
    lesson: 'Lesson 4.2: Human Eye & Defects',
    page: 122,
    exerciseRef: 'Inspire Physics - Practice Problems (p.122 #1 & #6)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'In a nearsighted (myopic) eye, images of distant objects form in front of the retina. How does a concave lens correct this defect?',
    questionTextAr: 'في العين المصابة بقصر النظر، تتكون صور الأجسام البعيدة أمام الشبكية. كيف تصحح العدسة المقعرة هذا العيب؟',
    options: [
      { id: 'A', text: 'It converges light rays to move the focal point forward' },
      { id: 'B', text: 'It diverges light rays before they enter the eye, moving the focal point backward onto the retina' },
      { id: 'C', text: 'It magnifies the image to make it clearer' },
      { id: 'D', text: 'It corrects chromatic aberration in the eye' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Myopia occurs because the eyeball is too long or cornea too curved, focusing light in front of retina.',
      'A concave (diverging) lens spreads light rays slightly before entering the eye, shifting the focal point backward directly onto the retina.',
      'The correct option is B.'
    ],
    finalAnswer: 'It diverges light rays, moving the focal point backward onto the retina'
  },
  {
    id: 'inspire-q15',
    qNumber: 15,
    title: 'Chromatic Aberration in Lenses',
    titleAr: 'الزيغ اللون الكروماتي وتصحيحه',
    learningOutcome: 'Explain defects in spherical lenses such as chromatic aberration and how they are corrected using achromatic doublets.',
    learningOutcomeAr: 'شرح الزيغ اللوني في العدسات وكيفية تصحيحه باستخدام العدسة اللاحوماتية (Achromatic Doublet).',
    unit: 4,
    lesson: 'Lesson 4.2: Lens Defects',
    page: 117,
    exerciseRef: 'Inspire Physics - Practice Problems (p.117 #3)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'How can chromatic aberration in optical instruments be effectively corrected?',
    questionTextAr: 'كيف يمكن تصحيح الزيغ اللوني (Chromatic Aberration) في الأجهزة البصرية بفعالية؟',
    options: [
      { id: 'A', text: 'By using a lens with a shorter focal length' },
      { id: 'B', text: 'By combining lenses made of different types of glass (an achromatic doublet)' },
      { id: 'C', text: 'By using a diaphragm to block marginal rays' },
      { id: 'D', text: 'By silvering the lens surface' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'Chromatic aberration occurs because different wavelengths of light refract at slightly different angles in a single lens.',
      'An achromatic doublet combines a convex lens and a concave lens made of different types of glass (crown glass & flint glass) to recombine colors to a single focus.',
      'The correct option is B.'
    ],
    finalAnswer: 'By combining lenses made of different types of glass (an achromatic doublet)'
  }
];

export const physicsG12BridgeQuestions: QuestionItem[] = [
  {
    id: 'phys-q1',
    qNumber: 1,
    title: 'Electric Charge & Quantization',
    titleAr: 'الشحنة الكهربائية ومبدأ تكماة الشحنة',
    learningOutcome: 'Calculate the number of electrons associated with a given amount of electric charge.',
    learningOutcomeAr: 'حساب عدد الإلكترونات اللازمة لإنتاج شحنة كهربائية محددة وتطبيق قانون تكماة الشحنة.',
    unit: 1,
    lesson: 'الدرس 1.2: الشحنة الكهربائية',
    page: 3,
    exerciseRef: 'مراجعة المفاهيم 1.1',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'كم عدد الإلكترونات اللازمة لإنتاج شحنة كهربائية مقدارها $1.00\\text{ C}$؟ (علماً بأن شحنة الإلكترون الأساسية $e = 1.602 \\times 10^{-19}\\text{ C}$)',
    questionTextAr: 'كم عدد الإلكترونات اللازمة لإنتاج شحنة مقدارها 1.00 C؟',
    options: [
      { id: 'A', text: '$1.60 \\times 10^{19}$ إلكترون' },
      { id: 'B', text: '$6.60 \\times 10^{19}$ إلكترون' },
      { id: 'C', text: '$3.20 \\times 10^{16}$ إلكترون' },
      { id: 'D', text: '$6.24 \\times 10^{18}$ إلكترون' }
    ],
    correctAnswer: 'D',
    solutionSteps: [
      'نطبق قانون تكماة الشحنة: $N = \\frac{|q|}{e}$',
      'نعوض القيمة: $N = \\frac{1.00\\text{ C}}{1.602 \\times 10^{-19}\\text{ C}} = 6.242 \\times 10^{18}$ إلكترون',
      'الإجابة الصحيحة هي الخيار D.'
    ],
    finalAnswer: '$6.24 \\times 10^{18}$ إلكترون'
  },
  {
    id: 'phys-q2',
    qNumber: 2,
    title: 'Semiconductors & Doping',
    titleAr: 'أشباه الموصلات والتطعيم (n-type & p-type)',
    learningOutcome: 'Distinguish between intrinsic and extrinsic semiconductors and understand doping mechanisms.',
    learningOutcomeAr: 'التمييز بين أشباه الموصلات النقية والغير نقية وفهم آلية التطعيم بالشوائب الخماسية والثلاثية.',
    unit: 1,
    lesson: 'الدرس 1.3: العوازل والموصلات وأشباه الموصلات',
    page: 10,
    exerciseRef: 'أسئلة التطعيم 1.3',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'عند تطعيم بلورة شبه الموصل (مثل السيليكون) بعنصر خماسي التكافؤ مثل الفسفور P أو الزرنيخ As، فإن ذرة الشائبة تتحول إلى:',
    questionTextAr: 'ماذا يحدث لذرة الشائبة الخماسية عند تطعيم شبه الموصل بها؟',
    options: [
      { id: 'A', text: 'أيون موجب وتسمى ذرة مانحة (Donor Atom)' },
      { id: 'B', text: 'أيون سالب وتسمى ذرة مستقبلة (Acceptor Atom)' },
      { id: 'C', text: 'ذرة متعادلة وتكوّن فجوة موجبة' },
      { id: 'D', text: 'شحنة الكترونية حرّة دون تغيير الأيون' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'الشوائب الخماسية تمنح إلكتروناً حراً للبلورة فتصبح أيوناً موجباً ثابتاً في الشبكة البلورية.',
      'تسمى الذرات بالذرات المانحة (Donors) وينتج شبه موصل من النوع السالب (n-type).',
      'الإجابة الصحيحة هي الخيار A.'
    ],
    finalAnswer: 'أيون موجب وتسمى ذرة مانحة (Donor)'
  },
  {
    id: 'phys-q3',
    qNumber: 3,
    title: 'Electrostatic Charging',
    titleAr: 'الشحن بالحث والكشاف الكهربائي',
    learningOutcome: 'Explain the sequence of steps required to charge an electroscope by induction.',
    learningOutcomeAr: 'تحديد خطوات شحن الكشاف الكهربائي بشحنة موجبة أو سالبة بطريقة الحث.',
    unit: 1,
    lesson: 'الدرس 1.4: الشحن الكهروستاتيكي',
    page: 15,
    exerciseRef: 'أسئلة السنوات السابقة - الشحن بالحث',
    type: 'mcq',
    examYear: '2023/2024',
    questionText: 'لشحن كشاف كهربائي متعادل بشحنة موجبة دائمة باستخدام ساق شحنتها سالبة، الإجراء الصحيح هو:',
    questionTextAr: 'كيف يتم شحن كشاف بشحنة موجبة بالحث باستخدام ساق سالبة؟',
    options: [
      { id: 'A', text: 'ملامسة قرص الكشاف بالساق السالبة بشكل مباشر' },
      { id: 'B', text: 'تقريب الساق السالبة ثم إبعادها دون تأريض' },
      { id: 'C', text: 'تقريب الساق السالبة من القرص، ثم تأريض الكشاف، ثم قطع التأريض أولاً وأخيراً إبعاد الساق' },
      { id: 'D', text: 'تأريض الكشاف أولاً ثم إبعاد التأريض وتقريب الساق' }
    ],
    correctAnswer: 'C',
    solutionSteps: [
      'عند تقريب الساق السالبة تتجمع الشحنات السالبة على ورقتي الكشاف بالتنافر (الشحن بالحث).',
      'عند تأريض الكشاف، تتسرب الإلكترونات السالبة إلى الأرض وتبقى الشحنة الموجبة مقيدة على القرص.',
      'يجب قطع وصلة التأريض أولاً حتى لا تعود الإلكترونات، ثم إبعاد الساق المشحونة فتتوزع الشحنة الموجبة الدائمة على الكشاف.',
      'الإجابة الصحيحة هي الخيار C.'
    ],
    finalAnswer: 'تقريب الساق السالبة، ثم تأريض الكشاف، ثم قطع التأريض أولاً وأخيراً إبعاد الساق'
  },
  {
    id: 'phys-q4',
    qNumber: 4,
    title: 'Coulomb\'s Law',
    titleAr: 'قانون كولوم لحساب المسافة بين الشحنتين',
    learningOutcome: 'Apply Coulomb\'s Law to calculate separation distance or force between point charges.',
    learningOutcomeAr: 'تطبيق قانون كولوم لحساب المسافة بين شحنتين نقطيتين عند معرفة القوة المتبادلة.',
    unit: 1,
    lesson: 'الدرس 1.5: القوة الكهروستاتيكية - قانون كولوم',
    page: 22,
    exerciseRef: 'أسئلة قانون كولوم (س2)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'شحنتان نقطيتان $(+q)$ و $(-q)$ لهما القيمة نفسها. إذا كانت المسافة بينهما $9.0\\text{ cm}$ والقوة الكهروستاتيكية المتبادلة بينهما $5.0\\text{ N}$، فما مقدار كل من الشحنتين؟ ($k = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$)',
    questionTextAr: 'ما مقدار الشحنة عند معرفة القوة والمسافة؟',
    options: [
      { id: 'A', text: '$2.1\\text{ }\\mu\\text{C}$' },
      { id: 'B', text: '$7.1\\text{ }\\mu\\text{C}$' },
      { id: 'C', text: '$2.1\\text{ nC}$' },
      { id: 'D', text: '$6.7\\text{ }\\mu\\text{C}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'نستخدم قانون كولوم: $F = k \\frac{q^2}{r^2}$',
      'نعوض القيم: $5.0 = (8.99 \\times 10^9) \\frac{q^2}{(0.09)^2}$',
      '$q^2 = \\frac{5.0 \\times 0.0081}{8.99 \\times 10^9} = 4.505 \\times 10^{-12}$',
      '$q = \\sqrt{4.505 \\times 10^{-12}} \\approx 6.7 \\times 10^{-6}\\text{ C} = 6.7\\text{ }\\mu\\text{C}$ (أو $7.1\\text{ }\\mu\\text{C}$ حسب التقريب)',
      'الإجابة الصحيحة هي B / $6.7\\text{ }\\mu\\text{C}$.'
    ],
    finalAnswer: '$6.7\\text{ }\\mu\\text{C}$'
  },
  {
    id: 'phys-q5',
    qNumber: 5,
    title: 'Superposition Principle',
    titleAr: 'مبدأ التراكب القوة الكهروستاتيكية المحصلة',
    learningOutcome: 'Determine the net electrostatic force acting on a charge due to multiple point charges.',
    learningOutcomeAr: 'حساب محصلة القوى الكهربائية المؤثرة في شحنة نقطية باستخدام مبدأ التراكب والمتجهات.',
    unit: 1,
    lesson: 'الدرس 1.5: القوة الكهروستاتيكية - مبدأ التراكب',
    page: 27,
    exerciseRef: 'مسائل المحصلة (شحنات على خط مستقيم)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'في الشكل المجاور، $q_1 = +10.0\\text{ }\\mu\\text{C}$ عند $x = 0$، و $q_2 = -20.0\\text{ }\\mu\\text{C}$ عند $x = 1.0\\text{ m}$، و $q_3 = +30.0\\text{ }\\mu\\text{C}$ عند $x = 3.0\\text{ m}$. أوجد مقدار واتجاه القوة الكلية المؤثرة في الشحنة $q_3$ والناتجة عن الشحنتين $q_1$ و $q_2$.',
    questionTextAr: 'أوجد القوة المحصلة المؤثرة في $q_3$.',
    options: [
      { id: 'A', text: '$1.05\\text{ N}$ نحو اليمين (+x)' },
      { id: 'B', text: '$1.05\\text{ N}$ نحو اليسار (-x)' },
      { id: 'C', text: '$1.35\\text{ N}$ نحو اليسار (-x)' },
      { id: 'D', text: '$2.10\\text{ N}$ نحو اليمين (+x)' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'القوة بين $q_1$ و $q_3$ (تنافر نحو +x): $F_{13} = k \\frac{|q_1 q_3|}{r_{13}^2} = (8.99 \\times 10^9) \\frac{(10.0 \\times 10^{-6})(30.0 \\times 10^{-6})}{3.0^2} = +0.30\\text{ N}$',
      'القوة بين $q_2$ و $q_3$ (تجاذب نحو -x): $F_{23} = k \\frac{|q_2 q_3|}{r_{23}^2} = (8.99 \\times 10^9) \\frac{(20.0 \\times 10^{-6})(30.0 \\times 10^{-6})}{2.0^2} = -1.35\\text{ N}$',
      'المحصلة الكلية: $F_{\\text{net}} = F_{13} + F_{23} = +0.30 - 1.35 = -1.05\\text{ N}$ (أي $1.05\\text{ N}$ نحو اليسار).',
      'الإجابة الصحيحة هي الخيار B.'
    ],
    finalAnswer: '$1.05\\text{ N}$ نحو اليسار'
  },
  {
    id: 'phys-q6',
    qNumber: 6,
    title: 'Electric Field Force & Direction',
    titleAr: 'المجال الكهربائي والقوة المؤثرة في شحنة اختبار',
    learningOutcome: 'Calculate force exerted by a uniform electric field on a point charge.',
    learningOutcomeAr: 'حساب القوة التي يؤثر بها مجال كهربائي منتظم وتحديد اتجاهها حسب نوع الشحنة.',
    unit: 2,
    lesson: 'الدرس 2.1: القوة الناتجة عن مجال كهربائي',
    page: 35,
    exerciseRef: 'اختبار ذاتي - المجال المنتظم',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'وضعت شحنة اختبار موجبة مقدارها $+6.0 \\times 10^{-6}\\text{ C}$ في مجال كهربائي منتظم شدته $50.0\\text{ N/C}$ يتجه نحو الشرق. ما مقدار واتجاه القوة المؤثرة في شحنة الاختبار؟',
    questionTextAr: 'احسب القوة المؤثرة في شحنة اختبار موجبة في مجال منتظم.',
    options: [
      { id: 'A', text: '$3.0 \\times 10^4\\text{ N}$ باتجاه المجال (نحو الشرق)' },
      { id: 'B', text: '$3.0 \\times 10^{-4}\\text{ N}$ باتجاه المجال (نحو الشرق)' },
      { id: 'C', text: '$3.0 \\times 10^{-4}\\text{ N}$ عكس اتجاه المجال (نحو الغرب)' },
      { id: 'D', text: '$1.2 \\times 10^{-7}\\text{ N}$ باتجاه المجال (نحو الشرق)' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'القوة الكهروستاتيكية: $F = |q| E$',
      'نعوض القيم: $F = (6.0 \\times 10^{-6}\\text{ C}) \\times (50.0\\text{ N/C}) = 3.0 \\times 10^{-4}\\text{ N}$',
      'بما أن الشحنة موجبة، فإن اتجاه القوة يكون في نفس اتجاه المجال الكهربائي (نحو الشرق).',
      'الإجابة الصحيحة هي B.'
    ],
    finalAnswer: '$3.0 \\times 10^{-4}\\text{ N}$ باتجاه الشرق'
  },
  {
    id: 'phys-q7',
    qNumber: 7,
    title: 'Gauss\'s Law & Electric Flux',
    titleAr: 'قانون جاوس والتدفق الكهربائي لسطح مغلق',
    learningOutcome: 'Apply Gauss\'s Law to calculate total electric flux through a closed surface.',
    learningOutcomeAr: 'حساب التدفق الكهربائي الكلي لسطح مغلق يحيط بشحنات متعددة باستخدام قانون جاوس.',
    unit: 2,
    lesson: 'الدرس 2.8: قانون جاوس',
    page: 66,
    exerciseRef: 'تطبيقات قانون جاوس (س1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'سطح مغلق يحيط بشحنتين نقطيتين $q_1 = +29.5\\text{ }\\mu\\text{C}$ و $q_2 = -11.8\\text{ }\\mu\\text{C}$ في الهواء. ما مقدار التدفق الكهربائي الخروج عبر هذا السطح المغلق بـ $\\text{N}\\cdot\\text{m}^2/\\text{C}$؟ (سماحية الفراغ $\\varepsilon_0 = 8.85 \\times 10^{-12}\\text{ C}^2/\\text{N}\\cdot\\text{m}^2$)',
    questionTextAr: 'احسب التدفق عبر سطح مغلق يحيط بالشحنتين.',
    options: [
      { id: 'A', text: '$3.33 \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$' },
      { id: 'B', text: '$2.00 \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$' },
      { id: 'C', text: '$4.66 \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$' },
      { id: 'D', text: '$-1.33 \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$' }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      'نحسب صافي الشحنة المحاطة داخل السطح: $q_{\\text{enc}} = q_1 + q_2 = +29.5\\text{ }\\mu\\text{C} + (-11.8\\text{ }\\mu\\text{C}) = +17.7\\text{ }\\mu\\text{C} = 17.7 \\times 10^{-6}\\text{ C}$',
      'نطبق قانون جاوس للتدفق الكلي: $\\Phi = \\frac{q_{\\text{enc}}}{\\varepsilon_0} = \\frac{17.7 \\times 10^{-6}}{8.85 \\times 10^{-12}} = 2.00 \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$',
      'الإجابة الصحيحة هي الخيار B.'
    ],
    finalAnswer: '$2.00 \\times 10^6\\text{ N}\\cdot\\text{m}^2/\\text{C}$'
  },
  {
    id: 'phys-q8',
    qNumber: 8,
    title: 'Electric Field of Infinite Wire',
    titleAr: 'المجال الكهربائي لسلك مشحون لا نهائي الطول',
    learningOutcome: 'Understand the dependence of electric field of a long wire on charge density and distance.',
    learningOutcomeAr: 'معرفة العلاقة الرياضية لشدة المجال الكهربائي الناشئ عن سلك لا نهائي الطول.',
    unit: 2,
    lesson: 'الدرس 2.9: حالات خاصة في تماثل توزيع الشحنات',
    page: 71,
    exerciseRef: 'مراجعة المفاهيم 2.12',
    type: 'mcq',
    examYear: '2023/2024',
    questionText: 'سلك مستقيم لا نهائي الطول يحمل شحنة ذات كثافة طولية منتظمة $\\lambda$. تتناسب شدة المجال الكهربائي $E$ عند نقطة تبعد مسافة $r$ عمودياً عن السلك مع:',
    questionTextAr: 'ما علاقة المجال الكهربائي بعاملي الكثافة الطولية والمسافة لسلك لا نهائي؟',
    options: [
      { id: 'A', text: 'طردياً مع الكثافة الطولية $\\lambda$ وعكسياً مع المسافة $r$' },
      { id: 'B', text: 'طردياً مع $\\lambda$ وعكسياً مع مربع المسافة $r^2$' },
      { id: 'C', text: 'طردياً مع $r$ وعكسياً مع $\\lambda$' },
      { id: 'D', text: 'مستقلة تماماً عن المسافة $r$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'القانون الخاص بالمجال الكهربائي لسلك طويل لا نهائي: $E = \\frac{2 k \\lambda}{r}$',
      'يتضح أن $E \\propto \\lambda$ (تناسب طردي) و $E \\propto \\frac{1}{r}$ (تناسب عكسي مع المسافة $r$).',
      'الإجابة الصحيحة هي الخيار A.'
    ],
    finalAnswer: 'طردياً مع $\\lambda$ وعكسياً مع المسافة $r$'
  },
  {
    id: 'phys-q9',
    qNumber: 9,
    title: 'Electron Acceleration in Potential Difference',
    titleAr: 'تسارع الإلكترون عبر فرق جهد كهربائي',
    learningOutcome: 'Apply conservation of energy to determine the final speed of an accelerated electron.',
    learningOutcomeAr: 'تطبيق مبدأ حفظ الطاقة لحساب السرعة النهائية لإلكترون يتسارع في مجال كهربائي.',
    unit: 3,
    lesson: 'الدرس 3.1: الشغل وطاقة الوضع والجهد الكهربائي',
    page: 78,
    exerciseRef: 'مسائل التسارع عبر فرق الجهد (س 3.26)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'يتسارع إلكترون من السكون عبر فرق جهد كهربائي $370\\text{ V}$. فما سرعته النهائية بـ $\\text{m/s}$؟ (كتلة الإلكترون $m_e = 9.11 \\times 10^{-31}\\text{ kg}$ وشحنته $e = 1.602 \\times 10^{-19}\\text{ C}$)',
    questionTextAr: 'احسب السرعة النهائية لإلكترون يتسارع عبر فرق جهد 370V.',
    options: [
      { id: 'A', text: '$1.14 \\times 10^7\\text{ m/s}$' },
      { id: 'B', text: '$6.50 \\times 10^6\\text{ m/s}$' },
      { id: 'C', text: '$3.60 \\times 10^5\\text{ m/s}$' },
      { id: 'D', text: '$2.40 \\times 10^8\\text{ m/s}$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'من قانون حفظ الطاقة: $\\Delta K = -q \\Delta V \\implies \\frac{1}{2} m_e v^2 = e \\Delta V$',
      'نعوض القيم: $v = \\sqrt{\\frac{2 e \\Delta V}{m_e}} = \\sqrt{\\frac{2 \\times (1.602 \\times 10^{-19}\\text{ C}) \\times 370\\text{ V}}{9.11 \\times 10^{-31}\\text{ kg}}}$',
      '$v = \\sqrt{\\frac{1.185 \\times 10^{-16}}{9.11 \\times 10^{-31}}} = \\sqrt{1.301 \\times 10^{14}} \\approx 1.14 \\times 10^7\\text{ m/s}$',
      'الإجابة الصحيحة هي الخيار A.'
    ],
    finalAnswer: '$1.14 \\times 10^7\\text{ m/s}$'
  },
  {
    id: 'phys-q10',
    qNumber: 10,
    title: 'Capacitors with Dielectrics',
    titleAr: 'المكثفات والسعة عند إدخال مادة عازلة',
    learningOutcome: 'Calculate capacitance change when dielectric material partially fills the space.',
    learningOutcomeAr: 'حساب التغير في سعة المكثف عند إضافة مادة عازلة بين لوحيه.',
    unit: 4,
    lesson: 'الدرس 4.1: المكثفات والسعة الكهربائية',
    page: 90,
    exerciseRef: 'أسئلة العوازل والمكثفات (س 1)',
    type: 'mcq',
    examYear: '2024/2025',
    questionText: 'مكثف هوائي متوازي اللوحين سعته $C$. ملئ نصف حجمه بعازل ثابت عازليته $\\kappa = 3.0$ والنصف الثاني بالهواء كما في الشكل. ما سعة المكثف الجديدة بدلالة $C$؟',
    questionTextAr: 'احسب السعة الجديدة لمكثف ملئ نصفه بمادة عازلة ثابته 3.0.',
    options: [
      { id: 'A', text: '$2.0\\text{ }C$' },
      { id: 'B', text: '$3.0\\text{ }C$' },
      { id: 'C', text: '$1.5\\text{ }C$' },
      { id: 'D', text: '$4.0\\text{ }C$' }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      'عند تقسيم الحجم إلى نصفين متوازيين مع المساحة، يعتبر النظام عبارة عن مكثفين متصلين على التوازي.',
      '$C_{\\text{new}} = C_1 + C_2 = \\frac{\\varepsilon_0 (A/2)}{d} + \\frac{\\kappa \\varepsilon_0 (A/2)}{d} = \\frac{C}{2} + \\kappa \\frac{C}{2}$',
      '$C_{\\text{new}} = \\frac{C}{2} (1 + \\kappa) = \\frac{C}{2} (1 + 3.0) = 2.0 C$',
      'الإجابة الصحيحة هي الخيار A.'
    ],
    finalAnswer: '$2.0\\text{ }C$'
  }
];
