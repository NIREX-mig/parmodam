import ApiResponse from "@/utils/ApiResponse";
import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";

export async function GET(request) {
    await connectToDB();
    const searchParams = request.nextUrl.searchParams;

    try {

        const page = parseInt(searchParams.get('page')) || 1; // Default to page 1
        const limit = parseInt(searchParams.get('limit')) || 20; // Default to 10 items per page
        const skip = (page - 1) * limit; // Calculate skip value

        const blogs = await blogModel.aggregate([
            {
                $match: {
                    status: "publish",
                }
            },
            {
                $sort: {
                    createdAt: -1
                }
            },
            {
                $skip: skip
            },
            {
                $limit: limit
            }
        ]);

        // Get total count of documents (without pagination)
        const total = await blogModel.find({ status: "publish" }).countDocuments();


        if (blogs.length === 0) {
            return Response.json(new ApiResponse(
                true,
                "No blog found",
                {
                    totalPages: Math.ceil(total / limit),
                    currentPage: page,
                    totalPosts: total,
                    blogs: []
                }
            ), {
                status: 200
            });
        };

        return Response.json(new ApiResponse(
            true,
            "success",
            {
                totalPages: Math.ceil(total / limit),
                currentPage: page,
                totalPosts: total,
                blogs
            }
        ), {
            status: 200
        })
    } catch (error) {
        console.error("Error on getting publish blog", error);
        return Response.json(new ApiResponse(
            false,
            "Something went wrong"
        ), {
            status: 500
        })
    }
}