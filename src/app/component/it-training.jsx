"use client";

import { useState } from "react";
import Link from "next/link";
import BrochureModal from "./BrochureModal";

const learningTopics = ["Artificial intelligence", "Full stack development", "Cloud and AWS", "Mobile apps"];

export default function TrainingLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="home-learning">
      <div className="home-learning-copy">
        <p className="section-kicker">ITIDCS learning</p>
        <h2>Learn by doing.<br /><em>Grow with purpose.</em></h2>
        <p className="home-learning-lede">Build practical technology skills with guided lessons, hands-on projects, and a learning path that can meet you at your level.</p>
        <div className="home-learning-actions">
          <Link href="/enroll" className="home-action-primary">Explore learning paths <span aria-hidden="true">↗</span></Link>
          <button type="button" className="home-action-secondary" onClick={() => setModalOpen(true)}>Request a course brochure <span aria-hidden="true">↗</span></button>
        </div>
        <ul className="home-learning-topics">
          {learningTopics.map((topic) => <li key={topic}><span aria-hidden="true" />{topic}</li>)}
        </ul>
      </div>

      <div className="home-learning-art" aria-hidden="true">
        <div className="home-learning-orbit home-learning-orbit-one" />
        <div className="home-learning-orbit home-learning-orbit-two" />
        <div className="home-learning-core"><span>IT</span><i>+</i></div>
        <div className="home-learning-float home-learning-float-one"><span>01</span>Learn</div>
        <div className="home-learning-float home-learning-float-two"><span>02</span>Build</div>
        <div className="home-learning-float home-learning-float-three"><span>03</span>Apply</div>
        <p>KNOWLEDGE IN MOTION</p>
      </div>
      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
