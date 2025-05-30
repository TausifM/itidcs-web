import { useState } from "react";
import curriculumData from "../data/curriculumData";
import Link from "next/link";
import AnimatedNumber from "./animatedNumber";

export default function CourseCurriculum({ title, data = curriculumData }) {
  const course = data.find((c) => c.title === title);
  const [openIndex, setOpenIndex] = useState(null);

  if (!course)
    return <p className="text-red-600 font-semibold text-center">Course not found.</p>;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-6 px-2 py-10">
      {/* Sidebar */}
      <aside className="bg-blue-900 text-white rounded-xl p-6 shadow-md space-y-6">
        <h2 className="text-xl font-bold leading-tight">
          Industry Oriented Curriculum
        </h2>
        <p className="text-sm">
          An exhaustive curriculum designed by industry experts to help you land
          your dream IT job.
        </p>
        <div className="space-y-4">
          <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-4">
            <div className="text-2xl font-bold">
              <AnimatedNumber target={30} />
            </div>
            <div className="text-sm">Case Studies & Projects</div>
          </div>
          <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-4">
            <div className="text-2xl font-bold">
              <AnimatedNumber target={10} />
            </div>
            <div className="text-sm">Languages & Tools</div>
          </div>
          <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-4">
            <div className="text-2xl font-bold">
              <AnimatedNumber target={280} />
            </div>
            <div className="text-sm">Live Session Hours</div>
          </div>
        </div>
            <Link
                href="https://www.canva.com/design/DAGnxYI4ZuE/tP83oxzkUeVCxxoyJagu4w/view?utm_content=DAGnxYI4ZuE&utm_campaign=share_your_design&utm_medium=link2&utm_source=shareyourdesignpanel#22"
                className="inline-block px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded  transition"
                aria-label="Download Course Brochure"
                title="Download Course Brochure"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
            >
                  Download PDF
            </Link>
      </aside>

      {/* Curriculum Timeline */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-center md:text-left">
          {course.title} Curriculum
        </h1>

        <div className="relative pl-6">
          <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-gray-300"></div>

          {course.roadmap.map((section, idx) => (
            <div key={idx} className="relative pl-6">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-4 w-3 h-3 bg-lime-500 rounded-full border-2 border-white shadow-md" />

              {/* Accordion Header */}
              <button
                onClick={() => toggle(idx)}
                className={`
              w-full text-left
              border rounded-lg shadow-sm p-4
              flex flex-col sm:flex-row sm:justify-between sm:items-center
              gap-2
              transition-all
              ${
                openIndex === idx
                  ? "bg-lime-50 border-lime-500"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              }
            `}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    {section.title}
                  </h3>
                  <span className="inline-block bg-lime-200 text-lime-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {section.section}
                  </span>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2">
                  <span className="flex items-center text-sm text-gray-600">
                    ⏱ {section.duration}
                  </span>
                  {/* Arrow with rotation */}
                  <span
                    className={`
                  inline-block transform transition-transform
                  ${openIndex === idx ? "rotate-180" : "rotate-0"}
                `}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {/* Accordion Content */}
              {openIndex === idx && (
                <div className="bg-gray-50 border border-t-0 rounded-b-lg p-4 text-sm">
                  <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {section.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
