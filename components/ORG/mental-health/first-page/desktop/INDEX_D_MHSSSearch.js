import Image from 'next/image.js'
import { useEffect, useState } from 'react'
import { ORG_D_Search_ViewProfileSvg } from '../../../../../assets/Icons/index.js'
import ORG_MHSS1 from "../../../../../assets/images/ORG/mental-health/ORG_MHSS1.png"
import ORG_MHSS2 from "../../../../../assets/images/ORG/mental-health/ORG_MHSS2.png"
import ORG_MHSS3 from "../../../../../assets/images/ORG/mental-health/ORG_MHSS3.png"
import { generateRandomNumber } from '../../../../../utils/generateRandomNumber.js'
import { ButtonSmall } from '../../../../ui/buttons/general/index.js'
import { P } from '../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2, H3, H4 } from '../../../../ui/heading_body_text/HeaderFonts.js'
import { StarsRatingReview_D } from '../../../stars-rating-review/desktop/StarsRatingReview_D.js'
import { Verified } from '../../../verified/Verified.js'
import { INDEX_D_MHSSSearchWrapper } from './styles/INDEX_D_MHSSSearchWrapper.js'


const DATA = [
  [
    "Popular Mental Health Services",
    {
      imageToUse: ORG_MHSS1,
      title: "Kristie Leung, LMHC",
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Kristie was super nice and helpful. I saw improvements in my child after 3 ...”",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_MHSS2,
      title: "Melissa Smith, LMHC, MA",
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Smith was attentive, empathetic, and easy to talk to..She was very quick to ...”",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_MHSS3,
      title: "Sarah L. Hershman, MD",
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very helpful and insightful. We came up with a plan during the first session, and ...”",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Family Support Services",
    {
      imageToUse: ORG_MHSS1,
      title: "Kristie Leung, LMHC",
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Kristie was super nice and helpful. I saw improvements in my child after 3 ...”",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_MHSS2,
      title: "Melissa Smith, LMHC, MA",
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Smith was attentive, empathetic, and easy to talk to..She was very quick to ...”",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_MHSS3,
      title: "Sarah L. Hershman, MD",
      subtitle: "Psychotherapist",
      city: "New York, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very helpful and insightful. We came up with a plan during the first session, and ...”",
      goToThirdPage: ""
    }
  ],
]

export const INDEX_D_MHSSSearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  return (
    <INDEX_D_MHSSSearchWrapper>
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
                        <Verified />
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

    </INDEX_D_MHSSSearchWrapper>
  )
}