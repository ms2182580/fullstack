
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { ORG_D_Results_CardNoFilters } from "./ORG_D_Results_CardNoFilters.js"
import { ORG_D_Results_ChoisepathWrapper } from "./styles/ORG_D_Results_ChoisepathWrapper.js"

export const ORG_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <ORG_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <ORG_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </ORG_D_Results_ChoisepathWrapper>
  )
}
