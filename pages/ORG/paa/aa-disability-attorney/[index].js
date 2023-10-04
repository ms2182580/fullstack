import { INDEX_D_AA_SE_Detail } from "../../../../components/ORG/pages/attorney-advocates/third-page/aa-special-education/desktop/INDEX_D_AA_SE_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AA_DisabilityAttorney_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AA_SE_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
