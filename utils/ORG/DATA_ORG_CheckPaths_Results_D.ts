export const enum DATA_ORG_CheckPaths_Results_D_KEYS {
  acronymsFolderRouteName = "acronymsFolderRouteName",
  fullName = "fullName",
}

export const DATA_ORG_CheckPaths_Results_D = {
  pat: [
    /* 
    This trust in the order of the arr to know where the resource should move
    */
    "at-wheelchair-mobility-devices",
    "at-tools-for-school",
    "at-augmented-software-software",
    "at-smart-devices",
    "at-innovative-hi-tech",
    {
      "at-wheelchair-mobility-devices": "wcmd",
      "at-smart-devices": "sdat",
      "at-tools-for-school": "tfs",
      "at-augmented-software-software": "ass" /* This is a typo, should be ACS */,
      "at-innovative-hi-tech": "iht",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "at-wheelchair-mobility-devices": "Wheelchairs & Mobility Devices",
        "at-smart-devices": "Smart Devices with Assistive Technology",
        "at-tools-for-school": "Tools for School",
        "at-augmented-software-software": "Augmented Communication Software",
        "at-innovative-hi-tech": "Innovative Hi-tech Assistive Technology",
      },
    },
  ],
  paa: [
    "aa-civil-rights",
    "aa-special-education",
    "aa-elder-law-medicaid-planning",
    "aa-disability-attorney",
    "aa-idd",
    {
      "aa-civil-rights": "cr",
      "aa-special-education": "se",
      "aa-elder-law-medicaid-planning": "elmp",
      "aa-disability-attorney": "disa",
      "aa-idd": "idd",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "aa-civil-rights": "Civil Rights Attorneys",
        "aa-special-education": "Special Education Attorneys",
        "aa-elder-law-medicaid-planning": "Elder Law & Medicaid Planning Attorneys",
        "aa-disability-attorney": "Disability Attorneys",
        "aa-idd": "I/DD Advocates",
      },
    },
  ],
  pcmps: [
    "cmps-day",
    "cmps-overnight-camps",
    "cmps-day-trips",
    {
      "cmps-day": "day",
      "cmps-overnight-camps": "ovn",
      "cmps-day-trips": "dayt",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "cmps-day": "Day Camps",
        "cmps-overnight-camps": "Overnight Camps",
        "cmps-day-trips": "Day Trips",
      },
    },
  ],
  pcc: [
    "cc-community-classes",
    "cc-fitness-classes",
    "cc-art-classes",
    {
      "cc-community-classes": "cc",
      "cc-fitness-classes": "fc",
      "cc-art-classes": "ac",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "cc-community-classes": "Community Classes",
        "cc-fitness-classes": "Fitness Classes",
        "cc-art-classes": "Art Classes",
      },
    },
  ],
  pdctr: [
    "dctr-psychiatrists",
    "dctr-family-medicine",
    "dctr-neuro-oncologists",
    {
      "dctr-psychiatrists": "psyt",
      "dctr-family-medicine": "fm",
      "dctr-neuro-oncologists": "no",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "dctr-psychiatrists": "Psychiatrists",
        "dctr-family-medicine": "Family Medicine Doctors",
        "dctr-neuro-oncologists": "Neuro-oncologists",
      },
    },
  ],
  pmhss: [
    "mhss-mental-heath",
    "mhss-family-support",
    {
      "mhss-mental-heath": "mh",
      "mhss-family-support": "fs",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "mhss-mental-heath": "Mental Health Services",
        "mhss-family-support": "Family Support Services",
      },
    },
  ],
  pppas: [
    "ppas-associations",
    "ppas-not-for-profit-organization",
    "ppas-state-offices",
    {
      "ppas-associations": "a",
      "ppas-not-for-profit-organization": "pnfpo",
      "ppas-state-offices": "so",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "ppas-associations": "Associations",
        "ppas-not-for-profit-organization": "Private Not-for-Profit Organizations",
        "ppas-state-offices": "State Offices",
      },
    },
  ],
  pses: [
    "ses-special-education-schools",
    "ses-preschools",
    "ses-private-schools",
    {
      "ses-special-education-schools": "ses",
      "ses-preschools": "pre",
      "ses-private-schools": "pv",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "ses-special-education-schools": "Special Education Schools",
        "ses-preschools": "Preschools",
        "ses-private-schools": "Private Schools",
      },
    },
  ],
  pst: [
    "st-speech-language-pathologists",
    "st-ocuppational-therapists",
    {
      "st-speech-language-pathologists": "slp",
      "st-ocuppational-therapists": "ot",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "st-speech-language-pathologists": "Speech Language Pathologists",
        "st-ocuppational-therapists": "Occupational Therapists",
      },
    },
  ],

  prp: [
    "rp-long-term-residential",
    "rp-short-term-residential",
    {
      "rp-long-term-residential": "lt",
      "rp-short-term-residential": "st",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "rp-long-term-residential": "Long-Term Residential Programs",
        "rp-short-term-residential": "Short-Term Residential Programs",
      },
    },
  ],

  pves: [
    "ves-open-positions",
    "ves-highly-reviewed-companies",
    "ves-supported-employment-programs",
    "ves-apprenticeships-internships",
    "ves-job-training-coaches",
    {
      "ves-open-positions": "op",
      "ves-highly-reviewed-companies": "hr",
      "ves-supported-employment-programs": "sep",
      "ves-apprenticeships-internships": "ai",
      "ves-job-training-coaches": "jtc",
    },
    {
      [DATA_ORG_CheckPaths_Results_D_KEYS.fullName]: {
        "ves-open-positions": "open positions",
        "ves-highly-reviewed-companies": "highly reviewed companies",
        "ves-supported-employment-programs": "supported employment programs",
        "ves-apprenticeships-internships": "Apprenticeships and Internships",
        "ves-job-training-coaches": "Job Training Coaches",
      },
    },
  ],
}

