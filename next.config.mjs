/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-tweet"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
