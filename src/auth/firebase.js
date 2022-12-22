// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "constants";


// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const auth = fireBaseApp.auth

export default auth;