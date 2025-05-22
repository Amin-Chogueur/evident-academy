import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import Course from "@/lib/mongoDb/models/courseSchema";
import { connectDb } from "@/lib/mongoDb/connectDb";

interface MyTokenPayload extends JwtPayload {
  role: string;
}

const tokenSecret = process.env.TOKEN_SECRET;

export async function GET() {
  try {
    await connectDb();
    const allCourses = await Course.find(
      {},
      "_id title description language mode level price moreInfo category image"
    );

    return NextResponse.json({ courses: allCourses }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "No token provided" },
        { status: 401 }
      );
    }

    // 2. Decode the token
    const decoded = jwt.verify(token, tokenSecret!) as MyTokenPayload;

    // 3. Check user role
    if (decoded.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden, you are not the Admin" },
        { status: 403 }
      );
    }
    const {
      title,
      description,
      level,
      mode,
      language,
      price,
      moreInfo,
      category,
      image,
    } = await req.json();
    const isExist = await Course.findOne({ title });
    if (isExist) {
      return NextResponse.json(
        {
          message:
            "Faild to create the course since this title is already exist",
        },
        { status: 400 }
      );
    }
    const newCourse = await Course.create({
      title,
      description,
      level,
      mode,
      language,
      price,
      moreInfo,
      category,
      image,
    });

    return NextResponse.json(
      { message: "course created successfully", newCourse },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create the course" },
      { status: 500 }
    );
  }
}
