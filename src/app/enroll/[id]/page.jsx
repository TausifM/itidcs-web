"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import CourseCurriculum from "../../component/curriculum-data";

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/images/technology-work.jpg",
    description:
      "Learn front-end and back-end development with hands-on projects.",
    price: "₹59,999",
    offerPrice: "₹19,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "HTML, CSS, JavaScript",
      "React, Node.js, Express",
      "MongoDB, Databases",
      "API Development",
      "Deployment",
    ],
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "/images/digital-workspace.jpg",
    description:
      "Master data analysis, visualization, and machine learning techniques.",
    price: "₹24,999",
    offerPrice: "₹12,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",

    content: [
      "Python & Libraries (Pandas, Numpy)",
      "Data Visualization (Matplotlib, Seaborn)",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Model Deployment",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    image: "/images/creative-design.jpg",
    description:
      "Understand design principles, tools, and user-centric processes.",
    price: "₹14,999",
    offerPrice: "₹7,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Design Thinking",
      "Wireframing & Prototyping",
      "User Research",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    image: "/images/software-development.jpg",
    description:
      "Protect systems, networks, and data with cybersecurity practices.",
    price: "₹19,999",
    offerPrice: "₹9,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Network Security",
      "Cryptography",
      "Ethical Hacking",
      "Penetration Testing",
      "Incident Response",
    ],
  },
  {
    id: 5,
    title: "Mobile App Development",
    image: "/images/team-workspace.jpg",
    description: "Build responsive apps using React Native and Backend APIs.",
    price: "₹49,999",
    offerPrice: "₹17,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "React Native Basics",
      "State Management (Redux)",
      "APIs & Data Fetching",
      "Mobile UI/UX Design",
      "Publishing Apps",
    ],
  },
  {
    id: 6,
    title: "Cloud Computing & DevOps",
    image: "/images/technology-work.jpg",
    description:
      "Learn cloud platforms and DevOps practices to build scalable systems.",
    price: "₹24,999",
    offerPrice: "₹12,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",

    content: [
      "Cloud Providers (AWS, Azure, Google Cloud)",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Containerization with Docker",
      "Kubernetes & Orchestration",
    ],
  },
  {
    id: 7,
    title: "Game Development with Unity",
    image: "/images/creative-design.jpg",
    description:
      "Learn how to create 2D and 3D games using Unity engine and C#.",
    price: "₹29,999",
    offerPrice: "₹15,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Introduction to Unity",
      "C# Programming for Game Dev",
      "2D Game Development",
      "3D Game Development",
      "Physics, AI, and Animation",
    ],
  },
  {
    id: 8,
    title: "Digital Marketing & SEO",
    image: "/images/digital-workspace.jpg",
    description:
      "Master the strategies for online marketing, SEO, and social media.",
    price: "₹14,999",
    offerPrice: "₹7,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Google Analytics & Ads",
      "Social Media Marketing",
      "Email Marketing & Campaigns",
    ],
  },
  {
    id: 9,
    title: "Blockchain and Cryptocurrency",
    image: "/images/software-development.jpg",
    description:
      "Understand the fundamentals of blockchain technology and cryptocurrency.",
    price: "₹19,999",
    offerPrice: "₹9,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Blockchain Basics",
      "Smart Contracts",
      "Cryptocurrency & Bitcoin",
      "Ethereum & DeFi",
      "Building Blockchain Apps",
    ],
  },
  {
    id: 10,
    title: "Artificial Intelligence & Deep Learning",
    image: "/images/team-collaboration.jpg",
    description:
      "Dive into the world of AI and deep learning with hands-on projects.",
    price: "₹44,999",
    offerPrice: "₹17,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Introduction to AI",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Natural Language Processing (NLP)",
      "AI in Real-World Applications",
    ],
  },
  {
    id: 11,
    title: "Agentic AI Engineering with LangChain",
    image: "/images/aws-agentic-langchain.png",
    description: "Build production-ready agents with LangChain, tool calling, memory, RAG, and evaluation workflows.",
    price: "₹39,999", offerPrice: "₹19,999", offerTag: "New cohort · Agent track", duration: "8 weeks", level: "Intermediate",
    content: ["LangChain fundamentals, LCEL, prompts, and structured outputs", "Tool calling, memory, routers, and multi-step agent graphs", "RAG pipelines with chunking, embeddings, reranking, and citations", "Tracing, evaluation datasets, guardrails, and cost-aware design", "Capstone: a production support agent with tools and human handoff"],
  },
  {
    id: 12,
    title: "Amazon Bedrock Generative AI",
    image: "/images/aws-bedrock-genai.png",
    description: "Learn foundation models, prompt engineering, guardrails, and scalable GenAI apps on Amazon Bedrock.",
    price: "₹34,999", offerPrice: "₹16,999", offerTag: "AWS pathway · Early access", duration: "6 weeks", level: "Beginner to intermediate",
    content: ["Amazon Bedrock model catalog, inference APIs, and prompt patterns", "Model selection, temperature, tokens, latency, and cost controls", "Knowledge-grounded responses, Guardrails, and responsible AI", "Build secure serverless GenAI apps with IAM, Lambda, and API Gateway", "Capstone: a deployable Bedrock-powered business copilot"],
  },
  {
    id: 13,
    title: "AWS Bedrock Knowledge Bases & RAG",
    image: "/images/aws-knowledge-rag.png",
    description: "Turn private documents into grounded AI experiences with ingestion, retrieval, citations, and evaluation.",
    price: "₹29,999", offerPrice: "₹14,999", offerTag: "Hands-on labs · AWS", duration: "5 weeks", level: "Intermediate",
    content: ["Prepare documents, metadata, chunking strategies, and sync jobs", "Embeddings, vector stores, hybrid search, filters, and reranking", "RetrieveAndGenerate workflows with citations and fallback answers", "Evaluate groundedness, relevance, latency, and retrieval quality", "Capstone: a secure internal knowledge assistant with source links"],
  },
  {
    id: 14,
    title: "Amazon Bedrock AgentCore",
    image: "/images/aws-agentcore.png",
    description: "Design, deploy, observe, and secure autonomous agents with AWS AgentCore runtime patterns.",
    price: "₹44,999", offerPrice: "₹21,999", offerTag: "Advanced · 2026 cohort", duration: "6 weeks", level: "Intermediate to advanced",
    content: ["AgentCore runtime concepts, sessions, identity, and tool boundaries", "Deploy agent workloads with secure IAM, networking, and secrets", "Memory and context patterns for long-running agent experiences", "Tracing, evaluations, observability, scaling, and failure recovery", "Capstone: a monitored multi-tool agent ready for production review"],
  },
  {
    id: 15, title: "Multi-Agent Systems & Workflow Design", image: "/images/aws-multi-agent.png", description: "Coordinate specialist agents, approvals, tools, and state into reliable business workflows.", price: "₹44,999", offerPrice: "₹21,999", offerTag: "Advanced agents · New cohort", duration: "6 weeks", level: "Advanced",
    content: ["Agent roles, routing, delegation, and shared state", "Supervisor and handoff patterns for specialist agents", "Human approvals, retries, timeouts, and idempotent tools", "Workflow graphs, event-driven execution, and audit trails", "Capstone: a multi-agent operations workflow with approval gates"],
  },
  {
    id: 16, title: "AI Evaluation, Safety & Observability", image: "/images/aws-ai-safety.png", description: "Measure agent quality, prevent unsafe behavior, and operate AI systems with confidence in production.", price: "₹34,999", offerPrice: "₹16,999", offerTag: "Production skills · 2026", duration: "5 weeks", level: "Intermediate",
    content: ["Build evaluation datasets for correctness, relevance, and groundedness", "Prompt and model regression testing in CI pipelines", "Guardrails, red teaming, PII handling, and safe fallbacks", "Tracing latency, token use, tool failures, and cost per task", "Capstone: an evaluation dashboard and production readiness review"],
  },
  {
    id: 17, title: "AWS AI Solutions Architect", image: "/images/aws-ai-architecture.png", description: "Design secure, scalable AI platforms across Bedrock, serverless services, data, identity, and operations.", price: "₹49,999", offerPrice: "₹24,999", offerTag: "Architecture path · New cohort", duration: "8 weeks", level: "Advanced",
    content: ["Reference architectures for RAG, agents, and event-driven AI", "IAM, VPC, encryption, secrets, tenancy, and data boundaries", "Serverless APIs, queues, workflows, and resilient integrations", "FinOps, capacity planning, observability, and disaster recovery", "Capstone: present a secure AWS AI platform architecture"],
  },
];

