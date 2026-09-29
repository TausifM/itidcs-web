import Link from "next/link";
import Image from "next/image";
import ThreeAccent from "./threeaccent";

export default function HeroSection() {
  return (
    <main className="home-hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Technology, thoughtfully built</div>
          <h1>Make your next<br />big idea <span>real.</span></h1>
          <p>Learn in-demand tech skills. Build digital products that move your business forward. Your next chapter starts here.</p>
          <div className="hero-actions">
            <Link href="/services" className="button-primary">Explore what we do <span aria-hidden="true">↗</span></Link>
            <Link href="/enroll" className="button-quiet">Discover our courses <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true"><span>IT</span><span>DX</span><span>+</span></div>
            <p><strong>Learn it. Build it. Grow with it.</strong><br />Practical technology for people with ambition.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="A collaborative technology team at work">
          <ThreeAccent />
          <div className="hero-photo hero-photo-main">
            <Image
              src="/images/team-workspace.jpg"
              alt="A team sharing ideas around a table"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 50vw"
            />
          </div>
          <div className="hero-photo hero-photo-small">
            <Image
              src="/images/digital-workspace.jpg"
              alt="Colleagues collaborating on a project"
              fill
              sizes="220px"
            />
          </div>
          <div className="hero-float-card"><span className="float-icon">✳</span><span><strong>Ideas into impact</strong><small>One thoughtful step at a time</small></span><span className="float-arrow">↗</span></div>
          <div className="hero-index" aria-hidden="true">01 <i /> 04</div>
        </div>
      </div>
      <div className="hero-bottomline"><span>DESIGN · DEVELOPMENT · LEARNING</span><span>BUILT FOR WHAT&apos;S NEXT <span aria-hidden="true">↓</span></span></div>
    </main>
  );
}
