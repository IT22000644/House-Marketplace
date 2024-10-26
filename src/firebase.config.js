// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';    

const firebaseConfig = {
  apiKey: "AIzaSyBk8ObvJQtaJpKgQdLtPK4-wk7fVZTFpD4",
  authDomain: "house-marketplace-19a03.firebaseapp.com",
  projectId: "house-marketplace-19a03",
  storageBucket: "house-marketplace-19a03.appspot.com",
  messagingSenderId: "894380622982",
  appId: "1:894380622982:web:a3c99167d26121b8f4fd07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);