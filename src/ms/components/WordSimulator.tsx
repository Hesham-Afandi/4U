import React, { useState } from 'react';
import { WordDocState, MailMergeRecord } from '../types';
import { MAIL_MERGE_DATASET, ASSET_IMAGES } from '../data/examData';
import { 
  FileText, 
  Bold, 
  Italic, 
  Underline, 
  AlignRight, 
  AlignCenter, 
  AlignLeft, 
  AlignJustify, 
  List, 
  ListOrdered, 
  Table as TableIcon, 
  Image as ImageIcon, 
  Layers, 
  Columns, 
  Eye, 
  Check, 
  Sparkles,
  BookOpen,
  Send,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Heading1,
  Heading2
} from 'lucide-react';

interface WordSimulatorProps {
  completedTaskIds: string[];
  onAutoCheckTask: (autoCheckId: string) => void;
  highlightedCheckId?: string;
}

const defaultDocState: WordDocState = {
  title: 'Annual Institutional Development & Digital Transformation Report 2026',
  coverPageEnabled: false,
  coverTitle: 'Annual Institutional Development Report',
  coverSubtitle: 'Department of Computer Science & Information Technology',
  coverAuthor: 'Student / Trainee',
  orientation: 'portrait',
  margins: 'normal',
  fontFamily: 'Arial',
  fontSize: 14,
  lineSpacing: 1.5,
  alignment: 'left',
  watermarkText: '',
  pageBorder: false,
  pageBorderColor: '#1E40AF',
  columns: 1,
  hasTable: false,
  tableRows: 5,
  tableCols: 5,
  tableData: [
    ['Project Budget and Financial Expenditure Summary Table (Merged Top)', '', '', '', ''],
    ['Project Name', 'Department', 'Budget', 'Expenditure', 'Completion %'],
    ['Cloud Infrastructure', 'Information Technology', '$150,000', '$142,000', '95%'],
    ['Staff Professional Training', 'Human Resources', '$85,000', '$80,000', '94%'],
    ['Administrative Automation', 'Planning & Development', '$120,000', '$110,000', '91%'],
    ['Grand Total', 'Full Column Sum', '$355,000', '=SUM(ABOVE)', '93.3%']
  ],
  hasSmartArt: false,
  smartArtTitle: 'Enhanced Institutional Organizational Structure',
  smartArtNodes: ['General Director', 'IT Department', 'Financial Affairs', 'Quality Assurance'],
  hasImage: false,
  imageWrap: 'square',
  hasTOC: false,
  hasFootnote: false,
  footnoteText: '* Automation: Executing processes programmatically without manual intervention.',
  headerText: 'Practical Exam - Annual Report 2026',
  footerText: 'Page 1 of 3',
  pageNumbers: true,
  mailMergeActive: false,
  mailMergeSelectedId: 1,
  trackChangesActive: false,
  comments: [],
};

