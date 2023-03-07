import express from 'express';
import { register, login, logout, updateHighscore } from "../controllers/auth.js";

var router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/updateHighscore", updateHighscore);

export default router;