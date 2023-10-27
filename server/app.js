import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import fileUpload from "express-fileupload";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(fileUpload({
    useTempFiles: "true",
    tempFileDir: "/tmp/"
}))

app.use("/api/v1/users", userRouter);

