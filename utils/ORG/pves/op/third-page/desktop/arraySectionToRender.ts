import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_AT_WCMD_SimilarProducts } from "@/components/ORG/cards_resources/third-page/pat/at-wheelchair-mobility-devices/desktop/ORG_D_Detail_AT_WCMD_SimilarProducts"
import { ORG_D_Detail_AT_WCMD_WhereToBuy } from "@/components/ORG/cards_resources/third-page/pat/at-wheelchair-mobility-devices/desktop/ORG_D_Detail_AT_WCMD_WhereToBuy"
import { ArraySectionToRender_Type, InnerNavBar_InnerData, InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"

export const arrayInnerNavBar_PVES: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "jobDetails", INNER_NAV_BAR_VALUE: "job details" },
  { INNER_NAV_BAR_KEY: "aboutEmployer", INNER_NAV_BAR_VALUE: "about employer" },
  { INNER_NAV_BAR_KEY: "publicAid", INNER_NAV_BAR_VALUE: "public Aid" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PVES: ArraySectionToRender_Type = [
  {
    name: ORG_D_Detail_AT_WCMD_WhereToBuy.name,
    component: ORG_D_Detail_AT_WCMD_WhereToBuy,
    toNavbar: {
      id: "about",
      jsx: arrayInnerNavBar_PVES[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    toNavbar: {
      id: arrayInnerNavBar_PVES[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PVES[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_AT_WCMD_SimilarProducts.name,
    component: ORG_D_Detail_AT_WCMD_SimilarProducts,
    toNavbar: {
      id: arrayInnerNavBar_PVES[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PVES[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PVES[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PVES[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PVES[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
]
