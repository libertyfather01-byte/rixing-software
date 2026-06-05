import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { token } = req.nextauth;
    const { pathname } = req.nextUrl;

    // Admin Routes Protection (Super Admin, Admin, Staff)
    if (pathname.startsWith("/admin")) {
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      const allowedAdminRoles = ["SUPER_ADMIN", "ADMIN", "STAFF"];
      if (!allowedAdminRoles.includes(token.role as string)) {
        return NextResponse.redirect(new URL("/portal", req.url));
      }
    }

    // Portal Routes Protection (Client)
    if (pathname.startsWith("/portal")) {
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      // If an admin tries to access the client portal, we can let them, 
      // but typically we restrict it or have an impersonation view.
      // For now, only CLIENTs can view /portal, though admins can too if needed.
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    }
  }
);

export const config = {
  matcher: ["/admin/:path*", "/portal/:path*"],
};
