"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HandsOnCourses() {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div className="bg-[url('/pic7.jpg')] bg-cover bg-center h-[300px] md:h-[400px] w-full absolute left-0 top-0"></div>
      <div className=" h-[300px] md:h-[400px] w-full "></div>
      <section className="pb-10 px-4 max-w-7xl mx-auto text-gray-800">
        <h1 className="text-[48px] font-bold text-blue-700 mb-10 text-center mt-[-30px] lg:mt-[-70px]">
          Hands-On Courses
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
          <h2 className="text-[28px] font-bold mb-4 text-center">
            Endodontics for the Daily Practice
          </h2>
          <p className="text-[16px] text-center mb-8">
            This is the time to start performing excellent root canal
            treatments!
          </p>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
            <Image
              src="/pic10.jpg"
              alt="Course Image 1"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
            <Image
              src="/pic8.jpg"
              alt="Course Image 2"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
            <Image
              src="/pic1.jpg"
              alt="Course Image 3"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={() => setShowDetail(true)}
              className="bg-blue-600  hover:bg-blue-700 cursor-pointer p-2 rounded-2xl text-white"
            >
              About The Course
            </button>
          </div>

          {/* Course Info */}
          {showDetail && (
            <div className="space-y-6 max-w-4xl mx-auto text-lg mt-10 bg-gray-100 p-5 rounded-2xl">
              {/* Top Info Section */}
              <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-y-4 gap-x-10 text-center">
                <p>
                  <strong>Language:</strong> English
                </p>
                <p>
                  <strong>Location:</strong> Algiers, Algeria
                </p>
                <p>
                  <strong>2 days hands-on</strong> course
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-10 text-center">
                <p>
                  <strong>Nearest date:</strong> 25/05/2025
                </p>
                <p>
                  <strong>Next dates:</strong> 20/10/2025
                </p>
              </div>

              <hr className="border-t-2 border-blue-600 my-4" />

              {/* Course Program Section */}
              <div>
                <p className="font-bold text-xl mt-6 text-blue-600 text-center">
                  Course Program:
                </p>
                <div className="flex flex-col md:flex-row justify-between gap-8 mt-4">
                  <div className="flex-1">
                    <p className="font-semibold">
                      DAY 1 – Primary Endo from A to Z
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Diagnosis & treatment planning</li>
                      <li>Isolation and rubber dam techniques</li>
                      <li>Access cavity</li>
                      <li>Working length determination and instrumentation</li>
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
              <p className="font-semibold text-xl mt-6 text-blue-600 text-center">
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
                comprehensive selection of the latest materials and instruments
                available on the market.
              </p>
              <Link
                className="bg-blue-600 mx-auto block w-fit  hover:bg-blue-700 cursor-pointer p-2 rounded-2xl text-white"
                href={"/register"}
              >
                Book Your Course
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
