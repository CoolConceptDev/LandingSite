// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCiXIeNYZkFr9V2rYgCv75kGZtC3dbpWV4",
  authDomain: "coolconcept-8286f.firebaseapp.com",
  projectId: "coolconcept-8286f",
  storageBucket: "coolconcept-8286f.appspot.com",
  messagingSenderId: "1035784904145",
  appId: "1:1035784904145:web:d90dad6934c9f14e6994f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Initialize Firestore

export { db }; // ✅ Export Firestore instance
