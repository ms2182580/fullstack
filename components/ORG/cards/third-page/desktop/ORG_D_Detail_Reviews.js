import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_Review_Modal } from "./ORG_D_Detail_Review_Modal"
import { ORG_D_Detail_Reviews_Header } from "./ORG_D_Detail_Reviews_Header"
import { ORG_D_Detail_Reviews_IndividualComponent } from "./ORG_D_Detail_Reviews_IndividualComponent"
import { ORG_D_Detail_ReviewsWrapper } from "./styles/ORG_D_Detail_ReviewsWrapper"

export const ORG_D_Detail_Reviews = ({ name, lastName, rating, reviews }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

  const { push } = useRouter()
  const handlePushTo404 = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      push(
        {
          pathname: "/404",
          query: { toWhere: "ORG/speech-therapists/IndividualProvider" },
        },
        "/404",
      )
    }
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
    <ORG_D_Detail_ReviewsWrapper id="Reviews">
      <ORG_D_Detail_Reviews_Header
        rating={rating}
        reviews={reviews}
        handlePushTo404={handlePushTo404}
      />

      <div>
        {getReviews.map((x, i) => (
          <Fragment key={`${x}_${allUserNames[i]}`}>
            <ORG_D_Detail_Reviews_IndividualComponent
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
        <ORG_D_Detail_Review_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          rating={rating}
          reviews={reviews}
          getReviews={getReviews}
          name={name}
          lastName={lastName}
        />
      )}
    </ORG_D_Detail_ReviewsWrapper>
  )
}
