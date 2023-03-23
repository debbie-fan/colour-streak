import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    // Set up state for user to track if user is logged in
    // Set currentUser default as local storage info or null if there's nothing in local storage
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    // Set useEffect for local storage info when currentUser changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    // Set currentUser to the data received from the server after user logs in
    const login = async(formData) => {
        const res = await axios.post("/auth/login", formData);
        setCurrentUser(res.data);
    };

    // Set currentUser to null when user logs out
    const logout = async() => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
        console.log("user logged out")
    };

    // Update high score in local storage and server side
    const updateHighscore = async(newStreak) => {
        // Get user's current high score from local storage
        const userInfo = JSON.parse(localStorage.getItem("user"));
        
        // Only update highscore table if user is logged in
        if (userInfo) {
            const highscore = userInfo.highscore;
            console.log("User's highscore is: " + highscore);
    
            // Check if user has achieved a new high score
            if (newStreak > highscore) {
                // Update local storage with new high score
                userInfo.highscore = newStreak;
                localStorage.setItem("user", JSON.stringify(userInfo));
                // Update server side with new high score, pass in user info object
                console.log("before send " + userInfo)
                await axios.post("/auth/updateHighscore", userInfo);
            }
        }
    }
    
    // Retrieve leaderboard table data
    const getCurrentLeaderboard = async () => {
        const response = await axios.get("/auth/getCurrentLeaderboard");
        // setCurrentLeaderboard([response]);
        console.log("The data is: " + response.data);
        return JSON.parse(response.data);
    };

    // export functions
    return(
        <AuthContext.Provider value={{ currentUser, login, logout, updateHighscore, getCurrentLeaderboard }}>
            {children}
        </AuthContext.Provider>
    );
};