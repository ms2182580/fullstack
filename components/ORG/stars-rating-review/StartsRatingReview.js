import { Fragment } from 'react'
import { StartEmptySvg, StartFullSvg } from '../../../assets/Icons/index.js'
import { Caption, P } from '../../ui/heading_body_text/DesktopMobileFonts.js'
import { StarsRatingReviewWrapper } from './styles/StarsRatingReviewWrapper.js'


export const StarsRatingReview = ({ rating, reviews, isMobile = false }) => {
  let ratingPattern = Array(5)
    .fill(0)
    .map((x, i) => {
      if (rating - 1 < i) {
        return "empty"
      }
      return "fully"
    })

  return (
    <StarsRatingReviewWrapper>
      <div>
        {ratingPattern.map((x, i) => {
          if (x === "fully") {
            return (
              <Fragment key={`${x}${i}`}>
                <StartFullSvg />
              </Fragment>
            )
          } else {
            return (
              <Fragment key={`${x}${i}`}>
                <StartEmptySvg />
              </Fragment>
            )
          }
        })}
      </div>
      {isMobile === false ? (
        <>
          <P>{rating}.0</P>
          <P dark_gray>({reviews} reviews)</P>
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