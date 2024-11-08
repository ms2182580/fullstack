import {
  ContactUsCustomProperties_KEY,
  ORG_D_Detail_ContactUs,
  TEXT_BESIDE_BUTTON,
} from "@/components/org/flow/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/flow/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/flow/third-page/desktop/ORG_D_Detail_Reviews"
import {
  ArraySectionToRender_Type,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"

export const arrayInnerNavBar_PRP: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "location" },
  { INNER_NAV_BAR_KEY: "contact", INNER_NAV_BAR_VALUE: "contact us" },
  { INNER_NAV_BAR_KEY: "reviews" },
  { INNER_NAV_BAR_KEY: "faqs", INNER_NAV_BAR_VALUE: "FAQs" },
]

export const arraySectionToRender_PRP: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PRP[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: null,
    component: null,
    toNavbar: {
      id: arrayInnerNavBar_PRP[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    props_component: {
      [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]: {
        [ContactUsCustomProperties_KEY.TITLE]: "I have questions about",
        [ContactUsCustomProperties_KEY.DATA]: [
          "Payment",
          "Accessibility Options",
          "Schedule a tour",
          "Specialized programming",
          "Reasonable accomodations",
          "Languages",
          "Amenities",
          "Roommate selection",
          "On-site staff",
          "Something else",
        ],
      },
      [TEXT_BESIDE_BUTTON.KEY]: "Are we a good fit?",
    },
    toNavbar: {
      id: arrayInnerNavBar_PRP[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PRP[2][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },

  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: arrayInnerNavBar_PRP[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
    },
  },

  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_PRP[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY],
      jsx: arrayInnerNavBar_PRP[4][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },
]
