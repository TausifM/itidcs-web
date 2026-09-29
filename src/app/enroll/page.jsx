"use client";
import { useState } from "react";
import Image from "next/image";
import SEOHead from "../component/SEOHead";
import Link from "next/link";

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/images/technology-work.jpg",
    description:
      "Learn front-end and back-end development with hands-on projects.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "/images/digital-workspace.jpg",
    description:
      "Master data analysis, visualization, and machine learning techniques.",
    category: "Data Science",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    image: "/images/creative-design.jpg",
    description:
      "Understand design principles, tools, and user-centric processes.",
    category: "Design",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    image: "/images/software-development.jpg",
    description:
      "Protect systems, networks, and data with cybersecurity practices.",
    category: "Security",
  },
  {
    id: 5,
    title: "Mobile App Development",
    image: "/images/team-workspace.jpg",
    description: "Build responsive apps using Flutter and React Native.",
    category: "Mobile",
  },
  {
    id: 11,
    title: "Agentic AI Engineering with LangChain",
    image: "/images/aws-agentic-langchain.png",
    description: "Build production-ready agents with LangChain, tool calling, memory, RAG, and evaluation workflows.",
    category: "AWS Agentic AI",
    badge: "New · Agent track",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 12,
    title: "Amazon Bedrock Generative AI",
    image: "/images/aws-bedrock-genai.png",
    description: "Learn foundation models, prompt engineering, guardrails, and scalable GenAI apps on Amazon Bedrock.",
    category: "AWS Agentic AI",
    badge: "AWS pathway",
    duration: "6 weeks",
    level: "Beginner to intermediate",
  },
  {
    id: 13,
    title: "AWS Bedrock Knowledge Bases & RAG",
    image: "/images/aws-knowledge-rag.png",
    description: "Turn private documents into grounded AI experiences with ingestion, retrieval, citations, and evaluation.",
    category: "AWS Agentic AI",
    badge: "Hands-on labs",
    duration: "5 weeks",
    level: "Intermediate",
  },
  {
    id: 14,
    title: "Amazon Bedrock AgentCore",
    image: "/images/aws-agentcore.png",
    description: "Design, deploy, observe, and secure autonomous agents with AWS AgentCore runtime patterns.",
    category: "AWS Agentic AI",
    badge: "Advanced · 2026",
    duration: "6 weeks",
    level: "Intermediate to advanced",
  },
  {
    id: 15,
    title: "Multi-Agent Systems & Workflow Design",
    image: "/images/aws-multi-agent.png",
    description: "Coordinate specialist agents, approvals, tools, and state into reliable business workflows.",
    category: "AWS Agentic AI", badge: "Advanced agents", duration: "6 weeks", level: "Advanced",
  },
  {
    id: 16,
    title: "AI Evaluation, Safety & Observability",
    image: "/images/aws-ai-safety.png",
    description: "Measure agent quality, prevent unsafe behavior, and operate AI systems with confidence in production.",
    category: "AWS Agentic AI", badge: "Production skills", duration: "5 weeks", level: "Intermediate",
  },
  {
    id: 17,
    title: "AWS AI Solutions Architect",
    image: "/images/aws-ai-architecture.png",
    description: "Design secure, scalable AI platforms across Bedrock, serverless services, data, identity, and operations.",
    category: "AWS Agentic AI", badge: "Architecture path", duration: "8 weeks", level: "Advanced",
  },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  // const filteredCourses = coursesData.filter((course) => {
  //   return (
  //     (filter === "All" || course.category === filter) &&
  //     course.title.toLowerCase().includes(search.toLowerCase())
  //   );
  // });
  // make a function on click of search button to filter the courses based on search input and category

  const handleSearch = () => {
    const query = search.trim().toLowerCase();
    const filtered = coursesData.filter((course) => {
      return (
        (filter === "All" || course.category === filter) &&
        `${course.title} ${course.description} ${course.category}`.toLowerCase().includes(query)
      );
    });
    setFilteredCourses(filtered);
  };

  // if course category is not available in the coursesData then show all the courses
  const handleFilter = (category) => {
    setFilter(category);
    const query = search.trim().toLowerCase();
    setFilteredCourses(coursesData.filter((course) =>
      (category === "All" || course.category === category) &&
      `${course.title} ${course.description} ${course.category}`.toLowerCase().includes(query)
    ));
  };

  const categories = ["All", ...new Set(coursesData.map((c) => c.category))];

  return (
    <>
      <SEOHead
        title="Explore Courses - ITIDCS"
        description="Browse our professional IT and development courses. Learn skills that matter."
      />

      <main className="courses-page">
      <section className="aws-track-banner"><div><p className="section-kicker">New AWS Agentic AI track</p><h2>From first prompt to <em>production agents.</em></h2><p>Learn the complete AWS path: LangChain foundations, Amazon Bedrock, Knowledge Bases, RAG, and AgentCore deployment patterns.</p></div><div className="aws-track-stack" aria-hidden="true"><span>LangChain</span><span>Bedrock</span><span>Knowledge Bases</span><span>AgentCore</span></div></section>
      <nav className="courses-toolbar">
        <div className="courses-toolbar-inner">
          <form className="courses-search" role="search" onSubmit={(event) => { event.preventDefault(); handleSearch(); }}>
            <label className="sr-only" htmlFor="course-search">Search courses</label>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2" /></svg>
            <input
              id="course-search"
              type="search"
              placeholder="Search courses, skills, or topics"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search courses <span aria-hidden="true">&#8594;</span></button>
          </form>
          <div className="courses-filter-row">
            <div className="courses-filter-label"><span>Explore by topic</span><small>{filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}</small></div>
            <div className="courses-filter-list" aria-label="Filter courses by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={filter === cat}
                  onClick={() => handleFilter(cat)}
                  className={`courses-filter-chip ${filter === cat ? "is-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Courses Grid */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="course-card"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={500}
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{course.description}</p>
              <div className="mt-4 flex justify-center">
              <Link className="course-button text-white" href={`/enroll/${course.id}`}>
                View Details <span aria-hidden="true">↗</span>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </main>
    </>
  );
}
