import Link from "next/link";

const capabilities = [
  { id: "01", tone: "web", label: "DIGITAL PRODUCTS", title: "Websites made around your work.", copy: "Create a clear, fast web presence or a custom platform shaped to the way your business operates.", href: "/services", action: "Explore web services", motif: "layers" },
  { id: "02", tone: "ai", label: "AI CAPABILITIES", title: "Give good ideas useful intelligence.", copy: "Connect assistants, trusted knowledge, and practical automations to the experiences people already use.", href: "/services", action: "Explore AI services", motif: "orbit" },
  { id: "03", tone: "mobile", label: "MOBILE PRODUCTS", title: "Take your product wherever people are.", copy: "Design and develop thoughtful Android and iOS apps, from early product thinking through release.", href: "/services", action: "Explore app development", motif: "phone" },
  { id: "04", tone: "learning", label: "PRACTICAL LEARNING", title: "Build skills through real projects.", copy: "Follow a learning path in AI, cloud, or full stack development with room to grow at every level.", href: "/enroll", action: "Explore courses", motif: "steps" },
];

export default function BentoGrid() {
  return (
    <section className="home-capabilities">
      <div className="home-section-heading">
        <div><p className="section-kicker">Ideas into outcomes</p><h2>Technology that meets you <em>where you are.</em></h2></div>
        <p>From the first sketch to the next skill, find the support that fits your next move.</p>
      </div>
      <div className="home-capability-grid">
        {capabilities.map((item) => (
          <Link href={item.href} className={`home-capability-card home-capability-${item.tone}`} key={item.id}>
            <div className="home-capability-top"><span>{item.label}</span><span>{item.id}</span></div>
            <div className={`home-capability-motif motif-${item.motif}`} aria-hidden="true"><i /><i /><i /></div>
            <div className="home-capability-copy"><h3>{item.title}</h3><p>{item.copy}</p><span>{item.action}<b aria-hidden="true">↗</b></span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
