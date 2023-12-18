import { SPECIFIC_DATA_KEY } from "@/utils/ORG/specificData"
import { useEffect } from "react"
import { useORG_Ctx_D_SecondpageData } from "../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider"
import { DATA_PAT_D, PAT_SPECIFIC_DATA } from "../../../../../../../utils/ORG/pat/DATA_PAT_D"
import { DATA_SDAT_D_CardLeft, DATA_SDAT_D_CardRight } from "../../../../../../../utils/ORG/pat/sdat/DATA_SDAT_D_Card"

export const INDEX_D_IHT_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(filtersUI_PAT)
    setSecondpageDataORG({
      cardData: DATA_PAT_D[4].slice(1),
      mainNameORG: DATA_PAT_D[4][0],
      right: DATA_SDAT_D_CardRight,
      left: DATA_SDAT_D_CardLeft,
      [SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]: PAT_SPECIFIC_DATA,
    })
  }, [])

  return <>{secondpageFiltersORG !== "" && <INDEX_ORG_Results_D />}</>
}
