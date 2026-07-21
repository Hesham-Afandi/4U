import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Search, RotateCcw, Heart, BarChart2, Sun, Moon, 
  Home, ChevronRight, Share2, Clipboard, Award, Printer, CheckCircle, Clock,
  Download, Mic, Sparkles, Megaphone, Radio, Pause, Play, Volume2, VolumeX,
  MessageSquare, Send, X, Flame, Sliders, Settings
} from 'lucide-react';
import { DB, countries } from './data';
import { Term, Stream, Program, Grade, Subject, Unit, Lesson, AppState } from './types';
import { 
  FavoritesModal, StatsModal, CertificateModal, ShareModal, 
  PlannerModal, SummaryNotesModal, ReminderSettingModal, AlarmTriggeredModal,
  VideoPlayerModal, ExamCodesModal
} from './components/modals';
import { WeeklyStudyPlanner } from './components/layout';
import { STUDY_QUOTES } from './data/quotes';
import { extractTextFromLessonUrl } from './utils/pdfParser';

const DAYS_OF_WEEK = [
  { key: 'Saturday', name: 'السبت' },
  { key: 'Sunday', name: 'الأحد' },
  { key: 'Monday', name: 'الإثنين' },
  { key: 'Tuesday', name: 'الثلاثاء' },
  { key: 'Wednesday', name: 'الأربعاء' },
  { key: 'Thursday', name: 'الخميس' },
  { key: 'Friday', name: 'الجمعة' },
];

// =========================================================================
// 🔔 لوحة تحكم الإشعارات الإدارية للمنصة (تغيير نص الإشعار العام للمستخدمين)
// قم بتغيير النص أدناه لإرسال رسالة أو تنبيه جديد لكافة زوار المنصة:
// =========================================================================
const ADMIN_NOTIFICATION = {
  isEnabled: true, // اجعلها false لإخفاء شريط الإشعارات تماماً
  text: "📢 تنبيه هام: تم رفع وتحديث كافة فيديوهات الشرح وحلول نماذج امتحانات الصف العاشر والحادي عشر بنجاح! بالتوفيق والنجاح لجميع طلابنا الأعزاء ✨",
  badgeText: "جديدنا اليوم", // كلمة تظهر بجانب الإشعار كملصق ملون
  colorScheme: "amber", // 'amber' أو 'indigo' أو 'green' أو 'rose' للتحكم في مظهر التنبيه
};

// =========================================================================
// 🌟 قائمة الاقتباسات وحكم العلم والجمال (تتغير تلقائياً مع كل تحديث للصفحة)
// =========================================================================

const COUNTRY_INFO: Record<string, { name: string; flag: string }> = {
  UAE: { name: 'الإمارات العربية المتحدة', flag: '🇦🇪' },
  Saudi: { name: 'المملكة العربية السعودية', flag: '🇸🇦' },
  Egypt: { name: 'جمهورية مصر العربية', flag: '🇪🇬' },
  Oman: { name: 'سلطنة عمان', flag: '🇴🇲' },
  Qatar: { name: 'دولة قطر', flag: '🇶🇦' },
  Bahrain: { name: 'مملكة البحرين', flag: '🇧🇭' },
};

interface Reciter {
  id: string;
  name: string;
  description: string;
  urls: string[];
}

const QURAN_RECITERS: Reciter[] = [
  {
    id: 'abdulbasit',
    name: 'الشيخ عبدالباسط عبدالصمد',
    description: 'تلاوات خاشعة ومجودة 📖',
    urls: [
      'https://radio.mp3islam.com/listen/abdulbasit/radio.mp3',
      'https://backup.qurango.net/radio/tarteel_abdulbasit/;stream.mp3',
      'https://backup.qurango.net/radio/tarteel_abdulbasit',
      'https://qurango.net/radio/tarteel_abdulbasit/;stream.mp3',
      'https://qurango.net/radio/tarteel_abdulbasit',
      'https://live.mp3quran.net/radio/tarteel_abdulbasit',
      'https://server11.mp3quran.net/basit/055.mp3', // Surah Ar-Rahman (Static Backup 1)
      'https://server11.mp3quran.net/basit/018.mp3', // Surah Al-Kahf (Static Backup 2)
      'https://server11.mp3quran.net/basit/036.mp3', // Surah Ya-Sin (Static Backup 3)
      'https://server11.mp3quran.net/basit/056.mp3', // Surah Al-Waqi'ah (Static Backup 4)
      'https://server11.mp3quran.net/basit/067.mp3'  // Surah Al-Mulk (Static Backup 5)
    ]
  },
  {
    id: 'minshawi',
    name: 'الشيخ محمد صديق المنشاوي',
    description: 'صوت المصحف المرتل والمجود 🎧',
    urls: [
      'https://serverkw.quran-uni.com:8230/;*.mp3',
      'https://backup.qurango.net/radio/mohammad_siddiq_alminshawi'
    ]
  },
  {
    id: 'husary',
    name: 'الشيخ محمود خليل الحصري',
    description: 'المعلم المتقن بقراءاته العذبة 📜',
    urls: [
      'https://serverkw.quran-uni.com:8018/;*.mp3',
      'https://backup.qurango.net/radio/mahmoud_khalil_alhussary'
    ]
  },
  {
    id: 'tablawi',
    name: 'الشيخ محمد محمود الطبلاوي',
    description: 'قراءة مصرية أصيلة ذات شجن 💡',
    urls: [
      'https://serverkw.quran-uni.com:8078/;*.mp3',
      'https://backup.qurango.net/radio/mohammad_al_tablaway'
    ]
  },
  {
    id: 'banna',
    name: 'الشيخ محمود علي البنا',
    description: 'تلاوة نادرة وخاشعة من قيثارة السماء ✨',
    urls: [
      'https://serverkw.quran-uni.com:8024/;*.mp3',
      'https://backup.qurango.net/radio/mahmoud_ali__al_banna'
    ]
  },
  {
    id: 'mustafa_ismail',
    name: 'الشيخ مصطفى إسماعيل',
    description: 'عبقري التلاوة والمقامات القرآنية 🌟',
    urls: [
      'https://serverkw.quran-uni.com:8224/;*.mp3',
      'https://backup.qurango.net/radio/mustafa_ismail'
    ]
  }
];

const platformLogo = new URL('./assets/images/platform_logo_transparent.svg', import.meta.url).href;
const teacherLoader = new URL('./assets/images/teacher_loader_1783347042138.jpg', import.meta.url).href;

const getApiUrl = (path: string): string => {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  if (hostname.includes('github.io') || (hostname !== 'localhost' && !hostname.endsWith('run.app') && !hostname.includes('3000'))) {
    return `https://ais-pre-t5z4xmcbcttqdwgdadfuls-72955753475.europe-west2.run.app${path}`;
  }
  return path;
};

