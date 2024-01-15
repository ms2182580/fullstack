import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../PatternsStars.js"
import { StarsRatingReview_DWrapper } from "./styles/StarsRatingReview_DWrapper"

export type Props = {
  rating?: number | undefined
  reviews?: number | ""
  isDetail?: boolean
}

export const StarsRatingReview_D = ({
  rating = 5,
  reviews = "",
  isDetail = false,
}: Props) => {
  return (
    <StarsRatingReview_DWrapper isDetail={isDetail} rating={rating}>
      <div>
        <PatternStars rating={rating} />
        <P>{rating}.0</P>
      </div>

      {reviews ? (
        <>
          <P>({reviews} reviews)</P>
        </>
      ) : null}
    </StarsRatingReview_DWrapper>
  )
}
