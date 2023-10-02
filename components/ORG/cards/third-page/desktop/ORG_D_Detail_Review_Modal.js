import { useEffect, useRef } from "react"
import { XSvg } from "../../../../../assets/Icons/index.js"
import { ORG_D_Detail_Review_Modal_DetailRating } from "./ORG_D_Detail_Review_Modal_DetailRating.js"
import { ORG_D_Detail_Review_Modal_DetailReviews } from "./ORG_D_Detail_Review_Modal_DetailReviews.js"
import { ORG_D_Detail_Reviews_Header } from "./ORG_D_Detail_Reviews_Header.js"
import {
  ORG_D_Detail_Review_ModalWrapper
} from "./styles/ORG_D_Detail_Review_ModalWrapper.js"

export const ORG_D_Detail_Review_Modal = ({
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
    <ORG_D_Detail_Review_ModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={() => handleHideModal()}>
        <XSvg />
      </span>

      <ORG_D_Detail_Reviews_Header
        rating={rating}
        reviews={reviews}
        isDetailModalDesktop={true}
        modal={true}
      />

      <div>
        <ORG_D_Detail_Review_Modal_DetailRating rating={rating} />

        <ORG_D_Detail_Review_Modal_DetailReviews
          name={name}
          lastName={lastName}
        />
      </div>
    </ORG_D_Detail_Review_ModalWrapper>
  )
}
