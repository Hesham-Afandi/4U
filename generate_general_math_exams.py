import os
import json

TEMPLATE = """<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚡ Grade 11 General Math - {TITLE_EN} ({LESSON_ID})</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght=400;600;700;900&family=Inter:wght=400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Cairo', sans-serif; }
        body.en-mode { font-family: 'Inter', sans-serif; }
        .correct { background-color: #dcfce7 !important; border-color: #16a34a !important; }
        .incorrect { background-color: #fee2e2 !important; border-color: #dc2626 !important; }
        .formula { font-family: 'Times New Roman', serif; letter-spacing: 0.5px; direction: ltr; display: inline-block; font-style: italic; }
        .timer-warning { color: #dc2626 !important; animation: pulse 1s infinite; }
        @keyframes pulse { 50% { opacity: 0.7; } }
        @media print { .no-print { display: none !important; } }
        .success-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 0.875rem; }
        .grade-excellent { background: #dcfce7; color: #166534; }
        .grade-good { background: #fef3c7; color: #92400e; }
        .grade-pass { background: #dbeafe; color: #1e40af; }
        .grade-fail { background: #fee2e2; color: #991b1b; }
        .lang-switch {
            position: fixed; top: 16px; left: 16px; z-index: 100;
            background: white; padding: 6px; border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15); display: flex; gap: 4px;
            border: 2px solid #0d9488;
        }
        [dir="ltr"] .lang-switch { left: auto; right: 16px; }
        .lang-btn {
            padding: 6px 14px; border-radius: 20px; cursor: pointer; font-weight: bold;
            transition: all 0.3s; border: none; font-size: 0.875rem;
            background: transparent; color: #6b7280;
        }
        .lang-btn.active { background: #0d9488; color: white; box-shadow: 0 2px 6px rgba(13,148,136,0.4); }
        .lang-btn:hover:not(.active) { background: #f0fdfa; color: #0d9488; }
        .shuffle-badge {
            display: inline-block;
            background: linear-gradient(135deg, #f59e0b, #ef4444);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: bold;
            margin-right: 8px;
            animation: pulse 2s infinite;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 p-4 md:p-8 min-h-screen">

    <div class="lang-switch no-print">
        <button class="lang-btn active" onclick="setLanguage('ar')" id="btn-ar">عربي</button>
        <button class="lang-btn" onclick="setLanguage('en')" id="btn-en">EN</button>
    </div>

    <div id="timer-container" class="max-w-4xl mx-auto mb-4 text-center no-print">
        <div class="bg-white p-4 rounded-xl shadow-md inline-block border-2 border-teal-100">
            <span class="text-gray-600 ml-2" data-ar="⏱️ الوقت المتبقي:" data-en="⏱️ Time Remaining:">⏱️ الوقت المتبقي:</span>
            <span id="timer" class="text-2xl font-bold text-teal-600 font-mono">60:00</span>
            <span class="shuffle-badge" data-ar="🔀 أسئلة عشوائية" data-en="🔀 Random Questions">🔀 أسئلة عشوائية</span>
        </div>
    </div>

    <div class="max-w-4xl mx-auto mb-6 flex flex-wrap gap-3 justify-center no-print">
        <button onclick="toggleAnswers()" class="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-medium transition shadow cursor-pointer" data-ar="👁️ إظهار / إخفاء الإجابات" data-en="👁️ Show / Hide Answers">👁️ إظهار / إخفاء الإجابات</button>
        <button onclick="window.print()" class="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-medium transition shadow cursor-pointer" data-ar="🖨️ طباعة / PDF" data-en="🖨️ Print / PDF">🖨️ طباعة / PDF</button>
        <button onclick="reshuffleExam()" class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2 rounded-lg font-medium transition shadow cursor-pointer" data-ar="🔀 إعادة خلط الأسئلة" data-en="🔀 Reshuffle Questions">🔀 إعادة خلط الأسئلة</button>
    </div>

    <header class="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8 border-r-4 border-teal-600">
        <div class="text-center">
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2" data-ar="⚡ رياضيات الصف الحادي عشر عام" data-en="⚡ Grade 11 General Mathematics">⚡ رياضيات الصف الحادي عشر عام</h1>
            <h2 class="text-lg text-teal-600 font-semibold" data-ar="{TITLE_AR} (الفصل الدراسي الأول)" data-en="{TITLE_EN} (Term 1)">{TITLE_AR} (الفصل الدراسي الأول)</h2>
            <p class="text-sm text-gray-600 mt-2" data-ar="{DESC_AR}" data-en="{TITLE_EN} complete interactive test aligned with Ministry syllabus.">{DESC_AR}</p>
            <p class="text-xs text-orange-600 mt-2 font-semibold" data-ar="⚠️ ملاحظة: يتم خلط ترتيب الأسئلة والخيارات تلقائياً مع كل تحديث للصفحة" data-en="⚠️ Note: Questions and options are randomly shuffled on every page refresh">⚠️ ملاحظة: يتم خلط ترتيب الأسئلة والخيارات تلقائياً مع كل تحديث للصفحة</p>
        </div>
        <div class="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span><span data-ar="📅 التاريخ:" data-en="📅 Date:">📅 التاريخ:</span> <input type="text" class="border-b border-gray-400 bg-transparent w-28 text-center"></span>
            <span><span data-ar="👤 الاسم:" data-en="👤 Name:">👤 الاسم:</span> <input type="text" id="studentName" class="border-b border-gray-400 bg-transparent w-32 text-center" placeholder="Enter name"></span>
            <span><span data-ar="🏫 الشعبة:" data-en="🏫 Class:">🏫 الشعبة:</span> <input type="text" id="studentClass" class="border-b border-gray-400 bg-transparent w-28 text-center" placeholder="Class"></span>
            <span><span data-ar="⏱️ المدة: 60 دقيقة" data-en="⏱️ Duration: 60 min">⏱️ المدة: 60 دقيقة</span></span>
            <span><span data-ar="📊 המجموع: 100 درجة" data-en="📊 Total: 100 pts">📊 المجموع: 100 درجة</span></span>
        </div>
    </header>

    <main class="max-w-4xl mx-auto space-y-8" id="exam-content"></main>

    <div class="text-center no-print pb-8 mt-8">
        <button onclick="gradeExam()" class="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-10 py-4 rounded-xl font-bold shadow-xl transition transform hover:scale-105 cursor-pointer" data-ar="📝 تسليم وتصحيح الامتحان" data-en="📝 Submit & Grade Exam">📝 تسليم وتصحيح الامتحان</button>
    </div>

    <div id="results-panel" class="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-emerald-500 hidden no-print">
        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center" data-ar="📊 نتائج الامتحان" data-en="📊 Exam Results">📊 نتائج الامتحان</h2>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-blue-50 p-4 rounded-xl text-center"><p data-ar="اسم الطالب" data-en="Student Name">اسم الطالب</p><p id="res-name" class="font-bold text-xl text-teal-700">-</p></div>
            <div class="bg-purple-50 p-4 rounded-xl text-center"><p data-ar="التاريخ" data-en="Date">التاريخ</p><p id="res-date" class="font-bold text-xl text-purple-700">-</p></div>
            <div class="bg-emerald-50 p-4 rounded-xl text-center"><p data-ar="المجموع" data-en="Score">المجموع</p><p id="res-total" class="font-bold text-3xl text-emerald-600">0 / 100</p></div>
        </div>
        <div class="text-center mb-6">
            <span id="success-badge" class="success-badge grade-excellent">-</span>
            <p id="success-percent" class="text-4xl font-bold text-emerald-600 mt-2">100%</p>
            <p class="text-sm text-gray-500" data-ar="نسبة النجاح" data-en="Success Rate">نسبة النجاح</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl mb-6">
            <h3 class="font-bold text-lg mb-4 text-gray-800" data-ar="📈 تفصيل الأداء حسب القسم:" data-en="📈 Performance Breakdown:">📈 تفصيل الأداء حسب القسم:</h3>
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <span class="text-gray-700" data-ar="الجزء الأول: المفاهيم والقواعد الأساسية والتعريفات" data-en="Part 1: Basic Concepts, Rules, and Definitions">الجزء الأول: المفاهيم والقواعد الأساسية والتعريفات</span>
                    <span id="sec1-score" class="font-bold text-teal-600">0/4</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-700" data-ar="الجزء الثاني: العمليات الحسابية والحلول العددية الدقيقة" data-en="Part 2: Calculations and Exact Numerical Solutions">الجزء الثاني: العمليات الحسابية والحلول العددية الدقيقة</span>
                    <span id="sec2-score" class="font-bold text-teal-600">0/4</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-700" data-ar="الجزء الثالث: المهارات المتقدمة والتطبيقات والمسائل" data-en="Part 3: Advanced Skills, Applications, and Problems">الجزء الثالث: المهارات المتقدمة والتطبيقات والمسائل</span>
                    <span id="sec3-score" class="font-bold text-teal-600">0/4</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-700" data-ar="الجزء الرابع: النمذجة الرياضية والتمثيل البياني والمسائل العملية" data-en="Part 4: Mathematical Modeling, Graphing, and Practical Problems">الجزء الرابع: النمذجة الرياضية والتمثيل البياني والمسائل العملية</span>
                    <span id="sec4-score" class="font-bold text-teal-600">0/4</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-700" data-ar="الجزء الخامس: مهارات التفكير العليا والتحليل والربط المنطقي" data-en="Part 5: Higher-Order Thinking, Analysis, and Logical Connections">الجزء الخامس: مهارات التفكير العليا والتحليل والربط المنطقي</span>
                    <span id="sec5-score" class="font-bold text-teal-600">0/4</span>
                </div>
            </div>
        </div>
        <div class="text-center mb-6">
            <button id="sendEmailBtn" onclick="sendResultsToEmail()" class="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-3 rounded-xl font-bold shadow-xl transition transform hover:scale-105 cursor-pointer" data-ar="📧 إرسال النتائج للمعلم" data-en="📧 Send Results to Teacher">📧 إرسال النتائج للمعلم</button>
            <p id="emailStatus" class="text-sm mt-2 text-center font-medium"></p>
        </div>
        <div class="flex gap-3 justify-center">
            <button onclick="window.print()" class="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold" data-ar="🖨️ طباعة النتائج" data-en="🖨️ Print Results">🖨️ طباعة النتائج</button>
        </div>
    </div>

    <footer class="max-w-4xl mx-auto mt-10 mb-8 text-center text-gray-500 text-sm no-print">
        © <span data-ar="رياضيات الصف 11 عام | {TITLE_AR}" data-en="Grade 11 General Math | {TITLE_EN}">رياضيات الصف 11 عام | {TITLE_AR}</span> | Platform 4U Education
    </footer>

<script>
const PUBLIC_KEY = "Rb3Lq8tXaFmc5YHUH";
const SERVICE_ID = "service_w15m64i";
const TEMPLATE_ID = "template_5b0u2tq";
const TARGET_EMAIL = "mohammedhesham872@gmail.com";

emailjs.init(PUBLIC_KEY);

const originalExamData = {ORIGINAL_EXAM_DATA_JSON};

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let examData;
let correctAnswersMap = {};
let currentLang = 'ar';
let timeRemaining = 3600;
let timerInterval;

function prepareShuffledExam() {
    examData = JSON.parse(JSON.stringify(originalExamData));
    correctAnswersMap = {};
    let globalIdx = 0;
    
    examData.sections.forEach((section) => {
        section.questions = shuffleArray(section.questions);
        
        section.questions.forEach((q) => {
            const optionsWithCorrect = q.options.map((opt, idx) => ({
                option: opt,
                isCorrect: idx === q.correct
            }));
            
            const shuffledOptions = shuffleArray(optionsWithCorrect);
            q.options = shuffledOptions.map(o => o.option);
            
            const newCorrectIndex = shuffledOptions.findIndex(o => o.isCorrect);
            q.correct = newCorrectIndex;
            
            correctAnswersMap[globalIdx] = String.fromCharCode(97 + newCorrectIndex);
            globalIdx++;
        });
    });
}

function reshuffleExam() {
    prepareShuffledExam();
    renderExam();
    document.querySelectorAll('input[type="radio"]:checked').forEach(r => r.checked = false);
    document.getElementById('results-panel').classList.add('hidden');
    document.querySelectorAll('.correct, .incorrect').forEach(el => {
        el.classList.remove('correct', 'incorrect');
    });
    alert(currentLang === 'ar' 
        ? '🔀 تم إعادة خلط الأسئلة والخيارات بنجاح!' 
        : '🔀 Questions and options have been reshuffled successfully!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.getElementById('btn-ar').classList.toggle('active', lang === 'ar');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    document.body.classList.toggle('en-mode', lang === 'en');
    
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    renderExam();
}

function renderExam() {
    const container = document.getElementById('exam-content');
    const labels = {
        ar: { option: ['أ', 'ب', 'ج', 'د'], answer: '✅ الإجابة الصحيحة:' },
        en: { option: ['A', 'B', 'C', 'D'], answer: '✅ Correct Answer:' }
    };
    const lbl = labels[currentLang];
    const isRTL = currentLang === 'ar';
    
    let html = '';
    let globalIdx = 0;
    
    examData.sections.forEach((section) => {
        html += `
        <section class="bg-white p-6 rounded-xl shadow-lg">
            <h2 class="text-xl font-bold mb-4 text-teal-700">${section.title[currentLang]}</h2>
            <ol class="space-y-4 text-sm">`;
            
        section.questions.forEach((q) => {
            const borderSide = isRTL ? 'border-r-4 pr-4' : 'border-l-4 pl-4';
            html += `
                <li class="${borderSide} border-teal-500 py-2" id="q-${globalIdx}">
                    <strong>${globalIdx + 1}.</strong> ${q.q[currentLang]}<br>`;
                    
            q.options.forEach((opt, oIdx) => {
                const radioSide = isRTL ? 'mr-4 ml-2' : 'ml-4 mr-2';
                html += `
                    <label class="cursor-pointer block mt-1 ${isRTL ? 'mr-4' : 'ml-4'}">
                        <input type="radio" name="q${globalIdx}" value="${String.fromCharCode(97 + oIdx)}" class="${radioSide}"> 
                        ${lbl.option[oIdx]}) ${opt[currentLang]}
                    </label>`;
            });
            
            html += `
                    <div class="answer-box text-green-700 mt-2 font-medium hidden">
                        ${lbl.answer} ${lbl.option[q.correct]}) ${q.options[q.correct][currentLang]} — ${q.answer[currentLang]}
                    </div>
                </li>`;
            globalIdx++;
        });
        
        html += `
            </ol>
        </section>`;
    });
    
    container.innerHTML = html;
}

function startTimer() {
    document.getElementById('timer-container').style.display = 'block';
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const timerEl = document.getElementById('timer');
        timerEl.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
        if (timeRemaining <= 300) timerEl.classList.add('timer-warning');
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert(currentLang === 'ar' ? "انتهى الوقت! سيتم تسليم الامتحان تلقائياً." : "Time's up! Exam will be submitted automatically.");
            gradeExam();
        }
    }, 1000);
}

function toggleAnswers() {
    document.querySelectorAll('.answer-box').forEach(el => el.classList.toggle('hidden'));
}

function gradeExam() {
    let correctCount = 0;
    let sec1 = 0, sec2 = 0, sec3 = 0, sec4 = 0, sec5 = 0;
    
    for (let i = 0; i < 20; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const li = document.getElementById(`q-${i}`);
        const correctAnswer = correctAnswersMap[i];
        
        if (li) {
            const isCorrect = selected && selected.value === correctAnswer;
            
            if (isCorrect) {
                correctCount++;
                li.classList.add('correct');
                li.classList.remove('incorrect');
            } else {
                li.classList.add('incorrect');
                li.classList.remove('correct');
            }

            if (isCorrect) {
                if (i < 4) sec1++;
                else if (i < 8) sec2++;
                else if (i < 12) sec3++;
                else if (i < 16) sec4++;
                else sec5++;
            }
        }
    }

    const score = (correctCount / 20) * 100;
    const successRate = Math.round(score);
    
    document.getElementById('res-total').textContent = `${successRate} / 100`;
    document.getElementById('res-name').textContent = document.getElementById('studentName').value || (currentLang === 'ar' ? 'طالب' : 'Student');
    document.getElementById('res-date').textContent = new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-AE' : 'en-US');
    
    document.getElementById('sec1-score').textContent = `${sec1}/4`;
    document.getElementById('sec2-score').textContent = `${sec2}/4`;
    document.getElementById('sec3-score').textContent = `${sec3}/4`;
    document.getElementById('sec4-score').textContent = `${sec4}/4`;
    document.getElementById('sec5-score').textContent = `${sec5}/4`;
    
    const badge = document.getElementById('success-badge');
    const percent = document.getElementById('success-percent');
    percent.textContent = `${successRate}%`;
    
    if (currentLang === 'ar') {
        if (successRate >= 90) { badge.textContent = 'ممتاز'; badge.className = 'success-badge grade-excellent'; }
        else if (successRate >= 75) { badge.textContent = 'جيد جداً'; badge.className = 'success-badge grade-good'; }
        else if (successRate >= 50) { badge.textContent = 'جيد'; badge.className = 'success-badge grade-pass'; }
        else { badge.textContent = 'يحتاج تحسين'; badge.className = 'success-badge grade-fail'; }
    } else {
        if (successRate >= 90) { badge.textContent = 'Excellent'; badge.className = 'success-badge grade-excellent'; }
        else if (successRate >= 75) { badge.textContent = 'Very Good'; badge.className = 'success-badge grade-good'; }
        else if (successRate >= 50) { badge.textContent = 'Good'; badge.className = 'success-badge grade-pass'; }
        else { badge.textContent = 'Needs Improvement'; badge.className = 'success-badge grade-fail'; }
    }
    
    document.getElementById('results-panel').classList.remove('hidden');
    document.getElementById('results-panel').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('sendEmailBtn').classList.remove('hidden');
}

function sendResultsToEmail() {
    const btn = document.getElementById('sendEmailBtn');
    const status = document.getElementById('emailStatus');
    btn.disabled = true;
    btn.textContent = currentLang === 'ar' ? '⏳ جاري الإرسال...' : '📤 Sending...';

    const name = document.getElementById('studentName').value || 'N/A';
    const studentClass = document.getElementById('studentClass').value || 'N/A';
    const date = document.querySelector('input[type="text"]').value || new Date().toLocaleDateString();
    const score = document.getElementById('res-total').textContent;
    const successRate = document.getElementById('success-percent').textContent;
    const badge = document.getElementById('success-badge').textContent;

    const sectionNames = {
        ar: [
            "الجزء الأول: المفاهيم والقواعد الأساسية والتعريفات",
            "الجزء الثاني: العمليات الحسابية والحلول العددية الدقيقة",
            "الجزء الثالث: المهارات المتقدمة والتطبيقات والمسائل",
            "الجزء الرابع: النمذجة الرياضية والتمثيل البياني والمسائل العملية",
            "الجزء الخامس: مهارات التفكير العليا والتحليل والربط المنطقي"
        ],
        en: [
            "Part 1: Basic Concepts, Rules, and Definitions",
            "Part 2: Calculations and Exact Numerical Solutions",
            "Part 3: Advanced Skills, Applications, and Problems",
            "Part 4: Mathematical Modeling, Graphing, and Practical Problems",
            "Part 5: Higher-Order Thinking, Analysis, and Logical Connections"
        ]
    };
    const currentSectionNames = sectionNames[currentLang];

    let answersHTML = `
        <div style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: \${currentLang === 'ar' ? 'rtl' : 'ltr'}; text-align: \${currentLang === 'ar' ? 'right' : 'left'};">
            <div style="background: linear-gradient(135deg, #0d9488, #0891b2); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                <h2 style="margin: 0; font-size: 22px;">⚡ \${currentLang === 'ar' ? 'نتيجة امتحان الرياضيات والتحليل التفاعلي' : 'Math Interactive Exam Result'}</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">\${currentLang === 'ar' ? 'رياضيات الصف الحادي عشر عام | الفصل الدراسي الأول' : 'Grade 11 General Math | Term 1'}</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">🔀 \${currentLang === 'ar' ? 'تم خلط الأسئلة تلقائياً' : 'Questions were randomly shuffled'}</p>
            </div>
            
            <div style="background: #f0fdfa; padding: 15px; border: 1px solid #99f6e4;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; color: #0f766e;">\${currentLang === 'ar' ? '👤 الاسم:' : '👤 Name:'}</td>
                        <td style="padding: 8px;">\${name}</td>
                        <td style="padding: 8px; font-weight: bold; color: #0f766e;">\${currentLang === 'ar' ? '🏫 الشعبة:' : '🏫 Class:'}</td>
                        <td style="padding: 8px;">\${studentClass}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; color: #0f766e;">\${currentLang === 'ar' ? '📅 التاريخ:' : '📅 Date:'}</td>
                        <td style="padding: 8px;">\${date}</td>
                        <td style="padding: 8px; font-weight: bold; color: #0f766e;">\${currentLang === 'ar' ? '🏆 التقدير:' : '🏆 Grade:'}</td>
                        <td style="padding: 8px;">\${badge}</td>
                    </tr>
                </table>
            </div>

            <div style="background: white; padding: 20px; text-align: center; border-bottom: 2px solid #e5e7eb;">
                <div style="display: inline-block; margin: 0 15px;">
                    <div style="font-size: 32px; font-weight: bold; color: #0d9488;">\${score}</div>
                    <div style="color: #6b7280; font-size: 13px;">\${currentLang === 'ar' ? 'الدرجة الكلية' : 'Total Score'}</div>
                </div>
                <div style="display: inline-block; margin: 0 15px;">
                    <div style="font-size: 32px; font-weight: bold; color: #059669;">\${successRate}%</div>
                    <div style="color: #6b7280; font-size: 13px;">\${currentLang === 'ar' ? 'نسبة النجاح' : 'Success Rate'}</div>
                </div>
            </div>

            <h3 style="background: #f3f4f6; padding: 12px; margin: 0; color: #1f2937; border-bottom: 2px solid #d1d5db;">
                \${currentLang === 'ar' ? '📝 تفاصيل الإجابات' : '📝 Answer Details'}
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <thead>
                    <tr style="background: #0d9488; color: white;">
                        <th style="padding: 10px; border: 1px solid #0b7d73; width: 8%;">#</th>
                        <th style="padding: 10px; border: 1px solid #0b7d73; width: 32%;">\${currentLang === 'ar' ? 'القسم' : 'Section'}</th>
                        <th style="padding: 10px; border: 1px solid #0b7d73; width: 15%;">\${currentLang === 'ar' ? 'الإجابة' : 'Answer'}</th>
                        <th style="padding: 10px; border: 1px solid #0b7d73; width: 15%;">\${currentLang === 'ar' ? 'الصحيحة' : 'Correct'}</th>
                        <th style="padding: 10px; border: 1px solid #0b7d73; width: 15%;">\${currentLang === 'ar' ? 'النتيجة' : 'Status'}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    let sectionScores = [sec1, sec2, sec3, sec4, sec5];
    let sectionTotals = [4, 4, 4, 4, 4];

    for (let i = 0; i < 20; i++) {
        const selected = document.querySelector(`input[name="q\${i}"]:checked`);
        const selectedValue = selected ? selected.value : '-';
        const correctValue = correctAnswersMap[i];
        const isCorrect = selectedValue === correctValue;
        
        const sectionIndex = Math.floor(i / 4);

        const rowBg = i % 2 === 0 ? '#f9fafb' : '#ffffff';
        const statusBg = isCorrect ? '#dcfce7' : '#fee2e2';
        const statusColor = isCorrect ? '#166534' : '#991b1b';
        const statusIcon = isCorrect ? '✅' : '❌';
        const statusText = isCorrect 
            ? (currentLang === 'ar' ? 'صحيح' : 'Correct') 
            : (currentLang === 'ar' ? 'خطأ' : 'Wrong');

        answersHTML += `
            <tr style="background: \${rowBg};">
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: bold;">\${i + 1}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb;">\${currentSectionNames[sectionIndex]}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: bold;">\${selectedValue.toUpperCase()}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: bold; color: #059669;">\${correctValue.toUpperCase()}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; background: \${statusBg}; color: \${statusColor}; font-weight: bold;">
                    \${statusIcon} \${statusText}
                </td>
            </tr>
        `;
    }

    answersHTML += `
                </tbody>
            </table>

            <h3 style="background: #f3f4f6; padding: 12px; margin: 0; color: #1f2937; border-bottom: 2px solid #d1d5db; border-top: 3px solid #0d9488;">
                📊 \${currentLang === 'ar' ? 'تفصيل الأداء' : 'Performance Breakdown'}
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <thead>
                    <tr style="background: #7c3aed; color: white;">
                        <th style="padding: 10px; border: 1px solid #6d28d9;">\${currentLang === 'ar' ? 'القسم' : 'Section'}</th>
                        <th style="padding: 10px; border: 1px solid #6d28d9; width: 20%;">\${currentLang === 'ar' ? 'النتيجة' : 'Score'}</th>
                        <th style="padding: 10px; border: 1px solid #6d28d9; width: 20%;">\${currentLang === 'ar' ? 'النسبة' : 'Percentage'}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    for (let i = 0; i < 5; i++) {
        const percentage = Math.round((sectionScores[i] / sectionTotals[i]) * 100);
        const barColor = percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444';
        const rowBg = i % 2 === 0 ? '#f9fafb' : '#ffffff';
        
        answersHTML += `
            <tr style="background: \${rowBg};">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600;">\${currentSectionNames[i]}</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; text-align: center; font-weight: bold; color: #0d9488;">
                    \${sectionScores[i]} / \${sectionTotals[i]}
                </td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">
                    <div style="background: #e5e7eb; border-radius: 10px; overflow: hidden; height: 20px; position: relative;">
                        <div style="background: \${barColor}; width: \${percentage}%; height: 100%;"></div>
                        <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 11px; font-weight: bold; color: #1f2937;">
                            \${percentage}%
                        </span>
                    </div>
                </td>
            </tr>
        `;
    }

    answersHTML += `
                </tbody>
            </table>

            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 15px; border-radius: 0 0 10px 10px; border-top: 2px solid #f59e0b;">
                <p style="margin: 0; color: #78350f; text-align: center; font-size: 13px;">
                    💡 <strong>\${currentLang === 'ar' ? 'ملاحظة:' : 'Note:'}</strong> 
                    \${currentLang === 'ar' 
                        ? 'تم إرسال هذا التقرير تلقائياً من منصة 4U التعليمية | Mr. Mohammed Hesham' 
                        : 'This report was automatically sent from 4U Educational Platform | Mr. Mohammed Hesham'}
                </p>
            </div>
        </div>
    `;

    const templateParams = {
        to_email: TARGET_EMAIL,
        student_name: name,
        student_class: studentClass,
        exam_date: date,
        total_score: score,
        success_rate: successRate,
        grade: badge,
        answers_table: answersHTML
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(() => {
            status.textContent = currentLang === 'ar' 
                ? '✅ تم إرسال النتائج بنجاح!' 
                : '✅ Results sent successfully!';
            status.style.color = '#059669';
            btn.textContent = currentLang === 'ar' ? '✓ تم الإرسال' : '✓ Sent';
        })
        .catch(err => {
            status.textContent = currentLang === 'ar' 
                ? '❌ فشل الإرسال، حاول مرة أخرى' 
                : '❌ Failed to send, try again';
            status.style.color = '#dc2626';
            btn.disabled = false;
            btn.textContent = currentLang === 'ar' ? '📧 إعادة المحاولة' : '📧 Retry Send';
            console.error('EmailJS Error:', err);
        });
}

window.addEventListener('DOMContentLoaded', () => {
    prepareShuffledExam();
    renderExam();
    startTimer();
    console.log('🔀 تم خلط الأسئلة والخيارات عشوائياً!');
});
</script>
</body>
</html>
"""

