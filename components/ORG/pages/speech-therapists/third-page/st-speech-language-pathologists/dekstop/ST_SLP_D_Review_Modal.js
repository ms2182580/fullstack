import { useEffect, useRef } from "react"
import { XSvg } from "../../../../../../../assets/Icons/index.js"
import { ST_SLP_D_Review_Modal_DetailRating } from "./ST_SLP_D_Review_Modal_DetailRating.js"
import { ST_SLP_D_Review_Modal_DetailReviews } from "./ST_SLP_D_Review_Modal_DetailReviews.js"
import {
  ST_SLP_D_Reviews_Header
} from "./ST_SLP_D_Reviews_Header.js"
import {
  ST_SLP_D_Review_ModalWrapper
} from "./styles/ST_SLP_D_Review_ModalWrapper.js"

export const ST_SLP_D_Review_Modal = ({
  showModal,
  handleHideModal,
  rating,
  reviews,
  getReviews,
  name,
  lastName
}) => {
  const componentRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [componentRef])

  return (
    <ST_SLP_D_Review_ModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={() => handleHideModal()}>
        <XSvg />
      </span>

      <ST_SLP_D_Reviews_Header
        rating={rating}
        reviews={reviews}
        isDetailModalDesktop={true}
        modal={true}
      />

      <div>
        <ST_SLP_D_Review_Modal_DetailRating rating={rating} />

        <ST_SLP_D_Review_Modal_DetailReviews
          name={name}
          lastName={lastName}
        />
      </div>
    </ST_SLP_D_Review_ModalWrapper>
  )
}
