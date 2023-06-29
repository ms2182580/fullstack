import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { useORG_Ctx_filtersLeftMobile } from "../../../../../context/ORG_CtxFiltersLeftMobile_Provider.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { ST_M_Results_CardNoFilters } from "./ST_M_Results_CardNoFilters.js"
import { ST_M_Results_CardWithFilters } from "./ST_M_Results_CardWithFilters.js"
import { ST_M_Results_ChoisepathWrapper } from "./styles/ST_M_Results_ChoisepathWrapper.js"

export const ST_M_Results_Choisepath = () => {
  const [filterHaveAtLeastOneValueState, setFilterHaveAtLeastOneValueState] = useState(false)

  const { pagination } = useORG_Ctx_FetchNoFiltersMobile()
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeftMobile()

  useEffect(() => {
    let filterHaveAtLeastOneValue = Object.values(filterData).some((x) => x.length > 0)
    if (filterHaveAtLeastOneValue) {
      setFilterHaveAtLeastOneValueState(true)
    } else {
      setFilterHaveAtLeastOneValueState(false)
    }
  }, [filterData, setFilterData, pagination])

  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  return (
    <ST_M_Results_ChoisepathWrapper
      mustShowFiltersMobile={mustShowFiltersMobile}
      id="topOfSTL">
      {filterHaveAtLeastOneValueState ? (
        <>
          <ST_M_Results_CardWithFilters />
        </>
      ) : (
        <>
          <ST_M_Results_CardNoFilters />
        </>
      )}
    </ST_M_Results_ChoisepathWrapper>
  )
}
