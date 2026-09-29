import Link from "next/link";
import SEOHead from "../component/SEOHead";
import ServicesScene from "../component/services-scene";
import ProjectFlowScene from "../component/ProjectFlowScene";

const offerings = [
  {
    number: "01",
    theme: "web",
    eyebrow: "WEB · E-COMMERCE · PLATFORMS",
    title: "Websites that do more than look good.",
    description: "We plan, design, and build responsive websites and web applications around your customers, business goals, and day-to-day workflows.",
    capabilities: ["Business websites and landing pages", "Custom web applications and portals", "E-commerce and booking experiences", "AI chat, search, and workflow integrations"],
  },
  {
    number: "02",
    theme: "apps",
    eyebrow: "ANDROID · IOS · CROSS-PLATFORM",
    title: "Mobile products, made for real use.",
    description: "From first product idea to app store release, we create mobile experiences that feel natural, load quickly, and connect to the systems behind your business.",
    capabilities: ["Android and iOS application development", "Cross-platform apps with shared foundations", "Secure APIs, accounts, and notifications", "Release support and ongoing improvements"],
  },
  {
    number: "03",
    theme: "ai",
    eyebrow: "GENERATIVE AI · AGENTS · AUTOMATION",
    title: "Useful AI, built into the experience.",
    description: "We help teams apply AI where it can make work simpler: answering questions from trusted knowledge, assisting users, and connecting repetitive steps into workflows.",
    capabilities: ["AI assistants grounded in your content", "Agentic workflows and tool integrations", "Document search and knowledge experiences", "Human review, privacy, and access controls"],
  },
  {
    number: "04",
    theme: "ai-saas",
    eyebrow: "AI SAAS \u00b7 PRODUCT ENGINEERING",
    title: "AI SaaS products, ready to grow.",
    description: "Turn a product idea into a subscription-based AI platform. We build the customer experience and the reliable product foundations behind it.",
    capabilities: ["Customer accounts and secure workspaces", "Plans, subscriptions, and usage credits", "AI model and third-party API connections", "Admin dashboards and product analytics"],
  },
  {
    number: "05",
    theme: "ai-apps",
    eyebrow: "AI APPLICATIONS \u00b7 COPILOTS",
    title: "AI apps shaped around your work.",
    description: "Create helpful AI applications and copilots for the tasks your team or customers do every day, across web and mobile experiences.",
    capabilities: ["Custom AI assistants and copilots", "Search, recommendations, and summarisation", "Connected tools and workflow automation", "Web and mobile app integrations"],
  },
  {
    number: "06",
    theme: "chatbot",
    eyebrow: "AI CHATBOTS \u00b7 CUSTOMER EXPERIENCE",
    title: "Chatbots that know your business.",
    description: "Give customers a useful first answer with a chatbot grounded in your approved information, with a clear path to a person when needed.",
    capabilities: ["Website support and sales chatbots", "Answers from your documents and FAQs", "Human handoff for complex questions", "Conversation insights and safe responses"],
  },
];

const learningLevels = [
  { level: "01", name: "Beginner", color: "beginner", text: "Start with the foundations. Build confidence with guided practice and clear explanations.", topics: ["AI and digital foundations", "HTML, CSS, and JavaScript", "Programming fundamentals"] },
  { level: "02", name: "Intermediate", color: "intermediate", text: "Connect concepts and build complete projects with modern tools and workflows.", topics: ["Full stack web development", "Applied AI and APIs", "Databases, Git, and deployment"] },
  { level: "03", name: "Advanced", color: "advanced", text: "Go deeper into production patterns, system design, and specialized AI engineering.", topics: ["Agentic AI and LangChain", "AWS Bedrock and Knowledge Bases", "AgentCore and AI architecture"] },
];

