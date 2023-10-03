import Image from 'next/image.js'
import { useEffect } from 'react'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { useORG_Ctx_D_SecondpageData } from '../../../../../../../context/ORG_Ctx_D_SecondpageData_Provider'
import { useORG_Ctx_D_SecondpageFilters } from '../../../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider'
import { INDEX_D_SmartDevices_ResultsWrapper } from './styles/INDEX_D_SmartDevices_ResultsWrapper.js'

export const INDEX_D_SmartDevices_Results = () => {

  const { secondpageFiltersORG, setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  useEffect(() => {
    setSecondpageFiltersORG(renderFiltersInUI)
    setSecondpageDataORG({
      cardData: DATA_PCMPS_D[0].slice(1),
      mainNameORG: DATA_PCMPS_D[0][0],
      right: DATA_DAY_D_CardRight,
      left: DATA_DAY_D_CardLeft,
    })
  }, [])

  return (
    <INDEX_D_SmartDevices_ResultsWrapper>
      <h1>Smart Devices with Assistive Technology</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_SmartDevices_ResultsWrapper>
  )
}
