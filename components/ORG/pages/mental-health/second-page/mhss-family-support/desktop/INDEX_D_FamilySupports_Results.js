import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PAT_D } from '../../../../../../../utils/ORG/pat/DATA_PAT_D'
import { DATA_AT_D_CardLeft } from '../../../../../../../utils/ORG/pat/at/DATA_AT_D_Card'
import { DATA_SAT_D_CardRight } from '../../../../../../../utils/ORG/pat/sat/DATA_SAT_D_Card'
import { renderFiltersInUI_CMPS_DAY } from '../../../../../../../utils/ORG/pcmps/day/DATA_DAY_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'
import { renderFiltersInUI_MHSS_FS } from '../../../../../../../utils/ORG/pmhss/fs/DATA_FS_D_Filters'
import { DATA_PMH_D } from '../../../../../../../utils/ORG/pmhss/DATA_PMH_D'
import { DATA_MH_D_CardLeft, DATA_MH_D_CardRight } from '../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D_Card'

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

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}
