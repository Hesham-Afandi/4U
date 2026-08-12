import { QuestionItem } from '../../eot/types';

export interface StudentMistakeItem {
  id: string; // unique ID
  questionId: string;
  question: QuestionItem;
  studentAnswer?: string;
  correctAnswer: string;
  addedAt: number;
  subject: string; // e.g. "رياضيات" or "فيزياء"
  grade?: string;
  term?: string;
  userNote?: string;
  isMastered: boolean;
  masteredAt?: number;
  attemptsCount: number;
}

const STORAGE_KEY = 'student_mistakes_v1';

export const mistakesService = {
  getMistakes(): StudentMistakeItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      return JSON.parse(data);
    } catch {
      return [];
    }
  },

  saveMistakes(mistakes: StudentMistakeItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
      window.dispatchEvent(new Event('student_mistakes_updated'));
    } catch (e) {
      console.error('Failed to save mistakes', e);
    }
  },

  addMistake(
    question: QuestionItem,
    studentAnswer?: string,
    subject: string = 'عام',
    grade?: string,
    term?: string
  ): StudentMistakeItem {
    const list = this.getMistakes();
    const existingIndex = list.findIndex((item) => item.questionId === question.id);

    if (existingIndex >= 0) {
      const existing = list[existingIndex];
      const updated: StudentMistakeItem = {
        ...existing,
        studentAnswer: studentAnswer || existing.studentAnswer,
        attemptsCount: existing.attemptsCount + 1,
        isMastered: false, // Re-activate if made mistake again
        addedAt: Date.now(),
      };
      list[existingIndex] = updated;
      this.saveMistakes(list);
      return updated;
    } else {
      const newItem: StudentMistakeItem = {
        id: `mistake-${question.id}-${Date.now()}`,
        questionId: question.id,
        question,
        studentAnswer,
        correctAnswer: question.correctAnswer || question.finalAnswer || 'A',
        addedAt: Date.now(),
        subject,
        grade: grade || '12',
        term: term || 'EOT2',
        userNote: '',
        isMastered: false,
        attemptsCount: 1,
      };
      list.unshift(newItem);
      this.saveMistakes(list);
      return newItem;
    }
  },

  updateMistakeNote(mistakeId: string, note: string): void {
    const list = this.getMistakes();
    const item = list.find((m) => m.id === mistakeId);
    if (item) {
      item.userNote = note;
      this.saveMistakes(list);
    }
  },

  markAsMastered(mistakeId: string): void {
    const list = this.getMistakes();
    const item = list.find((m) => m.id === mistakeId);
    if (item) {
      item.isMastered = true;
      item.masteredAt = Date.now();
      this.saveMistakes(list);
    }
  },

  unmarkMastered(mistakeId: string): void {
    const list = this.getMistakes();
    const item = list.find((m) => m.id === mistakeId);
    if (item) {
      item.isMastered = false;
      this.saveMistakes(list);
    }
  },

  removeMistake(mistakeId: string): void {
    const list = this.getMistakes().filter((m) => m.id !== mistakeId);
    this.saveMistakes(list);
  },

  clearAll(): void {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('student_mistakes_updated'));
  },
};
