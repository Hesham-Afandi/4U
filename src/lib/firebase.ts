import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile 
} from 'firebase/auth';
import { initializeFirestore, getFirestore, doc, setDoc, getDoc, collection, getDocs, query, orderBy, limit, deleteDoc, updateDoc, where, setLogLevel } from 'firebase/firestore';
import firebaseConfigData from '../../firebase-applet-config.json';

// Mute non-fatal Firestore network retry warnings in browser console
setLogLevel('error');

const firebaseConfig = {
  apiKey: firebaseConfigData.apiKey,
  authDomain: firebaseConfigData.authDomain,
  projectId: firebaseConfigData.projectId,
  storageBucket: firebaseConfigData.storageBucket,
  messagingSenderId: firebaseConfigData.messagingSenderId,
  appId: firebaseConfigData.appId
};

// Initialize Firebase App safely
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with custom Database ID & Long Polling for sandboxed web environments
const dbId = (firebaseConfigData as any).firestoreDatabaseId || undefined;
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
}, dbId);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

/**
 * Perform Google Sign-In via Google OAuth Popup
 */
export async function performGoogleSignIn(): Promise<{
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}> {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    if (res.user && res.user.email) {
      return {
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName || res.user.email.split('@')[0] || 'طالب المنصة',
        photoURL: res.user.photoURL || undefined,
      };
    }
  } catch (popupErr: any) {
    console.warn("Firebase Google popup login notice:", popupErr);
    const errObj: any = new Error(popupErr?.message || "DOMAIN_RESTRICTED");
    errObj.isDomainRestricted = true;
    errObj.code = popupErr?.code || 'auth/unauthorized-domain';
    throw errObj;
  }

  throw new Error("لم يتم إكمال الدخول بحساب Google");
}

/**
 * Register a new user with real Email & Password using Firebase Authentication
 */
export async function registerWithEmailPassword(
  email: string,
  password: string,
  displayName?: string
): Promise<{ uid: string; email: string; displayName: string }> {
  try {
    const res = await createUserWithEmailAndPassword(auth, email.trim(), password.trim());
    const name = displayName?.trim() || email.split('@')[0] || 'طالب المنصة';
    if (res.user) {
      try {
        await updateProfile(res.user, { displayName: name });
      } catch (pErr) {
        console.warn("Notice updating profile name:", pErr);
      }
      return {
        uid: res.user.uid,
        email: res.user.email || email,
        displayName: name,
      };
    }
  } catch (err: any) {
    console.warn("Register with email/password notice:", err);
    if (err.code === 'auth/email-already-in-use') {
      const customErr: any = new Error("البريد الإلكتروني مسجل بالفعل. يمكنك تسجيل الدخول بنفس البريد وكلمة السر.");
      customErr.code = err.code;
      throw customErr;
    } else if (err.code === 'auth/weak-password') {
      const customErr: any = new Error("كلمة السر ضعيفة جداً. يرجى كتابة 6 أحرف/أرقام على الأقل.");
      customErr.code = err.code;
      throw customErr;
    } else if (err.code === 'auth/invalid-email') {
      const customErr: any = new Error("عنوان البريد الإلكتروني غير صحيح.");
      customErr.code = err.code;
      throw customErr;
    }
    throw err;
  }
  throw new Error("لم يتم إنشاء الحساب");
}

/**
 * Login an existing user with real Email & Password using Firebase Authentication
 */
export async function loginWithEmailPassword(
  email: string,
  password: string
): Promise<{ uid: string; email: string; displayName: string }> {
  try {
    const res = await signInWithEmailAndPassword(auth, email.trim(), password.trim());
    if (res.user) {
      return {
        uid: res.user.uid,
        email: res.user.email || email,
        displayName: res.user.displayName || email.split('@')[0] || 'طالب المنصة',
      };
    }
  } catch (err: any) {
    console.warn("Login with email/password notice:", err);
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
      const customErr: any = new Error("البريد الإلكتروني أو كلمة السر غير صحيحة.");
      customErr.code = err.code;
      throw customErr;
    } else if (err.code === 'auth/invalid-email') {
      const customErr: any = new Error("عنوان البريد الإلكتروني غير صحيح.");
      customErr.code = err.code;
      throw customErr;
    }
    throw err;
  }
  throw new Error("لم يتم تسجيل الدخول");
}

