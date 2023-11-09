import { DATA_PVES_D } from "@/utils/ORG/pves/DATA_PVES_D"
import { DATA_OP_D_CardLeft, DATA_OP_D_CardRight } from "@/utils/ORG/pves/op/DATA_OP_D_Card.js"
import { renderFiltersInUI_VES_OP } from "@/utils/ORG/pves/op/DATA_OP_D_Filters.js"
import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D"

export const INDEX_D_OpenPositions_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_VES_OP)
    setSecondpageDataORG({
      cardData: DATA_PVES_D[0].slice(1),
      mainNameORG: DATA_PVES_D[0][0],
      right: DATA_OP_D_CardRight,
      left: DATA_OP_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}</>
}
