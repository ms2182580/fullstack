import { All_Layouts_Accepted } from "@/components/ORG/cards/first-page/desktop/styles/INDEX_ORG_Search_DWrapper"
import { DATA_PCR_D } from "./paa/DATA_PCR_D"
import { DATA_PAT_D } from "./pat/DATA_PAT_D"
import { DATA_PCC_D } from "./pcc/DATA_PCC_D"
import { DATA_PCMPS_D } from "./pcmps/DATA_PCMPS_D"
import { DATA_PPSYT_D } from "./pdctr/DATA_PSYT_D"
import { DATA_PMH_D } from "./pmhss/DATA_PMH_D"
import { DATA_PPPAS_D } from "./pppas/DATA_PPPAS_D"
import { DATA_PLT_D } from "./prp/DATA_PLT_D"
import { DATA_SES_D } from "./pses/ses/DATA_SES_D"
import { DATA_PSLP_D } from "./pst/DATA_PSLP_D"
import { DATA_PVES_D } from "./pves/DATA_PVES_D"

// export const enum SPECIFIC_DATA_KEY {
//   SPECIFIC_DATA_KEY = "SPECIFIC_DATA_KEY",
//   BUTTON_TO_THIRDPAGE_NAME = "BUTTON_TO_THIRDPAGE_NAME",
//   SVG = "SVG",
// }

type DATA_ORG_D_TYPES = {
  nameJSX: string
  // component: FC
  // componentName: string
  thisParticularData: unknown
  acronym: string
  folderName?: string
  somethingSpecial?: {
    layout?: keyof typeof All_Layouts_Accepted
    details?: unknown
  }
}[]

export const DATA_ORG_D: DATA_ORG_D_TYPES = [
  {
    nameJSX: "Assistive Technology",
    // component: INDEX_D_ATSearch,
    // componentName: INDEX_D_ATSearch.name,
    thisParticularData: DATA_PAT_D,
    acronym: "pat",
    folderName: "assistive-technology",
    somethingSpecial: {
      layout: "like_PAT",
    },
  },
  {
    nameJSX: "Attorney and Advocates",
    // component: INDEX_D_AASearch,
    // componentName: INDEX_D_AASearch.name,
    thisParticularData: DATA_PCR_D,
    acronym: "paa",
    folderName: "attorney-advocates",
  },
  {
    nameJSX: "Camps",
    // component: INDEX_D_CMPSSearch,
    // componentName: INDEX_D_CMPSSearch.name,
    thisParticularData: DATA_PCMPS_D,
    acronym: "pcmps",
    folderName: "camps",
  },
  {
    nameJSX: "Community Classes",
    // component: INDEX_D_CCSearch,
    // componentName: INDEX_D_CCSearch.name,
    thisParticularData: DATA_PCC_D,
    acronym: "pcc",
    folderName: "community-classes",
  },
  {
    nameJSX: "Doctors",
    // component: INDEX_D_DCTRSearch,
    // componentName: INDEX_D_DCTRSearch.name,
    thisParticularData: DATA_PPSYT_D,
    acronym: "pdctr",
    folderName: "doctors",
  },
  {
    nameJSX: "Mental Health Support/Services",
    // component: INDEX_D_MHSSSearch,
    // componentName: INDEX_D_MHSSSearch.name,
    thisParticularData: DATA_PMH_D,
    acronym: "pmhss",
    folderName: "mental-health",
  },
  {
    nameJSX: "Private & Public Agencies/Services",
    // component: INDEX_D_PPASSearch,
    // componentName: INDEX_D_PPASSearch.name,
    thisParticularData: DATA_PPPAS_D,
    acronym: "pppas",
    folderName: "ptivate-public-agencies",
  },
  {
    nameJSX: "Residential Programs",
    // component: INDEX_D_RPSearch,
    // componentName: INDEX_D_RPSearch.name,
    thisParticularData: DATA_PLT_D,
    acronym: "prp",
    folderName: "residential-programs",
  },
  {
    nameJSX: "Schools & Educational Resources",
    // component: INDEX_D_SESSearch,
    // componentName: INDEX_D_SESSearch.name,
    thisParticularData: DATA_SES_D,
    acronym: "pses",
    folderName: "special-education-schools",
  },
  {
    nameJSX: "Therapeutic Providers & Services",
    // component: INDEX_D_STSearch,
    // componentName: INDEX_D_STSearch.name,
    thisParticularData: DATA_PSLP_D,
    acronym: "pst",
    folderName: "speech-therapists",
  },

  {
    nameJSX: "Vocational & Employment Supports",
    // component: INDEX_D_VESSearch,
    // componentName: INDEX_D_VESSearch.name,
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
