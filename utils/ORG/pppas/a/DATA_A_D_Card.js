import { DATA_ORG_KeyNamesForCards_D, DATA_ORG_KeyNamesForCards_D_KEYS } from "../../DATA_ORG_KeyNamesForCards_D"
import { arraySectionToRender_PPAS } from "../third-page/desktop/arraySectionToRender"
import { tooltipToRender_PPPAS } from "../third-page/desktop/tooltipToRender"

export const DATA_CardRight_PPPAS = [
  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Disability Rights", "Housing Support"],
    },

    areaOfFocus: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Area of focus",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing Advocacy"],
    },

    servicesOffered: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Services offered",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing", "Rent Relief", "Housing Discrimination", "Home-Owner Assistance Fund"],
    },

    languagesSpoken: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "English",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "translators on site"],
    },

    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Areas of focus",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing Advocacy"],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          languagues: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "translators available"],
          },
          operationHour: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Operation Hours",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Mon-Fri: 8:00AM - 5:00PM"],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["In-Person & Virtual"],
          },
          /*        about:{
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "About",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Are your housing issues keeping you up at night? Do you owe your landlord money? Are you worried about eviction? We may be able to help!"],
          }   */
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          servicesOfferes: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Services Offered",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing", "Discrimination", "Rent Relief", "Home-Owner Assistance Fund"],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
        },
        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PPAS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PPPAS,
      },
    },

    //highlights: ["Disability Rights", "Housing Support"],
    //areaOfFocus: "Housing Advocacy",
    // servicesOffered: ["Housing", "Rent Relief", "Housing Discrimination", "Home-Owner Assistance Fund"],
    //languagesSpoken: ["English", "translators on site"]
  },

  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Disability Etiquette", "Resource Guide"],
    },

    areaOfFocus: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Area of focus",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cerebral Palsy"],
    },

    servicesOffered: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Services offered",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assistive Technology", "Healthcare", "Safety", "Transportation", "Research & Statistics", "Resource Guide"],
    },

    languagesSpoken: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "English",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "translators on site"],
    },

    /* THIRD PAGE HERE */
    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Areas of focus",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing Advocacy"],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          languagues: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "translators available"],
          },
          operationHour: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Operation Hours",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Mon-Fri: 8:00AM - 5:00PM"],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["In-Person & Virtual"],
          },
          /*        about:{
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "About",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Are your housing issues keeping you up at night? Do you owe your landlord money? Are you worried about eviction? We may be able to help!"],
          }   */
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          servicesOfferes: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Services Offered",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing", "Discrimination", "Rent Relief", "Home-Owner Assistance Fund"],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
        },
        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PPAS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PPPAS,
      },
    },
  },

  {
    [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: [DATA_ORG_KeyNamesForCards_D.HIGHLIGHT],
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Disability Etiquette", "Resource Guide"],
    },

    areaOfFocus: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Area of focus",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cerebral Palsy"],
    },

    servicesOffered: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Services offered",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Assistive Technology", "Healthcare", "Safety", "Transportation", "Research & Statistics", "Resource Guide"],
    },

    languagesSpoken: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "English",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "translators on site"],
    },

    /* THIRD PAGE HERE */
    [DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA]: {
      [DATA_ORG_KeyNamesForCards_D.FOLDER_NAME]: "detail",
      [DATA_ORG_KeyNamesForCards_D.CARD]: {
        [DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND]: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Areas of focus",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing Advocacy"],
        },

        [DATA_ORG_KeyNamesForCards_D.LEFT]: {
          languagues: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Languages",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["English", "Spanish", "translators available"],
          },
          operationHour: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Operation Hours",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Mon-Fri: 8:00AM - 5:00PM"],
          },
          setting: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Setting",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["In-Person & Virtual"],
          },
          /*        about:{
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "About",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Are your housing issues keeping you up at night? Do you owe your landlord money? Are you worried about eviction? We may be able to help!"],
          }   */
        },

        [DATA_ORG_KeyNamesForCards_D.RIGHT]: {
          servicesOfferes: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Services Offered",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Housing", "Discrimination", "Rent Relief", "Home-Owner Assistance Fund"],
            [DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK]: true,
          },
        },
        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PPAS,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PPPAS,
      },
    },
  },
]

export const DATA_CardLeft_PPPAS = [
  {
    phone: "(212) 345-6789, ext. 4001",

    email: "www.truong-macgill.com",
    location: {
      city: "Brooklyn",
      streetName: "Remsen Street, Suite #2",
      streetNumber: "163",
      state: "NY 11201",
      howFar: "3",
    },
  },
  {
    phone: "(212) 360-1224",
    email: "info@ucp.org",
    location: {
      city: "Brooklyn",
      streetName: "Pineapple Street",
      streetNumber: "29",
      state: "NY 11201",
      howFar: "3",
    },
  },
  {
    phone: "(212) 360-1224",
    email: "info@ucp.org",
    location: {
      city: "Brooklyn",
      streetName: "Pineapple Street",
      streetNumber: "29",
      state: "NY 11201",
      howFar: "3",
    },
  },
]
