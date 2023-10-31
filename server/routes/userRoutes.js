import express from "express";
import { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, updatePassword, getLoggedInUserProfile } from "../controllers/userController.js";
import { isLoggedIn } from "../middlewares/userMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isLoggedIn, logoutUser);
router.route("/forgotPassword").post(forgotPassword);
router.route("/password/reset/:resetPasswordToken").post(resetPassword);
router.route("/password/update").post(isLoggedIn, updatePassword);
router.route("/getProfile").get(getLoggedInUserProfile);

export default router;



