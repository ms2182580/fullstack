import { Caption, P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../../../../stars-rating-review/PatternsStars.js"
import { ST_D_Detail_Review_StarsRatingWrapper } from "./styles/ST_D_Detail_Review_StarsRatingWrapper.js"

export const ST_D_Detail_Review_StarsRating = ({ rating, reviews, isDetailModalDesktop = false, modal = false }) => {
  return (
    <ST_D_Detail_Review_StarsRatingWrapper className={isDetailModalDesktop ? "isDetailModalDesktop" : ""}>
      <P semibold>{rating}.0</P>
      <PatternStars
        rating={rating}
        modal={modal}
      />
      <Caption bold>{reviews} reviews</Caption>
    </ST_D_Detail_Review_StarsRatingWrapper>
  )
}
