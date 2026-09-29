"use client";

import Link from "next/link";
import BrandMark from "./brandmark";
import ThreeBackdrop from "./threebackdrop";

const companyLinks = [
  ["About ITIDCS", "/about"],
  ["Careers", "/carriers"],
  ["Our values", "/values"],
  ["Leadership", "/leadership"],
];

const exploreLinks = [
  ["Services", "/services"],
  ["Courses", "/enroll"],
  ["Journal", "/blogs"],
  ["Customer support", "/support"],
];

export default function NewsLetter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <section className="footer-newsletter">
          <div className="footer-newsletter-copy">
            <p className="footer-eyebrow"><span /> Stay curious</p>
            <h2>A little signal<br />in a noisy world.</h2>
            <p>Get thoughtful updates on new courses, digital ideas, and what we&apos;re building.</p>
            <form className="footer-subscribe" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
              <input id="newsletter-email" name="email" type="email" placeholder="Your email address" autoComplete="email" required />
              <button type="submit">Subscribe <span aria-hidden="true">↗</span></button>
            </form>
            <small className="footer-subscribe-note">Occasional notes. No clutter.</small>
          </div>
          <div className="footer-newsletter-art" aria-hidden="true">
            <div className="footer-art-glow" />
            <ThreeBackdrop variant="newsletter" />
            <span className="footer-art-chip footer-art-chip-a">Ideas</span>
            <span className="footer-art-chip footer-art-chip-b">In motion</span>
          </div>
          <span className="footer-newsletter-index" aria-hidden="true">ITIDCS / 2026</span>
        </section>

        <div className="footer-main">
          <div className="footer-brand-column">
            <Link href="/" className="footer-brand" aria-label="ITIDCS home"><BrandMark /></Link>
            <p>Learning and digital solutions for people ready to move forward.</p>
            <a className="footer-email-link" href="mailto:innovativeitdcorporation@gmail.com">innovativeitdcorporation@gmail.com <span aria-hidden="true">↗</span></a>
          </div>

          <div className="footer-link-column">
            <h3>Company</h3>
            {companyLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>

          <div className="footer-link-column">
            <h3>Explore</h3>
            {exploreLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>

          <div className="footer-contact-column">
            <h3>Come say hello</h3>
            <p><strong>Arvi</strong><br />Sanskriti Nagar, Near Bhakre Layout</p>
            <p><strong>Nagpur</strong><br />Siraspeth, Near Anand Budh Vihar</p>
            <Link href="/contact" className="footer-contact-link">Contact our team <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ITIDCS. Built with purpose.</span>
          <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cancellation-refund">Refund policy</Link></div>
        </div>
      </div>
    </footer>
  );
}
