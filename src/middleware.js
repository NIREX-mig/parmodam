import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'


// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    const token = await getToken({ req: request });
    const url = request.nextUrl

    if (token && (
        url.pathname.startsWith("/auth/admin/sign-up") ||
        url.pathname.startsWith("/auth/sign-in") ||
        url.pathname.startsWith("/auth/forgot")
    )) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (token?.isAdmin !== true && (
        url.pathname.startsWith("/dashboard") ||
        url.pathname.startsWith("/dashboard/addblog") ||
        url.pathname.startsWith("/dashboard/blogs") ||
        url.pathname.startsWith("/dashboard/pending") ||
        url.pathname.startsWith("/dashboard/setting") ||
        url.pathname.startsWith("/dashboard/setting/profile")
    )) {
        return NextResponse.redirect(new URL("/not-found", request.url))
    }

    if (!token && (
        url.pathname.startsWith("/dashboard") ||
        url.pathname.startsWith("/dashboard/addblog") ||
        url.pathname.startsWith("/dashboard/blogs") ||
        url.pathname.startsWith("/dashboard/pending") ||
        url.pathname.startsWith("/dashboard/setting") ||
        url.pathname.startsWith("/dashboard/setting/profile")
    )) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/auth/sign-in",
        "/auth/admin/sign-up",
        "/",
        "/auth/forgot",
        "/dashboard/:path*",
    ]
}