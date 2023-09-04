import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons/index.js"
import { DATA_ORG_CheckPaths_Results_D } from "../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D.js"
import { DATA_ORG_D } from "../../../../../../utils/ORG/DATA_ORG_D.js"
import { DATA_LT_D } from "../../../../../../utils/ORG/prp/lt/DATA_LT_D.js"
import { ButtonSmall } from "../../../../../ui/buttons/general/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D.js"
import { Verified } from "../../../../verified/Verified.js"
import { INDEX_D_RPSearchWrapper } from "./styles/INDEX_D_RPSearchWrapper.js"

// const DATA = [
//   [
//     "Popular Long-Term Residential Programs",
//     {
//       imageToUse: ORG_RP1,
//       title: "Health at Home Care Center",
//       subtitle: "Family Services-Group Home",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable.... ",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_RP2,
//       title: "Pathways Residence",
//       subtitle: "Family Services-Group Home",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Management has always been friendly and attentive. They take the time to.... ",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_RP3,
//       title: "Community Connections",
//       subtitle: "Family Services-Group Home",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
//       goToThirdPage: ""
//     }
//   ],
//   [
//     "Popular Short-Term Residential Programs",
//     {
//       imageToUse: ORG_RP4,
//       title: "Empower Living",
//       subtitle: "Family Services-Group Home",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Health at Home blgs are old but well taken care of. Small but comfortable.... ",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_RP5,
//       title: "Harmony House on the West Side",
//       subtitle: "Family Services-Group Home",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Management has always been friendly and attentive. They take the time to.... ",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_RP6,
//       title: "Bright Beginnings",
//       subtitle: "Family Services-Group Home",
//       city: "Brooklyn, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“It’s been a great experience living here. The building is clean, safe, and comfort... ",
//       goToThirdPage: ""
//     }
//   ]
// ]

export const INDEX_D_RPSearch = ({ positionInArray, isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_LT_D.length)
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
    <INDEX_D_RPSearchWrapper>
      {DATA_LT_D.map((x, iData) => {
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
    </INDEX_D_RPSearchWrapper>
  )
}
