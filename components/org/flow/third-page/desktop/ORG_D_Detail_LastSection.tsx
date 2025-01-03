import { ORG_Detail_SearchFAQSSVG } from "@/assets/icons"
import MagicWandSVG from "@/assets/icons/org/third-page/magic-wand.svg"
import PlusSVG from "@/assets/icons/org/third-page/org_plus.svg"
import Image_1 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_1.png"
import Image_2 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_2.png"
import Image_3 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_3.png"
import { ORG_D_Results_Card_Hearth } from "@/components/org/flow/second-page/desktop/ORG_D_Results_Card_Hearth"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import Image, { StaticImageData } from "next/image"
import { useMemo } from "react"
import { ORG_D_Detail_LastSectionWrapper } from "../../second-page/desktop/styles/ORG_D_Detail_LastSectionWrapper"
import { ORG_D_Detail_LastSectionDialog } from "./ORG_D_Detail_LastSectionDialog"

const tags = [
  "All",
  "Similar Price",
  "Same subject",
  "Similar class structure",
  "Also from Kicking the spectrum",
  "More Tags",
]

type Location_Type = {
  city: string
  state: string
}

type Review_Type = {
  amount: number
  stars: number
}

type SimilarData_Type = {
  image: StaticImageData
  title: string
  subTitle: string
  location: Location_Type
  review: Review_Type
  link: string
}[]

const similarData: SimilarData_Type = [
  {
    image: Image_1,
    title: "Integrated Classes",
    subTitle: "Kicking The Spectrum",
    location: {
      city: "new york",
      state: "NY",
    },
    review: {
      amount: 99,
      stars: 5,
    },
    link: "#",
  },
  {
    image: Image_2,
    title: "Integrated Classes",
    subTitle: "Kicking The Spectrum",
    location: {
      city: "new york",
      state: "NY",
    },
    review: {
      amount: 48,
      stars: 5,
    },
    link: "#",
  },
  {
    image: Image_3,
    title: "Integrated Classes",
    subTitle: "Kicking The Spectrum",
    location: {
      city: "new york",
      state: "NY",
    },
    review: {
      amount: 55,
      stars: 5,
    },
    link: "#",
  },
]

export type PopularData_Type = {
  image?: StaticImageData
  title?: string
  link?: string
  svg?: StaticImageData
}[]

const popularData: PopularData_Type = [
  {
    image: Image_1,
    title: "ABC Physical therapy",
    link: "#",
  },
  {
    svg: PlusSVG,
  },
  {
    image: Image_2,
    title: "Sports & Endurance Training",
    link: "#",
  },
  {
    svg: PlusSVG,
  },
  {
    image: Image_1,
    title: "Stretching & Bending ",
    link: "#",
  },
]

export const ORG_D_Detail_LastSection = ({ whichCategory }) => {
  const isVocational = useMemo(() => {
    return whichCategory === NamesCategories_KEY["VOCATIONAL RESOURCES"]
  }, [whichCategory])

  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData_Backend()

  const { SUB_CATEGORY } = thirdpageDataORG

  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <div>
      <ORG_D_Detail_LastSectionWrapper isVocational={isVocational}>
        <header>
          <H2>{isVocational ? "Similar Employers" : "More resources"} </H2>
        </header>
        <article>
          <div>
            <span>
              <ORG_Detail_SearchFAQSSVG />
              <input type="text" placeholder="Find other useful resources" />
            </span>

            {isVocational ? (
              <button onClick={openDialog} onKeyDown={openDialog}>
                <MagicWandSVG /> <p>Get recommendations</p>
              </button>
            ) : (
              <button>Recommend resource</button>
            )}
          </div>
          <div>
            <H3>Similar {SUB_CATEGORY}:</H3>
            <ul>
              {similarData.map(
                ({ image, title, subTitle, location, review, link }) => {
                  const { city, state } = location
                  const { amount, stars } = review
                  return (
                    <li key={title}>
                      <span>
                        <Image src={image} alt={title} />
                        <ORG_D_Results_Card_Hearth />
                      </span>
                      <div>
                        <h6>{title}</h6>
                        <P>{subTitle}</P>
                        <P>
                          {city}, {state}
                        </P>
                        <StarsRatingReview_D rating={stars} reviews={amount} />
                        <a href={link}>view profile</a>
                      </div>
                    </li>
                  )
                }
              )}
            </ul>
            <p tabIndex={0}>View All</p>
          </div>
          {!isVocational && (
            <div>
              <H3>Popular resource combination:</H3>
              <ul>
                {popularData.map(
                  ({ image, title, link, svg = null }, index) => {
                    const TheSVG: any = svg
                    if (svg) {
                      return (
                        <li key={`SVG_${index}`}>
                          <TheSVG />
                        </li>
                      )
                    } else if (image && title && link) {
                      return (
                        <li key={title}>
                          <span>
                            <Image src={image} alt={title} />
                            <ORG_D_Results_Card_Hearth />
                          </span>
                          <P>{title}</P>
                          <span>
                            <a href={link}>View Profile</a>
                          </span>
                        </li>
                      )
                    }
                  }
                )}
              </ul>
              <P tabIndex={0}>View All</P>
            </div>
          )}
        </article>
      </ORG_D_Detail_LastSectionWrapper>
      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ORG_D_Detail_LastSectionDialog />
      </Dialog_D>
    </div>
  )
}
