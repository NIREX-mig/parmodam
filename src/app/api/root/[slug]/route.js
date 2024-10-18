import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request, { params }) {
    await connectToDB();

    try {
        const slug = params.slug;

        const blog = await blogModel.findOne({ slug: slug });

        return Response.json(new ApiResponse(
            true,
            "success",
            blog
        ), {
            status: 200
        });
    } catch (error) {
        console.error("Error on geting slug blog in root", error);
        return Response.json(new ApiResponse(
            false,
            "Something went wrong"
        ), {
            status: 500
        })
    }
}