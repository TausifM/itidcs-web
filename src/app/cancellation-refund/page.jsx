"use client";

export default function CancellationRefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white p-6">
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Cancellation & Refund Policy</h1>
        <p className="text-lg text-gray-300 mb-6">
          At ITIDCS, we value transparency and your satisfaction. Below are our cancellation and refund guidelines for courses, services, and digital solutions.
        </p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Course Enrollments</h2>
            <p>
              Once you enroll in a course and the access is granted (materials shared or session started), we are unable to offer refunds. However, if you cancel your enrollment within 24 hours and before accessing any material, a full refund will be processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Custom Software & App Development</h2>
            <p>
              For software or mobile app development projects, cancellation is only accepted before the project begins. Once development work has started, any refund is subject to contract terms. In most cases, partial refunds may be offered based on work completed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Digital Services</h2>
            <p>
              For services like website design, SEO, cloud setup, etc., cancellation is possible only within 48 hours of placing an order. If work has commenced, a pro-rated refund will be calculated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. How to Request a Refund</h2>
            <p>
              To request a cancellation or refund, please email us at{" "}
              <a href="mailto:innovativeitdcorporation@gmail.com"
              className="text-blue-400 underline">
                innovativeitdcorporation@gmail.com
              </a>{" "}
              with your name, service/course enrolled, payment reference, and reason for the request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Refund Processing Time</h2>
            <p>
              Refunds, once approved, will be processed within 7–10 business days to your original method of payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. No Refunds Applicable</h2>
            <ul className="list-disc list-inside mt-2">
              <li>For downloadable or delivered digital products</li>
              <li>After accessing course content or materials</li>
              <li>On services rendered beyond initial agreement scope</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
