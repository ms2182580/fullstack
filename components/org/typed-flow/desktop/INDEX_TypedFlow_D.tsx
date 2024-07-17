import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useEffect } from "react"
import { ORG_D_Results_Header } from "../../cards/second-page/desktop/ORG_D_Results_Header"
import { ORG_D_Results_MainEntry } from "../../cards/second-page/desktop/ORG_D_Results_MainEntry"
import { INDEX_TypedFlow_DWrapper } from "./styles/INDEX_TypedFlow_DWrapper"

export const INDEX_TypedFlow_D = ({ allBackendData }) => {
  const {
    reachTypedFlow,
    diagnosisChoosed,
    inputTypesByUser,
    setBackendDataState,
  }: any = useSessionStorage_typedFlow()

  useEffect(() => {
    setBackendDataState(allBackendData)
  }, [allBackendData])

  /* 
  !FH0
  Make this components work. Actual problems:
  1. Is not possible to reach 2° page of ORG
  2. Is not possible to reach 3° page of ORG
  3. The horizontal scroll is not working
  4. Check the correct design
  */

  // const router = useRouter()

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

  // const { ORGShowFullMapFilter }: any = useORG_CtxShowFiltersDesktop()

  return (
    <INDEX_TypedFlow_DWrapper>
      <ORG_D_Results_Header />

      <ORG_D_Results_MainEntry />
    </INDEX_TypedFlow_DWrapper>
  )
}
