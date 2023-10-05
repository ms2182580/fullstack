import { INDEX_D_AA_IDD_Detail } from "../../../../components/ORG/pages/attorney-advocates/third-page/aa-idd/desktop/INDEX_D_AA_CR_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AA_IDD_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AA_IDD_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