export default function CourseDetailsPage() {
  const { id } = useParams();
  const course = coursesData.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-100 to-blue-50 text-xl font-semibold text-gray-600">
        Course not found.
      </div>
    );
  }

  return (
    <main className="course-detail-page min-h-screen">
      <div className="course-detail-card max-w-7xl mx-auto rounded-3xl">
        <div className="course-detail-breadcrumb"><Link href="/enroll">Courses</Link><span>/</span><span>{course.title}</span></div>
        <section className="course-detail-hero">
          <div className="course-detail-copy">
            <p className="section-kicker">{course.category || "Professional learning path"} · Project-led learning</p>
            <h1>{course.title}</h1>
            <p className="course-detail-description">{course.description}</p>
            <div className="course-detail-tags"><span>{course.duration || "Flexible schedule"}</span><span>{course.level || "All levels"}</span><span>Hands-on projects</span></div>
            <div className="course-detail-actions"><a href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform" target="_blank" rel="noopener noreferrer" className="course-detail-enroll">Explore enrollment <span aria-hidden="true">↗</span></a><a href="#curriculum" className="course-detail-outline">View curriculum <span aria-hidden="true">↓</span></a></div>
            <p className="course-detail-offer">{course.offerTag}</p>
            <div className="course-price-row"><span className="course-price-original">{course.price}</span><strong>{course.offerPrice}</strong><small>Program investment</small></div>
          </div>
          <div className="course-detail-visual">
            <div className="course-detail-orbit course-detail-orbit-a" /><div className="course-detail-orbit course-detail-orbit-b" />
            <div className="course-detail-image-wrap"><Image src={course.image} alt={`${course.title} course`} width={900} height={650} priority className="course-detail-image" /></div>
            <span className="course-detail-float course-detail-float-a">Learn by building</span><span className="course-detail-float course-detail-float-b">Career-ready skills</span>
          </div>
        </section>
        <section className="course-outcomes">
          <div><p className="section-kicker">What you&apos;ll work toward</p><h2>Build skills you can <em>put to work.</em></h2></div>
          <div className="course-outcome-grid">{course.content.slice(0, 4).map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
        </section>
        <div id="curriculum" className="course-detail-curriculum"><CourseCurriculum title={course.title} fallbackContent={course.content} /></div>

          {/* Enroll Section */}
          <div className="course-detail-enroll-wrap flex flex-col items-center justify-center text-center px-4 py-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-72 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-xl transition-all shadow-lg animate-bounce-sm">
                Enroll Now
              </button>
            </Link>
            <p className="text-red-600 font-medium mt-4 text-sm sm:text-base max-w-xs sm:max-w-md text-center">
              🔥 Offer ends soon — Secure your seat now!
            </p>
          </div>
        </div>
    </main>
  );
}
