import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Users, ShieldCheck, Mail, Calendar, Search, RefreshCw, Copy, Download, 
  Crown, UserPlus, Trash2, ShieldAlert, Megaphone, BarChart3, CheckCircle2, AlertCircle,
  FileCheck, BookOpen, Clock, Flame, Filter, ArrowUpDown, Activity, Sparkles, GraduationCap
} from 'lucide-react';
import { 
  UserRecord, 
  updateUserRoleInFirestore, 
  deleteUserFromFirestore, 
  addAdminByEmailInFirestore,
  fetchActiveAnnouncement,
  saveAnnouncementInFirestore,
  Announcement 
} from '../../lib/firebase';

interface SubscribersModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscribers: UserRecord[];
  isLoading: boolean;
  onRefresh: () => void;
  adminEmail: string;
}

export const SubscribersModal: React.FC<SubscribersModalProps> = ({
  isOpen,
  onClose,
  subscribers,
  isLoading,
  onRefresh,
  adminEmail
}) => {
  const [activeTab, setActiveTab] = useState<'users' | 'admins' | 'broadcast' | 'analytics'>('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'exams' | 'time' | 'lessons'>('recent');
  const [roleFilter, setRoleFilter] = useState<'all' | 'users' | 'admins'>('all');
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedStudentDetails, setSelectedStudentDetails] = useState<UserRecord | null>(null);
  
  // Admin add state
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [adminAddStatus, setAdminAddStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [isSubmittingAdmin, setIsSubmittingAdmin] = useState(false);

  // Announcement State
  const [announcementText, setAnnouncementText] = useState('');
  const [announcementActive, setAnnouncementActive] = useState(false);
  const [announcementStatus, setAnnouncementStatus] = useState<string | null>(null);
  const [isSavingAnn, setIsSavingAnn] = useState(false);

  // Action status state
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<{
    type: 'toggle_admin' | 'delete_user';
    user: UserRecord;
    title: string;
    message: string;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadAnnouncement();
    }
  }, [isOpen]);

  const loadAnnouncement = async () => {
    const ann = await fetchActiveAnnouncement();
    if (ann) {
      setAnnouncementText(ann.content || '');
      setAnnouncementActive(ann.active || false);
    }
  };

  if (!isOpen) return null;

  const formatTimeSpent = (secs?: number) => {
    if (!secs || secs <= 0) return '0 دقيقة';
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    if (hours > 0) {
      return `${hours}س ${mins}د`;
    }
    if (mins > 0) {
      return `${mins} دقيقة`;
    }
    return `${secs} ثانية`;
  };

  const filtered = subscribers
    .filter(s => {
      const matchSearch = s.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email?.toLowerCase().includes(searchTerm.toLowerCase());
      const isAdminUser = s.role === 'admin' || s.email?.toLowerCase().trim() === adminEmail.toLowerCase().trim();
      if (roleFilter === 'users') return matchSearch && !isAdminUser;
      if (roleFilter === 'admins') return matchSearch && isAdminUser;
      return matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'exams') {
        return (b.examsCompletedCount || 0) - (a.examsCompletedCount || 0);
      }
      if (sortBy === 'time') {
        return (b.totalTimeSpentSeconds || 0) - (a.totalTimeSpentSeconds || 0);
      }
      if (sortBy === 'lessons') {
        return (b.lessonsCompletedCount || 0) - (a.lessonsCompletedCount || 0);
      }
      // Default recent login / active
      const dateA = new Date(a.lastActiveAt || a.lastLoginAt || a.createdAt || 0).getTime();
      const dateB = new Date(b.lastActiveAt || b.lastLoginAt || b.createdAt || 0).getTime();
      return dateB - dateA;
    });

  const adminList = subscribers.filter(s => 
    s.role === 'admin' || s.email?.toLowerCase().trim() === adminEmail.toLowerCase().trim()
  );

  const handleCopyEmails = () => {
    const emails = subscribers.map(s => s.email).filter(Boolean).join(', ');
    navigator.clipboard.writeText(emails);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handleExportCSV = () => {
    const headers = ['UID', 'Name', 'Email', 'Role', 'Provider', 'Created At', 'Last Login At'];
    const rows = subscribers.map(s => [
      `"${s.uid || ''}"`,
      `"${s.displayName || ''}"`,
      `"${s.email || ''}"`,
      `"${s.role || 'user'}"`,
      `"${s.provider || ''}"`,
      `"${s.createdAt || ''}"`,
      `"${s.lastLoginAt || ''}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `subscribers_4u_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleToggleAdminRole = (user: UserRecord) => {
    if (user.email.toLowerCase() === adminEmail.toLowerCase()) {
      setToastMessage('⚠️ لا يمكنك إزالة صلاحية الأدمن الأساسي للمنصة!');
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    const actionText = newRole === 'admin' ? 'منح صلاحيات الأدمن 👑' : 'تنزيل الحساب إلى طالب عادي';
    setPendingAction({
      type: 'toggle_admin',
      user,
      title: `${actionText}`,
      message: `هل أنت متأكد من ${actionText} للمستخدم (${user.email})؟`
    });
  };

  const handleDeleteSubscriber = (user: UserRecord) => {
    if (user.email.toLowerCase() === adminEmail.toLowerCase()) {
      setToastMessage('⚠️ لا يمكنك حذف حساب الأدمن الرئيسي!');
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }
    setPendingAction({
      type: 'delete_user',
      user,
      title: 'حذف الحساب نهائياً',
      message: `⚠️ هل أنت متأكد من حذف الحساب (${user.email}) نهائياً من قاعدة البيانات؟`
    });
  };

  const handleExecutePendingAction = async () => {
    if (!pendingAction) return;
    const { type, user } = pendingAction;
    setPendingAction(null);

    const targetUid = user.uid || ('user_' + user.email.replace(/[^a-zA-Z0-9]/g, '_'));
    setActionLoadingId(targetUid);

    if (type === 'toggle_admin') {
      const newRole = user.role === 'admin' ? 'user' : 'admin';
      const ok = await updateUserRoleInFirestore(targetUid, newRole, user.email);
      setActionLoadingId(null);
      if (ok) {
        setToastMessage(newRole === 'admin' ? `تمت ترقية (${user.email}) إلى أدمن بنجاح! 👑` : `تم تحويل (${user.email}) إلى حساب طالب.`);
        setTimeout(() => setToastMessage(null), 4000);
        onRefresh();
      } else {
        setToastMessage('❌ حدث خطأ أثناء تعديل صلاحيات الحساب.');
        setTimeout(() => setToastMessage(null), 4000);
      }
    } else if (type === 'delete_user') {
      const ok = await deleteUserFromFirestore(targetUid, user.email);
      setActionLoadingId(null);
      if (ok) {
        setToastMessage(`تم حذف الحساب (${user.email}) بنجاح من قاعدة البيانات. 🗑️`);
        setTimeout(() => setToastMessage(null), 4000);
        onRefresh();
      } else {
        setToastMessage('❌ حدث خطأ أثناء حذف الحساب.');
        setTimeout(() => setToastMessage(null), 4000);
      }
    }
  };

  const handleAddAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail || !newAdminEmail.includes('@')) {
      setAdminAddStatus({ success: false, message: 'يرجى كتابة بريد جيمييل صحيح' });
      return;
    }
    setIsSubmittingAdmin(true);
    setAdminAddStatus(null);
    const res = await addAdminByEmailInFirestore(newAdminEmail);
    setIsSubmittingAdmin(false);
    setAdminAddStatus(res);
    if (res.success) {
      setNewAdminEmail('');
      onRefresh();
    }
  };

  const handleSaveAnnouncement = async () => {
    setIsSavingAnn(true);
    setAnnouncementStatus(null);
    const ok = await saveAnnouncementInFirestore(announcementText, announcementActive);
    setIsSavingAnn(false);
    if (ok) {
      setAnnouncementStatus('تم حفظ وتحديث الإعلان العام بنجاح على شاشات جميع الطلاب! 🚀');
      onRefresh();
      setTimeout(() => setAnnouncementStatus(null), 4000);
    } else {
      setAnnouncementStatus('حدث خطأ أثناء حفظ الإعلان.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/80 backdrop-blur-md">
        {/* Toast Notification Banner */}
        {toastMessage && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1200] bg-indigo-600 text-white font-bold text-xs py-3 px-6 rounded-2xl shadow-2xl border border-indigo-400/40 flex items-center gap-2 animate-bounce">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Custom Confirmation Dialog Modal */}
        {pendingAction && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-amber-500/50 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-5 text-right">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/30 shrink-0">
                  <ShieldAlert className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">{pendingAction.title}</h3>
                  <p className="text-xs text-amber-300 font-mono mt-0.5 truncate">{pendingAction.user.email}</p>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                {pendingAction.message}
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setPendingAction(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  onClick={handleExecutePendingAction}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>تأكيد التنفيذ الآن</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Admin Header Banner */}
          <div className="bg-gradient-to-r from-amber-600 via-indigo-700 to-violet-900 p-5 md:p-6 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-400/20 backdrop-blur-md border border-amber-300/40 flex items-center justify-center text-amber-300 shadow-xl shrink-0">
                <Crown className="w-7 h-7 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg md:text-xl font-black text-white">
                    لوحة تحكم الأدمن وقاعدة البيانات
                  </h3>
                  <span className="bg-amber-400 text-slate-950 text-[11px] px-2.5 py-0.5 rounded-full font-black flex items-center gap-1 shadow">
                    <Crown className="w-3 h-3" />
                    Admin Portal
                  </span>
                </div>
                <p className="text-xs text-amber-100/90 font-mono mt-1 truncate max-w-xs md:max-w-md">
                  الأدمن المسؤول: <strong className="text-white underline">{adminEmail}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onRefresh}
                disabled={isLoading}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title="تحديث البيانات"
              >
                <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="bg-slate-950 border-b border-slate-800 p-2 flex items-center gap-1 overflow-x-auto shrink-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shrink-0 ${
                activeTab === 'users'
                  ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>المشتركين والطلاب ({subscribers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('admins')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shrink-0 ${
                activeTab === 'admins'
                  ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span>إدارة المسؤولين الأدمنز ({adminList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('broadcast')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shrink-0 ${
                activeTab === 'broadcast'
                  ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Megaphone className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>إعلان المنصة العام للطلاب</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer shrink-0 ${
                activeTab === 'analytics'
                  ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>الإحصائيات والتحكم</span>
            </button>
          </div>

          {/* TAB 1: SUBSCRIBERS LIST */}
          {activeTab === 'users' && (
            <div className="flex-1 flex flex-col min-h-0">
              {/* Quick Controls & Sorting/Filter Bar */}
              <div className="p-3 md:p-4 bg-slate-950/90 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
                <div className="relative flex-1 min-w-[200px]">
                  <input
                    type="text"
                    placeholder="ابحث باسم الطالب أو البريد..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl py-2 px-9 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  />
                  <Search className="w-4 h-4 absolute right-3 top-2.5 text-slate-400 pointer-events-none" />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Role Filter */}
                  <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1 text-xs">
                    <button
                      onClick={() => setRoleFilter('all')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                        roleFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      الكل ({subscribers.length})
                    </button>
                    <button
                      onClick={() => setRoleFilter('users')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                        roleFilter === 'users' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      الطلاب
                    </button>
                    <button
                      onClick={() => setRoleFilter('admins')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                        roleFilter === 'admins' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      الأدمنز
                    </button>
                  </div>

                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs text-slate-300">
                    <ArrowUpDown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <select
                      value={sortBy}
                      onChange={(e: any) => setSortBy(e.target.value)}
                      className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="recent" className="bg-slate-900 text-white">الأحدث خروجاً/دخولاً</option>
                      <option value="exams" className="bg-slate-900 text-white">الأعلى حلاً للامتحانات 📝</option>
                      <option value="time" className="bg-slate-900 text-white">الأكثر بقاءً بالمنصة ⏱️</option>
                      <option value="lessons" className="bg-slate-900 text-white">الأكثر إكمالاً للدروس 📚</option>
                    </select>
                  </div>

                  <button
                    onClick={handleCopyEmails}
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copySuccess ? 'تم النسخ! ✓' : 'الإيميلات'}</span>
                  </button>

                  <button
                    onClick={handleExportCSV}
                    className="px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                </div>
              </div>

              {/* Users Cards Grid */}
              <div className="p-4 md:p-6 overflow-y-auto flex-1 space-y-3 custom-scrollbar">
                {isLoading ? (
                  <div className="py-16 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
                    <RefreshCw className="w-8 h-8 animate-spin text-amber-400" />
                    <p className="text-sm">جاري جلب بيانات المشتركين والطلاب من Firestore...</p>
                  </div>
                ) : filtered.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 bg-slate-950/40 rounded-2xl border border-slate-800/60 p-6">
                    <Users className="w-12 h-12 mx-auto text-slate-600 mb-3 opacity-60" />
                    <p className="font-semibold text-slate-300">لا يوجد مشتركين مطابقين للبحث أو التصفية</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                    {filtered.map((user, idx) => {
                      const userIsAdmin = user.role === 'admin' || user.email?.toLowerCase().trim() === adminEmail.toLowerCase().trim();
                      const examsCount = user.examsCompletedCount || 0;
                      const lessonsCount = user.lessonsCompletedCount || 0;
                      const timeSpentStr = formatTimeSpent(user.totalTimeSpentSeconds);
                      const streakDays = user.streakDays || 1;

                      return (
                        <div
                          key={user.uid || idx}
                          className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 transition-all flex flex-col justify-between gap-3 shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <img
                              src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.email)}`}
                              alt={user.displayName}
                              className="w-12 h-12 rounded-2xl bg-slate-700 object-cover border border-slate-600 shrink-0 shadow"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-bold text-sm text-white truncate flex items-center gap-1.5">
                                  {user.displayName}
                                  {userIsAdmin && (
                                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                                      <Crown className="w-2.5 h-2.5" />
                                      أدمن
                                    </span>
                                  )}
                                </h4>
                                <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-bold ${
                                  userIsAdmin ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                }`}>
                                  <ShieldCheck className="w-3 h-3" />
                                  {userIsAdmin ? 'مسؤول منصة' : 'طالب مشترك'}
                                </span>
                              </div>

                              <div className="text-xs text-indigo-300 flex items-center gap-1.5 mt-1 truncate font-mono bg-slate-950/60 p-1.5 rounded-lg border border-slate-800">
                                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                                <span className="truncate select-all">{user.email}</span>
                              </div>

                              {/* Student Usage Statistics Badge Grid */}
                              <div className="grid grid-cols-2 gap-1.5 mt-2.5">
                                <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 flex items-center gap-1.5 text-xs">
                                  <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  <span className="text-slate-400 text-[10px]">الامتحانات:</span>
                                  <strong className="text-emerald-300 font-black text-xs mr-auto">{examsCount}</strong>
                                </div>

                                <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 flex items-center gap-1.5 text-xs">
                                  <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                  <span className="text-slate-400 text-[10px]">الدروس:</span>
                                  <strong className="text-blue-300 font-black text-xs mr-auto">{lessonsCount}</strong>
                                </div>

                                <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 flex items-center gap-1.5 text-xs">
                                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                  <span className="text-slate-400 text-[10px]">وقت المنصة:</span>
                                  <strong className="text-amber-300 font-black text-xs mr-auto">{timeSpentStr}</strong>
                                </div>

                                <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800/80 flex items-center gap-1.5 text-xs">
                                  <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                                  <span className="text-slate-400 text-[10px]">أيام متتالية:</span>
                                  <strong className="text-rose-300 font-black text-xs mr-auto">{streakDays} يوم</strong>
                                </div>
                              </div>

                              <div className="text-[11px] text-slate-400 flex items-center justify-between gap-2 mt-2 pt-1 border-t border-slate-800">
                                <span className="flex items-center gap-1 text-[10px]">
                                  <Calendar className="w-3 h-3 text-slate-500" />
                                  انضم: {user.createdAt ? new Date(user.createdAt).toLocaleDateString('ar-EG') : 'حديثاً'}
                                </span>
                                {user.gradeName && (
                                  <span className="text-[10px] text-amber-300 font-bold flex items-center gap-1 truncate">
                                    <GraduationCap className="w-3 h-3 text-amber-400 shrink-0" />
                                    {user.gradeName}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Admin Action Buttons on Each User */}
                          <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-700/60">
                            <button
                              onClick={() => setSelectedStudentDetails(user)}
                              className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                            >
                              <Activity className="w-3.5 h-3.5 text-amber-400" />
                              <span>تفاصيل الاستخدام الكاملة</span>
                            </button>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleToggleAdminRole(user)}
                                disabled={actionLoadingId === user.uid}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                                  user.role === 'admin' 
                                    ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-400/30'
                                    : 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30'
                                }`}
                              >
                                <Crown className="w-3.5 h-3.5" />
                                <span>{user.role === 'admin' ? 'إلغاء الأدمن' : 'أدمن 👑'}</span>
                              </button>

                              <button
                                onClick={() => handleDeleteSubscriber(user)}
                                disabled={actionLoadingId === user.uid}
                                className="px-2.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                title="حذف المشترك من قاعدة البيانات"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: ADMINS MANAGEMENT */}
          {activeTab === 'admins' && (
            <div className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
              {/* Add New Admin Section */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-indigo-950/40 to-slate-900 border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">تعيين أدمن جديد ببريد جيمييل مباشر</h4>
                    <p className="text-xs text-slate-300">أدخل أي عنوان Google Email لمنحه صلاحية الدخول للوحة التحكم ورؤية المشتركين</p>
                  </div>
                </div>

                <form onSubmit={handleAddAdminSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="email"
                    placeholder="مثال: teacher123@gmail.com"
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    className="flex-1 w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    dir="ltr"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingAdmin}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-black text-xs shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Crown className="w-4 h-4" />
                    <span>{isSubmittingAdmin ? 'جاري التعيين...' : 'منح صلاحيات أدمن'}</span>
                  </button>
                </form>

                {adminAddStatus && (
                  <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    adminAddStatus.success ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {adminAddStatus.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    <span>{adminAddStatus.message}</span>
                  </div>
                )}
              </div>

              {/* Existing Admins List */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-300 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  قائمة الجيميلات التي تمتلك صلاحية الأدمن حالياً ({adminList.length})
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {adminList.map((adm, idx) => (
                    <div key={adm.uid || idx} className="p-4 rounded-2xl bg-slate-800/90 border border-amber-400/40 flex items-center justify-between gap-3 shadow-md">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={adm.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(adm.email)}`}
                          alt={adm.displayName}
                          className="w-11 h-11 rounded-xl bg-slate-700 object-cover border border-amber-400/50 shrink-0"
                        />
                        <div className="min-w-0">
                          <h5 className="font-bold text-xs text-white truncate flex items-center gap-1">
                            {adm.displayName}
                            {adm.email.toLowerCase().trim() === adminEmail.toLowerCase().trim() && (
                              <span className="text-[10px] text-amber-300 font-extrabold">(الأدمن الأساسي)</span>
                            )}
                          </h5>
                          <p className="text-xs text-amber-200 font-mono truncate">{adm.email}</p>
                        </div>
                      </div>

                      {adm.email.toLowerCase().trim() !== adminEmail.toLowerCase().trim() && (
                        <button
                          onClick={() => handleToggleAdminRole(adm)}
                          className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold transition border border-rose-500/30 shrink-0 cursor-pointer"
                          title="إزالة صلاحية الأدمن"
                        >
                          إلغاء الصلاحية
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BROADCAST ANNOUNCEMENTS */}
          {activeTab === 'broadcast' && (
            <div className="p-6 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500 text-white">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">إدارة شريط (جديدنا اليوم) والإعلانات العامة</h4>
                    <p className="text-xs text-slate-400">سيظهر هذا الشريط التنبيهي في شريط (جديدنا اليوم) بالصفحة الرئيسية لجميع الطلاب والزوار فورياً</p>
                  </div>
                </div>

                <textarea
                  rows={3}
                  placeholder="اكتب الإعلان هنا... مثال: 📢 أهلاً بكم! تم رفع ملازم المراجعة النهائية واختبارات الشهر الجديدة 🚀"
                  value={announcementText}
                  onChange={(e) => setAnnouncementText(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />

                <div className="flex items-center justify-between gap-4 pt-2">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={announcementActive}
                      onChange={(e) => setAnnouncementActive(e.target.checked)}
                      className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                    />
                    <span className="text-xs font-bold text-slate-200">تفعيل ظهور الشريط الإعلاني الآن للجميع</span>
                  </label>

                  <button
                    onClick={handleSaveAnnouncement}
                    disabled={isSavingAnn}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 text-slate-950 font-black text-xs shadow-md transition cursor-pointer flex items-center gap-2"
                  >
                    <Megaphone className="w-4 h-4" />
                    <span>{isSavingAnn ? 'جاري النشر...' : 'نشر وتحديث الإعلان'}</span>
                  </button>
                </div>

                {announcementStatus && (
                  <div className="p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 text-xs font-bold text-center">
                    {announcementStatus}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="p-6 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <p className="text-xs text-slate-400">المشتركين الفعليين (Firestore)</p>
                  <p className="text-3xl font-black text-amber-300">{subscribers.length}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <p className="text-xs text-slate-400">عدد المسؤولين الأدمنز</p>
                  <p className="text-3xl font-black text-indigo-400">{adminList.length}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <p className="text-xs text-slate-400">تسجيلات اليوم</p>
                  <p className="text-3xl font-black text-emerald-400">
                    {subscribers.filter(s => s.lastLoginAt && new Date(s.lastLoginAt).toDateString() === new Date().toDateString()).length}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-xs text-slate-300">نظام الأمان وحماية الدخول</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تم قفل المنصة بالكامل، ولا يمكن لأي طالب أو زائر الدخول إلى المحتوى إلا بعد إتمام عملية تسجيل الدخول ببريد Google Mail.
                </p>
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
            <span className="flex items-center gap-1.5 text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              قاعدة بيانات الأدمن مشفّرة ومباشرة (Firebase Firestore)
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition cursor-pointer"
            >
              إغلاق اللوحة
            </button>
          </div>
        </motion.div>

        {/* STUDENT USAGE DETAILS POPUP MODAL */}
        {selectedStudentDetails && (
          <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-slate-900 border border-amber-500/50 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 text-right relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedStudentDetails.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(selectedStudentDetails.email)}`}
                    alt={selectedStudentDetails.displayName}
                    className="w-14 h-14 rounded-2xl bg-slate-800 border-2 border-amber-400/60 object-cover shadow-lg"
                  />
                  <div>
                    <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                      {selectedStudentDetails.displayName}
                      {selectedStudentDetails.role === 'admin' && (
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-md">👑 أدمن</span>
                      )}
                    </h3>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5 select-all">{selectedStudentDetails.email}</p>
                    {selectedStudentDetails.gradeName && (
                      <span className="text-[11px] text-amber-300 font-bold mt-1 inline-block">
                        🎓 {selectedStudentDetails.gradeName}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudentDetails(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Detailed Metrics Cards */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  تفاصيل الاستخدام والتفاعل في المنصة:
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px] font-semibold flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-emerald-400" />
                      الامتحانات المحلولة:
                    </span>
                    <p className="text-2xl font-black text-emerald-300">
                      {selectedStudentDetails.examsCompletedCount || 0}
                    </p>
                    <p className="text-[10px] text-slate-500">اختبار تم إكتماله بنجاح</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px] font-semibold flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      الدروس المكتملة:
                    </span>
                    <p className="text-2xl font-black text-blue-300">
                      {selectedStudentDetails.lessonsCompletedCount || 0}
                    </p>
                    <p className="text-[10px] text-slate-500">شرح درس تمت قراءته ومراجعته</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px] font-semibold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-400" />
                      إجمالي الوقت بالمنصة:
                    </span>
                    <p className="text-2xl font-black text-amber-300">
                      {formatTimeSpent(selectedStudentDetails.totalTimeSpentSeconds)}
                    </p>
                    <p className="text-[10px] text-slate-500">وقت الدراسة والمذاكرة المباشر</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[11px] font-semibold flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-rose-400" />
                      الأيام المتتالية (Streak):
                    </span>
                    <p className="text-2xl font-black text-rose-300">
                      {selectedStudentDetails.streakDays || 1} يوم
                    </p>
                    <p className="text-[10px] text-slate-500">متابعة يومية مستمرة بالمنصة</p>
                  </div>
                </div>

                {/* Additional Metadata */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">تاريخ إنشاء الحساب:</span>
                    <span className="font-mono">{selectedStudentDetails.createdAt ? new Date(selectedStudentDetails.createdAt).toLocaleString('ar-EG') : 'غير محدد'}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">آخر تواجد ونشاط:</span>
                    <span className="font-mono text-emerald-300">{selectedStudentDetails.lastActiveAt || selectedStudentDetails.lastLoginAt ? new Date(selectedStudentDetails.lastActiveAt || selectedStudentDetails.lastLoginAt!).toLocaleString('ar-EG') : 'نشط الآن'}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">معرّف الطالب (UID):</span>
                    <span className="font-mono text-[10px] text-slate-500 truncate max-w-[180px]">{selectedStudentDetails.uid}</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-2 text-left">
                <button
                  onClick={() => setSelectedStudentDetails(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs transition cursor-pointer"
                >
                  إغلاق النافذة
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

