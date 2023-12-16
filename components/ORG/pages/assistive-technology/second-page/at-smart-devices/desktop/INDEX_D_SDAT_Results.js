import { DATA_SDAT_D_CardLeft } from "@/utils/ORG/pat/sdat/DATA_SDAT_D_Card"
import { SPECIFIC_DATA_KEY } from "@/utils/ORG/specificData"
import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider"
import { AT_SPECIFIC_DATA, DATA_PAT_D } from "../../../../../../../utils/ORG/pat/DATA_PAT_D"
import { DATA_SAT_D_CardRight } from "../../../../../../../utils/ORG/pat/ass/DATA_SAT_D_Card"
import { renderFiltersInUI_AT_AT } from "../../../../../../../utils/ORG/pat/wcmd/DATA_AT_D_Filters"

export const INDEX_D_SDAT_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_AT_AT)
    setSecondpageDataORG({
      cardData: DATA_PAT_D[3].slice(1),
      mainNameORG: DATA_PAT_D[3][0],
      right: DATA_SAT_D_CardRight,
      left: DATA_SDAT_D_CardLeft,
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: AT_SPECIFIC_DATA,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
