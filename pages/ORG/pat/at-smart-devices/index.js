import { INDEX_D_SDAT_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-smart-devices/desktop/INDEX_D_SDAT_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_SDAT_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SDAT_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
