import { useEffect, useRef } from "react"
import { XSvg } from "../../../../../../../../assets/Icons/index.js"
import { CC_D_Detail_Review_Modal_DetailRating } from "./CC_D_Detail_Review_Modal_DetailRating.js"
import { CC_D_Detail_Review_Modal_DetailReviews } from "./CC_D_Detail_Review_Modal_DetailReviews.js"
import { CC_D_Detail_Reviews_Header } from "./CC_D_Detail_Reviews_Header.js"
import {
  CC_D_Detail_Review_ModalWrapper
} from "./styles/CC_D_Detail_Review_ModalWrapper.js"

export const CC_D_Detail_Review_Modal = ({
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

    function handleKeydown(e) {
      if (componentRef.current && e.code === "Escape") {
        handleHideModal()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeydown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeydown)

    }
  }, [componentRef])

  return (
    <CC_D_Detail_Review_ModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={() => handleHideModal()}>
        <XSvg />
      </span>

      <CC_D_Detail_Reviews_Header
        rating={rating}
        reviews={reviews}
        isDetailModalDesktop={true}
        modal={true}
      />

      <div>
        <CC_D_Detail_Review_Modal_DetailRating rating={rating} />

        <CC_D_Detail_Review_Modal_DetailReviews
          name={name}
          lastName={lastName}
        />
      </div>
    </CC_D_Detail_Review_ModalWrapper>
  )
}
