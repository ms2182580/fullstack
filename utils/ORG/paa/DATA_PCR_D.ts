import { generateRandomNumber } from "@/utils/generateRandomNumber"
import ORG_AA1 from "../../../assets/images/ORG/attorney-advocates/ORG_AA1.png"
import ORG_AA10 from "../../../assets/images/ORG/attorney-advocates/ORG_AA10.png"
import ORG_AA11 from "../../../assets/images/ORG/attorney-advocates/ORG_AA11.png"
import ORG_AA12 from "../../../assets/images/ORG/attorney-advocates/ORG_AA12.png"
import ORG_AA13 from "../../../assets/images/ORG/attorney-advocates/ORG_AA13.png"
import ORG_AA14 from "../../../assets/images/ORG/attorney-advocates/ORG_AA14.png"
import ORG_AA15 from "../../../assets/images/ORG/attorney-advocates/ORG_AA15.png"
import ORG_AA2 from "../../../assets/images/ORG/attorney-advocates/ORG_AA2.png"
import ORG_AA3 from "../../../assets/images/ORG/attorney-advocates/ORG_AA3.png"
import ORG_AA4 from "../../../assets/images/ORG/attorney-advocates/ORG_AA4.png"
import ORG_AA5 from "../../../assets/images/ORG/attorney-advocates/ORG_AA5.png"
import ORG_AA6 from "../../../assets/images/ORG/attorney-advocates/ORG_AA6.png"
import ORG_AA7 from "../../../assets/images/ORG/attorney-advocates/ORG_AA7.png"
import ORG_AA8 from "../../../assets/images/ORG/attorney-advocates/ORG_AA8.png"
import ORG_AA9 from "../../../assets/images/ORG/attorney-advocates/ORG_AA9.png"
import { BRAND_OPTION_DEFAULT, SPECIFIC_DATA_KEY, Structure_SpecificData } from "../second-page/desktop/specificData"

const AA_SPECIFIC_DATA: Structure_SpecificData = {
  BUTTON_TO_THIRDPAGE_NAME: "reqest consultation",
  SVG: BRAND_OPTION_DEFAULT.DEFAULT,
}

export const DATA_PAA_D = [
  [
    "Popular Civil Rights Attorneys",
    {
      imageToUse: ORG_AA1,
      title: "Denise N. Truong-MacGill, JD",
      fullName: {
        first: "Denise N.",
        last: "Truong-MacGill",
      },
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA2,
      title: "Leonard Abrahams, MDR, JD",
      fullName: {
        first: "Leonard",
        last: "Abrahams",
      },
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA3,
      title: "Nicole Baker, MDR, JD",
      fullName: {
        first: "Nicole",
        last: "Baker",
      },
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular Special Education Attorneys",
    {
      imageToUse: ORG_AA4,
      title: "Denise N. Truong-MacGill, JD",
      fullName: {
        first: "Denise N.",
        last: "Truong-MacGill",
      },
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA5,
      title: "Leonard Abrahams, MDR, JD",
      fullName: {
        first: "Leonard ",
        last: "Abrahams",
      },
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA6,
      title: "Nicole Baker, MDR, JD",
      fullName: {
        first: "Nicole ",
        last: "Baker",
      },
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular Elder Law & Medicaid Planning Attorneys",
    {
      imageToUse: ORG_AA7,
      title: "Denise N. Truong-MacGill, JD",
      fullName: {
        first: "Denise N.",
        last: "Truong-MacGill",
      },
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA8,
      title: "Leonard Abrahams, MDR, JD",
      fullName: {
        first: "Leonard ",
        last: "Abrahams",
      },
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA9,
      title: "Nicole Baker, MDR, JD",
      fullName: {
        first: "Nicole ",
        last: "Baker",
      },
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular Disability Attorneys",
    {
      imageToUse: ORG_AA10,
      title: "Denise N. Truong-MacGill, JD",
      fullName: {
        first: "Denise N.",
        last: "Truong-MacGill",
      },
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA11,
      title: "Leonard Abrahams, MDR, JD",
      fullName: {
        first: "Leonard ",
        last: "Abrahams",
      },
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA12,
      title: "Nicole Baker, MDR, JD",
      fullName: {
        first: "Nicole ",
        last: "Baker",
      },
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular I/DD Advocates",
    {
      imageToUse: ORG_AA13,
      title: "Denise N. Truong-MacGill, JD",
      fullName: {
        first: "Denise N.",
        last: "Truong-MacGill",
      },
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA14,
      title: "Leonard Abrahams, MDR, JD",
      fullName: {
        first: "Leonard ",
        last: "Abrahams",
      },
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_AA15,
      title: "Nicole Baker, MDR, JD",
      fullName: {
        first: "Nicole ",
        last: "Baker",
      },
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: "",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...AA_SPECIFIC_DATA,
      },
    },
  ],
]
