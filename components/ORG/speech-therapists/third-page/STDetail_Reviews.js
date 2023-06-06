import { useRouter } from "next/router"
import { useState } from "react"
import { useCtx_ShowModal } from "../../../../context/Ctx_ShowModal"
import { ORG_ReviewsUsersName } from "../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../utils/ORG_ST_Review"
import { useScrollLock } from "../../../../utils/useScrollLock"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_Reviews_IndividualComponent } from "./STDetail_Reviews_IndividualComponent"
import { STDetail_Review_Modal } from "./dekstop/STDetail_Review_Modal.js"
import { STDetail_Reviews_HeaderDesktop } from "./dekstop/STDetail_Reviews_HeaderDesktop"
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
        query: { toWhere: "ORG/SpeechTherapists/IndividualProvider" }
      },
      "/404"
    )
  }

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const handleShowModal = () => {
    lockScroll()
    setShowModal(true)
    setModalShowedCtx(true)
  }

  const handleHideModal = () => {
    unlockScroll()
    setShowModal(false)
    setModalShowedCtx(false)
  }

  return (
    <STDetail_ReviewsWrapper
      id="Reviews"
      ref={reviewsRef}>
      {isMobile === false ? (
        <>
          <STDetail_Reviews_HeaderDesktop
            rating={rating}
            reviews={reviews}
            handlePush={handlePush}
          />

        </>
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

      {isMobile === false ? (
        <>
          <div></div>
        </>
      ) : null}



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

      {isMobile === false ? (
        <>
          <span onClick={handleShowModal}>
            <P
              hyperlink_normal
              semibold>
              View All
            </P>
          </span>

          {showModal && (
            <STDetail_Review_Modal
              showModal={showModal}
              handleHideModal={handleHideModal}
              rating={rating}
              reviews={reviews}
              getReviews={getReviews}
              name={name}
              lastName={lastName}





            />
          )}
        </>
      ) : (
        <span>
          <P
            hyperlink_normal
            semibold>
            View All
          </P>
        </span>
      )}
    </STDetail_ReviewsWrapper>
  )
}