// # 1° generation
// "pat":
//   → AT
//   → SAT
//   → SDAT
// "paa":
//   → CR
//   → SE
//   → ELMP
//   → DISA
//   → IDD
// "pcmps":
//   → DAY
//   → OVN
//   → DAYT
// "pcc":
//   → CC
//   → FC
//   → AC
// "pdctr":
//   → PSYT
//   → FM
//   → NO
// "pmhss":
//   → MH
//   → FS
// "pppas":
//   → A
//   → PNFPO
//   → SO
// "pses":
//   → SES
//   → PRE
//   → PV
// "pst":
//   → SLP
//   → OT
// "prp"
//   → LT
//   → ST
/*  */

// # 2° generation
// "pat":
//   → WMD // was: AT
//   → TFS // mew
//   → ACS // was: SAT
//   → SDAT
//   → IHTAT // new
// "paa":
//   → CR
//   → SE
//   → ELMP
//   → DISA
//   → IDD
// "pcmps":
//   → DAY
//   → OVN
//   → DAYT
// "pcc":
//   → CC
//   → FC
//   → AC
// "pdctr":
//   → PSYT
//   → FM
//   → NO
// "pmhss":
//   → MH
//   → FS
// "pppas":
//   → A
//   → PNFPO
//   → SO
// "pses":
//   → SES
//   → PRE
//   → PV
// "pst":
//   → SLP
//   → OT
// "prp"
//   → LT
//   → ST

/*  */
// # 3° generation
// "pat":
//   → WMD // was: AT
//   → TFS // mew
//   → ACS // was: SAT
//   → SDAT
//   → IHTAT // new
// "paa":
//   → CR
//   → SE
//   → ELMP
//   → DISA
//   → IDD
// "pcmps":
//   → DAY
//   → OVN
//   → DAYT
// "pcc":
//   → CC
//   → FC
//   → AC
// "pdctr":
//   → PSYT
//   → FM
//   → NO
// "pmhss":
//   → MH
//   → FS
// "pppas":
//   → A
//   → PNFPO
//   → SO
// "pses":
//   → SES
//   → PRE
//   → PV
// "pst":
//   → SLP
//   → OT
// "prp"
//   → LT
//   → ST
// "pves"
//   → OP
//   → HR
//   → SEP
//   → AI
//   → JTC
