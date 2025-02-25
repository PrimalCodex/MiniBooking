import { collection, addDoc, Timestamp } from "firebase/firestore";
import {db} from "~/firebaseConfig";

export async function saveEmailToFirestore(email: string, isIndustry: boolean) {
  const data: any = {
    email,
    createdAt: Timestamp.now(),
  };
  if (isIndustry) {
    data.isIndustry = true;
  }

  return await addDoc(collection(db, "waitlist"), data);
}
