/** @type {import('next').NextConfig} */
const nextConfig = {
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
