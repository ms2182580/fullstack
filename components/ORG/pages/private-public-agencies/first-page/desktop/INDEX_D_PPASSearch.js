import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons"
import { ButtonSmall } from "../../../../../../components/ui/buttons/general/index"
import { DATA_ORG_CheckPaths_Results_D } from "../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D"
import { DATA_ORG_D } from "../../../../../../utils/ORG/DATA_ORG_D"
import { DATA_A_D } from "../../../../../../utils/ORG/pppas/a/DATA_A_D"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../verified/Verified"
import { INDEX_D_PPASSearchWrapper } from "./styles/INDEX_D_PPASSearchWrapper.js"

// const DATA = [
//   [
//     "Popular Associations",
//     {
//       imageToUse: ORG_PPAS1,
//       title: "Housing Advocacy for People with Disabilities ",
//       subtitle: "Housing Organization",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Excellent grassroots, community-based organization working on all sorts of socia...",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_PPAS2,
//       title: "Housing Works",
//       subtitle: "Housing Nonprofit Organization",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“A NYC-based non-profit fighting the twin crises of AIDS and homelessness.",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_PPAS3,
//       title: "City Harvest",
//       subtitle: "Food Rescue Organization",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“For over 25 years City Harvest has served as a bridge between the food industry in...",
//       goToThirdPage: "",
//     },
//   ],
//   [
//     "Popular Private Not-for-Profit Organizations",
//     {
//       imageToUse: ORG_PPAS1,
//       title: "Housing Advocacy for People with Disabilities ",
//       subtitle: "Housing Organization",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Excellent grassroots, community-based organization working on all sorts of socia...",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_PPAS2,
//       title: "Housing Works",
//       subtitle: "Housing Nonprofit Organization",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“A NYC-based non-profit fighting the twin crises of AIDS and homelessness.",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_PPAS3,
//       title: "City Harvest",
//       subtitle: "Food Rescue Organization",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“For over 25 years City Harvest has served as a bridge between the food industry in...",
//       goToThirdPage: "",
//     },
//   ],
//   [
//     "Popular State Offices",
//     {
//       imageToUse: ORG_PPAS1,
//       title: "Housing Advocacy for People with Disabilities ",
//       subtitle: "Housing Organization",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Excellent grassroots, community-based organization working on all sorts of socia...",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_PPAS2,
//       title: "Housing Works",
//       subtitle: "Housing Nonprofit Organization",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“A NYC-based non-profit fighting the twin crises of AIDS and homelessness.",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_PPAS3,
//       title: "City Harvest",
//       subtitle: "Food Rescue Organization",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“For over 25 years City Harvest has served as a bridge between the food industry in...",
//       goToThirdPage: "",
//     },
//   ],
// ]

export const INDEX_D_PPASSearch = ({ positionInArray, isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_A_D.length)
    }
  }, [isSelected])

  const { pathname, push } = useRouter()

  const handleMoveToSecondPage = (e, title, possitionSubArr) => {
    let folder = DATA_ORG_D[positionInArray].acronym
    let subFolder = DATA_ORG_CheckPaths_Results_D[folder][possitionSubArr]

    push(
      {
        pathname: `${pathname}/${folder}/${subFolder}`,
        query: { mainPosition: positionInArray, title, possitionSubArr },
      },
      `${pathname}/${folder}/${subFolder}`,
    )
  }

  return (
    <INDEX_D_PPASSearchWrapper>
      {DATA_A_D.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${x.title}_${iData}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, i) => {
                  return (
                    <div key={`${i}_${obj.titleImage}_${obj.reviews}`}>
                      <div>
                        <Image
                          src={obj.imageToUse}
                          alt={obj.title}
                          layout="responsive"
                        />
                        <Verified />
                      </div>
                      <H3>{obj.title}</H3>
                      <H4>{obj.subtitle}</H4>
                      <P
                        medium
                        dark_gray>
                        {obj.city}
                      </P>
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
                <span
                  onClick={() => {
                    handleMoveToSecondPage(undefined, title, iData)
                  }}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_PPASSearchWrapper>
  )
}
