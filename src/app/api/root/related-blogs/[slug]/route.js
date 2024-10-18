import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request, { params }) {
    await connectToDB();

    try {
        const slug = params.slug;

        const blog = await blogModel.findOne({ slug: slug });

        if (!blog) {
            return Response.json(new ApiResponse(
                true,
                "Something went wrong"
            ), {
                status: 400
            });
        };

        const relatedBlogs = await blogModel.aggregate([
            {
                $match: {
                    category: blog.category,  // Replace with the category you're filtering by
                    _id: {
                        $ne: blog._id,
                    }
                }
            },
            {
                $sort: {
                    createdAt: -1  // Sort by `createdAt` field in descending order
                }
            },
            {
                $limit: 6  // Limit to the most recent 6 blogs
            }
        ]);

        if (relatedBlogs.length === 0) {
            return Response.json(new ApiResponse(
                true,
                "No blogs avilable!"
            ), {
                status: 200
            });
        };

        return Response.json(new ApiResponse(
            true,
            "success",
            relatedBlogs
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Error on related blog", error);
        return Response.json(new ApiResponse(
            false,
            "Something went wrong"
        ), {
            status: 500
        })
    }
}