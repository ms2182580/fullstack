import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PCC_D } from '../../../../../../../utils/ORG/pcc/DATA_PCC_D'
import { DATA_CC_D_CardLeft, DATA_CC_D_CardRight } from '../../../../../../../utils/ORG/pcc/cc/DATA_CC_D_Card'
import { renderFiltersInUI_CC_CC } from '../../../../../../../utils/ORG/pcc/cc/DATA_CC_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'

export const INDEX_D_ArtClasses_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_CC_CC)
    setSecondpageDataORG({
      cardData: DATA_PCC_D[2].slice(1),
      mainNameORG: DATA_PCC_D[2][0],
      right: DATA_CC_D_CardRight,
      left: DATA_CC_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}