import {
  ContactUsCustomProperties_KEY,
  ORG_D_Detail_ContactUs,
  TEXT_BESIDE_BUTTON,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { PCC_General_D_UsersAlsoViewed } from "@/components/org/cards_resources/third-page/pcc/general/desktop/PCC_General_D_UsersAlsoViewed"
import {
  ArraySectionToRender_Type,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"
import { arraySectionToRenderDefault } from "../general/arraySectionToRenderDefault"

export const arrayInnerNavBar_PCIC: InnerNavBar_InnerData = [
  arraySectionToRenderDefault[0],
  { INNER_NAV_BAR_KEY: "booking" },
  arraySectionToRenderDefault[1],
  { INNER_NAV_BAR_KEY: "information" },
  arraySectionToRenderDefault[2],
  arraySectionToRenderDefault[3],
]

export const arraySectionToRender_CommunityInclusionClasses: ArraySectionToRender_Type =
  [
    {
      name: null,
      component: null,
      toNavbar: {
        id: arrayInnerNavBar_PCIC[0][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_Schedule.name,
      component: ORG_D_Detail_Schedule,
      toNavbar: {
        id: arrayInnerNavBar_PCIC[1][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
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
        [TEXT_BESIDE_BUTTON.KEY]: "Is this class a good fit for you?",
      },
      toNavbar: {
        id: arrayInnerNavBar_PCIC[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_PCIC[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
    {
      name: PCC_General_D_UsersAlsoViewed.name,
      component: PCC_General_D_UsersAlsoViewed,
      toNavbar: {
        id: arrayInnerNavBar_PCIC[3][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_Reviews.name,
      component: ORG_D_Detail_Reviews,
      toNavbar: {
        id: arrayInnerNavBar_PCIC[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_FAQS.name,
      component: ORG_D_Detail_FAQS,
      toNavbar: {
        id: arrayInnerNavBar_PCIC[5][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_PCIC[5][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
  ]
