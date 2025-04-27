import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import NewsLetter from "./component/newsletter";
import SEOHead from "./component/SEOHead";

const inter = Inter({ subsets: ["latin"], display: 'swap' });
export const metadata = {
  title: "ITIDCS - Innovate the Future of Digital Solutions",
  description:
    "ITIDCS is a cutting-edge technology company delivering innovative IT solutions, custom software development, cloud services, and digital transformation strategies to empower businesses worldwide.",
  keywords: [
    "ITIDCS",
    "chatgpt",
    "IT solutions",
    "custom software development",
    "digital transformation",
    "cloud services",
    "technology consulting",
    "innovative IT company",
    "fullstack",
    "full stack",
    "data science",
    "coding",
    "programming",
    "ai",
  ],
  authors: [
    { name: "ITIDCS", url: "https://itidcs.vercel.app/contact" },
  ],
  icons: {
    icon: "/favicon.icon/favicon.ico",
    apple: "/favicon.icon/apple-icon.png"
  },
  creator: "ITIDCS",
  publisher: "ITIDCS",
  openGraph: {
    title: "ITIDCS - Innovate the Future of Digital Solutions",
    description:
      "Discover how ITIDCS drives digital innovation through software development, cloud infrastructure, and IT consulting services.",
    url: "https://itidcs.vercel.app",
    siteName: "ITIDCS",
    images: [
      {
        url: "https://itidcs.vercel.app/itidcs-logo.png", 
        width: 1200,
        height: 630,
        alt: "ITIDCS - Innovate the Future",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIDCS - Innovate the Future of Digital Solutions",
    description:
      "Explore ITIDCS services in IT consulting, cloud computing, and custom software development.",
    images: ["https://itidcs.vercel.app/itidcs-logo.png"],
    site: "@itidcs", // replace with your actual Twitter handle if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <SEOHead
      title={metadata.title}
      description={metadata.description}
      image={metadata.openGraph.images[0].url}
      canonical={metadata.openGraph.url}
      type={metadata.openGraph.type}
    />
    <body className={inter.className}>
      <Header />
      <div id="app" style={{ marginTop: '40px' }}> {/* Ensure the app has enough space below the header */}
        {children}
      </div>
      <NewsLetter />
    </body>
  </html>
  );
}
