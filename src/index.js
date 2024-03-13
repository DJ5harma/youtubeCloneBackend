import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import mongoose from "mongoose";
import app from "./app.js";
dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`Listening on PORT: ${process.env.PORT}`)
        )
    })
    .catch((error) => console.log(`Something went wrong!\n${error}`));
