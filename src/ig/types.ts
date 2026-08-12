export type IgBoardId = 'cambridge' | 'edexcel' | 'oxford';

export type IgLevelId = 
  | 'o_level_igcse' 
  | 'as_a2_level' 
  | 'o_level_gcse' 
  | 'as_ial' 
  | 'igcse';

export interface IgExamLevel {
  id: IgLevelId;
  nameEn: string;
  nameAr: string;
}

export interface IgExamBoard {
  id: IgBoardId;
  nameEn: string;
  nameAr: string;
  badgeColor: string;
  accentBg: string;
  borderColor: string;
  icon: string;
  levels: IgExamLevel[];
}

export interface IgSubject {
  id: string;
  code?: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  status: 'available' | 'coming_soon';
  hasQuestions?: boolean;
}

export type IgPaperType = 
  | 'Paper 1 (Foundation)' 
  | 'Paper 2 (Foundation)' 
  | 'Paper 3 (Higher)' 
  | 'Paper 4 (Higher)'
  | 'Paper 1F (Foundation)' 
  | 'Paper 2F (Foundation)' 
  | 'Paper 3H (Higher)' 
  | 'Paper 4H (Higher)'
  | 'Paper 1 (Core)' 
  | 'Paper 2 (Extended)' 
  | 'Paper 3 (Core)' 
  | 'Paper 4 (Extended)'
  | 'Paper 11 (Core)'
  | 'Paper 12 (Core)'
  | 'Paper 13 (Core)'
  | 'Paper 21 (Extended)'
  | 'Paper 22 (Extended)'
  | 'Paper 23 (Extended)'
  | 'Paper 31 (Core)'
  | 'Paper 32 (Core)'
  | 'Paper 33 (Core)'
  | 'Paper 41 (Extended)'
  | 'Paper 42 (Extended)'
  | 'Paper 43 (Extended)'
  | string;

export interface IgQuestion {
  id: string;
  code: string; // e.g. "0580/21/M/J/21"
  subjectId: string;
  boardId: IgBoardId;
  levelId: IgLevelId;
  year: number; // 2002 to 2021
  session: 'May/June' | 'Oct/Nov' | 'Feb/March' | 'Jan' | string;
  paper: IgPaperType;
  topicEn: string;
  topicAr: string;
  questionEn: string;
  questionAr?: string;
  options?: { id: 'A' | 'B' | 'C' | 'D'; textEn: string; textAr?: string }[];
  correctAnswer: string; // 'A' | 'B' | 'C' | 'D' or numeric string for grid-in/written
  isGridIn?: boolean;
  explanationEn?: string;
  explanationAr?: string;
  solutionStepsEn?: string[];
  solutionStepsAr?: string[];
  marks?: number;
  diagramSvg?: string;
  diagramTitle?: string;
}
