import Image from "next/image";
import Link from "next/link";
import SEOHead from "../component/SEOHead";

const values = [
  { number: "01", title: "Useful innovation", text: "We choose technology for the problem it solves, and make new ideas practical for the people who use them." },
  { number: "02", title: "Integrity", text: "We communicate clearly, protect trust, and take responsibility for the work we deliver." },
  { number: "03", title: "Shared ownership", text: "We listen to clients, learners, and teammates, then work together toward outcomes everyone understands." },
  { number: "04", title: "Craft and quality", text: "We care about the details: accessible experiences, thoughtful engineering, and work that is ready for real use." },
  { number: "05", title: "Keep learning", text: "Technology changes. We stay curious, share what we learn, and improve our approach with every project." },
];

export default function ValuesPage() {
  return (
    <main className="values-page-rebuild">
      <SEOHead title="Our Values | ITIDCS" description="The principles behind how ITIDCS designs digital products, delivers technology services, and teaches practical skills." />
      <div className="values-shell">
        <section className="values-hero">
          <div className="values-hero-copy">
            <p className="values-kicker"><span /> HOW WE WORK</p>
            <h1>Good work starts<br />with <em>good principles.</em></h1>
            <p>We build websites, mobile apps, and AI experiences, and teach practical technology skills. These values shape how we make decisions, collaborate, and deliver.</p>
            <div className="values-actions"><Link href="/services" className="values-primary">Explore our work <span aria-hidden="true">↗</span></Link><Link href="/contact" className="values-secondary">Talk with our team</Link></div>
          </div>
          <div className="values-hero-art">
            <Image src="/images/team-collaboration.jpg" alt="Colleagues collaborating on a digital project" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
            <div className="values-art-caption"><span>ITIDCS / OUR APPROACH</span><strong>Build with purpose.<br />Learn as we go.</strong></div>
          </div>
        </section>

        <section className="values-principles" aria-labelledby="values-principles-title">
          <div className="values-section-heading"><p className="values-kicker">WHAT GUIDES US</p><h2 id="values-principles-title">Principles you can<br /><em>see in the work.</em></h2><p>Values matter when they show up in everyday choices: what we build, how we communicate, and how we keep improving.</p></div>
          <div className="values-grid">
            {values.map((value) => <article className="values-card" key={value.number}><span>{value.number}</span><div><h3>{value.title}</h3><p>{value.text}</p></div></article>)}
          </div>
        </section>

        <section className="values-commitment">
          <p className="values-kicker">OUR COMMITMENT</p>
          <h2>Clear conversations.<br /><em>Thoughtful delivery.</em></h2>
          <p>We start by understanding the goal, share progress as we build, and make the next steps clear. Whether you are planning a product or developing new skills, we want the experience to be useful from the first conversation onward.</p>
          <Link href="/contact" className="values-primary">Start a conversation <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </main>
  );
}
