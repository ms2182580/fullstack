import Image from "next/image.js"
import { Fragment } from "react"
import { H3 } from "../../../../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_D } from "../../../../../../stars-rating-review/desktop/StarsRatingReview_D.js"
import { CC_Karate_D_OtherClassesWrapper } from "./styles/CC_Karate_D_OtherClassesWrapper.js"

const tags = ["All", "Similar Price", "Same subject", "Similar class structure", "Also from Kicking the spectrum", "More Tags"]

export const CC_Karate_D_OtherClasses = ({ thirdpageDataORG }) => {
  return (
    <CC_Karate_D_OtherClassesWrapper id="Information">
      <H3 semibold>User also viewed</H3>
      <div>
        {tags.map((xElement, index) => (
          <Fragment key={`${xElement}_${index}`}>
            <div>{xElement}</div>
          </Fragment>
        ))}
      </div>

      <div>
        {thirdpageDataORG.other.otherClassesFromTheBusiness.map((xElement, index) => (
          <div key={`${xElement.title}_${index}`}>
            <div>
              <Image
                src={xElement.image.src}
                layout="responsive"
                objectFit="contain"
                objectPosition={"0% 0px"}
                width={1}
                height={1}
              />
            </div>
            <div>
              <p>{xElement.title}</p>
              <StarsRatingReview_D rating={xElement.rating.number} />

              <div>
                <p>{xElement.review}</p>
                <button tabIndex={-1}>Compare</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p tabIndex={0}>View All</p>
    </CC_Karate_D_OtherClassesWrapper>
  )
}
