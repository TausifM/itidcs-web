import Link from "next/link";

const principles = [
  { number: "01", title: "Start with people", text: "Understand the learners, customers, and teams the work is meant to serve." },
  { number: "02", title: "Make technology useful", text: "Choose tools and patterns that solve a real problem and can grow over time." },
  { number: "03", title: "Keep learning", text: "Share knowledge along the way so good work keeps getting better." },
];

export default function AboutSection() {
  return (
    <section className="home-about">
      <div className="home-about-art" aria-hidden="true">
        <div className="home-about-disc home-about-disc-one" />
        <div className="home-about-disc home-about-disc-two" />
        <div className="home-about-disc home-about-disc-three" />
        <div className="home-about-monogram">IT<span>.</span></div>
        <div className="home-about-registration"><span>IN</span><div><strong>MCA registered</strong><small>Indian company</small></div><i /></div>
      </div>
      <div className="home-about-copy">
        <p className="section-kicker">A little about us</p>
        <h2>Technology should make the <em>next step clearer.</em></h2>
        <p className="home-about-lede">ITIDCS brings software development and practical technology education together, helping people and businesses turn ambitious ideas into thoughtful next steps.</p>
        <div className="home-about-principles">
          {principles.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
        <Link href="/services" className="home-about-link">Get to know our work <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
