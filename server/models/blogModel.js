import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is a required field"],
        },
        description: {
            type: String,
            required: [true, "Description is a required field"]
        },
        photos: [
            {
                id: {
                    type: String
                },
                secure_url: {
                    type: String
                }
            }
        ],
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;