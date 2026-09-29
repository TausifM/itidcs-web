"use client";
import SEOHead from "../component/SEOHead";

export default function AISolutions() {
  const clipPathStyle = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  };
  return (
    <>
      <SEOHead
        title="AI Solutions | ITIDCS Pvt Ltd"
        description="Transform your business with AI solutions. Discover ITIDCS for machine learning, NLP, and computer vision services."
        canonical="https://itidcs.vercel.app/ai-solutions"
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Solutions</h1>
          <p className="text-lg sm:text-xl mb-6 text-indigo-600">
            Unlock new opportunities and drive intelligent transformation with
            cutting-edge AI technologies.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                AI-Powered Insights
              </h2>
              <p>
                Leverage machine learning and data analytics to make smarter
                business decisions in real time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Conversational AI</h2>
              <p>
                Implement intelligent virtual agents and chatbots that enhance
                customer engagement and support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Computer Vision</h2>
              <p>
                Deploy AI models to interpret and act on visual data for
                security, automation, and diagnostics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Natural Language Processing
              </h2>
              <p>
                Extract meaning and insights from text using NLP tools built for
                sentiment analysis and translation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Custom AI Development
              </h2>
              <p>
                Build tailored AI applications that fit your business needs,
                powered by open-source and cloud-native tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h2 className="text-xl font-semibold mb-2">
                Predictive Analytics
              </h2>
              <p>
                Identify trends and predict outcomes using advanced algorithms
                trained on your business data.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Why ITIDCS for AI Solutions?
            </h3>
            <ul role="list" className="hm wk acs bat baw">
              <li className="la acd">
                🤖
                <strong className="azr baw">
                Inspired by innovations from Microsoft Azure AI, Google Cloud
                AI, and Meta AI Research.
                </strong>   
              </li>
              <li className="la acd">

                🔍
                <strong className="azr baw">
                  In-depth analysis of your data to uncover hidden patterns and
                  insights.
                </strong>
              </li>
              <li className="la acd">
                ⚡ 
                <strong className="azr baw">
                  Rapid development and deployment of AI models to meet your
                  business needs.

                </strong>

                
              </li>
              <li className="la acd">
                🌐
                <strong className="azr baw">
                  Scalable and secure models hosted on trusted cloud platforms.
                </strong>
              </li>
              <li className="la acd">
                🎯
                <strong className="azr baw">
                  End-to-end support from strategy to integration and
                  maintenance.
                </strong>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
