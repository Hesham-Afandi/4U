import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, Send, X, Image as ImageIcon, Paperclip, Mic, MicOff, 
  Square, Play, Pause, Download, Folder, FileText, Music, Crown, Users, 
  Sparkles, AlertCircle, Search, Filter, RefreshCw, CheckCircle2, ChevronDown, Eye, ShieldAlert
} from 'lucide-react';
import { collection, addDoc, onSnapshot, query, orderBy, limit, serverTimestamp, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { containsProfanity, sanitizeText } from '../../utils/profanityFilter';

interface ChatRoom {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradeBadge?: string;
}

const CHAT_ROOMS: ChatRoom[] = [
  { id: 'general', name: 'الشات العام المفتوح', icon: '🌐', description: 'ملتقى جميع الطلاب والمعلمين من كافة الصفوف والمراحل الدراسية', gradeBadge: 'الكل' },
  { id: 'grade12_adv', name: 'الصف 12 متقدم', icon: '🎓', description: 'غرفة النقاش وحل أسئلة وااختبارات الصف الثاني عشر متقدم', gradeBadge: '12 متقدم' },
  { id: 'grade12_gen', name: 'الصف 12 عام', icon: '🎓', description: 'غرفة النقاش والحلول المنهجية للصف الثاني عشر عام', gradeBadge: '12 عام' },
  { id: 'grade11_adv', name: 'الصف 11 متقدم', icon: '🎓', description: 'مساحة الحوار والمذاكرة للصف الحادي عشر متقدم', gradeBadge: '11 متقدم' },
  { id: 'grade11_gen', name: 'الصف 11 عام', icon: '🎓', description: 'مساحة الحوار والمذاكرة للصف الحادي عشر عام', gradeBadge: '11 عام' },
  { id: 'grade10_adv', name: 'الصف 10 متقدم', icon: '📚', description: 'مناقشات ومراجعات الصف العاشر متقدم', gradeBadge: '10 متقدم' },
  { id: 'grade10_gen', name: 'الصف 10 عام', icon: '📚', description: 'مناقشات ومراجعات الصف العاشر عام', gradeBadge: '10 عام' },
  { id: 'grade9_adv', name: 'الصف 9 متقدم', icon: '✏️', description: 'مساحة التواصل لطلاب الصف التاسع متقدم', gradeBadge: '9 متقدم' },
  { id: 'grade9_gen', name: 'الصف 9 عام', icon: '✏️', description: 'مساحة التواصل لطلاب الصف التاسع عام', gradeBadge: '9 عام' }
];

export interface ChatMessage {
  id: string;
  roomId: string;
  senderUid: string;
  senderName: string;
  senderEmail: string;
  senderPhoto?: string;
  senderRole?: 'admin' | 'user';
  text?: string;
  // Attachment fields
  fileUrl?: string;
  fileName?: string;
  fileType?: string; // 'image' | 'pdf' | 'doc' | 'audio' | 'file'
  fileSize?: string;
  audioUrl?: string;
  audioDuration?: number;
  createdAt: string | any;
}

interface GeneralChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
  } | null;
  isAdmin: boolean;
  userGradeName?: string;
}

