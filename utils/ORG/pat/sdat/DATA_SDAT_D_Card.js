import { MapProperties_KEYS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_MapComponent"
import { DATA_ORG_KeyNamesForCards_D, DATA_ORG_KeyNamesForCards_D_KEYS } from "../../DATA_ORG_KeyNamesForCards_D"
import { arrayInnerNavBar_PAT, arraySectionToRender_PAT } from "../third-page/desktop/arraySectionToRender"
import { tooltipToRender_PAT } from "../third-page/desktop/tooltipToRender"

export const DATA_SDAT_D_CardRight = [
  {
    accessibilityFeatures: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "accessibility features",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Text-to-speech (TTS)", "Speech-to-text (STT)", "Screen magnification"],
    },
    platform: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "platform compatibility",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Windows", "Android", "Linux"],
    },
    support: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Support",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Online documentation", "Community Forums"],
    },
    payMethod: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Pay Method",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["One in life"],
    },

    thirdPageData: {
      folderName: "detail",
      card: {
        withBackground: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Diagnosis Served",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cognitive", "Learning", "Mobility", "Physical"],
        },
        left: {
          accessibilityFeatures: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Accessibility features",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Text-to-speech (TTS)", "Speech-to-text (STT)", "Screen magnification"],
          },
          platform: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Platform compatibility",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Windows", "Android", "Linux"],
          },
          support: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Support",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Online documentation", "Community Forums"],
          },
          payMethod: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Pay Method",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["One in life"],
          },
        },
        right: {
          inputMethods: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Input Methods",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Keyboard input", "Mouse Input", "Gesture Input"],
          },
          platform: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "User Customization",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Customizable settings", "Adaptive interfaces"],
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
    accessibilityFeatures: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Accessibility features",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Text-to-speech (TTS)", "Speech-to-text (STT)", "Screen magnification"],
    },
    platform: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Platform compatibility",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["iOS", "macOS"],
    },
    support: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Support",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Online documentation", "Community Forums"],
    },
    payMethod: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Pay Method",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Suscription"],
    },

    thirdPageData: {
      folderName: "detail",
      card: {
        withBackground: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Diagnosis Served",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cognitive", "Learning", "Mobility", "Physical"],
        },

        left: {
          accessibilityFeatures: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Accessibility features",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Text-to-speech (TTS)", "Speech-to-text (STT)", "Screen magnification"],
          },
          platform: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Platform compatibility",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["iOS", "macOS"],
          },
          support: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Support",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Online documentation", "Community Forums"],
          },
          payMethod: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Pay Method",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Suscription"],
          },
        },
        right: {
          inputMethods: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Input Methods",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Keyboard input", "Mouse Input", "Gesture Input"],
          },
          platform: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "User Customization",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Customizable settings", "Adaptive interfaces"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR]: arrayInnerNavBar_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: {
          [MapProperties_KEYS.HOW_MANY]: null,
        },
      },

      about:
        "Moving students to regular classes is the goal. We have expertise working with individuals who have a variety of developmental disabilities, including Autism, ADHD, Pervasive Developmental Disorder, speech and language delays, physical impairments, and many others...",
    },
  },
  {
    accessibilityFeatures: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Accessibility features",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Text-to-speech (TTS)", "Speech-to-text (STT)", "Screen magnification"],
    },
    platform: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Platform compatibility",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["iOS", "macOS"],
    },
    support: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Support",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Online documentation", "Community Forums"],
    },
    payMethod: {
      [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Pay Method",
      [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Suscription"],
    },

    thirdPageData: {
      folderName: "detail",
      card: {
        withBackground: {
          [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Diagnosis Served",
          [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Cognitive", "Learning", "Mobility", "Physical"],
        },

        left: {
          accessibilityFeatures: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Accessibility features",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Text-to-speech (TTS)", "Speech-to-text (STT)", "Screen magnification"],
          },
          platform: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Platform compatibility",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["iOS", "macOS"],
          },
          support: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Support",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Online documentation", "Community Forums"],
          },
          payMethod: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Pay Method",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Suscription"],
          },
        },
        right: {
          inputMethods: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "Input Methods",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Keyboard input", "Mouse Input", "Gesture Input"],
          },
          platform: {
            [DATA_ORG_KeyNamesForCards_D.KEY_NAME]: "User Customization",
            [DATA_ORG_KeyNamesForCards_D.VALUE_NAME]: ["Customizable settings", "Adaptive interfaces"],
          },
        },

        [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]: arraySectionToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.NAVIGATION_BAR]: arrayInnerNavBar_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]: tooltipToRender_PAT,
        [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]: {
          [MapProperties_KEYS.HOW_MANY]: null,
        },
      },

      about:
        "Moving students to regular classes is the goal. We have expertise working with individuals who have a variety of developmental disabilities, including Autism, ADHD, Pervasive Developmental Disorder, speech and language delays, physical impairments, and many others...",
    },
  },
]

export const DATA_SDAT_D_CardLeft = [
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "denise@truong-macgill.com",
    web: {
      fistName: "truong",
      lastName: "macgill",
    },
    location: {
      city: "Brooklyn",
      streetName: "Remsen Street, Suite #2",
      streetNumber: "163",
      state: "NY 11201",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "denise@truong-macgill.com",
    web: {
      fistName: "truong",
      lastName: "macgill",
    },
    location: {
      city: "Brooklyn",
      streetName: "Remsen Street, Suite #2",
      streetNumber: "163",
      state: "NY 11201",
      howFar: "3",
    },
  },
  {
    phone: "(012) 345-6789, ext. 4001",
    email: "denise@truong-macgill.com",
    web: {
      fistName: "truong",
      lastName: "macgill",
    },
    location: {
      city: "Brooklyn",
      streetName: "Remsen Street, Suite #2",
      streetNumber: "163",
      state: "NY 11201",
      howFar: "3",
    },
  },
]
