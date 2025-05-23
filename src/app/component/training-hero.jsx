// app/components/TrainingHero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrainingHero({ imgSrc, category, title }) {
  // Set your actual batch start datetime here:
  // Start batch from 5th June 2025
  const BATCH_START = new Date(2025, 5, 5, 10, 0, 0); // June 5, 2025, 10:00 AM
  const [timeLeft, setTimeLeft] = useState(getDelta(BATCH_START));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getDelta(BATCH_START));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getDelta(target) {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return { h: 0, m: 0, s: 0 };
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    return { h, m, s };
  }

  return (
    <section className="bg-gray-100 py-12 mx-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:px-1 lg:px-2">
        {/* Left side */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow overflow-hidden sm:m-2">
          {/* Image + overlay container */}
          {/* Top badges inside image */}
          <div className="top-4 left-4 flex gap-2 justify-between">
            <span className="bg-white text-sm font-medium px-3 py-1 shadow">
              Hinglish
            </span>
            <span className="bg-white text-sm font-medium px-3 py-1 shadow">
              {category}
            </span>
            <div className="top-4 right-4 bg-lime-500 text-white text-sm font-semibold px-4 py-2  shadow">
              🔥 Filling Fast
            </div>
          </div>

          {/* Filling fast ribbon inside image */}

          <div className="relative">
            {/* Trainer image */}
            <Image
              src={imgSrc}
              alt="Our Trainers"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl p-6 sm:p-8 shadow">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Become An Expert {title} in Months
          </h2>

          <ul className="space-y-4 mb-6">
            {[
              "Enroll once & get access to all courses.",
              "In-depth curriculum with only 20 seats per batch.",
              "Integrated internship & certifications.",
              "Practice on HackerRank & LeetCode to boost problem-solving skills.",
              "Corporate visits & 3-month on-job support after placement.",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm sm:text-base"
              >
                <span className="text-lime-500 mt-1">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Batch Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center sm:text-left">
            {[
              {
                label: "Batch Start Date",
                value: BATCH_START.toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
              },
              {
                label: "Batch Start Time",
                value: BATCH_START.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              },
              {
                label: "Batch Start Day",
                value: BATCH_START.toLocaleDateString("en-IN", {
                  weekday: "long",
                }),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center sm:items-start"
              >
                <div className="bg-white border rounded-lg px-3 py-1 text-base sm:text-lg font-semibold w-full max-w-[120px] text-center mx-auto sm:mx-0">
                  {item.value}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Countdown & CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
              {[
                { unit: "hrs", value: timeLeft.h },
                { unit: "mins", value: timeLeft.m },
                { unit: "sec", value: timeLeft.s },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-white border rounded-lg px-3 py-1 text-base sm:text-lg font-semibold w-12 sm:w-14 text-center">
                    {String(t.value).padStart(2, "0")}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {t.unit}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-lime-500 hover:bg-lime-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow transition">
                Hurry — only 5 seats left!
              </button>
            </div>
          </div>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-lg text-base sm:text-lg transition">
              View Batch Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
