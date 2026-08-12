import React, { useState, useMemo, useEffect } from 'react';
import { 
  IgBoardId, 
  IgLevelId, 
  IgQuestion 
} from '../ig/types';
import { 
  IG_BOARDS, 
  IG_CAMBRIDGE_SUBJECTS, 
  IG_EDEXCEL_SUBJECTS,
  IG_MATHS_QUESTIONS 
} from '../ig/data/igData';
import { mistakesService } from '../services/mistakes/mistakesService';
import { QuestionItem, QuestionOption } from '../eot/types';
import { 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Search, 
  Filter, 
  Clock, 
  Sparkles, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  Bookmark,
  AlertCircle,
  Calculator,
  Layers,
  GraduationCap,
  ExternalLink,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';

interface IgViewProps {
  onSwitchToCurriculum?: () => void;
  onSwitchToEot?: () => void;
  onSwitchToSat?: () => void;
  onOpenMistakesModal?: () => void;
  language?: 'ar' | 'en';
}

export interface EmbeddedExamLink {
  board?: string;
  year: string;
  session: string;
  sessionNameAr: string;
  sessionNameEn: string;
  titleAr: string;
  titleEn: string;
  url: string;
}

export const EMBEDDED_EXAM_LINKS: Record<string, Record<string, Record<string, EmbeddedExamLink>>> = {
  'edexcel': {
    '2021': {
      'jun': {
        year: '2021',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2021)',
        sessionNameEn: 'June 2021',
        titleAr: 'امتحانات Pearson Edexcel June 2021',
        titleEn: 'Pearson Edexcel June 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Ju21/'
      },
      'jan': {
        year: '2021',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2021)',
        sessionNameEn: 'January 2021',
        titleAr: 'امتحانات Pearson Edexcel January 2021',
        titleEn: 'Pearson Edexcel January 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan21/'
      }
    },
    '2020': {
      'oct': {
        year: '2020',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2020)',
        sessionNameEn: 'October 2020',
        titleAr: 'امتحانات Pearson Edexcel October 2020',
        titleEn: 'Pearson Edexcel October 2020',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Oct20/'
      },
      'jan': {
        year: '2020',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2020)',
        sessionNameEn: 'January 2020',
        titleAr: 'امتحانات Pearson Edexcel January 2020',
        titleEn: 'Pearson Edexcel January 2020',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan20/'
      }
    },
    '2019': {
      'jun': {
        year: '2019',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2019)',
        sessionNameEn: 'June 2019',
        titleAr: 'امتحانات Pearson Edexcel June 2019',
        titleEn: 'Pearson Edexcel June 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun19/'
      },
      'jan': {
        year: '2019',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2019)',
        sessionNameEn: 'January 2019',
        titleAr: 'امتحانات Pearson Edexcel January 2019',
        titleEn: 'Pearson Edexcel January 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan19/'
      }
    },
    '2018': {
      'jun': {
        year: '2018',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2018)',
        sessionNameEn: 'June 2018',
        titleAr: 'امتحانات Pearson Edexcel June 2018',
        titleEn: 'Pearson Edexcel June 2018',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun18/'
      },
      'jan': {
        year: '2018',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2018)',
        sessionNameEn: 'January 2018',
        titleAr: 'امتحانات Pearson Edexcel January 2018',
        titleEn: 'Pearson Edexcel January 2018',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan18/'
      }
    },
    '2017': {
      'jun': {
        year: '2017',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2017)',
        sessionNameEn: 'June 2017',
        titleAr: 'امتحانات Pearson Edexcel June 2017',
        titleEn: 'Pearson Edexcel June 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun17/'
      },
      'jan': {
        year: '2017',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2017)',
        sessionNameEn: 'January 2017',
        titleAr: 'امتحانات Pearson Edexcel January 2017',
        titleEn: 'Pearson Edexcel January 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan17/'
      }
    },
    '2016': {
      'jun': {
        year: '2016',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2016)',
        sessionNameEn: 'June 2016',
        titleAr: 'امتحانات Pearson Edexcel June 2016',
        titleEn: 'Pearson Edexcel June 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun16/'
      },
      'jan': {
        year: '2016',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2016)',
        sessionNameEn: 'January 2016',
        titleAr: 'امتحانات Pearson Edexcel January 2016',
        titleEn: 'Pearson Edexcel January 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan16/'
      }
    },
    '2015': {
      'jun': {
        year: '2015',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2015)',
        sessionNameEn: 'June 2015',
        titleAr: 'امتحانات Pearson Edexcel June 2015',
        titleEn: 'Pearson Edexcel June 2015',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun15/'
      },
      'jan': {
        year: '2015',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2015)',
        sessionNameEn: 'January 2015',
        titleAr: 'امتحانات Pearson Edexcel January 2015',
        titleEn: 'Pearson Edexcel January 2015',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan15/'
      }
    },
    '2014': {
      'jun': {
        year: '2014',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2014)',
        sessionNameEn: 'June 2014',
        titleAr: 'امتحانات Pearson Edexcel June 2014',
        titleEn: 'Pearson Edexcel June 2014',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun14/'
      },
      'jan': {
        year: '2014',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2014)',
        sessionNameEn: 'January 2014',
        titleAr: 'امتحانات Pearson Edexcel January 2014',
        titleEn: 'Pearson Edexcel January 2014',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan14/'
      }
    },
    '2013': {
      'jun': {
        year: '2013',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2013)',
        sessionNameEn: 'June 2013',
        titleAr: 'امتحانات Pearson Edexcel June 2013',
        titleEn: 'Pearson Edexcel June 2013',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun13/'
      },
      'jan': {
        year: '2013',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2013)',
        sessionNameEn: 'January 2013',
        titleAr: 'امتحانات Pearson Edexcel January 2013',
        titleEn: 'Pearson Edexcel January 2013',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan13/'
      }
    },
    '2012': {
      'jun': {
        year: '2012',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2012)',
        sessionNameEn: 'June 2012',
        titleAr: 'امتحانات Pearson Edexcel June 2012',
        titleEn: 'Pearson Edexcel June 2012',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun12/'
      },
      'jan': {
        year: '2012',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2012)',
        sessionNameEn: 'January 2012',
        titleAr: 'امتحانات Pearson Edexcel January 2012',
        titleEn: 'Pearson Edexcel January 2012',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jan12/'
      }
    },
    '2011': {
      'jun': {
        year: '2011',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2011)',
        sessionNameEn: 'June 2011',
        titleAr: 'امتحانات Pearson Edexcel June 2011',
        titleEn: 'Pearson Edexcel June 2011',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-Jun11/'
      }
    }
  },
  'edexcel_maths_b': {
    '2021': {
      'jun': {
        year: '2021',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2021)',
        sessionNameEn: 'June 2021',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2021',
        titleEn: 'Pearson Edexcel Math B - June 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun21/'
      },
      'jan': {
        year: '2021',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2021)',
        sessionNameEn: 'January 2021',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2021',
        titleEn: 'Pearson Edexcel Math B - January 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan21/'
      }
    },
    '2020': {
      'oct': {
        year: '2020',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2020)',
        sessionNameEn: 'October 2020',
        titleAr: 'امتحانات Pearson Edexcel Math B - October 2020',
        titleEn: 'Pearson Edexcel Math B - October 2020',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Oct20/'
      },
      'jan': {
        year: '2020',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2020)',
        sessionNameEn: 'January 2020',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2020',
        titleEn: 'Pearson Edexcel Math B - January 2020',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan20/'
      }
    },
    '2019': {
      'jun': {
        year: '2019',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2019)',
        sessionNameEn: 'June 2019',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2019',
        titleEn: 'Pearson Edexcel Math B - June 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun19/'
      },
      'jan': {
        year: '2019',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2019)',
        sessionNameEn: 'January 2019',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2019',
        titleEn: 'Pearson Edexcel Math B - January 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan19/'
      }
    },
    '2018': {
      'jun': {
        year: '2018',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2018)',
        sessionNameEn: 'June 2018',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2018',
        titleEn: 'Pearson Edexcel Math B - June 2018',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun18/'
      },
      'jan': {
        year: '2018',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2018)',
        sessionNameEn: 'January 2018',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2018',
        titleEn: 'Pearson Edexcel Math B - January 2018',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan18/'
      }
    },
    '2017': {
      'jun': {
        year: '2017',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2017)',
        sessionNameEn: 'June 2017',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2017',
        titleEn: 'Pearson Edexcel Math B - June 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun17/'
      },
      'jan': {
        year: '2017',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2017)',
        sessionNameEn: 'January 2017',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2017',
        titleEn: 'Pearson Edexcel Math B - January 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan17/'
      }
    },
    '2016': {
      'jun': {
        year: '2016',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2016)',
        sessionNameEn: 'June 2016',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2016',
        titleEn: 'Pearson Edexcel Math B - June 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun16/'
      },
      'jan': {
        year: '2016',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2016)',
        sessionNameEn: 'January 2016',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2016',
        titleEn: 'Pearson Edexcel Math B - January 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan16/'
      }
    },
    '2015': {
      'jun': {
        year: '2015',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2015)',
        sessionNameEn: 'June 2015',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2015',
        titleEn: 'Pearson Edexcel Math B - June 2015',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun15/'
      },
      'jan': {
        year: '2015',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2015)',
        sessionNameEn: 'January 2015',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2015',
        titleEn: 'Pearson Edexcel Math B - January 2015',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan15/'
      }
    },
    '2014': {
      'jun': {
        year: '2014',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2014)',
        sessionNameEn: 'June 2014',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2014',
        titleEn: 'Pearson Edexcel Math B - June 2014',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun14/'
      },
      'jan': {
        year: '2014',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2014)',
        sessionNameEn: 'January 2014',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2014',
        titleEn: 'Pearson Edexcel Math B - January 2014',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan14/'
      }
    },
    '2013': {
      'jun': {
        year: '2013',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2013)',
        sessionNameEn: 'June 2013',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2013',
        titleEn: 'Pearson Edexcel Math B - June 2013',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun13/'
      },
      'jan': {
        year: '2013',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2013)',
        sessionNameEn: 'January 2013',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2013',
        titleEn: 'Pearson Edexcel Math B - January 2013',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan13/'
      }
    },
    '2012': {
      'jun': {
        year: '2012',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2012)',
        sessionNameEn: 'June 2012',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2012',
        titleEn: 'Pearson Edexcel Math B - June 2012',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun12/'
      },
      'jan': {
        year: '2012',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2012)',
        sessionNameEn: 'January 2012',
        titleAr: 'امتحانات Pearson Edexcel Math B - January 2012',
        titleEn: 'Pearson Edexcel Math B - January 2012',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jan12/'
      }
    },
    '2011': {
      'jun': {
        year: '2011',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2011)',
        sessionNameEn: 'June 2011',
        titleAr: 'امتحانات Pearson Edexcel Math B - June 2011',
        titleEn: 'Pearson Edexcel Math B - June 2011',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-MathB-Jun11/'
      }
    }
  },
  'edexcel_as_ial': {
    '2021': {
      'oct_new': {
        year: '2021',
        session: 'oct_new',
        sessionNameAr: 'دورة أكتوبر - جديد (October 2021 New)',
        sessionNameEn: 'October 2021 (New)',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - October 2021 (New)',
        titleEn: 'Pearson Edexcel AS / IAL - October 2021 (New)',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Oct21-new-/'
      },
      'oct': {
        year: '2021',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2021)',
        sessionNameEn: 'October 2021',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - October 2021',
        titleEn: 'Pearson Edexcel AS / IAL - October 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Oct21/'
      },
      'jun': {
        year: '2021',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2021)',
        sessionNameEn: 'June 2021',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2021',
        titleEn: 'Pearson Edexcel AS / IAL - June 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun21/'
      },
      'jan': {
        year: '2021',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2021)',
        sessionNameEn: 'January 2021',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2021',
        titleEn: 'Pearson Edexcel AS / IAL - January 2021',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan21/'
      }
    },
    '2020': {
      'oct': {
        year: '2020',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2020)',
        sessionNameEn: 'October 2020',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - October 2020',
        titleEn: 'Pearson Edexcel AS / IAL - October 2020',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Oct20/'
      },
      'jan': {
        year: '2020',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2020)',
        sessionNameEn: 'January 2020',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2020',
        titleEn: 'Pearson Edexcel AS / IAL - January 2020',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan20/'
      }
    },
    '2019': {
      'oct': {
        year: '2019',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2019)',
        sessionNameEn: 'October 2019',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - October 2019',
        titleEn: 'Pearson Edexcel AS / IAL - October 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Oct19/'
      },
      'jun': {
        year: '2019',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2019)',
        sessionNameEn: 'June 2019',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2019',
        titleEn: 'Pearson Edexcel AS / IAL - June 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun19/'
      },
      'jan': {
        year: '2019',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2019)',
        sessionNameEn: 'January 2019',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2019',
        titleEn: 'Pearson Edexcel AS / IAL - January 2019',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan19/'
      }
    },
    '2018': {
      'jun': {
        year: '2018',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2018)',
        sessionNameEn: 'June 2018',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2018',
        titleEn: 'Pearson Edexcel AS / IAL - June 2018',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun18/'
      },
      'jan': {
        year: '2018',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2018)',
        sessionNameEn: 'January 2018',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2018',
        titleEn: 'Pearson Edexcel AS / IAL - January 2018',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan18/'
      }
    },
    '2017': {
      'oct': {
        year: '2017',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2017)',
        sessionNameEn: 'October 2017',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - October 2017',
        titleEn: 'Pearson Edexcel AS / IAL - October 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Oct17/'
      },
      'jun': {
        year: '2017',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2017)',
        sessionNameEn: 'June 2017',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2017',
        titleEn: 'Pearson Edexcel AS / IAL - June 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun17/'
      },
      'jan': {
        year: '2017',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2017)',
        sessionNameEn: 'January 2017',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2017',
        titleEn: 'Pearson Edexcel AS / IAL - January 2017',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan17/'
      }
    },
    '2016': {
      'oct': {
        year: '2016',
        session: 'oct',
        sessionNameAr: 'دورة أكتوبر (October 2016)',
        sessionNameEn: 'October 2016',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - October 2016',
        titleEn: 'Pearson Edexcel AS / IAL - October 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Oct16/'
      },
      'jun': {
        year: '2016',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2016)',
        sessionNameEn: 'June 2016',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2016',
        titleEn: 'Pearson Edexcel AS / IAL - June 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun16/'
      },
      'jan': {
        year: '2016',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2016)',
        sessionNameEn: 'January 2016',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2016',
        titleEn: 'Pearson Edexcel AS / IAL - January 2016',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan16/'
      }
    },
    '2015': {
      'jun': {
        year: '2015',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2015)',
        sessionNameEn: 'June 2015',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2015',
        titleEn: 'Pearson Edexcel AS / IAL - June 2015',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun15/'
      },
      'jan': {
        year: '2015',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2015)',
        sessionNameEn: 'January 2015',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2015',
        titleEn: 'Pearson Edexcel AS / IAL - January 2015',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan15/'
      }
    },
    '2014': {
      'jun': {
        year: '2014',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2014)',
        sessionNameEn: 'June 2014',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2014',
        titleEn: 'Pearson Edexcel AS / IAL - June 2014',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun14/'
      },
      'jan': {
        year: '2014',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2014)',
        sessionNameEn: 'January 2014',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2014',
        titleEn: 'Pearson Edexcel AS / IAL - January 2014',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan14/'
      }
    },
    '2013': {
      'jun': {
        year: '2013',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2013)',
        sessionNameEn: 'June 2013',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2013',
        titleEn: 'Pearson Edexcel AS / IAL - June 2013',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun13/'
      },
      'jan': {
        year: '2013',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2013)',
        sessionNameEn: 'January 2013',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2013',
        titleEn: 'Pearson Edexcel AS / IAL - January 2013',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan13/'
      }
    },
    '2012': {
      'jun': {
        year: '2012',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2012)',
        sessionNameEn: 'June 2012',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2012',
        titleEn: 'Pearson Edexcel AS / IAL - June 2012',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun12/'
      },
      'jan': {
        year: '2012',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2012)',
        sessionNameEn: 'January 2012',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2012',
        titleEn: 'Pearson Edexcel AS / IAL - January 2012',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan12/'
      }
    },
    '2011': {
      'jun': {
        year: '2011',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2011)',
        sessionNameEn: 'June 2011',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2011',
        titleEn: 'Pearson Edexcel AS / IAL - June 2011',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun11/'
      },
      'jan': {
        year: '2011',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2011)',
        sessionNameEn: 'January 2011',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2011',
        titleEn: 'Pearson Edexcel AS / IAL - January 2011',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan11/'
      }
    },
    '2010': {
      'jun': {
        year: '2010',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2010)',
        sessionNameEn: 'June 2010',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2010',
        titleEn: 'Pearson Edexcel AS / IAL - June 2010',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun10/'
      },
      'jan': {
        year: '2010',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2010)',
        sessionNameEn: 'January 2010',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2010',
        titleEn: 'Pearson Edexcel AS / IAL - January 2010',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan10/'
      }
    },
    '2009': {
      'jun': {
        year: '2009',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2009)',
        sessionNameEn: 'June 2009',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2009',
        titleEn: 'Pearson Edexcel AS / IAL - June 2009',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun09/'
      },
      'jan': {
        year: '2009',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2009)',
        sessionNameEn: 'January 2009',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2009',
        titleEn: 'Pearson Edexcel AS / IAL - January 2009',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan09/'
      }
    },
    '2008': {
      'jun': {
        year: '2008',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2008)',
        sessionNameEn: 'June 2008',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2008',
        titleEn: 'Pearson Edexcel AS / IAL - June 2008',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun08/'
      },
      'jan': {
        year: '2008',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2008)',
        sessionNameEn: 'January 2008',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2008',
        titleEn: 'Pearson Edexcel AS / IAL - January 2008',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan08/'
      }
    },
    '2007': {
      'jun': {
        year: '2007',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2007)',
        sessionNameEn: 'June 2007',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2007',
        titleEn: 'Pearson Edexcel AS / IAL - June 2007',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun07/'
      },
      'jan': {
        year: '2007',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2007)',
        sessionNameEn: 'January 2007',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2007',
        titleEn: 'Pearson Edexcel AS / IAL - January 2007',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan07/'
      }
    },
    '2006': {
      'jun': {
        year: '2006',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2006)',
        sessionNameEn: 'June 2006',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2006',
        titleEn: 'Pearson Edexcel AS / IAL - June 2006',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun06/'
      },
      'jan': {
        year: '2006',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2006)',
        sessionNameEn: 'January 2006',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2006',
        titleEn: 'Pearson Edexcel AS / IAL - January 2006',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan06/'
      }
    },
    '2005': {
      'jun': {
        year: '2005',
        session: 'jun',
        sessionNameAr: 'دورة يونيو (June 2005)',
        sessionNameEn: 'June 2005',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - June 2005',
        titleEn: 'Pearson Edexcel AS / IAL - June 2005',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jun05/'
      },
      'jan': {
        year: '2005',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2005)',
        sessionNameEn: 'January 2005',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2005',
        titleEn: 'Pearson Edexcel AS / IAL - January 2005',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan05/'
      }
    },
    '2003': {
      'jan': {
        year: '2003',
        session: 'jan',
        sessionNameAr: 'دورة يناير (January 2003)',
        sessionNameEn: 'January 2003',
        titleAr: 'امتحانات Pearson Edexcel AS / IAL - January 2003',
        titleEn: 'Pearson Edexcel AS / IAL - January 2003',
        url: 'https://hesham-afandi.github.io/Ig-Edexcel-ASIAL-Jan03/'
      }
    }
  },
  'cambridge': {
    '2021': {
      'mj': {
        board: 'cambridge',
        year: '2021',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2021)',
        sessionNameEn: 'May/June 2021',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2021',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2021',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ21/'
      },
      'on': {
        board: 'cambridge',
        year: '2021',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2021)',
        sessionNameEn: 'Oct/Nov 2021',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2021',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2021',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON21/'
      }
    },
    '2020': {
      'mj': {
        board: 'cambridge',
        year: '2020',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2020)',
        sessionNameEn: 'May/June 2020',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2020',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2020',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ20/'
      },
      'on': {
        board: 'cambridge',
        year: '2020',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2020)',
        sessionNameEn: 'Oct/Nov 2020',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2020',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2020',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON20/'
      }
    },
    '2019': {
      'mj': {
        board: 'cambridge',
        year: '2019',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2019)',
        sessionNameEn: 'May/June 2019',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2019',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2019',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ19/'
      },
      'on': {
        board: 'cambridge',
        year: '2019',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2019)',
        sessionNameEn: 'Oct/Nov 2019',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2019',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2019',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON19/'
      }
    },
    '2018': {
      'mj': {
        board: 'cambridge',
        year: '2018',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2018)',
        sessionNameEn: 'May/June 2018',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2018',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2018',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ18/'
      },
      'on': {
        board: 'cambridge',
        year: '2018',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2018)',
        sessionNameEn: 'Oct/Nov 2018',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2018',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2018',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON18/'
      }
    },
    '2017': {
      'mj': {
        board: 'cambridge',
        year: '2017',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2017)',
        sessionNameEn: 'May/June 2017',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2017',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2017',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ17/'
      },
      'on': {
        board: 'cambridge',
        year: '2017',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2017)',
        sessionNameEn: 'Oct/Nov 2017',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2017',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2017',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON17/'
      }
    },
    '2016': {
      'mj': {
        board: 'cambridge',
        year: '2016',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2016)',
        sessionNameEn: 'May/June 2016',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2016',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2016',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ16/'
      },
      'on': {
        board: 'cambridge',
        year: '2016',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2016)',
        sessionNameEn: 'Oct/Nov 2016',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2016',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2016',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON16/'
      }
    },
    '2015': {
      'mj': {
        board: 'cambridge',
        year: '2015',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2015)',
        sessionNameEn: 'May/June 2015',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2015',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2015',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ15/'
      },
      'on': {
        board: 'cambridge',
        year: '2015',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2015)',
        sessionNameEn: 'Oct/Nov 2015',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2015',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2015',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON15/'
      }
    },
    '2014': {
      'mj': {
        board: 'cambridge',
        year: '2014',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2014)',
        sessionNameEn: 'May/June 2014',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2014',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2014',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ14/'
      },
      'on': {
        board: 'cambridge',
        year: '2014',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2014)',
        sessionNameEn: 'Oct/Nov 2014',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2014',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2014',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON14/'
      }
    },
    '2013': {
      'mj': {
        board: 'cambridge',
        year: '2013',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2013)',
        sessionNameEn: 'May/June 2013',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2013',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2013',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ13/'
      },
      'on': {
        board: 'cambridge',
        year: '2013',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2013)',
        sessionNameEn: 'Oct/Nov 2013',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2013',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2013',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON13/'
      }
    },
    '2012': {
      'mj': {
        board: 'cambridge',
        year: '2012',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2012)',
        sessionNameEn: 'May/June 2012',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2012',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2012',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ12/'
      },
      'on': {
        board: 'cambridge',
        year: '2012',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2012)',
        sessionNameEn: 'Oct/Nov 2012',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2012',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2012',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON12/'
      }
    },
    '2011': {
      'mj': {
        board: 'cambridge',
        year: '2011',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2011)',
        sessionNameEn: 'May/June 2011',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2011',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2011',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ11/'
      },
      'on': {
        board: 'cambridge',
        year: '2011',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2011)',
        sessionNameEn: 'Oct/Nov 2011',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2011',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2011',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON11/'
      }
    },
    '2010': {
      'mj': {
        board: 'cambridge',
        year: '2010',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2010)',
        sessionNameEn: 'May/June 2010',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2010',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2010',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ10/'
      },
      'on': {
        board: 'cambridge',
        year: '2010',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2010)',
        sessionNameEn: 'Oct/Nov 2010',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2010',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2010',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON10/'
      }
    },
    '2009': {
      'mj': {
        board: 'cambridge',
        year: '2009',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2009)',
        sessionNameEn: 'May/June 2009',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2009',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2009',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ09/'
      },
      'on': {
        board: 'cambridge',
        year: '2009',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2009)',
        sessionNameEn: 'Oct/Nov 2009',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2009',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2009',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON09/'
      }
    },
    '2008': {
      'mj': {
        board: 'cambridge',
        year: '2008',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2008)',
        sessionNameEn: 'May/June 2008',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2008',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2008',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ08/'
      },
      'on': {
        board: 'cambridge',
        year: '2008',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2008)',
        sessionNameEn: 'Oct/Nov 2008',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2008',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2008',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON08/'
      }
    },
    '2007': {
      'mj': {
        board: 'cambridge',
        year: '2007',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2007)',
        sessionNameEn: 'May/June 2007',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2007',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2007',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ07/'
      },
      'on': {
        board: 'cambridge',
        year: '2007',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2007)',
        sessionNameEn: 'Oct/Nov 2007',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2007',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2007',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON07/'
      }
    },
    '2006': {
      'mj': {
        board: 'cambridge',
        year: '2006',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2006)',
        sessionNameEn: 'May/June 2006',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2006',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2006',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ06/'
      },
      'on': {
        board: 'cambridge',
        year: '2006',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2006)',
        sessionNameEn: 'Oct/Nov 2006',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2006',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2006',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON06/'
      }
    },
    '2005': {
      'mj': {
        board: 'cambridge',
        year: '2005',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2005)',
        sessionNameEn: 'May/June 2005',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2005',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2005',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ05/'
      },
      'on': {
        board: 'cambridge',
        year: '2005',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2005)',
        sessionNameEn: 'Oct/Nov 2005',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2005',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2005',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON05/'
      }
    },
    '2004': {
      'mj': {
        board: 'cambridge',
        year: '2004',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2004)',
        sessionNameEn: 'May/June 2004',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2004',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2004',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ04/'
      },
      'on': {
        board: 'cambridge',
        year: '2004',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2004)',
        sessionNameEn: 'Oct/Nov 2004',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2004',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2004',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON04/'
      }
    },
    '2003': {
      'mj': {
        board: 'cambridge',
        year: '2003',
        session: 'mj',
        sessionNameAr: 'دورة مايو/يونيو (May/June 2003)',
        sessionNameEn: 'May/June 2003',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics May/June 2003',
        titleEn: 'Cambridge IGCSE Mathematics May/June 2003',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-MJ03/'
      },
      'on': {
        board: 'cambridge',
        year: '2003',
        session: 'on',
        sessionNameAr: 'دورة أكتوبر/نوفمبر (Oct/Nov 2003)',
        sessionNameEn: 'Oct/Nov 2003',
        titleAr: 'امتحانات Cambridge IGCSE Mathematics Oct/Nov 2003',
        titleEn: 'Cambridge IGCSE Mathematics Oct/Nov 2003',
        url: 'https://hesham-afandi.github.io/Ig-Cambridge-ON03/'
      }
    }
  }
};

