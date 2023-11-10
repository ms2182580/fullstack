import ORG_CC8 from "@/assets/images/ORG/community-classes/ORG_CC8.png"
import ORG_DCTR5 from "@/assets/images/ORG/doctors/ORG_DCTR5.png"
import ORG_RP1 from "@/assets/images/ORG/residential-programs/ORG_RP1.png"
import ORG_RP2 from "@/assets/images/ORG/residential-programs/ORG_RP2.png"
import ORG_RP3 from "@/assets/images/ORG/residential-programs/ORG_RP3.png"
import ORG_RP6 from "@/assets/images/ORG/residential-programs/ORG_RP6.png"
import ORG_VES1 from "@/assets/images/ORG/vocational-employment/ORG_VES1.png"
import ORG_VES1_C from "@/assets/images/ORG/vocational-employment/ORG_VES1_C.png"
import ORG_VES3 from "@/assets/images/ORG/vocational-employment/ORG_VES3.png"
import ORG_VES4 from "@/assets/images/ORG/vocational-employment/ORG_VES4.png"
import { generateRandomNumber } from "@/utils/generateRandomNumber"

export const DATA_PVES_D = [
  [
    "Open Positions",
    {
      imageToUse: ORG_VES1_C,
      title: "Account assistant Aid",
      fullName: {
        first: "",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["Bilingual"],
      highlight_plus: ["Part-time", "Position with agency"],
    },
    {
      imageToUse: ORG_VES1_C,
      title: "Account assistant Aid",
      fullName: {
        first: "",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["SSI-Approved"],
      highlight_plus: ["Position with agency", "Part-time"],
    },
    {
      imageToUse: ORG_RP2,
      title: "Account assistant Aid",
      fullName: {
        first: "",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["Community -based", "SSI-Approved"],
      highlight_plus: ["Position with agency", "Part-time"],
    },
    {
      imageToUse: ORG_RP2,
      title: "Account assistant Aid",
      fullName: {
        first: "",
        last: "",
      },
      subtitle: "Human Care Healthcare Service",
      city: "Brooklyn, NY 11216",
      hourlyRate: "Part-time,  $17 - $19.00 / hour",
      highlight: ["Community -based", "SSI-Approved"],
      highlight_plus: ["Position with agency", "Part-time"],
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
    },
    {
      imageToUse: ORG_RP3,
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
    },
    {
      imageToUse: ORG_RP3,
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
    },
  ],
]
