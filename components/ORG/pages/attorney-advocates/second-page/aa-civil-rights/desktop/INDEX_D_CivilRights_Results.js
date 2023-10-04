import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_PCR_D } from "../../../../../../../utils/ORG/paa/DATA_PCR_D.js"
import { DATA_CR_D_CardLeft, DATA_CR_D_CardRight } from "../../../../../../../utils/ORG/paa/cr/DATA_CR_D_Card.js"
import { renderFiltersInUI_AA_CR } from "../../../../../../../utils/ORG/paa/cr/DATA_CR_D_Filters.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D.js"

export const INDEX_D_CivilRights_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_AA_CR)
    setSecondpageDataORG({
      cardData: DATA_PCR_D[0].slice(1),
      mainNameORG: DATA_PCR_D[0][0],
      right: DATA_CR_D_CardRight,
      left: DATA_CR_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
