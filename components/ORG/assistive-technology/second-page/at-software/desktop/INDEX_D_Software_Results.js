import { useRouter } from "next/router.js"
import { useCtx_ShowModal } from "../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { UnderConstruction } from "../../../../../under-construction/UnderConstruction.js"

export const INDEX_D_Software_Results = () => {
  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname, query, route, ...props } = useRouter()
  console.log('🟫props:', props)
  // console.log('query:', query)

  return (
    <>
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
      <UnderConstruction />
    </>
  )
}
