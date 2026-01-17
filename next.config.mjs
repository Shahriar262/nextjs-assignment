/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // Cloudinary hostname allow kora holo
  },
};

export default nextConfig;
