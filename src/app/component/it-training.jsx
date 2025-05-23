"use client";

import Image from "next/image";
import { useState } from "react";

export default function TrainingLandingPage() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      {/* <header className="flex justify-between items-center px-6 py-4 shadow">
        <div className="text-2xl font-bold text-green-700">
          SkillBuilder Pro
        </div>
        <button className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded">
          Get Free Counseling
        </button>
      </header> */}

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row justify-between items-center px-8 py-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold mb-6">
            Launch Your IT Career with{" "}
            <span className="text-lime-600">Expert-Led Training</span>
          </h1>
          <p className="text-lg mb-4">
            Flexible Classroom & Online Learning designed for real-world tech
            skills.
          </p>
          <p className="mb-6 text-sm text-gray-600">
            Join our comprehensive training programs and gain the skills you
            need to excel in the IT industry. Our expert instructors will guide
            you through hands-on projects, ensuring you are job-ready upon
            completion.
          </p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-3 rounded font-semibold shadow">
            Download Program Details 📄
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 mt-12 lg:mt-0 lg:ml-12 w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4">
            Get Free Counseling, Enroll Now!
          </h2>
            <p className="text-sm mb-4 text-gray-600">
            Fill out the form below and our team will get in touch with you
            shortly.
            </p>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            maxLength={10}
            value={form.mobile}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white py-3 rounded font-semibold transition"
          >
            Submit ✉️
          </button>
        </form>
      </main>

      {/* Partners */}
      <section className="bg-gray-50 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-gray-600 mb-6 text-lg">
            Trusted by Industry Leaders
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex gap-12 animate-scroll-left w-max mx-auto">
              {/* Logos rendered twice for infinite loop */}
              {Array(2)
                .fill([
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748002389/aw-logo_gt7pqr.png",
                    alt: "AWS",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748002674/ib-logo_hyodnh.png",
                    alt: "IBM",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003029/g-logo-removebg-preview_nm3lpw.png",
                    alt: "Google",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748002388/azure-logo_llfizh.png",
                    alt: "Azure",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748002388/gc-logo_gsr7fg.png",
                    alt: "Google Cloud",
                    cover: true,
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003820/gp-logo_me1pep.png",
                    alt: "ChatGPT",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003819/ai-logo_ocn2t7.png",
                    alt: "OpenAI",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003819/deepseek-logo_oj52bu.png",
                    alt: "DeepSeek",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003819/github-logo_qgdw4w.png",
                    alt: "Github",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003819/cop-logo_ci4oi7.png",
                    alt: "Github Copilot",
                  },
                  {
                    src: "https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1748003819/yotub-logo_cj5q73.png",
                    alt: "YouTube",
                  },
                ])
                .flat()
                .map((logo, index) => (
                  <div
                    key={index}
                    className="w-[140px] h-[60px] flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`w-full h-full transition duration-300 grayscale hover:grayscale-0 ${
                        logo.cover ? "object-cover" : "object-contain"
                      }`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-scroll-left {
              animation-duration: 40s;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
