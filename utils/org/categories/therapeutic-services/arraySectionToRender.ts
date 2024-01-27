import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import {
  HEADER_TITLE,
  IS_USABLE_SECTION,
  ORG_D_Detail_Schedule,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { ORG_D_Detail_AtTheSameClinic } from "@/components/org/cards_resources/third-page/general/desktop/ORG_D_Detail_AtTheSameClinic"
import {
  ArraySectionToRender_Type,
  InnerNavBar_InnerData,
  InnerNavBar_InnerData_KEYS,
} from "@/utils/org/third-page/InnerNavBar"
import { DATA_ORG_D_TYPES_KEYS } from "../../DATA_ORG_D"

export const arrayInnerNavBar_THRP: InnerNavBar_InnerData = [
  { INNER_NAV_BAR_KEY: "about" },
  { INNER_NAV_BAR_KEY: "booking" },
  {
    INNER_NAV_BAR_KEY: "otherProviders",
    INNER_NAV_BAR_VALUE: "other providers",
  },
  { INNER_NAV_BAR_KEY: "reviews" },
  {
    INNER_NAV_BAR_KEY: "faqs",
    INNER_NAV_BAR_VALUE: "FAQs",
  },
]

export const arraySectionToRender_TherapeuticServices: ArraySectionToRender_Type =
  [
    {
      name: null,
      component: null,
      toNavbar: {
        id: arrayInnerNavBar_THRP[0][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_Schedule.name,
      component: ORG_D_Detail_Schedule,
      props_component: {
        [IS_USABLE_SECTION.KEY]: true,
        [HEADER_TITLE.KEY]: "Select an available time",
      },
      toNavbar: {
        id: arrayInnerNavBar_THRP[1][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_AtTheSameClinic.name,
      component: ORG_D_Detail_AtTheSameClinic,
      toNavbar: {
        id: arrayInnerNavBar_THRP[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_THRP[2][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
    {
      name: ORG_D_Detail_Reviews.name,
      component: ORG_D_Detail_Reviews,
      props_component: {
        [DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]: true,
      },
      toNavbar: {
        id: arrayInnerNavBar_THRP[3][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
      },
    },
    {
      name: ORG_D_Detail_FAQS.name,
      component: ORG_D_Detail_FAQS,
      toNavbar: {
        id: arrayInnerNavBar_THRP[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY
        ],
        jsx: arrayInnerNavBar_THRP[4][
          InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE
        ],
      },
    },
  ]
