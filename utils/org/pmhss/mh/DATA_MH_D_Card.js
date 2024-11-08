import { Layout_MainCardRight_VALUES } from "@/components/org/flow/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import {
  DATA_ORG_KeyNamesForCards_D,
  DATA_ORG_KeyNamesForCards_D_KEYS,
} from "../../DATA_ORG_KeyNamesForCards_D"
import { arraySectionToRender_PMHSS } from "../third-page/desktop/arraySectionToRender"
import { mapRender_PMHSS } from "../third-page/desktop/mapRender"
import { tooltipToRender_PMHSS } from "../third-page/desktop/tooltipToRender"

export const DATA_CardRight_PMHSS = [
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Accepting new clients"],
    },

    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Free Consultation"],
    },

    yearsInPractice: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Years in practice",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["10"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["13+ years old"],
    },

    languages: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "languages",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
        "English",
        "Mandarin",
        "Cantonese",
      ],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Focus Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
            "ADHD",
            "ADHD Coaching",
            "Adolescent/Teen Issues",
            "Anxiety",
            "Behavioral Therapy",
            "Mental Health Consultation",
            "Therapy",
            "Parenting Counseling",
          ],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          facility: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Facility",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Clinic",
              "Private Practice",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          languages: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "English",
              "Mandarin",
              "Cantonese",
            ],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Virtual", "In-person"],
          },
          wheelchairAccessible: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Wheelchair accessible",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Yes"],
          },
          parkingAvailable: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Parking available",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Yes"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          paymentOptions: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment options",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "In-network insurance",
              "Medicaid",
              "DOE Contract",
            ],
          },
          outOfPocketFees: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Out-of-pocket fees",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["$200 for 60 minutes"],
          },
          qualifications: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Qualifications",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Years in Practice: 10",
              "License Number: 1409990926",
              "State of License: New York",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          education: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Education",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["New York University"],
          },
          practiceName: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice name",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Bellevue Mental Health",
            ],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]:
          Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: mapRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]: true,
      },
    },
  },
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Free Consultation"],
    },

    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Accepting new clients"],
    },

    yearsInPractice: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Years in practice",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["10"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["13+ years old"],
    },

    languages: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "languages",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
        "English",
        "Mandarin",
        "Cantonese",
      ],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        practiceAreas: "Sports/Fitness",

        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Focus Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
            "ADHD",
            "ADHD Coaching",
            "Adolescent/Teen Issues",
            "Anxiety",
            "Behavioral Therapy",
            "Mental Health Consultation",
            "Therapy",
            "Parenting Counseling",
          ],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          facility: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Facility",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Clinic",
              "Private Practice",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          languages: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "English",
              "Mandarin",
              "Cantonese",
            ],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Virtual", "In-person"],
          },
          wheelchairAccessible: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Wheelchair accessible",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Yes"],
          },
          parkingAvailable: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Parking available",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Yes"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          paymentOptions: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment options",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "In-network insurance",
              "Medicaid",
              "DOE Contract",
            ],
          },
          outOfPocketFees: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Out-of-pocket fees",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["$200 for 60 minutes"],
          },
          qualifications: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Qualifications",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Years in Practice: 10",
              "License Number: 1409990926",
              "State of License: New York",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          education: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Education",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["New York University"],
          },
          practiceName: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice name",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Bellevue Mental Health",
            ],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]:
          Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: mapRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]: true,
      },
    },
  },
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Free Consultation"],
    },

    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT_PLUS,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Accepting new clients"],
    },

    yearsInPractice: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Years in practice",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["10"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["13+ years old"],
    },

    languages: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "languages",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
        "English",
        "Mandarin",
        "Cantonese",
      ],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        practiceAreas: "Sports/Fitness",

        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Focus Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
            "ADHD",
            "ADHD Coaching",
            "Adolescent/Teen Issues",
            "Anxiety",
            "Behavioral Therapy",
            "Mental Health Consultation",
            "Therapy",
            "Parenting Counseling",
          ],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          facility: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Facility",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Clinic",
              "Private Practice",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          languages: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "English",
              "Mandarin",
              "Cantonese",
            ],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Virtual", "In-person"],
          },
          wheelchairAccessible: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Wheelchair accessible",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Yes"],
          },
          parkingAvailable: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Parking available",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Yes"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          paymentOptions: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment options",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "In-network insurance",
              "Medicaid",
              "DOE Contract",
            ],
          },
          outOfPocketFees: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Out-of-pocket fees",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["$200 for 60 minutes"],
          },
          qualifications: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Qualifications",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Years in Practice: 10",
              "License Number: 1409990926",
              "State of License: New York",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          education: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Education",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["New York University"],
          },
          practiceName: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice name",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Bellevue Mental Health",
            ],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]:
          Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: mapRender_PMHSS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]: true,
      },
    },
  },
]

export const DATA_CardLeft_PMHSS = [
  {
    phone: "(123)456-7890",
    email: "kristieleung@bellevuehealth.com",
    web: {
      fistName: "bellevue",
      lastName: "mentalhealth",
    },
    location: {
      city: "New York",
      streetName: "Spring Street, Fl 9",
      streetNumber: "200",
      state: "NY 10012",
      howFar: "20",
    },
  },
  {
    phone: "(212) 098-0266",
    email: "info@libertylakecamp.com",
    web: {
      fistName: "libertylake",
      lastName: "camp",
    },
    location: {
      city: "New York",
      streetName: "Spring Street, Fl 9",
      streetNumber: "200",
      state: "NY 10012",
      howFar: "20",
    },
  },
  {
    phone: "(212) 098-0266",
    email: "info@libertylakecamp.com",
    web: {
      fistName: "libertylake",
      lastName: "camp",
    },
    location: {
      city: "New York",
      streetName: "Spring Street, Fl 9",
      streetNumber: "200",
      state: "NY 10012",
      howFar: "20",
    },
  },
]
