import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChMTLIJrHpLJvSlcwl0WNzHetHoDRnDec",
  authDomain: "firechat-f7a29.firebaseapp.com",
  projectId: "firechat-f7a29",
  storageBucket: "firechat-f7a29.appspot.com",
  messagingSenderId: "681094618247",
  appId: "1:681094618247:web:866aa6f27bf24911a36c22",
  measurementId: "G-ETRLFWET95"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
const authentication = getAuth(app)