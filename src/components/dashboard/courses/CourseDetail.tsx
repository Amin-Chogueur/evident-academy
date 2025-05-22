"use client";
import Spinner from "@/components/common/Spinner";
import {
  clearCourse,
  deleteCourse,
  fetchCourse,
  fetchCourses,
} from "@/store/dashboardSlices/courseSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function CourseDetails({ id }: { id: string }) {
  console.log(" course detail page render");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { course, loading } = useAppSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourse(id));

    return () => {
      dispatch(clearCourse());
    };
  }, [dispatch, id]);

  async function handleDelete() {
    const confirm = window.confirm(
      "Are you sure you want to delet this course"
    );
    if (confirm) {
      await dispatch(deleteCourse(id));
      dispatch(clearCourse());
      await dispatch(fetchCourses()); // i fetch the courses so whne i navigate i see the updated course list cus i use technique to not use effet in the courses page each render
      router.push("/dashboard/courses");
    }
  }
  if (loading || !course) {
    return <Spinner />;
  }
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white space-y-4 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center ">
        {course._id && (
          <p className="text-sm text-gray-500 break-words">ID: {course._id}</p>
        )}
        <div className="flex items-center gap-4">
          <Link
            href={`/dashboard/courses/edit/${id}`}
            className="p-2 rounded text-white bg-green-600 cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="p-2 rounded text-white bg-red-600 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="relative w-fit mx-auto">
        <Image
          className="mx-auto my-4 border rounded"
          src={course.image}
          width={300}
          height={300}
          alt="uploadImage"
        />
      </div>
      <h2 className="text-xl font-bold  text-center">{course.title}</h2>
      <p className="text-gray-700 text-center">{course.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p>
          <span className="font-semibold">Language:</span> {course.language}
        </p>
        <p>
          <span className="font-semibold">Mode:</span> {course.mode}
        </p>
        <p>
          <span className="font-semibold">Level:</span> {course.level}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {course.price}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {course.category}
        </p>
      </div>

      <span className="font-semibold">More Info:</span>
      <div
        className="max-w-5xl mx-auto p-5 rounded-xl text-lg leading-7 whitespace-pre-wrap break-words space-y-3"
        dangerouslySetInnerHTML={{ __html: course.moreInfo }}
      />
    </div>
  );
}
