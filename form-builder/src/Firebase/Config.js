// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfrgRmw2Pj02ZttLje0dmuOrGclarTnhY",
  authDomain: "form-builder-29c2f.firebaseapp.com",
  projectId: "form-builder-29c2f",
  storageBucket: "form-builder-29c2f.appspot.com",
  messagingSenderId: "604943368050",
  appId: "1:604943368050:web:7b16fd24d5f15f13ba67eb",
  measurementId: "G-H04SWQL8MW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
