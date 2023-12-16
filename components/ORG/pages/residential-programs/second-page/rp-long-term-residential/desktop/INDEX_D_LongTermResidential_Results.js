import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_PLT_D } from "../../../../../../../utils/ORG/prp/DATA_PLT_D.js"
import { DATA_LT_D_CardLeft, DATA_LT_D_CardRight } from "../../../../../../../utils/ORG/prp/lt/DATA_LT_D_Card.js"
import { renderFiltersInUI_RP_LT } from "../../../../../../../utils/ORG/prp/lt/DATA_LT_D_Filters.js"

export const INDEX_D_LongTermResidential_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_RP_LT)
    setSecondpageDataORG({
      cardData: DATA_PLT_D[0].slice(1),
      mainNameORG: DATA_PLT_D[0][0],
      right: DATA_LT_D_CardRight,
      left: DATA_LT_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
