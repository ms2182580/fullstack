import { ORG_D_Results_ATSvg } from "@/assets/Icons"
import { generateRandomNumber } from "@/utils/generateRandomNumber"
import ORG_AT1 from "../../../assets/images/ORG/assistive-technology/ORG_AT1.png"
import ORG_AT10 from "../../../assets/images/ORG/assistive-technology/ORG_AT10.png"
import ORG_AT11 from "../../../assets/images/ORG/assistive-technology/ORG_AT11.png"
import ORG_AT12 from "../../../assets/images/ORG/assistive-technology/ORG_AT12.png"
import ORG_AT13 from "../../../assets/images/ORG/assistive-technology/ORG_AT13.png"
import ORG_AT14 from "../../../assets/images/ORG/assistive-technology/ORG_AT14.png"
import ORG_AT15 from "../../../assets/images/ORG/assistive-technology/ORG_AT15.png"
import ORG_AT2 from "../../../assets/images/ORG/assistive-technology/ORG_AT2.png"
import ORG_AT3 from "../../../assets/images/ORG/assistive-technology/ORG_AT3.png"
import ORG_AT4 from "../../../assets/images/ORG/assistive-technology/ORG_AT4.png"
import ORG_AT5 from "../../../assets/images/ORG/assistive-technology/ORG_AT5.png"
import ORG_AT6 from "../../../assets/images/ORG/assistive-technology/ORG_AT6.png"
import ORG_AT7 from "../../../assets/images/ORG/assistive-technology/ORG_AT7.png"
import ORG_AT8 from "../../../assets/images/ORG/assistive-technology/ORG_AT8.png"
import ORG_AT9 from "../../../assets/images/ORG/assistive-technology/ORG_AT9.png"
import { SPECIFIC_DATA_KEY, Structure_SpecificData } from "../specificData"
import { AT_WCMD_SPECIFIC_DATA } from "./wcmd/second-page/desktop/toThirdPageButton"

export const enum DATA_PAT_D_KEYS {
  BUTTON_TO_THIRDPAGE_NAME_KEY = "BUTTON_TO_THIRDPAGE_NAME",
  BUTTON_TO_THIRDPAGE_NAME_VALUE = "purchase option",
  BRAND_THIRDPAGE_KEY = "BRAND_THIRDPAGE_KEY",
}

export const PAT_SPECIFIC_DATA: Structure_SpecificData = {
  [SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME]: DATA_PAT_D_KEYS.BUTTON_TO_THIRDPAGE_NAME_VALUE,
  [SPECIFIC_DATA_KEY.SVG]: ORG_D_Results_ATSvg,
  BRAND: "Permobil",
}

export const DATA_PAT_D = [
  [
    "Popular Wheelchairs & Mobility Devices",
    {
      imageToUse: ORG_AT1,
      title: "Permobil F5 Corpus VS",
      fullName: {
        first: "Permobil F5 Corpus VS",
        last: "",
      },
      subtitle: "Power Wheelchair",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Permobil combined all the performance features of the F5 Corpus with superior...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: AT_WCMD_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT2,
      title: "Rehasense ICON 60",
      fullName: {
        first: "Rehasense ICON 60",
        last: "",
      },
      subtitle: "Active Rigid Wheelchair",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "A lightweight rigid 7000 Series Aluminium Alloy frame and carbon fibre side guard ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: AT_WCMD_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT3,
      title: "PDG Mobility Fuze T50",
      fullName: {
        first: "PDG Mobility Fuze T50",
        last: "",
      },
      subtitle: "Manual | Power Tilt",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Effortless centre-of-gravity pivot, the Fuze T50 Manual Tilt-in-Space wheelchair...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: AT_WCMD_SPECIFIC_DATA,
    },
  ],
  [
    "Popular Tools for School",
    {
      imageToUse: ORG_AT10,
      title: "AudioNote",
      fullName: {
        first: "AudioNote",
        last: "",
      },
      subtitle: "Electronic notetakers",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Amazon Echo is a form of speaker which connects to other cloud-based ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT11,
      title: "Amazon Polly",
      fullName: {
        first: "Amazon Polly",
        last: "",
      },
      subtitle: "Text-to-speech software",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Voice Assistant - OS supported: Android and iOS controls your smart home ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT12,
      title: "Tipy Keyboard",
      fullName: {
        first: "Tipy Keyboard",
        last: "",
      },
      subtitle: "Adaptive keyboards and mice",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This plug is compact, reliable, and affordable enough that you could ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
  ],
  [
    "Popular Augmented Communication Software",
    {
      imageToUse: ORG_AT4,
      title: "Proloquo",
      fullName: {
        first: "Proloquo",
        last: "",
      },
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Proloquo is a new, groundbreaking AAC app designed for nonspeaking children ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT5,
      title: "simPODD",
      fullName: {
        first: "simPODD",
        last: "",
      },
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This user-friendly app makes communication more intuitive and ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT6,
      title: "Proloquo2Go",
      fullName: {
        first: "Proloquo2Go",
        last: "",
      },
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This app is great for people who want maximum flexibility. Out of the box, ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
  ],
  [
    "Popular Smart Devices with Assistive Technology",
    {
      imageToUse: ORG_AT7,
      title: "Amazon Echo Dot",
      fullName: {
        first: "Amazon Echo Dot ",
        last: "",
      },
      subtitle: "Smart home device",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Amazon Echo is a form of speaker which connects to other cloud-based ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT8,
      title: "Google Nest Hub",
      fullName: {
        first: "Google Nest Hub",
        last: "",
      },
      subtitle: "Smart home device",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Voice Assistant - OS supported: Android and iOS controls your smart home ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT9,
      title: "Wyze Plug",
      fullName: {
        first: "Wyze Plug",
        last: "",
      },
      subtitle: "Smart plug",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This plug is compact, reliable, and affordable enough that you could ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
  ],
  [
    "Innovative Hi-tech Assistive Technology",
    {
      imageToUse: ORG_AT13,
      title: "Emotiv EPOC",
      fullName: {
        first: "Emotiv EPOC ",
        last: "",
      },
      subtitle: "Brain-computer Interface",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Amazon Echo is a form of speaker which connects to other cloud-based ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT14,
      title: "Occulus Rift",
      fullName: {
        first: "Occulus Rift",
        last: "",
      },
      subtitle: "Virtual reality systems",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Voice Assistant - OS supported: Android and iOS controls your smart home ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_AT15,
      title: "JACO Assistive...",
      fullName: {
        first: "JACO Assistive...",
        last: "",
      },
      subtitle: "Smart plug",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This plug is compact, reliable, and affordable enough that you could ...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    },
  ],
]
