import Link from "next/link";
import Image from "next/image";
import SEOHead from "../component/SEOHead";

const opportunities = [
  { icon: "↗", title: "Open roles", detail: "See the current opportunities and application details.", href: "/jobs", action: "Browse jobs" },
  { icon: "✳", title: "Internships", detail: "Explore practical learning and early-career opportunities with our team.", href: "/values", action: "Explore internships" },
  { icon: "✉", title: "Say hello", detail: "Have a skill or idea you think would fit? We would like to hear from you.", href: "/contact", action: "Contact us" },
];

export default function CareersPage() {
  return (
    <main className="careers-page">
      <SEOHead title="Careers at ITIDCS" description="Explore current roles and learning opportunities at ITIDCS." />
      <section className="careers-hero">
        <div className="careers-copy"><p className="section-kicker">Careers at ITIDCS</p><h1>Bring your curiosity.<br /><span>Build what&apos;s next.</span></h1><p>We work at the intersection of technology, education, and useful digital products. Find an opportunity to learn, contribute, and grow.</p><Link href="/jobs" className="about-cta">View opportunities <span aria-hidden="true">↗</span></Link></div>
        <div className="careers-art"><Image src="/images/team-collaboration.jpg" alt="A small team working together at a laptop" fill sizes="(max-width: 800px) 100vw, 48vw" /><span className="careers-art-badge">Make good things<br />with good people.</span></div>
      </section>
      <section className="careers-opportunities"><div className="careers-section-heading"><p className="section-kicker">Find your way in</p><h2>There&apos;s more than one way to grow here.</h2></div><div className="careers-opportunity-grid">{opportunities.map((item) => <article className="careers-opportunity-card" key={item.title}><span className="opportunity-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.detail}</p><Link href={item.href}>{item.action} <span aria-hidden="true">→</span></Link></article>)}</div></section>
    </main>
  );
}
