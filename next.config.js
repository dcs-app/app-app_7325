/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
  },
  // Output as a standalone build (useful for Vercel and PWA assets)
  output: 'standalone',
};

module.exports = nextConfig;