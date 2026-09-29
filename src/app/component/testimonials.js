const steps = [
  { number: "01", title: "Find the right starting point", text: "We begin with your goal, current skills, and what a useful result looks like." },
  { number: "02", title: "Make progress visible", text: "Work in clear steps, with regular feedback and decisions you can follow." },
  { number: "03", title: "Build for what comes next", text: "Leave with stronger skills, a useful product, or a clear plan for the next stage." },
];

export default function HomeApproach() {
  return (
    <section className="home-approach">
      <div className="home-approach-heading"><p className="section-kicker">How we move forward</p><h2>Clear collaboration.<br /><em>Useful progress.</em></h2><p>Whether we&apos;re teaching a new skill or building a digital product, the work should feel understandable at every step.</p></div>
      <div className="home-approach-steps">
        {steps.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><i aria-hidden="true">↗</i></article>)}
      </div>
    </section>
  );
}
