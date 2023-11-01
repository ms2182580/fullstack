import { XSvg } from "@/assets/Icons"
import { H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useEffect, useRef } from "react"
import { ORG_D_Detail_Review_Modal_WriteAReview_Form } from "./ORG_D_Detail_Review_Modal_WriteAReview_Form"
import { ORG_D_Detail_Review_Modal_WriteAReviewWrapper } from "./styles/ORG_D_Detail_Review_Modal_WriteAReviewWrapper"

export const ORG_D_Detail_Review_Modal_WriteAReview = ({ name, lastName, handleHideModal_WriteAReview }) => {
  // console.log("name, lastName:", name, lastName)

  const componentRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if ((componentRef.current && !componentRef.current.contains(event.target) && event.type === "mousedown") || (event.key === "Escape" && event.type === "keydown")) {
        handleHideModal_WriteAReview(event)
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
    <ORG_D_Detail_Review_Modal_WriteAReviewWrapper ref={componentRef}>
      <span
        onClick={handleHideModal_WriteAReview}
        onKeyDown={handleHideModal_WriteAReview}
        tabIndex={0}>
        <XSvg />
      </span>

      <H2>Write a review </H2>
      <H4>
        Tell us about your experience with <strong>Dr. Jay Enguertem.</strong>
      </H4>

      <div>
        <ul className="LEFT">aaa</ul>

        <ORG_D_Detail_Review_Modal_WriteAReview_Form />
      </div>
    </ORG_D_Detail_Review_Modal_WriteAReviewWrapper>
  )
}
