import { InFrontModal_D_Wrapper } from "@/components/inFront_D/styles/InFrontModal_D_Wrapper"
import { useCtx_ShowModal } from "@/context/Ctx_ShowModal"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useORG_CtxShowFiltersDesktop } from "@/context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useRouter } from "next/router.js"
import path from "path"
import { useEffect } from "react"
import { ORG_D_Results_Header_Props } from "../../cards/second-page/desktop/ORG_D_Results_Header_Props"
import { ORG_D_Results_MainEntry } from "../../cards/second-page/desktop/ORG_D_Results_MainEntry"
import { INDEX_TypedFlow_DWrapper } from "./styles/INDEX_TypedFlow_DWrapper"

export const INDEX_TypedFlow_D = () => {
  let { setReachTypedFlow, reachWelcome, setActualSessionStorage, diagnosisChoosed, inputTypesByUser } = useSessionStorage_typedFlow()
  const router = useRouter()

  const { secondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()

  useEffect(() => {
    if (!reachWelcome || diagnosisChoosed === "" || secondpageFiltersORG === "") {
      router.push("/ORG/welcome")
    }
  }, [])

  useEffect(() => {
    if (reachWelcome) {
      setReachTypedFlow(true)
    }
  }, [])

  const { modalShowedCtx } = useCtx_ShowModal()
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <>
      {secondpageFiltersORG !== "" && (
        <INDEX_TypedFlow_DWrapper ORGShowFullMapFilter={ORGShowFullMapFilter && router.pathname === `${path.dirname(router.pathname)}/${path.basename(router.pathname)}`}>
          <ORG_D_Results_Header_Props
            titleToFormat={inputTypesByUser}
            typedFlow={true}
          />

          <ORG_D_Results_MainEntry
            isTypedFlow={true}
            titleToFormat={inputTypesByUser}
          />

          <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
        </INDEX_TypedFlow_DWrapper>
      )}
    </>
  )
}
