import { NavBar_D_WriteAReviewSvg } from "@/assets/Icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
import { useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_Review_Modal } from "./ORG_D_Detail_Review_Modal"
import { ORG_D_Detail_Reviews_IndividualComponent } from "./ORG_D_Detail_Reviews_IndividualComponent"
import { ORG_D_Detail_Reviews_PeopleOftenMention } from "./ORG_D_Detail_Reviews_PeopleOftenMention"
import { ORG_D_Detail_ReviewsWrapper } from "./styles/ORG_D_Detail_ReviewsWrapper"

export const ORG_D_Detail_Reviews = ({ defaultId = "reviews", arrayInnerNavBar }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { fullName, card } = thirdpageDataORG

  const [getReviews, setGetReviews] = useState(ORG_ST_Review(fullName.first, fullName.last))

  // const { push } = useRouter()
  // const handlePushTo404 = (e) => {
  //   if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
  //     push(
  //       {
  //         pathname: "/404",
  //         query: { toWhere: "ORG/speech-therapists/IndividualProvider" },
  //       },
  //       "/404",
  //     )
  //   }
  // }

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
      <header>
        <H3>Reviews</H3>
        <button tabIndex={0}>
          <NavBar_D_WriteAReviewSvg />
          Write a review
        </button>
      </header>

      <Caption>
        Your trust is our top concern, so providers can’t pay to alter or remove reviews. We also don’t publish reviews that contain <br /> any private patient health information.{" "}
        <Caption tabIndex={0}>Learn more here.</Caption>
      </Caption>

      <ORG_D_Detail_Reviews_PeopleOftenMention
        rating={card.leftPart.rating}
        reviews={card.leftPart.reviews}
      />

      <ORG_D_Detail_Reviews_IndividualComponent getReviews={getReviews} />

      <P
        onClick={handleShowModal}
        onKeyDown={handleShowModal}
        tabIndex={0}>
        View All
      </P>

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
