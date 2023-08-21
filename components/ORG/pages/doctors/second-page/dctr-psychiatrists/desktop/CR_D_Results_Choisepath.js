import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { CR_D_Results_CardNoFilters } from "./CR_D_Results_CardNoFilters.js"
import { CR_D_Results_ChoisepathWrapper } from "./styles/CR_D_Results_ChoisepathWrapper.js"

export const CR_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <CR_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <CR_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </CR_D_Results_ChoisepathWrapper>
  )
}
