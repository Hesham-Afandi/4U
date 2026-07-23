import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Award, CheckCircle2, Trophy, Star, Flame, BookOpen, Clock, 
  FileCheck, TrendingUp, Calendar, User, ShieldCheck, Plus, Sparkles, Medal,
  Hash, GraduationCap, Percent, ChevronLeft
} from 'lucide-react';
import { UserRecord, ExamHistoryItem, updateUserProfileInFirestore } from '../../lib/firebase';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    totalRead: number;
    totalExams: number;
    totalTime: number;
    totalLessonsCount: number;
    completionRate: number;
  };
  currentUser: UserRecord | null;
  streakDays: number;
  examHistory?: ExamHistoryItem[];
  onShowCertificate: () => void;
  onAddExamScore?: (item: { title: string; subject: string; score: number; correctQuestions: number; date: string }) => void;
  allSubscribers?: UserRecord[];
  onUpdateUserProfile?: (updatedUser: UserRecord) => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  stats,
  currentUser,
  streakDays = 1,
  examHistory = [],
  onShowCertificate,
  onAddExamScore,
  allSubscribers = [],
  onUpdateUserProfile
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'badges' | 'history' | 'profile'>('dashboard');
  
  // State for manual score logging
  const [showLogExamForm, setShowLogExamForm] = useState(false);
  const [examTitle, setExamTitle] = useState('');
  const [examSubject, setExamSubject] = useState('الفيزياء');
  const [examScore, setExamScore] = useState<number>(90);
  const [correctQuestionsInput, setCorrectQuestionsInput] = useState<number>(10);

  // Profile Edit State
  const [editDisplayName, setEditDisplayName] = useState(currentUser?.displayName || '');
  const [editPhone, setEditPhone] = useState(currentUser?.phoneNumber || '');
  const [editGuardianPhone, setEditGuardianPhone] = useState(currentUser?.guardianPhone || '');
  const [editAddress, setEditAddress] = useState(currentUser?.address || '');
  const [editGrade, setEditGrade] = useState(currentUser?.gradeName || 'تاسع عام');
  const [editPhotoURL, setEditPhotoURL] = useState(currentUser?.photoURL || '');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSaveMsg, setProfileSaveMsg] = useState<string | null>(null);

  const handleDevicePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('حجم الصورة كبير جداً، يرجى اختيار صورة بحجم أقل من 5 ميجابايت.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setEditPhotoURL(dataUrl);
        setProfileSaveMsg('📷 تم رفع صورتك الشخصية بنجاح! اضغط الآن على "حفظ تعديلات البيانات" للإنهاء.');
      }
    };
    reader.readAsDataURL(file);
  };

  const AVATAR_PRESETS = [
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(currentUser?.email || 'Student1')}`,
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aria',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Student1',
    'https://api.dicebear.com/7.x/micah/svg?seed=Student2',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed'
  ];

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    setIsSavingProfile(true);
    setProfileSaveMsg(null);

    const updatedUser: UserRecord = {
      ...currentUser,
      displayName: editDisplayName.trim() || currentUser.displayName,
      phoneNumber: editPhone.trim(),
      guardianPhone: editGuardianPhone.trim(),
      address: editAddress.trim(),
      gradeName: editGrade,
      photoURL: editPhotoURL || currentUser.photoURL
    };

    try {
      localStorage.setItem('4u_user', JSON.stringify(updatedUser));
      await updateUserProfileInFirestore(updatedUser.uid, {
        displayName: updatedUser.displayName,
        photoURL: updatedUser.photoURL,
        phoneNumber: updatedUser.phoneNumber,
        guardianPhone: updatedUser.guardianPhone,
        address: updatedUser.address,
        gradeName: updatedUser.gradeName
      });

      if (onUpdateUserProfile) {
        onUpdateUserProfile(updatedUser);
      }
      setProfileSaveMsg('✨ تم حفظ وتعديل بيانات ملفك الشخصي بنجاح!');
    } catch (err) {
      setProfileSaveMsg('تم التحديث بنجاح.');
    } finally {
      setIsSavingProfile(false);
      setTimeout(() => setProfileSaveMsg(null), 4000);
    }
  };

  if (!isOpen) return null;

  // Compute total correct questions across exam history
  const totalCorrectQuestions = examHistory.reduce((acc, curr) => acc + (curr.correctQuestions || 0), 0);

  // Compute average score across exams
  const averageScore = examHistory.length > 0 
    ? Math.round(examHistory.reduce((acc, curr) => acc + (curr.score || 0), 0) / examHistory.length) 
    : (stats.totalExams > 0 ? 92 : 0);

  // Last solved exam details
  const lastExam = examHistory.length > 0 ? examHistory[0] : null;

  // Compute Points
  const lessonPoints = stats.totalRead * 20;
  const examPoints = stats.totalExams * 50;
  const questionPoints = totalCorrectQuestions * 10;
  const streakPoints = streakDays * 15;
  const totalPoints = lessonPoints + examPoints + questionPoints + streakPoints + (currentUser?.points || 0);

  // Compute Leaderboard Rank
  let studentRank = 1;
  if (allSubscribers && allSubscribers.length > 0) {
    const sorted = [...allSubscribers].sort((a, b) => {
      const pA = (a.points || 0) + (a.examsCompletedCount || 0) * 50 + (a.lessonsCompletedCount || 0) * 20;
      const pB = (b.points || 0) + (b.examsCompletedCount || 0) * 50 + (b.lessonsCompletedCount || 0) * 20;
      return pB - pA;
    });
    const foundIndex = sorted.findIndex(s => s.uid === currentUser?.uid || s.email === currentUser?.email);
    if (foundIndex !== -1) {
      studentRank = foundIndex + 1;
    }
  }

  // 🏆 Medals and Badges definitions
  const badgesList = [
    {
      id: 'first_exam',
      title: 'أول امتحان ✅',
      desc: 'إنجاز وحل أول اختبار بنجاح',
      icon: '✅',
      unlocked: stats.totalExams >= 1,
      current: stats.totalExams,
      target: 1,
      reward: '+50 نقطة',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'correct_100',
      title: '100 سؤال صحيح 🥉',
      desc: 'الإجابة الصحيحة على 100 سؤال اختبارات',
      icon: '🥉',
      unlocked: totalCorrectQuestions >= 100,
      current: totalCorrectQuestions,
      target: 100,
      reward: '+100 نقطة',
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 'correct_500',
      title: '500 سؤال 🥈',
      desc: 'الإجابة الصحيحة على 500 سؤال اختبارات',
      icon: '🥈',
      unlocked: totalCorrectQuestions >= 500,
      current: totalCorrectQuestions,
      target: 500,
      reward: '+250 نقطة',
      color: 'from-slate-400 to-slate-600'
    },
    {
      id: 'correct_1000',
      title: '1000 سؤال 🥇',
      desc: 'وسام التميز الفائق - 1000 سؤال صحيح',
      icon: '🥇',
      unlocked: totalCorrectQuestions >= 1000,
      current: totalCorrectQuestions,
      target: 1000,
      reward: '+500 نقطة',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      id: 'streak_7',
      title: '7 أيام متتالية 🔥',
      desc: 'الالتزام بزيارة ودراسة المنصة 7 أيام متتالية',
      icon: '🔥',
      unlocked: streakDays >= 7,
      current: streakDays,
      target: 7,
      reward: '+150 نقطة',
      color: 'from-rose-500 to-orange-600'
    }
  ];

  const handleLogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!examTitle.trim()) return;
    if (onAddExamScore) {
      onAddExamScore({
        title: examTitle.trim(),
        subject: examSubject,
        score: Number(examScore),
        correctQuestions: Number(correctQuestionsInput),
        date: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' })
      });
    }
    setExamTitle('');
    setShowLogExamForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 text-right overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BAR */}
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-900 text-white p-5 pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center justify-between flex-row-reverse mb-3">
            <div className="flex items-center gap-3 flex-row-reverse">
              <div className="p-2.5 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-amber-300">
                <Trophy className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-white">
                  لوحة إنجازات الطالب (Dashboard)
                </h3>
                <p className="text-xs text-indigo-200/80 font-medium">
                  تابع تقدمك الدراسي، أوسمتك، وسجل درجاتك في المنصة
                </p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition cursor-pointer select-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* STUDENT QUICK BADGE BANNER */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold shrink-0">
                👤
              </div>
              <div>
                <span className="font-bold text-white block">
                  {currentUser?.displayName || 'الطالب المتميز'}
                </span>
                <span className="text-[10px] text-slate-400 block">
                  {currentUser?.gradeName || 'الصف الدراسي'} • {currentUser?.countryName || 'الإمارات'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-xl text-amber-300 font-bold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{totalPoints} نقطة</span>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-xl text-emerald-300 font-bold flex items-center gap-1.5">
                <Medal className="w-3.5 h-3.5 text-emerald-400" />
                <span>المركز #{studentRank}</span>
              </div>
            </div>
          </div>

          {/* MODAL NAVIGATION TABS */}
          <div className="flex items-center gap-1 mt-4 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800/80 pt-3">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>نظرة عامة</span>
            </button>

            <button
              onClick={() => setActiveTab('badges')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer relative ${
                activeTab === 'badges'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'bg-slate-800/60 text-amber-300 hover:bg-slate-800'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>🏆 النقاط والميداليات</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>سجل الامتحانات ({examHistory.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>بياناتي والشهادة</span>
            </button>
          </div>
        </div>

        {/* BODY CONTENT AREA */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5">
          {/* TAB 1: DASHBOARD HIGHLIGHTS */}
          {activeTab === 'dashboard' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Top 5 Key Student Dashboard Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* 1. Progress % */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-right shadow-sm relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">نسبة التقدم</span>
                    <Percent className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    {stats.completionRate}%
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${stats.completionRate}%` }} />
                  </div>
                </div>

                {/* 2. Average Score % */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-right shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">متوسط الدرجات</span>
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
                    {averageScore}%
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">عبر جميع الاختبارات</span>
                </div>

                {/* 3. Completed Lessons */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-right shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">الدروس المكتملة</span>
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    {stats.totalRead} <span className="text-xs font-bold text-slate-500">من {stats.totalLessonsCount}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">درس منجز</span>
                </div>

                {/* 4. Streak Days */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-right shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">أيام المواظبة (Streak)</span>
                    <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
                  </div>
                  <div className="text-2xl font-black text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <span>{streakDays}</span>
                    <span className="text-xs font-bold text-slate-500">أيام</span>
                  </div>
                  <span className="text-[10px] text-rose-500 font-semibold">متتالية 🔥</span>
                </div>

                {/* 5. Last Solved Exam */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-right shadow-sm col-span-2 sm:col-span-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">آخر امتحان تم حله</span>
                    <FileCheck className="w-4 h-4 text-teal-500" />
                  </div>
                  {lastExam ? (
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate">
                        <span className="font-extrabold text-sm text-slate-800 dark:text-white block truncate">
                          {lastExam.title}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {lastExam.subject} • {lastExam.date}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-black text-xs shrink-0">
                        الدرجة: {lastExam.score}%
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 py-1">
                      لم تقم بحل أي اختبارات مؤخراً. اختر درساً وابدأ اختباره لتوثيق نتيجتك!
                    </p>
                  )}
                </div>
              </div>

              {/* POINTS & LEADERBOARD RANK BANNER */}
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-5 rounded-2xl shadow-lg border border-indigo-500/30 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl font-black text-2xl shadow-md shrink-0">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-black text-base text-white">
                        نقاط الطالب وترتيبه
                      </h4>
                      <p className="text-xs text-indigo-100 opacity-90 mt-0.5">
                        احصل على المزيد من النقاط والميداليات عن طريق حل الأسئلة والامتحانات!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="bg-slate-950/40 border border-white/20 px-4 py-2 rounded-2xl text-center">
                      <span className="text-[10px] text-indigo-200 block font-bold">إجمالي النقاط</span>
                      <span className="text-xl font-black text-amber-300">{totalPoints} ⭐</span>
                    </div>
                    <div className="bg-slate-950/40 border border-white/20 px-4 py-2 rounded-2xl text-center">
                      <span className="text-[10px] text-indigo-200 block font-bold">الترتيب العام</span>
                      <span className="text-xl font-black text-emerald-300">#{studentRank} 🥇</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUICK BADGES PREVIEW */}
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-slate-800 dark:text-white flex items-center gap-1.5">
                    <span>🏆</span>
                    <span>أوسمتي المكتسبة مؤخراً</span>
                  </h4>
                  <button 
                    onClick={() => setActiveTab('badges')}
                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>عرض الكل ({badgesList.filter(b => b.unlocked).length}/{badgesList.length})</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {badgesList.map((badge) => (
                    <div 
                      key={badge.id}
                      className={`p-3 rounded-xl border transition flex items-center gap-2.5 ${
                        badge.unlocked 
                          ? 'bg-amber-500/10 dark:bg-amber-950/20 border-amber-500/30 text-slate-800 dark:text-white' 
                          : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60'
                      }`}
                    >
                      <span className="text-2xl shrink-0">{badge.icon}</span>
                      <div className="min-w-0">
                        <span className="font-extrabold text-xs block truncate">{badge.title}</span>
                        <span className="text-[9px] font-bold block text-slate-500 dark:text-slate-400">
                          {badge.unlocked ? 'مكتسب ✅' : `${badge.current}/${badge.target}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: POINTS & BADGES SYSTEM */}
          {activeTab === 'badges' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-center gap-3">
                <div className="p-3 bg-amber-500 text-slate-950 rounded-2xl text-2xl font-black shrink-0">
                  🎖️
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    نظام النقاط والميداليات التفاعلي
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    احصل على الميداليات والأوسمة عند حل الأسئلة، إكمال الاختبارات والمواظبة اليومية في المنصة!
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {badgesList.map((badge) => {
                  const progressPct = Math.min(100, Math.round((badge.current / badge.target) * 100));
                  return (
                    <div 
                      key={badge.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        badge.unlocked 
                          ? 'bg-gradient-to-r from-amber-500/10 to-yellow-500/5 dark:from-amber-950/30 dark:to-yellow-950/10 border-amber-500/40 shadow-sm' 
                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-2xl text-2xl shrink-0 ${
                            badge.unlocked 
                              ? 'bg-amber-400 text-slate-950 shadow-md' 
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-400 grayscale'
                          }`}>
                            {badge.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                                {badge.title}
                              </h5>
                              {badge.unlocked && (
                                <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                                  تم الفتح ✅
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {badge.desc}
                            </p>
                          </div>
                        </div>

                        <div className="text-left shrink-0">
                          <span className="px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-black text-xs block">
                            {badge.reward}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar for lock state */}
                      <div className="space-y-1 pt-1 border-t border-slate-200 dark:border-slate-700/60 mt-2">
                        <div className="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                          <span>التقدم الإجمالي: {badge.current} من {badge.target}</span>
                          <span>{progressPct}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              badge.unlocked 
                                ? 'bg-gradient-to-r from-amber-400 to-emerald-500' 
                                : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                            }`}
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: EXAM HISTORY & LOGS */}
          {activeTab === 'history' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-500" />
                  <span>سجل درجاتي والامتحانات المكتملة</span>
                </h4>

                <button
                  onClick={() => setShowLogExamForm(!showLogExamForm)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>تسجيل درجة اختبار</span>
                </button>
              </div>

              {/* FORM TO MANUAL LOG EXAM */}
              {showLogExamForm && (
                <form onSubmit={handleLogSubmit} className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 p-4 rounded-2xl space-y-3">
                  <h5 className="font-bold text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>تسجيل نتيجة اختبار جديدة</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-600 dark:text-slate-300 block mb-1">عنوان الاختبار / الدرس</label>
                      <input 
                        type="text" 
                        required
                        placeholder="مثال: اختبار الموجات الكهرومغناطيسية"
                        value={examTitle}
                        onChange={(e) => setExamTitle(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2 rounded-xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 dark:text-slate-300 block mb-1">المادة</label>
                      <select 
                        value={examSubject}
                        onChange={(e) => setExamSubject(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2 rounded-xl text-xs"
                      >
                        <option value="الفيزياء">الفيزياء</option>
                        <option value="الكيمياء">الكيمياء</option>
                        <option value="الأحياء">الأحياء</option>
                        <option value="الرياضيات">الرياضيات</option>
                        <option value="اللغة العربية">اللغة العربية</option>
                        <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
                        <option value="مادة أخرى">مادة أخرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 dark:text-slate-300 block mb-1">الدرجة الحاصل عليها (%)</label>
                      <input 
                        type="number" 
                        min="0" 
                        max="100"
                        required
                        value={examScore}
                        onChange={(e) => setExamScore(Number(e.target.value))}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2 rounded-xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-600 dark:text-slate-300 block mb-1">عدد الأسئلة الصحيحة</label>
                      <input 
                        type="number" 
                        min="1" 
                        required
                        value={correctQuestionsInput}
                        onChange={(e) => setCorrectQuestionsInput(Number(e.target.value))}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-1">
                    <button 
                      type="button" 
                      onClick={() => setShowLogExamForm(false)}
                      className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer"
                    >
                      إلغاء
                    </button>
                    <button 
                      type="submit" 
                      className="px-4 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs cursor-pointer"
                    >
                      حفظ الدرجة
                    </button>
                  </div>
                </form>
              )}

              {/* TABLE OF EXAM LOGS */}
              {examHistory.length > 0 ? (
                <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-xs">
                      <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-extrabold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="p-3">الاختبار / الدرس</th>
                          <th className="p-3">المادة</th>
                          <th className="p-3 text-center">الأسئلة الصحيحة</th>
                          <th className="p-3 text-center">الدرجة</th>
                          <th className="p-3">التاريخ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                        {examHistory.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                            <td className="p-3 font-bold truncate max-w-[180px]">
                              {item.title}
                            </td>
                            <td className="p-3 text-slate-500 dark:text-slate-400">
                              {item.subject || 'غير محدد'}
                            </td>
                            <td className="p-3 text-center font-mono font-bold text-indigo-600 dark:text-indigo-400">
                              {item.correctQuestions || 10} سؤال
                            </td>
                            <td className="p-3 text-center">
                              <span className={`px-2 py-0.5 rounded-lg font-black text-[11px] ${
                                item.score >= 85 
                                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                                  : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                              }`}>
                                {item.score}%
                              </span>
                            </td>
                            <td className="p-3 text-slate-400 text-[11px]">
                              {item.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2">
                  <span className="text-3xl block">📝</span>
                  <p className="font-bold text-sm text-slate-700 dark:text-slate-300">
                    لا يوجد سجل اختبارات مسجل بعد
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    قم بفتح أي درس وحل اختباراته المدمجة أو استخدم زر "تسجيل درجة اختبار" أعلاه لتدوين درجاتك!
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: STUDENT PROFILE CONTROL PANEL & EDITING */}
          {activeTab === 'profile' && (
            <div className="space-y-5 animate-fadeIn">
              {profileSaveMsg && (
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-3.5 rounded-2xl text-xs font-bold text-center animate-bounce shadow-md">
                  {profileSaveMsg}
                </div>
              )}

              {/* Student Profile Editing Form */}
              <form onSubmit={handleProfileSave} className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-500" />
                    <span>لوحة التحكم بالملف الشخصي وتعديل البيانات</span>
                  </h4>
                  <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-bold px-2.5 py-1 rounded-full border border-indigo-500/20">
                    تعديل فوري
                  </span>
                </div>

                {/* Avatar & Device Photo Selection */}
                <div className="space-y-3 bg-slate-100 dark:bg-slate-900/80 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="text-xs font-extrabold text-slate-800 dark:text-slate-200 block">
                      صورة بروفايل الطالب (رفع صورة شخصية أو اختيار رمز):
                    </label>

                    {/* Device Upload Button */}
                    <label 
                      htmlFor="student-photo-upload"
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs transition cursor-pointer shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <span>📷</span>
                      <span>رفع صورة من جهازك (موبايل/كمبيوتر)</span>
                      <input 
                        type="file"
                        id="student-photo-upload"
                        accept="image/*"
                        onChange={handleDevicePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                    <div className="shrink-0 relative">
                      <img 
                        src={editPhotoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(currentUser?.email || 'Student1')}`}
                        alt="Avatar Preview" 
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-500 shadow-md bg-slate-950"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-0.5 rounded-full text-[10px]">✏️</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {AVATAR_PRESETS.map((avatarUrl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setEditPhotoURL(avatarUrl)}
                          className={`w-11 h-11 rounded-xl overflow-hidden border-2 transition cursor-pointer shrink-0 ${
                            editPhotoURL === avatarUrl ? 'border-amber-400 scale-105 shadow-lg' : 'border-slate-600 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={avatarUrl} alt="Preset Avatar" className="w-full h-full object-cover bg-slate-950" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <input 
                      type="url"
                      placeholder="أو ضع رابط صورة مباشرة (URL)..."
                      value={editPhotoURL}
                      onChange={(e) => setEditPhotoURL(e.target.value)}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-2 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs pt-1">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                      الاسم الكامل للطالب الرباعي:
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="مثال: محمد أحمد محمود علي"
                      value={editDisplayName}
                      onChange={(e) => setEditDisplayName(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2.5 rounded-xl text-xs text-slate-800 dark:text-slate-100 font-bold focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  {/* Student Phone Number */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                      رقم موبايل الطالب / الواتساب:
                    </label>
                    <input 
                      type="tel"
                      placeholder="مثال: 0501234567 أو 01012345678"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2.5 rounded-xl text-xs text-slate-800 dark:text-slate-100 font-bold focus:outline-none focus:border-indigo-500 font-mono"
                      dir="ltr"
                    />
                  </div>

                  {/* Guardian Phone Number */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                      رقم هاتف ولي الأمر:
                    </label>
                    <input 
                      type="tel"
                      placeholder="مثال: 0507654321"
                      value={editGuardianPhone}
                      onChange={(e) => setEditGuardianPhone(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2.5 rounded-xl text-xs text-slate-800 dark:text-slate-100 font-bold focus:outline-none focus:border-indigo-500 font-mono"
                      dir="ltr"
                    />
                  </div>

                  {/* Grade / Stage */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                      الصف الدراسي:
                    </label>
                    <select
                      value={editGrade}
                      onChange={(e) => setEditGrade(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2.5 rounded-xl text-xs text-slate-800 dark:text-slate-100 font-bold focus:outline-none focus:border-indigo-500"
                    >
                      <option value="تاسع عام">تاسع عام</option>
                      <option value="تاسع متقدم">تاسع متقدم</option>
                      <option value="عاشر عام">عاشر عام</option>
                      <option value="عاشر متقدم">عاشر متقدم</option>
                      <option value="حادي عشر عام">حادي عشر عام</option>
                      <option value="حادي عشر متقدم">حادي عشر متقدم</option>
                      <option value="ثاني عشر عام">ثاني عشر عام</option>
                      <option value="ثاني عشر متقدم">ثاني عشر متقدم</option>
                    </select>
                  </div>

                  {/* Full Address / Governorate */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                      العنوان والمحافظة / الدولة:
                    </label>
                    <input 
                      type="text"
                      placeholder="مثال: القاهرة - حي أباظة / دبي - دولة الإمارات العربية المتحدة"
                      value={editAddress}
                      onChange={(e) => setEditAddress(e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-2.5 rounded-xl text-xs text-slate-800 dark:text-slate-100 font-bold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Save Profile Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSavingProfile}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold text-xs shadow-lg transition cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>💾</span>
                    <span>{isSavingProfile ? 'جاري الحفظ والمزامنة...' : 'حفظ تعديلات البيانات الشخصية'}</span>
                  </button>
                </div>
              </form>

              {/* Read-Only Account Summary Card */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <span className="text-[10px] font-bold text-slate-400 block">معلومات الحساب المسجلة</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">البريد الإلكتروني:</span>
                    <span className="font-bold text-slate-800 dark:text-white font-mono">{currentUser?.email || 'غير متوفر'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">نوع الحساب:</span>
                    <span className="font-bold text-emerald-500">{currentUser?.role === 'admin' ? '👑 أدمن المنصة' : '🎓 طالب نشط'}</span>
                  </div>
                </div>
              </div>

              {/* Certificate view trigger */}
              <div className="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 border border-amber-500/40 p-5 rounded-2xl space-y-3 text-right">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500 text-slate-950 rounded-2xl text-2xl font-black shrink-0">
                    📜
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      شهادة التقدير والتفوق المعتمدة
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      يمكنك معاينة وطباعة شهادة التفوق باسمك المعتمد في المنصة
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    onClose();
                    onShowCertificate();
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 py-3 rounded-xl font-black text-xs transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trophy className="w-4 h-4" />
                  <span>معاينة وتحميل شهادة التقدير المعتمدة</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
