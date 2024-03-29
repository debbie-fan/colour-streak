import { db } from "../data/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // Check existing user
    const userExistenceQuery = "SELECT * FROM users WHERE username = ?"

    db.query(userExistenceQuery, [req.body.username], (userExistenceQueryErr, userExistenceQueryData) => {
        if (userExistenceQueryErr) return res.status(500).json(userExistenceQueryErr);
        if (userExistenceQueryData.length) return res.status(409).json("User already exists");

        // Hash password and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Input user username and password into users table
        const userCreationQuery = "INSERT INTO users(`username`, `password`) VALUES (?)"
        const userCreationQueryValues = [
            req.body.username,
            hash
        ]

        db.query(userCreationQuery, [userCreationQueryValues], (userCreationQueryErr, userCreationQueryData) => {
            console.log(userCreationQueryData)
            if (userCreationQueryErr) return res.json(userCreationQueryErr);
            
            // Create leaderboard entry for user
            const leaderboardEntryCreationQuery = "INSERT INTO leaderboard(`user_id`) VALUES (?)"
            const leaderboardEntryCreationQueryValues = [
                userCreationQueryData.insertId
            ]
    
            db.query(leaderboardEntryCreationQuery, [leaderboardEntryCreationQueryValues], (leaderboardEntryCreationQueryErr, leaderboardEntryCreationData) => {
                if (leaderboardEntryCreationQueryErr) return res.json(leaderboardEntryCreationQueryErr);
            })
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res) => {
    // Check existing user
    const checkExistingUserQuery = "SELECT * FROM users WHERE username = ?"
    
    db.query(checkExistingUserQuery, [req.body.username], (checkExistingUserQueryErr, checkExistingUserQueryData) => {
        if (checkExistingUserQueryErr) return res.status(500).json(checkExistingUserQueryErr);
        if (checkExistingUserQueryData.length === 0) return res.status(404).json("User not found");
        console.log("user found")
        
        // Check password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, 
            checkExistingUserQueryData[0].password
        ); //data returns an array, select first item which is user
        console.log("password checked")
        if(!isPasswordCorrect) {
            return res.status(400).json("Wrong username or password");
        }
        console.log("password correct")

        // Create token
        const token = jwt.sign({ id: checkExistingUserQueryData[0].id}, "jwtkey");
        const { password, ...other } = checkExistingUserQueryData[0];  // separate password from rest of information

        // Get user highscore
        const userHighscoreQuery = "SELECT highscore FROM leaderboard WHERE user_id = ?"
        const userID = checkExistingUserQueryData[0].id;

        db.query(userHighscoreQuery, userID, (userHighscoreQueryErr, userHighscoreQueryData) => {
            // Catch error
            if (userHighscoreQueryErr) return res.status(500).json(userHighscoreQueryErr);

            // Add highscore to local storage info
            other.highscore = userHighscoreQueryData[0].highscore;

            // Create cookie
            res
                .cookie("access_token", token, {
                    httpOnly:true
                })
                .status(200)
                .json(other);  // send information sans password
        })

    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true
    }).status(200).json("User has been logged out.")
};

export const updateHighscore = (req, res) => { 
    // Update table if user achieved new high score
    // Query for user in highscore table
    console.log("after sent " + req.body.id);
    const newHighscore = req.body.highscore;
    const userID = req.body.id;
    const highscoreUpdateQuery = "UPDATE leaderboard SET highscore = ? WHERE user_id = ?"

    db.query(highscoreUpdateQuery, [newHighscore, userID], (highscoreUpdateQueryErr, highscoreUpdateQueryData) => {
        if (highscoreUpdateQueryErr) return res.status(500).json(highscoreUpdateQueryErr);
        // userHighscoreQueryData.highscore = newHighscore;
    })

    return res.status(200).json("highscore updated");
};

export const getCurrentLeaderboard = (req, res) => {
    const getCurrentLeaderboardQuery = "SELECT username, highscore FROM colour_streak.leaderboard, colour_streak.users WHERE user_id = id GROUP BY user_id ORDER BY highscore DESC;";

    db.query(getCurrentLeaderboardQuery, (getCurrentLeaderboardQueryErr, getCurrentLeaderboardQueryData) => {
        if (getCurrentLeaderboardQueryErr) return res.status(500).json(getCurrentLeaderboardQueryErr);
        return res.status(200).json(JSON.stringify(getCurrentLeaderboardQueryData));
    })
};