"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="j y au dv">
      <nav aria-label="Global" className="fy la vy aaz abe atn dwm">
        <div className="la dqo">
          {/* <a href="#" className="fe ath"> */}
          <Link href="/" className="fe ath">
            {/* <span className="i">Your Company</span> */}
            <Image
              src="/itidcs-logo.png"
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
          <a href="#services" className="aze azr baw hover:text-blue-600">
            Services
          </a>
          <a href="#courses" className="aze azr baw hover:text-blue-600">
            Courses
          </a>
          <a href="#portfolio" className="aze azr baw hover:text-blue-600">
            Portfolio
          </a>
          <a href="#about" className="aze azr baw hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="aze azr baw hover:text-blue-600">
            Contact
          </a>
        </div>

        <div className="ld dnq dqo dsh hidden lg:flex">
          <a href="#" className="aze azr baw">
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden px-4 py-4 space-y-2 bg-white shadow-md">
          <a href="#" className="aze azr baw block">
            Product
          </a>
          <a href="#" className="aze azr baw block">
            Features
          </a>
          <a href="#" className="aze azr baw block">
            Marketplace
          </a>
          <a href="#" className="aze azr baw block">
            Company
          </a>
          <a href="#" className="aze azr baw block">
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </header>
  );
}
