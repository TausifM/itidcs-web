"use client";
import SEOHead from "../component/SEOHead";

export default function Cybersecurity() {
  const clipPathStyle = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };
  return (
    <>
      <SEOHead
        title="Cybersecurity | ITIDCS Pvt Ltd"
        description="Comprehensive cybersecurity solutions to protect your digital assets. Discover ITIDCS for risk assessment, threat monitoring, and incident response."
        canonical="https://itidcs.vercel.app/cyber-security"
      />
      <main className="l dn aoc avs axf cyi m-4">
        <div aria-hidden="true" className="j y aw do xq zk afg beg bhr">
          <div className="ks mt vg apb apk aqk" style={clipPathStyle}></div>
        </div>
        <div
          aria-hidden="true"
          className="j y au do la zk afg avt bef bhr cyj eef"
        >
          <div
            className="kr mt vg wt xg zh apb apk aqk ebw eca"
            style={clipPathStyle}
          ></div>
        </div>
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cybersecurity</h1>
          <p className="text-lg sm:text-xl mb-6 text-indigo-600">
            Protecting your digital assets with proactive and comprehensive
            security solutions.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Risk Assessment</h2>
              <p>
                Identify and mitigate vulnerabilities to strengthen your
                security posture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Threat Monitoring</h2>
              <p>
                Continuous surveillance to detect and respond to potential
                security incidents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Compliance & Auditing
              </h2>
              <p>
                Ensure adherence to industry standards and regulations through
                regular audits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Penetration Testing
              </h2>
              <p>
                Simulate cyberattacks to evaluate the effectiveness of your
                security measures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Security Awareness Training
              </h2>
              <p>
                Educate your team to recognize and prevent security threats and
                breaches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Incident Response</h2>
              <p>
                Develop and implement plans to effectively respond to and
                recover from security incidents.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Why Choose ITIDCS for Cybersecurity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                🔒 End-to-end cybersecurity services for enterprises of all
                sizes.
              </li>
              <li>
                🧠 Expert analysis, monitoring, and remediation practices.
              </li>
              <li>
                ⚙️ Integration with your existing IT ecosystem seamlessly.
              </li>
              <li>
                🌐 Compliance support for GDPR, HIPAA, ISO 27001, and more.
              </li>
              <li>
                ⏱️ 24/7 threat monitoring with real-time alerts and reporting.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
