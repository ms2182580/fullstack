import { SPECIFIC_DATA } from "@/utils/ORG/DATA_ORG_D"
import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { AT_SPECIFIC_DATA, DATA_PAT_D } from "../../../../../../../utils/ORG/pat/DATA_PAT_D"
import { DATA_AT_D_CardLeft, DATA_AT_D_CardRight } from "../../../../../../../utils/ORG/pat/wcmd/DATA_AT_D_Card.js"
import { renderFiltersInUI_AT_AT } from "../../../../../../../utils/ORG/pat/wcmd/DATA_AT_D_Filters.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D.js"

export const INDEX_D_WCMD_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_AT_AT)
    setSecondpageDataORG({
      cardData: DATA_PAT_D[0].slice(1),
      mainNameORG: DATA_PAT_D[0][0],
      right: DATA_AT_D_CardRight,
      left: DATA_AT_D_CardLeft,
      [SPECIFIC_DATA.SPECIFIC_DATA]: AT_SPECIFIC_DATA,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}</>
}
