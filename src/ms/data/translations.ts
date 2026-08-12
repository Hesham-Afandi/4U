import { Language } from '../types';

export const translations = {
  en: {
    // Header
    portalBadge: 'Comprehensive Portal',
    portalTitle: 'Microsoft Office Practical Exams Suite',
    navOfficePortal: 'Office Portal',
    navWordTasks: 'Word Tasks',
    navPptTasks: 'PowerPoint Tasks',
    navLiveSimulator: 'Live Simulator',
    navPaperExam: 'Paper Exam',
    navTeacherKey: 'Teacher Key',
    timerPause: 'Pause',
    timerStart: 'Start',
    scoreLabel: 'Score',
    completionLabel: 'Completion',
    dataPackBtn: 'Data Pack',
    answerKeyBtn: 'Answer Key',
    resetBtn: 'Reset',
    langArabic: 'العربية (EG)',
    langEnglish: 'English (US)',

    // Hero Section
    officialBadge: 'Official Practical Assessment 2026',
    pointsAndModules: '100 Total Points • 6 Modules',
    examTitle: 'Microsoft Word Practical Examination',
    pptExamTitle: 'Microsoft PowerPoint Practical Examination',
    examDesc: 'Comprehensive evaluation of core Microsoft Word skills: Page Setup, Typography, Advanced Tables & Formulas, SmartArt & Diagrams, Dynamic Heading Styles, Auto TOC, Mail Merge, and PDF Export.',
    pptExamDesc: 'Comprehensive evaluation of Microsoft PowerPoint presentation skills: Slide Master & Themes, Custom Typography, Shapes, SmartArt & Charts, Trigger Animations, Morph Transitions, and Presenter View.',
    studentDataTitle: 'Candidate Registration Details',
    studentName: 'Candidate Full Name',
    studentNamePlaceholder: 'Enter student full name...',
    seatNumber: 'Seat / ID Number',
    seatNumberPlaceholder: 'e.g., 20260481',
    institution: 'Institution / Department',
    institutionPlaceholder: 'Enter institution name...',
    trainingGroup: 'Training Group',
    examDate: 'Exam Date',
    instructorName: 'Instructor / Evaluator',
    earnedScore: 'Earned Score',
    tasksCompleted: 'tasks completed',

    // Home Portal
    homeTitle: 'Microsoft Office Certification & Assessment Portal',
    homeSubtitle: 'Select a module to start your practical evaluation, practice on live simulators, or generate printable exam sheets.',
    startWordExam: 'Start Word Exam',
    launchSimulator: 'Launch Live Simulator',
    comingSoon: 'Coming Soon',

    // Modals & Tools
    dataPackTitle: 'Exam Raw Data Pack',
    answerKeyTitle: 'Instructor Answer Key & Guidance',
    scoreReportTitle: 'Exam Performance & Score Report',
    printableSheet: 'Printable Exam Sheet',
    printButton: 'Print Assessment Sheet',
    
    // Footer
    footerTitle: 'Microsoft Office Practical Exams Portal 2026',
    createdBy: 'Created by',
    authorName: 'Mr. Mohammed Hesham',
  },
  ar: {
    // Header
    portalBadge: 'منصة اختبارات شاملة',
    portalTitle: 'منصة الاختبارات العملية لمايكروسوفت أوفيس',
    navOfficePortal: 'بوابة أوفيس',
    navWordTasks: 'مهام وورد',
    navLiveSimulator: 'محاكي مباشر',
    navPaperExam: 'ورقة الاختبار',
    navTeacherKey: 'نموذج الإجابة',
    timerPause: 'إيقاف',
    timerStart: 'بدء',
    scoreLabel: 'النتيجة',
    completionLabel: 'نسبة الإنجاز',
    dataPackBtn: 'حزمة البيانات',
    answerKeyBtn: 'دليل الحلول',
    resetBtn: 'إعادة ضبط',
    langArabic: 'العربية (EG)',
    langEnglish: 'English (US)',

    // Hero Section
    officialBadge: 'التقييم العملي المعتمد 2026',
    pointsAndModules: '100 درجة • 6 وحدات اختبارية',
    examTitle: 'الاختبار العملي لمايكروسوفت وورد',
    examDesc: 'تقييم شامل لمهارات مايكروسوفت وورد الأساسية: إعدادات الصفحة، تنسيق النصوص، الجداول المتقدمة والصيغ، الرسومات التوضيحية SmartArt، الأنماط الديناميكية، جدول المحتويات الآلي، الدمج البريدي، والتصدير بصيغة PDF.',
    studentDataTitle: 'بيانات تسجيل المتقدم للاختبار',
    studentName: 'اسم الطالب / المتدرب بالكامل',
    studentNamePlaceholder: 'أدخل اسم الطالب الثلاثي/الرباعي...',
    seatNumber: 'رقم الجلوس / القيد',
    seatNumberPlaceholder: 'مثال: 20260481',
    institution: 'الجهة / المؤسسة التدريبية',
    institutionPlaceholder: 'أدخل اسم الجهة أو الكلية...',
    trainingGroup: 'المجموعة التدريبية',
    examDate: 'تاريخ الاختبار',
    instructorName: 'اسم المشرف / المُمتحِن',
    earnedScore: 'الدرجة المحرزة',
    tasksCompleted: 'مهام مكتملة',

    // Home Portal
    homeTitle: 'منصة تقييم واختبارات مايكروسوفت أوفيس',
    homeSubtitle: 'اختر التطبيق للبدء في التقييم العملي، التدرب على المحاكي التفاعلي، أو استخراج أوراق الاختبارات القابلة للطباعة.',
    startWordExam: 'بدء اختبار وورد',
    launchSimulator: 'تشغيل المحاكي التفاعلي',
    comingSoon: 'قريباً',

    // Modals & Tools
    dataPackTitle: 'حزمة البيانات والنصوص الخام للاختبار',
    answerKeyTitle: 'دليل الحلول والأنموذج الإرشادي للمشرف',
    scoreReportTitle: 'تقرير الأداء والدرجة النهائية',
    printableSheet: 'ورقة الاختبار القابلة للطباعة',
    printButton: 'طباعة ورقة التقييم',

    // Footer
    footerTitle: 'منصة الاختبارات العملية لمايكروسوفت أوفيس 2026',
    createdBy: 'إعداد وتصميم',
    authorName: 'Mr. Mohammed Hesham',
  }
};

export function getTranslation(lang: Language, key: keyof typeof translations['en']): string {
  return translations[lang]?.[key] || translations['en'][key] || key;
}