export const GeneralChatModal: React.FC<GeneralChatModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  isAdmin,
  userGradeName
}) => {
  // Determine initial chat room based on user's grade
  const getInitialRoomId = () => {
    if (!userGradeName) return 'general';
    if (userGradeName.includes('12') && userGradeName.includes('متقدم')) return 'grade12_adv';
    if (userGradeName.includes('12')) return 'grade12_gen';
    if (userGradeName.includes('11') && userGradeName.includes('متقدم')) return 'grade11_adv';
    if (userGradeName.includes('11')) return 'grade11_gen';
    if (userGradeName.includes('10') && userGradeName.includes('متقدم')) return 'grade10_adv';
    if (userGradeName.includes('10')) return 'grade10_gen';
    if (userGradeName.includes('9') && userGradeName.includes('متقدم')) return 'grade9_adv';
    if (userGradeName.includes('9')) return 'grade9_gen';
    return 'general';
  };

  const [activeRoomId, setActiveRoomId] = useState<string>('general');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(true);
  const [profanityWarning, setProfanityWarning] = useState<string | null>(null);

  // Attachment states
  const [attachedFile, setAttachedFile] = useState<{
    url: string;
    name: string;
    type: 'image' | 'pdf' | 'doc' | 'audio' | 'file';
    size: string;
  } | null>(null);

  // Voice recording states
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<any>(null);

  // Shared Files / Media Library Drawer View
  const [showMediaLibrary, setShowMediaLibrary] = useState<boolean>(false);
  const [mediaFilter, setMediaFilter] = useState<'all' | 'images' | 'docs' | 'audio'>('all');
  const [mediaSearchQuery, setMediaSearchQuery] = useState<string>('');

  // Audio playback state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioElementsRef = useRef<Record<string, HTMLAudioElement>>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Set initial room when modal opens
  useEffect(() => {
    if (isOpen) {
      const initial = getInitialRoomId();
      setActiveRoomId(initial);
    }
  }, [isOpen, userGradeName]);

  // Real-time Firestore message subscription
  useEffect(() => {
    if (!isOpen || !activeRoomId) return;

    setIsLoadingMessages(true);
    const messagesCol = collection(db, 'community_chats', activeRoomId, 'messages');
    const q = query(messagesCol, orderBy('createdAt', 'asc'), limit(250));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched: ChatMessage[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        let formattedDate = 'الآن';
        if (data.createdAt) {
          if (typeof data.createdAt === 'string') {
            formattedDate = new Date(data.createdAt).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
          } else if (data.createdAt.toDate) {
            formattedDate = data.createdAt.toDate().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
          }
        }
        fetched.push({
          id: docSnap.id,
          roomId: activeRoomId,
          senderUid: data.senderUid || '',
          senderName: data.senderName || 'طالب المنصة',
          senderEmail: data.senderEmail || '',
          senderPhoto: data.senderPhoto || '',
          senderRole: data.senderRole || 'user',
          text: data.text || '',
          fileUrl: data.fileUrl || '',
          fileName: data.fileName || '',
          fileType: data.fileType || '',
          fileSize: data.fileSize || '',
          audioUrl: data.audioUrl || '',
          audioDuration: data.audioDuration || 0,
          createdAt: formattedDate
        });
      });
      setMessages(fetched);
      setIsLoadingMessages(false);
      setTimeout(() => scrollToBottom(), 100);
    }, (err) => {
      console.warn("Firestore realtime chat notice:", err);
      setIsLoadingMessages(false);
    });

    return () => unsubscribe();
  }, [isOpen, activeRoomId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle Send Message
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!currentUser) return;
    if (!inputText.trim() && !attachedFile) return;

    // Check for profanity and offensive language
    if (containsProfanity(inputText)) {
      setProfanityWarning('⚠️ يُحظر إرسال الألفاظ غير اللائقة أو البذيئة أو الشتم في الشات العام. يرجى الالتزام بالحديث المحترم الراقي.');
      return;
    }

    setProfanityWarning(null);
    setIsSending(true);

    const messagePayload = {
      roomId: activeRoomId,
      senderUid: currentUser.uid,
      senderName: currentUser.displayName || currentUser.email.split('@')[0] || 'طالب المنصة',
      senderEmail: currentUser.email,
      senderPhoto: currentUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(currentUser.email)}`,
      senderRole: isAdmin ? 'admin' : 'user',
      text: sanitizeText(inputText.trim()),
      fileUrl: attachedFile?.url || '',
      fileName: attachedFile?.name || '',
      fileType: attachedFile?.type || '',
      fileSize: attachedFile?.size || '',
      createdAt: new Date().toISOString()
    };

    try {
      const messagesCol = collection(db, 'community_chats', activeRoomId, 'messages');
      await addDoc(messagesCol, messagePayload);

      // Clear states
      setInputText('');
      setAttachedFile(null);
      setTimeout(() => scrollToBottom(), 100);
    } catch (err) {
      console.error("Error sending message to Firestore:", err);
    } finally {
      setIsSending(false);
    }
  };

  // Helper to format byte sizes
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Handle File Selection
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isImageOnly = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 8MB for inline base64 preview/storage)
    if (file.size > 8 * 1024 * 1024) {
      alert('حجم الملف كبير جداً! الحد الأقصى المسموح به هو 8 ميجابايت.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      let detectedType: 'image' | 'pdf' | 'doc' | 'audio' | 'file' = 'file';

      if (file.type.startsWith('image/')) detectedType = 'image';
      else if (file.type === 'application/pdf') detectedType = 'pdf';
      else if (file.type.startsWith('audio/')) detectedType = 'audio';
      else if (file.type.includes('word') || file.type.includes('document')) detectedType = 'doc';

      setAttachedFile({
        url: result,
        name: file.name,
        type: detectedType,
        size: formatBytes(file.size)
      });
    };
    reader.readAsDataURL(file);
    // Reset file input
    e.target.value = '';
  };

  // Voice Recording Functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64Audio = reader.result as string;
          if (currentUser) {
            setIsSending(true);
            const messagePayload = {
              roomId: activeRoomId,
              senderUid: currentUser.uid,
              senderName: currentUser.displayName || currentUser.email.split('@')[0] || 'طالب المنصة',
              senderEmail: currentUser.email,
              senderPhoto: currentUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(currentUser.email)}`,
              senderRole: isAdmin ? 'admin' : 'user',
              text: '🎙️ تسجيل صوتي',
              audioUrl: base64Audio,
              audioDuration: recordingTime,
              createdAt: new Date().toISOString()
            };
            try {
              const messagesCol = collection(db, 'community_chats', activeRoomId, 'messages');
              await addDoc(messagesCol, messagePayload);
            } catch (err) {
              console.error("Error sending voice message:", err);
            } finally {
              setIsSending(false);
            }
          }
        };
        reader.readAsDataURL(audioBlob);
        
        // Stop all track media streams
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (err) {
      alert('تعذر الوصول إلى الميكروفون. يرجى السماح بتسجيل الصوت في إعدادات المتصفح.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.onstop = null; // Detach onstop callback
      mediaRecorderRef.current.stop();
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }
      setIsRecording(false);
      setRecordingTime(0);
    }
  };

  // Toggle audio play
  const togglePlayAudio = (msgId: string, url: string) => {
    if (playingAudioId === msgId) {
      audioElementsRef.current[msgId]?.pause();
      setPlayingAudioId(null);
    } else {
      // Pause all other audios
      Object.values(audioElementsRef.current).forEach((a: HTMLAudioElement) => a?.pause());
      if (!audioElementsRef.current[msgId]) {
        const audio = new Audio(url);
        audio.onended = () => setPlayingAudioId(null);
        audioElementsRef.current[msgId] = audio;
      }
      audioElementsRef.current[msgId].play();
      setPlayingAudioId(msgId);
    }
  };

  // Compute attached media count for shared files drawer button
  const attachedMediaList = messages.filter(m => m.fileUrl || m.audioUrl);
  const imageCount = attachedMediaList.filter(m => m.fileType === 'image').length;
  const docsCount = attachedMediaList.filter(m => m.fileType === 'pdf' || m.fileType === 'doc' || m.fileType === 'file').length;
  const audioCount = attachedMediaList.filter(m => m.audioUrl || m.fileType === 'audio').length;

  const filteredMedia = attachedMediaList.filter(m => {
    const matchesFilter = 
      mediaFilter === 'all' ? true :
      mediaFilter === 'images' ? m.fileType === 'image' :
      mediaFilter === 'docs' ? (m.fileType === 'pdf' || m.fileType === 'doc' || m.fileType === 'file') :
      mediaFilter === 'audio' ? (!!m.audioUrl || m.fileType === 'audio') : true;

    const matchesSearch = mediaSearchQuery.trim() === '' ? true :
      (m.fileName?.toLowerCase().includes(mediaSearchQuery.toLowerCase()) ||
       m.senderName.toLowerCase().includes(mediaSearchQuery.toLowerCase()) ||
       m.text?.toLowerCase().includes(mediaSearchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const activeRoom = CHAT_ROOMS.find(r => r.id === activeRoomId) || CHAT_ROOMS[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-hidden">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="relative w-full max-w-5xl h-[92vh] max-h-[850px] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
      >
        {/* MODAL HEADER */}
        <div className="gradient-primary px-4 md:px-6 py-3.5 flex items-center justify-between gap-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-300">
              <MessageSquare className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base md:text-lg text-white">
                  غرف الدردشة والتواصل الطلابي المباشر
                </h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  مباشر ومحفوظ
                </span>
              </div>
              <p className="text-xs text-white/80 font-medium hidden sm:block">
                تواصل وتفاعل مع زملائك - جميع الرسائل والمرفقات محفوظة دائمًا
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Shared Files & Media Library Drawer Toggle */}
            <button
              type="button"
              onClick={() => setShowMediaLibrary(!showMediaLibrary)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                showMediaLibrary 
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-black' 
                  : 'bg-white/10 hover:bg-white/20 text-amber-300 border-white/20'
              }`}
              title="مكتبة الملفات والوسائط المرفوعة"
            >
              <Folder className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="hidden md:inline">مكتبة المرفقات</span>
              <span className="bg-slate-950 text-amber-300 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                {attachedMediaList.length}
              </span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              title="إغلاق الشات"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CHAT ROOM SELECTOR BAR (Horizontal Scrollable Tabs) */}
        <div className="bg-slate-950/90 border-b border-slate-800/80 p-2.5 px-4 flex items-center gap-2 overflow-x-auto custom-scrollbar shrink-0">
          <span className="text-xs font-extrabold text-amber-400 whitespace-nowrap pl-1 flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>اختر الغرفة:</span>
          </span>

          {CHAT_ROOMS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomId(room.id);
                  setShowMediaLibrary(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 border shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{room.icon}</span>
                <span>{room.name}</span>
                {room.gradeBadge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${
                    isActive ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {room.gradeBadge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE ROOM DESCRIPTION BADGE */}
        <div className="bg-slate-950/50 px-4 py-1.5 border-b border-slate-800/60 text-xs text-slate-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="text-amber-300 font-bold">{activeRoom.icon} {activeRoom.name}:</span>
            <span className="text-slate-300 truncate">{activeRoom.description}</span>
          </div>
          <span className="text-[10px] text-slate-500 shrink-0 font-mono hidden sm:inline">
            سجل محفوظ دائماً • Firestore DB
          </span>
        </div>

        {/* MAIN BODY: CHAT MESSAGES OR MEDIA LIBRARY DRAWER */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-slate-950/40">
          
          {showMediaLibrary ? (
            /* ========================================================= */
            /* 📁 SHARED FILES & MEDIA LIBRARY VIEW                      */
            /* ========================================================= */
            <div className="flex-1 flex flex-col p-4 overflow-y-auto custom-scrollbar space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                <div>
                  <h4 className="font-extrabold text-sm text-amber-300 flex items-center gap-2">
                    <Folder className="w-4 h-4 text-amber-400" />
                    <span>مكتبة وسائط وملفات ({activeRoom.name})</span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    استعرض وقم بتحميل جميع الصور، المستندات والتسجيلات الصوتية المرفوعة في هذا الشات
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto justify-center">
                  <button
                    onClick={() => setMediaFilter('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      mediaFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    الكل ({attachedMediaList.length})
                  </button>
                  <button
                    onClick={() => setMediaFilter('images')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      mediaFilter === 'images' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🖼️ الصور ({imageCount})
                  </button>
                  <button
                    onClick={() => setMediaFilter('docs')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      mediaFilter === 'docs' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    📄 المستندات ({docsCount})
                  </button>
                  <button
                    onClick={() => setMediaFilter('audio')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      mediaFilter === 'audio' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🎙️ صوتيات ({audioCount})
                  </button>
                </div>
              </div>

              {/* Search Bar for Media */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن ملف، اسم الطالب أو عنوان..."
                  value={mediaSearchQuery}
                  onChange={(e) => setMediaSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 pr-9 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <Search className="w-4 h-4 absolute right-3 top-2.5 text-slate-500 pointer-events-none" />
              </div>

              {/* Media Items Grid */}
              {filteredMedia.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500 space-y-2 my-auto">
                  <Folder className="w-12 h-12 text-slate-600 opacity-50" />
                  <p className="font-bold text-sm text-slate-400">لا توجد مرفقات في هذه الفئة حالياً</p>
                  <p className="text-xs text-slate-500">قم برفع صورة، ملف PDF أو تسجيل صوتي في الشات ليظهر هنا فوراً</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredMedia.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-3 rounded-2xl flex flex-col justify-between space-y-2 transition shadow-sm group"
                    >
                      {/* Sender Info */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 truncate">
                          <img 
                            src={item.senderPhoto || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(item.senderEmail)}`} 
                            alt={item.senderName} 
                            className="w-6 h-6 rounded-full border border-indigo-500 shrink-0"
                          />
                          <span className="font-bold text-slate-200 truncate">{item.senderName}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 shrink-0">{item.createdAt}</span>
                      </div>

                      {/* Content Preview */}
                      {item.fileType === 'image' && item.fileUrl && (
                        <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 h-36 flex items-center justify-center">
                          <img 
                            src={item.fileUrl} 
                            alt={item.fileName || 'مرفق صورة'} 
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                          <a 
                            href={item.fileUrl} 
                            download={item.fileName || 'image.png'}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 text-white font-bold text-xs"
                          >
                            <Download className="w-4 h-4 text-amber-300" />
                            <span>تحميل الصورة</span>
                          </a>
                        </div>
                      )}

                      {(item.fileType === 'pdf' || item.fileType === 'doc' || item.fileType === 'file') && (
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                          <FileText className="w-8 h-8 text-indigo-400 shrink-0" />
                          <div className="truncate flex-1">
                            <p className="text-xs font-bold text-slate-200 truncate">{item.fileName || 'مستند مرفق'}</p>
                            <span className="text-[10px] text-slate-400">{item.fileSize || 'مستند'}</span>
                          </div>
                          {item.fileUrl && (
                            <a
                              href={item.fileUrl}
                              download={item.fileName || 'document.pdf'}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition shrink-0"
                              title="تحميل الملف"
                            >
                              <Download className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      )}

                      {item.audioUrl && (
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
                            <span className="flex items-center gap-1">
                              <Music className="w-3.5 h-3.5" />
                              تسجيل صوتي
                            </span>
                            {item.audioDuration && <span className="text-[10px] text-slate-400 font-mono">{item.audioDuration} ثانية</span>}
                          </div>
                          <audio controls src={item.audioUrl} className="w-full h-8 accent-indigo-500" />
                        </div>
                      )}

                      {item.text && item.text !== '🎙️ تسجيل صوتي' && (
                        <p className="text-[11px] text-slate-400 line-clamp-2 italic bg-slate-950/40 p-1.5 rounded-lg">
                          "{item.text}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* ========================================================= */
            /* 💬 MESSAGES STREAM VIEW                                   */
            /* ========================================================= */
            <div className="flex-1 p-3 md:p-5 overflow-y-auto custom-scrollbar space-y-3.5">
              {isLoadingMessages ? (
                <div className="flex flex-col items-center justify-center p-12 text-slate-400 space-y-3">
                  <RefreshCw className="w-7 h-7 text-indigo-400 animate-spin" />
                  <p className="text-xs font-medium">جاري تحميل رسائل {activeRoom.name} المباشرة...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-10 text-center text-slate-500 space-y-3 my-auto">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl">
                    {activeRoom.icon}
                  </div>
                  <h4 className="font-bold text-base text-slate-300">كن أول من يبدأ المحادثة في {activeRoom.name}!</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    اكتب سؤالك، أو اشترك مع زملائك برفع ملخصات وصور وتسجيلات صوتية مفيدة للجميع.
                  </p>
                </div>
              ) : (
                messages.map((msg) => {
                  const isMe = currentUser?.uid === msg.senderUid || currentUser?.email === msg.senderEmail;
                  const isMsgAdmin = msg.senderRole === 'admin';

                  return (
                    <div 
                      key={msg.id}
                      className={`flex gap-2.5 max-w-[88%] md:max-w-[78%] ${
                        isMe ? 'mr-auto flex-row-reverse' : 'ml-auto flex-row'
                      }`}
                    >
                      {/* Avatar */}
                      <img 
                        src={msg.senderPhoto || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(msg.senderEmail)}`} 
                        alt={msg.senderName} 
                        className="w-8 h-8 rounded-full border border-slate-700 shrink-0 mt-0.5 object-cover"
                      />

                      {/* Bubble */}
                      <div className={`flex flex-col space-y-1 ${isMe ? 'items-end' : 'items-start'}`}>
                        
                        {/* Header: Name, Role Badge, Time */}
                        <div className="flex items-center gap-1.5 text-[11px] px-1">
                          <span className="font-bold text-slate-300">{msg.senderName}</span>
                          {isMsgAdmin && (
                            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/50 text-[9px] font-black px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                              <Crown className="w-3 h-3 text-amber-400 shrink-0" />
                              أدمن
                            </span>
                          )}
                          <span className="text-[10px] text-slate-500 font-mono">{msg.createdAt}</span>
                        </div>

                        {/* Content Container */}
                        <div 
                          className={`p-3 rounded-2xl space-y-2 text-xs md:text-sm leading-relaxed shadow-md ${
                            isMe 
                              ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-tr-none' 
                              : isMsgAdmin
                                ? 'bg-slate-900 border border-amber-500/40 text-slate-100 rounded-tl-none shadow-amber-500/5'
                                : 'bg-slate-900 border border-slate-800 text-slate-100 rounded-tl-none'
                          }`}
                        >
                          {/* Image Attachment */}
                          {msg.fileType === 'image' && msg.fileUrl && (
                            <div className="rounded-xl overflow-hidden border border-slate-700/80 max-w-sm">
                              <img 
                                src={msg.fileUrl} 
                                alt={msg.fileName || 'صورة مرفقة'} 
                                className="w-full max-h-72 object-contain bg-slate-950" 
                              />
                            </div>
                          )}

                          {/* File Attachment */}
                          {(msg.fileType === 'pdf' || msg.fileType === 'doc' || msg.fileType === 'file') && msg.fileUrl && (
                            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                              <FileText className="w-7 h-7 text-indigo-400 shrink-0" />
                              <div className="flex-1 truncate">
                                <p className="text-xs font-bold text-slate-200 truncate">{msg.fileName || 'ملف مرفق'}</p>
                                <span className="text-[10px] text-slate-400">{msg.fileSize || 'مستند'}</span>
                              </div>
                              <a 
                                href={msg.fileUrl} 
                                download={msg.fileName || 'file'}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition shrink-0"
                                title="تحميل"
                              >
                                <Download className="w-4 h-4" />
                              </a>
                            </div>
                          )}

                          {/* Voice Note / Audio Player */}
                          {msg.audioUrl && (
                            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center gap-3 min-w-[200px]">
                              <button
                                onClick={() => togglePlayAudio(msg.id, msg.audioUrl!)}
                                className="p-2 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 transition shrink-0 cursor-pointer shadow"
                              >
                                {playingAudioId === msg.id ? (
                                  <Pause className="w-4 h-4 fill-slate-950" />
                                ) : (
                                  <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                                )}
                              </button>
                              <div className="flex-1">
                                <p className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                                  <Mic className="w-3 h-3" />
                                  تسجيل صوتي
                                </p>
                                {msg.audioDuration && (
                                  <span className="text-[9px] text-slate-400 font-mono">{msg.audioDuration} ثانية</span>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Text Content */}
                          {msg.text && (
                            <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                          )}

                        </div>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

        </div>

        {/* PROFANITY WARNING BANNER */}
        {profanityWarning && (
          <div className="bg-rose-950/90 border-t border-b border-rose-500/50 px-4 py-2.5 flex items-center justify-between gap-3 text-xs text-rose-200 shrink-0 animate-fadeIn">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{profanityWarning}</span>
            </div>
            <button
              onClick={() => setProfanityWarning(null)}
              className="p-1 rounded bg-rose-900/50 hover:bg-rose-800/80 text-rose-300 transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ATTACHMENT PREVIEW BAR (if file selected) */}
        {attachedFile && (
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-800 flex items-center justify-between gap-3 text-xs shrink-0 animate-fadeIn">
            <div className="flex items-center gap-2.5 truncate">
              {attachedFile.type === 'image' ? (
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-700 shrink-0">
                  <img src={attachedFile.url} alt="معاينة" className="w-full h-full object-cover" />
                </div>
              ) : (
                <FileText className="w-6 h-6 text-indigo-400 shrink-0" />
              )}
              <div className="truncate">
                <p className="font-bold text-slate-200 truncate">{attachedFile.name}</p>
                <span className="text-[10px] text-slate-400">{attachedFile.size}</span>
              </div>
            </div>

            <button
              onClick={() => setAttachedFile(null)}
              className="p-1 rounded-lg hover:bg-slate-800 text-rose-400 transition cursor-pointer"
              title="إلغاء المرفق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* INPUT FOOTER BAR */}
        <div className="bg-slate-950 p-3 md:p-4 border-t border-slate-800 shrink-0">
          {isRecording ? (
            /* Voice Recording Bar */
            <div className="flex items-center justify-between gap-3 bg-red-950/60 border border-red-500/40 p-3 rounded-2xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-red-200">جاري تسجيل الصوتي...</span>
                <span className="text-xs font-mono text-amber-300 font-bold bg-slate-900 px-2 py-0.5 rounded-md border border-red-500/30">
                  {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={cancelRecording}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="button"
                  onClick={stopRecording}
                  className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold transition cursor-pointer shadow-lg flex items-center gap-1"
                >
                  <Square className="w-3.5 h-3.5 fill-white" />
                  <span>إرسال التسجيل</span>
                </button>
              </div>
            </div>
          ) : (
            /* Standard Input Bar */
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 md:gap-3">
              {/* Image Input Trigger */}
              <input 
                type="file" 
                ref={imageInputRef} 
                accept="image/*" 
                onChange={(e) => handleFileUpload(e, true)} 
                className="hidden" 
              />
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 transition cursor-pointer shrink-0"
                title="إرفاق صورة"
              >
                <ImageIcon className="w-4 h-4" />
              </button>

              {/* Document/File Input Trigger */}
              <input 
                type="file" 
                ref={fileInputRef} 
                accept=".pdf,.doc,.docx,.xlsx,.pptx,.zip,.txt,audio/*" 
                onChange={(e) => handleFileUpload(e, false)} 
                className="hidden" 
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 transition cursor-pointer shrink-0"
                title="إرفاق ملف أو مستند"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              {/* Voice Record Button */}
              <button
                type="button"
                onClick={startRecording}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition cursor-pointer shrink-0"
                title="تسجيل صوتي مباشر"
              >
                <Mic className="w-4 h-4" />
              </button>

              {/* Text Input */}
              <input
                type="text"
                placeholder={`اكتب رسالتك في ${activeRoom.name}...`}
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  if (profanityWarning) setProfanityWarning(null);
                }}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-4 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSending || (!inputText.trim() && !attachedFile)}
                className={`p-2.5 px-4 md:px-5 rounded-xl font-extrabold text-xs transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isSending || (!inputText.trim() && !attachedFile)
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30'
                }`}
              >
                <Send className="w-4 h-4 rotate-180" />
                <span className="hidden sm:inline">إرسال</span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
