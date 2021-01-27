import express from "express";
import {
    createPost,
    deletePost,
    getPost,
    likePost,
    updatePost
} from "../controller/post.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
