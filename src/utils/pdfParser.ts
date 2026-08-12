/**
 * Utility to extract text from a lesson URL (which may point to an HTML page containing a PDF)
 * completely client-side in the browser. This bypasses server-side CORS restrictions when
 * running on the same domain (e.g., GitHub Pages).
 */

export async function extractTextFromLessonUrl(lessonUrl: string): Promise<string> {
  console.log(`[Client PDF Parser] Attempting to fetch and extract from: ${lessonUrl}`);
  
  // 1. Fetch the HTML content
  const response = await fetch(lessonUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch HTML page: ${response.statusText}`);
  }
  const htmlText = await response.text();

  // 2. Search for a PDF link in the HTML content
  const pdfMatch = htmlText.match(/['"]([^'"]+\.pdf)['"]/i);
  if (!pdfMatch) {
    console.warn(`[Client PDF Parser] No PDF link found in HTML content.`);
    // Fallback: extract clean text directly from the HTML
    return cleanHtmlText(htmlText);
  }

  const pdfPath = pdfMatch[1];
  const pdfUrl = new URL(pdfPath, lessonUrl).toString();
  console.log(`[Client PDF Parser] Found PDF URL: ${pdfUrl}`);

  // 3. Fetch the PDF as an ArrayBuffer
  const pdfResponse = await fetch(pdfUrl);
  if (!pdfResponse.ok) {
    throw new Error(`Failed to fetch PDF file: ${pdfResponse.statusText}`);
  }
  const arrayBuffer = await pdfResponse.arrayBuffer();

  // 4. Load PDF.js dynamically
  await loadPdfJs();

  // 5. Parse the PDF and extract text from all pages
  const pdfjsLib = (window as any).pdfjsLib;
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  console.log(`[Client PDF Parser] PDF loaded successfully. Total pages: ${pdfDoc.numPages}`);

  let extractedTextParts: string[] = [];
  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    try {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => item.str || "")
        .join(" ")
        .trim();
      
      if (pageText) {
        extractedTextParts.push(`--- الصفحة ${pageNum} ---`);
        extractedTextParts.push(pageText);
      }
    } catch (pageError) {
      console.warn(`[Client PDF Parser] Error parsing page ${pageNum}:`, pageError);
    }
  }

  const fullText = extractedTextParts.join("\n\n").trim();
  console.log(`[Client PDF Parser] Successfully extracted ${fullText.length} characters.`);
  return fullText;
}

/**
 * Loads the PDF.js library and worker from CDN if not already loaded.
 */
function loadPdfJs(): Promise<void> {
  return new Promise((resolve, reject) => {
    const win = window as any;
    if (win.pdfjsLib) {
      resolve();
      return;
    }

    console.log(`[Client PDF Parser] Loading PDF.js from CDN...`);
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload = () => {
      win.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      resolve();
    };
    script.onerror = (err) => {
      reject(new Error("Failed to load PDF.js library script from CDN."));
    };
    document.head.appendChild(script);
  });
}

/**
 * Helper to strip HTML tags and extract readable text.
 */
function cleanHtmlText(html: string): string {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  
  // Remove non-textual tags
  const tagsToRemove = ["script", "style", "nav", "footer", "header", "iframe", "svg"];
  tagsToRemove.forEach(tag => {
    const elements = tempDiv.getElementsByTagName(tag);
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode?.removeChild(elements[i]);
    }
  });

  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text
    .replace(/\s+/g, " ")
    .replace(/[\r\n]+/g, "\n")
    .trim();
}
