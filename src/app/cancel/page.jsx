// app/cancel/page.js
"use client";
import { useEffect, useState } from "react";

export default function CancelPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-red-50 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-red-700">Payment Cancelled</h2>
        <p className="mt-2 text-gray-600">
          Looks like something went wrong or you canceled the checkout.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-500 transition"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
