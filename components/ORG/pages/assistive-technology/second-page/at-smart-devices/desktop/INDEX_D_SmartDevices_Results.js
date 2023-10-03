import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PAT_D } from '../../../../../../../utils/ORG/pat/DATA_PAT_D'
import { DATA_AT_D_CardLeft } from '../../../../../../../utils/ORG/pat/at/DATA_AT_D_Card'
import { DATA_SAT_D_CardRight } from '../../../../../../../utils/ORG/pat/sat/DATA_SAT_D_Card'
import { renderFiltersInUI_CMPS_DAY } from '../../../../../../../utils/ORG/pcmps/day/DATA_DAY_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'

export const INDEX_D_SmartDevices_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_CMPS_DAY)
    setSecondpageDataORG({
      cardData: DATA_PAT_D[1].slice(1),
      mainNameORG: DATA_PAT_D[1][0],
      right: DATA_SAT_D_CardRight,
      left: DATA_AT_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
