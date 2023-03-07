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

    const updateHighscore = async(newStreak) => {
        // Get user's current high score from local storage
        const userInfo = JSON.parse(localStorage.getItem("user"))
        const highscore = userInfo.highscore;
        console.log("User's highscore is: " + highscore);

        // Check if user has achieved a new high score
        if (newStreak > highscore) {
            // Update local storage with new high score
            userInfo.highscore = newStreak;
            localStorage.setItem("user", JSON.stringify(userInfo));
            // Update server side with new high score
            await axios.post("/auth/updateHighscore", newStreak);
        }
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