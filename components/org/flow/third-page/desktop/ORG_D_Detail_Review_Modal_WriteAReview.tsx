import { H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_Review_Modal_WriteAReview_Form } from "./ORG_D_Detail_Review_Modal_WriteAReview_Form"
import { ORG_D_Detail_Review_Modal_WriteAReview_Stars } from "./ORG_D_Detail_Review_Modal_WriteAReview_Stars"
import { ORG_D_Detail_Review_Modal_WriteAReviewWrapper } from "./styles/ORG_D_Detail_Review_Modal_WriteAReviewWrapper"

export const ORG_D_Detail_Review_Modal_WriteAReview = ({
  name,
  lastName,
}: {
  name?: string
  lastName?: string
}) => {
  return (
    <ORG_D_Detail_Review_Modal_WriteAReviewWrapper>
      <H2>Write a review </H2>
      <H4>
        Tell us about your experience with{" "}
        <strong>
          {name} {lastName}
        </strong>
      </H4>

      <div>
        <ORG_D_Detail_Review_Modal_WriteAReview_Stars />

        <ORG_D_Detail_Review_Modal_WriteAReview_Form />
      </div>
    </ORG_D_Detail_Review_Modal_WriteAReviewWrapper>
  )
}
