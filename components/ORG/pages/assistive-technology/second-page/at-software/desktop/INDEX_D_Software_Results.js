import Image from "next/image.js"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_Software_ResultsWrapper } from "./styles/INDEX_D_SmartDevices_ResultsWrapper"

export const INDEX_D_Software_Results = () => {
  // const { modalShowedCtx } = useCtx_ShowModal()
  // const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  // const { pathname, query, route, ...props } = useRouter()
  // console.log('🟫props:', props)
  // console.log('query:', query)

  return (
    <INDEX_D_Software_ResultsWrapper>

      <h1>Software Assistive Technology</h1>
      <Image src={UnderConstructionImagePurple} />

      {/* <UnderConstruction /> */}
    </INDEX_D_Software_ResultsWrapper>
  )
}
