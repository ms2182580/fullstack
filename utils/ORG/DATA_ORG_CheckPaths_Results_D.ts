export const enum DATA_ORG_CheckPaths_Results_D_KEYS {
  acronymsFolderRouteName = "acronymsFolderRouteName",
  fullName = "fullName",
}

export enum CATEGORY_KEYS {
  PAT = "pat",
  PAA = "paa",
  PCMPS = "pcmps",
  PCC = "pcc",
  PDCTR = "pdctr",
  PMHSS = "pmhss",
  PPPAS = "pppas",
  PSES = "pses",
  PST = "pst",
  PRP = "prp",
  PVES = "pves",
}

export enum SUBCATEGORY_KEYS {
  /* PAT subcategories */
  WCMD = "wcmd",
  TFS = "tfs",
  ACS = "acs",
  SDAT = "sdat",
  IHTAT = "ihtat",

  /* PAA Subcategories */
  CR = "cr",
  SE = "se",
  ELMP = "elmp",
  DISA = "disa",
  IDD = "idd",

  /* PCMPS subcategories */
  DAY = "day",
  OVN = "ovn",
  DAYT = "dayt",

  /* PCC subcategories */
  CC = "cc",
  FC = "fc",
  AC = "ac",

  /* PDCTR subcategories */
  PSYT = "psyt",
  FM = "fm",
  NO = "no",

  /* PMHSS subcategories */
  MH = "mh",
  FS = "fs",

  /* PPPAS subcategories */
  A = "a",
  PNFPO = "pnfpo",
  SO = "so",

  /* PSES subcategories */
  SES = "ses",
  PRE = "pre",
  PV = "pv",

  /* PST subcategories */
  SLP = "slp",
  OT = "ot",

  /* PRP subcategories */
  LT = "lt",
  ST = "st",

  /* PVES subcategories */
  OP = "op",
  HR = "hr",
  SEP = "sep",
  AI = "ai",
  JTC = "jtc",
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
      "at-wheelchair-mobility-devices": SUBCATEGORY_KEYS.WCMD,
      "at-smart-devices": SUBCATEGORY_KEYS.SDAT,
      "at-tools-for-school": SUBCATEGORY_KEYS.TFS,
      "at-augmented-software-software": SUBCATEGORY_KEYS.ACS /* This is a typo, should be ACS */,
      "at-innovative-hi-tech": SUBCATEGORY_KEYS.IHTAT,
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
      "aa-civil-rights": SUBCATEGORY_KEYS.CR,
      "aa-special-education": SUBCATEGORY_KEYS.SE,
      "aa-elder-law-medicaid-planning": SUBCATEGORY_KEYS.ELMP,
      "aa-disability-attorney": SUBCATEGORY_KEYS.DISA,
      "aa-idd": SUBCATEGORY_KEYS.IDD,
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
      "cmps-day": SUBCATEGORY_KEYS.DAY,
      "cmps-overnight-camps": SUBCATEGORY_KEYS.OVN,
      "cmps-day-trips": SUBCATEGORY_KEYS.DAYT,
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
      "cc-community-classes": SUBCATEGORY_KEYS.CC,
      "cc-fitness-classes": SUBCATEGORY_KEYS.FC,
      "cc-art-classes": SUBCATEGORY_KEYS.AC,
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
      "dctr-psychiatrists": SUBCATEGORY_KEYS.PSYT,
      "dctr-family-medicine": SUBCATEGORY_KEYS.FM,
      "dctr-neuro-oncologists": SUBCATEGORY_KEYS.NO,
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
      "mhss-mental-heath": SUBCATEGORY_KEYS.MH,
      "mhss-family-support": SUBCATEGORY_KEYS.FS,
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
      "ppas-associations": SUBCATEGORY_KEYS.A,
      "ppas-not-for-profit-organization": SUBCATEGORY_KEYS.PNFPO,
      "ppas-state-offices": SUBCATEGORY_KEYS.SO,
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
      "ses-special-education-schools": SUBCATEGORY_KEYS.SES,
      "ses-preschools": SUBCATEGORY_KEYS.PRE,
      "ses-private-schools": SUBCATEGORY_KEYS.PV,
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
      "st-speech-language-pathologists": SUBCATEGORY_KEYS.SLP,
      "st-ocuppational-therapists": SUBCATEGORY_KEYS.OT,
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
      "rp-long-term-residential": SUBCATEGORY_KEYS.LT,
      "rp-short-term-residential": SUBCATEGORY_KEYS.ST,
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
      "ves-open-positions": SUBCATEGORY_KEYS.OP,
      "ves-highly-reviewed-companies": SUBCATEGORY_KEYS.HR,
      "ves-supported-employment-programs": SUBCATEGORY_KEYS.SEP,
      "ves-apprenticeships-internships": SUBCATEGORY_KEYS.AI,
      "ves-job-training-coaches": SUBCATEGORY_KEYS.JTC,
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
//   → WCMD // was: AT
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
