import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import cors from "cors";
import { createRequire } from "module";

let PDFParseClass: any;
try {
  if (typeof require !== "undefined") {
    const pdfModule = require("pdf-parse");
    PDFParseClass = pdfModule.PDFParse;
  } else {
    const requireFromEsm = createRequire(import.meta.url);
    const pdfModule = requireFromEsm("pdf-parse");
    PDFParseClass = pdfModule.PDFParse;
  }
} catch (e) {
  console.warn("Failed to import pdf-parse:", e);
}

// In-memory cache for fetched/transcribed lesson texts to provide instantaneous play subsequent times
const lessonTextCache = new Map<string, string>();

dotenv.config();

const app = express();
const PORT = 3000;

// Highly robust standard CORS middleware for cross-origin environments (like GitHub Pages)
app.use(cors({
  origin: true, // Dynamically mirrors the requesting origin (e.g. GitHub Pages), bypassing browser wildcard restrictions
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  credentials: true, // Supports credentials and complex headers from cross-origin requests
  preflightContinue: false,
  optionsSuccessStatus: 200
}));

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

// Robust content generator with automatic retry (exponential backoff) and model fallback
async function generateContentWithFallbackAndRetry(
  ai: GoogleGenAI,
  contents: any[],
  systemInstruction: string
): Promise<any> {
  // Use highly robust and available model sequences
  const modelsToTry = ["gemini-3.6-flash", "gemini-3.1-flash-lite"];
  let lastError: any = null;

  for (const model of modelsToTry) {
    const maxRetries = 2;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[Gemini API] Attempt ${attempt} using model: ${model}`);
        const response = await ai.models.generateContent({
          model: model,
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          },
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const errMsg = String(err.message || err).toLowerCase();
        const isQuotaError = errMsg.includes("quota") || errMsg.includes("429") || errMsg.includes("resource_exhausted") || errMsg.includes("limit");
        const isNotFoundError = errMsg.includes("not found") || errMsg.includes("404") || errMsg.includes("no longer available");
        const isOverloadedError = errMsg.includes("unavailable") || errMsg.includes("503") || errMsg.includes("high demand") || errMsg.includes("busy") || errMsg.includes("overloaded") || errMsg.includes("capacity");

        console.warn(`[Gemini API] Error on attempt ${attempt} with model ${model}:`, err.message || err);

        // If it is a quota limit, overload/unavailability, or deprecation/not-found error, do not retry this model. Fail fast and move to fallback!
        if (isQuotaError || isNotFoundError || isOverloadedError) {
          console.warn(`[Gemini API] Fast-failing model ${model} due to ${isOverloadedError ? "overload" : isQuotaError ? "quota limits" : "model unavailability"}. Trying next fallback...`);
          break; // break the retry loop, moving to the next model in modelsToTry
        }

        if (model === modelsToTry[modelsToTry.length - 1] && attempt === maxRetries) {
          break;
        }

        // Exponential backoff delay (e.g. 600ms, 1200ms) for transient errors (e.g. network)
        const delay = Math.pow(2, attempt - 1) * 600;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error("Failed to generate content with all models and retries");
}

// Robust PDF content generator with automatic retry (exponential backoff) and model fallback
async function generatePdfContentWithFallbackAndRetry(
  ai: GoogleGenAI,
  pdfBase64: string,
  promptText: string
): Promise<any> {
  // Use highly robust and available model sequences for PDF transcription
  const modelsToTry = ["gemini-3.6-flash", "gemini-3.1-flash-lite"];
  let lastError: any = null;

  for (const model of modelsToTry) {
    const maxRetries = 2;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[Gemini PDF OCR] Attempt ${attempt} using model: ${model}`);
        const response = await ai.models.generateContent({
          model: model,
          contents: [
            {
              inlineData: {
                mimeType: "application/pdf",
                data: pdfBase64,
              },
            },
            promptText,
          ],
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const errMsg = String(err.message || err).toLowerCase();
        const isQuotaError = errMsg.includes("quota") || errMsg.includes("429") || errMsg.includes("resource_exhausted") || errMsg.includes("limit");
        const isNotFoundError = errMsg.includes("not found") || errMsg.includes("404") || errMsg.includes("no longer available");
        const isOverloadedError = errMsg.includes("unavailable") || errMsg.includes("503") || errMsg.includes("high demand") || errMsg.includes("busy") || errMsg.includes("overloaded") || errMsg.includes("capacity");

        console.warn(`[Gemini PDF OCR] Error on attempt ${attempt} with model ${model}:`, err.message || err);

        // If it is a quota limit, overload/unavailability, or deprecation/not-found error, do not retry this model. Fail fast and move to fallback!
        if (isQuotaError || isNotFoundError || isOverloadedError) {
          console.warn(`[Gemini PDF OCR] Fast-failing model ${model} due to ${isOverloadedError ? "overload" : isQuotaError ? "quota limits" : "model unavailability"}. Trying next fallback...`);
          break; // break the retry loop, moving to the next model in modelsToTry
        }

        if (model === modelsToTry[modelsToTry.length - 1] && attempt === maxRetries) {
          break;
        }

        // Exponential backoff delay (e.g. 1000ms, 2000ms) for transient errors (e.g. network)
        const delay = Math.pow(2, attempt - 1) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error("Failed to transcribe PDF with all models and retries");
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

    const response = await generateContentWithFallbackAndRetry(ai, contents, SYSTEM_INSTRUCTION);

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

// Endpoint to fetch and parse lesson content (HTML or PDF) to feed to TTS
app.get("/api/fetch-lesson-text", async (req, res) => {
  const lessonUrl = req.query.url as string;
  if (!lessonUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  // 1. Check in-memory cache
  if (lessonTextCache.has(lessonUrl)) {
    console.log(`[Fetch Lesson Text] Cache hit for URL: ${lessonUrl}`);
    return res.json({ text: lessonTextCache.get(lessonUrl) });
  }

  try {
    console.log(`[Fetch Lesson Text] Cache miss. Requesting URL: ${lessonUrl}`);

    // 2. Fetch HTML of the page
    const response = await fetch(lessonUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }

    const htmlText = await response.text();

    // 3. Try to find a PDF link in the HTML
    // We look for strings ending in .pdf inside single/double quotes or simple matches
    const pdfMatch = htmlText.match(/['"]([^'"]+\.pdf)['"]/i);
    let pdfUrl = "";

    if (pdfMatch) {
      const relativePath = pdfMatch[1];
      pdfUrl = new URL(relativePath, lessonUrl).toString();
      console.log(`[Fetch Lesson Text] Found PDF relative path: ${relativePath}, resolved to: ${pdfUrl}`);
    } else if (lessonUrl.toLowerCase().endsWith(".pdf")) {
      pdfUrl = lessonUrl;
    }

    let extractedText = "";

    if (pdfUrl) {
      // 4. Fetch PDF and parse it using pdf-parse or Gemini fallback
      console.log(`[Fetch Lesson Text] Fetching PDF from: ${pdfUrl}`);
      const pdfRes = await fetch(pdfUrl);
      if (pdfRes.ok) {
        const arrayBuffer = await pdfRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        try {
          if (PDFParseClass) {
            console.log(`[Fetch Lesson Text] Trying PDFParseClass text extraction...`);
            const parser = new PDFParseClass({ data: buffer });
            await parser.load();
            const textResult = await parser.getText();
            extractedText = textResult.text || "";
            console.log(`[Fetch Lesson Text] PDFParseClass extracted ${extractedText.length} characters.`);
          }
        } catch (pdfParseError) {
          console.warn(`[Fetch Lesson Text] PDFParseClass error, falling back:`, pdfParseError);
        }

        // 5. Intelligent Fallback: If pdf-parse failed, or if it extracted < 350 characters (indicating a scanned/image PDF)
        const isMinimallyExtracted = !extractedText.trim() || extractedText.trim().length < 350;
        const hasGeminiKey = !!process.env.GEMINI_API_KEY;

        if (isMinimallyExtracted && hasGeminiKey) {
          console.log(`[Fetch Lesson Text] PDF text is minimal or empty (${extractedText.trim().length} chars). Invoking Gemini OCR & transcription...`);
          try {
            const ai = getAiClient();
            const base64 = buffer.toString("base64");
            const promptText = "أنت المعلم الافتراضي الذكي لمادة العلوم. اقرأ ملف شرح الدرس المرفق واشرح محتواه بالتفصيل باللغة العربية الفصحى شرحاً وافياً وممتعاً ومبسّطاً للطلاب وكأنك تلقي درساً صوتياً رائعاً في الفصل. اكتب الشرح في شكل فقرات نصية متصلة وواضحة جداً لتتم قراءتها بواسطة قارئ النصوص الصوتي (لا تستخدم أبداً جداول أو رموزاً غريبة أو معادلات معقدة، فقط لغة عربية فصحى جميلة مشروحة للطلاب). ركز على تفسير المفاهيم الفيزيائية والقوانين بشكل لفظي واضح وسلس يستطيع الطالب استيعابه سماعياً.";
            
            const genRes = await generatePdfContentWithFallbackAndRetry(ai, base64, promptText);

            if (genRes.text && genRes.text.trim().length > 100) {
              extractedText = genRes.text;
              console.log(`[Fetch Lesson Text] Successfully generated Gemini detailed lesson description of length ${extractedText.length}`);
            }
          } catch (geminiError) {
            console.error(`[Fetch Lesson Text] Gemini PDF parsing failed:`, geminiError);
          }
        }
      } else {
        console.warn(`[Fetch Lesson Text] Failed to fetch PDF from resolved URL: ${pdfRes.statusText}`);
      }
    }

    // 6. Fallback: If no PDF found or PDF parsing yielded empty result, clean up HTML text and return it
    if (!extractedText.trim()) {
      console.log(`[Fetch Lesson Text] No PDF text extracted. Falling back to cleaning HTML text...`);
      // Simple HTML tags & scripts stripper
      let cleanHtml = htmlText
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      extractedText = cleanHtml;
    }

    // Clean up excessive whitespace/newlines/decorative characters from the extracted text
    let formattedText = extractedText
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+/g, " ")
      .trim();

    // 7. Store in-memory cache
    lessonTextCache.set(lessonUrl, formattedText);

    // Send back extracted text
    res.json({ text: formattedText });

  } catch (error: any) {
    console.error("[Fetch Lesson Text] Error:", error);
    res.status(500).json({ 
      error: "Failed to extract text from lesson link", 
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
