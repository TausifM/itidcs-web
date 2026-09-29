import Image from "next/image";
import Link from "next/link";
import SEOHead from "../component/SEOHead";

const badgeSignals = [
  { number: "01", title: "A learning milestone", text: "Recognition for completing the Successful Career Starter learning experience." },
  { number: "02", title: "Skills in motion", text: "A reminder to keep practicing, building, and applying new knowledge." },
  { number: "03", title: "The next step", text: "A starting point for exploring new roles, projects, and areas of technology." },
];

export default function BadgePage() {
  return (
    <main className="achievement-page">
      <SEOHead
        title="Successful Career Starter Badge | ITIDCS"
        description="Celebrate the Successful Career Starter badge from ITIDCS, explore practical technology learning paths, and take your next step."
        image="https://itidcs.vercel.app/badge.png"
        canonical="https://itidcs.vercel.app/badge"
      />

      <section className="achievement-hero">
        <div className="achievement-hero-copy">
          <p className="section-kicker"><span /> ITIDCS · LEARNING MILESTONE</p>
          <h1>Progress worth<br /><em>celebrating.</em></h1>
          <p className="achievement-lede">The Successful Career Starter badge recognizes a meaningful step in a technology learning journey: showing up, completing the work, and choosing to keep growing.</p>
          <div className="achievement-actions">
            <Link className="achievement-primary" href="/enroll">Explore courses <span aria-hidden="true">↗</span></Link>
            <Link className="achievement-secondary" href="/about">Meet ITIDCS <span aria-hidden="true">→</span></Link>
          </div>
          <div className="achievement-signature"><span className="achievement-signature-mark">IT</span><span><strong>Learn · Build · Grow</strong><small>Technology with purpose</small></span></div>
        </div>

        <div className="achievement-art" aria-label="Successful Career Starter achievement badge">
          <span className="achievement-orbit achievement-orbit-one" aria-hidden="true" />
          <span className="achievement-orbit achievement-orbit-two" aria-hidden="true" />
          <span className="achievement-art-chip achievement-chip-top" aria-hidden="true">SKILLS IN PROGRESS</span>
          <div className="achievement-badge-frame"><Image src="/badge.png" alt="Successful Career Starter badge from ITIDCS" width={520} height={520} priority /></div>
          <span className="achievement-art-chip achievement-chip-bottom" aria-hidden="true">A MILESTONE, NOT THE FINISH LINE</span>
        </div>
      </section>

      <section className="achievement-signals">
        <div className="achievement-section-heading"><p className="section-kicker">What this badge represents</p><h2>Small wins create<br /><em>real momentum.</em></h2><p>Every career path is built through learning, practice, and the confidence to take another step.</p></div>
        <div className="achievement-signal-list">
          {badgeSignals.map((signal) => (
            <article key={signal.number} className="achievement-signal-card">
              <span>{signal.number}</span><div><h3>{signal.title}</h3><p>{signal.text}</p></div><b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="achievement-about">
        <div className="achievement-about-visual"><Image src="/images/team-workspace.jpg" alt="People learning and sharing ideas in a collaborative workspace" fill sizes="(max-width: 760px) 100vw, 42vw" /><span className="achievement-visual-note"><strong>ITIDCS</strong><small>Practical learning. Useful technology.</small></span></div>
        <div className="achievement-about-copy"><p className="section-kicker">A little about ITIDCS</p><h2>Education and digital development, in one place.</h2><p>We bring practical technology learning together with digital products and software services. Learners can grow their skills; organizations can shape useful digital experiences around real needs.</p><p>Our approach starts with listening, learning by doing, and making progress visible along the way.</p><div className="achievement-about-links"><Link href="/services" className="achievement-about-link">Explore our services <span aria-hidden="true">↗</span></Link><Link href="/contact" className="achievement-about-link quiet">Talk to our team <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="achievement-pathways">
        <div><p className="section-kicker">Keep your momentum</p><h2>Choose what you want to <em>build next.</em></h2><p>Explore a practical course path, find a digital service for your organization, or start a conversation with our team.</p></div>
        <div className="achievement-pathway-actions"><Link href="/enroll" className="achievement-primary">Browse learning paths <span aria-hidden="true">↗</span></Link><Link href="/contact" className="achievement-secondary">Contact ITIDCS <span aria-hidden="true">→</span></Link></div>
      </section>
    </main>
  );
}
