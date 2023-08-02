import Image from "next/image"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../../assets/Icons"
import ORG_AA1 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA1.png"
import ORG_AA10 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA10.png"
import ORG_AA11 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA11.png"
import ORG_AA12 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA12.png"
import ORG_AA13 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA13.png"
import ORG_AA14 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA14.png"
import ORG_AA15 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA15.png"
import ORG_AA2 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA2.png"
import ORG_AA3 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA3.png"
import ORG_AA4 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA4.png"
import ORG_AA5 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA5.png"
import ORG_AA6 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA6.png"
import ORG_AA7 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA7.png"
import ORG_AA8 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA8.png"
import ORG_AA9 from "../../../../../../assets/images/ORG/attorney-advocates/ORG_AA9.png"
import { generateRandomNumber } from "../../../../../../utils/generateRandomNumber"
import { ButtonSmall } from "../../../../../ui/buttons/general/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../../verified/Verified"
import { INDEX_D_AASearchWrapper } from "./styles/INDEX_D_AASearchWrapper.js"

const DATA = [
  [
    "Popular Civil Rights Attorneys",
    {
      imageToUse: ORG_AA1,
      title: "Denise N. Truong-MacGill, JD",
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA2,
      title: "Leonard Abrahams, MDR, JD",
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA3,
      title: "Nicole Baker, MDR, JD",
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: ""
    }
  ],

  [
    "Popular Special Education Attorneys",
    {
      imageToUse: ORG_AA4,
      title: "Denise N. Truong-MacGill, JD",
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA5,
      title: "Leonard Abrahams, MDR, JD",
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA6,
      title: "Nicole Baker, MDR, JD",
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Elder Law & Medicaid Planning Attorneys",
    {
      imageToUse: ORG_AA7,
      title: "Denise N. Truong-MacGill, JD",
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA8,
      title: "Leonard Abrahams, MDR, JD",
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA9,
      title: "Nicole Baker, MDR, JD",
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular Disability Attorneys",
    {
      imageToUse: ORG_AA10,
      title: "Denise N. Truong-MacGill, JD",
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA11,
      title: "Leonard Abrahams, MDR, JD",
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA12,
      title: "Nicole Baker, MDR, JD",
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: ""
    }
  ],
  [
    "Popular I/DD Advocates",
    {
      imageToUse: ORG_AA13,
      title: "Denise N. Truong-MacGill, JD",
      subtitle: "Family Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“Highly recommend Denise for any legal issue. She was not only extremely knowle...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA14,
      title: "Leonard Abrahams, MDR, JD",
      subtitle: "Civil Rights Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“I required assistance with what seemed like an impossible landlord-tenant issue...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AA15,
      title: "Nicole Baker, MDR, JD",
      subtitle: "Disability Law",
      city: "Brooklyn, NY",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "“With a focus on offering high quality, personal and professional service to eve...",
      goToThirdPage: ""
    }
  ]
]

export const INDEX_D_AASearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  return (
    <INDEX_D_AASearchWrapper>
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
                  } else {
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
                  }
                })}
                <span>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_D_AASearchWrapper>
  )
}
