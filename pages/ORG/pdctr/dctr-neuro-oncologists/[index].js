import { INDEX_D_DCTR_NO_Detail } from "../../../../components/ORG/pages/doctors/third-page/dctr-neuro-oncologists/desktop/INDEX_D_DCTR_NO_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_DCTR_NeuroOncologists_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_DCTR_NO_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
