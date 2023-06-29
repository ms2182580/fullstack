import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { useORG_Ctx_filtersLeftDesktop } from "../../../../../context/ORG_CtxFiltersLeftDesktop_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ST_D_Results_CardNoFilters } from "./ST_D_Results_CardNoFilters"
import { ST_D_Results_CardWithFilters } from "./ST_D_Results_CardWithFilters"
import { ST_D_Results_ChoisepathWrapper } from "./styles/ST_D_Results_ChoisepathWrapper"

export const ST_D_Results_Choisepath = () => {
  const [filterHaveAtLeastOneValueState, setFilterHaveAtLeastOneValueState] = useState(false)
  const { pagination } = useORG_Ctx_FetchNoFiltersDesktop()
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeftDesktop()


  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  useEffect(() => {
    let filterHaveAtLeastOneValue = Object.values(filterData).some((x) => x.length > 0)
    if (filterHaveAtLeastOneValue) {
      setFilterHaveAtLeastOneValueState(true)
    } else {
      setFilterHaveAtLeastOneValueState(false)
    }
  }, [filterData, setFilterData, pagination])

  return (
    <ST_D_Results_ChoisepathWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      {filterHaveAtLeastOneValueState ? (
        <>
          <ST_D_Results_CardWithFilters />
        </>
      ) : (
        <>
          <ST_D_Results_CardNoFilters />
        </>
      )}

      {/* {filterHaveAtLeastOneValueState && isMobile === false ? (
        <>
          <ST_Desktop_Results_CardWithFilters />
        </>
      ) : filterHaveAtLeastOneValueState === false && isMobile === false ? (
        <>
          <ST_Desktop_Results_CardNoFilters />
        </>
      ) : filterHaveAtLeastOneValueState && isMobile ? (
            <>
              <SpeechTherapistsCardWithFilterMobile />
            </>
      ) : filterHaveAtLeastOneValueState === false && isMobile ? (
              <>
                <SpeechTherapistsCardNoFilterMobile />
              </>
      ) : null} */}
    </ST_D_Results_ChoisepathWrapper>
  )
}
