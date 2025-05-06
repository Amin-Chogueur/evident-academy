"use client";
import Image from "next/image";
import { useState } from "react";

export default function HandsOnCourses() {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Hands-On Courses
      </h1>

      {/* Intro */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
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
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Endodontics for the Daily Practice
        </h2>
        <p className="text-lg text-center mb-8">
          This is the time to start performing excellent root canal treatments!
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
        <div className="flex justify-center items-center">
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
              <p className="font-semibold text-xl mt-6 text-blue-600 text-center">
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
              <strong>10% Discount</strong> for Evident Academy Club members on
              all hands-on courses
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
              You will have access to cutting-edge equipment and a comprehensive
              selection of the latest materials and instruments available on the
              market.
            </p>
          </div>
        )}
      </div>
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Book Your Course
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Title:</label>
            <input
              type="text"
              placeholder="..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Full Name:</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email:</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Mobile Number:</label>
            <input
              type="tel"
              placeholder="+213..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Clinic/Organization:
            </label>
            <input
              type="text"
              placeholder="Name of your clinic or institution"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Country:</label>
            <input
              type="text"
              placeholder="Your country"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">City:</label>
            <input
              type="text"
              placeholder="Your city"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold mb-3">
              Choose your payment method:
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.paypal.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
              >
                Pay with PayPal
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
              >
                Pay via Bank Transfer
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
