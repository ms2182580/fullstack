import { useRouter } from "next/router.js"
import { Fragment, useState } from "react"
import { useCtx_ShowModal } from "../../../../../../../../context/Ctx_ShowModal.js"
import { ORG_ReviewsUsersName } from "../../../../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_Review } from "../../../../../../../../utils/ORG_ST_Review_D.js"
import { useScrollLock } from "../../../../../../../../utils/useScrollLock.js"
import { P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { CC_D_Detail_Review_Modal } from "./CC_D_Detail_Review_Modal.js"
import { CC_D_Detail_Reviews_Header } from "./CC_D_Detail_Reviews_Header.js"
import { CC_D_Detail_Reviews_IndividualComponent } from "./CC_D_Detail_Reviews_IndividualComponent.js"
import { CC_Karate_D_ReviewsWrapper } from "./styles/CC_Karate_D_ReviewsWrapper.js"

export const CC_Karate_D_Reviews = ({ name = "no_Name", lastName = "no_Lastname", rating = "0000", reviews = "no_Reviews" }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const { push } = useRouter()
  const handlePush = () => {
    push(
      {
        pathname: "/404",
        query: { toWhere: "ORG/speech-therapists/IndividualProvider" },
      },
      "/404",
    )
  }

  const handleShowModal = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      lockScroll()
      setShowModal(true)
      setModalShowedCtx(true)
    }
  }

  const handleHideModal = (e) => {
    unlockScroll()
    setShowModal(false)
    setModalShowedCtx(false)
  }

  return (
    <CC_Karate_D_ReviewsWrapper id="Reviews">
      <CC_D_Detail_Reviews_Header
        rating={rating}
        reviews={reviews}
        handlePush={handlePush}
        showModal={showModal}
      />

      <div>
        {getReviews.map((x, i) => (
          <Fragment key={`${x}_${allUserNames[i]}`}>
            <CC_D_Detail_Reviews_IndividualComponent
              review={x}
              userName={allUserNames[i]}
            />
          </Fragment>
        ))}
      </div>

      <span
        onClick={handleShowModal}
        onKeyDown={handleShowModal}
        tabIndex={0}>
        <P
          hyperlink_normal
          semibold>
          View All
        </P>
      </span>

      {showModal && (
        <CC_D_Detail_Review_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          rating={rating}
          reviews={reviews}
          getReviews={getReviews}
          name={name}
          lastName={lastName}
        />
      )}
    </CC_Karate_D_ReviewsWrapper>
  )
}
