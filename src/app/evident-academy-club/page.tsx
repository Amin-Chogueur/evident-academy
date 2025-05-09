import Link from "next/link";
import React from "react";
import { clubFaqData } from "./data";
import Accordion from "@/components/common/Accordion";
export default function EvidentAcademyClub() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-6 bg-gray-100 rounded-2xl">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600">
        Evident Academy Club
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-bold">
        A community of dentists to boost your career
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg">
        Evident Academy Club is a professional community for dentists with a
        passion for continuing education and professional development. It is
        designed for dentists, dental specialists and dental students who want
        to connect, learn, and grow through exclusive events, resources, and
        peer collaboration.
      </p>

      {/* Subscription Benefits */}
      <div>
        <h3 className="font-bold text-base md:text-lg">
          Yearly subscription package benefits:
        </h3>
        <ul className="list-disc list-inside text-base md:text-lg space-y-2 mt-2">
          <li>Exclusive online courses for members every month</li>
          <li>Case discussions and Q & A sessions</li>
          <li>Articles to read every month</li>
          <li>Discounted rates for courses and conferences</li>
        </ul>
      </div>

      {/* Online Course Topics */}
      <p className="font-bold text-base md:text-lg">
        Online courses range from clinical techniques (e.g., endodontics,
        prosthodontics, surgery) to practice management, treatment planning, and
        digital dentistry.
      </p>

      {/* Membership Cost */}
      <p className="font-bold text-base md:text-lg">Yearly membership cost:</p>
      <Link
        className="bg-blue-600 mx-auto block w-fit text-[28px] font-bold  hover:bg-blue-700 cursor-pointer p-2 rounded-2xl text-white"
        href={"/register"}
      >
        Join the club
      </Link>
      <Accordion content={clubFaqData} />
    </section>
  );
}
