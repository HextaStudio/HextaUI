/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-tweet"],
  images: {
    domains: ["i.imgur.com", "images.unsplash.com"],
  },
  typescript: {
    enabled: true,
  },
};

export default nextConfig;
