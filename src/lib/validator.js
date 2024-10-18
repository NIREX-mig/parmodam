import { z } from "zod";

export const forgotPasswordSchema = z.object({
    newpassword: z.string().max(8, { message: "New password at least 8 characters" }),
    cpassword: z.string().max(8, { message: "Confirm password at least 8 characters" })
}).superRefine(({ cpassword, newpassword }, ctx) => {
    if (cpassword !== newpassword) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['cpassword']
        });
    }
});

export const forgotSendEmailSchema = z.object({
    email: z.string().email({ message: "Enter a valid email!" })
});

export const otpVarificationSchema = z.object({
    otp: z.string().trim().min(1, { message: "Otp is required!" })
});

export const signinSchema = z.object({
    identifier: z.string().email({ message: "Enter a valid email!" }),
    password: z.string().min(5, { message: "Password contains at least 8 characters!" }),
});

export const signupSchema = z.object({
    username: z.string().trim().min(5, { message: "Username contains atleast 5 characters!" }).max(10, { message: "Username not above 10 characters!" }).refine(s => !s.includes(' '), 'Space not allowed'),
    email: z.string().email({ message: "Enter a valid email!" }),
    password: z.string().trim().min(5, { message: "Password contains atleast 5 characters!" }),
    cpassword: z.string().trim().min(5, { message: "Password contains atleast 5 characters!" }),
}).superRefine(({ cpassword, password }, ctx) => {
    if (cpassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['cpassword']
        });
    }
});

export const AddBlogSchema = z.object({
    title: z.string().trim().min(1, { message: "Title is required!" }),
    slug: z.string().trim().min(1, { message: "Slug is required!" }),
    category: z.string().trim().min(1, { message: "Category is required!" }),
    summary: z.string().trim().min(1, { message: "sumary is required!" }),
    status: z.string(),
    thumbnail: z.any().refine(files => Array.from(files))
});


export const searchSchema = z.string();