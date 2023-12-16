import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_PCMPS_D } from "../../../../../../../utils/ORG/pcmps/DATA_PCMPS_D"
import { DATA_DAY_D_CardLeft, DATA_DAY_D_CardRight } from "../../../../../../../utils/ORG/pcmps/day/DATA_DAY_D_Card"
import { renderFiltersInUI_CMPS_DAY } from "../../../../../../../utils/ORG/pcmps/day/DATA_DAY_D_Filters"

export const INDEX_D_OvernightCamps_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_CMPS_DAY)
    setSecondpageDataORG({
      cardData: DATA_PCMPS_D[1].slice(1),
      mainNameORG: DATA_PCMPS_D[1][0],
      right: DATA_DAY_D_CardRight,
      left: DATA_DAY_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
