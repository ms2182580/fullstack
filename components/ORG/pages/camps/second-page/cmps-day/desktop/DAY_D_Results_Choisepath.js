import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { DAY_D_Results_CardNoFilters } from "./DAY_D_Results_CardNoFilters.js"
import { DAY_D_Results_ChoisepathWrapper } from "./styles/DAY_D_Results_ChoisepathWrapper.js"

export const DAY_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <DAY_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <DAY_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </DAY_D_Results_ChoisepathWrapper>
  )
}
