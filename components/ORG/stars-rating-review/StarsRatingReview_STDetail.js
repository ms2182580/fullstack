import { Caption, P } from '../../ui/heading_body_text/DesktopMobileFonts.js'
import { PatternStars } from './PatternsStars.js'
import { StarsRatingReview_STDetailWrapper } from './styles/StarsRatingReview_STDetailWrapper.js'


export const StarsRatingReview_STDetail = ({ rating, reviews }) => {
  return (
    <StarsRatingReview_STDetailWrapper>
      <P semibold>{rating}.0</P>
      <PatternStars rating={rating} />
      <Caption bold>{reviews} reviews</Caption>
    </StarsRatingReview_STDetailWrapper>

  )

}
