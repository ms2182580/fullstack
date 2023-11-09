import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { DATA_A_D_CardLeft, DATA_A_D_CardRight } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D_Card.js"
import { renderFiltersInUI_PPPAS_PNFPO } from "../../../../../../../utils/ORG/pppas/a/DATA_A_D_Filters.js"
import { DATA_SES_D } from "../../../../../../../utils/ORG/pses/ses/DATA_SES_D.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D"

export const INDEX_D_SpecialEducationSchools_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_PPPAS_PNFPO)
    setSecondpageDataORG({
      cardData: DATA_SES_D[0].slice(1),
      mainNameORG: DATA_SES_D[0][0],
      right: DATA_A_D_CardRight,
      left: DATA_A_D_CardLeft,
    })
  }, [])

  //

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}</>
}
