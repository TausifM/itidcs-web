"use client";

import { useEffect, useState } from "react";
import Toast from "./Toast";

const brochureLink =
  "https://www.canva.com/design/DAGnxYI4ZuE/tP83oxzkUeVCxxoyJagu4w/view?utm_content=DAGnxYI4ZuE&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel#22";

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState({ type: "", message: "" });

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const validateMobile = (m) => /^[6-9]\d{9}$/.test(m);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

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
      if (!res.ok) throw new Error("Failed to submit");

      setToastData({
        type: "success",
        message: "Thanks! Brochure is on its way 🚀",
      });
      setShowToast(true);
      setFormData({ name: "", email: "", mobile: "" });
      onClose();

      // Wait for toast to be visible before opening link
      setTimeout(() => {
        setShowToast(false);
        window.open(brochureLink, "_blank");
      }, 1000);
    } catch {
      setToastData({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-gray-800/20 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
        <div className="bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-white rounded-2xl w-full max-w-md shadow-2xl p-8 relative border border-zinc-300 dark:border-zinc-700 animate-fadeInUp">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 text-2xl"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              🚀 Get Our Brochure Instantly!
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">
              Just a few details and we’ll send it right over.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white/70 dark:bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border ${
                errors.email
                  ? "border-red-500"
                  : "border-zinc-300 dark:border-zinc-700"
              } rounded-lg bg-white/70 dark:bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lime-500`}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border ${
                errors.mobile
                  ? "border-red-500"
                  : "border-zinc-300 dark:border-zinc-700"
              } rounded-lg bg-white/70 dark:bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-lime-500`}
            />

            <button
              type="submit"
              disabled={!formValid || submitting}
              className={`w-full py-3 rounded-lg text-white text-lg font-semibold tracking-wide transition-all duration-300 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 shadow-lg ${
                !formValid || submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Download Now"}
            </button>
          </form>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.5s ease-out;
          }
        `}</style>
      </div>

      {showToast && (
        <Toast
          type={toastData.type}
          message={toastData.message}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
