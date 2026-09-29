import Link from "next/link";
import SEOHead from "../component/SEOHead";

export default function CareersPage() {
  return (
    <main className="jobs-closed-page">
      <SEOHead title="Careers | ITIDCS" description="There are no open positions at ITIDCS right now. Check back for future opportunities." />
      <section className="jobs-closed-card">
        <p className="section-kicker">Careers at ITIDCS</p>
        <h1>No current openings</h1>
        <p>Our previous listings have closed. Please check back later for new opportunities.</p>
        <Link href="/contact" className="about-cta">Contact our team <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
