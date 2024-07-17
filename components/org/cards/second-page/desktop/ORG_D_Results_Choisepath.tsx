import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ORG_D_Results_CardNoFilters } from "./ORG_D_Results_CardNoFilters"
import { ORG_D_Results_CardTypedFlow } from "./ORG_D_Results_CardTypedFlow"
import { ORG_D_Results_ChoisepathWrapper } from "./styles/ORG_D_Results_ChoisepathWrapper"

export type ORG_D_Results_Choisepath_PROPS = {
  isTypedFlow: boolean
}

export const ORG_D_Results_Choisepath = () => {
  const { reachTypedFlow, diagnosisChoosed, inputTypesByUser }: any =
    useSessionStorage_typedFlow()

  return (
    <ORG_D_Results_ChoisepathWrapper>
      {reachTypedFlow ? (
        <ORG_D_Results_CardTypedFlow />
      ) : (
        <ORG_D_Results_CardNoFilters />
      )}

      {/* {filterHaveAtLeastOneValueState && !isTypedFlow ? (
        <>
          <p>Component with filters</p>
        </>
      ) : !filterHaveAtLeastOneValueState && !isTypedFlow ? (
        <>
          <p>Component without filters</p>
        </>
      ) : (
        <>
          <p>TypeFlow component</p>
        </>
      )} */}
    </ORG_D_Results_ChoisepathWrapper>
  )
}
