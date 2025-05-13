import Category from "@/components/common/Category";

export default function HomePage() {
  return (
    <section className="bg-white text-gray-800  px-4">
      <h1 className="text-3xl md:text-[48px] font-semibold mb-12  text-center mt-5">
        Welcome to Evident Academy
      </h1>
      <h2 className="text-3xl md:text-[24px] font-bold mb-12  text-center mt-5">
        Where Passion Meets Precision
      </h2>
      <div className="relative w-full h-[60vh] bg-black overflow-hidden">
        {/* Embedded YouTube Video */}
        <iframe
          className="absolute inset-0 w-full h-full"
          // src="https://www.youtube.com/embed/dpyoZAddffo?autoplay=0&mute=1&controls=1"
          src="/HomeVideo.mp4"
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
      <div className=" max-w-4xl mx-auto text-center my-10 text-[16px]">
        <p className="  leading-relaxed mb-6">
          “At Evident Academy
          <span className="font-semibold">Evident Academy</span>, we provide
          top-tier evidence based dental training for both aspiring students and
          experienced dentists. We want you to improve your clinical skills,
          achieve excellence, and be up-to-date with the latest technology in
          dentistry.
        </p>
        <p className=" leading-relaxed">
          Our dental continuing education courses are available both online and
          in hands-on formats, we also host international dental conferences;
          bringing together global experts for dynamic lectures and advanced
          dental training workshops to help you excel in every aspect of your
          clinical practice.
        </p>
        <p className=" leading-relaxed mt-6">
          That`s not all, but we offer a unique opportunity to join Evident
          Academy Club, a professional club designed for dentists and dental
          students seeking to connect, grow, and expand their knowledge through
          exclusive monthly lectures, clinical case discussions and expert
          guidance.
        </p>
        <p>
          Whether you`re beginning your career or expanding your expertise,
          we’re here to support your growth every step of the way.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center mx-auto max-w-6xl px-4">
        {/* First Column */}

        <Category
          imageUrl="/pic2.jpg"
          title="Hands-on Dental Courses"
          link="/hands-on-courses"
        />
        <Category imageUrl="/pic3.jpg" title="Online Dental Courses" link="/" />

        {/* Second Column */}

        <Category
          imageUrl="/DentalConferences1.jpg"
          title="Dental Conferences"
          link="/conferences"
        />
        <Category
          imageUrl="/EvidenceAcademy.jpg"
          title=" Evident Academy Club"
          link="/evident-academy-club"
        />
      </div>
    </section>
  );
}
