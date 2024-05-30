/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.basestudio.app/v1/c6b1a48fbc86a778b977b0/:path*",
      },
    ];
  },
};

export default nextConfig;
