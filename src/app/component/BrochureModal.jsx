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
      <div className="brochure-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
        <div className="brochure-modal" role="dialog" aria-modal="true" aria-labelledby="brochure-modal-title" aria-describedby="brochure-modal-description">
          <button
            onClick={onClose}
            className="brochure-modal-close"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <div className="brochure-modal-heading">
            <span className="brochure-modal-kicker">COURSE GUIDE</span>
            <h2 id="brochure-modal-title">
              🚀 Get Our Brochure Instantly!
            </h2>
            <p id="brochure-modal-description">
              Just a few details and we’ll send it right over.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="brochure-modal-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="brochure-modal-input"
            />

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={`brochure-modal-input ${
                errors.email
                  ? "is-invalid"
                  : ""
              }`}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={`brochure-modal-input ${
                errors.mobile
                  ? "is-invalid"
                  : ""
              }`}
            />

            <button
              type="submit"
              disabled={!formValid || submitting}
              className="brochure-modal-submit"
            >
              {submitting ? "Submitting..." : "Download Now"}
            </button>
          </form>
        </div>

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
