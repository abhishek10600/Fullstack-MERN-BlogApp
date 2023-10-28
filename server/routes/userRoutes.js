import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/userController.js";
import { isLoggedIn } from "../middlewares/userMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isLoggedIn, logoutUser);

export default router;



