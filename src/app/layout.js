import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import NewsLetter from "./component/newsletter";

const inter = Inter({ subsets: ["latin"] });

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
    "coding",
    "programming",
    "ai",
  ],
  authors: [
    { name: "ITIDCS Team", url: "https://itidcs.vercel.app/leadership" },
  ],
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
        url: "https://itidcs.com/og-image.jpg", // replace with actual image URL
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
    images: ["https://itidcs.com/og-image.jpg"], // replace with actual image URL
    site: "@itidcs", // replace with your actual Twitter handle if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app">
          <div className="afg">
            <div className="aoc">
              <Header />
              {children}
              <NewsLetter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
