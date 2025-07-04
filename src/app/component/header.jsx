"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 bg-indigo-600 backdrop-blur-xl p-2 rounded-lg shadow-md transition hover:shadow-lg">
          <Image src="/logo.png" alt="ITIDCS Logo" width={60} height={42} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 font-medium text-sm">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/enroll" className="hover:text-blue-600 transition">Courses</Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
          <Link href="/jobs" className="hover:text-blue-600 transition">Jobs</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Login Button */}
        <div className="hidden lg:block">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Log in →
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center space-y-[4px] w-10 h-10"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-6 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-6 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-6 pt-2 space-y-4 bg-white/80 backdrop-blur-xl border-t border-gray-200 rounded-b-xl shadow-md text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/enroll" className="hover:text-blue-600 transition">Courses</Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
          <Link href="/jobs" className="hover:text-blue-600 transition">Jobs</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link
            href="/login"
            className="text-center mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log in →
          </Link>
        </div>
      </div>
    </header>
  );
}
