import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import { getUserProfile } from "../controllers/user.controller.js";
import { followUnfollowUser } from "../controllers/user.controller.js";
import { updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectedRoute, getUserProfile);
router.get("/suggested", protectedRoute, getSuggestedUser);
router.get("/follow/:id", protectedRoute, followUnfollowUser);
router.get("/update", protectedRoute, updateUser);

export default router;