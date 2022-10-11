import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIK624Kiz2jQzM1HbK4Sg1oaIc2hCRmNE",
  authDomain: "react-auth-firebase-fazt.firebaseapp.com",
  projectId: "react-auth-firebase-fazt",
  storageBucket: "react-auth-firebase-fazt.appspot.com",
  messagingSenderId: "302116306960",
  appId: "1:302116306960:web:15b2520ff03d8cb060ca95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

