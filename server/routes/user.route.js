import express from "express";
import { login, register } from "../controllers/user.controller.js";

const router = express.Router();

//app.get('login', login);

router.post("/register", register);
router.get("/login", login);

export default router;
