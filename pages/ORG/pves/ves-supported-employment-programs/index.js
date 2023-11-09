import { INDEX_D_SupportedEmploymentPrograms_Results } from "@/components/ORG/pages/vocational-employment/second-page/ves-supported-employment-programs/desktop/INDEX_D_SupportedEmploymentPrograms_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_FitnessClasses_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SupportedEmploymentPrograms_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
