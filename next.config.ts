/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Mengizinkan semua path gambar dari domain ini
      },
    ],
  },
};

module.exports = nextConfig;
