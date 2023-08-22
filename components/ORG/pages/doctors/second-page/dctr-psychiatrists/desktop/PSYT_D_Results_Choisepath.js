import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { PSYT_D_Results_CardNoFilters } from "./PSYT_D_Results_CardNoFilters.js"
import { PSYT_D_Results_ChoisepathWrapper } from "./styles/PSYT_D_Results_ChoisepathWrapper.js"

export const PSYT_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <PSYT_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <PSYT_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </PSYT_D_Results_ChoisepathWrapper>
  )
}
