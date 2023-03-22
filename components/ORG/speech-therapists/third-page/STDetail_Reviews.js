import React, { useState } from "react"
import { ORG_ReviewsUsersName } from "../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../utils/ORG_ST_Review"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { Caption } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../ui/heading_body_text/HeaderFonts"
import { HyperlinkS } from "../../../ui/hyperlink/HyperlinkFonts"
import { STDetail_Reviews_IndividualComponent } from "./STDetail_Reviews_IndividualComponent"
import { STDetail_ReviewsWrapper } from "./styles/STDetail_ReviewsWrapper"
import { STDetail_Reviews_IndividualWrapper } from "./styles/STDetail_Reviews_IndividualWrapper"

export const STDetail_Reviews = ({ name, lastName, reviewsRef }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

  const { isMobile } = useWidthWindow1024()

  return (
    <STDetail_ReviewsWrapper
      id="Reviews"
      ref={reviewsRef}>
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

      <STDetail_Reviews_IndividualWrapper>
        <STDetail_Reviews_IndividualComponent
          review={getReviews[0]}
          userName={allUserNames[0]}
        />
        <STDetail_Reviews_IndividualComponent
          review={getReviews[1]}
          userName={allUserNames[1]}
        />
        <STDetail_Reviews_IndividualComponent
          review={getReviews[3]}
          userName={allUserNames[3]}
        />
        <STDetail_Reviews_IndividualComponent
          review={getReviews[2]}
          userName={allUserNames[2]}
        />
      </STDetail_Reviews_IndividualWrapper>

      <HyperlinkS
        href="/work-in-progress"
        name="View All"
      />
    </STDetail_ReviewsWrapper>
  )
}
