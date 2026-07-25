import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  text: string;
  className?: string;
  inline?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ text, className = '', inline = true }) => {
  if (!text) return null;

  // Split text by LaTeX delimiters $ ... $ or $$ ... $$
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);

  return (
    <span className={`inline-wrap ${className}`}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const formula = part.slice(2, -2).trim();
          try {
            const html = katex.renderToString(formula, { displayMode: true, throwOnError: false });
            return (
              <span
                key={index}
                className="my-2 block text-center overflow-x-auto py-1 font-sans"
                dir="ltr"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (e) {
            return <code key={index} className="text-red-500">{formula}</code>;
          }
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const formula = part.slice(1, -1).trim();
          try {
            const html = katex.renderToString(formula, { displayMode: inline, throwOnError: false });
            return (
              <span
                key={index}
                className="inline-block px-1 font-sans mx-0.5"
                dir="ltr"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (e) {
            return <code key={index} className="text-red-500">{formula}</code>;
          }
        }
        // Plain text part (Arabic or English) without dollar signs
        const cleanPart = part.replace(/\$/g, '');
        return <span key={index}>{cleanPart}</span>;
      })}
    </span>
  );
};

