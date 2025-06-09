// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "@firebase/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app}
export {auth}