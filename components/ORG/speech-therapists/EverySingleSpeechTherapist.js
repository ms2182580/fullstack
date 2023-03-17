import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_filtersLeft } from "../../../context/ORG_CtxFiltersLeft_Provider"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { SpeechTherapistsCardNoFilterMobile } from "./second-page/mobile/SpeechTherapistsCardNoFilterMobile"
import { SpeechTherapistsCardWithFilterMobile } from "./second-page/mobile/SpeechTherapistsCardWithFilterMobile"
import { SpeechTherapistsCardNoFilter } from "./SpeechTherapistsCardNoFilters.js"
import { SpeechTherapistsCardWithFilter } from "./SpeechTherapistsCardWithFilters.js"
import { EverySingleSpeechTherapistWrapper } from "./styles/EverySingleSpeechTherapistWrapper"

export const SpeechtherapistList = ({ widthWindow }) => {
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
    <EverySingleSpeechTherapistWrapper>
      {filterHaveAtLeastOneValueState && isMobile === false ? (
        <>
          <SpeechTherapistsCardWithFilter />
        </>
      ) : filterHaveAtLeastOneValueState === false && isMobile === false ? (
        <>
          <SpeechTherapistsCardNoFilter />
        </>
      ) : filterHaveAtLeastOneValueState && isMobile ? (
        <>
          <SpeechTherapistsCardWithFilterMobile />
        </>
      ) : filterHaveAtLeastOneValueState === false && isMobile ? (
        <>
          <SpeechTherapistsCardNoFilterMobile />
        </>
      ) : null}
    </EverySingleSpeechTherapistWrapper>
  )
}
