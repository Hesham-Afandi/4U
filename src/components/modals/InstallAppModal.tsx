import React, { useState } from 'react';
import { Download, Monitor, Smartphone, Check, AppWindow } from 'lucide-react';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  installPrompt: any;
  handleInstallPWA: () => Promise<void>;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  installPrompt,
  handleInstallPWA,
}) => {
  const [activeTab, setActiveTab] = useState<'ios' | 'android' | 'pc'>(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return 'ios';
    if (/Android/.test(ua)) return 'android';
    return 'pc';
  });

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 text-right overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6 flex-row-reverse">
          <h3 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <span>📲</span> إضافة المنصة للشاشة الرئيسية
          </h3>
          <button 
            onClick={onClose} 
            className="text-3xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none leading-none"
          >
            ×
          </button>
        </div>

        {/* Short introduction */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-center">
          تصفح المنصة مباشرة بضغطة زر واحدة من شاشتك الرئيسية، كأي تطبيق أصلي سريع ومتكامل ودون الحاجة لفتح المتصفح في كل مرة!
        </p>

        {/* If PWA support is active and available */}
        {installPrompt && (
          <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl text-center">
            <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-2">⚡ التثبيت الفوري متوفر لجهازك الآن!</h4>
            <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80 mb-3">يمكنك تثبيت المنصة مباشرة بنقرة واحدة لتصبح أيقونة كاملة على هاتفك.</p>
            <button
              onClick={() => {
                handleInstallPWA();
                onClose();
              }}
              className="mx-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-2.5 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-xs cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>تثبيت التطبيق الآن بنقرة واحدة</span>
            </button>
          </div>
        )}

        {/* Tabs for different operating systems */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-slate-950 rounded-2xl mb-6">
          <button
            onClick={() => setActiveTab('ios')}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
              activeTab === 'ios'
                ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>آيفون / آيباد</span>
          </button>
          <button
            onClick={() => setActiveTab('android')}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
              activeTab === 'android'
                ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>أندرويد</span>
          </button>
          <button
            onClick={() => setActiveTab('pc')}
            className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
              activeTab === 'pc'
                ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>كمبيوتر / PC</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 space-y-4">
          {activeTab === 'ios' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">١</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">افتح الموقع في متصفح Safari</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">تأكد من فتح الرابط باستخدام متصفح سفاري الأصلي لجهازك.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٢</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">اضغط على زر المشاركة 📤</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">تجد زر المشاركة في الشريط السفلي للآيفون، أو في الزاوية العلوية بجانب شريط العنوان في الآيباد.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٣</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">اختر "إضافة إلى الشاشة الرئيسية" 📲</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">مرر القائمة لأسفل حتى تجد خيار <span className="font-semibold text-indigo-600 dark:text-indigo-400">"Add to Home Screen"</span> أو <span className="font-semibold text-indigo-600 dark:text-indigo-400">"إضافة إلى الشاشة الرئيسية"</span> بجانبه أيقونة مربع بداخله علامة (+).</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٤</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">اضغط "إضافة" (Add)</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">في الزاوية العلوية اليمنى، اضغط على زر إضافة لتظهر الأيقونة فوراً على شاشتك لتجربة تصفح غامرة!</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'android' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">١</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">افتح الموقع في Google Chrome</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">تأكد من فتح الرابط باستخدام متصفح كروم على هاتفك.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٢</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">اضغط على زر القائمة (┇) ثلاث نقاط</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">تجد زر القائمة في الزاوية العلوية اليمنى بجوار شريط البحث لكروم.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٣</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية"</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">اضغط على خيار <span className="font-semibold text-indigo-600 dark:text-indigo-400">"Install App"</span> أو <span className="font-semibold text-indigo-600 dark:text-indigo-400">"Add to Home Screen"</span> من القائمة المنسدلة.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٤</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">أكّد التثبيت الفوري 📲</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">انقر على "تثبيت" أو "إضافة" وسيتم إنشاء اختصار مباشر كالأيقونة على شاشة جوالك فوراً.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pc' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">١</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">ابحث عن أيقونة التثبيت في شريط العنوان 🖥️</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">في متصفح كروم أو إيدج على حاسوبك، انظر إلى نهاية شريط العنوان بالجهة اليمنى، ستجد أيقونة تشبه شاشة كومبيوتر مع سهم لأسفل أو علامة تثبيت (+).</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٢</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">انقر على زر التثبيت</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">أو يمكنك النقر على قائمة المتصفح (ثلاث نقاط ┇) ثم اختيار "حفظ ومشاركة" (Save and Share) ثم "تثبيت الصفحة كتطبيق" (Install Page as App).</p>
                </div>
              </div>

              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="bg-indigo-100 dark:bg-indigo-950/60 p-2 rounded-xl text-lg font-bold shrink-0 w-8 h-8 flex items-center justify-center text-indigo-600 dark:text-indigo-400">٣</div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-800 dark:text-white">استمتع بتجربة سطح المكتب الكاملة! ✨</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">سيفتح التطبيق كنافذة مستقلة وسريعة جداً بدون شريط متصفح وبإمكانك وضع أيقونته على سطح المكتب أو شريط المهام.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition duration-300 shadow-md cursor-pointer text-center"
        >
          فهمت ذلك، إغلاق
        </button>
      </div>
    </div>
  );
};
