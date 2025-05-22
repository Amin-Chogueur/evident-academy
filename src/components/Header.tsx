"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
// import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useAppSelector } from "@/store/hooks";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Hands-on Courses", href: "/hands-on-courses" },
  { name: "Online Courses", href: "/online-courses" },
  { name: "Conferences", href: "/conferences" },
  { name: "Academy Club", href: "/evident-academy-club" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const cart = useAppSelector((state) => state.cart.cart);
  const pathName = usePathname();
  const { isMounted, user, onLogout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={"/logoDark.jpg"} width={50} height={50} alt="logo" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={` hover:text-blue-600 transition text-[14px] ${
                pathName === link.href
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } `}
            >
              {link.name}
            </Link>
          ))}
          {isMounted &&
            (user?.role === "admin" ? (
              <Link
                href={"/dashboard"}
                className={` hover:text-blue-600 transition text-[14px] ${
                  pathName === "/dashboard"
                    ? "text-blue-600 font-bold"
                    : "text-gray-700"
                } `}
              >
                Dashboard
              </Link>
            ) : null)}
        </nav>

        {/*  Cart */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative flex">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            <span className="absolute top-[-12px] right-[-15px] text-red-600 text-sm">
              ({cart.length})
            </span>
          </Link>

          {isMounted &&
            (!user ? (
              <>
                <Link
                  className={` hover:text-blue-600 transition text-[14px] ${
                    pathName === "/register"
                      ? "text-blue-600 font-bold"
                      : "text-gray-700"
                  } `}
                  href={"/register"}
                >
                  Register
                </Link>
                <Link
                  className={` hover:text-blue-600 transition text-[14px] ${
                    pathName === "/login"
                      ? "text-blue-600 font-bold"
                      : "text-gray-700"
                  } `}
                  href={"/login"}
                >
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={onLogout}
                className="bg-black p-2 text-white rounded-xl cursor-pointer"
              >
                Logout
              </button>
            ))}

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
                className={` hover:text-blue-600 transition text-[14px] ${
                  pathName === link.href
                    ? "text-blue-600 font-bold"
                    : "text-gray-700"
                } `}
              >
                {link.name}
              </Link>
            ))}
            {isMounted &&
              (user?.role === "admin" ? (
                <Link
                  href={"/dashboard"}
                  onClick={() => setIsOpen(false)}
                  className={` hover:text-blue-600 transition text-[14px] ${
                    pathName === "/dashboard"
                      ? "text-blue-600 font-bold"
                      : "text-gray-700"
                  } `}
                >
                  Dashboard
                </Link>
              ) : null)}
          </nav>
        </div>
      )}
    </header>
  );
}
