import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { MH_D_Results_CardNoFilters } from "./MH_D_Results_CardNoFilters.js"
import { MH_D_Results_ChoisepathWrapper } from "./styles/MH_D_Results_ChoisepathWrapper.js"

export const MH_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <MH_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <MH_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </MH_D_Results_ChoisepathWrapper>
  )
}