export interface ExamHistoryItem {
  id: string;
  title: string;
  subject?: string;
  score: number;
  date: string;
  correctQuestions?: number;
}

export interface UserRecord {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phoneNumber?: string;
  guardianPhone?: string;
  address?: string;
  createdAt?: string;
  lastLoginAt?: string;
  lastActiveAt?: string;
  provider?: string;
  role?: 'admin' | 'user';
  customPassword?: string;
  githubUsername?: string;
  // Detailed Analytics for Admin View & Student Dashboard
  examsCompletedCount?: number;
  lessonsCompletedCount?: number;
  totalTimeSpentSeconds?: number;
  streakDays?: number;
  gradeName?: string;
  countryName?: string;
  points?: number;
  totalCorrectQuestions?: number;
  averageScore?: number;
  lastExamTitle?: string;
  lastExamScore?: number;
  lastExamDate?: string;
  certificatesCount?: number;
  badges?: string[];
  mostStudiedSubject?: string;
  examHistory?: ExamHistoryItem[];
}

export interface Announcement {
  id: string;
  content: string;
  active: boolean;
  createdAt?: string;
}

const PRIMARY_ADMIN_EMAIL = 'mohammedhesham872@gmail.com';

/**
 * Helper to race Firestore calls against a 4-second timeout so the app never hangs if Firestore is offline or slow
 */
async function withTimeout<T>(promise: Promise<T>, timeoutMs = 4000, fallbackValue: T): Promise<T> {
  let timer: any;
  const timeoutPromise = new Promise<T>((resolve) => {
    timer = setTimeout(() => {
      resolve(fallbackValue);
    }, timeoutMs);
  });

  try {
    const result = await Promise.race([promise, timeoutPromise]);
    clearTimeout(timer);
    return result;
  } catch (err) {
    clearTimeout(timer);
    return fallbackValue;
  }
}

/**
 * Syncs logged in user (from Google Auth, GitHub Auth, or Direct Password login) to the subscribers/users Firestore database
 */
