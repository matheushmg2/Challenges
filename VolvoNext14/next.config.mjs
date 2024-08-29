/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  async rewrites() {
    return [
      {
        source: '/api/car',
        destination: 'http://localhost:3000/api/cars.json'
      },
    ]
  },
};

export default nextConfig;
