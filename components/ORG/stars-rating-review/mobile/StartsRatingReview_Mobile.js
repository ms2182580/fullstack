import { Caption } from '../../../ui/heading_body_text/DesktopMobileFonts.js'
import { PatternStars } from '../PatternsStars.js'
import { StartsRatingReview_MobileWrapper } from './styles/StartsRatingReview_MobileWrapper.js'

export const StartsRatingReview_Mobile = ({ rating, reviews }) => {
  return (
    <StartsRatingReview_MobileWrapper>
      <PatternStars rating={rating} />
      <Caption>{rating}.0</Caption>
      <Caption dark_gray>({reviews} reviews)</Caption>
    </StartsRatingReview_MobileWrapper>
  )
}
