import { collection, addDoc, Timestamp } from "firebase/firestore";
import {db} from "~/firebaseConfig";

export async function saveEmailToFirestore(email: string) {
  return await addDoc(collection(db, "waitlist"), {
    email,
    createdAt: Timestamp.now(),
  });
}
