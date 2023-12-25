import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { InFrontModal_D_Wrapper } from "../../../../inFront_D/styles/InFrontModal_D_Wrapper"
import { ORG_D_Results_Header } from "./ORG_D_Results_Header"
import { ORG_D_Results_MainEntry } from "./ORG_D_Results_MainEntry"
import { INDEX_ORG_Results_DWrapper } from "./styles/INDEX_ORG_Results_DWrapper.js"

export const INDEX_ORG_Results_D = () => {
  const { modalShowedCtx }: any = useCtx_ShowModal()

  return (
    <INDEX_ORG_Results_DWrapper>
      <ORG_D_Results_Header />

      <ORG_D_Results_MainEntry />

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </INDEX_ORG_Results_DWrapper>
  )
}
