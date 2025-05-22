"use client";
import Spinner from "@/components/common/Spinner";
import { fetchCourses } from "@/store/dashboardSlices/courseSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Courses() {
  const dispatch = useAppDispatch();
  const { courses, loading } = useAppSelector((state) => state.course);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [dispatch, courses.length]);

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold ">All Courses</h2>
        <Link
          href={"/dashboard/courses/new"}
          className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded cursor-pointer"
        >
          Create New
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : !courses && !loading ? (
        <p className="text-xl text-center ">No Courses found</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm text-left">
          <thead>
            <tr className="bg-gray-100  text-left">
              <th className="px-6 py-3 text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-sm font-semibold">Category</th>
              <th className="px-6 py-3 text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses &&
              courses.length > 0 &&
              courses.map((course, idx) => (
                <tr
                  key={`${course?._id}${idx}`}
                  className="border-t hover:bg-gray-200"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {course?.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {course?.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {course?.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <Link
                      href={`/dashboard/courses/${course?._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
