import { useState, useEffect, useCallback, useRef } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface ChatRoomInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradeBadge?: string;
}

export const CHAT_ROOMS: ChatRoomInfo[] = [
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

const STORAGE_KEY = '4u_chat_last_read_v1';

function getInitialLastReadMap(): Record<string, number> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Failed to parse chat last read map:", e);
  }

  // Default initial timestamp to current time for all rooms so existing historic messages don't trigger thousands of unread counts
  const defaultMap: Record<string, number> = {};
  const now = Date.now();
  CHAT_ROOMS.forEach((room) => {
    defaultMap[room.id] = now;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultMap));
  } catch (e) {}
  return defaultMap;
}

export function useChatUnread(
  currentUserUid?: string, 
  currentUserEmail?: string, 
  isModalOpen?: boolean, 
  activeRoomId?: string
) {
  const [unreadMap, setUnreadMap] = useState<Record<string, number>>({});
  const lastReadMapRef = useRef<Record<string, number>>(getInitialLastReadMap());

  // Save lastReadMapRef to localStorage
  const saveLastReadMap = useCallback((newMap: Record<string, number>) => {
    lastReadMapRef.current = newMap;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMap));
    } catch (e) {}
  }, []);

  // Mark a specific room as read
  const markRoomAsRead = useCallback((roomId: string) => {
    const updatedMap = {
      ...lastReadMapRef.current,
      [roomId]: Date.now()
    };
    saveLastReadMap(updatedMap);
    setUnreadMap((prev) => ({
      ...prev,
      [roomId]: 0
    }));
  }, [saveLastReadMap]);

  // When modal is open and activeRoomId is set, continuously mark activeRoomId as read
  useEffect(() => {
    if (isModalOpen && activeRoomId) {
      markRoomAsRead(activeRoomId);
    }
  }, [isModalOpen, activeRoomId, markRoomAsRead]);

  // Real-time Firestore message subscription across all rooms
  useEffect(() => {
    const unsubscribes: (() => void)[] = [];

    CHAT_ROOMS.forEach((room) => {
      const messagesCol = collection(db, 'community_chats', room.id, 'messages');
      const q = query(messagesCol, orderBy('createdAt', 'desc'), limit(25));

      const unsub = onSnapshot(q, (snapshot) => {
        const lastRead = lastReadMapRef.current[room.id] || 0;
        let count = 0;

        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          
          // Check sender identity
          const senderUid = data.senderUid || '';
          const senderEmail = data.senderEmail || '';
          const isFromCurrentUser = 
            (currentUserUid && senderUid === currentUserUid) ||
            (currentUserEmail && senderEmail.toLowerCase() === currentUserEmail.toLowerCase());

          if (!isFromCurrentUser) {
            let msgTime = 0;
            if (data.createdAt) {
              if (typeof data.createdAt === 'string') {
                msgTime = new Date(data.createdAt).getTime();
              } else if (data.createdAt?.toDate) {
                msgTime = data.createdAt.toDate().getTime();
              } else if (typeof data.createdAt === 'number') {
                msgTime = data.createdAt;
              }
            }

            if (msgTime > lastRead) {
              count++;
            }
          }
        });

        setUnreadMap((prev) => {
          if (prev[room.id] === count) return prev;
          return {
            ...prev,
            [room.id]: count
          };
        });
      }, (err) => {
        console.warn(`Firestore unread check notice for room ${room.id}:`, err);
      });

      unsubscribes.push(unsub);
    });

    return () => {
      unsubscribes.forEach((u) => u());
    };
  }, [currentUserUid, currentUserEmail]);

  // Compute total unread across all rooms
  const totalUnreadCount = (Object.values(unreadMap) as number[]).reduce((sum: number, val: number) => sum + (val || 0), 0);

  return {
    unreadMap,
    totalUnreadCount,
    markRoomAsRead
  };
}
