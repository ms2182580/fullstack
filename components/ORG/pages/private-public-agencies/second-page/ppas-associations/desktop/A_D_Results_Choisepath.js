import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { A_D_Results_CardNoFilters } from "./A_D_Results_CardNoFilters.js"
import { A_D_Results_ChoisepathWrapper } from "./styles/A_D_Results_ChoisepathWrapper.js"

export const A_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <A_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <A_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
           <p>Component with filters</p>
        </>
      ) : (
        <>
          <p>Component without filters</p>
        </>
      )} */}
    </A_D_Results_ChoisepathWrapper>
  )
}
