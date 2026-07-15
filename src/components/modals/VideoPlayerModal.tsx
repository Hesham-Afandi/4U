import React from 'react';
import { Play, ExternalLink, Video, AlertCircle } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle: string;
  videoUrl: string;
}

export function getEmbedUrl(url: string): { type: 'youtube' | 'drive' | 'direct' | 'iframe'; url: string } {
  if (!url) return { type: 'iframe', url: '' };

  // YouTube match
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const ytMatch = url.match(ytRegex);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
    };
  }

  // Google Drive match
  if (url.includes('drive.google.com')) {
    let embedUrl = url;
    if (url.includes('/view')) {
      embedUrl = url.replace('/view', '/preview');
    } else if (url.includes('/file/d/')) {
      const match = url.match(/\/file\/d\/([^\/]+)/);
      if (match && match[1]) {
        embedUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return { type: 'drive', url: embedUrl };
  }

  // Direct MP4 / WebM
  if (url.match(/\.(mp4|webm|ogg)($|\?)/i)) {
    return { type: 'direct', url };
  }

  return { type: 'iframe', url };
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  lessonTitle,
  videoUrl,
}) => {
  if (!isOpen) return null;

  // If no URL is provided, we can show a message or a high-quality default educational physics/math video
  const resolvedUrl = videoUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Sample/default fallback if empty
  const embedInfo = getEmbedUrl(resolvedUrl);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 text-right flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex-row-reverse">
          <div className="flex items-center gap-2 flex-row-reverse">
            <span className="text-xl">🎥</span>
            <h3 className="text-lg font-black text-slate-800 dark:text-white">
              فيديو الشرح: {lessonTitle}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-3xl text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer select-none leading-none"
          >
            ×
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black w-full aspect-video flex items-center justify-center">
          {!videoUrl ? (
            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center bg-slate-950 text-white space-y-4">
              <div className="p-4 bg-amber-500/10 text-amber-400 rounded-full">
                <Video className="w-12 h-12" />
              </div>
              <h4 className="text-lg font-bold text-slate-200">فيديو الشرح قيد الرفع والتحضير ⏳</h4>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                يقوم المعلم حالياً بإعداد وتصوير الفيديو الخاص بهذا الجزء المنهجي وسيتم إضافته للمنصة فوراً. يمكنك في الوقت الحالي تصفح شرح الدرس التفاعلي والبدء في حل الاختبار المباشر!
              </p>
              <button
                onClick={onClose}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 px-5 rounded-xl text-xs transition shadow-md"
              >
                تصفح شرح الدرس التفاعلي الآن
              </button>
            </div>
          ) : embedInfo.type === 'direct' ? (
            <video 
              src={embedInfo.url} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={embedInfo.url}
              title={lessonTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            💡 نصيحة: يمكنك تدوين ملاحظاتك الهامة بأسفل صفحة الدرس أثناء المشاهدة!
          </div>
          
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>فتح الفيديو في نافذة خارجية مستقلة</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
