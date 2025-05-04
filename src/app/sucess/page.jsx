// app/success/page.js
"use client";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-green-50 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-green-700">
          Payment Successful
        </h2>
        <p className="mt-2 text-gray-600">
          Thank you! We've received your payment and will be in touch shortly.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-green-600 px-5 py-2 text-white hover:bg-green-500 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
