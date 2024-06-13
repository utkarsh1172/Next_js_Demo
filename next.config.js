/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized:true
  },
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "http://example.com" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
