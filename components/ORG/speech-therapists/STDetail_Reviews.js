import React from "react"
import { ORG_ReviewsUsersName } from "../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../utils/ORG_ST_Review"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../ui/heading_body_text/HeaderFonts"
import { HyperlinkS } from "../../ui/hyperlink/HyperlinkFonts"
import { ReviewIndividualComponent } from "./ReviewIndividualComponent"
import { ReviewAllIndividualComponentWrapper, STDetail_ReviewsWrapper } from "./styles/STDetail_ReviewsWrapper"

export const STDetail_Reviews = ({ name, lastName, isMobile }) => {
  const getReviews = ORG_ST_Review(name, lastName)
  const allUserNames = ORG_ReviewsUsersName()

  console.log(isMobile)

  return (
    <STDetail_ReviewsWrapper>
      {isMobile === false ? (
        <>
          <H4 cta>Reviews</H4>
          <Caption>All reviews are submitted by verified patients or their responsible party.</Caption>
        </>
      ) : (
        <div>
          <Caption
            primary_hover
            bolder>
            Reviews
          </Caption>
          <Caption>All reviews are submitted by verified patients or their responsible party.</Caption>
        </div>
      )}

      <ReviewAllIndividualComponentWrapper>
        <ReviewIndividualComponent
          review={getReviews[0]}
          userName={allUserNames[0]}
        />
        <ReviewIndividualComponent
          review={getReviews[1]}
          userName={allUserNames[1]}
        />
        <ReviewIndividualComponent
          review={getReviews[3]}
          userName={allUserNames[3]}
        />
        <ReviewIndividualComponent
          review={getReviews[2]}
          userName={allUserNames[2]}
        />
      </ReviewAllIndividualComponentWrapper>

      <HyperlinkS
        href="/work-in-progress"
        name="View All"
      />
    </STDetail_ReviewsWrapper>
  )
}
