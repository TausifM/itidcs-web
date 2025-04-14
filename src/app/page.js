"use client";
import { useRef, useEffect, useState } from "react";
import Test from "./component/test";
import MainSection from "./component/mainsection";
import CTASection from "./component/ctasection";
import BentoGrid from "./component/bentogrid";
import AboutSection from "./component/aboutsection";
import NewsLetter from "./component/newsletter";
import Stats from "./component/stats";
import Testimonials from "./component/testimonials";
import { Contact } from "./component/contact";
import Modal from "./component/promotionModal";
import 'leaflet/dist/leaflet.css';

export default function Home() {
  const mainRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);

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

  return (
    <div id="app">
      <Test />
      <div ref={mainRef}>
        <MainSection />
      </div>
      <CTASection />
      <BentoGrid />
      <AboutSection />
      <Stats />
      <Testimonials />
      <Contact />
      <NewsLetter />
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
