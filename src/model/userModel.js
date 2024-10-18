import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },

    profile: {
        type: String,

    },

    email: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },

    accessToken: {
        type: String,
    },

    forgotOtpHash: {
        type: String,
    },

    otpValidation: {
        type: Boolean,
    },

    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;