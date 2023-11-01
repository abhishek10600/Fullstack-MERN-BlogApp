import express from "express";
import { createBlog } from "../controllers/blogController.js";
import { isLoggedIn } from "../middlewares/userMiddleware.js";


const router = express.Router();

router.route("/createBlog").post(isLoggedIn, createBlog);


export default router;