import mongoose from "mongoose";
const videoSchema = new mongoose.Schema(
    {
        videoFile: { type: String, required: [true, "No video file selected"] }, //Cloudinary
        thumbnail: { type: String, required: [true, "No thumbnail provided"] }, //Cloudinary
        title: { type: String, required: [true, "No title provided"] },
        description: { type: String, default: "" },
        duration: {
            type: Number,
            required: true,
        }, //Cloudinary will provide
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
export default Video;
