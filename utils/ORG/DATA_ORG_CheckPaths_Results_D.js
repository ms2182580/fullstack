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
      acronymsFolderRouteName: {
        "at-wheelchair-mobility-devices": "wcmd",
        "at-smart-devices": "sdat",
        "at-tools-for-school": "tfs",
        "at-augmented-software-software": "ass",
        "at-innovative-hi-tech": "iht",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "aa-civil-rights": "cr",
        "aa-special-education": "se",
        "aa-elder-law-medicaid-planning": "elmp",
        "aa-disability-attorney": "disa",
        "aa-idd": "idd",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "cmps-day": "day",
        "cmps-overnight-camps": "ovn",
        "cmps-day-trips": "dayt",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "cc-community-classes": "cc",
        "cc-fitness-classes": "fc",
        "cc-art-classes": "ac",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "dctr-psychiatrists": "psyt",
        "dctr-family-medicine": "fm",
        "dctr-neuro-oncologists": "no",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "mhss-mental-heath": "mh",
        "mhss-family-support": "fs",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "ppas-associations": "a",
        "ppas-not-for-profit-organization": "pnfpo",
        "ppas-state-offices": "so",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "ses-special-education-schools": "ses",
        "ses-preschools": "pre",
        "ses-private-schools": "pv",
      },
    },
    {
      fullName: {
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
      acronymsFolderRouteName: {
        "st-speech-language-pathologists": "slp",
        "st-ocuppational-therapists": "ot",
      },
    },
    {
      fullName: {
        "st-speech-language-pathologists": "Speech Language Pathologists",
        "st-ocuppational-therapists": "Occupational Therapists",
      },
    },
  ],

  prp: [
    "rp-long-term-residential",
    "rp-short-term-residential",
    {
      acronymsFolderRouteName: {
        "rp-long-term-residential": "lt",
        "rp-short-term-residential": "st",
      },
    },
    {
      fullName: {
        "rp-long-term-residential": "Long-Term Residential Programs",
        "rp-short-term-residential": "Short-Term Residential Programs",
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

/* !FH Modify this in the «next.config.js» file */
// 2° generation
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
