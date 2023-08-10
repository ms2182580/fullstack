import { INDEX_D_ATSearch } from "../../components/ORG/pages/assistive-technology/first-page/desktop/INDEX_D_ATSearch"
import { INDEX_D_AASearch } from "../../components/ORG/pages/attorney-advocates/first-page/desktop/INDEX_D_AASearch"
import { INDEX_D_CMPSSearch } from "../../components/ORG/pages/camps/first-page/desktop/INDEX_D_CMPSSearch.js"
import { INDEX_D_CCSearch } from "../../components/ORG/pages/community-classes/first-page/desktop/INDEX_D_CCSearch"
import { INDEX_D_DCTRSearch } from "../../components/ORG/pages/doctors/first-page/desktop/INDEX_D_DCTRSearch"
import { INDEX_D_MHSSSearch } from "../../components/ORG/pages/mental-health/first-page/desktop/INDEX_D_MHSSSearch.js"
import { INDEX_D_PPASSearch } from "../../components/ORG/pages/private-public-agencies/first-page/desktop/INDEX_D_PPASSearch.js"
import { INDEX_D_RPSearch } from "../../components/ORG/pages/residential-programs/first-page/desktop/INDEX_D_RPSearch"
import { INDEX_D_SESSearch } from "../../components/ORG/pages/special-education-schools/first-page/desktop/INDEX_D_SESSearch.js"
import { INDEX_D_STSearch } from "../../components/ORG/pages/speech-therapists/first-page/dekstop/INDEX_D_STSearch"

export const DATA_ORG_D = [
  {
    nameJSX: "Assistive Technology",
    component: INDEX_D_ATSearch,
    componentName: INDEX_D_ATSearch.name,
    acronym: "pat",
    folderName: "assistive-technology"
  },
  {
    nameJSX: "Attorney and Advocates",
    component: INDEX_D_AASearch,
    componentName: INDEX_D_AASearch.name,
    acronym: "paa",
    folderName: "attorney-advocates"
  },
  {
    nameJSX: "Camps",
    component: INDEX_D_CMPSSearch,
    componentName: INDEX_D_CMPSSearch.name,
    acronym: "pcmps",
    folderName: "camps"
  },
  {
    nameJSX: "Community Classes",
    component: INDEX_D_CCSearch,
    componentName: INDEX_D_CCSearch.name,
    acronym: "pcc",
    folderName: "community-classes"
  },

  {
    nameJSX: "Doctors",
    component: INDEX_D_DCTRSearch,
    componentName: INDEX_D_DCTRSearch.name,
    acronym: "pdctr",
    folderName: "doctors"
  },
  {
    nameJSX: "Mental Health Support/Services",
    component: INDEX_D_MHSSSearch,
    componentName: INDEX_D_MHSSSearch.name,
    acronym: "pmhss",
    folderName: "mental-health"
  },
  {
    nameJSX: "Private & Public Agencies/Services",
    component: INDEX_D_PPASSearch,
    componentName: INDEX_D_PPASSearch.name,
    acronym: "pppas",
    folderName: "ptivate-public-agencies"
  },
  {
    nameJSX: "Special Education Schools",
    component: INDEX_D_SESSearch,
    componentName: INDEX_D_SESSearch.name,
    acronym: "pses",
    folderName: "special-education-schools"
  },
  {
    nameJSX: "Therapeutic Providers & Services",
    component: INDEX_D_STSearch,
    componentName: INDEX_D_STSearch.name,
    acronym: "pst",
    folderName: "speech-therapists"
  },
  {
    nameJSX: "Residential Programs",
    component: INDEX_D_RPSearch,
    componentName: INDEX_D_RPSearch.name,
    acronym: "prp",
    folderName: "residential-programs"
  }
]
