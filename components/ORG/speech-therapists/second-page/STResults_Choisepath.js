import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_filtersLeft } from "../../../../context/ORG_CtxFiltersLeft_Provider"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { STResults_CardNoFilters } from "./desktop/STResults_CardNoFilters"
import { STResults_CardWithFilters } from "./desktop/STResults_CardWithFilters"
import { STResults_ChoisepathWrapper } from "./styles/STResults_ChoiseWrapper"

export const STResults_Choisepath = () => {
  const [filterHaveAtLeastOneValueState, setFilterHaveAtLeastOneValueState] = useState(false)
  const { pagination } = useORG_Ctx_FetchNoFilters()
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeft()

  const { isMobile } = useWidthWindow1024()

  useEffect(() => {
    let filterHaveAtLeastOneValue = Object.values(filterData).some((x) => x.length > 0)
    if (filterHaveAtLeastOneValue) {
      setFilterHaveAtLeastOneValueState(true)
    } else {
      setFilterHaveAtLeastOneValueState(false)
    }
  }, [filterData, setFilterData, pagination])

  return (
    <STResults_ChoisepathWrapper>
      {filterHaveAtLeastOneValueState && isMobile === false ? (
        <>
          <STResults_CardWithFilters />
        </>
      ) : filterHaveAtLeastOneValueState === false && isMobile === false ? (
        <>
          <STResults_CardNoFilters />
        </>
      ) : filterHaveAtLeastOneValueState && isMobile ? (
        <>
          {/* <SpeechTherapistsCardWithFilterMobile /> */}
        </>
      ) : filterHaveAtLeastOneValueState === false && isMobile ? (
        <>
          {/* <SpeechTherapistsCardNoFilterMobile /> */}
        </>
      ) : null}
    </STResults_ChoisepathWrapper>
  )
}
