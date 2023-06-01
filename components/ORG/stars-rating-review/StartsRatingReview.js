import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "./PatternsStars.js"
import { StarsRatingReviewWrapper } from "./styles/StarsRatingReviewWrapper.js"

export const StarsRatingReview = ({ rating, reviews, isMobile = false }) => {
  return (
    <StarsRatingReviewWrapper>
      <PatternStars rating={rating} />

      {isMobile === false ? (
        <>
          <P>{rating}.0</P>
          <P
            hyperlink_normal
            underline>
            ({reviews} reviews)
          </P>
        </>
      ) : (
        <>
          <Caption>{rating}.0</Caption>
          <Caption dark_gray>({reviews} reviews)</Caption>
        </>
      )}
    </StarsRatingReviewWrapper>
  )
}

