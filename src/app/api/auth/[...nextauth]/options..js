import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectToDB from "@/lib/connectToDB";
import User from "@/model/userModel";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                await connectToDB();
                try {
                    const user = await User.findOne({
                        email: credentials.identifier
                    });

                    if (!user) {
                        throw new Error("No user found with this email")
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                    if (isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Incrrect Password");
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString();
                token.isAdmin = user.isAdmin;
                token.username = user.username;
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.isAdmin = token.isAdmin;
                session.user.username = token.username;
            }
            return session
        }
    },
    pages: {
        signIn: '/auth/sign-in',
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
}
