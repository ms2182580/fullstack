import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PPPAS_D } from '../../../../../../../utils/ORG/pppas/DATA_PPPAS_D'
import { DATA_A_D_CardLeft, DATA_A_D_CardRight } from '../../../../../../../utils/ORG/pppas/a/DATA_A_D_Card'
import { renderFiltersInUI_PPPAS_PNFPO } from '../../../../../../../utils/ORG/pppas/a/DATA_A_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'

export const INDEX_D_StateOffices_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_PPPAS_PNFPO)
    setSecondpageDataORG({
      cardData: DATA_PPPAS_D[2].slice(1),
      mainNameORG: DATA_PPPAS_D[2][0],
      right: DATA_A_D_CardRight,
      left: DATA_A_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}