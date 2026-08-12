import React, { useState } from 'react';
import { PptDocState, PptSlide, Language } from '../types';
import { 
  Play, 
  Plus, 
  Trash2, 
  Copy, 
  Layout, 
  Palette, 
  Type, 
  PieChart, 
  Table as TableIcon, 
  Zap, 
  PlaySquare, 
  Monitor, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  CheckCircle, 
  CheckCircle2, 
  Info, 
  Maximize2, 
  Layers, 
  FileText,
  MousePointer,
  HelpCircle,
  Award
} from 'lucide-react';

interface PowerPointSimulatorProps {
  language: Language;
  completedTaskIds: string[];
  setCompletedTaskIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const INITIAL_PPT_STATE: PptDocState = {
  aspectRatio: '16:9',
  theme: 'office_dark',
  bgColor: '#0F172A',
  footerText: 'Practical Exam 2026',
  showSlideNumbers: true,
  autoTimingSeconds: 8,
  hasBackgroundAudio: false,
  slides: [
    {
      id: 's1',
      slideNumber: 1,
      layout: 'title',
      title: 'Strategic Digital Transformation 2026',
      subtitle: 'Modernizing Higher Education with Artificial Intelligence',
      bulletPoints: [],
      notes: 'Introduce digital transformation goals to evaluation board.',
      transition: 'fade',
      animation: 'fade',
      hasImage: true,
    },
    {
      id: 's2',
      slideNumber: 2,
      layout: 'content',
      title: 'Executive Summary & Core Objectives',
      subtitle: 'Key Strategic Priorities for Academic Year 2026',
      bulletPoints: [
        'Modernizing IT Infrastructure across campus departments.',
        'Integrating Interactive Learning Management Systems (LMS).',
        'Enhancing Cybersecurity Awareness & Data Privacy.',
        'Empowering Faculty through continuous digital training.'
      ],
      notes: 'Highlight 90% reduction in paper administrative transactions.',
      transition: 'push',
      animation: 'fly_in',
      hasActionButton: true,
    },
    {
      id: 's3',
      slideNumber: 3,
      layout: 'content',
      title: 'Implementation Roadmap (4-Phase SmartArt)',
      subtitle: 'Structured Strategic Execution Steps',
      bulletPoints: [],
      hasSmartArt: true,
      smartArtNodes: [
        'Phase 1: Needs Assessment',
        'Phase 2: Cloud Migration',
        'Phase 3: AI Tool Integration',
        'Phase 4: Full Deployment'
      ],
      transition: 'morph',
      animation: 'zoom',
      hasActionButton: true,
    },
    {
      id: 's4',
      slideNumber: 4,
      layout: 'content',
      title: 'Annual Technology Investment Breakdown',
      subtitle: 'Financial Allocation Across IT Pillars',
      bulletPoints: [],
      hasTable: true,
      tableData: [
        ['Pillar Domain', 'Budget ($)', 'Share (%)'],
        ['Infrastructure Upgrade', '$450,000', '35%'],
        ['AI Software Licenses', '$300,000', '23%'],
        ['Faculty & Staff Training', '$200,000', '15%'],
        ['Cybersecurity Systems', '$350,000', '27%']
      ],
      transition: 'push',
      animation: 'fade',
      hasActionButton: true,
    },
    {
      id: 's5',
      slideNumber: 5,
      layout: 'content',
      title: 'Key Performance Indicators & Growth',
      subtitle: 'Measured Results & Institutional Impact',
      bulletPoints: [],
      hasChart: true,
      transition: 'push',
      animation: 'spin',
      hasActionButton: true,
    }
  ]
};

export const PowerPointSimulator: React.FC<PowerPointSimulatorProps> = ({
  language,
  completedTaskIds,
  setCompletedTaskIds,
}) => {
  const [doc, setDoc] = useState<PptDocState>(INITIAL_PPT_STATE);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [activeRibbonTab, setActiveRibbonTab] = useState<'home' | 'insert' | 'design' | 'transitions' | 'animations' | 'slideshow'>('home');
  const [isFullscreenShow, setIsFullscreenShow] = useState<boolean>(false);
  const [showNotesDrawer, setShowNotesDrawer] = useState<boolean>(false);
  const [autoGradedMessage, setAutoGradedMessage] = useState<string | null>(null);

  const currentSlide = doc.slides[activeSlideIndex] || doc.slides[0];

  // Helper to mark tasks as completed
  const markTaskCompleted = (taskId: string, message: string) => {
    if (!completedTaskIds.includes(taskId)) {
      setCompletedTaskIds(prev => [...prev, taskId]);
    }
    setAutoGradedMessage(message);
    setTimeout(() => setAutoGradedMessage(null), 3500);
  };

  // Check PowerPoint auto-grading requirements
  const runAutoGraderCheck = () => {
    let newlyCompleted = 0;

    // Task ppt_t1_1: 16:9 aspect ratio
    if (doc.aspectRatio === '16:9') {
      markTaskCompleted('ppt_t1_1', '✓ Task 1.1 Passed: 16:9 Widescreen aspect ratio applied!');
      newlyCompleted++;
    }

    // Task ppt_t1_2: Theme applied
    if (doc.theme !== 'light_classic') {
      markTaskCompleted('ppt_t1_2', '✓ Task 1.2 Passed: Built-in dark/modern theme active!');
      newlyCompleted++;
    }

    // Task ppt_t1_3: Footer & Slide Numbers
    if (doc.showSlideNumbers && doc.footerText) {
      markTaskCompleted('ppt_t1_3', '✓ Task 1.3 Passed: Slide Master Footer & Slide Numbers enabled!');
      newlyCompleted++;
    }

    // Task ppt_t3_1: SmartArt diagram
    const hasSmartArtSlide = doc.slides.some(s => s.hasSmartArt);
    if (hasSmartArtSlide) {
      markTaskCompleted('ppt_t3_1', '✓ Task 3.1 Passed: SmartArt Process Diagram created!');
      newlyCompleted++;
    }

    // Task ppt_t3_2: Data Table
    const hasTableSlide = doc.slides.some(s => s.hasTable);
    if (hasTableSlide) {
      markTaskCompleted('ppt_t3_2', '✓ Task 3.2 Passed: Financial Data Table inserted!');
      newlyCompleted++;
    }

    // Task ppt_t3_3: Data Chart
    const hasChartSlide = doc.slides.some(s => s.hasChart);
    if (hasChartSlide) {
      markTaskCompleted('ppt_t3_3', '✓ Task 3.3 Passed: Column Data Chart embedded!');
      newlyCompleted++;
    }

    // Task ppt_t5_1: Morph transition
    const hasMorph = doc.slides.some(s => s.transition === 'morph');
    if (hasMorph) {
      markTaskCompleted('ppt_t5_1', '✓ Task 5.1 Passed: Morph transition active on slide!');
      newlyCompleted++;
    }

    // Task ppt_t6_1: Action Button
    const hasActionButton = doc.slides.some(s => s.hasActionButton);
    if (hasActionButton) {
      markTaskCompleted('ppt_t6_1', '✓ Task 6.1 Passed: Home Action Navigation Buttons inserted!');
      newlyCompleted++;
    }

    if (newlyCompleted === 0) {
      setAutoGradedMessage('All current configurations verified!');
      setTimeout(() => setAutoGradedMessage(null), 3000);
    }
  };

  // Add Slide
  const handleAddSlide = () => {
    const newSlide: PptSlide = {
      id: `s_${Date.now()}`,
      slideNumber: doc.slides.length + 1,
      layout: 'content',
      title: `New Slide ${doc.slides.length + 1}`,
      subtitle: 'Click to add subtitle or topic text',
      bulletPoints: ['First key point', 'Second key point', 'Third key point'],
      transition: 'push',
      animation: 'fade',
      hasActionButton: true,
    };
    setDoc(prev => ({ ...prev, slides: [...prev.slides, newSlide] }));
    setActiveSlideIndex(doc.slides.length);
  };

  // Delete Slide
  const handleDeleteSlide = (index: number) => {
    if (doc.slides.length <= 1) return;
    const updated = doc.slides.filter((_, i) => i !== index).map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setDoc(prev => ({ ...prev, slides: updated }));
    if (activeSlideIndex >= updated.length) {
      setActiveSlideIndex(updated.length - 1);
    }
  };

  // Update Current Slide
  const updateCurrentSlide = (fields: Partial<PptSlide>) => {
    setDoc(prev => {
      const updatedSlides = [...prev.slides];
      updatedSlides[activeSlideIndex] = {
        ...updatedSlides[activeSlideIndex],
        ...fields,
      };
      return { ...prev, slides: updatedSlides };
    });
  };

  // Theme styling helpers
  const getThemeBackgroundClass = () => {
    switch (doc.theme) {
      case 'office_dark': return 'bg-slate-950 text-white border-slate-800';
      case 'azure_modern': return 'bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white border-blue-900';
      case 'emerald_exec': return 'bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white border-emerald-900';
      case 'sunset_gold': return 'bg-gradient-to-br from-slate-900 via-amber-950 to-orange-950 text-white border-amber-900';
      case 'light_classic': return 'bg-white text-slate-900 border-slate-200';
      default: return 'bg-slate-950 text-white border-slate-800';
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Top Window Bar */}
      <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="font-bold text-orange-400 ml-2 flex items-center gap-1.5">
            <PlaySquare className="w-4 h-4 text-orange-500" />
            <span>Microsoft PowerPoint Practical Assessment Simulator 2026</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={runAutoGraderCheck}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-lg font-bold transition shadow"
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'التحقق التلقائي والتقييم' : 'Auto-Grade Tasks'}</span>
          </button>

          <button
            onClick={() => setIsFullscreenShow(true)}
            className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white px-3 py-1 rounded-lg font-bold transition shadow"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'بدء العرض التقديمي (F5)' : 'Start Slideshow (F5)'}</span>
          </button>
        </div>
      </div>

      {/* Auto Grade Banner Notification */}
      {autoGradedMessage && (
        <div className="bg-emerald-500 text-white px-4 py-2 text-xs font-bold flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>{autoGradedMessage}</span>
          </div>
          <button onClick={() => setAutoGradedMessage(null)}><X className="w-4 h-4" /></button>
        </div>
      )}

      {/* Ribbon Tabs */}
      <div className="bg-slate-800 border-b border-slate-700 px-4 pt-2 flex items-center gap-1 text-xs overflow-x-auto">
        <button
          onClick={() => setActiveRibbonTab('home')}
          className={`px-3 py-1.5 font-bold rounded-t-lg transition ${
            activeRibbonTab === 'home' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {language === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
        </button>
        <button
          onClick={() => setActiveRibbonTab('insert')}
          className={`px-3 py-1.5 font-bold rounded-t-lg transition ${
            activeRibbonTab === 'insert' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {language === 'ar' ? 'إدراج' : 'Insert'}
        </button>
        <button
          onClick={() => setActiveRibbonTab('design')}
          className={`px-3 py-1.5 font-bold rounded-t-lg transition ${
            activeRibbonTab === 'design' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {language === 'ar' ? 'تصميم النسق' : 'Design'}
        </button>
        <button
          onClick={() => setActiveRibbonTab('transitions')}
          className={`px-3 py-1.5 font-bold rounded-t-lg transition ${
            activeRibbonTab === 'transitions' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {language === 'ar' ? 'الانتقالات' : 'Transitions'}
        </button>
        <button
          onClick={() => setActiveRibbonTab('animations')}
          className={`px-3 py-1.5 font-bold rounded-t-lg transition ${
            activeRibbonTab === 'animations' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {language === 'ar' ? 'الحركات' : 'Animations'}
        </button>
        <button
          onClick={() => setActiveRibbonTab('slideshow')}
          className={`px-3 py-1.5 font-bold rounded-t-lg transition ${
            activeRibbonTab === 'slideshow' ? 'bg-orange-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {language === 'ar' ? 'عرض الشرائح' : 'Slide Show'}
        </button>
      </div>

      {/* Ribbon Controls Sub-Bar */}
      <div className="bg-slate-800/90 p-3 border-b border-slate-700 flex flex-wrap items-center gap-3 text-xs">
        {activeRibbonTab === 'home' && (
          <>
            <button
              onClick={handleAddSlide}
              className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-lg font-bold transition"
            >
              <Plus className="w-4 h-4" />
              <span>{language === 'ar' ? 'شريحة جديدة' : 'New Slide'}</span>
            </button>

            <div className="h-6 w-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <span className="text-slate-400">{language === 'ar' ? 'تخطيط الشريحة:' : 'Layout:'}</span>
              <select
                value={currentSlide.layout}
                onChange={(e) => updateCurrentSlide({ layout: e.target.value as any })}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
              >
                <option value="title">{language === 'ar' ? 'شريحة عنوان' : 'Title Slide'}</option>
                <option value="content">{language === 'ar' ? 'عنوان ومحتوى' : 'Title and Content'}</option>
                <option value="two_column">{language === 'ar' ? 'عمودين' : 'Two Content'}</option>
              </select>
            </div>
          </>
        )}

        {activeRibbonTab === 'insert' && (
          <>
            <button
              onClick={() => updateCurrentSlide({ hasSmartArt: true, smartArtNodes: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'] })}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold transition"
            >
              <Layers className="w-4 h-4" />
              <span>{language === 'ar' ? 'إدراج مخطط SmartArt' : 'Insert SmartArt'}</span>
            </button>

            <button
              onClick={() => updateCurrentSlide({ 
                hasTable: true, 
                tableData: [
                  ['Item', 'Budget ($)', 'Share (%)'],
                  ['Hardware', '$450,000', '35%'],
                  ['Software', '$300,000', '23%']
                ] 
              })}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold transition"
            >
              <TableIcon className="w-4 h-4" />
              <span>{language === 'ar' ? 'إدراج جدول بيانات' : 'Insert Table'}</span>
            </button>

            <button
              onClick={() => updateCurrentSlide({ hasChart: true })}
              className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-lg font-bold transition"
            >
              <PieChart className="w-4 h-4" />
              <span>{language === 'ar' ? 'إدراج رسم بياني' : 'Insert Chart'}</span>
            </button>

            <button
              onClick={() => updateCurrentSlide({ hasActionButton: true })}
              className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white px-3 py-1.5 rounded-lg font-bold transition"
            >
              <MousePointer className="w-4 h-4" />
              <span>{language === 'ar' ? 'إدراج زر تنقل رئيسي' : 'Insert Action Button'}</span>
            </button>
          </>
        )}

        {activeRibbonTab === 'design' && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">{language === 'ar' ? 'نسق العرض:' : 'Theme:'}</span>
              <select
                value={doc.theme}
                onChange={(e) => setDoc(prev => ({ ...prev, theme: e.target.value as any }))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
              >
                <option value="office_dark">Office Dark Night (#0F172A)</option>
                <option value="azure_modern">Azure Modern Tech (#1E3A8A)</option>
                <option value="emerald_exec">Emerald Executive (#064E3B)</option>
                <option value="sunset_gold">Sunset Gold Amber (#78350F)</option>
                <option value="light_classic">Classic White Light (#FFFFFF)</option>
              </select>
            </div>

            <div className="h-6 w-px bg-slate-700" />

            <div className="flex items-center gap-2">
              <span className="text-slate-400">{language === 'ar' ? 'أبعاد الشريحة:' : 'Slide Size:'}</span>
              <button
                onClick={() => setDoc(prev => ({ ...prev, aspectRatio: prev.aspectRatio === '16:9' ? '4:3' : '16:9' }))}
                className="bg-slate-700 hover:bg-slate-600 text-white px-2.5 py-1 rounded font-mono font-bold"
              >
                {doc.aspectRatio}
              </button>
            </div>
          </>
        )}

        {activeRibbonTab === 'transitions' && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">{language === 'ar' ? 'انتقال الشريحة:' : 'Transition:'}</span>
              <select
                value={currentSlide.transition}
                onChange={(e) => updateCurrentSlide({ transition: e.target.value as any })}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
              >
                <option value="none">None</option>
                <option value="morph">Morph Effect (تداخل تحويلي)</option>
                <option value="push">Push (دفع من اليمين)</option>
                <option value="wipe">Wipe (مسح تدريجي)</option>
                <option value="fade">Fade (تلاشي خافت)</option>
                <option value="dissolve">Dissolve (تفكك نقطي)</option>
              </select>
            </div>

            <button
              onClick={() => {
                const trans = currentSlide.transition;
                setDoc(prev => ({
                  ...prev,
                  slides: prev.slides.map(s => ({ ...s, transition: trans }))
                }));
                markTaskCompleted('ppt_t5_2', '✓ Applied transition to all slides!');
              }}
              className="bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1 rounded font-semibold"
            >
              {language === 'ar' ? 'تطبيق على الكل' : 'Apply to All'}
            </button>
          </>
        )}

        {activeRibbonTab === 'animations' && (
          <>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">{language === 'ar' ? 'حركة العناصر:' : 'Animation:'}</span>
              <select
                value={currentSlide.animation}
                onChange={(e) => updateCurrentSlide({ animation: e.target.value as any })}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
              >
                <option value="none">None</option>
                <option value="fade">Fade Entrance (ظهور خافت)</option>
                <option value="fly_in">Fly In (تحليق للأعلى)</option>
                <option value="zoom">Zoom (تكبير مركز)</option>
                <option value="spin">Spin Emphasis (دوران تأكيدي)</option>
                <option value="bounce">Bounce (ارتداد حركي)</option>
              </select>
            </div>
          </>
        )}

        {activeRibbonTab === 'slideshow' && (
          <>
            <button
              onClick={() => setIsFullscreenShow(true)}
              className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-lg font-bold transition"
            >
              <Play className="w-4 h-4" />
              <span>{language === 'ar' ? 'العرض من البداية' : 'From Beginning'}</span>
            </button>

            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-slate-400">{language === 'ar' ? 'ملاحظات المحاضر:' : 'Notes Pane:'}</span>
              <button
                onClick={() => setShowNotesDrawer(!showNotesDrawer)}
                className={`px-2.5 py-1 rounded font-semibold ${showNotesDrawer ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}`}
              >
                {showNotesDrawer ? (language === 'ar' ? 'إخفاء الملاحظات' : 'Hide Notes') : (language === 'ar' ? 'إظهار الملاحظات' : 'Show Notes')}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Main Studio Area: Left Sidebar (Thumbnails) + Center Canvas + Right Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        
        {/* Left Thumbnails Pane (2 cols) */}
        <div className="lg:col-span-2 bg-slate-950 p-3 border-r border-slate-800 overflow-y-auto max-h-[580px] space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>{language === 'ar' ? 'الشرائح' : 'Slides'} ({doc.slides.length})</span>
            <button
              onClick={handleAddSlide}
              className="p-1 hover:bg-slate-800 rounded text-orange-400 transition"
              title="Add Slide"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {doc.slides.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => setActiveSlideIndex(idx)}
              className={`p-2.5 rounded-xl border cursor-pointer transition-all relative group ${
                idx === activeSlideIndex 
                  ? 'bg-orange-950/40 border-orange-500 shadow-md' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                <span>#{slide.slideNumber}</span>
                {slide.transition !== 'none' && (
                  <span className="bg-orange-500/20 text-orange-400 text-[10px] px-1.5 py-0.2 rounded">
                    {slide.transition}
                  </span>
                )}
              </div>

              <div className="text-xs font-bold text-slate-200 line-clamp-1">
                {slide.title || `Slide ${slide.slideNumber}`}
              </div>

              <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                {slide.subtitle || `${slide.bulletPoints.length} points`}
              </div>

              {/* Action Delete */}
              {doc.slides.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSlide(idx);
                  }}
                  className="absolute top-2 right-2 p-1 text-rose-400 opacity-0 group-hover:opacity-100 hover:bg-rose-950/50 rounded transition"
                  title="Delete Slide"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Center Presentation Stage Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 p-6 flex flex-col items-center justify-center overflow-auto border-r border-slate-800 relative">
          
          {/* Canvas Wrapper Box */}
          <div 
            className={`w-full max-w-2xl rounded-2xl p-8 border shadow-2xl transition-all duration-300 relative flex flex-col justify-between min-h-[360px] ${getThemeBackgroundClass()}`}
            style={{
              aspectRatio: doc.aspectRatio === '16:9' ? '16/9' : '4/3',
            }}
          >
            {/* Top Slide Title Header */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-2">
                    {currentSlide.title || 'Click to Add Title'}
                  </h2>
                  {currentSlide.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                {currentSlide.hasImage && (
                  <div className="w-16 h-16 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400 shrink-0 shadow">
                    <PlaySquare className="w-8 h-8" />
                  </div>
                )}
              </div>

              {/* Bullet Points */}
              {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-200">
                  {currentSlide.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* SmartArt Process Diagram Display */}
              {currentSlide.hasSmartArt && currentSlide.smartArtNodes && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {currentSlide.smartArtNodes.map((node, i) => (
                    <div key={i} className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-2.5 rounded-xl text-center text-xs font-bold shadow-lg border border-blue-400/30">
                      <div className="text-[10px] text-blue-200 font-mono mb-0.5">0{i+1}</div>
                      <div>{node}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Table Display */}
              {currentSlide.hasTable && currentSlide.tableData && (
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/60 p-2">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="bg-orange-600 text-white font-bold">
                        {currentSlide.tableData[0]?.map((th, i) => (
                          <th key={i} className="p-2">{th}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentSlide.tableData.slice(1).map((row, r) => (
                        <tr key={r} className="border-t border-slate-800 text-slate-200">
                          {row.map((cell, c) => (
                            <td key={c} className="p-2 font-mono">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Chart Display */}
              {currentSlide.hasChart && (
                <div className="mt-6 bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
                  <div className="text-xs font-bold text-emerald-400 mb-2">Key Performance Growth (+85% Portal Usage)</div>
                  <div className="flex items-end justify-center gap-4 h-28 border-b border-slate-700 pb-2">
                    <div className="w-10 bg-emerald-500 h-[40%] rounded-t-md text-[10px] text-white pt-1">Q1</div>
                    <div className="w-10 bg-emerald-500 h-[65%] rounded-t-md text-[10px] text-white pt-1">Q2</div>
                    <div className="w-10 bg-emerald-500 h-[85%] rounded-t-md text-[10px] text-white pt-1">Q3</div>
                    <div className="w-10 bg-emerald-400 h-[100%] rounded-t-md text-[10px] text-slate-950 font-bold pt-1">Q4</div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Slide Footer Bar */}
            <div className="border-t border-slate-800/80 pt-3 mt-6 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>{doc.footerText}</span>
              
              {currentSlide.hasActionButton && (
                <button
                  onClick={() => setActiveSlideIndex(0)}
                  className="flex items-center gap-1 bg-orange-600/80 hover:bg-orange-500 text-white px-2 py-0.5 rounded text-[10px] font-bold"
                  title="Action Button: Return to Slide 1"
                >
                  <MousePointer className="w-3 h-3" />
                  <span>[Home Slide 1]</span>
                </button>
              )}

              {doc.showSlideNumbers && (
                <span>Slide {currentSlide.slideNumber} of {doc.slides.length}</span>
              )}
            </div>

          </div>

          {/* Notes Drawer */}
          {showNotesDrawer && (
            <div className="w-full max-w-2xl mt-4 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
              <span className="font-bold text-orange-400 block mb-1">
                {language === 'ar' ? 'ملاحظات المحاضر (Speaker Notes):' : 'Speaker Notes:'}
              </span>
              <textarea
                value={currentSlide.notes || ''}
                onChange={(e) => updateCurrentSlide({ notes: e.target.value })}
                placeholder="Enter speaker presentation notes here..."
                className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-500 h-16"
              />
            </div>
          )}

        </div>

        {/* Right Inspector & Slide Properties Panel (3 cols) */}
        <div className="lg:col-span-3 bg-slate-950 p-4 border-l border-slate-800 text-xs space-y-4">
          <div className="font-bold text-slate-200 border-b border-slate-800 pb-2 flex items-center justify-between">
            <span>{language === 'ar' ? 'خصائص الشريحة الحالية' : 'Slide Properties'}</span>
            <span className="text-orange-400 font-mono">#{currentSlide.slideNumber}</span>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-semibold">{language === 'ar' ? 'عنوان الشريحة:' : 'Slide Title:'}</label>
            <input
              type="text"
              value={currentSlide.title}
              onChange={(e) => updateCurrentSlide({ title: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-semibold">{language === 'ar' ? 'العنوان الفرعي:' : 'Slide Subtitle:'}</label>
            <input
              type="text"
              value={currentSlide.subtitle || ''}
              onChange={(e) => updateCurrentSlide({ subtitle: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Quick Insert Elements */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-2">
            <span className="font-bold text-slate-300 block mb-1">{language === 'ar' ? 'عناصر الشريحة:' : 'Slide Components:'}</span>
            
            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={currentSlide.hasSmartArt || false}
                onChange={(e) => updateCurrentSlide({ 
                  hasSmartArt: e.target.checked,
                  smartArtNodes: e.target.checked ? ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'] : undefined
                })}
                className="rounded border-slate-700 text-orange-600 focus:ring-orange-500"
              />
              <span>SmartArt Diagram</span>
            </label>

            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={currentSlide.hasTable || false}
                onChange={(e) => updateCurrentSlide({ 
                  hasTable: e.target.checked,
                  tableData: e.target.checked ? [
                    ['Pillar Domain', 'Budget ($)', 'Share (%)'],
                    ['Infrastructure', '$450,000', '35%'],
                    ['Software AI', '$300,000', '23%']
                  ] : undefined
                })}
                className="rounded border-slate-700 text-orange-600 focus:ring-orange-500"
              />
              <span>Data Table</span>
            </label>

            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={currentSlide.hasChart || false}
                onChange={(e) => updateCurrentSlide({ hasChart: e.target.checked })}
                className="rounded border-slate-700 text-orange-600 focus:ring-orange-500"
              />
              <span>Data Chart</span>
            </label>

            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={currentSlide.hasActionButton || false}
                onChange={(e) => updateCurrentSlide({ hasActionButton: e.target.checked })}
                className="rounded border-slate-700 text-orange-600 focus:ring-orange-500"
              />
              <span>Action Home Button</span>
            </label>
          </div>

          <button
            onClick={runAutoGraderCheck}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white py-2.5 rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'ar' ? 'فحص وانجاز المهام' : 'Check Task Status'}</span>
          </button>
        </div>

      </div>

      {/* Fullscreen Presentation Slideshow Modal */}
      {isFullscreenShow && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-between p-6 animate-fadeIn">
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2 text-orange-400 font-bold">
              <Play className="w-4 h-4" />
              <span>Full Screen Slide Show Mode</span>
            </span>
            <span>Slide {activeSlideIndex + 1} of {doc.slides.length}</span>
            <button
              onClick={() => setIsFullscreenShow(false)}
              className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded-lg font-bold transition flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              <span>Exit (ESC)</span>
            </button>
          </div>

          {/* Slide Content Display */}
          <div 
            className={`w-full max-w-4xl p-12 rounded-3xl border shadow-2xl flex flex-col justify-between my-auto transition-all ${getThemeBackgroundClass()}`}
            style={{ aspectRatio: doc.aspectRatio === '16:9' ? '16/9' : '4/3' }}
          >
            <div>
              <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
                {currentSlide.title}
              </h1>
              {currentSlide.subtitle && (
                <p className="text-base sm:text-xl text-slate-300 font-medium mb-6">
                  {currentSlide.subtitle}
                </p>
              )}

              {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
                <ul className="space-y-3 text-base sm:text-lg text-slate-100">
                  {currentSlide.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{doc.footerText}</span>
              <span>Slide {currentSlide.slideNumber}</span>
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 px-6 py-2.5 rounded-full shadow-2xl">
            <button
              disabled={activeSlideIndex === 0}
              onClick={() => setActiveSlideIndex(prev => Math.max(0, prev - 1))}
              className="p-2 hover:bg-slate-800 rounded-full disabled:opacity-30 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <span className="text-sm font-bold font-mono">
              {activeSlideIndex + 1} / {doc.slides.length}
            </span>

            <button
              disabled={activeSlideIndex === doc.slides.length - 1}
              onClick={() => setActiveSlideIndex(prev => Math.min(doc.slides.length - 1, prev + 1))}
              className="p-2 hover:bg-slate-800 rounded-full disabled:opacity-30 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
