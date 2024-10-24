import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel.js";
import ApiResponse from "@/utils/ApiResponse";

export async function POST(request, { params }) {
    await connectToDB();

    const searchParams = request.nextUrl.searchParams;
    try {

        const blogstatus = params.blogstatus;
        const page = parseInt(searchParams.get('page')) || 1; // Default to page 1
        const limit = parseInt(searchParams.get('limit')) || 20; // Default to 10 items per page
        const skip = (page - 1) * limit; // Calculate skip value

        if (!blogstatus) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }


        const blogs = await blogModel.aggregate([
            {
                $match: {
                    status: blogstatus
                }
            },
            {
                $sort: {
                    _id: 1
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
        const total = await blogModel.find({ status: blogstatus }).countDocuments();


        if (blogs.length === 0) {
            return Response.json(new ApiResponse(
                true,
                "NO blog found",
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
            "Success",
            {
                totalPages: Math.ceil(total / limit),
                currentPage: page,
                totalPosts: total,
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