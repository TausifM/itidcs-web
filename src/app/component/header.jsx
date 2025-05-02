"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="j y au dv">
      <nav aria-label="Global" className="fy la vy aaz abe atn dwm">
        <div className="la dqo">
          {/* <a href="#" className="fe ath"> */}
          <Link href="/" className="fe ath amg agd atj">
            {/* <span className="i">Your Company</span> */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="pt vn"
            />
          </Link>
        </div>

        <div className="la dns">
          <button
            type="button"
            className="fg lg aaz abf agd atj bau"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="i">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="on"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="ld dnq dst hidden lg:flex space-x-6">
          <Link href="/" className="aze azr baw hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="aze azr baw hover:text-blue-600">
            Services
          </Link>
          <Link href="/enroll" className="aze azr baw hover:text-blue-600">
            Courses
          </Link>
          <Link href="/jobs" className="aze azr baw hover:text-blue-600">
            Jobs
          </Link>
          <Link href="/blogs" className="aze azr baw hover:text-blue-600">
            Blogs
          </Link>
          <Link href="/about" className="aze azr baw hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="aze azr baw hover:text-blue-600">
            Contact
          </Link>
        </div>

        <div className="ld dnq dqo dsh hidden lg:flex">
          <Link href="/login" className="aze azr baw hover:text-blue-600">
            Log in <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>

      {mounted && menuOpen && (
        <div className="lg:hidden px-4 py-4 space-y-2 bg-white shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/enroll"
            className="block text-gray-700 hover:text-blue-600"
          >
            Courses
          </Link>
          <Link
            href="/blogs"
            className="block text-gray-700 hover:text-blue-600"
          >
            Blogs
          </Link>
          <Link href="/jobs" className="block text-gray-700 hover:text-blue-600">
            Jobs
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block text-gray-700 hover:text-blue-600"
          >
            Log in →
          </Link>
        </div>
      )}
    </header>
  );
}
