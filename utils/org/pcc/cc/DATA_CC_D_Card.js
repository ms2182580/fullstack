import ORG_Detail_CC_Karate_Photo_1 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_1.png"
import ORG_Detail_CC_Karate_Photo_2 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_2.png"
import ORG_Detail_CC_Karate_Photo_3 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_3.png"
import { Layout_MainCardRight_VALUES } from "@/components/org/flow/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { generateRandomNumber } from "@/utils/generateRandomNumber"
import {
  DATA_ORG_KeyNamesForCards_D,
  DATA_ORG_KeyNamesForCards_D_KEYS,
} from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { arraySectionToRender_PCC } from "../third-page/desktop/arraySectionToRender"
import { tooltipToRender_PCC } from "../third-page/desktop/tooltipToRender"

export const DATA_CardRight_PCC = [
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
        "Free Trial",
        "Consistent Routine",
        "Stretching",
        "Calisthenics",
        "Punching/Kicking",
      ],
    },

    typeOfMartialArts: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Type of Martial Arts",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Japanese Shotokan Karate"],
    },
    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["3-21+ Years Old"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
            "Japanese Shotokan Karate",
          ],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          typeOfMartialArts: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Type of Martial Arts",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Japanese Shotokan Karate",
            ],
          },
          agesServed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["3-21+ Years Old"],
          },
          languages: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English"],
          },
          operationHours: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Operation Hours",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Mon-Fri: 3PM - 7PM",
              "Saturday: 9AM-1PM",
              "Sunday: 10AM-1PM",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          classDuration: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Duration",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["30 Minutes - 1 hour"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          payment: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "$50/class (package deals and private lessons)",
            ],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["In Person"],
          },
          classSize: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Size",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "4 - 11 Students",
              "1 Teacher",
              "1 ABA Therapist",
            ],
          },
          classSchedule: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Schedule",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Rolling Basis, package of classes/private lessons can be used within anytime within the year",
            ],
          },
          additionalCredentials: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Additional Credentials",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Masters of Business Administration",
              "Martial Arts Teacher-Training Certification",
              "Masters in Early Childhood Special Education",
              "Board Certified Behavior Analyst (BCBA)",
            ],
            [DATA_ORG_KeyNamesForCards_D.CARD]: true,
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PCC,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]:
          Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PCC,
      },

      [DATA_ORG_KeyNamesForCards_D_KEYS.USERS_ALSO_VIEWES]: [
        {
          image: ORG_Detail_CC_Karate_Photo_1,
          title: "Integrated Classes",
          rating: generateRandomNumber(4, 5),
          review:
            "“I attended a local karate class with a positive and energetic atmosphere that made me feel strong and inspired.” ",
        },
        {
          image: ORG_Detail_CC_Karate_Photo_2,
          title: "Parent/Child & Sibling Class",
          rating: generateRandomNumber(4, 5),
          review:
            "“I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while.” ",
        },
        {
          image: ORG_Detail_CC_Karate_Photo_3,
          title: "Parent/Child & Sibling Class",
          rating: generateRandomNumber(4, 5),
          review:
            "“I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while.” ",
        },
      ],
    },
  },
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
        "Free Class",
        "Occupational Therapist",
      ],
    },

    typeOfArt: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Type of Arts",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Media Lab and Fine Arts"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["All Ages Accepted"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
            "Japanese Shotokan Karate",
          ],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          typeOfMartialArts: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Type of Martial Arts",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Japanese Shotokan Karate",
            ],
          },
          agesServed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["3-21+ Years Old"],
          },
          languages: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English"],
          },
          operationHours: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Operation Hours",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Mon-Fri: 3PM - 7PM",
              "Saturday: 9AM-1PM",
              "Sunday: 10AM-1PM",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          classDuration: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Duration",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["30 Minutes - 1 hour"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          payment: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "$50/class (package deals and private lessons)",
            ],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["In Person"],
          },
          classSize: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Size",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "4 - 11 Students",
              "1 Teacher",
              "1 ABA Therapist",
            ],
          },
          classSchedule: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Schedule",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Rolling Basis, package of classes/private lessons can be used within anytime within the year",
            ],
          },
          additionalCredentials: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Additional Credentials",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Masters of Business Administration",
              "Martial Arts Teacher-Training Certification",
              "Masters in Early Childhood Special Education",
              "Board Certified Behavior Analyst (BCBA)",
            ],
            [DATA_ORG_KeyNamesForCards_D.CARD]: true,
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PCC,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]:
          Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PCC,
      },

      [DATA_ORG_KeyNamesForCards_D_KEYS.USERS_ALSO_VIEWES]: [
        {
          image: ORG_Detail_CC_Karate_Photo_1,
          title: "Integrated Classes",
          rating: generateRandomNumber(4, 5),
          review:
            "“I attended a local karate class with a positive and energetic atmosphere that made me feel strong and inspired.” ",
        },
        {
          image: ORG_Detail_CC_Karate_Photo_2,
          title: "Parent/Child & Sibling Class",
          rating: generateRandomNumber(4, 5),
          review:
            "“I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while.” ",
        },
        {
          image: ORG_Detail_CC_Karate_Photo_3,
          title: "Parent/Child & Sibling Class",
          rating: generateRandomNumber(4, 5),
          review:
            "“I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while.” ",
        },
      ],
    },
  },
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [
        DATA_ORG_KeyNamesForCards_D.HIGHLIGHT,
      ],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Free Class"],
    },

    sportProgram: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Sport Program",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Player and Team Cooperation"],
    },

    agesServed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["3-21+ Years Old"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Practice Areas",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
            "Japanese Shotokan Karate",
          ],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          typeOfMartialArts: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Type of Martial Arts",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Japanese Shotokan Karate",
            ],
          },
          agesServed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Ages Served",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["3-21+ Years Old"],
          },
          languages: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English"],
          },
          operationHours: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Operation Hours",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Mon-Fri: 3PM - 7PM",
              "Saturday: 9AM-1PM",
              "Sunday: 10AM-1PM",
            ],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
          classDuration: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Duration",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["30 Minutes - 1 hour"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          payment: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Payment",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "$50/class (package deals and private lessons)",
            ],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["In Person"],
          },
          classSize: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Size",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "4 - 11 Students",
              "1 Teacher",
              "1 ABA Therapist",
            ],
          },
          classSchedule: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Class Schedule",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Rolling Basis, package of classes/private lessons can be used within anytime within the year",
            ],
          },
          additionalCredentials: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Additional Credentials",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: [
              "Masters of Business Administration",
              "Martial Arts Teacher-Training Certification",
              "Masters in Early Childhood Special Education",
              "Board Certified Behavior Analyst (BCBA)",
            ],
            [DATA_ORG_KeyNamesForCards_D.CARD]: true,
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PCC,
        [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]:
          Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PCC,
      },

      [DATA_ORG_KeyNamesForCards_D_KEYS.USERS_ALSO_VIEWES]: [
        {
          image: ORG_Detail_CC_Karate_Photo_1,
          title: "Integrated Classes",
          rating: generateRandomNumber(4, 5),
          review:
            "“I attended a local karate class with a positive and energetic atmosphere that made me feel strong and inspired.” ",
        },
        {
          image: ORG_Detail_CC_Karate_Photo_2,
          title: "Parent/Child & Sibling Class",
          rating: generateRandomNumber(4, 5),
          review:
            "“I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while.” ",
        },
        {
          image: ORG_Detail_CC_Karate_Photo_3,
          title: "Parent/Child & Sibling Class",
          rating: generateRandomNumber(4, 5),
          review:
            "“I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while.” ",
        },
      ],
    },
  },
]

export const DATA_CardLeft_PCC = [
  {
    mainName: "Karate Group Class",
    phone: "(012) 345-6789",
    email: "info@kickingthespectrum.com",
    web: {
      fistName: "kick",
      lastName: "thespectrum",
    },
    location: {
      city: "Brooklyn",
      streetName: "Livingston St",
      streetNumber: "293",
      state: "NY 11217",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789",
    email: "info@cmany.org",
    web: {
      fistName: "c",
      lastName: "many",
    },
    location: {
      city: "Brooklyn",
      streetName: "Eastern Pkwy",
      streetNumber: "200",
      state: "NY 11238",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789",
    email: "info@developmentsoccer.com",
    web: {
      fistName: "development",
      lastName: "soccer",
    },
    location: {
      city: "Brooklyn",
      streetName: "Livingston St",
      streetNumber: "293",
      state: "NY 11217",
      howFar: "3",
    },
  },
]
