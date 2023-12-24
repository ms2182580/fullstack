import { Layout_MainCardRight_VALUES } from "@/components/org/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { DATA_ORG_KeyNamesForCards_D, DATA_ORG_KeyNamesForCards_D_KEYS } from "../../DATA_ORG_KeyNamesForCards_D"
import { arraySectionToRender_PRP } from "../third-page/desktop/arraySectionToRender"
import { tooltipToRender_PRP } from "../third-page/desktop/tooltipToRender"

const contactUsCustomProperties = {
  title: "I have questions about",
  data: [
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
}

export const DATA_CardRight_PRP = [
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS]: {
      [DATA_ORG_KeyNamesForCards_D_KEYS.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D_KEYS.HIGHLIGHT_PLUS],
      [DATA_ORG_KeyNamesForCards_D_KEYS.VALUE_NAME]: ["Accepting new residents"],
    },

    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Referral Required", "Does Evaluations"],
    },

    cost: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Cost",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assisted Living Starting At: $4300/month"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["5-21 years old"],
    },

    setting: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Temporary or Permanent"],
    },

    specialization: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Specialization",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Behavior Therapy"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Autism, ADHD"],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          agesServed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["5-21 years old"],
          },

          languagesSpokenByStaff: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages Spoken By Staff",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "French"],
          },

          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Temporary or Permanent"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          price: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assisted Living Starting At: $4300/month", "Independent Living Starting At: $3800/month"],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },

          paymentOptions: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment options",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Private Pay", "Medicaid", "DOE Contract"],
          },

          specializedProgramming: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Specialized programming",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Behavior therapy, speech and language therapy, occupational therapy, and sensory integration therapy, ... more"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PRP,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]: Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PRP,
        [DATA_ORG_KeyNamesForCards_D_KEYS.CONTACT_US_CUSTOM_PROPERTIES]: contactUsCustomProperties,
      },
    },
  },
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Referral Required", "Does Evaluations"],
    },

    cost: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Cost",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assisted Living Starting At: $4300/month"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["5-21 years old"],
    },

    setting: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Temporary or Permanent"],
    },

    specialization: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Specialization",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Behavior Therapy"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Autism, ADHD"],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          agesServed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["5-21 years old"],
          },

          languagesSpokenByStaff: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages Spoken By Staff",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "French"],
          },

          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Temporary or Permanent"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          price: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assisted Living Starting At: $4300/month", "Independent Living Starting At: $3800/month"],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },

          paymentOptions: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment options",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Private Pay", "Medicaid", "DOE Contract"],
          },

          specializedProgramming: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Specialized programming",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Behavior therapy, speech and language therapy, occupational therapy, and sensory integration therapy, ... more"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PRP,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]: Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PRP,
        [DATA_ORG_KeyNamesForCards_D_KEYS.CONTACT_US_CUSTOM_PROPERTIES]: contactUsCustomProperties,
      },
    },
  },
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Referral Required", "Does Evaluations"],
    },

    cost: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Cost",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assisted Living Starting At: $4300/month"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["5-21 years old"],
    },

    setting: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Temporary or Permanent"],
    },

    specialization: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Specialization",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Behavior Therapy"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Autism, ADHD"],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          agesServed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["5-21 years old"],
          },

          languagesSpokenByStaff: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages Spoken By Staff",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "French"],
          },

          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Temporary or Permanent"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          price: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assisted Living Starting At: $4300/month", "Independent Living Starting At: $3800/month"],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },

          paymentOptions: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment options",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Private Pay", "Medicaid", "DOE Contract"],
          },

          specializedProgramming: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Specialized programming",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Behavior therapy, speech and language therapy, occupational therapy, and sensory integration therapy, ... more"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PRP,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]: Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PRP,
        [DATA_ORG_KeyNamesForCards_D_KEYS.CONTACT_US_CUSTOM_PROPERTIES]: contactUsCustomProperties,
      },
    },
  },
]

export const DATA_CardLeft_PRP = [
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "H&H.CareCenter@healthcenter.com",
    web: {
      fistName: "HealthAtHome",
      lastName: "Center",
    },
    location: {
      city: "Brooklyn",
      streetName: "Livingston St",
      streetNumber: "223",
      state: "NY 10217",
      howFar: "11",
    },
  },
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "Pathway@residence.com",
    web: {
      fistName: "Pathway",
      lastName: "residence",
    },
    location: {
      city: "Brooklyn",
      streetName: "Livingston St",
      streetNumber: "223",
      state: "NY 11217",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "CommunityConnections@gmail.com",
    web: {
      fistName: "Community",
      lastName: "Connections",
    },
    location: {
      city: "Brooklyn",
      streetName: "Livingston St",
      streetNumber: "293",
      state: "NY 12217",
      howFar: "5",
    },
  },
]
