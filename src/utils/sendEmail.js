import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PASS
    }
});


const sendOtpEmail = async (email, username, otp) => {
    try {
        const mailOptions = {
            from: process.env.NODEMAILER_AUTH_USER,
            to: email,
            subject: `Your Code - ${otp}`,
            html: `
            <p>Dear ${username},</p>
            <br/>
            <p>Your code is : ${otp}. Use it to access your account.</p>
            <br/>
            <p>If you did not make this request. simply ignore this message.</p>
            <br/>
            <p>Do not share the OTP.</p>
            `
        };


        const info = await transporter.sendMail(mailOptions)

        // console.log("Message sent: %s", info.messageId);

    } catch (error) {
        console.error("Error on send Otp Email.", error);
        throw new Error("Error on send otp Email");
    }

}

export default sendOtpEmail;