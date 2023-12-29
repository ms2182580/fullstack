import { ContactUsCustomProperties_KEY, ORG_D_Detail_ContactUs, SEND_MESSAGE_BUTTON, TEXT_BESIDE_BUTTON } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { ArraySectionToRender_Type, ArraySection_KEYS, InnerNavBar_InnerData, InnerNavBar_InnerData_KEYS } from "@/utils/org/third-page/InnerNavBar"

export const arrayInnerNavBar_PST: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "appointments" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PST: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PST[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: null,
    component: null,
    toNavbar: {
      id: "location",
    },
  },
  {
    name: ORG_D_Detail_Schedule.name,
    component: ORG_D_Detail_Schedule,
    toNavbar: {
      id: arrayInnerNavBar_PST[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    [ArraySection_KEYS.PROPS_COMPONENT]: {
      [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]: {
        [ContactUsCustomProperties_KEY.TITLE]: "I’m interested in improving",
        [ContactUsCustomProperties_KEY.DATA]: ["conversation", "Enunciation", "Swallowing", "Expressive Speech", "Receptive Speech", "AAC Device", "Other"],
      },
      [TEXT_BESIDE_BUTTON.KEY]: "I’m interested in improving",
      [TEXT_BESIDE_BUTTON.IS_LIKE_BUTTON]: true,
      [SEND_MESSAGE_BUTTON.IS_USABLE]: true,
    },
    toNavbar: {
      id: null,
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PST[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PST[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PST[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
]
