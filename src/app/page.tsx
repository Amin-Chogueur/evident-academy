import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="bg-white text-gray-800  px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700 text-center my-5">
        Welcome to Evident Academy
      </h1>

      <div className="relative w-full h-[60vh] bg-black overflow-hidden">
        {/* Embedded YouTube Video */}
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1"
          title="Upcoming Dental Events"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Overlay Content */}
        <div className="absolute top-4 left-4 bg-white/90 text-gray-900 px-4 py-2 rounded shadow-md backdrop-blur-sm">
          <h2 className="text-lg font-semibold">Upcoming Event</h2>
          <p className="text-sm">Dental Conference – June 20, 2025</p>
        </div>
      </div>
      <div className=" max-w-4xl mx-auto text-center my-10">
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          At <span className="font-semibold">Evident Academy</span>, we provide
          top-tier evidence-based dental training for both aspiring students and
          experienced dentists.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          We want you to improve your clinical skills, achieve excellence, and
          stay up-to-date with the latest technology in dentistry.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-6">
          Whether you`re beginning your career or expanding your expertise,
          we’re here to support your growth every step of the way.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center mx-auto max-w-6xl px-4">
        {/* First Column */}
        <div className="space-y-6 flex flex-col items-center">
          <div className="bg-gray-300 rounded-xl overflow-hidden">
            <Link href="/hands-on-courses">
              <Image
                src="/pic2.jpg"
                alt="pic"
                width={300}
                height={200}
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-x-2"
              />
              <h2 className="text-center text-xl p-3 hover:text-blue-600 ">
                Hands-on-courses
              </h2>
            </Link>
          </div>
          <div className="bg-gray-300 rounded-xl overflow-hidden">
            <Link href="/online-courses">
              <Image
                src="/pic3.jpg"
                alt="pic"
                width={300}
                height={200}
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-x-2"
              />
              <h2 className="text-center text-xl p-3 hover:text-blue-600 ">
                {" "}
                Online courses
              </h2>
            </Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-6 flex flex-col items-center">
          <div className="bg-gray-300 rounded-xl overflow-hidden">
            <Link href="/conferences">
              <Image
                src="/pic4.jpg"
                alt="pic"
                width={300}
                height={200}
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-x-2"
              />
              <h2 className="text-center text-xl p-3 hover:text-blue-600 ">
                Conferences{" "}
              </h2>
            </Link>
          </div>
          <div className="bg-gray-300 rounded-xl overflow-hidden">
            <Link href="/evident-academy-club">
              <Image
                src="/pic6.jpg"
                alt="pic"
                width={300}
                height={200}
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-x-2"
              />
              <h2 className="text-center text-xl p-3 hover:text-blue-600  ">
                Evident Academy Club
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
