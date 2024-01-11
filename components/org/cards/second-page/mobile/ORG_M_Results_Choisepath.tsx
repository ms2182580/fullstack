import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { ORG_D_Results_CardNoFilters } from "../desktop/ORG_D_Results_CardNoFilters"
import { ORG_D_Results_ChoisepathWrapper } from "../desktop/styles/ORG_D_Results_ChoisepathWrapper.js"
import { ORG_M_Results_CardTypedFlow } from "./ORG_M_Results_CardTypedFlow"

export type ORG_D_Results_Choisepath_PROPS = {
  isTypedFlow: boolean
}

export const ORG_M_Results_Choisepath = ({
  isTypedFlow = false,
}: ORG_D_Results_Choisepath_PROPS) => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter }: any =
    useORG_CtxShowFiltersDesktop()

  return (
    <ORG_D_Results_ChoisepathWrapper>
      {isTypedFlow ? (
        <>
          <ORG_M_Results_CardTypedFlow />
        </>
      ) : (
        <>
          <ORG_D_Results_CardNoFilters />
        </>
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
