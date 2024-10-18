import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel.js";
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request, { params }) {
    await connectToDB();

    try {
        const Id = params.id;

        if (!Id) {
            return Response.json(new ApiResponse(
                false,
                "Id Required"
            ), {
                status: 400
            });
        }

        const blog = await blogModel.findById({ _id: Id });

        if (!blog) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

        return Response.json(new ApiResponse(
            true,
            "Successfully Blog update",
            blog
        ), {
            status: 200
        })

    } catch (error) {
        console.error("Error on finding by id", error);
        return Response.json(new ApiResponse(
            false,
            "Something went wrong"
        ), {
            status: 500
        });
    }

}