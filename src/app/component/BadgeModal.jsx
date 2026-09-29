"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const badgeUrl = "https://itidcs.vercel.app/badge";

function ShareIcon({ name }) {
  const paths = {
    Facebook: <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" fill="currentColor" />,
    LinkedIn: <><path d="M6.7 8.6H3.4V20h3.3V8.6ZM5.1 7.1a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM20.6 13.4c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.8V8.6H9.6V20h3.3v-5.6c0-1.5.3-3 2.2-3s2 1.8 2 3.1V20h3.3l.2-6.6Z" fill="currentColor" /></>,
    X: <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3L12 14.8 6.6 21H3.4l7.3-8.4L3 3h6.5l4.5 5.8L18.9 3Zm-1.1 16h1.7L8.5 4.9H6.7L17.8 19Z" fill="currentColor" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function BadgeModal({ show, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!show) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => { if (event.key === "Escape") onClose?.(); };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  const pageUrl = encodeURIComponent(badgeUrl);
  const shareText = encodeURIComponent("I just earned the Successful Career Starter badge from ITIDCS PVT LTD!");
  const shareLinks = [
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}` },
    { name: "X", href: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(badgeUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="badge-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose?.(); }}>
      <section className="badge-modal" role="dialog" aria-modal="true" aria-labelledby="badge-modal-title" aria-describedby="badge-modal-description">
        <button className="badge-modal-close" type="button" onClick={onClose} aria-label="Close badge dialog">×</button>

        <div className="badge-modal-art" aria-hidden="true">
          <span className="badge-modal-orbit badge-modal-orbit-a" />
          <span className="badge-modal-orbit badge-modal-orbit-b" />
          <span className="badge-modal-spark badge-modal-spark-a" />
          <span className="badge-modal-spark badge-modal-spark-b" />
          <div className="badge-modal-medallion">
            <div className="badge-modal-medallion-inner">
              <Image src="/badge.png" alt="" width={180} height={180} priority />
            </div>
          </div>
          <span className="badge-modal-art-caption">CAREER STARTER · VERIFIED ACHIEVEMENT</span>
        </div>

        <div className="badge-modal-content">
          <p className="badge-modal-kicker"><span /> YOUR MILESTONE</p>
          <h2 id="badge-modal-title">A strong start<br />deserves <em>recognition.</em></h2>
          <p id="badge-modal-description" className="badge-modal-description">You earned the Successful Career Starter badge. Add it to your profile and share your achievement with your network.</p>

          <Link href="/signup" className="badge-modal-claim">Sign in to claim your badge <span aria-hidden="true">↗</span></Link>

          <div className="badge-modal-share">
            <div><strong>Share your achievement</strong><span>Let your network celebrate with you.</span></div>
            <div className="badge-modal-share-actions">
              {shareLinks.map(({ name, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name}`} title={`Share on ${name}`} className={`badge-modal-social badge-modal-social-${name.toLowerCase()}`}>
                  <ShareIcon name={name} />
                </a>
              ))}
              <button className="badge-modal-copy" type="button" onClick={copyLink} aria-label="Copy badge link" title="Copy badge link">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9.5 14.5 14.5 9.5M8 16H6.5a4 4 0 0 1 0-8H10m4 0h3.5a4 4 0 0 1 0 8H14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
              </button>
              <span className="badge-modal-copy-status" aria-live="polite">{copied ? "Link copied" : ""}</span>
            </div>
          </div>

          <p className="badge-modal-brand">ITIDCS <span>·</span> Technology with purpose</p>
        </div>
      </section>
    </div>
  );
}
