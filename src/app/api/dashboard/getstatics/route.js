import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request) {
    await connectToDB();

    try {
        const totalBlogs = await blogModel.countDocuments();
        const publishBlogs = await blogModel.find({ status: "publish" }).countDocuments();
        const draftBlogs = await blogModel.find({ status: "draft" }).countDocuments();

        const statsData = {
            totalBlogs,
            publishBlogs,
            draftBlogs,
        };

        return Response.json(new ApiResponse(
            true,
            "Successfully",
            statsData
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Error on get statics", error);
        return Response.json(new ApiResponse(
            false,
            "Error on get statics"
        ), {
            status: 500
        });
    }
}