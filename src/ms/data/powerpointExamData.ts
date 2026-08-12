import { ExamModule } from '../types';

export const RAW_PPT_PRESENTATION_OUTLINE = `Microsoft PowerPoint Practical Examination 2026
Presentation Title: Strategic Digital Transformation & Artificial Intelligence in Education

Slide 1: Title Slide
- Main Title: Strategic Digital Transformation 2026
- Subtitle: Modernizing Higher Education with Artificial Intelligence
- Presenter: Candidate Student Name

Slide 2: Executive Summary & Core Objectives
- Modernizing IT Infrastructure across all campus departments.
- Integrating Interactive Learning Management Systems (LMS).
- Enhancing Cyber Security Awareness and Data Privacy.
- Empowering Faculty and Staff through continuous digital training.

Slide 3: Implementation Roadmap & Key Pillars (SmartArt Process Diagram)
- Phase 1: Needs Assessment & Hardware Upgrades
- Phase 2: Cloud Infrastructure Migration
- Phase 3: AI Tool Integration & Staff Workshops
- Phase 4: Full Deployment & Continuous Quality Evaluation

Slide 4: Annual Technology Investment Breakdown (Data Table)
- Infrastructure Upgrade: $450,000 (35%)
- AI & Software Licenses: $300,000 (23%)
- Faculty & Staff Training: $200,000 (15%)
- Cybersecurity Systems: $350,000 (27%)
- Total Investment Budget: $1,300,000 (100%)

Slide 5: Key Performance Indicators & Impact (Chart / Metrics)
- Student Portal Engagement: +85% Increase
- Paperless Administrative Workflows: 90% Reduction
- Course Completion Rate: +32% Improvement
- IT Support Resolution Time: -60% Reduction

Slide 6: Conclusion & Action Call
- Next Steps: Immediate deployment of AI learning assistants in Q3 2026.
- Strategic Vision: Leading digital innovation across academic institutions.
- Thank You for Your Attention - Q&A Session.`;

