import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import uuid from "react-uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAYkxnsMKdXVWq-CrQnY45_pFRq9iFmnLo",
  authDomain: "resume-builder-a08b1.firebaseapp.com",
  projectId: "resume-builder-a08b1",
  storageBucket: "resume-builder-a08b1.appspot.com",
  messagingSenderId: "930601004657",
  appId: "1:930601004657:web:38c2c548e58b140b22b5d0",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export const uploadPhoto = async (uploadImg:Blob) => {
  const imageRef = ref(storage, `profilePhoto/${uuid() + uploadImg.name}`);
  await uploadBytes(imageRef, uploadImg);
  const downloadURL = await getDownloadURL(imageRef);
  return downloadURL;
};

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
