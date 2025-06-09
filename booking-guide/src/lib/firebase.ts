// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "@firebase/auth";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzFPleIhYhmAzWgoXxBOFjznN50hVZrTI",
  authDomain: "booking-guide.firebaseapp.com",
  projectId: "booking-guide",
  storageBucket: "booking-guide.firebasestorage.app",
  messagingSenderId: "762702291039",
  appId: "1:762702291039:web:015b9d209f3c5133527bea"
};
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Google user:", user);
    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {app}
export {auth}
export {googleProvider}
