import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_PPSYT_D } from "../../../../../../../utils/ORG/pdctr/DATA_PSYT_D.js"
import { DATA_PSYT_D_CardLeft, DATA_PSYT_D_CardRight } from "../../../../../../../utils/ORG/pdctr/psyt/DATA_PSYT_D_Card.js"
import { renderFiltersInUI_DCTR_PSYT } from "../../../../../../../utils/ORG/pdctr/psyt/DATA_PSYT_D_Filters.js"

export const INDEX_D_Psychiatrists_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_DCTR_PSYT)
    setSecondpageDataORG({
      cardData: DATA_PPSYT_D[0].slice(1),
      mainNameORG: DATA_PPSYT_D[0][0],
      right: DATA_PSYT_D_CardRight,
      left: DATA_PSYT_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
