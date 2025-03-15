import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
    // Atau, jika hanya ingin menyederhanakan:
    // domains: ["utfs.io"]
  },
};

export default nextConfig;
