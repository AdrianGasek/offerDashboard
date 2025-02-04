import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],  // Dodaj domenę z której pobierasz obrazki
  },
};

export default nextConfig;
