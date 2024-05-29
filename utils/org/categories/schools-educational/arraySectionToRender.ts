import { ORG_D_Detail_Admission } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Admission"
import {
  ContactUsCustomProperties_KEY,
  ORG_D_Detail_ContactUs,
  TEXT_BESIDE_BUTTON,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_OverviewDetails } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_OverviewDetails"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_SchoolAcademics } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_SchoolAcademics"
import { ORG_D_Detail_StudentDemographics } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_StudentDemographics"
import {
  ArraySectionToRender_Type,
  ArraySection_KEYS,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"
import { arraySectionToRenderDefault } from "../general/arraySectionToRenderDefault"

export const arrayInnerNavBar_SCHE: InnerNavBar_InnerData = [
  arraySectionToRenderDefault[0],
  arraySectionToRenderDefault[1],
  {
    INNER_NAV_BAR_KEY: "schoolInformation",
    INNER_NAV_BAR_VALUE: "School information",
  },
  arraySectionToRenderDefault[2],
  arraySectionToRenderDefault[3],
  arraySectionToRenderDefault[4],
]

export const arraySectionToRender_SchoolsEducational: ArraySectionToRender_Type =
  [
    {
      name: null,
      component: null,
      toNavbar: {
        id: arrayInnerNavBar_SCHE[0][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_OverviewDetails.name,
      component: ORG_D_Detail_OverviewDetails,
      toNavbar: {
        id: arrayInnerNavBar_SCHE[1][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_ContactUs.name,
      component: ORG_D_Detail_ContactUs,
      [ArraySection_KEYS.PROPS_COMPONENT]: {
        [ContactUsCustomProperties_KEY.ContactUsCustomProperties_KEY]:
          "no_display_UI",
        [TEXT_BESIDE_BUTTON.KEY]: "Is this product a good fit?",
      },
      toNavbar: {
        id: arrayInnerNavBar_SCHE[5][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_SCHE[5][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
    {
      name: ORG_D_Detail_Admission.name,
      component: ORG_D_Detail_Admission,
      toNavbar: {
        id: arrayInnerNavBar_SCHE[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_SCHE[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
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
    {
      name: ORG_D_Detail_Reviews.name,
      component: ORG_D_Detail_Reviews,
      toNavbar: {
        id: arrayInnerNavBar_SCHE[3][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_FAQS.name,
      component: ORG_D_Detail_FAQS,
      toNavbar: {
        id: arrayInnerNavBar_SCHE[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_SCHE[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
  ]
