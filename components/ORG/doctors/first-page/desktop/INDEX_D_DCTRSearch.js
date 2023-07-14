import { ButtonSmall } from '../../../../ui/buttons/general/index.js'
import { Caption } from '../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2 } from '../../../../ui/heading_body_text/HeaderFonts.js'
import { INDEX_D_DCTRSearchWrapper } from './styles/INDEX_D_DCTRSearchWrapper.js'

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

export const INDEX_D_DCTRSearch = ({ isSelected = false }) => {
  return (
    <INDEX_D_DCTRSearchWrapper>
      <H2 semi_bold>Popular Doctors</H2>
      <div>Some cards here </div>
      <div>Some cards here </div>
      <div>Some cards here </div>

      <ButtonSmall secondary >
        <Caption bold>See all </Caption>{" "}
        <Caption
          bold
          dark_gray>
          (25)
        </Caption>
      </ButtonSmall>


      {isSelected && <>EVEN MORE CARDS HERE IN </>}
    </INDEX_D_DCTRSearchWrapper>
  )
}