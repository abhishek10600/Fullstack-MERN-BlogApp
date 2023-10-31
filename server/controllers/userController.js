import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import cookieToken from "../utils/cookieToken.js";
import emailHelper from "../utils/emailHelper.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!req.files) {
            return next(new Error("Please select a profile picture!"));
        }
        if (!name || !email || !password) {
            return next(new Error("Please enter all the required fields"));
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                success: false,
                message: "User with this email already exists!"
            })
        }
        const file = req.files.photo;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "blogapp/users"
        });
        user = await User.create({
            name,
            email,
            password,
            photo: {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
        });
        user.password = undefined;
        res.status(201).json({
            success: true,
            message: "Your account has been created successfully. Please login!",
            user
        })
    } catch (error) {
        console.log(error.message);
        return next(new Error(error.message));
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new Error("Please enter the required fields!"));
        }
        let user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            })
        }
        const isPasswordCorrect = await user.isPasswordValidated(password);
        if (!isPasswordCorrect) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            })
        }
        cookieToken(user, res, `Welcome! ${user.name}`, 200);

    } catch (error) {
        console.log(error.message);
        return next(new Error(error.message));
    }
}

export const logoutUser = async (req, res, next) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        res.status(200).json({
            success: true,
            message: "You have been logged out successfully!"
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

export const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found, please check the email that you have entered!"
            })
        }
        const forgetPasswordToken = user.getForgetPasswordToken();
        user.save({ validateBeforeSave: false });
        const myUrl = `${req.protocol}://${req.get("host")}/api/v1/users/password/reset/${forgetPasswordToken}`;
        const message = `Copy and paste the following link in the url and press enter ${myUrl}`;
        try {
            await emailHelper({
                email: user.email,
                subject: "Blog App password reset email",
                message
            });
            res.status(200).json({
                success: true,
                message: "Reset password email has been sent to your email"
            })

        } catch (error) {
            user.forgetPasswordToken = undefined;
            user.forgetPasswordExpiry = undefined;
            user.save({ validateBeforeSave: false });
            return next(new Error(error.message));
        }

    } catch (error) {
        console.log(error.message);
        return next(new Error(error.message));
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        const { resetPasswordToken } = req.params;
        if (!resetPasswordToken) {
            return next(new Error("Reset password token not found"));
        }
        const { password, confirmPassword } = req.body;
        if (!password || !confirmPassword) {
            return next(new Error("Please enter all the required fields"));
        }
        if (password !== confirmPassword) {
            return next(new Error("Password and confirm password do not match"));
        }
        const encryptedToken = crypto.createHash("sha256").update(resetPasswordToken).digest("hex");
        const user = await User.findOne({
            forgetPasswordToken: encryptedToken,
            forgetPasswordExpiry: { $gt: Date.now() }
        })
        if (!user) {
            return next(new Error("Reset password token is invalid or expired"));
        }
        user.password = password;
        user.forgetPasswordToken = undefined;
        user.forgetPasswordExpiry = undefined;
        user.save();
        res.status(200).json({
            success: true,
            message: "Reset password successful. Please login!"
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

export const updatePassword = async (req, res, next) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return next(new Error("User id not found!"));
        }
        const user = await User.findById(userId).select("+password");
        if (!user) {
            return next(new Error("User not found!"));
        }
        const { oldPassword, newPassword, confirmNewPassword } = req.body;
        const isOldPasswordVerified = await user.isPasswordValidated(oldPassword);
        if (!isOldPasswordVerified) {
            return next(new Error("Old password is incorrect"));
        }
        if (newPassword !== confirmNewPassword) {
            return next(new Error("Please confirm your password correctly!"));
        }
        user.password = newPassword;
        user.save();
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        res.status(200).json({
            success: true,
            message: "Your password has been updated successfully! Please login."
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

export const getLoggedInUserProfile = async (req, res, next) => {
    try {
        let user = {};
        const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(404).json({
                success: false,
                user
            })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedToken.id);
        user = req.user;
        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}