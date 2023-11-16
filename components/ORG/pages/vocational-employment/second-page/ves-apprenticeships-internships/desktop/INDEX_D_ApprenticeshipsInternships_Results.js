import { DATA_PVES_D, VES_SPECIFIC_DATA } from "@/utils/ORG/pves/DATA_PVES_D"
import { DATA_OP_D_CardLeft, DATA_OP_D_CardRight } from "@/utils/ORG/pves/op/DATA_OP_D_Card.js"
import { renderFiltersInUI_VES_OP } from "@/utils/ORG/pves/op/DATA_OP_D_Filters.js"
import { Layout_MainCard_Search_KEY, Layout_MainCard_Search_VALUE } from "@/utils/ORG/pves/second-page/desktop/specificLayout"
import { SPECIFIC_DATA_KEY } from "@/utils/ORG/specificData"
import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { INDEX_ORG_Search_D } from "../../../../../cards/second-page/desktop/INDEX_ORG_Search_D"

export const INDEX_D_ApprenticeshipsInternships_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_VES_OP)
    setSecondpageDataORG({
      cardData: DATA_PVES_D[3].slice(1),
      mainNameORG: DATA_PVES_D[3][0],
      right: DATA_OP_D_CardRight,
      left: DATA_OP_D_CardLeft,
      [Layout_MainCard_Search_KEY.KEY]: Layout_MainCard_Search_VALUE.VES_LIKE,
      isOpenPosition: false,
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: VES_SPECIFIC_DATA,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}</>
}
