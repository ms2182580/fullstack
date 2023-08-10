import { INDEX_D_ElderLawMedicaidPlanning_Results } from "../../../../components/ORG/pages/attorney-advocates/second-page/aa-elder-law-medicaid-planning/desktop/INDEX_D_ElderLawMedicaidPlanning_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_AA_ElderLawMedicaidPlanning_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ElderLawMedicaidPlanning_Results />

        </>
      ) : (
        <>{/* // Nothing code yet */}</>
      )}
    </>
  )
}