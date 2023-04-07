/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
    
  },
  images: {
    domains: ["randomuser.me"]
  }
}

module.exports = nextConfig
