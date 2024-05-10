import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { PatternStars } from "../PatternsStars.js"
import { StarsRatingReview_DWrapper } from "./styles/StarsRatingReview_DWrapper"

export type Props = {
  rating?: number | null
  reviews?: number | null
  isDetail?: boolean
}

export const StarsRatingReview_D = ({
  rating = null,
  reviews = null,
  isDetail = false,
}: Props) => {
  return (
    <StarsRatingReview_DWrapper isDetail={isDetail} rating={rating}>
      {rating ? (
        <div>
          <PatternStars rating={rating} />
          <P>{rating}.0</P>
        </div>
      ) : null}

      {reviews ? <P>({reviews} reviews)</P> : null}
    </StarsRatingReview_DWrapper>
  )
}