export default function ServicesPage() {
  return (
    <main className="services-rebuild">
      <SEOHead
        title="Web, Mobile, AI and Technology Training | ITIDCS"
        description="ITIDCS builds websites, web applications, Android and iOS apps, and AI-powered digital experiences. We also teach practical technology courses from beginner to advanced."
      />

      <section className="sr-hero">
        <div className="sr-hero-orb sr-hero-orb-a" aria-hidden="true" />
        <div className="sr-hero-orb sr-hero-orb-b" aria-hidden="true" />
        <div className="sr-hero-copy">
          <div className="sr-registration"><span className="sr-registration-mark">IN</span><span><strong>Indian company</strong><small>Registered with the Ministry of Corporate Affairs</small></span><i aria-hidden="true" /></div>
          <p className="sr-eyebrow"><span /> DIGITAL PRODUCTS · PRACTICAL LEARNING</p>
          <h1>We build what<br />moves you <em>forward.</em></h1>
          <p className="sr-hero-lede">Websites, mobile apps, and thoughtful AI capabilities for growing businesses. Practical technology training for people ready to grow their skills.</p>
          <div className="sr-hero-actions"><Link href="/contact" className="sr-button sr-button-mint">Tell us what you&apos;re building <span aria-hidden="true">↗</span></Link><Link href="/enroll" className="sr-text-link">Find your course <span aria-hidden="true">→</span></Link></div>
          <div className="sr-hero-proof"><span><b>Web</b> products</span><span><b>iOS + Android</b> apps</span><span><b>AI</b> capabilities</span></div>
        </div>
        <div className="sr-hero-visual">
          <div className="sr-scene-stage"><ServicesScene /></div>
          <span className="sr-float-label sr-label-ai">AI experiences</span>
          <span className="sr-float-label sr-label-app">Mobile apps</span>
          <span className="sr-float-label sr-label-web">Web platforms</span>
          <div className="sr-visual-caption"><span className="sr-caption-dot" /> DESIGN · ENGINEERING · LEARNING</div>
        </div>
        <a href="#what-we-do" className="sr-scroll-cue"><span /> Scroll to explore</a>
      </section>

      <section className="sr-trust-strip" aria-label="Company registration">
        <div className="sr-trust-seal" aria-hidden="true">MCA</div>
        <div><strong>Built by an MCA-registered Indian company.</strong><p>ITIDCS is registered with India&apos;s Ministry of Corporate Affairs. Company identification details can be confirmed through the official MCA registry.</p></div>
        <span className="sr-trust-note">INDIA · CORPORATE REGISTRATION</span>
      </section>

      <section className="sr-offerings" id="what-we-do">
        <div className="sr-section-intro"><p className="sr-section-kicker">WHAT WE DO</p><h2>Technology for the<br /><em>next version.</em></h2><p>One team to take your idea from a useful first conversation to a polished product people can use.</p></div>
        <div className="sr-offering-list">
          {offerings.map((offering) => (
            <article className={`sr-offering-card sr-offering-${offering.theme}`} key={offering.number}>
              <div className="sr-offering-top"><span>{offering.number}</span><span>{offering.eyebrow}</span></div>
              <div className="sr-offering-grid">
                <div><h3>{offering.title}</h3><p>{offering.description}</p><Link href="/contact" className="sr-card-link">Discuss a project <span aria-hidden="true">↗</span></Link></div>
                <ul>{offering.capabilities.map((capability) => <li key={capability}><span aria-hidden="true" />{capability}</li>)}</ul>
              </div>
              <div className="sr-card-ornament" aria-hidden="true"><span /><i /><b /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="sr-project-flow" aria-labelledby="sr-project-flow-title">
        <div className="sr-project-flow-heading">
          <div><p className="sr-section-kicker">FROM FIRST IDEA TO LIVE PRODUCT</p><h2 id="sr-project-flow-title">A clear path from<br /><em>concept to launch.</em></h2></div>
          <p>Bring us a challenge, a sketch, or an early idea. We shape it with you, build it through a thoughtful software lifecycle, and help you move it into the world.</p>
        </div>

        <div className="project-journey-panel">
          <div className="project-journey-copy">
            <p className="project-journey-eyebrow"><span>01</span> THE START</p>
            <h3>Bring the challenge.<br /><em>We&apos;ll shape the idea.</em></h3>
            <p>Tell us what your customers or team need. We&apos;ll help turn the first conversation into a clear product direction.</p>
            <div className="project-journey-types-label">WHAT WE CAN BUILD</div>
            <div className="project-flow-types"><span>Websites</span><span>Mobile apps</span><span>AI products</span><span>SaaS</span><span>CRM</span></div>
            <Link href="/contact" className="project-flow-start">Start a conversation <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-journey-visual" aria-hidden="true">
            <ProjectFlowScene />
            <span className="project-journey-interaction"><i aria-hidden="true">↔</i><span className="project-journey-interaction-desktop">DRAG TO EXPLORE</span><span className="project-journey-interaction-mobile">SWIPE TO EXPLORE</span></span>
            <span className="project-journey-stage project-journey-stage-client"><b>01</b> CLIENT IDEA</span>
            <span className="project-journey-stage project-journey-stage-process"><b>02</b> BUILD TOGETHER</span>
            <span className="project-journey-stage project-journey-stage-product"><b>03</b> PRODUCT LIVE</span>
          </div>
        </div>

        <div className="project-lifecycle">
          <div className="project-lifecycle-heading"><div><p className="sr-section-kicker">THE SOFTWARE DEVELOPMENT LIFECYCLE</p><h3>Thoughtful at every <em>stage.</em></h3></div><span>02 <i>—</i> 06</span></div>
          <ol className="project-lifecycle-steps" aria-label="Project development stages">
            <li><span>02</span><div><small>DISCOVER</small><h4>Set the direction</h4><p>Goals, users, scope</p></div></li>
            <li><span>03</span><div><small>DESIGN</small><h4>Plan the experience</h4><p>UX, architecture, roadmap</p></div></li>
            <li><span>04</span><div><small>DEVELOP</small><h4>Build in the open</h4><p>Working software, reviews</p></div></li>
            <li><span>05</span><div><small>TEST & SECURE</small><h4>Prove it works</h4><p>Quality, access, performance</p></div></li>
            <li><span>06</span><div><small>LAUNCH & SUPPORT</small><h4>Learn and improve</h4><p>Release, feedback, growth</p></div></li>
          </ol>
        </div>
        <div className="project-flow-delivery"><span className="project-flow-delivery-dot" /><div><strong>One partner from first sketch to finished product.</strong><p>Clear communication, visible progress, and a product built for the people who will use it.</p></div><Link href="/contact">Let&apos;s build it <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="sr-learning">
        <div className="sr-learning-heading"><p className="sr-section-kicker">ITIDCS LEARNING</p><h2>Learn technology<br />at <em>your level.</em></h2><p>Build practical skills in AI, full stack development, and modern software with learning paths shaped around where you are today.</p><Link href="/enroll" className="sr-button sr-button-dark">Explore all courses <span aria-hidden="true">↗</span></Link></div>
        <div className="sr-level-grid">
          {learningLevels.map((path) => <article className={`sr-level-card sr-level-${path.color}`} key={path.level}><div className="sr-level-top"><span>{path.level}</span><span>LEARNING PATH</span></div><h3>{path.name}</h3><p>{path.text}</p><ul>{path.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><Link href="/enroll" aria-label={`Explore ${path.name} courses`}>Explore path <span aria-hidden="true">↗</span></Link></article>)}
        </div>
      </section>

      <section className="sr-final-cta"><div><p className="sr-section-kicker">YOUR IDEA HAS A NEXT STEP</p><h2>Let&apos;s make it <em>happen.</em></h2><p>Tell us about your website, app, AI idea, or learning goals. We&apos;ll help you find a clear place to begin.</p></div><div className="sr-final-actions"><Link href="/contact" className="sr-button sr-button-mint">Start a conversation <span aria-hidden="true">↗</span></Link><Link href="/enroll" className="sr-text-link">Browse courses <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
