import { INDEX_D_HighlyReviewedCompanies_Results } from "@/components/ORG/pages/vocational-employment/second-page/ves-highly-reviewed-companies/desktop/INDEX_D_HighlyReviewedCompanies_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_FitnessClasses_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_HighlyReviewedCompanies_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
