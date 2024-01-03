import { InFrontModal_D_Wrapper } from "@/components/inFront_D/styles/InFrontModal_D_Wrapper"
import { useCtx_ShowModal } from "@/context/Ctx_ShowModal"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useORG_CtxShowFiltersDesktop } from "@/context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import { useRouter } from "next/router.js"
import { useEffect } from "react"
import { ORG_M_Results_Header } from "../../cards/second-page/mobile/ORG_M_Results_Header"
import { ORG_M_Results_MainEntry } from "../../cards/second-page/mobile/ORG_M_Results_MainEntry"

export const INDEX_TypedFlow_M = () => {
  let { setReachTypedFlow, reachWelcome, setActualSessionStorage, diagnosisChoosed, inputTypesByUser }: any = useSessionStorage_typedFlow()
  const router = useRouter()

  const { secondpageFiltersORG }: any = useORG_Ctx_D_SecondpageFilters()

  useEffect(() => {
    if (!reachWelcome || diagnosisChoosed === "" || secondpageFiltersORG === "") {
      router.push(`/${ALL_ROUTES.ORG}/${ALL_ROUTES.WELCOME}`)
    }
  }, [])

  useEffect(() => {
    if (reachWelcome) {
      setReachTypedFlow(true)
    }
  }, [])

  const { modalShowedCtx }: any = useCtx_ShowModal()
  const { ORGShowFullMapFilter }: any = useORG_CtxShowFiltersDesktop()

  return (
    <>
      {secondpageFiltersORG !== "" && (
        <div
        // ORGShowFullMapFilter={
        //     ORGShowFullMapFilter &&
        //     router.pathname ===
        //         `${path.dirname(router.pathname)}/${path.basename(
        //             router.pathname
        //         )}`
        // }
        >
          <ORG_M_Results_Header
            titleToFormat={inputTypesByUser}
            isTypedFlow={true}
          />

          <ORG_M_Results_MainEntry
            isTypedFlow={true}
            titleToFormat={inputTypesByUser}
          />

          <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
        </div>
      )}
    </>
  )
}
