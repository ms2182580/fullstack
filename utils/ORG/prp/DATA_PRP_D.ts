import { RP_Results_MiddleButton } from "@/assets/Icons/RP_Results_MiddleButton"
import { Structure_SpecificData } from "@/utils/ORG/second-page/desktop/specificData"
import ORG_RP1 from "../../../assets/images/ORG/residential-programs/ORG_RP1.png"
import ORG_RP2 from "../../../assets/images/ORG/residential-programs/ORG_RP2.png"
import ORG_RP3 from "../../../assets/images/ORG/residential-programs/ORG_RP3.png"
import ORG_RP4 from "../../../assets/images/ORG/residential-programs/ORG_RP4.png"
import ORG_RP5 from "../../../assets/images/ORG/residential-programs/ORG_RP5.png"
import ORG_RP6 from "../../../assets/images/ORG/residential-programs/ORG_RP6.png"
import { generateRandomNumber } from "../../generateRandomNumber"
import { SPECIFIC_DATA_KEY } from "../second-page/desktop/specificData"

const RP_SPECIFIC_DATA: Structure_SpecificData = {
  BUTTON_TO_THIRDPAGE_NAME: "contact us",
  SVG: RP_Results_MiddleButton,
}

export const DATA_PRP_D = [
  [
    "Popular Long-Term Residential Programs",
    {
      imageToUse: ORG_RP1,
      title: "Health at Home Care Center",
      fullName: {
        first: "Health at Home Care Center",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable.... ",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: RP_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_RP2,
      title: "Pathways Residence",
      fullName: {
        first: "Pathways Residence",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Management has always been friendly and attentive. They take the time to.... ",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: RP_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_RP3,
      title: "Community Connections",
      fullName: {
        first: "Community Connections",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: RP_SPECIFIC_DATA,
    },
  ],
  [
    "Popular Short-Term Residential Programs",
    {
      imageToUse: ORG_RP4,
      title: "Empower Living",
      fullName: {
        first: "Empower Living",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable.... ",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: RP_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_RP5,
      title: "Harmony House on the West Side",
      fullName: {
        first: "Harmony House on the West Side",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Management has always been friendly and attentive. They take the time to.... ",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: RP_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_RP6,
      title: "Bright Beginnings",
      fullName: {
        first: "Bright Beginnings",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: RP_SPECIFIC_DATA,
    },
  ],
]
