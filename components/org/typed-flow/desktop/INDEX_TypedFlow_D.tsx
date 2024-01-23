import { InFrontModal_D_Wrapper } from "@/components/inFront_D/styles/InFrontModal_D_Wrapper"
import { useCtx_ShowModal } from "@/context/Ctx_ShowModal"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { ORG_D_Results_Header } from "../../cards/second-page/desktop/ORG_D_Results_Header"
import { ORG_D_Results_MainEntry } from "../../cards/second-page/desktop/ORG_D_Results_MainEntry"
import { INDEX_TypedFlow_DWrapper } from "./styles/INDEX_TypedFlow_DWrapper"

export const INDEX_TypedFlow_D = () => {
  /* 
  Change this context for other with just what the user type
  */
  let {
    setReachTypedFlow,
    reachWelcome,
    setActualSessionStorage,
    diagnosisChoosed,
    inputTypesByUser,
  }: any = useSessionStorage_typedFlow()

  // const router = useRouter()

  const { secondpageFiltersORG }: any = useORG_Ctx_D_SecondpageFilters()

  // useEffect(() => {
  //   if (
  //     !reachWelcome ||
  //     diagnosisChoosed === "" ||
  //     secondpageFiltersORG === ""
  //   ) {
  //     router.push(`/${ALL_ROUTES.ORG}/${ALL_ROUTES.WELCOME}`)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (reachWelcome) {
  //     setReachTypedFlow(true)
  //   }
  // }, [])

  const { modalShowedCtx }: any = useCtx_ShowModal()
  // const { ORGShowFullMapFilter }: any = useORG_CtxShowFiltersDesktop()

  return (
    <>
      {/* {secondpageFiltersORG !== "" && (
        <INDEX_TypedFlow_DWrapper>
          <ORG_D_Results_Header
            titleToFormat={inputTypesByUser}
            isTypedFlow={true}
          />

          <ORG_D_Results_MainEntry
            isTypedFlow={true}
            titleToFormat={inputTypesByUser}
          />

          <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
        </INDEX_TypedFlow_DWrapper>
      )} */}

      <INDEX_TypedFlow_DWrapper>
        <ORG_D_Results_Header
          titleToFormat={inputTypesByUser}
          isTypedFlow={true}
        />

        <ORG_D_Results_MainEntry
          isTypedFlow={true}
          titleToFormat={inputTypesByUser}
        />

        <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
      </INDEX_TypedFlow_DWrapper>
    </>
  )
}
