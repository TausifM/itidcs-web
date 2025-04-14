"use client";

import { useEffect } from "react";

export default function PromoModal({ show, onClose }) {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl relative">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-700">
            🚀 Join Our Latest Web Development Class!
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Elevate your skills with our hands-on, expert-led training program at <strong>ITIDCS</strong>.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">About the Class</h3>
          <p className="text-sm text-gray-600 mt-1">
            Learn modern web development including HTML, CSS, JavaScript, React, Git, and deployment.
            Ideal for beginners and those looking to upskill in a practical, project-based format.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Benefits</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
            <li>✅ Real-world projects</li>
            <li>✅ Dedicated mentorship</li>
            <li>✅ Resume & job preparation</li>
            <li>✅ Certificate of completion</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="px-5 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition"
            onClick={onClose}
          >
            Maybe Later
          </button>
          <button
            className="px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={() => {
              window.location.href = "/enroll"; // or a real route
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
