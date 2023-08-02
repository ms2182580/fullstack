import { useRouter } from "next/router.js"
import path from "path"
import { InFrontModal_D_Wrapper } from "../../../../../../../components/inFront_D/styles/InFrontModal_D_Wrapper.js"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { AT_D_Results_Header } from "./AT_D_Results_Header"
import { AT_D_Results_MainEntry } from "./AT_D_Results_MainEntry.js"
import { INDEX_D_AssistiveTechnology_ResultsWrapper } from "./styles/INDEX_D_AssistiveTechnology_ResultsWrapper.js"

export const INDEX_D_AssistiveTechnology_Results = () => {
  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  return (
    <>
      <INDEX_D_AssistiveTechnology_ResultsWrapper
        ORGShowFullMapFilter={
          ORGShowFullMapFilter && pathname === `${path.dirname(pathname)}/${path.basename(pathname)}`
        }>
        <AT_D_Results_Header />

        <AT_D_Results_MainEntry />

        <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
      </INDEX_D_AssistiveTechnology_ResultsWrapper>
    </>
  )
}