export const WordSimulator: React.FC<WordSimulatorProps> = ({
  completedTaskIds,
  onAutoCheckTask,
  highlightedCheckId,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'insert' | 'layout' | 'design' | 'references' | 'mailings' | 'review'>('home');
  const [doc, setDoc] = useState<WordDocState>(defaultDocState);
  const [notification, setNotification] = useState<string | null>(null);

  const showSuccessNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // State modification helpers & auto-check triggers
  const toggleCoverPage = () => {
    setDoc(prev => ({ ...prev, coverPageEnabled: !prev.coverPageEnabled }));
    onAutoCheckTask('coverPage');
    showSuccessNotice('Cover Page inserted successfully!');
  };

  const setOrientation = (orientation: 'portrait' | 'landscape') => {
    setDoc(prev => ({ ...prev, orientation }));
    onAutoCheckTask('margins');
    showSuccessNotice(`Page orientation changed to ${orientation.toUpperCase()}`);
  };

  const setMargins = (margins: 'normal' | 'narrow' | 'wide' | 'custom') => {
    setDoc(prev => ({ ...prev, margins }));
    onAutoCheckTask('margins');
    showSuccessNotice('Standard Normal Margins (1 inch / 2.54 cm) applied!');
  };

  const toggleWatermark = () => {
    const newText = doc.watermarkText ? '' : 'CONFIDENTIAL';
    setDoc(prev => ({ ...prev, watermarkText: newText }));
    if (newText) {
      onAutoCheckTask('watermark');
      showSuccessNotice('Watermark "CONFIDENTIAL" inserted!');
    }
  };

  const togglePageBorder = () => {
    setDoc(prev => ({ ...prev, pageBorder: !prev.pageBorder }));
    onAutoCheckTask('watermark');
    showSuccessNotice('Official Page Border toggled!');
  };

  const toggleColumns = () => {
    const nextCols = doc.columns === 1 ? 2 : 1;
    setDoc(prev => ({ ...prev, columns: nextCols }));
    onAutoCheckTask('columns');
    showSuccessNotice(`Paragraph split into ${nextCols} Column(s)!`);
  };

  const toggleTable = () => {
    setDoc(prev => ({ ...prev, hasTable: !prev.hasTable }));
    onAutoCheckTask('tableCreated');
    showSuccessNotice('Custom Data Table inserted and styled!');
  };

  const toggleSmartArt = () => {
    setDoc(prev => ({ ...prev, hasSmartArt: !prev.hasSmartArt }));
    onAutoCheckTask('smartArt');
    showSuccessNotice('SmartArt Organizational Hierarchy inserted!');
  };

  const toggleImage = () => {
    setDoc(prev => ({ ...prev, hasImage: !prev.hasImage }));
    onAutoCheckTask('imageInserted');
    showSuccessNotice('Image inserted with Square text wrapping!');
  };

  const toggleTOC = () => {
    setDoc(prev => ({ ...prev, hasTOC: !prev.hasTOC }));
    onAutoCheckTask('toc');
    onAutoCheckTask('headings');
    showSuccessNotice('Automatic Table of Contents generated!');
  };

  const toggleFootnote = () => {
    setDoc(prev => ({ ...prev, hasFootnote: !prev.hasFootnote }));
    onAutoCheckTask('footnote');
    showSuccessNotice('Reference Footnote inserted!');
  };

  const toggleMailMerge = () => {
    setDoc(prev => ({ ...prev, mailMergeActive: !prev.mailMergeActive }));
    onAutoCheckTask('mailMerge');
    showSuccessNotice('Mail Merge dataset connected and merged!');
  };

  const toggleTrackChanges = () => {
    setDoc(prev => ({ ...prev, trackChangesActive: !prev.trackChangesActive }));
    showSuccessNotice(`Track Changes mode ${!doc.trackChangesActive ? 'ENABLED' : 'DISABLED'}`);
  };

  const currentRecipient = MAIL_MERGE_DATASET.find(r => r.id === doc.mailMergeSelectedId) || MAIL_MERGE_DATASET[0];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden font-sans" dir="ltr">
      
      {/* MS Word Window Title Bar */}
      <div className="bg-blue-900 dark:bg-slate-950 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold select-none border-b border-blue-950 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-white" />
          <span>{doc.title} - Microsoft Word (Exam Simulator)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-blue-800 dark:bg-slate-800 text-blue-200 dark:text-blue-300 text-[10px] px-2 py-0.5 rounded font-mono border border-blue-700 dark:border-slate-700">
            Auto-Save Active
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          </div>
        </div>
      </div>

      {/* MS Word Ribbon Menu Navigation Tabs */}
      <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 text-xs font-medium flex items-center px-2 select-none overflow-x-auto">
        <button className="px-3 py-1.5 text-blue-900 dark:text-blue-300 font-extrabold hover:bg-slate-200 dark:hover:bg-slate-700 uppercase">File</button>
        
        <button 
          onClick={() => setActiveTab('home')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'home' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          Home
        </button>

        <button 
          onClick={() => setActiveTab('insert')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'insert' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          Insert
        </button>

        <button 
          onClick={() => setActiveTab('layout')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'layout' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          Layout
        </button>

        <button 
          onClick={() => setActiveTab('design')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'design' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          Design
        </button>

        <button 
          onClick={() => setActiveTab('references')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'references' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          References
        </button>

        <button 
          onClick={() => setActiveTab('mailings')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'mailings' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          Mailings
        </button>

        <button 
          onClick={() => setActiveTab('review')}
          className={`px-3 py-1.5 rounded-t-lg transition ${activeTab === 'review' ? 'bg-white dark:bg-slate-900 border-t-2 border-blue-600 font-bold text-blue-900 dark:text-blue-400 shadow-sm' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
        >
          Review
        </button>
      </div>

      {/* MS Word Ribbon Controls Bar */}
      <div className="bg-slate-50 dark:bg-slate-900 p-3 border-b border-slate-300 dark:border-slate-800 min-h-[64px] flex items-center overflow-x-auto gap-4 text-xs">
        
        {/* HOME TAB CONTROLS */}
        {activeTab === 'home' && (
          <div className="flex items-center gap-4">
            {/* Font Family & Size */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 p-1 rounded border border-slate-300 dark:border-slate-700">
              <select 
                value={doc.fontFamily} 
                onChange={e => setDoc({ ...doc, fontFamily: e.target.value })}
                className="text-xs bg-transparent border-none font-bold text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                <option value="Arial">Arial</option>
                <option value="Calibri">Calibri</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>

              <select 
                value={doc.fontSize} 
                onChange={e => {
                  setDoc({ ...doc, fontSize: Number(e.target.value) });
                  onAutoCheckTask('fontFormatting');
                  showSuccessNotice(`Font size changed to ${e.target.value}pt`);
                }}
                className="text-xs bg-transparent border-none font-mono font-bold text-slate-800 dark:text-slate-200 focus:outline-none border-l border-slate-200 dark:border-slate-700 pl-1"
              >
                <option value={12}>12pt</option>
                <option value={14}>14pt</option>
                <option value={16}>16pt</option>
                <option value={18}>18pt</option>
              </select>
            </div>

            {/* Alignment Controls */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded border border-slate-300 dark:border-slate-700">
              <button 
                onClick={() => setDoc({ ...doc, alignment: 'left' })}
                className={`p-1 rounded ${doc.alignment === 'left' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                title="Align Left"
              >
                <AlignLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setDoc({ ...doc, alignment: 'center' })}
                className={`p-1 rounded ${doc.alignment === 'center' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                title="Center"
              >
                <AlignCenter className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setDoc({ ...doc, alignment: 'right' })}
                className={`p-1 rounded ${doc.alignment === 'right' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                title="Align Right"
              >
                <AlignRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  setDoc({ ...doc, alignment: 'justify' });
                  onAutoCheckTask('paragraphJustify');
                  showSuccessNotice('Paragraph Justify alignment applied!');
                }}
                className={`p-1 rounded ${doc.alignment === 'justify' ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                title="Justify Paragraph"
              >
                <AlignJustify className="w-4 h-4" />
              </button>
            </div>

            {/* Styles Gallery */}
            <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-3">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">Styles:</span>
              <button
                onClick={() => {
                  onAutoCheckTask('headings');
                  showSuccessNotice('Heading 1 style applied to Section Title!');
                }}
                className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-2.5 py-1 rounded text-xs font-bold text-blue-900 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <Heading1 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Heading 1</span>
              </button>
              <button
                onClick={() => {
                  onAutoCheckTask('headings');
                  showSuccessNotice('Heading 2 style applied to Subtitle!');
                }}
                className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-2.5 py-1 rounded text-xs font-bold text-blue-800 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <Heading2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                <span>Heading 2</span>
              </button>
            </div>
          </div>
        )}

        {/* INSERT TAB CONTROLS */}
        {activeTab === 'insert' && (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCoverPage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.coverPageEnabled ? 'bg-blue-600 text-white border-blue-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>Cover Page</span>
            </button>

            <button
              onClick={toggleTable}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.hasTable ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <TableIcon className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Data Table (5x6)</span>
            </button>

            <button
              onClick={toggleSmartArt}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.hasSmartArt ? 'bg-purple-600 text-white border-purple-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Layers className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              <span>SmartArt Hierarchy</span>
            </button>

            <button
              onClick={toggleImage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.hasImage ? 'bg-amber-600 text-white border-amber-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Insert Image (Square)</span>
            </button>
          </div>
        )}

        {/* LAYOUT TAB CONTROLS */}
        {activeTab === 'layout' && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMargins(doc.margins === 'normal' ? 'narrow' : 'normal')}
              className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              <span>Margins: {doc.margins === 'normal' ? 'Normal (1 in)' : 'Narrow (0.5 in)'}</span>
            </button>

            <button
              onClick={() => setOrientation(doc.orientation === 'portrait' ? 'landscape' : 'portrait')}
              className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              <span>Orientation: {doc.orientation === 'portrait' ? 'Portrait' : 'Landscape'}</span>
            </button>

            <button
              onClick={toggleColumns}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.columns === 2 ? 'bg-blue-600 text-white border-blue-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>Columns: {doc.columns} Column(s)</span>
            </button>
          </div>
        )}

        {/* DESIGN TAB CONTROLS */}
        {activeTab === 'design' && (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleWatermark}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.watermarkText ? 'bg-blue-600 text-white border-blue-700' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Watermark ({doc.watermarkText ? 'CONFIDENTIAL' : 'None'})</span>
            </button>

            <button
              onClick={togglePageBorder}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.pageBorder ? 'bg-blue-600 text-white border-blue-700' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span>Page Border ({doc.pageBorder ? 'Double Line' : 'None'})</span>
            </button>
          </div>
        )}

        {/* REFERENCES TAB CONTROLS */}
        {activeTab === 'references' && (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTOC}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.hasTOC ? 'bg-purple-600 text-white border-purple-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Automatic Table of Contents (Auto TOC 1)</span>
            </button>

            <button
              onClick={toggleFootnote}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.hasFootnote ? 'bg-purple-600 text-white border-purple-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span>Insert Footnote</span>
            </button>
          </div>
        )}

        {/* MAILINGS TAB CONTROLS */}
        {activeTab === 'mailings' && (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMailMerge}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.mailMergeActive ? 'bg-rose-600 text-white border-rose-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Send className="w-4 h-4 text-rose-400" />
              <span>Mail Merge ({doc.mailMergeActive ? 'Dataset Active' : 'Off'})</span>
            </button>

            {doc.mailMergeActive && (
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Recipient:</span>
                <select
                  value={doc.mailMergeSelectedId}
                  onChange={e => setDoc({ ...doc, mailMergeSelectedId: Number(e.target.value) })}
                  className="text-xs font-bold text-slate-800 dark:text-slate-200 bg-transparent border-none focus:outline-none"
                >
                  {MAIL_MERGE_DATASET.map(r => (
                    <option key={r.id} value={r.id} className="dark:bg-slate-900">
                      {r.fullName} ({r.jobTitle})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* REVIEW TAB CONTROLS */}
        {activeTab === 'review' && (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTrackChanges}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold transition ${
                doc.trackChangesActive ? 'bg-amber-600 text-white border-amber-700 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Track Changes ({doc.trackChangesActive ? 'ON' : 'OFF'})</span>
            </button>
          </div>
        )}

      </div>

      {/* Instant Notification Popup Banner */}
      {notification && (
        <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-md animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-300" />
            <span>{notification}</span>
          </div>
          <span className="text-[10px] bg-emerald-700 px-2 py-0.5 rounded text-emerald-100 font-mono">Graded ✓</span>
        </div>
      )}

      {/* LIVE INTERACTIVE CANVAS / DOCUMENT WORKSPACE */}
      <div className="bg-slate-200 dark:bg-slate-950 p-6 sm:p-10 min-h-[700px] flex justify-center items-start overflow-x-auto">
        
        {/* Paper Sheet Page Representation */}
        <div 
          className={`bg-white shadow-2xl relative transition-all duration-300 p-8 sm:p-12 border ${
            doc.pageBorder ? 'border-4 border-double border-blue-900' : 'border-slate-300'
          } ${doc.orientation === 'landscape' ? 'w-[1000px] min-h-[600px]' : 'w-[794px] min-h-[1000px]'}`}
          style={{
            fontFamily: doc.fontFamily,
            fontSize: `${doc.fontSize}px`,
            lineHeight: doc.lineSpacing,
          }}
        >
          {/* Watermark Overlay */}
          {doc.watermarkText && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <span className="text-slate-200 text-7xl sm:text-8xl font-black transform -rotate-45 tracking-widest opacity-40 border-4 border-slate-200 p-6 rounded-3xl">
                {doc.watermarkText}
              </span>
            </div>
          )}

          {/* Header Area */}
          <div className="border-b border-slate-200 pb-2 mb-6 text-xs text-slate-400 flex justify-between items-center font-sans">
            <span>{doc.headerText}</span>
            <span className="font-mono text-[10px] text-blue-600 font-bold">MS Word 2026</span>
          </div>

          {/* COVER PAGE (If Enabled) */}
          {doc.coverPageEnabled && (
            <div className="mb-10 bg-slate-900 text-white p-8 rounded-2xl border-4 border-blue-600 shadow-lg text-center relative z-10">
              <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                Official Document Cover Page
              </span>
              <h1 className="text-2xl font-black text-white mt-4">{doc.coverTitle}</h1>
              <p className="text-blue-300 text-xs mt-2 font-medium">{doc.coverSubtitle}</p>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between">
                <span>Author: {doc.coverAuthor}</span>
                <span>Date: {new Date().toISOString().split('T')[0]}</span>
              </div>
            </div>
          )}

          {/* AUTOMATIC TABLE OF CONTENTS (If Enabled) */}
          {doc.hasTOC && (
            <div className="mb-8 p-5 bg-purple-50/70 border border-purple-200 rounded-xl text-xs font-sans">
              <h3 className="font-extrabold text-purple-950 text-sm mb-3 pb-2 border-b border-purple-200">
                Table of Contents (Automatic Table 1)
              </h3>
              <div className="space-y-2 text-purple-900 font-medium">
                <div className="flex justify-between items-center border-b border-dotted border-purple-300 pb-1">
                  <span>Section 1: Pillars of Digital Transformation</span>
                  <span className="font-mono font-bold">Page 2</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-purple-300 pb-1">
                  <span>Section 2: Performance Indicators & Evaluation Table</span>
                  <span className="font-mono font-bold">Page 2</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-purple-300 pb-1">
                  <span>Section 3: Enhanced Organizational Structure</span>
                  <span className="font-mono font-bold">Page 3</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-purple-300 pb-1">
                  <span>Section 4: Conclusion & Recommendations</span>
                  <span className="font-mono font-bold">Page 3</span>
                </div>
              </div>
            </div>
          )}

          {/* MAIN DOCUMENT BODY CONTENT */}
          <div className="relative z-10 space-y-6">
            
            {/* Main Title */}
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                Annual Institutional Development & Digital Transformation Report 2026
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Department of Computer Science & Information Technology
              </p>
            </div>

            {/* Introduction Paragraph */}
            <div className="text-slate-800 leading-relaxed text-justify">
              <p>
                The institution strives to enhance digital performance efficiency and elevate the quality of electronic services provided to stakeholders. This report outlines various levels of achievement, financial performance, updated organizational structure, as well as automated mail merge procedures and document security mechanisms.
              </p>
            </div>

            {/* IMAGE (If Enabled) */}
            {doc.hasImage && (
              <div className="my-4 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-4">
                <img
                  src={ASSET_IMAGES.banner}
                  alt="Report Visual Logo"
                  className="w-32 h-24 object-cover rounded-lg border border-amber-300 shadow"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs text-amber-900">
                  <strong className="block font-bold text-amber-950">Inserted Graphic (Wrap Text: Square):</strong>
                  <span>High-resolution document figure positioned alongside the introduction section.</span>
                </div>
              </div>
            )}

            {/* SECTION 1: PILLARS (COLUMNS TEST) */}
            <div>
              <h2 className="text-lg font-bold text-blue-900 mb-2 border-b-2 border-blue-900 pb-1">
                Section 1: Pillars of the Digital Transformation Plan
              </h2>

              <div className={`text-slate-800 text-sm ${doc.columns === 2 ? 'grid grid-cols-2 gap-4 divide-x divide-slate-300' : 'space-y-2'}`}>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="block text-slate-900 font-bold mb-1">1. Cloud Infrastructure:</strong>
                  <span>Modernizing server hardware and cloud security platforms to guarantee 99.9% uptime.</span>
                </div>
                <div className={`p-2 bg-slate-50 rounded border border-slate-200 ${doc.columns === 2 ? 'pl-4' : ''}`}>
                  <strong className="block text-slate-900 font-bold mb-1">2. Staff Training & Automation:</strong>
                  <span>Training employees on office productivity suites and reducing manual paper transactions by 85%.</span>
                </div>
              </div>
            </div>

            {/* SECTION 2: DATA TABLE (If Enabled) */}
            {doc.hasTable && (
              <div className="my-6">
                <h2 className="text-lg font-bold text-blue-900 mb-2 border-b-2 border-blue-900 pb-1">
                  Section 2: Performance Indicators & Financial Results
                </h2>

                <div className="overflow-x-auto border border-slate-400 rounded-lg shadow-sm">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-900 text-white font-bold">
                        <th colSpan={5} className="p-2.5 text-center text-sm border-b border-blue-800">
                          {doc.tableData[0][0]}
                        </th>
                      </tr>
                      <tr className="bg-blue-100 text-blue-900 font-extrabold border-b border-blue-300">
                        {doc.tableData[1].map((cell, idx) => (
                          <th key={idx} className="p-2 border-r border-blue-200">{cell}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {doc.tableData.slice(2, 5).map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-200 hover:bg-slate-50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2 border-r border-slate-200 font-medium">{cell}</td>
                          ))}
                        </tr>
                      ))}
                      <tr className="bg-slate-100 font-black text-slate-900 border-t-2 border-slate-400">
                        {doc.tableData[5].map((cell, cIdx) => (
                          <td key={cIdx} className="p-2 border-r border-slate-300 font-mono text-blue-950">{cell}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SECTION 3: SMARTART HIERARCHY (If Enabled) */}
            {doc.hasSmartArt && (
              <div className="my-6 p-5 bg-purple-50 border border-purple-200 rounded-2xl">
                <h2 className="text-lg font-bold text-purple-950 mb-3 text-center">
                  Section 3: {doc.smartArtTitle} (SmartArt Hierarchy)
                </h2>

                <div className="flex flex-col items-center gap-3">
                  <div className="bg-purple-900 text-white font-bold px-6 py-2 rounded-xl text-xs shadow-md">
                    {doc.smartArtNodes[0]}
                  </div>

                  <div className="w-0.5 h-4 bg-purple-300" />

                  <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                    {doc.smartArtNodes.slice(1).map((node, idx) => (
                      <div key={idx} className="bg-white border-2 border-purple-500 text-purple-900 font-bold p-2 text-center rounded-xl text-xs shadow-sm">
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MAIL MERGE PREVIEW (If Active) */}
            {doc.mailMergeActive && (
              <div className="my-6 p-5 bg-rose-50 border-2 border-rose-300 rounded-2xl text-xs text-rose-950 space-y-2">
                <div className="flex items-center justify-between font-bold border-b border-rose-200 pb-2">
                  <span className="text-sm font-black text-rose-900">Mail Merge Preview Letter:</span>
                  <span className="bg-rose-200 text-rose-900 px-2 py-0.5 rounded font-mono">
                    Recipient #{currentRecipient.id}
                  </span>
                </div>
                <p><strong>Recipient Name:</strong> «FullName» &rarr; <span className="font-bold underline text-blue-900">{currentRecipient.fullName}</span></p>
                <p><strong>Job Position:</strong> «JobTitle» &rarr; <span className="font-bold text-slate-800">{currentRecipient.jobTitle}</span></p>
                <p><strong>Department:</strong> «Department» &rarr; <span className="font-bold text-slate-800">{currentRecipient.department}</span></p>
                <p><strong>Grade & Bonus:</strong> «Grade» / «Bonus» &rarr; <span className="font-extrabold text-emerald-700">{currentRecipient.grade} ({currentRecipient.bonusAmount})</span></p>
              </div>
            )}

            {/* FOOTNOTE (If Enabled) */}
            {doc.hasFootnote && (
              <div className="mt-8 pt-4 border-t border-slate-300 text-xs text-slate-600 font-mono">
                {doc.footnoteText}
              </div>
            )}

          </div>

          {/* Footer Area */}
          <div className="border-t border-slate-200 pt-3 mt-10 text-xs text-slate-400 flex justify-between items-center font-sans">
            <span>Microsoft Word Practical Exam 2026</span>
            <span className="font-mono">{doc.footerText}</span>
          </div>

        </div>

      </div>

    </div>
  );
};
