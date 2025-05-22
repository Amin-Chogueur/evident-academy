import axios from "axios";
import { CourseType } from "@/store/dashboardSlices/courseSlice";

const base_Uri = process.env.NEXT_PUBLIC_BASE_URL;

export async function getCourses(): Promise<CourseType[]> {
  try {
    const res = await axios.get(`${base_Uri}/dashboard/api/courses`); // use external/public API
    return res.data.courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}
