import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel.js";
import ApiResponse from "@/utils/ApiResponse";

export async function POST(request, { params }) {
    await connectToDB();

    const searchParams = request.nextUrl.searchParams;
    try {

        const blogstatus = params.blogstatus
        const limit = parseInt(searchParams.get('limit'));
        const lastId = parseInt(searchParams.get("lastId"));

        if (!blogstatus) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

        // crate query 
        const query = lastId ? {
            status: blogstatus,
            _id: { $gt: lastId }
        } : {
            status: blogstatus
        }

        const blogs = await blogModel.aggregate([
            {
                $match: query
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
                "NO blog found",
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
            "Success",
            {
                limit,
                nextId,
                blogs
            }
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Error on geting blog by status", error);
        return Response.json(new ApiResponse(
            false,
            "Something Went Wrong"
        ), {
            status: 500
        });
    }
}