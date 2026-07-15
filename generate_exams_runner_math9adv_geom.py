# -*- coding: utf-8 -*-
import os
import json
from generate_general_math_exams import TEMPLATE, make_real_math_question

G9_ADV_MATH_TEMPLATE = TEMPLATE.replace("الحادي عشر", "التاسع")\
                               .replace("11", "9")\
                               .replace("Grade 11", "Grade 9")\
                               .replace("عام", "متقدم")\
                               .replace("General", "Advanced")\
                               .replace("الصف الحادي عشر عام", "الصف التاسع متقدم")\
                               .replace("رياضيات الصف 11 عام", "رياضيات الصف 9 متقدم")

LESSONS = [
    {"id": "9Adv-geom-T1-1.1-exam", "title_ar": "الدرس 1-1: المنصفات العمودية في المثلث", "title_en": "Lesson 1-1: Perpendicular Bisectors", "desc_ar": "اختبار المنصفات العمودية ونظرية مركز الدائرة المحيطة بالمسائل الحسابية والرسوم الهندسية.", "chapter": 1, "lesson": 1, "topics": ["نظرية المنصف العمودي", "عكس نظرية المنصف العمودي", "مركز الدائرة المحيطة (Circumcenter)", "إحداثيات مركز الدائرة المحيطة", "مسائل متقدمة وتحليل هندسي"]},
    {"id": "9Adv-geom-T1-1.2-exam", "title_ar": "الدرس 1-2: منصفات الزوايا في المثلث", "title_en": "Lesson 1-2: Angle Bisectors", "desc_ar": "اختبار نظريات منصف الزاوية ومركز الدائرة الداخلية بالمسائل الحسابية والرسوم الهندسية.", "chapter": 1, "lesson": 2, "topics": ["نظرية منصف الزاوية", "عكس نظرية منصف الزاوية", "مركز الدائرة الداخلية (Incenter)", "حساب الزوايا والمسافات بمركز الدائرة الداخلية", "مسائل تفكير عليا للزوايا"]},
    {"id": "9Adv-geom-T1-1.3-exam", "title_ar": "الدرس 1-3: القطع المتوسطة والارتفاعات في المثلث", "title_en": "Lesson 1-3: Medians and Altitudes", "desc_ar": "اختبار حسابات مركز الثقل وملتقى الارتفاعات بالمسائل الحسابية والرسوم الهندسية.", "chapter": 1, "lesson": 3, "topics": ["نظرية مركز الثقل (Centroid)", "حساب أجزاء القطع المتوسطة", "ملتقى الارتفاعات (Orthocenter)", "إحداثيات ملتقى الارتفاعات في المستوى", "مسائل برهان وتفكير عليا"]},
    {"id": "9Adv-geom-T1-1.4-exam", "title_ar": "الدرس 1-4: المتباينات في مثلث واحد", "title_en": "Lesson 1-4: Inequalities in One Triangle", "desc_ar": "اختبار العلاقات بين الزوايا والأضلاع في المثلث ومتباينة الزاوية الخارجية.", "chapter": 1, "lesson": 4, "topics": ["متباينة الزاوية الخارجية للمثلث", "العلاقة بين أطوال الأضلاع وقياسات الزوايا", "ترتيب الزوايا والأضلاع جبرياً", "تطبيقات حياتية للمتباينات", "مسائل مهارات تفكير عليا"]},
    {"id": "9Adv-geom-T1-1.5-exam", "title_ar": "الدرس 1-5: البرهان غير المباشر", "title_en": "Lesson 1-5: Indirect Proof", "desc_ar": "اختبار البرهان غير المباشر وخطوات الافتراض والوصول إلى التناقض بالمسائل الرياضية.", "chapter": 1, "lesson": 5, "topics": ["كتابة الفرضية الأساسية للبرهان غير المباشر", "البرهان غير المباشر في الجبر والأعداد", "البرهان غير المباشر في الهندسة", "تحديد التناقض في المجموعات والمنطق", "مسائل مهارات تفكير عليا للبرهان غير المباشر"]},
    {"id": "9Adv-geom-T1-1.6-exam", "title_ar": "الدرس 1-6: متباينة المثلث", "title_en": "Lesson 1-6: The Triangle Inequality", "desc_ar": "اختبار شروط تكوين المثلث ومدى طول الضلع الثالث بالمسائل الحسابية والرسوم الهندسية.", "chapter": 1, "lesson": 6, "topics": ["تحديد إمكانية تشكيل مثلث من ثلاثة أطوال", "متباينة المثلث مع الجبر والرموز", "إيجاد مدى طول الضلع الثالث", "تطبيقات متباينة المثلث في مواقف حياتية", "مسائل تفكير عليا للمتباينات"]},
    {"id": "9Adv-geom-T1-1.7-exam", "title_ar": "الدرس 1-7: المتباينات في مثلثين", "title_en": "Lesson 1-7: Inequalities in Two Triangles", "desc_ar": "اختبار نظرية المتمصلة (Hinge Theorem) وعكسها للمقارنة بين مثلثين بالمسائل الحسابية والرسوم الهندسية.", "chapter": 1, "lesson": 7, "topics": ["نظرية المتمصلة (Hinge Theorem / SAS Inequality)", "عكس نظرية المتمصلة (SSS Inequality)", "إيجاد مدى قيم المتغيرات باستعمال المتمصلة", "تطبيقات عملية للمتمصلة (الأبواب، الرافعات)", "مسائل تفكير عليا لخصائص المتباينات في مثلثين"]},
    {"id": "9Adv-geom-T1-2.1-exam", "title_ar": "الدرس 2-1: زوايا المضلعات", "title_en": "Lesson 2-1: Angles of Polygons", "desc_ar": "اختبار مجموع قياسات الزوايا الداخلية والخارجية للمضلعات المحدبة بالمسائل الحسابية والرسوم الهندسية.", "chapter": 2, "lesson": 1, "topics": ["مجموع قياسات الزوايا الداخلية لمضلع محدب", "قياس الزاوية الداخلية لمضلع منتظم", "مجموع قياسات الزوايا الخارجية لمضلع", "حساب عدد أضلاع المضلع بمعلومية زواياه", "مسائل تفكير عليا لزوايا المضلعات"]},
    {"id": "9Adv-geom-T1-2.2-exam", "title_ar": "الدرس 2-2: متوازيات الأضلاع", "title_en": "Lesson 2-2: Parallelograms", "desc_ar": "اختبار خصائص أضلاع وزوايا وأقطار متوازي الأضلاع بالمسائل الحسابية والرسوم الهندسية.", "chapter": 2, "lesson": 2, "topics": ["خصائص الأضلاع المتقابلة والزوايا المتقابلة", "الزوايا المتتالية في متوازي الأضلاع", "خصائص أقطار متوازي الأضلاع وتناصفها", "تطبيقات حياتية لمتوازي الأضلاع", "مسائل برهان وتفكير عليا"]},
    {"id": "9Adv-geom-T1-2.3-exam", "title_ar": "الدرس 2-3: تمييز متوازي الأضلاع", "title_en": "Lesson 2-3: Tests for Parallelograms", "desc_ar": "اختبار شروط إثبات أن الشكل الرباعي متوازي أضلاع بالمسائل الحسابية والرسوم الهندسية.", "chapter": 2, "lesson": 3, "topics": ["شروط إثبات متوازي الأضلاع (أضلاع، زوايا، أقطار)", "استخدام شروط التمييز لإيجاد قيم المجاهيل", "إثبات متوازي الأضلاع في الهندسة الإحداثية", "تطبيقات عملية لتمييز متوازي الأضلاع", "مسائل تفكير عليا للشروط الناقصة"]},
    {"id": "9Adv-geom-T1-2.4-exam", "title_ar": "الدرس 2-4: المستطيلات", "title_en": "Lesson 2-4: Rectangles", "desc_ar": "اختبار خصائص المستطيل وتطابق أقطاره بالمسائل الحسابية والرسوم الهندسية.", "chapter": 2, "lesson": 4, "topics": ["خصائص زوايا وأقطار المستطيل المتطابقة", "حل مسائل جبرية لأقطار المستطيل وزواياه", "إثبات المستطيل في الهندسة الإحداثية", "تطبيقات عملية وتصاميم هندسية للمستطيلات", "مسائل مهارات تفكير عليا للمستطيل"]},
    {"id": "9Adv-geom-T1-2.5-exam", "title_ar": "الدرس 2-5: المعين والمربع", "title_en": "Lesson 2-5: Rhombi and Squares", "desc_ar": "اختبار خصائص المعين والمربع المتعامدة الأقطار بالمسائل الحسابية والرسوم الهندسية.", "chapter": 2, "lesson": 5, "topics": ["خصائص المعين (أضلاع متطابقة وأقطار متعامدة)", "زوايا المعين وأقطاره المنصفة لها", "خصائص المربع وحسابات محيطه وأقطاره", "تصنيف الأشكال الرباعية في المستوى الإحداثي", "مسائل تفكير عليا للمعين والمربع"]},
    {"id": "9Adv-geom-T1-2.6-exam", "title_ar": "الدرس 2-6: شبه المنحرف وشكل الطائرة الورقية", "title_en": "Lesson 2-6: Trapezoids and Kites", "desc_ar": "اختبار خصائص شبه المنحرف متطابق الساقين والقطعة المنصفة وشكل الطائرة الورقية بالمسائل والرسوم الهندسية.", "chapter": 2, "lesson": 6, "topics": ["شبه المنحرف متطابق الساقين وخصائص زواياه وأقطاره", "نظرية القطعة المنصفة لشبه المنحرف (Trapezoid Midsegment)", "شبه المنحرف في الهندسة الإحداثية", "خصائص الطائرة الورقية (Kite) وتعامد أقطارها", "مسائل تفكير عليا لشبه المنحرف والطائرة الورقية"]},
    {"id": "9Adv-geom-T1-3.1-exam", "title_ar": "الدرس 3-1: التمدد", "title_en": "Lesson 3-1: Dilations", "desc_ar": "اختبار التمدد ومعامل المقياس وتكبير وتصغير الأشكال في المستوى الإحداثي بالمسائل والرسوم الهندسية.", "chapter": 3, "lesson": 1, "topics": ["تعريف التمدد وتحديد معامل القياس k (تكبير أو تصغير)", "تمثيل التمدد بيانياً وإيجاد إحداثيات الصورة", "حساب معامل تمدد مجهول من الرسم", "تطبيقات حياتية للتكبير والتصغير والمخططات", "مسائل مهارات تفكير عليا للتمدد"]},
    {"id": "9Adv-geom-T1-3.2-exam", "title_ar": "الدرس 3-2: الأشكال المتشابهة", "title_en": "Lesson 3-2: Similar Polygons", "desc_ar": "اختبار شروط تشابه المضلعات ونسب المحيطات بالمسائل الحسابية والرسوم الهندسية.", "chapter": 3, "lesson": 2, "topics": ["شروط تشابه المضلعات وتطابق الزوايا وتناسب الأضلاع", "كتابة عبارات التشابه وإيجاد معامل التشابه (Scale Factor)", "حل مسائل لإيجاد أطوال الأضلاع المجهولة بالتناسب", "نسبة محيطات الأشكال المتشابهة ونظرياتها", "مسائل مهارات تفكير عليا للمساحات والمحيطات"]},
    {"id": "9Adv-geom-T1-3.3-exam", "title_ar": "الدرس 3-3: المثلثات المتشابهة بـ AA", "title_en": "Lesson 3-3: Similar Triangles: AA Similarity", "desc_ar": "اختبار إثبات تشابه المثلثات بزاويتين متطابقتين (AA) وتطبيقات القياس غير المباشر بالمسائل والرسوم الهندسية.", "chapter": 3, "lesson": 3, "topics": ["مسلمة التشابه بزاويتين متطابقتين (AA Similarity)", "إيجاد قياسات الزوايا والأضلاع المجهولة في مثلثات متشابهة", "تطبيقات القياس غير المباشر (الظلال، المرايا)", "البرهان الإحداثي لتشابه المثلثات بـ AA", "مسائل مهارات تفكير عليا للتشابه بـ AA"]},
    {"id": "9Adv-geom-T1-3.4-exam", "title_ar": "الدرس 3-4: تشابه المثلثات بـ SSS و SAS", "title_en": "Lesson 3-4: Similar Triangles: SSS and SAS Similarity", "desc_ar": "اختبار نظريات التشابه بثلاثة أضلاع متناسبة (SSS) وضلعين متناسبين مع زاوية محصورة متطابقة بالمسائل والرسوم الهندسية.", "chapter": 3, "lesson": 4, "topics": ["نظرية التشابه بتناسب الأضلاع الثلاثة المتناظرة (SSS)", "نظرية التشابه بضلعين متناسبين وتطابق الزاوية المحصورة بينهما (SAS)", "حل المسائل الجبرية لإيجاد قيم المجاهيل في المثلثات المتشابهة بـ SSS أو SAS", "نمذجة وتصميم الهياكل الهندسية المتشابهة وحساب نسب الأبعاد", "مسائل تفكير عليا والبراهين المركبة للتشابه"]},
    {"id": "9Adv-geom-T1-3.5-exam", "title_ar": "الدرس 3-5: التناسب في المثلث وأجزاء المثلثات المتشابهة", "title_en": "Lesson 3-5: Triangle Proportionality & Parts of Similar Triangles", "desc_ar": "اختبار نظرية التناسب في المثلث والقطع المنصفة وتناسب الارتفاعات والمنصفات والمتوسطات بالمسائل والرسوم الهندسية.", "chapter": 3, "lesson": 5, "topics": ["نظرية التناسب في المثلث (الضلع الموازي) وعكسها لتحديد التوازي", "نظرية القطعة المنصفة للمثلث (Triangle Midsegment)", "تناسب الارتفاعات والقطع المتوسطة ومنصفات الزوايا مع الأضلاع", "نظرية منصف زاوية المثلث وتقسيم الضلع المقابل بنسب متناسبة", "مسائل تفكير عليا وحل المسائل الجبرية المعقدة"]}
]

