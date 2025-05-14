import BackgroundImage from "@/components/common/backgroundImage";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const FollowUs = () => {
  return (
    <>
      <BackgroundImage imageKey="followUs" />
      <section className="p-5 text-center  text-black relative overflow-hidden">
        <h2 className="text-[48px] font-bold mb-12 text-black">Follow us</h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Facebook */}
          <a
            href="https://facebook.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-blue-600 transition-colors "
          >
            <FaFacebookF size={28} />
            <span className="text-lg font-medium">Facebook</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={28} />
            <span className="text-lg font-medium">Instagram</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-blue-800 transition-colors"
          >
            <FaLinkedinIn size={28} />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-red-600 transition-colors"
          >
            <FaYoutube size={28} />
            <span className="text-lg font-medium">YouTube</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-black transition-colors"
          >
            <FaTiktok size={28} />
            <span className="text-lg font-medium">TikTok</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
