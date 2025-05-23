import BackgroundImage from "@/components/common/backgroundImage";
import React from "react";

export default function Conferences() {
  return (
    <>
      <BackgroundImage imageKey="conferences" />{" "}
      <section className="max-w-5xl mx-auto px-4 pb-12 space-y-6 bg-gray-100 rounded-2xl">
        {/* Main Title */}
        <h1 className="text-[48px] mb-16 font-bold text-center ">
          Dental Conferences
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          National and international speakers and trainers
        </h2>

        {/* Paragraphs */}
        <p className="text-base md:text-lg">
          Evident Academy hosts dynamic conferences featuring esteemed national
          and international speakers and trainers, providing cutting-edge
          insights and advanced training in the dental field.
        </p>
        <p className="text-base md:text-lg">
          Join leading professionals featuring expert-led lectures, interactive
          sessions, and hands-on dental training workshops designed to elevate
          your clinical skills and knowledge.
        </p>
        <p className="text-base md:text-lg">
          Join us to expand your expertise, connect with renowned dental
          professionals, and stay at the forefront of dental innovation!
        </p>
      </section>
    </>
  );
}
