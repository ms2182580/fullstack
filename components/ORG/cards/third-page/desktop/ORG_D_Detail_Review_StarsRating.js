import { Classes_ORG_D_Detail_IsModal } from "@/utils/ORG/third-page/IsModal"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../../../stars-rating-review/PatternsStars.js"
import { ORG_D_Detail_Review_StarsRatingWrapper } from "./styles/ORG_D_Detail_Review_StarsRatingWrapper"

export const ORG_D_Detail_Review_StarsRating = ({ rating, reviews, isModal = false }) => {
  return (
    <ORG_D_Detail_Review_StarsRatingWrapper className={isModal ? `${Classes_ORG_D_Detail_IsModal.IS_MODAL}` : ""}>
      <P semibold>{rating}.0</P>
      <PatternStars rating={rating} />
      <Caption bold>{reviews} reviews</Caption>
    </ORG_D_Detail_Review_StarsRatingWrapper>
  )
}
