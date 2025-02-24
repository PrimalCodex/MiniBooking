import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAaO-XVTnO_VtdUXhlSzxKZ2uWBZ7W8u4Y",
  authDomain: "cornertable-app.firebaseapp.com",
  databaseURL: "https://cornertable-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cornertable-app",
  storageBucket: "cornertable-app.firebasestorage.app",
  messagingSenderId: "643638666064",
  appId: "1:643638666064:web:fa5d238b346de07a7bc255",
  measurementId: "G-DCCR4RL1XS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let analytics;
if (typeof window !== "undefined") {
  const { getAnalytics } = await import("firebase/analytics");
  analytics = getAnalytics(app);
}

export { db, app, analytics };
