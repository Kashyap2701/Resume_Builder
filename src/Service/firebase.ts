import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import uuid from "react-uuid";

// All the configuration for firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Initialize the Firebase app using the provided configuration
const app = initializeApp(firebaseConfig);

// Get the authentication service instance from the initialized app
const auth = getAuth(app);

// Get the Firestore database instance from the initialized app
const db = getFirestore(app);

// Get the Firebase Storage instance
const storage = getStorage();

// Utility function that upload photo in firebase ang get URL
export const uploadPhoto = async (uploadImg: Blob) => {
  const imageRef = ref(storage, `profilePhoto/${uuid() + uploadImg.name}`);
  await uploadBytes(imageRef, uploadImg);
  const downloadURL = await getDownloadURL(imageRef);
  return downloadURL;
};

export { auth, db };
export default app;
