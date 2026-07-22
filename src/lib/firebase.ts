import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithCredential } from 'firebase/auth';
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
const dbId = firebaseConfigData.firestoreDatabaseId || undefined;
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
}, dbId);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

/**
 * Perform Google Sign-In with automatic GIS OAuth fallback so it works seamlessly on any domain (e.g. GitHub Pages) without domain errors
 */
export async function performGoogleSignIn(): Promise<{
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}> {
  // Method 1: Try Firebase signInWithPopup
  try {
    const res = await signInWithPopup(auth, googleProvider);
    if (res.user && res.user.email) {
      return {
        uid: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName || res.user.email.split('@')[0] || 'طالب متميز',
        photoURL: res.user.photoURL || undefined,
      };
    }
  } catch (popupErr: any) {
    console.warn("Firebase popup login notice (switching to Google OAuth GIS):", popupErr);
  }

  // Method 2: Google Identity Services (GIS) direct OAuth Popup
  const clientId = firebaseConfigData.oAuthClientId || "843029844159-1sv3trufu7m6ctoo9m3s3iksf37qcolh.apps.googleusercontent.com";

  return new Promise((resolve, reject) => {
    const ensureGisLoaded = (): Promise<void> => {
      if ((window as any).google?.accounts?.oauth2) {
        return Promise.resolve();
      }
      return new Promise<void>((res, rej) => {
        const existing = document.getElementById('google-gis-script');
        if (existing) {
          existing.addEventListener('load', () => res());
          existing.addEventListener('error', () => rej(new Error('Failed to load Google GIS')));
          return;
        }
        const script = document.createElement('script');
        script.id = 'google-gis-script';
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => res();
        script.onerror = () => rej(new Error('Failed to load Google GIS'));
        document.head.appendChild(script);
      });
    };

    ensureGisLoaded()
      .then(() => {
        const google = (window as any).google;
        if (!google?.accounts?.oauth2) {
          throw new Error('Google OAuth client unavailable');
        }

        const client = google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'openid email profile',
          callback: async (response: any) => {
            if (response.error) {
              reject(new Error('تعذر إكمال دخول Google: ' + (response.error_description || response.error)));
              return;
            }
            if (response.access_token) {
              try {
                const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: { Authorization: `Bearer ${response.access_token}` }
                });
                const googleUser = await userInfoRes.json();
                if (googleUser && googleUser.email) {
                  try {
                    const cred = GoogleAuthProvider.credential(null, response.access_token);
                    await signInWithCredential(auth, cred);
                  } catch (e) {
                    console.warn("Firebase credential sync notice:", e);
                  }

                  resolve({
                    uid: 'google_' + (googleUser.sub || googleUser.email.replace(/[^a-zA-Z0-9]/g, '_')),
                    email: googleUser.email,
                    displayName: googleUser.name || googleUser.email.split('@')[0],
                    photoURL: googleUser.picture,
                  });
                } else {
                  reject(new Error('لم يتم الحصول على بيانات حساب Google'));
                }
              } catch (fetchErr) {
                reject(fetchErr);
              }
            } else {
              reject(new Error('لم يتم استلام تصريح Google'));
            }
          },
          error_callback: () => {
            reject(new Error('تم إغلاق نافذة تسجيل الدخول بـ Google'));
          }
        });

        client.requestAccessToken();
      })
      .catch(reject);
  });
}

export interface UserRecord {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt?: string;
  lastLoginAt?: string;
  provider?: string;
  role?: 'admin' | 'user';
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
 * Syncs logged in user (from Google Auth or GitHub Pages direct login) to the subscribers/users Firestore database
 */
export async function syncUserToFirestore(userData: { uid: string; email: string; displayName?: string; photoURL?: string; provider?: string }): Promise<UserRecord> {
  const now = new Date().toISOString();
  const cleanUid = userData.uid || ('user_' + userData.email.replace(/[^a-zA-Z0-9]/g, '_'));
  const isPrimaryAdmin = userData.email.toLowerCase().trim() === PRIMARY_ADMIN_EMAIL.toLowerCase().trim();
  
  const record: UserRecord = {
    uid: cleanUid,
    email: userData.email,
    displayName: userData.displayName || userData.email.split('@')[0] || 'طالب متميز',
    photoURL: userData.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userData.email)}`,
    provider: userData.provider || 'google',
    role: isPrimaryAdmin ? 'admin' : 'user',
    createdAt: now,
    lastLoginAt: now
  };

  try {
    const userRef = doc(db, 'users', cleanUid);
    const snap = await withTimeout(getDoc(userRef), 3000, null as any);

    if (!snap || !snap.exists()) {
      await withTimeout(setDoc(userRef, record), 3000, null);
    } else {
      const existingData = snap.data();
      record.createdAt = existingData.createdAt || now;
      record.role = existingData.role || (isPrimaryAdmin ? 'admin' : 'user');
      await withTimeout(setDoc(userRef, {
        lastLoginAt: now,
        displayName: userData.displayName || existingData.displayName || record.displayName,
        photoURL: userData.photoURL || existingData.photoURL || record.photoURL,
        role: isPrimaryAdmin ? 'admin' : (existingData.role || 'user')
      }, { merge: true }), 3000, null);
    }
  } catch (err) {
    console.warn("Firestore database sync notice (proceeding seamlessly):", err);
  }

  return record;
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
export async function updateUserRoleInFirestore(uid: string, role: 'admin' | 'user'): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, { role });
    return true;
  } catch (err) {
    console.error("Error updating user role:", err);
    return false;
  }
}

/**
 * Deletes a subscriber from Firestore database
 */
export async function deleteUserFromFirestore(uid: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', uid);
    await deleteDoc(userRef);
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

