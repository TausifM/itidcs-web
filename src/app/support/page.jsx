"use client";

import React from "react";
import SEOHead from "../component/SEOHead";

export default function SupportPage() {
  return (
    <>
      <SEOHead
        title="Customer Support | ITIDCS"
        description="Need help? Our support team is here to assist you with any inquiries, technical issues, or service requests."
        canonical="https://itidcs.vercel.app/support"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white p-6">
        <div className="max-w-5xl mx-auto text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Customer Support</h1>
          <p className="text-lg text-gray-300 mb-10">
            Need help? Our support team is here to assist you with any
            inquiries, technical issues, or service requests.
          </p>

          {/* Contact Info */}
          <div className="grid gap-6 md:grid-cols-2 text-left mb-16">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Email Support</h2>
              <p className="text-gray-400 mb-2">
                For general inquiries and help:
              </p>
              <a
                href="mailto:innovativeitdcorporation@gmail.com"
                className="text-blue-400 hover:underline"
              >
                Support Email: innovativeitdcorporation@gmail.com
                
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Call Us</h2>
              <p className="text-gray-400 mb-2">
                We're available 10am–6pm IST, Monday–Friday:
              </p>
              <p className="text-blue-400">+91-87888 41823</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form
              action="https://formsubmit.co/your-email@itidcs.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-semibold transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* FAQs (Optional) */}
          <div className="mt-20 text-left">
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong>Q: How long does it take to get a response?</strong>
                <br />
                A: We usually respond within 48 hours during business days.
              </li>
              <li>
                <strong>Q: Can I get support for my course or app?</strong>
                <br />
                A: Yes! Reach out using the form above, and our team will assist
                you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
