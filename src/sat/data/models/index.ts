import { Question } from '../../types';
import { SAT_MODEL_1_QUESTIONS } from './satModel1';
import { SAT_MODEL_2_QUESTIONS } from './satModel2';
import { SAT_MODEL_3_QUESTIONS } from './satModel3';
import { SAT_MODEL_4_QUESTIONS } from './satModel4';
import { SAT_MODEL_5_QUESTIONS } from './satModel5';
import { SAT_MODEL_6_QUESTIONS } from './satModel6';
import { SAT_MODEL_7_QUESTIONS } from './satModel7';
import { SAT_MODEL_8_QUESTIONS } from './satModel8';
import { SAT_MODEL_9_QUESTIONS } from './satModel9';
import { SAT_MODEL_10_QUESTIONS } from './satModel10';
import { SAT_MODEL_11_QUESTIONS } from './satModel11';
import { SAT_MODEL_12_QUESTIONS } from './satModel12';
import { ALL_QUESTIONS } from '../satQuestions';

import { SAT_RW_MODEL_1_QUESTIONS } from '../rwModels/rwModel1';
import { SAT_RW_MODEL_2_QUESTIONS } from '../rwModels/rwModel2';
import { SAT_RW_MODEL_3_QUESTIONS } from '../rwModels/rwModel3';
import { SAT_RW_MODEL_4_QUESTIONS } from '../rwModels/rwModel4';
import { SAT_RW_MODEL_5_QUESTIONS } from '../rwModels/rwModel5';
import { SAT_RW_MODEL_6_QUESTIONS } from '../rwModels/rwModel6';
import { SAT_RW_MODEL_7_QUESTIONS } from '../rwModels/rwModel7';
import { SAT_RW_MODEL_8_QUESTIONS } from '../rwModels/rwModel8';
import { SAT_RW_MODEL_9_QUESTIONS } from '../rwModels/rwModel9';
import { SAT_RW_MODEL_10_QUESTIONS } from '../rwModels/rwModel10';
import { SAT_RW_MODEL_11_QUESTIONS } from '../rwModels/rwModel11';
import { SAT_RW_MODEL_12_QUESTIONS } from '../rwModels/rwModel12';
import { SAT_RW_PSAT_MODEL_1_QUESTIONS } from '../rwModels/rwPsatModel1';

export interface SatExamModel {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  questions: Question[];
  totalQuestions: number;
  badgeAr?: string;
  badgeEn?: string;
  subject?: 'math' | 'reading-writing';
}

