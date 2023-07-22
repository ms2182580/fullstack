import { INDEX_D_SmartDevices_Results } from "../../../../components/ORG/assistive-technology/second-page/at-smart-devices/desktop/INDEX_D_SmartDevices_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

const ORG_INDEX_AT_SmartDevices_Results = (props) => {
  const { isMobile } = useCheckUserWidth()

  // const { pathname, query, route, ...allProps } = useRouter()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_SmartDevices_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}

export default ORG_INDEX_AT_SmartDevices_Results


