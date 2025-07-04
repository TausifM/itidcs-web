import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      domain: "E‑Commerce Platforms",
      description:
        "We develop tailored e-commerce platforms using AI-driven search, recommendation engines, and real-time analytics. Our scalable systems support everything from D2C to B2B marketplaces with seamless checkout flows, dynamic pricing, and personalized user journeys. With intelligent inventory control, cart abandonment analysis, and multi-channel support, our platforms maximize conversions. We also offer AI-based fraud detection, customer segmentation, and loyalty engines. These platforms are fully optimized for mobile-first experiences, ensuring high performance and accessibility.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Stripe API",
        "ElasticSearch",
        "TensorFlow.js",
        "Tailwind CSS",
        "MongoDB",
        "Redis",
        "Docker",
      ],
    },
    {
      domain: "Logistics & Fleet Management",
      description:
        "We build smart logistics apps with live tracking, predictive ETA, and automated dispatching. Our AI modules optimize routes, detect maintenance needs, and scale to large fleets with real-time dashboards and alerts for last-mile logistics. Using geospatial intelligence, AI-powered routing algorithms, and weather-based predictions, we help logistics companies reduce operational costs. The system is accessible via both mobile and web dashboards, supports multiple user roles, and integrates easily with telematics and IoT sensors.",
      technologies: [
        "FastAPI",
        "React",
        "PostGIS",
        "RabbitMQ",
        "MongoDB",
        "Mapbox",
        "Python",
        "Tailwind CSS",
        "Docker",
        "TensorFlow",
      ],
    },
    {
      domain: "Healthcare Portals",
      description:
        "We develop AI-integrated healthcare portals with secure patient management, appointment scheduling, and diagnostics support. Features include AI-powered symptom checkers, medical chatbots, and intelligent triaging systems. These portals also support EHR integrations, real-time video consultations, and analytics for improving care efficiency. Security and HIPAA compliance are baked into every layer, ensuring patient data remains protected. Accessibility, mobile responsiveness, and multilingual interfaces make our portals inclusive and scalable for any healthcare organization.",
      technologies: [
        "Django",
        "React",
        "FastAPI",
        "Firebase",
        "GraphQL",
        "TensorFlow",
        "MongoDB",
        "Tailwind CSS",
        "Docker",
        "OAuth 2.0",
      ],
    },
    {
      domain: "EdTech Platforms",
      description:
        "Our EdTech solutions support online learning, personalized course recommendations, and AI-powered grading systems. With real-time quizzes, analytics dashboards for educators, and virtual classrooms, we transform education delivery. Students benefit from chatbots, adaptive learning engines, and mobile-friendly UX. The platform supports gamification, progress tracking, and deep integration with LMS platforms like Moodle or Google Classroom. Administrators gain tools for managing courses, assessments, and content pipelines from a single dashboard.",
      technologies: [
        "Next.js",
        "React",
        "Firebase",
        "GraphQL",
        "Node.js",
        "AWS S3",
        "WebRTC",
        "Tailwind CSS",
        "GPT-4",
        "MongoDB",
      ],
    },
    {
      domain: "Real Estate Platforms",
      description:
        "We create intelligent real estate platforms that offer property listings, smart filters, and virtual tours. AI-powered recommendation engines show users properties based on behavior and preferences. Geo-tagging, 3D walkthroughs, and mortgage calculators enhance the buyer journey. For agents, we provide dashboards to track listings, leads, and communications. Integrated chat, document uploads, and scheduling tools streamline operations for real estate businesses and help convert more leads into clients.",
      technologies: [
        "Next.js",
        "Mapbox",
        "React",
        "Node.js",
        "TensorFlow.js",
        "MongoDB",
        "Tailwind CSS",
        "Three.js",
        "Firebase",
        "Stripe",
      ],
    },
    {
      domain: "NGO & Fundraising Platforms",
      description:
        "We build platforms for NGOs with transparent donation tracking, volunteer management, and cause storytelling. AI-powered donor segmentation helps personalize outreach and boost recurring support. The platform supports mobile payments, campaign landing pages, and auto-generated impact reports. Admins can manage events, forms, and social media campaigns from one dashboard. Built with inclusivity in mind, our systems are multilingual and optimized for rural connectivity and accessibility tools like screen readers.",
      technologies: [
        "React",
        "Next.js",
        "Stripe",
        "GraphQL",
        "Tailwind CSS",
        "Node.js",
        "SendGrid",
        "MongoDB",
        "TensorFlow",
        "Docker",
      ],
    },
    {
      domain: "FinTech & Wallet Solutions",
      description:
        "Our FinTech platforms offer AI-driven budgeting, fraud detection, and secure transactions. From digital wallets to peer-to-peer payment systems, we cover it all. AI is used for credit scoring, financial forecasting, and personalized advice. The systems comply with global banking standards (PCI DSS, PSD2) and are secured via multi-factor authentication. Real-time transaction tracking, rewards engines, and integrations with banks and crypto APIs make these solutions enterprise-ready.",
      technologies: [
        "React",
        "Node.js",
        "GraphQL",
        "Stripe",
        "AWS Lambda",
        "Tailwind CSS",
        "TensorFlow",
        "PostgreSQL",
        "Docker",
        "Plaid API",
      ],
    },
    {
      domain: "Job Portals & Career Platforms",
      description:
        "We build AI-enhanced job platforms that include resume parsing, smart job matching, and career analytics. Candidates get personalized job feeds, and companies can manage listings, schedule interviews, and use chatbots for screening. Features like skill gap analysis and AI-driven training suggestions empower user growth. Real-time insights help HR professionals optimize recruitment pipelines, while gamified dashboards improve user engagement.",
      technologies: [
        "Next.js",
        "MongoDB",
        "GPT-4",
        "Tailwind CSS",
        "Firebase",
        "Express.js",
        "TensorFlow",
        "Puppeteer",
        "Node.js",
        "Stripe",
      ],
    },
    {
      domain: "AI SaaS Tools",
      description:
        "We create SaaS platforms infused with custom AI models for text, image, and video processing. From automated document summarizers to AI writing assistants and voice transcription, our tools boost productivity. These platforms support team collaboration, API access, usage metering, and billing. We also include monitoring dashboards, custom role access, and fine-tuning tools to tailor the AI performance for each client use case.",
      technologies: [
        "Next.js",
        "LangChain",
        "OpenAI",
        "Vercel",
        "Tailwind CSS",
        "FastAPI",
        "Supabase",
        "Pinecone",
        "MongoDB",
        "Stripe",
      ],
    },
    {
      domain: "Travel Booking Platforms",
      description:
        "We develop AI-enhanced travel portals with dynamic pricing engines, trip planners, and booking aggregators. Features include multilingual search, personalized deals, virtual tour previews, and loyalty programs. Real-time data sync with airlines, hotels, and weather APIs enables a seamless experience. AI chatbots help users rebook, refund, and explore new destinations with minimal support staff needed.",
      technologies: [
        "React",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
        "Google Maps API",
        "Stripe",
        "GPT-4",
        "MongoDB",
        "Redis",
        "Firebase",
      ],
    },
    {
      domain: "News & Media Platforms",
      description:
        "AI-assisted media platforms offering smart content curation, personalized news feeds, and automated moderation. Journalists use AI to summarize news, detect fake sources, and suggest headlines. Publishers gain dashboards to manage distribution, advertising, and reader insights. Support for rich media, audio articles, and multilingual support boosts reader engagement across devices.",
      technologies: [
        "Next.js",
        "Node.js",
        "ElasticSearch",
        "GPT-4",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "FastAPI",
        "Redis",
        "Stripe",
      ],
    },
    {
      domain: "Food Delivery Platforms",
      description:
        "We build food delivery platforms with smart restaurant discovery, dynamic pricing, and AI-based ETA estimates. Features like real-time order tracking, driver dashboards, and menu intelligence help businesses optimize operations. Customers benefit from personalized menus, wallet integration, and automated reordering. The system is designed to scale with multi-vendor architecture and contactless delivery integrations.",
      technologies: [
        "React Native",
        "Node.js",
        "Firebase",
        "Stripe",
        "Mapbox",
        "GPT-4",
        "Tailwind CSS",
        "Socket.io",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      domain: "Event Management Platforms",
      description:
        "Our event platforms manage RSVPs, ticketing, real-time updates, and crowd analytics. AI recommends optimal event times, predicts engagement, and helps personalize schedules. Hosts can live stream, monitor attendance, and run post-event surveys. Everything is mobile-first and integrates with payment, calendar, and marketing platforms for seamless logistics.",
      technologies: [
        "React",
        "Next.js",
        "Stripe",
        "GraphQL",
        "MongoDB",
        "Tailwind CSS",
        "WebRTC",
        "Firebase",
        "TensorFlow",
        "Docker",
      ],
    },
    {
      domain: "AI Resume Builder",
      description:
        "A modern AI-powered resume builder that creates tailored, ATS-friendly resumes based on your skills and goals. Features include keyword optimization, real-time feedback, and integration with job portals. The system offers layout suggestions, export options, and content guidance powered by large language models. It's perfect for students, professionals, and HR consultants.",
      technologies: [
        "React",
        "OpenAI",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "Supabase",
        "GPT-4",
        "Node.js",
        "Stripe",
        "MongoDB",
      ],
    },

    // COURSES
    {
      domain: "AI Development Course",
      description:
        "Learn how to build, train, and deploy AI models with hands-on projects using real-world datasets. This course covers deep learning, NLP, vision, and model optimization using Python frameworks. Includes GPT API projects and TensorFlow workflows. Suitable for developers looking to break into AI product development.",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Hugging Face",
        "LangChain",
        "Streamlit",
        "Flask",
        "FastAPI",
        "Jupyter",
      ],
    },
    {
      domain: "Data Science Bootcamp",
      description:
        "Master data science from scratch with Python, statistics, data wrangling, and model building. This bootcamp covers machine learning, data visualization, and real-world applications in finance, healthcare, and business. Learn from industry mentors with practical labs and capstone projects.",
      technologies: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "SQL",
        "Python",
        "Tableau",
        "Jupyter",
        "TensorFlow",
      ],
    },
    {
      domain: "Data Analyst Course",
      description:
        "Become a job-ready data analyst by learning data analysis, dashboards, and business intelligence. This course includes Excel, SQL, Python basics, and visual storytelling with Tableau and Power BI. Great for entry-level professionals transitioning into tech roles.",
      technologies: [
        "Excel",
        "SQL",
        "Power BI",
        "Tableau",
        "Python",
        "Pandas",
        "Looker",
        "Google Sheets",
        "Jupyter",
        "Seaborn",
      ],
    },
    {
      domain: "VFX & Motion Design Course",
      description:
        "Dive into the world of cinematic effects and motion design. Learn video editing, CGI, and compositing using industry tools. This course includes 3D animation, scene lighting, green screen work, and real-time rendering workflows with AI-enhanced effects.",
      technologies: [
        "After Effects",
        "Cinema 4D",
        "Blender",
        "Nuke",
        "Maya",
        "Unreal Engine",
        "Davinci Resolve",
        "Photoshop",
        "AI Render",
        "Runway ML",
      ],
    },
  ];

  const tagColors = [
    "bg-indigo-100 text-indigo-800",
    "bg-pink-100 text-pink-800",
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-teal-100 text-teal-800",
    "bg-rose-100 text-rose-800",
    "bg-orange-100 text-orange-800",
    "bg-sky-100 text-sky-800",
  ];

  const getTagColor = (index) => tagColors[index % tagColors.length];
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f5f7fa] via-[#e4eaf1] to-[#f0f2f5] py-20 px-6 md:px-12 lg:px-24">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-md mb-16 animate-fade-in">
        Our AI-Powered Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-6 relative group overflow-hidden transition-all hover:scale-[1.02] hover:shadow-indigo-200 animate-fade-in-up"
          >
            {/* Glow effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-2.5">
              {service.domain}
            </h2>

            <p className="text-sm text-gray-800 mb-4 leading-relaxed">
              {service.description}
            </p>

            <div>
              <h3
                className="text-xs uppercase text-orange-400
              mb-4 font-semibold 
              tracking-wide"
              >
                Technologies
              </h3>
              <ul className="flex flex-wrap gap-2 text-xs font-medium">
                {service.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className={`px-3 py-1 rounded-full ${getTagColor(
                      i
                    )} bg-opacity-70 hover:bg-opacity-100 transition`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* show this button dont make absolute */}
            <div className="relative min-h-12 mt-6">
              <Link
                href="/contact"
                className="mt-6 block w-full bg-indigo-600/90 hover:bg-indigo-700 text-white text-center p-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg backdrop-blur-md"
              >
                Let’s Build with AI →
              </Link>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}
export const metadata = {
  title: "ITIDCS | AI-Powered Services",
  description: "Explore our cutting-edge AI solutions for various industries.",
  openGraph: {
    title: "ITIDCS | AI-Powered Services",
    description:
      "Explore our cutting-edge AI solutions for various industries.",
    url: "https://itidcs.com/services",
    images: [
      {
        url: "https://itidcs.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "ITIDCS",
  },
};
