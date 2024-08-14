import express from "express";
import {signup , login, logout, getme} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup );

router.get("/login", login);

router.get("/logout", logout);

router.get("/getme", getme);

export default router;
