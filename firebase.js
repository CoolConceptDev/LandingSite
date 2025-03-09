// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiXIeNYZkFr9V2rYgCv75kGZtC3dbpWV4",
  authDomain: "coolconcept-8286f.firebaseapp.com",
  databaseURL: "https://coolconcept-8286f-default-rtdb.firebaseio.com",
  projectId: "coolconcept-8286f",
  storageBucket: "coolconcept-8286f.firebasestorage.app",
  messagingSenderId: "1035784904145",
  appId: "1:1035784904145:web:d90dad6934c9f14e6994f0",
  measurementId: "G-87RPH4214Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);