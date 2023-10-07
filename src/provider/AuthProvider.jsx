import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Data load
    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // SignIn User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Reset Email
    const resetEmail = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // SignOut
    const logOut = () => {
        return signOut(auth)
    }

    // Google Login
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Object
    const authInfo = {
        data,
        createUser,
        signInUser,
        resetEmail,
        user,
        logOut,
        loading,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;