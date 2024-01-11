import { XSvg } from "@/assets/icons"
import { H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useEffect, useRef } from "react"
import { ORG_D_Detail_Review_Modal_WriteAReview_Form } from "../desktop/ORG_D_Detail_Review_Modal_WriteAReview_Form"
import { ORG_M_Detail_Review_Modal_WriteAReviewWrapper } from "./styles/ORG_M_Detail_Modal_WriteAReviewWrapper"
import { ORG_M_Detail_Review_Modal_WriteAReview_Stars } from "./ORG_M_Detail_Review_Modal_WriteAReview_Stars"
import { ORG_M_Detail_Review_Modal_WriteAReview_Form } from "./ORG_M_Detail_Review_Modal_WriteAReview_Form"

export const ORG_M_Detail_Review_Modal_WriteAReview = ({
  name,
  lastName,
  handleHideModal_WriteAReview,
}: any) => {
  return (
    <ORG_M_Detail_Review_Modal_WriteAReviewWrapper tabIndex={0}>
      <span
        onClick={handleHideModal_WriteAReview}
        onKeyDown={handleHideModal_WriteAReview}
        tabIndex={0}
      >
        <XSvg />
      </span>

      <H2>Write a review </H2>
      <H4>
        Tell us about your experience with{" "}
        <strong>
          {name} {lastName}
        </strong>
      </H4>

      <div>
        <ORG_M_Detail_Review_Modal_WriteAReview_Stars />

        <ORG_M_Detail_Review_Modal_WriteAReview_Form
          name={name}
          lastName={lastName}
        />
      </div>
    </ORG_M_Detail_Review_Modal_WriteAReviewWrapper>
  )
}
