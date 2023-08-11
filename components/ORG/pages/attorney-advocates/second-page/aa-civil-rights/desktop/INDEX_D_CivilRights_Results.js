import { useRouter } from "next/router.js"
import path from "path"
import { InFrontModal_D_Wrapper } from "../../../../../../../components/inFront_D/styles/InFrontModal_D_Wrapper.js"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { CR_D_Results_Header } from "./CR_D_Results_Header.js"
import { CR_D_Results_MainEntry } from "./CR_D_Results_MainEntry.js"
import { INDEX_D_CivilRights_ResultsWrapper } from "./styles/INDEX_D_CivilRights_ResultsWrapper.js"

export const INDEX_D_CivilRights_Results = () => {
  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  return (
    <>
      <INDEX_D_CivilRights_ResultsWrapper
        ORGShowFullMapFilter={
          ORGShowFullMapFilter && pathname === `${path.dirname(pathname)}/${path.basename(pathname)}`
        }>
        <CR_D_Results_Header />

        <CR_D_Results_MainEntry />

        <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
      </INDEX_D_CivilRights_ResultsWrapper>
    </>
  )
}
