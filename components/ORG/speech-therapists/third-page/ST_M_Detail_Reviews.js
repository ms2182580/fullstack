import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useCtx_ShowModal } from "../../../../context/Ctx_ShowModal"
import { ORG_ReviewsUsersName } from "../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../utils/useScrollLock"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_Reviews_IndividualComponent } from "./STDetail_Reviews_IndividualComponent"
import { STDetail_Review_Modal } from "./dekstop/STDetail_Review_Modal.js"
import { STDetail_Reviews_HeaderDesktop } from "./dekstop/STDetail_Reviews_HeaderDesktop"
import { STDetail_ReviewsWrapper } from "./styles/STDetail_ReviewsWrapper"
import { STDetail_Reviews_IndividualWrapper } from "./styles/STDetail_Reviews_IndividualWrapper"

export const ST_M_Detail_Reviews = ({ name, lastName, theRef, rating, reviews, scrollMarginTopState }) => {
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
      ref={theRef}
      scrollMarginTopState={scrollMarginTopState}

    >
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
        {getReviews.map((x, i) => (
          <Fragment key={`${x}_${allUserNames[i]}`}>
            <STDetail_Reviews_IndividualComponent
              review={x}
              userName={allUserNames[i]}
            />
          </Fragment>
        ))}
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
