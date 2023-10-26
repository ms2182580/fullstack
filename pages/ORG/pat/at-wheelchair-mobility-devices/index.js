import { INDEX_D_WCMD_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-wheelchair-mobility-devices/desktop/INDEX_D_WCMD_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_WCMD_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_WCMD_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
