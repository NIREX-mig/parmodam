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

export const sendUsMail = async (email, orgname, message, phone) => {
    try {

        // <div class="container">
        //     <div class="header">
        //         <h1>New Message from Parmodam</h1>
        //     </div>
        //     <div class="content">
        //         <h2>Sender Details</h2>
        //         <p><strong>Name:</strong> {{ name }}</p>
        //         <p><strong>Email:</strong> {{ email }}</p>
        //         <h2>Message</h2>
        //         <p>{{ message }}</p>
        //     </div>
        //     <div class="footer">
        //         <p>Thank you for using Parmodam!</p>
        //         <p>
        //             <a href="https://parmodam.com" target="_blank">Visit our blog</a>
        //         </p>
        //     </div>
        // </div>

        const mailOptions = {
            from: process.env.NODEMAILER_AUTH_USER,
            to: email,
            subject: "New Message from Parmodam",
            html: `
             <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: Arial, sans-serif; color: #333;">
  <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <!-- Header Section -->
    <div style="background-color: #0070f3; color: #ffffff; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">New Message from Parmodam</h1>
    </div>

    <!-- Content Section -->
    <div style="padding: 20px; line-height: 1.6;">
      <h2 style="color: #0070f3; font-size: 20px; margin-bottom: 10px;">Sender Details</h2>
      <p style="margin: 0 0 10px;"><strong>Name:</strong> ${orgname}</p>
      <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 0 0 10px;"><strong>Email:</strong> ${phone}</p>
      
      <h2 style="color: #0070f3; font-size: 20px; margin-bottom: 10px;">Message</h2>
      <p style="margin: 0 0 10px;">${message}</p>
    </div>
  </div>
</body>
            `
        };


        const info = await transporter.sendMail(mailOptions)

        // console.log("Message sent: %s", info.messageId);

    } catch (error) {
        console.error("Error on send us Email.", error);
        throw new Error("Error on send us Email");
    }
}

export default sendOtpEmail;