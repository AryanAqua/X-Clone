import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  signup,
  login,
  logout,
  getme,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/me", protectedRoute, getme);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
