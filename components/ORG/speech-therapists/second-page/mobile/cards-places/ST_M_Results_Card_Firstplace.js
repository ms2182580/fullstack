import Image from "next/image.js"
import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { FriendlyDiagnoses } from "../../../../friendlyDiagnoses/FriendlyDiagnoses.js"
import { StartsRatingReview_Mobile } from "../../../../stars-rating-review/mobile/StartsRatingReview_Mobile.js"
import { TooltipMobile } from "../../../../tooltip/TooltipMobile.js"
import { Verified } from "../../../../verified/Verified.js"

export const ST_M_Results_Card_Firstplace = ({
  handlePointerEvent,
  cardStyle,
  image,
  alt,
  firstName,
  lastName,
  howFar,
  rating,
  reviews,
  diagnosis
}) => {
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
              layout="responsive"
              objectFit="fill"

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

        <div>
          <Caption>Speech Language Pathologist, </Caption>
          <div>
            <Caption>CCC-SLP</Caption>
            <TooltipMobile />
          </div>
        </div>

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
