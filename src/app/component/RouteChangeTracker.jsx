"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag(
        "config",
        "G-K65CV0T0PH", // Replace with your GA Measurement ID
        {
          page_path: pathname,
        }
      );
    }
  }, [pathname]);

  return null;
}
