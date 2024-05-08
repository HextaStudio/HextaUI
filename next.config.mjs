/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-tweet"],
  images: {
    domains: [
      "i.imgur.com",
      "images.unsplash.com",
      "source.unsplash.com",
      "picsum.photos",
    ],
  },
};

export default nextConfig;
