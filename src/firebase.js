import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBLiNRGZrb2IydU1zi3o92rY8jabUJQMuo",
    authDomain: "linkedin-clone-33739.firebaseapp.com",
    projectId: "linkedin-clone-33739",
    storageBucket: "linkedin-clone-33739.appspot.com",
    messagingSenderId: "49183485387",
    appId: "1:49183485387:web:3d2e81f44689ca96f25a4e",
    measurementId: "G-PR5VGKC296"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};