import random

def make_real_math_question(topic, q_num, ch, les, part_idx, q_idx):
    # Deterministic randomness based on topic and question number
    rng = random.Random(topic + str(q_num))
    
    topic_lower = topic.lower()
    
    # Category detection
    is_poly = any(k in topic_lower for k in ["جمع", "طرح", "ضرب", "كثيرة حدود", "كثيرات", "أحادية", "ثنائية", "حدود", "polynomial"])
    is_factoring = any(k in topic_lower for k in ["تحليل", "عوامل", "الضرب الصفرية", "مربعين", "مربع كامل", "ax²", "quadratics", "factoring"])
    is_exponents = any(k in topic_lower for k in ["أسس", "قوة", "ضرب الأسس", "قسمة الأسس", "جذرية", "الأسس السالبة", "علمية", "exponents", "radicals"])
    is_equations = any(k in topic_lower for k in ["معادلات", "معادلة", "حل معادلة", "متباينة", "متباينات", "مطلق", "قيمة مطلقة", "equations", "absolute value"])
    is_slope = any(k in topic_lower for k in ["ميل", "معدل التغير", "معدل تغير", "بيانياً", "المقطع", "صيغة", "slope", "rate of change"])
    is_sequences = any(k in topic_lower for k in ["متتاليات", "متتالية", "الحد النوني", "حسابية", "هندسية", "sequences"])
    is_functions = any(k in topic_lower for k in ["دالة", "الدوال", "المجال", "المدى", "زوجية", "فردية", "عكسية", "تركيب", "functions", "domain", "range"])
    is_log = any(k in topic_lower for k in ["لوغاريتم", "لوغاريتمات", "نمو", "اضمحلال", "لوغاريتمية", "logarithmic", "exponential"])
    is_variation = any(k in topic_lower for k in ["طردي", "عكسي", "تناسب", "النسبة", "variation", "proportion"])

    if is_poly:
        # Polynomial questions
        if q_idx == 0: # Degree or classification
            deg = rng.randint(2, 6)
            coeff = rng.randint(2, 9)
            const = rng.randint(1, 15)
            # 3x^deg + 5x + const
            ar_q = f"أوجد درجة كثيرة الحدود التالية: <span class='formula'>{coeff}x^{deg} - {coeff-1}x + {const}</span>."
            en_q = f"Find the degree of the following polynomial: <span class='formula'>{coeff}x^{deg} - {coeff-1}x + {const}</span>."
            options = [
                {"ar": f"الدرجة {deg}", "en": f"Degree {deg}"},
                {"ar": f"الدرجة {deg-1}", "en": f"Degree {deg-1}"},
                {"ar": f"الدرجة {deg+1}", "en": f"Degree {deg+1}"},
                {"ar": f"الدرجة {coeff}", "en": f"Degree {coeff}"}
            ]
            ar_ans = f"درجة كثيرة الحدود هي أعلى أس للمتغير x في الحدود المكونة لها، وهو {deg}."
            en_ans = f"The degree of a polynomial is the highest exponent of the variable x, which is {deg}."
            
        elif q_idx == 1: # Addition
            a, b, c = rng.randint(1, 5), rng.randint(2, 6), rng.randint(1, 9)
            d, e, f = rng.randint(1, 5), rng.randint(2, 6), rng.randint(1, 9)
            # (ax^2 + bx + c) + (dx^2 + ex + f)
            ar_q = f"بسط التعبير التالي بجمع كثيرات الحدود: <span class='formula'>({a}x² + {b}x + {c}) + ({d}x² + {e}x + {f})</span>"
            en_q = f"Simplify the following expression by adding the polynomials: <span class='formula'>({a}x² + {b}x + {c}) + ({d}x² + {e}x + {f})</span>"
            options = [
                {"ar": f"<span class='formula'>{a+d}x² + {b+e}x + {c+f}</span>", "en": f"<span class='formula'>{a+d}x² + {b+e}x + {c+f}</span>"},
                {"ar": f"<span class='formula'>{abs(a-d)}x² + {b+e}x + {c+f}</span>", "en": f"<span class='formula'>{abs(a-d)}x² + {b+e}x + {c+f}</span>"},
                {"ar": f"<span class='formula'>{a+d}x² + {abs(b-e)}x + {c+f}</span>", "en": f"<span class='formula'>{a+d}x² + {abs(b-e)}x + {c+f}</span>"},
                {"ar": f"<span class='formula'>{a+d}x² + {b+e}x + {abs(c-f)}</span>", "en": f"<span class='formula'>{a+d}x² + {b+e}x + {abs(c-f)}</span>"}
            ]
            ar_ans = f"نجمع الحدود المتشابهة: <span class='formula'>({a}+{d})x² + ({b}+{e})x + ({c}+{f}) = {a+d}x² + {b+e}x + {c+f}</span>."
            en_ans = f"Combine like terms: <span class='formula'>({a}+{d})x² + ({b}+{e})x + ({c}+{f}) = {a+d}x² + {b+e}x + {c+f}</span>."
            
        elif q_idx == 2: # Subtraction
            a, b, c = rng.randint(4, 9), rng.randint(5, 9), rng.randint(5, 12)
            d, e, f = rng.randint(1, 3), rng.randint(1, 4), rng.randint(1, 4)
            # (ax^2 + bx + c) - (dx^2 + ex + f)
            ar_q = f"بسط التعبير الجبري بطرح كثيرات الحدود: <span class='formula'>({a}x² + {b}x + {c}) - ({d}x² + {e}x + {f})</span>"
            en_q = f"Simplify the algebraic expression by subtracting the polynomials: <span class='formula'>({a}x² + {b}x + {c}) - ({d}x² + {e}x + {f})</span>"
            options = [
                {"ar": f"<span class='formula'>{a-d}x² + {b-e}x + {c-f}</span>", "en": f"<span class='formula'>{a-d}x² + {b-e}x + {c-f}</span>"},
                {"ar": f"<span class='formula'>{a+d}x² + {b-e}x + {c-f}</span>", "en": f"<span class='formula'>{a+d}x² + {b-e}x + {c-f}</span>"},
                {"ar": f"<span class='formula'>{a-d}x² + {b+e}x + {c-f}</span>", "en": f"<span class='formula'>{a-d}x² + {b+e}x + {c-f}</span>"},
                {"ar": f"<span class='formula'>{a-d}x² + {b-e}x + {c+f}</span>", "en": f"<span class='formula'>{a-d}x² + {b-e}x + {c+f}</span>"}
            ]
            ar_ans = f"نوزع الإشارة السالبة ثم نجمع الحدود المتشابهة: <span class='formula'>({a}-{d})x² + ({b}-{e})x + ({c}-{f}) = {a-d}x² + {b-e}x + {c-f}</span>."
            en_ans = f"Distribute the negative sign then combine like terms: <span class='formula'>({a}-{d})x² + ({b}-{e})x + ({c}-{f}) = {a-d}x² + {b-e}x + {c-f}</span>."
            
        else: # Multiplication
            a, b = rng.randint(1, 4), rng.randint(1, 5)
            c, d = rng.randint(1, 3), rng.randint(1, 4)
            # (ax + b)(cx + d) = ac x^2 + (ad+bc)x + bd
            ac = a * c
            ad_bc = a * d + b * c
            bd = b * d
            ar_q = f"أوجد ناتج ضرب ثنائيتي الحدود التاليتين: <span class='formula'>({a}x + {b})({c}x + {d})</span>."
            en_q = f"Find the product of the following binomials: <span class='formula'>({a}x + {b})({c}x + {d})</span>."
            options = [
                {"ar": f"<span class='formula'>{ac}x² + {ad_bc}x + {bd}</span>", "en": f"<span class='formula'>{ac}x² + {ad_bc}x + {bd}</span>"},
                {"ar": f"<span class='formula'>{ac}x² + {abs(a*d - b*c)}x + {bd}</span>", "en": f"<span class='formula'>{ac}x² + {abs(a*d - b*c)}x + {bd}</span>"},
                {"ar": f"<span class='formula'>{ac}x² + {ad_bc}x + {b+d}</span>", "en": f"<span class='formula'>{ac}x² + {ad_bc}x + {b+d}</span>"},
                {"ar": f"<span class='formula'>{a+c}x² + {ad_bc}x + {bd}</span>", "en": f"<span class='formula'>{a+c}x² + {ad_bc}x + {bd}</span>"}
            ]
            ar_ans = f"باستخدام طريقة التوزيع أو FOIL: <span class='formula'>({a}x · {c}x) + ({a}x · {d}) + ({b} · {c}x) + ({b} · {d}) = {ac}x² + {ad_bc}x + {bd}</span>."
            en_ans = f"Using FOIL method: <span class='formula'>({a}x · {c}x) + ({a}x · {d}) + ({b} · {c}x) + ({b} · {d}) = {ac}x² + {ad_bc}x + {bd}</span>."

    elif is_factoring:
        # Factoring quadratic expressions
        if q_idx == 0: # Factoring x^2 + bx + c
            r1 = rng.randint(1, 6)
            r2 = rng.randint(1, 6)
            b = r1 + r2
            c = r1 * r2
            ar_q = f"حلل المقدار الثلاثي التالي إلى عوامله الأولية: <span class='formula'>x² + {b}x + {c}</span>"
            en_q = f"Factor the following trinomial completely: <span class='formula'>x² + {b}x + {c}</span>"
            options = [
                {"ar": f"<span class='formula'>(x + {r1})(x + {r2})</span>", "en": f"<span class='formula'>(x + {r1})(x + {r2})</span>"},
                {"ar": f"<span class='formula'>(x - {r1})(x - {r2})</span>", "en": f"<span class='formula'>(x - {r1})(x - {r2})</span>"},
                {"ar": f"<span class='formula'>(x + {r1})(x - {r2})</span>", "en": f"<span class='formula'>(x + {r1})(x - {r2})</span>"},
                {"ar": f"<span class='formula'>(x + {b})(x + 1)</span>", "en": f"<span class='formula'>(x + {b})(x + 1)</span>"}
            ]
            ar_ans = f"نبحث عن عددين حاصل ضربهما يساوي الحد الثابت {c} ومجموعهما يساوي معامل الحد الأوسط {b}، وهما {r1} و {r2}. إذن العوامل هي: <span class='formula'>(x + {r1})(x + {r2})</span>."
            en_ans = f"We look for two numbers that multiply to the constant term {c} and add up to the middle coefficient {b}, which are {r1} and {r2}. Thus, the factors are: <span class='formula'>(x + {r1})(x + {r2})</span>."
            
        elif q_idx == 1: # Solving quadratic equation x^2 + bx + c = 0
            r1 = rng.randint(2, 7)
            r2 = rng.randint(1, r1-1)
            b = -(r1 + r2)
            c = r1 * r2
            ar_q = f"أوجد جذور المعادلة التربيعية التالية بالتحليل: <span class='formula'>x² {b:+}x + {c} = 0</span>"
            en_q = f"Find the roots of the following quadratic equation by factoring: <span class='formula'>x² {b:+}x + {c} = 0</span>"
            options = [
                {"ar": f"<span class='formula'>x = {r1}, x = {r2}</span>", "en": f"<span class='formula'>x = {r1}, x = {r2}</span>"},
                {"ar": f"<span class='formula'>x = {-r1}, x = {-r2}</span>", "en": f"<span class='formula'>x = {-r1}, x = {-r2}</span>"},
                {"ar": f"<span class='formula'>x = {r1}, x = {-r2}</span>", "en": f"<span class='formula'>x = {r1}, x = {-r2}</span>"},
                {"ar": f"<span class='formula'>x = {c}, x = 1</span>", "en": f"<span class='formula'>x = {c}, x = 1</span>"}
            ]
            ar_ans = f"بتحليل المعادلة نحصل على: <span class='formula'>(x - {r1})(x - {r2}) = 0</span>. ومنها حلول المعادلة هي: <span class='formula'>x = {r1}</span> أو <span class='formula'>x = {r2}</span>."
            en_ans = f"Factoring the equation gives: <span class='formula'>(x - {r1})(x - {r2}) = 0</span>. Thus, the solutions are: <span class='formula'>x = {r1}</span> or <span class='formula'>x = {r2}</span>."
            
        elif q_idx == 2: # Difference of two squares
            a = rng.choice([2, 3, 5])
            b = rng.choice([4, 9, 16, 25])
            sqrt_b = int(b**0.5)
            ar_q = f"حلل ثنائية الحدود التالية كفرق بين مربعين: <span class='formula'>{a*a}x² - {b}</span>"
            en_q = f"Factor the following binomial as a difference of two squares: <span class='formula'>{a*a}x² - {b}</span>"
            options = [
                {"ar": f"<span class='formula'>({a}x - {sqrt_b})({a}x + {sqrt_b})</span>", "en": f"<span class='formula'>({a}x - {sqrt_b})({a}x + {sqrt_b})</span>"},
                {"ar": f"<span class='formula'>({a*a}x - {b})(x + 1)</span>", "en": f"<span class='formula'>({a*a}x - {b})(x + 1)</span>"},
                {"ar": f"<span class='formula'>({a}x - {b})({a}x + {b})</span>", "en": f"<span class='formula'>({a}x - {b})({a}x + {b})</span>"},
                {"ar": f"<span class='formula'>({a}x - {sqrt_b})²</span>", "en": f"<span class='formula'>({a}x - {sqrt_b})²</span>"}
            ]
            ar_ans = f"باستخدام قاعدة الفرق بين مربعين: <span class='formula'>u² - v² = (u - v)(u + v)</span>. حيث <span class='formula'>u = {a}x</span> و <span class='formula'>v = {sqrt_b}</span>."
            en_ans = f"Using the difference of two squares identity: <span class='formula'>u² - v² = (u - v)(u + v)</span>, where <span class='formula'>u = {a}x</span> and <span class='formula'>v = {sqrt_b}</span>."
            
        else: # Perfect Square Trinomials
            a = rng.choice([2, 3, 5])
            b = rng.choice([1, 2, 3])
            a2 = a * a
            ab2 = 2 * a * b
            b2 = b * b
            ar_q = f"بسط وحلل ثلاثية الحدود المربعة الكاملة التالية: <span class='formula'>{a2}x² + {ab2}x + {b2}</span>"
            en_q = f"Identify and factor the following perfect square trinomial: <span class='formula'>{a2}x² + {ab2}x + {b2}</span>"
            options = [
                {"ar": f"<span class='formula'>({a}x + {b})²</span>", "en": f"<span class='formula'>({a}x + {b})²</span>"},
                {"ar": f"<span class='formula'>({a}x - {b})²</span>", "en": f"<span class='formula'>({a}x - {b})²</span>"},
                {"ar": f"<span class='formula'>({a}x + {b})({a}x - {b})</span>", "en": f"<span class='formula'>({a}x + {b})({a}x - {b})</span>"},
                {"ar": f"<span class='formula'>({a2}x + {b2})²</span>", "en": f"<span class='formula'>({a2}x + {b2})²</span>"}
            ]
            ar_ans = f"بما أن الحد الأول مربع كامل لـ <span class='formula'>{a}x</span> والأخير مربع كامل لـ <span class='formula'>{b}</span>، والحد الأوسط هو <span class='formula'>2 · {a}x · {b} = {ab2}x</span>، إذن التحليل هو <span class='formula'>({a}x + {b})²</span>."
            en_ans = f"Since the first term is a perfect square of <span class='formula'>{a}x</span> and the last is <span class='formula'>{b}</span>, and the middle term is <span class='formula'>2 · {a}x · {b} = {ab2}x</span>, it factors as <span class='formula'>({a}x + {b})²</span>."

    elif is_exponents:
        # Exponents and radicals
        if q_idx == 0: # Product of powers
            base = rng.choice([2, 3, 5, 'x', 'a'])
            exp1 = rng.randint(2, 6)
            exp2 = rng.randint(2, 6)
            ar_q = f"بسط المقدار التالي باستخدام خواص ضرب الأسس: <span class='formula'>{base}^{exp1} · {base}^{exp2}</span>"
            en_q = f"Simplify the expression using multiplying exponents properties: <span class='formula'>{base}^{exp1} · {base}^{exp2}</span>"
            options = [
                {"ar": f"<span class='formula'>{base}^{exp1+exp2}</span>", "en": f"<span class='formula'>{base}^{exp1+exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{exp1*exp2}</span>", "en": f"<span class='formula'>{base}^{exp1*exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{abs(exp1-exp2)}</span>", "en": f"<span class='formula'>{base}^{abs(exp1-exp2)}</span>"},
                {"ar": f"<span class='formula'>{2 if isinstance(base, int) else '2' + str(base)}^{exp1+exp2}</span>", "en": f"<span class='formula'>{2 if isinstance(base, int) else '2' + str(base)}^{exp1+exp2}</span>"}
            ]
            ar_ans = f"عند ضرب الأسس ذات الأساسات المتطابقة، نقوم بجمع الأسس: <span class='formula'>{base}^{exp1} · {base}^{exp2} = {base}^{{{exp1}+{exp2}}} = {base}^{exp1+exp2}</span>."
            en_ans = f"When multiplying powers with the same base, add their exponents: <span class='formula'>{base}^{exp1} · {base}^{exp2} = {base}^{{{exp1}+{exp2}}} = {base}^{exp1+exp2}</span>."
            
        elif q_idx == 1: # Power of a power
            base = rng.choice(['x', 'y', 'b'])
            exp1 = rng.randint(2, 4)
            exp2 = rng.randint(3, 5)
            ar_q = f"بسط التعبير المرفوع لقوة أخرى: <span class='formula'>({base}^{exp1})^{exp2}</span>"
            en_q = f"Simplify the power of a power expression: <span class='formula'>({base}^{exp1})^{exp2}</span>"
            options = [
                {"ar": f"<span class='formula'>{base}^{exp1*exp2}</span>", "en": f"<span class='formula'>{base}^{exp1*exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{exp1+exp2}</span>", "en": f"<span class='formula'>{base}^{exp1+exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{exp2-exp1}</span>", "en": f"<span class='formula'>{base}^{exp2-exp1}</span>"},
                {"ar": f"<span class='formula'>{exp1*exp2}{base}</span>", "en": f"<span class='formula'>{exp1*exp2}{base}</span>"}
            ]
            ar_ans = f"لرفع القوة إلى قوة أخرى نقوم بضرب الأسس: <span class='formula'>({base}^{exp1})^{exp2} = {base}^{{{exp1}·{exp2}}} = {base}^{exp1*exp2}</span>."
            en_ans = f"To raise a power to a power, multiply the exponents: <span class='formula'>({base}^{exp1})^{exp2} = {base}^{{{exp1}·{exp2}}} = {base}^{exp1*exp2}</span>."
            
        elif q_idx == 2: # Division of powers
            base = rng.choice(['x', 'y', 'a'])
            exp1 = rng.randint(6, 12)
            exp2 = rng.randint(2, 5)
            ar_q = f"بسط المقدار الكسري التالي باستخدام خواص قسمة الأسس: <span class='formula'>{base}^{exp1} / {base}^{exp2}</span>"
            en_q = f"Simplify the rational expression using division of exponents: <span class='formula'>{base}^{exp1} / {base}^{exp2}</span>"
            options = [
                {"ar": f"<span class='formula'>{base}^{exp1-exp2}</span>", "en": f"<span class='formula'>{base}^{exp1-exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{exp1+exp2}</span>", "en": f"<span class='formula'>{base}^{exp1+exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{exp1//exp2}</span>", "en": f"<span class='formula'>{base}^{exp1//exp2}</span>"},
                {"ar": f"<span class='formula'>{base}^{exp2-exp1}</span>", "en": f"<span class='formula'>{base}^{exp2-exp1}</span>"}
            ]
            ar_ans = f"عند قسمة الأسس ذات الأساسات المشابهة، نطرح أس المقام من أسالبسط: <span class='formula'>{base}^{exp1-exp2}</span>."
            en_ans = f"When dividing powers with the same base, subtract the exponent of the denominator from that of the numerator: <span class='formula'>{base}^{exp1-exp2}</span>."
            
        else: # Radical to exponent
            base = rng.choice(['x', 'y', 'z'])
            idx = rng.randint(3, 5)
            pwr = rng.randint(2, idx-1) if idx > 2 else 1
            ar_q = f"حول التعبير الجذري التالي إلى الصيغة الأسية النسبية: <span class='formula'>^{idx}√({base}^{pwr})</span>"
            en_q = f"Convert the following radical expression to a rational exponential form: <span class='formula'>^{idx}√({base}^{pwr})</span>"
            options = [
                {"ar": f"<span class='formula'>{base}^{{{pwr}/{idx}}}</span>", "en": f"<span class='formula'>{base}^{{{pwr}/{idx}}}</span>"},
                {"ar": f"<span class='formula'>{base}^{{{idx}/{pwr}}}</span>", "en": f"<span class='formula'>{base}^{{{idx}/{pwr}}}</span>"},
                {"ar": f"<span class='formula'>{base}^{{{pwr*idx}}}</span>", "en": f"<span class='formula'>{base}^{{{pwr*idx}}}</span>"},
                {"ar": f"<span class='formula'>{base}^{{{idx-pwr}}}</span>", "en": f"<span class='formula'>{base}^{{{idx-pwr}}}</span>"}
            ]
            ar_ans = f"الصيغة العامة لتحويل الجذر هي: <span class='formula'>^n√(x^m) = x^(m/n)</span>، وبتطبيقها نحصل على: <span class='formula'>{base}^{{{pwr}/{idx}}}</span>."
            en_ans = f"The general rule is <span class='formula'>^n√(x^m) = x^(m/n)</span>. Applying this gives: <span class='formula'>{base}^{{{pwr}/{idx}}}</span>."

    elif is_equations:
        # Solving linear, system, and absolute value equations
        if q_idx == 0: # Simple linear equation ax + b = c
            a = rng.randint(2, 6)
            ans = rng.randint(-5, 5)
            b = rng.randint(1, 10)
            c = a * ans + b
            ar_q = f"حل المعادلة الخطية التالية لإيجاد قيمة x: <span class='formula'>{a}x + {b} = {c}</span>"
            en_q = f"Solve the following linear equation for x: <span class='formula'>{a}x + {b} = {c}</span>"
            options = [
                {"ar": f"<span class='formula'>x = {ans}</span>", "en": f"<span class='formula'>x = {ans}</span>"},
                {"ar": f"<span class='formula'>x = {ans+1}</span>", "en": f"<span class='formula'>x = {ans+1}</span>"},
                {"ar": f"<span class='formula'>x = {-ans}</span>", "en": f"<span class='formula'>x = {-ans}</span>"},
                {"ar": f"<span class='formula'>x = {c - b}</span>", "en": f"<span class='formula'>x = {c - b}</span>"}
            ]
            ar_ans = f"نطرح {b} من الطرفين: <span class='formula'>{a}x = {c-b}</span>. ثم نقسم على {a}: <span class='formula'>x = {ans}</span>."
            en_ans = f"Subtract {b} from both sides: <span class='formula'>{a}x = {c-b}</span>. Divide by {a}: <span class='formula'>x = {ans}</span>."
            
        elif q_idx == 1: # Absolute value equations |x - a| = b
            a = rng.randint(1, 8)
            b = rng.randint(2, 7)
            ar_q = f"أوجد مجموعة حل معادلة القيمة المطلقة التالية: <span class='formula'>|x - {a}| = {b}</span>"
            en_q = f"Find the solution set of the following absolute value equation: <span class='formula'>|x - {a}| = {b}</span>"
            options = [
                {"ar": f"<span class='formula'>{{{a+b}, {a-b}}}</span>", "en": f"<span class='formula'>{{{a+b}, {a-b}}}</span>"},
                {"ar": f"<span class='formula'>{{{a+b}}}</span>", "en": f"<span class='formula'>{{{a+b}}}</span>"},
                {"ar": f"<span class='formula'>{{{-a-b}, {-a+b}}}</span>", "en": f"<span class='formula'>{{{-a-b}, {-a+b}}}</span>"},
                {"ar": "المجموعة الخالية Ø", "en": "Empty Set Ø"}
            ]
            ar_ans = f"نفصل المعادلة إلى حالتين: إما <span class='formula'>x - {a} = {b} => x = {a+b}</span> أو <span class='formula'>x - {a} = -{b} => x = {a-b}</span>. إذن الحل هو <span class='formula'>{{{a+b}, {a-b}}}</span>."
            en_ans = f"Split into two cases: <span class='formula'>x - {a} = {b} => x = {a+b}</span> or <span class='formula'>x - {a} = -{b} => x = {a-b}</span>. Thus, the solution set is <span class='formula'>{{{a+b}, {a-b}}}</span>."
            
        elif q_idx == 2: # Systems of linear equations x+y=S, x-y=D
            x = rng.randint(2, 6)
            y = rng.randint(1, x-1)
            S = x + y
            D = x - y
            ar_q = f"حل نظام المعادلات الخطية التالي لإيجاد (x, y): <br><span class='formula'>x + y = {S}</span><br><span class='formula'>x - y = {D}</span>"
            en_q = f"Solve the following system of linear equations for (x, y): <br><span class='formula'>x + y = {S}</span><br><span class='formula'>x - y = {D}</span>"
            options = [
                {"ar": f"<span class='formula'>({x}, {y})</span>", "en": f"<span class='formula'>({x}, {y})</span>"},
                {"ar": f"<span class='formula'>({y}, {x})</span>", "en": f"<span class='formula'>({y}, {x})</span>"},
                {"ar": f"<span class='formula'>({x+1}, {y-1})</span>", "en": f"<span class='formula'>({x+1}, {y-1})</span>"},
                {"ar": f"<span class='formula'>({-x}, {-y})</span>", "en": f"<span class='formula'>({-x}, {-y})</span>"}
            ]
            ar_ans = f"بجمع المعادلتين نحصل على: <span class='formula'>2x = {S+D} => x = {x}</span>. وبالتعويض نحصل على: <span class='formula'>{x} + y = {S} => y = {y}</span>."
            en_ans = f"Add the two equations: <span class='formula'>2x = {S+D} => x = {x}</span>. Substitute to find y: <span class='formula'>{x} + y = {S} => y = {y}</span>."
            
        else: # Simple linear inequality ax + b < c
            a = rng.randint(2, 5)
            ans = rng.randint(2, 6)
            b = rng.randint(1, 5)
            c = a * ans + b
            ar_q = f"حل المتباينة الخطية التالية: <span class='formula'>{a}x + {b} < {c}</span>"
            en_q = f"Solve the following linear inequality: <span class='formula'>{a}x + {b} < {c}</span>"
            options = [
                {"ar": f"<span class='formula'>x < {ans}</span>", "en": f"<span class='formula'>x < {ans}</span>"},
                {"ar": f"<span class='formula'>x > {ans}</span>", "en": f"<span class='formula'>x > {ans}</span>"},
                {"ar": f"<span class='formula'>x < {-ans}</span>", "en": f"<span class='formula'>x < {-ans}</span>"},
                {"ar": f"<span class='formula'>x < {c}</span>", "en": f"<span class='formula'>x < {c}</span>"}
            ]
            ar_ans = f"نطرح {b} من الطرفين: <span class='formula'>{a}x < {c-b}</span>. ثم نقسم على {a} مع بقاء اتجاه المتباينة كما هو: <span class='formula'>x < {ans}</span>."
            en_ans = f"Subtract {b}: <span class='formula'>{a}x < {c-b}</span>. Divide by {a} keeping the sign: <span class='formula'>x < {ans}</span>."

    elif is_slope:
        # Slope and rate of change
        if q_idx == 0: # Slope from points
            x1 = rng.randint(-3, 3)
            y1 = rng.randint(-3, 3)
            dx = rng.choice([1, 2, 3])
            m = rng.choice([-2, -1, 1, 2, 3])
            x2 = x1 + dx
            y2 = y1 + m * dx
            ar_q = f"أوجد ميل المستقيم المار بالنقطتين التاليتين: <span class='formula'>A({x1}, {y1})</span> و <span class='formula'>B({x2}, {y2})</span>."
            en_q = f"Find the slope of the line passing through the points: <span class='formula'>A({x1}, {y1})</span> and <span class='formula'>B({x2}, {y2})</span>."
            options = [
                {"ar": f"<span class='formula'>m = {m}</span>", "en": f"<span class='formula'>m = {m}</span>"},
                {"ar": f"<span class='formula'>m = {-m}</span>", "en": f"<span class='formula'>m = {-m}</span>"},
                {"ar": f"<span class='formula'>m = {y2 - y1}</span>", "en": f"<span class='formula'>m = {y2 - y1}</span>"},
                {"ar": f"<span class='formula'>m = 0</span>", "en": f"<span class='formula'>m = 0</span>"}
            ]
            ar_ans = f"باستخدام قانون ميل المستقيم: <span class='formula'>m = (y2 - y1) / (x2 - x1) = ({y2} - {y1}) / ({x2} - {x1}) = {y2-y1} / {dx} = {m}</span>."
            en_ans = f"Using slope formula: <span class='formula'>m = (y2 - y1) / (x2 - x1) = ({y2} - {y1}) / ({x2} - {x1}) = {y2-y1} / {dx} = {m}</span>."
            
        elif q_idx == 1: # Find y-intercept of Ax + By = C
            A = rng.randint(2, 5)
            B = rng.choice([2, 3, 4])
            C = B * rng.randint(-4, 4)
            ar_q = f"أوجد المقطع الصادي للمستقيم التالي: <span class='formula'>{A}x + {B}y = {C}</span>"
            en_q = f"Find the y-intercept of the line: <span class='formula'>{A}x + {B}y = {C}</span>"
            y_int = C // B
            options = [
                {"ar": f"<span class='formula'>(0, {y_int})</span>", "en": f"<span class='formula'>(0, {y_int})</span>"},
                {"ar": f"<span class='formula'>({y_int}, 0)</span>", "en": f"<span class='formula'>({y_int}, 0)</span>"},
                {"ar": f"<span class='formula'>(0, {-y_int})</span>", "en": f"<span class='formula'>(0, {-y_int})</span>"},
                {"ar": f"<span class='formula'>(0, {C})</span>", "en": f"<span class='formula'>(0, {C})</span>"}
            ]
            ar_ans = f"لإيجاد المقطع الصادي، نضع <span class='formula'>x = 0</span> في المعادلة: <span class='formula'>{A}(0) + {B}y = {C} => {B}y = {C} => y = {y_int}</span>. إذن المقطع الصادي هو النقطة <span class='formula'>(0, {y_int})</span>."
            en_ans = f"To find the y-intercept, set <span class='formula'>x = 0</span>: <span class='formula'>{A}(0) + {B}y = {C} => {B}y = {C} => y = {y_int}</span>. Thus, the y-intercept is <span class='formula'>(0, {y_int})</span>."
            
        elif q_idx == 2: # Equation from slope and point
            m = rng.randint(2, 4)
            x1 = rng.randint(1, 3)
            y1 = rng.randint(2, 5)
            c = -m*x1 + y1
            ar_q = f"اكتب معادلة المستقيم بصيغة الميل والمقطع إذا كان ميله <span class='formula'>m = {m}</span> ويمر بالنقطة <span class='formula'>({x1}, {y1})</span>."
            en_q = f"Write the slope-intercept equation of the line if its slope is <span class='formula'>m = {m}</span> and passes through <span class='formula'>({x1}, {y1})</span>."
            options = [
                {"ar": f"<span class='formula'>y = {m}x {c:+}</span>", "en": f"<span class='formula'>y = {m}x {c:+}</span>"},
                {"ar": f"<span class='formula'>y = {m}x {-c:+}</span>", "en": f"<span class='formula'>y = {m}x {-c:+}</span>"},
                {"ar": f"<span class='formula'>y = {-m}x {c:+}</span>", "en": f"<span class='formula'>y = {-m}x {c:+}</span>"},
                {"ar": f"<span class='formula'>y = {m}x + {y1}</span>", "en": f"<span class='formula'>y = {m}x + {y1}</span>"}
            ]
            ar_ans = f"نعوض في صيغة الميل والمقطع <span class='formula'>y = mx + b</span>: <span class='formula'>{y1} = {m}({x1}) + b => {y1} = {m*x1} + b => b = {c}</span>. إذن المعادلة هي <span class='formula'>y = {m}x {c:+}</span>."
            en_ans = f"Substitute into <span class='formula'>y = mx + b</span>: <span class='formula'>{y1} = {m}({x1}) + b => {y1} = {m*x1} + b => b = {c}</span>. Hence, <span class='formula'>y = {m}x {c:+}</span>."
            
        else: # Average rate of change
            a = rng.randint(1, 3)
            b = rng.randint(a+2, a+4)
            ar_q = f"أوجد متوسط معدل التغير للدالة <span class='formula'>f(x) = x²</span> على الفترة الإحداثية <span class='formula'>[{a}, {b}]</span>."
            en_q = f"Find the average rate of change of the function <span class='formula'>f(x) = x²</span> over the interval <span class='formula'>[{a}, {b}]</span>."
            options = [
                {"ar": f"<span class='formula'>{a+b}</span>", "en": f"<span class='formula'>{a+b}</span>"},
                {"ar": f"<span class='formula'>{a*b}</span>", "en": f"<span class='formula'>{a*b}</span>"},
                {"ar": f"<span class='formula'>{(b*b - a*a)}</span>", "en": f"<span class='formula'>{(b*b - a*a)}</span>"},
                {"ar": f"<span class='formula'>{b-a}</span>", "en": f"<span class='formula'>{b-a}</span>"}
            ]
            ar_ans = f"قانون متوسط معدل التغير: <span class='formula'>[f({b}) - f({a})] / ({b} - {a}) = ({b*b} - {a*a}) / ({b} - {a}) = {b*b-a*a} / {b-a} = {a+b}</span>."
            en_ans = f"The average rate of change is: <span class='formula'>[f({b}) - f({a})] / ({b} - {a}) = ({b*b} - {a*a}) / ({b} - {a}) = {a+b}</span>."

    elif is_sequences:
        # Arithmetic and geometric sequences
        if q_idx == 0: # Arithmetic sequence: common difference
            a1 = rng.randint(2, 10)
            d = rng.randint(3, 8)
            seq = [a1 + i*d for i in range(4)]
            ar_q = f"أوجد الفرق المشترك (d) للمتتالية الحسابية التالية: <span class='formula'>{seq[0]}, {seq[1]}, {seq[2]}, {seq[3]}, ...</span>"
            en_q = f"Find the common difference (d) of the following arithmetic sequence: <span class='formula'>{seq[0]}, {seq[1]}, {seq[2]}, {seq[3]}, ...</span>"
            options = [
                {"ar": f"d = {d}", "en": f"d = {d}"},
                {"ar": f"d = {-d}", "en": f"d = {-d}"},
                {"ar": f"d = {seq[0]}", "en": f"d = {seq[0]}"},
                {"ar": f"d = {seq[1]}", "en": f"d = {seq[1]}"}
            ]
            ar_ans = f"الفرق المشترك هو ناتج طرح أي حد من الحد الذي يليه مباشرة: <span class='formula'>d = {seq[1]} - {seq[0]} = {d}</span>."
            en_ans = f"The common difference is obtained by subtracting any term from its succeeding term: <span class='formula'>d = {seq[1]} - {seq[0]} = {d}</span>."
            
        elif q_idx == 1: # Nth term of arithmetic sequence
            a1 = rng.randint(2, 8)
            d = rng.randint(2, 5)
            n = rng.randint(8, 15)
            an = a1 + (n - 1) * d
            ar_q = f"متتالية حسابية حدها الأول <span class='formula'>a₁ = {a1}</span> وفرقها المشترك <span class='formula'>d = {d}</span>، أوجد قيمة الحد النوني <span class='formula'>a_{{{n}}}</span>."
            en_q = f"An arithmetic sequence has first term <span class='formula'>a₁ = {a1}</span> and common difference <span class='formula'>d = {d}</span>. Find the <span class='formula'>{n}</span>-th term <span class='formula'>a_{{{n}}}</span>."
            options = [
                {"ar": f"<span class='formula'>{an}</span>", "en": f"<span class='formula'>{an}</span>"},
                {"ar": f"<span class='formula'>{an-d}</span>", "en": f"<span class='formula'>{an-d}</span>"},
                {"ar": f"<span class='formula'>{an+d}</span>", "en": f"<span class='formula'>{an+d}</span>"},
                {"ar": f"<span class='formula'>{a1 + n*d}</span>", "en": f"<span class='formula'>{a1 + n*d}</span>"}
            ]
            ar_ans = f"باستخدام قانون الحد النوني: <span class='formula'>a_n = a₁ + (n - 1)d = {a1} + ({n} - 1) · {d} = {a1} + {n-1} · {d} = {an}</span>."
            en_ans = f"Using the n-th term formula: <span class='formula'>a_n = a₁ + (n - 1)d = {a1} + ({n} - 1) · {d} = {an}</span>."
            
        elif q_idx == 2: # Common ratio of geometric sequence
            a1 = rng.randint(1, 4)
            r = rng.choice([2, 3])
            seq = [a1 * (r**i) for i in range(4)]
            ar_q = f"أوجد النسبة المشتركة أو الأساس (r) للمتتالية الهندسية التالية: <span class='formula'>{seq[0]}, {seq[1]}, {seq[2]}, {seq[3]}, ...</span>"
            en_q = f"Find the common ratio (r) of the following geometric sequence: <span class='formula'>{seq[0]}, {seq[1]}, {seq[2]}, {seq[3]}, ...</span>"
            options = [
                {"ar": f"r = {r}", "en": f"r = {r}"},
                {"ar": f"r = {1/r:.2f}", "en": f"r = {1/r:.2f}"},
                {"ar": f"r = {seq[1] - seq[0]}", "en": f"r = {seq[1] - seq[0]}"},
                {"ar": f"r = {seq[0]}", "en": f"r = {seq[0]}"}
            ]
            ar_ans = f"النسبة المشتركة للمتتالية الهندسية تُحسب بقسمة أي حد على الحد الذي يسبقه: <span class='formula'>r = {seq[1]} / {seq[0]} = {r}</span>."
            en_ans = f"The common ratio is calculated by dividing any term by the preceding term: <span class='formula'>r = {seq[1]} / {seq[0]} = {r}</span>."
            
        else: # Sum of arithmetic series
            a1 = rng.randint(1, 5)
            d = rng.randint(2, 4)
            n = rng.randint(5, 8)
            Sn = (n * (2*a1 + (n-1)*d)) // 2
            ar_q = f"أوجد مجموع أول <span class='formula'>{n}</span> حدود من المتتالية الحسابية التي حدها الأول <span class='formula'>a₁ = {a1}</span> وفرقها <span class='formula'>d = {d}</span>."
            en_q = f"Find the sum of the first <span class='formula'>{n}</span> terms of the arithmetic sequence with <span class='formula'>a₁ = {a1}</span> and <span class='formula'>d = {d}</span>."
            options = [
                {"ar": f"<span class='formula'>{Sn}</span>", "en": f"<span class='formula'>{Sn}</span>"},
                {"ar": f"<span class='formula'>{Sn + 10}</span>", "en": f"<span class='formula'>{Sn + 10}</span>"},
                {"ar": f"<span class='formula'>{Sn - 5}</span>", "en": f"<span class='formula'>{Sn - 5}</span>"},
                {"ar": f"<span class='formula'>{n * (a1 + n*d)}</span>", "en": f"<span class='formula'>{n * (a1 + n*d)}</span>"}
            ]
            ar_ans = f"باستخدام قانون المجموع: <span class='formula'>S_n = (n/2)[2a₁ + (n-1)d] = ({n}/2)[2({a1}) + ({n}-1){d}] = {Sn}</span>."
            en_ans = f"Using the arithmetic series sum formula: <span class='formula'>S_n = (n/2)[2a₁ + (n-1)d] = ({n}/2)[2({a1}) + ({n}-1){d}] = {Sn}</span>."

    elif is_functions:
        # Functions evaluate, domain, compose, inverse
        if q_idx == 0: # Evaluate function
            a = rng.randint(2, 5)
            b = rng.randint(-5, 5)
            x_val = rng.randint(-3, 3)
            res = a * (x_val**2) + b
            ar_q = f"إذا كانت الدالة <span class='formula'>f(x) = {a}x² {b:+}</span>، فما قيمة <span class='formula'>f({x_val})</span>؟"
            en_q = f"If <span class='formula'>f(x) = {a}x² {b:+}</span>, what is the value of <span class='formula'>f({x_val})</span>?"
            options = [
                {"ar": f"<span class='formula'>{res}</span>", "en": f"<span class='formula'>{res}</span>"},
                {"ar": f"<span class='formula'>{res-2}</span>", "en": f"<span class='formula'>{res-2}</span>"},
                {"ar": f"<span class='formula'>{-res}</span>", "en": f"<span class='formula'>{-res}</span>"},
                {"ar": f"<span class='formula'>{a * x_val + b}</span>", "en": f"<span class='formula'>{a * x_val + b}</span>"}
            ]
            ar_ans = f"نعوض بقيمة x في الدالة: <span class='formula'>f({x_val}) = {a}({x_val})² {b:+} = {a}({x_val*x_val}) {b:+} = {a*x_val*x_val} {b:+} = {res}</span>."
            en_ans = f"Substitute x in the function: <span class='formula'>f({x_val}) = {a}({x_val})² {b:+} = {res}</span>."
            
        elif q_idx == 1: # Domain
            c = rng.randint(2, 10)
            if rng.choice([True, False]): # sqrt(x - c)
                ar_q = f"ما هو مجال الدالة الجذرية التالية في مجموعة الأعداد الحقيقية: <span class='formula'>f(x) = √(x - {c})</span>؟"
                en_q = f"What is the domain of the following radical function over real numbers: <span class='formula'>f(x) = √(x - {c})</span>?"
                options = [
                    {"ar": f"[ {c}, ∞ ) أي x ≥ {c}", "en": f"[ {c}, ∞ ) i.e., x ≥ {c}"},
                    {"ar": f"( {c}, ∞ ) أي x > {c}", "en": f"( {c}, ∞ ) i.e., x > {c}"},
                    {"ar": f"[ {-c}, ∞ ) أي x ≥ {-c}", "en": f"[ {-c}, ∞ ) i.e., x ≥ {-c}"},
                    {"ar": "جميع الأعداد الحقيقية ℝ", "en": "All real numbers ℝ"}
                ]
                ar_ans = f"يكون ما تحت الجذر التربيعي معرفاً فقط إذا كان غير سالب: <span class='formula'>x - {c} ≥ 0 => x ≥ {c}</span>. إذن المجال هو <span class='formula'>[ {c}, ∞ )</span>."
                en_ans = f"The expression under the radical must be non-negative: <span class='formula'>x - {c} ≥ 0 => x ≥ {c}</span>. Thus, the domain is <span class='formula'>[ {c}, ∞ )</span>."
            else: # rational
                ar_q = f"حدد مجال الدالة الكسرية التالية: <span class='formula'>f(x) = 5 / (x - {c})</span>"
                en_q = f"Determine the domain of the following rational function: <span class='formula'>f(x) = 5 / (x - {c})</span>"
                options = [
                    {"ar": f"جميع الأعداد الحقيقية عدا {c}", "en": f"All real numbers except {c}"},
                    {"ar": f"جميع الأعداد الحقيقية عدا {-c}", "en": f"All real numbers except {-c}"},
                    {"ar": f"جميع الأعداد الأكبر من {c}", "en": f"All real numbers greater than {c}"},
                    {"ar": "جميع الأعداد الحقيقية ℝ", "en": "All real numbers ℝ"}
                ]
                ar_ans = f"تكون الدالة معرفة عندما لا يساوي المقام صفراً: <span class='formula'>x - {c} ≠ 0 => x ≠ {c}</span>. إذن المجال هو ℝ عدا {c}."
                en_ans = f"The function is defined as long as the denominator is not zero: <span class='formula'>x - {c} ≠ 0 => x ≠ {c}</span>. Hence, domain is ℝ except {c}."
            
        elif q_idx == 2: # Composition f(g(x))
            a = rng.randint(2, 4)
            b = rng.randint(1, 5)
            c = rng.randint(2, 3)
            ar_q = f"إذا كانت <span class='formula'>f(x) = {a}x + {b}</span> و <span class='formula'>g(x) = {c}x</span>، فما هو تعبير الدالة المركبة <span class='formula'>(f ∘ g)(x)</span>؟"
            en_q = f"If <span class='formula'>f(x) = {a}x + {b}</span> and <span class='formula'>g(x) = {c}x</span>, what is the composition function <span class='formula'>(f ∘ g)(x)</span>?"
            options = [
                {"ar": f"<span class='formula'>{a*c}x + {b}</span>", "en": f"<span class='formula'>{a*c}x + {b}</span>"},
                {"ar": f"<span class='formula'>{a*c}x + {b*c}</span>", "en": f"<span class='formula'>{a*c}x + {b*c}</span>"},
                {"ar": f"<span class='formula'>{a+c}x + {b}</span>", "en": f"<span class='formula'>{a+c}x + {b}</span>"},
                {"ar": f"<span class='formula'>{a*c}x² + {b}</span>", "en": f"<span class='formula'>{a*c}x² + {b}</span>"}
            ]
            ar_ans = f"نعوض بـ g(x) داخل f(x): <span class='formula'>(f ∘ g)(x) = f(g(x)) = {a}({c}x) + {b} = {a*c}x + {b}</span>."
            en_ans = f"Substitute g(x) into f(x): <span class='formula'>(f ∘ g)(x) = f(g(x)) = {a}({c}x) + {b} = {a*c}x + {b}</span>."
            
        else: # Inverse of f(x) = ax - b
            a = rng.randint(2, 5)
            b = rng.randint(1, 8)
            ar_q = f"أوجد الدالة العكسية <span class='formula'>f⁻¹(x)</span> للدالة الخطية التالية: <span class='formula'>f(x) = {a}x - {b}</span>."
            en_q = f"Find the inverse function <span class='formula'>f⁻¹(x)</span> of the following linear function: <span class='formula'>f(x) = {a}x - {b}</span>."
            options = [
                {"ar": f"<span class='formula'>(x + {b}) / {a}</span>", "en": f"<span class='formula'>(x + {b}) / {a}</span>"},
                {"ar": f"<span class='formula'>(x - {b}) / {a}</span>", "en": f"<span class='formula'>(x - {b}) / {a}</span>"},
                {"ar": f"<span class='formula'>{a}x + {b}</span>", "en": f"<span class='formula'>{a}x + {b}</span>"},
                {"ar": f"<span class='formula'>x / {a} + {b}</span>", "en": f"<span class='formula'>x / {a} + {b}</span>"}
            ]
            ar_ans = f"نضع <span class='formula'>y = {a}x - {b}</span>، ثم نعكس المتغيرات: <span class='formula'>x = {a}y - {b} => x + {b} = {a}y => y = (x + {b}) / {a}</span>."
            en_ans = f"Set <span class='formula'>y = {a}x - {b}</span>, swap variables: <span class='formula'>x = {a}y - {b} => x + {b} = {a}y => y = (x + {b}) / {a}</span>."

    elif is_log:
        # Exponential and Logarithmic
        if q_idx == 0: # Evaluate log_b(val)
            b = rng.choice([2, 3, 5, 10])
            pwr = rng.randint(2, 4)
            val = b ** pwr
            ar_q = f"احسب القيمة الدقيقة للتعبير اللوغاريتمي التالي بدون آلة حاسبة: <span class='formula'>log_{{{b}}}({val})</span>"
            en_q = f"Calculate the exact value of the following logarithmic expression: <span class='formula'>log_{{{b}}}({val})</span>"
            options = [
                {"ar": f"{pwr}", "en": f"{pwr}"},
                {"ar": f"{b}", "en": f"{b}"},
                {"ar": f"{val}", "en": f"{val}"},
                {"ar": f"{pwr-1}", "en": f"{pwr-1}"}
            ]
            ar_ans = f"بما أن <span class='formula'>{b}^{pwr} = {val}</span>، فإن قيمة اللوغاريتم تمثل الأس اللازم لرفع الأساس إليه للحصول على المدخل: <span class='formula'>log_{{{b}}}({val}) = {pwr}</span>."
            en_ans = f"Since <span class='formula'>{b}^{pwr} = {val}</span>, the logarithm is the power to which the base must be raised to get the argument: <span class='formula'>log_{{{b}}}({val}) = {pwr}</span>."
            
        elif q_idx == 1: # Compound growth
            a = rng.randint(100, 500) * 10
            r = rng.randint(4, 9)
            t = rng.randint(2, 4)
            res = int(a * ((1 + r/100.0) ** t))
            ar_q = f"أوجد القيمة النهائية لمبلغ مستثمر قدره <span class='formula'>{a}</span> درهم بنسبة نمو سنوي مركبة <span class='formula'>{r}%</span> بعد مرور <span class='formula'>{t}</span> سنوات (مقرباً لأقرب عدد صحيح)."
            en_q = f"Find the final value of an invested amount of <span class='formula'>{a}</span> AED with a compound annual growth rate of <span class='formula'>{r}%</span> after <span class='formula'>{t}</span> years (rounded to the nearest integer)."
            options = [
                {"ar": f"<span class='formula'>{res}</span> درهم", "en": f"<span class='formula'>{res}</span> AED"},
                {"ar": f"<span class='formula'>{res - 150}</span> درهم", "en": f"<span class='formula'>{res - 150}</span> AED"},
                {"ar": f"<span class='formula'>{res + 200}</span> درهم", "en": f"<span class='formula'>{res + 200}</span> AED"},
                {"ar": f"<span class='formula'>{a + a*r*t//100}</span> درهم", "en": f"<span class='formula'>{a + a*r*t//100}</span> AED"}
            ]
            ar_ans = f"باستخدام صيغة النمو المركب: <span class='formula'>A = P(1 + r)^t = {a} · (1 + {r/100})^^{t} = {a} · ({1 + r/100})^^{t} ≈ {res}</span>."
            en_ans = f"Using compound growth formula: <span class='formula'>A = P(1 + r)^t = {a} · (1 + {r/100})^^{t} = {a} · ({1 + r/100})^^{t} ≈ {res}</span>."
            
        elif q_idx == 2: # Convert exp to log
            b = rng.choice([2, 5, 'b'])
            y = rng.choice(['x', 'y', 'A'])
            x = rng.choice(['n', 't', 'k'])
            ar_q = f"حول المعادلة الأسية التالية إلى معادلة لوغاريتمية مكافئة: <span class='formula'>{b}^{x} = {y}</span>"
            en_q = f"Convert the following exponential equation into its equivalent logarithmic equation: <span class='formula'>{b}^{x} = {y}</span>"
            options = [
                {"ar": f"<span class='formula'>log_{{{b}}}({y}) = {x}</span>", "en": f"<span class='formula'>log_{{{b}}}({y}) = {x}</span>"},
                {"ar": f"<span class='formula'>log_{{{y}}}({b}) = {x}</span>", "en": f"<span class='formula'>log_{{{y}}}({b}) = {x}</span>"},
                {"ar": f"<span class='formula'>log_{{{x}}}({y}) = {b}</span>", "en": f"<span class='formula'>log_{{{x}}}({y}) = {b}</span>"},
                {"ar": f"<span class='formula'>log_{{{b}}}({x}) = {y}</span>", "en": f"<span class='formula'>log_{{{b}}}({x}) = {y}</span>"}
            ]
            ar_ans = f"حسب تعريف اللوغاريتم، إذا كان <span class='formula'>{b}^{x} = {y}</span> فإن الأس هو قيمة اللوغاريتم للأساس {b}: <span class='formula'>log_{b}({y}) = {x}</span>."
            en_ans = f"By definition of logarithms, if <span class='formula'>{b}^{x} = {y}</span> then the exponent is the logarithm of {y} with base {b}: <span class='formula'>log_{b}({y}) = {x}</span>."
            
        else: # b^(x+c) = b^d
            b = rng.choice([2, 3, 5])
            c = rng.randint(1, 4)
            d = rng.randint(5, 8)
            ans = d - c
            ar_q = f"حل المعادلة الأسية التالية لإيجاد قيمة x: <span class='formula'>{b}^{{x + {c}}} = {b**d}</span>"
            en_q = f"Solve the following exponential equation for x: <span class='formula'>{b}^{{x + {c}}} = {b**d}</span>"
            options = [
                {"ar": f"<span class='formula'>x = {ans}</span>", "en": f"<span class='formula'>x = {ans}</span>"},
                {"ar": f"<span class='formula'>x = {ans+1}</span>", "en": f"<span class='formula'>x = {ans+1}</span>"},
                {"ar": f"<span class='formula'>x = {-ans}</span>", "en": f"<span class='formula'>x = {-ans}</span>"},
                {"ar": f"<span class='formula'>x = {d}</span>", "en": f"<span class='formula'>x = {d}</span>"}
            ]
            ar_ans = f"بما أن <span class='formula'>{b**d} = {b}^{d}</span>، فإننا نساوي الأسس: <span class='formula'>x + {c} = {d} => x = {d - c} = {ans}</span>."
            en_ans = f"Since <span class='formula'>{b**d} = {b}^{d}</span>, we equate the exponents: <span class='formula'>x + {c} = {d} => x = {d - c} = {ans}</span>."

    elif is_variation:
        # Variation and proportion
        if q_idx == 0: # Direct variation constant k
            x = rng.randint(3, 8)
            y = x * rng.randint(2, 5)
            k = y // x
            ar_q = f"إذا كانت y تتغير طردياً مع x، وكانت <span class='formula'>y = {y}</span> عندما تكون <span class='formula'>x = {x}</span>، فما قيمة ثابت التغير الطردي (k)؟"
            en_q = f"If y varies directly with x, and <span class='formula'>y = {y}</span> when <span class='formula'>x = {x}</span>, what is the constant of variation (k)?"
            options = [
                {"ar": f"k = {k}", "en": f"k = {k}"},
                {"ar": f"k = {1/k:.2f}", "en": f"k = {1/k:.2f}"},
                {"ar": f"k = {y - x}", "en": f"k = {y - x}"},
                {"ar": f"k = {y + x}", "en": f"k = {y + x}"}
            ]
            ar_ans = f"معادلة التغير الطردي هي <span class='formula'>y = kx => k = y / x = {y} / {x} = {k}</span>."
            en_ans = f"The direct variation equation is <span class='formula'>y = kx => k = y / x = {y} / {x} = {k}</span>."
            
        elif q_idx == 1: # Direct variation solve
            x1 = rng.randint(2, 5)
            y1 = x1 * rng.randint(3, 6)
            x2 = x1 * rng.randint(2, 3)
            y2 = (y1 * x2) // x1
            ar_q = f"تتغير y طردياً مع x. إذا كانت <span class='formula'>y = {y1}</span> عندما <span class='formula'>x = {x1}</span>، أوجد قيمة y عندما <span class='formula'>x = {x2}</span>."
            en_q = f"y varies directly with x. If <span class='formula'>y = {y1}</span> when <span class='formula'>x = {x1}</span>, find y when <span class='formula'>x = {x2}</span>."
            options = [
                {"ar": f"<span class='formula'>y = {y2}</span>", "en": f"<span class='formula'>y = {y2}</span>"},
                {"ar": f"<span class='formula'>y = {y2 - 2}</span>", "en": f"<span class='formula'>y = {y2 - 2}</span>"},
                {"ar": f"<span class='formula'>y = {y2 + 4}</span>", "en": f"<span class='formula'>y = {y2 + 4}</span>"},
                {"ar": f"<span class='formula'>y = {y1}</span>", "en": f"<span class='formula'>y = {y1}</span>"}
            ]
            ar_ans = f"باستخدام التناسب الطردي: <span class='formula'>y₁/x₁ = y₂/x₂ => {y1}/{x1} = y₂/{x2} => y₂ = ({y1} · {x2}) / {x1} = {y2}</span>."
            en_ans = f"Using direct proportion: <span class='formula'>y₁/x₁ = y₂/x₂ => {y1}/{x1} = y₂/{x2} => y₂ = ({y1} · {x2}) / {x1} = {y2}</span>."
            
        elif q_idx == 2: # Inverse variation k
            x = rng.randint(2, 6)
            y = rng.randint(3, 8)
            k = x * y
            ar_q = f"إذا كانت y تتغير عكسياً مع x، وكانت <span class='formula'>y = {y}</span> عندما تكون <span class='formula'>x = {x}</span>، فما قيمة ثابت التغير العكسي (k)؟"
            en_q = f"If y varies inversely with x, and <span class='formula'>y = {y}</span> when <span class='formula'>x = {x}</span>, what is the constant of inverse variation (k)?"
            options = [
                {"ar": f"k = {k}", "en": f"k = {k}"},
                {"ar": f"k = {y / x:.2f}", "en": f"k = {y / x:.2f}"},
                {"ar": f"k = {x / y:.2f}", "en": f"k = {x / y:.2f}"},
                {"ar": f"k = {x + y}", "en": f"k = {x + y}"}
            ]
            ar_ans = f"معادلة التغير العكسي هي <span class='formula'>y = k/x => k = y · x = {y} · {x} = {k}</span>."
            en_ans = f"The inverse variation equation is <span class='formula'>y = k/x => k = y · x = {y} · {x} = {k}</span>."
            
        else: # Proportion equation
            b = rng.randint(3, 6)
            c = b * rng.randint(2, 4)
            a = rng.randint(2, 5)
            x = (a * c) // b
            ar_q = f"حل التناسب التالي لإيجاد قيمة x المجهولة: <span class='formula'>{a} / {b} = x / {c}</span>"
            en_q = f"Solve the following proportion for the unknown x: <span class='formula'>{a} / {b} = x / {c}</span>"
            options = [
                {"ar": f"x = {x}", "en": f"x = {x}"},
                {"ar": f"x = {x-1}", "en": f"x = {x-1}"},
                {"ar": f"x = {x+2}", "en": f"x = {x+2}"},
                {"ar": f"x = {a*c}", "en": f"x = {a*c}"}
            ]
            ar_ans = f"بالضرب التبادلي: <span class='formula'>b · x = a · c => {b}x = {a} · {c} => x = {a*c} / {b} = {x}</span>."
            en_ans = f"By cross-multiplication: <span class='formula'>b · x = a · c => {b}x = {a} · {c} => x = {a*c} / {b} = {x}</span>."

    else:
        # Fallback algebraic / general arithmetic
        a = rng.randint(3, 8)
        b = rng.randint(2, 6)
        c = rng.randint(1, 10)
        res = a * b - c
        ar_q = f"احسب القيمة العددية الدقيقة للتعبير الرياضي التالي عند التعويض المباشر: <span class='formula'>{a}a - {c}</span> إذا كان <span class='formula'>a = {b}</span>."
        en_q = f"Evaluate the exact numerical value of the following mathematical expression: <span class='formula'>{a}a - {c}</span> if <span class='formula'>a = {b}</span>."
        options = [
            {"ar": f"<span class='formula'>{res}</span>", "en": f"<span class='formula'>{res}</span>"},
            {"ar": f"<span class='formula'>{res + c}</span>", "en": f"<span class='formula'>{res + c}</span>"},
            {"ar": f"<span class='formula'>{res - b}</span>", "en": f"<span class='formula'>{res - b}</span>"},
            {"ar": f"<span class='formula'>{a * b}</span>", "en": f"<span class='formula'>{a * b}</span>"}
        ]
        ar_ans = f"نعوض بـ {b} بدلاً من المتغير a: <span class='formula'>{a}({b}) - {c} = {a*b} - {c} = {res}</span>."
        en_ans = f"Substitute {b} for the variable a: <span class='formula'>{a}({b}) - {c} = {a*b} - {c} = {res}</span>."

    return {
        "q": {"ar": ar_q, "en": en_q},
        "options": options,
        "correct": 0,
        "answer": {"ar": ar_ans, "en": en_ans}
    }

