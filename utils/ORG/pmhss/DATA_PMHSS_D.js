import { generateRandomNumber } from "@/utils/generateRandomNumber"
import ORG_MHSS1 from "../../../assets/images/ORG/mental-health/ORG_MHSS1.png"
import ORG_MHSS2 from "../../../assets/images/ORG/mental-health/ORG_MHSS2.png"
import ORG_MHSS3 from "../../../assets/images/ORG/mental-health/ORG_MHSS3.png"

export const DATA_PMHSS_D = [
  [
    "Popular Mental Health Services",
    {
      imageToUse: ORG_MHSS1,
      title: "Kristie Leung, LMHC",
      fullName: {
        first: "Kristie",
        last: "Leung",
      },
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Kristie was super nice and helpful. I saw improvements in my child after 3 ...”",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_MHSS2,
      title: "Melissa Smith, LMHC, MA",
      fullName: {
        first: "Melissa",
        last: "Smith",
      },
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Smith was attentive, empathetic, and easy to talk to..She was very quick to ...”",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_MHSS3,
      title: "Sarah L. Hershman, MD",
      fullName: {
        first: "Sarah L.",
        last: "Hershman",
      },
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very helpful and insightful. We came up with a plan during the first session, and ...”",
      goToThirdPage: "",
    },
  ],
  [
    "Popular Family Support Services",
    {
      imageToUse: ORG_MHSS1,
      title: "Kristie Leung, LMHC",
      fullName: {
        first: "Sarah L.",
        last: "Hershman",
      },
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Kristie was super nice and helpful. I saw improvements in my child after 3 ...”",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_MHSS2,
      title: "Melissa Smith, LMHC, MA",
      fullName: {
        first: "Sarah L.",
        last: "Hershman",
      },
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Smith was attentive, empathetic, and easy to talk to..She was very quick to ...”",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_MHSS3,
      title: "Sarah L. Hershman, MD",
      fullName: {
        first: "Sarah L.",
        last: "Hershman",
      },
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very helpful and insightful. We came up with a plan during the first session, and ...”",
      goToThirdPage: "",
    },
  ],
]