def make_svg_diagram(ch, les, part_idx):
    # Generates a customized, clean inline SVG diagram for the problem
    if ch == 1:
        if part_idx == 2: # Center of Circle / Circumcenter / Incenter / Centroid
            return """<div class='my-3 text-center'><svg viewBox='0 0 300 140' class='mx-auto w-full max-w-[220px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2'>
                <polygon points='60,110 240,110 150,30' fill='none' stroke='currentColor' stroke-width='2' class='text-indigo-600 dark:text-indigo-400'/>
                <circle cx='150' cy='83' r='4' fill='red'/>
                <text x='158' y='86' font-family='sans-serif' font-size='11' font-weight='bold' fill='red'>O</text>
                <text x='45' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>A</text>
                <text x='245' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>B</text>
                <text x='145' y='22' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>C</text>
            </svg></div>"""
        else: # Standard Triangle Diagram
            return """<div class='my-3 text-center'><svg viewBox='0 0 300 140' class='mx-auto w-full max-w-[220px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2'>
                <polygon points='60,110 240,110 150,30' fill='none' stroke='currentColor' stroke-width='2' class='text-indigo-600 dark:text-indigo-400'/>
                <line x1='150' y1='30' x2='150' y2='110' stroke='red' stroke-width='1.5' stroke-dasharray='3,3'/>
                <rect x='150' y='100' width='10' height='10' fill='none' stroke='red' stroke-width='1'/>
                <text x='45' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>A</text>
                <text x='245' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>B</text>
                <text x='145' y='22' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>C</text>
                <text x='145' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='red'>D</text>
            </svg></div>"""
    elif ch == 2:
        if les in [2, 3]: # Parallelogram
            return """<div class='my-3 text-center'><svg viewBox='0 0 300 140' class='mx-auto w-full max-w-[220px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2'>
                <polygon points='60,110 210,110 240,40 90,40' fill='none' stroke='currentColor' stroke-width='2' class='text-teal-600 dark:text-teal-400'/>
                <line x1='60' y1='110' x2='240' y2='40' stroke='gray' stroke-dasharray='2,2'/>
                <line x1='210' y1='110' x2='90' y2='40' stroke='gray' stroke-dasharray='2,2'/>
                <text x='45' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>A</text>
                <text x='215' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>B</text>
                <text x='245' y='35' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>C</text>
                <text x='75' y='35' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>D</text>
            </svg></div>"""
        elif les in [4, 5]: # Rectangle, Rhombus, Square
            return """<div class='my-3 text-center'><svg viewBox='0 0 300 140' class='mx-auto w-full max-w-[220px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2'>
                <polygon points='70,110 230,110 230,40 70,40' fill='none' stroke='currentColor' stroke-width='2' class='text-blue-600 dark:text-blue-400'/>
                <text x='55' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>A</text>
                <text x='235' y='120' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>B</text>
                <text x='235' y='35' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>C</text>
                <text x='55' y='35' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>D</text>
            </svg></div>"""
        else: # Trapezoid
            return """<div class='my-3 text-center'><svg viewBox='0 0 300 140' class='mx-auto w-full max-w-[220px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2'>
                <polygon points='50,115 250,115 210,40 90,40' fill='none' stroke='currentColor' stroke-width='2' class='text-rose-600 dark:text-rose-400'/>
                <line x1='70' y1='77.5' x2='230' y2='77.5' stroke='red' stroke-width='1.5'/>
                <text x='35' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>A</text>
                <text x='255' y='125' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>B</text>
                <text x='215' y='35' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>C</text>
                <text x='75' y='35' font-family='sans-serif' font-size='11' font-weight='bold' fill='currentColor'>D</text>
            </svg></div>"""
    else: # Similarity / Dilations
        return """<div class='my-3 text-center'><svg viewBox='0 0 300 140' class='mx-auto w-full max-w-[220px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2'>
            <polygon points='30,110 130,110 80,40' fill='none' stroke='currentColor' stroke-width='1.5' class='text-indigo-600 dark:text-indigo-400'/>
            <polygon points='160,110 260,110 210,40' fill='none' stroke='currentColor' stroke-width='1.5' class='text-indigo-600 dark:text-indigo-400'/>
            <text x='75' y='125' font-family='sans-serif' font-size='10' fill='currentColor'>T1</text>
            <text x='205' y='125' font-family='sans-serif' font-size='10' fill='currentColor'>T2</text>
        </svg></div>"""

