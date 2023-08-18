import Image from 'next/image.js'
import { useRouter } from 'next/router.js'
import { useEffect, useState } from 'react'
import { ORG_D_Search_ViewProfileSvg } from '../../../../../../assets/Icons/index.js'
import { DATA_ORG_CheckPaths_Results_D } from '../../../../../../utils/ORG/DATA_ORG_CheckPaths_Results_D.js'
import { DATA_ORG_D } from '../../../../../../utils/ORG/DATA_ORG_D.js'
import { DATA_DAY_D } from '../../../../../../utils/ORG/pcmps/day/DATA_DAY_D.js'
import { ButtonSmall } from '../../../../../ui/buttons/general/index.js'
import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2, H3, H4 } from '../../../../../ui/heading_body_text/HeaderFonts.js'
import { StarsRatingReview_D } from '../../../../stars-rating-review/desktop/StarsRatingReview_D.js'
import { Verified } from '../../../../verified/Verified.js'
import { INDEX_D_CMPSSearchWrapper } from './styles/INDEX_D_CMPSSearchWrapper.js'


// const DATA = [
//   [
//     "Popular Day Camps",
//     {
//       imageToUse: ORG_CMPS1,
//       title: "Belcor Day Camp Facility",
//       subtitle: "Day Camp",
//       city: "Beacon, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“My daughter attended and loved it! The on-site nurse was very helpful in making...",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_CMPS2,
//       title: "Walnut Ridge Girls Camp",
//       subtitle: "Day Camp",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Both of my daughters have attended every summer for 3 years now. Activities...",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_CMPS3,
//       title: "Liberty Lake Sports Camp",
//       subtitle: "Day Camp",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Great camp with great activities and facilities!”",
//       goToThirdPage: ""
//     }
//   ],
//   [
//     "Popular Overnight Camps",
//     {
//       imageToUse: ORG_CMPS1,
//       title: "Belcor Day Camp Facility",
//       subtitle: "Day Camp",
//       city: "Beacon, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“My daughter attended and loved it! The on-site nurse was very helpful in making...",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_CMPS2,
//       title: "Walnut Ridge Girls Camp",
//       subtitle: "Day Camp",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Both of my daughters have attended every summer for 3 years now. Activities...",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_CMPS3,
//       title: "Liberty Lake Sports Camp",
//       subtitle: "Day Camp",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Great camp with great activities and facilities!”",
//       goToThirdPage: ""
//     }
//   ],
//   [
//     "Popular Day Trips",
//     {
//       imageToUse: ORG_CMPS1,
//       title: "Belcor Day Camp Facility",
//       subtitle: "Day Camp",
//       city: "Beacon, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“My daughter attended and loved it! The on-site nurse was very helpful in making...",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_CMPS2,
//       title: "Walnut Ridge Girls Camp",
//       subtitle: "Day Camp",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Both of my daughters have attended every summer for 3 years now. Activities...",
//       goToThirdPage: ""
//     },
//     {
//       imageToUse: ORG_CMPS3,
//       title: "Liberty Lake Sports Camp",
//       subtitle: "Day Camp",
//       city: "Westchester, NY",
//       rating: generateRandomNumber(4, 5),
//       reviews: generateRandomNumber(47, 999),
//       textReview: "“Great camp with great activities and facilities!”",
//       goToThirdPage: ""
//     }
//   ]
// ]

export const INDEX_D_CMPSSearch = ({ positionInArray, isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_DAY_D.length)
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
    <INDEX_D_CMPSSearchWrapper>
      {DATA_DAY_D.map((x, iData) => {
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
                <span onClick={(e) => handleMoveToSecondPage(e, title, iData)}>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}

    </INDEX_D_CMPSSearchWrapper>
  )
}