"use client";

import { useEffect } from "react";
import Link from "next/link";

const enrollmentUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform";

export default function PromoModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return undefined;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => { if (event.key === "Escape") onClose?.(); };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="promo-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose?.();
    }}>
      <section className="promo-modal" role="dialog" aria-modal="true" aria-labelledby="promo-modal-title" aria-describedby="promo-modal-description">
        <div className="promo-modal-art" aria-hidden="true">
          <div className="promo-modal-glow promo-modal-glow-one" />
          <div className="promo-modal-glow promo-modal-glow-two" />
          <div className="promo-modal-orbit promo-modal-orbit-one" />
          <div className="promo-modal-orbit promo-modal-orbit-two" />
          <div className="promo-modal-pass">
            <span className="promo-modal-pass-mark">IT</span>
            <span className="promo-modal-pass-label">ITIDCS / 2026</span>
            <strong>WEB<br />LAB</strong>
            <span className="promo-modal-pass-footer">PROJECT BASED · LIVE MENTORSHIP</span>
          </div>
          <span className="promo-modal-float-chip promo-modal-float-chip-one">React + JS</span>
          <span className="promo-modal-float-chip promo-modal-float-chip-two">01 / 04</span>
        </div>

        <div className="promo-modal-content">
          <div className="promo-modal-header">
            <div>
              <p className="promo-modal-kicker"><span /> Limited cohort · Enrolling now</p>
              <h2 id="promo-modal-title">Build your next<br /><em>level.</em></h2>
            </div>
            <button className="promo-modal-close" type="button" onClick={onClose} aria-label="Close enrollment offer"><span aria-hidden="true">×</span></button>
          </div>
          <p id="promo-modal-description" className="promo-modal-intro">A practical web development lab for people ready to turn ideas into polished, deployable products.</p>
          <div className="promo-modal-meta" aria-label="Course details">
            <span><strong>06</strong> weeks</span><span><strong>Live</strong> mentor-led</span><span><strong>01</strong> portfolio project</span>
          </div>
          <div className="promo-modal-benefits"><span>HTML · CSS · JavaScript</span><span>React · Git · Deploy</span><span>Certificate included</span></div>
          <div className="promo-modal-actions">
            <Link className="promo-modal-primary" href={enrollmentUrl} target="_blank" rel="noreferrer">Reserve your seat <span aria-hidden="true">↗</span></Link>
            <button className="promo-modal-secondary" type="button" onClick={onClose}>Maybe later</button>
          </div>
          <p className="promo-modal-note">Small cohort · Personal feedback · Beginner friendly</p>
        </div>
      </section>
    </div>
  );
}
