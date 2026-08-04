import { ExamModule, MailMergeRecord } from '../types';

import wordExamBanner from '../assets/images/word_exam_banner_1785826385576.jpg';
import wordTableDiagram from '../assets/images/word_table_diagram_1785826399252.jpg';
import wordSmartartDiagram from '../assets/images/word_smartart_diagram_1785826413048.jpg';
import wordMailMergeDiagram from '../assets/images/word_mail_merge_diagram_1785826424424.jpg';

export const ASSET_IMAGES = {
  banner: wordExamBanner,
  table: wordTableDiagram,
  smartart: wordSmartartDiagram,
  mailMerge: wordMailMergeDiagram,
};

export const MAIL_MERGE_DATASET: MailMergeRecord[] = [
  { id: 1, fullName: "John Smith", jobTitle: "Information Systems Engineer", department: "Information Technology", grade: "Excellent", bonusAmount: "$1,500" },
  { id: 2, fullName: "Sarah Davis", jobTitle: "Financial Data Analyst", department: "Financial Affairs", grade: "Very Good", bonusAmount: "$1,200" },
  { id: 3, fullName: "Dr. Robert Wilson", jobTitle: "Institutional Development Consultant", department: "Quality & Planning", grade: "Excellent", bonusAmount: "$2,000" },
  { id: 4, fullName: "Eng. Maria Garcia", jobTitle: "Digital Project Manager", department: "Project Management", grade: "Excellent", bonusAmount: "$1,800" },
  { id: 5, fullName: "Michael Brown", jobTitle: "Human Resources Specialist", department: "Human Resources", grade: "Very Good", bonusAmount: "$1,100" },
];

export const RAW_EXAM_TEXT = `Annual Institutional Development & Digital Transformation Report 2026

Introduction and Objectives:
The institution strives to enhance digital performance efficiency and elevate the quality of electronic services provided to stakeholders. This report outlines various levels of achievement, financial performance, updated organizational structure, as well as automated mail merge procedures and document security mechanisms.

Section 1: Pillars of the Digital Transformation Plan:
1. Cloud server infrastructure and hardware provisioning.
2. Professional staff development and employee training on modern software applications.
3. Automation of administrative procedures to reduce paper transactions by 85%.

Section 2: Performance Indicators & Financial Results (Evaluation Table):
This section includes the annual evaluation of key institutional departments in terms of completion rate, allocated budget, and actual expenditure.

Section 3: Enhanced Organizational Structure:
Administrative authority flows from Executive Management down to Operational Divisions (IT Department, Finance, and Quality Assurance).

Section 4: Conclusion & Recommendations:
We recommend continuous support for technology projects and expanding administrative automation to maintain the highest standards of quality and institutional excellence.`;

export const EXAM_MODULES: ExamModule[] = [
  {
    id: 'mod1',
    moduleNumber: 1,
    title: 'Page Setup, Cover Page & Document Layout',
    subtitle: 'Page Setup, Cover Page, Columns & Watermark',
    totalPoints: 15,
    iconName: 'FileText',
    description: 'Prepare the core document structure, adjust margins, insert a cover page, split columns, and apply watermarks & borders.',
    tasks: [
      {
        id: 't1_1',
        title: 'Adjust Page Margins, Orientation & Paper Size',
        description: 'Set document margins to (Normal - 1 inch / 2.54 cm on all sides), orientation to (Portrait), and paper size to (A4 - 21 x 29.7 cm).',
        points: 4,
        wordPath: 'Layout tab > Page Setup group > Margins, Orientation & Size',
        tips: ['Ensure A4 paper size is selected (21 x 29.7 cm)', 'Select Normal margins (1 inch / 2.54 cm from top, bottom, left, right)'],
        autoCheckId: 'margins',
      },
      {
        id: 't1_2',
        title: 'Insert Professional Document Cover Page',
        description: 'Insert a built-in cover page (Integral / Grid / Slice). Set the Document Title to "Annual Institutional Development Report 2026", Subtitle to "Department of Computer Science & IT", and enter your full name in the Author field.',
        points: 4,
        wordPath: 'Insert tab > Pages group > Cover Page',
        tips: ['Cover pages automatically suppress header and footer display via "Different First Page"'],
      },
      {
        id: 't1_3',
        title: 'Format Section Text into Two Columns',
        description: 'Select the paragraph under "Pillars of the Digital Transformation Plan" and split it into 2 equal columns with a vertical dividing line between them (Line Between).',
        points: 4,
        wordPath: 'Layout tab > Page Setup group > Columns > More Columns > Check "Line between"',
        autoCheckId: 'columns',
      },
      {
        id: 't1_4',
        title: 'Add Text Watermark & Double Line Page Border',
        description: 'Insert a custom text watermark displaying "CONFIDENTIAL" in light gray, then add a double-line Page Border in Dark Blue color.',
        points: 3,
        wordPath: 'Design tab > Page Background group > Watermark & Page Borders',
        autoCheckId: 'watermark',
      },
    ],
  },
  {
    id: 'mod2',
    moduleNumber: 2,
    title: 'Typography, Paragraphs, Lists & Find/Replace',
    subtitle: 'Typography, Indents, Bullets & Find/Replace',
    totalPoints: 20,
    iconName: 'Type',
    description: 'Master professional typography, paragraph alignment, line spacing, indents, bulleted/numbered lists, and advanced formatting replace.',
    tasks: [
      {
        id: 't2_1',
        title: 'Format Body Typography & Main Headings',
        description: 'Set font family to Arial or Calibri across the document. Set body text size to 14pt, and main section headings to 18pt Bold in Dark Blue color (#1E40AF).',
        points: 5,
        wordPath: 'Home tab > Font group > Font Name, Font Size, Font Color & Bold style',
        autoCheckId: 'fontFormatting',
      },
      {
        id: 't2_2',
        title: 'Paragraph Alignment, First Line Indent & Spacing',
        description: 'Apply Justify alignment to body paragraphs, set Line Spacing to 1.5, set First Line Indent to 1 cm (0.5 in), and set Space After Paragraph to 6pt.',
        points: 5,
        wordPath: 'Home tab > Paragraph group > Justify, Line Spacing (1.5) > Paragraph Settings Dialog',
        autoCheckId: 'paragraphJustify',
      },
      {
        id: 't2_3',
        title: 'Create Bulleted & Multilevel Numbered Lists',
        description: 'Convert the digital transformation points into a bulleted list, and create a 2nd-level sub-numbered list under each pillar using the Tab key (1.1, 1.2).',
        points: 5,
        wordPath: 'Home tab > Paragraph group > Bullets / Multilevel List',
      },
      {
        id: 't2_4',
        title: 'Advanced Find & Replace with Custom Formatting',
        description: 'Use the Find & Replace tool to locate all occurrences of the word "Company" and replace with "Institution", applying Bold Italic style and Dark Blue font to replaced text.',
        points: 5,
        wordPath: 'Home tab > Editing group > Replace > More > Format > Font',
      },
    ],
  },
  {
    id: 'mod3',
    moduleNumber: 3,
    title: 'Advanced Tables, Cell Merging & Auto Formulas',
    subtitle: 'Tables, Merge Cells, Borders & Auto SUM Formula',
    totalPoints: 25,
    iconName: 'Table',
    description: 'Construct and format professional data tables, merge header cells, align content, and use auto-sum formulas.',
    tasks: [
      {
        id: 't3_1',
        title: 'Create Data Table & Apply Colorful Preset Style',
        description: 'Insert a 5 columns x 6 rows table, and apply a colorful preset style (Grid Table 4 - Accent 1 or similar styled preset).',
        points: 6,
        wordPath: 'Insert tab > Table > Table Design tab > Table Styles',
        targetImage: ASSET_IMAGES.table,
        autoCheckId: 'tableCreated',
      },
      {
        id: 't3_2',
        title: 'Merge Header Cells & Center Alignment',
        description: 'Merge all cells in the first row (Merge Cells), enter the title "Project Budget and Financial Expenditure Summary Table", and center the text horizontally and vertically.',
        points: 6,
        wordPath: 'Select Row 1 > Table Layout tab > Merge Cells > Alignment: Center',
      },
      {
        id: 't3_3',
        title: 'Insert Auto Formula `=SUM(ABOVE)` for Totals',
        description: 'In the bottom row Total cell, insert a formula to calculate the vertical column total automatically using `=SUM(ABOVE)`.',
        points: 7,
        wordPath: 'Click in Total cell > Table Layout tab > Data group > Formula > Enter `=SUM(ABOVE)`',
        tips: ['Ensure numerical values above are properly formatted without text characters for accurate summation'],
      },
      {
        id: 't3_4',
        title: 'Set Header Text Direction & Repeat Header Rows',
        description: 'Change header column text direction to vertical/rotated, and enable "Repeat Header Rows" so table headers automatically display across page breaks.',
        points: 6,
        wordPath: 'Select Header Row > Table Layout tab > Text Direction & Repeat Header Rows',
      },
    ],
  },
  {
    id: 'mod4',
    moduleNumber: 4,
    title: 'Media, Shapes, SmartArt & Column Charts',
    subtitle: 'Images, Text Wrapping, Shapes, SmartArt & Charts',
    totalPoints: 20,
    iconName: 'Image',
    description: 'Enrich document visual appeal using wrapped images, organizational SmartArt diagrams, column charts, and side text boxes.',
    tasks: [
      {
        id: 't4_1',
        title: 'Insert Organizational Hierarchy SmartArt Diagram',
        description: 'Insert a SmartArt graphic from the Hierarchy category and populate the structure: (Top Level: General Director -> Level 2: IT Manager, Finance Director, Quality Manager).',
        points: 5,
        wordPath: 'Insert tab > Illustrations group > SmartArt > Hierarchy',
        targetImage: ASSET_IMAGES.smartart,
        autoCheckId: 'smartArt',
      },
      {
        id: 't4_2',
        title: 'Insert Image, Adjust Text Wrapping & Effects',
        description: 'Insert the report logo/image, set Text Wrapping to (Square or Tight), and apply a subtle border shadow effect.',
        points: 5,
        wordPath: 'Insert tab > Picture > Picture Format tab > Wrap Text: Square',
        autoCheckId: 'imageInserted',
      },
      {
        id: 't4_3',
        title: 'Insert Clustered Column Chart & Modify Data',
        description: 'Insert a Clustered Column Chart comparing current year vs previous year department budgets, and customize axis titles and data labels.',
        points: 5,
        wordPath: 'Insert tab > Illustrations group > Chart > Column > Clustered Column',
      },
      {
        id: 't4_4',
        title: 'Insert Custom Sidebar Callout Text Box',
        description: 'Insert a side Callout Text Box with a colored fill and no outline, and paste a key executive statement in italic text.',
        points: 5,
        wordPath: 'Insert tab > Text Box > Draw Text Box > Shape Format tab > Shape Fill & Shape Outline',
      },
    ],
  },
  {
    id: 'mod5',
    moduleNumber: 5,
    title: 'Heading Styles, Automatic TOC & Footnotes',
    subtitle: 'Styles, Heading 1/2, Auto TOC & Footnotes',
    totalPoints: 20,
    iconName: 'BookOpen',
    description: 'Apply standard heading styles to auto-generate a dynamic Table of Contents and insert scholarly reference footnotes.',
    tasks: [
      {
        id: 't5_1',
        title: 'Apply Heading 1 & Heading 2 Styles',
        description: 'Apply (Heading 1) style to main section titles ("Section 1", "Section 2", "Section 3", "Section 4"), and (Heading 2) to sub-headers.',
        points: 5,
        wordPath: 'Select Heading > Home tab > Styles Gallery > Click "Heading 1" / "Heading 2"',
        autoCheckId: 'headings',
      },
      {
        id: 't5_2',
        title: 'Generate Automatic Table of Contents (Auto TOC 1)',
        description: 'Insert a blank page after the cover page, and generate an Automatic Table of Contents (Automatic Table 1) displaying all headings with exact page numbers.',
        points: 6,
        wordPath: 'Place cursor on Page 2 > References tab > Table of Contents > Automatic Table 1',
        autoCheckId: 'toc',
      },
      {
        id: 't5_3',
        title: 'Insert Reference Footnote Explanation',
        description: 'Place cursor after the word "Automation" in body text, insert a Footnote, and type at the bottom: "* Automation: Executing processes programmatically without manual intervention."',
        points: 4,
        wordPath: 'Place cursor beside word > References tab > Footnotes group > Insert Footnote',
        autoCheckId: 'footnote',
      },
      {
        id: 't5_4',
        title: 'Headers, Footers & Page Numbering (Page X of Y)',
        description: 'Add a Header with the institution name on the top right, and a Footer with page numbers styled as "Page X of Y", enabling "Different First Page" to hide them on the cover.',
        points: 5,
        wordPath: 'Insert tab > Header & Footer group > Page Number > Bottom of Page > Check "Different First Page"',
        autoCheckId: 'headerFooter',
      },
    ],
  },
  {
    id: 'mod6',
    moduleNumber: 6,
    title: 'Mail Merge Wizard, Track Changes & PDF Export',
    subtitle: 'Mail Merge, Track Changes & PDF Export',
    totalPoints: 20,
    iconName: 'Send',
    description: 'Execute advanced Mail Merge letters, enable proofing track changes, apply document restrictions, and export final PDF.',
    tasks: [
      {
        id: 't6_1',
        title: 'Configure Mail Merge Main Document & Dataset',
        description: 'Set up Mail Merge for employee recognition letters: set current document as Letters, import the recipient database, and insert merge fields: «FullName», «JobTitle», and «Grade».',
        points: 6,
        wordPath: 'Mailings tab > Start Mail Merge > Select Recipients > Insert Merge Field',
        targetImage: ASSET_IMAGES.mailMerge,
        autoCheckId: 'mailMerge',
      },
      {
        id: 't6_2',
        title: 'Preview Merged Results & Finish Individual Documents',
        description: 'Preview merged recipient results to verify data binding, then complete merge into a new individual document (Finish & Merge > Edit Individual Documents).',
        points: 5,
        wordPath: 'Mailings tab > Preview Results > Finish & Merge > Edit Individual Documents',
      },
      {
        id: 't6_3',
        title: 'Enable Track Changes & Proofing Spelling Check',
        description: 'Turn on "Track Changes" mode, and run the Spelling & Grammar proofing tool (F7) to inspect and correct document typos.',
        points: 4,
        wordPath: 'Review tab > Tracking group > Track Changes + Proofing group > Spelling & Grammar (F7)',
      },
      {
        id: 't6_4',
        title: 'Apply Document Protection & Export High-Res PDF',
        description: 'Apply Restrict Editing protection (Read-only mode), then export the final polished document as a high-quality PDF named "Final_Annual_Report_2026.pdf".',
        points: 5,
        wordPath: 'File tab > Export > Create PDF/XPS Document OR Review tab > Restrict Editing',
      },
    ],
  },
];

