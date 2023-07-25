import { InFrontModal_D_Wrapper } from '../../../../../../components/inFront_D/styles/InFrontModal_D_Wrapper.js'
import { useCtx_ShowModal } from "../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { AT_D_Results_Header } from "./AT_D_Results_Header"
import { INDEX_D_AssistiveTechnology_ResultsWrapper } from "./styles/INDEX_D_AssistiveTechnology_ResultsWrapper.js"

/* 
!FH0

Keep coding this!
*/

export const INDEX_D_AssistiveTechnology_Results = () => {

  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <>
      <INDEX_D_AssistiveTechnology_ResultsWrapper
        ORGShowFullMapFilter={
          ORGShowFullMapFilter && pathname === `${path.dirname(pathname)}/${path.basename(pathname)}`
        }>
        <AT_D_Results_Header />
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
      </INDEX_D_AssistiveTechnology_ResultsWrapper>

      {/* <UnderConstruction /> */}

      {/* <Image src={UnderConstructionImagePurple} /> */}
    </>
  )
}
