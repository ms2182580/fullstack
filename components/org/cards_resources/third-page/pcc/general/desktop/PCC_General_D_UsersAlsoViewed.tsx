import { ORG_Detail_SearchFAQSSVG } from "@/assets/icons"
import PlusSVG from "@/assets/icons/org/third-page/org_plus.svg"
import Image_1 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_1.png"
import Image_2 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_2.png"
import Image_3 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_3.png"
import { ORG_D_Results_Card_Hearth } from "@/components/org/cards/second-page/desktop/ORG_D_Results_Card_Hearth"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import Image, { StaticImageData } from "next/image"
import { PCC_General_D_UsersAlsoViewedWrapper } from "./styles/PCC_General_D_UsersAlsoViewedWrapper"

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

export const PCC_General_D_UsersAlsoViewed = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData_Backend()

  const { SUB_CATEGORY } = thirdpageDataORG

  return (
    <PCC_General_D_UsersAlsoViewedWrapper id={theIdForComponent}>
      <header>
        <H2>More resources</H2>
      </header>
      <div>
        <div>
          <span>
            <ORG_Detail_SearchFAQSSVG />
            <input type="text" placeholder="Find other useful resources" />
          </span>

          <button>Recommend resource</button>
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

        <div>
          <H3>Popular resource combination:</H3>
          <ul>
            {popularData.map(({ image, title, link, svg = null }, index) => {
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
            })}
          </ul>
          <P tabIndex={0}>View All</P>
        </div>
      </div>
    </PCC_General_D_UsersAlsoViewedWrapper>
  )
}
