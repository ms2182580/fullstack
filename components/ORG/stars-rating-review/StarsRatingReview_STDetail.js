import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "./PatternsStars.js"
import { StarsRatingReview_STDetailWrapper } from "./styles/StarsRatingReview_STDetailWrapper.js"

export const StarsRatingReview_STDetail = ({ rating, reviews, isDetailModalDesktop = false, modal = false }) => {
  return (
    <StarsRatingReview_STDetailWrapper className={isDetailModalDesktop ? "isDetailModalDesktop" : ""}>
      <P semibold>{rating}.0</P>
      <PatternStars
        rating={rating}
        modal={modal}
      />
      <Caption bold>{reviews} reviews</Caption>
    </StarsRatingReview_STDetailWrapper>
  )
}
