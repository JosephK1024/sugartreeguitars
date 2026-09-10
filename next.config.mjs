/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The circle-of-fifths tool is a self-contained static page that owns its own
  // markup and CSS; serve it at a clean URL rather than framing it in a route.
  async rewrites() {
    return [
      {
        source: "/circle-of-fifths",
        destination: "/tools/circle-of-fifths/index.html",
      },
    ];
  },
};

export default nextConfig;
