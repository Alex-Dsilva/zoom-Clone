import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey:"AIzaSyAoNLEpLzXVVVTe0C2LuXVHss6I9mwvi-k",
  authDomain: "zoom-4230c.firebaseapp.com",
  projectId: "zoom-4230c",
  storageBucket: "zoom-4230c.appspot.com",
  messagingSenderId: "418737572518",
  appId: "1:418737572518:web:611e4d54fe61c4b9818267",
  measurementId: "G-NX0G24M36G"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
