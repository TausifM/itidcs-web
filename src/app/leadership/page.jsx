import Link from "next/link";
import SEOHead from "../component/SEOHead";

const principles = [
  { symbol: "01", title: "Listen first", copy: "Understand the people, context, and constraints before deciding what to build." },
  { symbol: "02", title: "Make it clear", copy: "Turn complex technology into practical steps people can understand and use." },
  { symbol: "03", title: "Share the work", copy: "Build an environment where learning, feedback, and good ideas can come from everyone." },
];

export default function LeadershipPage() {
  return (
    <main className="leadership-page">
      <SEOHead title="Leadership at ITIDCS" description="Learn about the principles that guide leadership and collaboration at ITIDCS." />
      <section className="leadership-hero"><div className="leadership-orb leadership-orb-a" /><div className="leadership-orb leadership-orb-b" /><p className="section-kicker">Leadership at ITIDCS</p><h1>Good leadership makes room for good work.</h1><p>We believe the best outcomes come from clear purpose, shared responsibility, and teams that keep learning together.</p><Link href="/about" className="about-cta">Our story <span aria-hidden="true">â†—</span></Link><span className="leadership-mark" aria-hidden="true">IT<span>.</span></span></section>
      <section className="leadership-principles"><div className="careers-section-heading"><p className="section-kicker">Our approach</p><h2>Make the work better for everyone doing it.</h2></div><div className="leadership-grid">{principles.map((item) => <article key={item.symbol} className="leadership-card"><span>{item.symbol}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
    </main>
  );
}
