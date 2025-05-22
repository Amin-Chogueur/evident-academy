import Accordion from "@/components/common/Accordion";

import { onlineFaqData } from "./data";

import BackgroundImage from "@/components/common/backgroundImage";

import Course from "@/components/common/Course";
import { getCourses } from "@/lib/helpers/getCourses";

export default async function OnlineCourses() {
  const allCourses = await getCourses();
  const onlineCourses = allCourses.filter(
    (course) => course.category === "Hands-on Dental Courses"
  );
  return (
    <>
      <BackgroundImage imageKey="onlineCourses" />{" "}
      <section className="max-w-5xl mx-auto px-4 pb-8   rounded-2xl">
        {/* Main Title */}
        <h1 className="text-[48px]  font-bold mb-6 mt-[-20px] text-center">
          Online Dental Courses
        </h1>
        <h2 className="text-3xl md:text-[32px]  font-bold mb-6 text-center">
          Unique remote dental learning opportunity with live procedure demos
        </h2>

        {/* Intro Paragraphs */}
        <div className="text-[16px] text-center mb-12">
          <p>
            Our online courses combine live procedure demos with practical
            insights, giving you real-time learning from expert trainers.
          </p>
          <p>
            You’ll not only see how it’s done; you’ll understand why, and be
            ready to apply it in your own practice the next day.
          </p>
        </div>
        <div className="mb-12">
          {onlineCourses.map((course) => (
            <Course key={course._id} courseDetails={course} />
          ))}
        </div>
        <Accordion content={onlineFaqData} />
      </section>
    </>
  );
}
