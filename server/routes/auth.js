import express from 'express';
import { register, login, logout, updateHighscore, getCurrentLeaderboard } from "../controllers/auth.js";

var router = express.Router();

// POST requests
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/updateHighscore", updateHighscore);

// GET requests
router.get("/getCurrentLeaderboard", getCurrentLeaderboard);

export default router;