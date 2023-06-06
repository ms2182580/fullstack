import { useEffect, useRef } from "react"
import { XSvg } from "../../../../../assets/Icons/index.js"
import { STDetail_Review_Modal_DetailRating } from "./STDetail_Review_Modal_DetailRating.js"
import { STDetail_Review_Modal_DetailReviews } from "./STDetail_Review_Modal_DetailReviews.js"
import { STDetail_Reviews_HeaderDesktop } from "./STDetail_Reviews_HeaderDesktop.js"
import { STDetail_Review_ModalWrapper } from "./styles/STDetail_Review_ModalWrapper.js"

export const STDetail_Review_Modal = ({ showModal, handleHideModal, rating, reviews, getReviews, name, lastName }) => {
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
    <>
      <STDetail_Review_ModalWrapper
        ref={componentRef}
        showModal={showModal}>
        <span onClick={() => handleHideModal()}>
          <XSvg />
        </span>

        <STDetail_Reviews_HeaderDesktop
          rating={rating}
          reviews={reviews}
          isDetailModalDesktop={true}
          modal={true}
        />

        <div>
          <STDetail_Review_Modal_DetailRating rating={rating} />

          <STDetail_Review_Modal_DetailReviews
            name={name}
            lastName={lastName}

          />
        </div>
      </STDetail_Review_ModalWrapper>
    </>
  )
}
