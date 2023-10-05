import { INDEX_D_DayTrips_Results } from "../../../../components/ORG/pages/camps/second-page/cpms-day-trips/desktop/INDEX_D_DayTrips_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_CMPS_DayTrips_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_DayTrips_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}