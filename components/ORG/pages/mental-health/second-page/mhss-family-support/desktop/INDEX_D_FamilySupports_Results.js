import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_PMH_D } from "../../../../../../../utils/ORG/pmhss/DATA_PMH_D"
import { renderFiltersInUI_MHSS_FS } from "../../../../../../../utils/ORG/pmhss/fs/DATA_FS_D_Filters"
import { DATA_MH_D_CardLeft, DATA_MH_D_CardRight } from "../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D_Card"

export const INDEX_D_FamilySupports_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_MHSS_FS)
    setSecondpageDataORG({
      //Data obtained from the first ORG of the category
      cardData: DATA_PMH_D[1].slice(1),
      mainNameORG: DATA_PMH_D[1][0],
      right: DATA_MH_D_CardRight,
      left: DATA_MH_D_CardLeft,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
