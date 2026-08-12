import React, { useState } from 'react';
import { Copy, Check, Code, ExternalLink, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

interface StandaloneExporterProps {
  lang: 'en' | 'ar';
}

export const StandaloneExporter: React.FC<StandaloneExporterProps> = ({ lang }) => {
  const [copiedIframe, setCopiedIframe] = useState(false);
  const [copiedJs, setCopiedJs] = useState(false);

  const iframeSnippet = `<iframe 
  src="https://ais-dev-nl432ojs7kekijaffac2nq-684462415759.europe-west2.run.app" 
  width="100%" 
  height="800px" 
  style="border:none; border-radius: 12px; shadow: 0 10px 25px rgba(0,0,0,0.3);" 
  allow="calculator; fullscreen">
</iframe>`;

  const reactIntegrationCode = `import React from 'react';

export const SatMathPlatformEmbed = () => {
  return (
    <div className="w-full h-[850px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      <iframe
        src="https://ais-dev-nl432ojs7kekijaffac2nq-684462415759.europe-west2.run.app"
        className="w-full h-full border-0"
        title="SAT Math Exam Platform"
      />
    </div>
  );
};`;

  const copyToClipboard = (text: string, type: 'iframe' | 'js') => {
    navigator.clipboard.writeText(text);
    if (type === 'iframe') {
      setCopiedIframe(true);
      setTimeout(() => setCopiedIframe(false), 2000);
    } else {
      setCopiedJs(true);
      setTimeout(() => setCopiedJs(false), 2000);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl text-slate-100 max-w-4xl mx-auto my-6 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <div className="p-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-xl">
          <Code className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            {lang === 'ar' ? 'كود الدمج في المنصة الكبيرة (Platform Integration & Embed)' : 'Embed Code for External Platform'}
          </h2>
          <p className="text-xs text-slate-400">
            {lang === 'ar' ? 'انسخ الكود أدناه لدمج هذه المنصة بالكامل داخل المنصة الخاصة بك بضغطة زر واحدة' : 'Copy the snippet below to embed this standalone SAT Math engine directly into your app or website'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* HTML iframe Embed Code */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <span>🌐</span>
              <span>{lang === 'ar' ? 'كود HTML المباشر (Iframe Embed Code)' : 'HTML Iframe Embed Code'}</span>
            </span>

            <button
              onClick={() => copyToClipboard(iframeSnippet, 'iframe')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 rounded-lg text-xs font-bold transition"
            >
              {copiedIframe ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedIframe ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ الكود' : 'Copy Code')}</span>
            </button>
          </div>

          <pre className="p-4 bg-slate-900 rounded-lg font-mono text-xs text-indigo-300 border border-slate-800 overflow-x-auto">
            {iframeSnippet}
          </pre>
        </div>

        {/* React Component Integration */}
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <span>⚛️</span>
              <span>{lang === 'ar' ? 'مكون رياكت للدمج المباشر (React Integration Component)' : 'React Component Integration'}</span>
            </span>

            <button
              onClick={() => copyToClipboard(reactIntegrationCode, 'js')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 rounded-lg text-xs font-bold transition"
            >
              {copiedJs ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedJs ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ الكود' : 'Copy Code')}</span>
            </button>
          </div>

          <pre className="p-4 bg-slate-900 rounded-lg font-mono text-xs text-emerald-300 border border-slate-800 overflow-x-auto">
            {reactIntegrationCode}
          </pre>
        </div>

        {/* Deploy & Export Instructions */}
        <div className="p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl space-y-2 text-xs text-indigo-200">
          <div className="font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ar' ? 'تعليمات التصدير والتضمين السريع:' : 'Seamless Integration Guarantee:'}</span>
          </div>
          <p className="leading-relaxed">
            {lang === 'ar'
              ? 'تتضمن المنصة جميع الأسئلة 120 وحاسبة ديسموس والرسوم التوضيحية SVG محلياً دون الحاجة لأي خادم خارجي أو قواعد بيانات، مما يسهل رفعها على GitHub Pages أو خوادم Vercel/Netlify أو دمجها مباشرة داخل منصتك التعليمية.'
              : 'All 120 SAT math questions, SVG graphics, Desmos calculator solvers, and formula references run standalone on client-side state. You can deploy it to GitHub Pages or embed via iframe directly into your existing educational LMS.'}
          </p>
        </div>
      </div>
    </div>
  );
};
