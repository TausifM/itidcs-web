"use client";
import Test from "./component/test";
import { Inter } from "next/font/google";
import Example from "./component/testherosection";
import CTASection from "./component/ctasection";
import BentoGrid from "./component/bentogrid";
import AboutSection from "./component/aboutsection";
import NewsLetter from "./component/newsletter";
import Stats from "./component/stats";
import Testimonials from "./component/testimonials";
import { Contact } from "./component/contact";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div id="app" className={inter.className}>
      <Test />
      <Example />
      <CTASection />
      <BentoGrid />
      <AboutSection />
      <Stats />
      <Testimonials />
      <Contact />
      <NewsLetter />
    </div>
  );
}
