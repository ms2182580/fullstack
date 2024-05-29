import {
  ContactUsCustomProperties_KEY,
  ORG_D_Detail_ContactUs,
  TEXT_BESIDE_BUTTON,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_OverviewDetails } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_OverviewDetails"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import {
  ArraySectionToRender_Type,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"
import { arraySectionToRenderDefault } from "../general/arraySectionToRenderDefault"

export const arrayInnerNavBar_RSNDT: InnerNavBar_InnerData = [
  arraySectionToRenderDefault[0],
  { INNER_NAV_BAR_KEY: "location" },
  arraySectionToRenderDefault[4],
  arraySectionToRenderDefault[2],
  arraySectionToRenderDefault[3],
  arraySectionToRenderDefault[1],
]

export const arraySectionToRender_ResidentialResources: ArraySectionToRender_Type =
  [
    {
      name: null,
      component: null,
      toNavbar: {
        id: arrayInnerNavBar_RSNDT[0][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: null,
      component: null,
      toNavbar: {
        id: arrayInnerNavBar_RSNDT[1][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_OverviewDetails.name,
      component: ORG_D_Detail_OverviewDetails,
      toNavbar: {
        id: arrayInnerNavBar_RSNDT[5][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
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
        id: arrayInnerNavBar_RSNDT[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_RSNDT[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },

    {
      name: ORG_D_Detail_Reviews.name,
      component: ORG_D_Detail_Reviews,
      toNavbar: {
        id: arrayInnerNavBar_RSNDT[3][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },

    {
      name: ORG_D_Detail_FAQS.name,
      component: ORG_D_Detail_FAQS,
      toNavbar: {
        id: arrayInnerNavBar_RSNDT[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_RSNDT[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
  ]
