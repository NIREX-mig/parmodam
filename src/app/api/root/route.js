import ApiResponse from "@/utils/ApiResponse";
import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";

export async function GET(request) {
    await connectToDB();
    const searchParams = request.nextUrl.searchParams;

    try {

        const limit = parseInt(searchParams.get('limit'));
        const lastId = parseInt(searchParams.get("lastId"));

        // create query
        const query = lastId ? {
            status: "publish",
            _id: { $gt: lastId }
        } : {
            status: "publish"
        }

        const blogs = await blogModel.aggregate([
            {
                $match: query,
            },
            {
                $sort: {
                    _id: 1
                }
            },
            {
                $limit: limit
            }
        ]);

        // Determine the next cursor
        const nextId = blogs.length > 0 ? blogs[blogs.length - 1]._id : null;

        if (blogs.length === 0) {
            return Response.json(new ApiResponse(
                true,
                "No blog found",
                {
                    limit: "",
                    nextId: "",
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
                limit,
                nextId,
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