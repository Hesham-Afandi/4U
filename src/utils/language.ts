export const getEnglishSubjectName = (subjectName: string, subjectId?: string): string => {
  if (!subjectName) return '';
  const id = subjectId?.toLowerCase() || '';
  if (id.includes('math') || subjectName.includes('رياضيات')) return 'Mathematics';
  if (id.includes('phy') || subjectName.includes('فيزياء')) return 'Physics';
  if (id.includes('chem') || subjectName.includes('كيمياء')) return 'Chemistry';
  if (id.includes('bio') || subjectName.includes('أحياء') || subjectName.includes('احياء')) return 'Biology';
  if (id.includes('comp') || subjectName.includes('حاسوب')) return 'Computer Science';
  if (id.includes('eng') || subjectName.includes('إنجليزية') || subjectName.includes('انجليزية')) return 'English';
  if (id.includes('arb') || subjectName.includes('عربية')) return 'Arabic';
  if (id.includes('islam') || subjectName.includes('إسلامية')) return 'Islamic Studies';
  if (id.includes('social') || subjectName.includes('اجتماعيات')) return 'Social Studies';
  return subjectName;
};

export const getEnglishGradeName = (gradeName: string, gradeId?: number): string => {
  if (!gradeName) return '';
  if (gradeId) return `Grade ${gradeId}`;
  if (gradeName.includes('تاسع') || gradeName.includes('9')) return 'Grade 9';
  if (gradeName.includes('عاشر') || gradeName.includes('10')) return 'Grade 10';
  if (gradeName.includes('حادي') || gradeName.includes('11')) return 'Grade 11';
  if (gradeName.includes('ثاني') || gradeName.includes('12')) return 'Grade 12';
  return gradeName;
};

export const getEnglishTermName = (termName: string, termId?: number): string => {
  if (termId) return `Term ${termId}`;
  if (termName.includes('أول') || termName.includes('1')) return 'Term 1';
  if (termName.includes('ثاني') || termName.includes('2')) return 'Term 2';
  if (termName.includes('ثالث') || termName.includes('3')) return 'Term 3';
  return termName;
};

export const getEnglishStreamName = (streamName: string, streamId?: string): string => {
  if (streamId === 'advanced' || streamName.includes('متقدم')) return 'Advanced Stream';
  if (streamId === 'general' || streamName.includes('عام')) return 'General Stream';
  return streamName;
};
