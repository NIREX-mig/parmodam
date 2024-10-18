import connectToDB from "@/lib/connectToDB";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "@/model/userModel";
import ApiResponse from "@/utils/ApiResponse";

export async function POST(request) {
    await connectToDB();
    try {
        const { token, otp } = await request.json();

        if (!token) {
            return Response.json(new ApiResponse(
                false,
                "Unautherized Access!"
            ), {
                status: 401
            });
        };

        const decryptedToken = jwt.verify(token, process.env.TEMP_JWT_SECRET);

        const user = await User.findById(decryptedToken.id);

        if (!user) {
            return Response.json(new ApiResponse(
                false,
                "Unautherized Access!"
            ), {
                status: 401
            });
        };

        const compairOtp = await bcrypt.compare(otp, user.forgotOtpHash);

        if (!compairOtp) {
            return Response.json(new ApiResponse(
                false,
                "Incorrect OTP!",
            ), {
                status: 401
            });
        }

        user.otpValidation = true;
        user.save({ validateBeforeSave: false });

        return Response.json(new ApiResponse(
            true,
            "Successfully Otp validate."
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Error on validating Otp", error);
        return Response.json(new ApiResponse(
            false,
            "Error on validating Otp"
        ), {
            status: 500
        });
    }
}