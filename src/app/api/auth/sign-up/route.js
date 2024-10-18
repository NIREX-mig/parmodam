import connectToDB from "@/lib/connectToDB";
import User from "@/model/userModel";
import ApiResponse from "@/utils/ApiResponse";
import bcrypt from "bcrypt";

export async function POST(request) {
    await connectToDB();

    try {
        const { username, email, password } = await request.json();

        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return Response.json(new ApiResponse(
                false,
                "Email Allready Exist.",
            ), {
                status: 401
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            username,
            email,
            password: hashedPassword
        };

        const createdUser = await User.create(newUser);

        const user = await User.findById(createdUser._id).select("-password -isAdmin");

        if (!user) {
            return Response.json(new ApiResponse(
                false,
                "Error Registering User."
            ), {
                status: 400
            })
        };

        return Response.json(new ApiResponse(
            true,
            "User Register Successfully."
        ), {
            status: 200
        })

    } catch (error) {
        console.error("Error registering user", error);
        return Response.json(new ApiResponse(
            false,
            "Error on registering user"
        ), {
            status: 500
        })
    }
}