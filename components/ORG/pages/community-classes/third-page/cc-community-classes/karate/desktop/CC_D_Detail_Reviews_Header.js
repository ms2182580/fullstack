import { Caption } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../../../../ui/heading_body_text/HeaderFonts.js"
import { CC_D_Detail_Review_StarsRating } from "./CC_D_Detail_Review_StarsRating.js"
import { CC_D_Detail_ReviewsHeader_PeopleOftenMention } from "./CC_D_Detail_ReviewsHeader_PeopleOftenMention.js"
import { CC_D_Detail_Reviews_HeaderWrapper } from "./styles/CC_D_Detail_Reviews_HeaderWrapper.js"

export const CC_D_Detail_Reviews_Header = ({ rating, reviews, isDetailModalDesktop = false, modal = false, handlePush }) => {
  return (
    <CC_D_Detail_Reviews_HeaderWrapper
      className={modal ? "" : "showLine"}
      modal={modal}>

      {modal === false ? (
        <>
          <H4 hover>Reviews</H4>
        </>
      ) : (
        <>
          <p>Reviews</p>
        </>
      )}

      {modal === false ? (
        <>
          <Caption>
            Your trust is our top concern, so providers can’t pay to alter or remove reviews. We also don’t publish reviews that contain any private patient health information.{" "}
            <span onClick={handlePush}>Learn more here.</span>
          </Caption>
        </>
      ) : (
        <>
          <H4 light>All reviews are submitted by verified patients or their responsible party.</H4>
        </>
      )}

      <CC_D_Detail_Review_StarsRating
        rating={rating}
        reviews={reviews}
        isDetailModalDesktop={isDetailModalDesktop}
        modal={modal}
      />

      <CC_D_Detail_ReviewsHeader_PeopleOftenMention modal={modal} />
    </CC_D_Detail_Reviews_HeaderWrapper>
  )
}
