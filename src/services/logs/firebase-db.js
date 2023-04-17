import { firebaseConfig } from "constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp)

export default db;