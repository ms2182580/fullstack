import { INDEX_D_DCTR_FM_Detail } from "../../../../components/ORG/pages/doctors/third-page/dctr-family-medicine/desktop/INDEX_D_DCTR_FM_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_DCTR_FamilyMedicine_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_DCTR_FM_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
