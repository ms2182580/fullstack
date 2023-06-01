import { useRouter } from "next/router"
import { useState } from "react"
import { ArrowDownSvg } from "../../../../assets/Icons"
import { ORG_ReviewsUsersName } from "../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../utils/ORG_ST_Review"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview_STDetail } from "../../stars-rating-review/StarsRatingReview_STDetail"
import { STDetail_Reviews_IndividualComponent } from "./STDetail_Reviews_IndividualComponent"
import { STDetail_ReviewsWrapper } from "./styles/STDetail_ReviewsWrapper"
import { STDetail_Reviews_IndividualWrapper } from "./styles/STDetail_Reviews_IndividualWrapper"

export const STDetail_Reviews = ({ name, lastName, reviewsRef, rating, reviews }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

  const { isMobile } = useWidthWindow1024()

  const { push } = useRouter()
  const handlePush = () => {
    push(
      {
        pathname: "/404",
        query: { toWhere: "ORG/SpeechTherapists/IndividualProvider" },
      },
      "/404"
    )
  }

  return (
    <STDetail_ReviewsWrapper
      id="Reviews"
      ref={reviewsRef}>
      {isMobile === false ? (
        <div className="STDetail_ReviewsHeaderDesktop">
          <H4 hover>Reviews</H4>
          <Caption>
            Your trust is our top concern, so providers can’t pay to alter or remove reviews. We also don’t publish
            reviews that contain any private patient health information.{" "}
            <span onClick={handlePush}>Learn more here.</span>
          </Caption>

          <StarsRatingReview_STDetail
            rating={rating}
            reviews={reviews}
          />

          <div className="STDetail_ReviewsHeaderDesktop_PeopleOftenMention">
            <P semibold>People often mention</P>
            <div>
              <div>
                <P>All</P>
                <P>Scheduling</P>
                <P>Office Environment</P>
                <P>Wait Times</P>
                <P>Provider Feedback</P>
              </div>
              <div>
                <P semibold primary_cta>
                  Most relevant
                </P>
                <ArrowDownSvg />
              </div>
            </div>

            <div></div>

          </div>
        </div>
      ) : (
        <div>
          <Caption
            primary_hover
            bolder>
            Reviews
          </Caption>
          <Caption>All reviews are submitted by verified patients or their responsible party.</Caption>
        </div>
      )}

      <STDetail_Reviews_IndividualWrapper>
        <STDetail_Reviews_IndividualComponent
          review={getReviews[0]}
          userName={allUserNames[0]}
        />
        <STDetail_Reviews_IndividualComponent
          review={getReviews[1]}
          userName={allUserNames[1]}
        />
        <STDetail_Reviews_IndividualComponent
          review={getReviews[3]}
          userName={allUserNames[3]}
        />
        <STDetail_Reviews_IndividualComponent
          review={getReviews[2]}
          userName={allUserNames[2]}
        />
      </STDetail_Reviews_IndividualWrapper>


      {/* 
//!FH0
Make the modal!
*/}

      <span>
        <P hyperlink_normal semibold>View All</P>
      </span>

    </STDetail_ReviewsWrapper>
  )
}
