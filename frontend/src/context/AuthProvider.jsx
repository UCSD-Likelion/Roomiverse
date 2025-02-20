import { createContext, useState, useEffect } from "react";

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

    console.log("User:", user);

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;