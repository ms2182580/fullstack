import Image from 'next/image.js'
import { useEffect, useState } from 'react'
import { ORG_D_Search_ViewProfileSvg } from '../../../../../../assets/Icons/index.js'
import ORG_SES1 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES1.png"
import ORG_SES2 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES2.png"
import ORG_SES3 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES3.png"
import ORG_SES4 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES4.png"
import ORG_SES5 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES5.png"
import ORG_SES6 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES6.png"
import ORG_SES7 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES7.png"
import ORG_SES8 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES8.png"
import ORG_SES9 from "../../../../../../assets/images/ORG/special-education-schools/ORG_SES9.png"
import { generateRandomNumber } from '../../../../../../utils/generateRandomNumber.js'
import { ButtonSmall } from '../../../../../ui/buttons/general/index.js'
import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2, H3, H4 } from '../../../../../ui/heading_body_text/HeaderFonts.js'
import { StarsRatingReview_D } from '../../../../stars-rating-review/desktop/StarsRatingReview_D.js'
import { Verified } from '../../../../verified/Verified.js'
import { INDEX_D_SESSearchWrapper } from './styles/INDEX_D_SESSearchWrapper.js'


const DATA = [
  [
    "Popular Special Education Schools",
    {
      imageToUse: ORG_SES1,
      title: "NYL William O'Connor Middle School",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I'm glad the school supported my child's education It's important for students to...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_SES2,
      title: "Brooklyn Autism Center",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Feeling included and valued contributes to their overall academic and personal... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_SES3,
      title: "Shema Kolainu - Hear Our Voices",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Prioritized creating a welcoming and inclusive environment for all students...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Preschools",
    {
      imageToUse: ORG_SES4,
      title: "NYL William O'Connor Middle School",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I'm glad the school supported my child's education It's important for students to...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_SES5,
      title: "Brooklyn Autism Center",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Feeling included and valued contributes to their overall academic and personal... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_SES6,
      title: "Shema Kolainu - Hear Our Voices",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Prioritized creating a welcoming and inclusive environment for all students...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Private Schools",
    {
      imageToUse: ORG_SES7,
      title: "NYL William O'Connor Middle School",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I'm glad the school supported my child's education It's important for students to...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_SES8,
      title: "Brooklyn Autism Center",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Feeling included and valued contributes to their overall academic and personal... ",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_SES9,
      title: "Shema Kolainu - Hear Our Voices",
      subtitle: "Preschool",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Prioritized creating a welcoming and inclusive environment for all students...",
      goToThirdPage: ""
    }
  ],


]

export const INDEX_D_SESSearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  return (
    <INDEX_D_SESSearchWrapper>
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
    </INDEX_D_SESSearchWrapper>
  )
}