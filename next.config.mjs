/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-tweet"],
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `@use "sass:math";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "placeholder.co",
      },
    ],
  },
};

export default nextConfig;
