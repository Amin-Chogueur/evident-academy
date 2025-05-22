"use client";

import { useState } from "react";
import Card from "./Card";
import Model from "./Model";
import { CourseType } from "@/store/dashboardSlices/courseSlice";

export default function Course({
  courseDetails,
}: {
  courseDetails: CourseType;
}) {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      {" "}
      <Card
        category={courseDetails.category}
        title={courseDetails.title}
        description={courseDetails.description}
        imageUrl={courseDetails.image}
        onShowModel={setShowModel}
        mode={courseDetails.mode}
        level={courseDetails.level}
        language={courseDetails.language}
        price={courseDetails.price}
        id={courseDetails._id!}
      />
      {/* Images */}
      {showModel && (
        <Model setShowModel={setShowModel}>
          {" "}
          <div
            className="max-w-5xl mx-auto p-5 rounded-xl text-lg leading-7 whitespace-pre-wrap break-words space-y-3"
            dangerouslySetInnerHTML={{ __html: courseDetails.moreInfo }}
          />
        </Model>
      )}
    </>
  );
}
