"use client";

import { useRef } from "react";
import coursesData from "../data/coursesData";
import Image from "next/image";
import Link from "next/link";

const featuredIds = [1, 10, 5, 6];
const featuredCourses = featuredIds.map((id) => coursesData.find((course) => course.id === id)).filter(Boolean);

export default function CourseCarousel() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    trackRef.current?.scrollBy({ left: direction * Math.min(trackRef.current.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <section className="home-courses">
      <div className="home-section-heading">
        <div><p className="section-kicker">Choose a path</p><h2>Learn skills you can <em>put to work.</em></h2></div>
        <div className="home-course-heading-side"><p>Explore practical programs across AI, software, cloud, and mobile development.</p><Link href="/enroll">View all courses <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="home-course-controls" aria-label="Course carousel controls">
        <button type="button" onClick={() => scroll(-1)} aria-label="Scroll courses left">←</button>
        <button type="button" onClick={() => scroll(1)} aria-label="Scroll courses right">→</button>
      </div>
      <div className="home-course-track" ref={trackRef}>
        {featuredCourses.map((course, index) => (
          <article className={`home-course-card home-course-card-${index + 1}`} key={course.id}>
            <div className="home-course-image">
              <Image src={course.image} alt="" fill sizes="(max-width: 680px) 84vw, (max-width: 1000px) 44vw, 30vw" />
              <span>{course.category}</span>
            </div>
            <div className="home-course-content">
              <p className="home-course-index">LEARNING PATH / 0{index + 1}</p>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link href={`/enroll/${course.id}`}>Explore course <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
