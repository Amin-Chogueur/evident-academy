import { connectDb } from "@/lib/mongoDb/connectDb";
import Course from "@/lib/mongoDb/models/courseSchema";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

interface MyTokenPayload extends JwtPayload {
  role: string;
}

type ParamsType = {
  courseId: string;
};
const tokenSecret = process.env.TOKEN_SECRET;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<ParamsType> }
) {
  const { courseId } = await params;

  try {
    await connectDb();
    const course = await Course.findById(courseId);
    return NextResponse.json({ course });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch course" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<ParamsType> }
) {
  const { courseId } = await params;

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
    const course = await Course.findByIdAndDelete(courseId);
    return NextResponse.json({
      message: "course deleted successfully",
      course,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete course" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<ParamsType> }
) {
  const { courseId } = await params;

  try {
    await connectDb();
    const editedCourse = await req.json();
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
    const course = await Course.findByIdAndUpdate(courseId, editedCourse);
    return NextResponse.json({
      message: "course edited successfully",
      course,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to edit course" },
      { status: 500 }
    );
  }
}