export async function syncUserToFirestore(userData: { 
  uid: string; 
  email: string; 
  displayName?: string; 
  photoURL?: string; 
  provider?: string; 
  isAdminVerified?: boolean;
  customPassword?: string;
  githubUsername?: string;
}): Promise<UserRecord> {
  const now = new Date().toISOString();
  const cleanUid = userData.uid || ('user_' + userData.email.replace(/[^a-zA-Z0-9]/g, '_'));
  const isPrimaryAdminEmail = userData.email.toLowerCase().trim() === PRIMARY_ADMIN_EMAIL.toLowerCase().trim();
  
  const record: UserRecord = {
    uid: cleanUid,
    email: userData.email,
    displayName: userData.displayName || userData.email.split('@')[0] || 'طالب المنصة',
    photoURL: userData.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userData.email)}`,
    provider: userData.provider || 'google',
    role: isPrimaryAdminEmail ? (userData.isAdminVerified ? 'admin' : 'user') : 'user',
    createdAt: now,
    lastLoginAt: now,
    ...(userData.customPassword ? { customPassword: userData.customPassword } : {}),
    ...(userData.githubUsername ? { githubUsername: userData.githubUsername } : {})
  };

  try {
    const userRef = doc(db, 'users', cleanUid);
    const snap = await withTimeout(getDoc(userRef), 3000, null as any);

    if (!snap || !snap.exists()) {
      await withTimeout(setDoc(userRef, record), 3000, null);
    } else {
      const existingData = snap.data();
      record.createdAt = existingData.createdAt || now;
      if (existingData.customPassword && !userData.customPassword) {
        record.customPassword = existingData.customPassword;
      }
      if (existingData.githubUsername && !userData.githubUsername) {
        record.githubUsername = existingData.githubUsername;
      }
      
      if (isPrimaryAdminEmail) {
        if (userData.isAdminVerified === true) {
          record.role = 'admin';
        } else if (userData.isAdminVerified === false) {
          record.role = 'user';
        } else {
          record.role = existingData.role || 'user';
        }
      } else {
        // Retain promoted admin status from Firestore for other accounts!
        record.role = existingData.role || 'user';
      }

      const updateData: any = {
        lastLoginAt: now,
        displayName: userData.displayName || existingData.displayName || record.displayName,
        photoURL: userData.photoURL || existingData.photoURL || record.photoURL,
        role: record.role
      };
      if (userData.customPassword) updateData.customPassword = userData.customPassword;
      if (userData.githubUsername) updateData.githubUsername = userData.githubUsername;

      await withTimeout(setDoc(userRef, updateData, { merge: true }), 3000, null);
    }
  } catch (err) {
    console.warn("Firestore database sync notice (proceeding seamlessly):", err);
  }

  return record;
}

/**
 * Syncs student activity stats (exams solved, lessons completed, time spent, streak, grade) to Firestore
 */
export async function syncUserStatsToFirestore(
  uid: string,
  stats: {
    examsCompletedCount?: number;
    lessonsCompletedCount?: number;
    totalTimeSpentSeconds?: number;
    streakDays?: number;
    gradeName?: string;
    countryName?: string;
    points?: number;
    totalCorrectQuestions?: number;
    averageScore?: number;
    lastExamTitle?: string;
    lastExamScore?: number;
    lastExamDate?: string;
    certificatesCount?: number;
    badges?: string[];
    mostStudiedSubject?: string;
    examHistory?: ExamHistoryItem[];
  }
): Promise<void> {
  if (!uid) return;
  try {
    const userRef = doc(db, 'users', uid);
    const now = new Date().toISOString();
    await updateDoc(userRef, {
      ...stats,
      lastActiveAt: now
    });
  } catch (err) {
    // Silently ignore if network issue or user document is fast-synced
  }
}

/**
 * Updates full profile data (name, phone, photo, address, grade, guardian phone) for student dashboard
 */
export async function updateUserProfileInFirestore(
  uid: string,
  profileData: {
    displayName?: string;
    photoURL?: string;
    phoneNumber?: string;
    guardianPhone?: string;
    address?: string;
    gradeName?: string;
    countryName?: string;
  }
): Promise<void> {
  if (!uid) return;
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      ...profileData,
      lastActiveAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn("Profile update sync notice:", err);
  }
}

/**
 * Fetches subscriber database list for teacher/admin view or status
 */
export async function fetchAllSubscribers(): Promise<UserRecord[]> {
  try {
    const usersCol = collection(db, 'users');
    const q = query(usersCol, orderBy('lastLoginAt', 'desc'), limit(200));
    const snap = await withTimeout(getDocs(q), 3000, null as any);
    if (!snap) return [];
    
    const users: UserRecord[] = [];
    snap.forEach((doc: any) => {
      users.push(doc.data() as UserRecord);
    });
    return users;
  } catch (err) {
    console.warn("Error fetching subscribers:", err);
    return [];
  }
}

/**
 * Updates a user's role in Firestore (e.g., set to 'admin' or 'user')
 */
export async function updateUserRoleInFirestore(uid: string, role: 'admin' | 'user', email?: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, { role });
    if (email) {
      try {
        const usersCol = collection(db, 'users');
        const q = query(usersCol, where('email', '==', email.toLowerCase().trim()));
        const snap = await getDocs(q);
        snap.forEach(async (d) => {
          await updateDoc(d.ref, { role });
        });
      } catch (e) {
        console.warn("Notice updating secondary docs:", e);
      }
    }
    return true;
  } catch (err) {
    console.error("Error updating user role:", err);
    return false;
  }
}

/**
 * Deletes a subscriber from Firestore database
 */
export async function deleteUserFromFirestore(uid: string, email?: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', uid);
    await deleteDoc(userRef);
    if (email) {
      try {
        const usersCol = collection(db, 'users');
        const q = query(usersCol, where('email', '==', email.toLowerCase().trim()));
        const snap = await getDocs(q);
        snap.forEach(async (d) => {
          await deleteDoc(d.ref);
        });
      } catch (e) {
        console.warn("Notice deleting secondary docs:", e);
      }
    }
    return true;
  } catch (err) {
    console.error("Error deleting user:", err);
    return false;
  }
}

/**
 * Adds or promotes an email to Admin status
 */
export async function addAdminByEmailInFirestore(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail.includes('@')) {
      return { success: false, message: 'عنوان البريد غير صحيح' };
    }

    const usersCol = collection(db, 'users');
    const q = query(usersCol, where('email', '==', cleanEmail));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const userDoc = snap.docs[0];
      await updateDoc(userDoc.ref, { role: 'admin' });
      return { success: true, message: `تم منح صلاحيات الأدمن إلى ${cleanEmail} بنجاح` };
    } else {
      // Create user record pre-marked as admin
      const cleanUid = 'user_' + cleanEmail.replace(/[^a-zA-Z0-9]/g, '_');
      const now = new Date().toISOString();
      const newAdmin: UserRecord = {
        uid: cleanUid,
        email: cleanEmail,
        displayName: cleanEmail.split('@')[0],
        photoURL: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(cleanEmail)}`,
        role: 'admin',
        createdAt: now,
        lastLoginAt: now,
        provider: 'assigned_admin'
      };
      await setDoc(doc(db, 'users', cleanUid), newAdmin);
      return { success: true, message: `تم إضافة البريد ${cleanEmail} كأدمن جديد بنجاح!` };
    }
  } catch (err) {
    console.error("Error adding admin:", err);
    return { success: false, message: 'حدث خطأ أثناء إضافة الأدمن' };
  }
}

