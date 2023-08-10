import { INDEX_D_NeuroOncologists_Results } from "../../../../components/ORG/pages/doctors/second-page/dctr-neuro-oncologists/desktop/INDEX_D_NeuroOncologists_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_DCTR_NeuroOncologists_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_NeuroOncologists_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
