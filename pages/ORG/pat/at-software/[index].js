import { INDEX_D_AT_SDAT_Detail } from "../../../../components/ORG/pages/assistive-technology/third-page/at-software/desktop/INDEX_D_AT_SDAT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_SmartDevices_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AT_SDAT_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
