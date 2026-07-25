export type QuestionType = 'mcq' | 'paper';
export type StreamType = 'advanced' | 'advanced_bridge' | 'advanced_inspire' | 'general';
export type GradeType = '12' | '11' | '10' | '9';
export type TermType = 'EOT1' | 'EOT2' | 'EOT3';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuestionItem {
  id: string; // e.g. "Q1-ex7", "Q21a-ex39"
  qNumber: number | string; // 1 to 26, or 21-a, 21-b
  title: string; // Brief descriptive title
  titleAr: string;
  learningOutcome: string;
  learningOutcomeAr: string;
  unit: number; // 2 or 3
  lesson: string; // e.g. "Lesson 2.1"
  page: number; // e.g. 68
  exerciseRef: string; // e.g. "Exercises (7-12)"
  type: QuestionType; // 'mcq' or 'paper'
  examYear?: string; // e.g. "2024/2025", "2023/2024"
  questionText: string; // Latex/text math formula or question statement
  questionTextAr?: string;
  imageSvgType?: string; // Optional indicator if graph visualization applies
  options?: QuestionOption[];
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  solutionSteps: string[]; // Step by step solution in clean text/LaTeX
  finalAnswer: string;
}

export interface ExamSpecification {
  qNumber: string;
  learningOutcomeEn: string;
  learningOutcomeAr: string;
  exerciseRef: string;
  page: number;
  type: QuestionType;
  marks: number;
}
