import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import blogRouter from "./routes/blogRouter.js";
import fileUpload from "express-fileupload";
import CORS from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(CORS({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(fileUpload({
    useTempFiles: "true",
    tempFileDir: "/tmp/"
}))

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);

