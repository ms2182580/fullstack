import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { CC_D_Results_CardNoFilters } from "./CC_D_Results_CardNoFilters.js"
import { CC_D_Results_ChoisepathWrapper } from "./styles/CC_D_Results_ChoisepathWrapper.js"

export const CC_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <CC_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <CC_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </CC_D_Results_ChoisepathWrapper>
  )
}
