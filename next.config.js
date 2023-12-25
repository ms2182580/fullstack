/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  /* swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["randomuser.me"],
  }, */

  /* async redirects() {
    return [
      {
        source: "/at",
        destination: "/org/pat/at-assistive-technology",
        permanent: true,
      },
      {
        source: "/sat",
        destination: "/org/pat/at-software",
        permanent: true,
      },
      {
        source: "/sdat",
        destination: "/org/pat/at-smart-devices",
        permanent: true,
      },

      {
        source: "/cr",
        destination: "/org/paa/aa-civil-rights",
        permanent: true,
      },
      {
        source: "/se",
        destination: "/org/paa/aa-special-education",
        permanent: true,
      },
      {
        source: "/elmp",
        destination: "/org/paa/aa-elder-law-medicaid-planning",
        permanent: true,
      },
      {
        source: "/disa",
        destination: "/org/paa/aa-disability-attorney",
        permanent: true,
      },
      {
        source: "/idd",
        destination: "/org/paa/aa-idd",
        permanent: true,
      },

      {
        source: "/day",
        destination: "/org/pcmps/cmps-day",
        permanent: true,
      },
      {
        source: "/ovn",
        destination: "/org/pcmps/cpms-overnight-camps",
        permanent: true,
      },
      {
        source: "/dayt",
        destination: "/org/pcmps/cpms-day-trips",
        permanent: true,
      },

      {
        source: "/cc",
        destination: "/org/pcc/cc-community-classes",
        permanent: true,
      },
      {
        source: "/fc",
        destination: "/org/pcc/cc-fitness-classes",
        permanent: true,
      },
      {
        source: "/ac",
        destination: "/org/pcc/cc-art-classes",
        permanent: true,
      },

      {
        source: "/psyt",
        destination: "/org/pdctr/dctr-psychiatrists",
        permanent: true,
      },
      {
        source: "/fm",
        destination: "/org/pdctr/dctr-family-medicine",
        permanent: true,
      },
      {
        source: "/no",
        destination: "/org/pdctr/dctr-neuro-oncologists",
        permanent: true,
      },

      {
        source: "/mh",
        destination: "/org/pmhss/mhss-mental-heath",
        permanent: true,
      },
      {
        source: "/fs",
        destination: "/org/pmhss/mhss-family-support",
        permanent: true,
      },

      {
        source: "/a",
        destination: "/org/pppas/ppas-associations",
        permanent: true,
      },
      {
        source: "/pnfpo",
        destination: "/org/pppas/ppas-not-for-profit-organization",
        permanent: true,
      },
      {
        source: "/so",
        destination: "/org/pppas/ppas-state-offices",
        permanent: true,
      },

      {
        source: "/ses",
        destination: "/org/pses/ses-special-education-schools",
        permanent: true,
      },
      {
        source: "/pre",
        destination: "/org/pses/ses-preschools",
        permanent: true,
      },
      {
        source: "/pv",
        destination: "/org/pses/ses-private-schools",
        permanent: true,
      },

      {
        source: "/slp",
        destination: "/org/pst/st-speech-language-pathologists",
        permanent: true,
      },
      {
        source: "/ot",
        destination: "/org/pst/st-ocuppational-therapists",
        permanent: true,
      },

      {
        source: "/lt",
        destination: "/org/prp/rp-long-term-residential",
        permanent: true,
      },
      {
        source: "/st",
        destination: "/org/prp/rp-short-term-residential",
        permanent: true,
      },
    ]
  }, */
}

module.exports = nextConfig
