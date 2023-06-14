import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYkxnsMKdXVWq-CrQnY45_pFRq9iFmnLo",
  authDomain: "resume-builder-a08b1.firebaseapp.com",
  projectId: "resume-builder-a08b1",
  storageBucket: "resume-builder-a08b1.appspot.com",
  messagingSenderId: "930601004657",
  appId: "1:930601004657:web:38c2c548e58b140b22b5d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
