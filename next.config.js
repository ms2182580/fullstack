/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["randomuser.me"]
  },

  async redirects() {
    return [
      {
        source: "/at",
        destination: "/ORG/pat/at-assistive-technology",
        permanent: true,
      },
      {
        source: "/sat",
        destination: "/ORG/pat/at-smart-devices",
        permanent: true,
      },
      {
        source: "/sdat",
        destination: "/ORG/pat/at-software",
        permanent: true,
      },
      {
        source: "/st",
        destination: "/ORG/speech-therapists",
        permanent: true,
      }
    ]
  },


}

module.exports = nextConfig
