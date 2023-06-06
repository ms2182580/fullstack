import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { StarsRatingReview_STDetail } from "../../../stars-rating-review/StarsRatingReview_STDetail.js"
import { STDetail_ReviewsHeaderDesktop_PeopleOftenMention } from "./STDetail_ReviewsHeaderDesktop_PeopleOftenMention.js"
import { STDetail_Reviews_HeaderDesktopWrapper } from "./styles/STDetail_Reviews_HeaderDesktopWrapper.js"

export const STDetail_Reviews_HeaderDesktop = ({ rating, reviews, isDetailModalDesktop = false, modal = false, handlePush }) => {
  return (
    <STDetail_Reviews_HeaderDesktopWrapper modal={modal}
    >
      {modal === false ? (
        <>
          <H4 hover>Reviews</H4>
        </>
      ) : (
        <>
          <p>Reviews</p>
        </>
      )}



      {modal === false ? (
        <>
          <Caption>
            Your trust is our top concern, so providers can’t pay to alter or remove reviews. We also don’t publish
            reviews that contain any private patient health information. <span onClick={handlePush}>Learn more here.</span>
          </Caption>
        </>
      ) : (
        <>
          <H4 light>All reviews are submitted by verified patients or their responsible party.</H4>
        </>
      )}

      <StarsRatingReview_STDetail
        rating={rating}
        reviews={reviews}
        isDetailModalDesktop={isDetailModalDesktop}
        modal={modal}
      />

      <STDetail_ReviewsHeaderDesktop_PeopleOftenMention modal={modal} />
    </STDetail_Reviews_HeaderDesktopWrapper>
  )
}
