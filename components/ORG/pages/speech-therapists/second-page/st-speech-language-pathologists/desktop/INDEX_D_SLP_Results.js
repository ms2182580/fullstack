import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_PSLP_D } from "../../../../../../../utils/ORG/pst/DATA_PSLP_D.js"
import { DATA_SLP_D_CardLeft, DATA_SLP_D_CardRight } from "../../../../../../../utils/ORG/pst/slp/DATA_SLP_D_Card.js"
import { renderFiltersInUI_ST_SLP } from "../../../../../../../utils/ORG/pst/slp/DATA_SLP_D_Filters.js"

export const INDEX_D_SLP_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_ST_SLP)
    setSecondpageDataORG({
      cardData: DATA_PSLP_D[0].slice(1),
      mainNameORG: DATA_PSLP_D[0][0],
      right: DATA_SLP_D_CardRight,
      left: DATA_SLP_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
