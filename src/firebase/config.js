// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRT9UP0tI8nIB7At-Ishsq26Os8MiBGaA",
  authDomain: "react-curso-854ad.firebaseapp.com",
  projectId: "react-curso-854ad",
  storageBucket: "react-curso-854ad.appspot.com",
  messagingSenderId: "346859785959",
  appId: "1:346859785959:web:952bd2a6774d8082645c42"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );