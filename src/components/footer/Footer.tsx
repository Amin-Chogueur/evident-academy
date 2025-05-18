"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Model from "../common/Model";
import CancellationPolicy from "./CancellationPolicy";
import TermsAndConditions from "./TermsAndConditions";

export default function Footer() {
  const [showModel, setShowModel] = useState(false);
  const [currentComponet, setCurrentComponet] = useState("");
  return (
    <footer className="bg-gray-100 text-gray-700 mt-8">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Contact Info */}
        <div>
          <Link href="/" className="text-xl font-bold text-blue-600">
            <Image src={"/logoDark.jpg"} width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-center">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@evidentacademy.com">
                info@evidentacademy.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+1234567890">+1 234 567 890</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Dental St, Smile City, USA</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="text-gray-600 hover:text-[#1877F2] w-5 h-5 transition-colors duration-200" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-gray-600 hover:text-[#E4405F] w-5 h-5 transition-colors duration-200" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-gray-600 hover:text-[#0A66C2] w-5 h-5 transition-colors duration-200" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="text-gray-600 hover:text-[#FF0000] w-5 h-5 transition-colors duration-200" />
            </Link>
            <Link href="#" aria-label="TikTok">
              <FaTiktok className="text-gray-600 hover:text-[#010101] w-5 h-5 transition-colors duration-200" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => {
                  setShowModel(true);
                  setCurrentComponet("terms");
                }}
                className="hover:underline"
              >
                Terms & Condition
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowModel(true);
                  setCurrentComponet("cancellation");
                }}
                className="hover:underline"
              >
                Cancellation & Refund Policy
              </button>
            </li>
          </ul>
          {showModel && (
            <Model setShowModel={setShowModel}>
              {currentComponet === "cancellation" && <CancellationPolicy />}
              {currentComponet === "terms" && <TermsAndConditions />}
            </Model>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Evident Academy. All rights reserved.
      </div>
    </footer>
  );
}
