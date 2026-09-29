import Image from "next/image";
import Link from "next/link";
import SEOHead from "../component/SEOHead";

const pillars = [
  { number: "01", title: "Learn by doing", description: "Practical, expert-led learning that helps people build skills they can use in real work." },
  { number: "02", title: "Build with care", description: "Digital products shaped around the people who use them and the goals they need to reach." },
  { number: "03", title: "Keep moving forward", description: "A curious, collaborative approach to technology that keeps growth at the center." },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SEOHead title="About Us - ITIDCS" description="Learn more about ITIDCS and our mission to deliver IT education and digital solutions." />
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="section-kicker">A little about us</p>
          <h1>Technology can open a lot of doors.</h1>
          <p>We help people build the confidence to walk through them, with practical IT training and digital products made for real needs.</p>
          <Link href="/contact" className="about-cta">Meet us where you are <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="about-hero-image">
          <Image src="/images/team-workspace.jpg" alt="A team sharing ideas in a bright workspace" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          <span className="about-image-note"><strong>ITIDCS</strong><small>Learn · Build · Grow</small></span>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-heading"><p className="section-kicker">Why we exist</p><h2>Make the digital world feel more within reach.</h2></div>
        <div className="about-story-copy">
          <p>ITIDCS brings education and digital development together. We offer technology courses for people ready to grow their skills, and software services for organizations ready to take their next step.</p>
          <p>Our aim is straightforward: listen closely, make useful things, and share knowledge along the way. Every project and learning journey starts with understanding what matters to the people behind it.</p>
          <Link href="/services" className="text-link">Explore our services <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="about-pillars">
        <div className="about-pillars-heading"><p className="section-kicker">How we work</p><h2>Good technology starts with good questions.</h2></div>
        <div className="about-pillar-grid">
          {pillars.map((pillar) => <article key={pillar.number} className="about-pillar-card"><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}
        </div>
      </section>

      <section className="about-next">
        <div><p className="section-kicker">Start something</p><h2>Let&apos;s make your next idea useful.</h2></div>
        <div className="about-next-actions"><Link href="/enroll" className="about-cta">Find a course <span aria-hidden="true">↗</span></Link><Link href="/contact" className="text-link">Talk to our team <span aria-hidden="true">→</span></Link></div>
      </section>
    </main>
  );
}
