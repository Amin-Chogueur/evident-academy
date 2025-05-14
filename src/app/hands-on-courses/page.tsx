"use client";

import Accordion from "@/components/common/Accordion";
import Card from "@/components/common/Card";

import Link from "next/link";
import { useState } from "react";
import { faqData } from "./data";
import Model from "@/components/common/Model";
import BackgroundImage from "@/components/common/backgroundImage";

export default function HandsOnCourses() {
  const [showModel, setShowModel] = useState(false);
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
          <Card
            title="Endodontics for the Daily Practice"
            description="This is the time to start 
            performing excellent root canal treatments!"
            imageUrl="/Endodontics.png"
            onShowModel={setShowModel}
          >
            <ul className="list-disc p-5">
              <li>
                <span className="font-bold">Language : </span> English
              </li>
              <li>
                <span className="font-bold">Mode: 2 days hands-on course</span>
              </li>
              <li>
                <span className="font-bold">Level : </span>Beginner and
                intermediate
              </li>
            </ul>
          </Card>
          {/* Images */}

          {/* Course Info */}
          {showModel && (
            <Model setShowModel={setShowModel}>
              {" "}
              <div className="space-y-6 max-w-4xl mx-auto text-lg   p-5 rounded-2xl ">
                {/* Top Info Section */}

                <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-10 text-center">
                  <p>
                    <strong className="text-[#a6a6a6]">Nearest date:</strong>{" "}
                    25/05/2025
                  </p>
                  <p>
                    <strong className="text-[#a6a6a6]">Next dates:</strong>{" "}
                    20/10/2025
                  </p>
                </div>

                <hr className="border-t-2 border-[#a6a6a6] my-4" />

                {/* Course Program Section */}
                <div>
                  <p className="font-bold text-xl mt-6 text-[#a6a6a6] text-center">
                    Course Program:
                  </p>
                  <div className="flex flex-col md:flex-row justify-between gap-8 mt-4">
                    <div className="flex-1">
                      <p className="font-semibold">
                        DAY 1 – Primary Endo from A to Z
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Diagnosis & treatment planning</li>
                        <li>Isolation &rubber dam techniques</li>
                        <li>Access cavity </li>
                        <li>Working length determination & instrumentation</li>
                        <li>Irrigation protocol</li>
                        <li>3D Obturation</li>
                      </ul>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">
                        DAY 2 – Retreatment from A to Z
                      </p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Case selection</li>
                        <li>Access through crown/indirect restoration</li>
                        <li>Disobturation</li>
                        <li>Ledge bypass</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Lecturer and Cost Info */}
                <p className="font-semibold text-xl mt-6 text-[#a6a6a6]  text-center">
                  About the course lecturer:
                </p>

                <p>
                  <strong>Course cost:</strong> The cost includes lunch & coffee
                  breaks
                </p>

                <p>
                  <strong>10% Discount</strong> for Evident Academy Club members
                  on all hands-on courses
                </p>

                {/* Agenda Section */}
                <div>
                  <p className="font-semibold text-xl mt-6">Agenda:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>09:00 – 12:00 Hands-on practice</li>
                    <li>12:00 – 13:00 Lunch</li>
                    <li>13:00 – 14:30 Hands-on practice</li>
                    <li>14:30 – 15:30 Coffee break</li>
                    <li>15:30 – 16:30 Hands-on practice</li>
                  </ul>
                </div>

                <p className="mt-6">
                  You will have access to cutting-edge equipment and a
                  comprehensive selection of the latest materials and
                  instruments available on the market.
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
          <Accordion content={faqData} />
        </div>
      </section>
    </div>
  );
}
