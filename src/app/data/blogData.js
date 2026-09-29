export const blogPosts = [
  {
    slug: "2026-ai-web-builders-resource-guide",
    title: "2026 Builder's Guide: 25 trusted links for AI and web projects",
    description: "A practical reading list for teams planning AI features, agent workflows, and responsive web products, with 25 links to standards and first-party documentation.",
    category: "Builder's guide",
    image: "/images/aws-multi-agent.png",
    date: "2026-09-29",
    content: `<p>Good product work starts with a clear problem and reliable references. This guide collects 25 primary resources for people planning AI features, learning modern web development, and improving product quality. The links go to standards bodies, platform documentation, and the teams responsible for the tools.</p><h2>1. Understand the AI landscape</h2><p>Use strategy reports to spot areas worth investigating, then use risk frameworks to make your own decisions. Forecasts describe possibilities; they are not a substitute for testing a workflow with your users.</p><ul><li><a href="https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/ai-business-trends-report-2026/" target="_blank" rel="noreferrer">Google Cloud: AI agent trends for 2026</a> — business use cases and workforce preparation.</li><li><a href="https://www.gartner.com/en/articles/top-technology-trends-2026" target="_blank" rel="noreferrer">Gartner: strategic technology trends for 2026</a> — multiagent systems, AI security, and related topics.</li><li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a> — a structure for identifying and managing AI risks.</li><li><a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" target="_blank" rel="noreferrer">NIST Generative AI Profile</a> — generative AI risks and suggested risk-management actions.</li><li><a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf" target="_blank" rel="noreferrer">OWASP Top 10 for LLM Applications</a> — security risks to consider when building LLM-powered products.</li></ul><h2>2. Design and evaluate AI features</h2><p>Keep the first release narrow. Define which information a feature can use, what actions it can take, and when it should hand control to a person. Test those boundaries with representative examples before launch.</p><ul><li><a href="https://platform.openai.com/docs/quickstart/make-your-first-api-request" target="_blank" rel="noreferrer">OpenAI API quickstart</a> — a first API request and setup overview.</li><li><a href="https://developers.openai.com/api/docs/guides/agents" target="_blank" rel="noreferrer">OpenAI Agents guide</a> — concepts for building agent workflows.</li><li><a href="https://developers.openai.com/api/docs/guides/function-calling" target="_blank" rel="noreferrer">OpenAI function calling</a> — connect models to tools through structured calls.</li><li><a href="https://developers.openai.com/api/docs/guides/evals" target="_blank" rel="noreferrer">OpenAI evaluation guide</a> — assess outputs against defined criteria.</li><li><a href="https://developers.openai.com/api/docs/guides/safety-best-practices" target="_blank" rel="noreferrer">OpenAI safety best practices</a> — safety guidance for application developers.</li><li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use.html" target="_blank" rel="noreferrer">Amazon Bedrock Guardrails use cases</a> — apply safeguards to inference, agents, and knowledge-base queries.</li><li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy.html" target="_blank" rel="noreferrer">Amazon Bedrock AgentCore policies</a> — control agent access to tools and actions.</li><li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-security-best-practices.html" target="_blank" rel="noreferrer">AgentCore runtime security</a> — security practices for deployed agent runtimes.</li><li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html" target="_blank" rel="noreferrer">AgentCore release notes</a> — check current capabilities and changes before choosing an implementation.</li></ul><h2>3. Build the web experience</h2><p>A strong AI feature still needs a fast, understandable interface. Start with the platform fundamentals, make the layout work at narrow widths, and optimize the assets users actually download.</p><ul><li><a href="https://react.dev/learn" target="_blank" rel="noreferrer">React Learn</a> — components, state, events, and everyday React patterns.</li><li><a href="https://nextjs.org/docs/app" target="_blank" rel="noreferrer">Next.js App Router documentation</a> — routing, layouts, rendering, and data fetching.</li><li><a href="https://nextjs.org/docs/app/getting-started/images" target="_blank" rel="noreferrer">Next.js image optimization</a> — responsive image sizing and image delivery.</li><li><a href="https://nextjs.org/blog" target="_blank" rel="noreferrer">Next.js official blog</a> — release notes and framework updates.</li><li><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" target="_blank" rel="noreferrer">MDN responsive design</a> — adapt page layouts across screen sizes.</li></ul><h2>4. Improve security, accessibility, and performance</h2><p>Quality is part of the product, not a final polish pass. Review security and accessibility during implementation, then measure performance with both lab checks and real-user data.</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/Performance" target="_blank" rel="noreferrer">MDN Web Performance</a> — browser concepts, measurement, and optimization guidance.</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/Security" target="_blank" rel="noreferrer">MDN Web Security</a> — web threats and defense fundamentals.</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank" rel="noreferrer">MDN Accessibility</a> — practical accessibility concepts for web developers.</li><li><a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer">W3C Web Content Accessibility Guidelines 2.2</a> — the current W3C recommendation for accessible content.</li><li><a href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer">web.dev Web Vitals</a> — user-focused metrics for loading, responsiveness, and visual stability.</li><li><a href="https://web.dev/articles/vitals-field-measurement-best-practices" target="_blank" rel="noreferrer">web.dev field measurement practices</a> — collect real-user performance data without distorting it.</li></ul><h2>Turn reading into a small experiment</h2><p>Choose one user problem, write down the outcome you want to improve, and prototype the smallest useful change. For AI, include a human handoff and a test set. For web performance, record a baseline before optimization. For accessibility, try the main flow with a keyboard and assistive technology. Keep the source links close to the implementation so the team can revisit assumptions as tools and standards change.</p><p>This list is a starting point, not an endorsement of a particular vendor or product. Review the linked documentation for its latest requirements and suitability for your project.</p>`,
  },
  {
    slug: "ai-agents-practical-workflows-2026",
    title: "AI agents in 2026: start with a workflow, not a demo",
    description: "A practical guide to choosing bounded agent tasks, adding human checkpoints, and measuring whether automation actually helps.",
    category: "Applied AI",
    image: "/images/aws-ai-architecture.png",
    date: "2026-09-29",
    content: `<p>AI agents are moving into conversations about real business workflows. Google Cloud's 2026 trends report describes agents planning multi-step work and collaborating across processes. Gartner also includes multiagent systems among its strategic technology trends for 2026. Those reports point to opportunity, but they do not mean every task should be handed to an autonomous system.</p><h2>Pick one bounded job</h2><p>Start with a frequent task that has a clear beginning, a clear finish, and a person who can review the result. Examples include routing a support request, summarizing a document set, or preparing a draft response from approved information. Keep payments, account changes, and other high-impact actions behind explicit approval.</p><h2>Design the handoff before the prompt</h2><p>Map what information the agent can see, which tools it may use, and when it must stop and ask for help. Give it a narrow permission set. Record its inputs and actions, and make it easy for a person to correct a result or take over.</p><h2>Measure useful outcomes</h2><p>Track task completion, accuracy, time saved, escalation rate, and the cost of errors. Compare those measures with the process you already use. If the agent cannot improve a meaningful outcome while meeting your quality bar, simplify the workflow or keep the task with a person.</p><p>Our recommendation: treat agents as software features with clear limits, testing, and ongoing ownership. See <a href="https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/ai-business-trends-report-2026/" target="_blank" rel="noreferrer">Google Cloud's 2026 AI agent trends</a> and <a href="https://www.gartner.com/en/articles/top-technology-trends-2026" target="_blank" rel="noreferrer">Gartner's 2026 technology trends</a> for the source material.</p>`,
  },
  {
    slug: "building-trustworthy-ai-features-2026",
    title: "Building AI features people can trust",
    description: "Ground answers in approved information, protect user data, and give people a clear way to verify or escalate an AI response.",
    category: "AI product design",
    image: "/images/aws-knowledge-rag.png",
    date: "2026-08-18",
    content: `<p>A useful AI feature is more than a model connected to a chat box. People need to understand what information it uses, what it can do, and when its answer needs a human review.</p><h2>Make the source visible</h2><p>For assistants that answer from company documents, retrieve only from approved sources and show links or references beside the answer. A visible source gives users a way to check whether the response fits their question and the current policy.</p><h2>Keep access rules intact</h2><p>Apply the same permissions to retrieved information that users already have in the product. Avoid sending unnecessary personal or confidential data to model services. Define how long prompts, responses, and logs are retained.</p><h2>Make uncertainty actionable</h2><p>Test common questions, ambiguous requests, stale documents, and attempts to retrieve restricted information. When the system lacks enough evidence, it should say so and offer a useful next step, such as contacting a team member.</p><p>These product decisions turn AI from a novelty into a feature people can evaluate and use responsibly. For a wider 2026 view, read <a href="https://www.gartner.com/en/articles/top-technology-trends-2026" target="_blank" rel="noreferrer">Gartner's technology trends</a>, which includes AI security, digital provenance, and domain-specific models.</p>`,
  },
  {
    slug: "nextjs-16-3-instant-navigation-2026",
    title: "Next.js 16.3: what instant navigation means for product teams",
    description: "A plain-language look at the Next.js 16.3 navigation updates and how to decide whether they matter for your app.",
    category: "Web development",
    image: "/images/software-development.jpg",
    date: "2026-08-03",
    content: `<p>Next.js 16.3, announced on August 3, 2026, introduced Instant Navigations: tools intended to make route changes feel immediate while preserving the framework's server-rendering model. The release also highlighted development memory reductions and faster builds and rendering.</p><h2>What changes for users?</h2><p>Navigation can feel faster when the next screen is ready sooner or useful parts of it appear while the rest loads. That can help dashboards, catalogs, and other products where people move between related views. The improvement depends on the route, data, and how the feature is configured.</p><h2>What should teams do?</h2><p>First identify the routes that feel slow and measure them under realistic network and data conditions. Then check whether the new navigation features fit those routes. Keep pending, error, and back-button states clear, and test on the devices and connections your customers use.</p><h2>Measure before and after</h2><p>Compare route response time, loading feedback, and task completion. A framework feature is valuable when it improves the experience without adding confusing transitions or unnecessary work for the team.</p><p>Read the <a href="https://nextjs.org/blog" target="_blank" rel="noreferrer">official Next.js release notes</a> for the full 16.3 announcement and current guidance.</p>`,
  },
  {
    slug: "importance-of-it-education",
    title: "The Importance of IT Education in 2025",
    description:
      "How technology courses are shaping the future of careers and innovation.",
    image: "/images/digital-workspace.jpg",
    date: "2025-04-12",
    content:
      "<h2>Introduction</h2><p>Technology is evolving faster than ever. At ITIDCS, we believe the foundation of the future is solid IT education.</p><h2>Main Body</h2><p>With demand for developers, data scientists, and cybersecurity experts skyrocketing, our courses equip students and professionals with real-world skills.</p><ul><li>Industry-focused curriculum</li><li>Hands-on projects</li><li>Expert instructors</li></ul><h2>Conclusion</h2><p>Investing in IT education today prepares individuals for the challenges and opportunities of tomorrow's digital landscape.</p>",
  },
  {
    slug: "how-apps-transform-businesses",
    title: "How Mobile Apps are Transforming Businesses",
    description:
      "Explore how custom mobile apps enhance customer experience and productivity.",
    image: "/images/technology-work.jpg",
    date: "2025-03-20",
    content:
      "<p>Businesses today rely heavily on mobile apps to connect with users. From real-time updates to instant support, apps are changing the game.</p><p>Our team at ITIDCS builds apps with Flutter, React Native, and custom APIs that deliver performance and usability.</p>",
  },
  {
    slug: "cybersecurity-2025-threats",
    title: "Cybersecurity in 2025: Navigating the New Threat Landscape",
    description:
      "Understanding the evolving cybersecurity challenges and how to mitigate them.",
    image: "/images/software-development.jpg",
    date: "2025-04-25",
    content:
      "<p>With the rise of sophisticated cyber-attacks targeting major retailers, businesses must prioritize cybersecurity.</p><p>Implementing robust security measures and staying informed about potential threats are crucial for safeguarding data and maintaining customer trust.</p>",
  },
  {
    slug: "ai-fullstack-development",
    title: "The Rise of AI in Full-Stack Development",
    description:
      "How artificial intelligence is reshaping full-stack development practices.",
    image: "/images/software-development.jpg",
    date: "2025-04-15",
    content:
      "<p>AI integration in full-stack development streamlines coding, testing, and deployment processes.</p><p>Developers can leverage AI tools to enhance productivity, though it's essential to balance automation with human oversight to ensure quality and innovation.</p>",
  },
  {
    slug: "data-science-decision-making",
    title: "Data Science: The Backbone of Modern Decision-Making",
    description:
      "Exploring how data science drives strategic decisions across industries.",
    image: "/images/digital-workspace.jpg",
    date: "2025-04-10",
    content:
      "<p>Data science enables organizations to extract meaningful insights from vast datasets.</p><p>As data continues to grow exponentially, skilled data scientists are essential for interpreting and applying this information effectively.</p>",
  },
  {
    slug: "programming-career-pros-cons",
    title: "Pros and Cons of a Career in Programming",
    description:
      "Weighing the benefits and challenges of pursuing programming as a profession.",
    image: "/images/team-collaboration.jpg",
    date: "2025-03-30",
    content:
      "<p>Programming offers high job satisfaction, competitive salaries, and creative problem-solving opportunities.</p><p>However, it also demands continuous learning and can involve long hours, which may lead to burnout if not managed properly.</p>",
  },
  {
    slug: "fullstack-development-importance",
    title: "Why Full-Stack Development is Crucial in 2025",
    description:
      "Understanding the significance of full-stack development in today's tech landscape.",
    image: "/images/technology-work.jpg",
    date: "2025-04-05",
    content:
      "<p>Full-stack developers are proficient in both frontend and backend technologies.</p><p>Their versatility allows for better collaboration and faster project completion, making them highly sought after in the industry.</p>",
  },
  {
    slug: "iot-agriculture-impact",
    title: "The Impact of IoT on Agriculture",
    description:
      "How Internet of Things technology is revolutionizing farming practices.",
    image: "/images/software-development.jpg",
    date: "2025-04-20",
    content:
      "<p>Farmers are adopting IoT devices to monitor soil, crops, and weather.</p><p>This data-driven approach enhances efficiency, reduces waste, and promotes sustainable agricultural practices.</p>",
  },
  {
    slug: "data-science-careers-future",
    title: "The Future of Data Science Careers",
    description:
      "Exploring the evolving landscape of data science professions.",
    image: "/images/team-workspace.jpg",
    date: "2025-04-18",
    content:
      "<p>AI is shifting data science roles toward more strategic and analytical functions.</p><p>Professionals must acquire skills in AI operations and ethical data management to stay relevant.</p>",
  },
  {
    slug: "coding-vs-other-professions",
    title: "Coding vs. Other Professions: A Comparative Analysis",
    description:
      "Analyzing the advantages of coding careers compared to other fields.",
    image: "/images/creative-design.jpg",
    date: "2025-04-22",
    content:
      "<p>Coding offers flexibility, high earning potential, and remote opportunities.</p><p>While other professions provide stability, tech's rapid growth makes coding an attractive career path.</p>",
  },
];
