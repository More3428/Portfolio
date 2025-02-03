// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh768H0yMoDyPcqxldsShTEB95cVtOcNA",
  authDomain: "portfolio-f3c7c.firebaseapp.com",
  projectId: "portfolio-f3c7c",
  storageBucket: "portfolio-f3c7c.firebasestorage.app",
  messagingSenderId: "745320768547",
  appId: "1:745320768547:web:389c2060a62d03d0b0bd96",
  measurementId: "G-9GKTMRTVNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const db = getFirestore(app); 