export const PPT_EXAM_MODULES: ExamModule[] = [
  {
    id: 'ppt_mod1',
    moduleNumber: 1,
    title: 'Presentation Setup, Slide Master & Themes',
    subtitle: 'Slide Size, Slide Master, Color Palettes & Custom Layouts',
    totalPoints: 15,
    iconName: 'Layout',
    description: 'Configure presentation setup, slide dimensions, slide master background styles, color palettes, and header/footer slide numbers.',
    tasks: [
      {
        id: 'ppt_t1_1',
        title: 'Configure Slide Aspect Ratio & Size',
        description: 'Set slide dimensions to Widescreen (16:9 aspect ratio) and verify orientation is set to Landscape.',
        points: 4,
        wordPath: 'Design tab > Customize group > Slide Size > Widescreen (16:9)',
        tips: ['Ensure 16:9 aspect ratio is active for modern HD displays'],
        autoCheckId: 'ppt_aspect_ratio',
      },
      {
        id: 'ppt_t1_2',
        title: 'Apply Built-in Theme & Color Variant',
        description: 'Apply the "Office Dark" or "Azure Modern" theme across all slides, and select a Dark Blue or Slate color variant.',
        points: 4,
        wordPath: 'Design tab > Themes group > Select Theme > Variants > Color Palette',
        autoCheckId: 'ppt_theme',
      },
      {
        id: 'ppt_t1_3',
        title: 'Customize Slide Master Background & Header/Footer',
        description: 'Open Slide Master View. Set background style to Dark Navy (#0F172A). Add "Practical Exam 2026" to the Slide Footer and enable Slide Numbers on all slides except the Title slide.',
        points: 4,
        wordPath: 'View tab > Master Views group > Slide Master > Insert > Header & Footer > Check "Slide Number" and "Footer"',
        autoCheckId: 'ppt_footer',
      },
      {
        id: 'ppt_t1_4',
        title: 'Insert Custom Section Header Slide Layout',
        description: 'Add a new Section Header slide layout with a two-tone gradient background and centered accent bar divider.',
        points: 3,
        wordPath: 'Home tab > Slides group > New Slide > Section Header',
      },
    ],
  },
  {
    id: 'ppt_mod2',
    moduleNumber: 2,
    title: 'Typography, Custom Shapes, WordArt & Formatting',
    subtitle: 'Text Hierarchy, Bullet Formatting, Custom Shapes & Grouping',
    totalPoints: 20,
    iconName: 'Type',
    description: 'Master title text hierarchy, custom bullet points, shape fills, gradient outlines, shadow effects, and object alignment/grouping.',
    tasks: [
      {
        id: 'ppt_t2_1',
        title: 'Format Title Typography & Character Spacing',
        description: 'Format the main presentation title on Slide 1: Font size 40pt, Bold, Font: Arial/Calibri, Color: Gold/Amber (#F59E0B), with Very Loose character spacing.',
        points: 5,
        wordPath: 'Home tab > Font group > Font Size 40pt > Bold > Character Spacing > Very Loose',
        autoCheckId: 'ppt_title_font',
      },
      {
        id: 'ppt_t2_2',
        title: 'Apply Custom Bullet Lists & Line Spacing',
        description: 'On Slide 2, format key bullet points with 1.25 line spacing, 12pt paragraph space after, and custom checkmark bullet symbols.',
        points: 5,
        wordPath: 'Home tab > Paragraph group > Bullets > Bullets and Numbering > Custom Symbol',
      },
      {
        id: 'ppt_t2_3',
        title: 'Insert Custom Shapes with Gradient Fill & Glow',
        description: 'Insert 3 Rounded Rectangle shapes on Slide 2 representing key pillars. Apply a Subtle Blue Gradient fill, White 1 font color, and Soft Outer Shadow effect.',
        points: 5,
        wordPath: 'Insert tab > Illustrations group > Shapes > Rounded Rectangle > Shape Format > Shape Fill > Gradient',
        autoCheckId: 'ppt_shapes',
      },
      {
        id: 'ppt_t2_4',
        title: 'Align, Distribute & Group Shape Elements',
        description: 'Select all 3 rounded shapes, align them vertically to middle, distribute horizontally with equal spacing, and Group them into a single object.',
        points: 5,
        wordPath: 'Shape Format tab > Arrange group > Align > Distribute Horizontally > Group > Group',
      },
    ],
  },
  {
    id: 'ppt_mod3',
    moduleNumber: 3,
    title: 'Media, SmartArt Diagrams, Tables & Data Charts',
    subtitle: 'Images, SmartArt Hierarchy, Data Tables & Bar/Pie Charts',
    totalPoints: 20,
    iconName: 'PieChart',
    description: 'Integrate media assets, create SmartArt process/hierarchy diagrams, format data tables, and embed visual bar/pie charts.',
    tasks: [
      {
        id: 'ppt_t3_1',
        title: 'Create SmartArt Process / Hierarchy Diagram',
        description: 'On Slide 3, insert a SmartArt Process diagram (Chevron Process or Continuous Block). Fill the 4 phase steps from the exam outline and apply a 3D Polished SmartArt style.',
        points: 6,
        wordPath: 'Insert tab > Illustrations group > SmartArt > Process > Chevron Process > SmartArt Design tab > Styles',
        autoCheckId: 'ppt_smartart',
      },
      {
        id: 'ppt_t3_2',
        title: 'Insert & Format Financial Investment Data Table',
        description: 'On Slide 4, insert a 5-row by 3-column table. Enter the Annual Investment Breakdown data, apply Medium Style 2 Table Style, align numerical columns to the right, and shade the Total row in Dark Blue.',
        points: 5,
        wordPath: 'Insert tab > Tables group > Table > Table Design tab > Table Styles > Shading',
        autoCheckId: 'ppt_table',
      },
      {
        id: 'ppt_t3_3',
        title: 'Embed Clustered Column Data Chart',
        description: 'On Slide 5, insert a Clustered Column Chart representing KPI metrics. Set chart title to "Key Performance Improvements 2026", add Data Labels above bars, and change bar color to Emerald Green.',
        points: 5,
        wordPath: 'Insert tab > Illustrations group > Chart > Column > Clustered Column > Chart Design tab > Add Chart Element > Data Labels',
        autoCheckId: 'ppt_chart',
      },
      {
        id: 'ppt_t3_4',
        title: 'Insert High-Resolution Image & Apply Picture Style',
        description: 'Insert a digital technology image on Slide 1 or Slide 6. Crop to 16:9 shape ratio, apply Soft Edge Oval Picture Style, and add Alt Text description.',
        points: 4,
        wordPath: 'Insert tab > Images group > Pictures > Picture Format tab > Picture Styles > Soft Edge Oval',
        autoCheckId: 'ppt_image',
      },
    ],
  },
  {
    id: 'ppt_mod4',
    moduleNumber: 4,
    title: 'Custom Animations, Motion Paths & Sequence',
    subtitle: 'Entrance Effects, Animation Pane, Duration, Delay & Triggers',
    totalPoints: 15,
    iconName: 'Zap',
    description: 'Configure entrance, emphasis, and exit animations, order animation sequences in the Animation Pane, and set timing durations.',
    tasks: [
      {
        id: 'ppt_t4_1',
        title: 'Apply Entrance Animations to Slide Titles & Content',
        description: 'Apply "Fade" entrance animation to all slide titles (Start: With Previous, Duration: 0.50s). Apply "Fly In" from Bottom to body text boxes (Start: After Previous).',
        points: 4,
        wordPath: 'Animations tab > Animation group > Fade / Fly In > Effect Options > From Bottom > Timing > Start: After Previous',
        autoCheckId: 'ppt_animation_entrance',
      },
      {
        id: 'ppt_t4_2',
        title: 'Configure SmartArt Diagram Animation by Branch',
        description: 'Select the SmartArt diagram on Slide 3. Open Effect Options and set sequence animation to "One by One" so steps reveal sequentially on click.',
        points: 4,
        wordPath: 'Animations tab > Animation group > Effect Options > Sequence > One by One',
      },
      {
        id: 'ppt_t4_3',
        title: 'Add Pulse Emphasis & Custom Motion Path Animation',
        description: 'On Slide 5, add a secondary "Pulse" emphasis animation to the top KPI metric shape when clicked, lasting 1.0 second.',
        points: 4,
        wordPath: 'Animations tab > Advanced Animation group > Add Animation > Emphasis > Pulse > Timing > Duration: 1.00s',
      },
      {
        id: 'ppt_t4_4',
        title: 'Reorder Animation Sequence in Animation Pane',
        description: 'Open the Animation Pane. Ensure title animation is at Position 1, followed by subtitle, and shapes animate in order from top to bottom.',
        points: 3,
        wordPath: 'Animations tab > Advanced Animation group > Animation Pane > Reorder Animation (Move Earlier / Move Later)',
      },
    ],
  },
  {
    id: 'ppt_mod5',
    moduleNumber: 5,
    title: 'Slide Transitions, Morph Effect, Audio & Timings',
    subtitle: 'Push, Wipe, Morph Transitions, Slide Timings & Background Audio',
    totalPoints: 15,
    iconName: 'PlaySquare',
    description: 'Master seamless slide transitions, Morph effect between duplicate slides, automatic slide timings, and background audio loop.',
    tasks: [
      {
        id: 'ppt_t5_1',
        title: 'Apply Morph Transition to Consecutive Slides',
        description: 'Duplicate Slide 2 to Slide 3, resize and reposition shapes on Slide 3, and apply the "Morph" transition with 1.25s duration to create smooth shape morphing.',
        points: 5,
        wordPath: 'Transitions tab > Transition to This Slide group > Morph > Timing group > Duration: 1.25s',
        autoCheckId: 'ppt_morph_transition',
      },
      {
        id: 'ppt_t5_2',
        title: 'Apply Push / Fade Slide Transition across All Slides',
        description: 'Apply "Push" (from Right) or "Fade" transition across all slides, and click "Apply to All".',
        points: 4,
        wordPath: 'Transitions tab > Transition to This Slide group > Push > Effect Options > From Right > Apply To All',
        autoCheckId: 'ppt_push_transition',
      },
      {
        id: 'ppt_t5_3',
        title: 'Set Automatic Advance Slide Timings',
        description: 'Uncheck "On Mouse Click" for Slide 1 and set automatic advance after 00:08 seconds (8 seconds).',
        points: 3,
        wordPath: 'Transitions tab > Timing group > Advance Slide > Uncheck "On Mouse Click" > Check "After" 00:08.00',
      },
      {
        id: 'ppt_t5_4',
        title: 'Insert Background Audio with Play Across Slides & Loop',
        description: 'Insert an ambient audio track on Slide 1. Set audio options to "Play in Background", "Loop until Stopped", and "Hide During Show".',
        points: 3,
        wordPath: 'Insert tab > Media group > Audio > Audio on My PC > Audio Tools Playback tab > Play in Background',
      },
    ],
  },
  {
    id: 'ppt_mod6',
    moduleNumber: 6,
    title: 'Presenter View, Action Buttons, Hyperlinks & Exporting',
    subtitle: 'Action Buttons, Slide Hyperlinks, Speaker Notes & Video Export',
    totalPoints: 15,
    iconName: 'Monitor',
    description: 'Configure interactive navigation action buttons, slide hyperlinks, speaker notes, Presenter View, and export as MP4 video / PDF handouts.',
    tasks: [
      {
        id: 'ppt_t6_1',
        title: 'Insert Interactive Action Buttons for Navigation',
        description: 'Insert a "Home" Action Button on Slides 2 through 6 in the bottom right corner, linking directly to Slide 1.',
        points: 4,
        wordPath: 'Insert tab > Illustrations group > Shapes > Action Buttons > Action Button: Home > Hyperlink to: First Slide',
        autoCheckId: 'ppt_action_buttons',
      },
      {
        id: 'ppt_t6_2',
        title: 'Create Text Hyperlinks to Specific Slides & External URL',
        description: 'On Slide 2, convert the text "Cloud Infrastructure" into a hyperlink pointing to Slide 4 in this presentation.',
        points: 3,
        wordPath: 'Insert tab > Links group > Link / Hyperlink > Place in This Document > Slide 4',
      },
      {
        id: 'ppt_t6_3',
        title: 'Add Speaker Notes to All Presentation Slides',
        description: 'Open Notes Pane for each slide and enter key presenter talking points (e.g., Slide 1: "Introduce digital transformation goals to board members").',
        points: 4,
        wordPath: 'View tab > Show group > Notes > Click to add notes box at bottom of slide editor',
      },
      {
        id: 'ppt_t6_4',
        title: 'Export Presentation as Handouts PDF & Full HD Video',
        description: 'Export presentation as a 3 Slides Per Page PDF Handouts document with lines for notes, then configure Export to Create a Video (Full HD 1080p).',
        points: 4,
        wordPath: 'File menu > Export > Create PDF/XPS Document OR Create a Video > Full HD (1080p)',
      },
    ],
  },
];

