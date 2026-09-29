"use client";

import { useEffect, useState } from "react";
import SEOHead from "../component/SEOHead";
import ThreeBackdrop from "../component/threebackdrop";

const emptyForm = { firstName: "", lastName: "", email: "", phoneNumber: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({ email: false, phoneNumber: false });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  useEffect(() => {
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phoneNumber);
    const allFilled = Object.values(formData).every((value) => value.trim() !== "");
    setErrors({ email: Boolean(formData.email) && !emailValid, phoneNumber: Boolean(formData.phoneNumber) && !phoneValid });
    setIsFormValid(allFilled && emailValid && phoneValid);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = new FormData(event.currentTarget);
    try {
      const response = await fetch("https://formsubmit.co/ajax/innovativeitdcorporation@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Unable to send message");
      setShowToast(true);
      setFormData(emptyForm);
      window.setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      window.alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <SEOHead
      <SEOHead
        title="Contact Us - ITIDCS"
        description="Get in touch with ITIDCS for questions about courses, services, or support."
      />
      <section className="contact-section" id="contact">
        <div className="contact-glow contact-glow-one" aria-hidden="true" />
        <div className="contact-glow contact-glow-two" aria-hidden="true" />
        <div className="contact-shell">
          <div className="contact-intro">
            <p className="section-kicker">Let&apos;s make something matter</p>
            <h2>Tell us what you&apos;re ready to make <span>possible.</span></h2>
            <p className="contact-lede">A new skill, a better digital experience, or a project that needs a thoughtful team. Share a little about it and we&apos;ll take it from there.</p>

            <div className="contact-details">
              <a className="contact-detail" href="mailto:innovativeitdcorporation@gmail.com">
                <span className="contact-detail-icon" aria-hidden="true">✉</span>
                <span><small>Email us</small><strong>innovativeitdcorporation@gmail.com</strong></span>
                <span className="contact-detail-arrow" aria-hidden="true">↗</span>
              </a>
              <a className="contact-detail" href="tel:+919975767561">
                <span className="contact-detail-icon" aria-hidden="true">↗</span>
                <span><small>Call our team</small><strong>+91 99757 67561</strong></span>
                <span className="contact-detail-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="contact-detail contact-address">
                <span className="contact-detail-icon" aria-hidden="true">⌖</span>
                <span><small>Find us</small><strong>Siraspeth, Nagpur<br />Maharashtra, India</strong></span>
              </div>
            </div>

            <div className="contact-art-panel">
              <ThreeBackdrop variant="contact" />
              <div className="contact-art-caption"><span className="contact-art-spark" aria-hidden="true">✳</span><span><strong>Start with a conversation.</strong><small>Good ideas grow when we build them together.</small></span></div>
              <div className="contact-art-stamp" aria-hidden="true">IT<span>.</span></div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/innovativeitdcorporation@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="contact-form-heading">
              <span>01 <i /> A few details</span>
              <h3>How can we help?</h3>
              <p>We usually reply within one business day.</p>
            </div>
            <div className="contact-fields">
              <div className="contact-field">
                <label htmlFor="first-name">First name</label>
                <input id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="last-name">Last name</label>
                <input id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="family-name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} type="email" autoComplete="email" aria-invalid={errors.email} required />
                {errors.email && <span className="contact-error">Enter a valid email address.</span>}
              </div>
              <div className="contact-field">
                <label htmlFor="phone-number">Phone number</label>
                <input id="phone-number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" autoComplete="tel" inputMode="numeric" aria-invalid={errors.phoneNumber} required />
                {errors.phoneNumber && <span className="contact-error">Enter a valid 10-digit Indian number.</span>}
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="message">What would you like to work on?</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="A little context helps us connect you with the right person..." required />
              </div>
            </div>
            <div className="contact-submit-row">
              <p>Your details stay private and are only used to respond.</p>
              <button type="submit" disabled={!isFormValid}>
                Send a message <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
        {showToast && <div className="contact-toast" role="status" aria-live="polite"><span aria-hidden="true">✓</span> Message sent. We&apos;ll be in touch soon.<button type="button" onClick={() => setShowToast(false)} aria-label="Dismiss notification">×</button></div>}
      </section>
    </>
  );
}
