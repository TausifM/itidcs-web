"use client";
import { useState, useEffect } from "react";
import BrochureModal from "./BrochureModal";

export default function TrainingLandingPage() {
   // ─── State Hooks ───────────────────────────────────────
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [errors, setErrors] = useState({ email: false, mobile: false });
  const [isFormValid, setFormValid] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const brochureLink =
    "https://www.canva.com/design/DAGnxYI4ZuE/tP83oxzkUeVCxxoyJagu4w/view?utm_content=DAGnxYI4ZuE&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel#22";

  // ─── Validation Helpers ────────────────────────────────
  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const validateMobile = (m) => /^[6-9]\d{9}$/.test(m);

  // ─── Effects ───────────────────────────────────────────
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const emailValid = validateEmail(formData.email);
    const mobileValid = validateMobile(formData.mobile);
    const allFilled = Object.values(formData).every((v) => v.trim());

    setErrors({
      email: formData.email && !emailValid,
      mobile: formData.mobile && !mobileValid,
    });
    setFormValid(allFilled && emailValid && mobileValid);
  }, [formData]);

  // ─── Handlers ──────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([k, v]) => payload.append(k, v));

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/innovativeitdcorporation@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: payload,
        }
      );
      if (!res.ok) throw new Error();
      setShowToast(true);
      setFormData({ name: "", email: "", mobile: "" });
      setModalOpen(false);

      setTimeout(() => setShowToast(false), 3000);
      // send user to brochure link after 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
      window.open(brochureLink, "_blank");
    } catch {
      alert("Submission failed. Please try again.");
    }
  };

  // ─── Render ────────────────────────────────────────────
  if (!hasMounted) return null;
  return (
    <div className="min-h-screen bg-white text-gray-800">
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
            <br />
            <br />
            Whether you prefer in-person classes or online learning, we have
            options to suit your schedule. Our courses cover the latest
            technologies and tools, including AI, cloud computing, and more.
            <br />
          </p>

          <div className="flex flex-col gap-2">
        <button
          onClick={() => setModalOpen(true)}
         className="inline-block px-5 py-3 bg-lime-500 hover:bg-lime-600 text-white rounded font-semibold shadow transition mb-4"
          aria-label="Download Course Brochure"
        >
          Download Brochure 📄
        </button>
      </div>
        </div>

   <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
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

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            placeholder="Enter Mobile Number"
            maxLength={10}
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full p-3 mb-1 border rounded ${
              errors.mobile ? "border-red-500" : ""
            }`}
            required
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mb-3">
              Please enter a valid 10-digit mobile number.
            </p>
          )}

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 mb-1 border rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-3">
              Please enter a valid email address.
            </p>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 mt-2 rounded font-semibold transition ${
              isFormValid
                ? "bg-lime-600 hover:bg-lime-700 text-white"
                : "bg-lime-700 text-red-100 cursor-not-allowed"
            }`}
          >
            Submit ✉️
          </button>
        </form>
      </main>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-lime-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Thank you! Our team will contact you shortly.
        </div>
      )}

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
