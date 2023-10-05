import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PLT_D } from '../../../../../../../utils/ORG/prp/DATA_PLT_D'
import { DATA_LT_D_CardLeft, DATA_LT_D_CardRight } from '../../../../../../../utils/ORG/prp/lt/DATA_LT_D_Card'
import { renderFiltersInUI_RP_LT } from '../../../../../../../utils/ORG/prp/lt/DATA_LT_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'

export const INDEX_D_ShortTermResidential_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_RP_LT)
    setSecondpageDataORG({
      cardData: DATA_PLT_D[1].slice(1),
      mainNameORG: DATA_PLT_D[1][0],
      right: DATA_LT_D_CardRight,
      left: DATA_LT_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}