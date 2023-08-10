import { INDEX_D_OvernightCamps_Results } from "../../../../components/ORG/pages/camps/second-page/cmps-overnight-camps/desktop/INDEX_D_OvernightCamps_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_CMPS_OvernightCamps_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_OvernightCamps_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}