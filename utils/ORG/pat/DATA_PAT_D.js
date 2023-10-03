import { generateRandomNumber } from "@/utils/generateRandomNumber";
import ORG_AT1 from "../../../assets/images/ORG/assistive-technology/ORG_AT1.png";
import ORG_AT2 from "../../../assets/images/ORG/assistive-technology/ORG_AT2.png";
import ORG_AT3 from "../../../assets/images/ORG/assistive-technology/ORG_AT3.png";
import ORG_AT4 from "../../../assets/images/ORG/assistive-technology/ORG_AT4.png";
import ORG_AT5 from "../../../assets/images/ORG/assistive-technology/ORG_AT5.png";
import ORG_AT6 from "../../../assets/images/ORG/assistive-technology/ORG_AT6.png";
import ORG_AT7 from "../../../assets/images/ORG/assistive-technology/ORG_AT7.png";
import ORG_AT8 from "../../../assets/images/ORG/assistive-technology/ORG_AT8.png";
import ORG_AT9 from "../../../assets/images/ORG/assistive-technology/ORG_AT9.png";

export const DATA_PAT_D = [
  [
    "Popular Assistive Technology",
    {
      imageToUse: ORG_AT1,
      title: "Permobil F5 Corpus VS",
      subtitle: "Power Wheelchair",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Permobil combined all the performance features of the F5 Corpus with superior...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT2,
      title: "Rehasense ICON 60",
      subtitle: "Active Rigid Wheelchair",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "A lightweight rigid 7000 Series Aluminium Alloy frame and carbon fibre side guard ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT3,
      title: "PDG Mobility Fuze T50",
      subtitle: "Manual | Power Tilt",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Effortless centre-of-gravity pivot, the Fuze T50 Manual Tilt-in-Space wheelchair...",
      goToThirdPage: ""
    }
  ],

  [
    "Popular Software Assistive Technology",
    {
      imageToUse: ORG_AT4,
      title: "Proloquo",
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Proloquo is a new, groundbreaking AAC app designed for nonspeaking children ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT5,
      title: "simPODD",
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This user-friendly app makes communication more intuitive and ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT6,
      title: "Proloquo2Go",
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This app is great for people who want maximum flexibility. Out of the box, ...",
      goToThirdPage: ""
    }
  ],

  [
    "Popular Smart Devices with Assistive Technology",
    {
      imageToUse: ORG_AT7,
      title: "Amazon Echo Dot ",
      subtitle: "Smart home device",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Amazon Echo is a form of speaker which connects to other cloud-based ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT8,
      title: "Google Nest Hub",
      subtitle: "Smart home device",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Voice Assistant - OS supported: Android and iOS controls your smart home ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT9,
      title: "Wyze Plug",
      subtitle: "Smart plug",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This plug is compact, reliable, and affordable enough that you could ...",
      goToThirdPage: ""
    }
  ]
]

