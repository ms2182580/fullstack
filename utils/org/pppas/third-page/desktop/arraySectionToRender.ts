import {
  ContactUsCustomProperties_KEY,
  ORG_D_Detail_ContactUs,
  SEND_MESSAGE_BUTTON,
  TEXT_BESIDE_BUTTON,
} from "@/components/org/flow/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/flow/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/flow/third-page/desktop/ORG_D_Detail_Reviews"
import {
  ArraySectionToRender_Type,
  ArraySection_KEYS,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"

export const arrayInnerNavBar_PPAS: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "appointments" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PPAS: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PPAS[0][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
    },
  },
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PPAS[1][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    [ArraySection_KEYS.PROPS_COMPONENT]: {
      [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]: {
        [ContactUsCustomProperties_KEY.TITLE]: "I’m interested in improving",
        [ContactUsCustomProperties_KEY.DATA]: [
          "Housing help",
          "Rent relief",
          "Funding help",
          "Intake process",
          "Interpreter services",
          "Other",
        ],
      },
      [TEXT_BESIDE_BUTTON.KEY]: "Find out if  we’re a good fit for you",
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
      id: arrayInnerNavBar_PPAS[2][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PPAS[3][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
      jsx: arrayInnerNavBar_PPAS[3][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },
]
