import Link from "next/link";

export default function CTASection() {
  return (
    <section className="closing-section">
      <div className="closing-card">
        <div className="closing-copy">
          <p className="section-kicker">Your next move</p>
          <h2>Transform your digital presence today.</h2>
          <p>Empower your future with expert IT training and custom-built websites and apps that drive success. Take the first step now.</p>
          <div className="closing-actions">
            <Link href="/enroll" className="closing-primary">Start learning <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="closing-secondary">Get a consultation <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="closing-art" aria-hidden="true">
          <div className="closing-art-orbit orbit-a" />
          <div className="closing-art-orbit orbit-b" />
          <div className="closing-art-core">IT<span>.</span></div>
          <div className="closing-art-chip chip-a">Design</div>
          <div className="closing-art-chip chip-b">Build</div>
          <div className="closing-art-chip chip-c">Grow</div>
        </div>
      </div>
    </section>
  );
}
