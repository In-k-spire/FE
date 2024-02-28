/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com", "shopping-phinf.pstatic.net"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://openapi.naver.com/v1/search/book.json/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
