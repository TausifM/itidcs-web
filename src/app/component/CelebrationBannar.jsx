import Image from "next/image";
import Link from "next/link";
import careerLogo from "../../../public/career-cloud.png";
import itidcsLogo from "../../../public/logo.png";

export default function CelebrationBanner() {
  return (
    <section className="home-collaboration">
      <div className="home-collaboration-glow" aria-hidden="true" />
      <div className="home-collaboration-card">
        <div className="home-collaboration-copy">
          <p className="home-collaboration-kicker"><span /> COLLABORATION SPOTLIGHT</p>
          <h2>Different strengths.<br /><em>A shared direction.</em></h2>
          <p>Career CLOUD and ITIDCS bring technology learning and career development into the same conversation.</p>
          <Link href="/contact">Talk with our team <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="home-collaboration-brands" aria-label="Career CLOUD and ITIDCS">
          <div><Image src={careerLogo} alt="Career CLOUD" width={220} height={70} /></div>
          <span aria-hidden="true">+</span>
          <div><Image src={itidcsLogo} alt="ITIDCS" width={180} height={70} /></div>
        </div>
      </div>
    </section>
  );
}
