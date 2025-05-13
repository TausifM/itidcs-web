"use client";
import SEOHead from "../component/SEOHead";

// app/cloud-solutions/page.js
export default function CloudSolutions() {
  const clipPathStyle = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };
  return (
    <>
      <SEOHead
        title="Cloud Solutions | ITIDCS Pvt Ltd"
        description="Scalable and secure cloud services for digital transformation. Discover ITIDCS Cloud Solutions for migration, automation, and security."
        canonical="https://itidcs.vercel.app/cloud-solutions"
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Cloud Solutions
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-indigo-600">
            Empowering your business with scalable, secure, and innovative cloud
            services.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Cloud Migration</h2>
              <p>
                Seamlessly transition your infrastructure to the cloud with
                minimal disruption and maximum efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                DevOps & Automation
              </h2>
              <p>
                Implement CI/CD pipelines, container orchestration, and
                infrastructure as code for agile operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Cloud Security</h2>
              <p>
                Protect your cloud assets with robust security measures,
                compliance strategies, and threat detection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Cost Optimization</h2>
              <p>
                Analyze and manage your cloud spending to ensure cost-effective
                resource utilization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Multi-Cloud Strategy
              </h2>
              <p>
                Design and implement strategies that leverage multiple cloud
                providers for resilience and flexibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                AI & ML Integration
              </h2>
              <p>
                Integrate artificial intelligence and machine learning
                capabilities to drive innovation and insights.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Why Choose ITIDCS for Cloud Solutions?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                🌐 Expertise across major cloud platforms: AWS, Azure, and GCP.
              </li>
              <li>🔧 Customized solutions tailored to your business needs.</li>
              <li>🚀 Accelerated deployment with agile methodologies.</li>
              <li>🔒 Commitment to security and compliance standards.</li>
              <li>
                📈 Continuous optimization for performance and cost-efficiency.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
