import Image from "next/image.js"
import { BookmarkSaveSTMobileSvg } from "../../../../../../assets/icons/index.js"
import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../../ui/heading_body_text/HeaderFonts"
import { FriendlyDiagnoses } from "../../../../friendlyDiagnoses/FriendlyDiagnoses.js"
import { StartsRatingReview_Mobile } from "../../../../stars-rating-review/mobile/StartsRatingReview_Mobile.js"
import { Verified } from "../../../../verified/Verified.js"
import { ST_M_Detail_Tooltip } from "./ST_M_Detail_Tooltip.js"
import { ST_M_Detail_CardWrapper } from "./styles/ST_M_Detail_CardWrapper.js"

export const ST_M_Detail_Card = ({ STData }) => {
  const { medium: image } = STData.data[0].picture
  const { first: firstName, last: lastName } = STData.data[0].name
  const { rating, reviews, diagnosis, distance: howFar } = STData.filters[0]

  return (
    <ST_M_Detail_CardWrapper>
      <BookmarkSaveSTMobileSvg tabIndex={0} />
      <div>
        <div>
          <span>
            <Image
              src={image}
              alt={`Portrait of ${firstName}_${lastName}`}
              layout="responsive"
              objectFit="fill"
              width="288px"
              height="133px"
            />
          </span>
          <Verified />
        </div>

        <div>
          <H3>
            {firstName} {lastName}
          </H3>
          <Caption bolder primary_cta>
            ({howFar} miles away)
          </Caption>
        </div>

        <div>
          <Caption>Speech Language Pathologist, CCC-SLP</Caption>
          <ST_M_Detail_Tooltip isThirdPage={true} />
        </div>

        <StartsRatingReview_Mobile rating={rating} reviews={reviews} />

        <FriendlyDiagnoses diagnosis={diagnosis} isMobile={true} />
      </div>
    </ST_M_Detail_CardWrapper>
  )
}
