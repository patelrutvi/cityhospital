// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK3kzs3ZaNeMIL90G92rK4BApSGrd8V-8",
  authDomain: "cityhospital-d7a9b.firebaseapp.com",
  projectId: "cityhospital-d7a9b",
  storageBucket: "cityhospital-d7a9b.appspot.com",
  messagingSenderId: "349054241161",
  appId: "1:349054241161:web:dd61d0fcc7530834f3b958",
  measurementId: "G-S3ZFBWC66R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);