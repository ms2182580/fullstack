import { ORG_D_Detail_AditionalResources } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_AditionalResources"
import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_HelpfulWebResources } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_HelpfulWebResources"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ArraySectionToRender_Type, InnerNavBar_InnerData, InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"

export const arrayInnerNavBar_PAA: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "consultation" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
  { INNER_NAV_BAR_KEY: "additionalResources", INNER_NAV_BAR_VALUE: "additional Resources" },
]

export const arraySectionToRender_PAA: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PAA[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },

  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    toNavbar: {
      id: arrayInnerNavBar_PAA[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PAA[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PAA[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PAA[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_AditionalResources.name,
    component: ORG_D_Detail_AditionalResources,
    toNavbar: {
      id: arrayInnerNavBar_PAA[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PAA[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_HelpfulWebResources.name,
    component: ORG_D_Detail_HelpfulWebResources,
    toNavbar: {
      id: null,
    },
  },
  // { name: ORG_D_Detail_AditionalResources.name, component: ORG_D_Detail_AditionalResources },
]
