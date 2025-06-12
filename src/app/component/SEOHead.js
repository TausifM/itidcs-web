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
  const currentUrl = `${baseUrl}${pathname}`; // Construct the full URL using the base URL and pathname
  const canonicalUrl = canonical || currentUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="apple-mobile-web-app-title" content="ITIDCS – Learn Web, AI, Design & More" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.icon/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.icon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon.icon/manifest" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#da532c" />

      {/* For Whatsapp */}
      <meta property="og:site_name" content="ITIDCS" />
      <meta property="og:locale" content="en_US" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="application-name" content="ITIDCS – Learn Web, AI, Design & More" />
      <meta name="msapplication-TileImage" content="/favicon.icon/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/favicon.icon/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />   

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
                url: image,
              },
            },
          }),
        }}
      />
    </Head>
  );
}
