import Link from "next/link";
import SEOHead from "../component/SEOHead";

const supportEmail = "innovativeitdcorporation@gmail.com";
const supportPhone = "+91 7709382305";
const officeAddress = "1st Floor, Plot No. 2, Collaborative Workspace with Career Cloud, Kabir Nagar Square, Nandanwan Main Rd, in front of Maruti Arcade, near Dutta Mandir, Nandanwan, Nagpur, Maharashtra 440009";
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

export default function SupportPage() {
  return (
    <main className="support-page-rebuild">
      <SEOHead title="Support | ITIDCS" description="Contact ITIDCS for help with courses, digital products, and service enquiries. Find our email, phone, office address, and support form." canonical="https://itidcs.vercel.app/support" />
      <div className="support-shell">
        <section className="support-heading">
          <div>
            <p className="support-kicker"><span /> HERE TO HELP</p>
            <h1>How can we<br /><em>help you?</em></h1>
          </div>
          <p>Questions about a course, a digital product, or a project? Reach our team using the option that works best for you.</p>
        </section>

        <section className="support-contact-grid" aria-label="ITIDCS support contact details">
          <article className="support-info-card">
            <span className="support-card-icon" aria-hidden="true">@</span>
            <p className="support-card-label">EMAIL SUPPORT</p>
            <h2>Send us a note</h2>
            <p>For course questions, technical help, or general enquiries.</p>
            <a href={`mailto:${supportEmail}`}>{supportEmail}<span aria-hidden="true">↗</span></a>
          </article>
          <article className="support-info-card">
            <span className="support-card-icon support-card-icon-green" aria-hidden="true">☎</span>
            <p className="support-card-label">CALL OUR TEAM</p>
            <h2>Speak with us</h2>
            <p>Monday to Friday, 10:00 AM–6:00 PM IST.</p>
            <a href="tel:+919975767561">{supportPhone}<span aria-hidden="true">↗</span></a>
          </article>
          <article className="support-info-card support-address-card">
            <span className="support-card-icon support-card-icon-orange" aria-hidden="true">⌖</span>
            <p className="support-card-label">VISIT ITIDCS</p>
            <h2>Our office</h2>
            <p>{officeAddress}</p>
            <a href={mapsLink} target="_blank" rel="noreferrer">Open in Google Maps<span aria-hidden="true">↗</span></a>
          </article>
        </section>

        <section className="support-lower-grid">
          <div className="support-form-card">
            <p className="support-kicker">SEND A MESSAGE</p>
            <h2>Tell us what you need.</h2>
            <p className="support-form-intro">Share a few details and our team will get back to you by email.</p>
            <form action={`https://formsubmit.co/${supportEmail}`} method="POST" className="support-form">
              <input type="hidden" name="_subject" value="New support request from ITIDCS website" />
              <label htmlFor="support-name">Your name</label>
              <input id="support-name" name="name" type="text" autoComplete="name" placeholder="Enter your name" required />
              <label htmlFor="support-email">Email address</label>
              <input id="support-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <label htmlFor="support-topic">What can we help with?</label>
              <select id="support-topic" name="topic" defaultValue="" required>
                <option value="" disabled>Select a topic</option>
                <option>Course or learning support</option>
                <option>Website or app support</option>
                <option>Project enquiry</option>
                <option>Something else</option>
              </select>
              <label htmlFor="support-message">Message</label>
              <textarea id="support-message" name="message" rows={5} placeholder="Add the details that will help us assist you" required />
              <button type="submit">Send support request <span aria-hidden="true">↗</span></button>
              <small>We aim to reply within two business days.</small>
            </form>
          </div>

          <aside className="support-faq-card">
            <p className="support-kicker">QUICK ANSWERS</p>
            <h2>Before you reach out</h2>
            <details open><summary>When should I expect a reply?</summary><p>We aim to respond within two business days. Include the email address linked to your course or service so we can find the right details.</p></details>
            <details><summary>What should I include in a technical request?</summary><p>Tell us what you were trying to do, what happened, and which device or browser you used. Please do not send passwords or payment card details.</p></details>
            <details><summary>Can I ask about a new project here?</summary><p>Yes. Choose “Project enquiry” in the form or <Link href="/contact">contact our team</Link> to talk about a website, mobile app, or AI solution.</p></details>
            <div className="support-faq-note"><span aria-hidden="true">i</span><p>For urgent account or payment concerns, email us directly so we can route your request to the right team.</p></div>
          </aside>
        </section>
      </div>
    </main>
  );
}
