import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import cookieToken from "../utils/cookieToken.js";

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