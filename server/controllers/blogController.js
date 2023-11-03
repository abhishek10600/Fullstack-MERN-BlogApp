import Blog from "../models/blogModel.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            blogs
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

export const getLoggedInUserBlogs = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const blogs = await Blog.find({ user: userId });
        res.status(200).json({
            success: true,
            blogs
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

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

export const updateBlog = async (req, res, next) => {
    const { blogId } = req.params;
    let blog = await Blog.findById(blogId);
    if (!blog) {
        return next(new Error("Blog does not exists"));
    }
    const { title, description } = req.body;
    if (req.files) {
        let imagesArray = [];
        for (let index = 0; index < blog.photos.length; index++) {
            const res = await cloudinary.uploader.destroy(blog.photos[index].id);
        }
        for (let index = 0; index < req.files.photos.length; index++) {
            let result = await cloudinary.uploader.upload(req.files.photos[index].tempFilePath, {
                folder: "blogapp/blogs"
            });
            imagesArray.push({
                id: result.public_id,
                secure_url: result.secure_url
            })
        }
        req.body.photos = imagesArray;
        blog = await Blog.findByIdAndUpdate(blogId, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({
            success: true,
            message: "Blog successfully updated",
            blog
        })

    } else {
        blog.title = title;
        blog.description = description;
        await blog.save();
        res.status(200).json({
            success: true,
            message: "Blog updated successfully!",
            blog
        })
    }
}

export const deleteBlog = async (req, res, next) => {
    const { blogId } = req.params;
    if (!blogId) {
        return next(new Error("Blog does not exists"));
    }
    const blog = await Blog.findById(blogId);
    if (!blog) {
        return next(new Error("Blog does not exists"));
    }
    if (blog.photos.length === 0) {
        await blog.deleteOne();
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        })
    } else {
        for (let index = 0; index < blog.photos.length; index++) {
            const res = await cloudinary.uploader.destroy(blog.photos[index].id);
        }
        await blog.deleteOne();
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        })
    }
}