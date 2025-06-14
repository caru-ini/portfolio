/** @type {import('next').NextConfig} */

import "./src/env/index.js"

const nextConfig = {
  // if you want to use standalone output, uncomment the following line
  // transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
  images: {
    remotePatterns: [
      {
        // allow all domains for markdown images
        // but for safety, we only allow https
        hostname: "*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
