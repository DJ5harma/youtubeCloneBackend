import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" })); //how much json data can come...
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //eg: "%20" = " "
app.use(express.static("public")); //to store data like images in the public folder
app.use(cookieParser()); //to perform CRUD operations on client-side-cookies

export default app;
