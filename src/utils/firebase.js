import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyaZO7SNvOSN6CJBc-4XxF57QIDnactf0",
    authDomain: "gamingstore-cruz.firebaseapp.com",
    projectId: "gamingstore-cruz",
    storageBucket: "gamingstore-cruz.appspot.com",
    messagingSenderId: "1046641922651",
    appId: "1:1046641922651:web:479c7f0c33dd2d0c01657e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);