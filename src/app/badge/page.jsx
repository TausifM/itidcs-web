// pages/badge.jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function BadgePage() {
  return (
    <>
      <Head>
        <title>I earned a badge from ITIDCS!</title>

        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itidcs.vercel.app/badge" />
        <meta
          property="og:title"
          content="I earned the Successful Career Starter badge!"
        />
        <meta
          property="og:description"
          content="Check out the badge I just earned from ITIDCS PVT LTD."
        />
        <meta
          property="og:image"
          content="https://itidcs.vercel.app/badge.png"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://itidcs.vercel.app/badge" />
        <meta
          name="twitter:title"
          content="I earned the Successful Career Starter badge!"
        />
        <meta
          name="twitter:description"
          content="Check out the badge I just earned from ITIDCS PVT LTD."
        />
        <meta
          name="twitter:image"
          content="https://itidcs.vercel.app/badge.png"
        />
      </Head>

      <main style={styles.main}>
        <div style={styles.card}>
          <h1 style={styles.title}>🏆 You’ve Earned Your Badge!</h1>
          <p style={styles.subtitle}>
            Congratulations on completing the Successful Career Starter course with ITIDCS PVT LTD! Your dedication and hard work have paid off, and you now hold a badge that represents your achievement.
            <br />
            <br />
          </p>
          <Image
            width={200}
            height={200}
            src="https://itidcs.vercel.app/badge.png"
            alt="Successful Career Starter badge"
            style={styles.badge}
          />
          <p style={styles.description}>
            Show off your achievement by sharing it on social media.
          </p>
          <Link
            href="https://itidcs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Visit ITIDCS Website →
          </Link>
        </div>
      </main>
    </>
  );
}
const styles = {
  main: {
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "3rem 2rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#111",
  },
  subtitle: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "1rem",
  },
  badge: {
    display: "block",
    margin: "0 auto",
    objectFit: "cover",
    borderRadius: "8%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "1.5rem",
    
  },
  description: {
    marginTop: "1rem",
    fontSize: "15px",
    color: "#555",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
    buttonHover: {
        backgroundColor: "#005bb5",
    },
}
