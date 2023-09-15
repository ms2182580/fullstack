import { Caption, P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../../../../../../stars-rating-review/PatternsStars.js"
import { CC_D_Detail_Review_StarsRatingWrapper } from "./styles/CC_D_Detail_Review_StarsRatingWrapper.js"

export const CC_D_Detail_Review_StarsRating = ({ rating, reviews, isDetailModalDesktop = false, modal = false }) => {
  return (
    <CC_D_Detail_Review_StarsRatingWrapper className={isDetailModalDesktop ? "isDetailModalDesktop" : ""}>
      <P semibold>{rating}.0</P>
      <PatternStars
        rating={rating}
        modal={modal}
      />
      <Caption bold>{reviews} reviews</Caption>
    </CC_D_Detail_Review_StarsRatingWrapper>
  )
}
