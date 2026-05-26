// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwt8skR8uSTODvNlAmzFL8CJZpAe5qX4w",
  authDomain: "innovatetech-certificates.firebaseapp.com",
  projectId: "innovatetech-certificates",
  storageBucket: "innovatetech-certificates.firebasestorage.app",
  messagingSenderId: "86102363560",
  appId: "1:86102363560:web:0a5d7ab2c85eb2bde4a19d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);