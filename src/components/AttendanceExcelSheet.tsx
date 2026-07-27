import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileSpreadsheet, Download, Search, Calendar, Filter, Clock, 
  CheckCircle2, Plus, RefreshCw, Smartphone, Laptop, Sparkles, 
  UserCheck, ArrowDownUp, FileText, Printer, Check, Info, ShieldAlert, X
} from 'lucide-react';
import { 
  attendanceService, 
  AttendanceRecord, 
  ARABIC_MONTHS, 
  formatSecondsToArabic 
} from '../services/attendance/attendanceService';

interface AttendanceExcelSheetProps {
  studentName?: string;
  studentEmail?: string;
  gradeName?: string;
  onShowToast?: (msg: string) => void;
}

export const AttendanceExcelSheet: React.FC<AttendanceExcelSheetProps> = ({
  studentName = 'طالب المنصة',
  studentEmail = 'student@gmail.com',
  gradeName = 'تاسع عام',
  onShowToast
}) => {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number | 'ALL'>('ALL');
  const [selectedYear, setSelectedYear] = useState<number | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Manual Add Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [manualDate, setManualDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [manualLoginTime, setManualLoginTime] = useState('09:00 ص');
  const [manualLogoutTime, setManualLogoutTime] = useState('10:00 ص');
  const [manualDurationMins, setManualDurationMins] = useState(60);
  const [manualDevice, setManualDevice] = useState('Google Chrome / Windows');

  // Available Years extracted from records
  const availableYears = useMemo(() => {
    const yearsSet = new Set<number>();
    yearsSet.add(new Date().getFullYear());
    records.forEach(r => {
      if (r.year) yearsSet.add(r.year);
    });
    return Array.from(yearsSet).sort((a, b) => b - a);
  }, [records]);

  // Load and subscribe to attendance records
  useEffect(() => {
    // Make sure active session is running
    attendanceService.startOrResumeSession(studentName, studentEmail, gradeName);

    const loadData = () => {
      const data = attendanceService.getLogs(studentName, studentEmail);
      setRecords(data);
    };

    loadData();

    window.addEventListener('student_attendance_updated', loadData);
    return () => window.removeEventListener('student_attendance_updated', loadData);
  }, [studentName, studentEmail, gradeName]);

  // Filtered Records (Respects month, year, search, and sort order)
  const filteredRecords = useMemo(() => {
    return attendanceService.filterLogs(records, selectedMonth, selectedYear, searchQuery, sortOrder);
  }, [records, selectedMonth, selectedYear, searchQuery, sortOrder]);

  // Statistics Summary
  const statsSummary = useMemo(() => {
    const totalVisits = filteredRecords.length;
    const totalSeconds = filteredRecords.reduce((acc, curr) => acc + (curr.durationSeconds || 0), 0);
    const totalHoursDecimal = (totalSeconds / 3600).toFixed(1);
    const avgSeconds = totalVisits > 0 ? Math.round(totalSeconds / totalVisits) : 0;
    const hasActiveSession = filteredRecords.some(r => r.status === 'نشط الآن');

    return {
      totalVisits,
      totalSeconds,
      totalHoursDecimal,
      totalFormatted: formatSecondsToArabic(totalSeconds),
      avgFormatted: formatSecondsToArabic(avgSeconds),
      hasActiveSession
    };
  }, [filteredRecords]);

  // Handle Export to CSV
  const handleExport = () => {
    const filename = `سجل_حضور_${studentName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    attendanceService.exportToCSV(filteredRecords, filename);
    if (onShowToast) {
      onShowToast('📊 تم تصدير شيت سجل الحضور بنجاح بصيغة Excel / CSV!');
    }
  };

  // Handle Manual Record Add
  const handleAddManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualDate) return;

    attendanceService.addManualRecord({
      studentName,
      date: manualDate,
      loginTime: manualLoginTime,
      logoutTime: manualLogoutTime,
      durationMinutes: Number(manualDurationMins) || 45,
      deviceInfo: manualDevice,
      gradeName
    });

    setShowAddModal(false);
    if (onShowToast) {
      onShowToast('✨ تم إدراج سجل الحضور اليومي بنجاح إلى شيت الاكسيل!');
    }
  };

  return (
    <div className="space-y-4 font-sans text-right animate-fadeIn" dir="rtl">
      
      {/* EXCEL SHEET TOP RIBBON & HEADER */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-2xl p-4 text-white shadow-lg border border-emerald-600/40 relative overflow-hidden">
        {/* Subtle Excel Grid background graphic */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          
          {/* Header Title with Excel Badge */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner shrink-0">
              <FileSpreadsheet className="w-7 h-7 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white tracking-wide">
                  شيت سجل الحضور والغياب اليومي (Excel Attendance Log)
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-100 font-bold text-[11px] shadow-sm">
                  محدث تلقائياً ⚡
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 font-medium mt-0.5">
                تتبع شامل ومؤرشف لجميع جلسات ورود الطالب ومواعيد تسجيل الدخول ومدة البقاء مع ميزة الفلترة وتصدير Excel.
              </p>
            </div>
          </div>

          {/* Ribbon Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer active:scale-95"
              title="إضافة تسجيل دخول يدوي"
            >
              <Plus className="w-4 h-4 text-emerald-200" />
              <span>إضافة جلسة حضور</span>
            </button>

            <button
              onClick={handleExport}
              className="px-4 py-2 rounded-xl bg-emerald-400 text-emerald-950 hover:bg-emerald-300 font-extrabold text-xs transition flex items-center gap-2 shadow-md cursor-pointer active:scale-95"
              title="تصدير شيت اكسيل CSV"
            >
              <Download className="w-4 h-4" />
              <span>تصدير Excel / CSV</span>
            </button>
          </div>

        </div>

        {/* EXCEL SUMMARY METRICS BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-3 border-t border-emerald-500/40">
          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-500/30 p-2.5 rounded-xl text-right">
            <div className="text-[10px] text-emerald-200/80 font-bold">إجمالي مرات الدخول</div>
            <div className="text-base font-black text-white mt-0.5 flex items-center gap-1.5">
              <span>{statsSummary.totalVisits} جلسة</span>
              {statsSummary.hasActiveSession && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" title="جلسة حية نَشِطة" />
              )}
            </div>
          </div>

          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-500/30 p-2.5 rounded-xl text-right">
            <div className="text-[10px] text-emerald-200/80 font-bold">إجمالي مدة البقاء بالمنصة</div>
            <div className="text-base font-black text-amber-300 mt-0.5">
              {statsSummary.totalFormatted}
            </div>
          </div>

          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-500/30 p-2.5 rounded-xl text-right">
            <div className="text-[10px] text-emerald-200/80 font-bold">معدل البقاء للجلسة</div>
            <div className="text-base font-black text-white mt-0.5">
              {statsSummary.avgFormatted}
            </div>
          </div>

          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-500/30 p-2.5 rounded-xl text-right">
            <div className="text-[10px] text-emerald-200/80 font-bold">حالة الجلسة الحالية</div>
            <div className="text-xs font-black text-emerald-200 mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>تسجيل الدخول نشط</span>
            </div>
          </div>
        </div>

      </div>

      {/* EXCEL SHEET TOOLBAR & FILTERS (Month, Year, Search) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 shadow-sm space-y-3">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* FILTER CONTROLS GROUP */}
          <div className="flex flex-wrap items-center gap-2.5 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 shrink-0">
              <Filter className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>تصفية وفلترة الشيت:</span>
            </div>

            {/* MONTH FILTER DROPDOWN */}
            <div className="relative min-w-[140px]">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl py-2 px-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition cursor-pointer"
              >
                <option value="ALL">🗓️ كل الشهور ({ARABIC_MONTHS.length})</option>
                {ARABIC_MONTHS.map(m => (
                  <option key={m.value} value={m.value}>
                    شهر {m.value}: {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* YEAR FILTER DROPDOWN */}
            <div className="relative min-w-[120px]">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl py-2 px-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition cursor-pointer"
              >
                <option value="ALL">📅 كل السنين</option>
                {availableYears.map(yr => (
                  <option key={yr} value={yr}>
                    سنة {yr}
                  </option>
                ))}
              </select>
            </div>

            {/* RESET FILTERS BUTTON */}
            {(selectedMonth !== 'ALL' || selectedYear !== 'ALL' || searchQuery.trim() !== '') && (
              <button
                onClick={() => {
                  setSelectedMonth('ALL');
                  setSelectedYear('ALL');
                  setSearchQuery('');
                }}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                title="إعادة تعيين الفلاتر"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة ضبط</span>
              </button>
            )}
          </div>

          {/* SEARCH BOX */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="بحث بالتاريخ، اليوم، الوقت، الجهاز..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2 pr-9 pl-3 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* ACTIVE FILTER INFOBAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-slate-700 dark:text-slate-300">
              عرض {filteredRecords.length} سجل من إجمالي {records.length} سجل حضور محفوط
            </span>
            {selectedMonth !== 'ALL' && (
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">
                شهر: {ARABIC_MONTHS.find(m => m.value === selectedMonth)?.name}
              </span>
            )}
            {selectedYear !== 'ALL' && (
              <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-bold">
                سنة: {selectedYear}
              </span>
            )}
          </div>
          <button
            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
            className="text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 font-bold flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-200/80 dark:border-emerald-800/80 transition cursor-pointer active:scale-95 shadow-sm self-start sm:self-auto"
            title="اضغط لعكس ترتيب السجلات (من الأحدث إلى الأقدم أو العكس)"
          >
            <ArrowDownUp className={`w-3.5 h-3.5 transition-transform duration-200 ${sortOrder === 'asc' ? 'rotate-180 text-amber-500' : 'text-emerald-600 dark:text-emerald-400'}`} />
            <span>
              {sortOrder === 'desc' 
                ? 'مرتبة من الأحدث إلى الأقدم (أول صف هو أحدث تسجيل)' 
                : 'مرتبة من الأقدم إلى الأحدث (أول صف هو أقدم تسجيل)'}
            </span>
          </button>
        </div>

      </div>

      {/* EXCEL SPREADSHEET TABLE GRID */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
        
        {/* Table Top Formula / Excel Status Bar */}
        <div className="bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700/80 px-3 sm:px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-300 flex-wrap gap-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-extrabold text-[10px]">
              FX = ATTENDANCE_LOG()
            </span>
            <span className="text-[11px] font-sans font-bold text-slate-700 dark:text-slate-200 truncate max-w-[200px] sm:max-w-none">
              جدول سجلات الحضور اليومية للطالب: <strong className="text-emerald-600 dark:text-emerald-400">{studentName}</strong>
            </span>
          </div>
          <div className="text-[11px] font-sans font-semibold text-slate-500 dark:text-slate-400 hidden sm:block">
            شيت تفاعلي (Grid View)
          </div>
        </div>

        {/* SCROLLABLE TABLE CONTENT - TOUCH SMOOTH HORIZONTAL SCROLL ON MOBILE */}
        <div className="overflow-x-auto w-full touch-pan-x scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
          <table className="w-full min-w-[700px] sm:min-w-[780px] text-right border-collapse text-xs">
            
            {/* EXCEL COLUMN HEADERS */}
            <thead className="bg-slate-100 dark:bg-slate-800 sticky top-0 z-20 shadow-sm border-b-2 border-slate-300 dark:border-slate-700">
              <tr className="text-slate-700 dark:text-slate-200 font-black">
                <th className="p-2.5 text-center border-l border-slate-300 dark:border-slate-700 w-12 bg-slate-200/70 dark:bg-slate-800/90 font-mono">
                  #
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[100px]">
                  اليوم
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[120px]">
                  التاريخ (YYYY-MM-DD)
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[130px]">
                  وقت تسجيل الدخول
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[140px]">
                  وقت الخروج / آخر نشاط
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[140px]">
                  مدة البقاء في المنصة
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[120px]">
                  الشهر والسنة
                </th>
                <th className="p-2.5 border-l border-slate-300 dark:border-slate-700 min-w-[110px]">
                  الحالة
                </th>
                <th className="p-2.5 min-w-[180px]">
                  الجهاز والمتصفح
                </th>
              </tr>
            </thead>

            {/* EXCEL ROWS */}
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 font-medium text-slate-800 dark:text-slate-200">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-slate-400 space-y-2">
                    <Info className="w-8 h-8 text-slate-400 mx-auto opacity-60" />
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                      لا توجد سجلات حضور تطابق خيارات الفلترة أو البحث الحالية
                    </p>
                    <p className="text-xs text-slate-500">
                      جرب تغيير الشهر أو السنة أو اضغط على "إعادة ضبط" لعرض كافة السجلات.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredRecords.map((record, index) => {
                  const isLatest = index === 0;
                  const isActive = record.status === 'نشط الآن';
                  const isSelected = selectedRowId === record.id;

                  return (
                    <tr
                      key={record.id}
                      onClick={() => setSelectedRowId(record.id)}
                      className={`transition-colors cursor-pointer border-b border-slate-200 dark:border-slate-800/60 ${
                        isActive 
                          ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-950 dark:text-emerald-100 font-bold' 
                          : isSelected
                            ? 'bg-indigo-50 dark:bg-indigo-950/40'
                            : index % 2 === 0
                              ? 'bg-white dark:bg-slate-900 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                              : 'bg-slate-50/60 dark:bg-slate-800/30 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {/* Row Index # */}
                      <td className={`p-2.5 text-center font-mono border-l border-slate-200 dark:border-slate-800 ${
                        isLatest ? 'font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' : 'text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-800/40'
                      }`}>
                        {index + 1}
                      </td>

                      {/* Day Name */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800 font-bold">
                        <div className="flex items-center gap-1.5">
                          <span>{record.dayName}</span>
                          {isLatest && (
                            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-black text-[10px]">
                              أحدث تسجيل
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Date */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800 font-mono font-bold text-slate-700 dark:text-slate-300">
                        {record.date}
                      </td>

                      {/* Login Time */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800 font-mono font-bold text-emerald-700 dark:text-emerald-300">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{record.loginTime}</span>
                        </div>
                      </td>

                      {/* Logout Time */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800 font-mono">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            نشط الآن
                          </span>
                        ) : (
                          <span className="text-slate-600 dark:text-slate-300">{record.logoutTime || '-'}</span>
                        )}
                      </td>

                      {/* Duration Spent */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800 font-bold">
                        <span className={`inline-block px-2 py-0.5 rounded-lg ${
                          record.durationSeconds >= 3600
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                            : record.durationSeconds >= 1800
                              ? 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}>
                          ⏳ {record.durationFormatted}
                        </span>
                      </td>

                      {/* Month & Year */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800 font-semibold text-slate-600 dark:text-slate-400">
                        {record.monthName} {record.year}
                      </td>

                      {/* Status Badge */}
                      <td className="p-2.5 border-l border-slate-200 dark:border-slate-800">
                        {isActive ? (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white font-extrabold text-[10px] shadow-sm">
                            نشط الان
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px]">
                            مكتملة
                          </span>
                        )}
                      </td>

                      {/* Device Info */}
                      <td className="p-2.5 text-slate-600 dark:text-slate-400 text-[11px]">
                        <div className="flex items-center gap-1.5">
                          {record.deviceInfo.includes('Mobile') || record.deviceInfo.includes('iPhone') || record.deviceInfo.includes('iPad') ? (
                            <Smartphone className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          ) : (
                            <Laptop className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                          <span className="truncate max-w-[160px]">{record.deviceInfo}</span>
                        </div>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* EXCEL BOTTOM STATUS BAR */}
        <div className="bg-slate-100 dark:bg-slate-800/90 border-t border-slate-200 dark:border-slate-700 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] text-slate-600 dark:text-slate-300 font-medium gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              جاهز
            </span>
            <span>السجلات المعروضة: <strong className="font-bold text-slate-800 dark:text-white">{filteredRecords.length}</strong></span>
            <span>إجمالي الوقت المعروض: <strong className="font-bold text-amber-600 dark:text-amber-400">{statsSummary.totalFormatted}</strong></span>
          </div>

          <div className="text-[10px] text-slate-500 dark:text-slate-400">
            💡 يتم التحديث والحفظ التلقائي في السجل الدائم دون حذف السجلات القديمة.
          </div>
        </div>

      </div>

      {/* MANUAL RECORD ADD MODAL */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl text-right space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-black text-base text-slate-900 dark:text-white">
                    إضافة جلسة حضور سابقة (يدوياً)
                  </h4>
                </div>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddManualSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    تاريخ الدخول:
                  </label>
                  <input
                    type="date"
                    required
                    value={manualDate}
                    onChange={(e) => setManualDate(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 px-3 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      وقت تسجيل الدخول:
                    </label>
                    <input
                      type="text"
                      required
                      value={manualLoginTime}
                      onChange={(e) => setManualLoginTime(e.target.value)}
                      placeholder="مثال: 08:30 ص"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 px-3 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      وقت تسجيل الخروج:
                    </label>
                    <input
                      type="text"
                      required
                      value={manualLogoutTime}
                      onChange={(e) => setManualLogoutTime(e.target.value)}
                      placeholder="مثال: 09:30 ص"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 px-3 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    مدة البقاء بالمنصة (بالدقائق):
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={600}
                    required
                    value={manualDurationMins}
                    onChange={(e) => setManualDurationMins(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 px-3 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    الجهاز والمتصفح:
                  </label>
                  <input
                    type="text"
                    value={manualDevice}
                    onChange={(e) => setManualDevice(e.target.value)}
                    placeholder="مثال: Google Chrome / Windows"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-2.5 px-3 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition"
                  >
                    إضافة إلى الشيت
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
