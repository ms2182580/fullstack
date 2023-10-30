import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
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

export const ORG_D_Detail_Reviews = ({ defaultId = "reviews", arrayInnerNavBar }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { fullName, card } = thirdpageDataORG

  const [getReviews, setGetReviews] = useState(ORG_ST_Review(fullName.first, fullName.last))
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

  const handleShowModal = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      lockScroll()
      setShowModal(true)
      setModalShowedCtx(true)
    }
  }

  const handleHideModal = (e) => {
    if (e.key === "Enter" || e.key === "Escape" || e.type === "mousedown") {
      unlockScroll()
      setShowModal(false)
      setModalShowedCtx(false)
    }
  }

  return (
    <ORG_D_Detail_ReviewsWrapper id={Boolean(arrayInnerNavBar) ? arrayInnerNavBar[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY] : defaultId}>
      <ORG_D_Detail_Reviews_Header
        rating={card.leftPart.rating}
        reviews={card.leftPart.reviews}
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
        <ORG_D_Detail_Review_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          rating={card.leftPart.rating}
          reviews={card.leftPart.reviews}
          getReviews={getReviews}
          name={fullName.first}
          lastName={fullName.last}
        />
      )}
    </ORG_D_Detail_ReviewsWrapper>
  )
}
