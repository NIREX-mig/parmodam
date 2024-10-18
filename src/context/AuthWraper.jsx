"use client";

import { SessionProvider } from "next-auth/react"

export default function AuthWraper({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}