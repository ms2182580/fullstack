import ORG_ST1 from "../../../../assets/images/ORG/speech-therapists/ORG_ST1.png";
import ORG_ST2 from "../../../../assets/images/ORG/speech-therapists/ORG_ST2.png";
import ORG_ST3 from "../../../../assets/images/ORG/speech-therapists/ORG_ST3.png";
import ORG_ST4 from "../../../../assets/images/ORG/speech-therapists/ORG_ST4.png";
import { generateRandomNumber } from "../../../generateRandomNumber";

export const DATA_SLP_D = [
  [
    "Popular Speech Language Pathologists",
    {
      imageToUse: ORG_ST1,
      title: "Mary Jane, CCC -SLP",
      subtitle: "Speech Language Pathologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Mary Jane was very generous with her time and shared... ",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_ST2,
      title: "John Lowry, CCC -SLP",
      subtitle: "Speech Language Pathologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Lowry was very generous with his time and shared... ",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_ST3,
      title: "Sarah Smith, CCC -SLP",
      subtitle: "Speech Language Pathologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Smith was very generous with her time and shared... ",
      goToThirdPage: "",
    },
  ],
  [
    "Popular Occupational Therapists",
    {
      imageToUse: ORG_ST4,
      title: "Peter Abidi, CCC -SLP",
      subtitle: "Occupational Therapist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Abidi was very generous with his time and shared... ",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_ST2,
      title: "John Lowry, CCC -SLP",
      subtitle: "Occupational Therapist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Lowry was very generous with his time and shared... ",
      goToThirdPage: "",
    },
    {
      imageToUse: ORG_ST3,
      title: "Sarah Smith, CCC -SLP",
      subtitle: "Occupational Therapist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Smith was very generous with her time and shared... ",
      goToThirdPage: "",
    },
  ],
]