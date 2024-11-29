import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Middleware function
export async function middleware(request) {
    const token = await getToken({ req: request });
    const url = request.nextUrl;

    // If user has a token and tries to access auth routes, redirect them to the homepage
    if (
        token &&
        (
            url.pathname.startsWith('/auth/admin/sign-up') ||
            url.pathname.startsWith('/auth/sign-in') ||
            url.pathname.startsWith('/auth/forgot')
        )
    ) {
        return NextResponse.redirect(new URL('/', request.url), { status: 302 });
    }

    // If the user is not an admin but tries to access admin routes, redirect to /not-found
    if (
        token?.isAdmin !== true &&
        (
            url.pathname.startsWith('/dashboard') ||
            url.pathname.startsWith('/dashboard/addblog') ||
            url.pathname.startsWith('/dashboard/blogs') ||
            url.pathname.startsWith('/dashboard/pending') ||
            url.pathname.startsWith('/dashboard/setting')
        )
    ) {
        console.log("isAdmin:", token);
        return NextResponse.redirect(new URL('/not-found', request.url), { status: 302 });
    }

    // If the user is not logged in and tries to access dashboard routes, redirect to /sign-in
    if (
        !token &&
        (
            url.pathname.startsWith('/dashboard') ||
            url.pathname.startsWith('/dashboard/addblog') ||
            url.pathname.startsWith('/dashboard/blogs') ||
            url.pathname.startsWith('/dashboard/pending') ||
            url.pathname.startsWith('/dashboard/setting')
        )
    ) {
        return NextResponse.redirect(new URL('/sign-in', request.url), { status: 302 });
    }

    return NextResponse.next();
}

// Configure the middleware to match the specified paths
export const config = {
    matcher: [
        '/auth/sign-in',
        '/auth/admin/sign-up',
        '/',
        '/auth/forgot',
        '/dashboard/:path*',
    ],
};
