"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
// import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Hands-on Courses", href: "/hands-on-courses" },
  { name: "Online Courses", href: "/online-courses" },
  { name: "Conferences", href: "/conferences" },
  { name: "Academy Club", href: "/evident-academy-club" },
  { name: "FAQ", href: "/faq" },
  { name: "Follow Us", href: "/follow-us" },
  { name: "Contact", href: "/contact-us" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Header() {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  // const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          <Image src={"/logoDark.jpg"} width={50} height={50} alt="logo" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={` hover:text-blue-600 transition ${
                pathName === link.href
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          {/* <div className="hidden xl:flex items-center border border-gray-300 rounded-md px-2">
            <Search className="text-gray-500 w-4 h-4" />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none px-2 py-1 w-40 text-sm"
            />
          </div> */}

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            {/* You can add a badge with item count if needed */}
          </Link>
          <Link
            className={` hover:text-blue-600 transition ${
              pathName === "/register"
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            } `}
            href={"/register"}
          >
            Register
          </Link>

          {/* Mobile menu button */}

          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="xl:hidden bg-gray-100 px-4 pb-4 absolute top-[50px] left-0 right-0 z-50 pt-3 ">
          <nav className="flex flex-col gap-3 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={` hover:text-blue-600 transition ${
                  pathName === link.href
                    ? "text-blue-600 font-bold"
                    : "text-gray-700"
                } `}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile search */}
            {/* <div className="flex items-center border border-gray-300 rounded-md px-2">
              <Search className="text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none px-2 py-1 w-full text-sm"
              />
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
