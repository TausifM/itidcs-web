"use client";
import { useRef, useEffect, useState } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="6kVFdmL0NC0JuYelngHfHel3A-W0O00u03zsJ070_2A"
        />
      </Head>

      <HeroSection />
      <div ref={mainRef}>
        <MainSection />
      </div>
      <CTASection />
      <BentoGrid />
      <AboutSection />
      <Stats />
      <Testimonials />
      <Contact />

      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <BadgeModal />
    </>
  );
}
