import Image from "next/image.js"
import { useRouter } from "next/router.js"
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { useCtx_ShowModal } from "../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { INDEX_D_Software_ResultsWrapper } from "./styles/INDEX_D_SmartDevices_ResultsWrapper"

export const INDEX_D_Software_Results = () => {
  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname, query, route, ...props } = useRouter()
  console.log('🟫props:', props)
  // console.log('query:', query)

  return (
    <INDEX_D_Software_ResultsWrapper>
      {/* <INDEX_D_Software_ResultsWrapper
        ORGShowFullMapFilter={
          ORGShowFullMapFilter && pathname === `${path.dirname(pathname)}/${path.basename(pathname)}`
        }>
        <div>
          Header
      
        </div>
        <div>
          <div>
            <h2>Main entry</h2>
            <h3>FilterSortbyHeader</h3>
            <div>
              <p>ChoisePath</p>
              <p>Map</p>
            </div>
            <h3>Final buttons</h3>
            <h3>BreadcrumbsAndLastUpdated</h3>
          </div>
          <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
        </div>
      </INDEX_D_Software_ResultsWrapper> */}

      <Image src={UnderConstructionImagePurple} />


      {/* <UnderConstruction /> */}

    </INDEX_D_Software_ResultsWrapper>
  )
}
