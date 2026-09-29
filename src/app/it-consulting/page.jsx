"use client";
import SEOHead from "../component/SEOHead";

export default function ITConsulting() {
  const clipPathStyle = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };
  return (
    <>
      <SEOHead
        title="IT Consulting | ITIDCS Pvt Ltd"
        description="Expert IT consulting services to align technology with your business goals. Discover ITIDCS for strategic guidance and innovative solutions."
        canonical="https://itidcs.vercel.app/it-consulting"
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">IT Consulting</h1>
          <p className="text-lg sm:text-xl mb-6 text-indigo-600">
            Strategic guidance to align your IT infrastructure with your
            business objectives.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Digital Transformation
              </h2>
              <p>
                Modernize your operations by integrating cutting-edge
                technologies and processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Technology Strategy
              </h2>
              <p>
                Develop comprehensive IT strategies that support your long-term
                business goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Vendor Management</h2>
              <p>
                Optimize your vendor relationships to ensure quality service and
                cost-effectiveness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                IT Infrastructure Assessment
              </h2>
              <p>
                Evaluate your current IT setup to identify areas for improvement
                and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Cloud Readiness</h2>
              <p>
                Assess and prepare your organization for a smooth transition to
                cloud-based solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Compliance & Risk Management
              </h2>
              <p>
                Ensure your IT practices meet regulatory requirements and
                mitigate potential risks.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Why Partner with ITIDCS for IT Consulting?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                🧠 Experienced consultants with industry-specific knowledge.
              </li>
              <li>
                🔍 In-depth analysis to uncover opportunities and challenges.
              </li>
              <li>
                📊 Data-driven recommendations for informed decision-making.
              </li>
              <li>
                🤝 Collaborative approach to align IT initiatives with business
                goals.
              </li>
              <li>📈 Commitment to delivering measurable results and ROI.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
