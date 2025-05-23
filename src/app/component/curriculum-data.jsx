import { useState } from "react";
import curriculumData from "../data/curriculumData";

export default function CourseCurriculum({ title, data = curriculumData }) {
  const course = data.find((c) => c.title === title);
  const [openIndex, setOpenIndex] = useState(null);

  if (!course) return <p className="text-red-600 font-semibold">Course not found.</p>;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-6 px-2 py-10">
      {/* Sidebar */}
      <aside className="bg-blue-900 text-white rounded-xl p-6 shadow-md space-y-6">
        <h2 className="text-xl font-bold leading-tight">Industry Oriented Curriculum</h2>
        <p className="text-sm">An exhaustive curriculum designed by industry experts to help you land your dream IT job.</p>
        <div className="space-y-4">
          <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-4">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm">Case Studies & Projects</div>
          </div>
          <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-4">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm">Languages & Tools</div>
          </div>
          <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-4">
            <div className="text-2xl font-bold">280+</div>
            <div className="text-sm">Live Session Hours</div>
          </div>
        </div>
        <button className="mt-6 bg-lime-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-500 transition">
          📥 Download Brochure
        </button>
      </aside>

      {/* Curriculum Timeline */}
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-center md:text-left">{course.title} Curriculum</h1>

        <div className="relative pl-6">
          <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-gray-300"></div>

          {course.roadmap.map((section, idx) => (
            <div key={idx} className="relative pl-6 pb-4">
              {/* Timeline Dot */}
              <div className="absolute left-[-4px] top-2 w-4 h-4 bg-lime-500 rounded-full border-2 border-white shadow-md"></div>

              {/* Accordion Header */}
              <div
                className="bg-white border rounded-lg shadow-sm p-4 cursor-pointer hover:bg-gray-50 transition flex justify-between items-center"
                onClick={() => toggle(idx)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <span className="bg-lime-200 text-lime-800 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">{section.tag}</span>
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  ⏱ {section.duration}
                  <span className="ml-2">{openIndex === idx ? "▲" : "▼"}</span>
                </div>
              </div>

              {/* Accordion Content */}
              {openIndex === idx && (
                <div className="bg-gray-50 border border-t-0 rounded-b-lg p-4 mt-[-1px] text-sm">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
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