export const SAT_MATH_EXAM_MODELS: SatExamModel[] = [
  {
    id: 'model-1',
    subject: 'math',
    titleAr: 'النموذج 1 - SAT Math',
    titleEn: 'Model 1 - Digital SAT Math',
    descriptionAr: 'اختبار محاكاة رسمي رقم 1 مكوّن من الموديول 1 والموديول 2 مع الرسم البياني والتوضيحات.',
    descriptionEn: 'Official Digital SAT Math Practice Model 1 with diagrams & step-by-step solutions.',
    questions: SAT_MODEL_1_QUESTIONS,
    totalQuestions: SAT_MODEL_1_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 1',
    badgeEn: 'Model 1'
  },
  {
    id: 'model-2',
    subject: 'math',
    titleAr: 'النموذج 2 - SAT Math',
    titleEn: 'Model 2 - Digital SAT Math',
    descriptionAr: 'اختبار محاكاة رسمي رقم 2 يغطي الجبر والبيانات والهندسة والرياضيات المتقدمة.',
    descriptionEn: 'Official Digital SAT Math Practice Model 2 with interactive question bank.',
    questions: SAT_MODEL_2_QUESTIONS,
    totalQuestions: SAT_MODEL_2_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 2',
    badgeEn: 'Model 2'
  },
  {
    id: 'model-3',
    subject: 'math',
    titleAr: 'النموذج 3 - SAT Math',
    titleEn: 'Model 3 - Digital SAT Math',
    descriptionAr: 'نموذج متقدم رقم 3 يحتوي على تمارين الشدة العالية وتطبيقات الرسم البياني والهندسة.',
    descriptionEn: 'Advanced Practice Model 3 with high-difficulty SAT Math questions.',
    questions: SAT_MODEL_3_QUESTIONS,
    totalQuestions: SAT_MODEL_3_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 3',
    badgeEn: 'Model 3'
  },
  {
    id: 'model-4',
    subject: 'math',
    titleAr: 'النموذج 4 - SAT Math',
    titleEn: 'Model 4 - Digital SAT Math',
    descriptionAr: 'نموذج محاكاة 4 يركز على الدوال الخطيّة، المثلثات، والمعدلات الأسيّة.',
    descriptionEn: 'Practice Model 4 focused on linear functions, triangles, and exponential models.',
    questions: SAT_MODEL_4_QUESTIONS,
    totalQuestions: SAT_MODEL_4_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 4',
    badgeEn: 'Model 4'
  },
  {
    id: 'model-5',
    subject: 'math',
    titleAr: 'النموذج 5 - SAT Math',
    titleEn: 'Model 5 - Digital SAT Math',
    descriptionAr: 'نموذج 5 متكامل لأسئلة المتباينات الخطية ونظرية الباقي وحساب المنتصف للقطاعات.',
    descriptionEn: 'Practice Model 5 covering inequalities, remainder theorem, and line segment midpoints.',
    questions: SAT_MODEL_5_QUESTIONS,
    totalQuestions: SAT_MODEL_5_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 5',
    badgeEn: 'Model 5'
  },
  {
    id: 'model-6',
    subject: 'math',
    titleAr: 'النموذج 6 - SAT Math',
    titleEn: 'Model 6 - Digital SAT Math',
    descriptionAr: 'نموذج 6 يتضمن المسائل اللفظية وحساب أحجام الأسطوانات وصيغ رؤوس المنحنيات والاحتمالات.',
    descriptionEn: 'Practice Model 6 featuring word problems, cylinder volumes, and parabola vertex forms.',
    questions: SAT_MODEL_6_QUESTIONS,
    totalQuestions: SAT_MODEL_6_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 6',
    badgeEn: 'Model 6'
  },
  {
    id: 'model-7',
    subject: 'math',
    titleAr: 'النموذج 7 - SAT Math',
    titleEn: 'Model 7 - Digital SAT Math',
    descriptionAr: 'نموذج 7 متقدم للقيمة المطلقة وترافق المقادير النسبية ومجموع زوايا المضلعات المنتظمة.',
    descriptionEn: 'Practice Model 7 covering absolute value, rational expressions, and polygon angles.',
    questions: SAT_MODEL_7_QUESTIONS,
    totalQuestions: SAT_MODEL_7_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 7',
    badgeEn: 'Model 7'
  },
  {
    id: 'model-8',
    subject: 'math',
    titleAr: 'النموذج 8 - SAT Math',
    titleEn: 'Model 8 - Digital SAT Math',
    descriptionAr: 'نموذج 8 لدراسة تكلفة الخدمات، مميز المعادلة التربيعية، والمثلثات المتشابهة.',
    descriptionEn: 'Practice Model 8 covering cost functions, quadratic discriminant, and similar triangles.',
    questions: SAT_MODEL_8_QUESTIONS,
    totalQuestions: SAT_MODEL_8_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 8',
    badgeEn: 'Model 8'
  },
  {
    id: 'model-9',
    subject: 'math',
    titleAr: 'النموذج 9 - SAT Math',
    titleEn: 'Model 9 - Digital SAT Math',
    descriptionAr: 'نموذج 9 للنمو المركب والاستثمار، مثلثات 30-60-90، والجداول التكرارية ذات المدخلين.',
    descriptionEn: 'Practice Model 9 focusing on compound growth, 30-60-90 triangles, and two-way tables.',
    questions: SAT_MODEL_9_QUESTIONS,
    totalQuestions: SAT_MODEL_9_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 9',
    badgeEn: 'Model 9'
  },
  {
    id: 'model-10',
    subject: 'math',
    titleAr: 'النموذج 10 - SAT Math',
    titleEn: 'Model 10 - Digital SAT Math',
    descriptionAr: 'نموذج 10 لأنظمة المتباينات والدوال المثلثية ودائرة الوحدة وتحويلات الوحدات.',
    descriptionEn: 'Practice Model 10 covering inequality systems, unit circle trig, and unit conversions.',
    questions: SAT_MODEL_10_QUESTIONS,
    totalQuestions: SAT_MODEL_10_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 10',
    badgeEn: 'Model 10'
  },
  {
    id: 'model-11',
    subject: 'math',
    titleAr: 'النموذج 11 - SAT Math',
    titleEn: 'Model 11 - Digital SAT Math',
    descriptionAr: 'نموذج 11 لإكمال المربع للدائرة وطول قوس الدائرة ونسب الخصوم والتخفيضات.',
    descriptionEn: 'Practice Model 11 featuring circle square completion, arc length, and discount rates.',
    questions: SAT_MODEL_11_QUESTIONS,
    totalQuestions: SAT_MODEL_11_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 11',
    badgeEn: 'Model 11'
  },
  {
    id: 'model-12',
    subject: 'math',
    titleAr: 'النموذج 12 - SAT Math',
    titleEn: 'Model 12 - Digital SAT Math',
    descriptionAr: 'نموذج 12 متقدم جداً لأنظمة بلا حلول، الأعداد المركبة i، الانحراف المعياري، والمستقيمات التعامدية.',
    descriptionEn: 'Advanced Practice Model 12 with no-solution systems, complex numbers i, and standard deviation.',
    questions: SAT_MODEL_12_QUESTIONS,
    totalQuestions: SAT_MODEL_12_QUESTIONS.length,
    badgeAr: 'نموذج رسمى 12',
    badgeEn: 'Model 12'
  },
  {
    id: 'all-bank',
    subject: 'math',
    titleAr: 'بنك أسئلة السات الشامل (120+ سؤالاً)',
    titleEn: 'Comprehensive SAT Question Bank (120+ Qs)',
    descriptionAr: 'تمارين مكثفة مقسمة حسب المحاور الأربعة للسات (الجبر، الرياضيات المتقدمة، البيانات، الهندسة).',
    descriptionEn: 'Intensive domain-focused practice bank covering Algebra, Advanced Math, Data, and Geometry.',
    questions: ALL_QUESTIONS,
    totalQuestions: ALL_QUESTIONS.length,
    badgeAr: 'بنك شامل',
    badgeEn: 'All Qs Bank'
  }
];

