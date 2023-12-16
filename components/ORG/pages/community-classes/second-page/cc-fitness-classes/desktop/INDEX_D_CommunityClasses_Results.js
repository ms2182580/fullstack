import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_PCC_D } from "../../../../../../../utils/ORG/pcc/DATA_PCC_D.js"
import { DATA_CC_D_CardLeft, DATA_CC_D_CardRight } from "../../../../../../../utils/ORG/pcc/cc/DATA_CC_D_Card.js"
import { renderFiltersInUI_CC_CC } from "../../../../../../../utils/ORG/pcc/cc/DATA_CC_D_Filters.js"

export const INDEX_D_FitnessClasses_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_CC_CC)
    setSecondpageDataORG({
      cardData: DATA_PCC_D[1].slice(1),
      mainNameORG: DATA_PCC_D[1][0],
      right: DATA_CC_D_CardRight,
      left: DATA_CC_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
