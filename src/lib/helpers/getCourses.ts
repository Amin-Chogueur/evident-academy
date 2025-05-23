"use server";

import { CourseType } from "@/store/dashboardSlices/courseSlice";
import { connectDb } from "../mongoDb/connectDb";
import Course from "../mongoDb/models/courseSchema";

type CourseWithId = CourseType & { _id: string };

export async function getCoursesFromDb(): Promise<CourseWithId[]> {
  try {
    await connectDb();
    const allCourses = await Course.find(
      {},
      "_id title description language mode level price moreInfo category image"
    ).lean<CourseWithId[]>();
    return allCourses.map((course) => ({
      ...course,
      _id: course._id.toString(),
    }));
    // Optionally map Mongoose _id to string
  } catch (error) {
    console.error("Error fetching courses from DB:", error);
    return [];
  }
}
