// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCLAsSyEsMqDbTvyXkh47BSzZg_d1XwSE",
    authDomain: "carmax-warehouse.firebaseapp.com",
    projectId: "carmax-warehouse",
    storageBucket: "carmax-warehouse.appspot.com",
    messagingSenderId: "54392663710",
    appId: "1:54392663710:web:2146d93aac8e377253558f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;