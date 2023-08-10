import { INDEX_D_Day_Results } from "../../../../components/ORG/pages/camps/second-page/cmps-day/desktop/INDEX_D_Day_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_CMPS_Day_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_Day_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}