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

export type IgPaperType = 'Paper 2 (Extended)' | 'Paper 4 (Extended)' | 'Paper 1 (Core)' | 'Paper 3 (Core)';

export interface IgQuestion {
  id: string;
  code: string; // e.g. "0580/21/M/J/21"
  subjectId: string;
  boardId: IgBoardId;
  levelId: IgLevelId;
  year: number; // 2002 to 2021
  session: 'May/June' | 'Oct/Nov' | 'Feb/March';
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