export const PPT_MODEL_ANSWER_RUBRIC = [
  {
    module: 'Module 1: Setup & Master',
    criteria: 'Slide Size 16:9, Office Dark theme, Footer text & Slide Numbers on Master.',
    steps: 'Design tab > Slide Size > Widescreen (16:9) | Slide Master > Header & Footer > Slide Number + Footer.',
    points: 15,
  },
  {
    module: 'Module 2: Typography & Shapes',
    criteria: 'Title 40pt Bold Gold, Custom bullets, 3 Rounded Gradient Shapes grouped.',
    steps: 'Home tab > Font 40pt Bold > Bullets & Numbering | Insert > Shapes > Arrange > Align & Group.',
    points: 20,
  },
  {
    module: 'Module 3: Media & SmartArt',
    criteria: 'SmartArt 4-step Process diagram, 5x3 Table with Shading, Column Chart.',
    steps: 'Insert > SmartArt > Process > Chevron | Insert > Table > Shading | Insert > Chart > Column.',
    points: 20,
  },
  {
    module: 'Module 4: Animations & Sequence',
    criteria: 'Fade Entrance for titles, Fly In for text, SmartArt One-by-One sequence.',
    steps: 'Animations tab > Fade / Fly In > Effect Options > Sequence: One by One | Animation Pane.',
    points: 15,
  },
  {
    module: 'Module 5: Morph & Transitions',
    criteria: 'Morph Transition on Slide 3, Push Transition across all slides, 8s auto timing.',
    steps: 'Transitions tab > Morph (1.25s) | Push > Effect Options > Apply to All | Advance Slide After 00:08.',
    points: 15,
  },
  {
    module: 'Module 6: Actions & Export',
    criteria: 'Action Button Home on slides, Slide Hyperlink, Speaker Notes, PDF/Video export.',
    steps: 'Insert > Shapes > Action Buttons > Home | Insert > Link | View > Notes | File > Export.',
    points: 15,
  },
];
