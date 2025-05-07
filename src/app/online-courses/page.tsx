import Image from "next/image";
import Link from "next/link";

export default function OnlineCourses() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 bg-gray-100 rounded-2xl">
      {/* Main Title */}
      <h1 className="text-3xl md:text-[48px] text-blue-600 font-bold">
        Unique remote dental learning opportunity with live procedure demos
      </h1>

      {/* Intro Paragraphs */}
      <p className="text-base md:text-lg">
        Our online courses combine live procedure demos with practical insights,
        giving you real-time learning from expert trainers.
      </p>
      <p className="text-base md:text-lg">
        You’ll not only see how it’s done; you’ll understand why, and be ready
        to apply it in your own practice the next day.
      </p>

      {/* Section Title */}
      <h2 className="text-2xl font-bold">
        Isolation and rubber dam techniques
      </h2>
      <p className="text-base md:text-lg">
        Excellent treatment starts with the perfect isolation. Learn the basics
        and tips and tricks of rubber dam isolation!
      </p>

      {/* Image */}
      <div className="my-4">
        <Image
          src="/pic6.jpg" // Update this path accordingly
          alt="Rubber dam demonstration"
          width={850}
          height={600}
          className="rounded-lg shadow"
        />
      </div>

      {/* Course Info */}
      <div className="flex justify-between items-center  text-base md:text-lg">
        <p>
          <strong>Language:</strong> English
        </p>
        <p>
          <strong>Mode:</strong> Online
        </p>
        <p>
          <strong>Level:</strong> Beginner and intermediate
        </p>
      </div>

      {/* Program Details */}
      <div className="space-y-2 text-base md:text-lg">
        <p className="font-bold">Course program:</p>
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

      {/* Other Info */}
      <p className="text-base md:text-lg font-bold">
        About the course lecturer:
      </p>
      <p className="text-base md:text-lg font-bold">Course cost:</p>
      <Link
        className="bg-blue-600 mx-auto block w-fit  hover:bg-blue-700 cursor-pointer p-2 rounded-2xl text-white"
        href={"/register"}
      >
        Book Your Course
      </Link>
    </div>
  );
}