def make_exam_questions(lesson):
    ch = lesson.get("chapter", 1)
    les = lesson.get("lesson", 1)
    topics = lesson["topics"]
    sections_json = []
    
    for part_idx in range(5):
        topic = topics[part_idx]
        questions = []
        for q_idx in range(4):
            q_num = part_idx * 4 + q_idx + 1
            q_data = make_real_math_question(topic, q_num, ch, les, part_idx, q_idx)
            questions.append(q_data)
            
        sections_json.append({
            "title": {
                "ar": f"🔹 الجزء {['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس'][part_idx]}: {topic}",
                "en": f"🔹 Part {part_idx+1}: {topic}"
            },
            "questions": questions
        })
        
    return {
        "title_ar": lesson["title_ar"],
        "title_en": lesson["title_en"],
        "desc_ar": lesson["desc_ar"],
        "sections": sections_json
    }

# Generate all 18 exams
for lesson in LESSONS:
    lesson_id = lesson["id"]
    dir_path = os.path.join("public", lesson_id)
    os.makedirs(dir_path, exist_ok=True)
    
    exam_data = make_exam_questions(lesson)
    exam_json_str = json.dumps(exam_data, ensure_ascii=False, indent=4)
    
    html_content = G9_ADV_MATH_TEMPLATE.replace("{LESSON_ID}", lesson_id)\
                                       .replace("{TITLE_AR}", lesson["title_ar"])\
                                       .replace("{TITLE_EN}", lesson["title_en"])\
                                       .replace("{DESC_AR}", lesson["desc_ar"])\
                                       .replace("{ORIGINAL_EXAM_DATA_JSON}", exam_json_str)
    
    file_path = os.path.join(dir_path, "index.html")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generated {file_path}")

print("SUCCESS: Dynamic Generation of 18 Grade 9 Advanced geometry exams completed.")
