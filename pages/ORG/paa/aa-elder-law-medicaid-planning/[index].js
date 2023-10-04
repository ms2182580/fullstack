import { INDEX_D_AA_ELMP_Detail } from "../../../../components/ORG/pages/attorney-advocates/third-page/aa-elder-law-medicaid-planning/desktop/INDEX_D_AA_SE_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AA_ElderLawMedicaidPlanning_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AA_ELMP_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
