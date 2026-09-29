/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
    // Keep the dev server's incremental output separate from production builds.
    // This avoids missing manifest errors if `next dev` and `next build` overlap.
    distDir: phase === "phase-development-server" ? ".next-dev" : ".next",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "tailwindcss.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "dummyimage.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "tailwindui.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "itidcs.vercel.app",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "itidcs.com",
                port: "",
                pathname: "/**",
            },
        ],
      },
});

export default nextConfig;
