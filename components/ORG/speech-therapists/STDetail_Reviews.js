import React from "react"
import { ORG_ReviewsUsersName } from "../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../utils/ORG_ST_Review"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../ui/heading_body_text/HeaderFonts"
import { ReviewIndividualComponent } from "./ReviewIndividualComponent"
import { ReviewAllIndividualComponentWrapper, STDetail_ReviewsWrapper } from "./styles/STDetail_ReviewsWrapper"
import { HyperlinkS } from "../../ui/hyperlink/HyperlinkFonts"

export const STDetail_Reviews = ({ name, lastName }) => {
  const getReviews = ORG_ST_Review(name, lastName)
  const allUserNames = ORG_ReviewsUsersName()

  return (
    <STDetail_ReviewsWrapper>
      <H4 cta>Reviews</H4>
      <Caption>All reviews are submitted by verified patients or their responsible party.</Caption>

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
      
      
      <HyperlinkS href="/work-in-progress" name="View All"/>
      
    </STDetail_ReviewsWrapper>
  )
}
