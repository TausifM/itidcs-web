"use client";

import { useState } from "react";
import curriculumData from "../data/curriculumData";
import BrochureModal from "./BrochureModal";

function ChevronIcon({ open }) {
  return (
    <svg className={`curriculum-chevron${open ? " is-open" : ""}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CourseCurriculum({ title, data = curriculumData, fallbackContent = [] }) {
  const savedCourse = data.find((item) => item.title === title);
  const course = savedCourse || (fallbackContent.length ? {
    title,
    roadmap: fallbackContent.map((topic, index) => ({
      section: `Module ${String(index + 1).padStart(2, "0")}`,
      tag: index === fallbackContent.length - 1 ? "Project" : "Core",
      duration: "Guided module",
      topics: [topic],
    })),
  } : null);
  const [openIndex, setOpenIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  if (!course) {
    return <p className="curriculum-empty">Curriculum details are being prepared for this course.</p>;
  }

  const totalTopics = course.roadmap.reduce((total, module) => total + (module.topics?.length || 0), 0);

  return (
    <section className="curriculum-shell" aria-labelledby="curriculum-heading">
      <aside className="curriculum-aside">
        <div className="curriculum-aside-topline"><span className="curriculum-live-dot" /> COURSE ROADMAP</div>
        <h2>Learn it.<br /><em>Build it.</em></h2>
        <p>A guided path from core concepts to practical work. Open each module to explore what you will cover.</p>

        <div className="curriculum-stats">
          <div className="curriculum-stat"><strong>{String(course.roadmap.length).padStart(2, "0")}</strong><span>Learning modules</span></div>
          <div className="curriculum-stat"><strong>{String(totalTopics).padStart(2, "0")}</strong><span>Skills and concepts</span></div>
          <div className="curriculum-stat"><strong>Build</strong><span>Project-led practice</span></div>
        </div>

        <div className="curriculum-aside-footer">
          <span className="curriculum-aside-index">ITIDCS / LEARNING STUDIO</span>
          <button className="curriculum-brochure-button" type="button" onClick={() => setModalOpen(true)}>
            Program details <span aria-hidden="true">↗</span>
          </button>
        </div>
      </aside>

      <div className="curriculum-main">
        <div className="curriculum-heading-row">
          <div>
            <p className="section-kicker">The learning path</p>
            <h2 id="curriculum-heading">{course.title}<br /><em>curriculum</em></h2>
          </div>
          <span className="curriculum-module-count">{course.roadmap.length} MODULES</span>
        </div>

        <div className="curriculum-list">
          {course.roadmap.map((module, index) => {
            const isOpen = openIndex === index;
            const panelId = `curriculum-panel-${index}`;

            return (
              <article className={`curriculum-module${isOpen ? " is-open" : ""}`} style={{ "--module-index": index }} key={`${module.section}-${index}`}>
                <span className="curriculum-timeline-node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <button
                  className="curriculum-module-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="curriculum-module-main">
                    <span className="curriculum-module-label">MODULE {String(index + 1).padStart(2, "0")}</span>
                    <strong>{module.section}</strong>
                  </span>
                  <span className="curriculum-module-meta">
                    <span className="curriculum-module-tag">{module.tag || "Core"}</span>
                    <span className="curriculum-duration">
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M10 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      {module.duration}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                <div className="curriculum-panel" id={panelId} aria-hidden={!isOpen}>
                  <div className="curriculum-panel-inner">
                    <ul>
                      {module.topics.map((topic, topicIndex) => (
                        <li key={`${topic}-${topicIndex}`}><span aria-hidden="true">{String(topicIndex + 1).padStart(2, "0")}</span>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
