import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [data, setData] = useState([])

    // Data load
    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // Object
    const authInfo = {
        data,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;