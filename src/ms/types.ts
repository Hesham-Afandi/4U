export type ExamViewMode = 'home' | 'exam' | 'simulator' | 'printable' | 'teacher';
export type Language = 'en' | 'ar';

export interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  wordPath: string; // E.g., "Layout tab > Page Setup group > Margins > Normal"
  targetImage?: string;
  codeOrTextToUse?: string;
  tips?: string[];
  autoCheckId?: string; // Linkage to simulator auto-grader
}

export interface ExamModule {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  totalPoints: number;
  iconName: string;
  description: string;
  tasks: Task[];
}

export interface StudentInfo {
  name: string;
  seatNumber: string;
  institution: string;
  group: string;
  date: string;
  instructorName: string;
}

export interface MailMergeRecord {
  id: number;
  fullName: string;
  jobTitle: string;
  department: string;
  grade: string;
  bonusAmount: string;
}

export interface WordDocState {
  title: string;
  coverPageEnabled: boolean;
  coverTitle: string;
  coverSubtitle: string;
  coverAuthor: string;
  orientation: 'portrait' | 'landscape';
  margins: 'normal' | 'narrow' | 'wide' | 'custom';
  fontFamily: string;
  fontSize: number;
  lineSpacing: number;
  alignment: 'right' | 'center' | 'left' | 'justify';
  watermarkText: string;
  pageBorder: boolean;
  pageBorderColor: string;
  columns: 1 | 2;
  hasTable: boolean;
  tableRows: number;
  tableCols: number;
  tableData: string[][];
  hasSmartArt: boolean;
  smartArtTitle: string;
  smartArtNodes: string[];
  hasImage: boolean;
  imageWrap: 'inline' | 'square' | 'tight';
  hasTOC: boolean;
  hasFootnote: boolean;
  footnoteText: string;
  headerText: string;
  footerText: string;
  pageNumbers: boolean;
  mailMergeActive: boolean;
  mailMergeSelectedId: number;
  trackChangesActive: boolean;
  comments: { text: string; author: string }[];
}

export interface OfficeAppSection {
  id: 'word' | 'excel' | 'powerpoint' | 'access';
  title: string;
  subtitle: string;
  iconName: string;
  brandColor: string;
  lightBg: string;
  borderColor: string;
  badgeText: string;
  isAvailable: boolean;
  description: string;
  features: string[];
}
