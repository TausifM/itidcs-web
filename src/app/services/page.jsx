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
    <>
     <SEOHead
        title="Our Services - ITIDCS"
        description="Explore ITIDCS services including web development, digital marketing, UI/UX design, and cloud solutions."
      />
     <main className="services-page overflow-hidden bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid Features */}
        <div className="bg-gray-50 py-5 sm:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Title Section */}
            <div className="text-center">
              <h2 className="text-4xl font-semibold text-gray-900">
                Our Services
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Explore our specialized services with the latest technologies
                and certifications.
              </p>
            </div>
            {/* Service 1: CCC - Government Certified Course */}
            <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                  </svg>
                  CCC - Government Certified Course
                </dt>
                <dd className="mt-2 text-gray-600">
                  Gain government-recognized certifications with our
                  comprehensive CCC courses designed to boost your career.
                </dd>
              </div>

              {/* Service 2: Python */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                    <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                    <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                    <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                  </svg>
                  Python Development
                </dt>
                <dd className="mt-2 text-gray-600">
                  Learn Python from scratch or enhance your existing skills with
                  our expert-led Python programming courses.
                </dd>
              </div>

              {/* Service 3: FastAPI */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  FastAPI
                </dt>
                <dd className="mt-2 text-gray-600">
                  Build fast and efficient APIs with FastAPI, a modern Python
                  framework for high-performance web development.
                </dd>
              </div>

              {/* Service 4: Docker */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Docker & Containerization
                </dt>
                <dd className="mt-2 text-gray-600">
                  Learn how to containerize your applications and deploy them
                  with Docker, ensuring scalability and portability.
                </dd>
              </div>

              {/* Service 5: Node.js */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6  text-indigo-600 top-1 left-1 absolute"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Node.js Development
                </dt>
                <dd className="mt-2 text-gray-600">
                  Master Node.js to build scalable and efficient backend
                  applications using asynchronous programming.
                </dd>
              </div>

              {/* Service 6: MongoDB */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MongoDB Database
                </dt>
                <dd className="mt-2 text-gray-600">
                  Learn to work with MongoDB, the NoSQL database, to manage and
                  store data for modern web applications.
                </dd>
              </div>

              {/* Service 7: React JS */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                  >
                    <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                    <path
                      fillRule="evenodd"
                      d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  React JS Development
                </dt>
                <dd className="mt-2 text-gray-600">
                  Build dynamic user interfaces with React, the popular
                  JavaScript library for front-end development.
                </dd>
              </div>

              {/* Service 8: Tailwind CSS */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tailwind CSS
                </dt>
                <dd className="mt-2 text-gray-600">
                  Design fast, responsive, and modern websites with Tailwind
                  CSS, a utility-first CSS framework.
                </dd>
              </div>

              {/* Service 9: Vercel & AWS Cloud */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Vercel & AWS Cloud Solutions
                </dt>
                <dd className="mt-2 text-gray-600">
                  Deploy and scale your applications with ease using cloud
                  platforms like Vercel and AWS.
                </dd>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Service 1 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                  src="/images/software-development.jpg"
                  alt="Close-up of modern computer hardware"
                  width={500}
                  height={500}
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Master IT Skills
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Learn the latest technologies from industry experts. Gain
                    certifications and boost your career with cutting-edge
                    skills.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Gain industry certifications</li>
                    <li>✔ Learn from experts</li>
                    <li>✔ Flexible learning modules</li>
                    <li>✔ Access to exclusive resources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                  src="/images/technology-work.jpg"
                  alt="A team collaborating around a laptop"
                  width={500}
                  height={500}
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Custom Web & App Development
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Transform your ideas into reality with our high-performance
                    website and app development services.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Responsive and modern designs</li>
                    <li>✔ Tailored to your business needs</li>
                    <li>✔ High-speed performance</li>
                    <li>✔ Scalable and secure solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                  src="/images/digital-workspace.jpg"
                  alt="A digital team working together"
                  width={500}
                  height={500}
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    SEO & Digital Marketing
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Increase your online visibility and grow your business with
                    data-driven marketing strategies.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Increase search engine rankings</li>
                    <li>✔ Targeted audience engagement</li>
                    <li>✔ Conversion optimization</li>
                    <li>✔ Detailed reporting & analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-70 rounded-lg shadow-lg object-cover"
                  src="/images/creative-design.jpg"
                  alt="A designer working with a digital tablet"
                  width={500}
                  height={500}
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    UI/UX & Branding
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Stand out with modern, user-friendly designs. We create
                    stunning visuals that make an impact.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Custom web and app designs</li>
                    <li>✔ Rebrand and logo design</li>
                    <li>✔ Interactive and engaging UI</li>
                    <li>✔ Cross-device compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-24 text-center">
              <p className="text-lg text-gray-600">
                Ready to get started? Let's work together to take your business
                to the next level.
              </p>
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
    </main>
    </>
    
  );
}
