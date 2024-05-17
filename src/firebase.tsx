import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB__XnHqWOMGf4PIl5PaEI_FrAs9ZBAxnU",
  authDomain: "messages-8025f.firebaseapp.com",
  projectId: "messages-8025f",
  storageBucket: "messages-8025f.appspot.com",
  messagingSenderId: "266092668155",
  appId: "1:266092668155:web:8350a4871f0b2cdde83c5e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();