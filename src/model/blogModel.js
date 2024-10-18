import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    slug: {
        type: String,
        required: true,
        index: true,
    },

    summary: {
        type: String,
        require: true,
    },

    category: {
        type: String,
        required: true,
    },

    thumbnailUrl: {
        type: String,
        required: true
    },

    blogContent: {
        type: String,
        required: true,
    },

    tags: [
        {
            type: String,
            required: true,
        }
    ],

    status: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
