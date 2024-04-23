/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-tweet"],
  images: {
    domains: ["i.imgur.com", "images.unsplash.com"],
  },
};

export default nextConfig;