export default function App() {
  // App Navigation State
  const [appState, setAppState] = useState<AppState>({
    country: null,
    term: null,
    stream: null,
    program: null,
    grade: null,
    subject: null,
    unit: null,
    lesson: null,
  });

  // Navigation History for Back Button
  const [history, setHistory] = useState<AppState[]>([]);

  // UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [studentName, setStudentName] = useState('');
  
  // Modals
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showExamCodesModal, setShowExamCodesModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState<{ title: string; url: string } | null>(null);
  const [plannerDay, setPlannerDay] = useState('Saturday');
  const [plannerTime, setPlannerTime] = useState('16:00');
  const [plannerLessonKey, setPlannerLessonKey] = useState('');
  const [plannerNotes, setPlannerNotes] = useState('');

  // Persistence States
  const [favorites, setFavorites] = useState<{ key: string; title: string; icon: string; unitName: string }[]>([]);
  const [progress, setProgress] = useState<Record<string, { read: boolean; examDone: boolean; totalTime: number }>>({});
  const [studyPlan, setStudyPlan] = useState<any[]>([]);
  const [showPlannerModal, setShowPlannerModal] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [loaderError, setLoaderError] = useState(false);
  const [loaderSrc, setLoaderSrc] = useState(teacherLoader);
  const [toast, setToast] = useState<string | null>(null);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState(false);
  const [activeVideoLesson, setActiveVideoLesson] = useState<Lesson | null>(null);
  const [activeQuote, setActiveQuote] = useState('');

  // --- Visit Streak & Platform Active Session Timer ---
  const [visitStreak, setVisitStreak] = useState(1);
  const [streakMessage, setStreakMessage] = useState('');
  const [platformSeconds, setPlatformSeconds] = useState(0);

  // --- 👨‍🏫 Chatbot States (المعلم الافتراضي) ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'model'; text: string }>>([
    {
      role: 'model',
      text: 'مرحباً بك يا بطل في منصة 4U التعليمية! 👨‍🏫\n\nأنا معلمك الافتراضي ومساعدك الشخصي لمراجعة دروسك وتسهيل الصعب عليك في كل المواد والامتحانات.\n\nيلا نراجع مع بعض! اسألني عن أي موضوع أو قانون حابب تفهمه اليوم 👇✨'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // --- ⚙️ Chat Server & Connection States ---
  const [showChatSettings, setShowChatSettings] = useState(false);
  const [chatGeminiKey, setChatGeminiKey] = useState(() => {
    return localStorage.getItem('4u_chat_gemini_key') || '';
  });

  // --- 🔊 Text-To-Speech (TTS) States ---
  const [ttsState, setTtsState] = useState<'idle' | 'playing' | 'paused' | 'loading'>('idle');
  const [ttsRate, setTtsRate] = useState(1);
  const ttsUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [ttsCurrentParagraph, setTtsCurrentParagraph] = useState('');

  // Focus Mode & Personal Student Notes
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [studentNotes, setStudentNotes] = useState<Record<string, string>>({});
  const [showSummaryNotesModal, setShowSummaryNotesModal] = useState(false);

  // Daily Reminder States
  const [dailyReminderTime, setDailyReminderTime] = useState('17:00');
  const [dailyReminderActive, setDailyReminderActive] = useState(false);
  const [dailyReminderMsg, setDailyReminderMsg] = useState('حان وقت المذاكرة اليومي! فلنجتهد معاً لنصنع التفوق 📚✨');
  const [showReminderSettingModal, setShowReminderSettingModal] = useState(false);
  const [showAlarmTriggeredModal, setShowAlarmTriggeredModal] = useState(false);

  // Quran Radio States (Sheikh Abdulbasit Abdulsamad & Others)
  const [activeReciterId, setActiveReciterId] = useState('abdulbasit');
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  const [radioVolume, setRadioVolume] = useState(0.5);
  const [isRadioMuted, setIsRadioMuted] = useState(false);
  const [showRadioPanel, setShowRadioPanel] = useState(false);
  const radioAudioRef = useRef<HTMLAudioElement | null>(null);
  const isRadioIntentPlayingRef = useRef(false);

  // Pomodoro Timer States (Inside Active Lesson)
  const [pomodoroSeconds, setPomodoroSeconds] = useState(1500); // 25 mins = 1500 secs
  const [pomodoroIsActive, setPomodoroIsActive] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<'study' | 'break'>('study');
  const [pomodoroTotalMinutesUsed, setPomodoroTotalMinutesUsed] = useState(0);

  // Time tracker ref
  const lessonStartTimeRef = useRef<number | null>(null);

  const prevHistoryLengthRef = useRef(0);
  const isPopStateRef = useRef(false);
  const isProgrammaticGoRef = useRef(false);

  // 1. Initial Setup: Load theme, favorites, progress, and handle PWA install prompt
  useEffect(() => {
    // Theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Favorites
    try {
      const favs = JSON.parse(localStorage.getItem('4u_favorites') || '[]');
      setFavorites(favs);
    } catch {
      setFavorites([]);
    }

    // Progress
    try {
      const prog = JSON.parse(localStorage.getItem('4u_progress') || '{}');
      setProgress(prog);
    } catch {
      setProgress({});
    }

    // Study Plan
    try {
      const plan = JSON.parse(localStorage.getItem('4u_study_plan') || '[]');
      setStudyPlan(plan);
    } catch {
      setStudyPlan([]);
    }

    // Student Name
    try {
      const name = localStorage.getItem('4u_student_name') || '';
      setStudentName(name);
    } catch {
      setStudentName('');
    }

    // Load & Calculate Visit Streak
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const lastVisit = localStorage.getItem('4u_last_visit_date');
      const savedStreak = parseInt(localStorage.getItem('4u_visit_streak') || '0', 10);
      
      let currentStreak = savedStreak;

      if (!lastVisit) {
        // First time ever visiting
        currentStreak = 1;
      } else {
        const lastVisitDate = new Date(lastVisit);
        // Reset hours/minutes/seconds to compare days purely
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate.getTime() - lastVisitDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Visited yesterday, increment streak!
          currentStreak = savedStreak + 1;
        } else if (diffDays > 1) {
          // Missed one or more days, reset streak to 1
          currentStreak = 1;
        }
      }

      localStorage.setItem('4u_last_visit_date', todayStr);
      localStorage.setItem('4u_visit_streak', currentStreak.toString());
      setVisitStreak(currentStreak);

      // Set motivating streak messages in Arabic based on the number of days
      if (currentStreak === 1) {
        setStreakMessage('بداية ممتازة يا بطل! استمر في الحضور اليومي لبناء شعلة تفوقك وسحق الامتحانات! 🚀');
      } else if (currentStreak === 2) {
        setStreakMessage('رائع جداً! يومان متتاليان من التحصيل والمذاكرة. أنت تسير بخطى الواثق! 🌟');
      } else if (currentStreak >= 3 && currentStreak <= 5) {
        setStreakMessage(`مذهل! شعلتك بدأت تتوهج! ${currentStreak} أيام متتالية من المثابرة والتميز اليومي! 🔥📚`);
      } else {
        setStreakMessage(`عبقري متألق! ${currentStreak} أيام متتالية من العمل الدؤوب! شعلة علمية حارقة تقودك للقمة! 🏆🔥🎓`);
      }
    } catch (e) {
      console.error("Failed to track visit streak:", e);
    }

    // Restore Navigation State
    try {
      const savedAppState = localStorage.getItem('4u_app_state');
      const savedHistory = localStorage.getItem('4u_history');
      if (savedAppState) {
        setAppState(JSON.parse(savedAppState));
      }
      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory);
        setHistory(parsedHistory);
        prevHistoryLengthRef.current = parsedHistory.length;
      }
    } catch (e) {
      console.error("Failed to restore navigation state:", e);
    }

    // Loader fadeout
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200);

    // Pick a random quote on refresh/mount
    const randomIdx = Math.floor(Math.random() * STUDY_QUOTES.length);
    setActiveQuote(STUDY_QUOTES[randomIdx]);

    // Check if the prompt was already deferred globally on window before React mounted
    if ((window as any).deferredPrompt) {
      setInstallPrompt((window as any).deferredPrompt);
    }

    // Expose callback so index.html script can update state if event fires early
    (window as any).onBeforeInstallPrompt = (e: any) => {
      setInstallPrompt(e);
    };

    // PWA Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      (window as any).deferredPrompt = e;
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      delete (window as any).onBeforeInstallPrompt;
    };
  }, []);

  // Sync theme changes
  const toggleTheme = () => {
    const newDark = !isDarkMode;
    setIsDarkMode(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Web Speech API Voice Search
  const startVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToastMsg('⚠️ عذراً، متصفحك الحالي لا يدعم ميزة البحث الصوتي.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-EG'; // Support Arabic
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setToast('🎙️ جاري الاستماع صوتياً... تحدث الآن');
    };

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      if (speechToText) {
        setSearchQuery(speechToText);
        showToastMsg(`🔍 تم التقاط: "${speechToText}"`);
      }
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      setIsListening(false);
      showToastMsg('❌ حدث خطأ في التقاط الصوت. حاول مرة أخرى.');
    };

    recognition.onend = () => {
      setIsListening(false);
      setToast((prev) => (prev === '🎙️ جاري الاستماع صوتياً... تحدث الآن' ? null : prev));
    };

    recognition.start();
  };

  // --- ⏱️ Real-time Platform Session Active Timer ---
  useEffect(() => {
    const interval = setInterval(() => {
      setPlatformSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatPlatformTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return [
      hrs.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');
  };

  // --- Helper: Clean and normalize Arabic text for keyword matching ---
  const cleanArabicTextForMatch = (t: string): string => {
    return t
      .trim()
      .toLowerCase()
      .replace(/[أإآأ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/[^\w\s\u0600-\u06FF]/gi, ''); // Keep only Arabic letters, English letters, and spaces
  };

  // --- 🧠 Smart Client-Side Educational AI Teacher (Fallback & GitHub Pages engine) ---
  const generateClientSideTeacherResponse = (msg: string): string => {
    const cleaned = cleanArabicTextForMatch(msg);
    const lesson = appState.lesson;
    const subject = appState.subject;
    const grade = appState.grade;

    // Context Header
    let contextHeader = "";
    if (lesson) {
      contextHeader = `*(ملاحظة: تذكير بأننا ندرس حالياً درس: **${lesson.title}** في مادة **${subject?.title || 'الدراسة'}** للصف **${grade?.name || 'الأساسي'}** 📚)*\n\n`;
    }

    // 1. Greetings
    if (
      cleaned.includes('سلام') || 
      cleaned.includes('مرحبا') || 
      cleaned.includes('اهلا') || 
      cleaned.includes('هلا') || 
      cleaned.includes('صباح') || 
      cleaned.includes('مساء') || 
      cleaned.includes('هاي') ||
      cleaned.includes('مرحبتين')
    ) {
      let reply = `أهلاً بك يا بطل المستقبل في منصة 4U التعليمية المتكاملة! 👋✨\n\n`;
      if (lesson) {
        reply += `أنا معلمك الافتراضي، وأنا سعيد جداً بمذاكرتك لدرس **"${lesson.title}"** الآن! 🌟\n\n`;
        reply += `كيف يمكنني مساعدتك اليوم؟ يمكنك أن تطلب مني:\n`;
        reply += `- 📝 **شرح وتلخيص** هذا الدرس بشكل مبسط وممتع.\n`;
        reply += `- ⚡ **اختبار سريع** من 3 أسئلة لتتحقق من فهمك.\n`;
        reply += `- 🎯 **أهم الأسئلة** التي تتكرر دائماً في الامتحان لهذا الدرس.\n`;
      } else {
        reply += `أنا معلمك الافتراضي ومستشارك الدراسي الذكي، متواجد هنا لمساعدتك في سحق الامتحانات وتفجير العلامات الكاملة! 🚀💯\n\n`;
        reply += `اختر أي مادة أو درس من القائمة وابدأ المذاكرة، أو اطرح عليّ أي سؤال في أي مادة (رياضيات، علوم، لغة عربية، لغة إنجليزية...) وسأشرحه لك فوراً بأسلوب سهل وممتع! 🧠✨`;
      }
      return reply;
    }

    // 2. Explanation / Summary of current active lesson
    if (
      (cleaned.includes('شرح') || 
       cleaned.includes('اشرح') || 
       cleaned.includes('لخص') || 
       cleaned.includes('تلخيص') || 
       cleaned.includes('مراجعه') || 
       cleaned.includes('راجع')) && 
      lesson
    ) {
      let reply = `${contextHeader}أبشر يا بطل! إليك **تلخيصاً ذكياً وشرحاً مبسطاً** لأهم النقاط الأساسية في هذا الدرس لتضمن فهمه 100%:\n\n`;
      
      if (lesson.content?.intro) {
        reply += `### 💡 المفهوم العام للدرس:\n${lesson.content.intro}\n\n`;
      }
      
      if (lesson.content?.sections && Array.isArray(lesson.content.sections)) {
        reply += `### 🔍 الأفكار الرئيسية والشرح:\n`;
        lesson.content.sections.forEach((sec: any, idx: number) => {
          reply += `**${idx + 1}. ${sec.title || 'فكرة رئيسية'}**:\n`;
          if (typeof sec.content === 'string') {
            reply += `${sec.content}\n\n`;
          } else if (Array.isArray(sec.content)) {
            sec.content.forEach((bullet: string) => {
              reply += `- ${bullet}\n`;
            });
            reply += `\n`;
          }
          if (sec.rows && Array.isArray(sec.rows)) {
            reply += `📊 *جدول تبسيطي للفكرة*:\n`;
            sec.rows.forEach((row: any) => {
              reply += `• ${row.join(' ⟵ ')}\n`;
            });
            reply += `\n`;
          }
        });
      }

      reply += `✨ **نصيحة المعلم**: هذا الدرس يركز بشدة على الفهم والربط بالواقع. قم بحل الاختبار الخاص بالدرس في الأسفل لتثبيت المعلومة تماماً وسحق الامتحان! 🚀🎯`;
      return reply;
    }

    // 3. Quiz / Questions
    if (
      cleaned.includes('اختبار') || 
      cleaned.includes('امتحان') || 
      cleaned.includes('اسئله') || 
      cleaned.includes('سؤال') || 
      cleaned.includes('مسابقه') || 
      cleaned.includes('اختبرني')
    ) {
      if (lesson) {
        let reply = `${contextHeader}جاهز للتحدي يا بطل؟ 💪 إليك **اختباراً سريعاً وتفاعلياً** من أسئلة حقيقية متوقعة في الامتحان لدرس **"${lesson.title}"**:\n\n`;
        
        if (lesson.questions && Array.isArray(lesson.questions) && lesson.questions.length > 0) {
          lesson.questions.slice(0, 3).forEach((q: any, idx: number) => {
            reply += `**السؤال ${idx + 1}: ${q.question || q.q}**\n`;
            if (q.options) {
              q.options.forEach((opt: string, oIdx: number) => {
                reply += `   [ ${oIdx + 1} ]  ${opt}\n`;
              });
            }
            reply += `\n`;
          });
          reply += `💡 **فكر جيداً واكتب لي أرقام الإجابات الصحيحة في الشات وسأصححها لك فوراً مع الشرح والتشجيع!** 🔥✨`;
        } else {
          reply += `**السؤال 1**: ما هو الهدف الرئيسي من دراسة هذا الدرس؟\n`;
          reply += `   [ 1 ] الفهم والتطبيق العملي وسحق الامتحانات وتفجير الدرجات الكلية.\n`;
          reply += `   [ 2 ] الحفظ الصم بدون تفكير أو تطبيق.\n\n`;
          reply += `**السؤال 2**: كيف تضمن المراجعة والتفوق معنا في منصة 4U؟\n`;
          reply += `   [ 1 ] عن طريق حل أوراق العمل ومراجعة المعلم الافتراضي باستمرار.\n`;
          reply += `   [ 2 ] بعدم التدرب على الأسئلة.\n\n`;
          reply += `💡 **اكتب لي رقم إجابتك الصحيحة (مثلاً: 1) وسأصححها لك فوراً!**`;
        }
        return reply;
      } else {
        return `أهلاً بك يا بطل! 🏆 هل تود اختبار معلوماتك وسحق الأسئلة الصعبة؟\n\n` +
               `من فضلك **اختر أي درس** تود مراجعته أولاً من القائمة التعليمية، ثم افتح الشات واطلب مني اختباراً سريعاً، وسأقوم بإنشاء أسئلة مخصصة لهذا الدرس بدقة! 📚🔥`;
      }
    }

    // 4. Answers check
    if (/^[1-3](\s*,\s*[1-3])*$/.test(cleaned) || cleaned.includes('الاجابه') || cleaned.includes('الجواب') || cleaned === '1' || cleaned === '2' || cleaned === '3') {
      return `يا سلام على الذكاء والسرعة! 🌟👏 إجابتك ممتازة ومحاولتك تدل على تركيزك العالي.\n\n` +
             `أنت تفكر بأسلوب علمي رائع! الاستمرار في حل التمارين المتنوعة على منصة 4U هو سلاحك السري للدرجة الكاملة.\n\n` +
             `استمر في المذاكرة والتدرب وحل أوراق العمل لضمان التميز الصدارة دائماً! فخور بك جداً يا بطل! 🎓💖`;
    }

    // 5. Maths subjects
    if (
      cleaned.includes('رياضيات') || 
      cleaned.includes('حساب') || 
      cleaned.includes('معادله') || 
      cleaned.includes('جبر') || 
      cleaned.includes('هندسه') || 
      cleaned.includes('ارقام') || 
      cleaned.includes('مساله')
    ) {
      return `الرياضيات هي لغة الأذكياء وغذاء العقل! 📐➕➖\n\n` +
             `لكي تسحق أي مسألة رياضيات وتضمن الدرجة النهائية، اتبع هذه القواعد الذهبية:\n` +
             `1. **افهم القانون أولاً**: لا تحفظ القانون بل افهم من أين جاء وكيف يُطبق.\n` +
             `2. **الخطوات التدريجية**: اكتب المعطيات ثم المطلوب، وحل خطوة بخطوة للحصول على درجات الخطوات كاملة.\n` +
             `3. **الممارسة المستمرة**: الرياضيات تحتاج حلاً بالورقة والقلم، لا تكتفي بالقراءة بالعين فقط!\n\n` +
             `هل لديك مسألة معينة تود أن نحلها معاً؟ اكتبها لي وسأبسطها لك فوراً! ✏️✨`;
    }

    // 6. Sciences subjects
    if (
      cleaned.includes('علوم') || 
      cleaned.includes('فيزياء') || 
      cleaned.includes('كيمياء') || 
      cleaned.includes('احياء') || 
      cleaned.includes('تجربه') || 
      cleaned.includes('خليه') || 
      cleaned.includes('قوة') || 
      cleaned.includes('طاقه')
    ) {
      return `العلوم والفيزياء هي نافذتنا لفهم أسرار الكون الفسيح من حولنا! 🔬🧪🌌\n\n` +
             `لفهم دروس العلوم بذكاء وبدون تعقيد:\n` +
             `- **اربط الدرس بالواقع**: مثل ربط درس الجاذبية بسقوط الأشياء، أو درس التبخر بغليان الماء.\n` +
             `- **الرسوم التوضيحية**: ارسم الخلايا، أو الدوائر الكهربائية، أو الروابط الكيميائية بيدك لتثبت الفكرة في مخيلتك.\n` +
             `- **السبب والنتيجة**: افهم لماذا تحدث الظواهر وليس فقط متى تحدث.\n\n` +
             `اطلب مني شرح أي تجربة أو قانون علمي وسأجعلها أسهل مما تتخيل! 💡🔥`;
    }

    // 7. Arabic Language
    if (
      cleaned.includes('عربي') || 
      cleaned.includes('نحو') || 
      cleaned.includes('اعراب') || 
      cleaned.includes('لغه') || 
      cleaned.includes('قراءه') || 
      cleaned.includes('كتابه')
    ) {
      return `لغتنا العربية الجميلة هي لغة الضاد والفصاحة والإبداع! ✍️📖\n\n` +
             `للتفوق في مادة اللغة العربية والنحو:\n` +
             `- **افهم الجملة أولاً**: هل هي اسمية تبدأ باسم (مبتدأ وخبر) أم فعلية تبدأ بفعل (فعل وفاعل ومفعول).\n` +
             `- **التطبيق اليومي**: حاول استخراج القواعد الإملائية والنحوية من أي كتاب أو مجلة تقرأها.\n` +
             `- **القراءة بصوت مسموع**: تقوي النطق السليم وتساعدك على تذوق الجمال البلاغي.\n\n` +
             `إذا كان لديك بيت شعر أو جملة تود إعرابها، اكتبها لي وسأعربها معك بكل سهولة! 🌟📚`;
    }

    // 8. English Language
    if (
      cleaned.includes('انجليزي') || 
      cleaned.includes('english') || 
      cleaned.includes('grammar') || 
      cleaned.includes('words') || 
      cleaned.includes('translate') || 
      cleaned.includes('ترجم')
    ) {
      return `English is your passport to the world! It is super easy and fun to learn! 🇬🇧🇺🇸✈️\n\n` +
             `To boost your English grade and sound like a native speaker:\n` +
             `1. **Practice daily**: Speak, read, or listen to English for just 10 minutes a day.\n` +
             `2. **Use flashcards**: Write down new vocabulary words with funny drawings to remember them easily.\n` +
             `3. **Master the tenses**: Learn the difference between Past, Present, and Future step-by-step.\n\n` +
             `Ask me to translate any word, or write a sentence in English and let me check it for you! Let's do it! 🚀`;
    }

    // 9. Motivation & Study Tips
    if (
      cleaned.includes('تعبت') || 
      cleaned.includes('ملل') || 
      cleaned.includes('صعب') || 
      cleaned.includes('خايف') || 
      cleaned.includes('احباط') || 
      cleaned.includes('دراسه') || 
      cleaned.includes('مذاكره') || 
      cleaned.includes('نصيحه') || 
      cleaned.includes('كيف اذاكر')
    ) {
      return `خذ نفساً عميقاً يا بطل.. أنا فخور جداً بوقوفك هنا وباهتمامك! 🤍✨\n\n` +
             `من الطبيعي جداً أن تشعر بالتعب أو الملل أحياناً، فالعقل مثل العضلات يحتاج إلى راحة ليعود أقوى. إليك خطة طوارئ سريعة لاسترجاع طاقتك الكاملة:\n` +
             `- **قاعدة الـ 25 دقيقة (بومودورو)**: ذاكر بتركيز شديد لمدة 25 دقيقة فقط، ثم خذ استراحة لمدة 5 دقائق (اشرب ماء، تحرك، أو تمدد) ثم كرر ذلك. ستجد المذاكرة أصبحت خفيفة وسريعة!\n` +
             `- **كافئ نفسك**: حدد مكافأة صغيرة لنفسك عند إنهاء درس معين (كوب من مشروبك المفضل، أو 10 دقائق لعب مع حيوانك الأليف، أو تصفح سريع).\n` +
             `- **تذكر هدفك العظيم**: تخيل فرحتك الكبرى وفرحة أهلك يوم صدور النتيجة وأنت تحمل الدرجة الكاملة والمركز الأول! تستحق التعب لأجل هذا الحلم الجميل 🎓🎉.\n\n` +
             `تذكر دائماً: "القمة تتسع للجميع، وأنت من بين النخبة الذين سيصلون إليها بالتأكيد!" أنا معك دائماً خطوة بخطوة 🏆💖`;
    }

    // Default Fallback
    let defaultReply = `سؤال رائع وذكي جداً يا بطل! 🧠💡\n\n`;
    if (lesson) {
      defaultReply += `بخصوص سؤالك المتعلق بدرس **"${lesson.title}"**: هذا المفهوم يعتمد على الفهم العميق للنقاط الأساسية التي شرحناها بالأعلى. \n\n`;
      defaultReply += `الاستمرار في المحاولة وحل الأسئلة هو مفتاح التفوق والتميز الدراسي. اكتب لي المزيد من التفاصيل حول سؤالك أو اطلب مني شرح الدرس أو عمل اختبار تفاعلي سريع! 📚🎯`;
    } else {
      defaultReply += `أنا متواجد دائماً لمساعدتك في مراجعة دروسك وسحق امتحاناتك بنجاح باهر! 🚀💯\n\n`;
      defaultReply += `لكي أستطيع إجابتك بأفضل شكل وبشرح مفصل وممتع جداً، من فضلك **اختر مادة ودرساً من القائمة التعليمية** على اليمين، وسنقوم بمراجعته وحل أوراق العمل المخصصة له بكل حب وسهولة! ✨🎓`;
    }
    return defaultReply;
  };

  // --- 👨‍🏫 Chatbot Communication (المعلم الافتراضي) ---
  const handleSendChatMessage = async (customMessage?: string) => {
    const textToSend = customMessage || chatInput;
    if (!textToSend.trim() || isChatLoading) return;

    if (!customMessage) setChatInput('');

    const newMessages = [...chatMessages, { role: 'user' as const, text: textToSend }];
    setChatMessages(newMessages);
    setIsChatLoading(true);

    try {
      let replyText = '';
      const isGitHubPages = window.location.hostname.includes('github.io');
      const hasCustomKey = chatGeminiKey && chatGeminiKey.trim().length > 5;

      if (hasCustomKey) {
        // Option A: Call Gemini directly using custom API key (with stable gemini-2.5-flash model)
        const systemInstruction = `
أنت "المعلم الافتراضي" الحكيم والودود على "المنصة التعليمية المتكاملة 4U".
مهمتك هي مساعدة الطالب ومراجعته في دروسه، والإجابة على استفساراته العامة المتعلقة بالمنهج الدراسي (سواء لبلدان الخليج مثل الإمارات، السعودية، قطر، عمان، البحرين أو مصر).
- ممنوع تماماً ذكر أسماء "جيمني" (Gemini) أو "شات جي بي تي" (ChatGPT) أو "جوجل" (Google) أو أي أداة ذكاء اصطناعي أخرى. إذا سألك الطالب من أنت، أخبره بكل حب: "أنا معلمك الافتراضي ومستشارك الدراسي على منصة 4U، متواجد دائماً هنا لأساعدك في رحلتك التعليمية وسحق الامتحانات! يلا نراجع مع بعض ✨".
- تفاعل مع الطالب بأسلوب المعلم الحنون، الدافئ والمشجع. استخدم عبارات إيجابية مثل "يا بطل"، "يا متميزة"، "يا بطلة المستقبل"، "أحسنت"، "سؤال ذكي جداً!"، "فخور بك وباهتمامك".
- بسّط المفاهيم المعقدة، واستخدم الترتيب النقطي أو الجداول التوضيحية البسيطة عند الحاجة.
- استخدم الرموز التعبيرية بحكمة ومرح لتسهيل القراءة وزيادة التفاعل (مثل: 🔥, 📚, ✨, 🚀, 🎓, 💡, 📝).
- تواصل باللغة العربية بلهجة بيضاء أو فصحى مبسطة وواضحة جداً، وإذا سألك الطالب بالإنجليزية أجب بالإنجليزية بأسلوب مشجع وبسيط ومناسب لطلاب المدارس.
- ركز على تعزيز ثقته بنفسه وذكّره بأهمية المذاكرة والاستمرارية لتحقيق أحلامه.
`;

        const formattedContents = newMessages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        }));

        const clientModels = ['gemini-3.1-flash-lite', 'gemini-3.5-flash'];
        let fetchError: any = null;

        for (const model of clientModels) {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${chatGeminiKey.trim()}`;
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                contents: formattedContents,
                systemInstruction: {
                  parts: [{ text: systemInstruction }]
                },
                generationConfig: {
                  temperature: 0.7,
                }
              })
            });

            if (!response.ok) {
              const errData = await response.json().catch(() => ({}));
              throw new Error(errData?.error?.message || `API Error ${response.status}`);
            }

            const data = await response.json();
            const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!reply) {
              throw new Error('لم يرجع نموذج الذكاء الاصطناعي رداً صالحاً.');
            }
            replyText = reply;
            fetchError = null;
            break; // Success! Break out of the model loop
          } catch (err: any) {
            fetchError = err;
            console.warn(`Custom API key call failed for model ${model}:`, err.message || err);
          }
        }

        if (fetchError) {
          throw fetchError;
        }
      } else {
        // Option B: Call relative local server /api/chat (using platform process.env.GEMINI_API_KEY from Google AI Studio)
        const response = await fetch(getApiUrl('/api/chat'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: textToSend,
            history: newMessages.slice(0, -1),
          })
        });

        if (!response.ok) {
          throw new Error('SERVER_UNREACHABLE');
        }

        const data = await response.json();
        replyText = data.reply;
      }

      setChatMessages((prev) => [...prev, { role: 'model' as const, text: replyText }]);

    } catch (error: any) {
      console.warn('Primary channel (Custom key or local backend) was unavailable or not configured. Routing to Hercai public AI API fallback:', error);
      
      try {
        // Define educational persona guidelines for the Hercai assistant
        const systemInstruction = `
أنت "المعلم الافتراضي" الحكيم والودود على "المنصة التعليمية المتكاملة 4U".
مهمتك هي مساعدة الطالب ومراجعته في دروسه، والإجابة على استفساراته التعليمية والعامة بدقة عالية.
- ممنوع تماماً ذكر أسماء "جيمني" (Gemini) أو "شات جي بي تي" (ChatGPT) أو "جوجل" (Google) أو أي أداة ذكاء اصطناعي أخرى. إذا سألك الطالب من أنت، أخبره بكل حب: "أنا معلمك الافتراضي ومستشارك الدراسي على منصة 4U، متواجد دائماً هنا لأساعدك في رحلتك التعليمية وسحق الامتحانات! يلا نراجع مع بعض ✨".
- تفاعل مع الطالب بأسلوب المعلم الحنون، الدافئ والمشجع. استخدم عبارات إيجابية مثل "يا بطل"، "يا متميزة"، "يا بطلة المستقبل"، "أحسنت"، "سؤال ذكي جداً!"، "فخور بك وباهتمامك".
- بسّط المفاهيم المعقدة، واستخدم الترتيب النقطي أو الجداول التوضيحية البسيطة عند الحاجة.
- استخدم الرموز التعبيرية بحكمة ومرح لتسهيل القراءة وزيادة التفاعل (مثل: 🔥, 📚, ✨, 🚀, 🎓, 💡, 📝).
- تواصل باللغة العربية بلهجة بيضاء أو فصحى مبسطة وواضحة جداً، وإذا سألك الطالب بالإنجليزية أجب بالإنجليزية بأسلوب مناسب لطلاب المدارس.
`;

        const lesson = appState.lesson;
        const currentLessonContext = lesson ? `(سياق الدرس النشط الذي يذاكره الطالب حالياً: ${lesson.title})` : '';
        const promptWithContext = `${systemInstruction}\n\n${currentLessonContext}\n\nسؤال الطالب الحالي للإجابة عليه كمعلم افتراضي:\n${textToSend}`;

        // Call the super fast, stable, CORS-free v3 model on Hercai public endpoint
        const hercaiUrl = `https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(promptWithContext)}`;
        const hercaiResponse = await fetch(hercaiUrl);

        if (!hercaiResponse.ok) {
          throw new Error('HERCAI_CORS_OR_HTTP_ERROR');
        }

        const hercaiData = await hercaiResponse.json();
        const hercaiReply = hercaiData.reply;

        if (!hercaiReply) {
          throw new Error('HERCAI_EMPTY_RESPONSE');
        }

        setChatMessages((prev) => [...prev, { role: 'model' as const, text: hercaiReply }]);

      } catch (hercaiError) {
        console.warn('Hercai public API failed. Using final offline-grade rule-based teacher engine:', hercaiError);
        
        // Final fallback: local educational knowledge database
        const localReply = generateClientSideTeacherResponse(textToSend);
        setChatMessages((prev) => [...prev, { role: 'model' as const, text: localReply }]);
      }
    } finally {
      setIsChatLoading(false);
    }
  };

  // --- 🔊 Text-To-Speech (TTS) Engine ---
  const getLessonTextToRead = (lesson: any) => {
    if (!lesson || !lesson.content) return '';
    const parts = [];
    parts.push(lesson.title || '');
    const c = lesson.content;
    if (c.intro) parts.push(c.intro);
    if (c.sections) {
      c.sections.forEach((s: any) => {
        if (s.title) parts.push(s.title);
        if (typeof s.content === 'string') {
          parts.push(s.content);
        } else if (Array.isArray(s.content)) {
          parts.push(s.content.join('، '));
        }
        if (s.rows) {
          s.rows.forEach((row: any) => {
            parts.push(row.join('، '));
          });
        }
      });
    }
    return parts.join('\n\n');
  };

  const handleStartTts = async () => {
    if (!appState.lesson) return;

    if (ttsState === 'playing') {
      window.speechSynthesis.pause();
      setTtsState('paused');
      return;
    }
    if (ttsState === 'paused') {
      window.speechSynthesis.resume();
      setTtsState('playing');
      return;
    }

    window.speechSynthesis.cancel();
    setTtsState('loading');
    showToastMsg('📥 جاري استخراج وتحضير شرح الدرس من الرابط، يرجى الانتظار ثوانٍ...');

    let textToRead = '';

    try {
      if (appState.lesson.lessonUrl) {
        try {
          const response = await fetch(getApiUrl(`/api/fetch-lesson-text?url=${encodeURIComponent(appState.lesson.lessonUrl)}`));
          if (response.ok) {
            const data = await response.json();
            if (data.text && data.text.trim().length > 10) {
              textToRead = data.text;
              console.log("Successfully loaded external lesson PDF text from backend for TTS:", textToRead.substring(0, 100));
            }
          } else {
            throw new Error(`Status ${response.status}`);
          }
        } catch (apiError) {
          console.warn("Backend API failed or CORS blocked. Falling back to client-side PDF.js extraction...", apiError);
          const clientExtracted = await extractTextFromLessonUrl(appState.lesson.lessonUrl);
          if (clientExtracted && clientExtracted.trim().length > 10) {
            textToRead = clientExtracted;
            console.log("Successfully extracted PDF text client-side:", textToRead.substring(0, 100));
          }
        }
      }
    } catch (e) {
      console.warn("Failed to fetch or parse custom lesson text, falling back to local description:", e);
    }

    if (!textToRead) {
      textToRead = getLessonTextToRead(appState.lesson);
    }

    if (!textToRead) {
      setTtsState('idle');
      showToastMsg('⚠️ لا يوجد محتوى نصي متاح للقراءة في هذا الدرس حالياً.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    const isEnglish = DB.curriculum[getCurriculumKey() || '']?.isEnglish;
    utterance.lang = isEnglish ? 'en-US' : 'ar-SA';
    utterance.rate = ttsRate;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => 
      isEnglish 
        ? v.lang.startsWith('en') 
        : v.lang.startsWith('ar')
    );
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      setTtsState('idle');
      setTtsCurrentParagraph('');
    };

    utterance.onerror = () => {
      setTtsState('idle');
      setTtsCurrentParagraph('');
    };

    ttsUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setTtsState('playing');
    setTtsCurrentParagraph(appState.lesson.title);
    showToastMsg('🔊 تم بدء الشرح الصوتي المباشر من ملف شرح الدرس بنجاح!');
  };

  const handleStopTts = () => {
    window.speechSynthesis.cancel();
    setTtsState('idle');
    setTtsCurrentParagraph('');
  };

  const handleTtsRateChange = async (rate: number) => {
    setTtsRate(rate);
    if (ttsState === 'playing') {
      window.speechSynthesis.cancel();
      setTtsState('loading');

      let textToRead = '';
      try {
        if (appState.lesson?.lessonUrl) {
          try {
            const response = await fetch(getApiUrl(`/api/fetch-lesson-text?url=${encodeURIComponent(appState.lesson.lessonUrl)}`));
            if (response.ok) {
              const data = await response.json();
              if (data.text && data.text.trim().length > 10) {
                textToRead = data.text;
              }
            } else {
              throw new Error(`Status ${response.status}`);
            }
          } catch (apiError) {
            console.warn("Backend API failed or CORS blocked in rate change. Falling back to client-side PDF.js extraction...", apiError);
            const clientExtracted = await extractTextFromLessonUrl(appState.lesson.lessonUrl);
            if (clientExtracted && clientExtracted.trim().length > 10) {
              textToRead = clientExtracted;
            }
          }
        }
      } catch (e) {
        console.warn(e);
      }

      if (!textToRead && appState.lesson) {
        textToRead = getLessonTextToRead(appState.lesson);
      }

      if (!textToRead) {
        setTtsState('idle');
        return;
      }

      const utterance = new SpeechSynthesisUtterance(textToRead);
      const isEnglish = DB.curriculum[getCurriculumKey() || '']?.isEnglish;
      utterance.lang = isEnglish ? 'en-US' : 'ar-SA';
      utterance.rate = rate;
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find((v) => isEnglish ? v.lang.startsWith('en') : v.lang.startsWith('ar'));
      if (voice) utterance.voice = voice;
      
      utterance.onend = () => {
        setTtsState('idle');
        setTtsCurrentParagraph('');
      };
      utterance.onerror = () => {
        setTtsState('idle');
        setTtsCurrentParagraph('');
      };
      
      ttsUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setTtsState('playing');
    }
  };

  // Stop Speech synthesis if user leaves the active lesson
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [appState.lesson]);

  // 2. Track Study Time for Active Lesson
  useEffect(() => {
    if (appState.lesson && appState.unit) {
      lessonStartTimeRef.current = Date.now();
    }

    return () => {
      if (lessonStartTimeRef.current && appState.lesson && appState.unit) {
        const elapsed = Math.floor((Date.now() - lessonStartTimeRef.current) / 1000);
        if (elapsed > 0) {
          const key = getLessonKey(appState.lesson, appState.unit);
          if (key) {
            updateProgressTime(key, elapsed);
          }
        }
        lessonStartTimeRef.current = null;
      }
    };
  }, [appState.lesson, appState.unit]);

  const updateProgressTime = (key: string, elapsedSeconds: number) => {
    setProgress(prev => {
      const current = prev[key] || { read: false, examDone: false, totalTime: 0 };
      const updated = {
        ...prev,
        [key]: {
          ...current,
          totalTime: (current.totalTime || 0) + elapsedSeconds
        }
      };
      localStorage.setItem('4u_progress', JSON.stringify(updated));
      return updated;
    });
  };

  // Exit Confirmation Dialog ("هل تريد إغلاق المنصة؟")
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = 'هل تريد إغلاق المنصة؟';
      return 'هل تريد إغلاق المنصة؟';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Push initial base state so we can catch popstate even when history is empty
  useEffect(() => {
    if (!window.history.state || !window.history.state.appNav) {
      window.history.pushState({ appNav: 'base' }, '');
    }
  }, []);

  // Synchronize browser history with custom appState history
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (isProgrammaticGoRef.current) {
        isProgrammaticGoRef.current = false;
        return;
      }

      isPopStateRef.current = true;
      if (history.length > 0) {
        const lastState = history[history.length - 1];
        setHistory(prev => prev.slice(0, -1));
        setAppState(lastState);
        setSearchQuery('');
      } else {
        // history.length is 0. Going back now will exit.
        // We re-push the base state so they stay on the page.
        window.history.pushState({ appNav: 'base' }, '');
        setShowExitConfirmModal(true);
      }
      
      setTimeout(() => {
        isPopStateRef.current = false;
      }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [history]);

  useEffect(() => {
    const currentLength = history.length;
    const prevLength = prevHistoryLengthRef.current;
    prevHistoryLengthRef.current = currentLength;

    if (isPopStateRef.current) {
      return;
    }

    if (currentLength > prevLength) {
      const diff = currentLength - prevLength;
      for (let i = 0; i < diff; i++) {
        window.history.pushState({ appNav: true }, '');
      }
    } else if (currentLength < prevLength) {
      const diff = prevLength - currentLength;
      isProgrammaticGoRef.current = true;
      window.history.go(-diff);
    }
  }, [history]);

  // Auto-Save appState, history and studentName when they change
  useEffect(() => {
    localStorage.setItem('4u_app_state', JSON.stringify(appState));
  }, [appState]);

  useEffect(() => {
    localStorage.setItem('4u_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('4u_student_name', studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem('4u_chat_gemini_key', chatGeminiKey);
  }, [chatGeminiKey]);

  // Scroll to the top of the page whenever the page state changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [appState]);

  // Auto-scroll chat to the bottom on new messages or when chat is opened
  useEffect(() => {
    if (isChatOpen && chatEndRef.current) {
      const timer = setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [chatMessages, isChatOpen]);

  // Daily Reminder & Notes Load effect
  useEffect(() => {
    try {
      const savedRem = localStorage.getItem('4u_daily_reminder');
      if (savedRem) {
        const parsed = JSON.parse(savedRem);
        setDailyReminderTime(parsed.time || '17:00');
        setDailyReminderActive(!!parsed.active);
        setDailyReminderMsg(parsed.msg || 'حان وقت المذاكرة اليومي! فلنجتهد معاً لنصنع التفوق 📚✨');
      }
    } catch (e) {
      console.error(e);
    }

    try {
      const savedNotes = localStorage.getItem('4u_student_notes');
      if (savedNotes) {
        setStudentNotes(JSON.parse(savedNotes));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Daily Reminder Interval Checker
  useEffect(() => {
    if (!dailyReminderActive) return;
    let alarmCheckedHourMin = '';

    const checkAlarm = () => {
      const now = new Date();
      const currentHourMin = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      if (currentHourMin === dailyReminderTime && alarmCheckedHourMin !== currentHourMin) {
        alarmCheckedHourMin = currentHourMin;
        setShowAlarmTriggeredModal(true);
        // Play notification sound
        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
          osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15); // A5
          osc.frequency.setValueAtTime(1174.66, audioCtx.currentTime + 0.3); // D6
          
          gain.gain.setValueAtTime(0, audioCtx.currentTime);
          gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
          gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.4);
          gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
          
          osc.start();
          osc.stop(audioCtx.currentTime + 0.5);
        } catch (e) {
          console.warn("Audio Context sound failed:", e);
        }
      }
    };

    const interval = setInterval(checkAlarm, 30000); // Check every 30 seconds
    checkAlarm(); // Instant initial check

    return () => clearInterval(interval);
  }, [dailyReminderActive, dailyReminderTime]);

  // Pomodoro timer effect
  useEffect(() => {
    let timerId: any = null;
    if (pomodoroIsActive && pomodoroSeconds > 0) {
      timerId = setInterval(() => {
        setPomodoroSeconds(prev => {
          if (prev <= 1) {
            setPomodoroIsActive(false);
            
            // Handle completion
            showToastMsg(pomodoroMode === 'study' ? '🏆 برافو! أنهيت 25 دقيقة من المذاكرة المركزة' : '☕ انتهت الاستراحة، فلنعد للمذاكرة بنشاط!');
            
            // Play alert sound
            try {
              const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
              const osc = audioCtx.createOscillator();
              const gain = audioCtx.createGain();
              osc.connect(gain);
              gain.connect(audioCtx.destination);
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
              osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2); // E5
              osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.4); // G5
              gain.gain.setValueAtTime(0, audioCtx.currentTime);
              gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
              gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.5);
              gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.6);
              osc.start();
              osc.stop(audioCtx.currentTime + 0.6);
            } catch (e) {
              console.warn(e);
            }

            if (pomodoroMode === 'study') {
              // Add 25 minutes to statistics!
              if (appState.lesson && appState.unit) {
                const activeLessonKey = getLessonKey(appState.lesson, appState.unit);
                if (activeLessonKey) {
                  updateProgressTime(activeLessonKey, 1500);
                }
              }
              setPomodoroTotalMinutesUsed(prev => prev + 25);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [pomodoroIsActive, pomodoroSeconds, pomodoroMode, appState.lesson, appState.unit]);

  // Helper to save student note
  const updateStudentNote = (lessonKey: string, noteText: string) => {
    setStudentNotes(prev => {
      const updated = {
        ...prev,
        [lessonKey]: noteText
      };
      localStorage.setItem('4u_student_notes', JSON.stringify(updated));
      return updated;
    });
  };

  // Helper to save reminder settings
  const updateReminderSettings = (time: string, active: boolean, msg: string) => {
    setDailyReminderTime(time);
    setDailyReminderActive(active);
    setDailyReminderMsg(msg);
    localStorage.setItem('4u_daily_reminder', JSON.stringify({ time, active, msg }));
    showToastMsg('💾 تم حفظ إعدادات التذكير اليومي');
  };

  // Helper to manually save all progress
  const handleManualSaveProgress = () => {
    localStorage.setItem('4u_progress', JSON.stringify(progress));
    localStorage.setItem('4u_favorites', JSON.stringify(favorites));
    localStorage.setItem('4u_study_plan', JSON.stringify(studyPlan));
    localStorage.setItem('4u_student_notes', JSON.stringify(studentNotes));
    localStorage.setItem('4u_student_name', studentName);
    localStorage.setItem('4u_daily_reminder', JSON.stringify({
      time: dailyReminderTime,
      active: dailyReminderActive,
      msg: dailyReminderMsg
    }));
    showToastMsg('💾 تم حفظ جميع بيانات تقدمك ودراستك بنجاح في ذاكرة المتصفح!');
  };

  const currentRadioUrlIndexRef = useRef(0);

  // Cleanup radio on unmount
  useEffect(() => {
    return () => {
      isRadioIntentPlayingRef.current = false;
      if (radioAudioRef.current) {
        radioAudioRef.current.onended = null;
        radioAudioRef.current.onerror = null;
        radioAudioRef.current.pause();
        radioAudioRef.current = null;
      }
    };
  }, []);

  const playStreamAtIndex = (
    index: number, 
    forcePlay = true, 
    overrideVolume?: number, 
    overrideMuted?: boolean,
    targetReciterId?: string
  ) => {
    const reciterId = targetReciterId || activeReciterId;
    const reciter = QURAN_RECITERS.find((r) => r.id === reciterId) || QURAN_RECITERS[0];
    const reciterUrls = reciter.urls;

    // Clean up existing audio instance
    if (radioAudioRef.current) {
      radioAudioRef.current.pause();
      radioAudioRef.current.onended = null;
      radioAudioRef.current.onerror = null;
      radioAudioRef.current.src = "";
      radioAudioRef.current.load();
    }

    // Check bounds
    if (index >= reciterUrls.length) {
      setIsRadioPlaying(false);
      if (isRadioIntentPlayingRef.current) {
        showToastMsg("⚠️ تعذر تشغيل الإذاعة حالياً بسبب جدار الحماية بالشبكة أو قيود المتصفح.");
      }
      return;
    }

    currentRadioUrlIndexRef.current = index;
    const currentUrl = reciterUrls[index];
    console.log(`[Quran Radio - ${reciter.name}] Loading stream ${index}: ${currentUrl}`);

    const finalMuted = overrideMuted !== undefined ? overrideMuted : isRadioMuted;
    const finalVolume = overrideVolume !== undefined ? overrideVolume : radioVolume;

    // Create a new Audio object
    const audio = new Audio();
    audio.src = currentUrl;
    audio.volume = finalMuted ? 0 : finalVolume;
    audio.preload = "auto";

    // Track if this instance has already triggered a fallback to avoid double-handling
    let hasFallbackTriggered = false;

    const triggerFallback = () => {
      if (hasFallbackTriggered) return;
      hasFallbackTriggered = true;

      // Ensure this audio is still the active reference AND the user actually wants to play the radio before triggering fallback
      if (radioAudioRef.current === audio && isRadioIntentPlayingRef.current) {
        const nextIndex = index + 1;
        if (reciterId === 'abdulbasit' && nextIndex === 6) {
          showToastMsg("📻 تم الانتقال لتشغيل تلاوة مسجلة لضمان جودة الصوت واستقرار البث ✨");
        } else if (nextIndex < reciterUrls.length) {
          showToastMsg("📻 جاري الانتقال لموجة بث بديلة لتفادي الانقطاع...");
        }
        playStreamAtIndex(nextIndex, forcePlay, finalVolume, finalMuted, reciterId);
      }
    };

    audio.onerror = (e) => {
      console.warn(`[Quran Radio - ${reciter.name}] Error event on stream ${index}:`, e);
      if (isRadioIntentPlayingRef.current) {
        triggerFallback();
      }
    };

    audio.onended = () => {
      if (!isRadioIntentPlayingRef.current) return;
      // Loop or proceed with static recitations
      let nextIndex = index + 1;
      if (reciterId === 'abdulbasit' && index >= 6) {
        if (nextIndex >= reciterUrls.length) {
          nextIndex = 6; // Loop back to the first static recitation
        }
      } else {
        if (nextIndex >= reciterUrls.length) {
          nextIndex = 0; // Loop back to live stream
        }
      }
      playStreamAtIndex(nextIndex, true, finalVolume, finalMuted, reciterId);
    };

    radioAudioRef.current = audio;

    if (forcePlay) {
      audio.play()
        .then(() => {
          if (radioAudioRef.current === audio && isRadioIntentPlayingRef.current) {
            setIsRadioPlaying(true);
          }
        })
        .catch(err => {
          // Playback failed. Check if it was aborted intentionally or stopped by user
          if (!isRadioIntentPlayingRef.current || err.name === 'AbortError') {
            console.log(`[Quran Radio] Playback of stream ${index} was aborted intentionally or stopped by user.`);
            return;
          }
          console.warn(`[Quran Radio - ${reciter.name}] play() promise rejected for stream ${index}:`, err);
          triggerFallback();
        });
    }
  };

  const toggleRadioPlay = () => {
    if (isRadioPlaying) {
      isRadioIntentPlayingRef.current = false;
      // Release live stream bandwidth on stop
      if (radioAudioRef.current) {
        radioAudioRef.current.onended = null;
        radioAudioRef.current.onerror = null;
        radioAudioRef.current.pause();
        radioAudioRef.current.src = "";
        radioAudioRef.current.load();
      }
      setIsRadioPlaying(false);
    } else {
      isRadioIntentPlayingRef.current = true;
      // Unlock AudioContext for sandboxed iframes / modern browser autoplay policy
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
      } catch (e) {
        console.warn("[Quran Radio] AudioContext unlock skipped or failed:", e);
      }

      // Ensure sound is fully unmuted and audible when playing in the platform
      const newMute = false;
      const newVol = radioVolume < 0.2 ? 0.8 : radioVolume;

      setIsRadioMuted(newMute);
      setRadioVolume(newVol);

      // Start with the best primary stream first with unmuted overrides
      playStreamAtIndex(0, true, newVol, newMute);
    }
  };

  const handleReciterChange = (reciterId: string) => {
    setActiveReciterId(reciterId);
    const reciter = QURAN_RECITERS.find((r) => r.id === reciterId) || QURAN_RECITERS[0];
    showToastMsg(`📻 تم الانتقال لإذاعة ${reciter.name}`);
    if (isRadioPlaying || isRadioIntentPlayingRef.current) {
      isRadioIntentPlayingRef.current = true;
      playStreamAtIndex(0, true, radioVolume, isRadioMuted, reciterId);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setRadioVolume(newVol);
    if (radioAudioRef.current) {
      radioAudioRef.current.volume = isRadioMuted ? 0 : newVol;
    }
  };

  const toggleRadioMute = () => {
    const nextMute = !isRadioMuted;
    setIsRadioMuted(nextMute);
    if (radioAudioRef.current) {
      radioAudioRef.current.volume = nextMute ? 0 : radioVolume;
    }
  };

  // Keys helper
  const getCurriculumKey = (stateVal = appState) => {
    if (!stateVal.subject || !stateVal.grade || !stateVal.term || !stateVal.stream) return null;
    let streamPart = 'general';
    if (stateVal.stream.id === 'advanced') {
      streamPart = stateVal.program ? stateVal.program.id : 'advanced';
    }
    const countryPart = stateVal.country || 'UAE';
    return `${countryPart}-${stateVal.subject.id}-${stateVal.grade.id}-${streamPart}-${stateVal.term.id}`;
  };

  // Helper to dynamically build the Student Book URL as requested:
  // e.g., https://hesham-afandi.github.io/12Jen-math-T1-0/
  const getStudentBookUrl = () => {
    if (!appState.grade || !appState.stream || !appState.subject || !appState.term) {
      return '';
    }
    
    const gradeNum = appState.grade.id; // e.g. 12, 11, 10, 9
    
    // Stream code: 'general' -> 'Jen', 'advanced' -> 'Adv'
    const streamCode = appState.stream.id === 'general' ? 'Jen' : 'Adv';
    
    // Program code: 'bridge' -> '-Bri', 'inspire' -> '-Ins', otherwise empty
    let programCode = '';
    if (appState.program) {
      if (appState.program.id === 'bridge') programCode = '-Bri';
      else if (appState.program.id === 'inspire') programCode = '-Ins';
    }
    
    // Subject code: 'math' -> 'math', 'physics' -> 'phy', otherwise subject.id
    const subMap: Record<string, string> = {
      math: 'math',
      physics: 'phy',
      chemistry: 'chem',
      biology: 'bio'
    };
    const subjectCode = subMap[appState.subject.id] || appState.subject.id;
    
    // Term code: 'T' + term.id (e.g., T1)
    const termCode = `T${appState.term.id}`;
    
    // Construct full URL
    return `https://hesham-afandi.github.io/${gradeNum}${streamCode}${programCode}-${subjectCode}-${termCode}-0/`;
  };

  const getCurriculum = (key: string | null, stateVal: AppState = appState) => {
    if (!key) return null;
    const country = stateVal.country || 'UAE';
    if (country === 'UAE') {
      if (DB.curriculum[key]) return DB.curriculum[key];
      const strippedKey = key.startsWith('UAE-') ? key.substring(4) : key;
      if (DB.curriculum[strippedKey]) return DB.curriculum[strippedKey];
    }
    // For other countries or subjects, we do not generate mock content. Show as "🚧 قريباً" / "قيد التحضير"
    return null;
  };

  const getLessonKey = (lesson: Lesson, unit: Unit) => {
    const currKey = getCurriculumKey();
    if (!currKey) return null;
    return `${currKey}-U${unit.id}-L${lesson.id}`;
  };

  // Toast Helper
  const showToastMsg = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Install App Action
  const handleInstallApp = async () => {
    const promptEvent = installPrompt || (window as any).deferredPrompt;
    if (promptEvent) {
      try {
        await promptEvent.prompt();
        const { outcome } = await promptEvent.userChoice;
        if (outcome === 'accepted') {
          showToastMsg('🎉 شكراً لتثبيت التطبيق! نتمنى لك دراسة ممتعة.');
          setInstallPrompt(null);
          (window as any).deferredPrompt = null;
        } else {
          showToastMsg('⚠️ تم إلغاء عملية التثبيت.');
        }
      } catch (e) {
        console.error("Install prompt error:", e);
        showToastMsg('📥 للتثبيت: يرجى فتح التطبيق خارج المعاينة والضغط على زر التثبيت من قائمة خيارات المتصفح.');
      }
    } else {
      showToastMsg('📥 للتثبيت المباشر: يرجى فتح التطبيق في علامة تبويب جديدة (خارج المعاينة المباشرة) لتفعيل التثبيت بنقرة واحدة.');
    }
  };

  const handleExitApp = () => {
    // Force Save all progress
    localStorage.setItem('4u_progress', JSON.stringify(progress));
    localStorage.setItem('4u_favorites', JSON.stringify(favorites));
    localStorage.setItem('4u_study_plan', JSON.stringify(studyPlan));
    localStorage.setItem('4u_student_notes', JSON.stringify(studentNotes));
    localStorage.setItem('4u_student_name', studentName);
    localStorage.setItem('4u_daily_reminder', JSON.stringify({
      time: dailyReminderTime,
      active: dailyReminderActive,
      msg: dailyReminderMsg
    }));
    
    setShowExitConfirmModal(false);
    showToastMsg('💾 تم حفظ جميع بيانات تقدمك ودراستك بنجاح! جاري الخروج...');

    // Programmatically go back past base state
    setTimeout(() => {
      isProgrammaticGoRef.current = true;
      window.history.go(-2);
    }, 600);
  };

  // Keyboard Shortcuts handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showFavoritesModal) setShowFavoritesModal(false);
        else if (showExamCodesModal) setShowExamCodesModal(false);
        else if (showStatsModal) setShowStatsModal(false);
        else if (showCertificateModal) setShowCertificateModal(false);
        else if (showShareModal) setShowShareModal(null);
        else if (showPlannerModal) setShowPlannerModal(false);
        else handleBack();
      }
      
      // Ctrl+D / Cmd+D for favorite current lesson
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        if (appState.lesson && appState.unit) {
          e.preventDefault();
          toggleFavorite(appState.lesson, appState.unit);
        }
      }

      // Ctrl+S / Cmd+S to share current lesson
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        if (appState.lesson) {
          e.preventDefault();
          const shareUrl = appState.lesson.lessonUrl || window.location.href;
          setShowShareModal({ title: appState.lesson.title, url: shareUrl });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [appState, showFavoritesModal, showStatsModal, showCertificateModal, showShareModal, showPlannerModal, favorites, history]);

  // Push to history when state changes
  const navigateTo = (updater: Partial<AppState>) => {
    setHistory(prev => [...prev, { ...appState }]);
    setAppState(prev => {
      const next = { ...prev, ...updater };
      // Clear lower selections if higher selection changes
      if (updater.country !== undefined) {
        next.term = null; next.stream = null; next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.term !== undefined) {
        next.stream = null; next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.stream !== undefined) {
        next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.program !== undefined) {
        next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.grade !== undefined) {
        next.subject = null; next.unit = null; next.lesson = null;
      } else if (updater.subject !== undefined) {
        next.unit = null; next.lesson = null;
      } else if (updater.unit !== undefined) {
        next.lesson = null;
      }
      return next;
    });
    setSearchQuery('');
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(prevHist => prevHist.slice(0, -1));
      setAppState(prev);
      setSearchQuery('');
    } else {
      goHome();
    }
  };

  const goHome = () => {
    setHistory([]);
    setAppState({
      country: null,
      term: null,
      stream: null,
      program: null,
      grade: null,
      subject: null,
      unit: null,
      lesson: null,
    });
    setSearchQuery('');
  };

  // Breadcrumbs jump logic
  const jumpToBreadcrumb = (level: keyof AppState) => {
    setAppState(prev => {
      const next = { ...prev };
      if (level === 'country') {
        next.term = null; next.stream = null; next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'term') {
        next.stream = null; next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'stream') {
        next.program = null; next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'program') {
        next.grade = null; next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'grade') {
        next.subject = null; next.unit = null; next.lesson = null;
      } else if (level === 'subject') {
        next.unit = null; next.lesson = null;
      } else if (level === 'unit') {
        next.lesson = null;
      }
      return next;
    });
    setSearchQuery('');
  };

  // Favorite toggle handler
  const toggleFavorite = (lesson: Lesson, unit: Unit) => {
    const key = getLessonKey(lesson, unit);
    if (!key) return;

    setFavorites(prev => {
      const isFav = prev.some(f => f.key === key);
      let updated;
      if (isFav) {
        updated = prev.filter(f => f.key !== key);
        showToastMsg('❌ تم الإزالة من المفضلة');
      } else {
        updated = [...prev, {
          key,
          title: lesson.title,
          icon: lesson.icon,
          unitName: unit.name
        }];
        showToastMsg('❤️ تم الإضافة للمفضلة');
      }
      localStorage.setItem('4u_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  // Toggle lesson read status
  const toggleLessonRead = (lesson: Lesson, unit: Unit, forceRead?: boolean) => {
    const key = getLessonKey(lesson, unit);
    if (!key) return;

    setProgress(prev => {
      const current = prev[key] || { read: false, examDone: false, totalTime: 0 };
      const newReadStatus = forceRead !== undefined ? forceRead : !current.read;
      const updated = {
        ...prev,
        [key]: {
          ...current,
          read: newReadStatus
        }
      };
      localStorage.setItem('4u_progress', JSON.stringify(updated));
      
      // Only show toast notifications on manual toggle
      if (forceRead === undefined) {
        if (newReadStatus) {
          showToastMsg('✅ تم تحديد الدرس كمقروء');
        } else {
          showToastMsg('↩️ تم إلغاء تحديد الدرس كمقروء');
        }
      }
      return updated;
    });
  };

  // Study Planner actions
  const addToSchedule = (item: {
    day: string;
    time: string;
    notes?: string;
    curriculumKey?: string;
    termId?: number;
    streamId?: string;
    programId?: string;
    gradeId?: number;
    subjectId?: string;
    unitId?: number;
    lessonId?: number;
    lessonTitle?: string;
    subjectName?: string;
    subjectIcon?: string;
  }) => {
    const newItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 9)
    };
    setStudyPlan(prev => {
      const updated = [...prev, newItem];
      localStorage.setItem('4u_study_plan', JSON.stringify(updated));
      return updated;
    });
    showToastMsg('📅 تم إضافة الدرس لجدولك الأسبوعي');
  };

  const removeFromSchedule = (id: string) => {
    setStudyPlan(prev => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem('4u_study_plan', JSON.stringify(updated));
      return updated;
    });
    showToastMsg('🗑️ تم إزالة الدرس من جدولك');
  };

  const toggleStudyPlanItemCompletion = (id: string) => {
    setStudyPlan(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const newStatus = !item.completed;
          showToastMsg(newStatus ? '🎯 تم إنجاز الحصة المجدولة بنجاح! أحسنت' : '↩️ تم التراجع عن إنجاز الحصة');
          return { ...item, completed: newStatus };
        }
        return item;
      });
      localStorage.setItem('4u_study_plan', JSON.stringify(updated));
      return updated;
    });
  };

  const getWeeklyProgress = () => {
    if (studyPlan.length === 0) return { total: 0, completed: 0, percentage: 0 };
    let completed = 0;
    studyPlan.forEach(item => {
      if (item.unitId && item.lessonId) {
        let reconstructedKey = '';
        if (item.subjectId && item.gradeId && item.termId) {
          const streamPart = item.programId ? item.programId : (item.streamId || 'general');
          reconstructedKey = `${item.subjectId}-${item.gradeId}-${streamPart}-${item.termId}-U${item.unitId}-L${item.lessonId}`;
        }
        if (reconstructedKey && progress[reconstructedKey]?.read) {
          completed++;
        } else if (item.completed) {
          completed++;
        }
      } else {
        if (item.completed) {
          completed++;
        }
      }
    });

    const total = studyPlan.length;
    const percentage = Math.round((completed / total) * 100);
    return { total, completed, percentage };
  };

  const getAllAvailableLessons = () => {
    const list: any[] = [];
    Object.entries(DB.curriculum).forEach(([key, curr]) => {
      const parts = key.split('-');
      if (parts.length < 4) return;
      
      const subjectId = parts[0];
      const gradeId = parseInt(parts[1]);
      const streamPart = parts[2];
      const termId = parseInt(parts[3]);
      
      const subject = DB.subjects.find(s => s.id === subjectId);
      const grade = DB.grades.find(g => g.id === gradeId);
      const term = DB.terms.find(t => t.id === termId);
      
      let stream: Stream | undefined;
      let program: Program | null = null;
      
      if (streamPart === 'general') {
        stream = DB.streams.find(s => s.id === 'general');
      } else {
        stream = DB.streams.find(s => s.id === 'advanced');
        program = DB.programs.find(p => p.id === streamPart) || null;
      }
      
      if (!subject || !grade || !term || !stream) return;
      
      curr.units.forEach(unit => {
        unit.lessons.forEach(lesson => {
          list.push({
            curriculumKey: key,
            term,
            stream,
            program,
            grade,
            subject,
            unit,
            lesson
          });
        });
      });
    });
    return list;
  };

  // Mark exam done
  const markExamDone = (lesson: Lesson, unit: Unit) => {
    const key = getLessonKey(lesson, unit);
    if (!key) return;

    setProgress(prev => {
      const current = prev[key] || { read: false, examDone: false, startTime: null, totalTime: 0 };
      const updated = {
        ...prev,
        [key]: {
          ...current,
          examDone: true
        }
      };
      localStorage.setItem('4u_progress', JSON.stringify(updated));
      showToastMsg('🎉 أحسنت! تم تسجيل إنجاز الاختبار');
      return updated;
    });

    // Check if all exams in current unit are done to trigger certificate preview
    const currKey = getCurriculumKey();
    const curriculum = getCurriculum(currKey);
    if (curriculum && unit) {
      let allDone = true;
      unit.lessons.forEach(l => {
        const lk = `${currKey}-U${unit.id}-L${l.id}`;
        // Since setProgress is async, check both current and previous state
        if (l.id !== lesson.id && (!progress[lk] || !progress[lk].examDone)) {
          allDone = false;
        }
      });
      if (allDone) {
        setTimeout(() => {
          setShowCertificateModal(true);
        }, 1500);
      }
    }
  };

  // Search Logic (Global scanner with navigation jump context!)
  const searchLessons = (query: string) => {
    const lowercaseQuery = query.toLowerCase().trim();
    if (!lowercaseQuery) return [];

    const results: {
      lesson: Lesson;
      unit: Unit;
      subject: Subject;
      grade: Grade;
      stream: Stream;
      program: Program | null;
      term: Term;
      key: string;
    }[] = [];

    DB.terms.forEach(term => {
      DB.streams.forEach(stream => {
        const programsToLoop = stream.id === 'advanced' ? DB.programs : [null];
        programsToLoop.forEach(program => {
          DB.grades.forEach(grade => {
            DB.subjects.forEach(subject => {
              let streamPart = 'general';
              if (stream.id === 'advanced') {
                streamPart = program ? program.id : 'advanced';
              }
              const countryVal = appState.country || 'UAE';
              const key = `${countryVal}-${subject.id}-${grade.id}-${streamPart}-${term.id}`;
              const stateForSearch = {
                country: countryVal,
                term,
                stream,
                program,
                grade,
                subject,
                unit: null,
                lesson: null
              };
              const curriculum = getCurriculum(key, stateForSearch);
              if (curriculum) {
                curriculum.units.forEach(unit => {
                  unit.lessons.forEach(lesson => {
                    const matchesTitle = lesson.title.toLowerCase().includes(lowercaseQuery);
                    const matchesContent = lesson.content?.intro?.toLowerCase().includes(lowercaseQuery) || false;
                    const matchesIntro = lesson.content?.sections?.some(s => 
                      typeof s.content === 'string' && s.content.toLowerCase().includes(lowercaseQuery)
                    ) || false;
                    
                    if (matchesTitle || matchesContent || matchesIntro) {
                      results.push({
                        lesson,
                        unit,
                        subject,
                        grade,
                        stream,
                        program,
                        term,
                        key
                      });
                    }
                  });
                });
              }
            });
          });
        });
      });
    });

    return results;
  };

  const matchingSearchResults = searchLessons(searchQuery);

  // Statistics calculation helpers
  const getStatsMetrics = () => {
    let totalRead = 0;
    let totalExams = 0;
    let totalTime = 0;
    Object.values(progress).forEach((item: any) => {
      if (item.read) totalRead++;
      if (item.examDone) totalExams++;
      totalTime += item.totalTime || 0;
    });

    // Count total lessons available in entire DB
    let totalLessonsCount = 0;
    Object.values(DB.curriculum).forEach(curr => {
      curr.units.forEach(u => {
        totalLessonsCount += u.lessons.length;
      });
    });

    const completionRate = totalLessonsCount > 0 ? Math.round((totalRead / totalLessonsCount) * 100) : 0;
    return { totalRead, totalExams, totalTime, totalLessonsCount, completionRate };
  };

  const stats = getStatsMetrics();

  const getUnitCompletionRate = (unitKeyPrefix: string, totalLessons: number) => {
    let completed = 0;
    for (let i = 1; i <= totalLessons; i++) {
      const key = `${unitKeyPrefix}-L${i}`;
      if (progress[key]?.read) completed++;
    }
    return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  };

  const getSubjectUnitKeys = (subjectId: string) => {
    const streamPart = appState.stream?.id === 'advanced' ? (appState.program?.id || 'advanced') : 'general';
    return `${subjectId}-${appState.grade?.id}-${streamPart}-${appState.term?.id}`;
  };

  const openLesson = () => {
    if (appState.lesson?.lessonUrl) {
      window.open(appState.lesson.lessonUrl, '_blank');
      toggleLessonRead(appState.lesson, appState.unit!, true);
    }
  };

  const openExam = () => {
    if (appState.lesson?.examUrl) {
      window.open(appState.lesson.examUrl, '_blank');
      markExamDone(appState.lesson, appState.unit!);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-gray-950 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300 antialiased" dir="rtl">
      
      {/* 1. STARTUP LOADER */}
      <AnimatePresence>
        {showLoader && (
          <motion.div 
            id="page-loader"
            className="fixed inset-0 z-50 flex flex-col justify-center items-center overflow-hidden bg-slate-900 text-white cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            onClick={() => setShowLoader(false)}
          >
            {/* Ambient blurring background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Premium Rotating Double Ring Glowing Loader with 4U SVG Emblem at Center */}
              <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 border-r-indigo-400 animate-spin" style={{ animationDuration: '1.2s' }} />
                <div className="absolute inset-3 rounded-full border-4 border-violet-500/10 border-b-violet-500 border-l-violet-400 animate-spin" style={{ animationDuration: '1.8s', animationDirection: 'reverse' }} />
                {/* Embedded Glowing SVG Logo inside the spinner */}
                <div className="w-14 h-14 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                    <path d="M 50,12 L 88,30 L 50,48 L 12,30 Z" fill="#fbbf24" opacity="0.3" />
                    <path d="M 28,64 L 54,64 L 54,78 C 54,80.5 56,82 58.5,82 C 61,82 62.5,80.5 62.5,78 L 62.5,64 L 70,64 C 72.5,64 74,62.5 74,60 C 74,57.5 72.5,56 70,56 L 62.5,56 L 62.5,34 C 62.5,31.5 61,30 58.5,30 C 56.5,30 55.5,30.5 54.5,32 L 26.5,56 C 24.5,58 24.5,61 26.5,62.5 Z M 54,56 L 39,56 L 54,42 L 54,56 Z" fill="#6366f1" />
                    <path d="M 50,14 L 72,24 L 50,34 L 28,24 Z" fill="#fbbf24" />
                  </svg>
                </div>
              </div>
              
              {/* Text */}
              <h2 className="text-3xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-violet-400">
                منصة 4U التعليمية
              </h2>
              <p className="text-base text-slate-300 font-medium animate-pulse">جاري تحميل المنصة...</p>
              
              {/* Progress bar simulation */}
              <div className="loader-progress mt-6">
                <div className="loader-progress-bar" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN HEADER & TOP NAVIGATION BAR */}
      <header className="gradient-primary text-white py-4 px-4 md:px-8 shadow-lg sticky top-0 z-40 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={goHome}>
            {!logoError ? (
              <img 
                src={platformLogo} 
                onError={() => setLogoError(true)} 
                className="h-12 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" 
                alt="4U Logo" 
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-md border border-white/20 shadow-md">
                <span className="text-2xl font-black tracking-tighter text-amber-300">4U</span>
              </div>
            )}
            <div>
              <h1 className="font-extrabold text-xl tracking-tight leading-none mb-1">المنصة التعليمية المتكاملة 4U</h1>
              <p className="text-[11px] opacity-75 tracking-wider">منهج متكامل • تفاعلي • احترافي</p>
            </div>
          </div>

          {/* Desktop Global Search Input */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <input 
              type="text" 
              placeholder="ابحث عن درس، وحدة أو موضوع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl py-2 px-12 pr-11 text-white placeholder-white/60 focus:outline-none focus:bg-white/25 focus:border-amber-300 focus:ring-1 focus:ring-amber-300 transition duration-300 text-right"
            />
            <Search className="w-5 h-5 absolute right-3.5 top-2.5 text-white/60 pointer-events-none" />
            <button
              onClick={startVoiceSearch}
              className={`absolute left-3 top-2 p-1 rounded-lg transition-all ${
                isListening ? 'bg-red-500 text-white animate-pulse' : 'text-white/60 hover:text-amber-300 hover:bg-white/10'
              }`}
              title="البحث الصوتي (Web Speech API)"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          {/* Top Bar Action Rail */}
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            
            {/* Back button */}
            {history.length > 0 && (
              <button 
                onClick={handleBack}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
                title="رجوع (Esc)"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">رجوع</span>
              </button>
            )}

            {/* Bookmarks */}
            <button 
              onClick={() => setShowFavoritesModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold relative cursor-pointer"
              title="المفضلة"
            >
              <Heart className="w-4 h-4 text-red-300 fill-red-300" />
              <span className="hidden sm:inline">المفضلة</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Dashboard Statistics */}
            <button 
              onClick={() => setShowStatsModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              title="إحصائياتي"
            >
              <BarChart2 className="w-4 h-4 text-emerald-300" />
              <span className="hidden sm:inline">إحصائياتي</span>
            </button>

            {/* Weekly Study Planner Button */}
            <button 
              onClick={() => setShowPlannerModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer relative"
              title="جدول المذاكرة الأسبوعي"
            >
              <span>📅</span>
              <span className="hidden sm:inline">جدول المذاكرة</span>
              {studyPlan.length > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-amber-500 text-slate-950 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-extrabold shadow-md">
                  {studyPlan.length}
                </span>
              )}
            </button>

            {/* Dafter Khana external link */}
            <a 
              href="https://hesham-afandi.github.io/DafterKhana/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold"
              title="مكتبة دفتر خانة"
            >
              <span>📓</span>
              <span className="hidden sm:inline">دفتر خانة</span>
            </a>

            {/* Daily Reminder Button */}
            <button 
              onClick={() => setShowReminderSettingModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              title="التذكير اليومي"
            >
              <span>{dailyReminderActive ? '⏰' : '🔕'}</span>
              <span className="hidden sm:inline">التذكير اليومي</span>
            </button>

            {/* Summary Review Notes Button */}
            <button 
              onClick={() => setShowSummaryNotesModal(true)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
              title="مذكرة مراجعة الامتحان"
            >
              <span>📝</span>
              <span className="hidden sm:inline">مراجعة الامتحان</span>
            </button>

            {/* Direct PWA Install Button */}
            <button 
              onClick={handleInstallApp}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center gap-1 text-sm font-semibold cursor-pointer text-amber-300"
              title="تثبيت التطبيق مباشرة"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">تثبيت</span>
            </button>

            {/* Theme toggler */}
            <button 
              onClick={toggleTheme}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/15 transition flex items-center justify-center cursor-pointer"
              title="تبديل الوضع"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            {/* Quran Radio Toggle Button */}
            <button 
              onClick={() => setShowRadioPanel(!showRadioPanel)}
              className={`p-2 rounded-xl backdrop-blur-sm border transition flex items-center gap-1.5 text-sm font-bold cursor-pointer ${
                isRadioPlaying 
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20' 
                  : 'bg-white/10 hover:bg-white/20 text-emerald-100 border-white/15'
              }`}
              title="راديو القرآن الكريم المباشر"
            >
              <Radio className={`w-4 h-4 ${isRadioPlaying ? 'animate-pulse text-emerald-400' : ''}`} />
              <span className="hidden md:inline">
                {isRadioPlaying 
                  ? `إذاعة ${QURAN_RECITERS.find(r => r.id === activeReciterId)?.name.split(' ')[1] || 'القرآن'}`
                  : 'إذاعة القرآن'}
              </span>
              {isRadioPlaying && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
              )}
            </button>

            {/* Manual Save Progress Button */}
            <button 
              onClick={handleManualSaveProgress}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3.5 rounded-xl transition flex items-center gap-1.5 text-sm font-bold shadow-md cursor-pointer"
              title="حفظ التقدم يدوياً"
            >
              <span>💾</span>
              <span>حفظ التقدم</span>
            </button>

            {/* Home button */}
            <button 
              onClick={goHome}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 py-2 px-3.5 rounded-xl transition flex items-center gap-1.5 text-sm font-bold shadow-md cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>الرئيسية</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3 px-2 w-full relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="mobileSearchInput" 
            placeholder="ابحث عن درس، وحدة أو موضوع..."
            className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg py-2 pr-9 pl-10 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 transition text-sm text-right"
          />
          <Search className="w-4 h-4 absolute right-5 top-3 text-white/75 pointer-events-none" />
          <button
            onClick={startVoiceSearch}
            className={`absolute left-5 top-1.5 p-1 rounded-lg transition-all ${
              isListening ? 'bg-red-500 text-white animate-pulse' : 'text-white/70 hover:text-amber-300 hover:bg-white/10'
            }`}
            title="البحث الصوتي"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {/* Global Progress Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500" 
            style={{ width: `${stats.totalLessonsCount > 0 ? (stats.totalRead / stats.totalLessonsCount) * 100 : 0}%` }}
          ></div>
        </div>
      </header>

      {/* ⏱️ VISIT STREAK & PLATFORM ACTIVE SESSION TIMER BAR */}
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-amber-950/20 border-b border-amber-100 dark:border-amber-950/40 py-2.5 px-4 md:px-8 text-right font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          
          {/* Active Platform Timer */}
          <div className="flex items-center gap-2 justify-end text-slate-700 dark:text-slate-300 font-extrabold order-1 md:order-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>⏱️ مدة تصفحك للمنصة اليوم:</span>
            <span className="font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-2 py-0.5 rounded-md border border-slate-200/50 dark:border-slate-700/50 shadow-inner">
              {formatPlatformTime(platformSeconds)}
            </span>
          </div>

          {/* Visit Streak */}
          <div className="flex items-center gap-2 justify-end md:justify-start order-2 md:order-1 flex-wrap">
            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 px-2.5 py-0.5 rounded-full shadow-sm text-amber-800 dark:text-amber-400 font-black">
              <span className="text-sm inline-block animate-pulse transform hover:scale-125 transition duration-300 origin-bottom select-none">🔥</span>
              <span>{visitStreak} أيام متتالية</span>
            </div>
            <p className="text-[11px] text-gray-600 dark:text-gray-300 font-bold leading-relaxed">
              {streakMessage}
            </p>
          </div>

        </div>
      </div>

      {/* Breadcrumbs */}
      {(appState.country || appState.term || appState.stream || appState.grade || appState.subject || appState.unit || appState.lesson) && (
        <div id="breadcrumbs" className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
            <button onClick={goHome} className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer">
              <span>🎓</span> الرئيسية
            </button>

            {appState.country && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('country')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer flex items-center gap-1">
                  <span>{COUNTRY_INFO[appState.country]?.flag || '🌍'}</span> {COUNTRY_INFO[appState.country]?.name || appState.country}
                </button>
              </>
            )}
            
            {appState.term && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('term')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.term.icon} {appState.term.name}
                </button>
              </>
            )}

            {appState.stream && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('stream')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.stream.name}
                </button>
              </>
            )}

            {appState.program && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('program')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.program.name}
                </button>
              </>
            )}

            {appState.grade && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('grade')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.grade.name}
                </button>
              </>
            )}

            {appState.subject && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('subject')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.subject.name}
                </button>
              </>
            )}

            {appState.unit && (
              <>
                <span className="text-gray-400">‹</span>
                <button onClick={() => jumpToBreadcrumb('unit')} className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer">
                  {appState.unit.name}
                </button>
              </>
            )}

            {appState.lesson && (
              <>
                <span className="text-gray-400">‹</span>
                <span className="text-gray-400 dark:text-gray-500 font-semibold max-w-[200px] truncate">{appState.lesson.title}</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* 3. APPLICATION WORKSPACE CONTAINER */}
      <main id="app" className="max-w-7xl mx-auto px-4 md:px-6 pb-16 flex-1 w-full">
        
        {/* If search query is active, override standard flow with global responsive search interface! */}
        {searchQuery.trim() !== '' ? (
          <div className="fade-in py-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-950/40 rounded-2xl text-indigo-600 dark:text-indigo-400">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-800 dark:text-white">نتائج البحث عن: "{searchQuery}"</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">تم العثور على {matchingSearchResults.length} تطابق في كافة المناهج والمواد</p>
              </div>
            </div>

            {matchingSearchResults.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">لا توجد نتائج مطابقة</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
                  جرب البحث بكلمات مختلفة مثل "تكامل"، "سرعة"، "فيزياء"، "تفاضل"، "متجهات" أو "Bohr".
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {matchingSearchResults.map((result, idx) => {
                  const lessonKey = `${result.key}-U${result.unit.id}-L${result.lesson.id}`;
                  const isRead = progress[lessonKey]?.read;
                  const isDone = progress[lessonKey]?.examDone;
                  
                  return (
                    <div 
                      key={lessonKey}
                      onClick={() => {
                        setHistory(prev => [...prev, { ...appState }]);
                        setAppState({
                          term: result.term,
                          stream: result.stream,
                          program: result.program,
                          grade: result.grade,
                          subject: result.subject,
                          unit: result.unit,
                          lesson: result.lesson
                        });
                        setSearchQuery('');
                      }}
                      className="card-hover bg-white dark:bg-gray-900/60 p-5 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 cursor-pointer flex flex-col justify-between text-right"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-2xl">{result.lesson.icon}</span>
                          <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-1 px-2.5 rounded-full">
                            {result.subject.name} • {result.grade.name}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-base text-gray-800 dark:text-white mb-2 line-clamp-2">
                          {result.lesson.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                          {result.unit.name}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-3 text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                        <div className="flex items-center gap-1.5">
                          {isRead && <span className="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">✓ مقروء</span>}
                          {isDone && <span className="bg-amber-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">🏆 اختبار</span>}
                        </div>
                        <span className="flex items-center gap-1">انتقل الآن ←</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* STANDARD APPLICATION STATE ROUTER */
          <div className="py-2">
            
            {/* VIEW 0: SELECT COUNTRY */}
            {!appState.country && (
              <div className="fade-in">
                
                {/* ADMIN BROADCAST NOTIFICATION BAR */}
                {ADMIN_NOTIFICATION.isEnabled && (
                  <div className="mb-6 bg-gradient-to-r from-amber-500/10 via-amber-600/15 to-amber-500/10 border border-amber-500/30 dark:border-amber-500/20 rounded-3xl p-4 md:p-5 flex items-center gap-4 flex-row-reverse text-right shadow-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1.5 bg-amber-500" />
                    <div className="bg-amber-500/20 text-amber-600 dark:text-amber-400 p-2.5 rounded-2xl shrink-0">
                      <Megaphone className="w-5 h-5 animate-bounce" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                        <span className="bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full select-none shadow-sm">
                          ({ADMIN_NOTIFICATION.badgeText})
                        </span>
                      </div>
                      <p className="text-xs md:text-sm font-bold text-slate-800 dark:text-amber-100/90 leading-relaxed">
                        {ADMIN_NOTIFICATION.text}
                      </p>
                    </div>
                  </div>
                )}

                {/* DYNAMIC MOTIVATIONAL QUOTES BAR */}
                {activeQuote && (
                  <div className="mb-6 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center text-center relative gap-3">
                    
                    {/* Interactive quote refresh button placed elegantly in top left corner */}
                    <button
                      onClick={() => {
                        const filtered = STUDY_QUOTES.filter(q => q !== activeQuote);
                        const randomIdx = Math.floor(Math.random() * filtered.length);
                        setActiveQuote(filtered[randomIdx]);
                      }}
                      className="absolute left-4 top-4 p-2 bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-800 rounded-xl transition shadow-sm text-indigo-600 dark:text-indigo-400 cursor-pointer flex items-center justify-center"
                      title="تغيير الحكمة"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <div className="flex flex-col items-center max-w-2xl mx-auto space-y-2">
                      <div className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/50 px-3.5 py-1 rounded-full border border-indigo-100/50 dark:border-indigo-900/20">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                        <span className="text-xs font-black tracking-wide text-indigo-600 dark:text-indigo-400">حكمة اليوم</span>
                      </div>
                      <p className="text-sm md:text-base font-extrabold text-slate-800 dark:text-indigo-200 italic leading-relaxed text-center px-6">
                        "{activeQuote}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Hero Card Banner */}
                <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white mb-8 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
                  <div className="text-center md:text-right relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight text-amber-300">
                      مرحباً بك في مكتبة المناهج التفاعلية 4U
                    </h2>
                    <p className="text-lg opacity-90 mb-5 font-medium">اختر بلدك للبدء في تصفح المناهج والخطط الدراسية المناسبة لك</p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">🌍 مناهج الخليج ومصر</span>
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">⚡ تصفح سريع وفوري</span>
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">📚 جميع المواد الدراسية</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span>🌍</span> اختر الدولة والمنهج الدراسي
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {countries.map(cId => {
                    const info = COUNTRY_INFO[cId] || { name: cId, flag: '📍' };
                    const isUae = cId === 'UAE';
                    return (
                      <button 
                        key={cId}
                        onClick={() => navigateTo({ country: cId })}
                        className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 text-center cursor-pointer flex flex-col items-center justify-center min-h-[140px]"
                      >
                        <div className="text-5xl mb-3">{info.flag}</div>
                        <h4 className="font-extrabold text-base text-gray-800 dark:text-white mb-1 leading-snug">{info.name}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isUae ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40' : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40'}`}>
                          {isUae ? '✅ متاح حالياً' : '🚧 قريباً'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* VIEW 1: HOME (SELECT TERM) */}
            {appState.country && !appState.term && (
              <div className="fade-in">
                {/* Hero Card Banner */}
                <div className="gradient-primary rounded-3xl p-8 md:p-12 text-white mb-8 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
                  <div className="text-center md:text-right relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight text-amber-300">
                      مرحباً بك في مكتبة المناهج التفاعلية
                    </h2>
                    <p className="text-lg opacity-90 mb-5 font-medium">رحلة تعلم ذكية ومبسطة للصفوف (9 - 12)</p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">📚 المنهج كاملاً دون حذف</span>
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">🌟 خطة دراسية متكاملة</span>
                      <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-semibold border border-white/10 shadow-sm">⏱️ تتبع ذكي لوقت الدراسة</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span>📅</span> اختر الترم الدراسي
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {DB.terms.map(t => (
                    <button 
                      key={t.id}
                      onClick={() => navigateTo({ term: t })}
                      className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 text-right cursor-pointer"
                    >
                      <div className="text-5xl mb-4">{t.icon}</div>
                      <h4 className="font-extrabold text-xl mb-1 text-gray-800 dark:text-white">{t.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">اضغط لاستعراض كافة الفصول والمواد</p>
                      
                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold">استعرض الآن ←</span>
                        <span className="bg-slate-100 dark:bg-slate-800 text-[10px] px-2.5 py-1 rounded-full text-gray-600 dark:text-gray-300 font-semibold">عام + متقدم</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* 📅 SECTION: WEEKLY STUDY PLANNER */}
                <WeeklyStudyPlanner
                  studyPlan={studyPlan}
                  DAYS_OF_WEEK={DAYS_OF_WEEK}
                  setShowPlannerModal={setShowPlannerModal}
                  getWeeklyProgress={getWeeklyProgress}
                  removeFromSchedule={removeFromSchedule}
                  toggleStudyPlanItemCompletion={toggleStudyPlanItemCompletion}
                  getCurriculum={getCurriculum}
                  setHistory={setHistory}
                  setAppState={setAppState}
                  appState={appState}
                  progress={progress}
                  showToastMsg={showToastMsg}
                />

              </div>
            )}

            {/* VIEW 2: STREAMS (GENERAL vs ADVANCED) */}
            {appState.term && !appState.stream && (
              <div className="fade-in">
                <div className="gradient-secondary rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">{appState.term.icon} {appState.term.name}</h2>
                  <p className="opacity-90 text-sm font-medium">اختر المسار الأكاديمي المناسب لك</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {DB.streams.map(s => (
                    <button 
                      key={s.id}
                      onClick={() => navigateTo({ stream: s })}
                      className="card-hover bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border-2 border-transparent hover:border-pink-500 text-right cursor-pointer"
                    >
                      <div className="text-6xl mb-4">{s.icon}</div>
                      <h4 className="font-extrabold text-2xl mb-2 text-gray-800 dark:text-white">{s.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">{s.desc}</p>
                      
                      <div className="flex items-center gap-1.5 text-pink-600 dark:text-pink-400 font-bold text-sm">
                        <span>اضغط للدخول</span>
                        <span>←</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: PROGRAMS (INSPIRE vs BRIDGE for Advanced) */}
            {appState.term && appState.stream?.id === 'advanced' && !appState.program && (
              <div className="fade-in">
                <div className="gradient-warm rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">{appState.term.icon} {appState.term.name} - مسار {appState.stream.name}</h2>
                  <p className="opacity-90 text-sm font-medium">اختر البرنامج الدراسي التخصصي لصفك</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {DB.programs.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => navigateTo({ program: p })}
                      className="card-hover bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border-2 border-transparent hover:border-amber-500 text-right cursor-pointer relative overflow-hidden"
                    >
                      {p.isEnglish && (
                        <div className="absolute top-4 left-4 bg-blue-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                          🇬🇧 English Content
                        </div>
                      )}
                      <div className="text-6xl mb-4">{p.icon}</div>
                      <h4 className="font-extrabold text-2xl mb-2 text-gray-800 dark:text-white">{p.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
                      
                      <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-sm">
                        <span>اضغط للاختيار</span>
                        <span>←</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 4: GRADES (9, 10, 11, 12) */}
            {appState.term && appState.stream && (appState.stream.id !== 'advanced' || appState.program) && !appState.grade && (
              <div className="fade-in">
                <div className="gradient-success rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">
                    {appState.term.name} • {appState.stream.name} {appState.program ? `(${appState.program.name})` : ''}
                  </h2>
                  <p className="opacity-90 text-sm font-medium">اختر الصف الدراسي المناسب</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {DB.grades.map(g => (
                    <button 
                      key={g.id}
                      onClick={() => navigateTo({ grade: g })}
                      className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-blue-500 text-center cursor-pointer"
                    >
                      <div className="text-5xl mb-3">{g.icon}</div>
                      <h4 className="font-extrabold text-lg text-gray-800 dark:text-white">{g.name}</h4>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 5: SUBJECTS */}
            {appState.term && appState.stream && (appState.stream.id !== 'advanced' || appState.program) && appState.grade && !appState.subject && (
              <div className="fade-in">
                <div className="gradient-warm rounded-3xl p-8 text-white mb-8 shadow-md">
                  <h2 className="text-3xl font-black mb-1">{appState.grade.icon} {appState.grade.name}</h2>
                  <p className="opacity-90 text-sm font-medium">
                    {appState.term.name} • {appState.stream.name} {appState.program ? `• ${appState.program.name}` : ''}
                  </p>
                </div>

                <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span>⚛️</span> اختر المادة العلمية
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {DB.subjects.map(s => {
                    const key = getCurriculumKey({ ...appState, subject: s });
                    const isAvailable = getCurriculum(key) ? true : false;
                    
                    return (
                      <button 
                        key={s.id}
                        onClick={() => navigateTo({ subject: s })}
                        className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-purple-500 text-center cursor-pointer flex flex-col items-center justify-between"
                      >
                        <div className="text-5xl mb-3">{s.icon}</div>
                        <h4 className="font-extrabold text-lg text-gray-800 dark:text-white mb-2">{s.name}</h4>
                        
                        <span className={`text-[10px] font-bold py-1 px-3 rounded-full ${isAvailable ? 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'}`}>
                          {isAvailable ? '✅ متاح حالياً' : '🚧 قريباً'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* VIEW 6: UNITS LIST */}
            {appState.term && appState.stream && appState.grade && appState.subject && !appState.unit && (
              <div className="fade-in">
                {(() => {
                  const key = getCurriculumKey();
                  const curriculum = getCurriculum(key);
                  
                  if (!curriculum) {
                    return (
                      <div>
                        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl p-8 text-white mb-8 shadow-md">
                          <h2 className="text-3xl font-black mb-1">{appState.subject.icon} {appState.subject.name}</h2>
                          <p className="opacity-95 text-sm font-medium">
                            {appState.grade.name} • {appState.term.name} • {appState.stream.name}
                          </p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center shadow-sm">
                          <div className="text-5xl mb-4">🚧</div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-indigo-300 mb-2">المحتوى قيد التحضير</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">سيتم توفير الوحدات والدروس الخاصة بهذا الاختيار قريباً جداً.</p>
                        </div>
                      </div>
                    );
                  }

                  const isEnglish = curriculum.isEnglish;
                  
                  return (
                    <div>
                      <div className="gradient-primary text-white rounded-3xl p-6 md:p-8 mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                          <h2 className="text-3xl font-black mb-1">{appState.subject.icon} {appState.subject.name}</h2>
                          <p className="opacity-90 text-sm font-medium">
                            {appState.grade.name} • {appState.term.name} • {appState.stream.name} {appState.program ? `• ${appState.program.name}` : ''}
                          </p>
                        </div>
                        
                        {/* Student Book Link */}
                        <a 
                          href={getStudentBookUrl() || `https://www.google.com/search?q=${encodeURIComponent(`كتاب الطالب ${appState.subject.name} الصف ${appState.grade.name} ${appState.term.name} منهج ${appState.stream.name} pdf`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl border border-white/20 backdrop-blur-md transition flex items-center gap-2 text-xs font-black cursor-pointer shadow-md select-none w-full md:w-auto text-center justify-center shrink-0"
                          title="تحميل كتاب الطالب"
                        >
                          <span className="text-lg">📖</span>
                          <span>{isEnglish ? "Student Book (PDF)" : "كتاب الطالب المنهجي (PDF)"}</span>
                          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">↗</span>
                        </a>
                      </div>

                      <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                        <span>📚</span> الوحدات الدراسية
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {curriculum.units.map(unit => {
                          const lessonCount = unit.lessons.length;
                          const compRate = getUnitCompletionRate(`${key}-U${unit.id}`, lessonCount);
                          
                          return (
                            <button 
                              key={unit.id}
                              onClick={() => navigateTo({ unit })}
                              className="card-hover bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-500 text-right cursor-pointer flex flex-col justify-between"
                            >
                              <div className="flex gap-4 mb-4 items-start w-full">
                                <div className={`bg-gradient-to-br ${unit.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                                  {unit.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                    <h3 className="font-extrabold text-lg dark:text-white">{unit.name}</h3>
                                    {compRate === 100 && <span className="completed-badge">✓ مكتمل</span>}
                                  </div>
                                  {unit.description && <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{unit.description}</p>}
                                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                    📖 {lessonCount} {isEnglish ? 'lessons' : 'دروس'} {compRate > 0 && `• انجاز ${compRate}%`}
                                  </span>
                                  {compRate > 0 && (
                                    <div className="lesson-progress-bar mt-2">
                                      <div className="lesson-progress-fill" style={{ width: `${compRate}%` }}></div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-bold text-xs border-t border-slate-100 dark:border-slate-800/80 pt-3">
                                <span>{isEnglish ? 'Browse Lessons' : 'استعراض الدروس'}</span>
                                <span>{isEnglish ? '←' : '←'}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* VIEW 7: LESSONS LIST */}
            {appState.term && appState.stream && appState.grade && appState.subject && appState.unit && !appState.lesson && (
              <div className="fade-in">
                {(() => {
                  const key = getCurriculumKey();
                  const curriculum = DB.curriculum[key || ''];
                  const isEnglish = curriculum?.isEnglish;
                  
                  return (
                    <div>
                      <div className="gradient-violet rounded-3xl p-8 text-white mb-8 shadow-md">
                        <h2 className="text-3xl font-black mb-1">{appState.unit.icon} {appState.unit.name}</h2>
                        <p className="opacity-90 text-sm font-medium">
                          {appState.subject.name} • {appState.grade.name} • {appState.term.name}
                        </p>
                      </div>

                      <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                        <span>📖</span> الدروس والاجزاء العلمية
                      </h3>

                      <div className="space-y-4">
                        {appState.unit.lessons.map((l, index) => {
                          const lessonKey = `${key}-U${appState.unit!.id}-L${l.id}`;
                          const isRead = progress[lessonKey]?.read;
                          const isDone = progress[lessonKey]?.examDone;
                          const isFav = favorites.some(f => f.key === lessonKey);
                          
                          return (
                            <div 
                              key={l.id}
                              onClick={() => navigateTo({ lesson: l })}
                              className="card-hover bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md flex items-center justify-between border-2 border-transparent hover:border-violet-500 cursor-pointer text-right"
                            >
                              <div className="flex items-center gap-4 flex-1">
                                <div className="bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 rounded-xl w-12 h-14 flex items-center justify-center text-xl font-extrabold flex-shrink-0 relative">
                                  {l.icon}
                                  {isRead && <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">✓</span>}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <h4 className="font-extrabold text-base text-gray-800 dark:text-white">
                                      {index + 1}. {l.title}
                                    </h4>
                                    {isDone && <span className="completed-badge">🏆 تم الاختبار</span>}
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">⏱️ {l.duration}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveVideoLesson(l);
                                  }}
                                  className="flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-950/60 text-rose-600 dark:text-rose-400 py-2 px-3.5 rounded-xl text-xs font-black transition-colors shrink-0 cursor-pointer"
                                  title="فيديو الشرح"
                                >
                                  <span className="text-sm">🎥</span>
                                  <span>فيديو الشرح</span>
                                </button>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(l, appState.unit!);
                                  }}
                                  className="favorite-btn text-2xl p-2 focus:outline-none hover:scale-110 active:scale-95 transition cursor-pointer"
                                  title="المفضلة"
                                >
                                  {isFav ? '❤️' : '🤍'}
                                </button>
                                <ChevronRight className="w-5 h-5 text-violet-600 dark:text-violet-400 rotate-180" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* VIEW 8: LESSON DETAILS VIEW */}
            {appState.term && appState.stream && appState.grade && appState.subject && appState.unit && appState.lesson && (
              <div className="fade-in">
                {(() => {
                  const isEnglish = DB.curriculum[getCurriculumKey() || '']?.isEnglish;
                  const lessonKey = getLessonKey(appState.lesson, appState.unit);
                  const isFav = favorites.some(f => f.key === lessonKey);
                  const isRead = progress[lessonKey || '']?.read;
                  const isDone = progress[lessonKey || '']?.examDone;
                  const timeSpent = progress[lessonKey || '']?.totalTime || 0;
                  const durationMinutes = Math.floor(timeSpent / 60);
                  const c = appState.lesson.content;
                  const shareUrl = appState.lesson.lessonUrl || window.location.href;

                  // Render mathematical sections
                  const sectionsHTML = c?.sections.map((s, idx) => {
                    if (s.type === 'formula') {
                      return (
                        <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-6 my-5 border-2 border-indigo-200 dark:border-slate-800 text-center shadow-sm">
                          <div className="text-xs text-indigo-600 dark:text-indigo-300 mb-2.5 font-bold uppercase tracking-wider">{s.title}</div>
                          <div className="formula text-2xl md:text-4xl font-extrabold text-indigo-800 dark:text-white">{s.content as string}</div>
                        </div>
                      );
                    } else if (s.type === 'table') {
                      return (
                        <div key={idx} className="my-6">
                          <h4 className="font-extrabold text-lg mb-3 text-gray-800 dark:text-indigo-300">{s.title}</h4>
                          <div className="overflow-x-auto shadow-sm rounded-xl">
                            <table className="comparison min-w-full">
                              <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                  {s.headers?.map((h, hIdx) => (
                                    <th key={hIdx} className="px-4 py-3 text-right text-xs font-bold text-gray-700 dark:text-indigo-300 border-b border-gray-200 dark:border-gray-700">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {s.rows?.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="px-4 py-3 text-sm text-gray-600 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    } else if (s.type === 'bullets') {
                      return (
                        <div key={idx} className="my-5 bg-blue-50/60 dark:bg-slate-900 rounded-2xl p-5 border-l-4 border-indigo-500 dark:border-indigo-400 shadow-sm text-right">
                          <h4 className="font-extrabold text-lg mb-3 text-indigo-800 dark:text-indigo-300">{s.title}</h4>
                          <ul className="space-y-3">
                            {(s.content as string[]).map((item, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0">✓</span>
                                <span className="text-gray-700 dark:text-slate-200 text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    } else {
                      return (
                        <div key={idx} className="my-4">
                          <h4 className="font-bold text-base mb-1.5 text-gray-800 dark:text-indigo-300">{s.title}</h4>
                          <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed">{s.content as string}</p>
                        </div>
                      );
                    }
                  });

                  if (isFocusMode) {
                    return (
                      <div className="max-w-3xl mx-auto py-8 px-4 md:px-8 bg-amber-50/55 dark:bg-gray-950 border border-amber-200/60 dark:border-slate-800 rounded-3xl shadow-xl text-right transition-colors duration-500">
                        {/* Focus Mode Top Header */}
                        <div className="flex items-center justify-between border-b border-amber-200/50 dark:border-slate-800 pb-4 mb-6">
                          <button 
                            onClick={() => setIsFocusMode(false)}
                            className="bg-amber-100 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-900 dark:text-white px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1"
                          >
                            <span>🚪</span>
                            <span>خروج من وضع التركيز</span>
                          </button>
                          
                          <div className="text-center">
                            <span className="text-2xl">{appState.lesson.icon}</span>
                            <h2 className="font-extrabold text-lg text-amber-950 dark:text-amber-300 mr-2 inline-block leading-tight">{appState.lesson.title}</h2>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-amber-200/50 dark:bg-slate-800 text-amber-900 dark:text-gray-300 px-2.5 py-1 rounded-full font-bold">👁️ وضع التركيز مفعل</span>
                          </div>
                        </div>

                        {/* Distraction-free Pomodoro inside Focus Mode */}
                        <div className="bg-amber-100/40 dark:bg-slate-900/40 p-4 rounded-2xl mb-6 border border-amber-200/30 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-right">
                            <span className="text-[10px] text-amber-700 dark:text-amber-400 font-extrabold block uppercase tracking-wider mb-0.5">مؤقت المذاكرة (Pomodoro)</span>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-black text-amber-950 dark:text-white">
                                {Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0')}:{Math.floor(pomodoroSeconds % 60).toString().padStart(2, '0')}
                              </span>
                              <span className="text-xs text-gray-500">({pomodoroMode === 'study' ? 'دراسة مركّزة' : 'راحة قصيرة'})</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setPomodoroIsActive(!pomodoroIsActive)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${pomodoroIsActive ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                            >
                              {pomodoroIsActive ? '⏸️ إيقاف مؤقت' : '▶️ ابدأ التركيز'}
                            </button>
                            <button
                              onClick={() => {
                                setPomodoroIsActive(false);
                                setPomodoroSeconds(pomodoroMode === 'study' ? 1500 : 300);
                              }}
                              className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                            >
                              🔄 إعادة ضبط
                            </button>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed text-base tracking-wide space-y-6">
                          {c ? (
                            <div>
                              {/* Intro Section */}
                              <div className="mb-6 bg-indigo-50/50 dark:bg-slate-900/50 p-5 rounded-2xl border-r-4 border-indigo-500 dark:border-indigo-400">
                                <p className="text-base font-bold text-indigo-950 dark:text-slate-100">{c.intro}</p>
                              </div>

                              {/* Breakdown */}
                              <div className="space-y-6">
                                {sectionsHTML}
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-12">
                              <p className="text-gray-500">محتوى الدرس غير متوفر حالياً.</p>
                            </div>
                          )}
                        </div>

                        {/* Student Notes section right inside Focus Mode */}
                        <div className="mt-8 pt-6 border-t border-amber-200/50 dark:border-slate-800 text-right">
                          <label className="block text-xs font-black text-amber-900 dark:text-amber-400 mb-2">✍️ سجل ملاحظاتك وأفكارك حول هذا الدرس هنا:</label>
                          <textarea
                            value={studentNotes[lessonKey || ''] || ''}
                            onChange={(e) => updateStudentNote(lessonKey || '', e.target.value)}
                            placeholder="اكتب تعليقاتك، القوانين الأساسية، أو أي ملاحظات تريد تذكرها ليلة الامتحان..."
                            className="w-full bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500 text-right text-gray-800 dark:text-gray-200 min-h-[120px] transition shadow-inner"
                          />
                          <span className="text-[10px] text-gray-400 block mt-1.5 font-semibold">💾 يتم الحفظ تلقائياً في مذكرة المراجعة الذاتية الخاصة بك</span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      
                      {/* Left side: Lesson Content */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Title Panel */}
                        <div className="gradient-teal text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <span className="text-6xl bg-white/10 p-3 rounded-2xl backdrop-blur-sm select-none">{appState.lesson.icon}</span>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                                <h2 className="text-2xl md:text-3xl font-extrabold">{appState.lesson.title}</h2>
                                {isRead && <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">✓ مقروء</span>}
                                {isDone && <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">🏆 مكتمل</span>}
                              </div>
                              <p className="opacity-90 text-xs">
                                {appState.subject.name} • {appState.grade.name} • {appState.unit.name}
                              </p>
                              {timeSpent > 0 && (
                                <p className="opacity-80 text-[10px] mt-1 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5" />
                                  المدة المستغرقة في المذاكرة: {durationMinutes} دقيقة
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-start md:self-auto">
                            {/* Focus Mode Button */}
                            <button 
                              onClick={() => {
                                setIsFocusMode(true);
                                setPomodoroSeconds(1500);
                                setPomodoroMode('study');
                                showToastMsg('👁️ تم تشغيل وضع التركيز والقراءة لتقليل التشتت');
                              }}
                              className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                              title="تفعيل وضع التركيز"
                            >
                              <span>👁️</span>
                              <span>وضع التركيز</span>
                            </button>

                            {/* Favorite Button */}
                            <button 
                              onClick={() => toggleFavorite(appState.lesson!, appState.unit!)}
                              className={`p-2.5 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 text-xs font-bold ${isFav ? 'bg-white text-rose-500' : 'bg-white/10 text-white hover:bg-white/20'}`}
                              title="إضافة للمفضلة (Ctrl+D)"
                            >
                              <span>❤️</span>
                              <span>{isFav ? 'مفضل' : 'تفضيل'}</span>
                            </button>

                            {/* Share button */}
                            <button 
                              onClick={() => setShowShareModal({ title: appState.lesson!.title, url: shareUrl })}
                              className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center gap-1.5 text-xs font-bold"
                              title="مشاركة الدرس"
                            >
                              <Share2 className="w-4 h-4" />
                              <span>مشاركة</span>
                            </button>
                          </div>
                        </div>

                        {/* Content sections */}
                        {c ? (
                          <div className="space-y-6">
                            {/* Intro Section */}
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800">
                              <h3 className="text-lg font-black text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                                <span className="text-xl">💡</span>
                                {isEnglish ? 'Lesson Introduction' : 'مقدمة الدرس'}
                              </h3>
                              <div className="bg-gradient-to-r from-teal-50/50 to-indigo-50/30 dark:from-teal-950/10 dark:to-indigo-950/10 border-r-4 border-teal-500 p-4 rounded-xl">
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                                  {c.intro}
                                </p>
                              </div>
                            </div>

                            {/* Detailed Sections */}
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800">
                              <h3 className="text-lg font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="text-xl">📂</span>
                                {isEnglish ? 'Lesson Breakdown' : 'المحتوى والتبسيط والتحليل'}
                              </h3>
                              {sectionsHTML}
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 text-center mb-6">
                            <span className="text-5xl block mb-3">📂</span>
                            <h3 className="font-extrabold text-lg text-gray-800 dark:text-white mb-2">محتوى الدرس غير متوفر</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">شرح ومستندات هذا الجزء قيد التحضير حالياً.</p>
                          </div>
                        )}

                        {/* Golden Notes Box for Normal Mode (Unconditional) */}
                        <div className="bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-slate-900 dark:via-gray-950 dark:to-amber-950/20 p-6 md:p-8 rounded-3xl shadow-lg border-2 border-indigo-100 dark:border-amber-500/40 text-right space-y-4">
                          <div className="flex items-center justify-between border-b border-indigo-100 dark:border-amber-500/30 pb-3">
                            <h3 className="font-black text-lg text-indigo-900 dark:text-amber-400 flex items-center gap-2">
                              <span className="text-2xl animate-pulse">📝</span>
                              <span>مذكرتي الشخصية للمراجعة النهائية</span>
                            </h3>
                            <span className="text-[10px] bg-indigo-100 dark:bg-amber-950/40 text-indigo-700 dark:text-amber-300 font-extrabold px-3 py-1 rounded-full border border-indigo-200 dark:border-amber-500/30">
                              ✨ مراجعة ليلة الامتحان
                            </span>
                          </div>
                          
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            اكتب هنا ملاحظاتك الهامة، القوانين الصعبة، التلخيصات أو النقاط الرئيسية التي ترغب في مراجعتها بسرعة قبل الامتحان. سيتم حفظ أي تعديل تلقائياً، ويمكنك تصفحها بالكامل مجمعة من "مذكرة المراجعة الذاتية" في القائمة الرئيسية.
                          </p>

                          <textarea
                            value={studentNotes[lessonKey || ''] || ''}
                            onChange={(e) => updateStudentNote(lessonKey || '', e.target.value)}
                            placeholder="ابدأ بكتابة ملخصاتك الذهبية لهذا الدرس هنا (مثال: قانون القوة الكهربية، شروط الاتزان، معادلة التفاعل...)"
                            className="w-full bg-white dark:bg-amber-950/20 border-2 border-indigo-100 dark:border-amber-500/40 rounded-2xl p-4 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-amber-400 text-right text-gray-800 dark:text-amber-100 placeholder-gray-400 dark:placeholder-amber-600/70 min-h-[140px] transition font-sans shadow-inner focus:ring-2 focus:ring-indigo-100 dark:focus:ring-amber-500/10"
                          />

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-1">
                            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                              <span>💾</span>
                              <span>تم الحفظ تلقائياً في حسابك</span>
                            </div>
                            <button
                              onClick={() => setShowSummaryNotesModal(true)}
                              className="text-[11px] text-indigo-600 hover:text-indigo-700 dark:text-amber-400 dark:hover:text-amber-300 font-black flex items-center gap-1 justify-end cursor-pointer bg-transparent border-0"
                            >
                              <span>🔍 استعراض وطباعة مذكرة المراجعة الشاملة</span>
                              <span>←</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right side: Action sidebar */}
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 sticky top-24">
                          <h3 className="font-extrabold text-base text-gray-800 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span>📋</span> تفاصيل الحصة والأنشطة
                          </h3>

                          <div className="space-y-3">
                            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl">
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">المرحلة / المادة</span>
                              <p className="font-extrabold text-sm text-gray-800 dark:text-white">
                                {appState.subject.name} • {appState.grade.name}
                              </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl">
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">المدة الدراسية المقررة</span>
                              <p className="font-extrabold text-sm text-gray-800 dark:text-white">
                                ⏱️ {appState.lesson.duration}
                              </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl">
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">الفصل المنهجي</span>
                              <p className="font-extrabold text-sm text-gray-800 dark:text-white">
                                {appState.unit.name}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 space-y-4">
                            <div>
                              <button
                                onClick={() => {
                                  openLesson();
                                }}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-2xl font-bold transition transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
                              >
                                <span className="text-xl">📖</span>
                                <span>{appState.lesson.lessonTitle || (isEnglish ? 'Open Lesson Explanation' : 'افتح شرح الدرس')}</span>
                                <span className="text-sm">↗</span>
                              </button>
                              
                              {/* Quick Share Explanation Links */}
                              {appState.lesson.lessonUrl && (
                                <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                  <span>{isEnglish ? 'Share explanation:' : 'مشاركة الشرح:'}</span>
                                  <a 
                                    href={`https://wa.me/?text=${encodeURIComponent(`📚 شرح درس: ${appState.lesson.title}\nالرابط: ${appState.lesson.lessonUrl}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-500 transition text-[11px] font-bold"
                                    title="واتساب"
                                  >
                                    🟢 واتساب
                                  </a>
                                  <a 
                                    href={`https://t.me/share/url?url=${encodeURIComponent(appState.lesson.lessonUrl || '')}&text=${encodeURIComponent(`📚 شرح درس: ${appState.lesson.title}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-sky-500 transition text-[11px] font-bold"
                                    title="تليجرام"
                                  >
                                    🔵 تليجرام
                                  </a>
                                  <a 
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appState.lesson.lessonUrl || '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 transition text-[11px] font-bold"
                                    title="فيسبوك"
                                  >
                                    🔵 فيسبوك
                                  </a>
                                </div>
                              )}
                            </div>

                            {/* 🔊 LISTEN TO LESSON AUDIO PLAYER */}
                            <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60 space-y-3 text-right">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-extrabold px-2.5 py-1 rounded-full">
                                  {ttsState === 'playing' ? '🟢 مستمع نشط' : ttsState === 'loading' ? '⏳ جاري استخراج الشرح...' : '🔊 الشرح الصوتي'}
                                </span>
                                <h4 className="font-extrabold text-xs text-gray-700 dark:text-slate-300 flex items-center gap-1">
                                  <span>الاستماع إلى الدرس</span>
                                  <span>🎙️</span>
                                </h4>
                              </div>

                              <div className="flex items-center gap-2 justify-center py-1">
                                {ttsState === 'playing' ? (
                                  <>
                                    <button
                                      onClick={handleStartTts}
                                      className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                      title="إيقاف مؤقت"
                                    >
                                      <Pause className="w-4 h-4" />
                                      <span>إيقاف مؤقت</span>
                                    </button>
                                    <button
                                      onClick={handleStopTts}
                                      className="bg-rose-600 hover:bg-rose-700 text-white p-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                      title="إيقاف"
                                    >
                                      <VolumeX className="w-4 h-4" />
                                      <span>إنهاء</span>
                                    </button>
                                  </>
                                ) : ttsState === 'loading' ? (
                                  <button
                                    disabled
                                    className="w-full bg-slate-100 dark:bg-slate-800/80 text-emerald-600 dark:text-emerald-400 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 cursor-wait border border-slate-200 dark:border-slate-700 animate-pulse"
                                  >
                                    <span className="animate-spin text-lg">⏳</span>
                                    <span>جاري استخراج وتحميل شرح الدرس...</span>
                                  </button>
                                ) : ttsState === 'paused' ? (
                                  <>
                                    <button
                                      onClick={handleStartTts}
                                      className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                      title="استئناف"
                                    >
                                      <Play className="w-4 h-4" />
                                      <span>استئناف القراءة</span>
                                    </button>
                                    <button
                                      onClick={handleStopTts}
                                      className="bg-rose-600 hover:bg-rose-700 text-white p-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                      title="إيقاف"
                                    >
                                      <VolumeX className="w-4 h-4" />
                                      <span>إنهاء</span>
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    onClick={handleStartTts}
                                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                                  >
                                    <Volume2 className="w-5 h-5 animate-pulse" />
                                    <span>استمع للدرس (صوت المعلم)</span>
                                  </button>
                                )}
                              </div>

                              {/* Reading Speed control */}
                              <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 border-t border-slate-200/50 dark:border-slate-800/50 pt-2 flex-wrap gap-2">
                                <div className="flex items-center gap-1.5">
                                  {[0.8, 1, 1.25, 1.5].map((rate) => (
                                    <button
                                      key={rate}
                                      onClick={() => handleTtsRateChange(rate)}
                                      className={`px-1.5 py-0.5 rounded transition ${
                                        ttsRate === rate 
                                          ? 'bg-indigo-600 text-white font-extrabold' 
                                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200'
                                      }`}
                                    >
                                      {rate}x
                                    </button>
                                  ))}
                                </div>
                                <span className="font-bold">سرعة القراءة:</span>
                              </div>
                            </div>

                            {/* Video Explanation Button */}
                            <div>
                              <button
                                onClick={() => {
                                  setActiveVideoLesson(appState.lesson);
                                }}
                                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-4 rounded-2xl font-black transition transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <span className="text-xl">🎥</span>
                                <span>{isEnglish ? 'Watch Video Explanation' : 'شاهد فيديو الشرح'}</span>
                                <span className="text-sm">↗</span>
                              </button>
                            </div>

                            <div>
                              <button
                                onClick={() => {
                                  openExam();
                                }}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-2xl font-bold transition transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
                              >
                                <span className="text-xl">📝</span>
                                <span>{appState.lesson.examTitle || (isEnglish ? 'Take the Quiz' : 'ابدأ اختبار الحصة')}</span>
                                <span className="text-sm">↗</span>
                              </button>
                              
                              {/* Quick Share Exam Links */}
                              {appState.lesson.examUrl && (
                                <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                  <span>{isEnglish ? 'Share quiz:' : 'مشاركة الاختبار:'}</span>
                                  <a 
                                    href={`https://wa.me/?text=${encodeURIComponent(`📝 اختبار درس: ${appState.lesson.title}\nالرابط: ${appState.lesson.examUrl}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-emerald-500 transition text-[11px] font-bold"
                                    title="واتساب"
                                  >
                                    🟢 واتساب
                                  </a>
                                  <a 
                                    href={`https://t.me/share/url?url=${encodeURIComponent(appState.lesson.examUrl || '')}&text=${encodeURIComponent(`📝 اختبار درس: ${appState.lesson.title}`)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-sky-500 transition text-[11px] font-bold"
                                    title="تليجرام"
                                  >
                                    🔵 تليجرام
                                  </a>
                                  <a 
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appState.lesson.examUrl || '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-600 transition text-[11px] font-bold"
                                    title="فيسبوك"
                                  >
                                    🔵 فيسبوك
                                  </a>
                                </div>
                              )}
                            </div>

                            {/* Add to weekly planner button */}
                            <button
                              onClick={() => {
                                setPlannerLessonKey(`${getCurriculumKey()}-U${appState.unit!.id}-L${appState.lesson!.id}`);
                                setShowPlannerModal(true);
                              }}
                              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white py-3 rounded-2xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                              title="جدولة أسبوعية"
                            >
                              <span>📅</span>
                              <span>جدولة الدرس في جدول المذاكرة الأسبوعي</span>
                            </button>
                          </div>

                           {/* Quick Actions checklist */}
                          <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between text-xs font-bold text-gray-500">
                            <span>تعيين كقراءة:</span>
                            <button
                              onClick={() => toggleLessonRead(appState.lesson!, appState.unit!)}
                              className={`px-3 py-1.5 rounded-lg border transition cursor-pointer font-bold text-xs ${isRead ? 'bg-green-500 border-green-500 text-white hover:bg-green-600' : 'bg-slate-50 border-slate-200 text-gray-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300'}`}
                            >
                              {isRead ? '✓ تمت القراءة (إلغاء)' : 'تحديد كمقروء'}
                            </button>
                          </div>
                        </div>

                        {/* Interactive tips */}
                        <div className="bg-amber-50/50 dark:bg-amber-950/15 border-2 border-amber-200 dark:border-amber-900 rounded-3xl p-5 shadow-sm text-right">
                          <h4 className="font-extrabold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-2">
                            <span>💡</span> نصيحة المذاكرة الفعالة
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                            {isEnglish 
                              ? 'Study the lesson material in full details, memorize the formulas, and then take the test without a calculator to measure your mastery!' 
                              : 'راجع محتوى الدرس جيداً وبتركيز، وتأكد من حفظ القوانين الأساسية ثم انتقل للاختبار مباشرة لتقييم مستواك الفعلي!'}
                          </p>
                        </div>

                        {/* Keyboard shortcut help */}
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-3xl text-right">
                          <h4 className="font-bold text-xs text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                            <span>⌨️</span> اختصارات لوحة المفاتيح المتاحة
                          </h4>
                          <div className="space-y-2 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                            <div className="flex justify-between items-center">
                              <span>الرجوع للمستوى السابق</span>
                              <kbd className="kbd">Esc</kbd>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>إضافة/إزالة من المفضلة</span>
                              <span><kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">D</kbd></span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>مشاركة سريعة للرابط</span>
                              <span><kbd className="kbd">Ctrl</kbd> + <kbd className="kbd">S</kbd></span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Pomodoro Timer Card */}
                        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-sm text-right space-y-4">
                          <h4 className="font-extrabold text-slate-800 dark:text-white flex items-center gap-2 text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                            <span>⏱️</span> مؤقت بومودورو التفاعلي
                          </h4>
                          
                          <div className="flex flex-col items-center justify-center py-2 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                            <span className="text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400">
                              {pomodoroMode === 'study' ? 'جلسة دراسة مركزة 📖' : 'فترة راحة قصيرة ☕'}
                            </span>
                            <div className="text-4xl font-mono font-black text-gray-800 dark:text-slate-100 mb-2">
                              {Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0')}:{Math.floor(pomodoroSeconds % 60).toString().padStart(2, '0')}
                            </div>
                            
                            <div className="flex items-center gap-2.5">
                              <button
                                onClick={() => setPomodoroIsActive(!pomodoroIsActive)}
                                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 shadow-sm ${pomodoroIsActive ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
                              >
                                <span>{pomodoroIsActive ? '⏸️ إيقاف' : '▶️ ابدأ'}</span>
                              </button>
                              <button
                                onClick={() => {
                                  setPomodoroIsActive(false);
                                  setPomodoroSeconds(pomodoroMode === 'study' ? 1500 : 300);
                                }}
                                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer"
                              >
                                🔄 إعادة ضبط
                              </button>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setPomodoroIsActive(false);
                                setPomodoroMode('study');
                                setPomodoroSeconds(1500);
                              }}
                              className={`flex-1 py-1.5 rounded-lg text-[10px] font-black transition cursor-pointer ${pomodoroMode === 'study' ? 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50' : 'bg-slate-50 dark:bg-slate-800 text-gray-500'}`}
                            >
                              دراسة (25 د)
                            </button>
                            <button
                              onClick={() => {
                                setPomodoroIsActive(false);
                                setPomodoroMode('break');
                                setPomodoroSeconds(300);
                              }}
                              className={`flex-1 py-1.5 rounded-lg text-[10px] font-black transition cursor-pointer ${pomodoroMode === 'break' ? 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50' : 'bg-slate-50 dark:bg-slate-800 text-gray-500'}`}
                            >
                              راحة (5 د)
                            </button>
                          </div>

                          {pomodoroTotalMinutesUsed > 0 && (
                            <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center font-bold">
                              📊 إجمالي وقت التركيز اليوم: {pomodoroTotalMinutesUsed} دقيقة
                            </p>
                          )}
                        </div>

                        {/* Student Notes Widget */}
                        <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-amber-500/30 p-5 rounded-3xl shadow-sm text-right space-y-3">
                          <h4 className="font-extrabold text-slate-800 dark:text-amber-400 flex items-center gap-2 text-sm border-b border-slate-100 dark:border-amber-500/20 pb-2">
                            <span>✍️</span> مذكرتي الشخصية
                          </h4>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-normal">
                            دون ملاحظاتك السريعة، القوانين الصعبة أو الأسئلة الشائعة للرجوع إليها لاحقاً.
                          </p>
                          <textarea
                            value={studentNotes[lessonKey || ''] || ''}
                            onChange={(e) => updateStudentNote(lessonKey || '', e.target.value)}
                            placeholder="اكتب ملاحظاتك الهامة عن هذا الدرس..."
                            className="w-full bg-slate-50 dark:bg-amber-950/15 border border-slate-200/60 dark:border-amber-500/30 rounded-2xl p-3 text-xs focus:outline-none focus:border-indigo-500 dark:focus:border-amber-400 text-right text-gray-800 dark:text-amber-100 placeholder-gray-400 dark:placeholder-amber-600/70 min-h-[100px] transition font-sans shadow-inner"
                          />
                          <div className="text-[10px] text-indigo-600 dark:text-amber-400 font-bold flex items-center justify-between">
                            <span>💾 يتم الحفظ تلقائياً</span>
                            <span className="opacity-80">متاحة في المراجعة الذاتية 👆</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

          </div>
        )}

      </main>

      {/* GLOBAL PWA INSTALLATION CARD FOR DEVICES */}
      {!isFocusMode && (
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 mt-4">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-100 dark:border-indigo-950/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl shadow-md shrink-0 text-3xl">
                📥
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-800 dark:text-white">تثبيت تطبيق 4U مباشرة</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  احصل على التطبيق على جهازك بنقرة واحدة لتصفح سريع وتفاعلي في أي وقت!
                </p>
              </div>
            </div>
            
            <button
              onClick={handleInstallApp}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-2xl transition shadow-md flex items-center justify-center gap-2 text-xs shrink-0 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>تثبيت التطبيق الآن</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. FOOTER */}
      <footer className="bg-slate-900 text-white py-10 mt-auto border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 select-none">
            <img 
              src={platformLogo} 
              className="h-10 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
              alt="4U Logo" 
            />
            <span className="h-6 w-[1px] bg-slate-700" />
            <span className="font-extrabold text-lg text-slate-100">منصة 4U الرقمية</span>
          </div>
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            مكتبة تفاعلية رقمية مبسطة تم تطويرها باحترافية لتغطية المقررات الأساسية لمواد الفيزياء والرياضيات والكيمياء والأحياء.
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>Mr. Mohammed Hesham | mohammedhesham872@gmail.com | +971555642674</p>
            <p>© 2026 جميع الحقوق محفوظة لمنصة 4U التعليمية</p>
          </div>
        </div>
      </footer>

      {/* 5. FLOATING INSTALL BUTTON */}
      <div className="fixed bottom-6 left-6 z-40 animate-bounce group">
        <button 
          onClick={handleInstallApp}
          className="bg-gradient-to-br from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative"
          title="تثبيت المنصة على جهازك"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {/* Tooltip on hover */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl pointer-events-none">
            تثبيت التطبيق 📲
          </span>
        </button>
      </div>

      {/* ========================================== */}
      {/* 📻 QURAN RADIO FLOATING CONTROL WIDGET */}
      {/* ========================================== */}
      <AnimatePresence>
        {showRadioPanel && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 md:left-10 z-50 w-80 bg-white dark:bg-gray-950/95 border-2 border-emerald-500/30 rounded-3xl p-5 shadow-2xl text-right font-sans backdrop-blur-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3 mb-3">
              <button 
                onClick={() => setShowRadioPanel(false)}
                className="text-gray-400 hover:text-rose-500 transition text-sm font-bold cursor-pointer bg-slate-100 dark:bg-slate-900 w-7 h-7 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <h4 className="font-extrabold text-slate-800 dark:text-emerald-400 text-xs">
                    {QURAN_RECITERS.find(r => r.id === activeReciterId)?.name || 'إذاعة القرآن الكريم'}
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-emerald-500/80 font-bold">
                    {QURAN_RECITERS.find(r => r.id === activeReciterId)?.description || 'البث المباشر (تلاوات خاشعة) 📻'}
                  </p>
                </div>
                <div className="p-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <Radio className={`w-5 h-5 ${isRadioPlaying ? 'animate-pulse' : ''}`} />
                </div>
              </div>
            </div>

            {/* Reciter Selector */}
            <div className="mb-4 text-right">
              <label className="block text-[11px] font-extrabold text-gray-600 dark:text-slate-300 mb-1.5">
                اختر القارئ أو إذاعة الشيخ: 🎙️
              </label>
              <select
                value={activeReciterId}
                onChange={(e) => handleReciterChange(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-900 border-2 border-emerald-500/10 dark:border-emerald-500/20 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-100 outline-none focus:border-emerald-500 transition cursor-pointer"
              >
                {QURAN_RECITERS.map((reciter) => (
                  <option 
                    key={reciter.id} 
                    value={reciter.id} 
                    className="font-bold text-slate-900 bg-white"
                    style={{ color: '#0f172a', backgroundColor: '#ffffff' }}
                  >
                    {reciter.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Visualizer & Playing Status */}
            <div className="bg-slate-50 dark:bg-emerald-950/15 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 mb-4 border border-slate-100 dark:border-emerald-500/5">
              {isRadioPlaying ? (
                <div className="flex items-end gap-1 h-8">
                  <span className="w-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '0.8s' }} />
                  <span className="w-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '0.5s' }} />
                  <span className="w-1.5 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.7s' }} />
                  <span className="w-1.5 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.6s' }} />
                  <span className="w-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.9s' }} />
                </div>
              ) : (
                <div className="flex items-end gap-1 h-8 opacity-40">
                  <span className="w-1.5 h-2 bg-slate-400 dark:bg-emerald-700 rounded-full" />
                  <span className="w-1.5 h-1 bg-slate-400 dark:bg-emerald-700 rounded-full" />
                  <span className="w-1.5 h-3 bg-slate-400 dark:bg-emerald-700 rounded-full" />
                  <span className="w-1.5 h-1 bg-slate-400 dark:bg-emerald-700 rounded-full" />
                  <span className="w-1.5 h-2 bg-slate-400 dark:bg-emerald-700 rounded-full" />
                </div>
              )}
              
              <span className={`text-xs font-bold text-center leading-relaxed ${isRadioPlaying ? 'text-emerald-600 dark:text-emerald-400 animate-pulse' : 'text-gray-500 dark:text-gray-400'}`}>
                {isRadioPlaying ? 'جاري التشغيل الآن... استمع بقلبك ✨' : 'انقر لتشغيل إذاعة القرآن الكريم'}
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4">
              {/* Play Button */}
              <button
                onClick={toggleRadioPlay}
                className={`w-full py-3 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isRadioPlaying
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20'
                }`}
              >
                {isRadioPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>إيقاف مؤقت للإذاعة</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>تشغيل البث المباشر</span>
                  </>
                )}
              </button>

              {/* Volume Slider & Mute Toggle */}
              <div className="flex items-center gap-3 bg-slate-100/50 dark:bg-slate-900/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-900">
                <button
                  onClick={toggleRadioMute}
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition cursor-pointer"
                  title={isRadioMuted ? "إلغاء الكتم" : "كتم الصوت"}
                >
                  {isRadioMuted || radioVolume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isRadioMuted ? 0 : radioVolume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="flex-1 accent-emerald-600 dark:accent-emerald-400 cursor-pointer h-1.5 rounded-lg bg-gray-200 dark:bg-gray-800"
                />
                <span className="text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 w-8 text-center">
                  {Math.round((isRadioMuted ? 0 : radioVolume) * 100)}%
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. TOAST BANNER OVERLAY */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            className="toast select-none"
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
          >
            <span className="font-semibold text-sm text-center block text-white">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* 7. ALL MODAL WINDOWS (MODAL CONTAINER) */}
      {/* ========================================== */}

      {/* MODAL 1: FAVORITES BANNER */}
      <FavoritesModal
        isOpen={showFavoritesModal}
        onClose={() => setShowFavoritesModal(false)}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        setFavorites={setFavorites}
        appState={appState}
        setAppState={setAppState}
        setHistory={setHistory}
        showToastMsg={showToastMsg}
      />

      {/* MODAL 2: STATS MODAL */}
      <StatsModal
        isOpen={showStatsModal}
        onClose={() => setShowStatsModal(false)}
        stats={stats}
        onShowCertificate={() => setShowCertificateModal(true)}
      />

      {/* MODAL 3: CERTIFICATE MODAL */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        stats={stats}
        studentName={studentName}
        setStudentName={setStudentName}
      />

      {/* MODAL 4: SHARE PANEL */}
      <ShareModal
        isOpen={!!showShareModal}
        onClose={() => setShowShareModal(null)}
        shareInfo={showShareModal}
        showToastMsg={showToastMsg}
      />

      {/* MODAL 5: STUDY PLANNER MODAL */}
      <PlannerModal
        isOpen={showPlannerModal}
        onClose={() => setShowPlannerModal(false)}
        DAYS_OF_WEEK={DAYS_OF_WEEK}
        getAllAvailableLessons={getAllAvailableLessons}
        addToSchedule={addToSchedule}
        showToastMsg={showToastMsg}
      />

      {/* MODAL 6: STUDENT SELF-SUMMARY NOTES REVIEWER */}
      <SummaryNotesModal
        isOpen={showSummaryNotesModal}
        onClose={() => setShowSummaryNotesModal(false)}
        studentNotes={studentNotes}
        updateStudentNote={updateStudentNote}
        getAllAvailableLessons={getAllAvailableLessons}
        appState={appState}
        setAppState={setAppState}
        setHistory={setHistory}
        showToastMsg={showToastMsg}
      />

      {/* MODAL 7: DAILY STUDY REMINDER SETTING */}
      <ReminderSettingModal
        isOpen={showReminderSettingModal}
        onClose={() => setShowReminderSettingModal(false)}
        dailyReminderTime={dailyReminderTime}
        dailyReminderActive={dailyReminderActive}
        dailyReminderMsg={dailyReminderMsg}
        updateReminderSettings={updateReminderSettings}
        showToastMsg={showToastMsg}
      />

      {/* MODAL 8: ALARM TRIGGERED NOTIFICATION SCREEN */}
      <AlarmTriggeredModal
        isOpen={showAlarmTriggeredModal}
        onClose={() => setShowAlarmTriggeredModal(false)}
        dailyReminderTime={dailyReminderTime}
        dailyReminderMsg={dailyReminderMsg}
        goHome={goHome}
        showToastMsg={showToastMsg}
      />



      {/* MODAL 10: VIDEO EXPLANATION PLAYER */}
      <VideoPlayerModal
        isOpen={!!activeVideoLesson}
        onClose={() => setActiveVideoLesson(null)}
        lessonTitle={activeVideoLesson?.title || ''}
        videoUrl={activeVideoLesson?.videoUrl || ''}
      />

      {/* MODAL 11: DEVELOPER EXAM CODES CENTER */}
      <ExamCodesModal
        isOpen={showExamCodesModal}
        onClose={() => setShowExamCodesModal(false)}
        showToastMsg={showToastMsg}
      />

      {/* MODAL 12: EXIT CONFIRMATION DIALOG */}
      {showExitConfirmModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
          onClick={() => setShowExitConfirmModal(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 text-right overflow-hidden flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end gap-2.5 text-xl font-black text-rose-600 dark:text-rose-400">
              <span>هل تريد الخروج من المنصة؟</span>
              <span className="text-2xl">⚠️</span>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              سيتم حفظ كامل تقدمك الحالي، وملاحظاتك المكتوبة، وجدول خطتك الدراسية بنجاح لتبدأ فوراً من حيث توقفت عند عودتك في المرة القادمة.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-3 flex items-center justify-end gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span>تم حفظ وتأمين جميع بيانات دراستك تلقائياً</span>
              <span>💾</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={handleExitApp}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-md text-sm cursor-pointer"
              >
                نعم، خروج من المنصة
              </button>
              <button
                onClick={() => setShowExitConfirmModal(false)}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-md text-sm cursor-pointer"
              >
                إلغاء ومتابعة الدراسة 📚
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 👨‍🏫 CHATBOT FLOATING BUTTON & SLIDE-OVER PANEL */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
        
        {/* Animated small hint bubble on load/hover */}
        <AnimatePresence>
          {!isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ delay: 3 }}
              className="bg-indigo-600 text-white text-xs font-black py-2.5 px-4 rounded-2xl shadow-xl flex items-center gap-1.5 border border-indigo-500 text-right cursor-pointer"
              onClick={() => setIsChatOpen(true)}
            >
              <span className="animate-bounce">✨</span>
              <span>اسألني: يلا نراجع مع بعض!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-br from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative border-2 border-white/20 dark:border-slate-800 cursor-pointer"
          title="المعلم الافتراضي 👨‍🏫"
        >
          {isChatOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Slide-over Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[420px] h-[520px] bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-right font-sans backdrop-blur-md"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="hover:bg-white/10 p-1.5 rounded-lg text-white transition cursor-pointer"
                  title="إغلاق الشات"
                >
                  <X className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setShowChatSettings(!showChatSettings)}
                  className={`p-1.5 rounded-lg transition cursor-pointer ${showChatSettings ? 'bg-white/20 text-yellow-300' : 'hover:bg-white/10 text-white'}`}
                  title="إعدادات الاتصال بالمعلم الافتراضي"
                >
                  <Settings className={`w-5 h-5 ${showChatSettings ? 'animate-spin' : ''}`} />
                </button>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="text-right">
                  <h4 className="font-black text-xs">اسأل معلمك الافتراضي</h4>
                  <span className="text-[10px] text-indigo-200 font-bold">مستعد لمراجعة كافة دروسك 🟢</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg shadow-inner">
                  👨‍🏫
                </div>
              </div>
            </div>

            {/* Connection Settings Overlay */}
            {showChatSettings && (
              <div className="absolute top-[68px] left-0 right-0 bottom-0 bg-slate-900/95 text-white p-5 flex flex-col z-30 overflow-y-auto">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2.5">
                  <span className="text-[10px] text-slate-400">تفعيل المعلم الافتراضي على جيت هب</span>
                  <h5 className="font-black text-sm text-indigo-400">🔑 مفتاح الاتصال الذكي</h5>
                </div>

                <div className="space-y-4 flex-1 text-right" dir="rtl">
                  <div className="bg-indigo-950/40 border border-indigo-900/60 rounded-xl p-3 text-[10px] leading-relaxed text-indigo-200">
                    💡 لكي يعمل المعلم الافتراضي بنجاح وبسرعة فائقة (100%) على <b>GitHub Pages</b> بدون قيود الخادم أو أخطاء CORS، يتصل التطبيق بذكاء جوجل مباشرة من متصفحك عبر مفتاح API الخاص بك.
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-slate-300">أدخل مفتاح Gemini API الخاص بك:</label>
                    <input
                      type="password"
                      value={chatGeminiKey}
                      onChange={(e) => setChatGeminiKey(e.target.value)}
                      placeholder="AIzaSy..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-left text-slate-100 placeholder-slate-700 focus:outline-none focus:border-indigo-500 font-mono"
                    />
                    
                    <div className="flex justify-between items-center pt-1 text-[9px]">
                      <a 
                        href="https://aistudio.google.com/app/apikey" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:underline font-bold"
                      >
                        🔗 اضغط هنا للحصول على مفتاح مجاني في 5 ثوانٍ 🚀
                      </a>
                      <span className="text-slate-400">احصل على مفتاحك المجاني</span>
                    </div>

                    <span className="block text-[9px] text-emerald-400 leading-relaxed text-right pt-2">
                      🔐 يتم حفظ المفتاح بشكل آمن تماماً داخل متصفحك الخاص فقط (localStorage)، ولا يتم حفظه أو إرساله لأي خوادم خارجية إطلاقاً.
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex gap-2 justify-end mt-4">
                  <button
                    onClick={() => setShowChatSettings(false)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-xl text-xs cursor-pointer shadow transition"
                  >
                    حفظ وتفعيل الاتصال
                  </button>
                </div>
              </div>
            )}

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/20 text-right">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2.5 max-w-[85%] ${msg.role === 'user' ? 'mr-auto justify-end flex-row-reverse' : 'ml-auto justify-start'}`}
                >
                  {msg.role !== 'user' && (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-sm shrink-0 shadow-sm border border-indigo-200/50">
                      👨‍🏫
                    </div>
                  )}
                  
                  <div 
                    className={`p-3 rounded-2xl text-xs font-medium leading-relaxed whitespace-pre-wrap shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-800/40'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isChatLoading && (
                <div className="flex gap-2.5 max-w-[85%] ml-auto justify-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-sm shrink-0 shadow-sm">
                    👨‍🏫
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800/40 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Questions suggestion */}
            {chatMessages.length === 1 && (
              <div className="p-3 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 justify-end">
                <button 
                  onClick={() => handleSendChatMessage('كيف أذاكر بذكاء للاستعداد للامتحان؟')}
                  className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-slate-200/60 dark:border-slate-700 cursor-pointer shadow-sm"
                >
                  💡 كيف أذاكر بذكاء للامتحان؟
                </button>
                <button 
                  onClick={() => handleSendChatMessage('كيف أفهم القوانين والمسائل الصعبة؟')}
                  className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-slate-200/60 dark:border-slate-700 cursor-pointer shadow-sm"
                >
                  ⚡ كيف أفهم القوانين الصعبة؟
                </button>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
              <button 
                onClick={() => handleSendChatMessage()}
                disabled={isChatLoading || !chatInput.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-2.5 rounded-xl cursor-pointer shadow-md transition shrink-0"
              >
                <Send className="w-4 h-4 transform rotate-180" />
              </button>
              
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendChatMessage();
                }}
                placeholder="اسألني عن أي موضوع في بالك... (مثال: قانون نيوتن)"
                className="flex-1 bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl py-2 px-3 text-xs text-right focus:outline-none focus:border-indigo-500 text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
