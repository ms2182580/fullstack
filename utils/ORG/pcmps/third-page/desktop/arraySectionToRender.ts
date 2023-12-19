import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { PCMPS_General_D_Booking } from "@/components/ORG/cards_resources/third-page/pcmps/general/desktop/PCMPS_General_D_Booking"
import { PCMPS_General_D_PackingList } from "@/components/ORG/cards_resources/third-page/pcmps/general/desktop/PCMPS_General_D_PackingList"
import { ArraySectionToRender_Type, InnerNavBar_InnerData, InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"

export const arrayInnerNavBar_PCMPS: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "booking" },
  { INNER_NAV_BAR_KEY: "packingList", INNER_NAV_BAR_VALUE: "packing list" },
  { INNER_NAV_BAR_KEY: "contact", INNER_NAV_BAR_VALUE: "contact us" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PCMPS: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PCMPS[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: PCMPS_General_D_Booking.name,
    component: PCMPS_General_D_Booking,
    toNavbar: {
      id: arrayInnerNavBar_PCMPS[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: PCMPS_General_D_PackingList.name,
    component: PCMPS_General_D_PackingList,
    toNavbar: {
      id: arrayInnerNavBar_PCMPS[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PCMPS[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    toNavbar: {
      id: arrayInnerNavBar_PCMPS[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PCMPS[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PCMPS[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PCMPS[5][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PCMPS[5][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
]
