import { connectDb } from "@/lib/mongoDb/connectDb";
import User from "@/lib/mongoDb/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email, password } = data;
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }
    await connectDb();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "faild to Login, user not found" },
        { status: 400 }
      );
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "failed to Login, Wrong password" },
        { status: 400 }
      );
    }

    const tokenData = {
      userName: user.fullName,
      role: user.role,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "3h",
    });

    const res = NextResponse.json({
      message: "Login successful.",
      role: user.role,
      userName: user.fullName,
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error during login." },
      { status: 500 }
    );
  }
}
