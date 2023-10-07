import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_ZjXWlZVjOTn1ypL8U9LkqoUhP_98cvU",
    authDomain: "event-management-f788c.firebaseapp.com",
    projectId: "event-management-f788c",
    storageBucket: "event-management-f788c.appspot.com",
    messagingSenderId: "852024840955",
    appId: "1:852024840955:web:a9f3b616c67bad61b2d65e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;