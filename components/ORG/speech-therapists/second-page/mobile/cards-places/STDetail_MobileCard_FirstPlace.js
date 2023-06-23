import Image from "next/image.js"
import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { FriendlyDiagnoses } from "../../../../friendlyDiagnoses/FriendlyDiagnoses.js"
import { StartsRatingReview_Mobile } from "../../../../stars-rating-review/mobile/StartsRatingReview_Mobile.js"
import { Tooltip } from "../../../../tooltip/Tooltip.js"
import { Verified } from "../../../../verified/Verified.js"

export const STDetail_MobileCard_FirstPlace = ({
  handlePointerEvent,
  cardStyle,
  image,
  alt,
  firstName,
  lastName,
  howFar,
  rating,
  reviews,
  diagnosis,
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

          <StartsRatingReview_Mobile
            rating={rating}
            reviews={reviews}
          />

          <FriendlyDiagnoses
            diagnosis={diagnosis}
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

        <StartsRatingReview_Mobile
          rating={rating}
          reviews={reviews}
        />

        <FriendlyDiagnoses
          diagnosis={diagnosis}
          isMobile={true}
        />
      </div>
    </article>
  )
}
