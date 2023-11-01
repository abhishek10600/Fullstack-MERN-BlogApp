import Blog from "../models/blogModel.js";
import { v2 as cloudinary } from "cloudinary";

export const createBlog = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return next(new Error("Required field is missing"));
        }
        if (req.files) {
            let result;
            let imagesArray = [];
            for (let index = 0; index < req.files.photos.length; index++) {
                result = await cloudinary.uploader.upload(req.files.photos[index].tempFilePath, {
                    folder: "blogapp/blogs"
                })
                imagesArray.push({
                    id: result.public_id,
                    secure_url: result.secure_url
                })
            }
            req.body.photos = imagesArray;
            req.body.user = req.user.id;
            const blog = await Blog.create(req.body);
            res.status(201).json({
                success: true,
                message: "Blog created successfully",
                blog
            })
        } else {
            const userId = req.user.id;
            const blog = await Blog.create({
                title,
                description,
                user: userId
            })
            res.status(201).json({
                success: true,
                message: "Blog created successfully",
                blog
            })
        }
    } catch (error) {
        return next(new Error(error.message));
    }
}