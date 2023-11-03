import express from "express";
import { createBlog, getAllBlogs, getLoggedInUserBlogs, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { isLoggedIn } from "../middlewares/userMiddleware.js";


const router = express.Router();

router.route("/createBlog").post(isLoggedIn, createBlog);
router.route("/all").get(getAllBlogs);
router.route("/myBlogs").get(isLoggedIn, getLoggedInUserBlogs);
router.route("/updateBlog/:blogId").put(isLoggedIn, updateBlog);
router.route("/deleteBlog/:blogId").delete(isLoggedIn, deleteBlog);


export default router;