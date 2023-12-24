import ORG_CC8 from "@/assets/images/org/community-classes/ORG_CC8.png"
import ORG_DCTR5 from "@/assets/images/org/doctors/ORG_DCTR5.png"
import ORG_RP1 from "@/assets/images/org/residential-programs/ORG_RP1.png"
import ORG_RP2 from "@/assets/images/org/residential-programs/ORG_RP2.png"
import ORG_RP3 from "@/assets/images/org/residential-programs/ORG_RP3.png"
import ORG_RP6 from "@/assets/images/org/residential-programs/ORG_RP6.png"
import ORG_VES1 from "@/assets/images/org/vocational-employment/ORG_VES1.png"
import ORG_VES1_C from "@/assets/images/org/vocational-employment/ORG_VES1_C.png"
import ORG_VES3 from "@/assets/images/org/vocational-employment/ORG_VES3.png"
import ORG_VES4 from "@/assets/images/org/vocational-employment/ORG_VES4.png"
import { generateRandomNumber } from "@/utils/generateRandomNumber"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "../DATA_ORG_KeyNamesForCards_D"
import { BRAND_OPTION_DEFAULT, LAYOUT_RESULTS_MAIN_CARD_VALUES, SPECIFIC_DATA_KEY, Structure_SpecificData } from "../second-page/desktop/specificData"

const VES_SPECIFIC_DATA: Structure_SpecificData = {
  BUTTON_TO_THIRDPAGE_NAME: "Apply now",
  SVG: BRAND_OPTION_DEFAULT.DEFAULT,
  LAYOUT_RESULTS_MAIN_CARD: LAYOUT_RESULTS_MAIN_CARD_VALUES.VES_LIKE,
}

export const DATA_PVES_D = [
  [
    "Open Positions",
    {
      imageToUse: ORG_VES1_C,
      title: "Account assistant Aid",
      fullName: {
        first: "Account assistant Aid",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["Bilingual"],
      highlight_plus: ["Part-time", "Position with agency"],
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,

        [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]: {
          isPVES: true,

          tooltipApplyNow:
            "Accommodation during the application and hiring process available. Contact the Applicant-Candidate Accommodation Team.You can reach us by phone at 888-435-9287, Monday through Friday, between 6 a.m. and 4 p.m. ET.",

          workType: {
            key: "work type",
            value: "Full-time",
          },
          salaryRange: {
            key: "salary range",
            value: "$17.00/hr",
          },
          ADA: {
            key: "ADA Compliant workspace:",
            value: "yes",
          },

          brandName: "meta",
          datePosted: "Posted 10 hours ago",
        },
      },
    },
    {
      imageToUse: ORG_VES1_C,
      title: "Account assistant Aid",
      fullName: {
        first: "Account assistant Aid",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["SSI-Approved"],
      highlight_plus: ["Position with agency", "Part-time"],
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
        [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]: {
          isPVES: true,

          tooltipApplyNow:
            "Accommodation during the application and hiring process available. Contact the Applicant-Candidate Accommodation Team.You can reach us by phone at 888-435-9287, Monday through Friday, between 6 a.m. and 4 p.m. ET.",

          workType: {
            key: "work type",
            value: "Full-time",
          },
          salaryRange: {
            key: "salary range",
            value: "$17.00/hr",
          },
          ADA: {
            key: "ADA Compliant workspace:",
            value: "yes",
          },

          brandName: "meta",
          datePosted: "Posted 10 hours ago",
        },
      },
    },
    {
      imageToUse: ORG_RP2,
      title: "Account assistant Aid",
      fullName: {
        first: "Account assistant Aid",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["Community -based", "SSI-Approved"],
      highlight_plus: ["Position with agency", "Part-time"],
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
        [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]: {
          isPVES: true,

          tooltipApplyNow:
            "Accommodation during the application and hiring process available. Contact the Applicant-Candidate Accommodation Team.You can reach us by phone at 888-435-9287, Monday through Friday, between 6 a.m. and 4 p.m. ET.",

          workType: {
            key: "work type",
            value: "Full-time",
          },
          salaryRange: {
            key: "salary range",
            value: "$17.00/hr",
          },
          ADA: {
            key: "ADA Compliant workspace:",
            value: "yes",
          },

          brandName: "meta",
          datePosted: "Posted 10 hours ago",
        },
      },
    },
    {
      imageToUse: ORG_RP2,
      title: "Account assistant Aid",
      fullName: {
        first: "Account assistant Aid",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["Community -based", "SSI-Approved"],
      highlight_plus: ["Position with agency", "Part-time"],
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
        [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]: {
          isPVES: true,

          tooltipApplyNow:
            "Accommodation during the application and hiring process available. Contact the Applicant-Candidate Accommodation Team.You can reach us by phone at 888-435-9287, Monday through Friday, between 6 a.m. and 4 p.m. ET.",

          workType: {
            key: "work type",
            value: "Full-time",
          },
          salaryRange: {
            key: "salary range",
            value: "$17.00/hr",
          },
          ADA: {
            key: "ADA Compliant workspace:",
            value: "yes",
          },

          brandName: "meta",
          datePosted: "Posted 10 hours ago",
        },
      },
    },
  ],
  [
    "Highly-reviewed Companies",
    {
      imageToUse: ORG_VES1,
      title: "Health at Home Care Center",
      fullName: {
        first: "Health at Home Care Center",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable... ",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_VES3,
      title: "Pathways Residence",
      fullName: {
        first: "Pathways Residence",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Management has always been friendly and attentive. They take the time to...",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_VES4,
      title: "Community Connections",
      fullName: {
        first: "Pathways Residence",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular Supported Employment Programs",
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
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable... ",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
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
      textReview: "“Management has always been friendly and attentive. They take the time to...",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
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
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular Apprenticeships and Internships",
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
      textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable... ",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
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
      textReview: "“Management has always been friendly and attentive. They take the time to...",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
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
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
  ],
  [
    "Popular Job Training Coaches",
    {
      imageToUse: ORG_DCTR5,
      title: "Jose Mari Jimenez, MD",
      fullName: {
        first: "Jose Mari Jimenez, MD",
        last: "",
      },
      subtitle: "Family Medicine",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
    {
      imageToUse: ORG_CC8,
      title: "Bright Beginnings",
      fullName: {
        first: "Bright Beginnings",
        last: "",
      },
      subtitle: "Family Services-Group Home",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Management has always been friendly and attentive. They take the time to...",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
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
      textReview: "“Management has always been friendly and attentive. They take the time to...",
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: {
        ...VES_SPECIFIC_DATA,
      },
    },
  ],
]
