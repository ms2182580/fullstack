import Image_1 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_1.png"
import Image_2 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_2.png"
import Image_3 from "@/assets/images/org/community-classes/ORG_Detail_CC_Karate_Photo_3.png"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
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

type UserAlsoViewedData_Type = {
  image: StaticImageData
  title: string
  review: string
}[]

const userAlsoViewedData: UserAlsoViewedData_Type = [
  {
    image: Image_1,
    title: "Integrated Classes",
    review:
      "I attended a local karate class with a positive and energetic atmosphere that made me feel strong and inspired",
  },
  {
    image: Image_2,
    title: "Parent/Child & Sibling Class",
    review:
      "I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while",
  },
  {
    image: Image_3,
    title: "Parent/Child & Sibling Class",
    review:
      "I had a great time doing Karate with my brother. We learned new moves and met other people who love Karate. It was one of the best experiences I've had in a while",
  },
]

export const PCC_General_D_UsersAlsoViewed = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <PCC_General_D_UsersAlsoViewedWrapper id={theIdForComponent}>
      <H3>Users also viewed</H3>
      <ul>
        {tags.map((xElement, index) => {
          const isLastIndex = tags.length - 1 !== index

          return (
            <>
              <li key={`${xElement}_${index}`} tabIndex={isLastIndex ? 0 : -1}>
                {xElement}
              </li>
            </>
          )
        })}
      </ul>

      <ul>
        {userAlsoViewedData.map(({ title, image, review }) => {
          return (
            <>
              <li key={title}>
                <Image src={image} alt={title} />

                <div>
                  <P>{title}</P>
                  <StarsRatingReview_D rating={5} />

                  <div>
                    <P>{review}</P>
                    <button tabIndex={-1}>Compare</button>
                  </div>
                </div>
              </li>
            </>
          )
        })}
      </ul>
      <p tabIndex={0}>View All</p>
    </PCC_General_D_UsersAlsoViewedWrapper>
  )
}
