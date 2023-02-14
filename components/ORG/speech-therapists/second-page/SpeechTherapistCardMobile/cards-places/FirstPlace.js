import Image from "next/image.js"
import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { FriendlyDiagnoses, StarsRatingAndReview, Tooltip } from "../../../SingleSpeechtherapistComponents_Right.js"
import { Verified } from "../../../Verified.js"

export const FirstPlace = ({
  handlePointerEvent,
  cardStyle,
  image,
  alt,
  firstName,
  lastName,
  howFar,
  rating,
  reviews,
  diagnoses,
  isMobile = false,
  isThirdPage = false
}) => {
  if (isMobile) {
    return (
      <article className="activeCard">
        <div className={`card FirstPlace`}>
          <div>
            <span className="thirdPage">
              <Image
                src={image}
                alt={alt}
                layout="fixed"
                width="288px"
                height="112px"
              />
            </span>
            <Verified />
          </div>

          <div>
            <H4>
              {firstName} {lastName}
            </H4>
            <Caption
              bolder
              primary_cta>
              ({howFar} miles away)
            </Caption>
          </div>

          <Tooltip
            isMobile={true}
            isThirdPage={isThirdPage}
          />

          <StarsRatingAndReview
            rating={rating}
            reviews={reviews}
            isMobile={true}
          />

          <FriendlyDiagnoses
            diagnoses={diagnoses}
            isMobile={true}
          />
        </div>
      </article>
    )
  }

  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card FirstPlace`}>
        <div>
          <span>
            <Image
              src={image}
              alt={alt}
              layout="fixed"
              width="288px"
              height="112px"
            />
          </span>
          <Verified />
        </div>

        <div>
          <H4>
            {firstName} {lastName}
          </H4>
          <Caption
            bolder
            primary_cta>
            ({howFar} miles away)
          </Caption>
        </div>

        <Tooltip isMobile={true} />

        <StarsRatingAndReview
          rating={rating}
          reviews={reviews}
          isMobile={true}
        />

        <FriendlyDiagnoses
          diagnoses={diagnoses}
          isMobile={true}
        />
      </div>
    </article>
  )
}
