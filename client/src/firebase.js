// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-ddd6a.firebaseapp.com",
  projectId: "mern-real-estate-ddd6a",
  storageBucket: "mern-real-estate-ddd6a.appspot.com",
  messagingSenderId: "963152957852",
  appId: "1:963152957852:web:e38a3e3ac667d616f73859",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
