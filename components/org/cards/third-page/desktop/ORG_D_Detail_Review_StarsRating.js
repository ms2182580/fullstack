import { Classes_ORG_D_Detail_IsModal } from "@/utils/org/third-page/IsModal"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { PatternStars } from "../../../stars-rating-review/PatternsStars.js"
import { ORG_D_Detail_Review_StarsRatingWrapper } from "./styles/ORG_D_Detail_Review_StarsRatingWrapper"

export const ORG_D_Detail_Review_StarsRating = ({
  rating,
  reviews,
  isModal = false,
}) => {
  return (
    <ORG_D_Detail_Review_StarsRatingWrapper
      className={isModal ? `${Classes_ORG_D_Detail_IsModal.IS_MODAL}` : ""}
    >
      <P>{rating}.0</P>
      <PatternStars rating={rating} />
      <Caption>{reviews} reviews</Caption>
    </ORG_D_Detail_Review_StarsRatingWrapper>
  )
}
