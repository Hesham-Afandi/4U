import { Question } from '../../types';

export const SAT_RW_MODEL_2_QUESTIONS: Question[] = [
  {
    id: 1101,
    domain: 'craft-structure',
    category: 'vocabulary',
    difficulty: 'Easy',
    questionEn: 'In Lewis Carroll’s novel Through the Looking-Glass, the narrator describes the voice as "soft" and soothing. As used in the text, what does the word "soft" most nearly mean?',
    questionAr: 'في رواية لويس كارول Through the Looking-Glass، يصف الراوي الصوت بأنه "soft" ومهدئ. كما أُستخدمت في النص، ما المعنى الأقرب لكلمة "soft"؟',
    options: [
      { textEn: 'A) Gentle', textAr: 'أ) رقيق/لطيف (Gentle)' },
      { textEn: 'B) Pliable', textAr: 'ب) مرن (Pliable)' },
      { textEn: 'C) Weak', textAr: 'ج) ضعيف (Weak)' },
      { textEn: 'D) Silent', textAr: 'د) صامت (Silent)' }
    ],
    correctAnswer: 0,
    explanationEn: 'In the context of a soothing voice, "soft" means gentle and mild.',
    explanationAr: 'في سياق وصف الصوت المهدئ، كلمة soft تعني رقيق ولطيف (Gentle).',
    solutionStepsEn: ['Context clue: soothing voice.', 'Select Gentle.'],
    solutionStepsAr: ['مفتاح الحل: صوت مهدئ.', 'اختيار Gentle (رقيق).']
  },
  {
    id: 1102,
    domain: 'craft-structure',
    category: 'vocabulary',
    difficulty: 'Easy',
    questionEn: 'In Charles Chesnutt’s short story "The Wife of His Youth," a character must "determine" which course of action to pursue. As used in the text, what does "determine" most nearly mean?',
    questionAr: 'في قصة تشارلز تشيسنوت القصيرة "The Wife of His Youth"، يتوجب على إحدى الشخصيات أن "determine" المسار الذي ستتبعه. ما المعنى الأقرب لكلمة "determine"؟',
    options: [
      { textEn: 'A) Choose', textAr: 'أ) يختار (Choose)' },
      { textEn: 'B) Calculate', textAr: 'ب) يحسب (Calculate)' },
      { textEn: 'C) Measure', textAr: 'ج) يقيس (Measure)' },
      { textEn: 'D) Restrict', textAr: 'د) يقيد (Restrict)' }
    ],
    correctAnswer: 0,
    explanationEn: 'Deciding upon or selecting a course of action means to choose it.',
    explanationAr: 'تحديد مسار العمل من بين خيارات متعددة يعني اختياره (Choose).',
    solutionStepsEn: ['Determine a course of action = choose a path.', 'Select Choose.'],
    solutionStepsAr: ['اختيار المسار المراد اتباعه = Choose.']
  },
  {
    id: 1103,
    domain: 'craft-structure',
    category: 'vocabulary',
    difficulty: 'Easy',
    questionEn: 'In Alice’s Adventures in Wonderland, the Cheshire Cat explains a path so "simply" that even a child could follow it. What does "simply" most nearly mean?',
    questionAr: 'في مغامرات أليس في بلاد العجائب، يشرح القط ششاير طريقاً بـ "simply" شديدة بحيث يمكن حتى للطفل اتباعه. ما المعنى الأقرب لكلمة "simply"؟',
    options: [
      { textEn: 'A) Merely', textAr: 'أ) مجرد (Merely)' },
      { textEn: 'B) Barely', textAr: 'ب) بالكاد (Barely)' },
      { textEn: 'C) Easily', textAr: 'ج) ببرمج وسهولة (Easily)' },
      { textEn: 'D) Plainly', textAr: 'د) بصراحة (Plainly)' }
    ],
    correctAnswer: 2,
    explanationEn: 'Explaining a path so that anyone can follow it easily means it was explained simply/clearly.',
    explanationAr: 'شرح المسار بطريقة يستطيع الجميع اتباعها دون صعوبة يعني بسهولة (Easily).',
    solutionStepsEn: ['Context clue: even a child can follow.', 'Select Easily.'],
    solutionStepsAr: ['مفتاح الحل: سهولة الاتباع.', 'اختيار Easily.']
  },
  {
    id: 1104,
    domain: 'craft-structure',
    category: 'vocabulary',
    difficulty: 'Medium',
    questionEn: 'Urban planners noticed that bicycle-sharing stations in commuter hubs often become _______ bicycles during morning peak hours as users ride them to work.',
    questionAr: 'لاحظ مخططو المدن أن محطات مشاركة الدراجات في مراكز التنقل غالباً ما تصبح _______ الدراجات خلال ساعات الذروة الصباحية حيث يركبها المستخدمون للعمل.',
    options: [
      { textEn: 'A) saturated with', textAr: 'أ) مشبعة بـ (saturated with)' },
      { textEn: 'B) independent of', textAr: 'ب) مستقيلة عن (independent of)' },
      { textEn: 'C) cautious of', textAr: 'ج) حذرة من (cautious of)' },
      { textEn: 'D) depleted of', textAr: 'د) استُنفِدت من / خالية من (depleted of)' }
    ],
    correctAnswer: 3,
    explanationEn: 'When people take bicycles away to commute, the station runs out of bicycles, meaning it is depleted of them.',
    explanationAr: 'عندما يأخذ الناس الدراجات للذهاب إلى العمل، تفرغ المحطة من الدراجات، أي تستنفد (depleted of).',
    solutionStepsEn: ['Bicycles are ridden away -> station becomes empty -> depleted of.'],
    solutionStepsAr: ['أخذ الدراجات يؤدي لإفراغ المحطة -> depleted of.']
  },
  {
    id: 1105,
    domain: 'craft-structure',
    category: 'text-structure',
    difficulty: 'Medium',
    questionEn: 'In Jason Reynolds’s novel Ghost, the narrator describes waiting at a bus stop and watching people walk by while playing a game predicting their destinations. What is the main purpose of this passage?',
    questionAr: 'في رواية Ghost لجيسون رينولدز، يصف الراوي انتظاره في موقف الحافلات ومراقبته للمشاة مع ممارسة لعبة التنبؤ بوجهاتهم. ما الغرض الرئيسي لهذا النص؟',
    options: [
      { textEn: 'A) To explain the bus schedule rules.', textAr: 'أ) شرح قواعد جدول الحافلات.' },
      { textEn: 'B) To describe an activity that the narrator finds amusing', textAr: 'ب) وصف نشاط يجده الراوي ممتعاً ومسلياً.' },
      { textEn: 'C) To complain about late public transit.', textAr: 'ج) الشكوى من تأخر النقل العام.' },
      { textEn: 'D) To introduce a conflict with a classmate.', textAr: 'د) تقديم صراع مع زميل الدراسة.' }
    ],
    correctAnswer: 1,
    explanationEn: 'The passage highlights the narrator’s fun pastime of people-watching at the bus stop.',
    explanationAr: 'النص يصف الهواية والتسلية الممتعة للراوي في مراقبة الناس والتكهن بوجهاتهم.',
    solutionStepsEn: ['Identify narrator’s tone and action.', 'Choice B accurately reflects describing an amusing activity.'],
    solutionStepsAr: ['تحديد النشاط المسلي للراوي.', 'الخيار ب يصف الغرض بدقة.']
  },
  {
    id: 1106,
    domain: 'craft-structure',
    category: 'text-structure',
    difficulty: 'Hard',
    questionEn: 'Scholar A.D. Carson created a peer-reviewed rap album as his doctoral dissertation, blending hip-hop aesthetics with academic commentary. What is the main purpose of discussing Carson’s work?',
    questionAr: 'أنتج الباحث A.D. Carson ألبوماً غنائياً من نوع الهيب هوب كمطروحة دكتوراه محكّمة. ما الغرض الرئيسي من مناقشة عمل كارسون؟',
    options: [
      { textEn: 'A) To criticize traditional university grading scales.', textAr: 'أ) نقد درجات التقييم الجامعية التقليدية.' },
      { textEn: 'B) To argue that rap is superior to written prose.', textAr: 'ب) الإدعاء بأن الراب أفضل من النثر المكتوب.' },
      { textEn: 'C) To explain why a certain rap album is particularly innovative', textAr: 'ج) توضيح سبب كَوْن ألبوم راب معين مبتكراً بشكل فريد استثنائي.' },
      { textEn: 'D) To list commercial sales figures for academic hip-hop.', textAr: 'د) سرد مبيعات ألبومات الهيب هوب الأكاديمية.' }
    ],
    correctAnswer: 2,
    explanationEn: 'The text highlights Carson’s album as a novel intersection of academic research and hip-hop, showing its innovation.',
    explanationAr: 'يركز النص على ابتكار كارسون الفريد في تقديم أطروحة أكاديمية في قالب ألبوم راب.',
    solutionStepsEn: ['Recognize the unique academic achievement.', 'Choice C best captures the purpose.'],
    solutionStepsAr: ['التعرف على الابتكار الأكاديمي.', 'الخيار ج هو الخيار المباشر.']
  },
  {
    id: 1107,
    domain: 'information-ideas',
    category: 'main-idea',
    difficulty: 'Hard',
    questionEn: 'Mauro Bernabei and colleagues analyzed ancient oak planks found during excavations in Rome and determined they originated from the Jura mountains. What conclusion does the team’s findings support?',
    questionAr: 'حلل مورو برنابي وفريقه ألواح بلوط قديمة تم العثور عليها في تنقيبات بروما وحددوا أنها أتت من جبال جورا. ما الاستنتاج الذي تدعمه نتائج الفريق؟',
    options: [
      { textEn: 'A) It presents a conclusion about Roman trade routes based on the team’s findings.', textAr: 'أ) تقديم استنتاج حول طرق التجارة الرومانية بناءً على ما توصل إليه الفريق.' },
      { textEn: 'B) Romans preferred local timber over imported timber.', textAr: 'ب) الرومان كانوا يفضلون الأخشاب المحلية.' },
      { textEn: 'C) Oak trees were extinct in ancient Italy.', textAr: 'ج) اشجار البلوط كانت منقرضة في إيطاليا.' },
      { textEn: 'D) Excavations in Rome are rarely successful.', textAr: 'د) التنقيبات في روما نادراً ما تنجح.' }
    ],
    correctAnswer: 0,
    explanationEn: 'Tracing timber imported from distant mountains provides evidence of extensive long-distance Roman timber trade routes.',
    explanationAr: 'استيراد الأخشاب من جبال بعيدة إلى روما يثبت ويقدم استنتاجاً عن شبكات وطرق التجارة الرومانية.',
    solutionStepsEn: ['Connect imported wood location with trade network conclusions.', 'Select A.'],
    solutionStepsAr: ['ربط مصدر الخشب الخارجي بطرق التجارة الرومانية.', 'اختيار أ.']
  },
  {
    id: 1108,
    domain: 'information-ideas',
    category: 'main-idea',
    difficulty: 'Medium',
    questionEn: 'The passage discusses how Indigenous politicians in the United States often work within existing political parties, whereas in Canada and Latin America, Indigenous advocates have created independent political movements. What is the primary purpose of this comparison?',
    questionAr: 'يناقش النص كيف يعمل السياسيون السكان الأصليون في أمريكا ضمن الأحزاب القائمة، بينما أسس السياسيون في كندا وأمريكا اللاتينية أحزاباً مستقلة. ما الغرض من هذه المقارنة؟',
    options: [
      { textEn: 'A) To argue one system is objectively superior.', textAr: 'أ) الادعاء بأن أحد النظامين أفضل بوضوح.' },
      { textEn: 'B) To prove Indigenous representation is declining.', textAr: 'ب) إثبات أن تمثيل السكان الأصليين ينخفض.' },
      { textEn: 'C) To highlight two approaches to achieving political representation for Indigenous people', textAr: 'ج) تسليط الضوء على نهجين مختلفين لتحقيق التمثيل السياسي للسكان الأصليين.' },
      { textEn: 'D) To recommend merging electoral systems.', textAr: 'د) التوصية بدمج الأنظمة الانتخابية.' }
    ],
    correctAnswer: 2,
    explanationEn: 'The text compares the two different regional strategies used to achieve political representation.',
    explanationAr: 'المقارنة تستعرض الأسلوبين والنهجين المختلفين المستخدَمين للتمثيل السياسي.',
    solutionStepsEn: ['Contrast US strategy with Canada/Latin America strategy.', 'Choice C summarizes the 2 approaches.'],
    solutionStepsAr: ['مقارنة الأسلوبين لتسليط الضوء عليهما.', 'الخيار ج هو الإجابة.']
  },
  {
    id: 1109,
    domain: 'craft-structure',
    category: 'text-structure',
    difficulty: 'Hard',
    questionEn: 'Text 1 attributes the bright pink color of flamingos solely to the quantity of brine shrimp they consume. Text 2 notes that liver enzymes and carotenoid metabolic efficiency also play major roles in color intensity. How does Text 2 respond to Text 1?',
    questionAr: 'النص 1 يعزو اللون الوردي للبشروش (الفلامنجو) فقط إلى كمية روبيان المالح التي يأكلها. النص 2 يوضح أن إنزيمات الكبد وكفاءة الأيض تلعب أيضاً دوراً كبيراً. كيف يرد النص 2 على النص 1؟',
    options: [
      { textEn: 'A) By denying that diet has any effect on coloration.', textAr: 'أ) بنفي أن الغذاء له أي تأثير على اللون.' },
      { textEn: 'B) By demonstrating that brine shrimp are toxic to flamingos.', textAr: 'ب) بإثبات أن الروبيان سام للبشروش.' },
      { textEn: 'C) By pointing out that the amount of shrimp eaten isn’t the only thing that influences flamingos’ coloring', textAr: 'ج) بالإشارة إلى أن كمية الروبيان المأكولة ليست الشيء الوحيد الذي يؤثر على تلوين الفلامنجو.' },
      { textEn: 'D) By asserting that flamingos in captivity are always white.', textAr: 'د) بالإصرار على أن الفلامنجو في الأسر يكون أبيض دائماً.' }
    ],
    correctAnswer: 2,
    explanationEn: 'Text 2 broadens the explanation by showing internal biological processes matter alongside diet quantity.',
    explanationAr: 'النص 2 يوضح أن النظام الغذائي ليس المتغير الوحيد، بل توجد إنزيمات وعوامل أيضية أخرى تؤثر على اللون.',
    solutionStepsEn: ['Identify Text 2’s nuanced expansion.', 'Choice C correctly states that shrimp amount isn’t the sole factor.'],
    solutionStepsAr: ['تحديد رد النص 2 الموسع.', 'الخيار ج يوضح أن التغذية ليست العامل الوحيد.']
  },
  {
    id: 1110,
    domain: 'information-ideas',
    category: 'inference',
    difficulty: 'Hard',
    questionEn: 'Researchers Marissa Sharif and James Maddux examined discretionary free time. While some assume all unassigned hours boost well-being, their findings indicate that how free time is spent matters significantly. How do Sharif and Maddux address common assumptions?',
    questionAr: 'فحص الباحثان ماريسا شريف وجيمس ماددوكس وقت الفراغ الاختياري. وبينما يفترض البعض أن كل الساعات الحرة تزيد الرفاهية، تشير نتائجهم إلى أن كيفية قضاء الوقت أهم. كيف يتعامل الباحثان مع الفرضية الشائعة؟',
    options: [
      { textEn: 'A) By advocating for zero leisure hours.', textAr: 'أ) بالدعوة لإلغاء ساعات الترفيه.' },
      { textEn: 'B) By asserting all work is productive.', textAr: 'ب) بالتأكيد على أن كل العمل منتج.' },
      { textEn: 'C) By warning against making an overly broad assumption, as there is no clear consensus in distinguishing between productive and unproductive activities', textAr: 'ج) بالتحذير من اتخاذ افترض واسع النطاق بشكل مفرط، حيث لا يوجد إجماع واضح حول التمييز بين الأنشطة المنتجة وغير المنتجة.' },
      { textEn: 'D) By claiming strict schedules guarantee happiness.', textAr: 'د) بالادعاء بأن الجداول الصارمة تضمن السعادة.' }
    ],
    correctAnswer: 2,
    explanationEn: 'They caution against blanket assumptions about free time, stressing nuance in how leisure activities impact individuals.',
    explanationAr: 'يحذر الباحثان من الافتراضات الشاملة المفرطة، مؤكدين أن التأثير يعتمد على نوعية النشاط المنفذ.',
    solutionStepsEn: ['Analyze researchers’ counter-perspective.', 'Choice C directly expresses the warning against overly broad assumptions.'],
    solutionStepsAr: ['تحليل موقف الباحثين المنبه.', 'الخيار ج يمثل الإجابة الدقيقة.']
  },
  {
    id: 1111,
    domain: 'information-ideas',
    category: 'main-idea',
    difficulty: 'Medium',
    questionEn: 'Kathleen Morrill and her team sequenced dog genomes and surveyed behavior, finding that breed explains only 9% of behavioral variation among individual dogs. What main point does this finding support?',
    questionAr: 'قامت كاثلين موريل وفريقها بتسلسل جينات الكلاب واستطلاع سلوكها، ووجدوا أن السلالة تفسر 9% فقط من تباين السلوك بين الكلاب الفردية. ما النقطة الرئيسية التي تدعمها هذه النتيجة؟',
    options: [
      { textEn: 'A) Dog breeds are completely genetically identical.', textAr: 'أ) سلالات الكلاب متطابقة جينياً بالكامل.' },
      { textEn: 'B) Research fails to confirm a commonly held belief about dog breeds and behavior.', textAr: 'ب) البحث يفشل في تأكيد الاعتقاد الشائع والراسخ حول ارتباط سلالة الكلب بسلوكه.' },
      { textEn: 'C) Training has no influence on dog temperament.', textAr: 'ج) التدريب ليس له أي تأثير على مزاج الكلب.' },
      { textEn: 'D) Purebred dogs are more aggressive than mixed breeds.', textAr: 'د) الكلاب ناصعة النسب أكثر عدوانية.' }
    ],
    correctAnswer: 1,
    explanationEn: 'The low percentage (9%) challenges the widely held popular belief that a dog’s breed dictates its personality and behavior.',
    explanationAr: 'نسبة 9% الضعيفة تنفي الاعتقاد الفكري السائد بأن السلالة هي التابع المحدد لسلوك الكلب.',
    solutionStepsEn: ['9% impact is very small.', 'This refutes popular beliefs about breed-determined behavior.'],
    solutionStepsAr: ['تأثير 9% ضعيف جداً.', 'ينفي الفكرة السائدة عن السلالة والسلوك.']
  },
  {
    id: 1112,
    domain: 'information-ideas',
    category: 'inference',
    difficulty: 'Hard',
    questionEn: 'Harshad Puranik studied workplace interruptions and noted that while interruptions break focus, helpful interactions foster team camaraderie and collaboration. What conclusion can be drawn?',
    questionAr: 'درس هارشاد بورانيك المقاطعات في مكان العمل وأوضح أنه على الرغم من أنها تشتت التركيز، فإن التفاعلات المتعاونة تعزز الزمالة والتعاون. ما الاستنتاج المنطقي؟',
    options: [
      { textEn: 'A) The interpersonal benefits of some interruptions in the workplace may offset the perceived negative effects.', textAr: 'أ) الفوائد الشخصية والاجتماعية لبعض المقاطعات في العمل قد تعوض وتغطي التأثيرات السلبية الظاهرة.' },
      { textEn: 'B) All workplace chatter should be banned.', textAr: 'ب) يجب حظر كل المحادثات في العمل.' },
      { textEn: 'C) Focus is unnecessary for high job performance.', textAr: 'ج) التركيز غير مهم للأداء الوظيفي.' },
      { textEn: 'D) Remote work completely eliminates workplace interruptions.', textAr: 'د) العمل عن بعد يلغي تماماً المقاطعات.' }
    ],
    correctAnswer: 0,
    explanationEn: 'Social bonding and collaborative benefits can counterbalance the lost time/focus caused by workplace interruptions.',
    explanationAr: 'الفوائد الاجتماعية والتعاونية قد تعوض السلبيات الناتجة عن تشتت التركيز.',
    solutionStepsEn: ['Weigh pros (camaraderie) against cons (focus loss).', 'Choice A correctly identifies offsetting benefits.'],
    solutionStepsAr: ['موازنة الإيجابيات الاجتماعية بالسلبيات.', 'الخيار أ يمثل الاستنتاج المباشر.']
  },
  {
    id: 1113,
    domain: 'standard-english',
    category: 'grammar',
    difficulty: 'Easy',
    questionEn: 'Inventor Richard Spikes patented numerous innovations, _______ an automatic gearshift and an improved brake system for buses.',
    questionAr: 'حصل المخترع ريتشارد سبايكس على براءات اختراع للعديد من الابتكارات، _______ ناقل حركة أوتوماتيكي ونظام فرامل مطور للحافلات.',
    options: [
      { textEn: 'A) included', textAr: 'أ) included' },
      { textEn: 'B) includes', textAr: 'ب) includes' },
      { textEn: 'C) including', textAr: 'ج) بما فيها / متضمنةً (including)' },
      { textEn: 'D) contain', textAr: 'د) contain' }
    ],
    correctAnswer: 2,
    explanationEn: 'The prepositional/participial modifier "including" introduces exemplifying items in a list.',
    explanationAr: 'اسم الفاعل / أداة التقديم "including" تُستخدم لإدراج الأمثلة التوضيحية.',
    solutionStepsEn: ['Select "including" to introduce list examples.'],
    solutionStepsAr: ['اختيار including لتقديم الأمثلة.']
  },
  {
    id: 1114,
    domain: 'standard-english',
    category: 'grammar',
    difficulty: 'Easy',
    questionEn: 'The electromagnetic radiation that _______ during radioactive decay can be detected using specialized Geiger counters.',
    questionAr: 'الإشعاع الكهرومغناطيسي الذي _______ أثناء التحلل الإشعاعي يمكن اكتشافه باستخدام أجهزة جايجر المتخصصة.',
    options: [
      { textEn: 'A) occurs', textAr: 'أ) يحدث (occurs)' },
      { textEn: 'B) occur', textAr: 'ب) يحدث للجمع (occur)' },
      { textEn: 'C) occurring', textAr: 'ج) أثناء حدوثه (occurring)' },
      { textEn: 'D) are occurring', textAr: 'د) يحدثون (are occurring)' }
    ],
    correctAnswer: 0,
    explanationEn: 'The relative clause modifies singular subject "radiation", requiring singular present verb "occurs".',
    explanationAr: 'الفاعل المفرد "radiation" يتطلب الفعل المضارع المفرد "occurs".',
    solutionStepsEn: ['Singular subject "radiation" -> "occurs".'],
    solutionStepsAr: ['الفاعل مفرد الإشعاع -> occurs.']
  },
  {
    id: 1115,
    domain: 'standard-english',
    category: 'grammar',
    difficulty: 'Medium',
    questionEn: 'Emperor penguins launch themselves out of freezing water onto ice sheets at incredible speeds. How _______',
    questionAr: 'تطلق بطاريق الإمبراطور نفسها خارج المياه المتجمدة نحو الصفائح الجليدية بسرعات مذهلة. كيف _______',
    options: [
      { textEn: 'A) they are able to move so fast.', textAr: 'أ) they are able to move so fast.' },
      { textEn: 'B) are they able to move so fast.', textAr: 'ب) are they able to move so fast.' },
      { textEn: 'C) they move so fast?', textAr: 'ج) they move so fast?' },
      { textEn: 'D) are they able to move so fast?', textAr: 'د) are they able to move so fast?' }
    ],
    correctAnswer: 3,
    explanationEn: 'Direct questions beginning with "How" require inverted auxiliary-subject order ("are they") and a question mark (?).',
    explanationAr: 'الأسئلة المباشرة البدائية بـ "How" تتطلب تقديم الفعل المساعد على الفاعل (are they) وتختم بعلامة استفهام (?).',
    solutionStepsEn: ['Direct question -> "are they" + question mark.'],
    solutionStepsAr: ['سؤال مباشر -> تقديم الفعل المساعد وصياغة الاستفهام.']
  },
  {
    id: 1116,
    domain: 'standard-english',
    category: 'grammar',
    difficulty: 'Medium',
    questionEn: 'On sunny summer days, black asphalt roofs absorb intense solar radiation, heating the surrounding air _______ a light-colored reflective coating can lower roof temperatures by up to 50°F.',
    questionAr: 'في أيام الصيف المشمسة، تمتص الأسقف الأسفلتية السوداء الإشعاع الشمسي الكثيف وتسخن الهواء المحيط _______ إضافة غطاء عاكس فاتح اللون يمكن أن يخفض حرارة السقف حتى 50 درجة.',
    options: [
      { textEn: 'A) temperature, adding', textAr: 'أ) temperature, adding' },
      { textEn: 'B) temperature adding', textAr: 'ب) temperature adding' },
      { textEn: 'C) temperature. Adding', textAr: 'ج) temperature. Adding' },
      { textEn: 'D) temperature; adding,', textAr: 'د) temperature; adding,' }
    ],
    correctAnswer: 2,
    explanationEn: 'Two independent clauses must be separated by a period or semicolon to prevent a run-on sentence.',
    explanationAr: 'جملتان مستقلتان كلياً يجب فصلهما بنقطة (period) لبدء جملة جديدة وتجنب الجمل التجميعية الخاطئة.',
    solutionStepsEn: ['Identify two independent complete thoughts.', 'Separate with period: "temperature. Adding".'],
    solutionStepsAr: ['فصل الجملتين المستقلتين بنقطة.']
  },
  {
    id: 1117,
    domain: 'expression-ideas',
    category: 'transitions',
    difficulty: 'Easy',
    questionEn: 'Visual artist Laetitia Ky creates intricate sculptures using her own hair. _______ she once sculpted her locks into a life-sized pair of hands holding a phone.',
    questionAr: 'تبدع الفنانة البصرية ليتيشيا كاي منحوتات معقدة باستخدام شعرها. _______ قامت في إحدى المرات بنحت شعرها على شكل يدين بالحجم الطبيعي تمسكان بهاتف.',
    options: [
      { textEn: 'A) In contrast,', textAr: 'أ) في المقابل (In contrast,)' },
      { textEn: 'B) Therefore,', textAr: 'ب) لذلك (Therefore,)' },
      { textEn: 'C) For example,', textAr: 'ج) على سبيل المثال (For example,)' },
      { textEn: 'D) Meanwhile,', textAr: 'د) في هذه الأثناء (Meanwhile,)' }
    ],
    correctAnswer: 2,
    explanationEn: 'Sculpting hair into hands holding a phone is a specific example illustrating the general statement about her intricate hair art.',
    explanationAr: 'نحت الشعر على شكل يدين يمثل مثالاً توضيحياً محدداً لبيان فنها المعقد.',
    solutionStepsEn: ['General claim -> specific instance -> "For example,".'],
    solutionStepsAr: ['تقديم مثال توضيحي محدد -> For example,']
  },
  {
    id: 1118,
    domain: 'expression-ideas',
    category: 'transitions',
    difficulty: 'Easy',
    questionEn: 'Phytoplankton absorb carbon dioxide at the ocean surface during photosynthesis. _______ after they die, the phytoplankton sink to the deep ocean floor, locking carbon away for centuries.',
    questionAr: 'تمتص العوالق النباتية ثاني أكسيد الكربون عند سطح المحيط أثناء البناء الضوئي. _______ بعد موتها، تغرق العوالق إلى قاع المحيط العميق، محتجزة الكربون لقرون.',
    options: [
      { textEn: 'A) In fact,', textAr: 'أ) في الواقع (In fact,)' },
      { textEn: 'B) Otherwise,', textAr: 'ب) وإلا (Otherwise,)' },
      { textEn: 'C) For instance,', textAr: 'ج) كمثال (For instance,)' },
      { textEn: 'D) Then,', textAr: 'د) ثم بعد ذلك (Then,)' }
    ],
    correctAnswer: 3,
    explanationEn: 'Sinking to the seafloor occurs chronologically after photosynthesis at the surface. "Then," indicates sequential order.',
    explanationAr: 'الغرق لقاع المحيط يحدث بالتتابع الزمني بعد البناء الضوئي، ولذا أداة الربط "Then," تعبر عن التتابع الزمني.',
    solutionStepsEn: ['Chronological sequence: surface absorption -> death & sinking.', 'Select "Then,".'],
    solutionStepsAr: ['تتابع زمني -> Then,']
  },
  {
    id: 1119,
    domain: 'expression-ideas',
    category: 'rhetorical-synthesis',
    difficulty: 'Hard',
    questionEn: 'A student is writing a essay about J.R.R. Tolkien’s novel The Hobbit. The student wants to contrast the function of the map at the beginning of the book with the map at the end. Which choice best accomplishes this goal?',
    questionAr: 'يكتب طالب مقالاً عن رواية J.R.R. Tolkien "The Hobbit". يريد الطالب المقارنة بين وظيفة الخريطة في بداية الكتاب والخريطة في نهايته. أي خيار يحقق هذا الهدف بأفضل شكل؟',
    options: [
      { textEn: 'A) The Hobbit’s opening map introduces readers to the fictional world they are about to enter, while the closing map allows them to reconstruct the story they have just read.', textAr: 'أ) تقدم الخريطة الافتتاحية في الهوبيت القراء إلى العالم الخيالي الذي يوشكون على دخوله، بينما تتيح لهم خريطة النهاية إعادة تركيبة وقائع القصة التي قرأوها للتو.' },
      { textEn: 'B) Both maps in The Hobbit were drawn by Tolkien himself.', textAr: 'ب) كلا الخريطتين رُسمتا بواسطة تولكين نفسه.' },
      { textEn: 'C) The Hobbit features two detailed maps of Middle-earth.', textAr: 'ج) يحتوي كتاب الهوبيت على خريطتين مفصلتين لأرض ميدل إيرث.' },
      { textEn: 'D) Maps are essential elements in high fantasy novels.', textAr: 'د) الخرائط عناصر أساسية في روايات الفنتازيا العليا.' }
    ],
    correctAnswer: 0,
    explanationEn: 'Choice A explicitly contrasts the introductory function of the first map with the retrospective narrative function of the second map.',
    explanationAr: 'الخيار أ يقارن صراحةً بين وظيفة التقديم للخريطة الأولى ووظيفة التذكر والمراجعة لخريطة النهاية.',
    solutionStepsEn: ['Identify prompt goal: contrast opening map with closing map.', 'Choice A directly contrasts opening vs closing map functions.'],
    solutionStepsAr: ['تحديد الهدف: المقارنة بين الخريطة الأولى والأخيرة.', 'الخيار أ ينجز المقارنة بدقة.']
  },
  {
    id: 1120,
    domain: 'information-ideas',
    category: 'inference',
    difficulty: 'Hard',
    questionEn: 'Researchers studied honeybee colonies in urban environments versus rural agricultural fields. They found that urban bees had access to a wider variety of flowering ornamental plants across all seasons. What generalization is supported?',
    questionAr: 'درس الباحثون خلايا نحل العسل في البيئات الحضرية مقابل الحقول الزراعية الريفية. وجدوا أن نحل المدن وصل إلى تنوع أكبر من النباتات المزهوة على مدار الفصول. ما التعميم الذي تدعمه هذه النتائج؟',
    options: [
      { textEn: 'A) Rural bees never produce honey.', textAr: 'أ) نحل الريف لا ينتج العسل أبداً.' },
      { textEn: 'B) Urban environments lack flowering plants in autumn.', textAr: 'ب) البيئات الحضرية تفتقر للنباتات في الخريف.' },
      { textEn: 'C) Pesticides are absent in rural farms.', textAr: 'ج) المبيدات غائبة في المزارع الريفية.' },
      { textEn: 'D) Honeybees are more likely to thrive in cities than in rural areas because the varied diet available in urban areas strengthens the bees’ immune systems.', textAr: 'د) من المرجح أن يزدهر نحل العسل في المدن مقارنة بالمناطق الريفية لأن النظام الغذائي المتنوع المتاح في المناطق الحضرية يعزز جهاز مناعة النحل.' }
    ],
    correctAnswer: 3,
    explanationEn: 'Diverse seasonal floral diet in urban centers translates to nutritional benefits and stronger immune health for bee colonies.',
    explanationAr: 'تنوع النظام الغذائي الزهري في الحضر ينعكس إيجاباً على تقوية مناعة النحل وازدهاره.',
    solutionStepsEn: ['Connect varied diet with colony health & thriving.', 'Choice D presents this reasonable generalization.'],
    solutionStepsAr: ['ربط النظام الغذائي المتنوع بالازدهار والمناعة.']
  }
];
