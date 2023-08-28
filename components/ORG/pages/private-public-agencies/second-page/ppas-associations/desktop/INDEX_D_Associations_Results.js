import { useRouter } from "next/router.js"
import path from "path"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { InFrontModal_D_Wrapper } from "../../../../../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { A_D_Results_Header } from "./A_D_Results_Header.js"
import { A_D_Results_MainEntry } from "./A_D_Results_MainEntry.js"
import { INDEX_D_Associations_ResultsWrapper } from "./styles/INDEX_D_Associations_ResultsWrapper.js"

export const INDEX_D_Associations_Results = () => {
  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  return (
    <>
      <INDEX_D_Associations_ResultsWrapper ORGShowFullMapFilter={ORGShowFullMapFilter && pathname === `${path.dirname(pathname)}/${path.basename(pathname)}`}>

        <A_D_Results_Header />

        <A_D_Results_MainEntry />

        <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
      </INDEX_D_Associations_ResultsWrapper>
    </>
  )
}
