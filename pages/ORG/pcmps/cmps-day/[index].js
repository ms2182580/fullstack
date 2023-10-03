import { INDEX_D_AT_SAT_Detail } from "../../../../components/ORG/pages/assistive-technology/third-page/at-smart-devices/desktop/INDEX_D_AT_SAT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CMPS_DAY_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AT_SAT_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
