"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./brandmark";

const primaryLinks = [
  ["Home", "/", "home"],
  ["Services", "/services", "services"],
  ["Courses", "/enroll", "courses"],
  ["Careers", "/jobs", "careers"],
  ["Journal", "/blogs", "journal"],
  ["About", "/about", "about"],
];

const moreLinks = [
  ["Contact", "/contact"],
  ["Support", "/support"],
  ["Our values", "/values"],
];

function NavIcon({ name }) {
  const shared = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    services: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M8 9h8M8 13h5" /></>,
    courses: <><path d="m3 8 9-5 9 5-9 5-9-5Z" /><path d="M6 10v5c2 3 10 3 12 0v-5M21 8v7" /></>,
    careers: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    journal: <><path d="M6 4h12a2 2 0 0 1 2 2v15H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="mobile-nav-icon" {...shared}>{paths[name]}</svg>;
}

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <nav aria-label="Global" className="site-nav">
          <Link href="/" className="site-brand" aria-label="ITIDCS home"><BrandMark /></Link>
          <div className="site-nav-links">
            {primaryLinks.map(([label, href]) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>)}
          </div>
          <div className="site-nav-actions">
            <Link href="/contact" className="nav-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </nav>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {primaryLinks.slice(0, 4).map(([label, href, icon]) => (
          <Link key={href} href={href} className={`mobile-nav-link${isActive(href) ? " is-active" : ""}`} aria-current={isActive(href) ? "page" : undefined}>
            <NavIcon name={icon} /><span>{label}</span>
          </Link>
        ))}
        <button type="button" className={`mobile-nav-link${moreOpen ? " is-active" : ""}`} aria-expanded={moreOpen} onClick={() => setMoreOpen((open) => !open)}>
          <NavIcon name="more" /><span>More</span>
        </button>
      </nav>

      {moreOpen && (
        <div className="mobile-more-panel" aria-label="More pages">
          <div className="mobile-more-heading"><span>Explore ITIDCS</span><button type="button" aria-label="Close menu" onClick={() => setMoreOpen(false)}>×</button></div>
          {[["Journal", "/blogs"], ["About", "/about"], ...moreLinks].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMoreOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>
          ))}
        </div>
      )}
    </>
  );
}
