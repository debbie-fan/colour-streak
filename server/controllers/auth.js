import { db } from "../data/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // Check existing user
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists");

        // Hash password and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            hash
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res) => {
    // Check existing user
    const q = "SELECT * FROM users WHERE username = ?"
    
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found");
        console.log("user found")
        // Check password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, 
            data[0].password
        ); //data returns an array, select first item which is user
        console.log("password checked")
        if(!isPasswordCorrect) {
            return res.status(400).json("Wrong username or password");
        }
        console.log("password correct")
        const token = jwt.sign({ id: data[0].id}, "jwtkey");
        const { password, ...other } = data[0];  // separate password from rest of information
    
        res
            .cookie("access_token", token, {
                httpOnly:true
            })
            .status(200)
            .json(other);  // send information sans password
    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true
    }).status(200).json("User has been logged out.")
};

export const updateStreak = (req, res) => {

};