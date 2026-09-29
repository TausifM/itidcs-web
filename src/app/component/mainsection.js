import Link from "next/link";

const features = [
  { number: "01", title: "Learn with intention", text: "Build real-world IT skills through practical, expert-led training.", href: "/enroll", tag: "COURSES", color: "#e7e2ff" },
  { number: "02", title: "Build with clarity", text: "Turn your product idea into a polished website or application.", href: "/services", tag: "DIGITAL PRODUCTS", color: "#d8f4e3" },
  { number: "03", title: "Grow with confidence", text: "Get a thoughtful partner for your next digital move.", href: "/contact", tag: "CONSULTING", color: "#ffe7d4" },
];

export default function MainSection() {
  return (
    <section className="pathways-section">
      <div className="pathways-heading">
        <div>
          <p className="section-kicker">A good place to begin</p>
          <h2>What are you here<br className="pathways-break" /> to make possible?</h2>
        </div>
        <p>Whether you&apos;re starting from scratch or ready to scale, we bring the right people and technology together.</p>
      </div>
      <div className="pathways-grid">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.number} className="pathway-card" style={{ "--pathway-color": feature.color }}>
            <div className="pathway-card-top"><span>{feature.tag}</span><span>{feature.number}</span></div>
            <div className="pathway-icon" aria-hidden="true">{feature.number === "01" ? "✳" : feature.number === "02" ? "◈" : "↗"}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <span className="pathway-link">Explore <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
