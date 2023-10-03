import { useEffect } from "react";
import { INDEX_D_Day_Results } from "../../../../components/ORG/pages/camps/second-page/cmps-day/desktop/INDEX_D_Day_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";
import { useORG_Ctx_D_SecondpageData } from "../../../../context/ORG_Ctx_D_SecondpageData_Provider";
import { useORG_Ctx_D_SecondpageFilters } from "../../../../context/ORG_Ctx_D_SecondpageFilters_Provider";
import { DATA_DAY_D } from "../../../../utils/ORG/pcmps/day/DATA_DAY_D";
import { DATA_DAY_D_CardLeft, DATA_DAY_D_CardRight } from "../../../../utils/ORG/pcmps/day/DATA_DAY_D_Card";
import { renderFiltersInUI } from "../../../../utils/ORG/pcmps/day/DATA_DAY_D_Filters";

export default function ORG_INDEX_CMPS_Day_Results() {
  const { isMobile } = useCheckUserWidth()

  const { setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI)
    setSecondpageDataORG({
      cardData: DATA_DAY_D[0].slice(1),
      mainNameORG: DATA_DAY_D[0][0],
      right: DATA_DAY_D_CardRight,
      left: DATA_DAY_D_CardLeft,
    })
  }, [])

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