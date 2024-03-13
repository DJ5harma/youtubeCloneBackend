import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI + "/" + DB_NAME}`
        );
        console.log(
            `\nMongoDB connected! \nDB HOST: ${connectionInstance.connection.port}`
        );
    } catch (error) {
        console.log("Error connecting to MongoDB!\n ", error);
        process.exit(1);
    }
};
export default connectDB;
