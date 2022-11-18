import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuEPfDsein1FM3k_QCHMZcOEdW52dpamI",
  authDomain: "crown-clothing-db-a8747.firebaseapp.com",
  projectId: "crown-clothing-db-a8747",
  storageBucket: "crown-clothing-db-a8747.appspot.com",
  messagingSenderId: "552306736323",
  appId: "1:552306736323:web:52294a46e21b0608de3676"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);