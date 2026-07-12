// Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf27gDJSj0V7jnftBH_4_VNTaFAQoIvYE",
  authDomain: "sk-inventory-pro.firebaseapp.com",
  projectId: "sk-inventory-pro",
  storageBucket: "sk-inventory-pro.firebasestorage.app",
  messagingSenderId: "754959170283",
  appId: "1:754959170283:web:63990533c0845399005cae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
