// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c7377.firebaseapp.com",
  projectId: "mern-auth-c7377",
  storageBucket: "mern-auth-c7377.appspot.com",
  messagingSenderId: "886476391198",
  appId: "1:886476391198:web:a18860d65293209a2eff0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);