import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useEffect } from "react"
import { ORG_D_Results_Header } from "../../flow/second-page/desktop/ORG_D_Results_Header"
import { ORG_D_Results_MainEntry } from "../../flow/second-page/desktop/ORG_D_Results_MainEntry"
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

  return (
    <INDEX_TypedFlow_DWrapper>
      <ORG_D_Results_Header />

      <ORG_D_Results_MainEntry />
    </INDEX_TypedFlow_DWrapper>
  )
}
