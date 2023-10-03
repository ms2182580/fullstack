import { INDEX_D_SmartDevices_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-smart-devices/desktop/INDEX_D_SmartDevices_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_SmartDevices_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SmartDevices_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
