import User from "@/model/userModel";
import ApiResponse from "@/utils/ApiResponse";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectToDB from "@/lib/connectToDB";
import sendOtpEmail from "@/utils/sendEmail";

const otpGenrateor = async (otpLength) => {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

export async function POST(request) {
    await connectToDB();

    try {

        const { email } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return Response.json(new ApiResponse(
                true,
                "Please Check the Email.",
            ), {
                status: 401
            })
        }

        const otp = await otpGenrateor(6);

        await sendOtpEmail(email, user.username, otp);

        // creating the otp hash
        const salt = await bcrypt.genSalt(10);
        const hashedOtp = await bcrypt.hash(otp, salt);

        //set hashedotp in database
        user.forgotOtpHash = hashedOtp;

        user.save({ validateBeforeSave: false });

        // genrate temptoke and send in forntend
        const payload = {
            id: user._id,
        };

        const tempToken = jwt.sign(payload, process.env.TEMP_JWT_SECRET, {
            expiresIn: "10m",
        });

        return Response.json(new ApiResponse(
            true,
            "Otp send on Email",
            tempToken
        ), {
            status: 200
        });

    } catch (error) {
        console.error("Error on sending Eamil.", error);
        return Response.json(new ApiResponse(
            true,
            "Error on sending Email",
        ), {
            status: 500
        })
    }
}
