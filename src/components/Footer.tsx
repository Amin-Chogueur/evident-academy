import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
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
          <ul className="space-y-2 text-sm">
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
          <div className="flex gap-4 text-gray-600">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-blue-600 transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-blue-400 transition" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-blue-700 transition" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Evident Academy. All rights reserved.
      </div>
    </footer>
  );
}
