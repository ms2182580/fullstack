import { MapProperties_KEYS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_MapComponent"
import { DATA_ORG_KeyNamesForCards_D, DATA_ORG_KeyNamesForCards_D_KEYS } from "../../DATA_ORG_KeyNamesForCards_D"
import { DATA_PAT_D_KEYS } from "../DATA_PAT_D"
import { arrayInnerNavBar_PAT, arraySectionToRender_PAT } from "../third-page/desktop/arraySectionToRender"
import { tooltipToRender_PAT } from "../third-page/desktop/tooltipToRender"

export const DATA_CardRight_PAT = [
  {
    price: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "price",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["$36,000 - $37,888"],
    },

    speed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "speed",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["7.5 mph (12 kmh)"],
    },

    range: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "range",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["24 miles (40 km)"],
    },

    maxWeight: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Max. Weight",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["300 lbs (136 kg)"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Diagnosis Served",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cognitive", "Learning", "Mobility", "Physical"],
        },
        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          speed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "speed",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["7.5 mph (12 kmh)"],
          },
          range: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "range",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["24 miles (40 km)"],
          },
          seatLift: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Seat Lift",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["35 cm"],
          },
          seatTilt: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "eat Tilt",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["50°"],
          },
        },
        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          price: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "price",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["$36,000 - $37,888"],
          },
          maxWeight: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Max User Weight",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["300 lbs (136 kg)"],
          },
          additionalInformation: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Additional information",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Available in 24 different colors, Advanced control system with full color LCD display... "],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR]: arrayInnerNavBar_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: {
          [MapProperties_KEYS.HOW_MANY]: null,
        },
      },
    },
  },
  {
    price: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["From $1,495.00"],
    },

    speed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "speed",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["manual"],
    },

    range: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "range",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["self powered"],
    },

    maxWeight: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Max. Weight",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["264 lbs (120 kg)"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Diagnosis Served",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cognitive", "Learning", "Mobility", "Physical"],
        },
        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          speed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "speed",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["manual"],
          },
          range: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "range",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["self powered"],
          },
          seatLift: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Seat Lift",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["35 cm"],
          },
          seatTilt: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "eat Tilt",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["50°"],
          },
        },
        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          price: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["From $1,495.00"],
          },
          maxWeight: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Max User Weight",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["264 lbs (120 kg)"],
          },
          additionalInformation: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Additional information",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Available in 24 different colors, Advanced control system with full color LCD display... "],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR]: arrayInnerNavBar_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: {
          [MapProperties_KEYS.HOW_MANY]: null,
        },
      },
    },
  },
  {
    price: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["From $1,495.00"],
    },

    speed: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "speed",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["manual"],
    },

    range: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "range",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["self powered"],
    },

    maxWeight: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Max. Weight",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["264 lbs (120 kg)"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Diagnosis Served",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cognitive", "Learning", "Mobility", "Physical"],
        },
        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          speed: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "speed",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["manual"],
          },
          range: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "range",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["self powered"],
          },
          seatLift: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Seat Lift",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["35 cm"],
          },
          seatTilt: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "eat Tilt",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["50°"],
          },
        },
        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          price: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Price",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["From $1,495.00"],
          },
          maxWeight: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Max User Weight",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["264 lbs (120 kg)"],
          },
          additionalInformation: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Additional information",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Available in 24 different colors, Advanced control system with full color LCD display... "],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR]: arrayInnerNavBar_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: {
          [MapProperties_KEYS.HOW_MANY]: null,
        },
      },
    },
  },
]

export const DATA_CardLeft_PAT = [
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "info@assistiveware.com",
    [DATA_PAT_D_KEYS.BRAND_THIRDPAGE_KEY]: "permobile corpus industries inc",
    web: {
      fistName: "assistiveware",
      lastName: "",
    },
    location: {
      city: "Netherlands",
      streetName: "Laurierstraat 193",
      streetNumber: "163",
      state: "Amsterdam, null 1016 PL",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "info@assistiveware.com",
    [DATA_PAT_D_KEYS.BRAND_THIRDPAGE_KEY]: "permobile corpus industries inc",
    web: {
      fistName: "assistiveware",
      lastName: "",
    },
    location: {
      city: "Netherlands",
      streetName: "Laurierstraat 193",
      streetNumber: "163",
      state: "Amsterdam, null 1016 PL",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "info@assistiveware.com",
    [DATA_PAT_D_KEYS.BRAND_THIRDPAGE_KEY]: "permobile corpus industries inc",
    web: {
      fistName: "assistiveware",
      lastName: "",
    },
    location: {
      city: "Netherlands",
      streetName: "Laurierstraat 193",
      streetNumber: "163",
      state: "Amsterdam, null 1016 PL",
      howFar: "3",
    },
  },
]
