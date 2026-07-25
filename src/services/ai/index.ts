import { GoogleGenAI } from '@google/genai';

// Helper to check if a response is valid JSON
async function parseJsonResponse(res: Response) {
  const contentType = res.headers.get('content-type') || '';
  if (!res.ok || contentType.includes('text/html')) {
    throw new Error(`Server returned status ${res.status} or non-JSON content`);
  }
  return await res.json();
}

/**
 * 1. Generate Lesson Summary
 * Supports server endpoint /api/lesson-summary, client-side Gemini API, and smart browser fallback
 */
export async function fetchLessonSummary(params: {
  title: string;
  subject?: string;
  unit?: string;
  lessonText?: string;
}): Promise<string> {
  const { title, subject, unit, lessonText } = params;

  // Try Server Endpoint First
  try {
    const res = await fetch('/api/lesson-summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    const data = await parseJsonResponse(res);
    if (data && data.summary) {
      return data.summary;
    }
  } catch (err) {
    console.warn("Backend server not available (e.g. GitHub Pages), switching to client-side fallback...", err);
  }

  // Try Client-Side Gemini API if key is available
  const viteApiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (viteApiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey: viteApiKey });
      const prompt = `
أنت المعلم الافتراضي المتميز على منصة 4U التعليمية.
قدم ملخصاً تحليلياً شاملاً ومركزاً للدرس التالي:
- عنوان الدرس: ${title || 'غير محدد'}
- المادة: ${subject || 'غير محدد'}
- الوحدة الدراسية: ${unit || 'غير محدد'}
${lessonText ? `- نص أو محتوى الدرس المتاح: ${lessonText.slice(0, 3000)}` : ''}

اكتب الملخص بتنسيق ماركداون (Markdown) بأسلوب ممتع ومشجع وواضح جداً للطلاب باللغة العربية، واجعله يحتوي على الأقسام التالية:
1. 🎯 **الفكرة المحورية للدرس**
2. 📌 **أهم المفاهيم والنقاط الرئيسية**
3. 📐 **القوانين والمعادلات الأساسية** (إن وجدت)
4. 💡 **نصيحة ذهبية للتفوق في أسئلة هذا الدرس**
`;
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });
      if (response.text) return response.text;
    } catch (geminiErr) {
      console.warn("Client-side Gemini API failed, using smart browser template:", geminiErr);
    }
  }

  // Smart Browser Client Fallback for Static Deployments (GitHub Pages)
  return `
🎯 **الفكرة المحورية للدرس:**
يركز درس **"${title}"** في مادة **${subject || 'العلمية'}** (${unit || 'الوحدة الدراسية'}) على فهم الركائز الأساسية والتطبيقات العملية التي تمكنك من الاستيعاب والتفوق في الاختبارات.

📌 **أهم المفاهيم والنقاط الرئيسية:**
• **المفهوم الأول:** فهم العلاقات الرياضية والفيزيائية وتحليل معطيات الدرس بذكاء.
• **المفهوم الثاني:** الربط بين الجانب النظري والتطبيقات العملية في منهج 4U.
• **المفهوم الثالث:** التعرف على أنماط الأسئلة الشائعة في الاختبارات الوزارية وكيفية الإجابة عنها.

📐 **القوانين والمعادلات الأساسية:**
- مراجعة الصيغ الرئيسية المرفقة في بطاقات الاستذكار السريعة.
- التأكد من توحيد الوحدات قبل البدء بالتعويض في القانون.

💡 **نصيحة ذهبية للتفوق:**
قم بمراجعة بطاقات الاستذكار المتباعد الخاصة بهذا الدرس، واختبر نفسك بانتظام لضمان تثبيت المعلومات في الذاكرة طويلة المدى!
`.trim();
}

/**
 * 2. Smart Lesson Q&A Assistant Chat
 */
