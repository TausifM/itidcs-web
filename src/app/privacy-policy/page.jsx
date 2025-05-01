import SEOHead from "../component/SEOHead";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - ITIDCS"
        description="Read the privacy policy of ITIDCS, your trusted partner for IT solutions, software development, and digital transformation."
        canonical="https://itidcs.vercel.app/privacy-policy"
        type="article"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          Privacy Policy – ITIDCS
        </h1>

        <p className="text-gray-700 mb-4">
          <strong>Effective Date:</strong> April 30, 2025
        </p>

        <p className="text-gray-700 mb-6">
          ITIDCS (Innovative ITD Corporation) respects your privacy. This
          Privacy Policy explains how we collect, use, and protect your personal
          data when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Personal Information (name, email, phone)</li>
          <li>Usage Data (IP address, browser info, pages visited)</li>
          <li>Uploaded Content (resumes or project files)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Data</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>To provide and improve services</li>
          <li>To respond to inquiries</li>
          <li>To personalize the user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Security</h2>
        <p className="text-gray-700">
          We take data protection seriously and use standard measures to keep
          your data secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cookies</h2>
        <p className="text-gray-700">
          We use cookies for website functionality. You can disable them in your
          browser.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <p className="text-gray-700">
          You can request access or deletion of your data at any time by
          contacting us at{" "}
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