export const IgView: React.FC<IgViewProps> = ({
  onSwitchToCurriculum,
  onSwitchToEot,
  onSwitchToSat,
  onOpenMistakesModal,
  language = 'ar'
}) => {
  // Active Board & Level
  const [selectedBoardId, setSelectedBoardId] = useState<IgBoardId>('cambridge');
  const [selectedLevelId, setSelectedLevelId] = useState<IgLevelId>('o_level_igcse');
  
  // View Mode: 'main' hub
  const [viewMode, setViewMode] = useState<'main'>('main');

  // Fullscreen Iframe State
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // Keyboard shortcut listener to exit fullscreen on ESC press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullScreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active Subject
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('maths');

  // Active Tab View mode
  const [activeTab, setActiveTab] = useState<'practice' | 'exam' | 'papers' | 'formulas'>('practice');

  // Filter States
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSession, setSelectedSession] = useState<string>('jun');
  const [selectedPaper, setSelectedPaper] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Get current board embedded links
  const currentBoardEmbeddedLinks: Record<string, Record<string, EmbeddedExamLink>> = useMemo(() => {
    if (selectedBoardId === 'edexcel') {
      if (selectedLevelId === 'as_ial') {
        return EMBEDDED_EXAM_LINKS['edexcel_as_ial'] || {};
      }
      if (selectedSubjectId === 'maths_b') {
        return EMBEDDED_EXAM_LINKS['edexcel_maths_b'] || {};
      }
      return EMBEDDED_EXAM_LINKS['edexcel'] || {};
    }
    return EMBEDDED_EXAM_LINKS[selectedBoardId] || {};
  }, [selectedBoardId, selectedLevelId, selectedSubjectId]);

  // Keep selectedSession valid whenever selectedYear or selectedBoardId changes
  useEffect(() => {
    if (currentBoardEmbeddedLinks[selectedYear]) {
      const available = Object.keys(currentBoardEmbeddedLinks[selectedYear]);
      if (!available.includes(selectedSession)) {
        setSelectedSession(available[0]);
      }
    }
  }, [selectedYear, selectedBoardId, currentBoardEmbeddedLinks]);

  // Active Embedded Exam Link lookup
  const activeEmbeddedExam = useMemo(() => {
    if (!currentBoardEmbeddedLinks[selectedYear]) return null;
    const yearSessions = currentBoardEmbeddedLinks[selectedYear];
    return yearSessions[selectedSession] || Object.values(yearSessions)[0];
  }, [currentBoardEmbeddedLinks, selectedYear, selectedSession]);

  // Practice Mode State
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [showAnswerFeedback, setShowAnswerFeedback] = useState<Record<string, boolean>>({});
  const [savedToMistakes, setSavedToMistakes] = useState<Record<string, boolean>>({});

  // Exam Mode State
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [examIndex, setExamIndex] = useState<number>(0);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examTimeLeft, setExamTimeLeft] = useState<number>(0);

  // Timer countdown effect for exam
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isExamRunning && examTimeLeft > 0) {
      interval = setInterval(() => {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            setIsExamRunning(false);
            setExamSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamRunning, examTimeLeft]);

  // Active Board Object
  const currentBoard = useMemo(() => {
    return IG_BOARDS.find(b => b.id === selectedBoardId) || IG_BOARDS[0];
  }, [selectedBoardId]);

  // Active Subjects List
  const activeSubjects = useMemo(() => {
    if (selectedBoardId === 'edexcel') {
      if (selectedLevelId === 'as_ial') {
        return IG_EDEXCEL_SUBJECTS.filter(s => s.id !== 'maths_b');
      }
      return IG_EDEXCEL_SUBJECTS;
    }
    return IG_CAMBRIDGE_SUBJECTS;
  }, [selectedBoardId, selectedLevelId]);

  // Ensure active subject is valid when level/board changes
  useEffect(() => {
    if (!activeSubjects.some(s => s.id === selectedSubjectId)) {
      setSelectedSubjectId(activeSubjects[0]?.id || 'maths');
    }
  }, [activeSubjects, selectedSubjectId]);

  // Active Subject Object
  const currentSubject = useMemo(() => {
    return activeSubjects.find(s => s.id === selectedSubjectId) || activeSubjects[0];
  }, [activeSubjects, selectedSubjectId]);

  // Available Years list from 2021 down to 2002
  const yearsList = useMemo(() => {
    const years = Array.from({ length: 2021 - 2002 + 1 }, (_, i) => 2021 - i);
    return years;
  }, []);

  // Dynamic paper options based on selected board
  const availablePaperOptions = useMemo(() => {
    const boardQuestions = IG_MATHS_QUESTIONS.filter(q => q.boardId === selectedBoardId);
    const papers = Array.from(new Set(boardQuestions.map(q => q.paper))).filter(Boolean).sort();
    return papers;
  }, [selectedBoardId]);

  // Filtered Questions Dataset
  const filteredQuestions = useMemo(() => {
    return IG_MATHS_QUESTIONS.filter(q => {
      if (selectedBoardId !== q.boardId) return false;
      if (selectedLevelId !== q.levelId) return false;
      
      if (selectedBoardId === 'edexcel') {
        if (selectedSubjectId === 'maths' || selectedSubjectId === 'maths_a') {
          if (q.subjectId !== 'maths' && q.subjectId !== 'maths_a') return false;
        } else if (selectedSubjectId === 'maths_b') {
          if (q.subjectId !== 'maths_b' && q.subjectId !== 'maths') return false;
        } else if (selectedSubjectId !== q.subjectId) {
          return false;
        }
      } else if (selectedSubjectId !== q.subjectId) {
        return false;
      }
      
      if (selectedYear !== 'all' && q.year !== parseInt(selectedYear)) return false;
      if (selectedPaper !== 'all' && q.paper !== selectedPaper) return false;
      
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchCode = q.code.toLowerCase().includes(query);
        const matchTopicEn = q.topicEn.toLowerCase().includes(query);
        const matchTopicAr = q.topicAr.toLowerCase().includes(query);
        const matchQuestionEn = q.questionEn.toLowerCase().includes(query);
        const matchQuestionAr = q.questionAr?.toLowerCase().includes(query);
        return matchCode || matchTopicEn || matchTopicAr || matchQuestionEn || matchQuestionAr;
      }

      return true;
    });
  }, [selectedBoardId, selectedLevelId, selectedSubjectId, selectedYear, selectedPaper, searchQuery]);

  // Current Question in Practice Mode
  const currentQuestion = filteredQuestions[practiceIndex] || filteredQuestions[0];

  // Save mistake helper
  const saveQuestionToMistakes = (q: IgQuestion, userAns: string) => {
    let optionsList: QuestionOption[] | undefined = undefined;
    if (q.options) {
      optionsList = q.options.map(opt => ({
        id: opt.id,
        text: opt.textAr ? `${opt.textEn} (${opt.textAr})` : opt.textEn
      }));
    }

    const boardName = q.boardId === 'edexcel' ? 'Pearson Edexcel' : 'Cambridge IGCSE';
    const subjName = selectedSubjectId === 'maths_b' ? 'Math B (4MB1)' : (selectedSubjectId === 'maths_a' ? 'Math A (4MA1)' : 'Mathematics');

    const questionItem: QuestionItem = {
      id: `IG-${q.id}`,
      qNumber: q.year,
      title: `${boardName} ${subjName} (${q.code}) - ${q.topicEn}`,
      titleAr: `رياضيات ${boardName} - ${q.topicAr}`,
      learningOutcome: q.topicEn,
      learningOutcomeAr: q.topicAr,
      unit: 1,
      lesson: `${boardName} ${q.paper} (${q.year})`,
      page: 1,
      exerciseRef: q.code,
      type: q.options ? 'mcq' : 'paper',
      questionText: q.questionEn,
      questionTextAr: q.questionAr,
      options: optionsList,
      correctAnswer: q.correctAnswer,
      solutionSteps: q.solutionStepsAr || (q.explanationAr ? [q.explanationAr] : [q.explanationEn || '']),
      finalAnswer: q.correctAnswer
    };

    mistakesService.addMistake(questionItem, userAns, `${boardName} ${subjName}`, 'IGCSE', `${q.year} - ${q.session || 'Exam'}`);
    setSavedToMistakes(prev => ({ ...prev, [q.id]: true }));
    setTimeout(() => {
      setSavedToMistakes(prev => ({ ...prev, [q.id]: false }));
    }, 3000);
  };

  // Handle Answer Selection in Practice Mode
  const handleSelectPracticeAnswer = (q: IgQuestion, ansId: string) => {
    setPracticeAnswers(prev => ({ ...prev, [q.id]: ansId }));
    setShowAnswerFeedback(prev => ({ ...prev, [q.id]: true }));

    // Auto add to mistakes if incorrect
    if (ansId !== q.correctAnswer) {
      saveQuestionToMistakes(q, ansId);
    }
  };

  // Exam Helper Functions
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    const timeMinutes = Math.max(15, filteredQuestions.length * 2);
    setExamIndex(0);
    setExamAnswers({});
    setExamSubmitted(false);
    setIsExamRunning(true);
    setExamTimeLeft(timeMinutes * 60);
  };

  const handleSubmitExam = () => {
    setIsExamRunning(false);
    setExamSubmitted(true);

    // Automatically save all incorrect & unanswered questions to mistakes notebook
    filteredQuestions.forEach(q => {
      const userAns = examAnswers[q.id];
      if (!userAns || userAns !== q.correctAnswer) {
        saveQuestionToMistakes(q, userAns || 'لم يتم الإجابة');
      }
    });
  };

  const handleSelectExamAnswer = (qId: string, ansId: string) => {
    if (!isExamRunning || examSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [qId]: ansId }));
  };

  const examResults = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    filteredQuestions.forEach(q => {
      const userAns = examAnswers[q.id];
      if (!userAns) {
        unanswered++;
      } else if (userAns === q.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });
    const total = filteredQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, wrong, unanswered, total, percentage };
  }, [filteredQuestions, examAnswers]);

  const currentExamQuestion = filteredQuestions[examIndex] || filteredQuestions[0];

  // Notice for subjects/branches without exams yet
  const renderEmptyStateNotice = () => (
    <div className="text-center py-16 px-6 space-y-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/40 dark:to-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 shadow-sm">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
        <Clock className="w-8 h-8 animate-pulse" />
      </div>
      <h3 className="text-xl font-black text-slate-800 dark:text-slate-200">
        {currentSubject.nameAr || currentSubject.nameEn} — قيد التجهيز
      </h3>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-bold">
        امتحانات هذه المادة ستتوفر قريباً إن شاء الله. يمكنك ممارسة امتحانات الرياضيات المتاحة حالياً على المنصة.
      </p>
      <div className="pt-3">
        <button
          onClick={() => {
            if (selectedBoardId === 'edexcel') {
              setSelectedSubjectId('maths');
            } else {
              setSelectedLevelId('o_level_igcse');
              setSelectedSubjectId('maths');
            }
            setSelectedYear('all');
            setSelectedPaper('all');
          }}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg shadow-teal-500/20 transition cursor-pointer inline-flex items-center gap-2"
        >
          <span>← الانتقال إلى امتحانات {selectedBoardId === 'edexcel' ? 'Math A' : 'الرياضيات'} المتاحة</span>
        </button>
      </div>
    </div>
  );

  // Render Grid of Embedded Exam Links (e.g. Edexcel Math B / Math A)
  const renderEmbeddedExamsGrid = () => {
    const availableYears = Object.keys(currentBoardEmbeddedLinks).sort((a, b) => parseInt(b) - parseInt(a));
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 p-6 rounded-3xl text-white border border-teal-500/30 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-black border border-teal-500/30">
                {currentBoard.nameEn} ({selectedLevelId === 'as_ial' ? 'AS / IAL' : selectedLevelId.toUpperCase().replace('_', ' ')}) — {currentSubject.nameAr || currentSubject.nameEn} ({currentSubject.code})
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white">
                اختر السنة والدورة الامتحانية للفتح المباشر 🌐
              </h3>
              <p className="text-xs text-slate-300">
                جميع امتحانات {currentSubject.nameEn} متاحة بشكل تفاعلي ومقسمة حسب السنوات والدورات {availableYears.length > 0 ? `(${availableYears[availableYears.length - 1]} - ${availableYears[0]})` : ''}
              </p>
            </div>
            {availableYears.length > 0 && (
              <button
                onClick={() => {
                  setSelectedYear(availableYears[0]);
                  const firstSession = Object.keys(currentBoardEmbeddedLinks[availableYears[0]])[0];
                  if (firstSession) setSelectedSession(firstSession);
                }}
                className="px-5 py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs md:text-sm shadow-xl transition cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>فتح أحدث دورة امتحانية ({availableYears[0]}) 🚀</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableYears.map(yr => {
            const sessionsObj = currentBoardEmbeddedLinks[yr];
            const sessionsList = Object.values(sessionsObj) as EmbeddedExamLink[];
            return (
              <div key={yr} className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 hover:border-teal-500 transition shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-slate-900 dark:text-white">
                    امتحانات سنة {yr}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                    {sessionsList.length} دورات
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {sessionsList.map(sess => (
                    <button
                      key={sess.session}
                      onClick={() => {
                        setSelectedYear(yr);
                        setSelectedSession(sess.session);
                        setActiveTab('practice');
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-teal-600 hover:text-white text-slate-800 dark:text-slate-200 font-extrabold text-xs transition cursor-pointer border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-sm group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {sess.sessionNameAr}
                      </span>
                      <span className="text-[11px] opacity-70 group-hover:opacity-100">
                        فتح الامتحان التفاعلي ↗
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="fade-in space-y-8 my-6">
      {/* 1. HERO BANNER BAR */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 p-4 md:p-6 text-white shadow-xl border border-teal-500/30">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {language === 'en' ? 'IG Exams' : 'اختبارات IG'}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 justify-center shrink-0">
            {onSwitchToCurriculum && (
              <button
                onClick={onSwitchToCurriculum}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>📚 {language === 'en' ? 'Curriculum' : 'المناهج'}</span>
              </button>
            )}
            {onSwitchToEot && (
              <button
                onClick={onSwitchToEot}
                className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold rounded-xl border border-amber-400/30 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>📜 {language === 'en' ? 'EOT Specs' : 'الهياكل (EOT)'}</span>
              </button>
            )}
            {onSwitchToSat && (
              <button
                onClick={onSwitchToSat}
                className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-bold rounded-xl border border-purple-400/30 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>🎓 {language === 'en' ? 'SAT Exams' : 'السات (SAT)'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. EXAM BOARDS & LEVELS (IMAGE 1 STRUCTURE) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-2">
            <span>Choose your exam board .</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">اختر المنظمة التعليمية والمستوى الدراسي المطلوبة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CAMBRIDGE */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-teal-500/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Cambridge</h3>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  setSelectedBoardId('cambridge');
                  setSelectedLevelId('o_level_igcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'cambridge' && selectedLevelId === 'o_level_igcse'
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/30'
                    : 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>O Level (IGCSE)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('cambridge');
                  setSelectedLevelId('as_a2_level');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'cambridge' && selectedLevelId === 'as_a2_level'
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/30'
                    : 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>AS / A2 Level</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('cambridge');
                  setSelectedLevelId('o_level_gcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'cambridge' && selectedLevelId === 'o_level_gcse'
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/30'
                    : 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>O Level (GCSE)</span>
              </button>
            </div>
          </div>

          {/* EDEXCEL */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-amber-500/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Edexcel</h3>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  setSelectedBoardId('edexcel');
                  setSelectedLevelId('o_level_igcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'edexcel' && selectedLevelId === 'o_level_igcse'
                    ? 'bg-amber-500 text-white ring-4 ring-amber-500/30'
                    : 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>O Level (IGCSE)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('edexcel');
                  setSelectedLevelId('as_ial');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'edexcel' && selectedLevelId === 'as_ial'
                    ? 'bg-amber-500 text-white ring-4 ring-amber-500/30'
                    : 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>AS / IAL</span>
              </button>
            </div>
          </div>

          {/* OXFORD */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg shadow-indigo-600/30">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Oxford</h3>

            <div className="w-full space-y-2.5">
              <button
                onClick={() => {
                  setSelectedBoardId('oxford');
                  setSelectedLevelId('igcse');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'oxford' && selectedLevelId === 'igcse'
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-600/30'
                    : 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>IGCSE</span>
              </button>

              <button
                onClick={() => {
                  setSelectedBoardId('oxford');
                  setSelectedLevelId('as_ial');
                }}
                className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  selectedBoardId === 'oxford' && selectedLevelId === 'as_ial'
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-600/30'
                    : 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>AS / IAL</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUBJECTS GRID (IMAGE 2 STRUCTURE) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>📚</span> المواد الدراسية في قسم <span className="text-teal-600 dark:text-teal-400 font-extrabold">{currentBoard.nameEn} - {selectedLevelId.toUpperCase().replace('_', ' ')}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">اضغط على المادة للانتقال لبنك الأسئلة والاختبارات المقسمة بالسنوات</p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
            {activeSubjects.length} مواد متاحة
          </span>
        </div>

        {/* Subjects 4-column Grid matching Image 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {activeSubjects.map((sub) => {
            const isSelected = sub.id === selectedSubjectId;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`p-4 rounded-2xl border-2 transition text-center cursor-pointer flex flex-col items-center justify-center space-y-1.5 ${
                  isSelected
                    ? 'bg-teal-500/10 border-teal-500 text-teal-800 dark:text-teal-200 shadow-md ring-2 ring-teal-500/20 font-black'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-teal-400 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="text-2xl">{sub.icon}</span>
                <span className={`text-sm font-extrabold underline decoration-amber-500/50 ${isSelected ? 'text-teal-700 dark:text-teal-300' : 'text-amber-900 dark:text-amber-400'}`}>
                  {sub.nameEn}
                </span>
                {sub.status === 'available' ? (
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                    ✅ متاح للتصفح
                  </span>
                ) : (
                  <span className="text-[10px] bg-amber-500/15 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-extrabold leading-tight">
                    قيد التجهيز
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. ACTIVE SUBJECT QUESTIONS & PAST PAPERS (2002 - 2021) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentSubject.icon}</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                {currentSubject.nameEn} ({currentBoard.nameEn} - {selectedLevelId === 'as_ial' ? 'AS / IAL' : 'O Level IGCSE'})
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              بنك الأسئلة والشروحات مرتبة حسب السنوات من 2002 إلى 2021
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>تمرين تفاعلي</span>
            </button>

            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>اختبار موقوت</span>
            </button>

            <button
              onClick={() => setActiveTab('papers')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-teal-600'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>فهرس الامتحانات</span>
            </button>
          </div>
        </div>

        {/* FILTER BAR: SEARCH & YEARS (2002 - 2021) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
            <input
              type="text"
              placeholder="ابحث بالرمز (0580) أو الموضوع أو السؤال..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Year Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">السنة:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              <option value="all">جميع السنوات (2002 - 2021)</option>
              {yearsList.map((y) => {
                const hasEmbedded = Boolean(currentBoardEmbeddedLinks[y.toString()]);
                return (
                  <option key={y} value={y}>
                    امتحانات سنة {y} {hasEmbedded ? '🌐 (تفاعلي)' : ''}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Session / Month Selector (Visible when selected year has embedded links) */}
          {currentBoardEmbeddedLinks[selectedYear] && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">الدورة / الشهر:</span>
              <select
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value)}
                className="w-full p-2 bg-white dark:bg-slate-900 border border-teal-500/50 rounded-xl text-xs font-black text-teal-700 dark:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer shadow-sm"
              >
                {(Object.values(currentBoardEmbeddedLinks[selectedYear]) as EmbeddedExamLink[]).map((sess) => (
                  <option key={sess.session} value={sess.session}>
                    {sess.sessionNameAr}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Paper Type Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">الورقة الامتحانية:</span>
            <select
              value={selectedPaper}
              onChange={(e) => setSelectedPaper(e.target.value)}
              className="w-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              <option value="all">جميع الأوراق الامتحانية</option>
              {availablePaperOptions.map((paper) => (
                <option key={paper} value={paper}>{paper}</option>
              ))}
            </select>
          </div>
        </div>

        {/* EMBEDDED IFRAME OR STANDARD TABS */}
        {activeEmbeddedExam ? (
          <div className={`space-y-4 pt-2 ${isFullScreen ? 'fixed inset-0 z-50 bg-slate-950 p-3 md:p-5 flex flex-col h-screen w-screen space-y-3' : ''}`}>
            <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 shadow-md border border-teal-500/30">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🌐</span>
                  <div>
                    <h3 className="text-sm font-black text-white">{activeEmbeddedExam.titleAr}</h3>
                    <p className="text-xs text-teal-200 font-medium">
                      {isFullScreen 
                        ? 'وضع الشاشة الكاملة مفعّل — اضغط ESC أو انقر زر الخروج للعودة' 
                        : `يتم عرض بنك امتحانات ${activeEmbeddedExam.sessionNameAr} المعتمد مباشرة داخل الصفحة`
                      }
                    </p>
                  </div>
                </div>

                {/* Session Switcher Pills if selected year has multiple sessions */}
                {currentBoardEmbeddedLinks[selectedYear] && Object.keys(currentBoardEmbeddedLinks[selectedYear]).length > 1 && (
                  <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-teal-500/30 shrink-0">
                    {(Object.values(currentBoardEmbeddedLinks[selectedYear]) as EmbeddedExamLink[]).map((sess) => (
                      <button
                        key={sess.session}
                        onClick={() => setSelectedSession(sess.session)}
                        className={`px-3 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
                          selectedSession === sess.session
                            ? 'bg-teal-500 text-slate-950 shadow'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {sess.sessionNameAr}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {!isFullScreen && (
                  <button
                    onClick={() => setSelectedYear('all')}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl shadow transition flex items-center gap-1 cursor-pointer border border-slate-700"
                  >
                    <span>عرض باقي السنوات</span>
                  </button>
                )}
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-black text-xs rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
                  title="تبديل وضع الشاشة الكاملة (أو اضغط ESC)"
                >
                  {isFullScreen ? (
                    <>
                      <Minimize2 className="w-4 h-4" />
                      <span>خروج من ملء الشاشة (ESC)</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-4 h-4" />
                      <span>عرض ملء الشاشة ⛶</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className={`w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden ${isFullScreen ? 'flex-1 h-full' : 'h-[850px]'}`}>
              <iframe
                key={activeEmbeddedExam.url}
                src={activeEmbeddedExam.url}
                title={activeEmbeddedExam.titleEn}
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>
          </div>
        ) : (
          <>
            {/* TAB CONTENT: PRACTICE MODE */}
            {activeTab === 'practice' && (
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              Object.keys(currentBoardEmbeddedLinks).length > 0 ? (
                renderEmbeddedExamsGrid()
              ) : (
                renderEmptyStateNotice()
              )
            ) : (
              <div className="space-y-6">
                {/* Question Selector Carousel */}
                <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl">
                  <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-xl">
                    {filteredQuestions.map((q, idx) => (
                      <button
                        key={q.id}
                        onClick={() => setPracticeIndex(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                          practiceIndex === idx
                            ? 'bg-teal-600 text-white shadow'
                            : practiceAnswers[q.id]
                            ? practiceAnswers[q.id] === q.correctAnswer
                              ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        سؤال {idx + 1} ({q.year})
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={practiceIndex === 0}
                      onClick={() => setPracticeIndex(prev => Math.max(0, prev - 1))}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-slate-500">
                      {practiceIndex + 1} / {filteredQuestions.length}
                    </span>
                    <button
                      disabled={practiceIndex === filteredQuestions.length - 1}
                      onClick={() => setPracticeIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Display Card */}
                {currentQuestion && (
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 relative shadow-lg">
                    {/* Card Header Info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-extrabold rounded-full border border-teal-500/20">
                          {currentQuestion.code}
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                          {currentQuestion.paper}
                        </span>
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full">
                          سنة {currentQuestion.year} ({currentQuestion.session})
                        </span>
                      </div>

                      <button
                        onClick={() => saveQuestionToMistakes(currentQuestion, practiceAnswers[currentQuestion.id] || '')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                          savedToMistakes[currentQuestion.id]
                            ? 'bg-emerald-600 text-white border-emerald-500'
                            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{savedToMistakes[currentQuestion.id] ? 'تمت الإضافة لدفتر الأخطاء ✅' : 'حفظ لدفتر أخطائي'}</span>
                      </button>
                    </div>

                    {/* Question Text */}
                    <div className="space-y-3">
                      {/* Diagram SVG Illustration if provided */}
                      {currentQuestion.diagramSvg && (
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col items-center justify-center my-3">
                          {currentQuestion.diagramTitle && (
                            <span className="text-xs font-black text-teal-600 dark:text-teal-400 mb-2">
                              {currentQuestion.diagramTitle}
                            </span>
                          )}
                          <div 
                            className="w-full flex justify-center max-w-md overflow-x-auto text-slate-800 dark:text-slate-200"
                            dangerouslySetInnerHTML={{ __html: currentQuestion.diagramSvg }}
                          />
                        </div>
                      )}

                      <div className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed dir-ltr text-left">
                        {currentQuestion.questionEn}
                      </div>
                      {currentQuestion.questionAr && (
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed text-right border-t border-slate-200/60 dark:border-slate-800/60 pt-2">
                          {currentQuestion.questionAr}
                        </div>
                      )}
                    </div>

                    {/* Options Grid */}
                    {currentQuestion.options && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {currentQuestion.options.map((opt) => {
                          const isSelected = practiceAnswers[currentQuestion.id] === opt.id;
                          const showFeedback = showAnswerFeedback[currentQuestion.id];
                          const isCorrect = opt.id === currentQuestion.correctAnswer;

                          let btnClasses = "p-4 rounded-2xl border-2 transition text-left cursor-pointer font-bold text-sm flex items-center justify-between ";

                          if (showFeedback) {
                            if (isCorrect) {
                              btnClasses += "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300";
                            } else if (isSelected) {
                              btnClasses += "bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300";
                            } else {
                              btnClasses += "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60";
                            }
                          } else {
                            if (isSelected) {
                              btnClasses += "bg-teal-500/15 border-teal-500 text-teal-800 dark:text-teal-200 shadow";
                            } else {
                              btnClasses += "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-400 text-slate-800 dark:text-slate-200";
                            }
                          }

                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectPracticeAnswer(currentQuestion, opt.id)}
                              className={btnClasses}
                            >
                              <div className="flex items-center gap-3 dir-ltr">
                                <span className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-black shrink-0">
                                  {opt.id}
                                </span>
                                <span>{opt.textEn}</span>
                              </div>
                              {showFeedback && isCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Solution Steps & Explanation Box */}
                    {showAnswerFeedback[currentQuestion.id] && (
                      <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-slate-800 dark:text-slate-200 space-y-3">
                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-extrabold text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>الإجابة الصحيحة: ({currentQuestion.correctAnswer}) - خطوات الحل المنهجية</span>
                        </div>

                        {currentQuestion.solutionStepsAr && (
                          <div className="space-y-1.5 text-xs text-right dir-rtl">
                            {currentQuestion.solutionStepsAr.map((step, idx) => (
                              <div key={idx} className="bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl border border-teal-500/20 font-medium">
                                {step}
                              </div>
                            ))}
                          </div>
                        )}

                        {currentQuestion.explanationAr && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 border-t border-teal-500/20 pt-2 text-right">
                            {currentQuestion.explanationAr}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: TIMED EXAM MODE */}
        {activeTab === 'exam' && (
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              Object.keys(currentBoardEmbeddedLinks).length > 0 ? (
                renderEmbeddedExamsGrid()
              ) : (
                renderEmptyStateNotice()
              )
            ) : !isExamRunning && !examSubmitted ? (
              /* 1. LAUNCHPAD / EXAM INTRO CARD */
              <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 p-6 md:p-10 rounded-3xl text-white shadow-2xl border border-teal-500/30 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>اختبار موقوت - محاكاة للامتحان الحقيقي</span>
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      اختبار {currentSubject.nameEn} ({currentBoard.nameEn})
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 mt-1">
                      اختبر نفسك تحت ضغط الوقت مع تقييم تلقائي فوري بعد التسليم
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-center">
                      <span className="block text-[10px] text-slate-400 font-bold">عدد الأسئلة</span>
                      <span className="text-lg font-black text-teal-300">{filteredQuestions.length} سؤال</span>
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-center">
                      <span className="block text-[10px] text-slate-400 font-bold">الوقت المخصص</span>
                      <span className="text-lg font-black text-amber-300">
                        {Math.max(15, filteredQuestions.length * 2)} دقيقة
                      </span>
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 text-center">
                      <span className="block text-[10px] text-slate-400 font-bold">السنة والورقة</span>
                      <span className="text-xs font-bold text-white">
                        {selectedYear === 'all' ? 'جميع السنوات' : selectedYear} - {selectedPaper === 'all' ? 'جميع الأوراق' : selectedPaper}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                  <h4 className="text-sm font-extrabold text-amber-300 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>تعليمات وضوابط الاختبار الموقوت:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                    <li>يتم حساب الوقت تنازلياً فور الضغط على زر "ابدأ الاختبار الموقوت الآن".</li>
                    <li>يمكنك التنقل بين الأسئلة وتعديل إجابتك بحرية كاملة قبل انتهاء الوقت المحدَّد.</li>
                    <li>لن تظهر الإجابات الصحيحة أو خطوات الحل أثناء الاختبار حتى تسليمه.</li>
                    <li>عند انتهاء الوقت أو الضغط على "تسليم الاختبار" ستحصل على تقرير مفصل بنتيجة أدائك.</li>
                  </ul>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={handleStartExam}
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black text-base md:text-lg shadow-xl shadow-teal-500/25 transition cursor-pointer flex items-center gap-3 active:scale-95"
                  >
                    <span>🚀 ابدأ الاختبار الموقوت الآن</span>
                    <Clock className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : isExamRunning && !examSubmitted ? (
              /* 2. RUNNING EXAM SCREEN */
              <div className="space-y-6">
                {/* TIMER & CONTROLS STICKY BAR */}
                <div className="bg-white dark:bg-slate-900 p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 rounded-xl flex items-center gap-2 font-black text-base md:text-lg ${
                      examTimeLeft < 300 
                        ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 animate-pulse'
                        : 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20'
                    }`}>
                      <Clock className="w-5 h-5" />
                      <span>{formatTime(examTimeLeft)}</span>
                    </div>

                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      سؤال {examIndex + 1} من {filteredQuestions.length}
                    </span>

                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      أجبتَ عن {Object.keys(examAnswers).length} / {filteredQuestions.length}
                    </span>
                  </div>

                  <button
                    onClick={handleSubmitExam}
                    className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs md:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>📥 إنهاء وتسليم الاختبار</span>
                  </button>
                </div>

                {/* QUESTION NUMBER PILLS NAVIGATION */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-xs font-bold text-slate-500 shrink-0 ml-2">انتقال سريع:</span>
                  {filteredQuestions.map((q, idx) => {
                    const isAnswered = Boolean(examAnswers[q.id]);
                    const isCurrent = idx === examIndex;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setExamIndex(idx)}
                        className={`w-8 h-8 rounded-xl font-extrabold text-xs shrink-0 transition flex items-center justify-center cursor-pointer ${
                          isCurrent
                            ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-500/30'
                            : isAnswered
                            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-teal-400'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* CURRENT EXAM QUESTION CARD */}
                {currentExamQuestion && (
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-lg">
                    {/* Header badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-extrabold rounded-full border border-teal-500/20">
                          {currentExamQuestion.code}
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">
                          {currentExamQuestion.paper}
                        </span>
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full">
                          سنة {currentExamQuestion.year}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        الموضوع: {currentExamQuestion.topicEn}
                      </span>
                    </div>

                    {/* Question Content */}
                    <div className="space-y-3">
                      {currentExamQuestion.diagramSvg && (
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col items-center justify-center my-3">
                          {currentExamQuestion.diagramTitle && (
                            <span className="text-xs font-black text-teal-600 dark:text-teal-400 mb-2">
                              {currentExamQuestion.diagramTitle}
                            </span>
                          )}
                          <div 
                            className="w-full flex justify-center max-w-md overflow-x-auto text-slate-800 dark:text-slate-200"
                            dangerouslySetInnerHTML={{ __html: currentExamQuestion.diagramSvg }}
                          />
                        </div>
                      )}

                      <div className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed dir-ltr text-left">
                        {currentExamQuestion.questionEn}
                      </div>
                      {currentExamQuestion.questionAr && (
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed text-right border-t border-slate-200/60 dark:border-slate-800/60 pt-2">
                          {currentExamQuestion.questionAr}
                        </div>
                      )}
                    </div>

                    {/* Options Grid (No correct/wrong feedback while exam is running) */}
                    {currentExamQuestion.options && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {currentExamQuestion.options.map((opt) => {
                          const isSelected = examAnswers[currentExamQuestion.id] === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectExamAnswer(currentExamQuestion.id, opt.id)}
                              className={`p-4 rounded-2xl border-2 transition text-left cursor-pointer font-bold text-sm flex items-center justify-between ${
                                isSelected
                                  ? 'bg-teal-500/15 border-teal-500 text-teal-800 dark:text-teal-200 shadow-md ring-2 ring-teal-500/20'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-400 text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-3 dir-ltr">
                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                                  isSelected 
                                    ? 'bg-teal-600 text-white' 
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                }`}>
                                  {opt.id}
                                </span>
                                <span>{opt.textEn}</span>
                              </div>
                              {isSelected && (
                                <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400">
                                  محدد ✅
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                      <button
                        onClick={() => setExamIndex(prev => Math.max(0, prev - 1))}
                        disabled={examIndex === 0}
                        className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span>السؤال السابق</span>
                      </button>

                      {examIndex < filteredQuestions.length - 1 ? (
                        <button
                          onClick={() => setExamIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                          className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>السؤال التالي</span>
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitExam}
                          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>إنهاء وتسليم الاختبار الآن</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* 3. SUBMITTED EXAM RESULTS & FULL REVIEW */
              <div className="space-y-6">
                {/* CERTIFICATE & SCORE CARD */}
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 md:p-8 rounded-3xl text-white shadow-xl border border-indigo-500/30 space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-right space-y-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                        <Award className="w-3.5 h-3.5" />
                        <span>تقرير أداء الاختبار الموقوت</span>
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white">
                        نتيجة اختبار {currentSubject.nameEn} - Cambridge
                      </h3>
                      <p className="text-xs text-slate-300">
                        تم تصحيح جميع إجاباتك تلقائياً وفق نماذج الإجابة المعتمدة
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex flex-col items-center justify-center shadow-xl border-4 border-white/20">
                        <span className="text-2xl font-black">{examResults.percentage}%</span>
                        <span className="text-[10px] font-bold text-white/80">النسبة المئوية</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
                      <span className="block text-xs text-slate-300 font-bold">إجمالي الأسئلة</span>
                      <span className="text-xl font-black text-white">{examResults.total}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-center">
                      <span className="block text-xs text-emerald-300 font-bold">إجابات صحيحة</span>
                      <span className="text-xl font-black text-emerald-400">{examResults.correct}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-center">
                      <span className="block text-xs text-rose-300 font-bold">إجابات خاطئة</span>
                      <span className="text-xl font-black text-rose-400">{examResults.wrong}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-center">
                      <span className="block text-xs text-amber-300 font-bold">غير مجاب عنها</span>
                      <span className="text-xl font-black text-amber-400">{examResults.unanswered}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleStartExam}
                      className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>إعادة نفس الاختبار الموقوت</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('practice')}
                      className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/15 transition cursor-pointer flex items-center gap-2"
                    >
                      <span>العودة للتمرين التفاعلي ←</span>
                    </button>
                    {onOpenMistakesModal && (
                      <button
                        onClick={onOpenMistakesModal}
                        className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                      >
                        <Bookmark className="w-4 h-4" />
                        <span>فتح دفتر أخطائي 📖</span>
                      </button>
                    )}
                  </div>

                  {(examResults.wrong > 0 || examResults.unanswered > 0) && (
                    <div className="bg-amber-500/15 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📖</span>
                        <div>
                          <h4 className="text-xs font-black text-amber-300">مربوط تلقائياً بـ "دفتر أخطائي"</h4>
                          <p className="text-[11px] text-slate-200 font-medium">
                            تم توثيق وحفظ ({examResults.wrong + examResults.unanswered}) سؤالاً خاطئاً أو غير مجاب تلقائياً لمراجعتها لاحقاً.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* FULL REVIEW OF ALL EXAM QUESTIONS */}
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span>📑</span> مراجعة تفصيلية لجميع أسئلة الاختبار مع خطوات الحل
                  </h3>

                  <div className="space-y-4">
                    {filteredQuestions.map((q, idx) => {
                      const userAns = examAnswers[q.id];
                      const isCorrect = userAns === q.correctAnswer;
                      const isSkipped = !userAns;

                      return (
                        <div
                          key={q.id}
                          className={`p-6 rounded-3xl border-2 space-y-4 transition ${
                            isCorrect
                              ? 'bg-emerald-500/5 border-emerald-500/30 dark:bg-emerald-500/10'
                              : isSkipped
                              ? 'bg-amber-500/5 border-amber-500/30 dark:bg-amber-500/10'
                              : 'bg-rose-500/5 border-rose-500/30 dark:bg-rose-500/10'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-black">
                                {idx + 1}
                              </span>
                              <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                                {q.code} - سنة {q.year} ({q.paper})
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {isCorrect ? (
                                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold">
                                  إجابة صحيحة ✅
                                </span>
                              ) : isSkipped ? (
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-extrabold">
                                  لم تتم الإجابة ⚠️
                                </span>
                              ) : (
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-extrabold">
                                  إجابة خاطئة ❌
                                </span>
                              )}

                              {!isCorrect && (
                                <button
                                  onClick={() => saveQuestionToMistakes(q, userAns || '')}
                                  className={`px-3 py-1 rounded-xl text-xs font-bold border transition flex items-center gap-1 cursor-pointer ${
                                    savedToMistakes[q.id]
                                      ? 'bg-emerald-600 text-white border-emerald-500'
                                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                                  }`}
                                >
                                  <Bookmark className="w-3.5 h-3.5" />
                                  <span>{savedToMistakes[q.id] ? 'محفـوظ ✅' : 'حفظ لأخطائي'}</span>
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 dir-ltr text-left">
                            {q.questionEn}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-1">
                            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                              <span className="text-slate-500">إجابتك: </span>
                              <span className={isCorrect ? 'text-emerald-600 font-extrabold' : 'text-rose-600 font-extrabold'}>
                                {userAns || 'بدون إجابة'}
                              </span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                              <span>الإجابة الصحيحة: </span>
                              <span className="font-black">({q.correctAnswer})</span>
                            </div>
                          </div>

                          {q.solutionStepsAr && (
                            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                              <span className="block font-black text-teal-600 dark:text-teal-400 mb-1">خطوات الحل:</span>
                              {q.solutionStepsAr.map((st, sidx) => (
                                <div key={sidx} className="text-slate-700 dark:text-slate-300 font-medium">
                                  • {st}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: PAST PAPERS INDEX */}
        {activeTab === 'papers' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>📋</span> قائمة الامتحانات المتاحة مرتبة حسب السنوات (2002 - 2021)
            </h3>

            {Object.keys(currentBoardEmbeddedLinks).length > 0 ? (
              renderEmbeddedExamsGrid()
            ) : filteredQuestions.length === 0 ? (
              renderEmptyStateNotice()
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {yearsList.map((yr) => {
                const yearQuestions = IG_MATHS_QUESTIONS.filter(q => q.year === yr);
                const qCount = yearQuestions.length;
                return (
                  <div
                    key={yr}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 hover:border-teal-500 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-slate-900 dark:text-white">
                        امتحان {yr} (Past Paper)
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                        {qCount > 0 ? `${qCount} أسئلة محددة` : 'تجهيز الأسئلة'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Paper 2 & Paper 4 Extended - Cambridge IGCSE 0580
                    </p>
                    <button
                      onClick={() => {
                        setSelectedYear(String(yr));
                        setActiveTab('practice');
                        setPracticeIndex(0);
                      }}
                      className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>تصفح الأسئلة وحلها ←</span>
                    </button>
                  </div>
                );
              })}
            </div>
            )}
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
};
