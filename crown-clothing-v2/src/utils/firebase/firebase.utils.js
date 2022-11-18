import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuEPfDsein1FM3k_QCHMZcOEdW52dpamI",
  authDomain: "crown-clothing-db-a8747.firebaseapp.com",
  projectId: "crown-clothing-db-a8747",
  storageBucket: "crown-clothing-db-a8747.appspot.com",
  messagingSenderId: "552306736323",
  appId: "1:552306736323:web:52294a46e21b0608de3676",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// fireStore database instance
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // document reference = doc(param1, param2, param3)  --> param1 = database, param2 = collections, param3 = some identifier
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  //user data object (userSnapshot)
  const userSnapshot = await getDoc(userDocRef);

  // console.log(userSnapshot.exists()); // if false then create one, if true then return that data

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // setDoc and pass userDocRef and pass the data to be set-up with like -> name, email, and when it was created

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error while creating the User", error.message);
    }
  }

  return userDocRef;
};
