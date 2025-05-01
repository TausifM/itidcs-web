import SEOHead from "../component/SEOHead";

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions - ITIDCS"
        description="Read the terms and conditions of ITIDCS, your trusted partner for IT solutions, software development, and digital transformation."
        canonical="https://itidcs.vercel.app/terms"
        type="article"
      />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          Terms & Conditions – ITIDCS
        </h1>

        <p className="text-gray-700 mb-4">
          <strong>Effective Date:</strong> April 30, 2025
        </p>

        <p className="text-gray-700 mb-6">
          By using the ITIDCS website or services, you agree to the following
          terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Services Offered
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>IT training courses</li>
          <li>Business website & mobile app development</li>
          <li>Cloud & custom software solutions</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of Website</h2>
        <p className="text-gray-700">
          Users agree not to misuse the site, upload malicious content, or
          violate any laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Intellectual Property
        </h2>
        <p className="text-gray-700">
          All content is owned by ITIDCS and may not be reproduced without
          permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-700">
          ITIDCS is not liable for any damages from use or inability to use the
          site or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Payments & Refunds
        </h2>
        <p className="text-gray-700">
          Service payments are handled per agreement. Refunds are subject to
          service-specific terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact</h2>
        <p className="text-gray-700">
          For questions, email us at{" "}
          <a
            className="text-blue-600"
            href="mailto:innovativeitdcorporation@gmail.com"
          >
            innovativeitdcorporation@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
