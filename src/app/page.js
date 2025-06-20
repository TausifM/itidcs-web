"use client";
import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "./component/test";
import MainSection from "./component/mainsection";
import CTASection from "./component/ctasection";
import BentoGrid from "./component/bentogrid";
import AboutSection from "./component/aboutsection";
import Stats from "./component/stats";
import Testimonials from "./component/testimonials";
import Contact from "./contact/page";
import Modal from "./component/promotionModal";
import BadgeModal from "./component/BadgeModal";
import CourseCarousel from "./component/course-carousel";
import CelebrationBanner from "./component/CelebrationBannar";
import SEOHead from "./component/SEOHead";

const TrainingLandingPage = dynamic(
  () => import("./component/it-training"),
  { ssr: false }
);

export default function Home() {
  const mainRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);

  // For BadgeModal control
 const [badgeCount, setBadgeCount] = useState(0);
const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && triggerCount < 3) {
          setShowModal(true);
          setTriggerCount((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    const current = mainRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [triggerCount]);


useEffect(() => {
  if (badgeCount >= 1) {
    setShowBadge(false);
  }
}, [badgeCount]);

const handleBadgeClose = () => {
  setBadgeCount((prev) => prev + 1);
};
  return (
    <>
       <SEOHead
        title="ITIDCS – AI, Full Stack & Job-Ready Tech Courses"
        description="Launch your career with ITIDCS. Learn AI, Full Stack, Web Development & more with 100% job support. Enroll now and access expert-led training."
        image="https://res.cloudinary.com/plot-app-say-no-broker/image/upload/v1750403047/students-coding_xqptov.png"
      />

      <HeroSection />
      <div ref={mainRef}>
        <MainSection />
      </div>
      <TrainingLandingPage />
      <CourseCarousel />
      <CelebrationBanner />
      <CTASection />
      <BentoGrid />
      <AboutSection />
      <Stats />
      <Testimonials />
      <Contact />

      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <BadgeModal show={showBadge} onClose={handleBadgeClose} />
    </>
  );
}