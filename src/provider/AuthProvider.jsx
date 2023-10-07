import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [data, setData] = useState([])

    // Data load
    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // SignIn User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Reset Email
    const resetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // Object
    const authInfo = {
        data,
        createUser,
        signInUser,
        resetEmail,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;