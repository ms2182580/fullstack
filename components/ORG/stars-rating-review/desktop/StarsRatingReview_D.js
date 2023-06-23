import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../PatternsStars.js"
import { StarsRatingReview_DWrapper } from "./styles/StarsRatingReview_DWrapper.js"

export const StarsRatingReview_D = ({ rating, reviews }) => {
  return (
    <StarsRatingReview_DWrapper>
      <PatternStars rating={rating} />

      <P>{rating}.0</P>
      <P
        hyperlink_normal
        underline>
        ({reviews} reviews)
      </P>
    </StarsRatingReview_DWrapper>
  )
}
