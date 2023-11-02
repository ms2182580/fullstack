import { NavBar_D_WriteAReviewSvg } from "@/assets/Icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_Review_Modal_ViewAll } from "./ORG_D_Detail_Review_Modal_ViewAll"
import { ORG_D_Detail_Review_Modal_WriteAReview } from "./ORG_D_Detail_Review_Modal_WriteAReview"
import { ORG_D_Detail_Reviews_IndividualComponent } from "./ORG_D_Detail_Reviews_IndividualComponent"
import { ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention } from "./ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention"
import { ORG_D_Detail_ReviewsWrapper } from "./styles/ORG_D_Detail_ReviewsWrapper"

export const ORG_D_Detail_Reviews = ({ defaultId = "reviews", arrayInnerNavBar }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { fullName, card } = thirdpageDataORG

  const [getReviews, setGetReviews] = useState(ORG_ST_Review(fullName.first, fullName.last))

  const [showModal_ViewAll, setShowModal_ViewAll] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const handleShowModal_ViewAll = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      lockScroll()
      setShowModal_ViewAll(true)
      setModalShowedCtx(true)
      setShowModal_WriteAReview(false)
    }
  }

  const handleHideModal_ViewAll = (e) => {
    if (e.key === "Enter" || e.key === "Escape" || e.type === "mousedown") {
      unlockScroll()
      setShowModal_ViewAll(false)
      setModalShowedCtx(false)
    }
  }

  const [showModal_WriteAReview, setShowModal_WriteAReview] = useState(false)

  const handleShowModal_WriteAReview = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      lockScroll()
      setShowModal_WriteAReview(true)
      setModalShowedCtx(true)

      setShowModal_ViewAll(false)
    }
  }

  const handleHideModal_WriteAReview = (e) => {
    if (e.key === "Enter" || e.key === "Escape" || e.type === "mousedown" || e.type === "click") {
      unlockScroll()
      setShowModal_WriteAReview(false)
      setModalShowedCtx(false)
    }
  }

  return (
    <>
      <ORG_D_Detail_ReviewsWrapper id={Boolean(arrayInnerNavBar) ? arrayInnerNavBar[4][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY] : defaultId}>
        <header>
          <H3>Reviews</H3>
          <button
            tabIndex={0}
            onClick={handleShowModal_WriteAReview}
            onKeyDown={handleShowModal_WriteAReview}>
            <NavBar_D_WriteAReviewSvg />
            Write a review
          </button>
        </header>
        <Caption>
          Your trust is our top concern, so providers can’t pay to alter or remove reviews. We also don’t publish reviews that contain <br /> any private patient health
          information. <Caption tabIndex={0}>Learn more here.</Caption>
        </Caption>
        <ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention
          rating={card.leftPart.rating}
          reviews={card.leftPart.reviews}
        />
        <ORG_D_Detail_Reviews_IndividualComponent getReviews={getReviews} />
        <P
          onClick={handleShowModal_ViewAll}
          onKeyDown={handleShowModal_ViewAll}
          tabIndex={0}>
          View All
        </P>
      </ORG_D_Detail_ReviewsWrapper>

      {showModal_ViewAll && (
        <ORG_D_Detail_Review_Modal_ViewAll
          showModal={showModal_ViewAll}
          handleHideModal={handleHideModal_ViewAll}
          handleShowModal_WriteAReview={handleShowModal_WriteAReview}
          rating={card.leftPart.rating}
          reviews={card.leftPart.reviews}
          getReviews={getReviews}
          name={fullName.first}
          lastName={fullName.last}
        />
      )}

      {showModal_WriteAReview && (
        <ORG_D_Detail_Review_Modal_WriteAReview
          name={fullName.first}
          lastName={fullName.last}
          handleHideModal_WriteAReview={handleHideModal_WriteAReview}
        />
      )}
    </>
  )
}
