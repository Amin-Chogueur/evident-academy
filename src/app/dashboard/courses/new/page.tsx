"use client";
import React from "react";

const RichTextEditor = dynamic(
  () => import("@/components/dashboard/courses/RichTextEditor"),
  {
    ssr: false,
  }
);
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  createCourse,
  fetchCourses,
} from "@/store/dashboardSlices/courseSlice";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import ImageUpload from "@/components/dashboard/courses/ImageUpload";
import Image from "next/image";

const intialFormState = {
  title: "",
  description: "",
  language: "",
  mode: "",
  level: "",
  price: "",
  category: "",
  image: "",
};

export default function NewCourse() {
  console.log("new course page render");
  const router = useRouter();
  const loading = useAppSelector((state) => state.course.loading);
  const dispatch = useAppDispatch();
  const [moreInfo, setMoreInfo] = useState("");
  const [formData, setFormData] = useState(intialFormState);
  const [errorImage, setErrorImage] = useState("");

  const onChange = (content: string) => {
    setMoreInfo(content);
  };
  const handleImageUpload = (url: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: url,
    }));
  };

  const handleRemoveImage = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: "",
    }));
  };
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const courseData = {
      ...formData,
      moreInfo,
    };
    if (!formData.image) {
      setErrorImage("Image is required");
      return;
    }
    await dispatch(createCourse(courseData));
    await dispatch(fetchCourses()); // i fetch the courses so whne i navigate i see the updated course list cus i use technique to not use effet in the courses page each render
    setMoreInfo("");
    setFormData(intialFormState);
    router.push("/dashboard/courses");
  }
  return (
    <form className="max-w-5xl mx-auto space-y-3" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-6">New Course</h2>
      <div className="flex flex-col items-center gap-5">
        {formData.image ? (
          <div className="relative w-fit mx-auto">
            <Image
              className="mx-auto my-4 border rounded"
              src={formData.image}
              width={300}
              height={300}
              alt="uploadImage"
            />
            <span
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 bg-red-600 p-1 cursor-pointer"
            >
              ✖
            </span>
          </div>
        ) : (
          <div className="w-[200px] h-[200px] border  flex justify-center items-center">
            Book Image
          </div>
        )}
        <ImageUpload onImageUpload={handleImageUpload} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="title" className="font-bold text-gray-700">
          Title:
        </label>
        <input
          required
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="title"
          name="title"
          type="text"
          className="font-normal border border-[#a6a6a6] rounded p-2 bg-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="category" className="font-bold text-gray-700">
          Category:
        </label>
        <select
          required
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="category"
          name="category"
          className="font-normal border border-[#a6a6a6] rounded p-2"
        >
          ,<option value="">Please select category</option>
          <option value="Hands-on Dental Courses">
            Hands-on Dental Courses
          </option>
          <option value="Online Dental Courses">Online Dental Courses</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="font-bold text-gray-700">
          Description:
        </label>
        <textarea
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="description"
          name="description"
          rows={5}
          className="font-normal border border-[#a6a6a6] rounded p-2 bg-white"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="language" className="font-bold text-gray-700">
          Language:
        </label>
        <input
          required
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="language"
          name="language"
          type="text"
          className="font-normal border border-[#a6a6a6] rounded p-2 bg-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="mode" className="font-bold text-gray-700">
          Mode:
        </label>
        <input
          required
          value={formData.mode}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="mode"
          name="mode"
          type="text"
          className="font-normal border border-[#a6a6a6] rounded p-2 bg-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="level" className="font-bold text-gray-700">
          Level:
        </label>
        <input
          required
          value={formData.level}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="level"
          name="level"
          type="text"
          className="font-normal border border-[#a6a6a6] rounded p-2 bg-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="level" className="font-bold text-gray-700">
          Price:
        </label>
        <input
          required
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          id="price"
          name="price"
          type="text"
          className="font-normal border border-[#a6a6a6] rounded p-2 bg-white"
        />
      </div>
      <h3 className="font-bold text-gray-700">More Info:</h3>
      <RichTextEditor content={moreInfo} onChange={onChange} />
      {errorImage && (
        <span className="text-red-600 mt-3 block">{errorImage}</span>
      )}
      <button
        disabled={loading}
        type="submit"
        className="cursor-pointer disabled:bg-gray-600 bg-black text-white font-bold  p-2 rounded mt-3.5 "
      >
        {loading ? "In progress..." : "SAVE"}
      </button>
    </form>
  );
}
