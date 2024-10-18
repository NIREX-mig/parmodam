import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";
import ApiResponse from "@/utils/ApiResponse";

export async function PATCH(request, { params }) {
    await connectToDB();

    try {
        const { title, slug, category, blogContent, tags, status, sumary, thumbnail } = await request.json();

        const patchId = params.patchId;

        if (!patchId) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

        if (!thumbnail) {
            return Response.json(new ApiResponse(
                false,
                "Thumbnail Required"
            ), {
                status: 400
            });
        };

        const uploadedThumbnail = await upploadOnCloudinary(thumbnail);

        if (!uploadedThumbnail) {
            return Response.json(new ApiResponse(
                false,
                "Error on uploading thumbnail"
            ), {
                status: 400
            });
        };

        let patchBlog = await blogModel.findById({ _id: patchId });

        if (!patchBlog) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

        if (title) {
            patchBlog.title = title
        }
        if (slug) {
            patchBlog.slug = slug
        }
        if (category) {
            patchBlog.category = category
        }
        if (blogContent) {
            patchBlog.blogContent = blogContent
        }
        if (tags) {
            patchBlog.tags = tags
        }
        if (status) {
            patchBlog.status = status
        }
        if (sumary) {
            patchBlog.sumary = sumary
        }
        if (thumbnail) {
            patchBlog.thumbnailUrl = thumbnail.url
        }

        patchBlog.save({ validateBeforeSave: false });

        return Response.json(new ApiResponse(
            true,
            "Successfully Blog update",
            patchBlog
        ), {
            status: 200
        })

    } catch (error) {

        console.error("Error on Updating Blog", error);
        return Response.json(new ApiResponse(
            false,
            "Something went wrong"
        ), {
            status: 500
        });
    }
}