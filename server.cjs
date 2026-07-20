var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_cors = __toESM(require("cors"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use((0, import_cors.default)({
  origin: true,
  // Dynamically mirrors the requesting origin (e.g. GitHub Pages), bypassing browser wildcard restrictions
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  credentials: true,
  // Supports credentials and complex headers from cross-origin requests
  preflightContinue: false,
  optionsSuccessStatus: 200
}));
app.use(import_express.default.json());
var aiClient = null;
function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required in Settings > Secrets!");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
async function generateContentWithFallbackAndRetry(ai, contents, systemInstruction) {
  const modelsToTry = ["gemini-3.5-flash", "gemini-3.1-flash-lite"];
  let lastError = null;
  for (const model of modelsToTry) {
    const maxRetries = 3;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[Gemini API] Attempt ${attempt} using model: ${model}`);
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction,
            temperature: 0.7
          }
        });
        return response;
      } catch (err) {
        lastError = err;
        console.warn(`[Gemini API] Error on attempt ${attempt} with model ${model}:`, err.message || err);
        if (model === modelsToTry[modelsToTry.length - 1] && attempt === maxRetries) {
          break;
        }
        const delay = Math.pow(2, attempt - 1) * 600;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    console.warn(`[Gemini API] Model ${model} failed after all retries. Trying fallback model...`);
  }
  throw lastError || new Error("Failed to generate content with all models and retries");
}
var SYSTEM_INSTRUCTION = `
\u0623\u0646\u062A "\u0627\u0644\u0645\u0639\u0644\u0645 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A" \u0627\u0644\u062D\u0643\u064A\u0645 \u0648\u0627\u0644\u0648\u062F\u0648\u062F \u0639\u0644\u0649 "\u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 4U".
\u0645\u0647\u0645\u062A\u0643 \u0647\u064A \u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0637\u0627\u0644\u0628 \u0648\u0645\u0631\u0627\u062C\u0639\u062A\u0647 \u0641\u064A \u062F\u0631\u0648\u0633\u0647\u060C \u0648\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0644\u0649 \u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A\u0647 \u0627\u0644\u0639\u0627\u0645\u0629 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0645\u0646\u0647\u062C \u0627\u0644\u062F\u0631\u0627\u0633\u064A (\u0633\u0648\u0627\u0621 \u0644\u0628\u0644\u062F\u0627\u0646 \u0627\u0644\u062E\u0644\u064A\u062C \u0645\u062B\u0644 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A\u060C \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u060C \u0642\u0637\u0631\u060C \u0639\u0645\u0627\u0646\u060C \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0623\u0648 \u0645\u0635\u0631).
- \u0645\u0645\u0646\u0648\u0639 \u062A\u0645\u0627\u0645\u0627\u064B \u0630\u0643\u0631 \u0623\u0633\u0645\u0627\u0621 "\u062C\u064A\u0645\u0646\u064A" (Gemini) \u0623\u0648 "\u0634\u0627\u062A \u062C\u064A \u0628\u064A \u062A\u064A" (ChatGPT) \u0623\u0648 "\u062C\u0648\u062C\u0644" (Google) \u0623\u0648 \u0623\u064A \u0623\u062F\u0627\u0629 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0623\u062E\u0631\u0649. \u0625\u0630\u0627 \u0633\u0623\u0644\u0643 \u0627\u0644\u0637\u0627\u0644\u0628 \u0645\u0646 \u0623\u0646\u062A\u060C \u0623\u062E\u0628\u0631\u0647 \u0628\u0643\u0644 \u062D\u0628: "\u0623\u0646\u0627 \u0645\u0639\u0644\u0645\u0643 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0648\u0645\u0633\u062A\u0634\u0627\u0631\u0643 \u0627\u0644\u062F\u0631\u0627\u0633\u064A \u0639\u0644\u0649 \u0645\u0646\u0635\u0629 4U\u060C \u0645\u062A\u0648\u0627\u062C\u062F \u062F\u0627\u0626\u0645\u0627\u064B \u0647\u0646\u0627 \u0644\u0623\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u0631\u062D\u0644\u062A\u0643 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0633\u062D\u0642 \u0627\u0644\u0627\u0645\u062A\u062D\u0627\u0646\u0627\u062A! \u064A\u0644\u0627 \u0646\u0631\u0627\u062C\u0639 \u0645\u0639 \u0628\u0639\u0636 \u2728".
- \u062A\u0641\u0627\u0639\u0644 \u0645\u0639 \u0627\u0644\u0637\u0627\u0644\u0628 \u0628\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0645\u0639\u0644\u0645 \u0627\u0644\u062D\u0646\u0648\u0646\u060C \u0627\u0644\u062F\u0627\u0641\u0626 \u0648\u0627\u0644\u0645\u0634\u062C\u0639. \u0627\u0633\u062A\u062E\u062F\u0645 \u0639\u0628\u0627\u0631\u0627\u062A \u0625\u064A\u062C\u0627\u0628\u064A\u0629 \u0645\u062B\u0644 "\u064A\u0627 \u0628\u0637\u0644"\u060C "\u064A\u0627 \u0645\u062A\u0645\u064A\u0632\u0629"\u060C "\u064A\u0627 \u0628\u0637\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644"\u060C "\u0623\u062D\u0633\u0646\u062A"\u060C "\u0633\u0624\u0627\u0644 \u0630\u0643\u064A \u062C\u062F\u0627\u064B!"\u060C "\u0641\u062E\u0648\u0631 \u0628\u0643 \u0648\u0628\u0627\u0647\u062A\u0645\u0627\u0645\u0643".
- \u0628\u0633\u0651\u0637 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0627\u0644\u0645\u0639\u0642\u062F\u0629\u060C \u0648\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0646\u0642\u0637\u064A \u0623\u0648 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0627\u0644\u0628\u0633\u064A\u0637\u0629 \u0639\u0646\u062F \u0627\u0644\u062D\u0627\u062C\u0629.
- \u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u064A\u0629 \u0628\u062D\u0643\u0645\u0629 \u0648\u0645\u0631\u062D \u0644\u062A\u0633\u0647\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 (\u0645\u062B\u0644: \u{1F525}, \u{1F4DA}, \u2728, \u{1F680}, \u{1F393}, \u{1F4A1}, \u{1F4DD}).
- \u062A\u0648\u0627\u0635\u0644 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u0644\u0647\u062C\u0629 \u0628\u064A\u0636\u0627\u0621 \u0623\u0648 \u0641\u0635\u062D\u0649 \u0645\u0628\u0633\u0637\u0629 \u0648\u0648\u0627\u0636\u062D\u0629 \u062C\u062F\u0627\u064B\u060C \u0648\u0625\u0630\u0627 \u0633\u0623\u0644\u0643 \u0627\u0644\u0637\u0627\u0644\u0628 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0623\u062C\u0628 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0628\u0623\u0633\u0644\u0648\u0628 \u0645\u0634\u062C\u0639 \u0648\u0628\u0633\u064A\u0637 \u0648\u0645\u0646\u0627\u0633\u0628 \u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u062F\u0627\u0631\u0633.
- \u0631\u0643\u0632 \u0639\u0644\u0649 \u062A\u0639\u0632\u064A\u0632 \u062B\u0642\u062A\u0647 \u0628\u0646\u0641\u0633\u0647 \u0648\u0630\u0643\u0651\u0631\u0647 \u0628\u0623\u0647\u0645\u064A\u0629 \u0627\u0644\u0645\u0630\u0627\u0643\u0631\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u064A\u0629 \u0644\u062A\u062D\u0642\u064A\u0642 \u0623\u062D\u0644\u0627\u0645\u0647.
`;
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    const ai = getAiClient();
    const contents = [];
    if (history && Array.isArray(history)) {
      history.forEach((msg) => {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });
    const response = await generateContentWithFallbackAndRetry(ai, contents, SYSTEM_INSTRUCTION);
    const reply = response.text || "\u0639\u0630\u0631\u0627\u064B \u064A\u0627 \u0628\u0637\u0644\u060C \u0644\u0645 \u0623\u0633\u062A\u0637\u0639 \u0635\u064A\u0627\u063A\u0629 \u0631\u062F \u0645\u0646\u0627\u0633\u0628 \u062D\u0627\u0644\u064A\u0627\u064B. \u062D\u0627\u0648\u0644 \u0637\u0631\u062D \u0633\u0624\u0627\u0644\u0643 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649!";
    res.json({ reply });
  } catch (error) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({
      error: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u0639\u0644\u0645 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A.",
      details: error.message || error
    });
  }
});
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
initServer().catch((err) => {
  console.error("Failed to start server:", err);
});
//# sourceMappingURL=server.cjs.map
