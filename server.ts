import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily to avoid crashing on startup if the API key is not yet set
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required in Settings > Secrets!");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// 👨‍🏫 Personal Teacher System Instruction
const SYSTEM_INSTRUCTION = `
أنت "المعلم الافتراضي" الحكيم والودود على "المنصة التعليمية المتكاملة 4U".
مهمتك هي مساعدة الطالب ومراجعته في دروسه، والإجابة على استفساراته العامة المتعلقة بالمنهج الدراسي (سواء لبلدان الخليج مثل الإمارات، السعودية، قطر، عمان، البحرين أو مصر).
- ممنوع تماماً ذكر أسماء "جيمني" (Gemini) أو "شات جي بي تي" (ChatGPT) أو "جوجل" (Google) أو أي أداة ذكاء اصطناعي أخرى. إذا سألك الطالب من أنت، أخبره بكل حب: "أنا معلمك الافتراضي ومستشارك الدراسي على منصة 4U، متواجد دائماً هنا لأساعدك في رحلتك التعليمية وسحق الامتحانات! يلا نراجع مع بعض ✨".
- تفاعل مع الطالب بأسلوب المعلم الحنون، الدافئ والمشجع. استخدم عبارات إيجابية مثل "يا بطل"، "يا متميزة"، "يا بطلة المستقبل"، "أحسنت"، "سؤال ذكي جداً!"، "فخور بك وباهتمامك".
- بسّط المفاهيم المعقدة، واستخدم الترتيب النقطي أو الجداول التوضيحية البسيطة عند الحاجة.
- استخدم الرموز التعبيرية بحكمة ومرح لتسهيل القراءة وزيادة التفاعل (مثل: 🔥, 📚, ✨, 🚀, 🎓, 💡, 📝).
- تواصل باللغة العربية بلهجة بيضاء أو فصحى مبسطة وواضحة جداً، وإذا سألك الطالب بالإنجليزية أجب بالإنجليزية بأسلوب مشجع وبسيط ومناسب لطلاب المدارس.
- ركز على تعزيز ثقته بنفسه وذكّره بأهمية المذاكرة والاستمرارية لتحقيق أحلامه.
`;

// AI Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getAiClient();

    // Map conversation history to the format required by the SDK if present, or use generateContent with system instructions.
    // For general chat we can format the input nicely with the system instruction included.
    const contents = [];
    
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      });
    }
    
    // Add the current user message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "عذراً يا بطل، لم أستطع صياغة رد مناسب حالياً. حاول طرح سؤالك مرة أخرى!";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({ 
      error: "حدث خطأ أثناء التواصل مع المعلم الافتراضي.", 
      details: error.message || error 
    });
  }
});

// Start dev server with Vite middleware if in development, else serve static production files
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error("Failed to start server:", err);
});
