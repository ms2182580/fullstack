import { EverySingleSpeechTherapistWrapper } from "./styles/EverySingleSpeechTherapistWrapper"
import { HeaderSPList } from "./HeaderSPList.js"
import { useEffect, useState } from "react"
import { SpeechTherapistsCardWithFilter } from "./SpeechTherapistsCardWithFilters.js"
import { SpeechTherapistsCardNoFilter } from "./SpeechTherapistsCardNoFilters.js"

export const SpeechtherapistList = ({ filterData, setFilterData }) => {
  const [filterHaveAtLeastOneValueState, setFilterHaveAtLeastOneValueState] =
    useState(false)

  useEffect(() => {
    let filterHaveAtLeastOneValue = Object.values(filterData).some(
      (x) => x.length > 0
    )
    if (filterHaveAtLeastOneValue) {
      setFilterHaveAtLeastOneValueState(true)
    } else {
      setFilterHaveAtLeastOneValueState(false)
    }
  }, [filterData, setFilterData])

  return (
    <EverySingleSpeechTherapistWrapper>
      <HeaderSPList />

      {filterHaveAtLeastOneValueState ? (
        <>
          <SpeechTherapistsCardWithFilter
            filterHaveAtLeastOneValueState={filterHaveAtLeastOneValueState}
            filterData={filterData}
          />
        </>
      ) : (
        <SpeechTherapistsCardNoFilter />
      )}
    </EverySingleSpeechTherapistWrapper>
  )
}
