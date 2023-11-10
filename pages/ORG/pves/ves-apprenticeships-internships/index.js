import { INDEX_D_ApprenticeshipsInternships_Results } from "@/components/ORG/pages/vocational-employment/second-page/ves-apprenticeships-internships/desktop/INDEX_D_ApprenticeshipsInternships_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_VES_ApprenticeshipsInternships_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ApprenticeshipsInternships_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
