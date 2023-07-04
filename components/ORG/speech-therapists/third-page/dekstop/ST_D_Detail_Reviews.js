import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_Detail_Review_Modal } from "./ST_D_Detail_Review_Modal"
import { ST_D_Detail_Reviews_HeaderDesktop } from "./ST_D_Detail_Reviews_HeaderDesktop"
import { ST_D_Detail_Reviews_IndividualComponent } from "./ST_D_Detail_Reviews_IndividualComponent"
import { ST_D_Detail_ReviewsWrapper } from "./styles/ST_D_Detail_ReviewsWrapper"

export const ST_D_Detail_Reviews = ({ name, lastName, reviewsRef, rating, reviews, scrollMarginTopState }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

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
    <ST_D_Detail_ReviewsWrapper id="Reviews">
      <ST_D_Detail_Reviews_HeaderDesktop
        rating={rating}
        reviews={reviews}
        handlePush={handlePush}
      />

      <div>
        {getReviews.map((x, i) => (
          <Fragment key={`${x}_${allUserNames[i]}`}>
            <ST_D_Detail_Reviews_IndividualComponent
              review={x}
              userName={allUserNames[i]}
            />
          </Fragment>
        ))}
      </div>

      <span onClick={handleShowModal}>
        <P
          hyperlink_normal
          semibold>
          View All
        </P>
      </span>

      {showModal && (
        <ST_D_Detail_Review_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          rating={rating}
          reviews={reviews}
          getReviews={getReviews}
          name={name}
          lastName={lastName}
        />
      )}
    </ST_D_Detail_ReviewsWrapper>
  )
}
