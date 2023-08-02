import Image from "next/image.js"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons/index.js"
import ORG_DCTR1 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR1.png"
import ORG_DCTR2 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR2.png"
import ORG_DCTR3 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR3.png"
import ORG_DCTR4 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR4.png"
import ORG_DCTR5 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR5.png"
import ORG_DCTR6 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR6.png"
import ORG_DCTR7 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR7.png"
import ORG_DCTR8 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR8.png"
import ORG_DCTR9 from "../../../../../../assets/images/ORG/doctors/ORG_DCTR9.png"
import { generateRandomNumber } from "../../../../../../utils/generateRandomNumber.js"
import { ButtonSmall } from "../../../../../ui/buttons/general/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D.js"
import { Verified } from "../../../../verified/Verified.js"
import { INDEX_D_DCTRSearchWrapper } from "./styles/INDEX_D_DCTRSearchWrapper.js"

const DATA = [
  [
    "Popular Psychiatrists",
    {
      imageToUse: ORG_DCTR1,
      title: "Clara Fernandez, PhD, MD",
      subtitle: "Psychiatrist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Fernandez helped change me and my family’s life with her revolutionary appro...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_DCTR2,
      title: "Desiree Robinson, PhD, MD",
      subtitle: "Psychiatrist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“After years of visiting Dr. Robinson, my son’s overall mood and depression has s...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_DCTR3,
      title: "Maria Theresa Aguilar, PhD, MD",
      subtitle: "Psychiatrist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very pleased with Dr. Aguilar’s dedication to my twin daughter’s cognitive develop...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Family Medicine Doctors",
    {
      imageToUse: ORG_DCTR4,
      title: "Alice Henderson, MD",
      subtitle: "Family Medicine",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Henderson helped change me and my family’s life with her revolutionary appro...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_DCTR5,
      title: "Jose Mari Jimenez, MD",
      subtitle: "Family Medicine",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“After years of visiting Dr. Jimenez, my son’s overall mood and depression has s...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_DCTR6,
      title: "Marisa Pascual, MD",
      subtitle: "Family Medicine",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very pleased with Dr. Pascual's dedication to my twin daughter’s cognitive develop...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Neuro-oncologists",
    {
      imageToUse: ORG_DCTR7,
      title: "Adila Lim, PhD, MD",
      subtitle: "Neuro-oncologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Dr. Lim helped change me and my family’s life with her revolutionary appro...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_DCTR8,
      title: "Paul Norton, MD",
      subtitle: "Neuro-oncologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“After years of visiting Dr. Norton, my son’s overall mood and depression has s...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_DCTR9,
      title: "Vince Tran, PhD, MD",
      subtitle: "Neuro-oncologist",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Very pleased with Dr. Tran's dedication to my twin daughter’s cognitive develop...",
      goToThirdPage: ""
    }
  ]
]

export const INDEX_D_DCTRSearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  return (
    <INDEX_D_DCTRSearchWrapper>
      {DATA.map((x, i) => {
        const [title, ...objects] = x
        while (howMuchDisplay > i) {
          return (
            <>
              <div key={`${x.title}_${i}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, i) => {

                  /* 
                  !FH
                  This is a patch because some images have inside it the "Verified" component */
                  if (i === 2) {
                    return (
                      <div key={`${i}_${obj.titleImage}_${obj.reviews}`} className="withVerifiedComponent">
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
                  }


                  return (
                    <div key={`${i}_${obj.titleImage}_${obj.reviews}`}>
                      <div>
                        <Image
                          src={obj.imageToUse}
                          alt={obj.title}
                          layout="responsive"
                        />
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
                <span>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_DCTRSearchWrapper>
  )
}
