// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIxp1eMhLF18b0VIJjQ_tb7BqLnxgb7J0",
  authDomain: "devblog-b99be.firebaseapp.com",
  projectId: "devblog-b99be",
  storageBucket: "devblog-b99be.appspot.com",
  messagingSenderId: "368929915549",
  appId: "1:368929915549:web:9e7ce8180db58d78cd4a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

