import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAf27gDJSj0V7jnftBH_4_VNTaFAQoIvYE",
    authDomain: "sk-inventory-pro.firebaseapp.com",
    projectId: "sk-inventory-pro",
    storageBucket: "sk-inventory-pro.firebasestorage.app",
    messagingSenderId: "754959170283",
    appId: "1:754959170283:web:63990533c0845399005cae",
    measurementId: "G-KLCDB2801P"
};

const app = initializeApp(firebaseConfig);

export { app };