/**
 * Broadcast Announcements
 */
export async function fetchActiveAnnouncement(): Promise<Announcement | null> {
  try {
    const annRef = doc(db, 'settings', 'global_announcement');
    const snap = await withTimeout(getDoc(annRef), 3000, null as any);
    if (snap && snap.exists()) {
      return snap.data() as Announcement;
    }
  } catch (err) {
    console.warn("Notice fetching announcement:", err);
  }
  return null;
}

export async function saveAnnouncementInFirestore(content: string, active: boolean): Promise<boolean> {
  try {
    const annRef = doc(db, 'settings', 'global_announcement');
    await setDoc(annRef, {
      id: 'global_announcement',
      content,
      active,
      createdAt: new Date().toISOString()
    });
    return true;
  } catch (err) {
    console.error("Error saving announcement:", err);
    return false;
  }
}

/**
 * Saves or updates a user's custom account password in Firestore
 */
export async function saveCustomPasswordInFirestore(uid: string, password: string): Promise<boolean> {
  if (!uid || !password) return false;
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      customPassword: password,
      lastActiveAt: new Date().toISOString()
    });
    return true;
  } catch (err) {
    console.warn("Notice saving custom password to Firestore:", err);
    return false;
  }
}

/**
 * Verifies custom password for direct account login (GitHub Pages / Site login)
 */
export async function verifyCustomPasswordInFirestore(
  email: string,
  password: string
): Promise<{ success: boolean; user?: UserRecord; message?: string }> {
  if (!email || !password) {
    return { success: false, message: 'يرجى إدخال البريد الإلكتروني وكلمة السر' };
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanUid = 'user_' + cleanEmail.replace(/[^a-zA-Z0-9]/g, '_');

  try {
    const userRef = doc(db, 'users', cleanUid);
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      const userData = snap.data() as UserRecord;
      if (userData.customPassword) {
        if (userData.customPassword === password.trim()) {
          return { success: true, user: userData };
        } else {
          return { success: false, message: 'كلمة السر الخاصة بالحساب غير صحيحة' };
        }
      }
    }

    // Fallback search by email in collection
    const usersCol = collection(db, 'users');
    const q = query(usersCol, where('email', '==', cleanEmail));
    const querySnap = await getDocs(q);

    if (!querySnap.empty) {
      const userData = querySnap.docs[0].data() as UserRecord;
      if (userData.customPassword) {
        if (userData.customPassword === password.trim()) {
          return { success: true, user: userData };
        } else {
          return { success: false, message: 'كلمة السر الخاصة بالحساب غير صحيحة' };
        }
      }
    }
  } catch (err) {
    console.warn("Notice checking Firestore password:", err);
  }

  return { 
    success: false, 
    message: 'لم يتم العثور على كلمة سر مسجلة لهذا الحساب. يمكنك تسجيل الدخول بالبريد ثم تعيين كلمة سر خاصة بحسابك من الملف الشخصي أو تفعيلها من خلال GitHub.' 
  };
}