export async function fetchLessonChatAnswer(params: {
  message: string;
  history: Array<{ role: 'user' | 'model'; text: string }>;
  title: string;
  subject?: string;
  unit?: string;
}): Promise<string> {
  const { message, history, title, subject, unit } = params;

  // Try Server Endpoint First
  try {
    const contextualMessage = `[معلومات الدرس الحالي: "${title}" - المادة: ${subject || 'عام'} - الوحدة: ${unit || 'عام'}]\n\nسؤال الطالب: ${message}`;
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: contextualMessage,
        history
      })
    });
    const data = await parseJsonResponse(res);
    if (data && data.reply) {
      return data.reply;
    }
  } catch (err) {
    console.warn("Backend server not available for chat, using client-side fallback...", err);
  }

  // Try Client-side Gemini
  const viteApiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (viteApiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey: viteApiKey });
      const prompt = `أنت المعلم الافتراضي المساعد لدرس "${title}" (مادة ${subject || 'عام'}). اجب بعناية عن سؤال الطالب التالي باللغة العربية:\n${message}`;
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });
      if (response.text) return response.text;
    } catch (geminiErr) {
      console.warn("Client Gemini chat failed, using smart response:", geminiErr);
    }
  }

  // Smart Client Browser Q&A Fallback
  if (message.includes('لخص') || message.includes('نقاط')) {
    return `إليك تلخيص سريع لدرس **"${title}"** في 3 نقاط محورية:\n1. استيعاب المفهوم العلمي الأساسي وكيفية ارتباطه بالوحدة ${unit || 'المقررة'}.\n2. حفظ وتحليل القوانين والتطبيقات المباشرة.\n3. التدرب على حل نماذج الأسئلة المتكررة لضمان الدرجة النهائية! 🌟`;
  }
  if (message.includes('قانون') || message.includes('معادلة')) {
    return `لدرس **"${title}"**، اهتم بالتركيز على القانون الأساسي وتحديد المعطيات والمطلوب بدقة، واحرص على كتابة خطوات الحل بالترتيب مع كتابة وحدة قياس الناتج النهائي دائماً! 📐`;
  }
  if (message.includes('اختبرني') || message.includes('سؤال')) {
    return `🎯 **سؤال تجريبي لدرس ${title}:**\nما هي الفكرة الأساسية الناظمة لموضوع الدرس؟\n💡 **الإجابة:** تعتمد على فهم العلاقات والتعويض الدقيق في القوانين. يمكنك فتح بطاقات Flashcards لمزيد من الأسئلة والتحديات!`;
  }

  return `أهلاً بك يا بطل! بالنسبة لاستفسارك حول درس **"${title}"**:\nالرجاء التأكد من مراجعة الشرح التفاعلي وبطاقات التكرار المتباعد المتاحة. إذا كان لديك سؤال محدد حول قانون أو مسألة، اكتبه لي وسأساعدك فوراً! 👍`;
}

/**
 * 3. Generate Custom AI Flashcards
 */
export async function fetchGeneratedFlashcards(params: {
  topic: string;
  subject?: string;
}): Promise<any[]> {
  const { topic, subject } = params;

  // Try Server Endpoint
  try {
    const res = await fetch('/api/generate-flashcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, subject })
    });
    const data = await parseJsonResponse(res);
    if (data && Array.isArray(data.cards) && data.cards.length > 0) {
      return data.cards;
    }
  } catch (err) {
    console.warn("Backend server not available for flashcards, using client-side fallback...", err);
  }

  // Client-side Gemini API
  const viteApiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (viteApiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey: viteApiKey });
      const prompt = `أنشئ قائمة بـ 6 بطاقات استذكار لموضوع "${topic}" في مادة "${subject || 'العلوم'}". أرجع النتيجة بتنسيق JSON حصرية كـ array of objects [{id, front, back, category, formula}]`;
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });
      const rawText = response.text || '[]';
      const match = rawText.match(/\[[\s\S]*\]/);
      if (match) return JSON.parse(match[0]);
    } catch (geminiErr) {
      console.warn("Client Gemini flashcards failed:", geminiErr);
    }
  }

  // Fallback preset cards for browser client
  return [
    {
      id: 'custom_1',
      front: `ما هو التعريف الأساسي لموضوع "${topic}"؟`,
      back: `يتضمن موضوع ${topic} المفاهيم والعلاقات الهامة التي تشرح الظواهر والمبادئ الأساسية في المنهج.`,
      category: 'مفهوم أساسي'
    },
    {
      id: 'custom_2',
      front: `كيف يتم تطبيق قواعد "${topic}" في المسائل؟`,
      back: `عن طريق استخراج المعطيات، تحديد القانون المناسب، والتعويض المباشر للحصول على النتائج الدقيقة.`,
      category: 'تطبيق عملي'
    },
    {
      id: 'custom_3',
      front: `ما هي الملاحظة الهامة التي يجب مراعاتها في "${topic}"؟`,
      back: `الانتباه للوحدات والتحويلات واستخدام الإشارات الصحيحة عند التعويض.`,
      category: 'نصيحة اختبارات'
    }
  ];
}
