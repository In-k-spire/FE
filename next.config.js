/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.cache = false;
    return config;
  },
  reactStrictMode: false,
  images: {
    domains: ["shopping-phinf.pstatic.net"],
  },
};

module.exports = nextConfig;
