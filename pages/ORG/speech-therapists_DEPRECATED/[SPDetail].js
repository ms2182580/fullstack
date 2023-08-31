import { INDEX_D_STDetail } from "../../../components/ORG/pages/speech-therapists/third-page/dekstop/INDEX_D_STDetail"
import { INDEX_M_STDetail } from "../../../components/ORG/pages/speech-therapists/third-page/mobile/INDEX_M_STDetail"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"

export default function SPDetail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_STDetail />
        </>
      ) : (
        <>
          <INDEX_M_STDetail />
        </>
      )}
    </>
  )
}
