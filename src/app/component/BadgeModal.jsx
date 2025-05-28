"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BadgeModal({ show, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }
  }, []);

  if (!show) return null;

  const pageUrl = encodeURIComponent("https://itidcs.vercel.app/badge");
  const text = encodeURIComponent(
    "I just earned the Successful Career Starter badge from ITIDCS PVT LTD!"
  );

  const facebookLink = isMobile
    ? `fb://facewebmodal/f?href=https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
    : `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

  const linkedinLink = isMobile
    ? `linkedin://shareArticle?mini=true&url=${pageUrl}&title=${text}`
    : `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

  const twitterLink = isMobile
    ? `twitter://post?message=${text}%20${pageUrl}`
    : `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`;

  const copyLink = () => {
    navigator.clipboard.writeText("https://itidcs.vercel.app/badge");
    alert("Link copied to clipboard!");
  };

  return (
     <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <Image src="/badge.png" alt="Badge" width={80} height={80} style={{ display: "block", margin: "0 auto" }} />

         <h2 style={styles.heading}>ITIDCS PVT LTD</h2>
        <p style={styles.subHeading}>You earned the Successful Career Starter badge!</p>
        <button style={styles.signInBtn}>Sign in to claim your badge</button>

        <div style={styles.shareIcons}>
            <p style={{ marginRight: "10px" }}>Share your badge:</p>
          <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
          <Image src="https://www.gstatic.com/devrel-devsite/prod/ve761bca974e16662f27aa8810df6d144acde5bdbeeca0dfd50e25f86621eaa19/images/share_facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            style={{ marginRight: "10px" }}
            />
          </Link>
          <Link href={linkedinLink}
          target="_blank" rel="noopener noreferrer">
          <Image src="https://www.gstatic.com/devrel-devsite/prod/ve761bca974e16662f27aa8810df6d144acde5bdbeeca0dfd50e25f86621eaa19/images/share_linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            style={{ marginRight: "10px" }}
            />
          </Link>
          <Link href={twitterLink} target="_blank" rel="noopener noreferrer">
          <Image src="https://www.gstatic.com/devrel-devsite/prod/ve761bca974e16662f27aa8810df6d144acde5bdbeeca0dfd50e25f86621eaa19/images/share_twitter.svg"
            alt="Twitter"
            width={24}
            height={24}
            style={{ marginRight: "10px" }}
            />
          </Link>
          <button onClick={copyLink} className="bg-gray-200">
         🔗
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "24px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "16px",
    marginTop: "10px",
  },
  signInBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  },
  shareIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"
  }
};