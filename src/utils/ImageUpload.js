import { v2 as cloudinary, } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const upploadOnCloudinary = async (fileUri) => {
    try {
        if (!fileUri) return null;

        // upload file on cloudinary 
        const response = await cloudinary.uploader.upload(fileUri, {
            invalidate: true,
            resource_type: "auto",
            folder: "Thumbnails",
        });

        return response;

    } catch (error) {
        console.error("Error on uploading on cloudinary", error);
        return null;
    }
}

export { upploadOnCloudinary }