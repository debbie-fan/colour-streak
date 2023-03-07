import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    // Set up state for user to track if user is logged in
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(formData) => {
        const res = await axios.post("/auth/login", formData);
        setCurrentUser(res.data);
    };

    const logout = async() => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
        console.log("user logged out")
    };

    const updateHighscore = async() => {
        await axios.post("/auth/updateHighscore");
        const userInfo = JSON.parse(localStorage.getItem("user"))
        const highscore = userInfo.highscore;
        console.log("User's highscore is: " + highscore);
    }
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{ currentUser, login, logout, updateHighscore }}>
            {children}
        </AuthContext.Provider>
    );
};