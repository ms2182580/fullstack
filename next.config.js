/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["randomuser.me"],
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
        destination: "/ORG/pat/at-software",
        permanent: true,
      },
      {
        source: "/sdat",
        destination: "/ORG/pat/at-smart-devices",
        permanent: true,
      },

      {
        source: "/cr",
        destination: "/ORG/paa/aa-civil-rights",
        permanent: true,
      },
      {
        source: "/se",
        destination: "/ORG/paa/aa-special-education",
        permanent: true,
      },
      {
        source: "/elmp",
        destination: "/ORG/paa/aa-elder-law-medicaid-planning",
        permanent: true,
      },
      {
        source: "/disa",
        destination: "/ORG/paa/aa-disability-attorney",
        permanent: true,
      },
      {
        source: "/idd",
        destination: "/ORG/paa/aa-idd",
        permanent: true,
      },

      {
        source: "/day",
        destination: "/ORG/pcmps/cmps-day",
        permanent: true,
      },
      {
        source: "/ovn",
        destination: "/ORG/pcmps/cpms-overnight-camps",
        permanent: true,
      },
      {
        source: "/dayt",
        destination: "/ORG/pcmps/cpms-day-trips",
        permanent: true,
      },

      {
        source: "/cc",
        destination: "/ORG/pcc/cc-community-classes",
        permanent: true,
      },
      {
        source: "/fc",
        destination: "/ORG/pcc/cc-fitness-classes",
        permanent: true,
      },
      {
        source: "/ac",
        destination: "/ORG/pcc/cc-art-classes",
        permanent: true,
      },

      {
        source: "/psyt",
        destination: "/ORG/pdctr/dctr-psychiatrists",
        permanent: true,
      },
      {
        source: "/fm",
        destination: "/ORG/pdctr/dctr-family-medicine",
        permanent: true,
      },
      {
        source: "/no",
        destination: "/ORG/pdctr/dctr-neuro-oncologists",
        permanent: true,
      },

      {
        source: "/mh",
        destination: "/ORG/pmhss/mhss-mental-heath",
        permanent: true,
      },
      {
        source: "/fs",
        destination: "/ORG/pmhss/mhss-family-support",
        permanent: true,
      },

      {
        source: "/a",
        destination: "/ORG/pppas/ppas-associations",
        permanent: true,
      },
      {
        source: "/pnfpo",
        destination: "/ORG/pppas/ppas-not-for-profit-organization",
        permanent: true,
      },
      {
        source: "/so",
        destination: "/ORG/pppas/ppas-state-offices",
        permanent: true,
      },

      {
        source: "/ses",
        destination: "/ORG/pses/ses-special-education-schools",
        permanent: true,
      },
      {
        source: "/pre",
        destination: "/ORG/pses/ses-preschools",
        permanent: true,
      },
      {
        source: "/pv",
        destination: "/ORG/pses/ses-private-schools",
        permanent: true,
      },

      {
        source: "/slp",
        destination: "/ORG/pst/st-speech-language-pathologists",
        permanent: true,
      },
      {
        source: "/ot",
        destination: "/ORG/pst/st-ocuppational-therapists",
        permanent: true,
      },

      {
        source: "/lt",
        destination: "/ORG/prp/rp-long-term-residential",
        permanent: true,
      },
      {
        source: "/st",
        destination: "/ORG/prp/rp-short-term-residential",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
