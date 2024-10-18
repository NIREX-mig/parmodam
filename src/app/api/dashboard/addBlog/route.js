import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel.js";
import ApiResponse from "@/utils/ApiResponse";
import { upploadOnCloudinary } from "@/utils/ImageUpload";

export async function POST(request) {
    await connectToDB();

    try {
        const formData = await request.formData();
        const title = formData.get("title");
        const slug = formData.get("slug");
        const summary = formData.get("summary");
        const category = formData.get("category");
        const thumbnail = formData.get("thumbnail");
        const blogContent = formData.get("blogContent");
        const tagData = formData.get("tagData");
        const status = formData.get("status");
        if (!thumbnail) {
            return Response.json(new ApiResponse(
                false,
                "Thumbnail Required"
            ), {
                status: 400
            });
        };

        const arrayBuffer = await thumbnail.arrayBuffer();
        const mimeType = thumbnail.type;
        const encoding = "base64";
        const base64Data = Buffer.from(arrayBuffer).toString("base64");

        // this will be used to upload the file
        const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

        const uploadedThumbnail = await upploadOnCloudinary(fileUri);

        if (!uploadedThumbnail) {
            return Response.json(new ApiResponse(
                false,
                "Error on uploading thumbnail"
            ), {
                status: 400
            });
        };

        const newBlog = {
            title,
            slug,
            summary,
            category,
            blogContent,
            tags: JSON.parse(tagData),
            status,
            thumbnailUrl: uploadedThumbnail.url,
        };

        const blog = await blogModel.create(newBlog);

        const createdBlog = await blogModel.findById(blog._id);

        if (!createdBlog) {
            return Response.json(new ApiResponse(
                false,
                "Error on saving Blog"
            ), {
                status: 400
            });
        };

        return Response.json(new ApiResponse(
            true,
            "Successfully Blog Saved"
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Error on adding Blog", error);
        return Response.json(new ApiResponse(
            false,
            "Error on adding Blog"
        ), {
            status: 500
        });
    }
}