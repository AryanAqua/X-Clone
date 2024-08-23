import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute";

const router = express.Router();

router.get("/all", protectedRoute, getAllPosts);
router.get("/following", protectedRoute, getAllPosts);
router.get("/likes/:id", protectedRoute, getAllPosts);
router.get("/user/:username", protectedRoute, getAllPosts);
router.get("/create", protectedRoute, getAllPosts);
router.get("/like/:id", protectedRoute, getAllPosts);
router.get("/comment/:id", protectedRoute, getAllPosts);
router.get("/:id", protectedRoute, getAllPosts);