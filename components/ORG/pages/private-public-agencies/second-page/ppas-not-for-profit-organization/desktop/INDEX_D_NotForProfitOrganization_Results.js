import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_NotForProfitOrganization_ResultsWrapper } from './styles/INDEX_D_NotForProfitOrganization_ResultsWrapper.js'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useEffect } from 'react'
import { DATA_A_D } from '../../../../../../../utils/ORG/pppas/a/DATA_A_D'
import { renderFiltersInUI_MHSS_FS } from '../../../../../../../utils/ORG/pmhss/fs/DATA_FS_D_Filters'
import { INDEX_ORG_Search_D } from '../../../../../cards/second-page/desktop/INDEX_ORG_Search_D'
import { DATA_AT_D_CardLeft, DATA_AT_D_CardRight } from '../../../../../../../utils/ORG/pat/at/DATA_AT_D_Card'
import { renderFiltersInUI_PPPAS_PNFPO } from '../../../../../../../utils/ORG/pppas/a/DATA_A_D_Filters'
import { DATA_A_D_CardLeft, DATA_A_D_CardRight } from '../../../../../../../utils/ORG/pppas/a/DATA_A_D_Card'

export const INDEX_D_NotForProfitOrganization_Results = () => {
  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI_PPPAS_PNFPO)
    setSecondpageDataORG({
      cardData: DATA_A_D[1].slice(1),
      mainNameORG: DATA_A_D[1][0],
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