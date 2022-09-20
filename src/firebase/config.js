// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2_zatntHn0zqL5L-OJRtlpiI6N0RIXcQ",
    authDomain: "react-cursos-7b2b3.firebaseapp.com",
    projectId: "react-cursos-7b2b3",
    storageBucket: "react-cursos-7b2b3.appspot.com",
    messagingSenderId: "69392075499",
    appId: "1:69392075499:web:f950265b2a2fd0e3a4ccae"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);