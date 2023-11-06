import { ORG_D_Detail_Admission } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Admission"
import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_SchoolAcademics } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_SchoolAcademics"
import { ORG_D_Detail_StudentDemographics } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_StudentDemographics"
import { ArraySectionToRender_Type, InnerNavBar_InnerData, InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"

export const arrayInnerNavBar_PSES: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "contact", INNER_NAV_BAR_VALUE: "contact us" },
  { INNER_NAV_BAR_KEY: "schoolInformation", INNER_NAV_BAR_VALUE: "School information" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PSES: ArraySectionToRender_Type = [
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    toNavbar: {
      id: arrayInnerNavBar_PSES[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PSES[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_Admission.name,
    component: ORG_D_Detail_Admission,
    toNavbar: {
      id: arrayInnerNavBar_PSES[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PSES[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_SchoolAcademics.name,
    component: ORG_D_Detail_SchoolAcademics,
    toNavbar: {
      id: null,
    },
  },
  {
    name: ORG_D_Detail_StudentDemographics.name,
    component: ORG_D_Detail_StudentDemographics,
    toNavbar: {
      id: null,
    },
  },

  //Student Demographics
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PSES[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PSES[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PSES[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  //{ name: ORG_D_Detail_AditionalResources.name, //component: ORG_D_Detail_AditionalResources },
  //{ name: ORG_D_Detail_HelpfulWebResources.name, //component: ORG_D_Detail_HelpfulWebResources },
]
