import Image from "next/image"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../assets/Icons"
import ORG_ST1 from "../../../../../assets/images/ORG/speech-therapists/ORG_ST1.png"
import ORG_ST2 from "../../../../../assets/images/ORG/speech-therapists/ORG_ST2.png"
import ORG_ST3 from "../../../../../assets/images/ORG/speech-therapists/ORG_ST3.png"
import ORG_ST4 from "../../../../../assets/images/ORG/speech-therapists/ORG_ST4.png"
import { generateRandomNumber } from "../../../../../utils/generateRandomNumber"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { INDEX_D_STSearchWrapper } from "./styles/INDEX_D_STSearchWrapper"

const DATA = [
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
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_ST2,
      title: "John Lowry, CCC -SLP",
      subtitle: "Speech Language Pathologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Lowry was very generous with his time and shared... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_ST3,
      title: "Sarah Smith, CCC -SLP",
      subtitle: "Speech Language Pathologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Smith was very generous with her time and shared... ",
      goToThirdPage: ""
    }
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
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_ST2,
      title: "John Lowry, CCC -SLP",
      subtitle: "Occupational Therapist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Lowry was very generous with his time and shared... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_ST3,
      title: "Sarah Smith, CCC -SLP",
      subtitle: "Occupational Therapist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Excellent manner. Dr. Smith was very generous with her time and shared... ",
      goToThirdPage: ""
    }
  ],

]


export const INDEX_D_STSearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  // const { shouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()


  // const { data: userFetched, filters: filtersST } = useFetchNoFiltersDesktop(1, 6, "landingThreeCardsHere → 3", shouldFetchDesktopNoFilters)

  return (
    <INDEX_D_STSearchWrapper>
      {DATA.map((x, i) => {
        const [title, ...objects] = x
        while (howMuchDisplay > i) {
          return (
            <>
              <div key={`${x.title}_${i}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, i) => {
                  return (
                    <div key={`${i}_${obj.titleImage}_${obj.reviews}`}>
                      <div>
                        <Image
                          src={obj.imageToUse}
                          alt={obj.title}
                          layout='responsive'
                        />
                      </div>
                      <H3>{obj.title}</H3>
                      <H4>{obj.subtitle}</H4>
                      <P medium dark_gray>{obj.city}</P>
                      <StarsRatingReview_D
                        rating={obj.rating}
                        reviews={obj.reviews}
                      />
                      <P>{obj.textReview}</P>

                      <span>
                        <ButtonSmall>
                          <ORG_D_Search_ViewProfileSvg /> View Profile
                        </ButtonSmall>
                      </span>
                    </div>
                  )
                })}
                <span>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_STSearchWrapper>
  )
}
