import { INDEX_D_DCTR_PSYT_Detail } from "../../../../components/ORG/pages/doctors/third-page/dctr-psychiatrists/desktop/INDEX_D_DCTR_PSYT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_DCTR_Psychiatrists_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_DCTR_PSYT_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
