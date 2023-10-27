import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import connectWithDatabase from "./config/database.js";
import { v2 as cloudinary } from "cloudinary";

connectWithDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const port = process.env.PORT || 4000;


app.listen(port, () => {
    console.log(`App running on PORT ${port}...`);
})