import connectToDB from "@/lib/connectToDB";
import ApiResponse from "@/utils/ApiResponse";
import { sendUsMail } from "@/utils/sendEmail";

export async function POST(request) {
    await connectToDB();

    try {
        const { message, name, email, phone } = await request.json();

        await sendUsMail(email, name, message, phone);

        return Response.json(new ApiResponse(
            true,
            "Send Mail Successfully",
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Erron on Sending mail", error);
        return Response.json(new ApiResponse(
            false,
            "Erron on Sending Mail"
        ), {
            status: 500
        });
    }
}