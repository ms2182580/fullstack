import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_PCMPS_D } from "../../../../../../../utils/ORG/pcmps/DATA_PCMPS_D.js"
import { DATA_DAY_D_CardLeft, DATA_DAY_D_CardRight } from "../../../../../../../utils/ORG/pcmps/day/DATA_DAY_D_Card.js"
import { renderFiltersInUI } from "../../../../../../../utils/ORG/pcmps/day/DATA_DAY_D_Filters.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D.js"

export const INDEX_D_Day_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI)
    setSecondpageDataORG({
      cardData: DATA_PCMPS_D[0].slice(1),
      mainNameORG: DATA_PCMPS_D[0][0],
      right: DATA_DAY_D_CardRight,
      left: DATA_DAY_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
