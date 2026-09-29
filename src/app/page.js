"use client";
import { useRef, useEffect, useState } from "react";
import TrainingLandingPage from "./component/it-training";
import HeroSection from "./component/test";
import MainSection from "./component/mainsection";
import CTASection from "./component/ctasection";
import BentoGrid from "./component/bentogrid";
import AboutSection from "./component/aboutsection";
import HomeApproach from "./component/testimonials";
import Contact from "./contact/page";
import Modal from "./component/promotionModal";
import BadgeModal from "./component/BadgeModal";
import CourseCarousel from "./component/course-carousel";
import CelebrationBanner from "./component/CelebrationBannar";
import SEOHead from "./component/SEOHead";

export default function Home() {
  const mainRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [badgeResolved, setBadgeResolved] = useState(false);

  useEffect(() => {
    const badgeSeen = localStorage.getItem("itidcs-home-badge-modal-seen");
    if (badgeSeen) {
      setBadgeResolved(true);
      return;
    }

    localStorage.setItem("itidcs-home-badge-modal-seen", "true");
    setShowBadge(true);
  }, []);

  useEffect(() => {
    if (!badgeResolved) return undefined;
    if (localStorage.getItem("itidcs-home-promo-modal-seen")) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          localStorage.setItem("itidcs-home-promo-modal-seen", "true");
          setShowModal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const current = mainRef.current;
    if (current) observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [badgeResolved]);

const handleBadgeClose = () => {
  setShowBadge(false);
  setBadgeResolved(true);
};
  return (
    <>
       <SEOHead
        title="ITIDCS â€“ AI, Full Stack & Job-Ready Tech Courses"
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
      <HomeApproach />
      <Contact />

      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <BadgeModal show={showBadge} onClose={handleBadgeClose} />
    </>
  );
}
