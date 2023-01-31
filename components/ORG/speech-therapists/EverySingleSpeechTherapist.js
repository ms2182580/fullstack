import { EverySingleSpeechTherapistWrapper } from "./styles/EverySingleSpeechTherapistWrapper"
import { HeaderSPList } from "./HeaderSPList.js"
import { useEffect, useState } from "react"
import { SpeechTherapistsCardWithFilter } from "./SpeechTherapistsCardWithFilters.js"
import { SpeechTherapistsCardNoFilter } from "./SpeechTherapistsCardNoFilters.js"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_filtersLeft } from "../../../context/ORG_CtxFiltersLeft_Provider"
import { SpeechTherapistsCardNoFilterMobile } from "./second-page/SpeechTherapistCardMobile/SpeechTherapistsCardNoFilterMobile"
import { SpeechTherapistsCardWithFilterMobile } from "./second-page/SpeechTherapistCardMobile/SpeechTherapistsCardWithFilterMobile"

export const SpeechtherapistList = ({ widthWindow }) => {
  const [filterHaveAtLeastOneValueState, setFilterHaveAtLeastOneValueState] = useState(false)
  const { pagination } = useORG_Ctx_FetchNoFilters()
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeft()

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
      <HeaderSPList widthWindow={widthWindow} />
      {filterHaveAtLeastOneValueState && widthWindow > 768 ? (
        <>
          <SpeechTherapistsCardWithFilter />
        </>
      ) : filterHaveAtLeastOneValueState === false && widthWindow > 768 ? (
        <>
          <SpeechTherapistsCardNoFilter />
        </>
      ) : filterHaveAtLeastOneValueState && widthWindow <= 768 ? (
        <>
          <SpeechTherapistsCardWithFilterMobile />
        </>
      ) : filterHaveAtLeastOneValueState === false && widthWindow <= 768 ? (
        <>
          <SpeechTherapistsCardNoFilterMobile />
        </>
      ) : null}
    </EverySingleSpeechTherapistWrapper>
  )
}
