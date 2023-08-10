import Image from 'next/image.js'
import { useRouter } from "next/router.js"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { useCtx_ShowModal } from '../../../../../../../context/Ctx_ShowModal.js'
import { useORG_CtxShowFiltersDesktop } from '../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider'
import { INDEX_D_SmartDevices_ResultsWrapper } from './styles/INDEX_D_SmartDevices_ResultsWrapper.js'

export const INDEX_D_SmartDevices_Results = () => {
  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname, query, route, ...props } = useRouter()
  // console.log('🟫props:', props)
  // console.log('query:', query)

  return (
    <INDEX_D_SmartDevices_ResultsWrapper>
      <h1>Smart Devices with Assistive Technology</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_SmartDevices_ResultsWrapper>
  )
}
