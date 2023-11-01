import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_Review_StarsRating } from "./ORG_D_Detail_Review_StarsRating.js"
import { ORG_D_Detail_ReviewsHeader_PeopleOftenMention } from "./ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention.js"
import { ORG_D_Detail_Reviews_HeaderWrapper } from "./styles/ORG_D_Detail_Reviews_HeaderWrapper.js"

export const ORG_D_Detail_Reviews_Header = ({ rating, reviews, isDetailModalDesktop = false, modal = false, handlePushTo404 }) => {
  return (
    <ORG_D_Detail_Reviews_HeaderWrapper
      className={modal ? "" : "showLine"}
      modal={modal}>
      {modal === false ? (
        <>
          <H4>Reviews</H4>
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
            <span onClick={handlePushTo404}>Learn more here.</span>
          </Caption>
        </>
      ) : (
        <>
          <H4 light>All reviews are submitted by verified patients or their responsible party.</H4>
        </>
      )}

      <ORG_D_Detail_Review_StarsRating
        rating={rating}
        reviews={reviews}
        isDetailModalDesktop={isDetailModalDesktop}
        modal={modal}
      />

      <ORG_D_Detail_ReviewsHeader_PeopleOftenMention modal={modal} />
    </ORG_D_Detail_Reviews_HeaderWrapper>
  )
}
