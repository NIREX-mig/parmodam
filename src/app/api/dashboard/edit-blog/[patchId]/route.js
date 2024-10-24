import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel";
import ApiResponse from "@/utils/ApiResponse";

export async function PATCH(request, { params }) {
    await connectToDB();

    try {
        const formData = await request.formData();
        const title = formData.get("title");
        const slug = formData.get("slug");
        const summary = formData.get("summary");
        const category = formData.get("category");
        const thumbnail = formData.get("thumbnail");
        const blogContent = formData.get("blogContent");
        const tagData = formData.get("tagData");
        const status = formData.get("status");

        const patchId = params.patchId;

        if (!patchId) {
            return Response.json(new ApiResponse(
                false,
                "Something went wrong"
            ), {
                status: 400
            });
        }

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
        if (summary) {
            patchBlog.summary = summary
        }
        if (category) {
            patchBlog.category = category
        }
        if (blogContent) {
            patchBlog.blogContent = blogContent
        }
        if (tagData) {
            patchBlog.tags = JSON.parse(tagData)
        }
        if (status) {
            patchBlog.status = status
        }
        if (thumbnail) {
            const arrayBuffer = await thumbnail.arrayBuffer();
            const mimeType = thumbnail.type;
            const encoding = "base64";
            const base64Data = Buffer.from(arrayBuffer).toString("base64");

            // this will be used to upload the file
            const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
            const uploadedThumbnail = await upploadOnCloudinary(thumbnail);

            if (!uploadedThumbnail) {
                return Response.json(new ApiResponse(
                    false,
                    "Error on uploading thumbnail"
                ), {
                    status: 400
                });
            };
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