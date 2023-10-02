import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../../../stars-rating-review/PatternsStars.js"
import { ORG_D_Detail_Review_StarsRatingWrapper } from "./styles/ORG_D_Detail_Review_StarsRatingWrapper.js"

export const ORG_D_Detail_Review_StarsRating = ({ rating, reviews, isDetailModalDesktop = false, modal = false }) => {
  return (
    <ORG_D_Detail_Review_StarsRatingWrapper className={isDetailModalDesktop ? "isDetailModalDesktop" : ""}>
      <P semibold>{rating}.0</P>
      <PatternStars
        rating={rating}
        modal={modal}
      />
      <Caption bold>{reviews} reviews</Caption>
    </ORG_D_Detail_Review_StarsRatingWrapper>
  )
}
