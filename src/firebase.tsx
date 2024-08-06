// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDSdq2hw2_1FUcBI13_-u2yL6ZP16EfKo",
  authDomain: "ai-pantry-tracker-4e577.firebaseapp.com",
  projectId: "ai-pantry-tracker-4e577",
  storageBucket: "ai-pantry-tracker-4e577.appspot.com",
  messagingSenderId: "830023077374",
  appId: "1:830023077374:web:987354be3d0ed8bb4684af",
  measurementId: "G-HC197078DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };