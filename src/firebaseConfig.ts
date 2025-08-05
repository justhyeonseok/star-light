// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARc8zgmemWCcO-8e26Dcq02Chz0lNK0R4",
    authDomain: "stellar0828.firebaseapp.com",
    projectId: "stellar0828",
    storageBucket: "stellar0828.firebasestorage.app",
    messagingSenderId: "421456257382",
    appId: "1:421456257382:web:f6156510a446746bd868a7",
    measurementId: "G-P57WQ909F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };