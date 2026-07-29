export type DomainId = 
  // Math
  | 'algebra' | 'advanced-math' | 'data-analysis' | 'geometry-trig'
  // Reading & Writing
  | 'craft-structure' | 'information-ideas' | 'expression-ideas' | 'standard-english';

export type CategoryId = 
  // Algebra
  | 'linear-equations' | 'linear-inequalities' | 'systems-equations' | 'linear-functions' | 'algebra-word-problems'
  // Advanced Math
  | 'quadratic-equations' | 'quadratic-functions' | 'exponents' | 'radicals' | 'polynomials' | 'rational-expressions' | 'exponential-models'
  // Problem Solving & Data Analysis
  | 'ratios-proportions' | 'percentages' | 'statistics' | 'data-interpretation' | 'probability' | 'linear-regression'
  // Geometry & Trigonometry
  | 'angles-lines' | 'triangles' | 'right-trig' | 'circles' | 'area-volume' | 'coordinate-geometry'
  // Reading & Writing
  | 'vocabulary' | 'main-idea' | 'inference' | 'grammar' | 'transitions' | 'rhetorical-synthesis' | 'text-structure';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface QuestionOption {
  textEn: string;
  textAr: string;
}

export type SvgType = 
  | 'balance-scale' 
  | 'coordinate-line' 
  | 'parabola'
  | 'geometry-rect' 
  | 'fraction-bars' 
  | 'rate-distance' 
  | 'flowchart'
  | 'scatterplot'
  | 'bar-chart'
  | 'right-triangle'
  | 'circle-arc'
  | 'number-line';

export interface SvgData {
  type: SvgType;
  titleEn?: string;
  titleAr?: string;
  params: Record<string, any>;
}

export interface Question {
  id: number;
  domain: DomainId;
  category: CategoryId;
  difficulty: Difficulty;
  questionEn: string;
  questionAr: string;
  equationStr?: string;
  svgData?: SvgData;
  isGridIn?: boolean;
  options?: QuestionOption[];
  correctAnswer: number | string; // index for MCQ (0-3) or string/number for grid-in
  explanationEn: string;
  explanationAr: string;
  solutionStepsEn: string[];
  solutionStepsAr: string[];
}

export interface DomainInfo {
  id: DomainId;
  titleEn: string;
  titleAr: string;
  weight: string;
  descriptionEn: string;
  descriptionAr: string;
  iconName: string;
  color: string;
}

export interface UnitInfo {
  unitNum: number;
  titleEn: string;
  titleAr: string;
  mainTopicsEn: string[];
  mainTopicsAr: string[];
  desmosTipEn: string;
  desmosTipAr: string;
}

export interface ExamResult {
  score: number;
  total: number;
  percentage: number;
  satScaledScore: number; // 200 - 800
  timeSpentSeconds: number;
  domainScores: Record<DomainId, { correct: number; total: number }>;
  userAnswers: Record<number, number | string>;
  date: string;
  studentName: string;
  studentClass: string;
}
