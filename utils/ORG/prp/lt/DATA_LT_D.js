import ORG_RP1 from "../../../../assets/images/ORG/residential-programs/ORG_RP1.png"
import ORG_RP2 from "../../../../assets/images/ORG/residential-programs/ORG_RP2.png"
import ORG_RP3 from "../../../../assets/images/ORG/residential-programs/ORG_RP3.png"
import ORG_RP4 from "../../../../assets/images/ORG/residential-programs/ORG_RP4.png"
import ORG_RP5 from "../../../../assets/images/ORG/residential-programs/ORG_RP5.png"
import ORG_RP6 from "../../../../assets/images/ORG/residential-programs/ORG_RP6.png"
import { generateRandomNumber } from "../../../generateRandomNumber"

export const DATA_LT_D = [
  [
    "Popular Long-Term Residential Programs",
    {
      imageToUse: ORG_RP1,
      title: "Health at Home Care Center",
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable.... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_RP2,
      title: "Pathways Residence",
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Management has always been friendly and attentive. They take the time to.... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_RP3,
      title: "Community Connections",
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Short-Term Residential Programs",
    {
      imageToUse: ORG_RP4,
      title: "Empower Living",
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable.... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_RP5,
      title: "Harmony House on the West Side",
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Management has always been friendly and attentive. They take the time to.... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_RP6,
      title: "Bright Beginnings",
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
      goToThirdPage: ""
    }
  ]
]