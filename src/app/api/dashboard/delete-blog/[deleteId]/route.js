import connectToDB from "@/lib/connectToDB";
import ApiResponse from "@/utils/ApiResponse";
import blogModel from "@/model/blogModel.js";

export async function DELETE(request, { params }) {
    await connectToDB();

    try {
        const deleteId = params.deleteId

        if (!deleteId) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

        const blog = await blogModel.findById({ _id: deleteId });

        if (!blog) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

        const deletingBlog = await blogModel.deleteOne({ _id: deleteId });

        return Response.json(new ApiResponse(
            true,
            "Successfully Delete Blog",
        ), {
            status: 200
        })

    } catch (error) {
        console.error("Error on Deleting Blog.", error);
        return Response.json(new ApiResponse(
            false,
            "Something went wrong",
        ), {
            status: 500
        });
    }
}