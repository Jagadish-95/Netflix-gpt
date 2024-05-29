// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAixnBlx1bb_oYZLx-fa9_9Wdurrltgsro",
  authDomain: "netflixgpt-fa3ed.firebaseapp.com",
  projectId: "netflixgpt-fa3ed",
  storageBucket: "netflixgpt-fa3ed.appspot.com",
  messagingSenderId: "952540048684",
  appId: "1:952540048684:web:fe1f19459bcb50fbd25089",
  measurementId: "G-HX7LJVV5JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();