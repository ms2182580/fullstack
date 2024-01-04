import { generateRandomNumber } from "@/utils/generateRandomNumber"
import ORG_CMPS1 from "../../../assets/images/org/camps/ORG_CMPS1.png"
import ORG_CMPS2 from "../../../assets/images/org/camps/ORG_CMPS2.png"
import ORG_CMPS3 from "../../../assets/images/org/camps/ORG_CMPS3.png"
import { SPECIFIC_DATA_KEY, Structure_SpecificData } from "../second-page/desktop/specificData"

export const CMPS_DAY_SPECIFIC_DATA: Structure_SpecificData = {
  BUTTON_TO_THIRDPAGE_NAME: "See Schedule",
}

export const DATA_PCMPS_D = [
  [
    "Popular Day Camps",
    {
      imageToUse: ORG_CMPS1,
      title: "Belcor Day Camp Facility",
      fullName: {
        first: "Belcor Day Camp Facility",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Beacon, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“My daughter attended and loved it! The on-site nurse was very helpful in making...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_CMPS2,
      title: "Walnut Ridge Girls Camp",
      fullName: {
        first: "Walnut Ridge Girls Camp",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Westchester, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Both of my daughters have attended every summer for 3 years now. Activities...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_CMPS3,
      title: "Liberty Lake Sports Camp",
      fullName: {
        first: "Liberty Lake Sports Camp",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Westchester, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Great camp with great activities and facilities!”",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
  ],
  [
    "Popular Overnight Camps",
    {
      imageToUse: ORG_CMPS1,
      title: "Belcor Day Camp Facility",
      fullName: {
        first: "Belcor Day Camp Facility",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Beacon, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“My daughter attended and loved it! The on-site nurse was very helpful in making...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_CMPS2,
      title: "Walnut Ridge Girls Camp",
      subtitle: "Day Camp",
      fullName: {
        first: "Walnut Ridge Girls Camp",
        last: "",
      },
      city: "Westchester, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Both of my daughters have attended every summer for 3 years now. Activities...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_CMPS3,
      title: "Liberty Lake Sports Camp",
      subtitle: "Day Camp",
      fullName: {
        first: "Liberty Lake Sports Camp",
        last: "",
      },
      city: "Westchester, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Great camp with great activities and facilities!”",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
  ],
  [
    "Popular Day Trips",
    {
      imageToUse: ORG_CMPS1,
      title: "Belcor Day Camp Facility",
      fullName: {
        first: "Belcor Day Camp Facility",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Beacon, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“My daughter attended and loved it! The on-site nurse was very helpful in making...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_CMPS2,
      title: "Walnut Ridge Girls Camp",
      fullName: {
        first: "Walnut Ridge Girls Camp",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Westchester, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Both of my daughters have attended every summer for 3 years now. Activities...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
    {
      imageToUse: ORG_CMPS3,
      title: "Liberty Lake Sports Camp",
      fullName: {
        first: "Liberty Lake Sports Camp",
        last: "",
      },
      subtitle: "Day Camp",
      city: "Westchester, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Great camp with great activities and facilities!”",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: CMPS_DAY_SPECIFIC_DATA,
    },
  ],
]
