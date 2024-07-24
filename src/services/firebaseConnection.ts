// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHZhKLvlWX3EZAYU6dorIuggPPV_yfHic",
  authDomain: "poc-testes-a6162.firebaseapp.com",
  projectId: "poc-testes-a6162",
  storageBucket: "poc-testes-a6162.appspot.com",
  messagingSenderId: "334404047358",
  appId: "1:334404047358:web:e73706ebaf84135bd630af",
  measurementId: "G-3LNHC1WZJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };