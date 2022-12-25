// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA5XcS6QeFBQYDUY9UeKG-_Ql72szOuk0",
    authDomain: "netflix-8a85c.firebaseapp.com",
    projectId: "netflix-8a85c",
    storageBucket: "netflix-8a85c.appspot.com",
    messagingSenderId: "1093439118412",
    appId: "1:1093439118412:web:756dcd543faee7d70428e9"
}

// {
//     apiKey: "AIzaSyCA5XcS6QeFBQYDUY9UeKG-_Ql72szOuk0",
//     authDomain: "netflix-8a85c.firebaseapp.com",
//     projectId: "netflix-8a85c",
//     storageBucket: "netflix-8a85c.appspot.com",
//     messagingSenderId: "1093439118412",
//     appId: "1:1093439118412:web:756dcd543faee7d70428e9"
//   }

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)