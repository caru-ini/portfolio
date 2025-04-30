/** @type {import('next').NextConfig} */

import "./src/env/index.js"

const nextConfig = {
  // if you want to use standalone output, uncomment the following line
  // transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "res.cloudinary.com",
        pathname: "/zenn/image/upload/**",
      },
      {
        hostname: "static.zenn.studio",
      },
    ],
  },
};

export default nextConfig;
