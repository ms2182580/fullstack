import { ORG_D_Detail_FAQS } from "@/components/org/flow/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_OverviewDetails } from "@/components/org/flow/third-page/desktop/ORG_D_Detail_OverviewDetails"
import {
  KEYS_FOR_PROPS,
  ORG_D_Detail_Reviews,
} from "@/components/org/flow/third-page/desktop/ORG_D_Detail_Reviews"
import { PVES_General_D_Graphics } from "@/components/org/flow_resources/third-page/pves/general/desktop/PVES_General_D_Graphics"
import { PVES_General_D_PublicAssistanceApplicants } from "@/components/org/flow_resources/third-page/pves/general/desktop/PVES_General_D_PublicAssistanceApplicants"
import {
  ArraySectionToRender_Type,
  ArraySection_KEYS,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"
import { arraySectionToRenderDefault } from "../general/arraySectionToRenderDefault"

export const arrayInnerNavBar_VCTNL: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "jobDetails", INNER_NAV_BAR_VALUE: "job details" },
  { INNER_NAV_BAR_KEY: "aboutEmployer", INNER_NAV_BAR_VALUE: "about employer" },
  { INNER_NAV_BAR_KEY: "publicAid", INNER_NAV_BAR_VALUE: "public Aid" },
  arraySectionToRenderDefault[2],
  arraySectionToRenderDefault[3],
]

export const arraySectionToRender_Vocational: ArraySectionToRender_Type = [
  {
    name: null,
    component: null,
    toNavbar: {
      id: "about",
      jsx: arrayInnerNavBar_VCTNL[0][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },
  {
    name: ORG_D_Detail_OverviewDetails.name,
    component: ORG_D_Detail_OverviewDetails,
    toNavbar: {
      id: null,
    },
  },
  {
    name: PVES_General_D_Graphics.name,
    component: PVES_General_D_Graphics,
    toNavbar: {
      id: arrayInnerNavBar_VCTNL[1][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
      jsx: arrayInnerNavBar_VCTNL[1][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },
  {
    name: PVES_General_D_PublicAssistanceApplicants.name,
    component: PVES_General_D_PublicAssistanceApplicants,
    toNavbar: {
      id: arrayInnerNavBar_VCTNL[2][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
      jsx: arrayInnerNavBar_VCTNL[2][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    [ArraySection_KEYS.PROPS_COMPONENT]: {
      [KEYS_FOR_PROPS.TITLE_ON_HEADER]: {
        title: "Employer reviews ( via Glassdoor )",
        highlight: ["Glassdoor"],
      },
    },
    toNavbar: {
      id: arrayInnerNavBar_VCTNL[3][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: arrayInnerNavBar_VCTNL[4][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
      ],
      jsx: arrayInnerNavBar_VCTNL[4][
        InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
      ],
    },
  },
]
