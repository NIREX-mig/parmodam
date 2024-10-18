import connectToDB from "@/lib/connectToDB";
import User from "@/model/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import ApiResponse from "@/utils/ApiResponse";

export async function POST(request) {
    await connectToDB();

    try {

        const { newpassword, token } = await request.json();

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

        if (!user.otpValidation) {
            return Response.json(new ApiResponse(
                false,
                "Unautherized Access!"
            ), {
                status: 401
            });
        };
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newpassword, salt);

        user.password = hashedPassword;

        await User.findByIdAndUpdate(decryptedToken.id, {
            $unset: {
                forgotOtpHash: 1,
                otpValidation: 1
            }
        },
            {
                new: true
            }
        );

        await user.save();

        return Response.json(new ApiResponse(
            true,
            "Forgot password successfully"
        ), {
            status: 200
        });


    } catch (error) {
        console.error("Erron on forgot Password", error);
        return Response.json(new ApiResponse(
            false,
            "Erron on forgot Password"
        ), {
            status: 500
        });

    }
}