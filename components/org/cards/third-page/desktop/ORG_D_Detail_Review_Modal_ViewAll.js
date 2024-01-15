import { H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useEffect, useRef } from "react"
import {
  NavBar_D_WriteAReviewSvg,
  XSvg,
} from "../../../../../assets/icons/index.js"
import { ORG_D_Detail_Review_Modal_DetailRating } from "./ORG_D_Detail_Review_Modal_DetailRating.js"
import { ORG_D_Detail_Review_Modal_DetailReviews } from "./ORG_D_Detail_Review_Modal_DetailReviews.js"
import { ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention } from "./ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention.js"
import { ORG_D_Detail_Review_Modal_ViewAllWrapper } from "./styles/ORG_D_Detail_Review_Modal_ViewAllWrapper.js"

export const ORG_D_Detail_Review_Modal_ViewAll = ({
  showModal,
  handleHideModal,
  handleShowModal_WriteAReview,
  rating,
  reviews,
  getReviews,
  name,
  lastName,
}) => {
  const componentRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (componentRef.current &&
          !componentRef.current.contains(event.target) &&
          event.type === "mousedown") ||
        (event.key === "Escape" && event.type === "keydown")
      ) {
        handleHideModal(event)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleClickOutside)
    }
  }, [componentRef])

  return (
    <ORG_D_Detail_Review_Modal_ViewAllWrapper
      ref={componentRef}
      showModal={showModal}
    >
      <span onClick={handleHideModal} onKeyDown={handleHideModal} tabIndex={0}>
        <XSvg />
      </span>

      <H2>Reviews</H2>
      <span>
        <H4>
          All reviews are submitted by verified patients or their responsible
          party.
        </H4>
        <span
          tabIndex={0}
          onKeyDown={handleShowModal_WriteAReview}
          onClick={handleShowModal_WriteAReview}
        >
          <NavBar_D_WriteAReviewSvg />
        </span>
      </span>

      <ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention
        rating={rating}
        reviews={reviews}
        isModal={true}
      />

      <div>
        <ORG_D_Detail_Review_Modal_DetailRating rating={rating} />

        <ORG_D_Detail_Review_Modal_DetailReviews
          name={name}
          lastName={lastName}
        />
      </div>
    </ORG_D_Detail_Review_Modal_ViewAllWrapper>
  )
}
