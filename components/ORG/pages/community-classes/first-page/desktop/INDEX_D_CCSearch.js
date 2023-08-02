import Image from 'next/image.js'
import { useEffect, useState } from 'react'
import { ORG_D_Search_ViewProfileSvg } from '../../../../../../assets/Icons/index.js'
import ORG_CC1 from "../../../../../../assets/images/ORG/community-classes/ORG_CC1.png"
import ORG_CC2 from "../../../../../../assets/images/ORG/community-classes/ORG_CC2.png"
import ORG_CC3 from "../../../../../../assets/images/ORG/community-classes/ORG_CC3.png"
import ORG_CC4 from "../../../../../../assets/images/ORG/community-classes/ORG_CC4.png"
import ORG_CC5 from "../../../../../../assets/images/ORG/community-classes/ORG_CC5.png"
import ORG_CC6 from "../../../../../../assets/images/ORG/community-classes/ORG_CC6.png"
import ORG_CC7 from "../../../../../../assets/images/ORG/community-classes/ORG_CC7.png"
import ORG_CC8 from "../../../../../../assets/images/ORG/community-classes/ORG_CC8.png"
import ORG_CC9 from "../../../../../../assets/images/ORG/community-classes/ORG_CC9.png"
import { generateRandomNumber } from '../../../../../../utils/generateRandomNumber.js'
import { ButtonSmall } from '../../../../../ui/buttons/general/index.js'
import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2, H3, H4 } from '../../../../../ui/heading_body_text/HeaderFonts.js'
import { StarsRatingReview_D } from '../../../../stars-rating-review/desktop/StarsRatingReview_D.js'
import { Verified } from '../../../../verified/Verified.js'
import { INDEX_D_CCSearchWrapper } from './styles/INDEX_D_CCSearchWrapper.js'

const DATA = [
  [
    "Popular Community Classes",
    {
      imageToUse: ORG_CC1,
      title: "Karate Group Class",
      subtitle: "Kicking the Spectrum",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“The experienced instructors are doing an excellent job teaching the proper form.. ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_CC2,
      title: "CMA Inclusive Art Class",
      subtitle: "Children’s Museum of the Arts",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I have noticed that my child has become more confident and independent... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_CC3,
      title: "Soccer Group Program",
      subtitle: "Super Soccer Stars",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“A great way to stay physically active, but also to learn important values such... ",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Fitness Classes",
    {
      imageToUse: ORG_CC4,
      title: "Karate Group Class",
      subtitle: "Kicking the Spectrum",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“The experienced instructors are doing an excellent job teaching the proper form.. ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_CC5,
      title: "CMA Inclusive Art Class",
      subtitle: "Children’s Museum of the Arts",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I have noticed that my child has become more confident and independent... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_CC6,
      title: "Soccer Group Program",
      subtitle: "Super Soccer Stars",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“A great way to stay physically active, but also to learn important values such... ",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Art Classes",
    {
      imageToUse: ORG_CC7,
      title: "Karate Group Class",
      subtitle: "Kicking the Spectrum",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“The experienced instructors are doing an excellent job teaching the proper form.. ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_CC8,
      title: "CMA Inclusive Art Class",
      subtitle: "Children’s Museum of the Arts",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I have noticed that my child has become more confident and independent... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_CC9,
      title: "Soccer Group Program",
      subtitle: "Super Soccer Stars",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“A great way to stay physically active, but also to learn important values such... ",
      goToThirdPage: ""
    }
  ],


]

export const INDEX_D_CCSearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  return (
    <INDEX_D_CCSearchWrapper>
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
      })}</INDEX_D_CCSearchWrapper>
  )
}