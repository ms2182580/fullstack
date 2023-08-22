import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons/index.js"
import { StarsRatingReview_D } from "../../../../../../components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { ButtonSmall } from "../../../../../../components/ui/buttons/general/index"
import { P } from "../../../../../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { DATA_ORG_CheckPaths_Results_D } from "../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D.js"
import { DATA_ORG_D } from "../../../../../../utils/ORG/DATA_ORG_D.js"
import { DATA_MH_D } from "../../../../../../utils/ORG/pmhss/mh/DATA_MH_D.js"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { Verified } from "../../../../verified/Verified.js"
import { INDEX_D_MHSSSearchWrapper } from "./styles/INDEX_D_MHSSSearchWrapper.js"

// const DATA = [
//   [
//     "Popular Mental Health Services",
//     {
//       imageToUse: ORG_MHSS1,
//       title: "Kristie Leung, LMHC",
//       subtitle: "Psychotherapist",
//       city: "New York, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Kristie was super nice and helpful. I saw improvements in my child after 3 ...”",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_MHSS2,
//       title: "Melissa Smith, LMHC, MA",
//       subtitle: "Psychotherapist",
//       city: "New York, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Dr. Smith was attentive, empathetic, and easy to talk to..She was very quick to ...”",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_MHSS3,
//       title: "Sarah L. Hershman, MD",
//       subtitle: "Psychotherapist",
//       city: "New York, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Very helpful and insightful. We came up with a plan during the first session, and ...”",
//       goToThirdPage: "",
//     },
//   ],
//   [
//     "Popular Family Support Services",
//     {
//       imageToUse: ORG_MHSS1,
//       title: "Kristie Leung, LMHC",
//       subtitle: "Psychotherapist",
//       city: "New York, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Kristie was super nice and helpful. I saw improvements in my child after 3 ...”",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_MHSS2,
//       title: "Melissa Smith, LMHC, MA",
//       subtitle: "Psychotherapist",
//       city: "New York, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Dr. Smith was attentive, empathetic, and easy to talk to..She was very quick to ...”",
//       goToThirdPage: "",
//     },
//     {
//       imageToUse: ORG_MHSS3,
//       title: "Sarah L. Hershman, MD",
//       subtitle: "Psychotherapist",
//       city: "New York, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Very helpful and insightful. We came up with a plan during the first session, and ...”",
//       goToThirdPage: "",
//     },
//   ],
// ]

export const INDEX_D_MHSSSearch = ({ positionInArray, isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_MH_D.length)
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
    <INDEX_D_MHSSSearchWrapper>
      {DATA_MH_D.map((x, iData) => {
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
    </INDEX_D_MHSSSearchWrapper>
  )
}
