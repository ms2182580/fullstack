import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { SLP_D_Results_CardNoFilters } from "./SLP_D_Results_CardNoFilters.js"
import { SLP_D_Results_ChoisepathWrapper } from "./styles/SLP_D_Results_ChoisepathWrapper.js"

export const SLP_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <SLP_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <SLP_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </SLP_D_Results_ChoisepathWrapper>
  )
}
