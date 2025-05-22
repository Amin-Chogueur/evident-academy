import { connectDb } from "@/lib/mongoDb/connectDb";
import User from "@/lib/mongoDb/models/userModel";
import bcryptjs from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      fullName,
      email,
      mobile,
      clinic,
      country,
      city,
      service,
      password,
    } = data;
    if (
      !fullName ||
      !email ||
      !mobile ||
      !clinic ||
      !country ||
      !city ||
      !service ||
      !password
    ) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }
    await connectDb();
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return NextResponse.json(
        { message: "Email already in use. " },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    let role;
    if (email === process.env.ADMIN_EMAILS) {
      role = "admin";
    } else {
      role = "user";
    }

    await User.create({
      fullName,
      email,
      mobile,
      clinic,
      country,
      city,
      service,
      password: hashedPassword,
      role,
    });
    return NextResponse.json(
      { message: "Registration successful." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error during registration." },
      { status: 500 }
    );
  }
}