export const SAT_RW_EXAM_MODELS: SatExamModel[] = [
  {
    id: 'rw-model-1',
    subject: 'reading-writing',
    titleAr: 'النموذج 1 - Reading & Writing',
    titleEn: 'Model 1 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 1 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 1 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_1_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_1_QUESTIONS.length,
    badgeAr: 'نموذج 1',
    badgeEn: 'Model 1'
  },
  {
    id: 'rw-model-2',
    subject: 'reading-writing',
    titleAr: 'النموذج 2 - Reading & Writing',
    titleEn: 'Model 2 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 2 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 2 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_2_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_2_QUESTIONS.length,
    badgeAr: 'نموذج 2',
    badgeEn: 'Model 2'
  },
  {
    id: 'rw-model-3',
    subject: 'reading-writing',
    titleAr: 'النموذج 3 - Reading & Writing',
    titleEn: 'Model 3 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 3 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 3 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_3_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_3_QUESTIONS.length,
    badgeAr: 'نموذج 3',
    badgeEn: 'Model 3'
  },
  {
    id: 'rw-model-4',
    subject: 'reading-writing',
    titleAr: 'النموذج 4 - Reading & Writing',
    titleEn: 'Model 4 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 4 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 4 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_4_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_4_QUESTIONS.length,
    badgeAr: 'نموذج 4',
    badgeEn: 'Model 4'
  },
  {
    id: 'rw-model-5',
    subject: 'reading-writing',
    titleAr: 'النموذج 5 - Reading & Writing',
    titleEn: 'Model 5 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 5 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 5 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_5_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_5_QUESTIONS.length,
    badgeAr: 'نموذج 5',
    badgeEn: 'Model 5'
  },
  {
    id: 'rw-model-6',
    subject: 'reading-writing',
    titleAr: 'النموذج 6 - Reading & Writing',
    titleEn: 'Model 6 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 6 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 6 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_6_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_6_QUESTIONS.length,
    badgeAr: 'نموذج 6',
    badgeEn: 'Model 6'
  },
  {
    id: 'rw-model-7',
    subject: 'reading-writing',
    titleAr: 'النموذج 7 - Reading & Writing',
    titleEn: 'Model 7 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 7 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 7 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_7_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_7_QUESTIONS.length,
    badgeAr: 'نموذج 7',
    badgeEn: 'Model 7'
  },
  {
    id: 'rw-model-8',
    subject: 'reading-writing',
    titleAr: 'النموذج 8 - Reading & Writing',
    titleEn: 'Model 8 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 8 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 8 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_8_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_8_QUESTIONS.length,
    badgeAr: 'نموذج 8',
    badgeEn: 'Model 8'
  },
  {
    id: 'rw-model-9',
    subject: 'reading-writing',
    titleAr: 'النموذج 9 - Reading & Writing',
    titleEn: 'Model 9 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 9 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 9 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_9_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_9_QUESTIONS.length,
    badgeAr: 'نموذج 9',
    badgeEn: 'Model 9'
  },
  {
    id: 'rw-model-10',
    subject: 'reading-writing',
    titleAr: 'النموذج 10 - Reading & Writing',
    titleEn: 'Model 10 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 10 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 10 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_10_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_10_QUESTIONS.length,
    badgeAr: 'نموذج 10',
    badgeEn: 'Model 10'
  },
  {
    id: 'rw-model-11',
    subject: 'reading-writing',
    titleAr: 'النموذج 11 - Reading & Writing',
    titleEn: 'Model 11 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 11 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 11 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_11_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_11_QUESTIONS.length,
    badgeAr: 'نموذج 11',
    badgeEn: 'Model 11'
  },
  {
    id: 'rw-model-12',
    subject: 'reading-writing',
    titleAr: 'النموذج 12 - Reading & Writing',
    titleEn: 'Model 12 - SAT Reading & Writing',
    descriptionAr: 'نموذج اختبار القراءة والكتابة رقم 12 (20 سؤالاً | 5 أقسام رئيسية).',
    descriptionEn: 'SAT Reading & Writing Exam Model 12 (20 questions | 5 core domains).',
    questions: SAT_RW_MODEL_12_QUESTIONS,
    totalQuestions: SAT_RW_MODEL_12_QUESTIONS.length,
    badgeAr: 'نموذج 12',
    badgeEn: 'Model 12'
  },
  {
    id: 'rw-psat-model-1',
    subject: 'reading-writing',
    titleAr: 'نموذج PSAT - Reading & Writing',
    titleEn: 'PSAT Model 1 - Reading & Writing',
    descriptionAr: 'نموذج اختبار PSAT الخاص بمستوى الصف التاسع والعاشر لقسم القراءة والكتابة (20 سؤالاً).',
    descriptionEn: 'PSAT 8/9 & NMSQT Practice Model for Reading & Writing (20 questions).',
    questions: SAT_RW_PSAT_MODEL_1_QUESTIONS,
    totalQuestions: SAT_RW_PSAT_MODEL_1_QUESTIONS.length,
    badgeAr: 'نموذج PSAT',
    badgeEn: 'PSAT Model'
  }
];

export const SAT_EXAM_MODELS: SatExamModel[] = [
  ...SAT_MATH_EXAM_MODELS,
  ...SAT_RW_EXAM_MODELS
];

export function getSatModelById(id: string): SatExamModel {
  const found = SAT_EXAM_MODELS.find(m => m.id === id);
  return found || SAT_MATH_EXAM_MODELS[0];
}
