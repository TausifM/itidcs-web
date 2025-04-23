"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function SEOHead({
  title,
  description,
  image = "https://itidcs.vercel.app/itidcs-logo.png",
  canonical,
  type = "website",
}) {
  const pathname = usePathname();
  const baseUrl = "https://itidcs.vercel.app";
  const currentUrl = `${baseUrl}${pathname}`;
  const canonicalUrl = canonical || currentUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description: description,
            url: currentUrl,
            publisher: {
              "@type": "Organization",
              name: "ITIDCS",
              logo: {
                "@type": "ImageObject",
                url: "https://itidcs.vercel.app/itidcs-logo.png",
              },
            },
          }),
        }}
      />
    </Head>
  );
}
