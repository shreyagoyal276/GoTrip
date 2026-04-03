// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA8bo-52a6bXWp3iHQMEe_H9rNYXbt4ng4",
  authDomain: "gotrip-2a659.firebaseapp.com",
  projectId: "gotrip-2a659",
  storageBucket: "gotrip-2a659.firebasestorage.app",
  messagingSenderId: "1087501734844",
  appId: "1:1087501734844:web:5f1973e93c7b203abf91b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);