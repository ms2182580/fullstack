import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_Reviews_IndividualComponent } from "../STDetail_Reviews_IndividualComponent"
import { STDetail_Reviews_IndividualWrapper } from "../styles/STDetail_Reviews_IndividualWrapper"
import { STDetail_Review_Modal } from "./STDetail_Review_Modal"
import { STDetail_Reviews_HeaderDesktop } from "./STDetail_Reviews_HeaderDesktop"
import { ST_D_Detail_ReviewsWrapper } from "./styles/ST_D_Detail_ReviewsWrapper"

export const ST_D_Detail_Reviews = ({ name, lastName, reviewsRef, rating, reviews, scrollMarginTopState }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

  // const { isMobile } = useWidthWindow1024()

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
    <ST_D_Detail_ReviewsWrapper
      id="Reviews"
    // ref={reviewsRef}
    // scrollMarginTopState={scrollMarginTopState}
    >
      <STDetail_Reviews_HeaderDesktop
        rating={rating}
        reviews={reviews}
        handlePush={handlePush}
      />

      {/* {isMobile === false ? (
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
      )} */}
      <div></div>

      {/* 
      {isMobile === false ? (
        <>
          <div></div>
        </>
      ) : null} */}

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

      {/* {isMobile === false ? (
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
      )} */}
    </ST_D_Detail_ReviewsWrapper>
  )
}
