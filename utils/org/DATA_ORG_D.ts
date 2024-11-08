import { All_Layouts_Accepted } from "@/components/org/flow/first-page/desktop/styles/INDEX_ORG_Search_DWrapper"
import { DATA_PAA_D } from "./paa/DATA_PCR_D"
import { DATA_PAT_D } from "./pat/DATA_PAT_D"
import { DATA_PCC_D } from "./pcc/DATA_PCC_D"
import { DATA_PCMPS_D } from "./pcmps/DATA_PCMPS_D"
import { DATA_PDCTR_D } from "./pdctr/DATA_PDCTR_D"
import { DATA_PMHSS_D } from "./pmhss/DATA_PMHSS_D"
import { DATA_PPPAS_D } from "./pppas/DATA_PPPAS_D"
import { DATA_PRP_D } from "./prp/DATA_PRP_D"
import { DATA_PSES_D } from "./pses/DATA_PSES_D"
import { DATA_PST_D } from "./pst/DATA_PST_D"
import { DATA_PVES_D } from "./pves/DATA_PVES_D"

// export const enum SPECIFIC_DATA_KEY {
//   SPECIFIC_DATA_KEY = "SPECIFIC_DATA_KEY",
//   BUTTON_TO_THIRDPAGE_NAME = "BUTTON_TO_THIRDPAGE_NAME",
//   SVG = "SVG",
// }

export const enum DATA_ORG_D_TYPES_KEYS {
  NAME_JSX = "nameJSX",
  THIS_PARTICULAR_DATA = "thisParticularData",
  ACRONYM = "acronym",
  FOLDER_NAME = "folderName",
  SOMETHING_SPECIAL = "somethingSpecial",
  LAYOUT = "layout",
  DETAILS = "details",
  IS_FROM_BACKEND = "isFromBackend",
}

export type DATA_ORG_D_TYPES = {
  [DATA_ORG_D_TYPES_KEYS.NAME_JSX]: string
  [DATA_ORG_D_TYPES_KEYS.THIS_PARTICULAR_DATA]: unknown
  [DATA_ORG_D_TYPES_KEYS.ACRONYM]?: string
  [DATA_ORG_D_TYPES_KEYS.FOLDER_NAME]?: string
  [DATA_ORG_D_TYPES_KEYS.SOMETHING_SPECIAL]?: {
    [DATA_ORG_D_TYPES_KEYS.LAYOUT]?: keyof typeof All_Layouts_Accepted
    [DATA_ORG_D_TYPES_KEYS.DETAILS]?: unknown
    [DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]?: boolean
  }
}

export type DATA_ORG_D_TYPES_Arr = DATA_ORG_D_TYPES[]

export const DATA_ORG_D: DATA_ORG_D_TYPES_Arr = [
  {
    nameJSX: "Assistive Technology",
    thisParticularData: DATA_PAT_D,
    acronym: "pat",
    folderName: "assistive-technology",
    somethingSpecial: {
      layout: "like_PAT",
    },
  },
  {
    nameJSX: "Attorney and Advocates",
    thisParticularData: DATA_PAA_D,
    acronym: "paa",
    folderName: "attorney-advocates",
  },
  {
    nameJSX: "Camps",
    thisParticularData: DATA_PCMPS_D,
    acronym: "pcmps",
    folderName: "camps",
  },
  {
    nameJSX: "Community Classes",
    thisParticularData: DATA_PCC_D,
    acronym: "pcc",
    folderName: "community-classes",
  },
  {
    nameJSX: "Doctors",
    thisParticularData: DATA_PDCTR_D,
    acronym: "pdctr",
    folderName: "doctors",
  },
  {
    nameJSX: "Mental Health Support/Services",
    thisParticularData: DATA_PMHSS_D,
    acronym: "pmhss",
    folderName: "mental-health",
  },
  {
    nameJSX: "Private & Public Agencies/Services",
    thisParticularData: DATA_PPPAS_D,
    acronym: "pppas",
    folderName: "ptivate-public-agencies",
  },
  {
    nameJSX: "Residential Programs",
    thisParticularData: DATA_PRP_D,
    acronym: "prp",
    folderName: "residential-programs",
  },
  {
    nameJSX: "Schools & Educational Resources",
    thisParticularData: DATA_PSES_D,
    acronym: "pses",
    folderName: "special-education-schools",
  },
  {
    nameJSX: "Therapeutic Providers & Services",
    thisParticularData: DATA_PST_D,
    acronym: "pst",
    folderName: "speech-therapists",
  },

  {
    nameJSX: "Vocational & Employment Supports",
    thisParticularData: DATA_PVES_D,
    acronym: "pves",
    folderName: "x",
    somethingSpecial: {
      layout: "like_PVES",
      details: {
        changeLayoutOnlyInPosition: 0,
      },
    },
  },
]
