import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  const protectedPaths = [
    "/dashboard",
    "/dashboard/courses",
    "/dashboard/conferences",
    "/dashboard/users",
  ];
  const authPages = ["/login", "/register"];

  const isProtected = protectedPaths.includes(pathname);
  const isAuthPage = authPages.includes(pathname);

  // 🚫 If no token and trying to access protected path → redirect to login
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ If token exists
  if (token) {
    try {
      const { payload } = await jwtVerify(token, secret);
      const user = payload;

      // 🔐 Role-based access: only admin can access /dashboard
      if (isProtected && user.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // 🔄 If logged in and trying to go to login/register → redirect to /
      if (isAuthPage) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    } catch (err) {
      console.error("JWT verification failed:", err);
      // Token invalid — clear the path and allow login/register
      if (isProtected) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      return NextResponse.next();
    }
  }

  // ✅ No token and accessing public pages → allow
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
