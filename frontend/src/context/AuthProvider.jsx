import { createContext, useState, useEffect, useMemo } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        if (token) {
            setUser({ token });
        }
    }
    , []);

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const contextValue = useMemo(() => ({
        user,
        logout
    }), [user]);

    console.log("User:", user);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;