// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNIWmSdoCy-Pui42kWBj-wApQ7vWZLBeU",
  authDomain: "dev-website-d2950.firebaseapp.com",
  projectId: "dev-website-d2950",
  storageBucket: "dev-website-d2950.appspot.com",
  messagingSenderId: "553609588891",
  appId: "1:553609588891:web:5c196402cb74b4e8c6d63e",
  measurementId: "G-N6NWEF0BR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);