export const MODEL_ANSWER_RUBRIC = [
  {
    module: 'Module 1: Page Setup & Cover Page',
    criteria: 'Apply A4 Margins + Cover Page + 2 Columns + Watermark & Border',
    steps: '1. Layout > Margins > Normal | 2. Insert > Cover Page | 3. Select text > Layout > Columns > 2 | 4. Design > Watermark & Page Border',
    score: 15,
  },
  {
    module: 'Module 2: Typography & Formatting',
    criteria: 'Font formatting (14pt/18pt) + Justify alignment + Multilevel lists + Find/Replace formatting',
    steps: '1. Home > Font size 14pt / 18pt bold | 2. Paragraph > Justify & 1.5 line spacing | 3. Paragraph > Multilevel List | 4. Editing > Replace with format',
    score: 20,
  },
  {
    module: 'Module 3: Advanced Tables & Formulas',
    criteria: 'Create 5x6 Table + Merge Header Row + Center Align + =SUM(ABOVE) formula',
    steps: '1. Insert > Table 5x6 + apply colorful style | 2. Table Layout > Merge Cells & Center Align | 3. Place cursor in total cell > Table Layout > Formula > =SUM(ABOVE)',
    score: 25,
  },
  {
    module: 'Module 4: Media, SmartArt & Charts',
    criteria: 'Insert Hierarchy SmartArt + Image Square wrapping + Clustered Column Chart + Callout Text box',
    steps: '1. Insert > SmartArt > Hierarchy | 2. Insert > Picture > Wrap Text Square | 3. Insert > Chart > Column | 4. Insert > Text Box',
    score: 20,
  },
  {
    module: 'Module 5: Heading Styles & Auto TOC',
    criteria: 'Heading 1 & 2 styles + Automatic Table of Contents + Footnote + Header/Footer with Page X of Y',
    steps: '1. Home > Styles (Heading 1/2) | 2. References > Table of Contents > Automatic Table 1 | 3. References > Insert Footnote | 4. Insert > Header & Footer (Page X of Y)',
    score: 20,
  },
  {
    module: 'Module 6: Mail Merge & PDF Export',
    criteria: 'Mail Merge field insertion & preview + Track Changes + Restrict Editing + Export PDF',
    steps: '1. Mailings > Start Mail Merge > Select Recipients > Insert Fields | 2. Mailings > Preview & Finish | 3. Review > Track Changes | 4. File > Export PDF',
    score: 20,
  },
];
