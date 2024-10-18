import connectToDB from "@/lib/connectToDB";
import blogModel from "@/model/blogModel.js";
import ApiResponse from "@/utils/ApiResponse";

export async function GET(request) {
    await connectToDB();

    try {

        const blogChatData = await blogModel.aggregate([
            {
                $match: {
                    status: "publish"
                }
            },
            {
                $group: {
                    _id: {
                        $month: "$createdAt",
                    },
                    publishBlogCount: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 1,
                    Month: {
                        $let: {
                            vars: {
                                monthsInString: [
                                    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                                ]
                            },
                            in: { $arrayElemAt: ["$$monthsInString", "$_id"] }
                        }
                    },
                    publishBlogCount: 1
                }
            },
            {
                $sort: { "_id": 1 }
            }
        ]);

        return Response.json(new ApiResponse(
            true,
            "success",
            blogChatData
        ), {
            status: 200
        })
    } catch (error) {
        console.error("Error on getting Chart data", error);
        return Response.json(new ApiResponse(
            false
        ), {
            status: 500
        });
    }
}