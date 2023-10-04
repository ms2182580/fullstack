import { useEffect } from 'react'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { DATA_PCR_D } from '../../../../../../../utils/ORG/paa/DATA_PCR_D'
import { DATA_CR_D_CardLeft, DATA_CR_D_CardRight } from '../../../../../../../utils/ORG/paa/cr/DATA_CR_D_Card'
import { renderFiltersInUI_AA_CR } from '../../../../../../../utils/ORG/paa/cr/DATA_CR_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'

export const INDEX_D_ElderLawMedicaidPlanning_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_AA_CR)
    setSecondpageDataORG({
      cardData: DATA_PCR_D[2].slice(1),
      mainNameORG: DATA_PCR_D[2][0],
      right: DATA_CR_D_CardRight,
      left: DATA_CR_D_CardLeft,
    })
  }, [])

  return (
    <>
      {secondpageFiltersORG !== "" && <INDEX_ORG_Search_D />}
    </>
  )
}