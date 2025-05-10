import BackgroundImage from "@/components/common/backgroundImage";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const FollowUs = () => {
  return (
    <>
      {" "}
      <BackgroundImage imageKey="followUs" />
      <section className="w-full  bg-white text-black relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-600">Follow us</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Facebook */}
            <a
              href="https://facebook.com/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-600 transition-colors"
            >
              <Facebook size={28} strokeWidth={2} />
              <span className="text-lg font-medium">Your Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-pink-500 transition-colors"
            >
              <Instagram size={28} strokeWidth={2} />
              <span className="text-lg font-medium">Your Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-800 transition-colors"
            >
              <Linkedin size={28} strokeWidth={2} />
              <span className="text-lg font-medium">Your LinkedIn</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-red-600 transition-colors"
            >
              <Youtube size={28} strokeWidth={2} />
              <span className="text-lg font-medium">Your YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
