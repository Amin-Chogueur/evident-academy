"use client";
import Accordion from "@/components/common/Accordion";
import Card from "@/components/common/Card";

import Link from "next/link";
import { onlineFaqData } from "./data";
import { useState } from "react";
import Model from "@/components/common/Model";
import BackgroundImage from "@/components/common/backgroundImage";

export default function OnlineCourses() {
  const [showModel, setShowModel] = useState(false);
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

        {/* Section Title */}
        <Card
          title="Isolation and rubber dam techniques"
          description=" Excellent 
          treatment starts with perfect isolation. Learn the basics and tips and tricks of 
          rubber dam isolation!"
          imageUrl="/pic6.jpg"
          onShowModel={setShowModel}
        >
          <ul className="list-disc p-5">
            <li>
              <span className="font-bold">Language : </span> English
            </li>
            <li>
              <span className="font-bold">Mode: </span> Online
            </li>
            <li>
              <span className="font-bold">Level : </span>Beginner and
              intermediate
            </li>
          </ul>
        </Card>

        {/* Course Info */}
        {showModel && (
          <Model setShowModel={setShowModel}>
            <div className="p-5 space-y-6">
              <div className="space-y-2 text-base md:text-lg">
                <p className="font-bold text-[#a6a6a6] text-center">
                  Course program:
                </p>
                <p>You will learn and see step by step:</p>
                <ul className="list-decimal list-inside space-y-1">
                  <li>Clamp selection</li>
                  <li>
                    Anterior tooth isolation practice:
                    <ul className="list-disc ml-12">
                      <li>Obtaining inverted margins</li>
                      <li>Isolating multiple teeth</li>
                      <li>Floss ligatures on anterior teeth</li>
                      <li>The use of orthodontic bands in isolation</li>
                    </ul>
                  </li>
                  <li>
                    Posterior tooth isolation practice:
                    <ul className="list-disc ml-12">
                      <li>Isolating deep sub-gingival posterior cavities</li>
                      <li>Matrixing systems with the use of rubber dam</li>
                      <li>The use of Teflon tape</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <p className="text-base md:text-lg font-bold text-[#a6a6a6] text-center">
                About the course lecturer:
              </p>
              <p className="text-base md:text-lg font-bold text-[#a6a6a6]">
                Course cost:
              </p>
              <Link
                className="bg-white mx-auto block w-fit  hover:bg-[#ddd] cursor-pointer p-2 rounded-2xl text-black font-bold"
                href={"/register"}
              >
                Book Your Course
              </Link>
            </div>
          </Model>
        )}
        <Accordion content={onlineFaqData} />
      </section>
    </>
  );
}
