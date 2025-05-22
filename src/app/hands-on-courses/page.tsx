import Accordion from "@/components/common/Accordion";
import { faqData } from "./data";

import BackgroundImage from "@/components/common/backgroundImage";

import Course from "@/components/common/Course";

import { getCourses } from "@/lib/helpers/getCourses";

export default async function HandsOnCourses() {
  const allCourses = await getCourses();
  const handsOnCourses = allCourses.filter(
    (course) => course.category === "Hands-on Dental Courses"
  );

  return (
    <div className="max-w-5xl mx-auto">
      <BackgroundImage imageKey="handsOnCourses" />
      <section className="py-10 px-4 max-w-7xl mx-auto ">
        <h1 className="text-[48px] mb-16 font-bold  text-center mt-[-30px] lg:mt-[-70px]">
          Hands-on Dental Courses
        </h1>

        {/* Intro */}
        <div className="mb-12 text-center">
          <h2 className="text-[32px] font-bold mb-4">
            Learn today. Apply tomorrow.
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our hands-on courses provide training guided by experienced dental
            professionals. Gain confidence and enhance your clinical techniques
            through direct practice and personalized guidance.
          </p>
        </div>

        {/* Course Overview */}
        <div className="mb-12">
          {handsOnCourses.map((course) => (
            <Course key={course._id} courseDetails={course} />
          ))}

          <Accordion content={faqData} />
        </div>
      </section>
    </div>
  );
}
