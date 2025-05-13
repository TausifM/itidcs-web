"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BadgeModal() {
  const [visible, setVisible] = useState(true);

  const shareUrl = encodeURIComponent("https://itidcs.vercel.app/badge.png");
    const shareTitle = encodeURIComponent("ITIDCS PVT LTD");
    const shareDescription = encodeURIComponent("I just earned a badge from ITIDCS PVT LTD!");
    const shareImage = encodeURIComponent("https://itidcs.vercel.app/badge.png");
    const shareImageUrl = encodeURIComponent("https://itidcs.vercel.app/badge-icon.png");
    const shareImageWidth = encodeURIComponent("80");
    const shareImageHeight = encodeURIComponent("80");
    const shareImageAlt = encodeURIComponent("ITIDCS PVT LTD Badge");
    const shareImageType = encodeURIComponent("image/png");
    const shareImageSize = encodeURIComponent("80x80");
    const shareImageDescription = encodeURIComponent("ITIDCS PVT LTD Badge");
    const shareImageLink = encodeURIComponent("https://itidcs.vercel.app/badge.png");
  const shareText = encodeURIComponent("I just earned a badge from ITIDCS PVT LTD!");

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}&summary=${shareDescription}&source=${shareUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;

  const copyLink = () => {
    navigator.clipboard.writeText("https://itidcs.vercel.app");
    alert("Link copied to clipboard!");
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={() => setVisible(false)}>×</button>

        <Image src="/badge.png" alt="Badge" style={styles.badgeImage} width={80} height={80} />

        <h2 style={styles.heading}>ITIDCS PVT LTD</h2>
        <p style={styles.subHeading}>You earned the Successful Career Starter badge!</p>
        <button style={styles.signInBtn}>Sign in to claim your badge</button>

        <div style={styles.shareIcons}>
            <p style={{ marginRight: "10px" }}>Share your badge:</p>
          <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <Image src="https://www.gstatic.com/devrel-devsite/prod/ve761bca974e16662f27aa8810df6d144acde5bdbeeca0dfd50e25f86621eaa19/images/share_facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            style={{ marginRight: "10px" }}
            />
          </Link>
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image src="https://www.gstatic.com/devrel-devsite/prod/ve761bca974e16662f27aa8810df6d144acde5bdbeeca0dfd50e25f86621eaa19/images/share_linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            style={{ marginRight: "10px" }}
            />
          </Link>
          <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
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
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    width: "360px",
    margin: "0 auto",
    maxWidth: "90%",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer"
  },
  badgeImage: {
    borderRadius: "50%",
    margin: "0 auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    display: "block",
    width: "80px",
    // marginBottom: "20px"
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0"
  },
  subHeading: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px"
  },
  signInBtn: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    marginBottom: "20px"
  },
  shareIcons: {
    display: "flex",
    justifyContent: "center",
    // gap: "15px",
    // fontSize: "24px"
  }
};
