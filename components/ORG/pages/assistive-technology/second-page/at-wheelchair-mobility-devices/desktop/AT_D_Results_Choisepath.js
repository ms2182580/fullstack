import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { AT_D_Results_CardNoFilters } from "./AT_D_Results_CardNoFilters.js"
import { AT_D_Results_ChoisepathWrapper } from "./styles/AT_D_Results_ChoisepathWrapper.js"

export const AT_D_Results_Choisepath = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  return (
    <AT_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>

      <AT_D_Results_CardNoFilters />

      {/* {filterHaveAtLeastOneValueState ? (
        <>
          <AT_D_Results_CardWithFilters />
        </>
      ) : (
        <>
          <AT_D_Results_CardNoFilters />
        </>
      )} */}
    </AT_D_Results_ChoisepathWrapper>
  )
}
