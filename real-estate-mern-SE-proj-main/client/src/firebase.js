// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-79cab.firebaseapp.com",
  projectId: "mern-estate-79cab",
  storageBucket: "mern-estate-79cab.appspot.com",
  messagingSenderId: "328402698649",
  appId: "1:328402698649:web:a7449d179b481563f8d308"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
