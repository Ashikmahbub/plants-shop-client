// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDWCLj2c1maSuPevNN0tTWPc5OUwCUwzQU",
  authDomain: "auth-router-context-bab91.firebaseapp.com",
  projectId: "auth-router-context-bab91",
  storageBucket: "auth-router-context-bab91.appspot.com",
  messagingSenderId: "55060809795",
  appId: "1:55060809795:web:43ffee73f868e8c01dacf6",
  measurementId: "G-2ZZSLYWNHJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);