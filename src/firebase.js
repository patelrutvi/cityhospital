// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSssvVlK5Lf9dP-iKpitJtzB6gBPe2egk",
  authDomain: "cityhospital-9fdab.firebaseapp.com",
  projectId: "cityhospital-9fdab",
  storageBucket: "cityhospital-9fdab.appspot.com",
  messagingSenderId: "736485007243",
  appId: "1:736485007243:web:5e5b4abc7c85589d74198e",
  measurementId: "G-J36G004K0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);