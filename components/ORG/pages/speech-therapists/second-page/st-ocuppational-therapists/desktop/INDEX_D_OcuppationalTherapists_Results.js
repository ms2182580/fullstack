import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PSLP_D } from '../../../../../../../utils/ORG/pst/DATA_PSLP_D'
import { DATA_SLP_D_CardLeft, DATA_SLP_D_CardRight } from '../../../../../../../utils/ORG/pst/slp/DATA_SLP_D_Card'
import { renderFiltersInUI_ST_SLP } from '../../../../../../../utils/ORG/pst/slp/DATA_SLP_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'

export const INDEX_D_OcuppationalTherapists_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_ST_SLP)
    setSecondpageDataORG({
      cardData: DATA_PSLP_D[1].slice(1),
      mainNameORG: DATA_PSLP_D[1][0],
      right: DATA_SLP_D_CardRight,
      left: DATA_SLP_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}