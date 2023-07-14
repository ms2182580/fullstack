import Image from "next/image"
import { useEffect, useState } from "react"
import { ORG_D_Search_ViewProfileSvg } from "../../../../../assets/Icons"
import ORG_AT1 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT1.png"
import ORG_AT2 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT2.png"
import ORG_AT3 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT3.png"
import ORG_AT4 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT4.png"
import ORG_AT5 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT5.png"
import ORG_AT6 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT6.png"
import ORG_AT7 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT7.png"
import ORG_AT8 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT8.png"
import ORG_AT9 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT9.png"
import { ButtonSmall } from "../../../../../components/ui/buttons/general/index"
import { H2, H3, H4 } from "../../../../../components/ui/heading_body_text/HeaderFonts.js"
import { generateRandomNumber } from "../../../../../utils/generateRandomNumber"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { INDEX_D_ATSearchWrapper } from "./styles/INDEX_D_ATSearchWrapper.js"

const DATA = [
  [
    "Popular Assistive Technology",
    {
      imageToUse: ORG_AT1,
      title: "Permobil F5 Corpus VS",
      subtitle: "Power Wheelchair",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Permobil combined all the performance features of the F5 Corpus with superior...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT2,
      title: "Rehasense ICON 60",
      subtitle: "Active Rigid Wheelchair",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "A lightweight rigid 7000 Series Aluminium Alloy frame and carbon fibre side guard ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT3,
      title: "PDG Mobility Fuze T50",
      subtitle: "Manual | Power Tilt",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Effortless centre-of-gravity pivot, the Fuze T50 Manual Tilt-in-Space wheelchair...",
      goToThirdPage: ""
    }
  ],

  [
    "Popular Software Assistive Technology",
    {
      imageToUse: ORG_AT4,
      title: "Proloquo",
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Proloquo is a new, groundbreaking AAC app designed for nonspeaking children ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT5,
      title: "simPODD",
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This user-friendly app makes communication more intuitive and ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT6,
      title: "Proloquo2Go",
      subtitle: "AAC app",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This app is great for people who want maximum flexibility. Out of the box, ...",
      goToThirdPage: ""
    }
  ],

  [
    "Popular Smart Devices with Assistive Technology",
    {
      imageToUse: ORG_AT7,
      title: "Amazon Echo Dot ",
      subtitle: "Smart home device",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Amazon Echo is a form of speaker which connects to other cloud-based ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT8,
      title: "Google Nest Hub",
      subtitle: "Smart home device",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "Voice Assistant - OS supported: Android and iOS controls your smart home ...",
      goToThirdPage: ""
    },
    {
      imageToUse: ORG_AT9,
      title: "Wyze Plug",
      subtitle: "Smart plug",
      rating: generateRandomNumber(4, 5),
      reviews: generateRandomNumber(47, 999),
      textReview: "This plug is compact, reliable, and affordable enough that you could ...",
      goToThirdPage: ""
    }
  ]
]

export const INDEX_D_ATSearch = ({ isSelected = false }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA.length)
    }
  }, [isSelected])

  return (
    <INDEX_D_ATSearchWrapper>
      {DATA.map((x, i) => {
        const [title, ...objects] = x
        console.log('objects:', objects)
        while (howMuchDisplay > i) {
          return (
            <>
              <div key={`${x.title}_${i}_${objects[i].titleImage}_${objects[i].reviews}`}>
                <H2 semi_bold>{title}</H2>
                {objects.map((obj, i) => {
                  return (
                    <div key={`${i}_${obj.titleImage}_${obj.reviews}`}>
                      <div>
                        <Image
                          src={obj.imageToUse}
                          alt={obj.title}
                        />
                      </div>
                      <H3>{obj.title}</H3>
                      <H4>{obj.subtitle}</H4>
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
    </INDEX_D_ATSearchWrapper>
  )
}
