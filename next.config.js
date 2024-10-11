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
  async rewrites() {
    return [
      {
        source: "/naver/:path*",
        destination: `https://openapi.naver.com/v1/search/book.json/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
