import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_PPSYT_D } from "../../../../../../../utils/ORG/pdctr/DATA_PSYT_D"
import { DATA_PSYT_D_CardLeft, DATA_PSYT_D_CardRight } from "../../../../../../../utils/ORG/pdctr/psyt/DATA_PSYT_D_Card"
import { renderFiltersInUI_DCTR_PSYT } from "../../../../../../../utils/ORG/pdctr/psyt/DATA_PSYT_D_Filters"

export const INDEX_D_FamilyMedicine_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_DCTR_PSYT)
    setSecondpageDataORG({
      cardData: DATA_PPSYT_D[1].slice(1),
      mainNameORG: DATA_PPSYT_D[1][0],
      right: DATA_PSYT_D_CardRight,
      left: DATA_PSYT_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
