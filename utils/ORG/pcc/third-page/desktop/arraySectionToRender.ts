import { ContactUsCustomProperties_KEY, ORG_D_Detail_ContactUs, TEXT_BESIDE_BUTTON } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { PCC_General_D_UsersAlsoViewed } from "@/components/org/cards_resources/third-page/pcc/general/desktop/PCC_General_D_UsersAlsoViewed"
import { ArraySectionToRender_Type, InnerNavBar_InnerData, InnerNavBar_InnerData_KEYS } from "@/utils/org/third-page/InnerNavBar"

export const arrayInnerNavBar_PCC: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "booking" },
  { INNER_NAV_BAR_KEY: "contact", INNER_NAV_BAR_VALUE: "contact us" },
  { INNER_NAV_BAR_KEY: "information" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PCC: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PCC[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_Schedule.name,
    component: ORG_D_Detail_Schedule,
    toNavbar: {
      id: arrayInnerNavBar_PCC[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    props_component: {
      [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]: {
        [ContactUsCustomProperties_KEY.TITLE]: "I’m interested in improving",
        [ContactUsCustomProperties_KEY.DATA]: [
          "Coordination",
          "Strength",
          "Endurance",
          "Weigh management",
          "Flexibilty",
          "Improved posture",
          "Socialization",
          "Independence",
          "Self-esteem",
          "behavioral improvement",
          "Verbal Skills",
          "Other",
        ],
      },
      [TEXT_BESIDE_BUTTON.KEY]: "Find out if we’re a good fit for you",
      [TEXT_BESIDE_BUTTON.IS_LIKE_BUTTON]: true,
    },
    toNavbar: {
      id: arrayInnerNavBar_PCC[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PCC[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
  {
    name: PCC_General_D_UsersAlsoViewed.name,
    component: PCC_General_D_UsersAlsoViewed,
    toNavbar: {
      id: arrayInnerNavBar_PCC[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PCC[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PCC[5][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PCC[5][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE],
    },
  },
]
