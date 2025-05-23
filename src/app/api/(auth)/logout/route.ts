import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.redirect(
      new URL("/", "https://evident-academy.vercel.app/")
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Logout failed", success: false });
  }
}
