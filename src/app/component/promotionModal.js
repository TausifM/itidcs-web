"use client";

import { useEffect } from "react";
import Link from "next/link";

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
            <span className="promo-modal-pass-label">ITIDCS / SERVICES</span>
            <strong>WEB<br />AI<br />APPS</strong>
            <span className="promo-modal-pass-footer">DESIGN | DEVELOPMENT | LEARNING</span>
          </div>
          <span className="promo-modal-float-chip promo-modal-float-chip-one">Digital products</span>
          <span className="promo-modal-float-chip promo-modal-float-chip-two">AI + mobile</span>
        </div>

        <div className="promo-modal-content">
          <div className="promo-modal-header">
            <div>
              <p className="promo-modal-kicker"><span /> WHAT ITIDCS DOES</p>
              <h2 id="promo-modal-title">Ideas into<br /><em>real products.</em></h2>
            </div>
            <button className="promo-modal-close" type="button" onClick={onClose} aria-label="Close services overview"><span aria-hidden="true">Ã—</span></button>
          </div>
          <p id="promo-modal-description" className="promo-modal-intro">We design and build websites, mobile apps, and useful AI experiences, and teach practical technology skills.</p>
          <div className="promo-modal-meta" aria-label="Our services">
            <span><strong>Web</strong> platforms</span><span><strong>Mobile</strong> apps</span><span><strong>AI</strong> solutions</span>
          </div>
          <div className="promo-modal-benefits"><span>Custom websites and software</span><span>AI apps and automation</span><span>Practical learning paths</span></div>
          <div className="promo-modal-actions">
            <Link className="promo-modal-primary" href="/services">Explore our services <span aria-hidden="true">&#8599;</span></Link>
            <Link className="promo-modal-secondary" href="/contact">Discuss your idea</Link>
          </div>
          <p className="promo-modal-note">From the first conversation through launch and learning.</p>
        </div>
      </section>
    </div>
  );
}
